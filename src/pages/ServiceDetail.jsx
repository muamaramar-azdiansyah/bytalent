import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  MessageCircle,
} from "lucide-react";

import Navbar from "../components/Navbar";
import logoByTalent from "../assets/logobytalent.jpeg";

const services = {
  skripsi: {
    category: "ACADEMIC",
    title: "Skripsi & Tugas Akhir",
    description:
      "Pendampingan kebutuhan skripsi dan tugas akhir dari tahap awal sampai penyelesaian.",
    intro:
      "Buat kamu yang sedang mengerjakan skripsi atau tugas akhir dan membutuhkan bantuan pada bagian tertentu maupun keseluruhan proses.",
    items: [
      "Penentuan dan pengembangan topik",
      "Penyusunan proposal penelitian",
      "Pengembangan Bab 1 sampai Bab 5",
      "Pengolahan dan analisis data",
      "Interpretasi hasil penelitian",
      "Penyusunan dan perapihan dokumen",
    ],
  },

  sempro: {
    category: "ACADEMIC",
    title: "Sempro & Proposal",
    description:
      "Persiapan proposal penelitian dan kebutuhan seminar proposal.",
    intro:
      "Membantu menyiapkan proposal dan materi yang dibutuhkan sebelum menghadapi seminar proposal.",
    items: [
      "Penyusunan proposal penelitian",
      "Review judul dan fokus penelitian",
      "Penyusunan latar belakang",
      "Rumusan masalah dan tujuan penelitian",
      "Landasan teori dan penelitian terdahulu",
      "Metodologi penelitian",
      "Pembuatan PPT sempro",
      "Persiapan presentasi dan pertanyaan",
    ],
  },

  jurnal: {
    category: "ACADEMIC",
    title: "Jurnal & Artikel",
    description:
      "Kebutuhan penulisan jurnal, artikel ilmiah, dan literature review.",
    intro:
      "Mulai dari pencarian referensi sampai penyusunan naskah dapat disesuaikan dengan kebutuhan penelitian.",
    items: [
      "Pencarian referensi",
      "Literature review",
      "Systematic searching",
      "Penyusunan artikel",
      "Penyusunan jurnal",
      "Perapihan format dan sitasi",
    ],
  },

  makalah: {
    category: "ACADEMIC",
    title: "Makalah & Essay",
    description:
      "Penyusunan makalah, essay, studi kasus, resume, dan berbagai karya tulis.",
    intro:
      "Kebutuhan penulisan disesuaikan dengan topik, format, jumlah halaman, dan ketentuan yang diberikan.",
    items: [
      "Makalah perkuliahan",
      "Essay",
      "Studi kasus",
      "Resume materi",
      "Review artikel",
      "Karya tulis akademik",
    ],
  },

  laporan: {
    category: "ACADEMIC",
    title: "Laporan & PKL / Magang",
    description:
      "Penyusunan laporan kegiatan, PKL, magang, penelitian, dan dokumentasi.",
    intro:
      "Membantu menyusun laporan berdasarkan format dan ketentuan kampus maupun instansi.",
    items: [
      "Laporan PKL",
      "Laporan magang",
      "Laporan penelitian",
      "Laporan kegiatan",
      "Dokumentasi kegiatan",
      "Perapihan format laporan",
    ],
  },

  ppt: {
    category: "ACADEMIC",
    title: "PPT & Presentasi",
    description:
      "Pembuatan materi presentasi untuk tugas, penelitian, sempro, maupun sidang.",
    intro:
      "Materi dibuat dengan struktur yang jelas sehingga lebih mudah digunakan saat presentasi.",
    items: [
      "PPT tugas kuliah",
      "PPT proposal",
      "PPT sempro",
      "PPT sidang",
      "PPT penelitian",
      "Perapihan desain presentasi",
    ],
  },

  excel: {
    category: "ACADEMIC",
    title: "Excel & Laporan Keuangan",
    description:
      "Pengerjaan spreadsheet, formula, tabel, perhitungan, dan laporan berbasis Excel.",
    intro:
      "Kebutuhan Excel dapat disesuaikan dengan format tugas dan data yang diberikan.",
    items: [
      "Formula Excel",
      "Pengolahan data",
      "Tabel dan rekapitulasi",
      "Laporan keuangan",
      "Perhitungan otomatis",
      "Visualisasi data",
    ],
  },

  equation: {
    category: "ACADEMIC",
    title: "Equation & Rumus",
    description:
      "Penyusunan equation, rumus matematika, formula, dan kebutuhan perhitungan.",
    intro:
      "Membantu menyusun rumus dan equation agar sesuai dengan kebutuhan dokumen atau tugas.",
    items: [
      "Equation Word",
      "Rumus matematika",
      "Formula penelitian",
      "Perhitungan",
      "Konversi rumus",
      "Perapihan equation",
    ],
  },

  bimbingan: {
    category: "BIMBINGAN",
    title: "Bimbingan Skripsi",
    description:
      "Sesi bimbingan untuk membahas skripsi secara langsung melalui Zoom.",
    intro:
      "Bukan hanya melihat hasil akhir. Sesi bimbingan digunakan untuk membahas bagian skripsi yang sedang kamu kerjakan dan menentukan langkah berikutnya.",
    items: [
      "Pembahasan dan pengembangan judul",
      "Bab 1 — Pendahuluan",
      "Bab 2 — Landasan teori",
      "Bab 3 — Metodologi penelitian",
      "Bab 4 — Hasil dan pembahasan",
      "Bab 5 — Kesimpulan dan saran",
      "Persiapan seminar proposal",
      "Persiapan sidang",
    ],
  },

  research: {
    category: "RESEARCH",
    title: "Research & Literature",
    description:
      "Riset dan pencarian literatur untuk mendukung kebutuhan penelitian.",
    intro:
      "Membantu mencari, memilah, memetakan, dan menyusun referensi yang relevan dengan penelitian.",
    items: [
      "Pencarian jurnal",
      "Literature review",
      "Research gap",
      "Systematic searching",
      "Pemetaan penelitian terdahulu",
      "Penyusunan referensi",
    ],
  },

  slr: {
    category: "RESEARCH",
    title: "Systematic Literature Review",
    description:
      "Pendampingan systematic searching, screening, dan pengolahan literatur.",
    intro:
      "Proses pencarian literatur dibuat lebih terstruktur sesuai kebutuhan penelitian dan topik yang dibahas.",
    items: [
      "Penentuan keyword",
      "Database searching",
      "Screening artikel",
      "Seleksi penelitian",
      "Pemetaan literatur",
      "Penyusunan hasil review",
    ],
  },

  spss: {
    category: "DATA ANALYSIS",
    title: "SPSS",
    description:
      "Pengolahan data statistik, pengujian, output, dan interpretasi hasil.",
    intro:
      "Data yang kamu miliki dapat diolah sesuai metode penelitian dan kebutuhan analisis.",
    items: [
      "Input dan cleaning data",
      "Uji statistik",
      "Uji validitas",
      "Uji reliabilitas",
      "Uji asumsi",
      "Regresi dan korelasi",
      "Output SPSS",
      "Interpretasi hasil",
    ],
  },

  smartpls: {
    category: "DATA ANALYSIS",
    title: "SmartPLS / PLS",
    description:
      "Pengolahan model PLS, evaluasi model, pengujian, dan interpretasi.",
    intro:
      "Membantu mengolah data menggunakan pendekatan PLS sesuai model penelitian.",
    items: [
      "Pembuatan model",
      "Outer model",
      "Inner model",
      "Convergent validity",
      "Discriminant validity",
      "Reliability",
      "Path coefficient",
      "Interpretasi hasil",
    ],
  },

  jamovi: {
    category: "DATA ANALYSIS",
    title: "Jamovi",
    description:
      "Analisis statistik menggunakan Jamovi sesuai kebutuhan penelitian.",
    intro:
      "Pengolahan data menggunakan Jamovi dapat disesuaikan dengan metode dan kebutuhan penelitian.",
    items: [
      "Input data",
      "Data cleaning",
      "Analisis deskriptif",
      "Uji statistik",
      "Pengujian hipotesis",
      "Output analisis",
      "Interpretasi",
    ],
  },

  colab: {
    category: "DATA & TECHNICAL",
    title: "Google Colab & Python",
    description:
      "Pengerjaan notebook, pengolahan data, Python, dan kebutuhan komputasi.",
    intro:
      "Cocok untuk kebutuhan project Python, data processing, maupun notebook penelitian.",
    items: [
      "Python notebook",
      "Data processing",
      "Data analysis",
      "Visualisasi data",
      "Machine learning project",
      "Automation sederhana",
    ],
  },

  linux: {
    category: "TECHNICAL PROJECT",
    title: "Linux & Ubuntu",
    description:
      "Setup, konfigurasi, deployment, dan troubleshooting server Linux.",
    intro:
      "Kebutuhan teknis Linux dan Ubuntu dapat disesuaikan dengan environment dan tujuan project.",
    items: [
      "Instalasi Linux",
      "Ubuntu Server",
      "Konfigurasi service",
      "User dan permission",
      "Network configuration",
      "Web server",
      "Deployment",
      "Troubleshooting",
    ],
  },

  database: {
    category: "TECHNICAL PROJECT",
    title: "Database",
    description:
      "Kebutuhan database mulai dari setup, query, struktur data, hingga troubleshooting.",
    intro:
      "Membantu kebutuhan database untuk project, tugas, penelitian, maupun aplikasi.",
    items: [
      "Database setup",
      "Database design",
      "SQL query",
      "Import dan export",
      "Backup dan restore",
      "Troubleshooting",
      "Optimasi query",
    ],
  },

  website: {
    category: "TECHNICAL PROJECT",
    title: "Website & Application",
    description:
      "Pengembangan website dan aplikasi web sesuai kebutuhan project.",
    intro:
      "Project dapat dikembangkan berdasarkan requirement, desain, dan teknologi yang digunakan.",
    items: [
      "Frontend",
      "Backend",
      "Database integration",
      "REST API",
      "Authentication",
      "Deployment",
      "Maintenance",
    ],
  },

  pdfskripsi: {
    category: "DIGITAL PRODUCT",
    title: "Paket Pemahaman Skripsi",
    description:
      "Satu file PDF untuk membantu memahami alur pengerjaan skripsi.",
    intro:
      "Materi dibuat sebagai panduan praktis untuk memahami perjalanan skripsi dari menentukan judul sampai persiapan sidang.",
    items: [
      "Memahami dan menentukan judul",
      "Memahami Bab 1",
      "Memahami Bab 2",
      "Memahami Bab 3",
      "Memahami Bab 4",
      "Memahami Bab 5",
      "Memahami revisi",
      "Persiapan sempro",
      "Persiapan sidang",
    ],
  },
};

export default function ServiceDetail() {
  const { slug } = useParams();

  const service = services[slug];

  if (!service) {
    return (
      <div className="min-h-screen bg-[#f7f8fc] text-slate-950">
        <Navbar />

        <main className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-5">

          <div className="text-center">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
              404
            </p>

            <h1 className="mt-4 text-4xl font-black">
              Layanan tidak ditemukan
            </h1>

            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-500">
              Halaman layanan yang kamu buka belum tersedia.
            </p>

            <Link
              to="/layanan"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-600"
            >
              <ArrowLeft size={16} />
              Kembali ke layanan
            </Link>

          </div>

        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f8fc] text-slate-950">

      <Navbar />

      <main>

        {/* HERO */}

        <section className="relative overflow-hidden border-b border-slate-200 bg-white">

          <div className="pointer-events-none absolute inset-0">

            <div className="bytalent-grid absolute inset-0 opacity-40" />

            <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-100/60 blur-[120px]" />

            <div className="absolute -bottom-40 left-[20%] h-[450px] w-[450px] rounded-full bg-violet-100/50 blur-[120px]" />

          </div>

          <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:px-10">

            <Link
              to="/layanan"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-blue-600"
            >
              <ArrowLeft
                size={16}
                className="transition group-hover:-translate-x-1"
              />

              Semua layanan
            </Link>

            <div className="mt-16 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">

              <div>

                <div className="flex items-center gap-3">

                  <span className="h-px w-10 bg-blue-600" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-600">
                    {service.category}
                  </span>

                </div>

                <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-[5.5rem]">
                  {service.title}
                </h1>

              </div>

              <div>

                <p className="text-lg leading-8 text-slate-500">
                  {service.description}
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* DETAIL */}

        <section className="px-5 py-20 sm:px-8 lg:px-10">

          <div className="mx-auto max-w-7xl">

            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

              {/* LEFT */}

              <div>

                <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
                  Tentang layanan
                </p>

                <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Yang bisa kami bantu.
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-slate-500">
                  {service.intro}
                </p>

                <Link
                  to="/layanan"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-slate-950 transition hover:text-blue-600"
                >
                  <ArrowLeft size={16} />
                  Kembali ke daftar layanan
                </Link>

              </div>


              {/* RIGHT */}

              <div className="grid gap-3 sm:grid-cols-2">

                {service.items.map((item, index) => (

                  <div
                    key={item}
                    className="group rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-900/5"
                  >

                    <div className="flex items-start justify-between gap-4">

                      <span className="text-xs font-bold text-slate-300 transition group-hover:text-blue-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-50 text-blue-600">
                        <Check size={14} />
                      </span>

                    </div>

                    <p className="mt-7 text-sm font-bold leading-6 text-slate-800">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>


        {/* CTA */}

        <section className="px-5 pb-20 sm:px-8 lg:px-10">

          <div className="mx-auto max-w-7xl">

            <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-7 py-12 sm:px-12">

              <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

              <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">

                <div>

                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-blue-400">
                    Butuh bantuan?
                  </p>

                  <h2 className="mt-3 max-w-xl text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
                    Ceritakan kebutuhanmu.
                  </h2>

                  <p className="mt-3 max-w-lg text-sm leading-7 text-slate-400">
                    Konsultasikan kebutuhanmu terlebih dahulu sebelum pengerjaan dimulai.
                  </p>

                </div>

                <button
                  type="button"
                  className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-blue-50"
                >
                  <MessageCircle size={17} />

                  Mulai Konsultasi

                  <ArrowRight size={16} />

                </button>

              </div>

            </div>

          </div>

        </section>

      </main>


      {/* FOOTER */}

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
                Solution Partner
              </p>

            </div>

          </div>

          <p className="text-xs text-slate-400">
            © 2026 ByTalent
          </p>

        </div>

      </footer>

    </div>
  );
}