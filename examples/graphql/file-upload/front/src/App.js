import React from 'react';
import ReactDOM from 'react-dom';
import File from '../src/components/File/File';
import {createUploadLink} from 'apollo-upload-client';
import {ApolloProvider} from 'react-apollo';
import {ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import {ApolloClient} from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';

const uri ="http://localhost:4000";

const uploadLink = createUploadLink({
    uri
});

const client = new ApolloClient({
    link:uploadLink,
    cache:new InMemoryCache()
})

const App = () => {
    return(
        <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
            <div>
                <File />
            </div>
        </ApolloHooksProvider>
        </ApolloProvider>
    )
}

ReactDOM.render(<App />,document.getElementById("root"));