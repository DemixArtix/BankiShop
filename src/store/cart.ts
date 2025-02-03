import { Product } from 'types/product';
import { ActionContext } from 'vuex';
import { Vue } from 'vue-property-decorator';

type CartState = {
    cart: Record<string, Product>;
};

const state = (): CartState => ({
    cart: {},
});

const mutations = {};

const getters = {
    getCart: ({ cart }: { cart: Record<string, Product> }) => cart,
};

const actions = {
    initCart({ state: ctxState }: ActionContext<CartState, never>): void {
        const storageCart = localStorage.getItem('cart');
        if (storageCart) {
            ctxState.cart = JSON.parse(storageCart);
        }
    },
    addToCart({ state: ctxState }: ActionContext<CartState, never>, product: Product): void {
        if (!ctxState.cart[product.id] && +product.available) {
            Vue.set(ctxState.cart, product.id, product);
            localStorage.setItem('cart', JSON.stringify(ctxState.cart));
        }
    },
    removeFromCart({ state: ctxState }: ActionContext<CartState, never>, product: Product): void {
        if (ctxState.cart[product.id]) {
            //delete ctxState.cart[product.id];
            ctxState.cart = Object.entries(ctxState.cart).reduce<Record<string, Product>>(
                (acc, [key, value]) => {
                    if (key !== product.id) {
                        acc[key] = value;
                    }

                    return acc;
                },
                {}
            );
            localStorage.setItem('cart', JSON.stringify(ctxState.cart));
        }
    },
};

export const cart = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
