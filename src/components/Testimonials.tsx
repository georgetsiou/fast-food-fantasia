
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Γιώργος Π.",
    text: "Ο καλύτερος γύρος που έχω φάει ποτέ! Ζουμερός, νόστιμος και πάντα φρέσκος. Το προσωπικό είναι πολύ φιλικό και εξυπηρετικό.",
    rating: 5,
    date: "10/05/2023"
  },
  {
    id: 2,
    name: "Μαρία Κ.",
    text: "Απίστευτες γεύσεις, μεγάλες μερίδες και λογικές τιμές. Ο χώρος είναι πάντα καθαρός και η εξυπηρέτηση γρήγορη. Το συνιστώ ανεπιφύλακτα!",
    rating: 5,
    date: "22/07/2023"
  },
  {
    id: 3,
    name: "Δημήτρης Α.",
    text: "Δοκίμασα τον special γύρο με έξτρα τυρί και ήταν φανταστικός! Οι σάλτσες τους είναι μοναδικές και οι πατάτες τραγανές. Θα ξαναπάω σίγουρα!",
    rating: 4,
    date: "15/09/2023"
  }
];

const Testimonials = () => {
  return (
    <div className="section bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center reveal">
            <span className="text-pumba-red">Κ</span>ριτικές Πελατών
          </h2>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto reveal">
            Δείτε τι λένε οι πελάτες μας για την εμπειρία τους στο Pumba
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-pumba-red transition-all duration-300 reveal"
              >
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={i < testimonial.rating ? "text-pumba-gold fill-pumba-gold" : "text-gray-500"} 
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                <div className="flex justify-between items-center">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center reveal">
            <div className="inline-flex items-center bg-gray-800 rounded-full px-6 py-3">
              <div className="flex mr-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className="text-pumba-gold fill-pumba-gold" 
                  />
                ))}
              </div>
              <p>
                <span className="font-bold">4.8 / 5</span> από <span className="text-pumba-red font-bold">423</span> κριτικές
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
