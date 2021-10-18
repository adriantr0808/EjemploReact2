function SumarNumeros() {
  var numero1 = 5;
  var numero2 = 4;

  var resultado = "";

  resultado = numero1 + numero2;

  console.log(resultado);

  return (
    <button
      style={{ padding: "2px", margin: "1em" }}
      onClick={() => SumarNumeros()}
    >
      Pulsar para sumar
    </button>
  );
}

export default SumarNumeros;
