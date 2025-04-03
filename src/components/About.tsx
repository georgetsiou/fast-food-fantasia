import React from 'react';
import { Users, Award, Clock } from 'lucide-react';
const About = () => {
  return <div id="about" className="section bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center reveal">
            <span className="text-pumba-red">Σ</span>χετικά με εμάς
          </h2>
          
          <div className="reveal">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h3 className="text-3xl font-bold mb-4">Η ιστορία του <span className="text-pumba-red">PUMBA</span></h3>
              <p className="text-gray-300 mb-6">Από το 2023, το Pumba έφερε μια φρέσκια προσέγγιση στον παραδοσιακό ελληνικό γύρο στην καρδιά της Σίνδου Θεσσαλονίκης. Με πάθος για την ποιότητα και την αυθεντικότητα, δημιουργήσαμε ένα μέρος όπου η παράδοση συναντά την καινοτομία.</p>
              <p className="text-gray-300 mb-8">
                Κάθε πιάτο μας παρασκευάζεται με αγάπη, χρησιμοποιώντας τα πιο φρέσκα υλικά και παραδοσιακές συνταγές, προσφέροντας μια αξέχαστη γευστική εμπειρία σε κάθε επισκέπτη.
              </p>
            </div>
              
            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex flex-col items-center text-center p-6 bg-gray-900/50 rounded-lg hover:bg-gray-800/50 transition-all">
                <div className="mb-3 text-pumba-red">
                  <Users size={36} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Έμπειρο Προσωπικό</h4>
                  <p className="text-gray-400">Η ομάδα μας αποτελείται από επαγγελματίες με πάθος για την ελληνική κουζίνα</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 bg-gray-900/50 rounded-lg hover:bg-gray-800/50 transition-all">
                <div className="mb-3 text-pumba-red">
                  <Award size={36} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Άριστη Ποιότητα</h4>
                  <p className="text-gray-400">Επιλέγουμε μόνο τα καλύτερα υλικά για τα πιάτα μας, εξασφαλίζοντας κορυφαία γεύση</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 bg-gray-900/50 rounded-lg hover:bg-gray-800/50 transition-all">
                <div className="mb-3 text-pumba-red">
                  <Clock size={36} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Γρήγορη Εξυπηρέτηση</h4>
                  <p className="text-gray-400">Το φαγητό σας, γρήγορα και φρεσκομαγειρεμένο, χωρίς συμβιβασμούς στην ποιότητα</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default About;