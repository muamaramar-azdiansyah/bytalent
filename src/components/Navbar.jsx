import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logoByTalent from "../assets/logobytalent.jpeg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappLink = "https://wa.me/6281399844327";

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ============================================================
            NAVBAR MAIN
        ============================================================ */}
        <div className="flex h-[72px] items-center justify-between">
          {/* LOGO */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3"
          >
            <div className="h-10 w-10 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <img
                src={logoByTalent}
                alt="ByTalent Logo"
                className="h-full w-full object-cover"
              />
            </div>

            <span className="text-xl font-bold tracking-tight text-slate-950">
              ByTalent
            </span>
          </Link>

          {/* ============================================================
              DESKTOP MENU
          ============================================================ */}
          <div className="hidden items-center gap-7 text-sm font-semibold text-slate-600 md:flex">
            <Link
              to="/"
              className="transition duration-200 hover:text-blue-600"
            >
              Beranda
            </Link>

            <Link
              to="/layanan"
              className="transition duration-200 hover:text-blue-600"
            >
              Layanan
            </Link>

            <Link
              to="/cara-kerja"
              className="transition duration-200 hover:text-blue-600"
            >
              Cara Kerja
            </Link>

            <Link
              to="/portfolio"
              className="transition duration-200 hover:text-blue-600"
            >
              Portfolio
            </Link>

            <Link
              to="/testimoni"
              className="transition duration-200 hover:text-blue-600"
            >
              Testimoni
            </Link>

            <Link
              to="/faq"
              className="transition duration-200 hover:text-blue-600"
            >
              FAQ
            </Link>
          </div>

          {/* ============================================================
              DESKTOP CTA
          ============================================================ */}
          <div className="hidden md:block">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-2.5 text-xs font-bold text-white shadow-sm transition duration-300 hover:bg-[#25D366] hover:shadow-md"
            >
              WhatsApp
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* ============================================================
              MOBILE MENU BUTTON
          ============================================================ */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isOpen}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm transition duration-200 hover:border-slate-300 hover:bg-slate-50 md:hidden"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* ============================================================
            MOBILE DROPDOWN MENU
        ============================================================ */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            isOpen
              ? "max-h-[500px] pb-4 opacity-100"
              : "max-h-0 pb-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-2 shadow-sm">
            {/* BERANDA */}
            <Link
              to="/"
              onClick={closeMenu}
              className="flex items-center rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white hover:text-blue-600"
            >
              Beranda
            </Link>

            {/* LAYANAN */}
            <Link
              to="/layanan"
              onClick={closeMenu}
              className="flex items-center rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white hover:text-blue-600"
            >
              Layanan
            </Link>

            {/* CARA KERJA */}
            <Link
              to="/cara-kerja"
              onClick={closeMenu}
              className="flex items-center rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white hover:text-blue-600"
            >
              Cara Kerja
            </Link>

            {/* PORTFOLIO */}
            <Link
              to="/portfolio"
              onClick={closeMenu}
              className="flex items-center rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white hover:text-blue-600"
            >
              Portfolio
            </Link>

            {/* TESTIMONI */}
            <Link
              to="/testimoni"
              onClick={closeMenu}
              className="flex items-center rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white hover:text-blue-600"
            >
              Testimoni
            </Link>

            {/* FAQ */}
            <Link
              to="/faq"
              onClick={closeMenu}
              className="flex items-center rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white hover:text-blue-600"
            >
              FAQ
            </Link>

            {/* DIVIDER */}
            <div className="my-2 border-t border-slate-200" />

            {/* WHATSAPP */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-sm transition duration-300 hover:bg-[#20bd5a]"
            >
              WhatsApp Kami
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}