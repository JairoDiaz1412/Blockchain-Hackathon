// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Util para depuración. Eliminar al desplegar en una red en vivo.
import "hardhat/console.sol";

contract OriginInformationContract {
    // Variables de estado
    address public immutable PropietarioDelContrato; // Propietario del contrato
    uint256 public TotalDeProductos; // Contador de productos
    mapping(uint256 => Producto) public Productos; // Mapeo de productos

    // Estructura para almacenar la información del producto
    struct Producto {
        uint256 ID; // Identificación del producto
        string NombreDelProducto; // Nombre del producto
        string NombreDelFabricante; // Nombre del fabricante
        string PaisDeOrigen; // País de origen
        string InformacionAdicional; // Información adicional sobre el producto
        string FechaDeCaducidad; // Fecha de caducidad del producto
        address PropietarioDelProducto; // Dueño del producto
    }

    // Eventos
    event ProductoRegistrado(
        uint256 ID,
        string NombreDelProducto,
        string NombreDelFabricante,
        string PaisDeOrigen,
        string InformacionAdicional,
        string FechaDeCaducidad,
        address PropietarioDelProducto
    );

    // Constructor
    constructor(address _propietarioDelContrato) {
        PropietarioDelContrato = _propietarioDelContrato; // Inicializar el propietario del contrato
    }

    // Modificador para verificar si el llamador es el propietario
    modifier soloPropietario() {
        require(msg.sender == PropietarioDelContrato, "No es el propietario del contrato");
        _;
    }

    /**
     * Función para registrar un producto con información de origen.
     *
     * @param _nombreDelProducto (string memory) - Nombre del producto
     * @param _nombreDelFabricante (string memory) - Nombre del fabricante
     * @param _paisDeOrigen (string memory) - País de origen del producto
     * @param _informacionAdicional (string memory) - Información adicional sobre el producto
     * @param _fechaDeCaducidad (string memory) - Fecha de caducidad del producto
     */
    function registrarProducto(
        string memory _nombreDelProducto,
        string memory _nombreDelFabricante,
        string memory _paisDeOrigen,
        string memory _informacionAdicional,
        string memory _fechaDeCaducidad
    ) public {
        TotalDeProductos++;
        Productos[TotalDeProductos] = Producto(
            TotalDeProductos,
            _nombreDelProducto,
            _nombreDelFabricante,
            _paisDeOrigen,
            _informacionAdicional,
            _fechaDeCaducidad,
            msg.sender
        );
        emit ProductoRegistrado(
            TotalDeProductos,
            _nombreDelProducto,
            _nombreDelFabricante,
            _paisDeOrigen,
            _informacionAdicional,
            _fechaDeCaducidad,
            msg.sender
        );
    }

    /**
     * Función que permite al propietario retirar todo el Ether del contrato.
     */
    function retirarFondos() public soloPropietario {
        (bool success, ) = PropietarioDelContrato.call{ value: address(this).balance }("");
        require(success, "Fallo al enviar Ether");
    }

    /**
     * Función que permite al contrato recibir ETH.
     */
    receive() external payable {}
}
