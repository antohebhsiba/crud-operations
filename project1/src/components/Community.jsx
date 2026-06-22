function Community() {
  const cards = [
    "Membership Organisations",
    "National Associations",
    "Clubs And Groups",
  ];

  return (
    <section className="community">
      <h2>
        Manage your entire community
        <br />
        in a single system
      </h2>

      <div className="cards">
        {cards.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item}</h3>
            <p>
              Membership management software provides
              full automation.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Community;