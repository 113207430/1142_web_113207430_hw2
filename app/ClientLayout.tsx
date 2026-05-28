"use client";
import { usePathname } from "next/navigation";

const bgMap: Record<string, string> = {
  "/": "url('/h.jpg')",
  "/question": "url('/h.jpg')",
  "/prepare": "url('/h.jpg')",
  "/result": "url('/h.jpg')",
};

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const bg = bgMap[pathname] ?? "url('/bg-welcome.png')";

  return (
    <div
  className="max-w-[480px] w-full min-h-screen mx-auto rounded-3xl "
  style={{ backgroundImage: bg, backgroundSize: "cover", backgroundPosition: "center top", opacity:"0.9" }}
>
  {children}
</div>
  );
}