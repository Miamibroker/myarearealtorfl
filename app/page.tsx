const Services = () => (
  <Section id="services">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-black tracking-tight">
        Our <GradientText>Services</GradientText>
      </h2>
      <p className="text-neutral-600 mt-2">
        Comprehensive real estate solutions across Miami and all of Florida.
      </p>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          title: "Buying a Home",
          desc: "Guidance through every step of purchasing your dream home.",
          icon: Home,
        },
        {
          title: "Selling a Home",
          desc: "Marketing strategies and expert negotiation to maximize your sale.",
          icon: Globe,
        },
        {
          title: "Investment Properties",
          desc: "Helping investors identify and acquire profitable opportunities.",
          icon: Shield,
        },
        {
          title: "Rentals",
          desc: "Connecting tenants and landlords with reliable rental solutions.",
          icon: Building2,
        },
        {
          title: "Consulting",
          desc: "Advice on market trends, financing, and real estate strategies.",
          icon: Users,
        },
        {
          title: "Property Management",
          desc: "Full-service management to protect and grow your investment.",
          icon: MapPin,
        },
      ].map((s) => (
        <div
          key={s.title}
          className="rounded-2xl border bg-white/90 p-6 shadow-sm hover:shadow-lg transition-shadow"
        >
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
