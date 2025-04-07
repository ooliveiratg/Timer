import {ThemeProvider} from 'styled-components'
import { Button } from './components/Button'
import { defaultTheme } from './Themes/default'
import { GlobalStyle } from './Themes/global/global'

export function App() {
  return(
    <ThemeProvider theme={defaultTheme} >
        <Button variant="primary"/>
        <Button variant="success"/>
        <Button variant="secondary"/>
        <Button variant="danger"/>
        <Button/>

        <GlobalStyle/>
    </ThemeProvider>
      
  )
}

