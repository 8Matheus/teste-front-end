import './Banner.scss';

export function Banner() {
  return (
    <section className="banner">
      <div className="container banner__content">
        <h2>Venha conhecer nossas <br /> promoções</h2>
        <p><span className="highlight">50% Off</span> nos produtos</p>
        
        <button className="banner__button">
          Ver produto
        </button>
      </div>
    </section>
  );   
}