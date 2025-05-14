<script>
  import HeroSection from '$lib/HeroSection.svelte';
  import { currentLanguage } from '$lib/stores/language';
  import { baviett } from '$lib/stores/projectDescription';
</script>

{#if currentLanguage === 'en'}
  <HeroSection {...baviett.en} />
{:else}
  <HeroSection {...baviett.vi} />
{/if}
