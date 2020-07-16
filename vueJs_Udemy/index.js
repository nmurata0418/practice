new Vue({
    el: '#app',
    data: {
        fruits: ['りんご', 'バナナ', 'ぶどう', 'いちご']
    },
});

let component = {
    data: function() {
        return {
            number: 12
        }
    },
    template: '<p>いいね({{number}})<button @click="increment">+1</button></p>',
    methods: {
        increment: function() {
            this.number += 1;
        }
    }
}

new Vue({
    el: '#app-2',
})

new Vue({
    el: '#app-3',
    components: {
        'my-component': component
    }
})