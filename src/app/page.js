"use client"
import Image from 'next/image'
import React, { useState } from 'react';

import { useRouter } from 'next/navigation';
import { auth , registerUser } from '@/firebase';
import { v4 as uuidv4} from  "uuid"
export default function Home() {
  const [pdfUrl, setPdfUrl] = useState('/file/FredesVirginiaCv.pdf');
  const router = useRouter();
  const [user, setUser] = useState({
    TTTuid:uuidv4(),
    name: '',
    email: '',
   
  });

  const setDataHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const click = () => {

    window.location.href = 'https://dl.dropbox.com/scl/fi/rioclq0h34vgekeb02bxp/Ebook-Firebase-para-Android.pdf?rlkey=2hpslfkdhz285ipokbpeoge31&dl=0';
    router.push("/gracias");
  
  }

  const onSubmit = async (e)=>{
   
    e.preventDefault();
    console.log('Por el submit');
  
    try {
      console.log('El user es en register', user);
      await registerUser(user);
      router.push("/gracias");
  
  
      
  
    } catch (error) {
      console.error('Error en onSubmit de register', error);
    }
  
  
  
   }
  
  return (
    <div>
      <nav className="bg-color1 flex flex-col justify-center items-center h-[400px]">
        <Image
          src="/img/segunda.jpg"
          width={300}
          height={200}
          alt="ho"
        />
        <h1 className=" text-white text-3xl font-extrabold">Firebase para Android</h1>
      </nav>

      <main className="bg-color2 flex flex-col items-center justify-center text-white">

        <div className="flex flex-col items-center justify-center py-8">
          <p className="font-bold text-xl">Descarga el Ebook 🧧 </p>
          <button onClick={click} className=" mt-4 p-2 px-6 font-extrabold bg-color3 ">
            Aqui
          </button>

        </div>

      </main>
      <section className= " bg-color4 flex flex-col  justify-center text-white  py-4  p-3 items-center">
      <h1 className="text-2xl font-extrabold text-center mb-4">Te gustaria recibir ofertas  de nuestras Formaciones de Desarrollo Web?</h1>
      <h2 className="font-bold text-xl">Aqui puedes enviarnos tus Datos </h2>
      <form onSubmit={(e) => onSubmit(e)}  className=" mt-9 flex flex-col gap-4 max-w-sm py-8 px-3 bg-white ">
        
        <input
          className="border border-gray-200 rounded py-1 px-2 outline-none"
          type="text"
          name="name"
          placeholder="🌈
 Nombre"
 onChange={setDataHandler}
         
        />
        <input
          className="border border-gray-200 rounded py-1 px-2 outline-none"
          type="email"
          name="email"
           placeholder="📩 Email"
           onChange={setDataHandler}
          
        />
        <button className="bg-color3 py-1 text-white rounded shadow">Enviar</button>
      </form>
      </section>
      <footer className="bg-color1 flex flex-col justify-center items-center font-bold text-center text-white text-xl py-4">
            <p>🌞</p>    
             <p> Gracias por Estar Aqui  </p>
      </footer>
    </div>
  )
}
