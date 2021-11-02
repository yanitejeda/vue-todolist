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
           /*  prendo gli elementi inseriti nel newElementList e 
            gli inserisco nel listTodo */
            this.listTodo.push(this.newElementList);
        }

    }
})