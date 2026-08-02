"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-lg border border-red/20 bg-red/5 p-6 text-navy"
      >
        <p className="font-heading text-lg font-semibold">Mesajınız alındı</p>
        <p className="mt-1 text-sm text-foreground/70">
          En kısa sürede sizinle iletişime geçeceğiz.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-navy">
          Ad Soyad
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-md border border-black/10 px-3 py-2 text-sm focus:border-red focus:outline-none focus:ring-1 focus:ring-red"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-navy">
          E-posta
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-md border border-black/10 px-3 py-2 text-sm focus:border-red focus:outline-none focus:ring-1 focus:ring-red"
        />
      </div>
      <div>
        <label htmlFor="subject" className="mb-1 block text-sm font-medium text-navy">
          Konu
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          className="w-full rounded-md border border-black/10 px-3 py-2 text-sm focus:border-red focus:outline-none focus:ring-1 focus:ring-red"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-navy">
          Mesaj
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-md border border-black/10 px-3 py-2 text-sm focus:border-red focus:outline-none focus:ring-1 focus:ring-red"
        />
      </div>
      <button
        type="submit"
        className="rounded-md bg-red px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-dark"
      >
        Gönder
      </button>
    </form>
  );
}
