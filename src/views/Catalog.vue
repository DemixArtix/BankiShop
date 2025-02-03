<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TitleLabel from 'components/TitleLabel/TitleLabel.vue';
import Container from 'components/Container.vue';
import { TextPosition } from 'constants/textPosition';
import CardProduct from 'components/CardProduct/CardProduct.vue';
import Modal from 'components/Modal.vue';
import ProductModal from 'components/ProductModal.vue';

@Component({
    components: { ProductModal, Modal, CardProduct, Container, TitleLabel },
})
export default class Catalog extends Vue {
    textPosition!: TextPosition;

    data() {
        return {
            textPosition: TextPosition.Left,
        };
    }

    get catalogList() {
        return this.$store.getters['catalog/getList'];
    }
}
</script>

<template>
    <div>
        <ProductModal></ProductModal>
        <Container>
            <TitleLabel text="Картины эпохи Возрождения" :text-position="textPosition" />
            <div class="grid gap-[3.2rem] grid-cols-[repeat(auto-fill,minmax(28rem,_2fr))]">
                <CardProduct v-for="(item, key) in catalogList" :item="item" :key="key"></CardProduct>
            </div>
        </Container>
    </div>
</template>

<style scoped lang="scss"></style>
