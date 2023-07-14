import { PricesComponent } from './prices/prices.component';

export interface Product {
  id: number;
  name: string;
  categoryId: number;
  price:number;
  image:string
}

export interface Category {
  id: number;
  name: string;
}

export const categories = [
  { id: 1, name: 'round' },
  { id: 2, name: 'square' },
  { id: 3, name: 'unico' },
];

export const DUMMYPRODUCTS = [
  {
    id: 1,
    name: 'sakarias Armchair',
    price: 20,
    image: '/assets/images/handle.jpg',
    categoryId: 1,
  },
  {
    id: 2,
    name: 'sakarias Armchair',
    price: 20,
    image: '/assets/images/handle.jpg',
    categoryId: 1,
  },
  {
    id: 3,
    name: 'sakarias Armchair',
    price: 20,
    image: '/assets/images/handle.jpg',
    categoryId: 1,
  },
  {
    id: 4,
    name: 'sakarias Armchair',
    price: 20,
    image: '/assets/images/handle.jpg',
    categoryId: 1,
  },
  {
    id: 4,
    name: 'sakarias Armchair',
    price: 20,
    image: '/assets/images/handle.jpg',
    categoryId: 1,
  },
  {
    id: 5,
    name: 'sakarias Armchair',
    price: 20,
    image: '/assets/images/handle.jpg',
    categoryId: 1,
  },
  {
    id: 6,
    name: 'sakarias Armchair',
    price: 20,
    image: '/assets/images/door-handle3.jpg',
    categoryId: 2,
  },
  {
    id: 7,
    name: 'sakarias Armchair',
    price: 20,
    image: '/assets/images/door-handle3.jpg',
    categoryId: 2,
  },
  {
    id: 8,
    name: 'sakarias Armchair',
    price: 20,
    image: '/assets/images/door-handle3.jpg',
    categoryId: 2,
  },
  {
    id: 9,
    name: 'sakarias Armchair',
    price: 20,
    image: '/assets/images/door-handle3.jpg',
    categoryId: 2,
  },
  {
    id: 9,
    name: 'sakarias Armchair',
    price: 20,
    image: '/assets/images/door-handle2.jpg',
    categoryId: 2,
  },
  {
    id: 10,
    name: 'sakarias Armchair',
    price: 20,
    image: '/assets/images/door-handle2.jpg',
    categoryId: 3,
  },
  {
    id: 11,
    name: 'sakarias Armchair',
    price: 20,
    image: '/assets/images/door-handle2.jpg',
    categoryId: 3,
  },
  {
    id: 12,
    name: 'sakarias Armchair',
    price: 20,
    image: '/assets/images/door-handle2.jpg',
    categoryId: 3,
  },
  {
    id: 13,
    name: 'sakarias Armchair',
    price: 20,
    image: '/assets/images/door-handle2.jpg',
    categoryId: 3,
  },
  {
    id: 14,
    name: 'sakarias Armchair',
    price: 20,
    image: '/assets/images/door-handle2.jpg',
    categoryId: 3,
  },
];
