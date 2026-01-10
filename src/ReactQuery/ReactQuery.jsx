import React from 'react'
import {QueryClientProvider,QueryClient} from '@tanstack/react-query'
import MainQuery from './MainQuery'

const ReactQuery = () => {
    const queryClient = new QueryClient()

  return <QueryClientProvider client={queryClient}>
    <MainQuery />
  </QueryClientProvider>
}

export default ReactQuery;