"use client"

import { z } from "zod"

export const formSchema = z.object({
  text: z.string().min(5).max(50),
})
