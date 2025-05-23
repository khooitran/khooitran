<script>
  import Navbar from "$lib/Navbar.svelte";
  import { page } from "$app/state";
  import { fly, fade } from "svelte/transition";
  import ChangeLanguage from "$lib/ChangeLanguage.svelte";
  import { currentLanguage } from "$lib/stores/language";

  let { children } = $props();
  let lang = $state(currentLanguage);
  let menuOpen = $state(false);
  let menuButton = $state("&lt;&lt;");

  function toggleMenu() {
    if (menuOpen === true) {
      menuOpen = false;
      menuButton = "&lt;&lt;";
    } else {
      menuOpen = true;
      menuButton = "&gt;&gt;";
    }
  }
</script>

<button class="open-menu" onclick={toggleMenu}>{@html menuButton}</button>
{#key lang}
  <main in:fade={{ duration: 360, delay: 360 }} out:fade={{ duration: 360 }}>
    <Navbar bind:menuOpen />
    <ChangeLanguage bind:lang bind:menuOpen />

    {#key page.url.pathname}
      <div
        in:fly={{ x: 200, duration: 360, delay: 360 }}
        out:fly={{ x: 200, duration: 360 }}
        onoutroend={() => document.querySelector("main").scrollTo(0, 0)}
      >
        {@render children()}
      </div>
    {/key}
  </main>
{/key}

<style>
  main {
    height: 98vh;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .open-menu {
    display: none;
    position: absolute;
    bottom: 2vh;
    right: 2vh;
    padding: 0;
    margin: 0;
    border-style: none;
    background: white;
    font-family: "IBM Plex Mono", serif;
    font-weight: 400;
    font-size: 36px;
    z-index: 2;
  }

  .open-menu:hover {
    text-decoration: underline;
    color: #ffcc33;
  }

  @media only screen and (max-width: 768px) {
    .open-menu {
      display: block;
    }
  }
</style>
