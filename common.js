import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
const supabase = createClient('https://rkxaprpcetborlslblqj.supabase.co', 'sb_publishable_NpdAjISRkvlmuO6cY3xljA_79dxiqkZ')

export const common = {
    // Enregistre la visite
    async logVisit(pageName, membreId = null) {
        await supabase.from('logs_presence').insert([{ 
            membre_id: membreId, 
            page_url: pageName 
        }])
    },
    
    // Vérifie si le membre existe
    async findMember(prenom, nom) {
        return await supabase.from('membres').select('id').ilike('prenom', prenom).ilike('nom', nom).single()
    },

    // Crée un membre
    async createMember(prenom, nom) {
        return await supabase.from('membres').insert([{ prenom, nom }]).select('id').single()
    }
}
