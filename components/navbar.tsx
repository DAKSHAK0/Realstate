'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/properties', label: 'Properties' },
  { href: '/properties?featured=true', label: 'Featured' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        scrolled ? 'backdrop-blur-xl bg-aurum-background/80 border-b border-aurum-border/70' : 'bg-gradient-to-b from-aurum-background/90 via-aurum-background/40 to-transparent'
      }`}
    >
      <div className="container-max flex h-16 sm:h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative h-8 w-8 rounded-full bg-gradient-to-tr from-aurum-accent to-aurum-accentSoft shadow-aurum-soft" />
          <div className="flex flex-col leading-tight">
            <span className="font-display text-lg tracking-[0.28em] uppercase">
              Aurum
            </span>
            <span className="text-[10px] uppercase tracking-[0.26em] text-aurum-textMuted">
              Estates
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active =
              pathname === link.href ||
              (link.href === '/properties' && pathname.startsWith('/properties'));
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm tracking-[0.18em] uppercase text-aurum-textMuted hover:text-aurum-text transition"
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 h-[1px] w-full bg-aurum-accent"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/contact#visit" className="btn-primary text-xs tracking-[0.16em] uppercase">
            Schedule a Visit
          </Link>
        </div>

        <button
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-aurum-border bg-aurum-surface/80"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="space-y-1.5">
            <span
              className={`block h-[2px] w-5 rounded-full bg-aurum-text transition ${
                open ? 'translate-y-[5px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-[2px] w-4 rounded-full bg-aurum-text transition ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-[2px] w-5 rounded-full bg-aurum-text transition ${
                open ? '-translate-y-[5px] -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28 }}
            className="md:hidden border-t border-aurum-border/70 bg-aurum-surface/95 backdrop-blur-xl"
          >
            <div className="container-max py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-sm tracking-[0.18em] uppercase text-aurum-textMuted hover:text-aurum-text"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact#visit"
                className="btn-primary w-full justify-center text-xs tracking-[0.18em] uppercase mt-2"
              >
                Schedule a Visit
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

