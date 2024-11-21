import "./Section7.css";
const Section7 = () => {
  return (
    <div className=" bg-m section-7">
      <ul>
        <h2>Features</h2>
        <li>Plans and pricing</li>
        <li>iStock promo codes</li>
        <li>Tips and tricks</li>
        <li>Plugins and apps</li>
      </ul>

      <ul>
        <h2>Features</h2>
        <li>Search Guide</li>
        <li>Stock photos</li>
        <li>Stock videos</li>
        <li>Stock illustrations</li>
      </ul>
      <ul>
        <h2>Support</h2>
        <li>License information</li>
        <li>Affiliates</li>
        <li>Sell stock</li>
        <li>Legal / Privacy</li>
      </ul>
      <ul className="contact">
        <h2>Company</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
          repellat.
        </p>
        <div className="sub">
          <input type="text" placeholder="Enter Your Email" />
          <button>Subscribe</button>
        </div>
      </ul>
    </div>
  );
};

export default Section7;
