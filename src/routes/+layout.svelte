<script>
  import Navbar from "$lib/Navbar.svelte";
  import { page } from "$app/state";
  import { fade } from "svelte/transition";
  import ChangeLanguage from "$lib/ChangeLanguage.svelte";
  import { currentLanguage } from "$lib/stores/language";

  let { children } = $props();
  let lang = $state(currentLanguage);
  let menuOpen = $state(false);
  let menuButton = $derived.by(() => {
    if (menuOpen) {
      return "&gt;&gt;";
    } else {
      return "&lt;&lt;";
    }
  });

  function toggleMenu() {
    menuOpen = menuOpen ? false : true;
  }
</script>

{#key lang || menuOpen}
  <main in:fade={{ duration: 360, delay: 360 }} out:fade={{ duration: 360 }}>
    <button class="open-menu" onclick={toggleMenu}>{@html menuButton}</button>
    <Navbar bind:menuOpen />
    <ChangeLanguage bind:lang bind:menuOpen />
    {#key page.url.pathname}
      <div
        in:fade={{ duration: 360, delay: 360 }}
        out:fade={{ duration: 360 }}
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
    bottom: 0;
    right: 0;
    padding: 0 2vh 2vh 0;
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
