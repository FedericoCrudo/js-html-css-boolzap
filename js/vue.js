
var print = new Vue({
    el: '.wrapp',
    data: {
    temp:0,
    message:"",
    messageCount:0,
     search:"",
    count2:0,
    randomMessage:["Ciao tutto bene?","Buongirono","Devo Studiare","Vado a correre","Hai visto?","Stasera che facciamo?","Sono salite al 56%"],
    contactCheck:[],
    contacts:[
         {
             "nome":"Michele",
             "index":0,
             "click":"",
             "unready":0,
             "visibility":true,
              "lastmessage": {"text":"Ciaoultimo ","ora":"12:33","stato":"send"} ,  
             "lastAcces":getRandom(1,24)+":"+getRandom(10,59),
             "img":"img/avatar_1.jpg",
              "data":"2 Febbraio 2021",
             "messages":[{"text":"Ciao Michele", "ora":"12:33", "stato":"send"}, {"text":"Ciao ","ora":"12:33","stato":"recive"},
                 {"text":"Ciaoultimo ","ora":"12:33","stato":"send"},
             ],
         },
         {
             "nome":"Marco",
             "index":1,
             "click":"",
             "unready":0,
             "visibility":true,
             "lastmessage":{"text":"Ciao2444ultimo ", "ora":"12:33","stato":"send"},
             "lastAcces":getRandom(1,24)+":"+getRandom(0,59),
             "img":"img/avatar_2.jpg",
              "data":"20 Febbraio 2021",
             "messages":[ { "text":"Ciao Michele","ora":"12:33","stato":"send"}, {"text":"Ciao ","ora":"12:33","stato":"recive"},
                {"text":"Ciao2444ultimo ","ora":"12:33","stato":"send"},
             ],
         },
        {
            "nome":"Federico",
            "click":"",
            "index":2,
            "unready":0,
            "visibility":true,
            "lastmessage":{"text":"Tutto bene? ","ora":"12:33","stato":"recive"},
            "lastAcces":getRandom(1,24)+":"+getRandom(0,59),
            "img":"img/avatar_3.jpg",
             "data":"20 Febbraio 2021",
            "messages":[{"text":"Ciao Federico","ora":"12:33","stato":"send"},{"text":"Ciao ","ora":"12:33","stato":"recive"},
                {"text":"Tutto bene? ","ora":"12:33","stato":"recive"},
            ],
        },
        {
            "nome":"Lorenzo",
            "click":"",
            "index":3,
            "unready":0,
            "visibility":true,
            "lastmessage":{"text":"Tutto bene? ","ora":"12:33","stato":"send"},
            "lastAcces":getRandom(1,24)+":"+getRandom(0,59),
            "img":"img/avatar_4.jpg",
             "data":"10 Gennaio 2021",
            "messages":[{"text":"Ciao Lorenzo","ora":"12:33","stato":"send"},{"text":"Ciao Federico ","ora":"12:33","stato":"recive"},
                {"text":"Tutto bene? ","ora":"12:33","stato":"send"},
            ],
        },
        {
            "nome":"Nicola",
            "click":"",
            "index":4,
            "unready":0,
            "visibility":true,
            "lastmessage":{"text":"Tutto bene? ", "ora":"12:33","stato":"send"},
            "lastAcces":getRandom(1,24)+":"+getRandom(0,59),
            "img":"img/avatar_5.jpg",
             "data":"10 Gennaio 2021",
            "messages":[{"text":"Ciao Nicola","ora":"12:33","stato":"send"},{"text":"Ciao Federico ","ora":"12:33","stato":"recive"},
                {"text":"Tutto bene? ","ora":"12:33","stato":"send" },{"text":"Tutto bene? ","ora":"12:33","stato":"send"},
            ],
        },
    ]
    },
    methods:{
            checkcontact(index,indexelement){
                this.contacts[this.temp].click="";
                $(".welcome").addClass("display-hidden");
                $(".content").addClass("display-show");
                this.contactCheck=[];  
                this.contacts[indexelement].click="active";
                this.contactCheck.push(this.contacts[indexelement]);
                this.temp=indexelement;
                this.contacts[indexelement].unready="";//svuotiamo i messaggi non letti
                this.message="";//puliamo l'input al cambio della conversazione
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
                        "text":this.randomMessage[(getRandom(0,this.randomMessage.length-1))],
                        "ora":"12:33",
                        "stato":"recive" 
                    }
                    //controllo per evitare che i messaggi vengano stampanti in chat diverse
                    if(this.count2==this.contactCheck[0].index){
                        this.pushChat(recivemessage);
                        this.pushContact(recivemessage);
                    }else{
                        this.pushContactUnready(recivemessage);
                    }  
                    },3000);
                    this.count2=this.contactCheck[0].index;
                    this.messageCount=0;        //puliamo il contatore affinche
                }
             this.message="";  
            },
            pushChat(message){
            this.contactCheck.forEach(element => {
                element.messages.push(message);  
                element.lastmessage=message;
            });
            },
            pushContact(message){
            this.contacts.forEach(element => {
                if(element.index==this.checkcontact.index){
                    element.messages.push(message);
                    element.lastmessage=message;
                }
            });
          },
          pushContactUnready(message){
            this.contacts.forEach(element => {
                if(element.index==this.count2){
                    this.messageCount+=1;
                element.messages.push(message);
                element.unready=this.messageCount;
                element.lastmessage=message;
                }
            });   
        },
        searchContact(){
            this.search=this.search.charAt(0).toUpperCase()+ this.search.slice(1).toLowerCase();
                this.contacts.forEach(element => {
                (!element.nome.includes(this.search))? element.visibility=false: element.visibility=true;
            });
        }     
    } 
});
function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
 }