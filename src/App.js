import React from "react";
import boxes from "./boxes";
import Box from "./components/Box.js";

export default function App() {
  const [cajas, setCajas] = React.useState(boxes);
  /* inicializamos cajas con los datos de boxes */

  // forma complicada
  /* function toogle(id) {
    // actualizamos el array
    console.log(id);
    // muestra el consola el id de la caja
    setCajas((prevCajas) => {
      const nuevasCajas = []; // array vacio
      for (let i = 0; i < prevCajas.length; i++) {
        // for que va de 0 a 5
        const estaCaja = prevCajas[i]; // estaCaja recorre todas las cajas
        if (estaCaja.id === id) {
          // si el id de esta caja es igual al id de la funcion donde clickeamos
          const cajaActualizada = {
            // objeto
            ...estaCaja, // spread de estaCaja , seria la caja donde clickeamos ,
            on: !estaCaja.on // le cambiamos el booleano a on
          };
          nuevasCajas.push(cajaActualizada); // metemos el cambio a el array nuevasCajas
        } else {
          // si el id es distinto al de la caja (resto de las cajas)
          nuevasCajas.push(estaCaja); // guardamos como esta
        }
      }
      return nuevasCajas;
    });
  }
 */

  function toogle(id) {
    setCajas((prevCajas) => {
      // metodo para actualizar el useState
      return prevCajas.map((caja) => {
        // devolvemos un mapeo de cajas donde cajes el elemento que recorre el mapeo
        return caja.id === id ? { ...caja, on: !caja.on } : caja;
        // si caja.id es igual al id clickeado devuelve un spread donde el booleano es dado vuelta , de lo contrario devolvemos caja
        // con el {} en el spread estamos diciendo que queremos modificar el objeto
        // y en : caja , al no modificar nada devolvemos caja como esta
      });
    });
  }
  const cajaElementos = cajas.map((caja) => (
    <Box on={caja.on} key={caja.id} id={caja.id} toogle={toogle} />
    /* el box recibe como props la funcion toogle */
  ));
  /* mapeamos por cada elemento en cajas , sacamos un componente box , usamos el id como key */

  return <main>{cajaElementos}</main>;
  /* devolvemos todo lo mapeado */
}
