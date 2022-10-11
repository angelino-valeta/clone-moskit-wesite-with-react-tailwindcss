function BannerCTA(){
    return(
        <div className="bg-green-500 mx-5 rounded-md mb-24 lg:w-10/12 lg:mx-auto">
            <div className="flex flex-col p-5 space-y-1 sm:flex-row place-items-center sm:pt-3">
                <div className="mx-auto">
                    <svg className="w-40 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                    </svg>
                </div>
                <div className="space-y-2 sm:w-8/12 sm:pr-20 sm:space-y-1">
                    
                    <h2 className="text-3xl font-semibold">Conteúdo de vendas 
                    <br/>
                    exclusivo no seu e-mail.
                    </h2>
                    <p className="text-lg">
                        Mantenha-se atualizado sobre tudo o que
                        <br/>
                        acontece no mundo das vendas.
                    </p>
                    <div className="flex flex-col space-y-4 sm:space-y-3">
                        <input className="border-none rounded-lg py-2 px-3" type="email" placeholder="Digite seu email*" />
                        <button className="bg-black w-1/2 md:w-1/3 text-white px-3 py-2 rounded-md font-semibold text-lg transform hover:translate-x-0.5 hover:translate-y-0.5 transition-transform duration-400 shadow-md">Inscreva-se</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerCTA;