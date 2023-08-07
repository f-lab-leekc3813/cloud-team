import { atom } from 'recoil';

export const HomeState = atom({
    key: 'HomeState',
    default : '',
})
export const HomeDetail = atom({
    key : 'HomeDetail',
    default : {},
})