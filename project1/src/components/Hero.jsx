import img from "../assets/img.png";
function Hero() {
  return (
    <section className="hero">
      <div>
        <h1>
          Lessons and insights <br />
          <span>from 8 years</span>
        </h1>

        <p>
          Where to grow your business as a photographer:
          site or social media?
        </p>

        <button>Register</button>
      </div>
         <img src={img} alt="Hero" />
    </section>
  );
}

export default Hero;