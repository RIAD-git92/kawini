
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin, Clock, Star } from 'lucide-react';

const Particuliers = () => {
  const formations = [
    {
      id: 1,
      titre: "Formation Excel Avancé",
      centre: "Centre Formation Pro",
      lieu: "Lyon",
      duree: "3 jours",
      prix: "450€",
      note: 4.8,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      titre: "Anglais des Affaires",
      centre: "Language Institute",
      lieu: "Paris",
      duree: "2 mois",
      prix: "890€",
      note: 4.9,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      titre: "Développement Web",
      centre: "Tech Academy",
      lieu: "Marseille",
      duree: "6 mois",
      prix: "2500€",
      note: 4.7,
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=300&h=200&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero section */}
      <div className="bg-gradient-to-br from-beige-50 to-forest-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-brown-800 mb-4">
              Trouvez votre formation idéale
            </h1>
            <p className="text-xl text-brown-600 max-w-3xl mx-auto">
              Découvrez des centaines de formations proposées par les meilleurs centres 
              de votre région. Développez vos compétences et boostez votre carrière.
            </p>
          </div>

          {/* Barre de recherche */}
          <Card className="max-w-4xl mx-auto shadow-lg">
            <CardContent className="p-6">
              <form className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="recherche">Que voulez-vous apprendre ?</Label>
                    <Input 
                      id="recherche" 
                      placeholder="Ex: Excel, Anglais, Comptabilité..."
                      className="border-beige-300 focus:border-forest-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="localisation">Où ?</Label>
                    <Input 
                      id="localisation" 
                      placeholder="Ville ou code postal"
                      className="border-beige-300 focus:border-forest-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="domaine">Domaine</Label>
                    <Select>
                      <SelectTrigger className="border-beige-300 focus:border-forest-500">
                        <SelectValue placeholder="Tous les domaines" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="informatique">Informatique</SelectItem>
                        <SelectItem value="langues">Langues</SelectItem>
                        <SelectItem value="comptabilite">Comptabilité</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                        <SelectItem value="rh">Ressources Humaines</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-forest-500 hover:bg-forest-600 text-white"
                >
                  <Search className="h-5 w-5 mr-2" />
                  Rechercher
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Formations populaires */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brown-800 text-center mb-12">
            Formations populaires
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {formations.map((formation) => (
              <Card key={formation.id} className="shadow-lg hover:shadow-xl transition-shadow">
                <div 
                  className="h-48 bg-cover bg-center rounded-t-lg"
                  style={{ backgroundImage: `url(${formation.image})` }}
                />
                <CardHeader>
                  <CardTitle className="text-xl text-brown-800">
                    {formation.titre}
                  </CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-brown-600">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span>{formation.note}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{formation.lieu}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{formation.duree}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-brown-600 mb-4">
                    Proposé par <strong>{formation.centre}</strong>
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-forest-600">
                      {formation.prix}
                    </span>
                    <Button className="bg-forest-500 hover:bg-forest-600 text-white">
                      Voir détails
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              className="border-forest-500 text-forest-600 hover:bg-forest-50"
            >
              Voir toutes les formations
            </Button>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="bg-forest-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt à commencer votre formation ?
          </h2>
          <p className="text-forest-100 text-xl mb-8 max-w-2xl mx-auto">
            Inscrivez-vous gratuitement et accédez à notre catalogue complet de formations.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-forest-600 hover:bg-beige-50 px-8 py-3 text-lg"
          >
            Créer mon compte gratuit
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Particuliers;
