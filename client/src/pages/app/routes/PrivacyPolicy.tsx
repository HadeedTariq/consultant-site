import {
  ShieldCheck,
  Lock,
  FileCheck2,
  UserCheck,
  Database,
  Scale,
  Phone,
  MapPin,
  Facebook,
  AlertCircle,
  CheckCircle2,
  EyeOff,
  Server,
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

const PRIVACY_SECTIONS = [
  {
    id: "01",
    title: "Institutional Confidentiality & Indefinite Secrecy Pledge",
    badge: "Core Charter",
    icon: Lock,
    description:
      "Under the rules of our Human Resource, Auditing, and Financial Advisory profession, Helping Hand Consultant is governed by strict privacy mandates that require us to keep all client and candidate information secure.",
    bullets: [
      "Strict Non-Disclosure: HH Consultant pledges never to disclose any information to which it has access during the performance of client engagements.",
      "Instruction-Bound Processing: We process corporate, financial, tax, and HR data strictly in accordance with the explicit instructions given by our clients.",
      "Zero Unauthorized Third-Party Sharing: Under no circumstances do we disclose client data to third parties without prior written authorization from the client—not even merely for safekeeping.",
      "Indefinite Continuity: Our duties of secrecy and non-disclosure continue to apply indefinitely, even after all service engagements or employment placements are terminated.",
    ],
  },
  {
    id: "02",
    title: "Information We Collect Across Our Practice Wings",
    badge: "Data Collection",
    icon: Database,
    description:
      "Because we serve public and private sector organizations across HR, BPO, Audit, Taxation, Accounts, and Legal services, we collect only the information necessary to execute our engagements:",
    bullets: [
      "HR, Recruitment & BPO Candidates: Full name, CNIC (for statutory verification), contact details, educational credentials, employment history, and resumes submitted for screening and placement.",
      "Audit, Assurance & Accounting Clients: Statutory financial statements, general ledgers, internal audit records, bank statements, IFRS reporting data, and prospective financial information.",
      "Taxation & Legal Clients: National Tax Numbers (NTN), FBR iris credentials (where authorized for filing), sales tax returns, transfer pricing documentation, and corporate secretarial records.",
      "Website & WhatsApp Inquiries: Name, phone number, email address, organization name, and inquiry messages submitted through our website's WhatsApp dispatch form (sent to 0313-5588989).",
    ],
  },
  {
    id: "03",
    title: "Candidate Screening, Resume Refinement & Partner Forwarding",
    badge: "HR & BPO Governance",
    icon: UserCheck,
    description:
      "For job seekers and BPO candidates applying to work with our partner organizations (including leading banking, IT, FMCG, manufacturing, and hospitality enterprises):",
    bullets: [
      "Verification & Screening: Helping Hand Consultant conducts the interviewing and screening process where academic and professional credentials are verified.",
      "Resume Enhancement: Where required to align with partner hiring policies, necessary formatting or profile refinements are made to the candidate's resume.",
      "Authorized Employer Forwarding: Only after basic verification and candidate consent are details forwarded to the hiring partner company for final selection.",
      "Payroll & File Management: For outsourced HR and BPO staff, employee files and payroll records are maintained under strict access controls.",
    ],
  },
  {
    id: "04",
    title: "Compliance with Pakistani Laws & Regulatory Frameworks",
    badge: "Pakistani Compliance",
    icon: Scale,
    description:
      "Our data protection and record-handling practices are structured to comply with applicable laws of the Islamic Republic of Pakistan:",
    bullets: [
      "Prevention of Electronic Crimes Act (PECA), 2016: Protection against unauthorized access, transmission, or misuse of confidential electronic data and information systems.",
      "Electronic Transactions Ordinance (ETO), 2002: Recognition and security of electronic documentation, digital communications, and records.",
      "SECP & FBR Statutory Compliance: Financial, corporate secretarial, and tax records are handled in accordance with the Companies Act, 2017 and Income Tax Ordinance, 2001.",
      "Constitutional Privacy Principles: Upholding fundamental privacy safeguards under Article 14 of the Constitution of Pakistan and evolving national personal data protection standards.",
    ],
  },
  {
    id: "05",
    title: "Data Security, Senior Oversight & Retention",
    badge: "Security Controls",
    icon: Server,
    description:
      "We continuously invest our resources and time in state-of-the-art computer technology and physical security to safeguard records:",
    bullets: [
      "Senior Managerial Supervision: Senior managerial staff directly oversee professional teams assigned to each client to ensure strict adherence to data security and continuity.",
      "Accounting & IT Software Security: Financial and IFRS data processed through accounting software is restricted to authorized engagement personnel only.",
      "Retention Period: Statutory audit, tax, and corporate records are retained only for the period mandated by Pakistani tax and corporate laws or as instructed in writing by the client.",
    ],
  },
  {
    id: "06",
    title: "Your Rights as a Client or Candidate",
    badge: "Data Subject Rights",
    icon: FileCheck2,
    description:
      "Clients and job applicants maintain clear rights over their personal and corporate information held by Helping Hand Consultant:",
    bullets: [
      "Right to Access & Correction: Request review or updates to your corporate records, tax files, or candidate resume.",
      "Right to Withdraw Recruitment Consent: Job applicants may request removal of their profile from active partner circulation at any time.",
      "Right to Written Authorization Control: Clients retain full authority to grant or revoke written consent regarding any third-party regulatory or partner disclosures.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-emerald-600 selection:text-white">
      <SEO
        title="Privacy Policy & Data Secrecy"
        description="Read our strict non-disclosure guarantee. We protect client financial records, HR credentials, and candidate data under Pakistani compliance laws."
        url="https://helpinghandconsultant.site/privacy-policy"
      />
      {/* =====================================================================
          1. HERO BANNER
      ===================================================================== */}
      <section className="relative overflow-hidden bg-slate-950 text-white pt-16 pb-20 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
        <div className="absolute -top-32 right-1/4 h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-6xl">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs md:text-sm font-medium text-emerald-300">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>Pakistani Regulatory & Professional Compliance</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Privacy Policy &{" "}
              <span className="text-emerald-400">
                Data Confidentiality Charter
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              At Helping Hand Consultant, we value clients of every scale and
              regard the confidence and trust placed in us as sacred. Learn how
              we protect your corporate, financial, tax, and HR recruitment data
              under Pakistani law and our indefinite non-disclosure pledge.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-400">
              <span className="rounded-md bg-slate-900 border border-slate-800 px-3 py-1.5">
                Effective & Updated: October 2026
              </span>
              <span className="rounded-md bg-slate-900 border border-slate-800 px-3 py-1.5">
                Jurisdiction: Lahore, Punjab, Pakistan
              </span>
              <span className="rounded-md bg-emerald-950/80 border border-emerald-800/60 text-emerald-300 px-3 py-1.5">
                Indefinite Non-Disclosure Standard
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. HIGHLIGHTED OFFICIAL CONFIDENTIALITY PLEDGE (FROM DOCUMENT)
      ===================================================================== */}
      <section className="py-12 bg-emerald-950 text-white border-b border-emerald-900">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4 max-w-4xl">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mt-1">
                <EyeOff className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h2 className="text-lg md:text-xl font-bold text-white">
                  Official Non-Disclosure Guarantee
                </h2>
                <p className="text-sm text-emerald-100/85 leading-relaxed">
                  “Under no circumstances do we disclose client data to third
                  parties without written authorization from the Clients, even
                  merely for safekeeping. We believe that the duties of secrecy
                  and non-disclosure continue to apply indefinitely even after
                  all service engagements are terminated.”
                </p>
              </div>
            </div>
            <Badge className="bg-emerald-500 text-slate-950 hover:bg-emerald-400 font-bold px-3.5 py-1.5 shrink-0">
              100% Secrecy Guaranteed
            </Badge>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. DETAILED PRIVACY POLICY SECTIONS
      ===================================================================== */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl space-y-8">
          {PRIVACY_SECTIONS.map((sec) => {
            const IconComponent = sec.icon;
            return (
              <Card
                key={sec.id}
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
                        {sec.badge}
                      </Badge>
                    </div>
                    <span className="text-2xl font-black text-slate-200">
                      Section {sec.id}
                    </span>
                  </div>
                  <CardTitle className="text-xl md:text-2xl font-bold text-slate-900">
                    {sec.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 text-sm md:text-base pt-1 leading-relaxed">
                    {sec.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-6">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {sec.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 rounded-xl bg-slate-50/80 border border-slate-100 p-4 text-sm text-slate-700 leading-relaxed"
                      >
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-1" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}

          {/* WhatsApp Communication Notice */}
          <Card className="border-emerald-200 bg-emerald-50/60">
            <CardContent className="p-6 flex flex-col sm:flex-row items-start gap-4">
              <AlertCircle className="h-6 w-6 text-emerald-700 shrink-0 mt-0.5" />
              <div className="space-y-1.5 text-sm text-emerald-950">
                <p className="font-bold text-base text-emerald-900">
                  Direct WhatsApp Inquiry Dispatch (0313-5588989)
                </p>
                <p className="leading-relaxed">
                  When you use our website’s Contact Us form, your input fields
                  are formatted directly on your device and transmitted via
                  WhatsApp’s end-to-end encrypted platform to our official desk
                  at <span className="font-semibold">0313-5588989</span>. We do
                  not sell, rent, or trade your phone number or inquiry details
                  with any external marketing agencies.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Official Compliance & Grievance Contact Card */}
          <Card className="border-slate-800 bg-slate-900 text-white">
            <CardHeader>
              <CardTitle className="text-xl text-white">
                Data Protection & Compliance Desk
              </CardTitle>
              <CardDescription className="text-slate-400">
                For questions regarding data privacy, confidentiality
                agreements, or candidate record removal, contact our Lahore
                headquarters:
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Office Address</p>
                  <p className="text-slate-400 mt-1">
                    Plot # 382, Block A, New Shalimar Housing Scheme,
                    Salamatpura, Darogawala, Lahore.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">
                    Official Telephones
                  </p>
                  <p className="text-slate-400 mt-1">
                    Mobile / WhatsApp: 0313-5588989
                    <br />
                    Landline: 0423-7106680
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Facebook className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Official Social</p>
                  <a
                    href="https://www.fb.com/helpinghandconsultant"
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-400 hover:underline mt-1 inline-block"
                  >
                    www.fb.com/hhconsultant
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* =====================================================================
          4. EMBEDDED CONTACT US SECTION
      ===================================================================== */}
      <ContactUsSection isStandalonePage={false} />
    </main>
  );
}
