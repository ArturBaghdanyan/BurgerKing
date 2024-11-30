import Link from 'next/link';
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {

    setTimeout(() => {
      router.push('/').then(r => console.log(r));
    }, 3000);

  }, []);

  return (
    <div className='not-found'>
      <h1>Oy..</h1>
      <h2>this page not found</h2>
      <p>
        come back
        <Link href='/'>Home page</Link>
      </p>
    </div>
  )
}
export default NotFoundPage;