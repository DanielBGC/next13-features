type ProductPropsType = {
  params: {
    id: string;
  };
};

export default function Product({ params }: ProductPropsType) {
  return <h1>Product: {params.id}</h1>;
}
