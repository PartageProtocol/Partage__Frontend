import "./StatsBanner.scss";

export default function StatsBanner() {
  const plates = [
    {
      count: "29",
      text: "Early Adopters",
    },
    {
      count: "6",
      text: "NFT Utility Listed",
    },
    {
      count: "99%",
      text: "Satisfied",
    },
    {
      count: "7 bn.",
      text: "More to go ;)",
    },
  ];
  return (
    <section className="statistics">
      <div className="statistics__content">
        <div className="statistics__info">
          <h2 className="statistics__title">
            Shared NFT utilities is the future of web3
          </h2>
          <p className="statistics__subtitle">
            Get the most out of fractionalization
          </p>
          <a href="https://t.me/partagebtc">
            <button className="btn-transparent">Learn more</button>
          </a>
        </div>
        <div className="statistics__plates">
          {plates.map((plate, index) => (
            <StatisticPlate key={index} count={plate.count} text={plate.text} />
          ))}
        </div>
      </div>
    </section>
  );
}

const StatisticPlate = (props) => {
  return (
    <div className="statistics__plate">
      <h2 className="statistics__plate__count">{props.count}</h2>
      <p className="statistics__plate__text">{props.text}</p>
    </div>
  );
};
