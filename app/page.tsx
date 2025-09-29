"use client";

import React, { useState } from "react";
import {
  Phone, Mail, MapPin, Users, Building2, Home, Shield,
  ArrowRight, Printer, Globe, Search as SearchIcon
} from "lucide-react";

const BRAND = {
  name: "Area Co Real Estate",
  gradientFrom: "#d414a4",
  gradientTo: "#4b1ea8",
  address: "8400 NW 33rd St, Doral, FL 33122",
  phone: "786.863.3549",
  fax: "1.866.882.1210",
  email: "gabriel@myarearealtor.com",
  tagline: "Licensed to serve you with all your real estate needs throughout the state of Florida.",
  logo: "/logo.png",
};

const AGENTS = [
  { name: "Maria Aguila", phone: "305.767.8634", email: "Maria@Baguila.com" },
  { name: "Jennifer Montejo", phone: "786.301.3016", email: "Jennifer@Miamibroker.com" },
  { name: "Andre Gutierrez", phone: "305.282.8488", email: "Andres@Miamibroker.com" },
  { name: "Xiomarra De Los Santos", phone: "305.209.3549", email: "Xiomarra@Xiomarra.com" },
  { name: "Ximena Rodriguez", phone: "786.609.7111", email: "ximenart3@gmail.com" },
  { name: "Mary Medina", phone: "305.528.7264", email: "marymedinarealtor@gmail.com" },
  { name: "Gabriel Gonzalez", role: "Broker/Owner", phone: "786.863.3549", email: "Gabriel@Miamibroker.com" },
];

const Section = ({ id, children }: React.PropsWithChildren<{ id: string }>) => (
  <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">{children}</section>
);

const GradientText: React.FC<React.PropsWithChildren> = ({ children }) => (
  <span className="bg-clip-text text-transparent"
        style={{ backgroundImage: `linear-gradient(135deg, ${BRAND.gradientFrom}, ${BRAND.gradientTo})` }}>
    {children}
  </span>
);

const NavButton = ({ label, active, onClick, icon: Icon }:
  { label: string; active: boolean; onClick: () => void; icon: any }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold transition-all ${active ? "scale-100" : "opacity-80 hover:opacity-100"}`}
    style={{
      background: active ? `linear-gradient(135deg, ${BRAND.gradientFrom}, ${BRAND.gradientTo})` : "#ffffff",
      color: active ? "white" : "#2b1b3f",
      boxShadow: active ? "0 6px 20px rgba(79, 34, 140, .25)" : "0 1px 3px rgba(0,0,0,.08)",
    }}>
    <Icon size={16} />
    {label}
  </button>
);

const Header = ({ current, setCurrent }: { current: string; setCurrent: (s: string) => void }) => (
  <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-white/40">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src={BRAND.logo} alt="Logo" className="h-9 w-9 rounded-full object-contain" />
        <div className="leading-tight">
          <div className="font-black text-lg tracking-tight">{BRAND.name}</div>
          <div className="text-xs text-neutral-600">{BRAND.tagline}</div>
        </div>
      </div>
      <nav className="flex items-center gap-2">
        <NavButton label="Home" icon={Home} active={current === "home"} onClick={() => setCurrent("home")} />
        <NavButton label="MLS Search" icon={SearchIcon} active={current === "search"} onClick={() => setCurrent("search")} />
        <NavButton label="Agents" icon={Users} active={current === "agents"} onClick={() => setCurrent("agents")} />
        <NavButton label="About" icon={Building2} active={current === "about"} onClick={() => setCurrent("about")} />
        <NavButton label="Services" icon={Shield} active={current === "services"} onClick={() => setCurrent("services")} />
        <NavButton label="Contact" icon={Phone} active={current === "contact"} onClick={() => setCurrent("contact")} />
      </nav>
    </div>
  </header>
);

const Hero = () => (
  <div className="relative overflow-hidden">
    <div className="absolute inset-0 -z-10" style={{ background: `linear-gradient(135deg, ${BRAND.gradientFrom}, ${BRAND.gradientTo})` }} />
    <Section id="home">
      <div className="grid lg:grid-cols-2 gap-10 items-center text-white">
        <div>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]">
            Your <GradientText>Miami</GradientText> Experts —<br className="hidden sm:block" />
            Real Estate Across <GradientText>Florida</GradientText>
          </h1>
          <p className="mt-4 text-white/90 max-w-prose">
            We help buyers, sellers, and investors navigate South Florida and beyond with clarity and confidence.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#agents" className="inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 font-semibold bg-white text-neutral-900">
              Meet Our Agents <ArrowRight size={16} />
            </a>
            <a href="#search" className="inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 font-semibold border border-white/60">
              <SearchIcon size={16} /> Start a Search
            </a>
          </div>
        </div>

        <div className="rounded-3xl shadow-2xl p-1 bg-white/10">
          <div className="rounded-3xl p-8 bg-white text-neutral-900">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1" />
              <div>
                <div className="font-semibold">Headquarters</div>
                <div className="text-sm">{BRAND.address}</div>
                <div className="mt-2 flex flex-col gap-1 text-sm">
                  <a href={`tel:${BRAND.phone.replace(/\D/g, "")}`} className="inline-flex items-center gap-2 hover:underline"><Phone size={14} /> {BRAND.phone}</a>
                  <a href={`mailto:${BRAND.email}`} className="inline-flex items-center gap-2 hover:underline"><Mail size={14} /> {BRAND.email}</a>
                  <div className="inline-flex items-center gap-2"><Printer size={14} /> Fax: {BRAND.fax}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Section>
  </div>
);

const Photos = () => (
  <Section id="photos">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-black tracking-tight">Featured <GradientText>Properties</GradientText></h2>
      <p className="text-neutral-600 mt-2">A glimpse at some of our recent listings.</p>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {[
        "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1505692794403-34d4982f88aa?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1502005229762-cf1b2da7c52f?q=80&w=1200&auto=format&fit=crop",
      ].map((src, i) => (
        <div key={i} className="overflow-hidden rounded-2xl shadow-sm border bg-white/50">
          <img src={src} alt={`Property ${i + 1}`} className="object-cover w-full h-56 hover:scale-105 transition-transform duration-500" />
        </div>
      ))}
    </div>
  </Section>
);

const MLSSearch = () => (
  <Section id="search">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-black tracking-tight">Live MLS <GradientText>Search</GradientText></h2>
      <p className="text-neutral-600 mt-2">Browse active listings directly from our MLS feed.</p>
    </div>
    <div className="w-full h-[80vh] rounded-2xl overflow-hidden border shadow">
      <div className="p-2 bg-neutral-50 text-neutral-700 text-sm flex items-center justify-between">
        <span>If the live search doesn't display, click to open it in a new tab.</span>
        <a
          href="https://sef.mlsmatrix.com/Matrix/public/IDX.aspx?idx=725b1018"
          target="_blank"
          rel="noopener"
          className="px-3 py-1 rounded-lg text-white"
          style={{ background: `linear-gradient(135deg, ${BRAND.gradientFrom}, ${BRAND.gradientTo})` }}
        >
          Open MLS Search
        </a>
      </div>
      <iframe
        title="MLS IDX Search"
        src="https://sef.mlsmatrix.com/Matrix/public/IDX.aspx?idx=725b1018"
        width="100%"
        height="100%"
        frameBorder={0}
        className="w-full h-full"
        loading="lazy"
      />
    </div>
  </Section>
);

const AgentCard = ({ a }: { a: typeof AGENTS[number] }) => (
  <div className="group rounded-2xl border bg-white/90 p-5 shadow-sm hover:shadow-lg transition-shadow">
    <div className="flex items-start justify-between gap-3">
      <div>
        <div className="text-lg font-bold tracking-tight">{a.name}</div>
        {a.role && <div className="text-xs text-neutral-600 -mt-0.5">{a.role}</div>}
      </div>
      <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border"
            style={{ borderColor: BRAND.gradientFrom, color: "#4b1e68" }}>Agent</span>
    </div>
    <div className="mt-3 space-y-2 text-sm">
      {a.phone && <a href={`tel:${a.phone.replace(/\D/g, "")}`} className="flex items-center gap-2 hover:underline"><Phone size={14} /> {a.phone}</a>}
      {a.email && <a href={`mailto:${a.email}`} className="flex items-center gap-2 hover:underline"><Mail size={14} /> {a.email}</a>}
    </div>
  </div>
);

const Agents = () => (
  <Section id="agents">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-black tracking-tight">Our <GradientText>Agents</GradientText></h2>
      <p className="text-neutral-600 mt-2">Dedicated professionals serving Miami and all of Florida.</p>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {AGENTS.map((a) => <AgentCard key={a.name} a={a} />)}
    </div>
  </Section>
);

const Services = () => (
  <Section id="services">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-black tracking-tight">
        Our <GradientText>Services</GradientText>
      </h2>
      <p className="text-neutral-600 mt-2">Comprehensive real estate solutions across Miami and all of Florida.</p>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { title: "Buying a Home", desc: "Guidance through every step of purchasing your dream home.", icon: Home },
        { title: "Selling a Home", desc: "Marketing strategies and expert negotiation to maximize your sale.", icon: Globe },
        { title: "Investment Properties", desc: "Identify and acquire profitable opportunities.", icon: Shield },
        { title: "Rentals", desc: "Reliable rental solutions for tenants and landlords.", icon: Building2 },
        { title: "Consulting", desc: "Advice on market trends, financing, and strategies.", icon: Users },
        { title: "Property Management", desc: "Protect and grow your investment with full-service management.", icon: MapPin },
      ].map((s) => (
        <div key={s.title} className="rounded-2xl border bg-white/90 p-6 shadow-sm hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <s.icon className="text-purple-700" size={24} />
            <h3 className="font-bold text-lg">{s.title}</h3>
          </div>
          <p className="text-sm text-neutral-600">{s.desc}</p>
        </div>
      ))}
    </div>
  </Section>
);

const Footer = () => (
  <footer className="mt-10">
    <div className="py-10" style={{ background: `linear-gradient(135deg, ${BRAND.gradientFrom}, ${BRAND.gradientTo})` }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-white grid sm:grid-cols-2 gap-8">
        <div>
          <div className="font-black text-lg">{BRAND.name}</div>
          <div className="text-white/90 text-sm mt-1">{BRAND.tagline}</div>
        </div>
        <div className="text-sm">
          <div className="font-semibold">Contact</div>
          <div className="mt-1">{BRAND.address}</div>
          <div className="mt-1">Phone: <a className="underline" href={`tel:${BRAND.phone.replace(/\D/g, "")}`}>{BRAND.phone}</a></div>
          <div className="mt-1">Fax: {BRAND.fax}</div>
          <div className="mt-1">Email: <a className="underline" href={`mailto:${BRAND.email}`}>{BRAND.email}</a></div>
        </div>
      </div>
    </div>
    <div className="bg-neutral-950 text-white/70 text-xs py-3 text-center">© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</div>
  </footer>
);

export default function Page() {
  const [current, setCurrent] = useState("home");
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Header current={current} setCurrent={setCurrent} />
      {current === "home" && (<><Hero /><Photos /></>)}
      {current === "search" && <MLSSearch />}
      {current === "agents" && <Agents />}
      {current === "about" && <Section id="about"><div className="text-neutral-600">About content coming soon.</div></Section>}
      {current === "services" && <Services />}
      {current === "contact" && <Section id="contact"><div className="text-neutral-600">Contact form coming soon.</div></Section>}
      <Footer />
    </div>
  );
}
