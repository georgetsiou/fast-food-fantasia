
import React from 'react';
import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from 'lucide-react';
const Location = () => {
  return <div id="location" className="section bg-black">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center reveal">
            <span className="text-pumba-red">Τ</span>οποθεσίες
          </h2>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto reveal">
            Επισκεφθείτε μας σε οποιοδήποτε από τα καταστήματά μας ή παραγγείλτε online
          </p>
          
          {/* Sindos Location */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-pumba-red">Σίνδος</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="reveal">
                <div className="rounded-lg overflow-hidden shadow-xl h-[400px]">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.7622419054073!2d22.803346876019193!3d40.67032987137419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a82500788b86bf%3A0x9f8fda01c49c284b!2sPUMBA!5e0!3m2!1sen!2sgr!4v1716826847159!5m2!1sen!2sgr" width="100%" height="100%" style={{
                  border: 0
                }} allowFullScreen loading="lazy" title="Pumba Gyros Sindos Location" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
              
              <div className="reveal">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-pumba-red mr-4 mt-1">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">Διεύθυνση</h4>
                      <p className="text-gray-300">Μεγ. Αλεξάνδρου 55, Σίνδος, Θεσσαλονίκη 57400</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-pumba-red mr-4 mt-1">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">Ώρες Λειτουργίας</h4>
                      <p className="text-gray-300">Δευτέρα-Κυριακή: 12:00 - 00:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-pumba-red mr-4 mt-1">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">Τηλέφωνο</h4>
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
                      <h4 className="font-bold text-xl mb-2">Email</h4>
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
                      <h4 className="font-bold text-xl mb-2">Instagram</h4>
                      <p className="text-gray-300">
                        <a href="https://www.instagram.com/pumba_sindos/" target="_blank" rel="noopener noreferrer" className="hover:text-pumba-red transition-colors">
                          @pumba_sindos
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-pumba-red mr-4 mt-1">
                      <Facebook size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">Facebook</h4>
                      <p className="text-gray-300">
                        <a href="https://www.facebook.com/p/Pumba-%CE%A3%CE%AF%CE%BD%CE%B4%CE%BF%CF%82-The-art-of-Gyros-61556393728789/" target="_blank" rel="noopener noreferrer" className="hover:text-pumba-red transition-colors">
                          Pumba Σίνδος
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Liti Location */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-pumba-red">Λητή</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="reveal">
                <div className="rounded-lg overflow-hidden shadow-xl h-[400px]">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.8536742890477!2d22.9790774!3d40.7417054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a8350a2af70131%3A0xf2ba31d2b1c6fc3d!2sPumba+Liti!5e0!3m2!1sen!2sgr!4v1716826847159!5m2!1sen!2sgr" width="100%" height="100%" style={{
                  border: 0
                }} allowFullScreen loading="lazy" title="Pumba Gyros Liti Location" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
              
              <div className="reveal">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-pumba-red mr-4 mt-1">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">Διεύθυνση</h4>
                      <p className="text-gray-300">Σχολείου 32, Λητή 572 00
                    </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-pumba-red mr-4 mt-1">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">Ώρες Λειτουργίας</h4>
                      <p className="text-gray-300">Δευτέρα-Κυριακή: 12:00 - 00:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-pumba-red mr-4 mt-1">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">Τηλέφωνο</h4>
                      <p className="text-gray-300">
                        <a href="tel:2394071900" className="hover:text-pumba-red transition-colors">
                          2394 071900
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-pumba-red mr-4 mt-1">
                      <Instagram size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">Instagram</h4>
                      <p className="text-gray-300">
                        <a href="https://www.instagram.com/pumpa_lhth/?locale=bz-hans&hl=am-et" target="_blank" rel="noopener noreferrer" className="hover:text-pumba-red transition-colors">
                          @pumpa_lhth
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-pumba-red mr-4 mt-1">
                      <Facebook size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">Facebook</h4>
                      <p className="text-gray-300">
                        <a href="https://www.facebook.com/p/Pumba-%CE%A3%CE%AF%CE%BD%CE%B4%CE%BF%CF%82-The-art-of-Gyros-61556393728789/" target="_blank" rel="noopener noreferrer" className="hover:text-pumba-red transition-colors">
                          Pumba Λητή
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-pumba-red mr-4 mt-1">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">Email</h4>
                      <p className="text-gray-300">
                        <a href="mailto:pumbaike@gmail.com" className="hover:text-pumba-red transition-colors">
                          pumbaike@gmail.com
                        </a>
                      </p>
                    </div>
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
