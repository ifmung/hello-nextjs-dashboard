import { Metadata } from "next";

export const metadata: Metadata  = {
  title: 'Customers'
}


export default function Page() {
  console.log('render customers')
  return <p>Customers Page</p>;
}
