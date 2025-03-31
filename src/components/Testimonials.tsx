import React from 'react';
import { Star } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
const testimonials = [{
  id: 1,
  name: "Stella Zoumpoulidi",
  text: "Μακράν ότι καλύτερο...τεράστια μερίδα...πολύ γευστικό...και έφερα και σπίτι! Αξίζει τα λεφτά του!!!",
  rating: 5,
  date: "33 ημέρες πριν"
}, {
  id: 2,
  name: "Νίκος Παγκωνιάτης",
  text: "Μεγάλες μερίδες, πολύ νόστιμες. Καθαρός χώρος. Εξαιρετική εξυπηρέτηση.",
  rating: 5,
  date: "1 χρόνο πριν"
}, {
  id: 3,
  name: "Κυπριανός Σταύρου",
  text: "Γεμάτο πιτόγυρο με κρέας πολύ καλό ψήσιμο. Οι πατάτες είναι κάπως μικρές, αλλά είναι πολύ μεγάλη η μερίδα, οπότε δεν μειώνεται σε τίποτα.",
  rating: 5,
  date: "1 μήνα πριν"
}, {
  id: 4,
  name: "Γιάννης Εξάρχου",
  text: "Το καλύτερο γύρο που έχω φάει σε ολόκληρη την Ελλάδα! Απίστευτες πατάτες, λαχταριστά όλα, στα 5 το κρέας είναι σε μεγάλη ποσότητα και λαχταριστό! Συστήνεται ανεπιφύλακτα!",
  rating: 5,
  date: "8 μήνες πριν"
}, {
  id: 5,
  name: "Μίλτος Ρόζιας",
  text: "Πολύ καλό κοτόπουλο, μεγάλες μερίδες, και σε πολύ καλή τιμή.",
  rating: 5,
  date: "3 μήνες πριν"
}, {
  id: 6,
  name: "Γιώργος Γκιουλές",
  text: "Εξαιρετικό φαγητό, μεγάλες μερίδες, ευγενικό προσωπικό, πολύ ωραία ατμόσφαιρα!! Μια χαρά όλα!",
  rating: 5,
  date: "1 χρόνο πριν"
}, {
  id: 7,
  name: "Christos Galanis",
  text: "ΤΕΛΕΙΟ...πολύ γευστικά όλα...υπέροχη γεύση...μεγάλες μερίδες. ΤΟ ΣΥΝΙΣΤΏ ΑΝΕΠΙΦΎΛΑΚΤΑ.",
  rating: 5,
  date: "10 μήνες πριν"
}, {
  id: 8,
  name: "Έλενα Ιωαννίδου",
  text: "Πολύ νόστιμο φαγητό, μεγάλες μερίδες και πολύ γρήγορη εξυπηρέτηση.",
  rating: 5,
  date: "11 μήνες πριν"
}, {
  id: 9,
  name: "Αναστάσιος Αναγνωστίδης",
  text: "Ότι καλύτερο έχω φάει στην περιοχή! Το κοτόπουλο ήταν τέλειο, η σος απίστευτη και μπόλικες πατάτες! Ανυπομονώ να ξανάρθω!",
  rating: 5,
  date: "3 μήνες πριν"
}];
const Testimonials = () => {
  return <div id="testimonials" className="section bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center reveal">
            <span className="text-pumba-red">Κ</span>ριτικές Πελατών
          </h2>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto reveal">
            Δείτε τι λένε οι πελάτες μας για την εμπειρία τους στο Pumba
          </p>
          
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map(testimonial => <div key={testimonial.id} className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-pumba-red transition-all duration-300 reveal">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} className={i < testimonial.rating ? "text-pumba-gold fill-pumba-gold" : "text-gray-500"} />)}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                <div className="flex justify-between items-center">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </div>
              </div>)}
          </div>

          {/* Mobile carousel for testimonials */}
          <div className="md:hidden reveal">
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map(testimonial => <CarouselItem key={testimonial.id}>
                    <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-white/10 h-full">
                      <div className="flex mb-3">
                        {[...Array(5)].map((_, i) => <Star key={i} size={18} className={i < testimonial.rating ? "text-pumba-gold fill-pumba-gold" : "text-gray-500"} />)}
                      </div>
                      <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                      <div className="flex justify-between items-center">
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.date}</p>
                      </div>
                    </div>
                  </CarouselItem>)}
              </CarouselContent>
              <div className="flex justify-center mt-4">
                <CarouselPrevious className="static translate-y-0 mr-2" />
                <CarouselNext className="static translate-y-0 ml-2" />
              </div>
            </Carousel>
          </div>
          
          <div className="mt-12 text-center reveal">
            <div className="inline-flex items-center bg-gray-800 rounded-full px-6 py-3">
              <div className="flex mr-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} className="text-pumba-gold fill-pumba-gold" />)}
              </div>
              <p>
                <span className="font-bold">4.8 / 5</span> από <span className="text-pumba-red font-bold">750+</span> κριτικές
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center reveal">
            <a href="https://www.e-food.gr/delivery/thessaloniki/pumba-7484246" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-pumba-red hover:text-pumba-gold transition-colors">
              Δείτε περισσότερες κριτικές στο e-food
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>;
};
export default Testimonials;