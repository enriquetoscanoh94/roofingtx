import { WhatsappIcon } from './BrandIcons'
import { BUSINESS } from '../i18n/translations'

// Persistent quick-contact button — the highest-intent action on a mobile lead page.
export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${BUSINESS.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110 active:scale-95"
    >
      <WhatsappIcon size={30} />
    </a>
  )
}
