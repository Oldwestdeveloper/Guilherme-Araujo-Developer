import React from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LanguageProvider } from '@/context/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors duration-200 selection:bg-blue-500 selection:text-white">
          {/* Navigation Bar (Fixed) */}
          <Navbar />

          {/* Main Content Sections */}
          <main className="flex flex-col w-full">
            {/* 1. HOME */}
            <Hero />

            {/* 2. ABOUT */}
            <About />

            {/* 3. PROJECTS */}
            <Projects />

            {/* 4. EXPERIENCE */}
            <Experience />

            {/* 5. EDUCATION */}
            <Education />

            {/* 6. TESTIMONIALS */}
            <Testimonials />

            {/* 7. CONTACT (EmailJS integrated) */}
            <Contact />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
