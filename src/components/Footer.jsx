const Footer = () => {
  return (
    <footer>
    <img src={require('../img/vegan-plan-logo.png').default} width={130} alt='Vegan Plan logo'/>
    <ul className="nav-footer">
      <li>Alla recept</li>
      <li>Veckans meny</li>
      <li>Om oss</li>
    </ul>
    </footer>
    );
};

export default Footer;
