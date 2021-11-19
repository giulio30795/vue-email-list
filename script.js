// https://flynn.boolean.careers/exercises/api/random/mail

const app = new Vue({
    el: '#app',
    data: {
        mail: [],
    },

    created() {
        this.GenMail();
    },

    computed: {
    },
    methods:{
        GenMail(){
            for(let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(response => {
                // handle success
                this.mail.push(response.data.response);
                })
            }
        },
        
    }
})