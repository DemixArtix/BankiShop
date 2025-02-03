<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Btn from 'components/Btn/Btn.vue';
import TextInput from 'components/TextInput.vue';
import { FontColor } from 'constants/fontColor';
import { Color } from 'constants/color';
import { Route } from '@/router/constatns';

@Component({
    components: { TextInput, Btn },
})
export default class Search extends Vue {
    @Prop({default: false}) isMobile!: boolean;
    text!: string;
    fontColor: FontColor = FontColor.White;
    color: Color = Color.Dark;

    data() {
        return {
            text: '',
        };
    }

    updateSearchParams() {
        this.$router.push({
            name: Route.Catalog,
            query: {
                ...this.text ? { search: this.text} : {}
            }
        })
    }

    handleReset() {
        this.text = '';
        if(this.$route.query.search) {
            this.updateSearchParams()
        }
    }

    get classes() {
        switch (this.isMobile) {
            case true:
                return ['flex', 'flex-col', 'max-w-[calc(100vw-3rem)]'];
            default:
                return ['flex', 'nowrap']
        }
    }
}
</script>

<template>
    <div :class="classes">
        <TextInput @handleReset="handleReset()" v-model="text" placeholder="Поиск по названию картины" />
        <Btn @click="updateSearchParams()" text="Найти" :font-color="fontColor" :color="color" />
    </div>
</template>

<style scoped lang="scss"></style>
