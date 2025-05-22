<script>
  import { currentLanguage, changeCurrentLanguage } from "./stores/language";
  let { lang = $bindable(currentLanguage) } = $props();

  function changeLanguage() {
    lang = lang === "en" ? "vi" : "en";
    changeCurrentLanguage();
  }
</script>

<button onclick={changeLanguage}> EN/VI &gt; </button>

<style>
  button {
    position: absolute;
    bottom: 2.25vh;
    left: 20px;
    padding: 0;
    margin: 0;
    border-style: none;
    background: white;
    display: block;
    text-align: left;
    font-family: "IBM Plex Mono", serif;
    font-weight: 400;
    font-size: 36px;
  }

  button:hover {
    color: #ffcc33;
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
      left: -25vh;
    }
  }
</style>
