<template>
<div class="Categorias">

 <Menu />
 <div class="container">
    <div class="row">
  
        <div class="m-30">
            <h1>ORO</h1>
            <h2>{{totalGold}}</h2>
            <dl v-for="row in rowsOro" :key="row">
              <dt class="icon" v-on:click="row.open = !row.open">{{ row.term }}</dt>
              <dd class="m-5" v-if="row.open">{{ row.details }}</dd>
            </dl>
        </div>
        <div class="m-30">
            <h1>PLATA</h1>
            <h2>{{totalSilver}}</h2>
            <dl v-for="row in rowsPlata" :key="row">
              <dt class="icon"  v-on:click="row.open = !row.open">{{ row.term }}</dt>
              <dd class="m-5" v-if="row.open">{{ row.details }}</dd>
            </dl>
        </div>
        <div class="m-30">
            <h1>BRONCE</h1>
            <h2>{{totalBronze}}</h2>
            <dl v-for="row in rowsBronce" :key="row">
              <dt class="icon"  v-on:click="row.open = !row.open">{{ row.term }}</dt>
              <dd class="m-5" v-if="row.open">{{ row.details }}</dd>
            </dl>
        </div>
      
    </div>
 </div>
 </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
  export default {
  name: 'Categorias',
  data() {
    return {
      arregloDatos: [],
      sum : 0,
        rowsOro: {
          q1: {
          term: '+',
            details: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
            open: false
          },
        },
        rowsPlata: {
          q1: {
            term: '+',
            details: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
            open: false
          },
        },
        rowsBronce: {
          q1: {
            term: '+',
            details: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
            open: false
          },
        }
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
    }

    
  },

  computed : {
     totalGold() {
  
      return this.arregloDatos.reduce((sum, item) => sum + item.gold, 0);
    },
    totalSilver() {
  
      return this.arregloDatos.reduce((sum, item) => sum + item.silver, 0);
    },

    totalBronze() {
  
      return this.arregloDatos.reduce((sum, item) => sum + item.bronze, 0);
    }

  },
   components: {
    Menu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row{
  display:flex;
  width: 90%;
  justify-content: center;
}
.container{
justify-content: center;
display: flex;
}
.m-30{
  width: 30%;
}
.icon{
    font-size: 50px;
    font-weight: 700;
}
.m-5{ 
    margin: 5%;
}
@media screen and (max-width: 800px) {
  .m-30{
    width: 100%;
  }
  .row{
    display:block;
    width: 90%;
    justify-content: center;
  }
  .m-5{ 
      margin: 5%;
  }
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
