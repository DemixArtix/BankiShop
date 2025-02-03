<script lang="ts">
import { Component } from 'vue-property-decorator';
import { Flicking } from "@egjs/vue-flicking";
import Modal from 'components/Modal.vue';
import Picture from 'components/Picture.vue';
import TitleLabel from 'components/TitleLabel/TitleLabel.vue';
import Label from 'components/Label/Label.vue';
import { Product } from '@/types/product';
import { Title } from 'constants/title';
import { EventsBus } from 'components/EventsBus';
import { AutoPlay, Arrow  } from "@egjs/flicking-plugins";
import { Plugin } from '@egjs/flicking';
import "@egjs/flicking-plugins/dist/arrow.css";

@Component({
    components: { Label, TitleLabel, Modal, Flicking, Picture}
})
export default class ProductModal extends EventsBus {
    item!: Product | undefined;
    plugins!: Plugin[]

    titleTypeH2: Title = Title.H2;
    titleTypeH3: Title = Title.H3;

    data() {
        return {
            item: undefined,
            plugins: [new AutoPlay(), new Arrow({
                prevElSelector: '.modal__arrow_prev',
                nextElSelector: '.modal__arrow_next',
            })]
        }
    }

    handleOpen(payload: Product) {
        this.item = payload;
    }

    handleClose() {
        this.item = undefined;
    }
    created() {
        this.$eventBus.$on("product-modal-opened", this.handleOpen);
    }
    beforeDestroy() {
        this.$eventBus.$off("product-modal-opened", this.handleOpen);
    }
}
</script>

<template>
    <Modal class="product-modal" v-if="item?.id">
        <template #modal-body="{classes}">
            <div class="product-modal__body" :class="classes">
                <div class="modal__close absolute" @click="handleClose"></div>
                <Flicking class="modal__slider h-[50%]" :options="{ align: 'prev', circular: true }" :plugins="plugins">
                    <Picture v-for="num in 3" :key="num" :image-id="item.preview" class="overflow-hidden object-cover w-[100%]"></Picture>
                    <span slot="viewport" class="modal__arrow_prev"></span>
                    <span slot="viewport" class="modal__arrow_next"></span>
                </Flicking>
                <div class="p-[2rem] flex flex-col items-start gap-[2rem]">
                    <TitleLabel class="!mb-0 !mt-0" :text="item.title"></TitleLabel>
                    <TitleLabel :titleType="titleTypeH2" :text="item.author"></TitleLabel>
                    <Label
                        class="text-left"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores, aut blanditiis consectetur consequuntur ea, ipsa ipsum nisi optio provident quaerat, similique tempora ut. Ad laboriosam modi non odio sint."
                    ></Label>
                </div>
            </div>
        </template>
    </Modal>
</template>

<style scoped lang="scss">
    .product-modal {
        z-index: 2000;
    }
    .product-modal__body {
        @apply w-[80rem] h-[80rem] bg-white;
        @media (max-width: 1024px) {
            width: 100vw;
            height: 100vh;
        }
    }
    .modal__close {
        height: 4rem;
        width: 4rem;
        left: calc(100% + 2rem);
        top: 0;
        cursor: pointer;
        transition: 0.4s;
        @media (max-width: 1024px) {
            left: auto;
            right: 2rem;
            top: 2rem;
            z-index: 2000;
        }
        &:hover {
            opacity: 0.5;
        }
        &:after, &:before {
            content: '';
            position: absolute;
            left: 50%;
            top: 50%;
            height: 2px;
            width: 100%;
            background-color: #fff;
        }
        &:after {
            transform: translate(-50%, -50%) rotate(45deg);
        }
        &:before {
            transform: translate(-50%, -50%) rotate(-45deg);
        }
    }
    .modal__slider {
        .modal__arrow_next, .modal__arrow_prev {
            opacity: 0;
        }
        &:hover {
            .modal__arrow_next, .modal__arrow_prev {
                opacity: 0.5;
            }
        }
    }
    .modal__arrow_next, .modal__arrow_prev {
        cursor: pointer;
        height: 2.5rem;
        width: 2.5rem;
        border: solid #ffffff;
        border-width: 5px 5px 0 0;
        position: absolute;
        top: 50%;
        z-index: 10;
        transition: opacity 0.3s;
        &:hover {
            opacity: 1 !important;
        }
    }
    .modal__arrow_next {
        transform: translateY(-50%) rotate(45deg);
        right: 2rem;
    }
    .modal__arrow_prev {
        transform: translateY(-50%) rotate(-135deg);
        left: 2rem;
    }
</style>
