

var xlist = []
var ylist = []
var divlist = []
var div2list = []
var count = 0
var count1 = 5
var count2 = 0
var count3 = 0
var count4 = 0
var n1 = 0
var n3 = 0
var n4 = 0
var n5 = 0
// Reducir código (meter todo en una function)



function guardar(){

  
  var x = document.getElementById("x").value;
  var y = document.getElementById("y").value;
  xlist.push(x)
  ylist.push(y)

  if (xlist.length >1){
    var X = (parseFloat(-xlist[n1]) + parseFloat(xlist[n1+1]))
    var Y = (parseInt(-ylist[n1]) + parseInt(ylist[n1+1]))
    var div = Y/X
    divlist.push(div)
    n1+=1
  } 
  if (xlist.length > 2){
    var X1 = (parseFloat(-xlist[n3]) + parseFloat(xlist[n3+2]))
    var divs = (parseFloat(-divlist[n3]) + parseFloat(divlist[n3+1]))
    var div2 = divs/X1
    div2list.push(div2)
    n3 += 1
  }
  if (xlist.length > 3){
    var X2 = (parseFloat(-xlist[n4]) + parseFloat(xlist[n4+3]))
    var divs1 = (parseFloat(-divlist[n4]) + parseFloat(divlist[n4+1]))
    var div3 = divs1/X2
   
    n4 += 1
  }
  if (xlist.length > 4){
    var X2 = (parseFloat(-xlist[n5]) + parseFloat(xlist[n5+4]))
    var divs1 = (parseFloat(-divlist[n5]) + parseFloat(divlist[n5+1]))
    var div4 = divs1/X2
   
    n5 += 1
  }
  
  var fila= "<tr><td>"+x+"</td><td>"+ y ;
  tablita = document.getElementById("tablita");
  var btn = document.createElement("TR");
  btn.innerHTML=fila;
  
  for(i=0;i<count;i++){

    var td = document.createElement("TD");
    var textoCelda = document.createTextNode(div)
    btn.appendChild(td);
    td.appendChild(textoCelda)
    
  } 
  count = 1 
  if (count2 >= 2){
    for(i=0;i<1;i++){

      var td1 = document.createElement("TD");
      var textoCelda2 = document.createTextNode(div2)
      btn.appendChild(td1);
      td1.appendChild(textoCelda2)
      
    }
  }
  count2 += 1
  if (count3 >= 3){
    for(i=0;i<1;i++){

      var td2 = document.createElement("TD");
      var textoCelda3 = document.createTextNode(div3)
      btn.appendChild(td2);
      td2.appendChild(textoCelda3)
      
    }
  }
  count3 += 1
  if (count4 >= 4){
    for(i=0;i<1;i++){

      var td3 = document.createElement("TD");
      var textoCelda4 = document.createTextNode(div4)
      btn.appendChild(td3);
      td3.appendChild(textoCelda4)
      
    }
  }
  count4 += 1
  
  
  for(i=0;i<=count1;i++){
    var td = document.createElement("TD");
    btn.appendChild(td);
  }
  
  tablita.appendChild(btn);
  document.getElementById("x").value = "";
  document.getElementById("y").value = "";
  
  count1 -= 1
  
}

var column = "<th>$${Δ^2f(x)}$$<th>"
  
  columns = document.getElementById("tr-principal");
  var tr = document.createElement("Th");
  tr.innerHTML=column;
  columns.appendChild(tr);







// function genera_tabla() {
//   // Obtener la referencia del elemento body
//   var body = document.getElementsByTagName("body")[0];

//   // Crea un elemento <table> y un elemento <tbody>
//   var tabla   = document.createElement("table");
//   var tblBody = document.createElement("tbody");

//   // Crea las celdas
//   for (var i = 0; i < 2; i++) {
//     // Crea las hileras de la tabla
//     var hilera = document.createElement("tr");
//     var hilera1 = document.createElement("td");
//     if (i == 1){
//       for (var j = 0; j < 10; j++) {
//         // Crea un elemento <td> y un nodo de texto, haz que el nodo de
//         // texto sea el contenido de <td>, ubica el elemento <td> al final
//         // de la hilera de la tabla
//         var celda = document.createElement("td");
//         var textoCelda = document.createTextNode("celda en la hilera "+i+", columna "+j);
//         celda.appendChild(textoCelda);
//         hilera.appendChild(celda);
//       }
//   }
//     // agrega la hilera al final de la tabla (al final del elemento tblbody)
//     tblBody.appendChild(hilera);
//     tblBody.appendChild(hilera1);
//   }
  

//   // posiciona el <tbody> debajo del elemento <table>
//   tabla.appendChild(tblBody);
//   // appends <table> into <body>
//   body.appendChild(tabla);
//   // modifica el atributo "border" de la tabla y lo fija a "2";
//   tabla.setAttribute("border", "2");
// }






























// function genera_tabla() {

//     var col = document.getElementById("cols").value;
   
//     // Obtener la referencia del elemento body
//     var body = document.getElementsByTagName("body")[0];
  
//     // Crea un elemento <table> y un elemento <tbody>
//     var tabla   = document.createElement("table");
//     var tblBody = document.createElement("tbody");
  
//     // Crea las celdas
//     for (var i = 0; i < 2; i++) {
//       // Crea las hileras de la tabla
//       var hilera = document.createElement("tr");
  
//       for (var j = 0; j < col; j++) {
//         // Crea un elemento <td> y un nodo de texto, haz que el nodo de
//         // texto sea el contenido de <td>, ubica el elemento <td> al final
//         // de la hilera de la tabla
//         var celda = document.createElement("td");
//         var textoCelda = document.createTextNode("<input type=\"text\" size=\"1\">");
//         celda.append("<td>"+"<input type=\"text\" size=\"1\">"+ "</td>");
//         hilera.appendChild(celda);
//       }
  
//       // agrega la hilera al final de la tabla (al final del elemento tblbody)
//       tblBody.appendChild(hilera);
//     }
  
//     // posiciona el <tbody> debajo del elemento <table>
//     tabla.appendChild(tblBody);
//     // appends <table> into <body>
//     body.appendChild(tabla);
//     // modifica el atributo "border" de la tabla y lo fija a "2";
//     tabla.setAttribute("border", "2");
//   }
