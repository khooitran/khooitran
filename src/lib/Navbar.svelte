<script>
  import { currentLanguage } from "./stores/language";

  let { menuOpen = $bindable() } = $props();

  function toggleMenu() {
    menuOpen = menuOpen ? false : true;
  }
</script>

<section class={menuOpen ? "menu-open" : ""}>
  <div></div>
  <nav>
    {#if currentLanguage === "en"}
      <button onclick={toggleMenu}><a href="/">Home &gt;</a></button>
      <button onclick={toggleMenu}><a href="/archive">Archive &gt;</a></button>
      <button onclick={toggleMenu}><a href="/contact">Contact &gt;</a></button>
      <button onclick={toggleMenu}><a href="/credits">Credits &gt;</a></button>
    {:else}
      <button onclick={toggleMenu}><a href="/">Trang chủ &gt;</a></button>
      <button onclick={toggleMenu}><a href="/archive">Lưu trữ &gt;</a></button>
      <button onclick={toggleMenu}><a href="/contact">Liên hệ &gt;</a></button>
      <button onclick={toggleMenu}><a href="/credits">Danh đề &gt;</a></button>
    {/if}
  </nav>
</section>

<style>
  section {
    position: fixed;
    left: 0;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    height: 98vh;
    background-color: #ffffff;
    z-index: 1;
  }

  div {
    flex: 1;
  }

  nav {
    display: flex;
    flex-direction: column;
    flex: 4;
  }

  button {
    padding: 0;
    margin: 0;
    border-style: none;
    background: white;
    display: block;
    text-align: left;
    font-family: "IBM Plex Mono", serif;
    font-weight: 400;
    font-size: 36px;
    cursor: pointer;
  }

  a {
    color: black;
    text-decoration: none;
  }

  a:hover {
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
    section {
      left: 100vw;
      width: 50vw;
      visibility: hidden;
      transition:
        left 360ms ease-in-out,
        visibility 0s linear 360ms;
    }

    .menu-open {
      left: 50vw;
      visibility: visible;
      transition:
        left 360ms ease-in-out,
        visibility 0s linear;
    }
  }
</style>
