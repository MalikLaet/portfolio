import coffeDelivery from '../../public/imagem-coffe-delivery.svg';
import spaceAlura from '../../public/spaceAlura.svg';

export default function Projects() {
  return (
    <div className='flex flex-col items-center justify-center p-12 gap-12'>
        <h1 className='text-text-green text-4xl'>Projetos</h1>

        <div className='flex flex-row gap-12 items-center justify-center'>
            <div className='flex flex-col items-center justify-center gap-4'>
                <p className='text-4xl text-white'>Coffe Delivery</p>
                <a href="https://coffe-delivery-y93a.vercel.app/" className="hover:opacity-80 hover:scale-105 transition duration-200 ease-in-out">
                <img src={coffeDelivery} alt="imagem ilustrativa do site coffe delivery" />
                </a>
            </div>
            <div className='flex flex-col items-center justify-center gap-4'>
                <p className='text-4xl text-white'>SpaceAlura</p>
                <a href="https://space-alura-flax.vercel.app/" className="hover:opacity-80 hover:scale-105 transition duration-200 ease-in-out">
                <img src={spaceAlura}alt="imagem ilustrativa do site SpaceAlura" />
                </a>
            </div>
        </div>
    </div>
  )
}
