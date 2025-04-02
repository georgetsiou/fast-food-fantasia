import React from 'react';
import { MapPin, Clock, Phone, Mail, Instagram } from 'lucide-react';
const Location = () => {
  return <div id="location" className="section bg-black">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center reveal">
            <span className="text-pumba-red">Τ</span>οποθεσία
          </h2>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto reveal">
            Επισκεφθείτε μας στο κατάστημά μας ή παραγγείλτε online
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="reveal">
              <div className="rounded-lg overflow-hidden shadow-xl h-[400px]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.7622419054073!2d22.803346876019193!3d40.67032987137419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a82500788b86bf%3A0x9f8fda01c49c284b!2sPUMBA!5e0!3m2!1sen!2sgr!4v1716826847159!5m2!1sen!2sgr" width="100%" height="100%" style={{
                border: 0
              }} allowFullScreen loading="lazy" title="Pumba Gyros Location" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
            
            <div className="reveal">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-pumba-red mr-4 mt-1">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Διεύθυνση</h3>
                    <p className="text-gray-300">Μεγ. Αλεξάνδρου 55, Σίνδος, Θεσσαλονίκη 57400</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-pumba-red mr-4 mt-1">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Ώρες Λειτουργίας</h3>
                    <div className="grid grid-cols-2 gap-2 text-gray-300">
                      <p>Δευτέρα - Κυριακή:</p>
                      <p>12:00 - 00:00</p>
                      <p>Σάββατο:</p>
                      <p>11:00 - 01:00</p>
                      <p>Κυριακή:</p>
                      <p>12:00 - 00:00</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-pumba-red mr-4 mt-1">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Τηλέφωνο</h3>
                    <p className="text-gray-300">
                      <a href="tel:2310799500" className="hover:text-pumba-red transition-colors">
                        231 079 9500
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-pumba-red mr-4 mt-1">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Email</h3>
                    <p className="text-gray-300">
                      <a href="mailto:pumbaike@gmail.com" className="hover:text-pumba-red transition-colors">
                        pumbaike@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-pumba-red mr-4 mt-1">
                    <Instagram size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Instagram</h3>
                    <p className="text-gray-300">
                      <a href="https://www.instagram.com/pumba_sindos/" target="_blank" rel="noopener noreferrer" className="hover:text-pumba-red transition-colors mr-4">
                        @pumba_sindos
                      </a>
                      <a href="https://www.instagram.com/pumba_lhth/" target="_blank" rel="noopener noreferrer" className="hover:text-pumba-red transition-colors">
                        @pumba_lhth
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Location;