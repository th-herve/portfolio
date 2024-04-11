// Reactive navbar with hamburger menu on mobile and normal navbar on desktop
import { useState, useRef, useEffect } from 'react';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';

import Link from './utils/link.js';
import { FaCode, FaXmark, FaMoon } from 'react-icons/fa6';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdLightMode } from 'react-icons/md';
import GithubLink from './utils/github_link.js';

const isSystemThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

export default function Navbar() {
  const { t } = useTranslation();

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [darkTheme, setDarkTheme] = useState(isSystemThemeDark);
  const btnRef = useRef(null);

  // list of navigations links, the key is used as the hrefvalue and the value is the text displayed
  const links = {
    about: t('nav.about'),
    projects: t('nav.projects'),
    skills: t('nav.skills'),
    contact: t('nav.contact'),
  };

  const changeLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage == 'en' ? 'fr' : 'en';

    i18n.changeLanguage(newLanguage);
  };

  useEffect(() => {
    const handleLanguageChange = () => {
      btnRef.current.innerHTML = i18n.language == 'en' ? 'fr' : 'en';
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);

  const toggleTheme = () => {
    document.getElementById('root').classList.toggle('dark');
    setDarkTheme(!darkTheme);
  };

  return (
    <nav className="sticky top-0 z-[100] flex items-center justify-between bg-bg1 px-8  py-3 text-2xl text-text shadow-md dark:bg-dark_bg1 dark:text-dark_text">
      <div className="flex items-center gap-3 text-2xl font-bold ">
        {/* button that toggle the hamburger menu, display a X if open or the hamberger icon if closed, hidden on desktop */}
        <button onClick={() => setIsNavOpen(!isNavOpen)} className="text-cyan dark:text-dark_cyan md:hidden">
          {isNavOpen ? <FaXmark size="2rem" /> : <GiHamburgerMenu size="2rem" />}
        </button>
        {/* </> icon */}
        <FaCode size="2rem" className="text-cyan dark:text-dark_cyan" />
      </div>
      <h1 className="ml-3  hidden lg:block">Portfolio</h1>

      {/* Menu links, that are hidden on mobile and replace by an hamburger */}
      <ul
        id="nav-links"
        className={`${!isNavOpen ? 'hidden' : ''}
            absolute right-0 top-14 h-screen w-screen text-center text-2xl text-text backdrop-blur-xl dark:text-dark_text md:static md:flex md:h-auto md:justify-center`}
      >
        {/* Map the links object to extract the text+href */}
        {Object.keys(links).map((key) => (
          <li key={key} className="mb-12 mt-12 md:my-0">
            <button tabIndex={-1} onClick={() => setIsNavOpen(false)}>
              <Link text={links[key]} href={'#' + key.toLowerCase()} />
            </button>
          </li>
        ))}
      </ul>

      <div id="right-part" className="items flex items-center gap-4">
        <div id="language-switcher">
          <button ref={btnRef} onClick={changeLanguage} className="hover:text-cyan dark:hover:text-dark_cyan">
            en
          </button>
        </div>
        <div id="theme-switcher">
          <button onClick={toggleTheme} className="flex items-center  hover:text-cyan dark:hover:text-dark_cyan">
            {darkTheme ? <MdLightMode /> : <FaMoon />}
          </button>
        </div>
        <GithubLink href="https://github.com/th-herve/" size="40px" />
      </div>
    </nav>
  );
}
