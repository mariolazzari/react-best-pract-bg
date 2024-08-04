import { Todos } from "@/components/Todos";

function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Todos />
    </main>
  );
}

export default Home;
