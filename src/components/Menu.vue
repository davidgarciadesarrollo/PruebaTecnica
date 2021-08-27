<template>
<nav>
    <ul>
        <li>
        <router-link to="/userAdmin">Datos</router-link> 
        </li>
        <li>
        <router-link to="/categorias">Categorias</router-link> 
        </li>    
    </ul>
    <ul>
        <li><a href="#">Administrador</a></li>
        <li>
        <router-link to="/login">Salir</router-link>
        </li>    
    </ul>
</nav>
</template>

<script>
export default {
   name: 'Menu',
  data() {
    return {
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
