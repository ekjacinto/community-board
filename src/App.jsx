import "./App.css";
import Card from "./components/Card";
import FFVIR from "./assets/images/ffviirebirth.jpg";
import GBFR from "./assets/images/gbfr.avif";

const games = [
  {
    name: "Final Fantasy VII Rebirth",
    imgURL: FFVIR,
    gameURL: "https://ffvii.square-enix-games.com/en-us/games/rebirth",
    releaseDate: "FEBRUARY 29TH, 2024",
  },
  {
    name: "Grand Blue Fantasy: Relink",
    imgURL: GBFR,
    gameURL: "https://relink.granbluefantasy.jp/en/",
    releaseDate: "FEBRUARY 1ST, 2024",
  },
];

function App() {
  return (
    <div className="mt-32 w-full text-6xl font-bold">
      <h1 className="leading-[4.2rem]">
        Incoming Games <br />
      </h1>
      <h1 className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500">
        2024
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
