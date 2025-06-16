
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Building, Users, BookOpen, CheckCircle } from 'lucide-react';

const CentresFormation = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero section */}
      <div className="bg-gradient-to-br from-forest-50 to-beige-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-brown-800 mb-4">
              Centres de Formation
            </h1>
            <p className="text-xl text-brown-600 max-w-3xl mx-auto">
              Rejoignez notre réseau et développez votre visibilité auprès de milliers de particuliers 
              à la recherche de formations dans votre région.
            </p>
          </div>

          {/* Avantages */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="bg-forest-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-forest-600" />
                </div>
                <h3 className="text-lg font-semibold text-brown-800 mb-2">Large Audience</h3>
                <p className="text-brown-600">Accédez à des milliers de candidats potentiels</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="bg-forest-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Building className="h-6 w-6 text-forest-600" />
                </div>
                <h3 className="text-lg font-semibold text-brown-800 mb-2">Gestion Simplifiée</h3>
                <p className="text-brown-600">Outils intégrés pour gérer vos formations</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="bg-forest-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-forest-600" />
                </div>
                <h3 className="text-lg font-semibold text-brown-800 mb-2">Catalogue Complet</h3>
                <p className="text-brown-600">Présentez toutes vos formations en un lieu</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Formulaire d'inscription */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-brown-800">
                  Demande d'accès - Centre de Formation
                </CardTitle>
                <p className="text-brown-600">
                  Remplissez ce formulaire pour rejoindre notre réseau
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nom">Nom du centre *</Label>
                      <Input 
                        id="nom" 
                        placeholder="Nom de votre centre"
                        className="border-beige-300 focus:border-forest-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="type">Type de formation *</Label>
                      <Input 
                        id="type" 
                        placeholder="Ex: Informatique, Langues..."
                        className="border-beige-300 focus:border-forest-500"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email professionnel *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="contact@votrecentre.fr"
                      className="border-beige-300 focus:border-forest-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="adresse">Adresse complète *</Label>
                    <Textarea 
                      id="adresse" 
                      placeholder="Adresse de votre centre de formation"
                      className="border-beige-300 focus:border-forest-500"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="telephone">Téléphone *</Label>
                      <Input 
                        id="telephone" 
                        placeholder="01 23 45 67 89"
                        className="border-beige-300 focus:border-forest-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="siret">Numéro SIRET</Label>
                      <Input 
                        id="siret" 
                        placeholder="12345678901234"
                        className="border-beige-300 focus:border-forest-500"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="presentation">Présentation de votre centre</Label>
                    <Textarea 
                      id="presentation" 
                      placeholder="Décrivez votre centre, vos spécialités, votre expérience..."
                      rows={4}
                      className="border-beige-300 focus:border-forest-500"
                    />
                  </div>

                  <div className="bg-beige-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-brown-800 mb-2 flex items-center">
                      <CheckCircle className="h-5 w-5 text-forest-500 mr-2" />
                      Après votre inscription :
                    </h4>
                    <ul className="text-brown-600 space-y-1 text-sm">
                      <li>• Validation de votre dossier sous 48h</li>
                      <li>• Accès à votre espace de gestion</li>
                      <li>• Formation à l'utilisation de la plateforme</li>
                      <li>• Mise en ligne de vos premières formations</li>
                    </ul>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-forest-500 hover:bg-forest-600 text-white py-3"
                  >
                    Envoyer ma demande
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CentresFormation;
