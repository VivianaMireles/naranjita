<template>
    <div id="imgJumbotron">
      <div class="btnDer">
        <button type="button" id="myModal" class="btn btn-primary btnBorde"
         @click="show=true">
          Iniciar Sesión
        </button>

      </div>
      <div class="jumbotronImg">
        <img class="logoN" src="../img/logo-ruta-naranja.png" alt="">
        <h2 class="txtCenter">......................</h2>
        <div class="txtCenter">
          <a class="btn fondoNaranja" href="#" >Registrarse</a>
        </div>
      </div>

      <template>
        <b-modal v-model="show" id="modalSesion">
           <b-container fluid>
             <div class="formInisio">
               <form @submit="checkForm" v-on:submit.prevent="submit" method="get">
                  Correo electronico<br>
                  <input id="ema" type="text" name="email" v-model:value="email">
                  <br>
                  <br>
                  Contraseña<br>
                  <input id="passwor" type="password" name="password" v-model:value="password">
                  <br><br>

                <div v-if="errors.length" class="errores">
                  <b>Errores:</b>
                  <ul>
                    <li v-for="error in errors">{{ error }}</li>
                  </ul>
                </div>

                <button class="fondoNaranja" type="submit" name="button">
                  Ingresar
                </button>

              </form>
              <div class="redesSociales">
                <div class="crearCuenta">
                  <div>
                    <img class="linea" src="../img/linea.png" alt="">
                  </div>
                  <p> Crear cuenta </p>
                  <div>
                    <img class="linea" src="../img/linea.png" alt="">
                  </div>
                </div>
                <div class="facebook">
                  <a type="submit" class="btn blue btnCuenta">
                    <i class="fab fa-facebook fa-2x"></i>
                    <p>Registrarse con Facebook</p>
                  </a>
                </div>
                <div class="btnGoogle">
                  <a type="submit" class="btn white btnCuenta" >
                    <img class="google" src="../img/google24.png">
                    <p>Registrate con Google</p>
                  </a>
                </div>
              </div>
             </div>
          </b-container>
          <div slot="modal-footer" class="w-100"></div>
        </b-modal>
      </template>

    </div>
</template>

<script>

import axios from "axios";

export default {
  name: "",
  data () {
    return {
      show: false,
      email: "",
      password: "",
      errors:[]
    }
  },
  methods: {
    submit() {

      let email = this.email;
      let pass =  this.password;

      /*Guardando los datos en el LocalStorage*/
        localStorage.setItem("email", email);
        localStorage.setItem("passwor", pass);
        /*Limpiando los campos o inputs*/
        document.getElementById("ema").value = "";
        document.getElementById("passwor").value = "";

        let e = localStorage.getItem("email");
        let p = localStorage.getItem("passwor");

        console.log("email: "+ e);
        console.log("password: "+ p);
      }
  }
}
</script>
