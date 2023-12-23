'use client';
import Link from 'next/link';
import styles from '@/app/_components/header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';

export default function HeaderMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenuOutsideClick = (e: MouseEvent) => {
    if (menuRef.current && menuRef.current.contains(e.target as Node)) return;
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => closeMenuOutsideClick(e);
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <>
      <button
        aria-label="menuButton"
        ref={menuRef}
        onClick={toggleMenu}
        className={styles.button}
      >
        <FontAwesomeIcon icon={faBars} className={styles.icon} />
      </button>
      <nav className={isOpen ? styles.opened : styles.closed}>
        <ul className={styles['menu-items']}>
          <li className={styles['menu-item']}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles['menu-item']}>
            <Link href="/about">About</Link>
          </li>
          <li className={styles['menu-item']}>
            <Link href="/rss.xml">RSS</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
