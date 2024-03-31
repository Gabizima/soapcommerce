import { createClient } from '@supabase/supabase-js';

// Assurez-vous que vos variables d'environnement sont correctement configurées
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

// Crée le client Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
