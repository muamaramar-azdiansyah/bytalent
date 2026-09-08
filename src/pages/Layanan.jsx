import { useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Code2,
  FileText,
  GraduationCap,
  MonitorPlay,
} from "lucide-react";

import Navbar from "../components/Navbar";
import logoByTalent from "../assets/logobytalent.jpeg";

export default function Layanan() {
  const [activeCategory, setActiveCategory] = useState("academic");

  const whatsappLink = "https://wa.me/6281399844327";

  /* ============================================================
      CATEGORY
  ============================================================ */

  const categories = [
    {
      id: "academic",
      number: "01",
      title: "Academic & Assignment",
      shortTitle: "Academic",
      description:
        "Tugas, dokumen, presentasi, laporan, dan kebutuhan akademik lainnya.",
      icon: GraduationCap,
    },
    {
      id: "guidance",
      number: "02",
      title: "Bimbingan Skripsi",
      shortTitle: "Bimbingan",
      description:
        "Pendampingan penelitian dari penentuan judul hingga persiapan sidang.",
      icon: MonitorPlay,
    },
    {
      id: "research",
      number: "03",
      title: "Research & Data",
      shortTitle: "Research",
      description:
        "Literatur, pengolahan data, analisis statistik, dan interpretasi hasil.",
      icon: BarChart3,
    },
    {
      id: "technical",
      number: "04",
      title: "Technical Project",
      shortTitle: "Technical",
      description:
        "Linux, server, database, website, programming, dan kebutuhan teknis.",
      icon: Code2,
    },
    {
      id: "product",
      number: "05",
      title: "Digital Product",
      shortTitle: "Product",
      description:
        "Materi digital yang dapat digunakan untuk mendukung proses belajar.",
      icon: BookOpen,
    },
  ];

  /* ============================================================
      ACADEMIC
  ============================================================ */

  const academicServices = [
    {
      title: "Skripsi & Tugas Akhir",
      slug: "skripsi",
      text: "Pendampingan penyusunan skripsi mulai dari proposal hingga tahap akhir.",
    },
    {
      title: "Sempro & Proposal",
      slug: "sempro",
      text: "Penyusunan proposal penelitian dan persiapan seminar proposal.",
    },
    {
      title: "Jurnal & Artikel",
      slug: "jurnal",
      text: "Penulisan artikel, jurnal, review literatur, dan penyusunan naskah.",
    },
    {
      title: "Makalah & Essay",
      slug: "makalah",
      text: "Penyusunan makalah, essay, studi kasus, resume, dan karya tulis.",
    },
    {
      title: "Laporan & PKL / Magang",
      slug: "laporan",
      text: "Penyusunan laporan kegiatan, PKL, magang, penelitian, dan dokumentasi.",
    },
    {
      title: "PPT & Presentasi",
      slug: "ppt",
      text: "Pembuatan materi presentasi berdasarkan materi dan kebutuhan project.",
    },
    {
      title: "Excel & Laporan Keuangan",
      slug: "excel",
      text: "Spreadsheet, formula, tabel, perhitungan, dan laporan berbasis Excel.",
    },
    {
      title: "Equation & Rumus",
      slug: "equation",
      text: "Penyusunan equation, rumus matematika, formula, dan perhitungan.",
    },
  ];

  /* ============================================================
      GUIDANCE
  ============================================================ */

  const guidanceServices = [
    {
      title: "Bimbingan Judul",
      slug: "bimbingan",
      text: "Pembahasan ide, arah penelitian, variabel, objek, dan alternatif judul.",
    },
    {
      title: "Bimbingan Bab 1",
      slug: "bimbingan",
      text: "Pembahasan latar belakang, identifikasi masalah, rumusan masalah, tujuan, dan manfaat.",
    },
    {
      title: "Bimbingan Bab 2",
      slug: "bimbingan",
      text: "Pembahasan teori, penelitian terdahulu, kerangka berpikir, dan hipotesis.",
    },
    {
      title: "Bimbingan Bab 3",
      slug: "bimbingan",
      text: "Pembahasan metode penelitian, populasi, sampel, variabel, instrumen, dan analisis.",
    },
    {
      title: "Bimbingan Bab 4",
      slug: "bimbingan",
      text: "Pembahasan hasil penelitian, output analisis, penyajian data, dan pembahasan.",
    },
    {
      title: "Bimbingan Bab 5",
      slug: "bimbingan",
      text: "Pembahasan kesimpulan, saran, keterbatasan, dan bagian akhir penelitian.",
    },
    {
      title: "Persiapan Sempro",
      slug: "bimbingan",
      text: "Review materi dan persiapan presentasi seminar proposal.",
    },
    {
      title: "Persiapan Sidang",
      slug: "bimbingan",
      text: "Review skripsi, PPT, simulasi pertanyaan, dan persiapan sidang.",
    },
  ];

  /* ============================================================
      RESEARCH
  ============================================================ */

  const researchServices = [
    {
      title: "Research & Literature",
      slug: "research",
      text: "Pencarian, pemetaan, review, dan pengolahan literatur penelitian.",
    },
    {
      title: "Systematic Literature Review",
      slug: "slr",
      text: "Pendampingan systematic searching, screening, dan penyusunan literatur.",
    },
    {
      title: "SPSS",
      slug: "spss",
      text: "Pengolahan data statistik, pengujian, output, tabel, dan interpretasi.",
    },
    {
      title: "SmartPLS / PLS",
      slug: "smartpls",
      text: "Pengolahan model PLS, evaluasi model, pengujian, dan interpretasi.",
    },
    {
      title: "Jamovi",
      slug: "jamovi",
      text: "Analisis statistik menggunakan Jamovi sesuai kebutuhan penelitian.",
    },
    {
      title: "Excel",
      slug: "excel",
      text: "Pengolahan data, formula, tabel, perhitungan, dan analisis spreadsheet.",
    },
    {
      title: "Google Colab",
      slug: "colab",
      text: "Notebook, Python, pengolahan data, dan kebutuhan komputasi.",
    },
    {
      title: "Interpretasi Data",
      slug: "spss",
      text: "Membantu membaca output analisis dan menyusunnya menjadi pembahasan.",
    },
  ];

  /* ============================================================
      TECHNICAL
  ============================================================ */

  const technicalServices = [
    {
      title: "Linux & Ubuntu",
      slug: "linux",
      text: "Setup, konfigurasi, deployment, troubleshooting, dan server Linux.",
    },
    {
      title: "Server & Web Server",
      slug: "linux",
      text: "Konfigurasi server, Nginx, Apache, service, environment, dan deployment.",
    },
    {
      title: "Docker",
      slug: "linux",
      text: "Containerization, Docker Compose, deployment, dan environment aplikasi.",
    },
    {
      title: "Database",
      slug: "database",
      text: "Perancangan, konfigurasi, query, import/export, dan kebutuhan database.",
    },
    {
      title: "MySQL & PostgreSQL",
      slug: "database",
      text: "Setup database, query, struktur data, troubleshooting, dan development.",
    },
    {
      title: "Website & Application",
      slug: "website",
      text: "Pengembangan website, aplikasi web, frontend, backend, dan API.",
    },
    {
      title: "Programming Project",
      slug: "website",
      text: "Pengerjaan project programming berdasarkan requirement dan teknologi.",
    },
    {
      title: "Google Colab & Python",
      slug: "colab",
      text: "Project Python, notebook, data processing, automation, dan komputasi.",
    },
  ];

  /* ============================================================
      DIGITAL PRODUCT
  ============================================================ */

  const productServices = [
    {
      title: "Paket Pemahaman Skripsi",
      slug: "pdfskripsi",
      text: "Panduan PDF untuk memahami alur skripsi dari awal hingga persiapan sidang.",
    },
  ];

  /* ============================================================
      SERVICE MAP
  ============================================================ */

  const serviceMap = {
    academic: academicServices,
    guidance: guidanceServices,
    research: researchServices,
    technical: technicalServices,
    product: productServices,
  };

  const activeData = categories.find(
    (category) => category.id === activeCategory
  );

  const activeServices = serviceMap[activeCategory];

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-950">
      <Navbar />

      <main>
        {/* ============================================================
            HERO
        ============================================================ */}

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-blue-600" />

                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-blue-600">
                    Layanan ByTalent
                  </span>
                </div>

                <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-[5.2rem]">
                  Layanan untuk
                  <span className="block text-slate-400">
                    kebutuhan akademik
                  </span>
                  <span className="block">
                    dan <span className="text-blue-600">teknis.</span>
                  </span>
                </h1>
              </div>

              <div className="lg:pb-2">
                <p className="max-w-lg text-base leading-8 text-slate-500 sm:text-lg">
                  Pilih kategori sesuai kebutuhan. Mulai dari tugas dan
                  penelitian hingga project website, server, dan database.
                </p>

                <div className="mt-7 flex items-center gap-3 text-sm font-semibold text-slate-400">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-white">
                    <ArrowDownRight size={16} />
                  </span>

                  Pilih kategori layanan
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            CATEGORY NAVIGATION
        ============================================================ */}

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid grid-cols-2 md:grid-cols-5">
              {categories.map((category, index) => {
                const Icon = category.icon;
                const active = activeCategory === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveCategory(category.id)}
                    className={`group relative border-slate-200 px-5 py-6 text-left transition duration-200 sm:px-7 ${
                      index !== categories.length - 1
                        ? "md:border-r"
                        : ""
                    } ${
                      index >= 2
                        ? "border-t md:border-t-0"
                        : ""
                    } ${
                      active
                        ? "bg-slate-950 text-white"
                        : "bg-white hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <Icon
                        size={19}
                        className={
                          active
                            ? "text-blue-400"
                            : "text-slate-400 group-hover:text-blue-600"
                        }
                      />

                      <span
                        className={`text-xs font-bold ${
                          active
                            ? "text-slate-500"
                            : "text-slate-300"
                        }`}
                      >
                        {category.number}
                      </span>
                    </div>

                    <p
                      className={`mt-6 text-sm font-bold ${
                        active
                          ? "text-white"
                          : "text-slate-900"
                      }`}
                    >
                      {category.shortTitle}
                    </p>

                    <p
                      className={`mt-1 text-[11px] leading-5 ${
                        active
                          ? "text-slate-400"
                          : "text-slate-400"
                      }`}
                    >
                      {category.description}
                    </p>

                    {active && (
                      <span className="absolute bottom-0 left-0 h-1 w-full bg-blue-600" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================
            SERVICE LIST
        ============================================================ */}

        <section
          id="daftar-layanan"
          className="px-5 py-20 sm:px-8 lg:px-10"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-blue-600">
                    {activeData.number}
                  </span>

                  <span className="h-px w-8 bg-slate-300" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
                    {activeData.shortTitle}
                  </span>
                </div>

                <h2 className="mt-5 text-4xl font-black tracking-[-0.045em] sm:text-5xl">
                  {activeData.title}
                </h2>
              </div>

              <p className="max-w-xl text-sm leading-7 text-slate-500 lg:justify-self-end">
                {activeData.description}
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {activeServices.map((service, index) => (
                <Link
                  key={`${service.slug}-${service.title}-${index}`}
                  to={`/layanan/${service.slug}`}
                  className="group relative block overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:border-slate-300 hover:shadow-lg sm:p-7"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-bold text-slate-300 transition group-hover:text-blue-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600">
                      <ArrowUpRight size={15} />
                    </span>
                  </div>

                  <h3 className="mt-12 max-w-md text-xl font-bold tracking-tight text-slate-950">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-6 text-slate-500">
                    {service.text}
                  </p>

                  <div className="mt-7 h-px w-full bg-slate-100" />

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                      Layanan
                    </span>

                    <span className="flex items-center gap-1 text-xs font-semibold text-slate-400 transition group-hover:text-blue-600">
                      Detail
                      <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            GUIDANCE FEATURE
        ============================================================ */}

        {activeCategory === "guidance" && (
          <section className="border-y border-slate-200 bg-white">
            <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
              <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                    <MonitorPlay size={21} />
                  </div>

                  <p className="mt-7 text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
                    Bimbingan via Zoom
                  </p>

                  <h2 className="mt-3 max-w-lg text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                    Bimbingan skripsi
                    <span className="block text-slate-400">
                      berdasarkan kebutuhan.
                    </span>
                  </h2>

                  <p className="mt-5 max-w-md text-sm leading-7 text-slate-500">
                    Sesi bimbingan ditujukan untuk membahas bagian penelitian
                    yang sedang dikerjakan secara langsung dan terarah.
                  </p>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-xs font-bold text-white transition duration-200 hover:bg-[#25D366]"
                  >
                    Hubungi via WhatsApp
                    <ArrowUpRight size={14} />
                  </a>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Judul & arah penelitian",
                    "Bab 1 — Pendahuluan",
                    "Bab 2 — Landasan teori",
                    "Bab 3 — Metodologi",
                    "Bab 4 — Hasil & pembahasan",
                    "Bab 5 — Kesimpulan",
                    "Seminar proposal",
                    "Persiapan sidang",
                  ].map((item, index) => (
                    <Link
                      key={item}
                      to="/layanan/bimbingan"
                      className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 transition duration-200 hover:border-blue-200 hover:bg-blue-50"
                    >
                      <span className="text-[10px] font-bold text-blue-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-sm font-semibold text-slate-700">
                        {item}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ============================================================
            DIGITAL PRODUCT
        ============================================================ */}

        {activeCategory === "product" && (
          <section className="px-5 pb-20 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-7xl">
              <div className="overflow-hidden rounded-3xl bg-slate-950 px-7 py-12 sm:px-12 sm:py-14">
                <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div>
                    <div className="flex items-center gap-2 text-blue-400">
                      <FileText size={15} />

                      <span className="text-[10px] font-bold uppercase tracking-[0.24em]">
                        Digital Product
                      </span>
                    </div>

                    <h2 className="mt-5 max-w-2xl text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
                      Paket Pemahaman Skripsi
                    </h2>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
                      Panduan PDF yang membahas alur skripsi dari memahami
                      judul, Bab 1 sampai Bab 5, revisi, sempro, hingga
                      persiapan sidang.
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {[
                        "Judul",
                        "Bab 1",
                        "Bab 2",
                        "Bab 3",
                        "Bab 4",
                        "Bab 5",
                        "Sempro",
                        "Sidang",
                      ].map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-semibold text-slate-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-3 lg:items-end">
                    <div className="flex h-28 w-24 rotate-3 items-center justify-center rounded-xl bg-white shadow-xl">
                      <div className="text-center">
                        <FileText
                          size={25}
                          className="mx-auto text-blue-600"
                        />

                        <p className="mt-2 text-[8px] font-black uppercase tracking-wider text-slate-900">
                          Skripsi
                        </p>

                        <p className="mt-1 text-[7px] text-slate-400">
                          GUIDE
                        </p>
                      </div>
                    </div>

                    <Link
                      to="/layanan/pdfskripsi"
                      className="inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3 text-xs font-bold text-slate-950 transition hover:bg-blue-50"
                    >
                      Lihat Produk
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ============================================================
            CTA WHATSAPP
        ============================================================ */}

        {activeCategory !== "product" && (
          <section className="border-t border-slate-200 bg-white px-5 py-14 sm:px-8 lg:px-10">
            <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 md:flex-row md:items-center">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
                  Belum menemukan layanan yang sesuai?
                </p>

                <h2 className="mt-2 text-2xl font-black tracking-[-0.03em] text-slate-950">
                  Sampaikan kebutuhanmu secara langsung.
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                  Jelaskan kebutuhan, deadline, atau kendala yang sedang
                  dihadapi. Kami akan membantu menentukan layanan yang sesuai.
                </p>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition duration-200 hover:bg-[#25D366]"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M20.52 3.48A11.78 11.78 0 0 0 12.07 0C5.55 0 .24 5.31.24 11.83c0 2.08.54 4.11 1.57 5.9L.14 24l6.42-1.64a11.82 11.82 0 0 0 5.5 1.4h.01c6.52 0 11.83-5.31 11.83-11.83 0-3.16-1.23-6.13-3.38-8.45ZM12.07 21.8h-.01a9.84 9.84 0 0 1-5.02-1.37l-.36-.21-3.81.97 1.02-3.71-.23-.38a9.82 9.82 0 0 1-1.5-5.27c0-5.44 4.43-9.87 9.88-9.87 2.63 0 5.1 1.03 6.96 2.9a9.83 9.83 0 0 1 2.89 6.97c0 5.44-4.43 9.87-9.87 9.87Zm5.41-7.39c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.79-1.68-2.09-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.5 1.7.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                </svg>

                WhatsApp Kami
                <ArrowUpRight size={16} />
              </a>
            </div>
          </section>
        )}
      </main>

      {/* ============================================================
          FOOTER
      ============================================================ */}

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-5 py-9 sm:px-8 md:flex-row md:items-center lg:px-10">
          <div className="flex items-center gap-3">
            <img
              src={logoByTalent}
              alt="ByTalent"
              className="h-9 w-9 rounded-xl object-cover"
            />

            <div>
              <p className="text-sm font-bold text-slate-950">
                ByTalent
              </p>

              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                Academic & Technical Solution
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span>Academic</span>
            <span>•</span>
            <span>Research</span>
            <span>•</span>
            <span>Technical</span>
          </div>

          <p className="text-xs text-slate-400">
            © 2026 ByTalent
          </p>
        </div>
      </footer>
    </div>
  );
}