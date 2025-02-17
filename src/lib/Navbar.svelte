<section>
  <div></div>
  <nav>
    <a href="/">About &gt;</a>
    <a href="/projects">VietType &gt;</a>
    <a href="/archive">NUNG Exhibition &gt;</a>
    <a href="/about">Baviett &gt;</a>
    <a href="/contact">Three.js &gt;</a>
  </nav>
</section>
<img
  src="/favicon.png"
  alt="logo"
/>

<style>
  section {
    position: fixed;
    left: 20px;
    display: grid;
    grid-template-areas:
      'img'
      'nav';
    grid-template-rows: 1fr 4fr;
    gap: 20px;
    height: 98vh;
  }

  img {
    position: fixed;
    bottom: 15px;
    max-width: 100px;
    padding-top: 26px;
  }

  nav {
    font-family: 'IBM Plex Mono', serif;
    font-weight: 400;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    grid-area: 'nav';
  }

  a {
    color: black;
    text-decoration: none;
  }

  a:hover {
    color: #ffcc33;
    text-decoration: underline;
  }
</style>
