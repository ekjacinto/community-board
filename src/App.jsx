import "./App.css";
import Card from "./components/Card";
import FFVIR from "./assets/images/ffviirebirth.jpg";
import GBFR from "./assets/images/gbfr.avif";
import BMWukong from "./assets/images/bmwukong.jpg";
import EldenRingSOTE from "./assets/images/ersote.jpg";
import HadesII from "./assets/images/hades2.jpg";
import WutheringWaves from "./assets/images/wutheringwaves.webp";
import PPShowtime from "./assets/images/princesspeachshowtime.avif"
import Destiny2TFS from "./assets/images/destiny2tfs.jpg";
import HiFiRush from "./assets/images/hifirush.jpg";
import HKSS from "./assets/images/hkss.webp";
import ZZZ from "./assets/images/zzz.png";

const games = [
  {
    name: "Final Fantasy VII Rebirth",
    imgURL: FFVIR,
    gameURL: "https://ffvii.square-enix-games.com/en-us/games/rebirth",
    releaseDate: "FEBRUARY 29, 2024",
  },
  {
    name: "Grand Blue Fantasy: Relink",
    imgURL: GBFR,
    gameURL: "https://relink.granbluefantasy.jp/en/",
    releaseDate: "FEBRUARY 1, 2024",
  },
  {
    name: "ER: Shadow of the Erdtree",
    imgURL: EldenRingSOTE,
    gameURL: "https://store.bandainamcoent.com/elden-ring-shadow-of-the-erdtree-collectors-edition-steam/",
    releaseDate: "JUNE 21, 2024"
  },
  {
    name: "Black Myth: Wukong",
    imgURL: BMWukong,
    gameURL: "https://www.heishenhua.com/",
    releaseDate: "AUGUST 20, 2024",
  },
  {
    name: "Hades II",
    imgURL: HadesII,
    gameURL: "https://www.supergiantgames.com/blog/hades-ii-development-update/",
    releaseDate: "QUARTER 2, 2024"
  },
  {
    name: "Wuthering Waves",
    imgURL: WutheringWaves,
    gameURL: "https://wutheringwaves.kurogame.com/en/",
    releaseDate: "TBA, 2024"
  },
  {
    name: "Princess Peach: Showtime!",
    imgURL: PPShowtime,
    gameURL: "https://www.nintendo.com/us/store/products/princess-peach-showtime-switch/",
    releaseDate: "MARCH 22, 2024"
  },
  {
    name: "Destiny 2: The Final Shape",
    imgURL: Destiny2TFS,
    gameURL: "https://www.bungie.net/7/en/Destiny/TheFinalShape",
    releaseDate: "JUNE 4, 2024"
  },
  {
    name: "H-Fi RUSH",
    imgURL: HiFiRush,
    gameURL: "https://bethesda.net/en-US/game/hifirush",
    releaseDate: "MARCH 19, 2024",
  },
  {
    name: "Hollow Knight: Silksong",
    imgURL: HKSS,
    gameURL: "https://hollowknightsilksong.com/",
    releaseDate: "TBA, 2024"
  },
  {
    name: "Zenless Zone Zero",
    imgURL: ZZZ,
    gameURL: "https://zenless.hoyoverse.com/en-us/main",
    releaseDate: "TBA, 2024"
  }
];

function App() {
  return (
    <div className="mt-32 w-full text-6xl font-bold">
      <h1 className="leading-[4.2rem]">
        Incoming / Released Games <br />
      </h1>
      <h1 className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500">
        2024 EDITION
      </h1>
      <p className="text-2xl mt-5 font-thin">
        To enjoy the rest of your year ʕ•́ᴥ•̀ʔっ♡
      </p>
      <div className="justify-center items-center mt-12 flex flex-wrap gap-6">
        {games.map((game, index) => {
            return (
              <Card
                key={index}
                imgURL={game.imgURL}
                name={game.name}
                gameURL={game.gameURL}
                releaseDate={game.releaseDate}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
