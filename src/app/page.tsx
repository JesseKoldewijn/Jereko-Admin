import { Suspense } from "react";

import { api } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-center text-5xl tracking-tight sm:text-[5rem]">
          Jereko <span className="font-extrabold">Admin</span>
        </h1>
        <div>
          <Suspense fallback={<div className="animate-pulse">...</div>}>
            {hello.greeting}
          </Suspense>
        </div>
      </div>
    </main>
  );
}
