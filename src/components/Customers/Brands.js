import AdãoImóveis from './Adão Imóveis.png'
import DNAevendas from './DNA de vendas.webp'
import Sebrae from './Sebrae.png'
import UnigranEAD from './Unigran EAD.png'
import unimedfrom from './unimed.png';
import ColégioGGE from './Colégio GGE-1.png';

function Brands(){
    return(
        <div className="mb-96 relative">
            <div className="bg-indigo-200 w-full absolute -top-32 z-10">
            <div className="m-4 pb-12 sm:flex  sm:flex-row sm:space-x-10 sm:pb-0 lg:space-x-24">
                <div className="bg-black place-items-center relative -top-11 w-2/3 grid grid-cols-2 px-8 py-3 gap-x-3 sm:w-3/5 sm:py-6 sm:-top-20 sm:gap-y-6">
                    <img className="w-24 sm:w-36" src={Sebrae} alt="Brand" />
                    <img className="w-24 sm:w-36" src={UnigranEAD} alt="Brand" />
                    <img className="w-24 sm:w-36" src={AdãoImóveis} alt="Brand" />
                    <img className="w-24 sm:w-36" src={unimedfrom} alt="Brand" />
                    <img className="w-24 sm:w-36" src={ColégioGGE} alt="Brand" />
                    <img className="w-24 sm:w-36" src={DNAevendas} alt="Brand" />
                </div>
                <div className="space-y-5 sm:w-2/5 sm:py-8 lg:w-3/4 lg:pt-36">
                    <p className="text-3xl tracking-wide font-semibold sm:text-5xl">Confiado por mais de 1000 empresas</p>
                    <button className="bg-black text-white px-6 py-3.5 rounded-full font-semibold text-lg transform hover:translate-x-0.5 hover:translate-y-0.5 transition-transform duration-400 shadow-md sm:hidden">Testar agora gratuitamente
                    </button>
                    <button className="bg-black text-white px-14 py-2.5 rounded-full font-semibold text-xl transform hover:translate-x-0.5 hover:translate-y-0.5 transition-transform duration-400 shadow-md hidden sm:block">Faça como eles
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Brands;