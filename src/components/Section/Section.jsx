import "./Section.scss";

export default function Section(props) {
  return (
    <>
      {props.id % 2 === 0 ? (
        <ViewEven props={props} />
      ) : (
        <ViewOdd props={props} />
      )}
    </>
  );
}

const ViewEven = ({ props }) => {
  return (
    <div className="card">
      <figure className="card__img">
        <img src={props.img} alt="avatar" />
      </figure>
      <div className="card__content">
        <h2 className="card__title">{props.title}</h2>
        <p className="card__subtitle">{props.subtitle}</p>
        <p className="card__text">{props.text}</p>
        <a href={props.link}>
          <button className="btn-transparent">{props.btnText}</button>
        </a>
      </div>
    </div>
  );
};
const ViewOdd = ({ props }) => {
  return (
    <div className="card">
      <div className="card__content">
        <h2 className="card__title">{props.title}</h2>
        <p className="card__subtitle">{props.subtitle}</p>
        <p className="card__text">{props.text}</p>
        <a href={props.link}>
          <button className="btn-transparent">{props.btnText}</button>
        </a>
      </div>
      <figure className="card__img">
        <img src={props.img} alt="avatar" />
      </figure>
    </div>
  );
};
