<script>
  import HeroSection from '$lib/HeroSection.svelte';
  import { currentLanguage } from '$lib/stores/language';
  import { contact } from '$lib/stores/content';
</script>

{#if currentLanguage === 'en'}
  <HeroSection {...contact.en} />
{:else}
  <HeroSection {...contact.vi} />
{/if}
