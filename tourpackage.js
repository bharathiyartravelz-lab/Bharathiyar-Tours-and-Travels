document.addEventListener("DOMContentLoaded", function () {
  const WHATSAPP_NUMBER = "919629808833";
  const CALL_NUMBER = "919629808833";

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

  function roundTo50(value) {
    return Math.round(value / 50) * 50;
  }

  function buildVehicleList(existingVehicles) {
    const priceMap = {};
    existingVehicles.forEach(v => {
      priceMap[v.name.toUpperCase().trim()] = v.price;
    });

    const sedanPrice = priceMap["SEDAN"] ?? null;
    const ertigaPrice = priceMap["ERTIGA"] ?? null;
    const innovaPrice = priceMap["INNOVA"] ?? null;
    const crystaPrice = priceMap["INNOVA CRYSTA"] ?? priceMap["INNOVA CRYSTA "] ?? null;

    const tt14Price = existingVehicles.find(v =>
      (v.type || "").includes("12") || (v.type || "").includes("14")
    )?.price ?? null;

    const tt18Price = existingVehicles.find(v =>
      (v.type || "").includes("16") || (v.type || "").includes("18")
    )?.price ?? null;

    const derivedErtiga =
      sedanPrice != null
        ? Math.round((sedanPrice + Math.max(300, sedanPrice * 0.15)) / 50) * 50
        : null;

    return [
      { ...VEHICLES.sedan, price: sedanPrice },

      // ✅ THIS IS THE FIX
      { ...VEHICLES.ertiga, price: ertigaPrice ?? derivedErtiga },

      { ...VEHICLES.innova, price: innovaPrice },
      { ...VEHICLES.crysta, price: crystaPrice },
      { ...VEHICLES.tt14, price: tt14Price },
      { ...VEHICLES.tt18, price: tt18Price },
      { ...VEHICLES.urbania, price: null },
      { ...VEHICLES.coach, price: null }
    ];
  }


  function generatePackageCode(destinationName, kmLimit) {
  const cleanName = destinationName.replace(/[^a-zA-Z]/g, "");
  const prefix = cleanName.slice(0, 3).toUpperCase();
  return `${prefix}-${kmLimit}`;
}

  function normalizeAllPackageVehicles() {
    Object.keys(packageData).forEach(pkgKey => {
      const destinations = packageData[pkgKey]?.destinations || {};
      Object.keys(destinations).forEach(destinationName => {
        const destination = destinations[destinationName];
        destination.vehicles = buildVehicleList(destination.vehicles || []);
      });
    });
  }

  normalizeAllPackageVehicles();

  const occupancySelect = document.getElementById("occupancySelect");
  const packageTabs = document.querySelectorAll(".package-tab");
  const destinationSelect = document.getElementById("destinationSelect");
  const accommodationSelect = document.getElementById("accommodationSelect");
  const accommodationFields = document.getElementById("accommodationFields");
  const roomTypeSelect = document.getElementById("roomTypeSelect");
  const roomCountSelect = document.getElementById("roomCountSelect");
  const tariffTableBody = document.getElementById("tariffTableBody");
  const packageHeading = document.getElementById("packageHeading");
  const packageSubheading = document.getElementById("packageSubheading");
  const itineraryTitle = document.getElementById("itineraryTitle");
  const itineraryContent = document.getElementById("itineraryContent");
  const bookingSummary = document.getElementById("bookingSummary");
  const bookingPopupForm = document.getElementById("bookingPopupForm");
  const bookingModalEl = document.getElementById("bookingModal");
  const bookingModal = bookingModalEl ? new bootstrap.Modal(bookingModalEl) : null;

  let activePackage = "1D";
  let selectedBooking = null;

  function formatCurrency(value) {
    if (value === null || value === undefined || value === "") return "Call for price";
    return "₹ " + Number(value).toLocaleString("en-IN");
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

    let day = String(d.getDate()).padStart(2, "0");
    let month = String(d.getMonth() + 1).padStart(2, "0");
    let year = d.getFullYear();

    let hours = d.getHours();
    const minutes = String(d.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;

    return `${day}/${month}/${year} ${String(hours).padStart(2, "0")}:${minutes} ${ampm}`;
  }

  function getCurrentDestinationData() {
    const destinationName = destinationSelect.value;
    return packageData[activePackage]?.destinations?.[destinationName] || null;
  }

  function getCurrentHashUrl() {
    const destinationData = getCurrentDestinationData();
    if (!destinationData) return "tourpackages.html";
    return `tourpackages.html#${destinationData.hash}`;
  }

  function getHotelCharge() {
    const accommodation = accommodationSelect.value;
    if (accommodation !== "hotel") return 0;

    const roomType = roomTypeSelect.value;
    const occupancy = occupancySelect.value;
    const roomCount = Number(roomCountSelect.value || 1);

    const perRoomCharge = HOTEL_RATES[roomType]?.[occupancy] || 0;
    return perRoomCharge * roomCount;
  }

  function updateHotelFieldState() {
    const isOneDay = activePackage === "1D";
    const withHotel = !isOneDay && accommodationSelect.value === "hotel";

    roomTypeSelect.disabled = !withHotel;
    occupancySelect.disabled = !withHotel;
    roomCountSelect.disabled = !withHotel;
  }

  function updateAccommodationVisibility() {
    const isOneDay = activePackage === "1D";

    if (accommodationFields) {
      accommodationFields.style.display = isOneDay ? "none" : "contents";
    }

    if (isOneDay) {
      accommodationSelect.value = "none";
      roomTypeSelect.value = "2star";
      occupancySelect.value = "double";
      roomCountSelect.value = "1";
    }
  }

  function updateHash() {
    const destinationData = getCurrentDestinationData();
    if (!destinationData) return;

    const newHash = `#${destinationData.hash}`;
    if (window.location.hash !== newHash) {
      history.replaceState(null, "", newHash);
    }
  }

  function findByHash(hash) {
    const cleanHash = String(hash || "").replace("#", "").trim();
    if (!cleanHash) return null;

    for (const pkgKey of Object.keys(packageData)) {
      const destinations = packageData[pkgKey].destinations || {};
      for (const destinationName of Object.keys(destinations)) {
        if (destinations[destinationName].hash === cleanHash) {
          return { pkgKey, destinationName };
        }
      }
    }

    return null;
  }

  function setActiveTabUI() {
    packageTabs.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.package === activePackage);
    });
  }

  function renderItinerary() {
    const destinationName = destinationSelect.value;
    const destinationData = packageData[activePackage]?.destinations?.[destinationName];

    if (!destinationData) {
      itineraryTitle.textContent = "Itinerary";
      itineraryContent.innerHTML = `
        <tr>
          <td colspan="2">No itinerary available.</td>
        </tr>
      `;
      return;
    }

    itineraryTitle.textContent = `${destinationName} Itinerary`;
    itineraryContent.innerHTML = destinationData.itinerary.map(item => `
      <tr>
        <td><strong>${item.day}</strong></td>
        <td>${item.text}</td>
      </tr>
    `).join("");
  }

  function renderTariffTable() {
    const destinationData = getCurrentDestinationData();

    if (!destinationData) {
      tariffTableBody.innerHTML = `
        <tr>
          <td colspan="3" class="text-center py-4">No tariffs found.</td>
        </tr>
      `;
      return;
    }

    const hotelCharge = getHotelCharge();

    tariffTableBody.innerHTML = destinationData.vehicles.map((vehicle, index) => {
      const unavailable =
        vehicle.price === null ||
        vehicle.price === undefined ||
        vehicle.price === "";

      const finalPrice = unavailable ? null : Number(vehicle.price) + hotelCharge;

      return `
        <tr>
          <td>
            <div class="vehicle-name">${vehicle.name}</div>
            <div class="vehicle-type">${vehicle.type}</div>
          </td>
          <td>
            <div class="price-main">${unavailable ? "Call for price" : formatCurrency(finalPrice)}</div>
          </td>
          <td>
            ${
              unavailable
                ? `<a href="tel:${CALL_NUMBER}" class="btn-book-table">Call Us</a>`
                : `<button type="button" class="btn-book-table" data-index="${index}">Book</button>`
            }
          </td>
        </tr>
      `;
    }).join("");

    tariffTableBody.querySelectorAll(".btn-book-table[data-index]").forEach(button => {
      button.addEventListener("click", function () {
        const index = Number(this.dataset.index);
        openBooking(index);
      });
    });
  }

  function renderCurrentView() {
    const pkg = packageData[activePackage];
    if (!pkg) return;

    packageHeading.textContent = pkg.title;
    packageSubheading.textContent = pkg.subtitle;

    setActiveTabUI();
    updateAccommodationVisibility();
    updateHotelFieldState();
    updateDynamicTitles();
    renderTariffTable();
    renderItinerary();
    updateHash();
  }

  function populateDestinations(selectedDestination = null) {
    const destinations = packageData[activePackage]?.destinations || {};
    const destinationNames = Object.keys(destinations);

    destinationSelect.innerHTML = destinationNames
      .map(name => `<option value="${name}">${name}</option>`)
      .join("");

    if (selectedDestination && destinations[selectedDestination]) {
      destinationSelect.value = selectedDestination;
    } else {
      destinationSelect.value = destinationNames[0] || "";
    }

    renderCurrentView();
  }

  function scrollToTariffOnMobile() {
  if (window.innerWidth <= 991) {
    const tariffSection = document.getElementById('tariffSection');
    if (tariffSection) {
      setTimeout(() => {
        const navbarOffset = 90;
        const top =
          tariffSection.getBoundingClientRect().top + window.pageYOffset - navbarOffset;

        window.scrollTo({
          top: top,
          behavior: 'smooth'
        });
      }, 180);
    }
  }
}

document.querySelectorAll('.package-tab').forEach((tab) => {
  tab.addEventListener('click', function () {
    document.querySelectorAll('.package-tab').forEach((btn) => {
      btn.classList.remove('active');
    });

    this.classList.add('active');

    const selectedPackage = this.dataset.package;

    // your existing package render/update code here

    scrollToTariffOnMobile();
  });
});

  function openBooking(index) {
    const destinationName = destinationSelect.value;
    const destinationData = getCurrentDestinationData();
    const vehicle = destinationData?.vehicles?.[index];
    if (!vehicle || vehicle.price == null) return;

    const withHotel = accommodationSelect.value === "hotel";
    const roomTypeLabel = roomTypeSelect.options[roomTypeSelect.selectedIndex]?.text || "";
    const occupancyLabel = occupancySelect.options[occupancySelect.selectedIndex]?.text || "";
    const roomCount = Number(roomCountSelect.value || 1);
    const hotelCharge = getHotelCharge();
    const finalTariff = Number(vehicle.price) + hotelCharge;

    const kmLimit = destinationData.kmLimit || 0;
    const packageCode = destinationData.packageCode || generatePackageCode(destinationName, kmLimit);

    selectedBooking = {
      packageTitle: packageData[activePackage].title,
      destination: destinationName,
      vehicle: vehicle.name,
      tariff: finalTariff,
      withHotel: withHotel,
      roomType: withHotel ? roomTypeLabel : "Without Hotel",
      occupancy: withHotel ? occupancyLabel : "",
      roomCount: withHotel ? roomCount : 0,
      hotelCharge: hotelCharge,
      kmLimit: kmLimit,
      packageCode: packageCode,
      url: getCurrentHashUrl()
    };

    bookingSummary.innerHTML = `
      <div><span>Package</span><span>${selectedBooking.packageTitle}</span></div>
      <div><span>Destination</span><span>${selectedBooking.destination}</span></div>
      <div><span>Vehicle</span><span>${selectedBooking.vehicle}</span></div>
      <div><span>Stay</span><span>${selectedBooking.withHotel ? `${selectedBooking.roomType}, ${selectedBooking.occupancy}, ${selectedBooking.roomCount} Room${selectedBooking.roomCount > 1 ? "s" : ""}` : "Without Hotel"}</span></div>
      <div><span>Total</span><span>${formatCurrency(selectedBooking.tariff)}</span></div>
    `;

    bookingPopupForm.reset();
    setMinDateTime();
    if (bookingModal) bookingModal.show();
  }

  packageTabs.forEach(tab => {
    tab.addEventListener("click", function () {
      const pkg = this.dataset.package;
      if (!packageData[pkg]) return;

      activePackage = pkg;
      populateDestinations();
    });
  });

  destinationSelect.addEventListener("change", function () {
    accommodationSelect.value = "none"; // reset to without hotel
    renderCurrentView();
  });

  accommodationSelect.addEventListener("change", function () {
    renderCurrentView();
  });

  roomTypeSelect.addEventListener("change", function () {
    renderTariffTable();
  });

  occupancySelect.addEventListener("change", function () {
    renderTariffTable();
  });

  roomCountSelect.addEventListener("change", function () {
    renderTariffTable();
  });

  window.addEventListener("hashchange", function () {
    const found = findByHash(window.location.hash);
    if (!found) return;

    activePackage = found.pkgKey;
    populateDestinations(found.destinationName);
    scrollToTariffOnMobile();
  });

  bookingPopupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!selectedBooking) {
      alert("Please select a package first.");
      return;
    }

    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("customerPhone").value.trim();
    const dateTime = document.getElementById("customerDateTime").value;
    const pickup = document.getElementById("customerPickup").value.trim();

    if (!name || !phone || !dateTime || !pickup) {
      alert("Please fill all fields.");
      return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    const selectedDate = new Date(dateTime);
    if (selectedDate < new Date()) {
      alert("Old date and time cannot be selected.");
      return;
    }

    const formattedDateTime = formatDateTimeAMPM(dateTime);

    const accommodationText = selectedBooking.withHotel
      ? `${selectedBooking.roomType}, ${selectedBooking.occupancy}, ${selectedBooking.roomCount} Room(s)`
      : "Without Hotel";

      const message =
      `Hello Bharathiyar Tours and Travels,

      I want to enquire about this tour package.

      Package: ${selectedBooking.packageTitle}
      Destination: ${selectedBooking.destination}
      Package Code: ${selectedBooking.packageCode}
      KM Limit: ${selectedBooking.kmLimit} KM
      Vehicle: ${selectedBooking.vehicle}
      Accommodation: ${accommodationText}
      Total Tariff: ${formatCurrency(selectedBooking.tariff)}
      Page Link: ${selectedBooking.url}

      Customer Name: ${name}
      Phone: ${phone}
      Pickup Date & Time: ${formattedDateTime}
      Pickup Location: ${pickup}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  });

  const phoneInput = document.getElementById("customerPhone");
  if (phoneInput) {
    phoneInput.addEventListener("input", function () {
      this.value = this.value.replace(/\D/g, "").slice(0, 10);
    });
  }

  setMinDateTime();

  if (accommodationSelect) accommodationSelect.value = "none";
  if (roomTypeSelect) roomTypeSelect.value = "2star";
  if (occupancySelect) occupancySelect.value = "double";
  if (roomCountSelect) roomCountSelect.value = "1";

  const foundHash = findByHash(window.location.hash);

  if (foundHash) {
    activePackage = foundHash.pkgKey;
    populateDestinations(foundHash.destinationName);
  } else {
    activePackage = "1D";
    populateDestinations("Isha + Marudhamalai");
  }
});

// Floating button hide
document.addEventListener("DOMContentLoaded", function () {
  const bookingModalEl = document.getElementById("bookingModal");
  const floatingBtns = document.getElementById("floatingBtns");

  if (bookingModalEl && floatingBtns) {
    bookingModalEl.addEventListener("show.bs.modal", function () {
      floatingBtns.style.display = "none";
    });

    bookingModalEl.addEventListener("hidden.bs.modal", function () {
      floatingBtns.style.display = "flex";
    });
  }
});
