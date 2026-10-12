import './Header.scss';
import iconShield from '../../assets/icons/Vector.png';
import iconTruck from '../../assets/icons/Truck.png';
import iconCard from '../../assets/icons/CreditCard.png';
import iconSearch from '../../assets/icons/MagnifyingGlass.png';
import iconPackage from '../../assets/icons/Group.png';
import iconHeart from '../../assets/icons/Heart.png';
import iconUser from '../../assets/icons/UserCircle.png';
import iconCart from '../../assets/icons/ShoppingCart.png';
import iconCrown from '../../assets/icons/CrownSimple.png';
import logoEconverse from '../../assets/imagens/Group 35.png';





export function Header() {
  return (
    <header className="header">

      {/* Barra do Topo */}
      <div className='header-top'>
        <div className='container-header-top'>
          <div className='header-top-item'>
            <img src={iconShield} alt="Compra Segura" />
            <p>Compra <strong>100% segura</strong></p>
          </div>

          <div className="header-top-item">
            <img src={iconTruck} alt="Frete Grátis" />
            <p><strong>Frete Grátis</strong> acima de R$ 200</p>
          </div>

          <div className="header-top-item">
            <img src={iconCard} alt="Parcelamento" />
            <p><strong>Parcele</strong> suas compras</p>
          </div>
        </div>
      </div>

     {/* Cabeçalho principal */}
      <div className='header-main-container'>
        <div className='header-logo'>
          
          <img src={logoEconverse} alt="Econverse" className="logo-img" />
        </div>

        <div className='header-search'>
          <input type='text' placeholder='O que você está buscando?' />
          <button aria-label='Buscar'>
            <img src={iconSearch} alt="Buscar" />
          </button>
        </div>

        <div className="header-actions">
          <button className="action-btn" aria-label="Encomendas">
            <img src={iconPackage} alt="Encomendas" />
          </button>
          <button className="action-btn" aria-label="Favoritos">
            <img src={iconHeart} alt="Favoritos" />
          </button>
          <button className="action-btn" aria-label="Minha Conta">
            <img src={iconUser} alt="Minha Conta" />
          </button>
          <button className="action-btn" aria-label="Carrinho">
            <img src={iconCart} alt="Carrinho" />
          </button>
        </div>
      </div>

      {/* Menu de Navegação */}
      <nav className="header-nav">
        <ul className="container header-nav-list">
          <li><a href="#todas">Todas Categorias</a></li>
          <li><a href="#supermercado">Supermercado</a></li>
          <li><a href="#livros">Livros</a></li>
          <li><a href="#moda">Moda</a></li>
          <li><a href="#lancamentos">Lançamentos</a></li>
          <li><a href="#ofertas" className="highlight">Ofertas do dia</a></li>
          <li>
            <a href="#assinatura" className="nav-subscription">
              <img src={iconCrown} alt="Coroa Assinatura" />
              Assinatura
            </a>
          </li>
        </ul>
      </nav>

      
    </header>
  );
}