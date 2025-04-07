// styles.d.ts o d significa de definição significa que esse arquivo só tera códigos de definição do typeScript (ou seja só contem coisa do typeScript, tipo a interface)

import styled from "styled-components";
import { defaultTheme} from "../Themes/default";

//eu estou guardando o objeto em uma variavel
type ThemeType = typeof defaultTheme

declare module 'styled-componets' {
    export interface DefaultTheme extends ThemeType {}
}