import { Product } from 'types/product';
import { ActionContext } from 'vuex';

type CatalogState = {
    list: Product[];
};

type FetchCatalogParams = { page: number; quantity: number, search: string };

const state = (): CatalogState => ({
    list: [],
});

const getters = {
    getList: ({ list }: { list: Product[] }) => list,
};

const actions = {
    async fetchCatalog(
        { state: ctxState }: ActionContext<CatalogState, never>,
        { page = 1, quantity = 4, search = ''}: FetchCatalogParams = { page: 1, quantity: 4, search: '' }
    ): Promise<void> {
        ctxState.list = await fetch('/api/mocks/goods.json')
            .then((res) => res.json())
            .then((data: Product[]) => data.filter((item: Product) => {
                return search ? (
                    item.author.toLowerCase().includes(search.toLowerCase()) ||
                    item.title.toLowerCase().includes(search.toLowerCase())
            ) : true
            }).splice((page - 1) * 4, quantity * page))
            .catch((e) => {
                throw new Error(e);
            });
    },
};

export const catalog = {
    namespaced: true,
    state,
    getters,
    mutations: {},
    actions,
};
