<script>
  import Navbar from '$lib/Navbar.svelte';
  import { page } from '$app/state';
  import { fly, fade } from 'svelte/transition';
  import ChangeLanguage from '$lib/ChangeLanguage.svelte';
  import { currentLanguage } from '$lib/stores/language';

  let { children } = $props();
  let lang = $state(currentLanguage);
</script>

{#key lang}
  <main
    in:fade={{ duration: 360, delay: 360 }}
    out:fade={{ duration: 360 }}
  >
    <Navbar />
    <ChangeLanguage bind:lang />

    {#key page.url.pathname}
      <div
        in:fly={{ x: -200, duration: 360, delay: 360 }}
        out:fly={{ x: 200, duration: 360 }}
        onoutroend={() => document.querySelector('main').scrollTo(0, 0)}
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
  }

  p {
    position: absolute;
    top: 50px;
  }
</style>
