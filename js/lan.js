document.addEventListener('DOMContentLoaded', function () {
    // Language translations
    const translations = {
        cs: {
            languageName: 'Czech',
            home: 'Domů',
            menu: 'Menu',
            about: 'O Nás',
            contact: 'Kontaktujte nás',
            order: 'Objednejte',
            sliderTitle: 'Katri Kebab',
            sliderDescription: 'Chuť autentického kebabu přímo ve Zlíně.',
            sliderButton: 'Objednat nyní',

            // Menu Section
            ourMenu: 'Naše menu',
            all: 'Vše',
            tortilla: 'Tortilla',
            chleba: 'Chleba',
            box: 'Box',
            hranolky: 'Hranolky',
            // Menu Items
            tortillaMala: {
                title: 'Tortilla Malá',
                desc: 'Maso, Zelenina, Dressing'
            },
            tortillaKlasik: {
                title: 'Tortilla Klasik',
                desc: 'Maso, Zelenina, Dressing'
            },
            tortillaMega: {
                title: 'Tortilla Mega',
                desc: 'Extra Maso, Zelenina, Dressing'
            },
            tortillaKatri: {
                title: 'Tortilla Katri',
                desc: 'Extra Maso, Zelenina, Dressing + Nápoj'
            },
            tortillaSpecial: {
                title: 'Tortilla Special',
                desc: 'Maso, Dressing'
            },
            chlebaKlasik: {
                title: 'Chleba Klasik',
                desc: 'Maso, Zelenina, Dressing'
            },
            chlebaMega: {
                title: 'Chleba Mega',
                desc: 'Extra Maso, Zelenina, Dressing'
            },
            chlebaKatri: {
                title: 'Chleba Katri',
                desc: 'Extra Maso, Zelenina, Dressing + Nápoj'
            },
            chlebaSpecial: {
                title: 'Chleba Special',
                desc: 'Maso, Dressing'
            },
            malyBox: {
                title: 'Malý Box',
                desc: 'Maso, Zelenina, Hranolky, Dressing'
            },
            velkiBox: {
                title: 'Velký Box',
                desc: 'Maso, Zelenina, Hranolky, Dressing'
            },
            talirMaly: {
                title: 'Talíř Malý',
                desc: 'Maso, Zelenina, Hranolky, Dressing'
            },
            boxKatri: {
                title: 'Box Katri',
                desc: 'Extra Maso, Zelenina, Hranolky, Dressing'
            },
            talirVelky: {
                title: 'Talíř Velký',
                desc: 'Maso, Zelenina, Hranolky, Dressing'
            },
            boxSpecial: {
                title: 'Box Special',
                desc: 'Maso, Dressing'
            },
            hranolkyVelke: {
                title: 'hranolky Velké',
                desc: 'Zlaté, křupavé a dokonale ochucené hranolky!'
            },

            // About Section
            weAreKatri: 'Jsme Katri',
            aboutText: 'Katri Kebab je rodinná restaurace, která přináší autentické chutě Blízkého východu do Zlína. Již více než 5 let sloužíme našim zákazníkům s vášní pro kvalitní jídlo a nezapomenutelný kulinářský zážitek. Naše nabídka zahrnuje široký výběr kebabů, čerstvých salátů, a lahodných příloh, připravovaných z nejčerstvějších surovin. Díky naší oddanosti kvalitě a pohostinnosti jsme se stali oblíbeným místem pro milovníky kebabů ve Zlíně. Přijďte a zažijte chuť, kterou si zamilujete!',

            // Contact Section
            contactUs: 'Kontaktujte nás',
            callUs: 'Zavolejte nám',
            chatWhatsapp: 'Chat na Whatsapp',

            // Reviews Section
            customerReviews: 'Co říkají naši zákazníci',
            reviews: {
                review1: {
                    text: 'Nejlepší kebab ve Zlíně. Musím pochválit hlavně kebab boxy, ještě se mi nestalo, aby byly hranolky mokré, naopak skládají box vždy tak, aby byly hranolky křupavé a nebylo tam zbytečně moc dresinku.',
                    author: 'Philippe Hniliců'
                },
                review2: {
                    text: 'Obsloužil mě mladý boreček, který může být všem protivným marným obsluhám vzorem. Příjemný, extra rychlý jak nikdo a hlavně i ochotný. Mega spokojenost! 👍🏻 A jídlo skvělé stejně tak.😜',
                    author: 'Soňa Pařízková'
                },
                review3: {
                    text: 'Már 2 évben is étkeztünk itt a Barum Rally ideje alatt. Gyors kiszolgálás, az étel nagyon finom és nagy adag, a kiszolgálók pedig nagyon kedvesek.',
                    author: 'Krisztián Kovács'
                }
            },

            //Footer section
            contactUs: 'Kontaktujte nás',
            location: 'Gahurova 5265, Zlín',
            openingHours: 'Otevírací doba',
            openingTimes: {
                monThu: '🍽 Po - Čt (09:00-00:00)',
                friSat: '🍽 Pá - So (10:00-04:00)',
                sun: '🍽 Neděle (11:00-23:00)'
            },
            allRightsReserved: 'Všechna práva vyhrazena',
            poweredBy : 'vytvořil',

            // Modal translations
            orderModalTitle: 'Zvolte způsob objednání',
            orderWithFoodora: 'Objednejte se s Foodora',
            orderWithWolt: 'Objednejte se s Wolt',
            cancelButton: 'Zrušit'
        },

        en: {
            languageName: 'Eng',
            home: 'Home',
            menu: 'Menu',
            about: 'About Us',
            contact: 'Contact Us',
            order: 'Order Now',
            sliderTitle: 'Katri Kebab',
            sliderDescription: 'The taste of authentic kebab right in Zlín.',
            sliderButton: 'Order Now',

            // Menu Section
            ourMenu: 'Our Menu',
            all: 'All',
            tortilla: 'Tortilla',
            chleba: 'Bread',
            box: 'Box',
            hranolky: 'Fries',

            // Menu Items
            tortillaMala: {
                title: 'Small Tortilla',
                desc: 'Meat, Vegetables, Dressing'
            },
            tortillaKlasik: {
                title: 'Classic Tortilla',
                desc: 'Meat, Vegetables, Dressing'
            },
            tortillaMega: {
                title: 'Mega Tortilla',
                desc: 'Extra Meat, Vegetables, Dressing'
            },
            tortillaKatri: {
                title: 'Katri Tortilla',
                desc: 'Extra Meat, Vegetables, Dressing + Drink'
            },
            tortillaSpecial: {
                title: 'Special Tortilla',
                desc: 'Meat, Dressing'
            },
            chlebaKlasik: {
                title: 'Classic Bread',
                desc: 'Meat, Vegetables, Dressing'
            },
            chlebaMega: {
                title: 'Mega Bread',
                desc: 'Extra Meat, Vegetables, Dressing'
            },
            chlebaKatri: {
                title: 'Katri Bread',
                desc: 'Extra Meat, Vegetables, Dressing + Drink'
            },
            chlebaSpecial: {
                title: 'Special Bread',
                desc: 'Meat, Dressing'
            },
            malyBox: {
                title: 'Small Box',
                desc: 'Meat, Vegetables, Fries, Dressing'
            },
            velkiBox: {
                title: 'Large Box',
                desc: 'Meat, Vegetables, Fries, Dressing'
            },
            talirMaly: {
                title: 'Small Plate',
                desc: 'Meat, Vegetables, Fries, Dressing'
            },
            boxKatri: {
                title: 'Katri Box',
                desc: 'Extra Meat, Vegetables, Fries, Dressing'
            },
            talirVelky: {
                title: 'Large Plate',
                desc: 'Meat, Vegetables, Fries, Dressing'
            },
            boxSpecial: {
                title: 'Special Box',
                desc: 'Meat, Dressing'
            },
            hranolkyVelke: {
                title: 'Large fries',
                desc: 'Golden, crispy, and perfectly seasoned fries!'
            },

            // About Section
            weAreKatri: 'We Are Katri',
            aboutText: 'Katri Kebab is a family-owned restaurant bringing the authentic flavors of the Middle East to Zlín. For over 5 years, we have been serving our customers with a passion for quality food and an unforgettable culinary experience. Our menu features a wide selection of kebabs, fresh salads, and delicious side dishes, all prepared using the freshest ingredients. With our dedication to quality and hospitality, we have become a favorite spot for kebab lovers in Zlín. Come and experience the taste you will fall in love with!',

            // Contact Section
            contactUs: 'Contact Us',
            callUs: 'Call Us',
            chatWhatsapp: 'Chat on Whatsapp',

            // Reviews Section
            customerReviews: 'What Our Customers Say',
            reviews: {
                review1: {
                    text: 'Best kebab in Zlín. I must especially praise the kebab boxes, I have never experienced soggy fries, on the contrary, they always arrange the box so that the fries are crispy and there isn\'t unnecessarily too much dressing.',
                    author: 'Philippe Hniliců'
                },
                review2: {
                    text: 'I was served by a young guy who can be a role model for all grumpy service staff. Pleasant, extra fast like no one else and most importantly willing to help. Super satisfied! 👍🏻 And the food is great as well.😜',
                    author: 'Soňa Pařízková'
                },
                review3: {
                    text: 'We have eaten here for 2 years during the Barum Rally. Quick service, the food is very delicious and portions are large, and the staff is very friendly.',
                    author: 'Krisztián Kovács'
                }
            },

            // Footer Section
            contactUs: 'Contact Us',
            location: 'Gahurova 5265, Zlin',
            openingHours: 'Opening Hours',
            openingTimes: {
                monThu: '🍽 Mon - Thu (09:00-00:00)',
                friSat: '🍽 Fri - Sat (10:00-04:00)',
                sun: '🍽 Sunday (11:00-23:00)'
            },
            allRightsReserved: 'All Rights Reserved',
            poweredBy:'Powered by',

            // Modal translations
            orderModalTitle: 'Choose ordering method',
            orderWithFoodora: 'Order with Foodora',
            orderWithWolt: 'Order with Wolt',
            cancelButton: 'Cancel'
        }
    };

    function updateLanguageButton(lang) {
        const button = document.querySelector('.language-btn');
        const flagSrc = lang === 'cs' ? 'https://flagcdn.com/w20/cz.png' : 'https://flagcdn.com/w20/gb.png';
        const langName = translations[lang].languageName;

        button.innerHTML = `
    <img src="${flagSrc}" alt="${langName}" class="flag-icon">
    <span class="ms-1">${langName}</span>
  `;
    }

    // Language switching function
    function switchLanguage(lang) {
        // Store selected language in localStorage
        localStorage.setItem('selectedLanguage', lang);

        updateLanguageButton(lang);

        // Update navigation items
        document.querySelector('.nav-item:nth-child(1) .nav-link').textContent = translations[lang].home;
        document.querySelector('.nav-item:nth-child(2) .nav-link').textContent = translations[lang].menu;
        document.querySelector('.nav-item:nth-child(3) .nav-link').textContent = translations[lang].about;
        document.querySelector('.nav-item:nth-child(4) .nav-link').textContent = translations[lang].contact;
        document.querySelector('.order_online').textContent = translations[lang].order;

        // Translte slider content
        document.querySelector('.detail-box h1').textContent = translations[lang].sliderTitle;
        document.querySelector('.detail-box p').textContent = translations[lang].sliderDescription;
        document.querySelector('.btn-box .btn1').textContent = translations[lang].sliderButton;

        // Update menu items using data attributes
        document.querySelectorAll('[data-product-key]').forEach(element => {
            const key = element.getAttribute('data-product-key');
            if (translations[lang][key]) {
                const translation = translations[lang][key];
                const titleEl = element.querySelector('.product-title');
                const descEl = element.querySelector('.product-description');

                if (titleEl) titleEl.textContent = translation.title;
                if (descEl) descEl.textContent = translation.desc;
            }
        });

        // Translte about content
        document.querySelector('.about_section h2').textContent = translations[lang].weAreKatri;
        document.querySelector('.about_section .detail-box p').textContent = translations[lang].aboutText;

        //Translte contact section content 
        document.querySelector('.book_section h2').textContent = translations[lang].contactUs;
        const callButton = document.querySelector('.book_section .form_container .call');
        callButton.innerHTML = `<i class="fas fa-phone-alt"></i> ${translations[lang].callUs}`;

        const wtspButton = document.querySelector('.book_section .form_container .wtsp');
        wtspButton.innerHTML = `<i class="fab fa-whatsapp"></i> ${translations[lang].chatWhatsapp}`;

        //Translte contact reviews content 
        document.querySelector('.client_section .heading_container h2').textContent = translations[lang].customerReviews;
        document.querySelectorAll('[data-review]').forEach(element => {
            const reviewKey = element.getAttribute('data-review');
            if (translations[lang].reviews[reviewKey]) {
                const review = translations[lang].reviews[reviewKey];
                const pElement = element.querySelector('.detail-box p');
                const h6Element = element.querySelector('.detail-box h6');

                if (pElement) pElement.textContent = review.text;
                if (h6Element) h6Element.textContent = review.author;
            }
        });

        //Translte footer content 
        document.querySelectorAll('[data-hours]').forEach(element => {
            const key = element.getAttribute('data-hours');
            if (translations[lang].openingTimes && translations[lang].openingTimes[key]) {
                element.textContent = translations[lang].openingTimes[key];
            }
        });


        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Update modal content
        document.querySelector('#orderModalLabel').innerHTML = `
      <i class="fas fa-utensils me-2"></i>
      ${translations[lang].orderModalTitle}
  `;

        document.querySelector('.foodora-btn span').textContent = translations[lang].orderWithFoodora;
        document.querySelector('.wolt-btn span').textContent = translations[lang].orderWithWolt;
        document.querySelector('.modal-footer .btn-secondary').innerHTML = `
      <i class="fas fa-times me-2"></i>${translations[lang].cancelButton}
  `;


        // Update active state in dropdown
        document.querySelectorAll('.language-switcher .dropdown-item').forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-lang') === lang) {
                item.classList.add('active');
            }
        });

    }

    // Add click event listeners to language options
    document.querySelectorAll('.language-switcher .dropdown-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = e.currentTarget.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });

    // Set initial language from localStorage or default to Czech
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'cs';
    switchLanguage(savedLanguage);
});
