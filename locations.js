const locations = [
  {
    lat: -7.607355,
    lng: 110.203804,
    title: "Borobudur Temple Compounds",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "https://moneyoffthebooks.com/borobudur-temple",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Borobudur_Nothwest_View.jpg/640px-Borobudur_Nothwest_View.jpg",
    region: "asia"
  },
  {
    lat: -7.75222,
    lng: 110.49167,
    title: "Prambanan Temple Compounds",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "https://moneyoffthebooks.com/prambanan-temple",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Prambanan_Temple_view.jpg/640px-Prambanan_Temple_view.jpg",
    region: "asia"
  },
  {
    lat: 48.804722,
    lng: 2.121782,
    title: "Palace and Park of Versailles",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "https://moneyoffthebooks.com/palace-and",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Versailles_Palace.jpg/640px-Versailles_Palace.jpg",
    region: "europe"
  },
  {
    lat: 51.508530,
    lng: -0.076132,
    title: "Tower of London",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "https://moneyoffthebooks.com/tower-of",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Tower_of_London_viewed_from_the_River_Thames.jpg/640px-Tower_of_London_viewed_from_the_River_Thames.jpg",
    region: "europe"
  },
  {
    lat: 51.499390,
    lng: -0.127465,
    title: "Palace of Westminster and Westminster Abbey including Saint Margaret’s Church",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "https://moneyoffthebooks.com/palace-of",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Westminster_Abbey_West_Door.jpg/640px-Westminster_Abbey_West_Door.jpg",
    region: "europe"
  },
  {
    lat: 51.1740,
    lng: -1.8218,
    title: "Stonehenge, Avebury and Associated Sites",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "https://moneyoffthebooks.com/stonehenge-avebury",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Stonehenge2007_07_30.jpg/640px-Stonehenge2007_07_30.jpg",
    region: "europe"
  },
  {
    lat: 39.8628,
    lng: -4.0273,
    title: "Historic City of Toledo",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "https://moneyoffthebooks.com/historic-city",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Toledo-Spain.jpg/640px-Toledo-Spain.jpg",
    region: "europe"
  },
  {
    lat: 37.8916,
    lng: -4.7739,
    title: "Historic Centre of Cordoba",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "https://moneyoffthebooks.com/historic-centre",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Cordoba-Mezquita.jpg/640px-Cordoba-Mezquita.jpg",
    region: "europe"
  },
  {
    lat: 40.58167,
    lng: -4.12583,
    title: "Monastery and Site of the Escurial, Madrid",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "https://moneyoffthebooks.com/monastery-and",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Monasterio_de_El_Escorial_desde_el_cielo.jpg/640px-Monasterio_de_El_Escorial_desde_el_cielo.jpg",
    region: "europe"
  },
  {
    lat: 41.4036,
    lng: 2.1744,
    title: "Works of Antoni Gaudí",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "https://moneyoffthebooks.com/works-of",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Sagrada_Familia_01.jpg/640px-Sagrada_Familia_01.jpg",
    region: "europe"
  },
  {
    lat: 37.17667,
    lng: -3.59444,
    title: "Alhambra, Generalife and Albayzín, Granada",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "https://moneyoffthebooks.com/alhambra-generalife",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Alhambra_Night_Granada.jpg/640px-Alhambra_Night_Granada.jpg",
    region: "europe"
  },
  {
    lat: 50.941357,
    lng: 6.958307,
    title: "Cologne Cathedral",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "https://moneyoffthebooks.com/cologne-cathedral",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/K%C3%B6lner_Dom_abends.jpg/640px-K%C3%B6lner_Dom_abends.jpg",
    region: "europe"
  },
  {
    lat: -7.801389,
    lng: 110.364778,
    title: "The Cosmological Axis of Yogyakarta and its Historic Landmarks",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "https://moneyoffthebooks.com/the-cosmological",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Tugu_Yogyakarta%2C_Sleman.jpg/640px-Tugu_Yogyakarta%2C_Sleman.jpg",
    region: "asia"
  },
  {
    lat: 29.36167,
    lng: -98.48028,
    title: "San Antonio Missions",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "https://moneyoffthebooks.com/san-antonio",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/San_Jose_Mission.jpg/640px-San_Jose_Mission.jpg",
    region: "america"
  },
  {
    lat: 18.466667,
    lng: -66.125,
    title: "La Fortaleza and San Juan National Historic Site in Puerto Rico",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "https://moneyoffthebooks.com/la-fortaleza",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/La_Fortaleza_San_Juan_Puerto_Rico.jpg/640px-La_Fortaleza_San_Juan_Puerto_Rico.jpg",
    region: "america"
  },
  {
    lat: 37.38311857298441,
    lng: -5.990224048237083,
    title: "Seville Cathedral, Alcázar and Archivo de Indias",
    description: "Seville’s mix of Islamic, Gothic, and Renaissance influences makes it a city where history is alive in every courtyard and cobbled street.",
    link: "https://moneyoffthebooks.com/seville-cathedral",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Sevilla_Catedral_Giralda.JPG/640px-Sevilla_Catedral_Giralda.jpg",
    region: "europe"
  }
];
