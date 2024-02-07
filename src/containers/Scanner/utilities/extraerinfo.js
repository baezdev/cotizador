

// // Función para extraer información relevante del texto del INE
 export function extraerInformacionINE(texto) {
  const informacion = {
    nombre: "",
    sexo: "",
    direccion: "",
    claveElector: "",
    curp: "",
    fechaNacimiento: "",
    vigencia: "",
  };

  // Expresiones regulares para buscar patrones en el texto
  const nombreRegex = /NOMBRE\s+(.*?)\s+/;
  const sexoRegex = /SEXO\s+(.*?)\s+/;
  const direccionRegex = /DOMICILIO\s+(.*?)\s+/;
  const claveElectorRegex = /CLAVEDEELECTOR\s+(.*?)\s+/;
  const curpRegex = /CURP\s+(.*?)\s+/;
  const fechaNacimientoRegex = /FECHADENACIMIENTO\s+(.*?)\s+/;
  const vigenciaRegex = /VIGENCIA\s+(.*?)\s+/;

  // Buscar coincidencias en el texto y almacenar los resultados
  const nombreMatch = nombreRegex.exec(texto);
  const sexoMatch = sexoRegex.exec(texto);
  const direccionMatch = direccionRegex.exec(texto);
  const claveElectorMatch = claveElectorRegex.exec(texto);
  const curpMatch = curpRegex.exec(texto);
  const fechaNacimientoMatch = fechaNacimientoRegex.exec(texto);
  const vigenciaMatch = vigenciaRegex.exec(texto);

  if (nombreMatch) informacion.nombre = nombreMatch[1];
  if (sexoMatch) informacion.sexo = sexoMatch[1];
  if (direccionMatch) informacion.direccion = direccionMatch[1];
  if (claveElectorMatch) informacion.claveElector = claveElectorMatch[1];
  if (curpMatch) informacion.curp = curpMatch[1];
  if (fechaNacimientoMatch) informacion.fechaNacimiento = fechaNacimientoMatch[1];
  if (vigenciaMatch) informacion.vigencia = vigenciaMatch[1];

  return informacion;
}

// Procesar el texto del INE
// const informacionINE1 = extraerInformacionINE(textoINE1);
// const informacionINE2 = extraerInformacionINE(textoINE2);

// console.log("Información del INE 1:", informacionINE1);
// console.log("Información del INE 2:", informacionINE2);

// export function extraerInformacionINE(texto) {
//   const informacion = {
//     nombre: "",
//     sexo: "",
//     direccion: "",
//     claveElector: "",
//     curp: "",
//     fechaNacimiento: "",
//     vigencia: "",
//   };

//   // Expresiones regulares mejoradas para buscar patrones en el texto
//   const nombreRegex = /NOMBRE[^\S\n\r]*(.*?)[\n\r]/i;
//   const sexoRegex = /SEXO[^\S\n\r]*(.*?)[\n\r]/i;
//   const direccionRegex = /DOMICILIO[^\S\n\r]*(.*?)[\n\r]/i;
//   const claveElectorRegex = /CLAVE\s?DE\s?ELECTOR[^\S\n\r]*(.*?)[\n\r]/i;
//   const curpRegex = /CURP[^\S\n\r]*(.*?)[\n\r]/i;
//   const fechaNacimientoRegex = /FECHA\s?DE\s?NACIMIENTO[^\S\n\r]*(.*?)[\n\r]/i;
//   const vigenciaRegex = /VIGENCIA[^\S\n\r]*(.*?)[\n\r]/i;

//   // Función para buscar coincidencias y actualizar la información
//   const buscarCoincidencias = (regex, propiedad) => {
//     const match = regex.exec(texto);
//     if (match) informacion[propiedad] = match[1].trim();
//   };

//   // Buscar coincidencias en el texto y almacenar los resultados
//   buscarCoincidencias(nombreRegex, "nombre");
//   buscarCoincidencias(sexoRegex, "sexo");
//   buscarCoincidencias(direccionRegex, "direccion");
//   buscarCoincidencias(claveElectorRegex, "claveElector");
//   buscarCoincidencias(curpRegex, "curp");
//   buscarCoincidencias(fechaNacimientoRegex, "fechaNacimiento");
//   buscarCoincidencias(vigenciaRegex, "vigencia");

//   return informacion;
// }

// export function extraerInformacionINE(texto) {
//   const informacion = {
//     nombre: "",
//     sexo: "",
//     direccion: "",
//     claveElector: "",
//     curp: "",
//     fechaNacimiento: "",
//     vigencia: "",
//   };

//   // Expresiones regulares mejoradas para buscar patrones en el texto
//   const regexMap = {
//     nombre: /NOMBRE[^\S\n\r]*(.*?)[\n\r]/i,
//     sexo: /SEXO[^\S\n\r]*(.*?)[\n\r]/i,
//     direccion: /DOMICILIO[^\S\n\r]*(.*?)[\n\r]/i,
//     claveElector: /CLAVE\s?DE\s?ELECTOR[^\S\n\r]*(.*?)[\n\r]/i,
//     curp: /CURP[^\S\n\r]*(.*?)[\n\r]/i,
//     fechaNacimiento: /FECHA\s?DE\s?NACIMIENTO[^\S\n\r]*(.*?)[\n\r]/i,
//     vigencia: /VIGENCIA[^\S\n\r]*(.*?)[\n\r]/i,
//   };

//   // Función para buscar coincidencias y actualizar la información
//   const buscarCoincidencias = (regex, propiedad) => {
//     const match = regex.exec(texto);
//     if (match) {
//       informacion[propiedad] = match[1].trim();
//     }
//   };

//   // Buscar coincidencias en el texto y almacenar los resultados
//   for (const propiedad in regexMap) {
//     if (Object.hasOwnProperty.call(regexMap, propiedad)) {
//       const regex = regexMap[propiedad];
//       buscarCoincidencias(regex, propiedad);
//     }
//   }

//   return informacion;
// }

// export function extraerInformacionINE(texto) {
//   const informacion = {
//     nombre: "",
//     sexo: "",
//     direccion: "",
//     claveElector: "",
//     curp: "",
//     fechaNacimiento: "",
//     vigencia: "",
//   };

//   // Expresiones regulares para buscar patrones en el texto
//   const nombreRegex = /NOMBRE\s+([^\n]+)/;
//   const sexoRegex = /SEXO\s+([^\n]+)/;
//   const direccionRegex = /DOMICILIO\s+([^\n]+)/;
//   const claveElectorRegex = /CLAVEDEELECTOR\s+([^\n]+)/;
//   const curpRegex = /CURP\s+([^\n]+)/;
//   const fechaNacimientoRegex = /FECHADENACIMIENTO\s+([^\n]+)/;
//   const vigenciaRegex = /VIGENCIA\s+([^\n]+)/;

//   // Buscar coincidencias en el texto y almacenar los resultados
//   const nombreMatch = nombreRegex.exec(texto);
//   const sexoMatch = sexoRegex.exec(texto);
//   const direccionMatch = direccionRegex.exec(texto);
//   const claveElectorMatch = claveElectorRegex.exec(texto);
//   const curpMatch = curpRegex.exec(texto);
//   const fechaNacimientoMatch = fechaNacimientoRegex.exec(texto);
//   const vigenciaMatch = vigenciaRegex.exec(texto);

//   if (nombreMatch) informacion.nombre = nombreMatch[1];
//   if (sexoMatch) informacion.sexo = sexoMatch[1];
//   if (direccionMatch) informacion.direccion = direccionMatch[1];
//   if (claveElectorMatch) informacion.claveElector = claveElectorMatch[1];
//   if (curpMatch) informacion.curp = curpMatch[1];
//   if (fechaNacimientoMatch) informacion.fechaNacimiento = fechaNacimientoMatch[1];
//   if (vigenciaMatch) informacion.vigencia = vigenciaMatch[1];

//   // Si encontramos "Sexo" en la información de nombre, reemplazamos el campo de nombre con esa información
//   if (informacion.nombre.includes("Sexo")) {
//     informacion.nombre = informacion.sexo;
//   }

//   return informacion;
// }

// export function extraerInformacionINE(texto) {
//   const informacion = {
//     nombre: "",
//     sexo: "",
//     direccion: "",
//     claveElector: "",
//     curp: "",
//     fechaNacimiento: "",
//     vigencia: "",
//   };

//   // Expresiones regulares para buscar patrones en el texto
//   const nombreRegex = /NOMBRE\s*([\w\s,]+)\s*/i;
//   const sexoRegex = /SEXO\s*([\w]+)\s*/i;
//   const direccionRegex = /DOMICILIO\s*([\w\s,]+)\s*/i;
//   const claveElectorRegex = /CLAVEDEELECTOR\s*([\w]+)\s*/i;
//   const curpRegex = /CURP\s*([\w]+)\s*/i;
//   const fechaNacimientoRegex = /FECHADENACIMIENTO\s*([\w\s,]+)\s*/i;
//   const vigenciaRegex = /VIGENCIA\s*([\w\s,]+)\s*/i;

//   // Buscar coincidencias en el texto y almacenar los resultados
//   const nombreMatch = nombreRegex.exec(texto);
//   const sexoMatch = sexoRegex.exec(texto);
//   const direccionMatch = direccionRegex.exec(texto);
//   const claveElectorMatch = claveElectorRegex.exec(texto);
//   const curpMatch = curpRegex.exec(texto);
//   const fechaNacimientoMatch = fechaNacimientoRegex.exec(texto);
//   const vigenciaMatch = vigenciaRegex.exec(texto);

//   if (nombreMatch) informacion.nombre = nombreMatch[1];
//   if (sexoMatch) informacion.sexo = sexoMatch[1];
//   if (direccionMatch) informacion.direccion = direccionMatch[1];
//   if (claveElectorMatch) informacion.claveElector = claveElectorMatch[1];
//   if (curpMatch) informacion.curp = curpMatch[1];
//   if (fechaNacimientoMatch) informacion.fechaNacimiento = fechaNacimientoMatch[1];
//   if (vigenciaMatch) informacion.vigencia = vigenciaMatch[1];

//   return informacion;
// }


