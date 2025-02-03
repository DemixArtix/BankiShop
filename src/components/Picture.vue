<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { getImageSrc } from 'utils/getImageSrc';

@Component({})
export default class Picture extends Vue {
    @Prop() imageId!: string;
    @Prop({ default: '' }) pictureAlt!: string;

    isLoaded!: boolean;
    pictureStub!: string;

    data() {
        return {
            isLoaded: false,
            pictureStub: require('assets/images/loading-dark.svg'),
        };
    }

    mounted() {
        const img = new Image();

        img.src = this.pictureSrc;

        img.onload = () => {
            this.isLoaded = true;
        };
    }

    get pictureSrc() {
        return getImageSrc(this.imageId);
    }
}
</script>

<template>
    <img @click="$emit('click')" v-if="isLoaded" :src="pictureSrc" :alt="pictureAlt" draggable="false" loading="lazy" />
    <img @click="$emit('click')" v-else-if="pictureStub" :src="pictureStub" alt="Заглушка" draggable="false" />
</template>

<style scoped lang="scss"></style>
