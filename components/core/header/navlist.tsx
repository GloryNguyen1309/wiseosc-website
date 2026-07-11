"use client";
import { routes } from "@/lib/routes";
import { TECHNOLOGIES } from "@/lib/technologies";
import { cn } from "@/lib/utils";
import { ChevronRight, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

function NavMobile() {
  const [open, setOpen] = useState(false);
  const routesWithPath = routes.filter((route) => !!route.path);
  return (
    <>
      <button onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <div
        className={cn(
          "absolute top-20 z-10 left-0 w-full transition-all p-4 duration-100 bg-blue-950 origin-top",
          open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0",
        )}
      >
        <div className="w-full flex flex-col gap-2">
          {routesWithPath.map((route) => (
            <Link
              key={route.name}
              className="p-2 hover:no-underline m-0 text-sm hover:bg-blue-700 w-full"
              href={route.path!}
            >
              {route.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

function NavDesktop() {
  return (
    <nav className="size-full">
      <ul className="flex items-center justify-between gap-x-8">
        {routes.map((route) => (
          <li key={route.name} className="relative group shrink-0">
            <Link
              href={route.path ? route.path : "#"}
              className="py-2 px-1 whitespace-nowrap"
            >
              {route.name}
            </Link>
            {!!route.subItems.length && route.name === "Technologies" && (
              /* pt-2 = cầu nối không gap: dropdown sát link, chuột di chuyển xuống vẫn trong vùng hover */
              <div className="absolute left-1/2 top-full -translate-x-1/2 w-[640px] pt-2 z-20 scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-all duration-150 origin-top pointer-events-none group-hover:pointer-events-auto">
                <div className="flex gap-8 rounded-xl bg-blue-950 p-6">
                  <div className="flex-shrink-0 w-[220px] space-y-4">
                    <h3 className="font-semibold text-white">Technologies.</h3>
                    <p className="text-sm text-gray-300">
                      Get experts in 100+ technologies. Cover any tech stack.
                    </p>
                    <Link
                      href="/technologies"
                      className="inline-flex items-center gap-1 text-sm text-blue-300 hover:text-blue-200"
                    >
                      All Technologies <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className="flex-1 grid grid-cols-3 gap-x-6 gap-y-2">
                    {TECHNOLOGIES.map((tech) => (
                      <Link
                        key={tech.slug}
                        href={`/technologies/${tech.slug}`}
                        className="hover:bg-blue-700/50 p-2 rounded-lg text-sm text-gray-200 hover:text-white"
                      >
                        {tech.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {!!route.subItems.length && route.name !== "Technologies" && (
              <ul className="absolute top-8 w-max rounded-xl z-20 scale-y-0 bg-blue-950 p-4 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-all duration-150 origin-top">
                {route.subItems.map((sub) => (
                  <Link key={sub.name} href={sub.path}>
                    <li className="hover:bg-blue-700 p-2 rounded-lg">
                      {sub.name}
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export { NavDesktop, NavMobile };
