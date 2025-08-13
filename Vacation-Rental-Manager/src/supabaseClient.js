import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xizrrrhjpazhpntbyylb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhpenJycmhqcGF6aHBudGJ5eWxiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUxMDIwNTEsImV4cCI6MjA3MDY3ODA1MX0.pCeKsiYWYGPgga8JbsUtvXeVmCy3I3yc2sm6YxP5iW0'

export const supabase = createClient(supabaseUrl, supabaseKey)