type ProductPropsType = {
  params: {
    id: string;
  };
};

/* Generate statically */
// export const metadata = {
//   title: 'Product 1',
// };

/* Generate dinamically */
export async function generateMetadata({ params }: ProductPropsType) {
  return {
    title: `Product ${params.id}`,
  };
}

export default function Product({ params }: ProductPropsType) {
  return <h1>Product: {params.id}</h1>;
}
