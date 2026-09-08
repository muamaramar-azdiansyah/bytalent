import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ClipboardList,
  Code2,
  FileCheck2,
  MessageCircle,
  Search,
  Send,
  Settings2,
} from "lucide-react";

import Navbar from "../components/Navbar";
import logoByTalent from "../assets/logobytalent.jpeg";

export default function CaraKerja() {
  const whatsappLink = "https://wa.me/6281399844327";

  const workflow = [
    {
      number: "01",
      code: "REQUEST",
      title: "Kirim kebutuhan",
      description:
        "Sampaikan kebutuhan melalui WhatsApp. Bisa berupa tugas, penelitian, pengolahan data, website, database, atau project teknis lainnya.",
      icon: MessageCircle,
    },
    {
      number: "02",
      code: "REQUIREMENT",
      title: "Requirement dikumpulkan",
      description:
        "Kami pelajari brief, file, ketentuan, referensi, deadline, dan output yang dibutuhkan sebelum pekerjaan masuk ke tahap berikutnya.",
      icon: ClipboardList,
    },
    {
      number: "03",
      code: "SCOPE",
      title: "Scope ditentukan",
      description:
        "Ruang lingkup pekerjaan, output, estimasi waktu, dan biaya dibahas terlebih dahulu agar kedua pihak memiliki acuan yang sama.",
      icon: Search,
    },
    {
      number: "04",
      code: "EXECUTION",
      title: "Pengerjaan dimulai",
      description:
        "Project dikerjakan berdasarkan requirement yang telah disepakati. Progress mengikuti ruang lingkup dan target yang sudah ditentukan.",
      icon: Settings2,
    },
    {
      number: "05",
      code: "REVIEW",
      title: "Review hasil",
      description:
        "Hasil pekerjaan diperiksa kembali untuk memastikan format, requirement, dan bagian yang disepakati sudah terpenuhi.",
      icon: FileCheck2,
    },
    {
      number: "06",
      code: "DELIVERY",
      title: "File diserahkan",
      description:
        "Output final dikirim sesuai format yang telah disepakati. Project selesai setelah seluruh kebutuhan dalam scope terpenuhi.",
      icon: Send,
    },
  ];

  const principles = [
    {
      number: "01",
      title: "Requirement first",
      text: "Pekerjaan dimulai setelah kebutuhan dan output yang diminta cukup jelas.",
    },
    {
      number: "02",
      title: "Scope jelas",
      text: "Apa yang dikerjakan dan apa yang tidak dikerjakan ditentukan sejak awal.",
    },
    {
      number: "03",
      title: "Komunikasi langsung",
      text: "Pertanyaan, perubahan, dan kebutuhan tambahan dibahas selama project berjalan.",
    },
    {
      number: "04",
      title: "Review sebelum delivery",
      text: "Output diperiksa sebelum diserahkan sebagai hasil akhir.",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-950">
      <Navbar />

      <main>
        {/* ============================================================
            HERO
        ============================================================ */}

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
              <div>
                <div className="mb-7 flex items-center gap-3">
                  <span className="h-px w-10 bg-blue-600" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-600">
                    Workflow
                  </span>
                </div>

                <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-[5.5rem]">
                  Dari
                  <span className="text-slate-400"> requirement </span>
                  ke
                  <span className="block text-blue-600">
                    hasil akhir.
                  </span>
                </h1>
              </div>

              <div className="max-w-lg lg:justify-self-end">
                <p className="text-base leading-8 text-slate-500 sm:text-lg">
                  Setiap project dimulai dari kebutuhan yang jelas.
                  Requirement dibahas, scope ditentukan, kemudian pekerjaan
                  dijalankan sampai output siap digunakan.
                </p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-3 rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-bold text-white transition duration-200 hover:bg-[#25D366]"
                >
                  <MessageCircle size={17} />
                  Mulai via WhatsApp
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            PROJECT PIPELINE HEADER
        ============================================================ */}

        <section className="border-b border-slate-200 bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                  <Code2 size={15} />
                </span>

                <span className="text-xs font-bold uppercase tracking-[0.2em]">
                  Project Workflow
                </span>
              </div>

              <div className="flex items-center gap-3 text-[10px] font-semibold text-slate-500">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                PROCESS DEFINED
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            WORKFLOW
        ============================================================ */}

        <section className="bg-slate-50 px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
              {/* LEFT */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-blue-600">
                  Alur Pengerjaan
                </p>

                <h2 className="mt-4 max-w-md text-4xl font-black tracking-[-0.045em] sm:text-5xl">
                  Satu project.
                  <span className="block text-slate-400">
                    Enam tahap.
                  </span>
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-slate-500">
                  Kami menggunakan alur yang sederhana agar kebutuhan tidak
                  hilang di tengah proses dan hasil tetap mengacu pada scope
                  yang telah disepakati.
                </p>

                <div className="mt-8 border-l border-slate-300 pl-5">
                  <p className="text-xs font-semibold leading-6 text-slate-600">
                    Tidak semua project membutuhkan proses yang sama panjang.
                    Tahapan dapat menyesuaikan jenis dan kompleksitas pekerjaan.
                  </p>
                </div>
              </div>

              {/* RIGHT */}
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute bottom-8 left-[19px] top-8 hidden w-px bg-slate-200 sm:block" />

                <div className="space-y-3">
                  {workflow.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.number}
                        className="group relative grid gap-5 border border-slate-200 bg-white p-5 transition duration-200 hover:border-slate-300 sm:grid-cols-[40px_1fr_auto] sm:items-start sm:p-6"
                      >
                        {/* NUMBER */}
                        <div className="relative z-10 flex h-10 w-10 items-center justify-center border border-slate-200 bg-white text-xs font-black text-slate-950">
                          {item.number}
                        </div>

                        {/* CONTENT */}
                        <div>
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-600">
                              {item.code}
                            </span>

                            <span className="hidden h-px w-6 bg-slate-200 sm:block" />

                            <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-slate-400">
                              STEP {item.number}
                            </span>
                          </div>

                          <h3 className="mt-2 text-lg font-bold tracking-tight text-slate-950">
                            {item.title}
                          </h3>

                          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                            {item.description}
                          </p>
                        </div>

                        {/* ICON */}
                        <div className="hidden h-9 w-9 items-center justify-center border border-slate-200 text-slate-400 transition group-hover:border-blue-200 group-hover:text-blue-600 sm:flex">
                          <Icon size={16} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            REQUIREMENT CHECK
        ============================================================ */}

        <section className="border-y border-slate-200 bg-white px-5 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-blue-600">
                  Sebelum Project Dimulai
                </p>

                <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Requirement
                  <span className="block text-slate-400">
                    harus jelas.
                  </span>
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-slate-500">
                  Semakin jelas informasi yang diberikan di awal, semakin
                  mudah menentukan scope dan estimasi pekerjaan.
                </p>
              </div>

              {/* REQUIREMENT PANEL */}
              <div className="border border-slate-200 bg-slate-50">
                <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-slate-400">
                      project.config
                    </span>
                  </div>

                  <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-emerald-600">
                    Ready
                  </span>
                </div>

                <div className="divide-y divide-slate-200">
                  {[
                    {
                      label: "Jenis project",
                      value: "Tugas / Riset / Data / Technical",
                    },
                    {
                      label: "Requirement",
                      value: "Ketentuan / Brief / Referensi",
                    },
                    {
                      label: "Output",
                      value: "File / Report / Application",
                    },
                    {
                      label: "Deadline",
                      value: "Tanggal atau target pengerjaan",
                    },
                    {
                      label: "Catatan",
                      value: "Kebutuhan khusus / batasan",
                    },
                  ].map((item, index) => (
                    <div
                      key={item.label}
                      className="grid gap-2 px-5 py-4 sm:grid-cols-[170px_1fr]"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[10px] text-blue-600">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="text-xs font-bold text-slate-700">
                          {item.label}
                        </span>
                      </div>

                      <span className="text-xs text-slate-500">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            PRINCIPLES
        ============================================================ */}

        <section className="bg-slate-950 px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-blue-400">
                  Working Principles
                </p>

                <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Cara kami
                  <span className="block text-slate-500">
                    menjaga project.
                  </span>
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
                  Bukan sekadar menyelesaikan pekerjaan. Yang penting adalah
                  requirement, scope, dan output tetap terkontrol.
                </p>
              </div>

              <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
                {principles.map((item) => (
                  <div
                    key={item.number}
                    className="bg-slate-950 p-6 sm:p-7"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold text-blue-400">
                        {item.number}
                      </span>

                      <Check size={15} className="text-slate-600" />
                    </div>

                    <h3 className="mt-10 text-base font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-slate-400">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            CTA WHATSAPP
        ============================================================ */}

        <section className="border-b border-slate-200 bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-8 border border-slate-200 bg-slate-50 p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-blue-600" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-blue-600">
                    Start Project
                  </span>
                </div>

                <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Sudah tahu kebutuhannya?
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">
                  Kirim brief atau jelaskan kebutuhanmu melalui WhatsApp.
                  Kami bantu review requirement dan menentukan langkah
                  berikutnya.
                </p>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-slate-950 px-6 py-4 text-sm font-bold text-white transition duration-200 hover:bg-[#25D366]"
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
          </div>
        </section>
      </main>

      {/* ============================================================
          FOOTER
      ============================================================ */}

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-9 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div className="flex items-center gap-3">
            <img
              src={logoByTalent}
              alt="ByTalent Logo"
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

          <div className="flex items-center gap-2 text-xs text-slate-400">
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