<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Search from '@/components/Search.vue';
import Menu from 'components/Menu/Menu.vue';
import Container from 'components/Container.vue';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu.vue';

@Component({
    components: { BurgerMenu, Container, Menu, Search },
    watch: {

    }
})
export default class Header extends Vue {
    isMobile!: boolean;

    data() {
        return {
            isMobile: false,
        }
    }

    checkWindowWidth() {
        this.isMobile = window.innerWidth < 732
    }

    mounted() {
        this.checkWindowWidth()
        window.addEventListener('resize', () => {
            this.checkWindowWidth()
        })
    }
}
</script>

<template>
    <div v-if="!isMobile" class="border-b border-border-gray">
        <Container class="header__container py-[3.8rem] flex items-center justify-between flex-wrap">
            <Menu :use-active-class="true"/>
            <Search />
        </Container>
    </div>
    <BurgerMenu v-else></BurgerMenu>
</template>

<style scoped lang="scss">
.header__container {
    @media (max-width: 1024px) {
        @apply gap-[2rem] flex-col items-center;
    }
}
</style>
