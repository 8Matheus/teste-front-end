import './Footer.scss';
import logoFooter from '../../assets/imagens/Group 35.png'; 
import iconInsta from '../../assets/icons/instagram.png'; 
import iconFace from '../../assets/icons/facebook.png';   
import iconIn from '../../assets/icons/linkedin.png';    





export function Footer() {
  return (
    <footer className="site-footer">
      
      {/* Seção da Newsletter */}
      <section className="newsletter">
        <div className="container newsletter-inner">
          <div className="newsletter-text">
            <h2>Inscreva-se na nossa newsletter</h2>
            <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
          </div>
          
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <div className="inputs-row">
              <input type="text" placeholder="Digite seu nome" required />
              <input type="email" placeholder="Digite seu e-mail" required />
              <button type="submit">INSCREVER</button>
            </div>
            <label className="checkbox-label">
              <input type="checkbox" required />
              <span>Aceito os termos e condições</span>
            </label>
          </form>
        </div>
      </section>

      {/* Secção de Informação e Links */}
      <section className="footer-info">
        <div className="container info-inner">
          
          <div className="info-brand">
            <img src={logoFooter} alt="Econverse" className="footer-logo" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="social-icons">
              
              <img src={iconInsta} alt="Instagram" className="icon" />
              <img src={iconFace} alt="Facebook" className="icon" />
              <img src={iconIn} alt="LinkedIn" className="icon" />
            </div>
          </div>
          <div className="info-links">
            <div className="link-column">
              <h3>Institucional</h3>
              <a href="#">Sobre Nós</a>
              <a href="#">Movimento</a>
              <a href="#">Trabalhe conosco</a>
            </div>
            
            <div className="link-column">
              <h3>Ajuda</h3>
              <a href="#">Suporte</a>
              <a href="#">Fale Conosco</a>
              <a href="#">Perguntas Frequentes</a>
            </div>
            
            <div className="link-column">
              <h3>Termos</h3>
              <a href="#">Termos e Condições</a>
              <a href="#">Política de Privacidade</a>
              <a href="#">Troca e Devolução</a>
            </div>
          </div>
          
        </div>
      </section>

      {/*  seção de Copyright */}
      <div className="footer-copyright">
        <div className="container">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

    </footer>
  );
}