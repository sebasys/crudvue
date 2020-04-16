const methods = {
  data: function() {
    return {
      name: "sebatian"
    }
  },
  methods: {
    sayHello(message = "hola mundo") {
      console.log(`${message}`, this.name)
    },
    sayGoodBye() {
      console.log('Adios mundo!!', this.name)
    }
  }
}


export {
  methods
}
