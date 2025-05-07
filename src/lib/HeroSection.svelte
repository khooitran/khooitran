<script>
  let { title, description, endNote } = $props();
</script>

<section class="hero-section">
  <div class="buffer"></div>
  <div class="content">
    <h1>{title}</h1>
    <div class="description">
      <div>
        <p>
          {@html description}
        </p>
      </div>
      <p class="end-note">{@html endNote}</p>
    </div>
  </div>
</section>

<style>
  h1,
  p {
    font-family: 'IBM Plex Mono', serif;
  }

  .hero-section {
    display: flex;
    width: 98vw;
    height: 98vh;
  }

  .buffer {
    flex: 1;
  }

  h1 {
    font-weight: 900;
    font-size: 136px;
    flex: 1;
    margin: 0;
    padding: 0;
  }

  .content {
    flex: 3;
    display: flex;
    flex-direction: column;
    height: 98vh;
  }

  .description {
    flex: 4;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  p {
    font-weight: 400;
    font-size: 36px;
    width: 70%;
    margin: 0;
    padding: 0;
    margin-bottom: 36px;
  }

  .description :global {
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
  }

  .end-note {
    margin-bottom: 15px;
  }
</style>
