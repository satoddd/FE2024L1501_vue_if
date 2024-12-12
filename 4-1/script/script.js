// JavaScript用ファイル
new Vue({
    el: '#app',
    data() {
        return {
            count: 59
        };
    },
    methods: {
        increment() {
            this.count ++;
        },
        decrement() {
            this.count --;
        }
    },
    computed: {
        passed(){
            return this.count >= 60;
        }
    }
});