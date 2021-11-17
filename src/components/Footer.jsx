const Footer = () => {
  return (
    <footer>
    <img src={'./vegan-plan-logo.png'} width={130} alt='Vegan Plan logo'/>
    <ul className="nav-footer">
      <li><a href="/recept">Alla recept</a></li>
      <li><a href="/mina-sidor">Veckans meny</a></li>
      <li><a href="/about">Om oss</a></li>
    </ul>
    </footer>
    );
};

export default Footer;
