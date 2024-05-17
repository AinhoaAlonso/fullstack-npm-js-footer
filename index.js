// Todo el código que escribimos debe seguir las mejores prácticas y la ley de JavaScript al pie de la letra. 
'use strict';

// Aquí puede que notes que estoy usando la versión anterior de una declaración obligatoria. Podríamos decir 
// "import moment from 'moment'" y estaría bien, aunque esperábamos que la mayoría de las personas que la utilizan utilizaran las versiones más modernas, debemos ser conscientes del hecho de que es posible que no sea así. Por eso queremos procesarlo y asegurarnos de que funcione en todas las diferentes plataformas y entornos de desarrollo.
var moment = require('moment');


// Cuando trabajamos con código externo o cuando construimos una biblioteca como esta que otros van a usar, queremos que sea lo más fácil posible para ellos entender exactamente cuáles son los parámetros.
// Aquí estamos haciendo muy explícito exactamente lo que debe proporcionar y también lo que debe devolver, y eso se refiere a las mejores prácticas de desarrollo en general. (estamos pasando un parametro 'name' en formato string y nos va a devolver otro string).
/**
 * Returns a string element with a footer and updating year
 * @param {string} name
 * @return {string}
 */

/* Se usa para exportar paquetes y aquí estamos usando la sintaxis un poco más antigua una vez más.
// "export default function"
// Llamamos a la función de exportación y luego simplemente agregamos el atributo de "footer". Luego podremos llamarla desde cualquier otra aplicación
*/ 
exports.footer = function (name) {
    return "Copyright " + moment().format('YYYY') + " " + name + " All rights reserved";
};