import logo1 from "../assets/logo1.jpg";
function Clients() {
  return (
    <section className="clients">
      <h2>Our Clients</h2>

      <p>We have been working with Fortune 500+ clients</p>

      <div className="logos">
        <img src={logo1} alt="Client Logo 1" />
        <img src={logo1} alt="Client Logo 2" />
        <img src={logo1} alt="Client Logo 3" />
        <img src={logo1} alt="Client Logo 4" />
    
      </div>
    </section>
  );
}

export default Clients;