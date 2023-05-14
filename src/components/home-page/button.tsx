import { IpageLinkProps } from '@/models/page-links/page-links-props';
import Link from 'next/link';
import React from 'react';
import styles from '@/styles/home-page/button.module.css'

const Button = (props: IpageLinkProps) => {
  const {link} = props

  return (
    <Link href={link.path} className={styles.button}>
      {link.title}
    </Link>
  );
};

export default Button;