"use client";

import { useGetCountry } from "@/app/services/country";
import { usePathname, useRouter } from "next/navigation";

function Country() {
  const pathname = usePathname().replace("/", "");
  const { loading, error, data } = useGetCountry(pathname);
  const router = useRouter();

  if (loading)
    return (
      <p className="absolute top-1/2 pb-24 left-1/2 -translate-x-1/2 -translate-y-1/2">
        Loading...
      </p>
    );
  if (error)
    return (
      <p className="absolute top-1/2 pb-24 left-1/2 -translate-x-1/2 -translate-y-1/2">
        Error : {error.message}
      </p>
    );
  return (
    <>
      <button onClick={() => router.back()}>&lt;kembali</button>
      <div className="flex flex-col justify-center items-center h-screen w-full font-semibold pb-24">
        <p>{data?.country.name && "Country Name : " + data?.country.name}</p>
        <p>{data?.country.awsRegion && "Region : " + data?.country.awsRegion}</p>
        <p>{data?.country.capital && "Capital : " + data?.country.capital}</p>
        <p>{data?.country.code && "Code : " + data?.country.code}</p>
        <p>{data?.country.currency && "Currency : " + data?.country.currency}</p>
        <p>{data?.country.emoji && "Emoji Flag : " + data?.country.emoji}</p>
        <p>{data?.country.emojiU && "EmojiU : " + data?.country.emojiU}</p>
        <p>{data?.country.phone && "Phone : " + data?.country.phone}</p>
      </div>
    </>
  );
}

export default Country;
