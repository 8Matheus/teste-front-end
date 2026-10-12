import { useState, useEffect, useRef } from 'react';
import './Vitrine.scss';
import { getProdutos } from '../../services/api';
import type { Product } from '../../services/api';
import { Modal } from '../Modal';
import iconTecnologia from '../../assets/imagens/image.png';
import iconSupermercado from '../../assets/imagens/supermercados 1.png'; 
import iconBebidas from '../../assets/imagens/whiskey.png'; 
import iconFerramentas from '../../assets/imagens/ferramentas 1.png';
import iconSaude from '../../assets/imagens/cuidados-de-saude 1.png';
import iconEsportes from '../../assets/imagens/corrida 1.png';
import iconModa from '../../assets/imagens/moda 1.png';
import iconSetaEsq from '../../assets/icons/VectorEsq.png';
import iconSetaDir from '../../assets/icons/VectorDir.png';

interface VitrineProps {
  variant?: 'full' | 'minimal';
}

export function Vitrine({ variant = 'full' }: VitrineProps) {

  
  const [products, setProducts] = useState<Product[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  //  a referência para agarrar a grelha do carrossel
  const carouselRef = useRef<HTMLDivElement>(null);

  // para deslizar o carrossel
  const handleScrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  
  useEffect(() => {
    //função do serviço e guardamos o resultado no estado
    getProdutos().then((dados) => {
      setProducts(dados);
    });
  }, []);

  // Função para formatar o preço
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  // Função chamada ao clicar em "Comprar"
  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <section className="vitrine-section container">
      
      {/* Menu de Categorias  */}
      {variant === 'full' && (
        <div className="categories">
          <div className="categories-item active">
            <div className="categories-icon"><img src={iconTecnologia} alt="Tecnologia" /></div>
            <span>Tecnologia</span>
          </div>
          <div className="categories-item">
            <div className="categories-icon"><img src={iconSupermercado} alt="Supermercado" /></div>
            <span>Supermercado</span>
          </div>
          <div className="categories-item">
            <div className="categories-icon"><img src={iconBebidas} alt="Bebidas" /></div>
            <span>Bebidas</span>
          </div>
          <div className="categories-item">
            <div className="categories-icon"><img src={iconFerramentas} alt="Ferramentas" /></div>
            <span>Ferramentas</span>
          </div>
          <div className="categories-item">
            <div className="categories-icon"><img src={iconSaude} alt="Saúde" /></div>
            <span>Saúde</span>
          </div>
          <div className="categories-item">
            <div className="categories-icon"><img src={iconEsportes} alt="Esportes e Fitness" /></div>
            <span>Esportes e Fitness</span>
          </div>
          <div className="categories-item">
            <div className="categories-icon"><img src={iconModa} alt="Moda" /></div>
            <span>Moda</span>
          </div>
        </div>
      )}

      {/* Cabeçalho da Vitrine */}
      <div className="vitrine-header">
        <div className="vitrine-title-container">
          <div className="line"></div>
          <h2>Produtos relacionados</h2>
          <div className="line"></div>
        </div>
        
        {variant === 'full' ? (
          <nav className="vitrine-tabs">
            <button className="active">CELULAR</button>
            <button>ACESSÓRIOS</button>
            <button>TABLETS</button>
            <button>NOTEBOOKS</button>
            <button>TVS</button>
            <button>VER TODOS</button>
          </nav>
        ) : (
          <div className="vitrine-link-container">
            <a href="#ver-todos" className="vitrine-link">Ver todos</a>
          </div>
        )}
      </div>

      {/* Grelha de Produtos */}
      <div className="vitrine-slider-container">
        
        {/* Seta Esquerda */}
        <button className="slider-arrow slider-prev" aria-label="Anterior" onClick={handleScrollLeft}>
           <img src={iconSetaEsq} alt="Seta Esquerda" />
        </button>

        {/* Div da Grelha } */}
        <div className="vitrine-grid" ref={carouselRef}>
          
          {products.length > 0 ? (
            products.map((product, index) => (
              <article key={index} className="product-card">
                <img src={product.photo} alt={product.productName} className="product-card-image" />
                
                <div className="product-card-info">
                  <h3 className="product-card-title">{product.productName}</h3>
                  
                  <p className="product-card-old-price">{formatPrice(product.price * 1.1)}</p>
                  <p className="product-card-price">{formatPrice(product.price)}</p>
                  <p className="product-card-installments">
                    ou 2x de {formatPrice(product.price / 2)} sem juros
                  </p>
                  <span className="product-card-shipping">Frete grátis</span>
                </div>
                
                <button 
                  className="product-card-button"
                  onClick={() => handleOpenModal(product)}
                >
                  COMPRAR
                </button>
              </article>
            ))
          ) : (
            <p style={{ textAlign: 'center', width: '100%' }}>A carregar produtos...</p>
          )}
        </div>

        {/* Seta Direita configurada */}
        <button className="slider-arrow slider-next" aria-label="Próximo" onClick={handleScrollRight}>
           <img src={iconSetaDir} alt="Seta Direita" />
        </button>

      </div>
      
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        product={selectedProduct} 
      />
      
    </section>
  );
}