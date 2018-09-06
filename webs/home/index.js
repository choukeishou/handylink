define([
  'text!home/index.html',
  'service/api'
], function(Template, api) {
  'use strict';
  return {
    name: "home",
    template: Template,
    data: function() {
      return {
        searchText: "",
        links: {
          news: [],
          tech: [],
          programer: []
        }
      }
    },
    methods: {
      search: function() {
        window.open(`https://www.baidu.com/s?wd=${this.searchText}`, "_blank");
      },
      getLinks: function(type) {
        api.getLinks(type).then(response=>{
          if (response.status == 200) {
            if (type==="") {
              this.links = response.data;
            } else {
              this.links[type] = response.data;
            }
          }
        });
      },
      getAll: function() {
        this.getLinks("");
      },
      getNews: function() {
        this.getLinks("news");
      },
      getTech: function() {
        this.getLinks("tech");
      }
    },
    mounted(){
      this.getAll();
    }
  }
});
