import Head from "next/head";

export async function getServerSideProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  const data = await response.json();

  return {
    props: {
      reviews: data.slice(0, 20)
    }
  }
}

const Reviews = ({ reviews }: any) => {

  return (
    <>
      <Head>
        <title>burgers</title>
        <p>assva</p>
      </Head>
      <div>
        <h1>reviews clients</h1>
        <div className='reviews'>
          {reviews.length && reviews.slice(0, 20).map((res: any) => {
            return (
              <div key={res.id}>
                {res.id} {''}
                {`${res.name.slice(0, 90)}...`}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Reviews;