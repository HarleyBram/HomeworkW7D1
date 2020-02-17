import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      toDos: ["make bed", "have a shower", "eat breakfast", "put on make up", "brush teeth"],
      newToDo: ""
    },
    methods: {
      saveNewToDo: function() {
        this.toDos.push(this.newToDo);
        this.newToDo = [];
      }
    }
  )};
)};
