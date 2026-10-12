import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Vitrine } from './components/Vitrine';
import { Parceiros } from './components/Parceiros';
import { Marcas } from './components/Marcas';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        
        {/* 1. Primeira Vitrine: Completa (com categorias e separadores) */}
        <Vitrine variant="full" />
        
        {/* 2. Primeira Secção Parceiros */}
        <Parceiros />
        
        {/* 3. Segunda Vitrine: Minimalista (com 'Ver todos') */}
        <Vitrine variant="minimal" />

        {/* 4. Segunda Secção Parceiros (A QUE FALTAVA!) */}
        <Parceiros />

        {/* 5. Secção Marcas (Círculos) */}
        <Marcas />

        {/* 6. Terceira Vitrine: Minimalista (com 'Ver todos') */}
        <Vitrine variant="minimal" />
        
      </main>
      <Footer />


    </>
  );
}

export default App;