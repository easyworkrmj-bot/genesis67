import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, Cpu, Server, ShieldCheck, Terminal } from 'lucide-react';

const PlaneSVG = () => (
  <svg viewBox="0 0 64 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-6 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
    <path d="M10 12 L20 10 L45 10 L55 12 L45 14 L20 14 Z" fill="currentColor" opacity="0.9" />
    <path d="M30 11 L24 2 L28 2 L36 11 Z" fill="currentColor" />
    <path d="M30 13 L24 22 L28 22 L36 13 Z" fill="currentColor" />
    <path d="M48 11 L52 5 L55 5 L53 11 Z" fill="currentColor" />
    <circle cx="28" cy="12" r="1" fill="#fff" />
    <circle cx="32" cy="12" r="1" fill="#fff" />
    <circle cx="36" cy="12" r="1" fill="#fff" />
  </svg>
);

const TrainSVG = () => (
  <div className="flex items-end gap-1">
    <div className="w-10 h-5 bg-orange-500 rounded-t-md rounded-l-lg relative border border-orange-400/50 flex items-center justify-end px-1 shadow-[0_0_8px_rgba(249,115,22,0.3)]">
      <div className="w-1.5 h-1.5 bg-orange-200 rounded-full animate-pulse mr-1" />
      <div className="absolute -top-1 left-3 w-1.5 h-1.5 bg-neutral-600 rounded-t-sm" />
    </div>
    <div className="w-8 h-4 bg-indigo-500 rounded-sm border border-indigo-400/40" />
    <div className="w-8 h-4 bg-emerald-500 rounded-sm border border-emerald-400/40" />
  </div>
);

const TruckSVG = () => (
  <div className="relative">
    <div className="flex items-end">
      <div className="w-4 h-5 bg-neutral-300 rounded-t-md border-r-0 border border-neutral-400/30 flex items-center p-0.5">
        <div className="w-2 h-2 bg-neutral-900 rounded-sm" />
      </div>
      <div className="w-11 h-6 bg-cyan-500 rounded-sm border border-cyan-400/40 flex items-center justify-center text-[7px] font-bold text-cyan-100 shadow-[0_0_8px_rgba(6,182,212,0.3)]">
        CD
      </div>
    </div>
    <div className="absolute bottom-[-3px] left-1 flex gap-5">
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 0.6, ease: "linear" }}
        className="w-2 h-2 bg-neutral-900 border border-white/20 rounded-full flex items-center justify-center text-[4px]"
      />
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 0.6, ease: "linear" }}
        className="w-2 h-2 bg-neutral-900 border border-white/20 rounded-full flex items-center justify-center text-[4px]"
      />
    </div>
  </div>
);

const CargoShipSVG = () => (
  <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-28 h-10 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
    <path d="M10 25 L105 25 L115 15 L25 15 Z" fill="currentColor" opacity="0.85" />
    <path d="M25 15 L105 15 L108 5 L102 5 L101 10 L80 10 L80 15 Z" fill="currentColor" opacity="0.7" />
    <rect x="30" y="5" width="12" height="10" fill="#f43f5e" stroke="#fda4af" strokeWidth="0.5" rx="1" />
    <rect x="44" y="5" width="12" height="10" fill="#3b82f6" stroke="#93c5fd" strokeWidth="0.5" rx="1" />
    <rect x="58" y="5" width="12" height="10" fill="#eab308" stroke="#fef08a" strokeWidth="0.5" rx="1" />
    <rect x="37" y="-5" width="12" height="10" fill="#10b981" stroke="#6ee7b7" strokeWidth="0.5" rx="1" />
    <rect x="51" y="-5" width="12" height="10" fill="#a855f7" stroke="#d8b4fe" strokeWidth="0.5" rx="1" />
  </svg>
);

const CartonBoxSVG = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 text-amber-500 drop-shadow-[0_0_4px_rgba(245,158,11,0.5)]">
    <path d="M2 17 L10 21 L10 11 L2 7 Z" fill="currentColor" opacity="0.8" />
    <path d="M10 21 L18 17 L18 7 L10 11 Z" fill="currentColor" opacity="0.9" />
    <path d="M2 7 L10 11 L18 7 L10 3 Z" fill="currentColor" />
    <path d="M10 3 L10 11" stroke="#3730a3" strokeWidth="0.5" opacity="0.4" />
  </svg>
);

const WaveSVG = ({ className, delay = 0 }: { className?: string; delay?: number }) => (
  <motion.svg
    viewBox="0 0 1200 120"
    className={`absolute bottom-0 left-0 w-full h-12 fill-current ${className}`}
    preserveAspectRatio="none"
    animate={{
      x: [0, -100, 0],
      y: [0, 4, -4, 0]
    }}
    transition={{
      repeat: Infinity,
      duration: 8,
      delay,
      ease: "easeInOut"
    }}
  >
    <path d="M0,60 C150,90 350,30 500,60 C650,90 850,30 1000,60 C1150,90 1300,30 1450,60 L1450,120 L0,120 Z" />
  </motion.svg>
);

function LogisticsVisualizer() {
  return (
    <div className="relative w-full h-72 rounded-2xl border border-white/5 bg-[#101014]/60 backdrop-blur-md overflow-hidden p-4 flex flex-col justify-between mt-8 z-10">
      <div className="flex justify-between items-center border-b border-white/5 pb-2 text-mono-tech text-[9px] tracking-wider text-white/40">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          SIMULATION ACTIVE: LOGISTIQUE MULTI-MODALE
        </span>
        <span>CDISCOUNT INGRESS PIPELINE</span>
      </div>

      <div className="flex-1 relative min-h-0 select-none overflow-hidden flex flex-col justify-between py-1">
        
        {/* SKY TRACK (AVION) */}
        <div className="relative h-10 w-full border-b border-white/[0.02]">
          <motion.div
            initial={{ x: "120%" }}
            animate={{ x: "-40%" }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="absolute top-1 opacity-20 text-white"
          >
            <svg className="w-8 h-4 fill-current" viewBox="0 0 24 12">
              <path d="M6 10a4 4 0 0 1-1-7.8 4.5 4.5 0 0 1 8.5-1 3 3 0 0 1 5.2 2.8 4 4 0 0 1-1 6H6z" />
            </svg>
          </motion.div>

          <motion.div
            initial={{ x: "150%" }}
            animate={{ x: "-30%" }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            className="absolute top-4 opacity-15 text-white"
          >
            <svg className="w-6 h-3 fill-current" viewBox="0 0 24 12">
              <path d="M6 10a4 4 0 0 1-1-7.8 4.5 4.5 0 0 1 8.5-1 3 3 0 0 1 5.2 2.8 4 4 0 0 1-1 6H6z" />
            </svg>
          </motion.div>

          <div className="absolute top-5 left-0 w-full h-px bg-indigo-500/10 border-dashed border-b border-indigo-500/5" />

          <motion.div
            initial={{ x: "-100px", y: 4 }}
            animate={{
              x: ["-100px", "600px"],
              y: [2, 6, 2, 4, 2]
            }}
            transition={{
              x: { repeat: Infinity, duration: 12, ease: "linear" },
              y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
            }}
            className="absolute left-0"
          >
            <PlaneSVG />
          </motion.div>
        </div>

        {/* RAIL TRACK (VOIE FERRÉE) */}
        <div className="relative h-10 w-full flex items-center">
          <div className="absolute bottom-1.5 left-0 w-full h-[3px] bg-neutral-800 flex justify-between overflow-hidden opacity-30">
            {Array.from({ length: 40 }).map((_, i) => (
              <div key={i} className="w-[2px] h-full bg-white/40" />
            ))}
          </div>

          <motion.div
            initial={{ x: "500px" }}
            animate={{ x: "-200px" }}
            transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
            className="absolute bottom-1"
          >
            <TrainSVG />
          </motion.div>
        </div>

        {/* ROAD TRACK (VOITURE / CAMION) */}
        <div className="relative h-10 w-full flex items-center">
          <div className="absolute bottom-1 left-0 w-full h-1 bg-neutral-800/40" />
          <div className="absolute bottom-1.5 left-0 w-full h-[1px] border-dashed border-b border-neutral-600/30" />

          <motion.div
            initial={{ x: "-150px" }}
            animate={{ 
              x: ["-150px", "550px"],
              y: [0, -1, 0, -0.5, 0]
            }}
            transition={{ 
              x: { repeat: Infinity, duration: 10, ease: "linear" },
              y: { repeat: Infinity, duration: 0.4, ease: "easeInOut" }
            }}
            className="absolute bottom-1"
          >
            <TruckSVG />
          </motion.div>
        </div>

        {/* SEA & CONVEYOR TRACK (EAU & BATEAU & CARTON) */}
        <div className="relative h-16 w-full mt-2 bg-cyan-950/10 rounded-b-lg border-t border-cyan-500/5">
          <WaveSVG className="text-cyan-900/20 h-10" delay={4} />

          <motion.div
            initial={{ x: "60%" }}
            animate={{
              x: ["60%", "20%", "60%"],
              y: [4, 8, 4],
              rotate: [-2, 2, -2]
            }}
            transition={{
              x: { repeat: Infinity, duration: 22, ease: "easeInOut" },
              y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
              rotate: { repeat: Infinity, duration: 5, ease: "easeInOut" }
            }}
            className="absolute bottom-1 z-10"
          >
            <CargoShipSVG />
          </motion.div>

          <WaveSVG className="text-cyan-500/10 h-8" delay={0} />

          <div className="absolute bottom-2 left-2 w-28 h-4 bg-neutral-800/80 rounded-t-sm border border-neutral-700/60 z-20 flex items-center px-1">
            <div className="w-full h-1 bg-neutral-900/60 rounded-full overflow-hidden flex justify-between">
              <div className="w-2 h-full bg-neutral-600 animate-pulse" />
              <div className="w-2 h-full bg-neutral-600 animate-pulse" />
              <div className="w-2 h-full bg-neutral-600 animate-pulse" />
            </div>
            
            <motion.div
              animate={{
                x: [0, 60, 80, 85, 80],
                y: [0, 0, -25, -2, 0],
                rotate: [0, 0, 180, 360, 360],
                scaleX: [1, 1, 0.9, 1.1, 1],
                scaleY: [1, 1, 1.2, 0.8, 1],
                opacity: [0, 1, 1, 1, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                times: [0, 0.4, 0.65, 0.85, 1],
                ease: "easeInOut"
              }}
              className="absolute left-1 bottom-4"
            >
              <CartonBoxSVG />
            </motion.div>
          </div>
          
          <div className="absolute bottom-2 left-32 text-[7px] font-mono text-white/30 z-20">
            DOCK LOADING AREA
          </div>
        </div>

      </div>

      <div className="flex justify-between items-center text-[8px] font-mono text-white/30 border-t border-white/5 pt-1.5">
        <span>AERODROME TRK: 082°</span>
        <span>TRAIN SPD: 82 KM/H</span>
        <span>OCEAN STATE: CALM</span>
      </div>
    </div>
  );
}

interface WelcomeScreenProps {
  onSuccess: () => void;
}

export default function WelcomeScreen({ onSuccess }: WelcomeScreenProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isShaking, setIsShaking] = useState(false);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (password === 'Naty') {
      onSuccess();
    } else {
      setError('❌ MOT DE PASSE INCORRECT');
      setIsShaking(true);
      setPassword('');
      setTimeout(() => setIsShaking(false), 400);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#0C0C0E] text-white flex flex-col justify-between z-[9999] overflow-hidden select-none font-sans">
      {/* Inline styling for custom technical backgrounds and fonts */}
      <style>{`
        .tech-grid {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .text-syne {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
        }
        .text-mono-tech {
          font-family: 'JetBrains Mono', monospace;
        }
      `}</style>

      {/* HEADER */}
      <header className="px-6 py-4 border-b border-white/10 flex justify-between items-center text-mono-tech text-[10px] tracking-[0.2em] text-white/40 uppercase">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-white/50" />
          <span>TERMINAL.ACCESS.ID: 9482-P</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
          <span>PACKING LIST PRO V10.0</span>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-0">
        
        {/* HERO SECTION (LEFT) */}
        <section className="relative flex flex-col justify-between p-8 sm:p-12 lg:p-16 border-r-0 lg:border-r border-white/10 overflow-hidden bg-[#0A0A0C]">
          {/* Subtle Grid overlay */}
          <div className="absolute inset-0 tech-grid opacity-40 pointer-events-none" />
          
          <div className="relative z-10 space-y-4 pt-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 text-mono-tech text-[10px] tracking-[0.2em] text-cyan-400"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>LOGISTIQUE EN TEMPS RÉEL</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-syne text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-[-0.04em] uppercase text-white"
            >
              ANDRY<br />NANTENAINA
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="w-24 h-px bg-white"
            />
          </div>

          {/* Realtime Animated Logistics Environment */}
          <LogisticsVisualizer />
        </section>

        {/* LOGIN SECTION (RIGHT) */}
        <section className="flex flex-col justify-center p-8 sm:p-16 lg:p-24 bg-[#0F0F12]/80 relative">
          
          <div className="max-w-md w-full mx-auto space-y-12">
            
            {/* Service identifier */}
            <div className="space-y-2">
              <span className="text-mono-tech text-xs tracking-[0.15em] text-white/40 uppercase block">
                CDISCOUNT CARGO PARTNER PORTAL
              </span>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white font-sans">
                PORTAIL FOURNISSEUR
              </h2>
            </div>

            {/* Interactive Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={
                isShaking
                  ? { x: [-8, 8, -8, 8, -4, 4, 0], scale: [1, 0.99, 1.01, 1], transition: { duration: 0.4 } }
                  : { opacity: 1, scale: 1 }
              }
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="password"
                    placeholder="MOT DE PASSE"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (error) setError('');
                    }}
                    autoFocus
                    className={`w-full bg-[#151518] text-white font-mono border ${error ? 'border-red-500' : 'border-white/10 focus:border-white'} p-5 text-sm tracking-[0.2em] outline-none transition-colors duration-200`}
                  />
                  <Lock className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                </div>

                {/* Error presentation */}
                <AnimatePresence mode="wait">
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="text-red-500 text-mono-tech text-[11px] tracking-wider uppercase font-semibold"
                    >
                      {error}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Access Action CTA */}
                <button
                  type="submit"
                  className="w-full bg-white hover:bg-neutral-200 text-[#0C0C0E] p-5 text-mono-tech font-bold text-xs tracking-[0.15em] uppercase transition-opacity duration-150 cursor-pointer flex justify-between items-center"
                >
                  <span>ACCÈS SÉCURISÉ</span>
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </button>
              </form>
            </motion.div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="px-6 py-4 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 text-mono-tech text-[10px] tracking-[0.15em] text-white/40 uppercase">
        <div className="flex items-center gap-2">
          <Server className="w-3.5 h-3.5 text-white/30" />
          <span>[01] CDISCOUNT CARGO PARTNER PORTAL</span>
        </div>
        <div className="md:text-center flex items-center md:justify-center gap-2">
          <Cpu className="w-3.5 h-3.5 text-white/30" />
          <span>SYSTEM STATUS: READY</span>
        </div>
        <div className="md:text-right text-white/30 font-bold">
          LATENCY: 12MS // ENCRYPTION: AES-256
        </div>
      </footer>

    </div>
  );
}
