import './Marcas.scss';
import logoMarca from '../../assets/imagens/Group 35.png';

export function Marcas() {
  // array simples com 5 itens para renderizar os círculos
  const marcasArray = [1, 2, 3, 4, 5];

  return (
    <section className="marcas-section container">
      <h2 className="marcas-title">Navegue por marcas</h2>
      
      <div className="marcas-container">
        {marcasArray.map((item) => (
          <div key={item} className="marca-circle">
            <img src={logoMarca} alt="Marca Econverse" />
          </div>
        ))}
      </div>
    </section>
  );
}