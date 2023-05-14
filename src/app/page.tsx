import { PAGE_LINKS } from '@/consts/page-links'
import styles from '../styles/home-page/page.module.css'
import { IPageLink } from '@/models/page-links/page-links'
import Button from '@/components/home-page/button'

export default function Home() {
  return (
    <div className={styles.container}>
      {PAGE_LINKS.map((link: IPageLink) => (<Button key={link.id} link={link}/>))}
    </div>
  )
}
