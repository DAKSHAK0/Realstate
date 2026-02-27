"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export function HeroImage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
            className="relative"
        >
            <div className="card-surface overflow-hidden">
                <div className="relative aspect-[4/5]">
                    <Image
                        src="https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt="Cinematic view of a luxury residence"
                        fill
                        priority
                        sizes="(min-width: 1024px) 480px, 100vw"
                        className="object-cover"
                    />
                </div>
            </div>
            <div className="absolute -bottom-6 -left-6 card-surface px-4 py-3 text-xs text-aurum-textMuted max-w-xs">
                Verified listings, aligned developers and structured processes designed to
                make every decision both informed and intuitive.
            </div>
        </motion.div>
    );
}
