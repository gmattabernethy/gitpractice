const Watch = {
    template: "<div>Watch you are buying {{ $route.params.id }}</div>"
}

const router = new VueRouter({
  routes: [
    { path: '/watch/:id', component: Watch }
  ]
})


var app = new Vue({  
  el: '#app',
  router,
  data: {
    number: '',
    curWatch: {},
    loading:true,
    watchname : ''
  },
  created: function() {
    this.watchname = this.$route.params.id;
    this.buyWatch();
  },
  computed:{
      watch:function(){
          var watch = $route.params.id;
          return watch;
      }
        
  },
  methods: {
    buyWatch: function() {
      this.loading = true;
      $.getJSON(this.watchname + '.json', function(json){
        }).then(json=>{
            this.curWatch = json;
            this.loading = false;
            console.log("Loaded");
        })
        
    },    
  }
});