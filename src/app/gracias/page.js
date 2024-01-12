import Image from 'next/image'
import { useRouter } from 'next/navigation';
export default function Gracias (){
   
    return (
       <div>
         <div className="bg-slate-100 text-center  flex flex-col p-20 justify-center items-center">
            <h1 className= "text-3xl text-gray-400  text-center">
            <p>Tu participación en nuestra página nos llena de entusiasmo </p>
           <p>  ¡Gracias!</p>
            </h1>
            <Image
          src="/img/gracias.png"
          width={300}
          height={200}
          alt="ho"
        />
        
        </div>
        <footer className="bg-slate-400   fixed bottom-0 font-bold w-full p-4 text-xl  mt-10 text-center text-gray-800"> Atentamente Jonh Klein</footer>
       </div>
    )
}