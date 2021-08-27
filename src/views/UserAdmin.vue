<template>
<div clases="">
 <Menu />
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>País</th>
            <th>Año</th>
            <th>Fecha</th>
            <th>Deporte</th>
            <th>Oro</th>
            <th>Plata</th>
            <th>Bronce</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="dato in displayDatos" :key="dato">
            <td>{{dato.athlete}}</td>
            <td> {{dato.age}} </td>
            <td> {{dato.country}} </td>
            <td> {{dato.year}} </td>
            <td> {{dato.date}} </td>
            <td> {{dato.sport}} </td>
            <td> {{dato.gold}} </td>
            <td> {{dato.silver}} </td>
            <td> {{dato.bronze}} </td>
            <td> {{dato.total}} </td>
          </tr>
        </tbody>
      </table>
    <div class="paginador">
        <div class="pagination">
            <button 
            type="button"
            v-if="page != 1" 
            @click="page--">
            &laquo;</button>
            <button  type="button" 
            class="active" 
            v-for="pageNumber in pages.slice(page-1, page+7)" 
            :key="pageNumber" 
            @click="page = pageNumber">
            {{pageNumber}}</button>
            <button 
            type="button"
            @click="page++" 
            v-if="page < pages.length-1"
            >&raquo;</button>
        </div>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
export default {
  name: 'UserAdmin',
  props: {
    msg: String
  },
  data() {
    return {
      arregloDatos: [],
      page: 1,
      perPage: 14,
      pages:[]
    };
  },
  mounted() {
    this.getDatos();
  },
  methods: {
    async getDatos() {
      const datos = await fetch("https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json").then((r) =>
        r.json()
      );
      this.arregloDatos = datos;
      console.log(this.arregloDatos);
    },

    setDatos(){
      //this.pages = [];
      let numberOfpage = Math.ceil(this.arregloDatos.length / this.perPage);
          for (let i = 1; i <= numberOfpage; i++){
              this.pages.push(i);
          }
    },
    paginate(arregloDatos){
        let page = this.page;
        let perPage = this.perPage;
        let from = (page * perPage) - perPage;
        let to = (page * perPage);
        return arregloDatos.slice(from, to);
    }
  },
  watch: {
    arregloDatos(){
      this.setDatos();
    }
  },
  computed:{
    displayDatos: function (){
        return this.paginate(this.arregloDatos);
    }
  },
  components: {
    Menu
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Estilos de etiqueta*/
body {
  background-color: #CCBBEE;
}

table {
  background: white;
  width: 80%;
  margin: 0 auto;
  margin-top: 2%;
  border-collapse: collapse;
  text-align: center;
}

th {
  background-color: rgba(5,5,100,95);
  height: 35px;
  border-bottom: 1px solid rgb(210,220,250);
  color: rgb(120,120,120);
}

td {
  color: rgba(100,100,100,60);
  height: 30px;
  border: 0.5px solid rgba(240,240,240,10);
}

tfoot {
  font-weight: bold;
}

/*Pseudo-clases*/
th:hover {
  background-color: rgba(20,20,20,90);
}

tr:hover {
  background-color: rgba(15,25,25,90);
}

/* Estililos de clases*/
.PrecioTotal:hover,
.CantidadTotal:hover {
  color: rgb(230,50,50);
}

.Cabecera {
  background-color: rgba(5,5,100,0.99);
  border-radius: 4px;
  height: 30px;
  padding: 2em;
  margin: 0 25%;
  text-align: center;
  color: white;
}

a{
  text-decoration: none;
  color: white;
  font-size: 14pt;
}

footer {
  margin-top: 40px;
  text-align: center;
}
.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color .3s;
}

.pagination a.active {
  background-color: dodgerblue;
  color: white;
}
.paginador{
display:flex;
justify-content:center;
padding:5%;

}
.pagination a:hover:not(.active) {background-color: #ddd;}
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
