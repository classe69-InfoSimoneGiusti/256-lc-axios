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