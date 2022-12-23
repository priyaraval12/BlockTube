import { ApolloProvider } from '@apollo/client'
import client from '../client'
import '../styles/globals.css'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
    return (
        <ApolloProvider client={client}>
            <Navbar/>
            <Component {...pageProps} />
        </ApolloProvider>
    )
}

export default MyApp
