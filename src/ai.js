

import { InferenceClient  } from '@huggingface/inference'

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`

const hf = new InferenceClient('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')

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const response = await hf.chatCompletion({
            model: "Qwen/Qwen3-4B-Instruct-2507",  // Changed from Mixtral
            messages: [
              { role: "system", content: SYSTEM_PROMPT },
              { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
             ],
            max_tokens: 1024,
           })
        return response.choices[0].message.content
    } catch (err) {
    console.error('Full error object:', err)
    // If the SDK wraps the response, try to access it
    console.error('Response body:', err.response?.data || err.message)
}
}