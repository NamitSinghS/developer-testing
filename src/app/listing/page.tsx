import Lists from '../_components/Lists';



export default function Listing({ searchParams }) {
  
  return (
    <>
      <h3 className="mx-auto mt-0 mb-4 text-2xl font-bold">Property Listing</h3>
      <div className="centered">
        <Lists requirementList={searchParams} />
      </div>
    </>
  );
}