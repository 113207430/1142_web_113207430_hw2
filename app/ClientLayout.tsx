"use client";
import { usePathname } from "next/navigation";

const bgMap: Record<string, string> = {
  "/": "url('/bg.jpg')",
  "/question": "url('/bg.jpg')",
  "/prepare": "url('/bg.jpg')",
  "/result": "url('/bg.jpg')",
};

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const bg = bgMap[pathname] ?? "url('/bg-welcome.png')";

  return (
    <div
  className="max-w-[480px] w-full min-h-screen mx-auto rounded-3xl"
  style={{ backgroundImage: bg, backgroundSize: "cover", backgroundPosition: "center top" }}
>
  {children}
</div>
  );
}