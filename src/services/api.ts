// Exportamos a Interface para podermos usá-la noutros ficheiros
export interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

// Criamos uma função assíncrona dedicada apenas a ir buscar os dados
export const getProdutos = async (): Promise<Product[]> => {
  try {
    const response = await fetch('/api/produtos');
    const data = await response.json();
    
    // Tratamos a resposta e devolvemos apenas o array de produtos
    if (data.success && data.products) {
      return data.products;
    }
    return data;
  } catch (error) {
    console.error("Erro ao procurar produtos:", error);
    return []; // Em caso de erro, devolve um array vazio para não "partir" a página
  }
};