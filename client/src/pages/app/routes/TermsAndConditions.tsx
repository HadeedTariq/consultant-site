import {
  Scale,
  FileText,
  Briefcase,
  Calculator,
  Globe2,
  Gavel,
  ShieldAlert,
  Handshake,
  CheckCircle2,
  Building2,
  Phone,
  MapPin,
} from "lucide-react";

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

const TERMS_SECTIONS = [
  {
    number: "01",
    title: "Scope of Professional Services & Engagement Model",
    badge: "Service Charter",
    icon: Handshake,
    summary:
      "Helping Hand Consultant provides specialized professional services across the public and private sectors in Pakistan and international markets. We treat every client as a long-term partner rather than a transactional vendor.",
    clauses: [
      "Covered Practice Areas: Human Resource (HR) Services, BPO & Department Outsourcing, Statutory & Internal Audit, Forensic & Management Audit, Direct & Indirect Taxation, Transfer Pricing, Accounts & Finance IT, Business Assurance & Risk Management, Foreign Investment Advisory, and Legal & Secretarial Services.",
      "Formal Engagement Letters: Specific deliverables, statutory timelines, and fee structures for corporate clients are governed by formal written Engagement Letters or Service Level Agreements (SLAs) overseen by our senior managerial staff.",
      "Equal Standard Across Scales: Whether serving a small family-run business, a new startup, or a large listed corporation, HH Consultant applies the same standard of proficiency and care.",
    ],
  },
  {
    number: "02",
    title: "HR Recruitment, Payroll & BPO Outsourcing Terms",
    badge: "Workforce & BPO",
    icon: Briefcase,
    summary:
      "Our BPO and HR Outsourcing division streamlines departmental management, candidate screening, and recruitment for partner companies:",
    clauses: [
      "Candidate Screening & Verification: HH Consultant conducts initial interviewing, credential verification, and resume refinement to align with the hiring and company policies set by the client.",
      "Final Selection Authority: After basic verification, shortlisted profiles are forwarded to the partner organization, which retains final authority to select candidates for available positions.",
      "Job Seeker Accuracy: Candidates submitting resumes or applying through HH Consultant warrant that all academic certificates, CNIC details, and work histories provided are authentic and accurate.",
      "Labor Law Alignment: Outsourced payroll, file management, and BPO operations are structured in accordance with applicable Punjab and Federal employment and labor regulations.",
    ],
  },
  {
    number: "03",
    title: "Audit, Assurance, Taxation & Financial Advisory Obligations",
    badge: "FBR, SECP & IFRS",
    icon: Calculator,
    summary:
      "Accurate tax calculation, statutory auditing, and financial crisis advisory require transparent collaboration and complete documentation from the client:",
    clauses: [
      "Completeness of Records: For Statutory Audit, Internal Audit, Due Diligence, Forensic Audit, IFRS reporting, and Tax Management, the client is responsible for providing timely, complete, and authentic financial statements, credentials, and records.",
      "Regulatory Filings: Tax returns (Direct & Indirect) and corporate secretarial filings are prepared based on information supplied by the client in accordance with FBR (Income Tax Ordinance, 2001 / Sales Tax Act, 1990) and SECP (Companies Act, 2017) mandates.",
      "Full Proceeding Transparency: HH Consultant handles the regulatory paperwork and ensures the client is kept fully informed of all financial and tax proceedings.",
    ],
  },
  {
    number: "04",
    title: "Business Risk Management & Foreign Investment Advisory",
    badge: "Advisory Disclaimers",
    icon: Globe2,
    summary:
      "We devise practical strategies for startups, businesses in complex clusters, and investors exploring domestic or foreign markets:",
    clauses: [
      "Risk Mitigation & Alternate Pathways: Our specialists evaluate risk in terms of assets and capital and present alternate strategies so clients can adopt a more profitable, meaningful approach.",
      "Foreign Investment Guidance: While HH Consultant provides dedicated research, regulatory repercussion analysis, and zero-downtime execution plans for foreign investments, external macroeconomic, geopolitical, or sovereign regulatory shifts remain outside the firm's direct control.",
      "Prospective Financial Information: Examinations on prospective financial information are based on management assumptions and historical trends and do not constitute an absolute guarantee of future market performance.",
    ],
  },
  {
    number: "05",
    title: "Legal, Secretarial & Administrative Coordination",
    badge: "Legal & Secretarial",
    icon: Gavel,
    summary:
      "Our administration and legal wing coordinates corporate secretarial compliance, statutory documentation, and legal office liaison:",
    clauses: [
      "Paperwork & Statutory Administration: From corporate filings to coordinating with legal offices, attorneys, and corporate secretaries, engagements must be initiated formally through the administration department at Helping Hand Consultant.",
      "Confidentiality Continuity: All legal, secretarial, and corporate restructuring documents are protected under our indefinite non-disclosure pledge.",
    ],
  },
  {
    number: "06",
    title: "Governing Law, Dispute Resolution & Jurisdiction",
    badge: "Pakistani Law",
    icon: Scale,
    summary:
      "These Terms & Conditions and all professional engagements with Helping Hand Consultant are governed by the laws of the Islamic Republic of Pakistan:",
    clauses: [
      "Amicable Settlement & Arbitration: In the event of any disagreement arising out of an engagement, both parties shall first seek resolution through senior managerial consultation, failing which disputes may be referred to arbitration in Lahore under the Arbitration Act, 1940.",
      "Exclusive Jurisdiction: Subject to arbitration clauses in specific engagement letters, the courts situated in Lahore, Punjab, Pakistan shall have exclusive jurisdiction over all legal matters.",
      "Electronic Communications: Inquiries and confirmations transmitted via our official WhatsApp desk (0313-5588989) or electronic mail are recognized under the Electronic Transactions Ordinance (ETO), 2002.",
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-emerald-600 selection:text-white">
      {/* =====================================================================
          1. HERO BANNER
      ===================================================================== */}
      <SEO
        title="Terms of Professional Engagement"
        description="Standard terms and conditions for HR recruitment, audit, taxation, and BPO outsourcing engagements with Helping Hand Consultant."
        url="https://helpinghandconsultant.site/terms-conditions"
      />
      <section className="relative overflow-hidden bg-slate-950 text-white pt-16 pb-20 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
        <div className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-6xl">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs md:text-sm font-medium text-emerald-300">
              <FileText className="h-4 w-4 text-emerald-400" />
              <span>Standard Terms of Engagement & Website Use</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Terms & Conditions of{" "}
              <span className="text-emerald-400">
                Consultancy & Recruitment
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              These Terms & Conditions govern the use of the Helping Hand
              Consultant website, WhatsApp inquiry dispatch system, candidate
              recruitment pipeline, and professional engagements across HR,
              Audit, Taxation, Finance, and Legal advisory in Pakistan.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-400">
              <span className="rounded-md bg-slate-900 border border-slate-800 px-3 py-1.5">
                Governing Law: Islamic Republic of Pakistan
              </span>
              <span className="rounded-md bg-slate-900 border border-slate-800 px-3 py-1.5">
                Venue & Jurisdiction: Lahore, Punjab
              </span>
              <span className="rounded-md bg-emerald-950/80 border border-emerald-800/60 text-emerald-300 px-3 py-1.5">
                Public & Private Sector Charter
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. EXECUTIVE PARTNERSHIP PRINCIPLE STRIP
      ===================================================================== */}
      <section className="py-10 bg-emerald-950 text-white border-b border-emerald-900">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-start gap-3">
              <Building2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-white">
                  “Organization Above Individual”
                </p>
                <p className="text-emerald-100/80 text-xs mt-1 leading-relaxed">
                  Every assignment is executed through collective technical
                  expertise and senior managerial supervision.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Handshake className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-white">Partner, Never a Vendor</p>
                <p className="text-emerald-100/80 text-xs mt-1 leading-relaxed">
                  We deliver the service depth of large accounting and advisory
                  firms at responsive, affordable structures.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <ShieldAlert className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-white">
                  Statutory & Ethical Compliance
                </p>
                <p className="text-emerald-100/80 text-xs mt-1 leading-relaxed">
                  Aligned with SECP, FBR, IFRS, ICAP standards, and Pakistani
                  employment and electronic transaction laws.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. DETAILED TERMS & CONDITIONS CARDS
      ===================================================================== */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl space-y-8">
          {TERMS_SECTIONS.map((term) => {
            const IconComponent = term.icon;
            return (
              <Card
                key={term.number}
                className="border-slate-200 bg-white shadow-sm hover:shadow-md transition-all"
              >
                <CardHeader className="border-b border-slate-100 pb-5">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-emerald-400">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-emerald-50 text-emerald-800 border-emerald-200"
                      >
                        {term.badge}
                      </Badge>
                    </div>
                    <span className="text-2xl font-black text-slate-200">
                      Clause {term.number}
                    </span>
                  </div>
                  <CardTitle className="text-xl md:text-2xl font-bold text-slate-900">
                    {term.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 text-sm md:text-base pt-1 leading-relaxed">
                    {term.summary}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-6">
                  <ul className="space-y-3.5">
                    {term.clauses.map((clause, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 rounded-xl bg-slate-50/90 border border-slate-100 p-4 text-sm text-slate-700 leading-relaxed"
                      >
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-1" />
                        <span>{clause}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}

          {/* Official Administration & Legal Notice Box */}
          <Card className="border-slate-800 bg-slate-900 text-white">
            <CardHeader>
              <CardTitle className="text-xl text-white">
                Administration & Legal Department Contact
              </CardTitle>
              <CardDescription className="text-slate-400">
                To request formal engagement letters, BPO outsourcing contracts,
                or legal/secretarial clarifications, reach out to our
                administration wing:
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">
                    Registered Office Address
                  </p>
                  <p className="text-slate-400 mt-1">
                    Plot # 382, Block A, New Shalimar Housing Scheme,
                    Salamatpura, Darogawala, Lahore, Pakistan.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">
                    Direct Administration Numbers
                  </p>
                  <p className="text-slate-400 mt-1">
                    WhatsApp / Mobile: 0313-5588989 | Landline: 0423-7106680
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <ContactUsSection isStandalonePage={false} />
    </main>
  );
}
