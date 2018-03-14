<template>
  <div id="infoInicio">
    <div class="fila">
      <div class="four wide colum">
        <h1 class="negritas">................</h1>
        <p>.............
        </p>
      </div>

      <div class="four wide colum">
        <h1 class="negritas">...........</h1>
          <p>................
          </p>
      </div>

      <div class="four wide colum">
        <h1 class="negritas">......</h1>
          <p>................
          </p>
      </div>
    </div>

    <div id="librosMasVistos">
      <h1 class="textCenter">........</h1>
      <div class="contenedor">
        <div class="fila">
          <div class="tree wide colum" v-for="(libroMasLeido, index) in librosMasLeidos" v-if="index <= 3">
            <img class="tapaLibro" v-bind:src="libroMasLeido.img">
          </div>
        </div>
      </div>
    </div>

    <div id="precio" class="portadaBaja background">
      <div class="fila">
        <p class="txtBlanco">
          ........
          </br>
          <span class="negritas">............</span>
          </br>
          <span class="negritas">........</span>
        </p>
        <a class="fondoNaranja">Comenzar </a>
      </div>

    </div>

  </div>
</template>

<script type="text/javascript">
/*vue*/

export default{
data: () => ({
    librosMasLeidos: [
      {
        img: "./src/img/P_Fe_Mundo.png"
      },{
        img:"./src/img/P_Estados_Financieros.png"
      },{
        img:"./src/img/P_Admin_RH.png"
      },{
        img:"./src/img/P_Contabilidad_General.png"
      },{
        img:"./src/img/P_Fundamentos_Economia.png"
      },{
        img:"./src/img/P_Introduccion_Derecho.png"
      },{
        img:"./src/img/P_Manual_ortografi¦üa.png"
      },{
        img:"./src/img/yo_soy_tu_padre.jpg"
      },{
        img:"./src/img/P_Admin_RH.png"
      },{
        img:"./src/img/P_Admin_RH.png"
      },{
        img:"./src/img/P_Admin_RH.png"
      },{
        img:"./src/img/P_Admin_RH.png"
      }
    ]
}),
methods: {

}
}
</script>
