import type { Contact } from '../types/Translations'

type ContactFormProps = {
  contact: Contact
  endpoint: string
}

function ContactForm({ contact, endpoint }: ContactFormProps) {
  return (
    <form
      id="contact-form"
      className="grid gap-4 md:grid-cols-2 scroll-mt-3"
      action={endpoint}
      method="POST"
    >
      <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.2em] text-zinc-400">
        <span>{contact.formName}</span>
        <input
          className="rounded-xl border border-zinc-800 bg-zinc-950/40 px-3 py-2 text-sm text-zinc-100 focus:border-zinc-500 focus:outline-none"
          name="name"
          placeholder={contact.formName}
          type="text"
          required
        />
      </label>
      <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.2em] text-zinc-400">
        <span>{contact.formEmail}</span>
        <input
          className="rounded-xl border border-zinc-800 bg-zinc-950/40 px-3 py-2 text-sm text-zinc-100 focus:border-zinc-500 focus:outline-none"
          name="email"
          placeholder={contact.formEmail}
          type="email"
          required
        />
      </label>
      <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.2em] text-zinc-400 md:col-span-2">
        <span>{contact.formMessage}</span>
        <textarea
          className="min-h-[140px] rounded-xl border border-zinc-800 bg-zinc-950/40 px-3 py-2 text-sm text-zinc-100 focus:border-zinc-500 focus:outline-none"
          name="message"
          placeholder={contact.formMessage}
          required
        />
      </label>
      <div className="md:col-span-2">
        <button
          className="cursor-pointer rounded-full border border-zinc-100 bg-zinc-100 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-900 transition hover:-translate-y-0.5 hover:bg-zinc-200"
          type="submit"
        >
          {contact.formSubmit}
        </button>
      </div>
    </form>
  )
}

export default ContactForm
