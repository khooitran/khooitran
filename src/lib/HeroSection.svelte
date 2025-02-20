<section class="hero-section">
  <div class="content">
    <h1>Khoi Tran</h1>
    <div class="description">
      <div>
        <p>
          Hi! I am an aspiring creative developer and designer based in Hanoi, Vietnam. I have an
          interest in typography and type design, both on paper and on the web. I am currently
          studying Design Studies at RMIT University Hanoi.
        </p>
        <button>
          <a
            href="https://www.instagram.com/khooi.tran/"
            target="_blank">Instagram &gt;</a
          >
        </button>
        <button><a href="mailto:khooi.tr@gmail.com/">Email &gt;</a></button>
      </div>
      <p class="scroll">&darr; scroll &darr;</p>
    </div>
  </div>
</section>

<style>
  h1,
  p,
  a {
    font-family: 'IBM Plex Mono', serif;
  }

  .hero-section {
    display: grid;
    grid-template-areas: 'none content';
    grid-template-columns: 1fr 3fr;
    gap: 20px;
    width: 98vw;
    height: 98vh;
    margin-bottom: 136px;
  }

  h1 {
    font-weight: 900;
    font-size: 128px;
    margin: 0;
    padding: 0;
    grid-area: 'title';
  }

  .content {
    grid-area: content;
    display: grid;
    gap: 20px;
    grid-template-rows: 1fr 4fr;
    grid-template-areas:
      'title'
      'description';
    height: 98vh;
  }

  .description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  p {
    font-weight: 400;
    font-size: 36px;
    width: 66%;
    margin: 0;
    padding: 0;
    margin-bottom: 36px;
  }

  button {
    padding: 0;
    margin: 0;
    border-style: none;
    background: white;
    display: block;
  }

  a {
    color: black;
    text-decoration: none;
    font-size: 36px;
    display: block;
  }

  a:hover {
    color: #ffcc33;
    text-decoration: underline;
  }

  .scroll {
    margin-bottom: 15px;
  }
</style>
