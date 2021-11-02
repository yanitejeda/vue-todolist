Vue.config.devtools = true


new Vue ({
    el: "#root",
    data:{
        newElementList:"",
        listTodo:[
            "numero 1",
            "numero 2 ",
            "numero 3",
            "pasta",
        ]
    },


  /*   methods sono funzioni statiche 
       utilizzate per reagire agli eventi 
       che si verificano nel DOM */
    methods :{

        onPress(){
            /* controllo che la stringa non sia un elemento vuoto, 
            e nel caso mi blocco e non eseguo il push
            trim mi cancella gli spazi prima e dopo il testo */
            if (this.newElementList.trim()=== ""){
                return;
            }


            /* se l'elemeno aggiunto alla mia lista esiste già non lo pusho 
            all'interno del listTodo e l'operazione si blocca */
            const elementCheck = this.listTodo.some((el)=>{
                return el.toLowerCase() === this.newElementList.trim().toLowerCase();
            });
            if(elementCheck){
                return;
            }

           /*  prendo gli elementi inseriti nel newElementList e 
            gli inserisco nel listTodo */
            this.listTodo.push(this.newElementList);

            /* una volta pushato l'elemento mi ritorna stringa vuota */
            this.newElementList = "";
        },
        
/* per eliminare un elemento devo prendere il suo indice nell'array */
        onPressDeleted(indicedacancellare){
            this.listTodo.splice(indicedacancellare, 1);

        }

    }
})