import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        students: [],
        
    },
    getters: {
        getStudentsData(state){
            console.log("in getting Students Data",state.students)

            return state.students
        },
      
        
    },
    mutations: {
        editStudentsData(){
            console.log("changing Students Data")

        },
        deleteStudentsData(state,array){
            console.log("deleting Students Data")
            state.students.splice(0, state.students.length, ...array);
        },
        addStudentsData(state,array){
            console.log("Add Student lo unna",array)
            state.students.splice(0, state.students.length, ...array);
            console.log("added new Student Data",state.students)
        }

    }
})