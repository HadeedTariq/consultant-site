import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Facebook,
  ShieldCheck,
  ArrowUpRight,
  ChevronRight,
  MessageSquare,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  COMPANY_INFO,
  MAIN_NAV_LINKS,
  LEGAL_NAV_LINKS,
  CORE_SERVICE_LINKS,
  getDirectWhatsAppUrl,
} from "@/lib/navigations";

export function Footer() {
  const [logoError, setLogoError] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/80 relative overflow-hidden">
      {/* Subtle Top Radial Accent */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-72 w-[650px] rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

      {/* =====================================================================
          1. TOP CTA STRIP
      ===================================================================== */}
      <div className="border-b border-slate-800/80">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl py-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950/60 border border-slate-800 p-6 md:p-8">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="h-4 w-4" />
                <span>Partner, Never Just a Vendor</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Need HR Recruitment, Statutory Audit, or Tax Advisory?
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Connect directly with our senior managerial desk in Lahore for
                proactive, cost-effective consultancy across public and private
                sectors.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link to="/contact-us">
                <Button
                  size="lg"
                  className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-6"
                >
                  Open Contact Form
                  <ChevronRight className="ml-1.5 h-4 w-4" />
                </Button>
              </Link>
              <a href={getDirectWhatsAppUrl()} target="_blank" rel="noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-700 bg-slate-900/70 text-white hover:bg-slate-800 hover:text-emerald-400"
                >
                  <MessageSquare className="mr-2 h-4 w-4 text-emerald-400" />
                  {COMPANY_INFO.phones.mobileDisplay}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================================
          2. MAIN 4-COLUMN FOOTER GRID
      ===================================================================== */}
      <div className="container mx-auto px-4 md:px-6 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand Identity (/logo.png) & Vision */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-flex items-center gap-3.5 group">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 group-hover:border-emerald-500/50 p-1.5 transition-all">
                {!logoError ? (
                  <img
                    src={COMPANY_INFO.logoPath}
                    alt={COMPANY_INFO.fullName}
                    onError={() => setLogoError(true)}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <span className="text-lg font-black text-emerald-400">
                    HH
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-emerald-400 transition-colors leading-none">
                  {COMPANY_INFO.name}
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-400 mt-1">
                  {COMPANY_INFO.subName}
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed">
              {COMPANY_INFO.visionShort}
            </p>

            {/* Confidentiality Badge */}
            <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-3.5 flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-400 leading-relaxed">
                <span className="font-semibold text-slate-200 block">
                  100% Indefinite Confidentiality Charter
                </span>
                Strict non-disclosure of all client financials, tax records, and
                candidate credentials.
              </div>
            </div>
          </div>

          {/* Column 2: Quick Navigation & Legal Pages */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {MAIN_NAV_LINKS.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="inline-flex items-center gap-1.5 text-slate-400 hover:text-emerald-400 hover:translate-x-1 transition-all"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-emerald-500/70" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 pt-4">
              Compliance & Legal
            </h4>
            <ul className="space-y-2.5 text-sm">
              {LEGAL_NAV_LINKS.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="inline-flex items-center gap-1.5 text-slate-400 hover:text-emerald-400 hover:translate-x-1 transition-all"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-emerald-500/70" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Service Departments */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Practice Departments
            </h4>
            <ul className="space-y-3 text-sm">
              {CORE_SERVICE_LINKS.map((service, idx) => (
                <li key={idx}>
                  <Link
                    to="/contact-us"
                    className="group flex flex-col text-slate-300 hover:text-emerald-400 transition-colors"
                  >
                    <span className="font-medium flex items-center gap-1.5">
                      <ChevronRight className="h-3.5 w-3.5 text-emerald-500 group-hover:translate-x-0.5 transition-transform" />
                      {service.label}
                    </span>
                    <span className="text-[11px] text-slate-500 pl-5">
                      {service.category}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Official Lahore Headquarters Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Official Headquarters
            </h4>

            <div className="space-y-4 text-sm">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mt-0.5">
                  <MapPin className="h-4 w-4" />
                </div>
                <p className="text-slate-400 leading-relaxed text-xs">
                  {COMPANY_INFO.address}
                </p>
              </div>

              {/* Phones */}
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mt-0.5">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="space-y-1 text-xs">
                  <p className="text-slate-400">
                    WhatsApp / Mobile:{" "}
                    <a
                      href={`tel:${COMPANY_INFO.phones.mobileTel}`}
                      className="font-semibold text-emerald-400 hover:underline"
                    >
                      {COMPANY_INFO.phones.mobileDisplay}
                    </a>
                  </p>
                  <p className="text-slate-400">
                    Landline:{" "}
                    <a
                      href={`tel:${COMPANY_INFO.phones.landlineTel}`}
                      className="font-semibold text-white hover:underline"
                    >
                      {COMPANY_INFO.phones.landlineDisplay}
                    </a>
                  </p>
                </div>
              </div>

              {/* Facebook Social */}
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Facebook className="h-4 w-4" />
                </div>
                <a
                  href={COMPANY_INFO.socials.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-emerald-400 hover:underline inline-flex items-center gap-1"
                >
                  <span>{COMPANY_INFO.socials.facebookLabel}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================================
          3. BOTTOM COPYRIGHT & COMPLIANCE BAR
      ===================================================================== */}
      <div className="border-t border-slate-800/80 bg-slate-950/90">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear}{" "}
            <span className="text-slate-300 font-semibold">
              {COMPANY_INFO.fullName}
            </span>
            . All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Badge
              variant="outline"
              className="border-slate-800 text-slate-400 text-[11px]"
            >
              Philosophy: “{COMPANY_INFO.tagline}”
            </Badge>
            <Link
              to="/privacy-policy"
              className="hover:text-emerald-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <span>•</span>
            <Link
              to="/terms-conditions"
              className="hover:text-emerald-400 transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
