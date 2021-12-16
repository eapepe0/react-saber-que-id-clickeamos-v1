import React from "react";

export default function Box(props) {
  /* los estilos tienen que ser CamelCase (minuscula 1era palabra , mayusc 1era letra 2da palagra) 
  ej( backgroundColor ) */
  const estilos = {
    backgroundColor: props.on ? "black" : "transparent"
    /* si estado es true : negro de lo contrario blanco */
    /* como estado esta definido primeramente por default leyendo los datos del boxes.js*/
    /* si en lugar de estado tenemos props.on nunca van a ser cambiados por la funcion setEstado */
  };

  return (
    <div
      style={estilos} /* cargamos los estilos */
      className="box"
      onClick={() =>
        props.toogle(props.id)
      } /* hacemos una funcion flecha 
      donde recibimos la funcion de props.toogle y de parametro props.id que seria un id unico para cada caja */
    ></div>
  );

  /* <div style={{}} className="box" key={caja.id}></div>*/
  /* los {} de afuera representa que es javascript */
  /* los {} de adentro representa que es un objeto */
  /* conviene para no generar confusion , generar los estilos en una const */
  /* devolvemos el div con los estilos cargados */
}
