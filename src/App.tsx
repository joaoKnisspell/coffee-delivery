//Theme
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

//Style
import { GlobalStyle } from './styles/global'

//Router
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes'

//Context Provider
import { UserContextProvider } from './contexts/userContext'

export function App(){
  return(
      <ThemeProvider theme={defaultTheme}>
        <UserContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
          <GlobalStyle />
        </UserContextProvider>
      </ThemeProvider>
  )
}