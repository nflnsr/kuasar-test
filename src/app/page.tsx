import { Countries } from "@/app/_section/countries";
import { Card } from "@/components/card";
import { Search } from "@/components/search";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="w-full pb-10">
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <div className="flex flex-col items-center mt-5">
          <h1>Card Guidelines</h1>
          <Card className="group">
            <p className="line-clamp-2 underline decoration-gray-400 group-hover:decoration-gray-500 inline">
              Country Name
            </p>
            <p className="line-clamp-1 inline text-red-500">&nbsp;&#40;Emoji Flag&#41;</p>
            <p className="line-clamp-1">Capital</p>
            <p className="line-clamp-1">Currency</p>
            <p className="line-clamp-1">Phone</p>
          </Card>
        </div>
        <Suspense>
          <Search />
        </Suspense>
      </div>
      <div className="w-full px-8 sm:px-16 md:px-24 lg:px-28 2xl:px-32 py-8">
        <div className="w-full h-1 bg-slate-400" />
      </div>
      <Suspense>
        <Countries />
      </Suspense>
    </main>
  );
}
