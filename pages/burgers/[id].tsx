
export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:5000/items');
  const data = await res.json();

  const paths = data.map((burger: any) => {
    return {
      params: {id: burger.id}
    }
  })
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const res = await fetch(`http://localhost:5000/items/${id}`);
  const data = await res.json();

  return {
    props: {burger: data}
  }
}

const Details = ({ burger }: any) => {
  console.log('details burger')
  return (
    <div>
      <h1>Details</h1>
    </div>
  )
};

export default Details;