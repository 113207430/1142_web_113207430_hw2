"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const bgMap: Record<string, string> = {
  "/": "url('/hhh.png')",
  "/question": "url('/result.jpg')",
  "/prepare": "url('/accounter.png')",
  "/result": "url('/result.jpg')",
};

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const bg = bgMap[pathname] ?? "url('/bg-welcome.png')";
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
  className="max-w-[480px] w-full mx-auto rounded-3xl overflow-y-auto"
  style={{ 
    height: "calc(100vh - 2rem)",  // 上下各留 1rem
    backgroundImage: bg, 
    backgroundSize: "cover", 
    backgroundPosition: "center top" 
  }}
>
      <audio ref={audioRef} src="3.mp3" loop />
      
      {/* 音樂 icon */}
      <button
        onClick={toggleMusic}
        className="absolute top-3 right-140 z-50 bg-white/20 backdrop-blur-md rounded-full p-2 border border-white/30"
      >
        {isPlaying ? "🔈" : "🔇"}
      </button>

      {children}
    </div>
  );
}