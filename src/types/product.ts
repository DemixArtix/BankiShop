export type Currency = 'USD' | 'EUR' | 'RUB';

export type Product = {
    id: string;
    title: string;
    author: string;
    price: number;
    oldPrice: number;
    currency: Currency;
    preview: string;
    available: boolean;
};
