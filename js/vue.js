
var print = new Vue({
    el: '.wrapp',
    data: {
    lastmessage:"",
    temp:0,
    contactCheck:[],
    contacts:[
        {
            "nome":"Michele",
            "click":"",
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
            "click":"",
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
            console.log(this.contactCheck);
           this.temp=index;
          },
          lastmessages(array){
            
            this.lastmessage=array[array.length-1];
            console.log(this.lastmessage);
            return (this.lastmessage.stato=="send");
          

          }

    }
    
  
    
    });