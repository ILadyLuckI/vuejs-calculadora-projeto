<template>
    <div id="app">
        <h1>
            CALCULADORA <br>
            (com Vue.Js)
        </h1>
        <Calculator />
    </div>
</template>

<script>
import Calculator from "./main/Calculator.vue"

export default {
    components: { Calculator }
}
</script>

<style>
@font-face {
    font-family: "RobotoMono";
    src: url("./fonts/RobotoMono-VariableFont_wght.ttf"), url("./fonts/RobotoMono-Italic-VariableFont_wght.ttf")
}

* {
    font-family: "RobotoMono", monospace;
}

body {
    margin: 0;
}

#app {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
    background: rgb(27,0,36);
background: linear-gradient(115deg, rgba(27,0,36,1) 0%, rgba(121,9,88,1) 3%, rgba(0,212,255,1) 100%);}
</style>