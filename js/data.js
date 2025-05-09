
// Data for the website

const siteData = {
    businessInfo: {
        name: "Pumba Gyros",
        address: "Μεγ. Αλεξάνδρου 55, Σίνδος, Θεσσαλονίκη 57400",
        phone: "2310799500",
        email: "pumbaike@gmail.com",
        hours: "Δευτέρα-Κυριακή: 12:00 - 00:00"
    },
    socialMedia: {
        instagram: [
            {
                name: "@pumba_sindos",
                url: "https://www.instagram.com/pumba_sindos/"
            },
            {
                name: "@pumba_lhth",
                url: "https://www.instagram.com/pumba_lhth/"
            }
        ]
    },
    orderingUrl: "https://www.e-food.gr/delivery/thessaloniki/pumba-7484246"
};

// Export the data for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { siteData };
}
