import { createGlobalStyle } from 'styled-components';

import Blocus from './blocuswebfont.woff';


export default createGlobalStyle`
    @font-face {
        font-family: 'Blocus';
        src: local('Blocus'), local('Blocus'),
        url(${Blocus}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;