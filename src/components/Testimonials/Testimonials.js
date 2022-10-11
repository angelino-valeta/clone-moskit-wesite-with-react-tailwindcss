import YanBedin from './Yan.png'
import quote from '../../img/quote.svg';

function Testimonials(){
    return(
        <div className="my-14">
        <div className="p-5 space-y-5 sm:flex sm:flex-row-reverse sm:items-center sm:gap-x-2 md:justify-between">
            <div className="bg-black pb-3 flex justify-end sm:w-1/2 md:w-2/5 ">
                <div className="text-white mr-4 w-2/5 flex flex-col justify-end sm:w-4/6 sm:mr-7">
                    <img className="w-full -mt-6 sm:-mt-10" src={YanBedin} alt="YanBedin" />
                   <div className="py-6 w-40 sm:w-full">
                      <h2 className="mt-3 font-semibold text-xl text-center sm:text-right">Yan Bedin</h2>
                      <p className="text-gray-300 text-md text-right  ">Founder & COO na Prevision
                      </p>
                   </div>
                </div>
            </div>
            <div className="sm:w-1/2">
              <div className="mb-3">
                <img className="sm:w-16 sm:h-auto" src={quote} alt="quotes"/>
              </div>
              <div>
              <h2 className="font-semibold text-2xl sm:text-3xl">Centralizar e facilitar os processos me deixa mais produtivo e mais rápido.</h2>
              </div>
              <div>
              <p className="mt-2 sm:text-lg">O Moskit tem contribuído especialmente para melhora da minha gestão e das minhas tarefas. Depois que adotamos o Moskit, conseguimos ter uma ferramenta para acessar informações importantes. No meu dia a dia, eu preciso de dados claros, e para realizar o report para meus investidores, consigo obter indicadores administrativos e métricas do desempenho de vendas e marketing mais consistes.</p>
              </div>
            </div>
        </div>
        <div className="flex flex-row mt-3 space-x-2 justify-center sm:justify-start ml-5">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-blue-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-blue-400"></div>
        </div>
    </div>
    );
}

export default Testimonials;