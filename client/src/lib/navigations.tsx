import {
  Home,
  Info,
  PhoneCall,
  ShieldCheck,
  FileText,
  Users,
  FileSpreadsheet,
  Calculator,
  Scale,
  Headphones,
  Globe2,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  label: string;
  path: string;
  icon: LucideIcon;
  badge?: string;
}

export interface ServiceQuickLink {
  label: string;
  category: string;
  path: string;
  icon: LucideIcon;
}

// Official Company Details from "Helping Hand Consultant Profile Final.pdf"
export const COMPANY_INFO = {
  name: "Helping Hand",
  subName: "Consultant",
  fullName: "Helping Hand Consultant",
  tagline: "Organization Above Individual",
  visionShort:
    "Delivering proactive value addition across HR Recruitment, BPO Outsourcing, Statutory Audit, Taxation, Accounts & Legal Advisory for public and private sectors.",
  logoPath: "/logo.png", // Located in Vite's public/logo.png
  address:
    "Plot # 382, Block A, New Shalimar Housing Scheme, Salamatpura, Darogawala Lahore.",
  phones: {
    mobileDisplay: "0313-5588989",
    mobileTel: "03135588989",
    whatsappNumber: "923135588989",
    landlineDisplay: "0423-7106680",
    landlineTel: "04237106680",
  },
  socials: {
    facebookUrl: "https://www.fb.com/helpinghandconsultant",
    facebookLabel: "www.fb.com/hhconsultant",
  },
} as const;

// Primary Header & Footer Routes matching your <Routes> setup
export const MAIN_NAV_LINKS: NavItem[] = [
  {
    label: "Home",
    path: "/",
    icon: Home,
  },
  {
    label: "About Us",
    path: "/about-us",
    icon: Info,
  },
  {
    label: "Contact Us",
    path: "/contact-us",
    icon: PhoneCall,
    badge: "WhatsApp Desk",
  },
];

// Compliance & Legal Routes matching your <Routes> setup
export const LEGAL_NAV_LINKS: NavItem[] = [
  {
    label: "Privacy Policy",
    path: "/privacy-policy",
    icon: ShieldCheck,
  },
  {
    label: "Terms & Conditions",
    path: "/terms-conditions",
    icon: FileText,
  },
];

// Core Practice Wings for Footer & Mobile Menu
export const CORE_SERVICE_LINKS: ServiceQuickLink[] = [
  {
    label: "HR Recruitment & Payroll",
    category: "Talent & Workforce",
    path: "/#services-section",
    icon: Users,
  },
  {
    label: "BPO & HR Outsourcing",
    category: "Departmental Turnkey",
    path: "/#services-section",
    icon: Headphones,
  },
  {
    label: "Audit & Assurance (IFRS)",
    category: "Statutory & Forensic",
    path: "/#services-section",
    icon: FileSpreadsheet,
  },
  {
    label: "Direct & Indirect Taxation",
    category: "FBR & Transfer Pricing",
    path: "/#services-section",
    icon: Calculator,
  },
  {
    label: "Foreign Investment Advisory",
    category: "Cross-Border Strategy",
    path: "/#services-section",
    icon: Globe2,
  },
  {
    label: "Accounts, IT & Legal Services",
    category: "Corporate Secretarial",
    path: "/#services-section",
    icon: Scale,
  },
];

// Helper to open direct WhatsApp consultation
export const getDirectWhatsAppUrl = (
  customText = "Hi Helping Hand Consultant, I would like to inquire about your consultancy and recruitment services.",
) => {
  return `https://wa.me/${COMPANY_INFO.phones.whatsappNumber}?text=${encodeURIComponent(
    customText,
  )}`;
};
