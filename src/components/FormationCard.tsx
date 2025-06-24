
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Star, Users } from 'lucide-react';
import { Formation } from '../data/formationData';

interface FormationCardProps {
  formation: Formation;
}

const FormationCard = ({ formation }: FormationCardProps) => {
  const getNiveauColor = (niveau: string) => {
    switch (niveau) {
      case 'Débutant': return 'bg-forest-100 text-forest-700';
      case 'Intermédiaire': return 'bg-beige-200 text-brown-700';
      case 'Avancé': return 'bg-brown-100 text-brown-800';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
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
  );
};

export default FormationCard;
