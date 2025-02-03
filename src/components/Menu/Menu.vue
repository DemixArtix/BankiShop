<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { MenuItem } from 'components/Menu/logic/types';
import { MENU } from 'components/Menu/logic/constants';
import Label from 'components/Label/Label.vue';

@Component({
    components: { Label },
})
export default class Menu extends Vue {
    items: MenuItem[] = MENU;
    @Prop({default: false}) useActiveClass!: boolean
}
</script>

<template>
    <div class="flex items-center justify-center gap-x-[4.8rem] flex-grow">
        <router-link
            :exactActiveClass="useActiveClass ? 'underline decoration-solid' : ''"
            class="hover:opacity-50 transition"
            v-for="({ name, link, title }, index) in items"
            :key="name ?? index"
            :to="name ? { name } : link ?? '#'"
        >
            <Label :text="title" />
        </router-link>
    </div>
</template>

<style scoped lang="scss">
.router-link-active {
    span {
        color: #776763;
    }
}
</style>
