<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import { Currency, Product } from 'types/product';
import Picture from 'components/Picture.vue';
import Label from 'components/Label/Label.vue';
import { FontSize } from 'constants/fontSize';
import { FontColor } from 'constants/fontColor';
import Btn from 'components/Btn/Btn.vue';
import { Color } from 'constants/color';
import { FontWeight } from 'constants/fontWeight';
import LoadingIcon from 'components/Icons/LoadingIcon.vue';
import CheckIcon from 'components/Icons/CheckIcon.vue';
import { EventsBus } from 'components/EventsBus';

@Component({
    components: { CheckIcon, LoadingIcon, Btn, Picture, Label },
})
export default class CardProduct extends EventsBus {
    @Prop() item!: Product;

    fontSizeLG: FontSize = FontSize.LG;
    fontSizeSM: FontSize = FontSize.SM;
    fontColorLightGrey: FontColor = FontColor.LightGrey;
    fontColorWhite: FontColor = FontColor.White;
    colorBlack: Color = Color.Black;
    colorBrown: Color = Color.Brown;
    fontWeightLight: FontWeight = FontWeight.Light;
    fontWeightBold: FontWeight = FontWeight.Bold;
    isLoading!: boolean;

    data() {
        return {
            isLoading: false,
        };
    }

    getFormattedPrice(price: number, currency: Currency = 'USD'): string {
        const formatterInstance = new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency,
            maximumSignificantDigits: 1,
        });

        return formatterInstance.format(price);
    }

    get isInCart(): boolean {
        return Boolean(this.$store.getters['cart/getCart'][this.item.id]);
    }

    get isAvailable(): boolean {
        return Boolean(+this.item.available);
    }

    get btnColor(): Color {
        switch (this.isInCart) {
            case true:
                return this.colorBrown;
            default:
                return this.colorBlack;
        }
    }

    addToCart() {
        this.isLoading = true;
        setTimeout(() => {
            this.isLoading = false;
            if (this.isInCart) {
                this.$store.dispatch('cart/removeFromCart', this.item);
            } else {
                this.$store.dispatch('cart/addToCart', this.item);
            }
        }, 2000);
    }

    onOpenModal(item: Product) {
        this.$eventBus.$emit("product-modal-opened", item);
    }
}
</script>
<template>
    <div class="border border-border-gray" :class="[!isAvailable && 'opacity-50']">
        <Picture
            @click="onOpenModal(item)"
            class="overflow-hidden object-cover h-[calc(50%-0.4rem)] w-[100%] cursor-pointer"
            :image-id="item.preview"
        />
        <div
            class="p-[2.4rem] flex flex-col items-stretch justify-between basis-full h-[calc(50%+0.4rem)]"
        >
            <div class="flex flex-col items-start cursor-pointer" @click="onOpenModal(item)">
                <Label :text="`«${item.title}»`" :font-size="fontSizeLG"></Label>
                <Label :text="item.author" :font-size="fontSizeLG"></Label>
            </div>
            <div v-if="isAvailable" class="flex items-center justify-between">
                <div class="flex flex-col items-start">
                    <Label
                        v-if="item.oldPrice"
                        :text="getFormattedPrice(item.oldPrice, item.currency)"
                        :font-size="fontSizeSM"
                        :font-color="fontColorLightGrey"
                        :line-through="true"
                        :font-weight="fontWeightLight"
                    ></Label>
                    <Label
                        :text="getFormattedPrice(item.price, item.currency)"
                        :font-size="fontSizeLG"
                        :font-weight="fontWeightBold"
                    ></Label>
                </div>
                <Btn
                    class="flex items-center justify-center gap-[1rem] px-[1.4rem]"
                    @click="addToCart"
                    :color="btnColor"
                >
                    <template v-if="isInCart">
                        <LoadingIcon v-if="isLoading" />
                        <CheckIcon v-else />
                        <Label text="В корзине" :font-color="fontColorWhite"></Label>
                    </template>
                    <template v-else>
                        <LoadingIcon v-if="isLoading" />
                        <Label text="Купить" :font-color="fontColorWhite"></Label>
                    </template>
                </Btn>
            </div>
            <Label class="text-left" v-else text="Продана на аукционе"></Label>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
