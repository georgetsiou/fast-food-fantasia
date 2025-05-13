
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/">
            <Button variant="outline" className="mb-8 flex items-center gap-2 text-white border-white hover:bg-pumba-red hover:border-transparent">
              <ArrowLeft size={16} />
              Επιστροφή
            </Button>
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-pumba-red">Πολιτική Απορρήτου</h1>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">Εισαγωγή</h2>
              <p className="mb-4">
                Η Pumba Gyros (εφεξής "εμείς", "μας", "η εταιρεία") δεσμεύεται να προστατεύει το απόρρητο των επισκεπτών και των πελατών της. Αυτή η Πολιτική Απορρήτου εξηγεί τον τρόπο με τον οποίο συλλέγουμε, χρησιμοποιούμε και προστατεύουμε τις πληροφορίες σας όταν επισκέπτεστε τον ιστότοπό μας ή χρησιμοποιείτε τις υπηρεσίες μας.
              </p>
              <p>
                Με την χρήση του ιστότοπου μας, συμφωνείτε με τους όρους αυτής της Πολιτικής Απορρήτου.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">Πληροφορίες που Συλλέγουμε</h2>
              <p className="mb-4">
                Συλλέγουμε τους ακόλουθους τύπους πληροφοριών:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Προσωπικά δεδομένα:</strong> Όνομα, διεύθυνση email, αριθμό τηλεφώνου, και διεύθυνση παράδοσης όταν κάνετε παραγγελία.
                </li>
                <li>
                  <strong>Δεδομένα πληρωμής:</strong> Στοιχεία πληρωμής κατά την ολοκλήρωση παραγγελίας (χωρίς αποθήκευση πλήρων στοιχείων κάρτας).
                </li>
                <li>
                  <strong>Δεδομένα περιήγησης:</strong> Cookies, διεύθυνση IP, τύπος συσκευής, πρόγραμμα περιήγησης και ιστορικό περιήγησης στον ιστότοπό μας.
                </li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">Πώς Χρησιμοποιούμε τις Πληροφορίες</h2>
              <p className="mb-4">
                Χρησιμοποιούμε τις πληροφορίες που συλλέγουμε για:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Επεξεργασία και διεκπεραίωση παραγγελιών</li>
                <li>Βελτίωση των προϊόντων και υπηρεσιών μας</li>
                <li>Επικοινωνία μαζί σας σχετικά με την παραγγελία σας</li>
                <li>Αποστολή προωθητικών μηνυμάτων (με τη συγκατάθεσή σας)</li>
                <li>Ανάλυση της κίνησης και χρήσης του ιστότοπου</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">Cookies</h2>
              <p className="mb-4">
                Ο ιστότοπός μας χρησιμοποιεί cookies για τη βελτίωση της εμπειρίας περιήγησης. Τα cookies είναι μικρά αρχεία κειμένου που αποθηκεύονται στη συσκευή σας και μας επιτρέπουν να αναγνωρίζουμε το πρόγραμμα περιήγησής σας κατά την επίσκεψή σας.
              </p>
              <p className="mb-4">
                Χρησιμοποιούμε τα εξής είδη cookies:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Απαραίτητα cookies:</strong> Επιτρέπουν βασικές λειτουργίες όπως η ασφαλής σύνδεση και απομνημόνευση του καλαθιού αγορών.
                </li>
                <li>
                  <strong>Cookies απόδοσης:</strong> Συλλέγουν ανώνυμες πληροφορίες για το πώς οι επισκέπτες χρησιμοποιούν τον ιστότοπό μας.
                </li>
                <li>
                  <strong>Cookies λειτουργικότητας:</strong> Επιτρέπουν στον ιστότοπο να θυμάται τις επιλογές που κάνετε.
                </li>
                <li>
                  <strong>Cookies στόχευσης:</strong> Καταγράφουν την επίσκεψή σας, τις σελίδες που επισκεφτήκατε και τους συνδέσμους που ακολουθήσατε.
                </li>
              </ul>
              <p className="mt-4">
                Μπορείτε να ρυθμίσετε το πρόγραμμα περιήγησής σας να απορρίπτει όλα τα cookies, ωστόσο αυτό μπορεί να επηρεάσει τη λειτουργικότητα του ιστότοπου.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">Ασφάλεια Δεδομένων</h2>
              <p>
                Λαμβάνουμε κατάλληλα μέτρα ασφαλείας για την προστασία των προσωπικών σας δεδομένων από μη εξουσιοδοτημένη πρόσβαση, αλλοίωση, αποκάλυψη ή καταστροφή. Ωστόσο, καμία μέθοδος διαδικτυακής μετάδοσης ή ηλεκτρονικής αποθήκευσης δεν είναι 100% ασφαλής, και δεν μπορούμε να εγγυηθούμε την απόλυτη ασφάλεια.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">Τα Δικαιώματά Σας</h2>
              <p className="mb-4">
                Σύμφωνα με τη νομοθεσία προστασίας δεδομένων, έχετε δικαίωμα:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Πρόσβασης στα προσωπικά σας δεδομένα</li>
                <li>Διόρθωσης ανακριβών πληροφοριών</li>
                <li>Διαγραφής των δεδομένων σας</li>
                <li>Περιορισμού της επεξεργασίας</li>
                <li>Φορητότητας των δεδομένων</li>
                <li>Εναντίωσης στην επεξεργασία</li>
              </ul>
              <p className="mt-4">
                Για να ασκήσετε οποιοδήποτε από αυτά τα δικαιώματα, επικοινωνήστε μαζί μας στο pumbaike@gmail.com.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">Αλλαγές στην Πολιτική Απορρήτου</h2>
              <p>
                Διατηρούμε το δικαίωμα να τροποποιήσουμε αυτή την πολιτική απορρήτου ανά πάσα στιγμή. Οι αλλαγές θα αναρτώνται σε αυτή τη σελίδα και, όπου κρίνεται σκόπιμο, θα σας ειδοποιούμε μέσω email.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">Επικοινωνία</h2>
              <p>
                Εάν έχετε ερωτήσεις σχετικά με αυτήν την Πολιτική Απορρήτου, επικοινωνήστε μαζί μας στο:
                <br />
                Email: <a href="mailto:pumbaike@gmail.com" className="text-pumba-red hover:underline">pumbaike@gmail.com</a>
                <br />
                Τηλέφωνο: <a href="tel:2310799500" className="text-pumba-red hover:underline">231 079 9500</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
