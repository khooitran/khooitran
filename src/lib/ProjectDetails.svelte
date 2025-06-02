<script>
  let { src, alt, description } = $props();
</script>

<section>
  <div class="buffer"></div>
  <div class="container">
    <p>{description}</p>
    <img {src} {alt} />
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
    width: 100%;
    flex: 2;
  }

  @media only screen and (max-width: 1280px) {
    p {
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 1080px) {
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
  }

  @media only screen and (max-width: 600px) {
    .container {
      flex-direction: column-reverse;
    }

    p {
      padding-top: 20px;
      width: 66vw;
    }

    img {
      width: 90%;
    }
  }
</style>
