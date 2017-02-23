var arreglo= [  { nombre : "Arabela", apellido : "Rojas", rol : "T.A", cumpleanios : "23 de enero" },
                { nombre : "Michelle", apellido : "Seguil", rol : "T.A", cumpleanios : "25 de noviembre" },
                { nombre : "Meche", apellido : "Zubieta", rol : "T.A", cumpleanios : "02 de marzo" },
                { nombre : "Papu", apellido : "Rivariola", rol : "Psicóloga", cumpleanios : "10 de octubre" },
                { nombre : "Gian", apellido : "Corzo", rol : "Profesor", cumpleanios : "23 de enero" } ]

for(var i=0 ; i< arreglo.length ;i++){
  document.getElementById("mostrar").innerHTML +=
          "<ul>" +
          "<li>Nombre: " + arreglo[i].nombre + "</li>" +
          "<li>Apellido: " + arreglo[i].apellido  + "</li>" +
          "<li>Rol: " + arreglo[i].rol  + "</li>" +
          "<li>Dirección: " + arreglo[i].cumpleanios  + "</li>" +
        "</ul>";

}

