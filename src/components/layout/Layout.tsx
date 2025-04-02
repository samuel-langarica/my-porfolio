'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;

      sections.forEach((section) => {
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId || 'home');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Desktop Navigation */}
      <nav className="fixed left-0 top-0 h-full w-64 bg-[#ECF0F1] shadow-lg hidden lg:block z-50">
        <div className="p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-[#2C3E50]">Portfolio</h1>
          </div>
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={`#${item.id}`}
                  className={`block px-4 py-2 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-[#F4D03F] text-[#2C3E50]'
                      : 'text-[#95A5A6] hover:bg-[#F4D03F] hover:text-[#2C3E50]'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#ECF0F1] shadow-lg z-50 lg:hidden">
        <div className="px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-[#2C3E50]">Portfolio</h1>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#95A5A6] hover:text-[#F4D03F]"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="px-4 py-2 bg-[#ECF0F1] border-t border-[#95A5A6]">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    className={`block px-4 py-2 rounded-lg transition-colors ${
                      activeSection === item.id
                        ? 'bg-[#F4D03F] text-[#2C3E50]'
                        : 'text-[#95A5A6] hover:bg-[#F4D03F] hover:text-[#2C3E50]'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="lg:ml-64">
        {children}
      </main>
    </div>
  );
} 