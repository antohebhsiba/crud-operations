function Navbar() {
  return (
    <nav className="navbar">
      <h2>Nexcent</h2>

      <ul>
        <li>Home</li>
        <li>Service</li>
        <li>Feature</li>
        <li>Product</li>
        <li>Testimonial</li>
        <li>FAQ</li>
      </ul>

      <div>
        <button className="login" style={{ backgroundColor: '#4CAF4F', color: 'white',fontSize: '16px', padding: '10px 20px', borderRadius: '4px' }}>
          Login
        </button>
        <button className="signup" style={{ backgroundColor: '#4CAF4F', color: 'white', fontSize: '16px', padding: '10px 20px', borderRadius: '4px' }}>
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;