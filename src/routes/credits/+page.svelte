<script>
  import HeroSection from '$lib/HeroSection.svelte';
  import { currentLanguage } from '$lib/stores/language';
  import { credits } from '$lib/stores/content';
</script>

{#if currentLanguage === 'en'}
  <HeroSection {...credits.en} />
{:else}
  <HeroSection {...credits.vi} />
{/if}
