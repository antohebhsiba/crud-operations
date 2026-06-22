import blog1 from "../assets/blog1.png";
function Blog() {
  return (
    <div className="blog">

      <h1>Caring is the new marketing</h1>

      <p>
        The Nexcent blog is the best place to read about
        membership insights and trends.
      </p>

      <div className="blog-cards">

        <div className="card">
          <img
            src={blog1}
            alt=""
          />

          <h3>
            Creating Streamlined Safeguarding
            Processes with OneRen
          </h3>

          <button style={{ background: "#4CAF4F", color: "black", borderRadius: "4px", fontSize: "16px", padding: "10px 20px" }}>
            Read More
          </button>
        </div>

        <div className="card">
          <img
            src={blog1}
            alt=""
          />

          <h3>
            What are your safeguarding
            responsibilities?
          </h3>

          <button style={{ background: "#4CAF4F", color: "black", borderRadius: "4px", fontSize: "16px", padding: "10px 20px" }}>
            Read More
          </button>
        </div>

        <div className="card">
          <img
            src={blog1}
            alt=""
          />

          <h3>
            Revamping the Membership Model
            with Triathlon Australia
          </h3>

          <button style={{ background: "#4CAF4F", color: "black", borderRadius: "4px", fontSize: "16px", padding: "10px 20px" }}>
            Read More
          </button>
        </div>

      </div>

    </div>
  );
}

export default Blog;