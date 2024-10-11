"use client";

import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <div
      className="flex items-center justify-center flex-col flex-grow pt-10 text-blue-800 relative"
      style={{
        backgroundImage: "url('/fondo-suministro.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="relative z-10 grid grid-cols-1 gap-6" style={{ minWidth: "300px", maxWidth: "600px" }}>
        <div className="bg-white bg-opacity-100 p-5 rounded-lg">
          <h1 className="text-center text-2xl mb-2">Bienvenido a SuministroApp</h1>
          <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row">
            <p className="my-2 font-medium">Cuenta conectada:</p>
            <Address address={connectedAddress} />
          </div>
        </div>

        <div className="bg-white bg-opacity-100 p-5 rounded-lg">
          <h2 className="text-center text-lg font-semibold">Transparencia en la cadena de suministro</h2>
          <p className="text-center">
            La transparencia en la cadena de suministro es esencial para garantizar la confianza del consumidor. Permite
            a los clientes rastrear el origen de los productos, lo que puede influir en sus decisiones de compra.
          </p>
        </div>

        <div className="bg-white bg-opacity-100 p-5 rounded-lg">
          <h2 className="text-center text-lg font-semibold">Tecnología Blockchain</h2>
          <p className="text-center">
            La tecnología blockchain es una herramienta poderosa para lograr esta transparencia. A través de contratos
            inteligentes, se puede registrar y verificar la información sobre cada etapa del proceso de producción y
            distribución.
          </p>
        </div>

        <div className="bg-white bg-opacity-100 p-5 rounded-lg">
          <h2 className="text-center text-lg font-semibold">Objetivo del Proyecto</h2>
          <p className="text-center">
            Este proyecto tiene como objetivo implementar un sistema basado en blockchain que permita a los consumidores
            acceder a información detallada sobre sus productos, promoviendo la responsabilidad y la transparencia en la
            industria.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
