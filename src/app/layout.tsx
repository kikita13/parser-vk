import styles from '@/styles/layout/layout.module.css'
import { Footer } from '@/components/home-page/layout/footer/footer'
import './globals.css'
import { Nav } from '@/components/home-page/layout/navBar/nav'

export default function RootLayout({children,}: {children: React.ReactNode}) {

  return (
    
    <div className={styles.content}>
      <Nav/>
      <div className={styles.children}>{children}</div>
      <Footer/>
    </div>
  )
}
