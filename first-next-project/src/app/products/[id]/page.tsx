"use client";

import { useParams } from "next/navigation";

const SingleProduct = () => {
  const { id } = useParams();

  return <>{id}</>;
};

export default SingleProduct;
