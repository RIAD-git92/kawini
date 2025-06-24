
import Header from '../components/Header';
import Footer from '../components/Footer';
import FormationSearchBar from '../components/FormationSearchBar';
import FormationCard from '../components/FormationCard';
import FormationPagination from '../components/FormationPagination';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { formations } from '../data/formationData';

const Formations = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <FormationSearchBar />

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
              <FormationCard key={formation.id} formation={formation} />
            ))}
          </div>

          <FormationPagination />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Formations;
