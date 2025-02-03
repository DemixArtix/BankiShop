<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { MenuItem } from 'components/Menu/logic/types';
import { MENU } from 'components/Menu/logic/constants';
import Label from 'components/Label/Label.vue';
import Modal from 'components/Modal.vue';
import Search from 'components/Search.vue';

@Component({
    components: { Label, Modal, Search },
})
export default class BurgerMenu extends Vue {
    items: MenuItem[] = MENU;
    opened!: boolean;
    data() {
        return {
            opened: false,
        }
    }
}
</script>

<template>
    <div>
        <input type="checkbox" role="button" aria-label="Display the menu" class="burger-menu" v-model="opened">
        <Modal v-if="opened">
            <template #modal-body="{classes}">
                <div :class="classes" class="z-1000 w-[100vw] h-[100vh] flex flex-col items-center justify-center gap-[2rem]">
                    <router-link
                        exactActiveClass="underline decoration-solid"
                        class="z-1000 hover:opacity-50 transition"
                        v-for="({ name, link, title }, index) in items"
                        :key="name ?? index"
                        :to="name ? { name } : link ?? '#'"
                    >
                        <Label :text="title" />
                    </router-link>
                    <Search :is-mobile="true"/>
                </div>
            </template>
        </Modal>
    </div>
</template>

<style scoped lang="scss">
.burger-menu {
    z-index: 1000;
    position: fixed;
    top: 2rem;
    right: 2rem;
    --s: 3rem; /* control the size */
    --c: #382E2B; /* the color */

    height: var(--s);
    aspect-ratio: 1;
    border: none;
    padding: 0;
    border-inline: calc(var(--s)/2) solid #0000;
    box-sizing: content-box;
    --_g1: linear-gradient(var(--c) 20%,#0000 0 80%,var(--c) 0)
    no-repeat content-box border-box;
    --_g2: radial-gradient(circle closest-side at 50% 12.5%,var(--c) 95%,#0000)
    repeat-y content-box border-box;
    background:
        var(--_g2) left  var(--_p,0px) top,
        var(--_g1) left  calc(var(--s)/10 + var(--_p,0px)) top,
        var(--_g2) right var(--_p,0px) top,
        var(--_g1) right calc(var(--s)/10 + var(--_p,0px)) top;
    background-size:
        20% 80%,
        40% 100%;
    clip-path: inset(0 25%);
    -webkit-mask: linear-gradient(90deg,#0000,#000 25% 75%,#0000);
    cursor: pointer;
    transition:
        background-position .3s var(--_s,.3s),
        clip-path 0s var(--_s,.6s);
    -webkit-appearance:none;
    -moz-appearance:none;
    appearance:none;
    &:before,
    &:after {
        content:"";
        position: absolute;
        border-radius: var(--s);
        inset: 40% 0;
        background: var(--c);
        transition: transform .3s calc(.3s - var(--_s,.3s));
    }

    &:checked {
        clip-path: inset(0);
        --_p: calc(-1*var(--s));
        --_s: 0s;
    }
    &:checked:before {
        transform: rotate(45deg);
    }
    &:checked:after {
        transform: rotate(-45deg);
    }
    &:focus-visible {
        clip-path: none;
        -webkit-mask: none;
        border: none;
        outline: 2px solid var(--c);
        outline-offset: 5px;
    }
}


</style>
