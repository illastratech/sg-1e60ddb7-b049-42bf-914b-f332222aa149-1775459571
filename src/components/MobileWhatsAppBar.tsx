import Link from "next/link";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/94776783241";

export function MobileWhatsAppBar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 px-6 pb-[max(1rem,env(safe-area-inset-bottom))] pt-2 sm:px-10 lg:px-14 xl:px-20 md:hidden">
      <Link
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex w-full items-center justify-center gap-2 rounded-full bg-[hsl(142_71%_45%)] py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/30 transition hover:bg-[hsl(142_71%_40%)]"
      >
        <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
        Chat on WhatsApp Now
      </Link>
    </div>
  );
}
