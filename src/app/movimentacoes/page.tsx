import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* w-full é o width 100% */}
      <NavBar active="movimentacoes"/>
      <h2>Movimentações</h2>
    </main>
  );
}
