
import { Button } from '@/components/ui/button';

const FormationPagination = () => {
  return (
    <div className="flex justify-center mt-12">
      <div className="flex gap-2">
        <Button variant="outline" disabled>Précédent</Button>
        <Button className="bg-forest-500 text-white">1</Button>
        <Button variant="outline">2</Button>
        <Button variant="outline">3</Button>
        <Button variant="outline">Suivant</Button>
      </div>
    </div>
  );
};

export default FormationPagination;
