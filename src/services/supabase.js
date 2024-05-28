import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://roqczjyhmzimnkopysnv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvcWN6anlobXppbW5rb3B5c252Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYzMzI4MDcsImV4cCI6MjAzMTkwODgwN30.hldolNqQ3v3mqeOaG0oftI0ofXLKLUgOyzCCzqtZtnk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
