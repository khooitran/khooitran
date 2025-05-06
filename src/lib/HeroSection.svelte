<script>
  let { title, description } = $props();
</script>

<section class="hero-section">
  <div class="buffer"></div>
  <div class="content">
    <h1>{title}</h1>
    <div class="description">
      <div>
        <p>
          {description}
        </p>
      </div>
      <p class="scroll">&darr; scroll &darr;</p>
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
    margin-bottom: 136px;
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

  .scroll {
    margin-bottom: 15px;
  }
</style>
