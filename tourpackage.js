document.addEventListener("DOMContentLoaded", function () {
  const WHATSAPP_NUMBER = "919629808833";
  const CALL_NUMBER = "919629808833";
  const SUPPORT_PHONE = "9629808833";
  const SUPPORT_EMAIL = "bharathiyartravels.cbe@gmail.com";
  const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwDzDCmDitbmRSjW7RyE6nw0deGoaf6PZmIRE0YJYD6H9O3bmHA1xfsw3WNKNLraaMJiA/exec";

  const VEHICLES = {
    sedan: { name: "SEDAN", type: "Etios, Dzire - 4 Seater" },
    ertiga: { name: "ERTIGA", type: "6 Seater" },
    innova: { name: "INNOVA", type: "7 Seater" },
    crysta: { name: "INNOVA CRYSTA", type: "7 Seater" },
    tt14: { name: "TEMPOTRAVELLER 14", type: "12 - 14 Seater" },
    tt18: { name: "TEMPOTRAVELLER 18", type: "16 - 18 Seater" },
    urbania: { name: "URBANIA", type: "12-17 Seater" },
    coach: { name: "COACH", type: "21 Seater" }
  };

  const HOTEL_RATES = {
    "2star": {
      "double": 2500,
      "triple": 3500
    },
    "3star": {
      "double": 3500,
      "triple": 4500
    }
  };

  const packageData = {
    "1D": {
      title: "One Day Tour Packages",
      subtitle: "Select your destination",
      destinations: {
        "Isha-Marudhamalai": {
          hash: "isha-marudhamalai",
           kmLimit: 100,
          vehicles: [
            { ...VEHICLES.sedan, price: 3000 },
            { ...VEHICLES.ertiga, price: 3500 },
            { ...VEHICLES.innova, price: 4000 },
            { ...VEHICLES.crysta, price: 4800 },
            { ...VEHICLES.tt14, price: 5500 },
            { ...VEHICLES.tt18, price: 6500 },
            { ...VEHICLES.urbania, price: null },
            { ...VEHICLES.coach, price: null }
          ],
          itinerary: [
            { day: "Day 1", text: "Visit Perur Patteswarar Temple, Isha Yoga Center, and Marudhamalai." }
          ]
        },

        "Ooty": {
          hash: "ooty",
           kmLimit: 300,
          vehicles: [
            { ...VEHICLES.sedan, price: 5500 },
            { ...VEHICLES.ertiga, price: 6700 },
            { ...VEHICLES.innova, price: 7500 },
            { ...VEHICLES.crysta, price: 9500 },
            { ...VEHICLES.tt14, price: 11000 },
            { ...VEHICLES.tt18, price: 14000 },
            { ...VEHICLES.urbania, price: null },
            { ...VEHICLES.coach, price: null }
          ],
          itinerary: [
            { day: "Day 1", text: "Doddabetta Peak, Ooty Lake,Botanical Garden,Rose Garden,Tea Factory & Chocolate Museum" }
          ]
        },

        "Top Slip - Masani Amman Temple": {
           kmLimit: 300,
          hash: "top-slip-masani-amman",
          vehicles: [
            { ...VEHICLES.sedan, price: 5100 },
            { ...VEHICLES.ertiga, price: 6100 },
            { ...VEHICLES.innova, price: 7000 },
            { ...VEHICLES.crysta, price: 8200 },
            { ...VEHICLES.tt14, price: 9500 },
            { ...VEHICLES.tt18, price: 11000 },
            { ...VEHICLES.urbania, price: null },
            { ...VEHICLES.coach, price: null }
          ],
          itinerary: [
            { day: "Day 1", text: "Visit Top Slip, Parambikulam and Masani Amman Temple." }
          ]
        },

        "Guruvayur": {
          hash: "guruvayur",
           kmLimit: 400,
          vehicles: [
            { ...VEHICLES.sedan, price: 6500 },
            { ...VEHICLES.ertiga, price: 7800 },
            { ...VEHICLES.innova, price: 8800 },
            { ...VEHICLES.crysta, price: 10300 },
            { ...VEHICLES.tt14, price: 11700 },
            { ...VEHICLES.tt18, price: 14000 },
            { ...VEHICLES.urbania, price: null },
            { ...VEHICLES.coach, price: null }
          ],
          itinerary: [
            { day: "Day 1", text: "Visit Guruvayur Krishnar Temple, Punnathur Kotta, Mammiyur Sri Mahadeva Temple and Chavakkad Beach." }
          ]
        },

        "Palani": {
          hash: "palani",
           kmLimit: 250,
          vehicles: [
            { ...VEHICLES.sedan, price: 4500 },
            { ...VEHICLES.ertiga, price: 5500 },
            { ...VEHICLES.innova, price: 6100 },
            { ...VEHICLES.crysta, price: 7350 },
            { ...VEHICLES.tt14, price: 8000 },
            { ...VEHICLES.tt18, price: 10000 },
            { ...VEHICLES.urbania, price: null },
            { ...VEHICLES.coach, price: null }
          ],
          itinerary: [
            { day: "Day 1", text: "Coimbatore to Palani, Palani Murugan Temple and back to Coimbatore." }
          ]
        }
      }
    },

    "2D": {
      title: "Two Day Tour Packages",
      subtitle: "Select your destination",

      destinations: {
        "Ooty": {
          hash: "ooty-2d",
           kmLimit: 350,
          vehicles: [
            { ...VEHICLES.sedan, price: 7500 },
            { ...VEHICLES.ertiga, price: 9000 },
            { ...VEHICLES.innova, price: 10000 },
            { ...VEHICLES.crysta, price: 12000 },
            { ...VEHICLES.tt14, price: 15000  },
            { ...VEHICLES.tt18, price: 17000 },
            { ...VEHICLES.urbania, price: null },
            { ...VEHICLES.coach, price: null }
          ],
          itinerary: [
            { day: "Day 1", text: "Coimbatore to Ooty, Doddabetta Peak, Tea Factory, Botanical Garden. Stay at Ooty." },
            { day: "Day 2", text: "Ooty to Rose Garden, Lake (Boat House), Thread Garden, Wax Museum, Ooty to Coonoor, on the way Ketti Valley View, MRC Military Camp (Outside View), Sims Park, Dolphin’s Nose, Lamb’s Rock and back to Coimbatore." }
          ]
        },


        "Valparai": {
          hash: "valparai-2d",
           kmLimit: 350,
          vehicles: [
            { ...VEHICLES.sedan, price: 7400 },
            { ...VEHICLES.ertiga, price: 9250 },
            { ...VEHICLES.innova, price: 10000 },
            { ...VEHICLES.crysta, price: 12100 },
            { ...VEHICLES.tt14, price: 13800 },
            { ...VEHICLES.tt18, price: 16600 },
            { ...VEHICLES.urbania, price: null },
            { ...VEHICLES.coach, price: null }
          ],
          itinerary: [
            { day: "Day 1", text: "Coimbatore to Valparai, on the way, Eachanari Temple, Masani Amman Temple, Aliyar Dam, Monkey Falls. Stay at Valparai." },
            { day: "Day 2", text: "Balaji Temple, Sholayar Dam, Valparai Tea Estate, Valparai Viewpoints and back to Coimbatore." }
          ]
        },


        "Kodaikanal": {
          hash: "kodaikanal-2d",
           kmLimit: 500,
          vehicles: [
            { ...VEHICLES.sedan, price: 9100 },
            { ...VEHICLES.ertiga, price: 11400 },
            { ...VEHICLES.innova, price: 12300 },
            { ...VEHICLES.crysta, price: 14700 },
            { ...VEHICLES.tt14, price: 17000 },
            { ...VEHICLES.tt18, price: 20400 },
            { ...VEHICLES.urbania, price: null },
            { ...VEHICLES.coach, price: null }
          ],
          itinerary: [
            { day: "Day 1", text: "Coimbatore to Kodaikanal, Silver Cascade Falls, Kodaikanal Lake, Coakers Walk. Stay at Kodaikanal." },
            { day: "Day 2", text: "Guna Cave, Dolphin’s Nose, Echo Point, Pillar Rocks, Bryant Park, Green Valley View, Kurinji Andavar Temple and back to Coimbatore." }
          ]
        },

        "Munnar": {
          hash: "munnar-2d",
           kmLimit: 500,
          vehicles: [
            { ...VEHICLES.sedan, price: 9400 },
            { ...VEHICLES.ertiga, price: 11700 },
            { ...VEHICLES.innova, price: 12600 },
            { ...VEHICLES.crysta, price: 15000 },
            { ...VEHICLES.tt14, price: 17500 },
            { ...VEHICLES.tt18, price: 20900 },
            { ...VEHICLES.urbania, price: null },
            { ...VEHICLES.coach, price: null }
          ],
          itinerary: [
            { day: "Day 1", text: "Coimbatore to Munnar, Chinnar Wildlife Sanctuary, Lakkam Waterfalls, Eravikulam National Park. Stay at Munnar." },
            { day: "Day 2", text: "Rose Garden, Elephant Safari, Mattupatty Dam, Tea Garden, Echo Point, Top Station and back to Coimbatore." }
          ]
        },



    "Mysore": {
      hash: "mysore-2d",
       kmLimit: 550,
      vehicles: [
        { ...VEHICLES.sedan, price: 10600 },
        { ...VEHICLES.ertiga, price: 13050 },
        { ...VEHICLES.innova, price: 14000 },
        { ...VEHICLES.crysta, price: 16500 },
        { ...VEHICLES.tt14, price: 22900 },
        { ...VEHICLES.tt18, price: 26500 },
        { ...VEHICLES.urbania, price: null },
        { ...VEHICLES.coach, price: null }
      ],
      itinerary: [
        { day: "Day 1", text: "Coimbatore to Mysore, Mysore Palace, Jaganmohan Palace, St. Philomena’s Church, Lalith Mahal Palace, Mysore Zoo. Stay at Mysore." },
        { day: "Day 2", text: "Chamundeshwari Temple, Rail Museum, Brindavan Gardens and back to Coimbatore." }
      ]
    },


        "Malampuzha Dam - Guruvayur": {
          hash: "malampuzha-guruvayur-2d",
           kmLimit: 400,
          vehicles: [
            { ...VEHICLES.sedan, price: 8900 },
            { ...VEHICLES.ertiga, price: 10900 },
            { ...VEHICLES.innova, price: 11700 },
            { ...VEHICLES.crysta, price: 13900 },
            { ...VEHICLES.tt14, price: 16200 },
            { ...VEHICLES.tt18, price: 19200 },
            { ...VEHICLES.urbania, price: null },
            { ...VEHICLES.coach, price: null }
          ],
          itinerary: [
            { day: "Day 1", text: "Coimbatore to Punnathur Kotta, Mammiyur Sri Mahadeva Temple and Malampuzha Dam. Stay at Guruvayur." },
            { day: "Day 2", text: "Guruvayur Krishnar Temple, Chavakkad Beach and back to Coimbatore." }
          ]
        },

        "Sabarimalai": {
          hash: "sabarimalai-2d",
           kmLimit: 700,
          vehicles: [
            { ...VEHICLES.sedan, price: 12600 },
            { ...VEHICLES.ertiga, price: 15500 },
            { ...VEHICLES.innova, price: 16600 },
            { ...VEHICLES.crysta, price: 19400 },
            { ...VEHICLES.tt14, price: 21600 },
            { ...VEHICLES.tt18, price: 25800 },
            { ...VEHICLES.urbania, price: null },
            { ...VEHICLES.coach, price: null }
          ],
          itinerary: [
            { day: "Day 1", text: "Coimbatore to Pamba, Sabarimalai. Stay at Sabarimalai." },
            { day: "Day 2", text: "Sabarimalai, Erumeli and back to Coimbatore." }
          ]
        },

        "Rameshwaram": {
          hash: "rameshwaram-2d",
           kmLimit: 900,
          vehicles: [
            { ...VEHICLES.sedan, price: 14100 },
            { ...VEHICLES.ertiga, price: 17600 },
            { ...VEHICLES.innova, price: 18900 },
            { ...VEHICLES.crysta, price: 22100 },
            { ...VEHICLES.tt14, price: 25700 },
            { ...VEHICLES.tt18, price: 30700 },
            { ...VEHICLES.urbania, price: null },
            { ...VEHICLES.coach, price: null }
          ],
          itinerary: [
            { day: "Day 1", text: "Coimbatore to Rameshwaram Temple. Stay at Rameswaram." },
            { day: "Day 2", text: "Dhanushkodi, APJ Memorial Museum, Pambam Bridge back to Coimbatore." }
          ]
        },

        "Thiruchendur": {
          hash: "thiruchendur-2d",
           kmLimit: 900,
          vehicles: [
            { ...VEHICLES.sedan, price: 13600 },
            { ...VEHICLES.ertiga, price: 17100 },
            { ...VEHICLES.innova, price: 18400 },
            { ...VEHICLES.crysta, price: 21600 },
            { ...VEHICLES.tt14, price: 24700 },
            { ...VEHICLES.tt18, price: 29700 },
            { ...VEHICLES.urbania, price: null },
            { ...VEHICLES.coach, price: null }
          ],
          itinerary: [
            { day: "Day 1", text: "Coimbatore to Thiruchendur Temple. Stay at Thiruchendur." },
            { day: "Day 2", text: "Temple Visit back to Coimbatore." }
          ]
        },

        "Thiruvannamalai": {
          hash: "thiruvannamalai-2d",
           kmLimit: 700,
          vehicles: [
            { ...VEHICLES.sedan, price: 12100 },
            { ...VEHICLES.ertiga, price: 15000 },
            { ...VEHICLES.innova, price: 16100 },
            { ...VEHICLES.crysta, price: 18900 },
            { ...VEHICLES.tt14, price: 21600 },
            { ...VEHICLES.tt18, price: 25800 },
            { ...VEHICLES.urbania, price: null },
            { ...VEHICLES.coach, price: null }
          ],
          itinerary: [
            { day: "Day 1", text: "Coimbatore to Thiruvannamalai, Thiruvannamalai Girivalam. Stay at Thiruvannamalai." },
            { day: "Day 2", text: "Temple Darshan and back to Coimbatore." }
          ]
        }
      }
    },



    "3D": {
      title: "Three Day Tour Packages",
      subtitle: "Select your destination",
       kmLimit: 350,
      destinations: {
        "Ooty": {
          hash: "ooty-3d",
          vehicles: [
            { ...VEHICLES.sedan, price: 9500 },
            { ...VEHICLES.ertiga, price: 12000 },
            { ...VEHICLES.innova, price: 13000 },
            { ...VEHICLES.crysta, price: 16000 },
            { ...VEHICLES.tt14, price: 18000 },
            { ...VEHICLES.tt18, price: 21000 },
            { ...VEHICLES.urbania, price: null },
            { ...VEHICLES.coach, price: null }
          ],
          itinerary: [
            { day: "Day 1", text: "Coimbatore to Ooty, Doddabetta Peak, Tea Factory, Botanical Garden. Stay at Ooty." },
            { day: "Day 2", text: "Pine forest, Kamarajar Dam (Outside View), 6th Mile, 9th Mile Shooting Spot, Pykara Waterfalls, Pykara Lake (Boating). Stay at Ooty." },
            { day: "Day 3", text: "Rose Garden, Lake (Boat House), Thread Garden, Wax Museum, Ooty to Coonoor, on the way Ketti Valley View, MRC Military Camp (Outside View), Sims Park, Dolphin’s Nose, Lamb’s Rock and back to Coimbatore." }
          ]
        },

        "Kodaikanal": {
          hash: "kodaikanal-3d",
           kmLimit: 550,
          vehicles: [
            { ...VEHICLES.sedan, price: 11500 },
            { ...VEHICLES.ertiga, price: 14000 },
            { ...VEHICLES.innova, price: 15500 },
            { ...VEHICLES.crysta, price: 19000 },
            { ...VEHICLES.tt14, price: 21000 },
            { ...VEHICLES.tt18, price: 25500 },
            { ...VEHICLES.urbania, price: null },
            { ...VEHICLES.coach, price: null }
          ],
          itinerary: [
            { day: "Day 1", text: "Coimbatore to Palani Murugan Temple, Palani to Kodaikanal, Lake (Boat House), Coakers Walk. Stay at Kodaikanal." },
            { day: "Day 2", text: "Pillar Rocks, Bryant Park, Guna Cave, Green Valley View. Stay at Kodaikanal." },
            { day: "Day 3", text: "Chettiar Park, Kurinji Andavar Temple, Silver Cascade Falls and back to Coimbatore." }
          ]
        },

        "Munnar": {
          hash: "munnar-3d",
           kmLimit: 550,
          vehicles: [
            { ...VEHICLES.sedan, price: 12000 },
            { ...VEHICLES.ertiga, price: 14500 },
            { ...VEHICLES.innova, price: 16000 },
            { ...VEHICLES.crysta, price: 19500 },
            { ...VEHICLES.tt14, price: 21500 },
            { ...VEHICLES.tt18, price: 26000 },
            { ...VEHICLES.urbania, price: null },
            { ...VEHICLES.coach, price: null }
          ],
          itinerary: [
            { day: "Day 1", text: "Coimbatore to Munnar, Chinnar Wildlife Sanctuary, Lakkam Waterfalls, Eravikulam National Park. Stay at Munnar." },
            { day: "Day 2", text: "Rose Garden, Elephant Safari, Mattupatty Dam, Tea Garden, Echo Point, Top Station. Stay at Munnar." },
            { day: "Day 3", text: "Kalari and Kathakali Live Performance Show, Attukadu waterfalls, Pothamedu Viewpoint, Spice Garden and back to Coimbatore." }
          ]
        },

        "Wayanad": {
          hash: "wayanad-3d",
           kmLimit: 600,
          vehicles: [
            { ...VEHICLES.sedan, price: 13000 },
            { ...VEHICLES.ertiga, price: 15500 },
            { ...VEHICLES.innova, price: 17000 },
            { ...VEHICLES.crysta, price: 20500 },
            { ...VEHICLES.tt14, price: 23500 },
            { ...VEHICLES.tt18, price: 27500 },
            { ...VEHICLES.urbania, price: null },
            { ...VEHICLES.coach, price: null }
          ],
          itinerary: [
            { day: "Day 1", text: "Coimbatore to Wayanad, Banasura Sagar Dam, Edakkal Cave, Kuruva Island. Stay at Wayanad." },
            { day: "Day 2", text: "Muthunga Wildlife Sanctuary, Pakshipathalam Pazhassi Tourist place. Stay at Wayanad." },
            { day: "Day 3", text: "Pookot Lake, Soochipara Waterfalls and back to Coimbatore." }
          ]
        },


        "Valparai - Athirapally": {
          hash: "valparai-3d",
           kmLimit: 500,
          vehicles: [
            { ...VEHICLES.sedan, price: 10900 },
            { ...VEHICLES.ertiga, price: 13600 },
            { ...VEHICLES.innova, price: 14700 },
            { ...VEHICLES.crysta, price: 17800 },
            { ...VEHICLES.tt14, price: 20500 },
            { ...VEHICLES.tt18, price: 24600 },
            { ...VEHICLES.urbania, price: null },
            { ...VEHICLES.coach, price: null }
          ],
          itinerary: [
            { day: "Day 1", text: "Coimbatore to Valparai, Loam's View Point, Monkey Falls, Tea Estates, Tiger Valley, Balaji Temple - Overnight Stay" },
            { day: "Day 2", text: "Athirapally Waterfalls, Vazhachal Falls, Charpa Falls" },
            { day: "Day 3", text: "Nallamudi Viewpoint, Chinna Kallar Falls, Valaparai Sightseeing" }
          ]
        },

        "Mysore - Coorg": {
          hash: "mysroe-coorg-3d",
           kmLimit: 850,
          vehicles: [
            { ...VEHICLES.sedan, price: 15200 },
            { ...VEHICLES.ertiga, price: 18950 },
            { ...VEHICLES.innova, price: 20400 },
            { ...VEHICLES.crysta, price: 24200 },
            { ...VEHICLES.tt14, price: 31300 },
            { ...VEHICLES.tt18, price: 36800 },
            { ...VEHICLES.urbania, price: null },
            { ...VEHICLES.coach, price: null }
          ],
          itinerary: [
            { day: "Day 1", text: "Dubare Elephant camp, Golden Temple, Nisargadhama forest" },
            { day: "Day 2", text: "Abbey Falls, Coffer Plant, Raja seat and Mysore Halat." },
            { day: "Day 3", text: "Mysore zoo, Rail Museum, Mysore Palace, Chamundeshwari Temple, Lalith Mahal Palace and back to Coimbatore" }
          ]
        },



        "Navagraha Temple": {
          hash: "navagraha-temple-3d",
           kmLimit: 900,
          vehicles: [
            { ...VEHICLES.sedan, price: 17000 },
            { ...VEHICLES.ertiga, price: 21000 },
            { ...VEHICLES.innova, price: 22500 },
            { ...VEHICLES.crysta, price: 26000 },
            { ...VEHICLES.tt14, price: 31500 },
            { ...VEHICLES.tt18, price: 37500 },
            { ...VEHICLES.urbania, price: null },
            { ...VEHICLES.coach, price: null }
          ],
          itinerary: [
            { day: "Day 1", text: "Coimbatore to Thanjavur, Brahadeshwara Temple, Tingalur (Chandran Temple), Alangudi (Guru Temple), Thirunangeswaram (Raaghu Temple). Stay at Mayiladuthurai." },
            { day: "Day 2", text: "Suriyanar (Suriyan Temple), Kanjanoor (Sukkran Temple), Vaithesswaran (Sevvai Temple), Thiruvenkadu (Budhan Temple). Stay at Thirunallaru." },
            { day: "Day 3", text: "Keezhperumpallam (Kethu Temple), Thirunallaru (Sani Bhagavan Temple) and back to Coimbatore." }
          ]
        }
      }
    },

    "4D": {
      title: "Four Day Tour Packages",
      subtitle: "Select your destination",
      kmLimit: 450,
      destinations: {
        "Ooty": {
          hash: "ooty-4d",
          vehicles: [
            { ...VEHICLES.sedan, price: 12500 },
            { ...VEHICLES.ertiga, price: 15500 },
            { ...VEHICLES.innova, price: 16500 },
            { ...VEHICLES.crysta, price: 20500 },
            { ...VEHICLES.tt14, price: 23500 },
            { ...VEHICLES.tt18, price: 28000 },
            { ...VEHICLES.urbania, price: null },
            { ...VEHICLES.coach, price: null }
          ],
          itinerary: [
            { day: "Day 1", text: "Coimbatore to Coonoor, Ketti Valley View, MRC Military Camp (Outside View), Sim’s Park, Dolphin’s Nose, Lamb’s Rock, to Ooty, Rose Garden, Lake (Boat House), Thread Garden, Wax Museum. Stay at Ooty." },
            { day: "Day 2", text: "Pine forest, Kamarajar Dam, Tree Garden, 9th Mile Shooting Spot, Pykara Waterfalls, Pykara Dam. Stay at Ooty." },
            { day: "Day 3", text: "Doddabetta Peak, Tea Factory, Botanical Garden. Stay at Ooty." },
            { day: "Day 4", text: "Ooty to Kotagiri, Catherine waterfalls, Kodanadu viewpoint and back to Coimbatore." }
          ]
        },

        "Kodaikanal": {
          hash: "kodaikanal-4d",
          kmLimit: 550,
          vehicles: [
            { ...VEHICLES.sedan, price: 13000 },
            { ...VEHICLES.ertiga, price: 16500 },
            { ...VEHICLES.innova, price: 18000 },
            { ...VEHICLES.crysta, price: 22000 },
            { ...VEHICLES.tt14, price: 25000 },
            { ...VEHICLES.tt18, price: 30000 },
            { ...VEHICLES.urbania, price: null },
            { ...VEHICLES.coach, price: null }
          ],
          itinerary: [
            { day: "Day 1", text: "Coimbatore to Palani Andavar Temple, to Kodaikanal, Silver Cascade Waterfalls. Stay at Kodaikanal." },
            { day: "Day 2", text: "Kodaikanal Lake, Bryant Park, Coakers Walk, Chettiar Park, Kurinji Andavar Temple. Stay at Kodaikanal." },
            { day: "Day 3", text: "Pine forest, Guna Cave, Pillar Rocks, Green Valley View, Moyer Point, Silent Valley. Stay at Kodaikanal." },
            { day: "Day 4", text: "Back to Coimbatore." }
          ]
        },


        "Ooty - Mysore": {
          hash: "ooty-mysore-4d",
                  kmLimit: 700,
          vehicles: [
            { ...VEHICLES.sedan, price: 15500 },
            { ...VEHICLES.ertiga, price: 19500 },
            { ...VEHICLES.innova, price: 21000 },
            { ...VEHICLES.crysta, price: 25500 },
            { ...VEHICLES.tt14, price: 32000 },
            { ...VEHICLES.tt18, price: 37500 },
            { ...VEHICLES.urbania, price: null },
            { ...VEHICLES.coach, price: null }
          ],
          itinerary: [
            { day: "Day 1", text: "Coimbatore to Coonoor, Sims Park, Dolphin's Nose, Lamb's Rock, to Ooty, Tea Garden. Stay at Ooty." },
            { day: "Day 2", text: "Rose Garden, Botanical Garden, Lake (Boathouse), Doddabetta Peak, Tea Factory, Wax Museum, Karnataka Garden. Stay at Ooty." },
            { day: "Day 3", text: "Checkout from hotel at Ooty, Pine tree forest, 9th Mile Shooting spot, Pykara Waterfalls, Mudumalai National Park or Bandipur Wildlife Safari, Mysore Palace. Stay at Mysore." },
            { day: "Day 4", text: "Checkout from hotel at Mysore, Mysore Zoo, Chamundeshwari Temple and back to Coimbatore." }
          ]
        },

        "Munnar - Thekkady": {
          hash: "munnarthekkady-4d",
          kmLimit: 800,
          vehicles: [
            { ...VEHICLES.sedan, price: 16500 },
            { ...VEHICLES.ertiga, price: 20500 },
            { ...VEHICLES.innova, price: 22500 },
            { ...VEHICLES.crysta, price: 26500 },
            { ...VEHICLES.tt14, price: 30000 },
            { ...VEHICLES.tt18, price: 36000 },
            { ...VEHICLES.urbania, price: null },
            { ...VEHICLES.coach, price: null }
          ],
          itinerary: [
            { day: "Day 1", text: "Coimbatore to Munnar, on the way sight-seeing at Lakkam Waterfalls and Eravikulam National Park. Stay at Munnar." },
            { day: "Day 2", text: "Mattupatty Dam, Rose Garden, Echo Point, Tea plantation and Top Station. Stay at Munnar." },
            { day: "Day 3", text: "Kalari and Kathakali Live performance Show, Spice Garden, Off Road Safari (Price excluded). Stay at Thekkady." },
            { day: "Day 4", text: "Periyar Wildlife Sanctuary and local sightseeings and back to Coimbatore." }
          ]
        },

        "Coorg - Chikmagalur": {
          hash: "coorgchikmagalur-4d",
          kmLimit: 1100,
          vehicles: [
            { ...VEHICLES.sedan, price: 19700 },
            { ...VEHICLES.ertiga, price: 24500 },
            { ...VEHICLES.innova, price: 27000 },
            { ...VEHICLES.crysta, price: 32000 },
            { ...VEHICLES.tt14, price: 40000 },
            { ...VEHICLES.tt18, price: 47000 },
            { ...VEHICLES.urbania, price: null },
            { ...VEHICLES.coach, price: null }
          ],
          itinerary: [
        { day: "Day 1", text: "Coimbatore to Coorg. Pickup from Airport/Railway Station, scenic drive with optional stops, check-in and relax. Stay at Coorg." },
        { day: "Day 2", text: "Abbey Falls, Raja’s Seat, Madikeri Fort, Omkareshwara Temple, Dubare Elephant Camp (optional), Cauvery Nisargadhama. Stay at Coorg." },
        { day: "Day 3", text: "Coorg to Chikmagalur. Visit Mullayanagiri Peak, Baba Budangiri, Hirekolale Lake. Stay at Chikmagalur." },
        { day: "Day 4", text: "Chikmagalur to Coimbatore. Visit Coffee Plantation (optional), return drop at Airport/Railway Station." }
      ]
        },

        "Coorg - Wayanad": {
          hash: "Coorgwayanad-4d",
          kmLimit: 900,
          vehicles: [
            { ...VEHICLES.sedan, price: 18000 },
            { ...VEHICLES.ertiga, price: 22500 },
            { ...VEHICLES.innova, price: 24500 },
            { ...VEHICLES.crysta, price: 29000 },
            { ...VEHICLES.tt14, price: 36000 },
            { ...VEHICLES.tt18, price: 42500 },
            { ...VEHICLES.urbania, price: null },
            { ...VEHICLES.coach, price: null }
          ],
          itinerary: [
    { day: "Day 1", text: "Coimbatore to Coorg. Pickup from Airport/Railway Station, scenic drive with refreshment stops, check-in and relax. Stay at Coorg." },
    { day: "Day 2", text: "Abbey Falls, Raja’s Seat, Madikeri Fort, Omkareshwara Temple, Dubare Elephant Camp (optional), Cauvery Nisargadhama. Stay at Coorg." },
    { day: "Day 3", text: "Coorg to Wayanad. Visit Edakkal Caves, Soochipara Falls / Meenmutty Falls (based on time). Stay at Wayanad." },
    { day: "Day 4", text: "Wayanad to Coimbatore. Visit Pookode Lake, Lakkidi View Point and drop at Airport/Railway Station." }
  ]
        },

        "Kodaikanal - Madurai - Rameswaram": {
          hash: "kodaikanal-madurai-rameswaram-4d",
            kmLimit: 1000,
          vehicles: [
            { ...VEHICLES.sedan, price: 18500 },
            { ...VEHICLES.ertiga, price: 23000 },
            { ...VEHICLES.innova, price: 25000 },
            { ...VEHICLES.crysta, price: 30000 },
            { ...VEHICLES.tt14, price: 34000 },
            { ...VEHICLES.tt18, price: 40500 },
            { ...VEHICLES.urbania, price: null },
            { ...VEHICLES.coach, price: null }
          ],
          itinerary: [
            { day: "Day 1", text: "Coimbatore to Palani Murugan Temple, Silver Cascade waterfalls, Kodaikanal Lake, Bryant Park, Coakers Walk, Chettiar Park, Kurinji Andavar Temple. Stay at Kodaikanal." },
            { day: "Day 2", text: "Pine tree forest, Guna Cave, Pillar Rocks, Green Valley View, Moyer Point, Silent Valley. Stay at Kodaikanal." },
            { day: "Day 3", text: "Checkout from hotel at Kodaikanal, Kodaikanal to Rameswaram, Temple Darshan, Local Sight Seeing. Stay at Rameswaram." },
            { day: "Day 4", text: "Rameswaram to Madurai, Meenakshi Amman Temple and drop at Madurai Railway Station/Airport." }
          ]
        }
      }
    },

    "5D": {
      title: "Five Day Tour Packages",
      subtitle: "Select your destination",
      destinations: {
        "Ooty": {
          hash: "ooty-5d",
            kmLimit: 550,
          vehicles: [
            { ...VEHICLES.sedan, price: 15500 },
            { ...VEHICLES.ertiga, price: 19000 },
            { ...VEHICLES.innova, price: 20500 },
            { ...VEHICLES.crysta, price: 25500 },
            { ...VEHICLES.tt14, price: 29000 },
            { ...VEHICLES.tt18, price: 34500 },
            { ...VEHICLES.urbania, price: null },
            { ...VEHICLES.coach, price: null }
          ],
          itinerary: [
        { day: "Day 1", text: "Arrival and Coonoor sightseeing. Visit Sim’s Park, Lamb’s Rock, Dolphin’s Nose, Tea Gardens, then transfer to Ooty and check-in. Stay at Ooty." },
        { day: "Day 2", text: "Ooty sightseeing. Botanical Garden, Rose Garden, Ooty Lake (Boathouse), Thread Garden, Doddabetta Peak, Tea Factory & Museum, Wax Museum. Stay at Ooty." },
        { day: "Day 3", text: "Avalanche sightseeing. Visit Avalanche Lake, Emerald Lake (jeep ride if required), enjoy nature and return to Ooty. Stay at Ooty." },
        { day: "Day 4", text: "Pykara & Mudumalai. Visit Pykara Lake, Pykara Falls, Mudumalai Wildlife Sanctuary (optional safari) and return to Ooty. Stay at Ooty." },
        { day: "Day 5", text: "Check-out, optional local shopping and drop at Coimbatore / Mettupalayam." }
      ]
        },

        "Ooty - Kodaikanal": {
          hash: "ooty-kodaikanal-5d",
          kmLimit: 850,
          vehicles: [
            { ...VEHICLES.sedan, price: 19000 },
            { ...VEHICLES.ertiga, price: 23500 },
            { ...VEHICLES.innova, price: 25500 },
            { ...VEHICLES.crysta, price: 30500 },
            { ...VEHICLES.tt14, price: 34500 },
            { ...VEHICLES.tt18, price: 41500 },
            { ...VEHICLES.urbania, price: null },
            { ...VEHICLES.coach, price: null }
          ],
          itinerary: [
        { day: "Day 1", text: "Coimbatore to Coonoor & Ooty. Pickup from Coimbatore, visit Sim’s Park, Lamb’s Rock, Dolphin’s Nose, Tea Gardens, then transfer to Ooty and check-in. Stay at Ooty." },
        { day: "Day 2", text: "Ooty sightseeing. Botanical Garden, Rose Garden, Ooty Lake (Boathouse), Thread Garden, Doddabetta Peak, Tea Factory & Museum, Wax Museum. Stay at Ooty." },
        { day: "Day 3", text: "Ooty to Kodaikanal. Scenic hill drive, check-in and evening leisure / local walk. Stay at Kodaikanal." },
        { day: "Day 4", text: "Kodaikanal sightseeing. Pillar Rocks, Bryant Park, Green Valley View, Kurinji Andavar Temple, Silver Cascade Falls, Guna Cave, Pine Forest, Coaker’s Walk. Stay at Kodaikanal." },
        { day: "Day 5", text: "Kodaikanal to Coimbatore. Optional shopping / lake visit and drop at Coimbatore." }
      ]
        },


        "Ooty - Mysore - Bangalore": {
          hash: "ooty-mysore-bangalore-5d",
          kmLimit: 1200,
          vehicles: [
            { ...VEHICLES.sedan, price: 23500 },
            { ...VEHICLES.ertiga, price: 29000 },
            { ...VEHICLES.innova, price: 31500 },
            { ...VEHICLES.crysta, price: 37000 },
            { ...VEHICLES.tt14, price: 45500 },
            { ...VEHICLES.tt18, price: 54000 },
            { ...VEHICLES.urbania, price: null },
            { ...VEHICLES.coach, price: null }
          ],
          itinerary: [
        { day: "Day 1", text: "Coimbatore to Coonoor & Ooty. Pickup from Coimbatore, visit Sim’s Park, Lamb’s Rock, Dolphin’s Nose, Tea Gardens, then transfer to Ooty and check-in. Stay at Ooty." },
        { day: "Day 2", text: "Ooty sightseeing. Botanical Garden, Rose Garden, Ooty Lake (Boathouse), Thread Garden, Doddabetta Peak, Tea Factory & Museum, Wax Museum. Stay at Ooty." },
        { day: "Day 3", text: "Ooty to Mysore via Pykara. Visit Pykara Lake, Pykara Falls, drive via Mudumalai & Bandipur forest route, check-in. Stay at Mysore." },
        { day: "Day 4", text: "Mysore sightseeing. Mysore Palace, Chamundi Hills, Mysore Zoo, Brindavan Gardens, St. Philomena’s Church. Stay at Mysore." },
        { day: "Day 5", text: "Mysore to Bangalore. Visit Tipu Sultan’s Palace, Lalbagh Botanical Garden, Vidhana Soudha (outside view) and drop at Coimbatore / Bangalore" }
      ]
        },


        "Kodaikanal - Munnar": {
          hash: "kodaikanal-munnar-5d",
          kmLimit: 800,
          vehicles: [
            { ...VEHICLES.sedan, price: 18000 },
            { ...VEHICLES.ertiga, price: 22500 },
            { ...VEHICLES.innova, price: 24500 },
            { ...VEHICLES.crysta, price: 29500 },
            { ...VEHICLES.tt14, price: 33500 },
            { ...VEHICLES.tt18, price: 40000 },
            { ...VEHICLES.urbania, price: null },
            { ...VEHICLES.coach, price: null }
          ],
          itinerary: [
        { day: "Day 1", text: "Coimbatore to Munnar. Scenic hill drive via Valara Falls and Cheeyappara Falls, check-in and relax. Stay at Munnar." },
        { day: "Day 2", text: "Munnar sightseeing. Mattupetty Dam, Echo Point, Kundala Lake, Tea Museum, Eravikulam National Park (Rajamalai). Stay at Munnar." },
        { day: "Day 3", text: "Munnar to Kodaikanal. Scenic inter-state hill drive, check-in and evening leisure / lake visit. Stay at Kodaikanal." },
        { day: "Day 4", text: "Kodaikanal sightseeing. Pillar Rocks, Bryant Park, Green Valley View, Kurinji Andavar Temple, Silver Cascade Falls, Guna Cave, Pine Forest, Coaker’s Walk. Stay at Kodaikanal." },
        { day: "Day 5", text: "Kodaikanal to Coimbatore. Optional shopping / lake visit and drop at Coimbatore." }
      ]
    },

        "Kodaikanal - Madurai - Rameshwaram": {
          hash: "kodaikanal-madurai-rameshwaram-5d",
          kmLimit: 1150,
          vehicles: [
            { ...VEHICLES.sedan, price: 22500 },
            { ...VEHICLES.ertiga, price: 28000 },
            { ...VEHICLES.innova, price: 30000 },
            { ...VEHICLES.crysta, price: 36000 },
            { ...VEHICLES.tt14, price: 41000 },
            { ...VEHICLES.tt18, price: 48500 },
            { ...VEHICLES.urbania, price: null },
            { ...VEHICLES.coach, price: null }
          ],
          itinerary: [
        { day: "Day 1", text: "Coimbatore to Kodaikanal. Pickup from Coimbatore, scenic hill drive, check-in, visit Kodaikanal Lake & Coaker’s Walk. Stay at Kodaikanal." },
        { day: "Day 2", text: "Kodaikanal sightseeing. Pillar Rocks, Bryant Park, Green Valley View, Kurinji Andavar Temple, Silver Cascade Falls, Guna Cave, Pine Forest. Stay at Kodaikanal." },
        { day: "Day 3", text: "Kodaikanal to Rameswaram. Long drive with breaks, visit Ramanathaswamy Temple, Pamban Bridge (if time permits). Stay at Rameswaram." },
        { day: "Day 4", text: "Rameswaram to Madurai. Visit Dhanushkodi, APJ Abdul Kalam Memorial, proceed to Madurai, visit Meenakshi Amman Temple. Stay at Madurai." },
        { day: "Day 5", text: "Madurai to Coimbatore. Optional visit Thirumalai Nayakkar Mahal and drop at Coimbatore." }
      ]
        },


        "Munnar - Varkala - Alleppey": {
          hash: "munnar-varkala-alleppey-5d",
              kmLimit: 1100,
          vehicles: [
            { ...VEHICLES.sedan, price: 22000 },
            { ...VEHICLES.ertiga, price: 27500 },
            { ...VEHICLES.innova, price: 29500 },
            { ...VEHICLES.crysta, price: 35000 },
            { ...VEHICLES.tt14, price: 40000 },
            { ...VEHICLES.tt18, price: 47500 },
            { ...VEHICLES.urbania, price: null },
            { ...VEHICLES.coach, price: null }
          ],
          itinerary: [
      { day: "Day 1", text: "Coimbatore to Munnar. Scenic hill drive via Valara Falls and Cheeyappara Falls, check-in and relax. Stay at Munnar." },
      { day: "Day 2", text: "Munnar sightseeing. Mattupetty Dam, Echo Point, Kundala Lake, Tea Museum, Eravikulam National Park (Rajamalai). Stay at Munnar." },
      { day: "Day 3", text: "Munnar to Varkala. Transfer, visit Varkala Beach, Cliff, Janardanaswamy Temple and leisure time at beach. Stay at Varkala." },
      { day: "Day 4", text: "Varkala to Alleppey. Houseboat check-in, backwater cruise with meals and overnight stay in houseboat. Stay at Alleppey Houseboat." },
      { day: "Day 5", text: "Alleppey to Coimbatore. Check-out and return drop at Coimbatore." }
    ]
        },


      }
    },

    "6D": {
      title: "Six Day Tour Packages",
      subtitle: "Select your destination",
      destinations: {
        "Ooty - Kodaikanal - Madurai": {
          hash: "ooty-kodaikanal-madurai-6d",
            kmLimit: 1100,
          vehicles: [
            { ...VEHICLES.sedan, price: 24000 },
            { ...VEHICLES.ertiga, price: 29500 },
            { ...VEHICLES.innova, price: 32000 },
            { ...VEHICLES.crysta, price: 38000 },
            { ...VEHICLES.tt14, price: 43500 },
            { ...VEHICLES.tt18, price: 52000 },
            { ...VEHICLES.urbania, price: null },
            { ...VEHICLES.coach, price: null }
          ],
          itinerary: [
          { day: "Day 1", text: "Coimbatore to Isha & Coonoor to Ooty. Visit Isha Yoga Center, Sim’s Park, Lamb’s Rock, Dolphin’s Nose, Tea Gardens, then transfer to Ooty and check-in. Stay at Ooty." },
          { day: "Day 2", text: "Ooty sightseeing. Botanical Garden, Rose Garden, Ooty Lake (Boathouse), Thread Garden, Doddabetta Peak, Tea Factory & Museum, Wax Museum. Stay at Ooty." },
          { day: "Day 3", text: "Ooty to Kodaikanal. Scenic hill drive, check-in and evening leisure. Stay at Kodaikanal." },
          { day: "Day 4", text: "Kodaikanal sightseeing. Pillar Rocks, Bryant Park, Green Valley View, Kurinji Andavar Temple, Silver Cascade Falls, Guna Cave, Pine Forest, Coaker’s Walk. Stay at Kodaikanal." },
          { day: "Day 5", text: "Kodaikanal to Madurai. Visit Meenakshi Amman Temple, Thirumalai Nayakkar Mahal and evening shopping. Stay at Madurai." },
          { day: "Day 6", text: "Madurai sightseeing. Visit Gandhi Memorial Museum, local markets and drop at Coimbatore / Madurai." }
        ]
        },



                "Kodaikanal - Ooty - Mysore": {
                  hash: "kodaikanal-ooty-mysore-6d",
                  kmLimit: 1200,
                  vehicles: [
                    { ...VEHICLES.sedan, price: 25500 },
                    { ...VEHICLES.ertiga, price: 32500 },
                    { ...VEHICLES.innova, price: 34000 },
                    { ...VEHICLES.crysta, price: 40500 },
                    { ...VEHICLES.tt14, price: 49000 },
                    { ...VEHICLES.tt18, price: 58000 },
                    { ...VEHICLES.urbania, price: null },
                    { ...VEHICLES.coach, price: null }
                  ],
                  itinerary: [
                    { day: "Day 1", text: "Coimbatore to Palani Murugan Temple, to Kodaikanal, Silver Cascade waterfalls. Stay at Kodaikanal." },
                    { day: "Day 2", text: "Pine tree forest, Guna Cave, Pillar Rocks, Moyer Point, Kurinji Andavar Temple, Rose Garden, Dolphin’s Nose. Stay at Kodaikanal." },
                    { day: "Day 3", text: "Kodaikanal to Coonoor, Coonoor local sight-seeing, Coonoor to Ooty. Stay at Ooty." },
                    { day: "Day 4", text: "Rose Garden, Botanical Garden, Lake (Boathouse), Doddabetta Peak, Tea factory, Wax Museum. Stay at Ooty." },
                    { day: "Day 5", text: "Pine tree forest, Tree Garden, 9th Mile Shooting spot, Pykara Waterfalls, Pykara Dam, Kamarajar Dam, Mudumalai National Park, Ooty to Mysore. Stay at Mysore." },
                    { day: "Day 6", text: "Chamundeshwari Temple, Mysore Zoo, Rail Museum, Mysore Palace and back to Coimbatore." }
                  ]
                },

        "Ooty - Coorg - Mysore - Bangalore": {
          hash: "ooty-coorg-mysore-bangalore-6d",
          kmLimit: 1500,
          vehicles: [
            { ...VEHICLES.sedan, price: 28500 },
            { ...VEHICLES.ertiga, price: 35500 },
            { ...VEHICLES.innova, price: 38500 },
            { ...VEHICLES.crysta, price: 45500 },
            { ...VEHICLES.tt14, price: 54500 },
            { ...VEHICLES.tt18, price: 64500 },
            { ...VEHICLES.urbania, price: null },
            { ...VEHICLES.coach, price: null }
          ],
          itinerary: [
            { day: "Day 1", text: "Coimbatore to Coonoor, Sims Park, Dolphin’s Nose, Lamb’s Rock, to Ooty, Tea Garden. Stay at Ooty." },
            { day: "Day 2", text: "Ooty sight-seeing, Kattery Park, Rose Garden, Botanical Garden, Lake (Boathouse), Doddabetta Peak, Tea factory, Wax Museum, Karnataka Garden. Stay at Ooty." },
            { day: "Day 3", text: "Checkout from hotel at Ooty, Pine tree forest, Tree Garden, 9th Mile Shooting spot, Pykara Waterfalls, Mudumalai National Park. Stay at Coorg." },
            { day: "Day 4", text: "Golden Temple, Raja Seat, Thalakaveri, Nisargadhama forest. Stay at Coorg." },
            { day: "Day 5", text: "Checkout from hotel at Coorg, Coorg to Mysore, Mysore Zoo, Rail Museum, Mysore Palace. Stay at Mysore." },
            { day: "Day 6", text: "Mysore Silk Emporium, Chamundeshwari Temple, Lalith Mahal Palace and drop at Bangalore / Coimbatore" }
          ]
        },


        "Munnar - Alleppey - Varkala - Kovalam - Trivandrum": {
          hash: "munnar-alleppey-varkala-kovalam-trivandrum-6d",
          kmLimit: 1300,
          vehicles: [
            { ...VEHICLES.sedan, price: 25500 },
            { ...VEHICLES.ertiga, price: 32000 },
            { ...VEHICLES.innova, price: 34500 },
            { ...VEHICLES.crysta, price: 41500 },
            { ...VEHICLES.tt14, price: 47000 },
            { ...VEHICLES.tt18, price: 56500 },
            { ...VEHICLES.urbania, price: null },
            { ...VEHICLES.coach, price: null }
          ],
          itinerary: [
          { day: "Day 1", text: "Coimbatore to Munnar. Scenic hill drive, visit Lakkam Waterfalls, Eravikulam National Park, check-in and relax. Stay at Munnar." },
          { day: "Day 2", text: "Munnar sightseeing. Mattupetty Dam, Echo Point, Kundala Lake, Tea Museum, Top Station (based on time). Stay at Munnar." },
          { day: "Day 3", text: "Munnar to Alleppey. Houseboat check-in, backwater cruise with meals and overnight stay in houseboat. Stay at Alleppey Houseboat." },
          { day: "Day 4", text: "Alleppey to Varkala. Visit Varkala Beach, Cliff, Janardanaswamy Temple and relax. Stay at Varkala." },
          { day: "Day 5", text: "Varkala to Kovalam. Visit Kovalam Beach, Lighthouse Beach and leisure time. Stay at Kovalam." },
          { day: "Day 6", text: "Kovalam to Drop. Optional visit Padmanabhaswamy Temple and drop at Trivandrum / Coimbatore." }
        ]
        },


        "Ooty - Wayanad - Coorg": {
          hash: "ooty-wayanad-coorg-6d",
            kmLimit: 1000,
          vehicles: [
            { ...VEHICLES.sedan, price: 23000 },
            { ...VEHICLES.ertiga, price: 28500 },
            { ...VEHICLES.innova, price: 31000 },
            { ...VEHICLES.crysta, price: 37000 },
            { ...VEHICLES.tt14, price: 45500 },
            { ...VEHICLES.tt18, price: 54000 },
            { ...VEHICLES.urbania, price: null },
            { ...VEHICLES.coach, price: null }
          ],
          itinerary: [
        { day: "Day 1", text: "Coimbatore to Coonoor & Ooty. Visit Sim’s Park, Lamb’s Rock, Dolphin’s Nose, Tea Gardens, then transfer to Ooty and check-in. Stay at Ooty." },
        { day: "Day 2", text: "Ooty sightseeing. Botanical Garden, Rose Garden, Ooty Lake (Boathouse), Thread Garden, Doddabetta Peak, Tea Factory & Museum, Wax Museum. Stay at Ooty." },
        { day: "Day 3", text: "Ooty to Wayanad. Scenic forest drive, visit Pookode Lake, Lakkidi View Point (based on time), check-in. Stay at Wayanad." },
        { day: "Day 4", text: "Wayanad sightseeing. Edakkal Caves, Soochipara Falls / Meenmutty Falls, Banasura Sagar Dam (optional). Stay at Wayanad." },
        { day: "Day 5", text: "Wayanad to Coorg. Visit Abbey Falls, Raja’s Seat, Madikeri Fort, Omkareshwara Temple, check-in. Stay at Coorg." },
        { day: "Day 6", text: "Coorg sightseeing. Dubare Elephant Camp, Cauvery Nisargadhama and drop at Mysore / Coimbatore." }
      ]
        }
      }
    },

    "7D": {
      title: "Seven Day Tour Packages",
      subtitle: "Select your destination",
          kmLimit: 1200,
      destinations: {
        "Ooty - Kodaikanal - Munnar": {
          hash: "ooty-kodaikanal-munnar-7d",
          vehicles: [
            { ...VEHICLES.sedan, price: 27000 },
            { ...VEHICLES.ertiga, price: 33500 },
            { ...VEHICLES.innova, price: 36000 },
            { ...VEHICLES.crysta, price: 43500 },
            { ...VEHICLES.tt14, price: 48500 },
            { ...VEHICLES.tt18, price: 58500 },
            { ...VEHICLES.urbania, price: null },
            { ...VEHICLES.coach, price: null }
          ],
          itinerary: [
            { day: "Day 1", text: "Coimbatore to Coonoor, Sims Park, Dolphin's Nose, Lamb's Rock, to Ooty, Tea Garden. Stay at Ooty." },
            { day: "Day 2", text: "Rose Garden, Botanical Garden, Lake (Boathouse), Doddabetta Peak, Tea factory, Wax Museum. Stay at Ooty." },
            { day: "Day 3", text: "Ooty to Kodaikanal, Silver Cascade waterfalls. Stay at Kodaikanal." },
            { day: "Day 4", text: "Pine tree forest, Guna Cave, Pillar Rocks, Moyer Point, Rose Garden, Dolphin’s Nose. Stay at Kodaikanal." },
            { day: "Day 5", text: "Kodaikanal to Munnar, Lakkam waterfalls, Eravikulam national park. Stay at Munnar." },
            { day: "Day 6", text: "Rose Garden, Elephant Safari, Mattupatty Dam, Tea Garden, Kalari and Kathakali live performance show, spice garden, Top Station. Stay at Munnar." },
            { day: "Day 7", text: "Back to Coimbatore." }
          ]
        },

        "Ooty - Kodaikanal - Madurai - Rameswaram": {
          hash: "ooty-kodaikanal-madurai-rameswaram-7d",
              kmLimit: 1400,
          vehicles: [
            { ...VEHICLES.sedan, price: 29000 },
            { ...VEHICLES.ertiga, price: 36000 },
            { ...VEHICLES.innova, price: 39000 },
            { ...VEHICLES.crysta, price: 46500 },
            { ...VEHICLES.tt14, price: 52000 },
            { ...VEHICLES.tt18, price: 62500 },
            { ...VEHICLES.urbania, price: null },
            { ...VEHICLES.coach, price: null }
          ],
          itinerary: [
            { day: "Day 1", text: "Coimbatore to Coonoor, Sims Park, Dolphin’s Nose, Lamb’s Rock, to Ooty, Tea Garden. Stay at Ooty." },
            { day: "Day 2", text: "Rose Garden, Botanical Garden, Lake (Boathouse), Doddabetta Peak, Tea factory, Wax Museum. Stay at Ooty." },
            { day: "Day 3", text: "Ooty to Kodaikanal, Silver Cascade waterfalls. Stay at Kodaikanal." },
            { day: "Day 4", text: "Pine tree forest, Guna Cave, Pillar Rocks, Moyer Point, Rose Garden, Dolphin’s Nose. Stay at Kodaikanal." },
            { day: "Day 5", text: "Kodaikanal to Rameswaram, Rameswaram local sight-seeing. Stay at Rameswaram." },
            { day: "Day 6", text: "Rameswaram local sight-seeing, Rameswaram to Madurai, Madurai local sight-seeing. Stay at Madurai." },
            { day: "Day 7", text: "Madurai local sight-seeing and back to Coimbatore." }
          ]
        },

        "Ooty - Mysore - Coorg - Bangalore": {
          hash: "ooty-mysore-coorg-bangalore-7d",
            kmLimit: 1500,
          vehicles: [
            { ...VEHICLES.sedan, price: 30000 },
            { ...VEHICLES.ertiga, price: 37500 },
            { ...VEHICLES.innova, price: 41000 },
            { ...VEHICLES.crysta, price: 48000 },
            { ...VEHICLES.tt14, price: 58000 },
            { ...VEHICLES.tt18, price: 69000 },
            { ...VEHICLES.urbania, price: null },
            { ...VEHICLES.coach, price: null }
          ],
          itinerary: [
            { day: "Day 1", text: "Coimbatore to Coonoor, Sims Park, Dolphin’s Nose, Lamb’s Rock, to Ooty, Tea Garden. Stay at Ooty." },
            { day: "Day 2", text: "Rose Garden, Botanical Garden, Lake (Boathouse), Doddabetta Peak, Tea factory, Wax Museum. Stay at Ooty." },
            { day: "Day 3", text: "Checkout from hotel at Ooty, Pine tree forest, Tree Garden, 9th Mile Shooting spot, Pykara Waterfalls, Pykara Dam, Kamarajar Dam, Mudumalai National Park. Stay at Coorg." },
            { day: "Day 4", text: "Coorg Local sight-seeing. Stay at Coorg." },
            { day: "Day 5", text: "Checkout from hotel at Coorg, Coorg to Mysore, Rail Museum, Lalith Mahal Palace, Brindavan Gardens. Stay at Mysore." },
            { day: "Day 6", text: "Mysore Palace, Chamundeshwari Temple, Mysore Zoo. Stay at Mysore." },
            { day: "Day 7", text: "Mysore to Bangalore and drop at Bangalore Railway Station/Airport." }
          ]
        },

        "Kodaikanal - Ooty - Mysore - Bangalore": {
          hash: "kodaikanal-ooty-mysore-bangalore-7d",
              kmLimit: 1600,
          vehicles: [
            { ...VEHICLES.sedan, price: 31500 },
            { ...VEHICLES.ertiga, price: 39000 },
            { ...VEHICLES.innova, price: 42500 },
            { ...VEHICLES.crysta, price: 50500 },
            { ...VEHICLES.tt14, price: 60500 },
            { ...VEHICLES.tt18, price: 71500 },
            { ...VEHICLES.urbania, price: null },
            { ...VEHICLES.coach, price: null }
          ],
          itinerary: [
            { day: "Day 1", text: "Coimbatore to Kodaikanal. Scenic hill drive, check-in, visit Kodaikanal Lake & Coaker’s Walk. Stay at Kodaikanal." },
            { day: "Day 2", text: "Kodaikanal sightseeing. Pillar Rocks, Bryant Park, Green Valley View, Kurinji Andavar Temple, Silver Cascade Falls, Guna Cave, Pine Forest. Stay at Kodaikanal." },
            { day: "Day 3", text: "Kodaikanal to Coonoor & Ooty. Visit Sim’s Park, Lamb’s Rock, Dolphin’s Nose, Tea Gardens, then transfer to Ooty and check-in. Stay at Ooty." },
            { day: "Day 4", text: "Ooty sightseeing. Botanical Garden, Rose Garden, Ooty Lake (Boathouse), Thread Garden, Doddabetta Peak, Tea Factory & Museum, Wax Museum. Stay at Ooty." },
            { day: "Day 5", text: "Ooty to Mysore via Pykara. Visit Pykara Lake, Pykara Falls, drive via Mudumalai & Bandipur forest route, check-in. Stay at Mysore." },
            { day: "Day 6", text: "Mysore sightseeing. Mysore Palace, Chamundi Hills, Mysore Zoo, Brindavan Gardens, St. Philomena’s Church. Stay at Mysore." },
            { day: "Day 7", text: "Mysore to Drop. Optional sightseeing / shopping and drop at Bangalore / Coimbatore." }
          ]
        },



        "Munnar - Thekkady - Alleppey - Varkala - Kovalam": {
          hash: "munnar-thekkady-varkala-alleppey-kovalam-7d",
            kmLimit: 1500,
          vehicles: [
            { ...VEHICLES.sedan, price: 30000 },
            { ...VEHICLES.ertiga, price: 37500 },
            { ...VEHICLES.innova, price: 40500 },
            { ...VEHICLES.crysta, price: 48000 },
            { ...VEHICLES.tt14, price: 55000 },
            { ...VEHICLES.tt18, price: 65500 },
            { ...VEHICLES.urbania, price: null },
            { ...VEHICLES.coach, price: null }
          ],
          itinerary: [
      { day: "Day 1", text: "Coimbatore to Munnar. Scenic hill drive, visit Lakkam Waterfalls, Eravikulam National Park, check-in and relax. Stay at Munnar." },
      { day: "Day 2", text: "Munnar sightseeing. Mattupetty Dam, Echo Point, Kundala Lake, Tea Museum, Top Station (based on time). Stay at Munnar." },
      { day: "Day 3", text: "Munnar to Thekkady. Visit Periyar Wildlife Sanctuary (optional boat safari), Spice Plantation, evening cultural shows (optional), check-in. Stay at Thekkady." },
      { day: "Day 4", text: "Thekkady to Alleppey. Houseboat check-in, backwater cruise with meals and overnight stay in houseboat. Stay at Alleppey Houseboat." },
      { day: "Day 5", text: "Alleppey to Varkala. Visit Varkala Beach, Cliff, Janardanaswamy Temple and relax. Stay at Varkala." },
      { day: "Day 6", text: "Varkala to Kovalam. Visit Kovalam Beach, Lighthouse Beach and leisure time. Stay at Kovalam." },
      { day: "Day 7", text: "Trivandrum sightseeing. Visit Padmanabhaswamy Temple, Napier Museum (based on time) and drop at Trivandrum / Coimbatore." }
    ]
        }

      }
    }
  };



  const destinationSidebar = document.getElementById("destinationSidebar");
  const packageTabs = document.querySelectorAll(".package-tab");
  const accommodationSelect = document.getElementById("accommodationSelect");
  const roomTypeSelect = document.getElementById("roomTypeSelect");
  const occupancySelect = document.getElementById("occupancySelect");
  const roomCountSelect = document.getElementById("roomCountSelect");
  const tariffTableBody = document.getElementById("tariffTableBody");
  const packageHeading = document.getElementById("packageHeading");
  const packageSubheading = document.getElementById("packageSubheading");
  const routeLine = document.getElementById("routeLine");
  const itineraryTitle = document.getElementById("itineraryTitle");
  const itineraryContent = document.getElementById("itineraryContent");
  const tariffSection = document.getElementById("tariffSection");

  const bookingSummary = document.getElementById("bookingSummary");
  const bookingPopupForm = document.getElementById("bookingPopupForm");
  const bookingModalEl = document.getElementById("bookingModal");
  const bookingModal = bookingModalEl ? new bootstrap.Modal(bookingModalEl) : null;

  const paymentModalEl = document.getElementById("paymentModal");
  const paymentModal = paymentModalEl ? new bootstrap.Modal(paymentModalEl) : null;
  const paymentSummaryBox = document.getElementById("paymentSummaryBox");
  const paymentOptionNote = document.getElementById("paymentOptionNote");
  const payOnlineBtn = document.getElementById("payOnlineBtn");
  const advancePaymentBtn = document.getElementById("advancePaymentBtn");
  const fullPaymentBtn = document.getElementById("fullPaymentBtn");
  const backToBookingBtn = document.getElementById("backToBookingBtn");

  const roomTypeField = document.getElementById("roomTypeField");
  const occupancyField = document.getElementById("occupancyField");
  const roomCountField = document.getElementById("roomCountField");
  const packageTabsRow = document.getElementById("packageTabsRow");
  const scrollLeftBtn = document.getElementById("scrollLeftBtn");
  const scrollRightBtn = document.getElementById("scrollRightBtn");
  const floatingBtns = document.getElementById("floatingBtns");

  let activePackage = "1D";
  let selectedDestinationName = "";
  let selectedBooking = null;
  let customerFormData = null;
  let savedBookingId = "";

  function formatCurrency(value) {
    if (value === null || value === undefined || value === "") return "Call for price";
    return "₹ " + Number(value).toLocaleString("en-IN");
  }

  function formatCurrencyCompact(value) {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(Number(value || 0));
  }

  function setMinDateTime() {
    const dateInput = document.getElementById("customerDateTime");
    if (!dateInput) return;
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    dateInput.min = now.toISOString().slice(0, 16);
  }

  function formatDateTimeAMPM(inputValue) {
    const d = new Date(inputValue);
    if (isNaN(d)) return inputValue;

    const day = String(d.getDate()).padStart(2, "0");
    const month = d.toLocaleString("en-GB", { month: "short" });
    const year = d.getFullYear();

    let hours = d.getHours();
    const minutes = String(d.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;

    return `${day}-${month}-${year} ${hours}:${minutes} ${ampm}`;
  }

  function formatDateOnly(inputValue) {
    const d = new Date(inputValue);
    if (isNaN(d)) return inputValue;

    const day = String(d.getDate()).padStart(2, "0");
    const month = d.toLocaleString("en-GB", { month: "short" });
    const year = d.getFullYear();

    return `${day}-${month}-${year}`;
  }

  function sanitizeText(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function getCurrentPackageConfig() {
    return packageData?.[activePackage] || null;
  }

  function getCurrentDestinationData() {
    const pkg = getCurrentPackageConfig();
    if (!pkg || !pkg.destinations || !selectedDestinationName) return null;
    return pkg.destinations[selectedDestinationName] || null;
  }

  function getCurrentAccommodationMode() {
    return accommodationSelect ? accommodationSelect.value : "none";
  }

  function isHotelSelected() {
    return getCurrentAccommodationMode() === "hotel";
  }

  function getNightCount(pkgKey) {
    const map = {
      "1D": 0,
      "2D": 1,
      "3D": 2,
      "4D": 3,
      "5D": 4,
      "6D": 5,
      "7D": 6
    };
    return map[pkgKey] || 0;
  }

  function getHotelCharge(pkgKey) {
    if (!isHotelSelected()) return 0;

    const roomType = roomTypeSelect?.value || "2star";
    const occupancy = occupancySelect?.value || "double";
    const roomCount = Number(roomCountSelect?.value || 1);
    const nights = getNightCount(pkgKey);

    const roomRate = HOTEL_RATES?.[roomType]?.[occupancy] || 0;
    return roomRate * roomCount * nights;
  }

  function getRouteLineText(destinationName) {
    if (!destinationName) return "Coimbatore - Destination - Coimbatore";
    return `Coimbatore - ${destinationName} - Coimbatore`;
  }

  function findByHash(hash) {
    const cleanHash = String(hash || "").replace(/^#/, "").trim().toLowerCase();
    if (!cleanHash || !packageData) return null;

    for (const [pkgKey, pkgValue] of Object.entries(packageData)) {
      const destinations = pkgValue?.destinations || {};
      for (const [destinationName, destinationData] of Object.entries(destinations)) {
        if ((destinationData?.hash || "").toLowerCase() === cleanHash) {
          return {
            pkgKey,
            destinationName,
            destinationData
          };
        }
      }
    }
    return null;
  }

  function updateAccommodationVisibility() {
    const showHotel = isHotelSelected();

    [roomTypeField, occupancyField, roomCountField].forEach(field => {
      if (!field) return;
      if (showHotel) {
        field.classList.add("show-hotel-field");
      } else {
        field.classList.remove("show-hotel-field");
      }
    });
  }

  function updateHotelFields() {
    const showHotel = isHotelSelected();

    if (!showHotel) {
      if (roomTypeSelect) roomTypeSelect.value = "2star";
      if (occupancySelect) occupancySelect.value = "double";
      if (roomCountSelect) roomCountSelect.value = "1";
    }
  }

  function updateActiveTabUI() {
    packageTabs.forEach(tab => {
      tab.classList.toggle("active", tab.dataset.package === activePackage);
    });
  }

  function populateDestinations(preferredDestinationName = "") {
    const pkg = getCurrentPackageConfig();
    if (!pkg || !destinationSidebar) return;

    updateActiveTabUI();

    const destinationNames = Object.keys(pkg.destinations || {});
    if (!destinationNames.length) {
      destinationSidebar.innerHTML = `<div class="text-muted">No destinations available.</div>`;
      return;
    }

    const validPreferred = preferredDestinationName && pkg.destinations[preferredDestinationName];
    if (validPreferred) {
      selectedDestinationName = preferredDestinationName;
    } else if (!pkg.destinations[selectedDestinationName]) {
      selectedDestinationName = destinationNames[0];
    }

    destinationSidebar.innerHTML = destinationNames.map(name => {
      const activeClass = name === selectedDestinationName ? "active" : "";
      return `
        <button type="button" class="tour-destination-btn ${activeClass}" data-destination="${sanitizeText(name)}">
          ${sanitizeText(name)}
        </button>
      `;
    }).join("");

    destinationSidebar.querySelectorAll(".tour-destination-btn").forEach(btn => {
      btn.addEventListener("click", function () {
      selectedDestinationName = this.dataset.destination;
      populateDestinations(selectedDestinationName);
      renderTariffTable();
      renderItinerary();
      updatePageHeading();

      // ✅ AUTO SCROLL FIX
      setTimeout(() => {
        const tariffSection = document.getElementById("tariffSection");
        if (tariffSection) {
          const y = tariffSection.getBoundingClientRect().top + window.scrollY - 90;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    });
    });

    updatePageHeading();
    renderTariffTable();
    renderItinerary();
  }

  function updatePageHeading() {
    const pkg = getCurrentPackageConfig();
    const destinationData = getCurrentDestinationData();

    if (packageHeading) packageHeading.textContent = pkg?.title || "Tour Packages";
    if (packageSubheading) packageSubheading.textContent = pkg?.subtitle || "Select your destination";
    if (routeLine) routeLine.textContent = getRouteLineText(selectedDestinationName);

    if (selectedDestinationName && destinationData?.hash) {
      history.replaceState(null, "", `#${destinationData.hash}`);
    }
  }

  function renderItinerary() {
    const destinationData = getCurrentDestinationData();
    const itinerary = destinationData?.itinerary || [];

    if (!itineraryContent) return;
    if (itineraryTitle) {
      itineraryTitle.textContent = selectedDestinationName
        ? `${selectedDestinationName} Itinerary`
        : "Itinerary";
    }

    if (!itinerary.length) {
      itineraryContent.innerHTML = `<tr><td colspan="2">Itinerary not available.</td></tr>`;
      return;
    }

    itineraryContent.innerHTML = itinerary.map(item => `
      <tr>
        <td>${sanitizeText(item.day || "-")}</td>
        <td>${sanitizeText(item.text || "-")}</td>
      </tr>
    `).join("");
  }

  function getVehicleDisplayName(vehicleObj) {
    if (!vehicleObj) return "";
    if (vehicleObj.type) return `${vehicleObj.name} (${vehicleObj.type})`;
    return vehicleObj.name || "";
  }

  function renderTariffTable() {
    const pkg = getCurrentPackageConfig();
    const destinationData = getCurrentDestinationData();

    if (!pkg || !destinationData || !tariffTableBody) {
      if (tariffTableBody) {
        tariffTableBody.innerHTML = `<tr><td colspan="3" class="text-center py-4">No tariff available.</td></tr>`;
      }
      return;
    }

    const vehicles = destinationData.vehicles || [];
    const hotelCharge = getHotelCharge(activePackage);

    tariffTableBody.innerHTML = vehicles.map(vehicle => {
      if (vehicle.price === null || vehicle.price === undefined) {
        return `
          <tr>
            <td>
              <div class="fw-semibold">${sanitizeText(vehicle.name || "")}</div>
              <div class="small text-muted">${sanitizeText(vehicle.type || "")}</div>
            </td>
            <td>Call for price</td>
            <td>
  <a href="tel:+919629808833" class="btn-call">Call Us</a>
  </td>
          </tr>
        `;
      }

      const baseTariff = Number(vehicle.price || 0);
      const totalTariff = baseTariff + hotelCharge;

      return `
        <tr>
          <td>
            <div class="fw-semibold">${sanitizeText(vehicle.name || "")}</div>
            <div class="small text-muted">${sanitizeText(vehicle.type || "")}</div>
          </td>
          <td>
    <div class="fw-bold">${formatCurrency(totalTariff)}</div>
  </td>
          <td>
          <button
    type="button"
              class="btn btn-sm btn-book-table book-now-btn"
              data-destination="${sanitizeText(selectedDestinationName)}"
              data-vehicle-name="${sanitizeText(vehicle.name || "")}"
              data-vehicle-type="${sanitizeText(vehicle.type || "")}"
              data-vehicle-display="${sanitizeText(getVehicleDisplayName(vehicle))}"
              data-base-tariff="${baseTariff}"
              data-total-tariff="${totalTariff}"
              data-km-limit="${sanitizeText(destinationData.kmLimit || pkg.kmLimit || "")}"
              data-package-title="${sanitizeText(pkg.title || "")}"
              data-package-code="${sanitizeText(activePackage)}"
              data-hotel-charge="${hotelCharge}"
            >
              Book Now
            </button>
          </td>
        </tr>
      `;
    }).join("");

    tariffTableBody.querySelectorAll(".btn-book-table").forEach(btn => {
      btn.addEventListener("click", function () {
        openBookingModal({
          packageTitle: this.dataset.packageTitle,
          packageCode: this.dataset.packageCode,
          destination: this.dataset.destination,
          vehicleName: this.dataset.vehicleName,
          vehicleType: this.dataset.vehicleType,
          vehicle: this.dataset.vehicleDisplay,
          tariff: Number(this.dataset.totalTariff || 0),
          baseTariff: Number(this.dataset.baseTariff || 0),
          hotelCharge: Number(this.dataset.hotelCharge || 0),
          kmLimit: this.dataset.kmLimit,
          withHotel: isHotelSelected(),
          roomType: isHotelSelected() ? (roomTypeSelect?.value || "") : "",
          occupancy: isHotelSelected() ? (occupancySelect?.value || "") : "",
          roomCount: isHotelSelected() ? Number(roomCountSelect?.value || 1) : 0
        });
      });
    });
  }

  function openBookingModal(bookingData) {
    selectedBooking = bookingData;
    savedBookingId = "";
    customerFormData = null;

    if (!bookingSummary || !bookingPopupForm) return;

    bookingSummary.innerHTML = `
      <div><strong>Package:</strong> ${sanitizeText(selectedBooking.packageTitle)}</div>
      <div><strong>Destination:</strong> ${sanitizeText(selectedBooking.destination)}</div>
      <div><strong>Vehicle:</strong> ${sanitizeText(selectedBooking.vehicle)}</div>
      <div><strong>KM Limit:</strong> ${sanitizeText(selectedBooking.kmLimit)} KM</div>
      <div><strong>Total Tariff:</strong> ${formatCurrency(selectedBooking.tariff)}</div>
      ${
        selectedBooking.withHotel
          ? `<div><strong>Accommodation:</strong> ${sanitizeText(selectedBooking.roomType)}, ${sanitizeText(selectedBooking.occupancy)}, ${selectedBooking.roomCount} Room${selectedBooking.roomCount > 1 ? "s" : ""}</div>`
          : `<div><strong>Accommodation:</strong> Without Hotel</div>`
      }
    `;

    bookingPopupForm.reset();
    setMinDateTime();

    if (bookingModal) {
      bookingModal.show();
    }
  }

  function validateCustomerForm() {
    const name = document.getElementById("customerName")?.value.trim();
    const phone = document.getElementById("customerPhone")?.value.trim();
    const dateTime = document.getElementById("customerDateTime")?.value;
    const pickup = document.getElementById("customerPickup")?.value.trim();

    if (!selectedBooking) {
      alert("Please select a package first.");
      return null;
    }

    if (!name || !phone || !dateTime || !pickup) {
      alert("Please fill all fields.");
      return null;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return null;
    }

    const selectedDate = new Date(dateTime);
    if (selectedDate < new Date()) {
      alert("Old date and time cannot be selected.");
      return null;
    }

    return { name, phone, dateTime, pickup };
  }

  function getAdvanceConfig() {
    const withHotel = !!selectedBooking?.withHotel;

    if (withHotel) {
      return {
        type: "ADVANCE_50",
        label: "Pay Advance 50%",
        percentage: 50,
        amount: Math.round(Number(selectedBooking.tariff || 0) * 0.50)
      };
    }

    return {
      type: "ADVANCE_10",
      label: "Pay Advance 10%",
      percentage: 10,
      amount: Math.round(Number(selectedBooking.tariff || 0) * 0.10)
    };
  }

  async function postToAppsScript(action, payload) {
    const response = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify({ action, payload })
    });

    const text = await response.text();
    let data = {};

    try {
      data = JSON.parse(text);
    } catch (e) {
      throw new Error("Invalid server response");
    }

    if (data.status !== "success") {
      throw new Error(data.message || "Request failed");
    }

    return data;
  }

  function fillPaymentSummary() {
    if (!paymentSummaryBox || !selectedBooking) return;

    const advance = getAdvanceConfig();
    const total = Number(selectedBooking.tariff || 0);

    paymentSummaryBox.innerHTML = `
      <div><span>Booking ID</span><span>${sanitizeText(savedBookingId || "-")}</span></div>
      <div><span>Package</span><span>${sanitizeText(selectedBooking.packageTitle)}</span></div>
      <div><span>Destination</span><span>${sanitizeText(selectedBooking.destination)}</span></div>
      <div><span>Vehicle</span><span>${sanitizeText(selectedBooking.vehicleName)}</span></div>
      <div><span>Total Tariff</span><span>${formatCurrency(total)}</span></div>
      <div><span>KM Limit</span><span>${sanitizeText(selectedBooking.kmLimit)} KM</span></div>
      ${
        selectedBooking.withHotel
          ? `<div><span>Hotel Charge</span><span>${formatCurrency(selectedBooking.hotelCharge)}</span></div>`
          : ``
      }
    `;

    if (paymentOptionNote) {
      paymentOptionNote.innerHTML = "";
      paymentOptionNote.style.display = "none";
    }

    if (advancePaymentBtn) {
      advancePaymentBtn.textContent = `${advance.label} - ${formatCurrency(advance.amount)}`;
    }

    if (fullPaymentBtn) {
      fullPaymentBtn.textContent = `Pay Full - ${formatCurrency(total)}`;
    }
  }

  async function savePendingBooking() {
    if (!selectedBooking || !customerFormData) {
      throw new Error("Booking data missing");
    }

    const payload = {
      packageTitle: selectedBooking.packageTitle,
      destination: selectedBooking.destination,
      vehicle: selectedBooking.vehicle,
      tariff: selectedBooking.tariff,
      withHotel: selectedBooking.withHotel,
      roomType: selectedBooking.roomType,
      occupancy: selectedBooking.occupancy,
      roomCount: selectedBooking.roomCount,
      hotelCharge: selectedBooking.hotelCharge || 0,
      kmLimit: selectedBooking.kmLimit,
      packageCode: selectedBooking.packageCode,
      customerName: customerFormData.name,
      customerPhone: customerFormData.phone,
      travelDate: formatDateTimeAMPM(customerFormData.dateTime),
      pickup: customerFormData.pickup,
      sourcePage: window.location.href
    };

    const result = await postToAppsScript("saveBooking", payload);
    savedBookingId = result.bookingId;
  }

  function setPaymentButtonsLoading(isLoading, clickedType = "") {
    if (!advancePaymentBtn || !fullPaymentBtn) return;

    if (isLoading) {
      advancePaymentBtn.disabled = true;
      fullPaymentBtn.disabled = true;

      if (clickedType === "ADVANCE") {
        advancePaymentBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2"></span>Please wait...`;
      }

      if (clickedType === "FULL") {
        fullPaymentBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2"></span>Please wait...`;
      }
    } else {
      advancePaymentBtn.disabled = false;
      fullPaymentBtn.disabled = false;

      const advance = getAdvanceConfig();
      const total = Number(selectedBooking?.tariff || 0);

      advancePaymentBtn.textContent = `${advance.label} - ${formatCurrency(advance.amount)}`;
      fullPaymentBtn.textContent = `Pay Full - ${formatCurrency(total)}`;
    }
  }

  function getReceiptTerms() {
    return [
      "Driver details will be assigned 24 hours prior to journey commencement.",
      "Payment Policy: After pickup, 50% must be paid for driver allowance and fuel.",
      "Avoid late payments.",
      "Cancellation charges apply as per company policy.",
      "Any itinerary changes may increase KM or costing.",
      "Extra km / additional day will be charged as quoted."
    ];
  }

  function buildReceiptPayload(paymentInfo) {
    const total = Number(selectedBooking?.tariff || 0);
    const paid = Number(paymentInfo?.paidAmount || 0);
    const pending = Math.max(total - paid, 0);

    return {
      companyName: "BHARATHIYAR TOURS AND TRAVELS",
      companyTagline: "Premium Cab & Tour Services",
      companyPhonePrimary: "+91 96298 08833",
      companyPhoneSecondary: "+91 94883 31952",
      companyEmail: "bharathiyartravels.cbe@gmail.com",
      companyAddress: "13/1, Divine Nagar, Church Road, Cheran Managar, Coimbatore – 641035.",
      receiptTitle: paymentInfo.paymentType === "FULL" ? "FULL PAYMENT RECEIPT" : "ADVANCE PAYMENT RECEIPT",
      paymentStatus: paymentInfo.paymentType === "FULL" ? "FULL PAYMENT RECEIVED" : "ADVANCE RECEIVED",
      quoteNo: savedBookingId || `BTT-${Date.now()}`,
      date: formatDateOnly(new Date()),
      bookingId: savedBookingId || "",
      customerName: customerFormData?.name || "",
      customerPhone: customerFormData?.phone || "",
      pickup: customerFormData?.pickup || "",
      drop: selectedBooking?.destination || "",
      vehicle: selectedBooking?.vehicle || "",
      packageTitle: selectedBooking?.packageTitle || "",
      packageCode: selectedBooking?.packageCode || "",
      kmLimit: selectedBooking?.kmLimit || "",
      travelDate: formatDateTimeAMPM(customerFormData?.dateTime),
      totalTariff: total,
      paidAmount: paid,
      pendingAmount: pending,
      paymentType: paymentInfo.paymentType,
      paymentId: paymentInfo.paymentId || "",
      withHotel: !!selectedBooking?.withHotel,
      roomType: selectedBooking?.roomType || "",
      occupancy: selectedBooking?.occupancy || "",
      roomCount: selectedBooking?.roomCount || "",
      hotelCharge: Number(selectedBooking?.hotelCharge || 0),
      supportPhone: SUPPORT_PHONE,
      supportEmail: SUPPORT_EMAIL,
      terms: getReceiptTerms()
    };
  }

  function goToReceiptPage(paymentInfo) {
    const receiptData = buildReceiptPayload(paymentInfo);
    sessionStorage.setItem("btt_receipt_data", JSON.stringify(receiptData));
    window.location.href = "receipt-success.html";
  }

  async function startPayment(paymentType) {
    if (!selectedBooking || !savedBookingId) {
      throw new Error("Booking not saved properly");
    }

    const createOrderResult = await postToAppsScript("createOrder", {
      bookingId: savedBookingId,
      tariff: selectedBooking.tariff,
      withHotel: selectedBooking.withHotel,
      paymentType: paymentType
    });

    const options = {
      key: createOrderResult.key,
      amount: createOrderResult.amount * 100,
      currency: createOrderResult.currency,
      name: "Bharathiyar Tours and Travels",
      description: `${selectedBooking.packageTitle} - ${selectedBooking.destination}`,
      order_id: createOrderResult.orderId,
      handler: async function (response) {
        try {
          await postToAppsScript("verifyPayment", {
            bookingId: savedBookingId,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            paymentType: paymentType,
            amount: createOrderResult.amount
          });

          if (paymentModal) paymentModal.hide();
          if (bookingModal) bookingModal.hide();
          setPaymentButtonsLoading(false);

          goToReceiptPage({
            paymentType: paymentType,
            paymentId: response.razorpay_payment_id,
            paidAmount: createOrderResult.amount
          });
        } catch (err) {
          console.error(err);
          setPaymentButtonsLoading(false);
          alert(err.message || "Payment verified, but redirect failed.");
        }
      },
      modal: {
        ondismiss: function () {
          setPaymentButtonsLoading(false);
        }
      },
      prefill: {
        name: customerFormData?.name || "",
        contact: customerFormData?.phone || ""
      },
      theme: {
        color: "#111111"
      }
    };

    const rzp = new Razorpay(options);

    rzp.on("payment.failed", function (resp) {
      setPaymentButtonsLoading(false);
      alert(resp?.error?.description || "Payment failed");
    });

    rzp.open();
  }

  function buildWhatsAppBookingMessage(data) {
    const url = window.location.href.split("#")[0] + (getCurrentDestinationData()?.hash ? `#${getCurrentDestinationData().hash}` : "");
    const name = data?.name || "";
    const phone = data?.phone || "";
    const formattedDateTime = data?.dateTime ? formatDateTimeAMPM(data.dateTime) : "";
    const pickup = data?.pickup || "";

    return `Hello Bharathiyar Tours and Travels,

I would like to enquire about this tour package.

Package: ${selectedBooking?.packageTitle || ""}
Destination: ${selectedBooking?.destination || ""}
Vehicle: ${selectedBooking?.vehicle || ""}
Tariff: ${formatCurrency(selectedBooking?.tariff || 0)}
KM Limit: ${selectedBooking?.kmLimit || ""} KM
Accommodation: ${
      selectedBooking?.withHotel
        ? `${selectedBooking.roomType}, ${selectedBooking.occupancy}, ${selectedBooking.roomCount} Room${selectedBooking.roomCount > 1 ? "s" : ""}`
        : "Without Hotel"
    }
Package Link: ${url}

Customer Name: ${name}
Phone: ${phone}
Pickup Date & Time: ${formattedDateTime}
Pickup Location: ${pickup}`;
  }

  if (bookingPopupForm) {
    bookingPopupForm.addEventListener("submit", function (e) {
      e.preventDefault();

      customerFormData = validateCustomerForm();
      if (!customerFormData) return;

      const message = buildWhatsAppBookingMessage(customerFormData);
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
    });
  }

  if (payOnlineBtn) {
    payOnlineBtn.addEventListener("click", async function () {
      try {
        customerFormData = validateCustomerForm();
        if (!customerFormData) return;

        this.disabled = true;
        this.innerHTML = `<span class="spinner-border spinner-border-sm me-2"></span>Please wait...`;

        await savePendingBooking();
        fillPaymentSummary();

        if (bookingModal) bookingModal.hide();
        if (paymentModal) paymentModal.show();
      } catch (err) {
        alert(err.message || "Failed to continue to payment");
      } finally {
        this.disabled = false;
        this.innerHTML = `<i class="bi bi-credit-card me-2"></i>Pay Online`;
      }
    });
  }

  if (backToBookingBtn) {
    backToBookingBtn.addEventListener("click", function () {
      if (paymentModal) paymentModal.hide();
      if (bookingModal) bookingModal.show();
    });
  }

  if (advancePaymentBtn) {
    advancePaymentBtn.addEventListener("click", async function () {
      try {
        setPaymentButtonsLoading(true, "ADVANCE");
        await startPayment(getAdvanceConfig().type);
      } catch (err) {
        alert(err.message || "Unable to start payment");
        setPaymentButtonsLoading(false);
      }
    });
  }

  if (fullPaymentBtn) {
    fullPaymentBtn.addEventListener("click", async function () {
      try {
        setPaymentButtonsLoading(true, "FULL");
        await startPayment("FULL");
      } catch (err) {
        alert(err.message || "Unable to start payment");
        setPaymentButtonsLoading(false);
      }
    });
  }

  const phoneInput = document.getElementById("customerPhone");
  if (phoneInput) {
    phoneInput.addEventListener("input", function () {
      this.value = this.value.replace(/\D/g, "").slice(0, 10);
    });
  }

  function syncFloatingButtons(show) {
    if (!floatingBtns) return;
    floatingBtns.style.display = show ? "flex" : "none";
  }

  if (bookingModalEl) {
    bookingModalEl.addEventListener("shown.bs.modal", function () {
      document.body.classList.add("modal-open-custom");
      syncFloatingButtons(false);
    });

    bookingModalEl.addEventListener("hidden.bs.modal", function () {
      document.body.classList.remove("modal-open-custom");
      if (!paymentModalEl || !paymentModalEl.classList.contains("show")) {
        syncFloatingButtons(true);
      }
    });
  }

  if (paymentModalEl) {
    paymentModalEl.addEventListener("shown.bs.modal", function () {
      syncFloatingButtons(false);
    });

    paymentModalEl.addEventListener("hidden.bs.modal", function () {
      if (!bookingModalEl || !bookingModalEl.classList.contains("show")) {
        syncFloatingButtons(true);
      }
    });
  }

  packageTabs.forEach(tab => {
    tab.addEventListener("click", function () {
      const pkg = this.dataset.package;
      if (!packageData[pkg]) return;

      activePackage = pkg;
      selectedDestinationName = "";
      populateDestinations();

      if (packageTabsRow) {
        this.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest"
        });
      }
    });
  });

  if (accommodationSelect) {
    accommodationSelect.addEventListener("change", function () {
      updateAccommodationVisibility();
      updateHotelFields();
      renderTariffTable();
    });
  }

  if (roomTypeSelect) {
    roomTypeSelect.addEventListener("change", function () {
      renderTariffTable();
    });
  }

  if (occupancySelect) {
    occupancySelect.addEventListener("change", function () {
      renderTariffTable();
    });
  }

  if (roomCountSelect) {
    roomCountSelect.addEventListener("change", function () {
      renderTariffTable();
    });
  }

  if (scrollLeftBtn && scrollRightBtn && packageTabsRow) {
    scrollLeftBtn.addEventListener("click", function () {
      packageTabsRow.scrollBy({
        left: -220,
        behavior: "smooth"
      });
    });

    scrollRightBtn.addEventListener("click", function () {
      packageTabsRow.scrollBy({
        left: 220,
        behavior: "smooth"
      });
    });
  }

  window.addEventListener("hashchange", function () {
    const found = findByHash(window.location.hash);
    if (!found) return;

    activePackage = found.pkgKey;
    populateDestinations(found.destinationName);
  });

  updateAccommodationVisibility();
  updateHotelFields();
  setMinDateTime();

  const foundFromHash = findByHash(window.location.hash);

  if (foundFromHash) {
    activePackage = foundFromHash.pkgKey;
    populateDestinations(foundFromHash.destinationName);
  } else {
    activePackage = "1D";
    populateDestinations();
  }

  syncFloatingButtons(true);
});
