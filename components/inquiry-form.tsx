'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface InquiryFormProps {
  context?: string;
  id?: string;
}

export function InquiryForm({ context, id }: InquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div id={id} className="card-surface p-6 sm:p-7 space-y-4">
      <p className="text-xs tracking-[0.22em] uppercase text-aurum-textMuted">
        Schedule a Conversation
      </p>
      <h3 className="h3 text-lg">
        Share a few details and our advisory team will connect with you.
      </h3>
      <AnimatePresence initial={false}>
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="rounded-2xl border border-aurum-accent/40 bg-aurum-accent/5 px-4 py-3 text-sm text-aurum-accent"
          >
            Thank you. Your enquiry has been received. A dedicated advisor will connect
            with you within the next business day to understand your requirements and
            share aligned options.
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs text-aurum-textMuted">Full Name</label>
                <input
                  required
                  name="name"
                  className="input mt-1"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs text-aurum-textMuted">Email</label>
                <input
                  required
                  name="email"
                  type="email"
                  className="input mt-1"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs text-aurum-textMuted">Phone</label>
                <input
                  name="phone"
                  className="input mt-1"
                  placeholder="+91"
                  type="tel"
                />
              </div>
              <div>
                <label className="text-xs text-aurum-textMuted">Preferred Timing</label>
                <select name="timing" className="input mt-1 bg-aurum-surface">
                  <option>10:00 – 13:00</option>
                  <option>13:00 – 16:00</option>
                  <option>16:00 – 19:00</option>
                  <option>Flexible</option>
                </select>
              </div>
            </div>
            {context && (
              <div>
                <label className="text-xs text-aurum-textMuted">Property</label>
                <input
                  readOnly
                  className="input mt-1 bg-aurum-surface/70"
                  value={context}
                />
              </div>
            )}
            <div>
              <label className="text-xs text-aurum-textMuted">How can we assist?</label>
              <textarea
                name="message"
                className="textarea mt-1 min-h-[90px]"
                placeholder="Share your preferences, timelines, or any specific requirement."
              />
            </div>
            <button
              type="submit"
              className="btn-primary w-full justify-center text-xs tracking-[0.22em] uppercase"
            >
              Submit Enquiry
            </button>
            <p className="text-[11px] text-aurum-textMuted">
              By submitting, you consent to being contacted by Aurum Estates for related
              property advisory. Your details are kept confidential and are never sold to
              third parties.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

