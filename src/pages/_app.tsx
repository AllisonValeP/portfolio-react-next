import type { AppProps } from 'next/app';
import { globalStyles } from '../styles/global';
import { Container, NaviContent, NaviList, NaviRoot, NaviTrigger,LinkStyling } from '../styles/pages/app';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

import Link from 'next/link'


globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <header>
        <h1>logo_header</h1>
        <NaviRoot>
          <NaviList>

            <NavigationMenu.Item>
              <NaviTrigger><LinkStyling href='/imagens'>Imagens</LinkStyling></NaviTrigger>
                <NaviContent>
                  <ul>
                    <li><LinkStyling href='/imagens/serie01'>Serie01</LinkStyling></li>
                    <li>Serie02</li>
                    <li>Serie03</li>
                    <li>Serie04</li>
                  </ul>
                </NaviContent>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NaviTrigger><LinkStyling href='/videos'>Videos</LinkStyling></NaviTrigger>
                <NaviContent>
                  <ul>
                    <li>Video01</li>
                    <li>Video02</li>
                    <li>Video03</li>
                    <li>Video04</li>
                  </ul>
                </NaviContent>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NaviTrigger>Editais</NaviTrigger>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NaviTrigger><LinkStyling href='/about'>Sobre</LinkStyling></NaviTrigger>
            </NavigationMenu.Item>

          </NaviList>
        </NaviRoot>
      </header>

      <Component {...pageProps} />
  </Container>
  )
}
