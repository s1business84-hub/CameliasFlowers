"use client";
import { useMemo, useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(6, "Enter a valid phone"),
  email: z.string().email("Enter a valid email"),
  occasion: z.string().min(2, "Select occasion"),
  budget: z.string().min(1, "Select a range"),
  deliveryDate: z.string().min(1, "Choose date"),
  colors: z.string().optional(),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm({ defaultMessage }: { defaultMessage?: string }) {
  const [submitted, setSubmitted] = useState<FormValues | null>(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: { notes: defaultMessage } });

  const onSubmit = (values: FormValues) => {
    setSubmitted(values);
    reset();
  };

  const summary = useMemo(() => submitted && (
    <div className="mt-4 p-4 rounded-xl bg-green-50 border border-green-200 text-sm text-green-900">
      <p className="font-semibold">Request received.</p>
      <p>We will confirm via WhatsApp and email.</p>
      <ul className="mt-2 space-y-1">
        <li><strong>Occasion:</strong> {submitted.occasion}</li>
        <li><strong>Budget:</strong> {submitted.budget}</li>
        <li><strong>Date:</strong> {submitted.deliveryDate}</li>
        <li><strong>Colors:</strong> {submitted.colors || "Any"}</li>
      </ul>
    </div>
  ), [submitted]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-2xl p-6 space-y-4 shadow-glass">
      <div className="grid md:grid-cols-2 gap-4">
        <Field label="Name" error={errors.name?.message}>
          <input {...register("name") } className="input" placeholder="Your full name" />
        </Field>
        <Field label="Phone" error={errors.phone?.message}>
          <input {...register("phone") } className="input" placeholder="+971" />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input {...register("email") } className="input" placeholder="you@example.com" />
        </Field>
        <Field label="Occasion" error={errors.occasion?.message}>
          <select {...register("occasion")} className="input">
            <option value="">Select</option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Corporate</option>
            <option>Wedding</option>
            <option>Other</option>
          </select>
        </Field>
        <Field label="Budget Range" error={errors.budget?.message}>
          <select {...register("budget")} className="input">
            <option value="">Select</option>
            <option>AED 300-500</option>
            <option>AED 500-800</option>
            <option>AED 800-1200</option>
            <option>1200+</option>
          </select>
        </Field>
        <Field label="Delivery Date" error={errors.deliveryDate?.message}>
          <input type="date" {...register("deliveryDate")} className="input" />
        </Field>
      </div>
      <Field label="Preferred Colors" error={errors.colors?.message}>
        <input {...register("colors")} className="input" placeholder="Blush, ivory, sage" />
      </Field>
      <Field label="Notes" error={errors.notes?.message}>
        <textarea {...register("notes")} className="input" rows={3} placeholder="Share palette, venue, delivery notes" />
      </Field>
      <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full md:w-auto px-6 py-3 rounded-full bg-brand-rose text-white font-semibold shadow-soft">Submit request</motion.button>
      {summary}
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-brand-wine/90">
      {label}
      <div className="relative">
        {children}
        {error && <span className="text-xs text-red-600 absolute -bottom-5 left-0">{error}</span>}
      </div>
    </label>
  );
}

// basic input styles via globals
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = `.input{width:100%;padding:0.75rem 1rem;border-radius:0.75rem;border:1px solid #f3aac6;background:rgba(255,255,255,0.9);outline:none} .input:focus{box-shadow:0 0 0 3px rgba(228,94,145,0.2);}`;
  document.head.appendChild(style);
}
