<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import Container from 'components/Container.vue';
import Menu from 'components/Menu/Menu.vue';
import Search from 'components/Search.vue';
import PhoneIcon from 'components/Icons/PhoneIcon.vue';
import MarkIcon from 'components/Icons/MarkIcon.vue';
import Label from 'components/Label/Label.vue';

@Component({
    components: { MarkIcon, PhoneIcon, Search, Menu, Container, Label }
})
export default class Footer extends Vue {

}
</script>

<template>
    <div class="bg-[#ECEAEA] mt-[5rem]">
        <Container class="footer__container py-[3.8rem] flex items-center justify-between flex-wrap">
            <Menu class="footer__menu"/>
            <div class="footer__contact_list flex items-center justify-center gap-[5.4rem]">
                <a class="footer__contact-item" href="tel:+78125555555">
                    <PhoneIcon/>
                    <Label text="+7 (812) 555-55-55"></Label>
                </a>
                <a class="footer__contact-item" target="_blank" href="https://maps.google.com/?q=г. Санкт-Петербург, ул. Ефимова, 3">
                    <MarkIcon/>
                    <Label text="г. Санкт-Петербург, ул. Ефимова, 3"></Label>
                </a>
            </div>
        </Container>
    </div>
</template>

<style scoped lang="scss">
.footer__menu {
    @media (max-width: 640px) {
        flex-wrap: wrap;
        gap: 2rem;
    }
}
.footer__container {
    @media (max-width: 1240px) {
        @apply gap-[1rem];
    }
}
.footer__contact_list {
    @media (max-width: 1240px) {
        @apply flex-grow;
    }
    @media (max-width: 640px) {
        padding-top: 1rem;
        flex-direction: column;
        gap: 1rem;
    }
}
.footer__contact-item {
    @apply flex items-center justify-center gap-[.4rem] flex-nowrap;
}
</style>
