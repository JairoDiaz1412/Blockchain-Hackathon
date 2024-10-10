import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

/**
 * Despliega el contrato llamado "OriginInformationContract" usando la cuenta del desplegador
 * y los argumentos del constructor establecidos en la dirección del desplegador.
 *
 * @param hre HardhatRuntimeEnvironment objeto.
 */
const deployOriginInformationContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    En localhost, la cuenta del desplegador es la que viene con Hardhat, que ya está financiada.

    Al desplegar en redes en vivo (por ejemplo, `yarn deploy --network sepolia`), la cuenta del desplegador
    debe tener suficiente saldo para pagar las tarifas de gas para la creación del contrato.

    Puedes generar una cuenta aleatoria con `yarn generate`, que llenará DEPLOYER_PRIVATE_KEY
    con una clave privada aleatoria en el archivo .env (usada luego en hardhat.config.ts).
    Puedes ejecutar el comando `yarn account` para verificar tu saldo en cada red.
  */

  // Obtener la cuenta del desplegador
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  // Desplegar el contrato
  await deploy("OriginInformationContract", {
    from: deployer,
    // Argumentos del constructor del contrato
    args: ["0xde50DEc17dF03BC7abaC89FE1945b9AE1f4941Fe"], // Se pasa la dirección del desplegador como propietario
    log: true,
    // autoMine: se puede pasar a la función de despliegue para acelerar el proceso en redes locales
    // al minar automáticamente la transacción de despliegue del contrato. No tiene efecto en redes en vivo.
    autoMine: true,
  });

  // Obtener el contrato desplegado para interactuar con él después del despliegue.
  const originInformationContract: Contract = await hre.ethers.getContract("OriginInformationContract", deployer);
  console.log(
    "👋 Contrato de Información de Origen desplegado con éxito. Total de productos:",
    await originInformationContract.TotalDeProductos(),
  );
};

// Exportar la función de despliegue
export default deployOriginInformationContract;

// Las etiquetas son útiles si tienes múltiples archivos de despliegue y solo quieres ejecutar uno de ellos.
// Por ejemplo, `yarn deploy --tags OriginInformationContract`
deployOriginInformationContract.tags = ["OriginInformationContract"];
