"use client";
import client from "@/lib/contentful-client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    client
      .getEntries({
        content_type: "post",
      })
      .then((resp) => console.log(resp.items));
  }, []);

  return <div>Hello world!</div>;
}
