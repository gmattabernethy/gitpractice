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
    watchname : '',
    buyers: {},
    addedName: '',
    creditCard: ''
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
    addComment: function() {
       //console.log(this.addedName + ' ' + this.creditCard);
       
      if (!(this.number in this.buyers))
        Vue.set(app.buyers, this.number, new Array);
      var options = {year: 'numeric', month: 'long', day: 'numeric'};
      var date = new Date();
      this.buyers[this.number].push({buyer:date.toLocaleDateString('en-US', options) +': '+ this.addedName + ' bought a ' + this.curWatch.name + ' with CC# ' + this.creditCard});
      this.addedName = '';
      this.creditCard = '';
    },
  },
   
});