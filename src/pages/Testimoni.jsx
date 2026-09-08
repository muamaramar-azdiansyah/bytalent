import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Menu,
  MessageCircle,
  Star,
  X,
} from "lucide-react";

const whatsappLink = "https://wa.me/6281399844327";

/*
  DATA DEMO / FIKTIF
  Ganti dengan testimoni pelanggan asli sebelum dipublikasikan
  sebagai testimoni nyata.
*/

const testimonials = [
  {
    name: "Nadia Putri",
    role: "Mahasiswa S1",
    service: "Skripsi",
    rating: 5,
    text: "Awalnya saya cukup bingung menentukan variabel dan alur penelitiannya. Setelah dibantu, bagian yang tadinya terasa berantakan jadi lebih mudah saya pahami.",
    initials: "NP",
  },
  {
    name: "Rizky Ramadhan",
    role: "Mahasiswa S1",
    service: "SPSS",
    rating: 5,
    text: "Yang saya suka bukan cuma hasil olah datanya, tapi penjelasan cara membaca output SPSS-nya. Jadi waktu ditanya dosen saya masih bisa menjelaskan.",
    initials: "RR",
  },
  {
    name: "Aulia Rahma",
    role: "Mahasiswa S1",
    service: "Sempro",
    rating: 5,
    text: "Materinya dibuat lebih terstruktur dan bagian metodologinya jadi lebih jelas. Revisi setelah konsultasi juga cukup cepat.",
    initials: "AR",
  },
  {
    name: "Fajar Nugroho",
    role: "Mahasiswa S1",
    service: "Research",
    rating: 5,
    text: "Saya minta bantuan untuk mencari dan memetakan penelitian terdahulu. Matrix-nya membantu banget buat melihat posisi penelitian saya.",
    initials: "FN",
  },
  {
    name: "Siti Amalia",
    role: "Mahasiswa S1",
    service: "Jurnal",
    rating: 5,
    text: "Bagian yang paling membantu menurut saya adalah penyusunan artikel supaya lebih runtut. Beberapa bagian yang sebelumnya terlalu panjang juga jadi lebih ringkas.",
    initials: "SA",
  },
  {
    name: "Dimas Pratama",
    role: "Mahasiswa Teknik",
    service: "Technical",
    rating: 5,
    text: "Untuk bagian teknis saya cukup terbantu karena dijelaskan step by step. Jadi bukan cuma dikasih file, tapi saya tahu prosesnya seperti apa.",
    initials: "DP",
  },
  {
    name: "Intan Maharani",
    role: "Mahasiswa S1",
    service: "SmartPLS",
    rating: 5,
    text: "Sempat stuck di bagian interpretasi hasil. Setelah dibahas satu per satu, akhirnya saya ngerti hubungan antara output dan pembahasan penelitian.",
    initials: "IM",
  },
  {
    name: "Bagas Saputra",
    role: "Mahasiswa S1",
    service: "Jamovi",
    rating: 5,
    text: "Saya sebelumnya belum pernah pakai Jamovi. Dibantu dari data sampai interpretasi hasilnya, prosesnya jadi jauh lebih gampang.",
    initials: "BS",
  },
  {
    name: "Vina Oktaviani",
    role: "Mahasiswa S1",
    service: "Skripsi",
    rating: 5,
    text: "Komunikasinya enak karena bisa langsung bahas bagian yang memang sedang saya kerjakan. Tidak terlalu banyak basa-basi dan langsung ke masalahnya.",
    initials: "VO",
  },
];

const stats = [
  {
    value: "01",
    label: "Diskusi",
    desc: "Kebutuhan dibahas terlebih dahulu.",
  },
  {
    value: "02",
    label: "Pengerjaan",
    desc: "Scope pekerjaan disesuaikan dengan kebutuhan.",
  },
  {
    value: "03",
    label: "Review",
    desc: "Hasil dicek sebelum diberikan.",
  },
  {
    value: "04",
    label: "Selesai",
    desc: "File dan hasil akhir dikirim.",
  },
];

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

function Navbar() {
  const [open, setOpen] = useState(false);

  const menus = [
    ["Beranda", "/"],
    ["Layanan", "/layanan"],
    ["Cara Kerja", "/cara-kerja"],
    ["Portfolio", "/portfolio"],
    ["Testimoni", "/testimoni"],
    ["FAQ", "/faq"],
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8 lg:px-10">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-950 text-sm font-black text-white">
            B
          </div>

          <div>
            <div className="text-lg font-bold tracking-tight text-slate-950">
              ByTalent
            </div>
            <div className="hidden text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400 sm:block">
              Academic & Technical Service
            </div>
          </div>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {menus.map(([label, path]) => (
            <Link
              key={path}
              to={path}
              className={`text-sm font-semibold transition ${
                path === "/testimoni"
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-blue-600"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-blue-600 md:flex"
        >
          <WhatsAppIcon size={15} />
          Konsultasi
        </a>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 md:hidden">
          <div className="mx-auto max-w-7xl space-y-1">
            {menus.map(([label, path]) => (
              <Link
                key={path}
                to={path}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-3 text-sm font-semibold ${
                  path === "/testimoni"
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {label}
              </Link>
            ))}

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 py-3 text-sm font-bold text-white"
            >
              <WhatsAppIcon size={17} />
              Konsultasi via WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function Rating({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, index) => (
        <Star
          key={index}
          size={14}
          className="fill-amber-400 text-amber-400"
        />
      ))}
    </div>
  );
}

function TestimonialCard({ item }) {
  return (
    <article className="group flex h-full flex-col border border-slate-200 bg-white p-5 transition hover:border-blue-200 hover:shadow-sm sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-700">
            {item.initials}
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-950">
              {item.name}
            </h3>
            <p className="mt-0.5 text-xs text-slate-500">{item.role}</p>
          </div>
        </div>

        <Rating count={item.rating} />
      </div>

      <div className="mt-5 flex-1">
        <p className="text-sm leading-6 text-slate-600">
          “{item.text}”
        </p>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
        <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">
          Layanan
        </span>

        <span className="rounded-md bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-600">
          {item.service}
        </span>
      </div>
    </article>
  );
}

export default function Testimoni() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Navbar />

      {/* HERO */}
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
              <MessageCircle size={13} />
              Client Feedback
            </div>

            <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Pengalaman dari
              <br />
              <span className="text-blue-600">mereka yang dibantu.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Setiap kebutuhan memiliki konteks yang berbeda. Berikut contoh
              bagaimana klien menggambarkan pengalaman mereka selama proses
              pengerjaan dan konsultasi bersama ByTalent.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 border-y border-slate-200 sm:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.value}
                className="border-b border-slate-200 px-4 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:px-6 sm:last:border-r-0"
              >
                <div className="font-mono text-xs font-bold text-blue-600">
                  {item.value}
                </div>

                <div className="mt-2 text-sm font-bold text-slate-950">
                  {item.label}
                </div>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL GRID */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <div className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                Feedback / 001
              </div>

              <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                Apa yang mereka rasakan
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              Fokus kami bukan sekadar menyelesaikan pekerjaan, tetapi membuat
              prosesnya tetap dapat dipahami oleh klien.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <TestimonialCard key={index} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <div className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                Why ByTalent
              </div>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                Bukan sekadar
                <br />
                kirim file.
              </h2>

              <p className="mt-5 max-w-md text-sm leading-6 text-slate-600">
                Kami mencoba menjaga proses tetap terstruktur agar kebutuhan,
                pengerjaan, dan hasil akhir memiliki konteks yang jelas.
              </p>
            </div>

            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {[
                {
                  title: "Kebutuhan dipahami terlebih dahulu",
                  desc: "Sebelum pengerjaan dimulai, scope dan kebutuhan dibahas agar tidak salah arah.",
                },
                {
                  title: "Hasil disesuaikan dengan kebutuhan",
                  desc: "Format dan pendekatan pekerjaan menyesuaikan jenis tugas atau penelitian.",
                },
                {
                  title: "Ada ruang untuk review",
                  desc: "Bagian yang perlu diperbaiki dapat dibahas kembali sesuai kesepakatan.",
                },
                {
                  title: "Komunikasi langsung",
                  desc: "Diskusi dapat dilakukan melalui WhatsApp sehingga lebih mudah untuk follow-up.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 py-5"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-blue-600"
                  />

                  <div>
                    <h3 className="text-sm font-bold text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 text-sm leading-6 text-slate-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-slate-950">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <div className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-blue-400">
                Start a Project
              </div>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Punya kebutuhan yang sedang dikerjakan?
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-400 sm:text-base">
                Ceritakan kebutuhanmu terlebih dahulu. Kami bantu melihat scope
                pekerjaan dan menentukan langkah berikutnya.
              </p>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-blue-50"
            >
              <WhatsAppIcon size={18} />
              Mulai Konsultasi
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div>
            <div className="text-sm font-bold text-white">ByTalent</div>
            <div className="mt-1 text-xs text-slate-500">
              Academic & Technical Service
            </div>
          </div>

          <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-slate-600">
            Testimoni / Client Feedback
          </div>
        </div>
      </footer>
    </div>
  );
}