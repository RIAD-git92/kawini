
import { Button } from '@/components/ui/button';
import { Search, BookOpen, Users, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-beige-50 to-forest-50 py-16">
      <div className="container mx-auto px-4">
        {/* Section héro principale */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-brown-800 mb-6 animate-fade-in">
            Connectez-vous à votre 
            <span className="text-forest-600"> formation idéale</span>
          </h1>
          <p className="text-xl text-brown-600 mb-8 max-w-3xl mx-auto animate-fade-in">
            La plateforme qui met en relation les centres de formation de votre région 
            avec les particuliers à la recherche de nouvelles compétences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button 
              size="lg" 
              className="bg-forest-500 hover:bg-forest-600 text-white px-8 py-3 text-lg"
            >
              <Search className="mr-2 h-5 w-5" />
              Trouver une formation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-brown-500 text-brown-600 hover:bg-brown-50 px-8 py-3 text-lg"
            >
              <Users className="mr-2 h-5 w-5" />
              Proposer des formations
            </Button>
          </div>
        </div>

        {/* Cartes de fonctionnalités */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-forest-500">
            <CardContent className="p-6">
              <div className="bg-forest-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-forest-600" />
              </div>
              <h3 className="text-xl font-semibold text-brown-800 mb-3">Catalogue Complet</h3>
              <p className="text-brown-600">
                Découvrez toutes les formations disponibles dans votre région, 
                des formations professionnelles aux loisirs créatifs.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-brown-500">
            <CardContent className="p-6">
              <div className="bg-brown-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-brown-600" />
              </div>
              <h3 className="text-xl font-semibold text-brown-800 mb-3">Mise en Relation</h3>
              <p className="text-brown-600">
                Connectez-vous directement avec les centres de formation 
                et échangez sur vos besoins et objectifs.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-beige-400">
            <CardContent className="p-6">
              <div className="bg-beige-200 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-brown-600" />
              </div>
              <h3 className="text-xl font-semibold text-brown-800 mb-3">Personnalisé</h3>
              <p className="text-brown-600">
                Recevez des recommandations personnalisées basées sur 
                vos préférences et votre localisation.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Statistiques */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-forest-600 mb-2">150+</div>
              <div className="text-brown-600">Centres partenaires</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-forest-600 mb-2">2,500+</div>
              <div className="text-brown-600">Formations disponibles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-forest-600 mb-2">5,000+</div>
              <div className="text-brown-600">Apprenants connectés</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-forest-600 mb-2">95%</div>
              <div className="text-brown-600">Satisfaction client</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
