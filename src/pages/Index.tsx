
import Header from '../components/Header';
import Hero from '../components/Hero';
import UserTypeSelector from '../components/UserTypeSelector';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <UserTypeSelector />
      <Footer />
    </div>
  );
};

export default Index;
