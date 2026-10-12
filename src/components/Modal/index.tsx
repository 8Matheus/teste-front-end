import { useState } from 'react';
import './Modal.scss';
import type { Product } from '../../services/api';

interface ModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ product, isOpen, onClose }: ModalProps) {
  const [quantity, setQuantity] = useState(1);

  
  if (!isOpen || !product) return null;

  // Formatar preço
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  // Funções para a quantidade
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const handleIncrease = () => setQuantity((prev) => prev + 1);

  return (
    <div className="modal-overlay" onClick={onClose}>
      {/* Impede que clicar dentro do pop up o feche */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Botão Fechar (X) */}
        <button className="modal-close" onClick={onClose} aria-label="Fechar">
          &times;
        </button>

        <div className="modal-body">
          {/* Coluna Esquerda: Imagem */}
          <div className="modal-image-container">
            <img src={product.photo} alt={product.productName} />
          </div>

          {/* Coluna Direita: Informações */}
          <div className="modal-info">
            <h2 className="modal-title">{product.productName}</h2>
            <p className="modal-price">{formatPrice(product.price)}</p>
            <p className="modal-description">{product.descriptionShort}</p>
            
            <a href="#" className="modal-link">Veja mais detalhes do produto {'>'}</a>

            <div className="modal-actions">
              <div className="quantity-selector">
                <button onClick={handleDecrease}>-</button>
                <span>{quantity.toString().padStart(2, '0')}</span>
                <button onClick={handleIncrease}>+</button>
              </div>
              <button className="buy-button">COMPRAR</button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}