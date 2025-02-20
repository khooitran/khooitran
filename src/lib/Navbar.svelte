<section>
  <div></div>
  <nav>
    <button><a href="/">About &gt;</a></button>
    <button><a href="/projects">VietType &gt;</a></button>
    <button><a href="/archive">NUNG Exhibition &gt;</a></button>
    <button><a href="/about">Baviett &gt;</a></button>
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
    display: flex;
    flex-direction: column;
    grid-area: 'nav';
  }

  button {
    padding: 0;
    margin: 0;
    border-style: none;
    background: white;
    display: block;
    text-align: left;
  }

  a {
    color: black;
    text-decoration: none;
    font-family: 'IBM Plex Mono', serif;
    font-weight: 400;
    font-size: 20px;
  }

  a:hover {
    color: #ffcc33;
    text-decoration: underline;
  }
</style>
