<template>
    <div id="app">
        <div class="content">
            <Header />
            <router-view />
        </div>
        <Footer class="footer"/>
    </div>
</template>

<style lang="scss">
#app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.content {
    flex: 1 0 auto;
}

.footer {
    flex: 0 0 auto;
}
</style>

<script lang="ts">
import Header from 'components/Header.vue';
import Footer from 'components/Footer.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: { Header, Footer },
})
export default class App extends Vue {
    created() {
        this.$store.dispatch('cart/initCart');

    }
}
</script>
