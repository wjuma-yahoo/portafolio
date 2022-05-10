export const Portfolio = () => {
  return (
    <>
      <section className="inicio">
        <h2>Hi! My name Is</h2>
        <h1 className="inicio__name">
          Wilson <span className="inicio__name--apellido">Juma</span>
        </h1>
        <h2>Web Developer, Designer & Programmer</h2>
        <div className="social">
          <a href="/">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <footer className="footer">&copy; Copyright 2022</footer>
      </section>
    </>
  );
};
