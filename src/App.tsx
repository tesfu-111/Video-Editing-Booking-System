/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import type {
  PublicSiteData,
  PortfolioProject,
  ServiceItem,
} from './types/portfolio.ts';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { PortfolioGallery } from './components/PortfolioGallery.tsx';
import { ProjectDetailModal } from './components/ProjectDetailModal.tsx';
import { ShowreelModal } from './components/ShowreelModal.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { PrivacyPolicy } from './components/PrivacyPolicy.tsx';
import { NotFound } from './components/NotFound.tsx';
import { AdminLogin } from './components/admin/AdminLogin.tsx';
import { AdminDashboard } from './components/admin/AdminDashboard.tsx';
import { Loader2 } from 'lucide-react';

const defaultSiteData: PublicSiteData = {
  settings: {
    brandName: "HOPE",
    brandTagline: "Cinematic Post-Production & Storytelling",
    brandLogoText: "HOPE//EDITS",
    heroBackgroundMode: "image",
    heroImageUrl: "/images/hero_cinematic_director_1793157693542.jpg",
    heroVideoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    heroHeadline: "I Turn Raw Footage Into Powerful Stories.",
    heroSubtitle: "Video Editor | Cinematic Storytelling | Motion Graphics.",
    heroPrimaryCtaText: "Explore My Work",
    heroSecondaryCtaText: "Let's Work Together",
    showReelUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    accentColor: "#FF6A2B",
    seoTitle: "HOPE- Video Editor | Cinematic Storytelling | Motion Graphics",
    seoDescription: "Award-winning video editing, high-end color grading, sound design, and motion graphics for creators, commercial brands, and musicians.",
    footerCopyright: "© 2026 HOPE. All rights reserved. Crafted for visual impact."
  },
  about: {
    fullName: "Tesfaye kebede",
    role: "Lead Video Editor & Colorist",
    portraitUrl: "/images/tesfaye.jpg",
    bio: [
      "Hello! I'm Tesfaye Kebede, a passionate video editor dedicated to transforming raw footage into engaging visual stories.",
      "I specialize in cinematic video editing, professional color grading, motion graphics, visual effects, and creative storytelling. My passion is bringing ideas to life through powerful visuals, smooth transitions, dynamic pacing, and professional sound design.",
      "I enjoy working on different types of video projects, including promotional videos, music videos, social media content, documentaries, and cinematic productions."
    ],
    careerGoals: "Advancing boundary-pushing cinematic narratives in commercial advertising and short cinema, while helping ambitious brands dominate high-converting short-form formats.",
    experienceYears: 1,
    location: "Available Globally (Remote / Worldwide Delivery)",
    availabilityStatus: "Available for Select Projects & Monthly Retainers",
    specialties: [
      "Narrative & Commercial Pacing",
      "Advanced ACES Color Grading",
      "Dynamic Sound Design & Foley",
      "Kinetic Motion Typography",
      "High-Retention YouTube & TikTok Architecture"
    ],
    softwareSkills: [
      {
        name: "Adobe Premiere Pro",
        category: "NLE Assembly & Cut",
        proficiency: 98
      },
      {
        name: "Adobe After Effects",
        category: "VFX & Motion Graphics",
        proficiency: 92
      }
    ],
    creativeProcess: [
      {
        step: 1,
        title: "Ingest & Creative Alignment",
        subtitle: "Briefing, Footage Review & Script Breakout",
        description: "Organize raw footage, establish proxy workflows, sync multi-camera audio, and align on rhythm, target duration, and emotional arc."
      },
      {
        step: 2,
        title: "The Narrative Assembly (Rough Cut)",
        subtitle: "Story Structure & Core Pacing",
        description: "Shape the narrative foundation. Identify golden moments, cull filler, and lock the timing before introducing heavy styling."
      },
      {
        step: 3,
        title: "Sound Design & Atmosphere",
        subtitle: "Foley, Risers, Bass Drops & Dialogue Cleanup",
        description: "Audio is 50% of the cinematic experience. Layer bespoke sound effects, adjust volume automations, and clean dialogue."
      },
      {
        step: 4,
        title: "Color Grading & Motion Graphics",
        subtitle: "Look Development, ACES & Typography",
        description: "Grade footage to establish mood and tonal continuity across shots. Integrate custom motion graphics, lower-thirds, and visual flares."
      },
      {
        step: 5,
        title: "Master Delivery & Format Optimization",
        subtitle: "Multi-Aspect Ratio Export & Quality Control",
        description: "Deliver pristine master exports optimized for web along with organized project archives."
      }
    ],
    resumeUrl: ""
  },
  projects: [
    {
      id: "proj_placeholder_001",
      title: "Neon Odyssey",
      slug: "neon-odyssey-sample",
      description: "High-energy cyberpunk narrative edit showcasing dynamic whip transitions, color grade contrast, and custom foley sound design.",
      category: "Cinematic Edits",
      thumbnailUrl: "/images/color_grade_cinematic_still_1793157693927.jpg",
      videoSourceType: "mp4",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      clientName: "Aura Visuals",
      editingSoftware: [
        "Adobe Premiere Pro",
        "Adobe After Effects"
      ],
      projectDate: "2026-03",
      isPublished: true,
      isFeatured: true,
      order: 1,
      aspectRatio: "2.39:1",
      duration: "02:45",
      colorGradingBeforeUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=40&sat=-80",
      colorGradingAfterUrl: "/images/color_grade_cinematic_still_1793157693927.jpg",
      createdAt: "2026-03-01T10:00:00.000Z",
      updatedAt: "2026-03-01T10:00:00.000Z"
    },
    {
      id: "proj_placeholder_002",
      title: "Velocity Apex",
      slug: "velocity-apex-sample",
      description: "Ultra fast-paced commercial promo designed for maximum screen retention, featuring speed ramps and kinetic typography.",
      category: "Promotional Videos",
      thumbnailUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
      videoSourceType: "mp4",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      clientName: "Automotive Brand",
      editingSoftware: [
        "Adobe Premiere Pro",
        "Adobe After Effects"
      ],
      projectDate: "2026-02",
      isPublished: true,
      isFeatured: true,
      order: 2,
      aspectRatio: "16:9",
      duration: "00:60",
      createdAt: "2026-02-15T10:00:00.000Z",
      updatedAt: "2026-02-15T10:00:00.000Z"
    },
    {
      id: "proj_placeholder_003",
      title: "Echoes in the Mist",
      slug: "echoes-in-the-mist-sample",
      description: "Atmospheric music video edit featuring seamless match cuts, film stock grain emulations, and dreamy light leaks.",
      category: "Music Videos",
      thumbnailUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
      videoSourceType: "mp4",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      clientName: "Music Artist",
      editingSoftware: [
        "Adobe Premiere Pro",
        "Adobe After Effects"
      ],
      projectDate: "2026-01",
      isPublished: true,
      isFeatured: true,
      order: 3,
      aspectRatio: "16:9",
      duration: "03:30",
      createdAt: "2026-01-20T10:00:00.000Z",
      updatedAt: "2026-01-20T10:00:00.000Z"
    }
  ],
  services: [
    {
      id: "srv_001",
      title: "Short-Form Video Editing",
      slug: "short-form-video-editing",
      category: "Social Media & Growth",
      shortDescription: "High-octane vertical edits (Reels, TikTok, Shorts) crafted with snappy visual hooks, kinetic text, and retention-maximizing audio.",
      fullDescription: "Designed for high-growth brands and creators looking to scale organic reach. Pinpoint viral concepts, add subtitles, dynamic zooms, and custom sound design.",
      deliverables: [
        "9:16 Vertical Video (4K/1080p)",
        "Kinetic Dynamic Subtitles",
        "Sound Effects & Pop-ins",
        "Thumbnail Cover Frame"
      ],
      turnaroundTime: "24-48 Hours",
      idealFor: "Content Creators, Personal Brands",
      showPricing: false,
      startingPrice: "$150 / Video",
      order: 1,
      iconName: "Smartphone"
    },
    {
      id: "srv_002",
      title: "YouTube Editing",
      slug: "youtube-editing",
      category: "Long-Form & Retention",
      shortDescription: "Strategic pacing, intro retention hooks, B-roll overlays, and narrative editing that drives watch time and algorithmic performance.",
      fullDescription: "Turn raw footage into polished episodes. Audio leveling, custom graphics, chaptering, soundscape balancing, and retention graphs optimization.",
      deliverables: [
        "16:9 Master Edit (4K UHD)",
        "Chapter Markers & Cards",
        "B-Roll & Graphic Overlays",
        "Full Audio Mastering"
      ],
      turnaroundTime: "3-5 Days",
      idealFor: "Full-time YouTubers, Video Essayists",
      showPricing: false,
      startingPrice: "$400 / Video",
      order: 2,
      iconName: "PlayCircle"
    },
    {
      id: "srv_003",
      title: "Color Correction & Grading",
      slug: "color-correction-grading",
      category: "Color & Finishing",
      shortDescription: "Precision shot balancing, color gamut matching, Lumetri & ACES workflows, and cinematic look development.",
      fullDescription: "Transform flat, dull LOG footage into striking filmic imagery. Fix exposure discrepancies, skin tone isolation, and custom film grain profiles.",
      deliverables: [
        "Color Graded Master",
        "Show LUT (.cube)",
        "Before/After Stills Pack"
      ],
      turnaroundTime: "2-4 Days",
      idealFor: "Commercial DPs, Indie Filmmakers, Music Video Directors",
      showPricing: false,
      startingPrice: "$350 / Project",
      order: 3,
      iconName: "Sliders"
    }
  ],
  contactSettings: {
    email: "contact@auracuts.com",
    phone: "+1 (555) 382-9012",
    whatsapp: "https://wa.me/@ye_mariam_12",
    telegram: "https://t.me/@tesf12",
    instagram: "https://instagram.com/@ye_mariam_12",
    tiktok: "https://tiktok.com/@tesfa_edits",
    youtube: "https://youtube.com/@auracuts",
    linkedin: "https://linkedin.com/in/auracuts",
    availabilityNote: "Currently accepting project commissions and retainer partnerships."
  }
};

export default function App() {
  const [activePage, setActivePage] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#admin' || hash === '#admin-login' || hash === '#login') {
        return 'admin-login';
      }
      if (hash === '#admin-dashboard' || hash === '#dashboard') {
        return 'admin-dashboard';
      }
    }
    return 'home';
  });
  const [siteData, setSiteData] = useState<PublicSiteData>(() => {
    try {
      const cached = localStorage.getItem('auracuts_cached_site_data');
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed && parsed.settings && parsed.projects) return parsed;
      }
    } catch (e) {
      console.warn('Could not read cached site data:', e);
    }
    return defaultSiteData;
  });
  const [isLoading, setIsLoading] = useState(false);

  // Admin Auth State
  const [adminToken, setAdminToken] = useState<string | null>(() => {
    return localStorage.getItem('auracuts_admin_token');
  });
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  // Active Selected Project for Modal
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  // Showreel Modal State
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);

  // Contact Form Preselection State
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  const [preselectedProjectNote, setPreselectedProjectNote] = useState<string | undefined>(undefined);

  // Fetch Public Site Data
  const loadPublicData = async () => {
    try {
      const res = await fetch('/api/public/data');
      if (res.ok) {
        const data = await res.json();
        setSiteData(data);
        try {
          localStorage.setItem('auracuts_cached_site_data', JSON.stringify(data));
        } catch {
          // ignore quota error
        }
      }
    } catch (err) {
      console.info('Running in static / serverless mode. Using bundled portfolio data.');
    } finally {
      setIsLoading(false);
    }
  };

  // Check Admin Authentication on Boot
  const verifyAdminAuth = async (token: string | null) => {
    if (!token) {
      setIsAdminLoggedIn(false);
      return;
    }
    try {
      const res = await fetch('/api/auth/me', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        setIsAdminLoggedIn(true);
      } else {
        setIsAdminLoggedIn(false);
        localStorage.removeItem('auracuts_admin_token');
        setAdminToken(null);
      }
    } catch (e) {
      setIsAdminLoggedIn(false);
    }
  };

  useEffect(() => {
    loadPublicData();
    verifyAdminAuth(adminToken);

    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#admin' || hash === '#admin-login' || hash === '#login') {
        setActivePage('admin-login');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#admin-dashboard' || hash === '#dashboard') {
        setActivePage('admin-dashboard');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#home' || hash === '') {
        setActivePage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [adminToken]);

  const handleAdminLoginSuccess = (token: string) => {
    setAdminToken(token);
    setIsAdminLoggedIn(true);
    setActivePage('admin-dashboard');
    window.location.hash = '#admin-dashboard';
  };

  const handleAdminLogout = async () => {
    if (adminToken) {
      try {
        await fetch('/api/auth/logout', {
          method: 'POST',
          headers: { Authorization: `Bearer ${adminToken}` },
        });
      } catch (e) {
        console.error(e);
      }
    }
    localStorage.removeItem('auracuts_admin_token');
    setAdminToken(null);
    setIsAdminLoggedIn(false);
    setActivePage('home');
    if (window.location.hash.includes('admin')) {
      window.history.pushState('', document.title, window.location.pathname + window.location.search);
    }
  };

  // Navigation router handler
  const handleNavigate = (page: string) => {
    setActivePage(page);
    if (page === 'admin-login') {
      window.location.hash = '#admin';
    } else if (page === 'admin-dashboard') {
      window.location.hash = '#admin-dashboard';
    } else if (window.location.hash.includes('admin')) {
      window.history.pushState('', document.title, window.location.pathname + window.location.search);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Service Booking trigger
  const handleSelectServiceForInquiry = (service: ServiceItem) => {
    setPreselectedService(service.title);
    setPreselectedProjectNote(undefined);
    setActivePage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Project Booking trigger
  const handleInquireSimilarProject = (project: PortfolioProject) => {
    setSelectedProject(null);
    setPreselectedService(project.category);
    setPreselectedProjectNote(`${project.title} (${project.category})`);
    setActivePage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading || !siteData) {
    return (
      <div className="min-h-screen bg-[#0B0B0D] flex items-center justify-center text-white">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-8 h-8 text-[#FF6A2B] animate-spin" />
          <span className="font-mono-tag text-xs text-[#A5A5AA] tracking-widest uppercase">
            Loading Cinematic Portfolio...
          </span>
        </div>
      </div>
    );
  }

  // 1. Admin Login View
  if (activePage === 'admin-login') {
    return (
      <div className="min-h-screen bg-[#0B0B0D]">
        <div className="film-grain" />
        <AdminLogin
          onLoginSuccess={handleAdminLoginSuccess}
          onBackToSite={() => handleNavigate('home')}
        />
      </div>
    );
  }

  // 2. Admin Dashboard View
  if (activePage === 'admin-dashboard') {
    if (!isAdminLoggedIn || !adminToken) {
      return (
        <div className="min-h-screen bg-[#0B0B0D]">
          <div className="film-grain" />
          <AdminLogin
            onLoginSuccess={handleAdminLoginSuccess}
            onBackToSite={() => handleNavigate('home')}
          />
        </div>
      );
    }
    return (
      <div className="min-h-screen bg-[#0B0B0D]">
        <div className="film-grain" />
        <AdminDashboard
          token={adminToken}
          onLogout={handleAdminLogout}
          onNavigatePublic={() => handleNavigate('home')}
          onDataRefresh={loadPublicData}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0B0D] text-[#F5F5F5] flex flex-col selection:bg-[#FF6A2B] selection:text-[#0B0B0D] relative">
      {/* Film grain layer */}
      <div className="film-grain" />

      {/* Navigation Bar */}
      <Navbar
        settings={siteData.settings}
        activePage={activePage}
        onNavigate={handleNavigate}
        isAdminLoggedIn={isAdminLoggedIn}
      />

      {/* Main Pages Router */}
      <main className="flex-1">
        {/* PAGE: HOME */}
        {activePage === 'home' && (
          <>
            <Hero
              settings={siteData.settings}
              onExploreWork={() => handleNavigate('work')}
              onWorkTogether={() => handleNavigate('contact')}
              onOpenReelModal={() => setIsShowreelOpen(true)}
            />

            {/* Featured Work Snapshot */}
            <PortfolioGallery
              projects={siteData.projects}
              onSelectProject={(project) => setSelectedProject(project)}
            />

            {/* Services Snapshot */}
            <ServicesSection
              services={siteData.services}
              onSelectServiceForInquiry={handleSelectServiceForInquiry}
            />

            {/* About Teaser */}
            <AboutSection
              about={siteData.about}
              onNavigateContact={() => handleNavigate('contact')}
            />

            {/* Contact Form */}
            <ContactSection
              contactSettings={siteData.contactSettings}
              services={siteData.services}
              preselectedService={preselectedService}
              preselectedReferenceNote={preselectedProjectNote}
            />
          </>
        )}

        {/* PAGE: WORK */}
        {activePage === 'work' && (
          <div className="pt-24">
            <PortfolioGallery
              projects={siteData.projects}
              onSelectProject={(project) => setSelectedProject(project)}
            />
          </div>
        )}

        {/* PAGE: ABOUT ME */}
        {activePage === 'about' && (
          <div className="pt-24">
            <AboutSection
              about={siteData.about}
              onNavigateContact={() => handleNavigate('contact')}
            />
          </div>
        )}

        {/* PAGE: SERVICES */}
        {activePage === 'services' && (
          <div className="pt-24">
            <ServicesSection
              services={siteData.services}
              onSelectServiceForInquiry={handleSelectServiceForInquiry}
            />
          </div>
        )}

        {/* PAGE: CONTACT */}
        {activePage === 'contact' && (
          <div className="pt-24">
            <ContactSection
              contactSettings={siteData.contactSettings}
              services={siteData.services}
              preselectedService={preselectedService}
              preselectedReferenceNote={preselectedProjectNote}
            />
          </div>
        )}

        {/* PAGE: PRIVACY POLICY */}
        {activePage === 'privacy' && (
          <PrivacyPolicy onBack={() => handleNavigate('home')} />
        )}

        {/* PAGE: 404 NOT FOUND */}
        {activePage === 'not-found' && (
          <NotFound onGoHome={() => handleNavigate('home')} />
        )}
      </main>

      {/* Footer */}
      <Footer
        settings={siteData.settings}
        contactSettings={siteData.contactSettings}
        onNavigate={handleNavigate}
        isAdminLoggedIn={isAdminLoggedIn}
      />

      {/* Project Detail Modal with Video Player & Color Grading Slider */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquireSimilar={handleInquireSimilarProject}
      />

      {/* Showreel Fullscreen Modal */}
      <ShowreelModal
        url={siteData.settings.showReelUrl}
        isOpen={isShowreelOpen}
        onClose={() => setIsShowreelOpen(false)}
      />
    </div>
  );
}
