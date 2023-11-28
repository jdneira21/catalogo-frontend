import { QueryClientProvider } from '@tanstack/react-query'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/tailwind.css'
import { queryClient } from './querys'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    {/* <Router> */}
      <App />
    {/* </Router> */}
  </QueryClientProvider>
)
