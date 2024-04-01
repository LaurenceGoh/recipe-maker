import Navbar from "@/components/Navbar";
import Recipes from "@/components/Recipes";
import Search from "@/components/Search";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Recipes />
    </main>
  );
}
