<script>
  import HeroSection from '$lib/HeroSection.svelte';
  import { currentLanguage } from '$lib/stores/language';
  import { nung } from '$lib/stores/projectDescription';
</script>

{#if currentLanguage === 'en'}
  <HeroSection {...nung.en} />
{:else}
  <HeroSection {...nung.vi} />
{/if}
