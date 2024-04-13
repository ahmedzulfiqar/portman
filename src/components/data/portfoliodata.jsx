import img1 from "../media/1.jpg";
import img2 from "../media/2.jpg";
import img3 from "../media/3.jpg";
import img4 from "../media/4.jpg";
import img5 from "../media/5.jpg";
import img6 from "../media/6.jpg";
import img7 from "../media/7.jpg";
import img8 from "../media/8.jpg";
import img9 from "../media/9.jpg";
import img10 from "../media/10.jpg";
import img11 from "../media/11.jpg";
import img12 from "../media/12.jpg";
import img13 from "../media/13.jpg";
import img14 from "../media/14.jpg";
import img15 from "../media/15.jpg";
import img16 from "../media/16.jpg";
import img17 from "../media/17.jpg";

const portfoliodata = [
  {
    image:
      "https://cdnb.artstation.com/p/assets/images/images/068/013/729/large/remi-portmann-crocolemon1.jpg?1696794298",
    name: " Croc or deal Collection",
  },
  {
    image:
      "https://cdnb.artstation.com/p/assets/images/images/064/055/773/large/remi-portmann-laboratoir-de-la-conscience.jpg?1686998479",
    name: " Croc or deal Collection",
  },
  {
    image:
      "https://cdnb.artstation.com/p/assets/images/images/057/696/191/large/batslayeur-img-20211013-111819.jpg?1672391220",
    name: " Croc or deal Collection",
  },
  {
    image:
      "https://cdnb.artstation.com/p/assets/images/images/057/696/091/large/batslayeur-the-new-mind-v1-1.jpg?1672390904",
    name: " Croc or deal Collection",
  },
  {
    image:
      "https://cdnb.artstation.com/p/assets/images/images/068/027/313/large/remi-portmann-demoniak-rabbit.jpg?1696838073",
    name: " Croc or deal Collection",
  },
  {
    image:
      "https://cdna.artstation.com/p/assets/images/images/057/696/058/large/batslayeur-darkrabbat-1.jpg?1672390741",
    name: " Croc or deal Collection",
  },
  {
    image:
      "https://cdnb.artstation.com/p/assets/images/images/057/695/995/large/batslayeur-misfit5.jpg?1672390511",
    name: " Croc or deal Collection",
  },
  {
    image:
      "https://cdnb.artstation.com/p/assets/images/images/054/413/385/large/batslayeur-img-20220929-190839-523.jpg?1664472753",
    name: " Croc or deal Collection",
  },
  {
    image:
      "https://cdnb.artstation.com/p/assets/images/images/047/793/097/large/batslayeur-misfit1.jpg?1648468774",
    name: " Croc or deal Collection",
  },
  {
    image:
      "https://cdnb.artstation.com/p/assets/images/images/042/293/013/large/batslayeur-img-20211009-072856-458.jpg?1634108523",
    name: " Croc or deal Collection",
  },
  {
    image:
      "https://cdna.artstation.com/p/assets/images/images/042/054/520/large/batslayeur-candles1.jpg?1633454080",
    name: " Croc or deal Collection",
  },
  {
    image:
      "https://cdna.artstation.com/p/assets/images/images/039/920/798/large/batslayeur-misfit-9.jpg?1627334054",
    name: " Croc or deal Collection",
  },
  {
    image:
      "https://cdna.artstation.com/p/assets/images/images/040/693/400/large/batslayeur-eyes-door-of-the-mind2.jpg?1629633187",
    name: " Croc or deal Collection",
  },
  {
    image:
      "https://cdnb.artstation.com/p/assets/images/images/032/911/683/large/remi-dtiys-tess.jpg?1607860780",
    name: " Croc or deal Collection",
  },
  {
    image: img1,
    name: " Croc or deal Collection",
  },
  {
    image: img2,
    name: " Croc or deal Collection",
  },
  {
    image: img3,
    name: " Croc or deal Collection",
  },
  {
    image: img4,
    name: " Croc or deal Collection",
  },
  {
    image: img5,
    name: " Croc or deal Collection",
  },
  {
    image: img6,
    name: " Croc or deal Collection",
  },
  {
    image: img7,
    name: " Croc or deal Collection",
  },
  {
    image: img8,
    name: " Croc or deal Collection",
  },
  {
    image: img9,
    name: " Croc or deal Collection",
  },
  {
    image: img10,
    name: " Croc or deal Collection",
  },
  {
    image: img11,
    name: " Croc or deal Collection",
  },
  {
    image: img12,
    name: " Croc or deal Collection",
  },
  {
    image: img13,
    name: " Croc or deal Collection",
  },
  {
    image: img14,
    name: " Croc or deal Collection",
  },
  {
    image: img15,
    name: " Croc or deal Collection",
  },
  {
    image: img16,
    name: " Croc or deal Collection",
  },
  {
    image: img17,
    name: " Croc or deal Collection",
  },
];
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Shuffle the portfoliodata array
shuffle(portfoliodata);

export default portfoliodata;
