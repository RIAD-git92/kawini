import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Menu } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleConnexion = () => {
    // Pour l'instant, on peut rediriger vers la page des particuliers
    navigate("/particuliers");
  };

  const handleInscription = () => {
    // Pour l'instant, on peut rediriger vers la page des centres
    navigate("/centres");
  };

  return (
    <header className="bg-white shadow-sm border-b border-beige-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-forest-500 p-2 rounded-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <img
              src="/kawini.png"
              alt="Kawini Logo"
              className="h-10 w-auto" // Ajustez la taille selon vos besoins
            />
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/centres"
              className="text-brown-600 hover:text-forest-600 transition-colors flex items-center space-x-1"
            >
              <Users className="h-4 w-4" />
              <span>Centres de Formation</span>
            </Link>
            <Link
              to="/particuliers"
              className="text-brown-600 hover:text-forest-600 transition-colors"
            >
              Particuliers
            </Link>
            <Link
              to="/formations"
              className="text-brown-600 hover:text-forest-600 transition-colors"
            >
              Formations
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={handleConnexion}
              variant="outline"
              className="border-forest-500 text-forest-600 hover:bg-forest-50"
            >
              Connexion
            </Button>
            <Button
              onClick={handleInscription}
              className="bg-forest-500 hover:bg-forest-600 text-white"
            >
              Inscription
            </Button>
          </div>

          {/* Menu mobile */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6 text-brown-600" />
          </button>
        </div>

        {/* Menu mobile ouvert */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-beige-200 pt-4">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/centres"
                className="text-brown-600 hover:text-forest-600 transition-colors flex items-center space-x-1"
                onClick={() => setIsMenuOpen(false)}
              >
                <Users className="h-4 w-4" />
                <span>Centres de Formation</span>
              </Link>
              <Link
                to="/particuliers"
                className="text-brown-600 hover:text-forest-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Particuliers
              </Link>
              <Link
                to="/formations"
                className="text-brown-600 hover:text-forest-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Formations
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button
                  onClick={() => {
                    handleConnexion();
                    setIsMenuOpen(false);
                  }}
                  variant="outline"
                  className="border-forest-500 text-forest-600 hover:bg-forest-50"
                >
                  Connexion
                </Button>
                <Button
                  onClick={() => {
                    handleInscription();
                    setIsMenuOpen(false);
                  }}
                  className="bg-forest-500 hover:bg-forest-600 text-white"
                >
                  Inscription
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
