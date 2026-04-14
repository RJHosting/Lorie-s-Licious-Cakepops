import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PageNotFound from '@/lib/PageNotFound'
import SiteLayout from '@/components/layout/SiteLayout'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Products from '@/pages/Products'
import CustomOrders from '@/pages/CustomOrders'
import Gallery from '@/pages/Gallery'
import Contact from '@/pages/Contact'
import FAQ from '@/pages/FAQ'

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/custom-orders" element={<CustomOrders />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App
