import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  Code2,
  FileText,
  GraduationCap,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import logoByTalent from "../assets/logobytalent.jpeg";

function WhatsAppIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.78 11.78 0 0 0 12.07 0C5.55 0 .24 5.31.24 11.83c0 2.08.54 4.11 1.57 5.9L.14 24l6.42-1.64a11.82 11.82 0 0 0 5.5 1.4h.01c6.52 0 11.83-5.31 11.83-11.83 0-3.16-1.23-6.13-3.38-8.45ZM12.07 21.8h-.01a9.84 9.84 0 0 1-5.02-1.37l-.36-.21-3.81.97 1.02-3.71-.23-.38a9.82 9.82 0 0 1-1.5-5.27c0-5.44 4.43-9.87 9.88-9.87 2.63 0 5.1 1.03 6.96 2.9a9.83 9.83 0 0 1 2.89 6.97c0 5.44-4.43 9.87-9.87 9.87Zm5.41-7.39c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.79-1.68-2.09-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.5 1.7.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

function Home() {
  /* ============================================================
      WHATSAPP
  ============================================================ */
  const whatsappLink = "https://wa.me/6281399844327";

  /* ============================================================
      TOOLS MARQUEE
  ============================================================ */
  const tools = [
    "SPSS",
    "Jamovi",
    "SmartPLS",
    "Microsoft Excel",
    "Mendeley",
    "Microsoft Word",
    "PowerPoint",
    "Canva",
    "Python",
    "R Studio",
    "LaTeX",
    "Ubuntu",
  ];

  /* ============================================================
      HERO ORBIT
  ============================================================ */
  const orbitTools = [
    {
      name: "SPSS",
      image: "/assets/tools/spss.jpg",
      angle: 0,
      style: "red",
    },
    {
      name: "Linux",
      image: "/assets/tools/jamovi.png",
      angle: 60,
      style: "blue",
    },
    {
      name: "Mendeley",
      image: "/assets/tools/smartpls.png",
      angle: 120,
      style: "indigo",
    },
    {
      name: "MySQL",
      image: "/assets/tools/excel.png",
      angle: 180,
      style: "green",
    },
    {
      name: "Oracle",
      image: "/assets/tools/python.png",
      angle: 240,
      style: "yellow",
    },
    {
      name: "SmartPLS",
      image: "/assets/tools/rstudio.jpg",
      angle: 300,
      style: "cyan",
    },
  ];

  /* ============================================================
      SERVICES
  ============================================================ */
  const services = [
    {
      number: "01",
      icon: GraduationCap,
      title: "Skripsi & Riset",
      description:
        "Pendampingan penyusunan proposal, penelitian, analisis, jurnal, hingga persiapan sidang.",
      tags: ["Proposal", "Skripsi", "Jurnal"],
    },
    {
      number: "02",
      icon: BarChart3,
      title: "Pengolahan & Analisis Data",
      description:
        "Pengolahan data kuantitatif maupun kualitatif menggunakan software yang sesuai dengan kebutuhan penelitian.",
      tags: ["SPSS", "Jamovi", "SmartPLS"],
    },
    {
      number: "03",
      icon: FileText,
      title: "Tugas Perkuliahan",
      description:
        "Makalah, resume, studi kasus, presentasi, telaah literatur, dan berbagai kebutuhan tugas perkuliahan.",
      tags: ["Makalah", "PPT", "Literatur"],
    },
    {
      number: "04",
      icon: Code2,
      title: "Solusi Digital",
      description:
        "Pengembangan website, aplikasi, database, UI/UX, dan kebutuhan sistem digital lainnya.",
      tags: ["Website", "Database", "UI/UX"],
    },
  ];

  /* ============================================================
      WORKFLOW
  ============================================================ */
  const workflow = [
    {
      number: "01",
      title: "Ceritakan kebutuhan",
      text: "Sampaikan tugas, penelitian, project, deadline, atau kendala yang sedang kamu hadapi.",
    },
    {
      number: "02",
      title: "Kami pelajari",
      text: "Kebutuhanmu kami review untuk menentukan layanan dan estimasi yang paling sesuai.",
    },
    {
      number: "03",
      title: "Konfirmasi",
      text: "Detail pekerjaan, ruang lingkup, dan estimasi dikonfirmasi sebelum project dimulai.",
    },
    {
      number: "04",
      title: "Project berjalan",
      text: "Pengerjaan dilakukan sesuai kesepakatan dengan komunikasi selama proses berlangsung.",
    },
  ];

  /* ============================================================
      BENEFITS
  ============================================================ */
  const benefits = [
    {
      icon: MessageCircle,
      title: "Komunikasi jelas",
      text: "Kebutuhan dibahas terlebih dahulu agar tidak terjadi salah pemahaman.",
    },
    {
      icon: ShieldCheck,
      title: "Proses terarah",
      text: "Ada alur yang jelas mulai dari konsultasi sampai project selesai.",
    },
    {
      icon: Sparkles,
      title: "Beragam kebutuhan",
      text: "Akademik, penelitian, data, desain, sampai kebutuhan digital.",
    },
    {
      icon: Star,
      title: "Sesuai kebutuhan",
      text: "Layanan disesuaikan dengan kebutuhan dan tujuan masing-masing project.",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f8fafc] text-slate-950 font-sans">
      {/* NAVBAR */}
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section className="relative isolate overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-white via-[#f8fafc] to-[#f1f5f9]">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="bytalent-grid absolute inset-0 opacity-60" />
            <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-blue-400/15 blur-[140px]" />
            <div className="absolute -right-40 -top-20 h-[650px] w-[650px] rounded-full bg-indigo-400/15 blur-[150px]" />
            <div className="absolute bottom-[-200px] left-[35%] h-[500px] w-[500px] rounded-full bg-blue-300/20 blur-[130px]" />
          </div>

          <div className="mx-auto max-w-7xl px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:px-10 lg:pb-24 lg:pt-24">
            <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              {/* HERO LEFT */}
              <div className="relative z-20">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-0.5 w-8 rounded-full bg-blue-600" />
                  <span className="text-[12px] font-bold uppercase tracking-[0.25em] text-blue-600">
                    ByTalent Solution
                  </span>
                </div>

                <h1 className="max-w-3xl text-[3.2rem] font-black leading-[1] tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-[4.85rem]">
                  Ada yang <br />
                  sedang <br />
                  kamu{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                    kerjakan?
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                  Ceritakan kebutuhanmu. Kami bantu menangani tugas akademik,
                  penelitian, analisis data, hingga kebutuhan digital dalam satu
                  tempat yang terintegrasi.
                </p>

                <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-slate-950 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-slate-950/15 transition duration-300 hover:-translate-y-1 hover:bg-[#25D366] hover:shadow-[#25D366]/25"
                  >
                    <WhatsAppIcon size={18} />
                    WhatsApp Kami
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition duration-300 group-hover:translate-x-1">
                      <ArrowUpRight size={14} />
                    </span>
                  </a>

                  <Link
                    to="/layanan"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200/90 bg-white/90 px-6 py-4 text-sm font-bold text-slate-700 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:text-blue-600 hover:shadow-md"
                  >
                    Lihat Layanan
                    <ArrowUpRight size={16} />
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    Konsultasi terlebih dahulu
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    Estimasi transparan
                  </div>
                </div>
              </div>

              {/* HERO RIGHT / ORBIT DESIGN */}
              <div className="relative mx-auto h-[480px] w-full max-w-[540px] sm:h-[540px]">
                <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-400/20 to-indigo-400/20 blur-[90px]" />

                {/* Orbit Rings */}
                <div className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200/80" />

                <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-200/70 shadow-[0_0_40px_rgba(59,130,246,0.06)]" />

                <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full border border-dashed border-indigo-200/60" />

                {/* ROTATING ORBIT ITEMS */}
                <div className="spin-orbit-layer">
                  {orbitTools.map((tool) => (
                    <div
                      key={tool.name}
                      className="orbit-item-slot"
                      style={{
                        "--angle": `${tool.angle}deg`,
                      }}
                    >
                      <div className="orbit-badge-counter">
                        <div className={`orbit-logo orbit-logo-${tool.style}`}>
                          <div className="orbit-logo-inner overflow-hidden">
                            <img
                              src={tool.image}
                              alt={`${tool.name} logo`}
                              className="h-full w-full object-contain p-2"
                            />
                          </div>
                        </div>

                        <span className="orbit-label">{tool.name}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CENTER CARD */}
                <div className="absolute left-1/2 top-1/2 z-30 flex h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[2.5rem] border border-white/80 bg-white/85 p-4 shadow-[0_20px_50px_rgba(37,99,235,0.14)] backdrop-blur-xl transition duration-500 hover:scale-105">
                  <div className="absolute inset-2 -z-10 rounded-[2rem] bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-transparent" />

                  <div className="h-16 w-16 overflow-hidden rounded-2xl border border-slate-100 bg-white p-1 shadow-md shadow-blue-500/10">
                    <img
                      src={logoByTalent}
                      alt="ByTalent Logo"
                      className="h-full w-full rounded-xl object-cover"
                    />
                  </div>

                  <h3 className="mt-3 text-lg font-bold tracking-tight text-slate-900">
                    ByTalent
                  </h3>

                  <span className="mt-0.5 rounded-full bg-blue-50 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-blue-600">
                    Solution Partner
                  </span>
                </div>
              </div>
            </div>

            {/* HERO CATEGORY BAR */}
            <div className="mt-8 rounded-2xl border border-slate-200/70 bg-white/70 px-6 py-4 backdrop-blur">
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 lg:justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Layanan Konsultasi
                </span>

                <span className="text-sm font-medium text-slate-500">
                  Academic Help
                </span>

                <span className="text-sm font-medium text-slate-500">
                  Research & Thesis
                </span>

                <span className="text-sm font-medium text-slate-500">
                  Data Analytics
                </span>

                <span className="text-sm font-medium text-slate-500">
                  Digital Solutions
                </span>

                <Link
                  to="/layanan"
                  className="group flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-700"
                >
                  Lihat Selengkapnya

                  <ArrowRight
                    size={14}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* TOOLS & SOFTWARE MARQUEE */}
        <section className="border-b border-slate-200/80 bg-white">
          <div className="pt-6 pb-2 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">
              Tools & Software Stack
            </p>
          </div>

          <div className="bytalent-marquee-wrapper">
            <div className="bytalent-marquee">
              {[...tools, ...tools, ...tools].map((tool, index) => (
                <div key={`${tool}-${index}`}>
                  <span />
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="layanan"
          className="bg-[#f8fafc] px-5 py-24 sm:px-8 lg:px-10"
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
                  Layanan Kami
                </p>

                <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
                  Satu tempat untuk <br />
                  <span className="text-slate-400">
                    berbagai kebutuhan.
                  </span>
                </h2>
              </div>

              <p className="max-w-md text-sm leading-relaxed text-slate-500">
                Tidak yakin layanan mana yang sesuai? Ceritakan saja kebutuhanmu
                dan kami bantu tentukan rencana yang pas.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.number}
                    className="group relative min-h-[290px] overflow-hidden rounded-[2rem] border border-slate-200/90 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5"
                  >
                    <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-blue-50/60 transition duration-500 group-hover:scale-125" />

                    <div className="relative flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white transition duration-300 group-hover:bg-blue-600 group-hover:shadow-lg group-hover:shadow-blue-500/30">
                        <Icon size={20} />
                      </div>

                      <span className="text-base font-black text-slate-200">
                        {service.number}
                      </span>
                    </div>

                    <div className="relative mt-12">
                      <h3 className="text-2xl font-bold tracking-tight text-slate-950">
                        {service.title}
                      </h3>

                      <p className="mt-2.5 max-w-lg text-sm leading-relaxed text-slate-500">
                        {service.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="absolute bottom-8 right-8 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white opacity-0 shadow-sm transition duration-300 group-hover:opacity-100">
                      <ArrowUpRight size={15} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="bg-white px-5 py-24 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
                  Kenapa ByTalent?
                </p>

                <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
                  Bukan sekadar <br />
                  <span className="text-slate-400">
                    menyelesaikan tugas.
                  </span>
                </h2>

                <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-500">
                  Kami memastikan komunikasi jelas dari awal: ruang lingkup,
                  tahapan, dan estimasi waktu disepakati sebelum pengerjaan
                  dimulai.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {benefits.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-slate-200/80 bg-slate-50/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg hover:shadow-blue-500/5"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-100 bg-white text-slate-950 shadow-sm">
                        <Icon size={18} className="text-blue-600" />
                      </div>

                      <h3 className="mt-5 text-base font-bold text-slate-950">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs leading-relaxed text-slate-500">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* WORKFLOW */}
        <section
          id="cara-kerja"
          className="bg-slate-950 px-5 py-24 text-white sm:px-8 lg:px-10"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-400">
                  Cara Kerja
                </p>

                <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
                  Mulai dari <br />
                  <span className="text-slate-500">
                    diskusi santai.
                  </span>
                </h2>

                <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-400">
                  Konsultasikan materi atau project kamu tanpa ribet. Kami akan
                  analisis dan beri solusi terbaiknya.
                </p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-3.5 text-xs font-bold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-[#25D366] hover:text-white"
                >
                  <WhatsAppIcon size={17} />
                  WhatsApp Kami
                  <ArrowUpRight size={15} />
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {workflow.map((item) => (
                  <div
                    key={item.number}
                    className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                        Langkah {item.number}
                      </span>

                      <ArrowUpRight
                        size={15}
                        className="text-slate-500 transition group-hover:text-white"
                      />
                    </div>

                    <h3 className="mt-8 text-base font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-slate-400">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="konsultasi"
          className="bg-white px-5 py-24 sm:px-8 lg:px-10"
        >
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 px-7 py-16 text-center text-white shadow-2xl shadow-blue-600/15 sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-violet-400/20 blur-3xl" />

            <div className="relative z-10">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
                <WhatsAppIcon size={28} />
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-blue-100">
                Hubungi Kami
              </p>

              <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
                Punya tugas, riset, atau project?
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-blue-100 sm:text-base">
                Diskusikan sekarang melalui WhatsApp. Kami siap membantu review
                kebutuhan dan memberikan estimasi transparan sebelum pengerjaan.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2.5 rounded-2xl bg-white px-7 py-4 text-xs font-bold text-slate-950 shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-[#25D366] hover:text-white hover:shadow-2xl"
              >
                <WhatsAppIcon size={18} />
                Chat WhatsApp
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <img
              src={logoByTalent}
              alt="ByTalent Logo"
              className="h-7 w-7 rounded-lg object-cover"
            />

            <div>
              <p className="text-sm font-bold text-slate-950">
                ByTalent
              </p>

              <p className="text-[11px] text-slate-400">
                Academic & Digital Solution Partner
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>© 2026 ByTalent</span>
            <span>•</span>
            <span>All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;