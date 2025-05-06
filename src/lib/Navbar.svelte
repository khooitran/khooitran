<section>
  <div></div>
  <nav>
    <button><a href="/">Home &gt;</a></button>
    <button><a href="/archive">Archive &gt;</a></button>
    <button><a href="/contact">Contact &gt;</a></button>
    <button><a href="/credits">Credits &gt;</a></button>
  </nav>
</section>

<style>
  section {
    position: fixed;
    left: 20px;
    display: flex;
    flex-direction: column;
    height: 98vh;
  }

  div {
    flex: 1;
  }

  nav {
    display: flex;
    flex-direction: column;
    flex: 4;
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
    font-size: 36px;
  }

  a:hover {
    color: #ffcc33;
    text-decoration: underline;
  }
</style>
