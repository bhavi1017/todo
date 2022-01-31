import '../styles/output.css'
import { Windmill } from '@windmill/react-ui'
import { Main } from "../src/components/container/Main"

function MyApp({ Component, pageProps }) {
  return (
    <Windmill dark>
      <Main>
        <Component {...pageProps} />
        </Main>
      </Windmill>)
}

export default MyApp

