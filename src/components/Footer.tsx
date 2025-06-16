
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brown-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-forest-500 p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">FormationConnect</span>
            </Link>
            <p className="text-brown-200 mb-6">
              La plateforme de référence pour connecter les centres de formation 
              et les particuliers dans votre région. Trouvez la formation qui vous convient 
              ou développez votre activité de formation.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-brown-200">
                <MapPin className="h-4 w-4 mr-2 text-forest-400" />
                <span>Toute la France</span>
              </div>
              <div className="flex items-center text-brown-200">
                <Mail className="h-4 w-4 mr-2 text-forest-400" />
                <span>contact@formationconnect.fr</span>
              </div>
              <div className="flex items-center text-brown-200">
                <Phone className="h-4 w-4 mr-2 text-forest-400" />
                <span>01 23 45 67 89</span>
              </div>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-beige-100">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/formations" className="text-brown-200 hover:text-forest-400 transition-colors">
                  Rechercher une formation
                </Link>
              </li>
              <li>
                <Link to="/centres" className="text-brown-200 hover:text-forest-400 transition-colors">
                  Devenir partenaire
                </Link>
              </li>
              <li>
                <Link to="/particuliers" className="text-brown-200 hover:text-forest-400 transition-colors">
                  Espace particulier
                </Link>
              </li>
              <li>
                <Link to="/" className="text-brown-200 hover:text-forest-400 transition-colors">
                  Centre d'aide
                </Link>
              </li>
            </ul>
          </div>

          {/* Informations légales */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-beige-100">Informations</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-brown-200 hover:text-forest-400 transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/" className="text-brown-200 hover:text-forest-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/" className="text-brown-200 hover:text-forest-400 transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link to="/" className="text-brown-200 hover:text-forest-400 transition-colors">
                  Confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brown-700 mt-8 pt-8 text-center">
          <p className="text-brown-200">
            © {new Date().getFullYear()} FormationConnect. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
