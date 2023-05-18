'use client'

import styles from "@/styles/layout/layout.module.css";
import { Footer } from "@/components/home-page/layout/footer/footer";
import "./globals.css";
import { Nav } from "@/components/home-page/layout/navBar/nav";
import { Providers } from "@/redux/provider";
import { store } from "@/redux/store";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.content}>
      <Nav />
      <body className={styles.children}>
        <Providers>{children}</Providers>
      </body>
      <Footer />
    </div>
  );
}
