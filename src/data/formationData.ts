
export interface Formation {
  id: number;
  titre: string;
  centre: string;
  lieu: string;
  duree: string;
  prix: string;
  note: number;
  participants: number;
  niveau: string;
  domaine: string;
  image: string;
}

export const formations: Formation[] = [
  {
    id: 1,
    titre: "Formation Excel Avancé",
    centre: "Centre Formation Pro",
    lieu: "Alger",
    duree: "3 jours",
    prix: "45000 DA",
    note: 4.8,
    participants: 12,
    niveau: "Avancé",
    domaine: "Bureautique",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop"
  },
  {
    id: 2,
    titre: "Anglais des Affaires",
    centre: "Language Institute",
    lieu: "Oran",
    duree: "2 mois",
    prix: "89000 DA",
    note: 4.9,
    participants: 8,
    niveau: "Intermédiaire",
    domaine: "Langues",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop"
  },
  {
    id: 3,
    titre: "Développement Web",
    centre: "Tech Academy",
    lieu: "Constantine",
    duree: "6 mois",
    prix: "250000 DA",
    note: 4.7,
    participants: 15,
    niveau: "Débutant",
    domaine: "Informatique",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=300&h=200&fit=crop"
  },
  {
    id: 4,
    titre: "Comptabilité Générale",
    centre: "Compta Expert",
    lieu: "Annaba",
    duree: "4 semaines",
    prix: "68000 DA",
    note: 4.6,
    participants: 10,
    niveau: "Débutant",
    domaine: "Comptabilité",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop"
  },
  {
    id: 5,
    titre: "Marketing Digital",
    centre: "Digital School",
    lieu: "Sétif",
    duree: "8 semaines",
    prix: "120000 DA",
    note: 4.8,
    participants: 20,
    niveau: "Intermédiaire",
    domaine: "Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop"
  },
  {
    id: 6,
    titre: "Photoshop Professionnel",
    centre: "Creative Studio",
    lieu: "Tlemcen",
    duree: "5 jours",
    prix: "59000 DA",
    note: 4.7,
    participants: 6,
    niveau: "Intermédiaire",
    domaine: "Design",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=300&h=200&fit=crop"
  }
];
