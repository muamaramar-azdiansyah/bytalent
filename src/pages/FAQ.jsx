import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  Clock3,
  HelpCircle,
  Menu,
  MessageCircle,
  ShieldCheck,
  X,
} from "lucide-react";

const whatsappLink = "https://wa.me/6281399844327";

const faqGroups = [
  {
    category: "Sebelum Order",
    description: "Hal yang biasanya ditanyakan sebelum memulai pekerjaan.",
    items: [
      {
        question: "Bisa konsultasi dulu sebelum menentukan layanan?",
        answer:
          "Bisa. Justru kami menyarankan untuk konsultasi terlebih dahulu, terutama jika kamu belum yakin layanan apa yang sesuai. Ceritakan kebutuhan, kondisi pekerjaan, atau kendalanya. Setelah itu kami bantu menentukan scope pekerjaan yang paling relevan.",
      },
      {
        question: "Kalau saya belum tahu harus menggunakan metode apa, apakah bisa dibantu?",
        answer:
          "Bisa dibantu untuk memahami dan menentukan pendekatan yang sesuai dengan kebutuhan penelitian. Namun keputusan akhir mengenai metode penelitian tetap berada pada peneliti dan menyesuaikan arahan dosen atau ketentuan kampus.",
      },
      {
        question: "Apakah bisa request format dari kampus?",
        answer:
          "Bisa. Jika memiliki template, pedoman penulisan, contoh dari kampus, atau format khusus dari dosen, sebaiknya dikirim saat konsultasi awal agar pengerjaan dapat menyesuaikan kebutuhan tersebut.",
      },
      {
        question: "Kalau saya cuma butuh konsultasi, bukan pengerjaan, bisa?",
        answer:
          "Bisa. Tidak semua kebutuhan harus berupa pengerjaan full. Kamu dapat menyampaikan bagian yang sedang bermasalah, misalnya variabel penelitian, penyusunan instrumen, output statistik, atau interpretasi hasil.",
      },
    ],
  },
  {
    category: "Proses Pengerjaan",
    description: "Bagaimana pekerjaan berjalan setelah scope disepakati.",
    items: [
      {
        question: "Bagaimana proses order di ByTalent?",
        answer:
          "Prosesnya dimulai dari konsultasi kebutuhan melalui WhatsApp. Setelah kebutuhan dipahami, scope pekerjaan dan estimasi pengerjaan dibahas. Jika sudah disepakati, pekerjaan dilanjutkan sesuai scope yang telah ditentukan.",
      },
      {
        question: "Berapa lama waktu pengerjaannya?",
        answer:
          "Tergantung jenis pekerjaan, tingkat kesulitan, kelengkapan data, dan jumlah bagian yang dikerjakan. Estimasi waktu akan dibicarakan setelah kebutuhan dan scope pekerjaan diketahui.",
      },
      {
        question: "Apakah bisa pengerjaan urgent?",
        answer:
          "Bisa ditanyakan terlebih dahulu. Pengerjaan urgent bergantung pada tingkat kesulitan pekerjaan dan antrean yang sedang berjalan. Jangan mengandalkan slot urgent sebelum mendapatkan konfirmasi dari admin.",
      },
      {
        question: "Apakah selama proses bisa bertanya atau berdiskusi?",
        answer:
          "Bisa. Komunikasi digunakan untuk memastikan kebutuhan dan hasil pekerjaan tetap sesuai dengan scope yang telah disepakati. Untuk pekerjaan tertentu, diskusi juga diperlukan ketika ada bagian yang membutuhkan penjelasan tambahan.",
      },
      {
        question: "Kalau di tengah pengerjaan ada perubahan dari dosen bagaimana?",
        answer:
          "Perubahan yang masih berada dalam scope pekerjaan dapat dibahas dan disesuaikan. Jika perubahan membuat scope pekerjaan bertambah cukup jauh dari kesepakatan awal, detailnya akan dikomunikasikan kembali sebelum dikerjakan.",
      },
    ],
  },
  {
    category: "Revisi & Hasil",
    description: "Tentang review, revisi, dan penyesuaian hasil.",
    items: [
      {
        question: "Apakah ada revisi?",
        answer:
          "Untuk pekerjaan yang memang membutuhkan revisi, mekanismenya mengikuti kesepakatan pada saat order. Revisi sebaiknya disampaikan dengan jelas, termasuk bagian yang perlu diubah dan alasan perubahannya.",
      },
      {
        question: "Kalau hasil SPSS sudah jadi, apakah saya bisa minta dijelaskan?",
        answer:
          "Bisa. Selain output, pembahasan mengenai cara membaca hasil dapat dikonsultasikan. Misalnya memahami nilai signifikansi, koefisien, uji hipotesis, atau bagian output lain yang relevan dengan penelitian.",
      },
      {
        question: "Apakah saya mendapatkan file hasil pengerjaan?",
        answer:
          "Jenis file yang diberikan menyesuaikan layanan yang dipesan. Detail output, format file, dan kebutuhan tambahan sebaiknya dikonfirmasi sejak awal agar hasil akhirnya sesuai dengan kebutuhan.",
      },
      {
        question: "Bisa menyesuaikan dengan revisi dosen?",
        answer:
          "Bisa dibahas selama revisinya berkaitan dengan scope pekerjaan. Untuk revisi baru yang mengubah struktur atau menambah pekerjaan secara signifikan, scope-nya perlu dievaluasi kembali.",
      },
    ],
  },
  {
    category: "Pembayaran",
    description: "Informasi umum mengenai kesepakatan pekerjaan.",
    items: [
      {
        question: "Bagaimana sistem pembayarannya?",
        answer:
          "Detail pembayaran disampaikan saat konsultasi dan sebelum pekerjaan dimulai. Nominal dapat berbeda tergantung jenis layanan dan scope pekerjaan yang disepakati.",
      },
      {
        question: "Apakah harga setiap layanan sama?",
        answer:
          "Tidak. Harga menyesuaikan jenis pekerjaan, tingkat kesulitan, jumlah data atau halaman, deadline, dan scope pekerjaan. Karena itu, harga sebaiknya tidak ditentukan hanya berdasarkan nama layanan.",
      },
      {
        question: "Bisa minta estimasi harga sebelum order?",
        answer:
          "Bisa. Kirimkan detail kebutuhan terlebih dahulu. Setelah scope pekerjaan cukup jelas, admin dapat memberikan estimasi yang lebih sesuai dibandingkan harga perkiraan tanpa melihat kebutuhan.",
      },
    ],
  },
  {
    category: "Privasi & Data",
    description: "Hal yang perlu diperhatikan ketika mengirimkan file.",
    items: [
      {
        question: "Apakah data penelitian saya aman?",
        answer:
          "File yang dikirim digunakan untuk kebutuhan pengerjaan sesuai scope yang disepakati. Tetap disarankan untuk tidak mengirimkan informasi pribadi yang tidak diperlukan untuk pekerjaan, terutama data sensitif milik responden.",
      },
      {
        question: "Apakah data responden perlu dikirim semuanya?",
        answer:
          "Tidak selalu. Kirimkan hanya data yang memang diperlukan untuk pekerjaan. Jika identitas responden tidak diperlukan, sebaiknya informasi identitas pribadi dihapus atau disamarkan terlebih dahulu.",
      },
      {
        question: "Apakah file bisa dihapus setelah pekerjaan selesai?",
        answer:
          "Permintaan terkait penyimpanan atau penghapusan file dapat dibicarakan saat proses order. Untuk keamanan, pengguna juga disarankan menyimpan salinan file penting secara mandiri.",
      },
    ],
  },
];

const quickQuestions = [
  "Saya belum tahu layanan yang cocok",
  "Saya butuh bantuan SPSS",
  "Saya ingin konsultasi skripsi",
  "Saya punya deadline dekat",
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
                path === "/faq"
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
                  path === "/faq"
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

function FAQItem({ item, isOpen, onClick }) {
  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between gap-6 py-5 text-left"
      >
        <span className="text-sm font-bold leading-6 text-slate-900 sm:text-[15px]">
          {item.question}
        </span>

        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md border transition ${
            isOpen
              ? "border-blue-200 bg-blue-50 text-blue-600"
              : "border-slate-200 bg-white text-slate-500"
          }`}
        >
          <ChevronDown
            size={16}
            className={`transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </span>
      </button>

      {isOpen && (
        <div className="pb-5 pr-10">
          <p className="text-sm leading-7 text-slate-600">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  );
}

function FAQGroup({ group, groupIndex }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="border border-slate-200 bg-white">
      <div className="border-b border-slate-200 bg-slate-50 px-5 py-4 sm:px-6">
        <div className="flex items-start gap-3">
          <div className="font-mono text-[10px] font-bold text-blue-600">
            {String(groupIndex + 1).padStart(2, "0")}
          </div>

          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.08em] text-slate-950">
              {group.category}
            </h2>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              {group.description}
            </p>
          </div>
        </div>
      </div>

      <div className="px-5 sm:px-6">
        {group.items.map((item, index) => (
          <FAQItem
            key={index}
            item={item}
            isOpen={openIndex === index}
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          />
        ))}
      </div>
    </section>
  );
}

export default function FAQ() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Navbar />

      {/* HERO */}
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-end">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
                <HelpCircle size={13} />
                Frequently Asked Questions
              </div>

              <h1 className="max-w-3xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Sebelum mulai,
                <br />
                <span className="text-blue-600">mungkin kamu ingin tahu.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Beberapa pertanyaan yang paling sering muncul sebelum
                konsultasi, mulai dari proses order, revisi, deadline, sampai
                pengelolaan data.
              </p>
            </div>

            <div className="border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600">
                <Clock3 size={13} />
                Quick Response
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Kalau pertanyaanmu belum ada di sini, langsung kirim detail
                kebutuhan melalui WhatsApp. Tidak perlu menunggu sampai yakin
                dengan jenis layanan yang dipilih.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-slate-950 transition hover:text-blue-600"
              >
                Tanya langsung
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK QUESTIONS */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="shrink-0 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
              Quick Questions
            </div>

            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((question) => (
                <a
                  key={question}
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 transition hover:border-blue-200 hover:text-blue-600"
                >
                  {question}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CONTENT */}
      <main className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="mb-10 max-w-2xl">
          <div className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
            FAQ / Knowledge Base
          </div>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
            Pertanyaan yang sering ditanyakan
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            Klik pertanyaan untuk melihat penjelasannya.
          </p>
        </div>

        <div className="space-y-5">
          {faqGroups.map((group, index) => (
            <FAQGroup
              key={group.category}
              group={group}
              groupIndex={index}
            />
          ))}
        </div>
      </main>

      {/* TRUST SECTION */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="border border-slate-200 bg-white p-5">
              <MessageCircle size={20} className="text-blue-600" />

              <h3 className="mt-4 text-sm font-bold text-slate-950">
                Konsultasi dulu
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Tidak harus langsung menentukan layanan. Jelaskan masalahnya
                terlebih dahulu.
              </p>
            </div>

            <div className="border border-slate-200 bg-white p-5">
              <ShieldCheck size={20} className="text-blue-600" />

              <h3 className="mt-4 text-sm font-bold text-slate-950">
                Scope jelas
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Detail pekerjaan dibicarakan sebelum proses dimulai agar
                ekspektasi kedua pihak tetap jelas.
              </p>
            </div>

            <div className="border border-slate-200 bg-white p-5">
              <Clock3 size={20} className="text-blue-600" />

              <h3 className="mt-4 text-sm font-bold text-slate-950">
                Deadline dibahas
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Estimasi pengerjaan menyesuaikan kompleksitas pekerjaan dan
                kondisi antrean.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <div className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-blue-400">
                Still Have Questions?
              </div>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Tidak menemukan jawaban yang kamu cari?
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-400 sm:text-base">
                Tidak masalah. Kirim kebutuhanmu langsung melalui WhatsApp.
                Jelaskan sebisanya, nanti kita bahas dari sana.
              </p>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-blue-50"
            >
              <WhatsAppIcon size={18} />
              Tanya via WhatsApp
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
            FAQ / Knowledge Base
          </div>
        </div>
      </footer>
    </div>
  );
}