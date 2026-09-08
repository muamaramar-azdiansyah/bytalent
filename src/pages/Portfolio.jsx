import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Code2,
  Database,
  FileText,
  Search,
  X,
  Menu,
} from "lucide-react";

// ============================================================
// ASSETS
// ============================================================

// Skripsi
import skripsiCover from "../assets/portofolio/skripsi_cover.jpg";
import skripsiBab1 from "../assets/portofolio/skripsi_bab1.jpg";
import skripsiModel from "../assets/portofolio/skripsi_model_penelitian.jpg";
import skripsiHasil from "../assets/portofolio/skripsi_hasil_penelitian.png";

// Sempro
import semproCover from "../assets/portofolio/sempro_cover.png";
import semproMateri from "../assets/portofolio/sempro_materi.jpg";
import semproMetodologi from "../assets/portofolio/sempro_metodologi.png";
import semproPresentasi from "../assets/portofolio/sempro_presentasi.jpg";

// Jurnal
import jurnalCover from "../assets/portofolio/jurnal_cover.jpg";
import jurnalArticle from "../assets/portofolio/jurnal_article.jpg";
import jurnalMethodology from "../assets/portofolio/jurnal_methodology.jpg";
import jurnalResult from "../assets/portofolio/jurnal_result.png";

// Research
import researchLiterature from "../assets/portofolio/research_literature.png";
import researchMatrix from "../assets/portofolio/research_matrix.png";
import researchGap from "../assets/portofolio/research_gap.jpg";
import researchFlow from "../assets/portofolio/research_flow.png";

// SPSS
import spssData from "../assets/portofolio/spss_data.jpg";
import spssOutput from "../assets/portofolio/spss_output.jpg";
import spssStatistic from "../assets/portofolio/spss_statistic.jpg";
import spssInterpretation from "../assets/portofolio/spss_interpretation.png";

// SmartPLS
import smartplsModel from "../assets/portofolio/smartpls_model.png";
import smartplsResult from "../assets/portofolio/smartpls_result.jpg";

// Jamovi
import jamoviAnalysis from "../assets/portofolio/jamovi_analysis.jpg";
import jamoviOutput from "../assets/portofolio/jamovi_output.png";
import jamoviResult from "../assets/portofolio/jamovi_result.png";

// Linux
import linuxServer from "../assets/portofolio/linux_server.jpg";
import linuxTerminal from "../assets/portofolio/linux_terminal.jpg";
import nginxConfig from "../assets/portofolio/nginx_config.png";

// Database
import mysqlDatabase from "../assets/portofolio/mysql_database.jpg";
import databaseProject from "../assets/portofolio/database_project.png";

// Docker
import dockerProject from "../assets/portofolio/docker_project.png";

// Website
import websiteDashboard from "../assets/portofolio/website_dashboard.jpg";
import websiteProject from "../assets/portofolio/website_project.jpg";

// ============================================================
// WHATSAPP
// ============================================================

const whatsappLink = "https://wa.me/6281399844327";

// ============================================================
// PORTFOLIO DATA
// ============================================================

const portfolioItems = [
  {
    id: 1,
    category: "Skripsi",
    key: "skripsi",
    title: "Penyusunan Skripsi",
    short:
      "Pengerjaan bagian skripsi mulai dari struktur penelitian hingga hasil.",
    description:
      "Contoh pekerjaan penyusunan skripsi yang mencakup struktur penelitian, bagian pembahasan, model penelitian, hingga hasil penelitian.",
    icon: BookOpen,
    image: skripsiCover,
    tags: ["Skripsi", "Penelitian", "Bab 1"],
    gallery: [
      skripsiCover,
      skripsiBab1,
      skripsiModel,
      skripsiHasil,
    ],
  },

  {
    id: 2,
    category: "Sempro",
    key: "sempro",
    title: "Seminar Proposal",
    short:
      "Penyusunan proposal dan materi pendukung untuk seminar proposal.",
    description:
      "Contoh pekerjaan seminar proposal yang meliputi penyusunan proposal, metodologi, materi presentasi, dan kebutuhan pendukung seminar.",
    icon: FileText,
    image: semproCover,
    tags: ["Sempro", "Proposal", "Presentasi"],
    gallery: [
      semproCover,
      semproMateri,
      semproMetodologi,
      semproPresentasi,
    ],
  },

  {
    id: 3,
    category: "Jurnal",
    key: "jurnal",
    title: "Artikel & Jurnal",
    short:
      "Penyusunan artikel penelitian dari struktur hingga hasil penelitian.",
    description:
      "Contoh pekerjaan artikel dan jurnal penelitian mulai dari struktur artikel, metodologi, hasil, hingga penyusunan naskah.",
    icon: FileText,
    image: jurnalCover,
    tags: ["Jurnal", "Artikel", "Research"],
    gallery: [
      jurnalCover,
      jurnalArticle,
      jurnalMethodology,
      jurnalResult,
    ],
  },

  {
    id: 4,
    category: "Research",
    key: "research",
    title: "Research & Literature",
    short:
      "Pemetaan literatur, research gap, matriks penelitian, dan alur penelitian.",
    description:
      "Contoh pekerjaan research support berupa pencarian literatur, pemetaan penelitian terdahulu, research gap, matriks penelitian, dan research flow.",
    icon: Search,
    image: researchLiterature,
    tags: ["Literature", "Research Gap", "Matrix"],
    gallery: [
      researchLiterature,
      researchMatrix,
      researchGap,
      researchFlow,
    ],
  },

  {
    id: 5,
    category: "SPSS",
    key: "spss",
    title: "Analisis Data SPSS",
    short:
      "Pengolahan data, output statistik, dan interpretasi hasil SPSS.",
    description:
      "Contoh pekerjaan pengolahan data menggunakan SPSS mulai dari pengelolaan data, analisis statistik, pembacaan output, hingga interpretasi.",
    icon: BarChart3,
    image: spssData,
    tags: ["SPSS", "Data Analysis", "Interpretasi"],
    gallery: [
      spssData,
      spssOutput,
      spssStatistic,
      spssInterpretation,
    ],
  },

  {
    id: 6,
    category: "SmartPLS",
    key: "smartpls",
    title: "Analisis SmartPLS",
    short:
      "Pemodelan dan analisis penelitian menggunakan SmartPLS.",
    description:
      "Contoh pekerjaan pengolahan data menggunakan SmartPLS termasuk model penelitian dan hasil analisis.",
    icon: BarChart3,
    image: smartplsModel,
    tags: ["SmartPLS", "SEM", "Data Analysis"],
    gallery: [
      smartplsModel,
      smartplsResult,
    ],
  },

  {
    id: 7,
    category: "Jamovi",
    key: "jamovi",
    title: "Analisis Data Jamovi",
    short:
      "Pengolahan data dan interpretasi output menggunakan Jamovi.",
    description:
      "Contoh pekerjaan analisis data menggunakan Jamovi mulai dari proses analisis, output, sampai hasil yang siap digunakan dalam penelitian.",
    icon: BarChart3,
    image: jamoviAnalysis,
    tags: ["Jamovi", "Analysis", "Interpretasi"],
    gallery: [
      jamoviAnalysis,
      jamoviOutput,
      jamoviResult,
    ],
  },

  {
    id: 8,
    category: "Linux",
    key: "linux",
    title: "Linux & Web Server",
    short:
      "Konfigurasi Linux, terminal, web server, dan kebutuhan deployment.",
    description:
      "Contoh project teknis yang mencakup konfigurasi Linux server, terminal, web server, dan konfigurasi Nginx.",
    icon: Code2,
    image: linuxServer,
    tags: ["Linux", "Ubuntu", "Web Server"],
    gallery: [
      linuxServer,
      linuxTerminal,
      nginxConfig,
    ],
  },

  {
    id: 9,
    category: "Database",
    key: "database",
    title: "Database & MySQL",
    short:
      "Project database dan implementasi MySQL untuk kebutuhan aplikasi.",
    description:
      "Contoh project database yang mencakup implementasi database MySQL dan kebutuhan pengelolaan database aplikasi.",
    icon: Database,
    image: mysqlDatabase,
    tags: ["MySQL", "Database", "Project"],
    gallery: [
      mysqlDatabase,
      databaseProject,
    ],
  },

  {
    id: 10,
    category: "Docker",
    key: "docker",
    title: "Docker Project",
    short:
      "Implementasi project menggunakan environment berbasis Docker.",
    description:
      "Contoh project digital menggunakan Docker untuk membangun environment aplikasi dan kebutuhan deployment.",
    icon: Code2,
    image: dockerProject,
    tags: ["Docker", "Deployment", "Project"],
    gallery: [
      dockerProject,
    ],
  },

  {
    id: 11,
    category: "Website",
    key: "website",
    title: "Website & Dashboard",
    short:
      "Pembuatan website dan dashboard sesuai kebutuhan project.",
    description:
      "Contoh project website dan dashboard yang dikembangkan untuk kebutuhan digital dan pengelolaan informasi.",
    icon: Code2,
    image: websiteProject,
    tags: ["Website", "Dashboard", "Digital"],
    gallery: [
      websiteProject,
      websiteDashboard,
    ],
  },
];

// ============================================================
// FILTER
// ============================================================

const filters = [
  { key: "all", label: "Semua" },
  { key: "skripsi", label: "Skripsi" },
  { key: "sempro", label: "Sempro" },
  { key: "jurnal", label: "Jurnal" },
  { key: "research", label: "Research" },
  { key: "spss", label: "SPSS" },
  { key: "smartpls", label: "SmartPLS" },
  { key: "jamovi", label: "Jamovi" },
  { key: "linux", label: "Linux" },
  { key: "database", label: "Database" },
  { key: "docker", label: "Docker" },
  { key: "website", label: "Website" },
];

// ============================================================
// WHATSAPP ICON
// ============================================================

function WhatsAppIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.78 11.78 0 0 0 12.07 0C5.55 0 .24 5.31.24 11.83c0 2.08.54 4.11 1.57 5.9L.14 24l6.42-1.64a11.82 11.82 0 0 0 5.5 1.4h.01c6.52 0 11.83-5.31 11.83-11.83 0-3.16-1.23-6.13-3.38-8.45ZM12.07 21.8h-.01a9.84 9.84 0 0 1-5.02-1.37l-.36-.21-3.81.97 1.02-3.71-.23-.38a9.82 9.82 0 0 1-1.5-5.27c0-5.44 4.43-9.87 9.88-9.87 2.63 0 5.1 1.03 6.96 2.9a9.83 9.83 0 0 1 2.89 6.97c0 5.44-4.43 9.87-9.87 9.87Zm5.41-7.39c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.79-1.68-2.09-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.5 1.7.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

// ============================================================
// NAVBAR
// ============================================================

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Layanan", href: "/layanan" },
    { label: "Cara Kerja", href: "/cara-kerja" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Testimoni", href: "/testimoni" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* LOGO */}
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-sm font-black text-white">
            B
          </div>

          <div>
            <div className="text-[18px] font-extrabold tracking-tight text-slate-950">
              ByTalent
            </div>

            <div className="hidden text-[8px] font-bold uppercase tracking-[0.18em] text-slate-400 sm:block">
              Solution Partner
            </div>
          </div>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm transition ${
                item.label === "Portfolio"
                  ? "font-semibold text-blue-600"
                  : "font-medium text-slate-500 hover:text-slate-950"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-blue-600"
          >
            <WhatsAppIcon size={17} />
            Konsultasi
          </a>
        </div>

        {/* MOBILE */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto max-w-[1280px] px-5 py-4 sm:px-8">

            <div className="space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-lg px-3 py-3 text-sm ${
                    item.label === "Portfolio"
                      ? "bg-blue-50 font-semibold text-blue-600"
                      : "font-medium text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-sm font-bold text-white"
            >
              <WhatsAppIcon size={18} />
              Konsultasi via WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

// ============================================================
// PORTFOLIO CARD
// ============================================================

function PortfolioCard({ item, onOpen }) {
  const Icon = item.icon;

  return (
    <article
      onClick={() => onOpen(item)}
      className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:border-blue-300 hover:shadow-lg"
    >
      {/* IMAGE */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">

        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"
        />

        {/* subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent opacity-70" />

        {/* PROJECT NUMBER */}
        <div className="absolute left-4 top-4">
          <span className="inline-flex items-center gap-2 rounded-lg border border-white/60 bg-white/95 px-3 py-2 text-[11px] font-bold text-slate-700 shadow-sm">
            <Icon size={13} />
            {item.category}
          </span>
        </div>

        {/* OPEN */}
        <div className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-lg bg-white text-slate-950 opacity-0 shadow-md transition group-hover:opacity-100">
          <ArrowUpRight size={16} />
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5">

        <div className="mb-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-slate-100 px-2 py-1 text-[10px] font-semibold text-slate-500"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-lg font-bold tracking-tight text-slate-950">
          {item.title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          {item.short}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
            Project detail
          </span>

          <span className="flex items-center gap-1 text-xs font-semibold text-slate-500 transition group-hover:text-blue-600">
            View
            <ArrowRight size={13} />
          </span>
        </div>
      </div>
    </article>
  );
}

// ============================================================
// DETAIL MODAL
// ============================================================

function PortfolioModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative my-5 w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-950 hover:text-white"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr]">

          {/* IMAGE SIDE */}
          <div className="bg-slate-100 p-4 sm:p-6">

            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
              <img
                src={item.image}
                alt={item.title}
                className="aspect-[16/10] w-full object-cover"
              />
            </div>

            {item.gallery && item.gallery.length > 1 && (
              <div className="mt-4 grid grid-cols-3 gap-3">
                {item.gallery.slice(0, 3).map((image, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-lg border border-slate-200 bg-white"
                  >
                    <img
                      src={image}
                      alt={`${item.title} ${index + 1}`}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* DETAIL SIDE */}
          <div className="flex flex-col p-6 sm:p-8 lg:p-10">

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-600" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">
                {item.category}
              </span>
            </div>

            <h2 className="mt-5 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              {item.title}
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
              {item.description}
            </p>

            <div className="mt-7">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                Scope pekerjaan
              </p>

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* TECH INFO */}
            <div className="mt-8 border-y border-slate-100 py-5">
              <div className="grid grid-cols-2 gap-5">

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">
                    Category
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {item.category}
                  </p>
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">
                    Status
                  </p>

                  <p className="mt-1 text-sm font-semibold text-emerald-600">
                    Completed
                  </p>
                </div>

              </div>
            </div>

            {/* CTA */}
            <div className="mt-auto pt-8">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-slate-950 px-5 py-4 text-sm font-bold text-white transition hover:bg-blue-600"
              >
                <WhatsAppIcon size={18} />
                Bahas project via WhatsApp
                <ArrowUpRight size={16} />
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// MAIN
// ============================================================

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter(
          (item) => item.key === activeFilter
        );

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-950">

      <Navbar />

      <main>

        {/* ==================================================
            HERO
        ================================================== */}

        <section className="border-b border-slate-200 bg-white">

          <div className="mx-auto max-w-[1280px] px-5 pb-16 pt-16 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24 lg:pt-24">

            <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-end">

              <div>

                <div className="mb-6 flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-blue-600">
                    01
                  </span>

                  <span className="h-px w-8 bg-slate-300" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Portfolio
                  </span>
                </div>

                <h1 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-7xl">
                  Pekerjaan yang
                  <span className="block text-slate-400">
                    pernah kami
                  </span>

                  <span className="block text-blue-600">
                    kerjakan.
                  </span>
                </h1>

              </div>

              <div>

                <p className="text-sm leading-7 text-slate-500 sm:text-base">
                  Kumpulan contoh pekerjaan ByTalent,
                  mulai dari kebutuhan akademik,
                  research, analisis data, hingga
                  project digital dan teknis.
                </p>

                <div className="mt-6 flex items-center gap-3 font-mono text-[10px] text-slate-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  PROJECT ARCHIVE
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ==================================================
            FILTER
        ================================================== */}

        <section className="sticky top-[72px] z-30 border-b border-slate-200 bg-white">

          <div className="mx-auto max-w-[1280px] px-5 py-4 sm:px-8 lg:px-10">

            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">

              {filters.map((filter) => (

                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`whitespace-nowrap rounded-lg border px-4 py-2.5 text-xs font-semibold transition ${
                    activeFilter === filter.key
                      ? "border-slate-950 bg-slate-950 text-white"
                      : "border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-slate-900"
                  }`}
                >
                  {filter.label}
                </button>

              ))}

            </div>

          </div>
        </section>

        {/* ==================================================
            PROJECT GRID
        ================================================== */}

        <section className="mx-auto max-w-[1280px] px-5 py-14 sm:px-8 sm:py-20 lg:px-10">

          {/* HEADER */}
          <div className="mb-8 flex items-end justify-between gap-6">

            <div>

              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] font-bold text-blue-600">
                  WORKS
                </span>

                <span className="font-mono text-[10px] text-slate-400">
                  /
                </span>

                <span className="font-mono text-[10px] text-slate-400">
                  {String(filteredItems.length).padStart(2, "0")} ITEMS
                </span>
              </div>

              <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                Project & pekerjaan
              </h2>

            </div>

            <p className="hidden text-xs text-slate-400 sm:block">
              Klik project untuk melihat detail
            </p>

          </div>

          {/* GRID */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {filteredItems.map((item) => (

              <PortfolioCard
                key={item.id}
                item={item}
                onOpen={setSelectedItem}
              />

            ))}

          </div>

        </section>

        {/* ==================================================
            CTA
        ================================================== */}

        <section className="border-t border-slate-200 bg-white">

          <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">

            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

              <div>

                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-600" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">
                    Start a project
                  </span>
                </div>

                <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl">
                  Punya kebutuhan yang belum ada di portfolio?
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                  Tidak semua project kami tampilkan di sini.
                  Kirim requirement-mu dan kita bahas bentuk
                  pengerjaan yang paling sesuai.
                </p>

              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-slate-950 px-6 py-4 text-sm font-bold text-white transition hover:bg-blue-600"
              >
                <WhatsAppIcon size={18} />
                Bahas Project
                <ArrowUpRight size={16} />
              </a>

            </div>

          </div>
        </section>

      </main>

      {/* ==================================================
          MODAL
      ================================================== */}

      <PortfolioModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />

      {/* ==================================================
          FOOTER
      ================================================== */}

      <footer className="border-t border-slate-200 bg-white">

        <div className="mx-auto flex max-w-[1280px] flex-col gap-4 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">

          <div>
            <div className="text-sm font-extrabold text-slate-950">
              ByTalent
            </div>

            <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
              Solution Partner
            </div>
          </div>

          <div className="flex items-center gap-3 font-mono text-[10px] text-slate-400">
            <span>ACADEMIC</span>
            <span>/</span>
            <span>RESEARCH</span>
            <span>/</span>
            <span>TECHNICAL</span>
          </div>

          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} ByTalent
          </p>

        </div>

      </footer>

    </div>
  );
}