import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yczteajlplpwzajkzylp.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljenRlYWpscGxwd3phamt6eWxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI3OTE3ODMsImV4cCI6MjAxODM2Nzc4M30.GhJN8pKOG94gzhSOsbVo4XoUHXG8JCazE5aG51M5DdU";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
