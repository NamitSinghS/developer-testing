//"use client"
//import { useQuery } from '@apollo/client';
//import { GET_PROPERTIES } from "../../graphql/queries";
import Filter from './_components/Filter';

export default function Home() {

  /*const {data} = useQuery(GET_PROPERTIES, {
    variables: {
      category: 'RENT',
      minPrice: 10000,
      maxPrice: 30000,
      bedroom: 0,
      minArea: 19,
      maxArea: 40
    }
  });

  console.log(data);*/

  return (
    <main className="flex justify-center items-center">
      <Filter />
    </main>
  );
}
