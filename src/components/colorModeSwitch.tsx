'use client';

import { faLaptop, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLayoutEffect, useState } from 'react';

import styles from '@/components/colorModeSwitch.module.css';

export function ColorModeSwitch() {
  const [colorMode, setColorMode] = useState('system');
  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const colorMode = event.target.value;
    localStorage.setItem('colorMode', colorMode);
    setColorMode(colorMode);
    setMode(colorMode);
  };

  const setMode = (colorMode: string) => {
    const isDark =
      colorMode === 'dark' ||
      (colorMode === 'system' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (isDark) {
      document.documentElement.setAttribute('color-theme', 'dark');
      return;
    } else {
      document.documentElement.setAttribute('color-theme', 'light');
      return;
    }
  };

  useLayoutEffect(() => {
    const colorMode = localStorage.getItem('colorMode');
    if (colorMode) {
      setColorMode(colorMode);
      setMode(colorMode);
    }
  }, []);

  return (
    <>
      <div className={styles['color-mode-switch']}>
        <input
          type="radio"
          name="colorMode"
          id="colorModeLight"
          value="light"
          className={styles['color-mode-switch-input']}
          checked={colorMode === 'light'}
          onChange={changeValue}
          aria-label="Light mode"
        />
        <label
          htmlFor="colorModeLight"
          className={styles['color-mode-switch-label']}
        >
          <FontAwesomeIcon icon={faSun} />
        </label>
        <input
          type="radio"
          name="colorMode"
          id="colorModeSystem"
          value="system"
          className={styles['color-mode-switch-input']}
          checked={colorMode === 'system'}
          onChange={changeValue}
          aria-label="System mode"
        />
        <label
          htmlFor="colorModeSystem"
          className={styles['color-mode-switch-label']}
        >
          <FontAwesomeIcon icon={faLaptop} />
        </label>
        <input
          type="radio"
          name="colorMode"
          id="colorModeDark"
          value="dark"
          className={styles['color-mode-switch-input']}
          checked={colorMode === 'dark'}
          onChange={changeValue}
          aria-label="Dark mode"
        />
        <label
          htmlFor="colorModeDark"
          className={styles['color-mode-switch-label']}
        >
          <FontAwesomeIcon icon={faMoon} />
        </label>
      </div>
    </>
  );
}
