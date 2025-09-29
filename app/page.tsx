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
            <a href="#agents" className="inline-flex items-center gap-2 rounde
