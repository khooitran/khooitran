<script>
  import { currentLanguage, changeCurrentLanguage } from "./stores/language";
  let { lang = $bindable(currentLanguage), menuOpen = $bindable() } = $props();

  function changeLanguage() {
    lang = lang === "en" ? "vi" : "en";
    changeCurrentLanguage();
    menuOpen = menuOpen ? false : true;
  }
</script>

<button class={menuOpen ? "menu-open" : ""} onclick={changeLanguage}>
  EN/VI &gt;
</button>

<style>
  button {
    position: fixed;
    bottom: 2.25vh;
    left: 0;
    padding: 0 0 0 20px;
    margin: 0;
    border-style: none;
    background: white;
    color: #000;
    display: block;
    text-align: left;
    font-family: "IBM Plex Mono", serif;
    font-weight: 400;
    font-size: 36px;
    z-index: 1;
  }

  button:hover {
    color: #fc3;
    text-decoration: underline;
  }

  @media only screen and (max-width: 1280px) {
    button {
      font-size: 30px;
    }
  }

  @media only screen and (max-width: 1024px) {
    button {
      font-size: 24px;
    }
  }

  @media only screen and (max-width: 768px) {
    button {
      left: 100vw;
      width: 36vw;
      transition: left 360ms ease-in-out;
    }

    .menu-open {
      left: 50vw;
    }
  }

  @media only screen and (max-width: 600px) {
    .menu-open {
      left: 25vw;
    }

    button {
      font-size: 5vw;
    }
  }
</style>
