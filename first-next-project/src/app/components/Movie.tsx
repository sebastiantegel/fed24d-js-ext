"use client";

import Image from "next/image";
import { Product } from "../models/Product";
import Link from "next/link";

type MovieProps = {
  movie: Product;
};

export default function Movie({ movie }: MovieProps) {
  return (
    <>
      <div>
        <h2>{movie.name}</h2>
        {/* <img src={movie.imageUrl} alt={movie.name} /> */}
        <Image src={movie.imageUrl} alt={movie.name} width={150} height={100} />
        <Link href={`/products/${movie.id}`}>Läs mer</Link>
      </div>
    </>
  );
}
