import React from 'react';
import { RecoilRoot, atom, useRecoilState } from 'recoil';

export const LoginState = atom({
    key: 'LoginState',
    default: false,
});