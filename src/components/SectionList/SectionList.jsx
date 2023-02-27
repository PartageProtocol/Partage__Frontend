import "./SectionList.scss";

import Section from "../Section/Section";

export default function SectionList() {
  const cards = [
    {
      img: "./images/creators.png",
      title: "NFT creators",
      subtitle:
        "The crypto winners of tomorrow will be the creators that show tangible utility to NFTs",
      text: "NFT utility ideas include various use cases: physical products gifted to community members, exclusive events accessible through a token-proof ticket app, or collect loyalty points to a member’s club.",
      btnText: "early access",
      link: "https://blocksurvey.io/survey/p/ce35afad-6968-4768-aec9-9e062e32f3cb/r/o",
    },
    {
      img: "./images/owners.png",
      title: "NFT owners",
      subtitle:
        "There must be a way to generate a yield from your property, don’t you think?",
      text: "You are a passionate investor who loves to search for the most promising collections out there, but you still could do more than buy and wait. Become a more active investor by generating a yield out of selling fractions of your utility NFT to casual users.",
      btnText: "early access",
      link: "https://blocksurvey.io/survey/p/ce35afad-6968-4768-aec9-9e062e32f3cb/r/o",
    },
    {
      img: "./images/buyers.png",
      title: "NFT buyers",
      subtitle:
        "Accessing NFT utilities should be your first concern, before the investment plan.",
      text: "In-game items, VIP restaurant... You shouldn’t have to take a loan when you just want to fancy some NFT utility once or twice. Our platform allows you to directly buy, sell, swap, fractions of NFTs and enjoy their utility on demand. ",
      btnText: "early access",
      link: "https://blocksurvey.io/survey/p/ce35afad-6968-4768-aec9-9e062e32f3cb/r/o",
    },
  ];
  return (
    <section className="relationship">
      <div className="relationship__content">
        {cards.map((card, index) => (
          <Section
            key={index}
            id={index}
            img={card.img}
            title={card.title}
            subtitle={card.subtitle}
            text={card.text}
            btnText={card.btnText}
            link={card.link}
          />
        ))}
      </div>
    </section>
  );
}
