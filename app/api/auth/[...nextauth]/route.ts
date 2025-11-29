import { handlers } from "@/auth";

export const runtime = "nodejs"; // 🔥 FORCE NODE RUNTIME

export const { GET, POST } = handlers;
