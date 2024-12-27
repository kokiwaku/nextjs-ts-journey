"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useSelector } from "@/store";

export default function Header({ title }: { title: string }) {

  const auth = useSelector((state) => state.auth);
  return (
    <>
      <h1>{title}</h1>
      {
        auth.user.name && (
          <p>username: { auth.user.name }</p>
        )
      }
      <div className="button-container">
        <Link href="/"><button className="redirectToPageBth">Home</button></Link>
        <Link href="/todo/new"><button className="redirectToPageBth">Add Todo</button></Link>
      </div>
    </>
  );
};
