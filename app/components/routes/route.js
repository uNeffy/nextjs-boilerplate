"use client"
import { Icon } from '@iconify/react';

import { useEffect, useState } from 'react';
import { LogoAnimation, RouteLinks } from "./scripts";

import styles from "./route.module.css";
import Link from "next/link";

const links = [
  { text: "store", url: "/store" },
  { text: "information", id: "info" },
  { text: "trustpilot", url: "/trustpilot" },
  { text: "account", url: "/account" },
  { text: "legal", id: "legal" },
];

const Route = () => {
    const [isRouteTransparent, setRouteTransparent] = useState(true);
    const [isRouteHidden, setRouteHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const threshold = 100; // Adjust this value to change the scroll threshold
    
          setRouteTransparent(scrollTop < threshold);
          setRouteHidden(scrollTop > threshold * 2);
        };

        window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
        <Link href="/"><LogoAnimation/></Link>
      <RouteLinks links={links}/>
      <div className={styles.loginButton} id={styles.textGradient}>
        <Link href="/cart"><Icon icon="ri:shopping-cart-line" width="25" height="25" /></Link>
      <Link href={styles.loginButton} id={styles.textGradient}><Icon icon="iconamoon:profile-circle-fill" width="25" height="25"/></Link></div>
    </nav>
  );
        }

export default Route;
