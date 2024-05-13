import LeftBar from "@/components/LeftBar";
import { Link, Sidebar } from "lucide-react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        <LeftBar></LeftBar>
        {children}
        
    </main>
  );
}
