
var print = new Vue({
    el: '.wrapp',
    data: {
    lastmessage:"",
    temp:0,
    message:"",
    randomMessage:["Ciao tutto bene?","Buongirono","Devo Studiare","Vado a correre","Hai visto?","Stasera che facciamo?","Sono salite al 56%"],
    contactCheck:[],
    contacts:[
        {
            "nome":"Michele",
            "index":0,
            "click":"",
            "lastAcces":getRandom(1,24)+":"+getRandom(10,59),
            "img":"img/avatar_1.jpg",
             "data":"2 Febbraio 2021",
            "messages":[
                {
                    "text":"Ciao Michele",
                    "ora":"12:33",
                    "stato":"send"
                },
                {
                    "text":"Ciao ",
                    "ora":"12:33",
                    "stato":"recive"
                },
                {
                    "text":"Ciao ",
                    "ora":"12:33",
                    "stato":"send"
                },
        
            ],
        },
        {
            "nome":"Marco",
            "index":1,
            "click":"",
            "lastAcces":getRandom(1,24)+":"+getRandom(0,59),
            "img":"img/avatar_2.jpg",
             "data":"20 Febbraio 2021",
            "messages":[
                {
                    "text":"Ciao Michele",
                    "ora":"12:33",
                    "stato":"send"
                },
                {
                    "text":"Ciao ",
                    "ora":"12:33",
                    "stato":"recive"
                },
                {
                    "text":"Ciao2444 ",
                    "ora":"12:33",
                    "stato":"send"
                },
        
            ],
        },
        {
            "nome":"Federico",
            "click":"",
            "index":2,
            "lastAcces":getRandom(1,24)+":"+getRandom(0,59),
            "img":"img/avatar_3.jpg",
             "data":"20 Febbraio 2021",
            "messages":[
                {
                    "text":"Ciao Federico",
                    "ora":"12:33",
                    "stato":"send"
                },
                {
                    "text":"Ciao ",
                    "ora":"12:33",
                    "stato":"recive"
                },
                {
                    "text":"Tutto bene? ",
                    "ora":"12:33",
                    "stato":"send"
                },
        
            ],
        },
        {
            "nome":"Lorenzo",
            "click":"",
            "index":3,
            "lastAcces":getRandom(1,24)+":"+getRandom(0,59),
            "img":"img/avatar_4.jpg",
             "data":"10 Gennaio 2021",
            "messages":[
                {
                    "text":"Ciao Lorenzo",
                    "ora":"12:33",
                    "stato":"send"
                },
                {
                    "text":"Ciao Federico ",
                    "ora":"12:33",
                    "stato":"recive"
                },
                {
                    "text":"Tutto bene? ",
                    "ora":"12:33",
                    "stato":"send"
                },
        
            ],
        },
        {
            "nome":"Nicola",
            "click":"",
            "index":4,
            "lastAcces":getRandom(1,24)+":"+getRandom(0,59),
            "img":"img/avatar_5.jpg",
             "data":"10 Gennaio 2021",
            "messages":[
                {
                    "text":"Ciao Nicola",
                    "ora":"12:33",
                    "stato":"send"
                },
                {
                    "text":"Ciao Federico ",
                    "ora":"12:33",
                    "stato":"recive"
                },
                {
                    "text":"Tutto bene? ",
                    "ora":"12:33",
                    "stato":"send"
                },
        
            ],
        },
    ]
    },
    methods:{
            checkcontact(index){
                this.contacts[this.temp].click="";
                $(".welcome").addClass("display-hidden");
                $(".content").addClass("display-show");
                this.contactCheck=[];  
                this.contacts[index].click="active";
                this.contactCheck.push(this.contacts[index]);
                 this.temp=index;
            },
            lastmessages(array){
            this.lastmessage=array[array.length-1];
            console.log(this.lastmessage);
            return (this.lastmessage.stato=="send");
            },
            addelement(){
                const strcutmessage={
                "text":this.message,
                "ora":"12:33",
                "stato":"send" 
                }
                if(this.message!=0){
                    this.pushChat(strcutmessage);
                    //aggiungiamo il messaggio all'array principale
                    this.pushContact(strcutmessage);
                    //risposta automatica
                    setTimeout(()=> {
                        let recivemessage={
                        "text":this.randomMessage[(getRandom(0,this.randomMessage.length))],
                        "ora":"12:33",
                        "stato":"recive" 
                    }
                    this.pushChat(recivemessage);
                    this.pushContact(recivemessage);
                    },3000);
                }
             this.message="";  
            },
            pushChat(message){
            this.contactCheck.forEach(element => {
                element.messages.push(message);  
            });
            },
            pushContact(message){
            this.contacts.forEach(element => {
                if(element.index==this.checkcontact.index){
                    element.messages.push(message);
                }
            });
          }
    } 
});
function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
 }