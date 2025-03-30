
import React from 'react';
import { Users, Award, Clock } from 'lucide-react';

const About = () => {
  return (
    <div id="about" className="section bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center reveal">
            <span className="text-pumba-red">Σ</span>χετικά με εμάς
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1969&q=80" 
                  alt="Pumba Gyros" 
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute -bottom-4 -right-4 bg-pumba-red p-4 rounded-lg shadow-lg">
                  <p className="font-anton text-2xl">SINCE 2015</p>
                </div>
              </div>
            </div>
            
            <div className="reveal">
              <h3 className="text-3xl font-bold mb-4">Η ιστορία του <span className="text-pumba-red">PUMBA</span></h3>
              <p className="text-gray-300 mb-6">
                Από το 2015, το Pumba έφερε μια φρέσκια προσέγγιση στον παραδοσιακό ελληνικό γύρο στην καρδιά της Θεσσαλονίκης. 
                Με πάθος για την ποιότητα και την αυθεντικότητα, δημιουργήσαμε ένα μέρος όπου η παράδοση συναντά την καινοτομία.
              </p>
              <p className="text-gray-300 mb-8">
                Κάθε πιάτο μας παρασκευάζεται με αγάπη, χρησιμοποιώντας τα πιο φρέσκα υλικά και παραδοσιακές συνταγές, προσφέροντας μια αξέχαστη γευστική εμπειρία σε κάθε επισκέπτη.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="mr-3 mt-1 text-pumba-red">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Έμπειρο Προσωπικό</h4>
                    <p className="text-gray-400 text-sm">Η ομάδα μας αποτελείται από επαγγελματίες με πάθος</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-3 mt-1 text-pumba-red">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Άριστη Ποιότητα</h4>
                    <p className="text-gray-400 text-sm">Επιλέγουμε μόνο τα καλύτερα υλικά για τα πιάτα μας</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-3 mt-1 text-pumba-red">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Γρήγορη Εξυπηρέτηση</h4>
                    <p className="text-gray-400 text-sm">Το φαγητό σας, γρήγορα και φρεσκομαγειρεμένο</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
