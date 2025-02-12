<script>
  import Navbar from '$lib/Navbar.svelte';
</script>

<section>
  <Navbar />
  <div>
    <h1>Khoi<br />Tran</h1>
    <p>
      Hi! I am an aspiring creative developer and designer based in Hanoi, Vietnam. I have an
      interest in typography and type design, both on paper and on the web. I am currently studying
      Design Studies at RMIT University Hanoi.
    </p>
  </div>
</section>

<style>
  h1,
  p {
    font-family: 'IBM Plex Mono', serif;
  }

  h1 {
    font-weight: 900;
    font-size: 128px;
    margin: 0;
    padding: 0;
  }

  p {
    font-weight: 400;
    font-size: 36px;
    width: 66%;
  }

  section {
    display: grid;
    grid-template-areas:
      'none content'
      'nav content';
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr 4fr;
    gap: 20px;
    width: 98vw;
    height: 98vh;
  }

  div {
    grid-area: content;
    display: grid;
    grid-template-rows: 3fr 1fr;
  }
</style>
