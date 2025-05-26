from google import genai

client = genai.Client(api_key="AIzaSyCoYVhvGbrmb7eBCNE35CC6rp53TYsNVt8")

response = client.models.generate_content(
    model="gemini-2.0-flash", contents="Prompt Ejemplo"
)
print(response.text)