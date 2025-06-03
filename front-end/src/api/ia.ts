import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyCoYVhvGbrmb7eBCNE35CC6rp53TYsNVt8",
});

export async function fetchNoticesFromGemini(prompt: string) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: [
      {
        role: "user",
        parts: [
          {
            text: `${prompt}. Devuelve solo un JSON válido con esta estructura exacta: {"noticias":[{"title":"...", "description":"..."}]}`,
          },
        ],
      },
    ],
  });

  let rawText = response.text.trim();

  // Limpieza si Gemini devuelve JSON envuelto en markdown
  if (rawText.startsWith("```json")) rawText = rawText.slice(7).trim();
  if (rawText.endsWith("```")) rawText = rawText.slice(0, -3).trim();

  try {
    return JSON.parse(rawText);
  } catch (err) {
    console.error("Error al parsear JSON de Gemini:", rawText);
    throw new Error("Respuesta inválida del modelo IA.");
  }
}
