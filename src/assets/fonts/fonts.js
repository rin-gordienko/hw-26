import { createGlobalStyle } from "styled-components";

import NunitoSans600 from "./NunitoSans600.woff";
// import NunitoSans600w2 from "./NunitoSans600.woff2";
import NunitoSansRegular from "./NunitoSansRegular.woff";
// import NunitoSansRegularW2 from "./NunitoSansRegular.woff2";

export default createGlobalStyle`
    @font-face {
        font-family: 'Nunito Sans';
        src: local('Nunito Sans'), local('Nunito Sans'),
       
        url(${NunitoSansRegular}) format('woff');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Nunito Sans';
        src: local('Nunito Sans'), local('Nunito Sans'),

        url(${NunitoSans600}) format('woff');
        font-weight: 600;
        font-style: normal;
    }

`;
