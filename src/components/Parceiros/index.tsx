import './Parceiros.scss';
import parceirosBg from '../../assets/imagens/parceiros-bg.png';

export function Parceiros() {
  return (
    <section className="parceiros-section container">
      <div className="parceiros-grid">
        
        {/* Card 1 */}
        <div className="parceiro-card" style={{ backgroundImage: `url(${parceirosBg})` }}>
          <div className="parceiro-overlay">
            <div className="parceiro-content">
              <h2>Parceiros</h2>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
              <button className="parceiro-button">CONFIRA</button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="parceiro-card" style={{ backgroundImage: `url(${parceirosBg})` }}>
          <div className="parceiro-overlay">
            <div className="parceiro-content">
              <h2>Parceiros</h2>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
              <button className="parceiro-button">CONFIRA</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}