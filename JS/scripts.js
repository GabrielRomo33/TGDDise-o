console.log("hola mundo");


var select = document.querySelector('#Sucs');
var selectedOption = 1;
select.addEventListener('change',
function(){
  selectedOption = this.options[select.selectedIndex];
  console.log(selectedOption.value + ': ' + selectedOption.text);
  iniciarMap();
});
var lati = [23.763019, 23.7372961,
            23.7398008, 23.7311943,
            23.7301283, 23.7518381,
            23.7666524, '',
            22.7459233, '',
            23.7310326, 23.7430842];
            
            var long = [-99.140854, -99.145226,
              -99.1326693, -99.1436486,
              -99.1606071, -99.1242913,
              -99.1601216, '',
              -98.9807746, '',
              -99.1431543, -99.1501722];
              
function iniciarMap(){
  var coord = {lat:lati[selectedOption.value -1] ,lng:long[selectedOption.value -1]};
  var map = new google.maps.Map(document.getElementById('Mapsuc'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
  }
  
  
  var MenuVi = document.querySelector(".menuCompleto");
  // var linab1 = document.querySelector(".linemenu1");
  // var linab2 = document.querySelector(".linemenu2");
  // var linab3 = document.querySelector(".linemenu3");
  // document.querySelector(".bur_menu").addEventListener("click",animateBar);
  // document.querySelector(".bar_menu").addEventListener("click",animateBar);
  document.querySelector('#checkbox').addEventListener('click',animateBar);
  //var carouselPrev = document.querySelector(".carousel-control-prev");
  //var carouselNext = document.querySelector(".carousel-control-next");
  
  
  function animateBar(){
    // linab1.classList.toggle("Activelinemenu1");
    // linab2.classList.toggle("Activelinemenu2");
    // linab3.classList.toggle("Activelinemenu3");
    MenuVi.classList.toggle("menuVisible");
  }
  
  // const facto = (n) => {
    //   if (n===0 || n === 1) {
      //     return 1
      //   }else{
        //     return n * facto(n - 1);
        //   }
        // }
        
        // console.log(facto(3))
        
        // function procesarPedido(pedidos) {
//   const name = pedidos.shift();
//   pedidos.unshift("Bebida");
//   pedidos.push(name);
//   return pedidos
// }
// const pedido = ["Nombre","Pizza"];
// console.log(procesarPedido(pedido));
// let numeros = [1,2,3,4,5,6];
// function sumarPares(numero) {
  //   let suma = 0;
  //   for(let n=0;n<numero.length;n++){
    //     if(numero[n] % 2 === 0 && numero[n]<numero.length){//es par 
    //       suma = numero[n] + numero[n+2];
    //       console.log('suma de los pares: ' +suma);
    //     }else if(numero[n] % 2 === 0){
      //       console.log('suma de los pares: ' +suma);
      //     }
      //     else{
        //       console.log(numero[n]+' no es par');
        //     }
        //   }
        //   return suma;
        // }
        // console.log('la suma es: '+sumarPares(numeros));
        
        // Campestre 23.763019 y -99.140854
        // Carrera 23.7372961 y -99.145226
        // Central 23.7398008 y -99.1326693
        // Centro 23.7311943 y -99.1436486
        // Estacion 23.7301283 y -99.1606071
        // Hombres Ilustres 23.7518381 y -99.1242913
        // Libertad 23.7666524 y -99.1601216
        // Loma 
        // Mante 22.7459233 y -98.9807746
        // Naciones Unidas 
        // Obrero 23.7310326 y -99.1431543
        // Toreo 23.7430842 y -99.1501722