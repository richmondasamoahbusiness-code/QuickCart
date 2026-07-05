import { serve } from "inngest/nextjs";
import { inngest, syncUserCreation, syncUserDeletion, syncUserUpdation } from "@/config/inngest";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation, 
    syncUserDeletion,
    syncUserUpdation,
  ],
});