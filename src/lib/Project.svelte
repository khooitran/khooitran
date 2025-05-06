<script>
  let { title, description, src, alt, href } = $props();
</script>

<section>
  <div class="container">
    <button>
      <a {href}>
        <h2>{title} &gt;</h2>
      </a>
    </button>
    <div class="flexbox">
      <p>{description}</p>
      <img
        {src}
        {alt}
      />
    </div>
  </div>
</section>

<style>
  section {
    margin-bottom: 136px;
    margin-right: 20px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-areas: 'none content';
  }

  .container {
    grid-area: content;
  }

  .flexbox {
    display: flex;
  }

  button {
    padding: 0;
    margin: 0;
    border-style: none;
    background: white;
    display: block;
  }

  h2 {
    font-size: 48px;
    font-family: 'IBM Plex Mono', 'serif';
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

  p {
    font-family: 'IBM Plex Mono';
    font-size: 20px;
    margin: 0;
    margin-right: 36px;
  }

  img {
    width: 66%;
  }
</style>
