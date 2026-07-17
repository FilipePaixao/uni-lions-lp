import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AplicacaoPage from './pages/AplicacaoPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/aplicacao" element={<AplicacaoPage />} />
    </Routes>
  )
}
