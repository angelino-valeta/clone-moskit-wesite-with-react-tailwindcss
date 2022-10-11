import presentation from './presentation.png'

const setBg ={
    backgroundImage: 'url('+ presentation +')',
    backgroundSize: '55%'
}

function Apresentation(){
    return(
        <div className="mx-6 sm:pb-20 lg:pb-40">
            <div className="pt-7 sm:pt-14 sm:flex sm:flex-col lg:flex-row lg:items-center">
                <div className="text-center space-y-4 lg:text-left">
                    <div className="">
                        <h1 className="text-4xl z-10 font-semibold mb-4 sm:mb-12 sm:text-center lg:text-5xl lg:text-left">Sua empresa conectada aos seus negócios</h1>
                        <div className="sm:text-center sm:w-full lg:w-1/2 lg:text-left lg:w-9/12">
                            <p className="font-medium text-md tracking-wider ">CRM de vendas completo trazendo todas as ferramentas necessárias para sua equipe fechar negócios de qualquer lugar.
                            </p>
                        </div>
                    </div>
                   
                    <div className="my-5 space-y-4 sm:flex-col md:flex md:gap-x-10 md:items-baseline lg:flex-row ">
                        <div className="flex sm:w-full">
                            <button className="bg-blue-600 flex-1 lg:flex-none text-white px-7 py-4 rounded-full font-semibold text-lg transform hover:translate-x-0.5 hover:translate-y-0.5 transition-transform duration-400 shadow-md md:px-10">Teste nosso CRM agora
                            </button>
                        </div>
                        <div className="flex sm:w-full">
                            <button className="bg-black flex-1 lg:flex-auto text-white px-7 py-4 rounded-full font-semibold text-lg transform hover:translate-x-0.5 hover:translate-y-0.5 transition-transform duration-400 shadow-md md:px-8">Entre em contacto
                            </button>
                        </div>
                      
                    </div>
                </div>
                <div className="z-0 mt-8 sm:w-1/2 sm:h-auto sm:mx-auto lg:w-9/12">
                    <img className="w-full" src={presentation} alt="Banner" />
                </div>
            </div>
        </div>
    );  
}

export default Apresentation;