// import handleError from "@/lib/handlers/error";
// import { ValidationError } from "@/lib/http-errors";
// import { AIAnswerSchema } from "@/lib/validations";
// import { openai } from "@ai-sdk/openai";
// import { generateText } from "ai";
// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   const { question, content, userAnswer } = await req.json();

//   try {
//     const validatedData = AIAnswerSchema.safeParse({
//       question,
//       content,
//     });

//     if (!validatedData.success) {
//       throw new ValidationError(validatedData.error.flatten().fieldErrors);
//     }

//     const { text } = await generateText({
//       model: openai("gpt-4o-mini"),
//       prompt: `Generate a markdown-formatted response to the following question: "${question}".

//       Consider the provided context:
//       **Context:** ${content}

//       Also, prioritize and incorporate the user's answer when formulating your response:
//       **User's Answer:** ${userAnswer}

//       Prioritize the user's answer only if it's correct. If it's incomplete or incorrect, improve or correct it while keeping the response concise and to the point.
//       Provide the final answer in markdown format.`,
//       system:
//         "You are a helpful assistant that provides informative responses in markdown format. Use appropriate markdown syntax for headings, lists, code blocks, and emphasis where necessary For code blocks, use short-form smaller case language identifiers (e.g., 'js' for JavaScript, 'py' for Python, 'ts' for TypeScript, 'html' for HTML, 'css' for CSS, etc.",
//     });

//     return NextResponse.json({ success: true, data: text }, { status: 200 });
//   } catch (error) {
//     return handleError(error, "api") as APIErrorResponse;
//   }
// }

import handleError from "@/lib/handlers/error";
import { ValidationError } from "@/lib/http-errors";
import { AIAnswerSchema } from "@/lib/validations";
import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // 1. Destructure the new Medical Fields
  // Note: Ensure your client-side fetch sends these extra fields!
  const { question, content, userAnswer, patientAge, gender, urgency } =
    await req.json();

  try {
    const validatedData = AIAnswerSchema.safeParse({
      question,
      content,
    });

    if (!validatedData.success) {
      throw new ValidationError(validatedData.error.flatten().fieldErrors);
    }

    // 2. Define the Medical Persona
    const systemPersona = `
      You are a Senior Chief Medical Officer and Clinical Consultant.
      Your role is to assist clinicians by providing a structured, evidence-based second opinion on patient cases.

      Formatting Rules:
      - Use Markdown.
      - Do NOT use code blocks unless specifically asked for medical data parsing.
      - Structure your response with these specific headings:
        ### 1. Differential Diagnosis
        ### 2. Clinical Assessment
        ### 3. Recommended Next Steps (Labs/Imaging)
        ### 4. Treatment Recommendations
    `;

    // 3. Construct the Patient Case Prompt
    const medicalCasePrompt = `
      Please review the following medical case and provide a clinical consultation.

      **Case Title (Chief Complaint):** "${question}"
      
      **Patient History & Details:** ${content}

      **Patient Demographics (if available):**
      - Age: ${patientAge || "Not stated"}
      - Gender: ${gender || "Not stated"}
      - Urgency: ${urgency || "Standard"}

      **Clinician's Initial Thoughts (User Answer):** ${userAnswer || "None provided."}
      
      Instructions:
      - Prioritize the clinician's initial thoughts only if they are medically sound.
      - Identify any "Red Flags" or critical urgency factors immediately.
      - Keep the tone professional, concise, and objective.
    `;

    const { text } = await generateText({
      model: openai("gpt-4o-mini"),
      prompt: medicalCasePrompt,
      system: systemPersona,
    });

    return NextResponse.json({ success: true, data: text }, { status: 200 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}
