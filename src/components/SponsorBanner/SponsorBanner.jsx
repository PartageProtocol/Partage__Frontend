import "./SponsorBanner.scss";

export default function SponsorBanner() {
  return (
    <section className="sponsor">
      <div className="sponsor__content">
        <h2 className="sponsor__text">Built on Bitcoin with:</h2>
        <figure className="sponsor__img">
          <img src="./images/sponsor.png" alt="sponsor" />
        </figure>
      </div>
    </section>
  );
}
