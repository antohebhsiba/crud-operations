import imgg from "../assets/imgg.png";

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-content">
        <img src={imgg} alt="Testimonial" />

        <div className="text-content">
          <h1>The unseen of spending three years in Pixelgrade</h1>

          <p>
            The customer is very important, the customer will be followed by
            the customer. But as the customer is just the customer. But the
            mass of the life is various fringes. Children need to be placed
            at the gate. No real estate is targeted. No cushion of laughter
            at the price of the author.
          </p>

          <button style={{ backgroundColor: '#4CAF4F', color: 'white', border: 'none', padding: '12px 24px' }}>Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;