import "./Header.scss";

export default function Header() {
  const onToggleMenu = () => {
    const burgerMenu = document.querySelector(".head__burger__menu");
    const burgerLines = document.querySelectorAll(".head__burger__line");
    burgerLines.forEach((line) => {
      line.classList.toggle("open");
    });
    burgerMenu.classList.toggle("active");
  };
  const scrollToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <header className="head">
      <div className="head__container">
        <h2 onClick={scrollToTop} className="head__logo">
          PARTAGE {"<|>"}
        </h2>
        <menu className="head__menu">
          <li className="head__menu__item">Create</li>
          <li className="head__menu__item">Sell</li>
          <li className="head__menu__item">Buy</li>
          <a href="https://juliencarbonnell.medium.com/">
            <li className="head__menu__item">Blog</li>
          </a>
          <a href="https://t.me/partagebtc">
            <button className="btn-fill">Contact Us</button>
          </a>
        </menu>
        <div onClick={onToggleMenu} className="head__burger">
          <div className="head__burger__line"></div>
          <div className="head__burger__line"></div>
          <div className="head__burger__line"></div>
        </div>
        <menu className="head__burger__menu">
          <li className="head__burger__item">Create</li>
          <li className="head__burger__item">Sell</li>
          <li className="head__burger__item">Buy</li>
          <a href="https://juliencarbonnell.medium.com/">
            <li className="head__burger__item">Blog</li>
          </a>
          <a href="https://t.me/partagebtc">
            <button className="btn-fill btn-fill-mobile">Contact Us</button>
          </a>
        </menu>
      </div>
    </header>
  );
}
