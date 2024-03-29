import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTopPage() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

/*
How to use:

function App() {
  return (
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  );
}
*/
