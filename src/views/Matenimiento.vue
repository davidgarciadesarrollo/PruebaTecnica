<template>
<div>
 <MenuCordinador />
    <div class="error-image">
        <h1>👨‍🔧</h1>
    </div>
    <div class="error-msg-container">
        <h1>¡Volveremos pronto!</h1>
        <p>Disculpe las molestias, pero estamos realizando algunas tareas de mantenimiento en este momento. Si lo necesita, siempre puede contactarnos, de lo contrario, en breve estaremos en línea.</p>
        <p><b>El equipo de desarrollo</b></p>
    </div>
  </div>
</template>

<script>
import MenuCordinador from '@/components/MenuCordinador.vue'
export default {
  name: 'matenimiento',
  data() {
    return {
    };
  },
   components: {
    MenuCordinador
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  background: rgb(103, 66, 230);
  background: linear-gradient(
    135deg,
    rgba(103, 66, 230, 1) 35%,
    rgba(114, 68, 237, 1) 100%
  );
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
}

.error-image {
  max-width: 720px;
  width: 90%;
  margin: auto;
  text-align: center;
}

.error-image h1 {
  font-size: 120px;
  margin: 48px auto 20px;
}

.error-msg-container {
  margin: 18px auto 30px auto;
  max-width: 800px;
  width: 80%;
  text-align: center;
}

.error-msg-container h1 {
  font-size: 56px;
  max-width: 560px;
  margin: auto auto 48px;
}
:root {
  --shadow: #ddd;
  --body-bg: #fff;
}
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  background: var(--body-bg);
}
nav {
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  box-shadow: 0 2px 4px 0px var(--shadow);
  background:blue;
  color:white;
  
}
ul {
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style: none;
}
li {
  padding: 1rem;
}
a {
  text-decoration: none;
  color: white;
  font-weight: bold;
}
a:hover, a:focus {
  outline: none;
  text-decoration: underline;
}
li.active{
  position: relative;
}
li.active::before,
li.active::after {
  content: '';
  display: block;
  position: absolute;
  bottom: 0;
  right: 50%;
  width: 1rem;
  height: 1rem;
  clip-path: polygon(0 0, 100% 0, 0% 100%);
}
li.active::after {
  background: var(--body-bg);
  transform: rotate(45deg) translateX(50%) translateY(.25rem);
  border: 0;
  box-shadow: inset 0 0 3px 3px var(--shadow);  
  z-index: 1;
}
li.active::before {
  background: var(--body-bg);
  transform: rotate(45deg) translateX(calc(50% + 4px)) translateY( 8px);
  border: 0;
  z-index: 2;
}
</style>
