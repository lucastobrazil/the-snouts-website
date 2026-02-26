export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: "vinyl" | "apparel" | "accessories";
  description: string;
}

export const products: Product[] = [
  {
    id: "debut-vinyl",
    name: "Debut Album Vinyl",
    price: 45,
    image: "/images/products/placeholder-vinyl.svg",
    category: "vinyl",
    description: "Limited pressing on 180g black vinyl.",
  },
  {
    id: "logo-tee",
    name: "Logo Tee",
    price: 35,
    image: "/images/products/placeholder-tee.svg",
    category: "apparel",
    description: "Classic fit cotton tee with The Snouts logo.",
  },
  {
    id: "snapback-cap",
    name: "Snapback Cap",
    price: 30,
    image: "/images/products/placeholder-cap.svg",
    category: "accessories",
    description: "Embroidered logo on structured snapback.",
  },
  {
    id: "canvas-tote",
    name: "Canvas Tote",
    price: 25,
    image: "/images/products/placeholder-tote.svg",
    category: "accessories",
    description: "Heavy-duty canvas tote with screen-printed design.",
  },
];
