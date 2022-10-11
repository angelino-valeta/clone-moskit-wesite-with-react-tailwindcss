import logo from './logo.svg';

function Menu(){
    return(
        <div className="m-5 sm:mt-10">
            <div className="flex flex-row">
                <div className="flex-1">
                    <img className="w-24" src={logo} alt="logo moskit"/>
                </div>  
                <div>
                    <button className="fixed z-50 right-5 bg-blue-600 w-14 h-12 rounded-full p-1 shadow-lg flex items-center justify-center transform hover:translate-x-0.5 hover:translate-y-0.5 transition-transform duration-400 focus:outline-none">
                        <svg className="text-white w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </button>
                    <div className="hidden sm:block mr-20 flex items-baseline space-x-5 ">
                        <button className="bg-blue-600 text-white px-7 py-3 rounded-full font-semibold text-md transform hover:translate-x-0.5 hover:translate-y-0.5 transition-transform duration-400 shadow-md ">Teste grátis
                        </button>
                        <button className="bg-white text-black px-7 py-3 rounded-full font-semibold text-md transform hover:translate-x-0.5 hover:translate-y-0.5 transition-transform duration-400 shadow-md ">Acessar Moskit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;