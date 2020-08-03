<template >
    <div  >
        <h1>Hello there I am ShowData</h1>
        <div>
    <md-table v-model="students">
         <md-table-toolbar>
        <h1 class="md-title"></h1>
        </md-table-toolbar>

      <md-table-row>
        <md-table-head md-numeric>ID</md-table-head>
        <md-table-head>First Name</md-table-head>
        <md-table-head>Last Name</md-table-head>
        <md-table-head>City Name</md-table-head>
        <md-table-head>State Name</md-table-head>
        <md-table-head>Gpa</md-table-head>
        <md-table-head>Full details</md-table-head>
        <md-table-head>Edit Data</md-table-head>
        <md-table-head>Delete Data</md-table-head>
      </md-table-row>

      <md-table-row  v-for="(student,index) in students" v-bind:key="student.id" >
        <md-table-cell md-numeric>{{index+1}}</md-table-cell>
        <md-table-cell>{{student.firstName}}</md-table-cell>
        <md-table-cell>{{student.lastName}}</md-table-cell>
        <md-table-cell>{{student.cityName}}</md-table-cell>
        <md-table-cell>{{student.stateName}}</md-table-cell>
        <md-table-cell>{{student.gpa}}</md-table-cell>
        <md-table-cell> <button @click="fullDetails(index)">Full Details</button> </md-table-cell>
        <md-table-cell> <div @click="editData(index)"><i class="fa fa-edit" style="color: green; fontSize: 2em;
                            paddingTop: 5px;  cursor: pointer" ></i> </div></md-table-cell>
        <md-table-cell><div @click="deleteData(index)"><i class="fa fa-trash" style="color: red; fontSize: 2em;
                            paddingTop: 5px;  cursor: pointer" ></i></div></md-table-cell>
      </md-table-row>

    

      
      
    </md-table>
  </div>
    </div>
    
</template>
<script>
import axios from 'axios'

export default {
    name: "ShowData",
    computed: {
    students(){
      console.log("on the way to students")
      const array = this.$store.getters.getStudentsData
      console.log(array)
      return this.$store.getters.getStudentsData;
    },
    },
    methods: {
      dummyD(){
        console.log("I am in dummy")
        this.$store.commit('changeData')
      },
      
       
        editData: function (index){
            const id = this.students[index].id;
            console.log("in edit data");
             axios
      .get(`http://localhost:3000/students/${id}`)
      .then((res) => this.students = res.data );
      this.$router.push(`/edit-data/${id}`).catch(()=>{});

        },
         fullDetails(index){
            const id = this.students[index].id;
            console.log("Clicked Full details id is",id);
    axios
      .get(`http://localhost:3000/students/${id}`)
      .then(this.$router.push(`/full-details/${id}`).catch(()=>{}));
           
        },
        deleteData: function (index)  {
            console.log("in delete");
            const id = this.students[index].id; 
            axios.delete(`http://localhost:3000/students/${id}`)
            .then(res =>  
            {console.log("Check me out",res);
            axios.get('http://localhost:3000/students').then(res  =>  {
              console.log(res.data)
              this.$store.commit('deleteStudentsData',res.data)}
) }    )    
        }
   
  

    },
    created(){
      
        axios.get(`http://localhost:3000/students`)
        .then(res => {
            this.$store.commit('addStudentsData',res.data)
            
            }
        )
        console.log("I am in created")
        
    }

}
</script>
<style scoped>
.md-table .md-table-head-text,
.md-table .md-table-cell .md-table-cell-container {
  padding-right: 0;
  padding-left: 0;
}
</style>