from fastapi import FastAPI
from pydantic import BaseModel
import google.generativeai as genai
import json
from fastapi.middleware.cors import CORSMiddleware


genai.configure(api_key="AIzaSyCoYVhvGbrmb7eBCNE35CC6rp53TYsNVt8")


origins = [
    "http://localhost:5173",
]

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class PromptRequest(BaseModel):
    query: str


@app.post("/notices")
def get_notices(request: PromptRequest):
    model = genai.GenerativeModel("gemini-1.5-flash")

    try:
        response = model.generate_content(
            f"{request.query}. Devuélveme exclusivamente un JSON válido. Ejemplo: {{\"notices\": [{{\"title\": \"Noticia 1\"}}, {{\"title\": \"Noticia 2\"}}]}}. No pongas explicaciones ni texto antes o después."
        )

        raw_text = response.text.strip()

        
        if raw_text.startswith("```json"):
            raw_text = raw_text[len("```json"):].strip()
        if raw_text.endswith("```"):
            raw_text = raw_text[:-3].strip()

        data = json.loads(raw_text)
        return {"respuesta": data}

    except json.JSONDecodeError as e:
        return {
            "error": "Error al parsear el JSON generado por Gemini.",
            "detalle": str(e),
            "respuesta_cruda": raw_text
        }

    except Exception as e:
        return {
            "error": "Error general en la generación de contenido.",
            "detalle": str(e)
        }
