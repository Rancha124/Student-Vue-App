<template>
    
     <div>    
             <md-table v-model="students">
              <md-table-toolbar>
            <h1 class="md-title">Hello there</h1>
            </md-table-toolbar>

      <md-table-row>
        
        <md-table-head>Variable</md-table-head>
        <md-table-head>Value</md-table-head>
        
      </md-table-row>
 
      <md-table-row v-for="(data,propertyName) in students" v-bind:key="data">
        
        <md-table-cell> {{propertyName}}  </md-table-cell>
        <md-table-cell>{{data}}</md-table-cell>
         </md-table-row>    
      </md-table>
</div>
      
</template>
<script>
import axios from 'axios'
export default {
name: "FullDetails" ,

data(){
        return {
           students : []
        }  
},
created(){
      const id = this.$route.params.id;
    console.log("I am getting student particulars");
  axios.get(`http://localhost:3000/students/${id}`)
  .then(res => {
    console.log(res.data) 
    this.students = res.data
    } )
}
}
</script>
<style scoped>

</style>