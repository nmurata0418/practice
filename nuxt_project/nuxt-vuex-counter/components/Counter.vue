<template>
    <section>
        <h2>{{ title }}</h2>
        counter:{{ $store.state.counter.counter }}
        <button v-on:click=" $store.commit('counter/countUp')">+1</button>
        <button v-on:click=" $store.commit('counter/countDown')">-1</button>
        <button v-on:click=" $store.commit('counter/countReset')">Reset</button>
    </section>
</template>

<script>
export default {
    data: function() {
        return {
            title:'Counter'
        }
    }
}
</script>