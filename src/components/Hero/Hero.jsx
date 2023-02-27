import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__left">
          <h1 className="hero__title">
            Shared <br /> NFT utilities
          </h1>
          <p className="hero__subtitle">
            Get the most out of fractionalization
          </p>
          <a href="https://blocksurvey.io/survey/p/ce35afad-6968-4768-aec9-9e062e32f3cb/r/o">
            <button className="btn-fill">Let’s start</button>
          </a>
        </div>
        <figure className="hero__laptop">
          <img src="./images/hero-laptop.png" alt="laptop" />
        </figure>
        <figure className="hero__hand">
          <img src="./images/hero-arm.png" alt="arm" />
        </figure>
      </div>
    </section>
  );
}
