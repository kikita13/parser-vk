import { NAV } from "@/consts/nav";
import { INav } from "@/models/layout/nav";
import styles from '@/styles/layout/nav/nav.module.css';
import Link from "next/link";

export const Nav = () => {
  return (
    <div className={styles.nav}>
      {NAV.map((link: INav) => (<Link className={styles.links} key={link.id} href={link.path}>{link.title}</Link>))}
    </div>
  );
};
