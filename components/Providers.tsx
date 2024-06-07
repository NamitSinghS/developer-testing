"use client";
import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const Providers = ({children} : { children: React.ReactNode }) => {
  const client = new ApolloClient({
        uri: 'http://localhost:3000/api',
        cache: new InMemoryCache(),
   });
   return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default Providers;