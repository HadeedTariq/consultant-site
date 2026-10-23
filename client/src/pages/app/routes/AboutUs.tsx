import {
  Sparkles,
  Target,
  Compass,
  ShieldCheck,
  Handshake,
  Lightbulb,
  BookOpen,
  Zap,
  CheckCircle2,
  Scale,
  Users,
  Award,
  TrendingUp,
  ArrowRight,
  Lock,
  Layers,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ContactUsSection } from "../components/ContactUsSection";
import { SEO } from "@/components/SEO";

const PRACTICE_EVOLUTION = [
  "Auditing & Assurance",
  "Direct & Indirect Taxation",
  "Management Consultancy",
  "Human Resource & BPO",
  "Accounts & Finance",
  "Finance IT & Accounting Softwares",
  "Corporate Legal Services",
  "Secretarial Compliance",
];

const GUIDING_PILLARS = [
  {
    number: "01",
    title: "Strict Confidentiality",
    subtitle: "Indefinite Secrecy & Non-Disclosure",
    icon: Lock,
    badge: "Privacy Governance",
    points: [
      "Governed by strict professional privacy rules that keep all client records and HR data secure.",
      "Pledge never to disclose any information accessed during engagements to third parties without written client authorization—even merely for safekeeping.",
      "Duties of secrecy and non-disclosure continue to apply indefinitely, even after all service engagements are terminated.",
    ],
  },
  {
    number: "02",
    title: "Unwavering Commitment",
    subtitle: "Senior Managerial Oversight",
    icon: Handshake,
    badge: "Client Partnership",
    points: [
      "Senior managerial staff directly oversee professional teams assigned to each client to guarantee accessibility, timely response, consistency, and continuity.",
      "We view every client relationship as a true partnership, believing our success is a direct result of our clients' success.",
      "Continuous investment in state-of-the-art computer technology, financial acumen, and technical training.",
    ],
  },
  {
    number: "03",
    title: "Innovative Thinking",
    subtitle: "Smart Methodologies for Long-Term Growth",
    icon: Lightbulb,
    badge: "Modern Approach",
    points: [
      "Adopting smart, proactive approaches designed to generate sustainable business growth for our clients.",
      "Empowering our staff to perform work differently and solve complex operational bottlenecks.",
      "Continuously developing new methodologies that deliver measurable long-run benefits.",
    ],
  },
  {
    number: "04",
    title: "Continuous Knowledge",
    subtitle: "Local & International Market Mastery",
    icon: BookOpen,
    badge: "Learning Culture",
    points: [
      "Fostered a deep organizational culture of continuous learning and technical advancement.",
      "Professional staff stays abreast of the latest regulatory changes, IFRS standards, and work techniques.",
      "Bridging both local Pakistani regulations and international market frameworks for incomparable client benefits.",
    ],
  },
  {
    number: "05",
    title: "High-Degree Efficiency",
    subtitle: "Productivity & Regulatory Precision",
    icon: Zap,
    badge: "Operational Excellence",
    points: [
      "Driven by high productivity standards across all professional staff and consulting wings.",
      "Regular Continuous Professional Development (CPD) in work management and project handling techniques.",
      "Mastery of evolving laws, statutory regulations, planning methods, and modern analytical models.",
    ],
  },
];

const DIFFERENTIATORS = [
  {
    metric: "Partner vs. Vendor",
    title: "A Relationship Built on Ownership",
    description:
      "We never treat an engagement as a transaction. We act as an independent, knowledgeable advisor that relates to your unique challenges across public and private sectors.",
    icon: Users,
  },
  {
    metric: "Big-Firm Depth",
    title: "Enterprise Quality at Lower Costs",
    description:
      "We deliver the comprehensive technical depth of larger chartered accountancy and advisory firms while maintaining an agile, affordable cost structure.",
    icon: Scale,
  },
  {
    metric: "No Scale Compromise",
    title: "Family Businesses to Listed Giants",
    description:
      "For HH Consultant, the scale of the matter is of no compromise—we skillfully serve small family-run businesses and large listed corporations in the exact same manner.",
    icon: Layers,
  },
  {
    metric: "Zero Downtime",
    title: "Practically Implementable Solutions",
    description:
      "Whether managing risk in a business cluster, screening BPO candidates, or advising on foreign investment, we present downright practical solutions with no downtime.",
    icon: TrendingUp,
  },
];

export default function AboutUsPage() {
  const scrollToContact = () => {
    const el = document.getElementById("contact-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-emerald-600 selection:text-white">
      {/* =====================================================================
          1. ABOUT US HERO BANNER
      ===================================================================== */}
      <SEO
        title="Our Story & Philosophy"
        description="Built on the ethos of 'Organization Above Individual', we deliver big-firm technical depth in accountancy, HR, and corporate advisory at affordable scales."
        url="https://helpinghandconsultant.site/about-us"
      />
      <section className="relative overflow-hidden bg-slate-950 text-white pt-16 pb-24 md:py-28">
        {/* Background Pattern & Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[700px] rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-7xl">
          <div className="mx-auto max-w-4xl text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs md:text-sm font-medium text-emerald-300">
              <Sparkles className="h-4 w-4 text-emerald-400" />
              <span>About Helping Hand Consultant</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white">
              Driven by{" "}
              <span className="text-emerald-400">
                “Organization Above Individual”
              </span>{" "}
              & Value Addition.
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Started from the ground level and built on the highest standards
              of proficiency and finance, Helping Hand Consultant delivers
              integrated, practically implementable solutions across HR, Audit,
              Taxation, Advisory, and Legal frameworks.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-8 h-12 shadow-lg shadow-emerald-500/20"
              >
                Partner With Our Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Highlight Strip */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Core Ethos
              </p>
              <p className="mt-1 text-lg font-bold text-white">
                Organization Above Individual
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Differentiating our professional staff from the crowd.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Primary Objective
              </p>
              <p className="mt-1 text-lg font-bold text-white">
                True Value Addition
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Providing the necessary growth impetus for every client.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Sector Coverage
              </p>
              <p className="mt-1 text-lg font-bold text-white">
                Public & Private Sectors
              </p>
              <p className="mt-1 text-xs text-slate-400">
                From family-run startups to large listed enterprises.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Service Model
              </p>
              <p className="mt-1 text-lg font-bold text-white">
                Partner, Not a Vendor
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Big-firm service depth at responsive, affordable costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. OUR STORY & GROUND-LEVEL EVOLUTION SECTION
      ===================================================================== */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <Badge
                variant="outline"
                className="border-emerald-600/30 bg-emerald-50 text-emerald-800 px-3 py-1"
              >
                Who We Are & Our Origin
              </Badge>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                From Ground-Level Beginnings to a Multi-Disciplinary Advisory
                Powerhouse
              </h2>

              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                Helping Hand Consultant started on the ground level and
                systematically expanded to provide exquisite, integrated
                services across{" "}
                <span className="font-semibold text-slate-900">
                  Auditing, Taxation, Management, Human Resource, Accounts, and
                  Finance IT & Accounting
                </span>
                , paired seamlessly with{" "}
                <span className="font-semibold text-slate-900">
                  Legal and Secretarial services
                </span>
                .
              </p>

              <p className="text-slate-600 leading-relaxed">
                Built on the highest standards of proficiency and financial
                acumen, our aim is to establish a sense of integrated solutions
                that are both practically implementable and diversified in
                nature. Our perspective is that a knowledgeable, independent
                advisor must relate directly to the unique problems of clients
                and their interrelationships within both the{" "}
                <span className="font-semibold text-slate-900">
                  public and private sectors
                </span>
                .
              </p>

              {/* 8 Expanded Departments Grid */}
              <div className="pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Our Integrated Practice Departments
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PRACTICE_EVOLUTION.map((dept, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 rounded-lg border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-sm font-medium text-slate-800"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>{dept}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Vision & Mission Executive Cards */}
            <div className="lg:col-span-5 space-y-6">
              <Card className="border-slate-200 bg-slate-900 text-white shadow-xl">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      <Target className="h-6 w-6" />
                    </div>
                    <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                      Our Official Vision
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold text-white pt-3">
                    Technical Expertise & Collective Ethos
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-slate-300 text-sm leading-relaxed">
                  <p>
                    “To plan and accomplish assignments and projects through the
                    experience and technical expertise of the firm&apos;s
                    professional staff.”
                  </p>
                  <p>
                    Our employees have always believed in the philosophy of{" "}
                    <span className="text-emerald-400 font-semibold">
                      &ldquo;Organization above Individual&rdquo;
                    </span>{" "}
                    which has always differentiated our staff from the crowd,
                    making them a class apart. We believe in providing{" "}
                    <span className="text-emerald-400 font-semibold">
                      &ldquo;Value addition&rdquo;
                    </span>{" "}
                    and thereby providing the necessary growth impetus for our
                    clients.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 bg-emerald-50/80 shadow-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 text-white">
                      <Compass className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-bold text-emerald-950">
                        Our Expectation Charter
                      </CardTitle>
                      <CardDescription className="text-emerald-800 text-xs">
                        Setting a Higher Standard Every Day
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-emerald-950/90 leading-relaxed">
                  Our firm was started on the premise that our clients should
                  have high expectations of us—and{" "}
                  <span className="font-semibold">
                    we have even higher expectations of ourselves
                  </span>
                  . We thrive on being different so we can set a higher
                  benchmark for responsiveness and long-term reliability.
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. WHAT SETS US APART (4 DIFFERENTIATORS)
      ===================================================================== */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <Badge
              variant="secondary"
              className="mb-3 bg-emerald-100 text-emerald-900"
            >
              Our Philosophy Towards Clients
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Why Organizations Choose Helping Hand Consultant
            </h2>
            <p className="mt-3 text-slate-600 text-base">
              We combine proactive, quality advice at an affordable price with a
              responsive service model tailored to your exact operational scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DIFFERENTIATORS.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <Card
                  key={idx}
                  className="border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-emerald-500/40 transition-all"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-emerald-400">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                        {item.metric}
                      </span>
                    </div>
                    <CardTitle className="text-lg font-bold text-slate-900">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. THE 5 FORMULATED GUIDELINES (DEEP DIVE FROM DOCUMENT)
      ===================================================================== */}
      <section className="py-20 md:py-24 bg-slate-950 text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-3 bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
              Our Formulated Guidelines
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Five Pillars That Govern Every Engagement
            </h2>
            <p className="mt-4 text-slate-400 text-base md:text-lg">
              We have formulated strict institutional guidelines across
              Confidentiality, Commitment, Innovative Thinking, Knowledge, and
              Efficiency to protect and grow our clients&apos; interests.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {GUIDING_PILLARS.map((pillar, index) => {
              const IconComponent = pillar.icon;
              // Make the first two pillars (Confidentiality & Commitment) span 6 columns each, and the bottom 3 span 4 columns each
              const colSpan = index < 2 ? "lg:col-span-6" : "lg:col-span-4";

              return (
                <Card
                  key={pillar.number}
                  className={`${colSpan} bg-slate-900 border-slate-800 text-white hover:border-emerald-500/50 transition-all flex flex-col justify-between`}
                >
                  <CardHeader className="border-b border-slate-800/80 pb-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <Badge
                          variant="outline"
                          className="border-slate-700 text-slate-300 text-xs"
                        >
                          {pillar.badge}
                        </Badge>
                      </div>
                      <span className="text-2xl font-black text-emerald-500/30">
                        {pillar.number}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-bold text-white">
                      {pillar.title}
                    </CardTitle>
                    <CardDescription className="text-emerald-400 text-xs font-medium">
                      {pillar.subtitle}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-5">
                    <ul className="space-y-3">
                      {pillar.points.map((pt, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed"
                        >
                          <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0 mt-1" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. PUBLIC & PRIVATE SECTOR COMMITMENT BANNER
      ===================================================================== */}
      <section className="py-16 bg-emerald-950 text-white border-t border-emerald-900">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <Award className="h-4 w-4" />
                <span>Chartered Accountancy, HR & Corporate Advisory</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Ready to Experience Proactive, High-Value Consultancy?
              </h3>
              <p className="text-emerald-100/80 text-sm md:text-base max-w-2xl leading-relaxed">
                From Lahore to Karachi and across international markets, our
                senior managerial staff is ready to provide personal attention,
                technical expertise, and tailored workforce or financial
                solutions.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-white text-emerald-950 hover:bg-emerald-100 font-bold px-7 h-12 shadow-md"
              >
                Message Us on WhatsApp
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ContactUsSection isStandalonePage={false} />
    </main>
  );
}
