const datosViaje = [
  {
    id: 1,
    empresa: "Tauro Bus Perú",
    fechaSalida: "Wed Sep 13",
    horaSalida: "07:30",
    codigoSalida: "GMT-0300",
    fechaLlegada: "Wed Sep 13",
    horaLlegada: "18:00",
    codigoLlegada: "GMT-0300",
    terminalSalida: "Terminal 1s",
    terminalLlegada: "Terminal 3l",
    reembolsable: true,
    tipoAsiento: "Asiento Requinable",
    precio: 45,
  },
  {
    id: 2,
    empresa: "Tauro Bus Perú",
    fechaSalida: "Wed Sep 14",
    horaSalida: "17:30",
    codigoSalida: "GMT-0300",
    fechaLlegada: "Wed Sep 14",
    horaLlegada: "19:00",
    codigoLlegada: "GMT-0300",
    terminalSalida: "Terminal 2s",
    terminalLlegada: "Terminal 3l",
    reembolsable: false,
    tipoAsiento: "Cama",
    precio: 65,
  },
  {
    id: 3,
    empresa: "Plus Bus Perú",
    fechaSalida: "Wed Sep 16",
    horaSalida: "05:30",
    codigoSalida: "GMT-0300",
    fechaLlegada: "Wed Sep 17",
    horaLlegada: "20:00",
    codigoLlegada: "GMT-0300",
    terminalSalida: "Terminal 2s",
    terminalLlegada: "Terminal 3l",
    reembolsable: false,
    tipoAsiento: "Cama",
    precio: 76,
  },
  {
    id: 4,
    empresa: "Plus Bus Perú",
    fechaSalida: "Wed Sep 16",
    horaSalida: "20:30",
    codigoSalida: "GMT-0300",
    fechaLlegada: "Wed Sep 16",
    horaLlegada: "22:00",
    codigoLlegada: "GMT-0300",
    terminalSalida: "Terminal 2s",
    terminalLlegada: "Terminal 4l",
    reembolsable: true,
    tipoAsiento: "Cama",
    precio: 35,
  },
];

const cardsContainer = document.querySelector(".cards");

function crearTarjeta(viaje) {
  const card = document.createElement("div");
  card.className = "card__pidebus";
  // ESCUCHA EL TAMAÑO DE LA PANTALLA PARA AGREGAR EL DISEÑO MOBILE
  function handleResize() {
    if (window.innerWidth <= 576) {
      card.innerHTML = `
      <div class="row w-100 w-full">
      <div class="col-sm-12 d-flex justify-content-between mt-2 mb-3">
        <span>${viaje.empresa}</span>
        <span>S/ ${viaje.precio}</span>
      </div>
      <div class="col-sm-12 d-flex justify-content-between w-full w-100">
        <div class="d-flex flex-col justify-content-start align-items-center card w-100 w-full">
          <div class="d-flex flex-row justify-content-start align-items-center width-100 px-2 pb-2">
            <div class="timeline">
              <div class="event">
                <div class="time font-weight-bold">09:00 AM</div>
                <div class="connector"></div>
                <div class="icon">Arequipa <br> <span class="text-xs-gray">Terminal</span></div>
              </div>
              <div class="middle-line"></div>
              <div class="event">
                <div class="time font-weight-bold">03:00 PM</div>
                <div class="connector"></div>
                <div class="icon">Lima <br> <span class="text-xs-gray">Altocongo</span></div>
              </div>
            </div>
          </div>
          <div class="d-flex flex-row width-100 justify-content-start align-items-start gap-10 pl-2 pr-2 pb-2">
            <span class="text-xs-black">0 Escalas</span>
            <span class="text-xs-black">16:34m</span>
            <span class="text-xs-black">3 Pasajeros</span>
          </div>
        </div>
  
  
      </div>

       <div class="col-sm-12 d-flex flex-row w-100 justify-content-start align-items-center py-2 div_limites_all">
        <div class="div_forma_pago">
          <div style="background-color: rgb(0, 0, 121);" class="line_vertical_formas_pago"></div>
          <span class="text-xs-black">BBVA</span>
        </div>
        <div class="div_forma_pago">
          <div style="background-color: rgb(88, 0, 88);" class="line_vertical_formas_pago"></div>
          <span class="text-xs-black">Yape</span>
        </div>
        <div class="div_forma_pago">
          <div style="background-color: rgb(0, 0, 209);" class="line_vertical_formas_pago"></div>
          <span class="text-xs-black">Plin</span>
        </div>
        <div class="div_forma_pago">
          <div style="background-color: green;" class="line_vertical_formas_pago"></div>
          <span class="text-xs-black">Interbank</span>
        </div>
        <div class="div_forma_pago">
          <div style="background-color: rgb(0, 0, 53);" class="line_vertical_formas_pago"></div>
          <span class="text-xs-black">Credit Bank of Peru</span>
        </div>
      </div>
  
      <div class="col-sm-12 w-full w-100 m-auto">
  <div class="d-flex justify-content-between w-100 w-full m-auto m-auto align-items-center">
    <div class="text-xs">
      ${viaje.tipoAsiento} ${viaje.reembolsable ? "Reembolsable" : ""}
    </div>
    <button type="button" data-toggle="collapse" data-target="#collapse-${
      viaje.id
    }" aria-expanded="false" aria-controls="collapse-${
        viaje.id
      }" class="btn btn_naranja btn_ver">
      <div class="d-flex flex-row align-items-center justify-content-center" style="white-space: nowrap;">
        <span class="color-white ml-1 font-weight-bold">Ver Asientos</span>
      </div>
    </button>
  </div>
</div>
  
     
    </div>
  
      `;
    }
    if (window.innerWidth >= 768 && window.innerWidth < 992) {
      card.innerHTML = `

      <div class="div__card">
        <span class="e__tick mb-2">${viaje.empresa}</span>
        <img src="./assets/img/icon.png" alt="alt-img" srcset="./assets/img/icon.png" width="100px">
        <div class="rating">
          <span class="star">&#9733;</span>
          <span class="star">&#9733;</span>
          <span class="star">&#9733;</span>
          <span class="star">&#9733;</span>
          <span class="star">&#9733;</span>
        </div>
      </div>
      <div class="div__card">
        <div class="exit__part">
          <span class="intro__date">Sale:</span>
          <p class="date">${viaje.fechaSalida}</p>
        </div>
        <span class="hour">${viaje.horaSalida}</span>
        <span class="date">${viaje.codigoSalida}</span>
        <div class="d-flex flex-row justify-content-center mt-3">
          <img src="/assets/svg/location.svg" width="20px" height="20px" alt="Location">
          <span class="terminal ml-1">${viaje.terminalSalida}</span>
        </div>
      </div>
      <div class="div__card align-items-center">
        <img src="/assets/svg/about/bus_card.svg" width="40px" height="40px" alt="Bus">
        <div class="line__card"></div>
        <div class="d-flex flex-row justify-content-center align-items-end mt-5">
          <img src="/assets/svg/about/icon_asiento.svg" width="30px" height="30px" alt="Cama">
          <span class="ml-2 cama">${viaje.tipoAsiento}</span>
        </div>
      </div>
      <div class="div__card">
        <div class="exit__part">
          <span class="intro__date">Llega:</span>
          <p class="date">${viaje.fechaLlegada}</p>
        </div>
        <span class="hour">${viaje.horaLlegada}</span>
        <span class="date">${viaje.codigoLlegada}</span>
        <div class="d-flex flex-row justify-content-center mt-3">
          <img src="/assets/svg/location.svg" width="20px" height="20px" alt="Location">
          <span class="terminal ml-1">${viaje.terminalLlegada}</span>
        </div>
      </div>
      <div class="div__card">
        <div class="d-flex flex-column justify-content-center">
          <img class="mb-1" src="/assets/svg/payment/lukita_1.png" width="35px" height="35px" alt="BBVA">
          <img class="mb-1" src="/assets/svg/payment/pagoefectivo-logo.png" width="80px" height="25px" alt="pagoefectivo">
          <img class="mb-1" src="/assets/svg/payment/logo.png" width="30px" height="30px" alt="BBVA">
        </div>
      </div>
      <div class="div__card">
        <button class="btn btn-success btn-sm" type="button">
          <div class="d-flex flex-row align-items-center justify-content-center">
            <img src="/assets/svg/whatsapp.svg" width="18px" height="18px" alt="Cama">
            <span class="color-white ml-1 font-weight-bold">Contactar</span>
          </div>
        </button>
        <span class="price">S/ ${viaje.precio}</span>
        <span class="reembol" >${
          viaje.reembolsable === true ? "Reembolsable" : ""
        }</span>
        <button  type="button" data-toggle="collapse" data-target="#collapse-${
          viaje.id
        }" aria-expanded="false" aria-controls="collapse-${
        viaje.id
      }" class="btn btn_naranja btn_ver">
          <div class="d-flex flex-row align-items-center justify-content-center">
            <span class="color-white ml-1 font-weight-bold">Ver Asientos</span>
          </div>
        </button>
      </div>
    `;
    }
    if (window.innerWidth >= 992 && window.innerWidth < 1200) {
      card.innerHTML = `
      <div class="div__card">
        <span class="e__tick mb-2">${viaje.empresa}</span>
        <img src="./assets/img/icon.png" alt="alt-img" srcset="./assets/img/icon.png" width="100px">
        <div class="rating">
          <span class="star">&#9733;</span>
          <span class="star">&#9733;</span>
          <span class="star">&#9733;</span>
          <span class="star">&#9733;</span>
          <span class="star">&#9733;</span>
        </div>
      </div>
      <div class="div__card">
        <div class="exit__part">
          <span class="intro__date">Sale:</span>
          <p class="date">${viaje.fechaSalida}</p>
        </div>
        <span class="hour">${viaje.horaSalida}</span>
        <span class="date">${viaje.codigoSalida}</span>
        <div class="d-flex flex-row justify-content-center mt-3">
          <img src="/assets/svg/location.svg" width="20px" height="20px" alt="Location">
          <span class="terminal ml-1">${viaje.terminalSalida}</span>
        </div>
      </div>
      <div class="div__card align-items-center">
        <img src="/assets/svg/about/bus_card.svg" width="40px" height="40px" alt="Bus">
        <div class="line__card"></div>
        <div class="d-flex flex-row justify-content-center align-items-end mt-5">
          <img src="/assets/svg/about/icon_asiento.svg" width="30px" height="30px" alt="Cama">
          <span class="ml-2 cama">${viaje.tipoAsiento}</span>
        </div>
      </div>
      <div class="div__card">
        <div class="exit__part">
          <span class="intro__date">Llega:</span>
          <p class="date">${viaje.fechaLlegada}</p>
        </div>
        <span class="hour">${viaje.horaLlegada}</span>
        <span class="date">${viaje.codigoLlegada}</span>
        <div class="d-flex flex-row justify-content-center mt-3">
          <img src="/assets/svg/location.svg" width="20px" height="20px" alt="Location">
          <span class="terminal ml-1">${viaje.terminalLlegada}</span>
        </div>
      </div>
      <div class="div__card">
        <div class="d-flex flex-column justify-content-center">
          <img class="mb-1" src="/assets/svg/payment/lukita_1.png" width="35px" height="35px" alt="BBVA">
          <img class="mb-1" src="/assets/svg/payment/pagoefectivo-logo.png" width="80px" height="25px" alt="pagoefectivo">
          <img class="mb-1" src="/assets/svg/payment/logo.png" width="30px" height="30px" alt="BBVA">
        </div>
      </div>
      <div class="div__card">
        <button class="btn btn-success btn-sm" type="button">
          <div class="d-flex flex-row align-items-center justify-content-center">
            <img src="/assets/svg/whatsapp.svg" width="18px" height="18px" alt="Cama">
            <span class="color-white ml-1 font-weight-bold">Contactar</span>
          </div>
        </button>
        <span class="price">S/ ${viaje.precio}</span>
        <span class="reembol" >${
          viaje.reembolsable === true ? "Reembolsable" : ""
        }</span>
        <button  type="button" data-toggle="collapse" data-target="#collapse-${
          viaje.id
        }" aria-expanded="false" aria-controls="collapse-${
        viaje.id
      }" class="btn btn_naranja btn_ver">
          <div class="d-flex flex-row align-items-center justify-content-center">
            <span class="color-white ml-1 font-weight-bold">Ver Asientos</span>
          </div>
        </button>
      </div>
    `;
    }
    if (window.innerWidth >= 1200) {
      card.innerHTML = `
      <div class="div__card">
        <span class="e__tick mb-2">${viaje.empresa}</span>
        <img src="./assets/img/icon.png" alt="alt-img" srcset="./assets/img/icon.png" width="100px">
        <div class="rating">
          <span class="star">&#9733;</span>
          <span class="star">&#9733;</span>
          <span class="star">&#9733;</span>
          <span class="star">&#9733;</span>
          <span class="star">&#9733;</span>
        </div>
      </div>
      <div class="div__card">
        <div class="exit__part">
          <span class="intro__date">Sale:</span>
          <p class="date">${viaje.fechaSalida}</p>
        </div>
        <span class="hour">${viaje.horaSalida}</span>
        <span class="date">${viaje.codigoSalida}</span>
        <div class="d-flex flex-row justify-content-center mt-3">
          <img src="/assets/svg/location.svg" width="20px" height="20px" alt="Location">
          <span class="terminal ml-1">${viaje.terminalSalida}</span>
        </div>
      </div>
      <div class="div__card align-items-center">
        <img src="/assets/svg/about/bus_card.svg" width="40px" height="40px" alt="Bus">
        <div class="line__card"></div>
        <div class="d-flex flex-row justify-content-center align-items-end mt-5">
          <img src="/assets/svg/about/icon_asiento.svg" width="30px" height="30px" alt="Cama">
          <span class="ml-2 cama">${viaje.tipoAsiento}</span>
        </div>
      </div>
      <div class="div__card">
        <div class="exit__part">
          <span class="intro__date">Llega:</span>
          <p class="date">${viaje.fechaLlegada}</p>
        </div>
        <span class="hour">${viaje.horaLlegada}</span>
        <span class="date">${viaje.codigoLlegada}</span>
        <div class="d-flex flex-row justify-content-center mt-3">
          <img src="/assets/svg/location.svg" width="20px" height="20px" alt="Location">
          <span class="terminal ml-1">${viaje.terminalLlegada}</span>
        </div>
      </div>
      <div class="div__card">
        <div class="d-flex flex-column justify-content-center">
          <img class="mb-1" src="/assets/svg/payment/lukita_1.png" width="35px" height="35px" alt="BBVA">
          <img class="mb-1" src="/assets/svg/payment/pagoefectivo-logo.png" width="80px" height="25px" alt="pagoefectivo">
          <img class="mb-1" src="/assets/svg/payment/logo.png" width="30px" height="30px" alt="BBVA">
        </div>
      </div>
      <div class="div__card">
        <button class="btn btn-success btn-sm" type="button">
          <div class="d-flex flex-row align-items-center justify-content-center">
            <img src="/assets/svg/whatsapp.svg" width="18px" height="18px" alt="Cama">
            <span class="color-white ml-1 font-weight-bold">Contactar</span>
          </div>
        </button>
        <span class="price">S/ ${viaje.precio}</span>
        <span class="reembol" >${
          viaje.reembolsable === true ? "Reembolsable" : ""
        }</span>
        <button  type="button" data-toggle="collapse" data-target="#collapse-${
          viaje.id
        }" aria-expanded="false" aria-controls="collapse-${
        viaje.id
      }" class="btn btn_naranja btn_ver">
          <div class="d-flex flex-row align-items-center justify-content-center">
            <span class="color-white ml-1 font-weight-bold">Ver Asientos</span>
          </div>
        </button>
      </div>
    `;
    }
  }

  // Agregar un evento de cambio de tamaño de ventana
  window.addEventListener("resize", handleResize);

  handleResize();

  const tarjeta = document.createElement("div");
  tarjeta.className = "ver__asientos w-100";
  // ESCUCHA EL TAMAÑO DE LA PANTALLA PARA AGREGAR EL DISEÑO MOBILE
  if (window.innerWidth <= 576) {
    const accordionExample = document.getElementById("accordionExample");
    accordionExample.classList.remove("d-none");
    accordionExample.classList.add("d-block");

    const colFilters = document.getElementById("colFilters");
    colFilters.classList.add("d-none");

    tarjeta.innerHTML = `
    <div class="d-flex flex-column justify-content-centen aling-items-center m-auto ">
    <div class="row d-flex flex-column">
    <div
      class="flex-row flex-column w-100 w-full p-2 bg-white-rounded justify-content-center align-items-center collapse  tarjetas_collapsed"
      id="collapse-${viaje.id}">
      <div class="col-sm-12 mt-3">  <div class="asientos w-100">
        <div class="d-flex flex-row w-100 justify-content-start align-items-center mb-2">
          <div class="icon__user mr-2">
            <img class="user__img" src="./assets/img/user-img.jpg" alt="user-img">
            <div class="online"></div>
          </div>
          <div class="user_stats">
            <div class="d-flex flex-column w-100 justify-content-start">
              <div class="d-flex flex-row justify-content-start align-items-center">
                <span class="mr-3 user_name">Name</span>
                <div class="p-1 user_likes">
                  <span>94,50%</span>
                </div>
              </div>
              <div class="d-flex flex-row justify-content-start align-items-center ordenes">
                <span>Órdenes 2922</span>
                <div class="line_vertical"></div>
                <span>95,70% Promedio</span>
              </div>
            </div>
          </div>
        </div>
        <div class="w-100 w-full">
          <div class="d-flex flex-column justify-content-start align-items-center p-3 bus">
            <div class="first_floor">
              <div class="text-align-center title_first_floor">Primer piso - 160°</div>
            </div>
            <div class="first_floor_mid">
              <div class="parent">
                <div class="div1 grid-item">1 </div>
                <div class="div2 grid-item">2 </div>
                <div class="div3 grid-item">3 </div>
                <div class="div4 grid-item">4 </div>
                <div class="div5 grid-item selected">5 </div>
                <div class="div6 grid-item">6 </div>
                <div class="div7 grid-item used">X </div>
                <div class="div8 grid-item used">X </div>
                <div class="div9 grid-item selected">9</div>
                <div class="div10 grid-item selected">10 </div>
                <div class="div11 grid-item">11 </div>
                <div class="div12 grid-item">12 </div>
              </div>
            </div>
            <div class="first_floor_final mb-2">
              <div class="title_first_floor_final"></div>
            </div>
            <div class="first_floor">
              <div class="text-align-center title_first_floor">Segundo Piso - 140°</div>
            </div>
            <div class="first_floor_mid">
              <div class="parent-second">
                <div class="div1-second grid-item">13 </div>
                <div class="div2-second grid-item">14 </div>
                <div class="div3-second grid-item">15 </div>
                <div class="div4-second grid-item">16 </div>
                <div class="div5-second grid-item">17 </div>
                <div class="div6-second grid-item">18 </div>
                <div class="div7-second grid-item">19 </div>
                <div class="div8-second grid-item">20 </div>
                <div class="div9-second grid-item">21 </div>
                <div class="div10-second grid-item">22 </div>
                <div class="div11-second grid-item escaleras"> esca</div>
                <div class="div12-second grid-item escaleras"> esca</div>
                <div class="div13-second grid-item"> 23</div>
                <div class="div14-second grid-item"> 24</div>
                <div class="div15-second grid-item escaleras"> esca</div>
                <div class="div16-second grid-item"> 25</div>
                <div class="div17-second grid-item"> 26</div>
                <div class="div18-second grid-item"> 27</div>
                <div class="div19-second grid-item"> 28</div>
                <div class="div20-second grid-item"> 29</div>
                <div class="div21-second grid-item"> 30</div>
                <div class="div22-second grid-item"> 31</div>
                <div class="div23-second grid-item"> 32</div>
              </div>
            </div>
            <div class="first_floor_final">
              <div class="title_first_floor_final"></div>
            </div>
          </div>
        </div>
      </div></div>
     
      <div class="col-sm-12 mt-3"> <div class="d-flex flex-col justify-content-center align-items-center card">
        <span class="font-weight-bold pt-2 text-xl">SU SELECCIÓN DE VIAJE</span>
        <div class="line" style="width: 100%;"></div>
        
        <div class="d-flex flex-row width-100 justify-content-center align-items-start gap-10 pl-2 pr-2 pb-2">
          <span class="text-xl-black">0 Escalas</span>
          <span class="text-xl-black">16:34m</span>
          <span class="text-xl-black">3 Pasajeros</span>
        </div>
      </div> </div>
      <div class="col-sm-12 mt-3">
        <div class="d-flex flex-col justify-content-start align-items-center card">
          <span class="font-weight-bold pt-2 text-xl">TUS ASIENTOS</span>
          <div class="line" style="width: 100%;"></div>
          <div class="d-flex flex-column justify-content-start align-items-center width-100 px-2">
            <div class="d-flex flex-row justify-content-between align-items-center width-100 gap-10">
              <p><span class="text-xl-black font-weight-bold">reclinación 160°</span></p>
              <p>S/ 110</p>
            </div>
            <div class="d-flex flex-row justify-content-between align-items-center width-100 gap-10">
              <p><span class="text-xl-black font-weight-bold">reclinación 160°</span></p>
              <p>S/ 110</p>
            </div>
            <div class="d-flex flex-row justify-content-between align-items-center width-100 gap-10">
              <p><span class="text-xl-black font-weight-bold">reclinación 160°</span></p>
              <p>S/ 110</p>
            </div>
          </div>
          <div class="line"></div>
          <div class="d-flex flex-row width-100 justify-content-between align-items-start gap-10 pl-2 pr-2 pb-2">
            <div class="d-flex flex-column justify-content-start align-items-start">
              <span class="font-weight-bold text-xl">TOTAL</span>
              <span class="text-xs-gray">Tasas y impuestos incluidos</span>
            </div>
            <span class="font-weight-bold">S/ 330</span>
          </div>
        </div>
        
        <div class="d-flex flex-row justify-content-between align-items-center width-100 gap-10 mt-3">
          <button class="btn btn_gris" type="button">
            <div class="d-flex flex-row align-items-center justify-content-center">
              <span class="color-white ml-1 font-weight-bold text-xs-black">Cancelar</span>
            </div>
          </button>
          <button class="btn btn_green" type="button">
            <div class="d-flex flex-row align-items-center justify-content-center">
              <span class="color-white ml-1 font-weight-bold">Reservar</span>
            </div>
          </button>
        </div>
    

      </div>
     
    </div>
    </div>
  </div>
   

  
    
 


   
    `;
  }
  if (window.innerWidth >= 768 && window.innerWidth < 992) {
    const accordionExample = document.getElementById("accordionExample");
    accordionExample.classList.remove("d-none");
    accordionExample.classList.add("d-block");

    const colFilters = document.getElementById("colFilters");
    colFilters.classList.add("d-none");

    tarjeta.innerHTML = `
    <div class="flex-row w-100 p-2 bg-white-rounded gap-10 justify-content-start align-items-center  collapse tarjetas_collapsed " id="collapse-${viaje.id}">
    <div class="asientos">
    <div class="d-flex flex-row w-100 justify-content-start align-items-center">
      <div class="icon__user mr-2">
        <img class="user__img" src="./assets/img/user-img.jpg" alt="user-img">
        <div class="online"></div>
      </div>
      <div class="user_stats">
        <div class="d-flex flex-column w-100 justify-content-start">
          <div class="d-flex flex-row justify-content-start align-items-center">
            <span class="mr-3 user_name">Name</span>
            <div class="p-1 user_likes">
              <span>94,50%</span>
            </div>
          </div>
          <div class="d-flex flex-row justify-content-start align-items-center ordenes">
            <span>Órdenes 2922</span>
            <div class="line_vertical"></div>
            <span>95,70% Promedio</span>
          </div>
        </div>
      </div>
    </div>
  
    <div class="d-flex flex-row w-100 justify-content-start align-items-center py-2 div_limites_all">
      <div class="div_limites">
        <span class="font-weight-bold">15 minutos</span>
        <span class="text-xs-gray">Tiempo limite del pago</span>
      </div>
      <div class="div_limites">
        <span class="font-weight-bold">15 minutos</span>
        <span class="text-xs-gray">Tiempo limite del pago</span>
      </div>
      <div class="div_limites">
        <span class="font-weight-bold">15 minutos</span>
        <span class="text-xs-gray">Tiempo limite del pago</span>
      </div>
    </div>
  
    <div class="d-flex flex-row w-100 justify-content-start align-items-center py-2 div_limites_all">
      <div class="div_forma_pago">
        <div style="background-color: rgb(0, 0, 121);" class="line_vertical_formas_pago"></div>
        <span class="text-xs-black">BBVA</span>
      </div>
      <div class="div_forma_pago">
        <div style="background-color: rgb(88, 0, 88);" class="line_vertical_formas_pago"></div>
        <span class="text-xs-black">Yape</span>
      </div>
      <div class="div_forma_pago">
        <div style="background-color: rgb(0, 0, 209);" class="line_vertical_formas_pago"></div>
        <span class="text-xs-black">Plin</span>
      </div>
      <div class="div_forma_pago">
        <div style="background-color: green;" class="line_vertical_formas_pago"></div>
        <span class="text-xs-black">Interbank</span>
      </div>
      <div class="div_forma_pago">
        <div style="background-color: rgb(0, 0, 53);" class="line_vertical_formas_pago"></div>
        <span class="text-xs-black">Credit Bank of Peru</span>
      </div>
    </div>
  
    <div class="d-flex flex-row justify-content-center align-items-start p-1 mt-3">
      <div class="d-flex flex-column justify-content-start align-items-start width-40">
        <p class="p-0 m-0">
          <button class="rounded-pill btn pl-1 text-xs-black d-flex flex-row align-items-center justify-content-start width-100 button-collap" type="button" data-toggle="collapse" data-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
            <div class="icon_naranja d-flex justify-content-center align-items-center">icon</div>
            <span class="font-weight-normal mr-4">Más adelante</span>
            <div class="d-flex flex-column justify-content-end align-items-end mr-2">
              <span class="font-weight-normal">Desde</span>
              <span class="text-xs-black font-weight-bold">USD 11</span>
            </div>
            <span class="arrow-down"></span>
          </button>
          <div class="collapse" id="collapseExample1">
            <div class="card-body d-flex flex-column justify-content-start align-items-start p-2">
              <span class="text-xs-black">Más espacio para tus piernas</span>
              <span class="text-xs-black">Embarca con prioridad</span>
              <span class="text-xs-black">Necesitaras cumplir con requisitos especiales</span>
            </div>
          </div>
        </p>
  
  
        <p class="p-0 m-0">
          <button class="rounded-pill  btn pl-1 text-xs-black d-flex flex-row align-items-center justify-content-start width-100 button-collap" type="button" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
            <div class="icon_naranja d-flex justify-content-center align-items-center">icon</div>
            <span class="font-weight-normal mr-4">Más adelante</span>
            <div class="d-flex flex-column justify-content-end align-items-end mr-2">
              <span class="font-weight-normal">Desde</span>
              <span class="text-xs-black font-weight-bold">USD 11</span>
            </div>
            <span class="arrow-down"></span>
          </button>
          <div class="collapse" id="collapseExample2">
            <div class="card-body d-flex flex-column justify-content-start align-items-start p-2">
              <span class="text-xs-black">Más espacio para tus piernas</span>
              <span class="text-xs-black">Embarca con prioridad</span>
              <span class="text-xs-black">Necesitaras cumplir con requisitos especiales</span>
            </div>
          </div>
        </p>
  
  
        <p class="p-0 m-0">
          <button class="rounded-pill  btn pl-1 text-xs-black d-flex flex-row align-items-center justify-content-start width-100 button-collap" type="button" data-toggle="collapse" data-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
            <div class="icon_naranja d-flex justify-content-center align-items-center">icon</div>
            <span class="font-weight-normal mr-4">Más adelante</span>
            <div class="d-flex flex-column justify-content-end align-items-end mr-2">
              <span class="font-weight-normal">Desde</span>
              <span class="text-xs-black font-weight-bold">USD 11</span>
            </div>
            <span class="arrow-down"></span>
          </button>
          <div class="collapse" id="collapseExample3">
            <div class="card-body d-flex flex-column justify-content-start align-items-start p-2">
              <span class="text-xs-black">Más espacio para tus piernas</span>
              <span class="text-xs-black">Embarca con prioridad</span>
              <span class="text-xs-black">Necesitaras cumplir con requisitos especiales</span>
            </div>
          </div>
        </p>
  
      </div>
      <div class="width-60">
          <div class="d-flex flex-column justify-content-start align-items-center p-3 bus">
            <div class="first_floor">
              <div class="text-align-center title_first_floor">Primer piso - 160°</div>
            </div>
            <div class="first_floor_mid">
              <div class="parent">
                  <div class="div1 grid-item">1 </div>
                  <div class="div2 grid-item">2 </div>
                  <div class="div3 grid-item">3 </div>
                  <div class="div4 grid-item">4 </div>
                  <div class="div5 grid-item selected">5 </div>
                  <div class="div6 grid-item">6 </div>
                  <div class="div7 grid-item used">X </div>
                  <div class="div8 grid-item used">X </div>
                  <div class="div9 grid-item selected">9</div>
                  <div class="div10 grid-item selected">10 </div>
                  <div class="div11 grid-item">11 </div>
                  <div class="div12 grid-item">12 </div>
              </div>
            </div>
            <div class="first_floor_final mb-2">
              <div class="title_first_floor_final"></div>
            </div>
            <div class="first_floor">
              <div class="text-align-center title_first_floor">Segundo Piso - 140°</div>
            </div>
            <div class="first_floor_mid">
              <div class="parent-second">
                <div class="div1-second grid-item">13 </div>
                <div class="div2-second grid-item">14 </div>
                <div class="div3-second grid-item">15 </div>
                <div class="div4-second grid-item">16 </div>
                <div class="div5-second grid-item">17 </div>
                <div class="div6-second grid-item">18 </div>
                <div class="div7-second grid-item">19 </div>
                <div class="div8-second grid-item">20 </div>
                <div class="div9-second grid-item">21 </div>
                <div class="div10-second grid-item">22 </div>
                <div class="div11-second grid-item escaleras"> esca</div>
                <div class="div12-second grid-item escaleras"> esca</div>
                <div class="div13-second grid-item"> 23</div>
                <div class="div14-second grid-item"> 24</div>
                <div class="div15-second grid-item escaleras"> esca</div>
                <div class="div16-second grid-item"> 25</div>
                <div class="div17-second grid-item"> 26</div>
                <div class="div18-second grid-item"> 27</div>
                <div class="div19-second grid-item"> 28</div>
                <div class="div20-second grid-item"> 29</div>
                <div class="div21-second grid-item"> 30</div>
                <div class="div22-second grid-item"> 31</div>
                <div class="div23-second grid-item"> 32</div>
                </div>
            </div>
            <div class="first_floor_final">
              <div class="title_first_floor_final"></div>
            </div>
          </div>
        </div>
      </div>
  </div>
  <div class="reserva gap-10">
    <div class="d-flex flex-col justify-content-start align-items-center card">
      <span class="font-weight-bold p-2">Su selección de viaje</span>
      <div class="line" style="width: 100%;"></div>
      <div class="d-flex flex-row justify-content-end align-items-center width-100 px-2 pb-2">
        <div class="saliente">
          <strong>Saliente</strong> - Miércoles, Sep. 6
        </div>
      </div>
      <div class="d-flex flex-row justify-content-start align-items-center width-100 px-2 pb-2">
        <div class="timeline">
          <div class="event">
              <div class="time font-weight-bold">09:00 AM</div>
              <div class="connector"></div>
              <div class="icon">Arequipa <br> <span class="text-xs-gray">Terminal</span></div>
          </div>
          <div class="middle-line"></div>
          <div class="event">
              <div class="time font-weight-bold">03:00 PM</div>
              <div class="connector"></div>
              <div class="icon">Lima <br> <span class="text-xs-gray">Altocongo</span></div>
          </div>
        </div>
      </div>
      <div class="d-flex flex-row width-100 justify-content-start align-items-start gap-10 pl-2 pr-2 pb-2">
        <span class="text-xs-black">0 Escalas</span>
        <span class="text-xs-black">16:34m</span>
        <span class="text-xs-black">3 Pasajeros</span>
      </div>
    </div>
  
    <div class="d-flex flex-col justify-content-start align-items-center card">
      <span class="font-weight-bold p-2">Tus Asientos</span>
      <div class="line" style="width: 100%;"></div>
      <div class="d-flex flex-row justify-content-start align-items-center width-100 px-2 pb-2 font-weight-bold">
        Arequipa
        <img src="./assets/svg/arrow-rig.svg" width="20px" alt="arrow"> 
        Lima
      </div>
      <div class="d-flex flex-column justify-content-start align-items-center width-100 px-2 pb-2">
        <div class="d-flex flex-row justify-content-between align-items-center width-100 gap-10">
          <p>Pasajero 1 <span class="text-xs-black font-weight-bold">reclinación 160°</span></p>
          <p>S/ 110</p>
        </div>
        <div class="d-flex flex-row justify-content-between align-items-center width-100 gap-10">
          <p>Pasajero 2 <span class="text-xs-black font-weight-bold">reclinación 160°</span></p>
          <p>S/ 110</p>
        </div>
        <div class="d-flex flex-row justify-content-between align-items-center width-100 gap-10">
          <p>Pasajero 3 <span class="text-xs-black font-weight-bold">reclinación 160°</span></p>
          <p>S/ 110</p>
        </div>
      </div>
      <div class="line"></div>
      <div class="d-flex flex-row width-100 justify-content-between align-items-start gap-10 pl-2 pr-2 pb-2">
        <div class="d-flex flex-column justify-content-start align-items-start">
          <span class="font-weight-bold">Total</span>
          <span class="text-xs-gray">Tasas y impuestos incluidos</span>
        </div>
        <span class="font-weight-bold">S/ 330</span>
      </div>
    </div>
    
    <div class="d-flex flex-row justify-content-between align-items-center width-100 gap-10">
      <button class="btn btn_gris" type="button">
        <div class="d-flex flex-row align-items-center justify-content-center">
          <span class="color-white ml-1 font-weight-bold text-xs-black">Cancelar</span>
        </div>
      </button>
      <button class="btn btn_green" type="button">
        <div class="d-flex flex-row align-items-center justify-content-center">
          <span class="color-white ml-1 font-weight-bold">Reservar</span>
        </div>
      </button>
    </div>
  
  </div>
    </div>
    `;
  }

  if (window.innerWidth >= 992 && window.innerWidth < 1200) {
    const filtersAccordion = document.getElementById("filtersAccordion");
    filtersAccordion.classList.remove("filters");

    const colFilters = document.getElementById("colFilters");
    colFilters.classList.add("filters");

    while (filtersAccordion.firstChild) {
      colFilters.appendChild(filtersAccordion.firstChild);
    }

    tarjeta.innerHTML = `
    <div class="flex-row w-100 p-2 bg-white-rounded gap-10 justify-content-start align-items-center  collapse tarjetas_collapsed " id="collapse-${viaje.id}">
    <div class="asientos">
    <div class="d-flex flex-row w-100 justify-content-start align-items-center">
      <div class="icon__user mr-2">
        <img class="user__img" src="./assets/img/user-img.jpg" alt="user-img">
        <div class="online"></div>
      </div>
      <div class="user_stats">
        <div class="d-flex flex-column w-100 justify-content-start">
          <div class="d-flex flex-row justify-content-start align-items-center">
            <span class="mr-3 user_name">Name</span>
            <div class="p-1 user_likes">
              <span>94,50%</span>
            </div>
          </div>
          <div class="d-flex flex-row justify-content-start align-items-center ordenes">
            <span>Órdenes 2922</span>
            <div class="line_vertical"></div>
            <span>95,70% Promedio</span>
          </div>
        </div>
      </div>
    </div>
  
    <div class="d-flex flex-row w-100 justify-content-start align-items-center py-2 div_limites_all">
      <div class="div_limites">
        <span class="font-weight-bold">15 minutos</span>
        <span class="text-xs-gray">Tiempo limite del pago</span>
      </div>
      <div class="div_limites">
        <span class="font-weight-bold">15 minutos</span>
        <span class="text-xs-gray">Tiempo limite del pago</span>
      </div>
      <div class="div_limites">
        <span class="font-weight-bold">15 minutos</span>
        <span class="text-xs-gray">Tiempo limite del pago</span>
      </div>
    </div>
  
    <div class="d-flex flex-row w-100 justify-content-start align-items-center py-2 div_limites_all">
      <div class="div_forma_pago">
        <div style="background-color: rgb(0, 0, 121);" class="line_vertical_formas_pago"></div>
        <span class="text-xs-black">BBVA</span>
      </div>
      <div class="div_forma_pago">
        <div style="background-color: rgb(88, 0, 88);" class="line_vertical_formas_pago"></div>
        <span class="text-xs-black">Yape</span>
      </div>
      <div class="div_forma_pago">
        <div style="background-color: rgb(0, 0, 209);" class="line_vertical_formas_pago"></div>
        <span class="text-xs-black">Plin</span>
      </div>
      <div class="div_forma_pago">
        <div style="background-color: green;" class="line_vertical_formas_pago"></div>
        <span class="text-xs-black">Interbank</span>
      </div>
      <div class="div_forma_pago">
        <div style="background-color: rgb(0, 0, 53);" class="line_vertical_formas_pago"></div>
        <span class="text-xs-black">Credit Bank of Peru</span>
      </div>
    </div>
  
    <div class="d-flex flex-row justify-content-center align-items-start p-1 mt-3">
      <div class="d-flex flex-column justify-content-start align-items-start width-40">
        <p class="p-0 m-0">
          <button class="rounded-pill btn pl-1 text-xs-black d-flex flex-row align-items-center justify-content-start width-100 button-collap" type="button" data-toggle="collapse" data-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
            <div class="icon_naranja d-flex justify-content-center align-items-center">icon</div>
            <span class="font-weight-normal mr-4">Más adelante</span>
            <div class="d-flex flex-column justify-content-end align-items-end mr-2">
              <span class="font-weight-normal">Desde</span>
              <span class="text-xs-black font-weight-bold">USD 11</span>
            </div>
            <span class="arrow-down"></span>
          </button>
          <div class="collapse" id="collapseExample1">
            <div class="card-body d-flex flex-column justify-content-start align-items-start p-2">
              <span class="text-xs-black">Más espacio para tus piernas</span>
              <span class="text-xs-black">Embarca con prioridad</span>
              <span class="text-xs-black">Necesitaras cumplir con requisitos especiales</span>
            </div>
          </div>
        </p>
  
  
        <p class="p-0 m-0">
          <button class="rounded-pill  btn pl-1 text-xs-black d-flex flex-row align-items-center justify-content-start width-100 button-collap" type="button" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
            <div class="icon_naranja d-flex justify-content-center align-items-center">icon</div>
            <span class="font-weight-normal mr-4">Más adelante</span>
            <div class="d-flex flex-column justify-content-end align-items-end mr-2">
              <span class="font-weight-normal">Desde</span>
              <span class="text-xs-black font-weight-bold">USD 11</span>
            </div>
            <span class="arrow-down"></span>
          </button>
          <div class="collapse" id="collapseExample2">
            <div class="card-body d-flex flex-column justify-content-start align-items-start p-2">
              <span class="text-xs-black">Más espacio para tus piernas</span>
              <span class="text-xs-black">Embarca con prioridad</span>
              <span class="text-xs-black">Necesitaras cumplir con requisitos especiales</span>
            </div>
          </div>
        </p>
  
  
        <p class="p-0 m-0">
          <button class="rounded-pill  btn pl-1 text-xs-black d-flex flex-row align-items-center justify-content-start width-100 button-collap" type="button" data-toggle="collapse" data-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
            <div class="icon_naranja d-flex justify-content-center align-items-center">icon</div>
            <span class="font-weight-normal mr-4">Más adelante</span>
            <div class="d-flex flex-column justify-content-end align-items-end mr-2">
              <span class="font-weight-normal">Desde</span>
              <span class="text-xs-black font-weight-bold">USD 11</span>
            </div>
            <span class="arrow-down"></span>
          </button>
          <div class="collapse" id="collapseExample3">
            <div class="card-body d-flex flex-column justify-content-start align-items-start p-2">
              <span class="text-xs-black">Más espacio para tus piernas</span>
              <span class="text-xs-black">Embarca con prioridad</span>
              <span class="text-xs-black">Necesitaras cumplir con requisitos especiales</span>
            </div>
          </div>
        </p>
  
      </div>
      <div class="width-60">
          <div class="d-flex flex-column justify-content-start align-items-center p-3 bus">
            <div class="first_floor">
              <div class="text-align-center title_first_floor">Primer piso - 160°</div>
            </div>
            <div class="first_floor_mid">
              <div class="parent">
                  <div class="div1 grid-item">1 </div>
                  <div class="div2 grid-item">2 </div>
                  <div class="div3 grid-item">3 </div>
                  <div class="div4 grid-item">4 </div>
                  <div class="div5 grid-item selected">5 </div>
                  <div class="div6 grid-item">6 </div>
                  <div class="div7 grid-item used">X </div>
                  <div class="div8 grid-item used">X </div>
                  <div class="div9 grid-item selected">9</div>
                  <div class="div10 grid-item selected">10 </div>
                  <div class="div11 grid-item">11 </div>
                  <div class="div12 grid-item">12 </div>
              </div>
            </div>
            <div class="first_floor_final mb-2">
              <div class="title_first_floor_final"></div>
            </div>
            <div class="first_floor">
              <div class="text-align-center title_first_floor">Segundo Piso - 140°</div>
            </div>
            <div class="first_floor_mid">
              <div class="parent-second">
                <div class="div1-second grid-item">13 </div>
                <div class="div2-second grid-item">14 </div>
                <div class="div3-second grid-item">15 </div>
                <div class="div4-second grid-item">16 </div>
                <div class="div5-second grid-item">17 </div>
                <div class="div6-second grid-item">18 </div>
                <div class="div7-second grid-item">19 </div>
                <div class="div8-second grid-item">20 </div>
                <div class="div9-second grid-item">21 </div>
                <div class="div10-second grid-item">22 </div>
                <div class="div11-second grid-item escaleras"> esca</div>
                <div class="div12-second grid-item escaleras"> esca</div>
                <div class="div13-second grid-item"> 23</div>
                <div class="div14-second grid-item"> 24</div>
                <div class="div15-second grid-item escaleras"> esca</div>
                <div class="div16-second grid-item"> 25</div>
                <div class="div17-second grid-item"> 26</div>
                <div class="div18-second grid-item"> 27</div>
                <div class="div19-second grid-item"> 28</div>
                <div class="div20-second grid-item"> 29</div>
                <div class="div21-second grid-item"> 30</div>
                <div class="div22-second grid-item"> 31</div>
                <div class="div23-second grid-item"> 32</div>
                </div>
            </div>
            <div class="first_floor_final">
              <div class="title_first_floor_final"></div>
            </div>
          </div>
        </div>
      </div>
  </div>
  <div class="reserva gap-10">
    <div class="d-flex flex-col justify-content-start align-items-center card">
      <span class="font-weight-bold p-2">Su selección de viaje</span>
      <div class="line" style="width: 100%;"></div>
      <div class="d-flex flex-row justify-content-end align-items-center width-100 px-2 pb-2">
        <div class="saliente">
          <strong>Saliente</strong> - Miércoles, Sep. 6
        </div>
      </div>
      <div class="d-flex flex-row justify-content-start align-items-center width-100 px-2 pb-2">
        <div class="timeline">
          <div class="event">
              <div class="time font-weight-bold">09:00 AM</div>
              <div class="connector"></div>
              <div class="icon">Arequipa <br> <span class="text-xs-gray">Terminal</span></div>
          </div>
          <div class="middle-line"></div>
          <div class="event">
              <div class="time font-weight-bold">03:00 PM</div>
              <div class="connector"></div>
              <div class="icon">Lima <br> <span class="text-xs-gray">Altocongo</span></div>
          </div>
        </div>
      </div>
      <div class="d-flex flex-row width-100 justify-content-start align-items-start gap-10 pl-2 pr-2 pb-2">
        <span class="text-xs-black">0 Escalas</span>
        <span class="text-xs-black">16:34m</span>
        <span class="text-xs-black">3 Pasajeros</span>
      </div>
    </div>
  
    <div class="d-flex flex-col justify-content-start align-items-center card">
      <span class="font-weight-bold p-2">Tus Asientos</span>
      <div class="line" style="width: 100%;"></div>
      <div class="d-flex flex-row justify-content-start align-items-center width-100 px-2 pb-2 font-weight-bold">
        Arequipa
        <img src="./assets/svg/arrow-rig.svg" width="20px" alt="arrow"> 
        Lima
      </div>
      <div class="d-flex flex-column justify-content-start align-items-center width-100 px-2 pb-2">
        <div class="d-flex flex-row justify-content-between align-items-center width-100 gap-10">
          <p>Pasajero 1 <span class="text-xs-black font-weight-bold">reclinación 160°</span></p>
          <p>S/ 110</p>
        </div>
        <div class="d-flex flex-row justify-content-between align-items-center width-100 gap-10">
          <p>Pasajero 2 <span class="text-xs-black font-weight-bold">reclinación 160°</span></p>
          <p>S/ 110</p>
        </div>
        <div class="d-flex flex-row justify-content-between align-items-center width-100 gap-10">
          <p>Pasajero 3 <span class="text-xs-black font-weight-bold">reclinación 160°</span></p>
          <p>S/ 110</p>
        </div>
      </div>
      <div class="line"></div>
      <div class="d-flex flex-row width-100 justify-content-between align-items-start gap-10 pl-2 pr-2 pb-2">
        <div class="d-flex flex-column justify-content-start align-items-start">
          <span class="font-weight-bold">Total</span>
          <span class="text-xs-gray">Tasas y impuestos incluidos</span>
        </div>
        <span class="font-weight-bold">S/ 330</span>
      </div>
    </div>
    
    <div class="d-flex flex-row justify-content-between align-items-center width-100 gap-10">
      <button class="btn btn_gris" type="button">
        <div class="d-flex flex-row align-items-center justify-content-center">
          <span class="color-white ml-1 font-weight-bold text-xs-black">Cancelar</span>
        </div>
      </button>
      <button class="btn btn_green" type="button">
        <div class="d-flex flex-row align-items-center justify-content-center">
          <span class="color-white ml-1 font-weight-bold">Reservar</span>
        </div>
      </button>
    </div>
  
  </div>
    </div>
    `;
  }

  if (window.innerWidth >= 1200) {
    const filtersAccordion = document.getElementById("filtersAccordion");
    filtersAccordion.classList.remove("filters");

    const colFilters = document.getElementById("colFilters");
    colFilters.classList.add("filters");

    while (filtersAccordion.firstChild) {
      colFilters.appendChild(filtersAccordion.firstChild);
    }

    tarjeta.innerHTML = `
    <div class="flex-row w-100 p-2 bg-white-rounded gap-10 justify-content-start align-items-center  collapse tarjetas_collapsed " id="collapse-${viaje.id}">
    <div class="asientos">
    <div class="d-flex flex-row w-100 justify-content-start align-items-center">
      <div class="icon__user mr-2">
        <img class="user__img" src="./assets/img/user-img.jpg" alt="user-img">
        <div class="online"></div>
      </div>
      <div class="user_stats">
        <div class="d-flex flex-column w-100 justify-content-start">
          <div class="d-flex flex-row justify-content-start align-items-center">
            <span class="mr-3 user_name">Name</span>
            <div class="p-1 user_likes">
              <span>94,50%</span>
            </div>
          </div>
          <div class="d-flex flex-row justify-content-start align-items-center ordenes">
            <span>Órdenes 2922</span>
            <div class="line_vertical"></div>
            <span>95,70% Promedio</span>
          </div>
        </div>
      </div>
    </div>
  
    <div class="d-flex flex-row w-100 justify-content-start align-items-center py-2 div_limites_all">
      <div class="div_limites">
        <span class="font-weight-bold">15 minutos</span>
        <span class="text-xs-gray">Tiempo limite del pago</span>
      </div>
      <div class="div_limites">
        <span class="font-weight-bold">15 minutos</span>
        <span class="text-xs-gray">Tiempo limite del pago</span>
      </div>
      <div class="div_limites">
        <span class="font-weight-bold">15 minutos</span>
        <span class="text-xs-gray">Tiempo limite del pago</span>
      </div>
    </div>
  
    <div class="d-flex flex-row w-100 justify-content-start align-items-center py-2 div_limites_all">
      <div class="div_forma_pago">
        <div style="background-color: rgb(0, 0, 121);" class="line_vertical_formas_pago"></div>
        <span class="text-xs-black">BBVA</span>
      </div>
      <div class="div_forma_pago">
        <div style="background-color: rgb(88, 0, 88);" class="line_vertical_formas_pago"></div>
        <span class="text-xs-black">Yape</span>
      </div>
      <div class="div_forma_pago">
        <div style="background-color: rgb(0, 0, 209);" class="line_vertical_formas_pago"></div>
        <span class="text-xs-black">Plin</span>
      </div>
      <div class="div_forma_pago">
        <div style="background-color: green;" class="line_vertical_formas_pago"></div>
        <span class="text-xs-black">Interbank</span>
      </div>
      <div class="div_forma_pago">
        <div style="background-color: rgb(0, 0, 53);" class="line_vertical_formas_pago"></div>
        <span class="text-xs-black">Credit Bank of Peru</span>
      </div>
    </div>
  
    <div class="d-flex flex-row justify-content-center align-items-start p-1 mt-3">
      <div class="d-flex flex-column justify-content-start align-items-start width-40">
        <p class="p-0 m-0">
          <button class="rounded-pill btn pl-1 text-xs-black d-flex flex-row align-items-center justify-content-start width-100 button-collap" type="button" data-toggle="collapse" data-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
            <div class="icon_naranja d-flex justify-content-center align-items-center">icon</div>
            <span class="font-weight-normal mr-4">Más adelante</span>
            <div class="d-flex flex-column justify-content-end align-items-end mr-2">
              <span class="font-weight-normal">Desde</span>
              <span class="text-xs-black font-weight-bold">USD 11</span>
            </div>
            <span class="arrow-down"></span>
          </button>
          <div class="collapse" id="collapseExample1">
            <div class="card-body d-flex flex-column justify-content-start align-items-start p-2">
              <span class="text-xs-black">Más espacio para tus piernas</span>
              <span class="text-xs-black">Embarca con prioridad</span>
              <span class="text-xs-black">Necesitaras cumplir con requisitos especiales</span>
            </div>
          </div>
        </p>
  
  
        <p class="p-0 m-0">
          <button class="rounded-pill  btn pl-1 text-xs-black d-flex flex-row align-items-center justify-content-start width-100 button-collap" type="button" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
            <div class="icon_naranja d-flex justify-content-center align-items-center">icon</div>
            <span class="font-weight-normal mr-4">Más adelante</span>
            <div class="d-flex flex-column justify-content-end align-items-end mr-2">
              <span class="font-weight-normal">Desde</span>
              <span class="text-xs-black font-weight-bold">USD 11</span>
            </div>
            <span class="arrow-down"></span>
          </button>
          <div class="collapse" id="collapseExample2">
            <div class="card-body d-flex flex-column justify-content-start align-items-start p-2">
              <span class="text-xs-black">Más espacio para tus piernas</span>
              <span class="text-xs-black">Embarca con prioridad</span>
              <span class="text-xs-black">Necesitaras cumplir con requisitos especiales</span>
            </div>
          </div>
        </p>
  
  
        <p class="p-0 m-0">
          <button class="rounded-pill  btn pl-1 text-xs-black d-flex flex-row align-items-center justify-content-start width-100 button-collap" type="button" data-toggle="collapse" data-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
            <div class="icon_naranja d-flex justify-content-center align-items-center">icon</div>
            <span class="font-weight-normal mr-4">Más adelante</span>
            <div class="d-flex flex-column justify-content-end align-items-end mr-2">
              <span class="font-weight-normal">Desde</span>
              <span class="text-xs-black font-weight-bold">USD 11</span>
            </div>
            <span class="arrow-down"></span>
          </button>
          <div class="collapse" id="collapseExample3">
            <div class="card-body d-flex flex-column justify-content-start align-items-start p-2">
              <span class="text-xs-black">Más espacio para tus piernas</span>
              <span class="text-xs-black">Embarca con prioridad</span>
              <span class="text-xs-black">Necesitaras cumplir con requisitos especiales</span>
            </div>
          </div>
        </p>
  
      </div>
      <div class="width-60">
          <div class="d-flex flex-column justify-content-start align-items-center p-3 bus">
            <div class="first_floor">
              <div class="text-align-center title_first_floor">Primer piso - 160°</div>
            </div>
            <div class="first_floor_mid">
              <div class="parent">
                  <div class="div1 grid-item">1 </div>
                  <div class="div2 grid-item">2 </div>
                  <div class="div3 grid-item">3 </div>
                  <div class="div4 grid-item">4 </div>
                  <div class="div5 grid-item selected">5 </div>
                  <div class="div6 grid-item">6 </div>
                  <div class="div7 grid-item used">X </div>
                  <div class="div8 grid-item used">X </div>
                  <div class="div9 grid-item selected">9</div>
                  <div class="div10 grid-item selected">10 </div>
                  <div class="div11 grid-item">11 </div>
                  <div class="div12 grid-item">12 </div>
              </div>
            </div>
            <div class="first_floor_final mb-2">
              <div class="title_first_floor_final"></div>
            </div>
            <div class="first_floor">
              <div class="text-align-center title_first_floor">Segundo Piso - 140°</div>
            </div>
            <div class="first_floor_mid">
              <div class="parent-second">
                <div class="div1-second grid-item">13 </div>
                <div class="div2-second grid-item">14 </div>
                <div class="div3-second grid-item">15 </div>
                <div class="div4-second grid-item">16 </div>
                <div class="div5-second grid-item">17 </div>
                <div class="div6-second grid-item">18 </div>
                <div class="div7-second grid-item">19 </div>
                <div class="div8-second grid-item">20 </div>
                <div class="div9-second grid-item">21 </div>
                <div class="div10-second grid-item">22 </div>
                <div class="div11-second grid-item escaleras"> esca</div>
                <div class="div12-second grid-item escaleras"> esca</div>
                <div class="div13-second grid-item"> 23</div>
                <div class="div14-second grid-item"> 24</div>
                <div class="div15-second grid-item escaleras"> esca</div>
                <div class="div16-second grid-item"> 25</div>
                <div class="div17-second grid-item"> 26</div>
                <div class="div18-second grid-item"> 27</div>
                <div class="div19-second grid-item"> 28</div>
                <div class="div20-second grid-item"> 29</div>
                <div class="div21-second grid-item"> 30</div>
                <div class="div22-second grid-item"> 31</div>
                <div class="div23-second grid-item"> 32</div>
                </div>
            </div>
            <div class="first_floor_final">
              <div class="title_first_floor_final"></div>
            </div>
          </div>
        </div>
      </div>
  </div>
  <div class="reserva gap-10">
    <div class="d-flex flex-col justify-content-start align-items-center card">
      <span class="font-weight-bold p-2">Su selección de viaje</span>
      <div class="line" style="width: 100%;"></div>
      <div class="d-flex flex-row justify-content-end align-items-center width-100 px-2 pb-2">
        <div class="saliente">
          <strong>Saliente</strong> - Miércoles, Sep. 6
        </div>
      </div>
      <div class="d-flex flex-row justify-content-start align-items-center width-100 px-2 pb-2">
        <div class="timeline">
          <div class="event">
              <div class="time font-weight-bold">09:00 AM</div>
              <div class="connector"></div>
              <div class="icon">Arequipa <br> <span class="text-xs-gray">Terminal</span></div>
          </div>
          <div class="middle-line"></div>
          <div class="event">
              <div class="time font-weight-bold">03:00 PM</div>
              <div class="connector"></div>
              <div class="icon">Lima <br> <span class="text-xs-gray">Altocongo</span></div>
          </div>
        </div>
      </div>
      <div class="d-flex flex-row width-100 justify-content-start align-items-start gap-10 pl-2 pr-2 pb-2">
        <span class="text-xs-black">0 Escalas</span>
        <span class="text-xs-black">16:34m</span>
        <span class="text-xs-black">3 Pasajeros</span>
      </div>
    </div>
  
    <div class="d-flex flex-col justify-content-start align-items-center card">
      <span class="font-weight-bold p-2">Tus Asientos</span>
      <div class="line" style="width: 100%;"></div>
      <div class="d-flex flex-row justify-content-start align-items-center width-100 px-2 pb-2 font-weight-bold">
        Arequipa
        <img src="./assets/svg/arrow-rig.svg" width="20px" alt="arrow"> 
        Lima
      </div>
      <div class="d-flex flex-column justify-content-start align-items-center width-100 px-2 pb-2">
        <div class="d-flex flex-row justify-content-between align-items-center width-100 gap-10">
          <p>Pasajero 1 <span class="text-xs-black font-weight-bold">reclinación 160°</span></p>
          <p>S/ 110</p>
        </div>
        <div class="d-flex flex-row justify-content-between align-items-center width-100 gap-10">
          <p>Pasajero 2 <span class="text-xs-black font-weight-bold">reclinación 160°</span></p>
          <p>S/ 110</p>
        </div>
        <div class="d-flex flex-row justify-content-between align-items-center width-100 gap-10">
          <p>Pasajero 3 <span class="text-xs-black font-weight-bold">reclinación 160°</span></p>
          <p>S/ 110</p>
        </div>
      </div>
      <div class="line"></div>
      <div class="d-flex flex-row width-100 justify-content-between align-items-start gap-10 pl-2 pr-2 pb-2">
        <div class="d-flex flex-column justify-content-start align-items-start">
          <span class="font-weight-bold">Total</span>
          <span class="text-xs-gray">Tasas y impuestos incluidos</span>
        </div>
        <span class="font-weight-bold">S/ 330</span>
      </div>
    </div>
    
    <div class="d-flex flex-row justify-content-between align-items-center width-100 gap-10">
      <button class="btn btn_gris" type="button">
        <div class="d-flex flex-row align-items-center justify-content-center">
          <span class="color-white ml-1 font-weight-bold text-xs-black">Cancelar</span>
        </div>
      </button>
      <button class="btn btn_green" type="button">
        <div class="d-flex flex-row align-items-center justify-content-center">
          <span class="color-white ml-1 font-weight-bold">Reservar</span>
        </div>
      </button>
    </div>
  
  </div>
    </div>
    `;
  }
  if (window.innerWidth >= 1700) {
    tarjeta.innerHTML = `
    <div class="flex-row w-100 p-2 bg-white-rounded gap-10 justify-content-start align-items-center  collapse tarjetas_collapsed " id="collapse-${viaje.id}">
    <div class="asientos">
    <div class="d-flex flex-row w-100 justify-content-start align-items-center">
      <div class="icon__user mr-2">
        <img class="user__img" src="./assets/img/user-img.jpg" alt="user-img">
        <div class="online"></div>
      </div>
      <div class="user_stats">
        <div class="d-flex flex-column w-100 justify-content-start">
          <div class="d-flex flex-row justify-content-start align-items-center">
            <span class="mr-3 user_name">Name</span>
            <div class="p-1 user_likes">
              <span>94,50%</span>
            </div>
          </div>
          <div class="d-flex flex-row justify-content-start align-items-center ordenes">
            <span>Órdenes 2922</span>
            <div class="line_vertical"></div>
            <span>95,70% Promedio</span>
          </div>
        </div>
      </div>
    </div>
  
    <div class="d-flex flex-row w-100 justify-content-start align-items-center py-2 div_limites_all">
      <div class="div_limites">
        <span class="font-weight-bold">15 minutos</span>
        <span class="text-xs-gray">Tiempo limite del pago</span>
      </div>
      <div class="div_limites">
        <span class="font-weight-bold">15 minutos</span>
        <span class="text-xs-gray">Tiempo limite del pago</span>
      </div>
      <div class="div_limites">
        <span class="font-weight-bold">15 minutos</span>
        <span class="text-xs-gray">Tiempo limite del pago</span>
      </div>
    </div>
  
    <div class="d-flex flex-row w-100 justify-content-start align-items-center py-2 div_limites_all">
      <div class="div_forma_pago">
        <div style="background-color: rgb(0, 0, 121);" class="line_vertical_formas_pago"></div>
        <span class="text-xs-black">BBVA</span>
      </div>
      <div class="div_forma_pago">
        <div style="background-color: rgb(88, 0, 88);" class="line_vertical_formas_pago"></div>
        <span class="text-xs-black">Yape</span>
      </div>
      <div class="div_forma_pago">
        <div style="background-color: rgb(0, 0, 209);" class="line_vertical_formas_pago"></div>
        <span class="text-xs-black">Plin</span>
      </div>
      <div class="div_forma_pago">
        <div style="background-color: green;" class="line_vertical_formas_pago"></div>
        <span class="text-xs-black">Interbank</span>
      </div>
      <div class="div_forma_pago">
        <div style="background-color: rgb(0, 0, 53);" class="line_vertical_formas_pago"></div>
        <span class="text-xs-black">Credit Bank of Peru</span>
      </div>
    </div>
  
    <div class="d-flex flex-row justify-content-center align-items-start p-1 mt-3">
      <div class="d-flex flex-column justify-content-start align-items-start width-40">
        <p class="p-0 m-0">
          <button class="rounded-pill btn pl-1 text-xs-black d-flex flex-row align-items-center justify-content-start width-100 button-collap" type="button" data-toggle="collapse" data-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
            <div class="icon_naranja d-flex justify-content-center align-items-center">icon</div>
            <span class="font-weight-normal mr-4">Más adelante</span>
            <div class="d-flex flex-column justify-content-end align-items-end mr-2">
              <span class="font-weight-normal">Desde</span>
              <span class="text-xs-black font-weight-bold">USD 11</span>
            </div>
            <span class="arrow-down"></span>
          </button>
          <div class="collapse" id="collapseExample1">
            <div class="card-body d-flex flex-column justify-content-start align-items-start p-2">
              <span class="text-xs-black">Más espacio para tus piernas</span>
              <span class="text-xs-black">Embarca con prioridad</span>
              <span class="text-xs-black">Necesitaras cumplir con requisitos especiales</span>
            </div>
          </div>
        </p>
  
  
        <p class="p-0 m-0">
          <button class="rounded-pill  btn pl-1 text-xs-black d-flex flex-row align-items-center justify-content-start width-100 button-collap" type="button" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
            <div class="icon_naranja d-flex justify-content-center align-items-center">icon</div>
            <span class="font-weight-normal mr-4">Más adelante</span>
            <div class="d-flex flex-column justify-content-end align-items-end mr-2">
              <span class="font-weight-normal">Desde</span>
              <span class="text-xs-black font-weight-bold">USD 11</span>
            </div>
            <span class="arrow-down"></span>
          </button>
          <div class="collapse" id="collapseExample2">
            <div class="card-body d-flex flex-column justify-content-start align-items-start p-2">
              <span class="text-xs-black">Más espacio para tus piernas</span>
              <span class="text-xs-black">Embarca con prioridad</span>
              <span class="text-xs-black">Necesitaras cumplir con requisitos especiales</span>
            </div>
          </div>
        </p>
  
  
        <p class="p-0 m-0">
          <button class="rounded-pill  btn pl-1 text-xs-black d-flex flex-row align-items-center justify-content-start width-100 button-collap" type="button" data-toggle="collapse" data-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
            <div class="icon_naranja d-flex justify-content-center align-items-center">icon</div>
            <span class="font-weight-normal mr-4">Más adelante</span>
            <div class="d-flex flex-column justify-content-end align-items-end mr-2">
              <span class="font-weight-normal">Desde</span>
              <span class="text-xs-black font-weight-bold">USD 11</span>
            </div>
            <span class="arrow-down"></span>
          </button>
          <div class="collapse" id="collapseExample3">
            <div class="card-body d-flex flex-column justify-content-start align-items-start p-2">
              <span class="text-xs-black">Más espacio para tus piernas</span>
              <span class="text-xs-black">Embarca con prioridad</span>
              <span class="text-xs-black">Necesitaras cumplir con requisitos especiales</span>
            </div>
          </div>
        </p>
  
      </div>
      <div class="width-60">
          <div class="d-flex flex-column justify-content-start align-items-center p-3 bus">
            <div class="first_floor">
              <div class="text-align-center title_first_floor">Primer piso - 160°</div>
            </div>
            <div class="first_floor_mid">
              <div class="parent">
                  <div class="div1 grid-item">1 </div>
                  <div class="div2 grid-item">2 </div>
                  <div class="div3 grid-item">3 </div>
                  <div class="div4 grid-item">4 </div>
                  <div class="div5 grid-item selected">5 </div>
                  <div class="div6 grid-item">6 </div>
                  <div class="div7 grid-item used">X </div>
                  <div class="div8 grid-item used">X </div>
                  <div class="div9 grid-item selected">9</div>
                  <div class="div10 grid-item selected">10 </div>
                  <div class="div11 grid-item">11 </div>
                  <div class="div12 grid-item">12 </div>
              </div>
            </div>
            <div class="first_floor_final mb-2">
              <div class="title_first_floor_final"></div>
            </div>
            <div class="first_floor">
              <div class="text-align-center title_first_floor">Segundo Piso - 140°</div>
            </div>
            <div class="first_floor_mid">
              <div class="parent-second">
                <div class="div1-second grid-item">13 </div>
                <div class="div2-second grid-item">14 </div>
                <div class="div3-second grid-item">15 </div>
                <div class="div4-second grid-item">16 </div>
                <div class="div5-second grid-item">17 </div>
                <div class="div6-second grid-item">18 </div>
                <div class="div7-second grid-item">19 </div>
                <div class="div8-second grid-item">20 </div>
                <div class="div9-second grid-item">21 </div>
                <div class="div10-second grid-item">22 </div>
                <div class="div11-second grid-item escaleras"> esca</div>
                <div class="div12-second grid-item escaleras"> esca</div>
                <div class="div13-second grid-item"> 23</div>
                <div class="div14-second grid-item"> 24</div>
                <div class="div15-second grid-item escaleras"> esca</div>
                <div class="div16-second grid-item"> 25</div>
                <div class="div17-second grid-item"> 26</div>
                <div class="div18-second grid-item"> 27</div>
                <div class="div19-second grid-item"> 28</div>
                <div class="div20-second grid-item"> 29</div>
                <div class="div21-second grid-item"> 30</div>
                <div class="div22-second grid-item"> 31</div>
                <div class="div23-second grid-item"> 32</div>
                </div>
            </div>
            <div class="first_floor_final">
              <div class="title_first_floor_final"></div>
            </div>
          </div>
        </div>
      </div>
  </div>
  <div class="reserva gap-10">
    <div class="d-flex flex-col justify-content-start align-items-center card">
      <span class="font-weight-bold p-2">Su selección de viaje</span>
      <div class="line" style="width: 100%;"></div>
      <div class="d-flex flex-row justify-content-end align-items-center width-100 px-2 pb-2">
        <div class="saliente">
          <strong>Saliente</strong> - Miércoles, Sep. 6
        </div>
      </div>
      <div class="d-flex flex-row justify-content-start align-items-center width-100 px-2 pb-2">
        <div class="timeline">
          <div class="event">
              <div class="time font-weight-bold">09:00 AM</div>
              <div class="connector"></div>
              <div class="icon">Arequipa <br> <span class="text-xs-gray">Terminal</span></div>
          </div>
          <div class="middle-line"></div>
          <div class="event">
              <div class="time font-weight-bold">03:00 PM</div>
              <div class="connector"></div>
              <div class="icon">Lima <br> <span class="text-xs-gray">Altocongo</span></div>
          </div>
        </div>
      </div>
      <div class="d-flex flex-row width-100 justify-content-start align-items-start gap-10 pl-2 pr-2 pb-2">
        <span class="text-xs-black">0 Escalas</span>
        <span class="text-xs-black">16:34m</span>
        <span class="text-xs-black">3 Pasajeros</span>
      </div>
    </div>
  
    <div class="d-flex flex-col justify-content-start align-items-center card">
      <span class="font-weight-bold p-2">Tus Asientos</span>
      <div class="line" style="width: 100%;"></div>
      <div class="d-flex flex-row justify-content-start align-items-center width-100 px-2 pb-2 font-weight-bold">
        Arequipa
        <img src="./assets/svg/arrow-rig.svg" width="20px" alt="arrow"> 
        Lima
      </div>
      <div class="d-flex flex-column justify-content-start align-items-center width-100 px-2 pb-2">
        <div class="d-flex flex-row justify-content-between align-items-center width-100 gap-10">
          <p>Pasajero 1 <span class="text-xs-black font-weight-bold">reclinación 160°</span></p>
          <p>S/ 110</p>
        </div>
        <div class="d-flex flex-row justify-content-between align-items-center width-100 gap-10">
          <p>Pasajero 2 <span class="text-xs-black font-weight-bold">reclinación 160°</span></p>
          <p>S/ 110</p>
        </div>
        <div class="d-flex flex-row justify-content-between align-items-center width-100 gap-10">
          <p>Pasajero 3 <span class="text-xs-black font-weight-bold">reclinación 160°</span></p>
          <p>S/ 110</p>
        </div>
      </div>
      <div class="line"></div>
      <div class="d-flex flex-row width-100 justify-content-between align-items-start gap-10 pl-2 pr-2 pb-2">
        <div class="d-flex flex-column justify-content-start align-items-start">
          <span class="font-weight-bold">Total</span>
          <span class="text-xs-gray">Tasas y impuestos incluidos</span>
        </div>
        <span class="font-weight-bold">S/ 330</span>
      </div>
    </div>
    
    <div class="d-flex flex-row justify-content-between align-items-center width-100 gap-10">
      <button class="btn btn_gris" type="button">
        <div class="d-flex flex-row align-items-center justify-content-center">
          <span class="color-white ml-1 font-weight-bold text-xs-black">Cancelar</span>
        </div>
      </button>
      <button class="btn btn_green" type="button">
        <div class="d-flex flex-row align-items-center justify-content-center">
          <span class="color-white ml-1 font-weight-bold">Reservar</span>
        </div>
      </button>
    </div>
  
  </div>
    </div>
    `;
  }

  cardsContainer.appendChild(card);

  return tarjeta;
}

let collapseCounter = 1; // Inicializa un contador para IDs únicos de colapsos

datosViaje.forEach((viaje) => {
  const tarjeta = crearTarjeta(viaje);
  cardsContainer.appendChild(tarjeta);
});

//LOGICA PARA ORDENAR (HORARIO - PRECIO - EMPRESA)
const ordenarBotones = document.querySelectorAll(".ordenar-btn");

// Agrega controladores de eventos a los botones de ordenamiento
ordenarBotones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const criterio = boton.getAttribute("data-ordenar");
    ordenarTarjetas(criterio);
  });
});

function ordenarTarjetas(criterio) {
  // Clona y ordena el arreglo de datosViaje según el criterio
  const datosOrdenados = [...datosViaje];
  switch (criterio) {
    case "horarios":
      datosOrdenados.sort((a, b) => {
        return compararHorarios(a.horaSalida, b.horaSalida);
      });
      break;
    case "empresa":
      datosOrdenados.sort((a, b) => {
        return a.empresa.localeCompare(b.empresa);
      });
      break;
    case "precios":
      datosOrdenados.sort((a, b) => {
        return a.precio - b.precio;
      });
      break;
    default:
      break;
  }

  // Limpia el contenedor de tarjetas
  const tarjetasContainer = document.querySelector(".cards");
  tarjetasContainer.innerHTML = "";

  // Crea y muestra las tarjetas ordenadas
  datosOrdenados.forEach((viaje) => {
    const tarjeta = crearTarjeta(viaje); // Crea una tarjeta con tus datos
    tarjetasContainer.appendChild(tarjeta);
  });
}

// Función para comparar horarios en formato "HH:MM"
function compararHorarios(horaA, horaB) {
  const [hora1, minuto1] = horaA.split(":").map(Number);
  const [hora2, minuto2] = horaB.split(":").map(Number);

  if (hora1 !== hora2) {
    return hora1 - hora2;
  }

  return minuto1 - minuto2;
}
