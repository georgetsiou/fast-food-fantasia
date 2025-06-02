
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Terms = () => {
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

          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-pumba-red">Όροι Χρήσης</h1>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">Αποδοχή των Όρων</h2>
              <p>
                Καλωσορίσατε στον ιστότοπο της Pumba Gyros. Χρησιμοποιώντας αυτόν τον ιστότοπο, συμφωνείτε να δεσμεύεστε από αυτούς τους Όρους Χρήσης. Εάν δεν συμφωνείτε με κάποιον από τους όρους, παρακαλούμε μην χρησιμοποιήσετε τον ιστότοπό μας.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">Χρήση του Ιστότοπου</h2>
              <p className="mb-4">
                Επιτρέπεται η χρήση του ιστότοπού μας μόνο για νόμιμους σκοπούς και με τρόπο που δεν παραβιάζει τα δικαιώματα οποιουδήποτε τρίτου. Συμφωνείτε να μην χρησιμοποιείτε τον ιστότοπο:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Με οποιονδήποτε τρόπο που παραβιάζει τους ισχύοντες νόμους ή κανονισμούς.</li>
                <li>Για αποστολή, λήψη, χρήση, αντιγραφή ή διάθεση υλικού που είναι παράνομο, προσβλητικό, καταχρηστικό, δυσφημιστικό ή παραβιάζει δικαιώματα πνευματικής ιδιοκτησίας.</li>
                <li>Για μετάδοση ιών, κακόβουλου λογισμικού ή άλλου υλικού που μπορεί να βλάψει τα συστήματά μας.</li>
                <li>Για συλλογή δεδομένων από τον ιστότοπό μας χωρίς την άδειά μας.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">Παραγγελίες και Πληρωμές</h2>
              <p className="mb-4">
                Όταν υποβάλλετε παραγγελία μέσω του ιστότοπου μας:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Εγγυάστε ότι είστε νόμιμα σε θέση να συνάψετε δεσμευτικές συμβάσεις.</li>
                <li>Συμφωνείτε να παρέχετε ακριβείς, ενημερωμένες και πλήρεις πληροφορίες για την παραγγελία.</li>
                <li>Κατανοείτε ότι μπορεί να υπάρχουν ελάχιστα όρια παραγγελίας και χρεώσεις παράδοσης.</li>
                <li>Αναγνωρίζετε ότι μπορεί να απορρίψουμε την παραγγελία σας σε περίπτωση που δεν μπορούμε να επιβεβαιώσουμε την πληρωμή ή υπάρχει υποψία απάτης.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">Πνευματική Ιδιοκτησία</h2>
              <p>
                Όλο το περιεχόμενο του ιστότοπου, συμπεριλαμβανομένων κειμένων, γραφικών, λογοτύπων, εικόνων, και λογισμικού, είναι ιδιοκτησία της Pumba Gyros και προστατεύεται από την ελληνική και διεθνή νομοθεσία περί πνευματικής ιδιοκτησίας. Δεν επιτρέπεται η αναπαραγωγή, διανομή, προβολή ή μετάδοση οποιουδήποτε μέρους του ιστότοπου χωρίς την έγγραφη άδειά μας.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">Ευθύνη</h2>
              <p className="mb-4">
                Στο μέγιστο βαθμό που επιτρέπεται από το νόμο:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Δεν εγγυόμαστε την αδιάλειπτη και χωρίς σφάλματα λειτουργία του ιστότοπου.</li>
                <li>Δεν ευθυνόμαστε για έμμεσες, συμπτωματικές ή επακόλουθες ζημιές που μπορεί να προκύψουν από τη χρήση του ιστότοπου.</li>
                <li>Η συνολική μας ευθύνη δεν θα υπερβαίνει το ποσό που πληρώσατε για συγκεκριμένες παραγγελίες.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">Τροποποιήσεις των Όρων Χρήσης</h2>
              <p>
                Διατηρούμε το δικαίωμα να τροποποιήσουμε αυτούς τους όρους ανά πάσα στιγμή, δημοσιεύοντας τους αναθεωρημένους όρους στον ιστότοπό μας. Είναι δική σας ευθύνη να ελέγχετε για τυχόν ενημερώσεις, καθώς η συνεχιζόμενη χρήση του ιστότοπου αποτελεί αποδοχή οποιωνδήποτε τροποποιήσεων.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">Εφαρμοστέο Δίκαιο</h2>
              <p>
                Οι παρόντες Όροι Χρήσης διέπονται και ερμηνεύονται σύμφωνα με τους νόμους της Ελλάδας. Οποιεσδήποτε διαφορές που προκύπτουν από ή σε σχέση με αυτούς τους όρους υπόκεινται στην αποκλειστική δικαιοδοσία των δικαστηρίων της Θεσσαλονίκης.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">Επικοινωνία</h2>
              <p>
                Εάν έχετε ερωτήσεις σχετικά με τους Όρους Χρήσης, επικοινωνήστε μαζί μας στο:
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

export default Terms;
