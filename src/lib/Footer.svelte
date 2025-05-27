<script>
  let { message } = $props();
</script>

<footer>
  <div></div>
  <p>&uarr; {message} &uarr;</p>
</footer>

<style>
  footer {
    margin: 0;
    padding: 0;
    padding-top: 120px;
    margin-bottom: 1vh;
    display: flex;
  }

  div {
    flex: 1;
    padding: 0;
    margin: 0;
  }

  p {
    font-family: "IBM Plex Mono";
    margin: 0;
    padding: 0;
    flex: 3;
    font-size: 36px;
  }

  @media only screen and (max-width: 1280px) {
    p {
      font-size: 30px;
    }
  }

  @media only screen and (max-width: 1080px) {
    p {
      font-size: 24px;
    }
  }

  @media only screen and (max-width: 768px) {
    div {
      display: none;
    }

    footer {
      margin-left: 20px;
    }
  }

  @media only screen and (max-width: 600px) {
    p {
      font-size: 5vw;
    }
  }
</style>
