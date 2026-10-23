"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  MapPin,
  Phone,
  Facebook,
  Send,
  Clock,
  ShieldCheck,
  Building2,
  MessageSquare,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/SEO";

const contactFormSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),
  phone: z.string().min(7, "Please enter a valid contact number."),
  email: z
    .string()
    .email("Please enter a valid email address.")
    .optional()
    .or(z.literal("")),
  companyName: z.string().optional(),
  serviceRequired: z.string({
    required_error: "Please select a service or inquiry category.",
  }),
  subject: z.string().min(3, "Please provide a brief subject."),
  message: z
    .string()
    .min(10, "Please provide at least 10 characters of detail."),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

interface ContactUsProps {
  isStandalonePage?: boolean;
}

export function ContactUsSection({ isStandalonePage = false }: ContactUsProps) {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      companyName: "",
      serviceRequired: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    // International WhatsApp format for 0313-5588989
    const whatsappNumber = "923135588989";

    const formattedMessage = [
      `Hi Helping Hand Consultant,`,
      ``,
      `My name is *${values.fullName}*. I am reaching out via your website regarding an inquiry.`,
      ``,
      `*--- Inquiry Details ---*`,
      `• *Name:* ${values.fullName}`,
      `• *Phone:* ${values.phone}`,
      `• *Email:* ${values.email ? values.email : "Not provided"}`,
      `• *Organization / Company:* ${
        values.companyName ? values.companyName : "Individual / Not specified"
      }`,
      `• *Service Category:* ${values.serviceRequired}`,
      `• *Subject:* ${values.subject}`,
      ``,
      `*--- Message ---*`,
      `${values.message}`,
      ``,
      `Looking forward to your response.`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      formattedMessage,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact-section"
      className={`w-full ${
        isStandalonePage
          ? "min-h-screen bg-slate-50 py-16 md:py-24"
          : "bg-slate-50/70 py-20 border-t border-slate-200"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-14">
          <Badge
            variant="outline"
            className="mb-3 border-emerald-600/30 bg-emerald-500/10 text-emerald-800 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider"
          >
            Direct Consultation & Recruitment Desk
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Get in Touch with Helping Hand Consultant
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-600">
            Whether you need HR recruitment, BPO outsourcing, statutory audit,
            tax management, or foreign investment advisory, fill out the form
            below to connect directly with our senior team on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Official Company Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="border-slate-200 bg-slate-900 text-white shadow-xl overflow-hidden">
              <CardHeader className="border-b border-slate-800 pb-6">
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium mb-1">
                  <Building2 className="h-4 w-4" />
                  <span>Official Headquarters</span>
                </div>
                <CardTitle className="text-2xl font-bold text-white">
                  Helping Hand Consultant
                </CardTitle>
                <CardDescription className="text-slate-400">
                  "Organization above Individual" — Delivering proactive,
                  high-value advisory and HR solutions across public and private
                  sectors.
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-6 space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">
                      Office Address
                    </h4>
                    <p className="mt-1 text-sm text-slate-400 leading-relaxed">
                      Plot # 382, Block A, New Shalimar Housing Scheme,
                      <br />
                      Salamatpura, Darogawala, Lahore, Pakistan.
                    </p>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">
                      Contact Numbers
                    </h4>
                    <div className="mt-1 space-y-1 text-sm text-slate-300">
                      <p className="flex items-center gap-2">
                        <span className="text-slate-400">
                          WhatsApp / Mobile:
                        </span>
                        <a
                          href="tel:03135588989"
                          className="font-semibold text-emerald-400 hover:underline"
                        >
                          0313-5588989
                        </a>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="text-slate-400">Landline:</span>
                        <a
                          href="tel:04237106680"
                          className="font-semibold text-white hover:underline"
                        >
                          0423-7106680
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social / Web */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    <Facebook className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">
                      Official Social Channel
                    </h4>
                    <a
                      href="https://www.fb.com/helpinghandconsultant"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-block text-sm text-emerald-400 hover:underline"
                    >
                      www.fb.com/hhconsultant
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">
                      Response Guarantee
                    </h4>
                    <p className="mt-1 text-sm text-slate-400">
                      Senior managerial staff oversee every client engagement
                      for timely response, accessibility, and strict
                      confidentiality.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Confidentiality Note from Document */}
            <Card className="border-emerald-200 bg-emerald-50/70 shadow-sm">
              <CardContent className="p-5 flex items-start gap-3.5">
                <ShieldCheck className="h-6 w-6 text-emerald-700 shrink-0 mt-0.5" />
                <div className="text-xs text-emerald-950 space-y-1 leading-relaxed">
                  <p className="font-semibold text-sm text-emerald-900">
                    100% Client Confidentiality Pledge
                  </p>
                  <p>
                    Under the rules of our profession, HH Consultant pledges
                    strict non-disclosure of all client data and candidate
                    records indefinitely.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: React Hook Form + Shadcn WhatsApp Dispatcher */}
          <div className="lg:col-span-7">
            <Card className="border-slate-200 shadow-lg bg-white">
              <CardHeader className="border-b border-slate-100 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl md:text-2xl text-slate-900">
                      Send an Instant WhatsApp Inquiry
                    </CardTitle>
                    <CardDescription className="mt-1 text-slate-500">
                      Complete the fields below. Clicking submit formats your
                      details into a structured message and sends it to{" "}
                      <span className="font-semibold text-slate-700">
                        0313-5588989
                      </span>
                      .
                    </CardDescription>
                  </div>
                  <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-6">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Full Name */}
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700 font-medium">
                              Full Name <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g. Ali Raza"
                                className="bg-slate-50/50"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Phone Number */}
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700 font-medium">
                              Phone / WhatsApp Number{" "}
                              <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g. 0300-1234567"
                                className="bg-slate-50/50"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Email */}
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700 font-medium">
                              Email Address (Optional)
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="you@company.com"
                                className="bg-slate-50/50"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Company Name */}
                      <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700 font-medium">
                              Company / Organization
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your Company Name (or Job Seeker)"
                                className="bg-slate-50/50"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Service Selection */}
                      <FormField
                        control={form.control}
                        name="serviceRequired"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700 font-medium">
                              Service Department{" "}
                              <span className="text-red-500">*</span>
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="bg-slate-50/50">
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="HR Recruitment & Payroll Services">
                                  HR Recruitment & Payroll Services
                                </SelectItem>
                                <SelectItem value="BPO & HR Department Outsourcing">
                                  BPO & HR Department Outsourcing
                                </SelectItem>
                                <SelectItem value="Audit & Assurance Services">
                                  Audit & Assurance Services
                                </SelectItem>
                                <SelectItem value="Direct & Indirect Taxation">
                                  Direct & Indirect Taxation
                                </SelectItem>
                                <SelectItem value="Accounts, Finance & IFRS">
                                  Accounts, Finance & IFRS Reporting
                                </SelectItem>
                                <SelectItem value="Business Assurance & Risk Management">
                                  Business Assurance & Risk Management
                                </SelectItem>
                                <SelectItem value="Foreign Investment Advisory">
                                  Foreign Investment Advisory
                                </SelectItem>
                                <SelectItem value="Legal & Secretarial Services">
                                  Legal & Secretarial Services
                                </SelectItem>
                                <SelectItem value="Job Application / Career Inquiry">
                                  Job Application / Career Inquiry
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Subject */}
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700 font-medium">
                              Inquiry Subject{" "}
                              <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g. Hiring 15 BPO Executives / Tax Audit"
                                className="bg-slate-50/50"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Message */}
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 font-medium">
                            Detailed Message / Requirements{" "}
                            <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              rows={4}
                              placeholder="Describe your business requirements, audit/tax needs, or hiring positions..."
                              className="bg-slate-50/50 resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

// Standalone Page Wrapper if you mount it on /contact-us
export default function ContactUsPage() {
  return (
    <>
      <SEO
        title="Get in Touch | Direct WhatsApp Desk"
        description="Reach out to Helping Hand Consultant for audit, tax, and HR outsourcing. Direct WhatsApp consultation at 0313-5588989. Located in Lahore, Pakistan."
        url="https://helpinghandconsultant.site/contact-us"
      />
      <ContactUsSection isStandalonePage={true} />;
    </>
  );
}
