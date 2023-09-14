import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import { getAlllPromptsRoute } from "./routes/get-all-prompts";
import { uploadVideoRoute } from "./routes/upload-video";
import { createTranscriptionRoute } from "./routes/create-transcription";
import { generaAICompletionRoute } from "./routes/generate-ai-completion";

const app = fastify()

app.register(fastifyCors, {
    origin: '*',
});

app.register(getAlllPromptsRoute)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)
app.register(generaAICompletionRoute)

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP Server Running!')
})