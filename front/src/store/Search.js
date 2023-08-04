import { atom } from 'recoil';

export const SearchState = atom({
    key: 'SearchState',
    default : '',
})
export const SearchDetail = atom({
    key : 'SearchDetail',
    default : {},
})
export const SearchText = atom({
    key : 'SearchText',
    default : '',
})