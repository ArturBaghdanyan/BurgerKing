import Link from "next/link";

const AboutPage = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>
        Welcome to our burger haven, where we craft delicious burgers with passion and quality ingredients. Our journey began with a simple idea: to bring people together over a shared love for amazing food.
      </p>
      <p>
        From classic cheeseburgers to innovative chicken burgers, we take pride in offering a menu that caters to all taste buds. Each burger is made with fresh, locally sourced ingredients, ensuring every bite is as good as the last.
      </p>
      <p>
        Whether you are here for a quick lunch, a family dinner, or just to indulge in your favorite comfort food, we promise to deliver an unforgettable experience. Thank you for choosing us!
      </p>
      <p>
        <Link href='/'>Come back to the homepage</Link>
      </p>
    </div>
  )
}

export default AboutPage;