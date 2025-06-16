
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, User, ArrowRight } from 'lucide-react';

const UserTypeSelector = () => {
  return (
    <div className="py-16 bg-beige-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brown-800 mb-4">
            Choisissez votre profil
          </h2>
          <p className="text-lg text-brown-600 max-w-2xl mx-auto">
            Que vous soyez un centre de formation ou un particulier, 
            nous avons la solution adaptée à vos besoins.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Carte Centre de Formation */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-forest-300">
            <CardHeader className="text-center pb-4">
              <div className="bg-forest-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-forest-600" />
              </div>
              <CardTitle className="text-2xl text-brown-800">Centre de Formation</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-brown-600 mb-6">
                Vous êtes un organisme de formation ? Rejoignez notre réseau 
                et mettez en avant vos formations auprès de milliers de particuliers.
              </p>
              <ul className="text-left text-brown-600 mb-6 space-y-2">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-forest-500 mr-2" />
                  Créez et gérez vos formations
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-forest-500 mr-2" />
                  Accédez à un large public
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-forest-500 mr-2" />
                  Outils de gestion intégrés
                </li>
              </ul>
              <Button className="w-full bg-forest-500 hover:bg-forest-600 text-white">
                Inscription Centre
              </Button>
            </CardContent>
          </Card>

          {/* Carte Particulier */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-brown-300">
            <CardHeader className="text-center pb-4">
              <div className="bg-brown-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-brown-600" />
              </div>
              <CardTitle className="text-2xl text-brown-800">Particulier</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-brown-600 mb-6">
                Vous cherchez une formation ? Découvrez notre catalogue 
                et trouvez la formation qui correspond à vos besoins.
              </p>
              <ul className="text-left text-brown-600 mb-6 space-y-2">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-brown-500 mr-2" />
                  Recherche personnalisée
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-brown-500 mr-2" />
                  Contact direct avec les centres
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-brown-500 mr-2" />
                  Suivi de vos candidatures
                </li>
              </ul>
              <Button className="w-full bg-brown-600 hover:bg-brown-700 text-white">
                Inscription Particulier
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserTypeSelector;
