const Card = ({ imgURL, name, releaseDate, gameURL }) => {

  return (
    <div className="bg-[#0f0f0f] w-96 h-[33rem] rounded-[1rem] p-4">
      <img src={imgURL} className="h-[20rem] w-[24rem] rounded-[0.375rem]" />
      <hr className="mt-4 border-white border-t-2" />
      <div className="font-bold mt-3">
        <h2 className="text-2xl">{name}</h2>
        <p className="text-xl mt-3">{releaseDate}</p>
        <button
          className="bg-[#575757] text-xl rounded-sm p-2 w-32 border-white"
          onClick={() => window.open(gameURL)}
        >
          View Game
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  imgURL: String,
  name: String,
  releaseDate: String,
  gameURL: String,
};

export default Card;
