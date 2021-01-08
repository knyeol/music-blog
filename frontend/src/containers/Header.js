function Header() {
  const url =
    "https://res.cloudinary.com/knyeol/image/upload/v1609973570/wengang_zhai_c_R_Em_Xf_Mvs_Z0_unsplash_20aaa1f897.jpg";

  return (
    <div className="header" style={{ backgroundImage: `url(${url})` }}>
      <div className="header-overlay">
        <h2>Piano, Music Theory, and Composition</h2>
      </div>
    </div>
  );
}

export default Header;
