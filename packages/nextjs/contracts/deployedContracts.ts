/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  31337: {
    OriginInformationContract: {
      address: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_propietarioDelContrato",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "ID",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "string",
              name: "NombreDelProducto",
              type: "string",
            },
            {
              indexed: false,
              internalType: "string",
              name: "NombreDelFabricante",
              type: "string",
            },
            {
              indexed: false,
              internalType: "string",
              name: "PaisDeOrigen",
              type: "string",
            },
            {
              indexed: false,
              internalType: "string",
              name: "InformacionAdicional",
              type: "string",
            },
            {
              indexed: false,
              internalType: "string",
              name: "FechaDeCaducidad",
              type: "string",
            },
            {
              indexed: false,
              internalType: "address",
              name: "PropietarioDelProducto",
              type: "address",
            },
          ],
          name: "ProductoRegistrado",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "Productos",
          outputs: [
            {
              internalType: "uint256",
              name: "ID",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "NombreDelProducto",
              type: "string",
            },
            {
              internalType: "string",
              name: "NombreDelFabricante",
              type: "string",
            },
            {
              internalType: "string",
              name: "PaisDeOrigen",
              type: "string",
            },
            {
              internalType: "string",
              name: "InformacionAdicional",
              type: "string",
            },
            {
              internalType: "string",
              name: "FechaDeCaducidad",
              type: "string",
            },
            {
              internalType: "address",
              name: "PropietarioDelProducto",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "PropietarioDelContrato",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "TotalDeProductos",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_nombreDelProducto",
              type: "string",
            },
            {
              internalType: "string",
              name: "_nombreDelFabricante",
              type: "string",
            },
            {
              internalType: "string",
              name: "_paisDeOrigen",
              type: "string",
            },
            {
              internalType: "string",
              name: "_informacionAdicional",
              type: "string",
            },
            {
              internalType: "string",
              name: "_fechaDeCaducidad",
              type: "string",
            },
          ],
          name: "registrarProducto",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "retirarFondos",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          stateMutability: "payable",
          type: "receive",
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
