<script>
  import HeroSection from '$lib/HeroSection.svelte';
  import { currentLanguage } from '$lib/stores/language';
  import { viettype } from '$lib/stores/projectDescription';
</script>

{#if currentLanguage === 'en'}
  <HeroSection {...viettype.en} />
{:else}
  <HeroSection {...viettype.vi} />
{/if}
