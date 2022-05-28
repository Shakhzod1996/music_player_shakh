import { v4 as uuidv4 } from "uuid";

// ?Shoxrux
import shoxrux1 from "./assets/music/shox1.mp3";
import shoxrux2 from "./assets/music/shohruhxon_-_yurak_(uzhits.net).mp3";
import shoxrux3 from "./assets/music/Shohruhxon_-_Xatlar_tola_dardlarim.mp3";
import shoxrux4 from "./assets/music/Shohruhxon_-_Turfa_gullar_(uzhits.net).mp3";
import shoxrux5 from "./assets/music/Shohruhxon_-_Soginaman.mp3";
import shoxrux6 from "./assets/music/Shohruhxon_-_Sevmadimmi.mp3";
import shoxrux7 from "./assets/music/shohruhxon_-_begona_(uzhits.net).mp3";

import shoxImg from "./assets/img/shohruhxon1.jpg";
import shoxImg2 from "./assets/img/shoxrux2.jpg";

// ?Jaloliddin AhmadAliev
import jalol1 from "./assets/music/jaloliddin-ahmadaliyev-dostim-havolanib-ketma-ozingdan_(uzhits.net).mp3";
import jalol2 from "./assets/music/jaloliddin-ahmadaliyev-menda-qolmadi-dil_(uzhits.net).mp3";
import jalol3 from "./assets/music/jaloliddin-ahmadaliyev-ona-seni-unutganim-rost_(uzhits.net).mp3";
import jalol4 from "./assets/music/jaloliddin-ahmadaliyev-yor-bizdan-ketdi-3_(uzhits.net).mp3";

import jalolImg from "./assets/img/jaloliddin-ahmadaliyev.jpg";

// ?Mirzabek
import mirzo from "./assets/music/mirzabek-xolmedov-nafs_(uzhits.net).mp3";

import mirzoImg from "./assets/img/mirzo.jpg";

// ?Munisa
import munisa1 from "./assets/music/munisa-rizayeva-boldi-yurak_(uzhits.net).mp3";
import munisa2 from "./assets/music/munisa-rizayeva-yetmadimi_(uzhits.net).mp3";
import munisaImg from "./assets/img/munisa.webp";

// ?Ozodbek
import ozodbek1 from "./assets/music/Ozodbek_Nazarbekov_-_Opa_meni_yoqlab_keling.mp3";
import ozodbek2 from "./assets/music/Ozodbek_Nazarbekov_-_Sevmading_Sen_(uzhits.net).mp3";
import ozodbekImg from "./assets/img/ozodbek.jpg";

function chillHop() {
  return [
    {
      name: "shohruhxon_-_begona_",
      cover: shoxImg2,
      artist: "Shokhrukhon",
      audio: shoxrux7,
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "_Opa_meni_yoqlab_keling",
      cover: ozodbekImg,
      artist: "Ozodbek Nazarbekov",
      audio: ozodbek1,
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Beaver Creek",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },

    {
      name: "-_Sevmading_Sen_",
      cover: ozodbekImg,
      artist: "Ozodbek Nazarbekov",
      audio: ozodbek2,
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Daylight",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },

    {
      name: "nafs_",
      cover: mirzoImg,
      artist: "Mirzabek",
      audio: mirzo,
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Keep Going",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },

    {
      name: "Shohruhxon_-_Soginaman",
      cover: shoxImg2,
      artist: "Shokhrukhon",
      audio: shoxrux5,
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Nightfall",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },

    {
      name: "rizayeva-yetmadimi_",
      cover: munisaImg,
      artist: "Munisa Rizaeva",
      audio: munisa2,
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Reflection",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },

    {
      name: "Xatlar_tola_dardlarim",
      cover: shoxImg,
      artist: "Shokhrukhon",
      audio: shoxrux3,
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Under the City Stars",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },

    {
      name: "Shohruhxon_-_Sevmadimmi",
      cover: shoxImg2,
      artist: "Shokhrukhon",
      audio: shoxrux6,
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Reflection",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },

    {
      name: "dostim-havolanib-ketma-ozingdan",
      cover: jalolImg,
      artist: "Jaloliddin Ahmadaliev",
      audio: jalol1,
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Daylight",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },

    {
      name: "Gullar",
      cover: shoxImg,
      artist: "Shokhrukhon",
      audio: shoxrux1,
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "_yurak_",
      cover: shoxImg2,
      artist: "Shokhrukhon",
      audio: shoxrux2,
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },

    {
      name: "_Turfa_gullar_",
      cover: shoxImg,
      artist: "Shokhrukhon",
      audio: shoxrux4,
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },

    {
      name: "menda-qolmadi-dil_",
      cover: jalolImg,
      artist: "Jaloliddin Ahmadaliev",
      audio: jalol2,
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "ona-seni-unutganim-rost",
      cover: jalolImg,
      artist: "Jaloliddin Ahmadaliev",
      audio: jalol3,
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "-yor-bizdan-ketdi",
      cover: jalolImg,
      artist: "Jaloliddin Ahmadaliev",
      audio: jalol4,
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "boldi-yurak_",
      cover: munisaImg,
      artist: "Munisa Rizaeva",
      audio: munisa1,
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },

    //ADD MORE HERE
  ];
}

export default chillHop;
