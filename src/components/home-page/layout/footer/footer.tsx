import { FOOTER } from '@/consts/footer';
import { IFooter } from '@/models/layout/footer';
import styles from '@/styles/layout/footer/footer.module.css';
import Image from 'next/image';
import Link from "next/link";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      {FOOTER.map((link: IFooter) => (<Link className={styles.links} key={link.id} href={link.link}><Image src={link.icon} width='40' height='40' alt='GitHub icon'/>{link.title}</Link>))}
    </div>
  );
};
