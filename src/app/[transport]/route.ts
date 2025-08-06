import { createMcpHandler } from "@vercel/mcp-adapter";
import z from "zod";

const handler = createMcpHandler(
    (server) => {
        server.tool(
            "courseRecommender",
            "Give a course recommendation based on the user's interests and skills.",
            {
                experienceLevel: z.enum(["beginner", "intermediate", "advanced"]),
                
            },
            ({ experienceLevel }) => ({
                content: [
                    {
                        type: "text",
                        text: `I recommend you to take the ${
                            experienceLevel === "beginner"
                                ? "Introduction to Programming"
                                : "Advanced Algorithms and Data Structures"
                        } course.`,
                    },
                ],
            })
        )
    },
    {
        capabilities: {
            tools: {
                courseRecommender: {
                    description: "Recommend a course based on user experience level.",
                },
            },
        },
    },
    {
       redisUrl: process.env.REDIS_URL,
       sseEndpoint: "/sse",
       streamableHttpEndpoint: "/mcp",
       verboseLogs: true,
       maxDuration: 60, 
    }

);

export { handler as GET, handler as POST , handler as DELETE };
