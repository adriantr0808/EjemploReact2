import Img from "../../assets/2.jpg"; //Importamos la imagen
function Metodos() {
  const sumarNumeros = (numero1, numero2) => {
    //Metodo en el que voy a sumar dos numeros introducidos como parametro

    var resultado = "";
    resultado = numero1 + numero2;
    console.log(resultado);
  };

  return (
    <div>
      <h1 style={{ margin: "1em" }}> Ejemplo 1 Sumar numeros e imagen </h1>
      <button
        style={{
          padding: "2px",
          margin: "1em",
        }}
        onClick={() => sumarNumeros(5, 5)} //Llamo a la funcion con los numeros introducidos como parametro
      >
        Pulsar para sumar
      </button>
      <div>
        <h3 style={{ margin: "1em" }}>Imagen</h3>
        <img
          src={Img}
          alt={"imagenPrueba"}
          style={{ width: "500px", height: "350px", margin: "1em" }}
        ></img>
      </div>
    </div>
  );
}

export default Metodos;
