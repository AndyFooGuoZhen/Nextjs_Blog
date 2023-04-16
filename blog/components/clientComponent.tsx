"use client";

import { PostMetaData } from "./PostMetaData";

export default function ClientComponent(prop: PostMetaData[]) {
  const helo = prop;

  return <div>{prop[0].date}</div>;
}
