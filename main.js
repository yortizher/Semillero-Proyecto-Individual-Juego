var app = new Vue({
    el: '#app',
    data: {
        year:[2015,1997,1886,2001,2010],
        generateYear0:1,
        disguiseYear:"",
        convert:"",
        attempts:"",
        attempts0:"",
        rta:"",
        rta2:"",
        counter:0,
        player:[],
        name:"",
        inactive:true,
        
    },
    methods: {
        delete(){
            this.attempts="";
        },
        generateYear(){
            this.inactive=false,
            this.counter=0;
            this.rta=""
            this.rta2="";
            this.generateYear0=0;
            this.generateYear0=this.year[Math.floor(Math.random() * this.year.length)];
            this.convert=this.generateYear0.toString();
            this.disguiseYear= this.convert.replace(/./g, "* ");
        },
        validation(){
            if(this.counter == 2 && this.generateYear0==this.year[0]){
                this.rta2=`El ultimo numero de la fecha es 5`
            }else if(this.counter==2 && this.generateYear0==this.year[1]){
                this.rta2=`El ultimo numero de la fecha es 7`
            }else if(this.counter==2 && this.generateYear0==this.year[2]){
                this.rta2=`El ultimo numero de la fecha es 6`
            }else if(this.counter==2 && this.generateYear0==this.year[3]){
                this.rta2=`El ultimo numero de la fecha es 1`
            }else if(this.counter==2 && this.generateYear0==this.year[4]){
                this.rta2=`El ultimo numero de la fecha es 0`
            }
        },

        validationMM(){
            this.counter++;
            this.attempts0=this.attempts;
            if(this.attempts<this.generateYear0){
                this.rta=`El numero ingresado es menor`
                this.validation();
            }else if(this.attempts>this.generateYear0){
                this.rta=`El numero ingresado es mayor `
                this.validation();
            }else{
                this.disguiseYear=this.generateYear0;
                this.rta=`La fecha ingresa es correcta`
                this.rta2="";
            }

            if(this.counter==7){
                this.inactive=true;
                alert("Ha utilizado todos sus 7 intentos ....Fin del juego.")
            }
            this.delete()
           
        },
        addPlayers(){
            this.player.push({name:this.name,counter:this.counter});
            this.generateYear();
            this.name="";
        }

    }

  })