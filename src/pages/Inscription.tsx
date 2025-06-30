
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Inscription = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: numéro, 2: vérification
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber && acceptTerms) {
      setStep(2);
    }
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length === 6) {
      // Ici on redirigerait vers le dashboard ou la page principale
      navigate('/');
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
    } else {
      navigate('/');
    }
  };

  const resendCode = () => {
    // Logique pour renvoyer le code
    console.log('Code renvoyé');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-beige-50 to-forest-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto shadow-xl">
        <CardHeader className="text-center relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleBack}
            className="absolute left-0 top-0 text-brown-600 hover:text-brown-800"
          >
            {step === 1 ? <X className="h-5 w-5" /> : <ArrowLeft className="h-5 w-5" />}
          </Button>
          
          {step === 1 ? (
            <>
              <CardTitle className="text-2xl font-bold text-forest-600 mb-2">
                Bienvenue à Kawini
              </CardTitle>
              <p className="text-brown-600">
                Utilisez votre numéro de téléphone pour vous connecter.
              </p>
            </>
          ) : (
            <>
              <CardTitle className="text-2xl font-bold text-forest-600 mb-2">
                Vérifiez votre numéro
              </CardTitle>
              <p className="text-brown-600">
                Veuillez patienter, un SMS contenant le code d'activation a été transmis au numéro
              </p>
            </>
          )}
        </CardHeader>

        <CardContent>
          {step === 1 ? (
            <form onSubmit={handlePhoneSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Numéro de téléphone</Label>
                <div className="flex space-x-2">
                  <div className="flex items-center bg-beige-100 rounded-md px-3 py-2 border border-beige-300">
                    <span className="text-sm font-medium text-brown-700">🇩🇿 +213</span>
                  </div>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Numéro de téléphone"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="flex-1 border-beige-300 focus:border-forest-500"
                  />
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={acceptTerms}
                  onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                />
                <Label htmlFor="terms" className="text-sm text-brown-600 leading-relaxed">
                  En continuant, j'accepte les conditions générales d'utilisation de FormationConnect.
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full bg-forest-500 hover:bg-forest-600 text-white py-3 text-lg font-medium"
                disabled={!phoneNumber || !acceptTerms}
              >
                SUIVANT
              </Button>
            </form>
          ) : (
            <form onSubmit={handleOtpSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-center">
                  <InputOTP
                    maxLength={6}
                    value={otp}
                    onChange={(value) => setOtp(value)}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-forest-500 hover:bg-forest-600 text-white py-3 text-lg font-medium"
                disabled={otp.length !== 6}
              >
                ENVOYER
              </Button>

              <div className="text-center space-x-4">
                <span className="text-brown-600">Rien reçu ?</span>
                <button
                  type="button"
                  onClick={resendCode}
                  className="text-forest-600 hover:text-forest-700 font-medium"
                >
                  Renvoyer le code
                </button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Inscription;
