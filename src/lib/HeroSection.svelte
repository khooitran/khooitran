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
    font-family: "IBM Plex Mono", serif;
  }

  .hero-section {
    display: flex;
    width: 97vw;
    height: 97vh;
  }

  .buffer {
    flex: 1;
    height: 100%;
  }

  h1 {
    font-weight: 900;
    font-size: 7vw;
    flex: 1;
    margin: 0;
    padding: 0;
  }

  .content {
    flex: 3;
    display: flex;
    flex-direction: column;
    height: 100%;
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
  }

  .description :global {
    a {
      color: black;
      text-decoration: none;
      font-family: "IBM Plex Mono", serif;
      font-weight: 400;
      font-size: 36px;
    }

    a:hover {
      color: #ffcc33;
      text-decoration: underline;
    }
  }

  @media only screen and (max-width: 1280px) {
    h1 {
      font-size: 7vw;
    }

    p {
      font-size: 30px;
    }

    .description :global {
      a {
        font-size: 30px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    h1 {
      font-size: 7vw;
    }

    p {
      font-size: 24px;
    }

    .description :global {
      a {
        font-size: 24px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .buffer {
      display: none;
    }

    .hero-section {
      margin-left: 20px;
    }
  }

  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 15vw;
    }

    p {
      width: 78vw;
      font-size: 5vw;
    }

    .description :global {
      a {
        font-size: 5vw;
      }
    }
  }
</style>
