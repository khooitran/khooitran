<script>
  import Navbar from '$lib/Navbar.svelte';
  import { page } from '$app/state';
  import { fly } from 'svelte/transition';
  import Language from '$lib/Language.svelte';

  let { children } = $props();
  let lang = $state('en');
</script>

<main>
  <Language {lang} />
  <Navbar />

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

<style>
  main {
    height: 98vh;
    overflow-x: hidden;
  }
</style>
