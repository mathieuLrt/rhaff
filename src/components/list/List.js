import Vue from 'vue';
import myTemplate from './list.html';

const List = Vue.extend({
  template: myTemplate,
  data (){
      return {
          myMessage : "Hello VueJs"
      }
  }
});

export default List;
