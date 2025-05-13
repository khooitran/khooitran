<script>
  import HeroSection from '$lib/HeroSection.svelte';
  import { archive } from '$lib/stores/content';
  import { currentLanguage } from '$lib/stores/language';
</script>

{#if currentLanguage === 'en'}
  <HeroSection {...archive.en} />
{:else}
  <HeroSection {...archive.vi} />
{/if}
