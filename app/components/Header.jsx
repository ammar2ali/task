import "../css/header.css";
export const Header = () => {
  return (
    <div className="header-container">
      <div className="header-left">
        <div>Zintools</div>
        <div className="search-isw">
          <form className="search-aqo">
            <input
              value=""
              type="text"
              className="search-rvi"
              placeholder="Search for Movies, TV Shows, Themes &amp; Cast "
            />
            <span className="search-s4t"></span>
            <span className="search-tpj">
              <i className="icon-p6t" style={{ size: "20px" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20.004"
                >
                  <path d="m19.705 18.288-5.531-5.531a7.927 7.927 0 1 0-1.424 1.421l5.531 5.532a1.006 1.006 0 0 0 1.422-1.422ZM3.738 12.096a5.908 5.908 0 1 1 8.354 0 5.869 5.869 0 0 1-8.354 0Z"></path>
                </svg>
              </i>
            </span>
          </form>
        </div>
      </div>
      <div className="header-right">
        <div className="header-button">
          <button className="login-btn custom-btn">Log in</button>
          <button className="custom-btn signup-btn">Sign up</button>
        </div>
      </div>
    </div>
  );
};
