import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, MapPin, Clock, Star, Filter, Users } from 'lucide-react';

const Formations = () => {
  const formations = [
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

  const getNiveauColor = (niveau: string) => {
    switch (niveau) {
      case 'Débutant': return 'bg-forest-100 text-forest-700';
      case 'Intermédiaire': return 'bg-beige-200 text-brown-700';
      case 'Avancé': return 'bg-brown-100 text-brown-800';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Header avec recherche */}
      <div className="bg-gradient-to-br from-forest-50 to-beige-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-brown-800 text-center mb-8">
            Catalogue des Formations
          </h1>
          
          {/* Barre de recherche avancée */}
          <Card className="max-w-6xl mx-auto shadow-lg">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-5 gap-4 mb-4">
                <div className="md:col-span-2">
                  <Label htmlFor="recherche">Formation</Label>
                  <Input 
                    id="recherche" 
                    placeholder="Rechercher une formation..."
                    className="border-beige-300 focus:border-forest-500"
                  />
                </div>
                <div>
                  <Label htmlFor="ville">Ville</Label>
                  <Input 
                    id="ville" 
                    placeholder="Toutes les villes"
                    className="border-beige-300 focus:border-forest-500"
                  />
                </div>
                <div>
                  <Label htmlFor="domaine">Domaine</Label>
                  <Select>
                    <SelectTrigger className="border-beige-300 focus:border-forest-500">
                      <SelectValue placeholder="Tous" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="informatique">Informatique</SelectItem>
                      <SelectItem value="langues">Langues</SelectItem>
                      <SelectItem value="comptabilite">Comptabilité</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="bureautique">Bureautique</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="niveau">Niveau</Label>
                  <Select>
                    <SelectTrigger className="border-beige-300 focus:border-forest-500">
                      <SelectValue placeholder="Tous" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="debutant">Débutant</SelectItem>
                      <SelectItem value="intermediaire">Intermédiaire</SelectItem>
                      <SelectItem value="avance">Avancé</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 items-end">
                <Button className="bg-forest-500 hover:bg-forest-600 text-white flex-1 sm:flex-none">
                  <Search className="h-4 w-4 mr-2" />
                  Rechercher
                </Button>
                <Button variant="outline" className="border-brown-500 text-brown-600 hover:bg-brown-50">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtres avancés
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Résultats */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-brown-800">
              {formations.length} formations trouvées
            </h2>
            <Select>
              <SelectTrigger className="w-48 border-beige-300">
                <SelectValue placeholder="Trier par..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pertinence">Pertinence</SelectItem>
                <SelectItem value="prix-asc">Prix croissant</SelectItem>
                <SelectItem value="prix-desc">Prix décroissant</SelectItem>
                <SelectItem value="note">Mieux notés</SelectItem>
                <SelectItem value="date">Plus récents</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {formations.map((formation) => (
              <Card key={formation.id} className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div 
                  className="h-48 bg-cover bg-center rounded-t-lg"
                  style={{ backgroundImage: `url(${formation.image})` }}
                />
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg text-brown-800 line-clamp-2">
                      {formation.titre}
                    </CardTitle>
                    <Badge className={getNiveauColor(formation.niveau)}>
                      {formation.niveau}
                    </Badge>
                  </div>
                  <p className="text-brown-600 font-medium">{formation.centre}</p>
                  <Badge variant="outline" className="w-fit border-forest-500 text-forest-600">
                    {formation.domaine}
                  </Badge>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-sm text-brown-600 mb-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{formation.lieu}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{formation.duree}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-brown-600 mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span>{formation.note}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{formation.participants} places</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-forest-600">
                      {formation.prix}
                    </span>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-forest-500 text-forest-600 hover:bg-forest-50"
                      >
                        Détails
                      </Button>
                      <Button 
                        size="sm"
                        className="bg-forest-500 hover:bg-forest-600 text-white"
                      >
                        Contacter
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex gap-2">
              <Button variant="outline" disabled>Précédent</Button>
              <Button className="bg-forest-500 text-white">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Suivant</Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Formations;
