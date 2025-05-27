<script>
  let { title, description, src, alt, href } = $props();
</script>

<section>
  <div class="buffer"></div>
  <div class="container">
    <button>
      <a {href}>
        <h2>{title} &gt;</h2>
      </a>
    </button>
    <div class="flexbox">
      <p>{description}</p>
      <img {src} {alt} />
    </div>
  </div>
</section>

<style>
  section {
    margin-right: 20px;
    padding: 50px 0;
    display: flex;
  }

  .buffer {
    flex: 1;
  }

  .container {
    flex: 3;
  }

  button {
    padding: 0;
    margin: 0;
    border-style: none;
    background: white;
    display: block;
    text-align: start;
  }

  h2 {
    font-size: 48px;
    font-family: "IBM Plex Mono", "serif";
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

  .flexbox {
    display: flex;
    align-items: start;
  }

  p {
    font-family: "IBM Plex Mono";
    font-size: 20px;
    margin: 0;
    margin-right: 36px;
    flex: 1;
  }

  img {
    flex: 2;
    width: 66%;
  }

  @media only screen and (max-width: 1280px) {
    p {
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 1080px) {
    h2 {
      font-size: 4.5vw;
    }
    p {
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 768px) {
    .buffer {
      display: none;
    }

    section {
      margin: 20px;
    }

    h2 {
      font-size: 36px;
    }
  }

  @media only screen and (max-width: 600px) {
    .flexbox {
      flex-direction: column-reverse;
    }

    h2 {
      font-size: 5vw;
    }

    p {
      padding-top: 36px;
      width: 66vw;
    }

    img {
      width: 90%;
    }
  }
</style>
