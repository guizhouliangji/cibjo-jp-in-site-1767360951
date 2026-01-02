"use client";

import React, { useEffect, useState, useRef } from "react";
import { Languages, Menu, X } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePathname } from "next/navigation";

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, right: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggleMenu = () => {
    console.log('[Header] Language button clicked, showLangMenu:', showLangMenu);
    alert('Language selector clicked!');
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setMenuPosition({
        top: rect.bottom + 8,
        right: window.innerWidth - rect.right
      });
      console.log('[Header] Menu position:', { top: rect.bottom + 8, right: window.innerWidth - rect.right });
    }
    setShowLangMenu(!showLangMenu);
    console.log('[Header] Menu will show:', !showLangMenu);
  };

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ja', name: '日本語' },
    { code: 'zh', name: '中文' },
  ];

  const currentLang = languages.find((l) => l.code === language);

  // Nav array - will recreate on every render when language changes
  const nav = [
    { href: '/about', label: t('nav.about') },
    { href: '/ethics-sustainability', label: t('nav.ethics') },
    { href: '/industry-standards', label: t('nav.standards') },
    { href: '/education', label: t('nav.education') },
    { href: '/news', label: t('nav.news') },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Main Header - Indian Luxury Style */}
      <header className="relative bg-gradient-to-r from-rose-600 via-orange-500 to-amber-500 shadow-2xl md:overflow-hidden overflow-visible">
        {/* Decorative Pattern Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, white 2px, transparent 2px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Border Decorations */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 via-orange-400 to-rose-600"></div>

        <div className="container mx-auto px-4 py-5 relative">
          <div className="flex items-center justify-between">
            <Link href="/" className="group">
              <div className="flex items-center gap-4">
                {/* Ornate Decorative Icon */}
                <div className="relative">
                  {/* Outer Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-orange-400 blur-xl opacity-60 scale-110"></div>

                  {/* Main Icon Container */}
                  <div className="relative w-16 h-16 bg-gradient-to-br from-yellow-300 via-amber-400 to-orange-500 rounded-full shadow-2xl transform group-hover:rotate-12 transition-all duration-500 border-4 border-yellow-200">
                    <div className="absolute inset-1 bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                      {/* Diamond Shape */}
                      <svg className="w-9 h-9 text-white drop-shadow-lg transform group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L3 9L12 22L21 9L12 2M12 4.3L18.2 9L12 17.8L5.8 9L12 4.3Z" />
                      </svg>
                    </div>
                    {/* Inner Sparkle */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/50 via-transparent to-transparent rounded-full"></div>

                    {/* Corner Accents */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-300 rounded-full border-2 border-white shadow-lg"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-orange-400 rounded-full border-2 border-white shadow-lg"></div>
                  </div>
                </div>

                {/* Royal Text Logo */}
                <div className="flex flex-col">
                  <h1 className="text-4xl font-black tracking-wide leading-none cursor-pointer
                    bg-gradient-to-r from-yellow-200 via-white to-yellow-200 bg-clip-text text-transparent
                    drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)]
                    group-hover:from-yellow-100 group-hover:via-amber-100 group-hover:to-yellow-100
                    transition-all duration-300
                    [text-shadow:_2px_2px_0_#f59e0b,_3px_3px_0_#d97706,_4px_4px_0_#b45309,_5px_5px_15px_rgba(0,0,0,0.4)]
                    border-b-2 border-yellow-300/50 pb-1"
                    style={{
                      WebkitTextStroke: '1px rgba(251, 191, 36, 0.3)',
                    }}
                  >
                    CIBJO
                  </h1>
                  <p className="text-xs font-bold tracking-[0.2em] text-yellow-100 uppercase mt-1
                    drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                    ✦ World Jewellery Confederation ✦
                  </p>
                </div>
              </div>
            </Link>

            <div className="flex items-center gap-4 relative z-[100]">
              {/* Ornate Language Selector */}
              <div className="relative z-[101]">
                <button
                  ref={buttonRef}
                  onClick={(e) => {
                    console.log('[Header] Button clicked!', e);
                    handleToggleMenu();
                  }}
                  className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-600 text-white rounded-full hover:from-purple-500 hover:via-fuchsia-400 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-2xl border-2 border-pink-300/50 font-bold cursor-pointer relative z-[102]"
                  style={{ pointerEvents: 'auto' }}
                >
                  <Languages size={20} className="drop-shadow-md" />
                  <span className="uppercase drop-shadow-md">{mounted ? currentLang?.code : ''}</span>
                  <span className="hidden sm:inline drop-shadow-md">{mounted ? currentLang?.name : ''}</span>
                </button>
              </div>

              {/* Mobile Hamburger */}
              <button
                aria-label="Open menu"
                className="sm:hidden flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full shadow-md border-2 border-amber-300/50"
                onClick={() => setShowMobileMenu(true)}
              >
                <Menu size={20} />
                <span className="font-bold">Menu</span>
              </button>

              {/* Royal Navigation - hidden in this row, shown below */}
              <nav key={language} className="hidden lg:flex gap-1 text-sm font-bold uppercase" aria-label="Primary"></nav>
            </div>
          </div>

          {/* Royal Navigation - second row, only >=sm with horizontal scroll */}
          <nav
            key={`${language}-row2`}
            className="mt-3 hidden sm:flex gap-1 text-sm font-bold uppercase overflow-x-auto whitespace-nowrap snap-x snap-mandatory -mx-2 px-2"
            aria-label="Primary"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`snap-start flex-shrink-0 px-4 py-2 rounded-full transition-all duration-300 relative ${
                  isActive(item.href)
                    ? 'bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-300 text-rose-700 shadow-lg border-2 border-yellow-400 scale-105'
                    : 'text-white hover:bg-white/20 hover:scale-105 border-2 border-transparent hover:border-yellow-300/50'
                }`}
              >
                <span className="drop-shadow-md">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Overlay */}
          {showMobileMenu && (
            <>
              <div
                className="fixed inset-0 bg-black/40 z-[11000]"
                onClick={() => setShowMobileMenu(false)}
              />
              <div className="fixed top-0 left-0 right-0 z-[11001] bg-gradient-to-b from-rose-600 via-orange-500 to-amber-400 shadow-2xl border-b-2 border-amber-300">
                <div className="p-4 flex items-center justify-between">
                  <span className="text-white font-extrabold tracking-wide">Menu</span>
                  <button
                    aria-label="Close menu"
                    onClick={() => setShowMobileMenu(false)}
                    className="px-3 py-2 rounded-full bg-white/20 text-white border border-white/40"
                  >
                    <X />
                  </button>
                </div>
                <div className="p-4 pt-0 max-h-[75vh] overflow-y-auto grid gap-3">
                  {nav.map((item) => (
                    <Link
                      key={`m-${item.href}`}
                      href={item.href}
                      onClick={() => setShowMobileMenu(false)}
                      className={`w-full px-4 py-3 rounded-xl transition-all duration-300 ${
                        isActive(item.href)
                          ? 'bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-300 text-rose-700 shadow-lg border-2 border-yellow-400'
                          : 'text-white hover:bg-white/20 border-2 border-transparent hover:border-yellow-300/50'
                      }`}
                    >
                      <span className="drop-shadow-md">{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </header>

      {/* Language Menu - Fixed Position to avoid overflow clipping */}
      {showLangMenu && (
        <>
          {/* Backdrop to close menu when clicking outside */}
          <div
            className="fixed inset-0 z-[9998]"
            onClick={() => setShowLangMenu(false)}
          ></div>

          {/* Language dropdown menu */}
          <div
            className="fixed bg-gradient-to-br from-white via-pink-50 to-purple-50 border-3 border-pink-400 rounded-2xl shadow-2xl py-2 z-[9999] min-w-[180px] backdrop-blur-sm"
            style={{
              top: `${menuPosition.top}px`,
              right: `${menuPosition.right}px`
            }}
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  console.log('Language button clicked:', lang.code);
                  console.log('Current language:', language);
                  alert(`Switching from ${language} to ${lang.code}. Page will reload.`);
                  setLanguage(lang.code as 'en' | 'ja' | 'zh');
                  setShowLangMenu(false);
                }}
                className={`w-full px-4 py-3 text-left hover:bg-gradient-to-r hover:from-pink-100 hover:to-purple-100 flex items-center gap-3 transition-all ${
                  language === lang.code ? 'bg-gradient-to-r from-fuchsia-100 to-pink-100 text-purple-700 font-bold border-l-4 border-pink-500' : 'text-gray-700'
                }`}
              >
                <span className="uppercase text-xs py-1 px-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 text-white font-bold shadow-md">{lang.code}</span>
                <span className="font-semibold">{lang.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </>
  );
}
