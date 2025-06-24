
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter } from 'lucide-react';

const FormationSearchBar = () => {
  return (
    <div className="bg-gradient-to-br from-forest-50 to-beige-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-brown-800 text-center mb-8">
          Catalogue des Formations
        </h1>
        
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
  );
};

export default FormationSearchBar;
