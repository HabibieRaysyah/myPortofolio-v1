import './globals.css'
import SmoothScroll from '../components/SmoothScroll'

export const metadata = {
  title: 'Muhamad Habibie Raysyah Toha — Full Stack Developer',
  description: 'Portfolio of  Muhamad Habibie Raysyah Toha — Full Stack Developer based in Jakarta, Indonesia.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-bg text-white font-body antialiased">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
