import Background from './assets/background.jpg';
import Card from './components/Card';
import produtos from './components/Produtos';
import Logo from './assets/logo-jordan.svg'
import TypingEffect from './components/TypingEffect';

export default function App() {
  const backgroundImageUrl = `url(${Background})`;
  return ( 
    <>
      <div className="flex flex-col w-full font-principal">
        <div className="py-2 md:py-4 md:text-2xl text-sm font-medium bg-white flex items-center justify-center w-full md:font-semibold">
          <p>Entrega grátis para Maputo</p>
        </div>
        <div className="w-full h-[22rem] md:h-[34rem] bg-cover bg-center text-white flex flex-col items-start justify-evenly p-8 md:p-20" style={{ backgroundImage: backgroundImageUrl}}>
          <div className='flex items-center justify-start'>
            <img src={Logo} alt="logo-jordan" className='h-6 md:h-10'/>
            <p className='text-base md:text-lg'>JordanShoes</p>
          </div>
          <div>
            <h2 className='text-2xl md:text-4xl mb-2'>A melhor loja de 
              <span class="before:block before:absolute before:-inset-1 before:-skew-y-0 ml-3 before:bg-red-500 relative inline-block">
                <span class="relative text-white">Jordan</span>
              </span>
            </h2>
            <TypingEffect text="O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan." />
            
          </div>
        </div>
        <div className='text-black flex items-center justify-center flex-col w-full'>
          <div className='text-center text-sm mx-6 w-[90%] md:w-[50%]'>
            <h2 className='text-xl md:text-3xl mt-14 font-bold mb-3'>Os melhores em um só lugar</h2>
            <p className='text-base md:text-2xl'>A marca Jordan na JordanShoes é a escolha certa para os amantes de sneakers que buscam estilo e conforto.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
          {produtos.map((produto, index) => (
            <Card
              key={index}
              image={produto.image}
              title={produto.title}
              brand={produto.brand}
              price={produto.price}
            />
          ))}
          </div>
        </div>
      </div>
    </>
  )
}