"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

interface PropertyGalleryProps {
  images: string[];
  name: string;
}

export function PropertyGallery({ images, name }: PropertyGalleryProps) {
  const [primary, ...rest] = images;

  return (
    <section className="grid gap-4 lg:grid-cols-[2fr,1.2fr]">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-aurum-border/70 bg-aurum-surface"
      >
        <Image
          src={primary}
          alt={name}
          fill
          priority
          className="object-cover transition-transform duration-[1400ms] hover:scale-[1.04]"
        />
      </motion.div>
      <div className="grid gap-4 sm:grid-cols-2">
        {rest.map((img) => (
          <motion.div
            key={img}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-aurum-border/70 bg-aurum-surface"
          >
            <Image
              src={img}
              alt={name}
              fill
              className="object-cover transition-transform duration-[1200ms] hover:scale-[1.05]"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}


