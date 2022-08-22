var app = new Vue({
    el: '#app',
    data: {
        arrayNumeriCasuali: null
    },
    mounted() {

        /*
            axios.get('https://flynn.boolean.careers/exercises/api/array/integers?min=20&max=1800&items=10')
            .then(pippo => {
                this.arrayNumeriCasuali = pippo.data.response;
            })
        */

        let that = this;
    
        axios.get('https://flynn.boolean.careers/exercises/api/array/integers?min=20&max=1800&items=10')
        .then(function(paperino) {
            that.arrayNumeriCasuali = paperino.data.response;
        });

    }
})








/*

@here
Ciao ragazzi,
Esercizio di oggi: Vue Email List
nome repo: vue-email-list

Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.

*/