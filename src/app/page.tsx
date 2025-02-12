import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({text: "hello from trpc"})
  const session = await auth();

  if (session?.user) {
    const {}= api.post.getLatest.prefetch();
  }


  return (
    <HydrateClient>
      <main >
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
           <span className="text-[hsla(118,100%,70%,1)]">Green Park</span> Control de registro
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            {/* department link pages */}
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
              href=""
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Departamento de Obras Exteriores</h3>
              <div className="text-lg">
                Aqui se mostrara la asistencia resumida de usuarios
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
              href=""
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Departamento de Terminacion</h3>
              <div className="text-lg">
                Aqui se mostrara la asistencia resumida de usuarios
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
              href=""
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Departamento de Pañete y Vaciado</h3>
              <div className="text-lg">
                Aqui se mostrara la asistencia resumida de usuarios
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
              href=""
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Departamento de Calidad</h3>
              <div className="text-lg">
                Aqui se mostrara la asistencia resumida de usuarios
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
              href=""
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Almacen</h3>
              <div className="text-lg">
                Aqui se mostrara la asistencia resumida de usuarios
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
              href=""
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Documentacion</h3>
              <div className="text-lg">
                Aqui se mostrara la asistencia resumida de usuarios
              </div>
            </Link>
          </div>
       

          {session?.user && <LatestPost />}
        </div>
      </main>
    </HydrateClient>
  );
}
