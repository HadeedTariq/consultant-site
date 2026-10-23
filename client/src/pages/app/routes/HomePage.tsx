"use client";

import React from "react";
import {
  Users,
  FileSpreadsheet,
  Scale,
  Calculator,
  ShieldAlert,
  TrendingUp,
  Headphones,
  Globe2,
  Gavel,
  CheckCircle2,
  ArrowRight,
  Award,
  Sparkles,
  Lock,
  Handshake,
  Lightbulb,
  BookOpen,
  Zap,
  Briefcase,
  Building,
  UserCheck,
  FileSearch,
  Send,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ContactUsSection } from "../components/ContactUsSection";
import { SEO } from "@/components/SEO";

// ---------------------------------------------------------------------------
// Data Extracted Directly from "Helping Hand Consultant Profile Final.pdf"
// ---------------------------------------------------------------------------

const CLIENTS_ROW_1 = [
  {
    name: "McDonald's",
    sector: "Food & Hospitality",
    tag: "Active Hiring Partner",
  },
  { name: "Haier", sector: "Consumer Electronics", tag: "Enterprise Partner" },
  {
    name: "Dubai Islamic Bank",
    sector: "Islamic Banking & Finance",
    tag: "Financial Partner",
  },
  {
    name: "NETSOL Technologies",
    sector: "Global IT & Software",
    tag: "Tech Partner",
  },
  {
    name: "Daewoo Express",
    sector: "Transport & Logistics",
    tag: "Operations Partner",
  },
  {
    name: "Habib Rafiq (Pvt.) Ltd.",
    sector: "Infrastructure & Engineering",
    tag: "EPC Partner",
  },
  {
    name: "The Urban Unit",
    sector: "Public Sector Planning",
    tag: "Gov Sector",
  },
  { name: "Changhong Ruba", sector: "Home Appliances", tag: "Manufacturing" },
  {
    name: "Airlink Communication",
    sector: "Telecom & Distribution",
    tag: "Corporate Partner",
  },
  {
    name: "Model Steel",
    sector: "Steel Manufacturing (Since 1969)",
    tag: "Industrial Partner",
  },
];

const CLIENTS_ROW_2 = [
  {
    name: "Pioneer Cement Ltd.",
    sector: "Cement & Construction",
    tag: "Industrial Partner",
  },
  { name: "Haleeb Foods", sector: "FMCG & Dairy", tag: "FMCG Partner" },
  {
    name: "Zaitoon Group",
    sector: "Real Estate & Lifestyle (Est. 1987)",
    tag: "Development",
  },
  {
    name: "Unique Group of Institutions",
    sector: "Education Network Lahore",
    tag: "Academic Partner",
  },
  {
    name: "City Builders",
    sector: "Construction & Real Estate",
    tag: "Real Estate",
  },
  { name: "Union Developers", sector: "Urban Development", tag: "Real Estate" },
  {
    name: "Al-Qadir Group",
    sector: "Corporate Conglomerate",
    tag: "Enterprise",
  },
  { name: "Bari", sector: "Manufacturing & Textile", tag: "Industrial" },
  {
    name: "Black Gold Industries",
    sector: "Industrial Production",
    tag: "Manufacturing",
  },
];

const CORE_DEPARTMENTS = [
  {
    title: "Human Resource (HR) Services",
    badge: "Talent & Workforce",
    description:
      "End-to-end human capital management, candidate screening, credential verification, and departmental outsourcing.",
    icon: Users,
    accent: "text-emerald-600 bg-emerald-50 border-emerald-200",
    items: [
      "Recruitment & Executive Search Services",
      "End-to-End Payroll Management Services",
      "Employee File & Record Management",
      "Complete Human Resource Outsourcing",
    ],
  },
  {
    title: "Audit & Assurance Services",
    badge: "Compliance & Accuracy",
    description:
      "Rigorous statutory, internal, and forensic audits designed to safeguard stakeholder confidence and regulatory compliance.",
    icon: FileSpreadsheet,
    accent: "text-blue-600 bg-blue-50 border-blue-200",
    items: [
      "Statutory Audit & Internal Audit",
      "Due Diligence & Forensic / Investigative Audit",
      "Agreed-Upon Procedures & Tax Audit",
      "Examination on Prospective Financial Information",
      "IFRS Reporting & Accounting Softwares",
      "Review, Compilation & Management Audit",
    ],
  },
  {
    title: "Taxation Services",
    badge: "Direct & Indirect Tax",
    description:
      "Comprehensive tax planning, filing, and compliance strategies backed by thorough financial record examination.",
    icon: Calculator,
    accent: "text-amber-600 bg-amber-50 border-amber-200",
    items: [
      "Direct Taxation Advisory & Filing",
      "Indirect Taxation (Sales Tax / FED)",
      "Transfer Pricing Services & Documentation",
      "Corporate Tax Audit Representation",
    ],
  },
  {
    title: "Accounts, Finance, IT & Legal",
    badge: "Integrated Operations",
    description:
      "Full-spectrum financial bookkeeping, accounting software deployment, paired with corporate legal and secretarial support.",
    icon: Scale,
    accent: "text-purple-600 bg-purple-50 border-purple-200",
    items: [
      "Accounts & Finance Department Management",
      "IT & Accounting Software Implementation",
      "Corporate Legal & Secretarial Paperwork",
      "Public & Private Sector Financial Structuring",
    ],
  },
];

const SPECIALIZED_ADVISORY = [
  {
    number: "01",
    title: "Business Assurance & Risk Management",
    icon: ShieldAlert,
    description:
      "Expert evaluation of risk in terms of assets and capital. Whether your business is navigating a complex cluster or launching as a startup, we devise actionable strategies and alternate pathways for profitable, risk-aware growth.",
  },
  {
    number: "02",
    title: "Financial Advisory & Management Consultancy",
    icon: TrendingUp,
    description:
      "Our consulting executives assist organizations experiencing financial constraints or crises, delivering structured solutions to optimize and invest your corporate assets and valuables effectively.",
  },
  {
    number: "03",
    title: "BPOs & HR Outsourcing",
    icon: Headphones,
    description:
      "We outsource BPO teams and HR representatives aligned with your company policies. HH Consultant handles the entire interviewing, screening, credential verification, and resume refinement process before forwarding top candidates.",
  },
  {
    number: "04",
    title: "Tax Consulting & Management",
    icon: Calculator,
    description:
      "Accurate tax calculation and compliance require deep inspection of records, credentials, and financial statements. We manage all paperwork while keeping you fully informed at every financial stage.",
  },
  {
    number: "05",
    title: "Foreign Investment Advisory",
    icon: Globe2,
    description:
      "Eliminate the guesswork of cross-border expansion. Our dedicated specialists guide you through international market options, regulatory repercussions, and zero-downtime investment execution.",
  },
  {
    number: "06",
    title: "Legal & Secretarial Services",
    icon: Gavel,
    description:
      "From coordinating with legal offices and attorneys to managing corporate secretaries and regulatory paperwork, our administration department streamlines your statutory obligations.",
  },
];

const CORE_VALUES = [
  {
    title: "Strict Confidentiality",
    icon: Lock,
    description:
      "Governed by strict privacy rules, we pledge never to disclose client data to third parties without written authorization—continuing indefinitely even after engagement completion.",
  },
  {
    title: "Executive Commitment",
    icon: Handshake,
    description:
      "Senior managerial staff oversee every engagement to ensure accessibility, timely response, continuity, and a true partnership where our success is tied to your success.",
  },
  {
    title: "Innovative Thinking",
    icon: Lightbulb,
    description:
      "We adopt smart methodologies and modern computer technology to solve complex public and private sector challenges with practical, cost-effective solutions.",
  },
  {
    title: "Continuous Knowledge",
    icon: BookOpen,
    description:
      "Our culture of continuous learning keeps our staff abreast of the latest local and international market regulations, IFRS standards, and industry techniques.",
  },
  {
    title: "High-Degree Efficiency",
    icon: Zap,
    description:
      "Through ongoing professional development in project handling, laws, and planning models, we serve small family-run businesses and large listed corporations with equal precision.",
  },
];

export default function HomePage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-emerald-600 selection:text-white">
      <SEO
        title="Strategic HR, Audit & Tax Advisory in Lahore"
        description="Helping Hand Consultant provides proactive value addition in HR Recruitment, Statutory Audit, Taxation, and Financial Advisory across public and private sectors."
        url="https://helpinghandconsultant.site"
      />
      {/* =====================================================================
          1. HERO BANNER SECTION
      ===================================================================== */}
      <section className="relative overflow-hidden bg-slate-950 text-white pt-16 pb-24 md:py-28 lg:py-32">
        {/* Decorative Background Grid & Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white">
                Strategic{" "}
                <span className="text-emerald-400">Value Addition</span> in HR,
                Audit, Tax & Advisory.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Helping Hand Consultant partners with public and private sector
                organizations to deliver end-to-end Recruitment & BPO
                Outsourcing, Statutory Audit, Taxation, Risk Management, and
                Legal & Financial Consultancy—giving you the depth of a large
                firm with personalized commitment.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("contact-section")}
                  className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-7 h-12 shadow-lg shadow-emerald-500/20"
                >
                  Consult on WhatsApp
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("services-section")}
                  className="border-slate-700 bg-slate-900/60 text-white hover:bg-slate-800 hover:text-white h-12 px-7"
                >
                  Explore Our Services
                </Button>
              </div>

              {/* Key Trust Metrics */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800/80 max-w-xl">
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-white">
                    19+
                  </p>
                  <p className="text-xs md:text-sm text-slate-400 mt-0.5">
                    Industry-Leading Partners
                  </p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-emerald-400">
                    6+
                  </p>
                  <p className="text-xs md:text-sm text-slate-400 mt-0.5">
                    Core Practice Wings
                  </p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-white">
                    100%
                  </p>
                  <p className="text-xs md:text-sm text-slate-400 mt-0.5">
                    Verified Screening & Secrecy
                  </p>
                </div>
              </div>
            </div>

            {/* Hero Right Executive Vision Card */}
            <div className="lg:col-span-5">
              <Card className="border-slate-800 bg-slate-900/90 backdrop-blur-md text-white shadow-2xl">
                <CardHeader className="border-b border-slate-800 pb-5">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/20">
                      HH Consultant Vision
                    </Badge>
                    <Award className="h-6 w-6 text-emerald-400" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white mt-3">
                    Partner, Never Just a Vendor
                  </CardTitle>
                  <CardDescription className="text-slate-400 text-sm leading-relaxed">
                    We started on the ground level and expanded across Auditing,
                    Taxation, Management, HR, Finance IT, and Legal services for
                    both family-run enterprises and large listed corporations.
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-6 space-y-4">
                  <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-4 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Verified Recruitment & BPO Pipeline</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Full candidate interviewing, credential verification, and
                      resume refinement before shortlisting for partner
                      companies.
                    </p>
                  </div>

                  <div className="rounded-lg bg-slate-950/80 border border-slate-800 p-4 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Chartered Accountancy & Tax Precision</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Statutory audits, IFRS reporting, direct/indirect tax
                      management, and risk mitigation with zero downtime.
                    </p>
                  </div>
                </CardContent>

                <CardFooter className="border-t border-slate-800 pt-4 flex items-center justify-between text-xs text-slate-400">
                  <span>Lahore Headquarters</span>
                  <span className="text-emerald-400 font-semibold">
                    Direct Desk: 0313-5588989
                  </span>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. MODERN ANIMATED PARTNERS & JOB PLACEMENT MARQUEE SECTION
      ===================================================================== */}
      <section className="py-16 bg-slate-50 border-b border-slate-200 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl mb-10 text-center">
          <Badge
            variant="secondary"
            className="mb-3 bg-emerald-100 text-emerald-900 hover:bg-emerald-100"
          >
            Our Clients & Active Hiring Network
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
            Trusted by Pakistan’s Leading Enterprises & Recruitment Partners
          </h2>
          <p className="mt-2.5 text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            Helping Hand Consultant actively screens, verifies, and outsources
            qualified candidates, BPO teams, and advisory services for top-tier
            national and multinational organizations.
          </p>
        </div>

        {/* Row 1: Left-to-Right Infinite Marquee */}
        <div className="relative w-full overflow-hidden py-2">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-slate-50 to-transparent" />

          <div className="animate-marquee gap-5 px-4">
            {[...CLIENTS_ROW_1, ...CLIENTS_ROW_1].map((partner, idx) => (
              <div
                key={`row1-${idx}`}
                onClick={() => scrollToSection("contact-section")}
                className="group cursor-pointer flex items-center gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all min-w-[290px]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-white font-bold text-lg group-hover:bg-emerald-600 transition-colors">
                  {partner.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-slate-900 text-sm truncate">
                      {partner.name}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 truncate mt-0.5">
                    {partner.sector}
                  </p>
                  <span className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    <Briefcase className="h-3 w-3" />
                    {partner.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right-to-Left Infinite Marquee */}
        <div className="relative w-full overflow-hidden py-2 mt-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-slate-50 to-transparent" />

          <div className="animate-marquee-reverse gap-5 px-4">
            {[...CLIENTS_ROW_2, ...CLIENTS_ROW_2].map((partner, idx) => (
              <div
                key={`row2-${idx}`}
                onClick={() => scrollToSection("contact-section")}
                className="group cursor-pointer flex items-center gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all min-w-[290px]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-950 text-emerald-300 font-bold text-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  {partner.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-slate-900 text-sm truncate">
                    {partner.name}
                  </h3>
                  <p className="text-xs text-slate-500 truncate mt-0.5">
                    {partner.sector}
                  </p>
                  <span className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-medium text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                    <Building className="h-3 w-3" />
                    {partner.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. CORE SERVICE PILLARS (CARDS)
      ===================================================================== */}
      <section id="services-section" className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge
              variant="outline"
              className="mb-3 border-emerald-600/30 bg-emerald-50 text-emerald-800 px-3 py-1"
            >
              Our Service Departments
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Comprehensive Corporate & Financial Solutions
            </h2>
            <p className="mt-4 text-slate-600 text-base md:text-lg">
              Delivering specialized expertise across Human Resources, Statutory
              Auditing, Direct & Indirect Taxation, and Financial IT Systems for
              public and private sector organizations.
            </p>
          </div>

          {/* 4 Main Service Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CORE_DEPARTMENTS.map((dept, index) => {
              const IconComponent = dept.icon;
              return (
                <Card
                  key={index}
                  className="border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl border ${dept.accent}`}
                      >
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <Badge
                        variant="secondary"
                        className="text-xs font-medium"
                      >
                        {dept.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl md:text-2xl font-bold text-slate-900">
                      {dept.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 text-sm leading-relaxed pt-1">
                      {dept.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="rounded-xl bg-slate-50 p-4 border border-slate-100">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                        Included Offerings
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {dept.items.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-slate-700 font-medium"
                          >
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>

                  <CardFooter className="pt-2">
                    <Button
                      variant="ghost"
                      onClick={() => scrollToSection("contact-section")}
                      className="w-full justify-between text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50 font-semibold"
                    >
                      <span>Request Service Consultation</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. SIX SPECIALIZED PRACTICE AREAS (DETAILED PROFILE CARDS)
      ===================================================================== */}
      <section className="py-20 md:py-24 bg-slate-950 text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="max-w-2xl">
              <Badge className="mb-3 bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                Specialized Practice Wings
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                In-Depth Advisory & Outsourcing Capabilities
              </h2>
            </div>
            <p className="text-slate-400 text-sm md:text-base max-w-md">
              From startup risk assessment and crisis financial advisory to
              turnkey BPO recruitment and foreign investment guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPECIALIZED_ADVISORY.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={service.number}
                  className="bg-slate-900 border-slate-800 text-white hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-black text-emerald-500/30">
                        {service.number}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <IconComponent className="h-5 w-5" />
                      </div>
                    </div>
                    <CardTitle className="text-lg font-bold text-white">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. HOW OUR HR & BPO RECRUITMENT PIPELINE WORKS
      ===================================================================== */}
      <section className="py-20 bg-emerald-950 text-white border-t border-emerald-900">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <Badge className="mb-3 bg-emerald-400/20 text-emerald-300 border-emerald-400/30">
              Streamlined Hiring & Outsourcing Workflow
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              How We Screen, Verify & Place Top Talent
            </h2>
            <p className="mt-3 text-emerald-100/80 text-sm md:text-base">
              Whether you are an established company outsourcing a non-technical
              BPO department or a candidate applying for partner positions, our
              3-stage process guarantees quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl bg-emerald-900/40 border border-emerald-800 p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950 px-3 py-1 rounded-full">
                  Step 01
                </span>
                <UserCheck className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white pt-1">
                Policy Alignment & Screening
              </h3>
              <p className="text-sm text-emerald-100/80 leading-relaxed">
                We align with your company’s hiring policies and conduct the
                entire initial interviewing and candidate screening process
                in-house.
              </p>
            </div>

            <div className="rounded-2xl bg-emerald-900/40 border border-emerald-800 p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950 px-3 py-1 rounded-full">
                  Step 02
                </span>
                <FileSearch className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white pt-1">
                Credential Verification & Resume Refinement
              </h3>
              <p className="text-sm text-emerald-100/80 leading-relaxed">
                Candidate credentials and background records are strictly
                verified, and necessary enhancements to the candidate’s resume
                are completed by our HR specialists.
              </p>
            </div>

            <div className="rounded-2xl bg-emerald-900/40 border border-emerald-800 p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950 px-3 py-1 rounded-full">
                  Step 03
                </span>
                <Send className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white pt-1">
                Final Shortlist & Turnkey Deployment
              </h3>
              <p className="text-sm text-emerald-100/80 leading-relaxed">
                Verified profiles are forwarded to the partner organization to
                select the ideal fit—making departmental and payroll management
                effortless for the client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. OUR PHILOSOPHY & 5 CORE GUIDELINES SECTION
      ===================================================================== */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6 space-y-4">
              <Badge
                variant="outline"
                className="border-emerald-600/30 bg-emerald-50 text-emerald-800"
              >
                Our Philosophy Towards Clients
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                Big-Firm Depth at Affordable, Responsive Standards
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Our firm was founded on the premise that clients should have
                high expectations of us—and we hold even higher expectations of
                ourselves. We build trusted, long-term partnerships, offering
                the comprehensive service depth of larger accounting and
                consulting firms at lower costs.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-slate-900 text-white p-8 shadow-lg space-y-4">
                <p className="text-sm uppercase tracking-wider text-emerald-400 font-semibold">
                  Equal Commitment Across Scales
                </p>
                <blockquote className="text-lg md:text-xl font-medium leading-relaxed text-slate-100">
                  “For HH Consultant, the scale of the matter is of no
                  compromise—we skillfully deal with smaller family-run
                  businesses and large listed organizations in the exact same
                  dedicated manner.”
                </blockquote>
                <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800">
                  <span>Helping Hand Consultant Charter</span>
                  <span>Public & Private Sector Advisory</span>
                </div>
              </div>
            </div>
          </div>

          {/* 5 Core Guidelines Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {CORE_VALUES.map((val, idx) => {
              const IconComponent = val.icon;
              return (
                <Card
                  key={idx}
                  className="border-slate-200 bg-slate-50/60 hover:bg-white hover:shadow-md transition-all"
                >
                  <CardHeader className="pb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 text-white mb-3">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-base font-bold text-slate-900">
                      {val.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {val.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          7. EMBEDDED CONTACT US COMPONENT (WHATSAPP FORM)
      ===================================================================== */}
      <ContactUsSection isStandalonePage={false} />
    </main>
  );
}
