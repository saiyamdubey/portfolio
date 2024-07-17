import "./globals.css";
import type { Metadata } from "next";
import SideBar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import { ContactFormProvider, MenuProvider } from "@/components/Provider";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
export const metadata: Metadata = {
  title: "Saiyam Dubey",
  description: "Loved by Me",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MenuProvider>
          <ContactFormProvider>
            <ContactForm />
            <Toaster />
            <div className="flex">
              <SideBar />
              <main className="flex-1 pl-0 lg:pl-[300px]">
                <Navbar />
                {children}
                <Analytics />
              </main>
            </div>
          </ContactFormProvider>
        </MenuProvider>
      </body>
    </html>
  );
}
