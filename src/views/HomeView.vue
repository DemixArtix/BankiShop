<template>
    <div class="home">
        <!--        <img alt="Vue logo" src="../assets/logo.png" />-->
        <router-view />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {},
})
export default class HomeView extends Vue {}
</script>
