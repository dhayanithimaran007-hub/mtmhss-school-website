import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jckawngsfqbykoyyzfem.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impja2F3bmdzZnFieWtveXl6ZmVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI5OTU0ODQsImV4cCI6MjA5ODU3MTQ4NH0.IQ7WT4u3Qr1oIuuUQKZv1-Zy3_JiRwETj-l9cxvZt7A";

export const supabase = createClient(supabaseUrl, supabaseKey);