import { type } from '@testing-library/user-event/dist/type';
import cardapio from 'data/cardapio.json';

export type Cardapio = typeof cardapio;

export type Prato = typeof cardapio[0];