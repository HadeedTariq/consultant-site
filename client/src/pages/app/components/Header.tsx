import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Phone,
  MapPin,
  Facebook,
  Menu,
  X,
  ArrowUpRight,
  MessageSquare,
  Sparkles,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  COMPANY_INFO,
  MAIN_NAV_LINKS,
  LEGAL_NAV_LINKS,
  getDirectWhatsAppUrl,
} from "@/lib/navigations";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();

  // Handle scroll shadow and glass effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Automatically close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* =====================================================================
          1. TOP EXECUTIVE INFO BAR (Desktop)
      ===================================================================== */}
      <div className="hidden lg:block bg-slate-950 text-slate-300 border-b border-slate-800/80 text-xs">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl h-10 flex items-center justify-between">
          {/* Left: Tagline & Address */}
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-slate-400">
              <MapPin className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
              <span className="truncate max-w-md">{COMPANY_INFO.address}</span>
            </span>
          </div>

          {/* Right: Direct Phones & Facebook */}
          <div className="flex items-center gap-5">
            <a
              href={`tel:${COMPANY_INFO.phones.landlineTel}`}
              className="inline-flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-emerald-500" />
              <span>Landline: {COMPANY_INFO.phones.landlineDisplay}</span>
            </a>
            <span className="text-slate-700">|</span>
            <a
              href={`tel:${COMPANY_INFO.phones.mobileTel}`}
              className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-emerald-400 transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-emerald-400" />
              <span>WhatsApp: {COMPANY_INFO.phones.mobileDisplay}</span>
            </a>
            <span className="text-slate-700">|</span>
            <a
              href={COMPANY_INFO.socials.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors"
            >
              <Facebook className="h-3.5 w-3.5 text-emerald-500" />
              <span>fb.com/hhconsultant</span>
            </a>
          </div>
        </div>
      </div>

      {/* =====================================================================
          2. MAIN NAVIGATION BAR
      ===================================================================== */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-slate-950/95 backdrop-blur-md shadow-xl shadow-slate-950/20 border-b border-slate-800/80 py-3"
            : "bg-slate-950 border-b border-slate-900 py-4"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 max-w-7xl flex items-center justify-between gap-4">
          {/* Brand Logo (/logo.png from Vite public folder) */}
          <Link
            to="/"
            className="group flex items-center gap-3.5 focus:outline-none"
          >
            <div className="relative flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 group-hover:border-emerald-500/60 p-1.5 shadow-inner transition-all duration-300 group-hover:scale-105">
              {!logoError ? (
                <img
                  src={COMPANY_INFO.logoPath}
                  alt={COMPANY_INFO.fullName}
                  onError={() => setLogoError(true)}
                  className="h-full w-full object-contain"
                />
              ) : (
                <span className="text-lg font-black tracking-tighter text-emerald-400">
                  HH
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white group-hover:text-emerald-400 transition-colors leading-none">
                {COMPANY_INFO.name}
              </span>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-emerald-400 mt-1">
                {COMPANY_INFO.subName}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {[...MAIN_NAV_LINKS, ...LEGAL_NAV_LINKS].map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1.5 group ${
                    isActive
                      ? "text-emerald-400 bg-emerald-500/10 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-slate-900"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>
                    {item.badge && (
                      <Badge className="hidden xl:inline-flex bg-emerald-500/20 text-emerald-300 border-emerald-500/30 text-[10px] px-1.5 py-0 h-4">
                        {item.badge}
                      </Badge>
                    )}
                    {/* Animated Bottom Indicator */}
                    <span
                      className={`absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-emerald-400 transition-all duration-300 ${
                        isActive
                          ? "opacity-100 scale-x-100"
                          : "opacity-0 scale-x-0 group-hover:opacity-60 group-hover:scale-x-75"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={getDirectWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex"
            >
              <Button
                size="sm"
                className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-4 h-10 shadow-md shadow-emerald-500/15 transition-transform active:scale-95"
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                <span>WhatsApp Desk</span>
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-200 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* =====================================================================
          3. MOBILE NAVIGATION DRAWER
      ===================================================================== */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 text-white shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="container mx-auto px-4 py-5 space-y-5">
            {/* Primary & Legal Links */}
            <div className="space-y-1">
              <p className="px-3 text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                Navigation Menu
              </p>
              {[...MAIN_NAV_LINKS, ...LEGAL_NAV_LINKS].map((item) => {
                const IconComponent = item.icon;
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === "/"}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-semibold"
                          : "text-slate-300 hover:bg-slate-900 hover:text-white"
                      }`
                    }
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent className="h-4 w-4 text-emerald-400" />
                      <span>{item.label}</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-slate-500" />
                  </NavLink>
                );
              })}
            </div>

            {/* Mobile Contact Quick Card */}
            <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                <a
                  href={`tel:${COMPANY_INFO.phones.mobileTel}`}
                  className="font-semibold text-emerald-400 hover:underline"
                >
                  {COMPANY_INFO.phones.mobileDisplay}
                </a>
                <a
                  href={`tel:${COMPANY_INFO.phones.landlineTel}`}
                  className="text-slate-400 hover:underline"
                >
                  {COMPANY_INFO.phones.landlineDisplay}
                </a>
              </div>
            </div>

            {/* Mobile WhatsApp CTA */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <a
                href={getDirectWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full"
              >
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Chat on WhatsApp ({COMPANY_INFO.phones.mobileDisplay})
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
