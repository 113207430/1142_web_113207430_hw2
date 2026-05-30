"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { usePsyStore } from "@/store/store";

const bgMap: Record<string, string> = {
  "/": "url('/backgrounds/hhhh.png')",
  "/question": "url('/backgrounds/gg.jpg')",
  "/prepare": "url('/backgrounds/accounter.png')",
  "/result": "url('/backgrounds/result.jpg')",
};

function getAudioSrc(pathname: string, score: number): string {
  if (pathname === "/result") {
    if (score > 23) return "/mp3s/hell3.mp3";
    if (score > 18) return "/mp3s/hell2.mp3";
  }
  return "/mp3s/3.mp3";
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const bg = bgMap[pathname] ?? "url('/bg-welcome.png')";
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { psyData } = usePsyStore();

  const targetSrc = getAudioSrc(pathname, psyData.score);

  // Auto-play on first mount
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  // Switch audio track when targetSrc changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const currentSrc = new URL(audio.src).pathname; // e.g. "/mp3s/3.mp3"
    if (currentSrc === targetSrc) return;

    const wasPlaying = !audio.paused;
    audio.pause();
    audio.src = targetSrc;
    audio.volume = 0.5;
    audio.load();

    if (wasPlaying) {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    } else {
      setIsPlaying(false);
    }
  }, [targetSrc]);

  function toggleMusic() {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }

  return (
    <div
      className="relative max-w-[480px] w-full mx-auto rounded-3xl overflow-y-auto"
      style={{
        height: "calc(100vh - 2rem)",
        backgroundImage: bg,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      <audio ref={audioRef} src="/mp3s/3.mp3" loop />

      {/* 音樂 icon */}
      <button
        onClick={toggleMusic}
        className="absolute bottom-4 right-4 z-50 bg-white/20 backdrop-blur-md rounded-full p-2 border border-white/30"
      >
        {isPlaying ? "🔈" : "🔇"}
      </button>

      {children}
    </div>
  );
}