import Img from '../../assets/2.jpg'
function Metodos() {
  const sumarNumeros = () => {
    var numero1 = 5;
    var numero2 = 4;

    var resultado = "";
    resultado = numero1 + numero2;
    console.log(resultado);
  };

  return (
    <div>
      <h1 style={{margin: '1em'}}> Ejemplo 1 Sumar numeros e imagen </h1>
      <button
        style={{
          padding: "2px",
          margin: "1em",
        }}
        onClick={() => sumarNumeros()}
      >
        Pulsar para sumar{" "}
      </button>{" "}
      <div>
        <h3 style={{margin: '1em'}}>Imagen</h3>
        <img src={Img} alt={'imagenPrueba'} style={{width: '500px', height: '350px', margin: '1em'}}></img>
      </div>
    </div>
  );
}

export default Metodos;
