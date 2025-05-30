<script>
  import HeroSection from "$lib/HeroSection.svelte";
  import ProjectDetails from "$lib/ProjectDetails.svelte";
  import Footer from "$lib/Footer.svelte";
  import { currentLanguage } from "$lib/stores/language";
  import { viettype } from "$lib/stores/projectDescription";
</script>

{#if currentLanguage === "en"}
  <HeroSection {...viettype.en.hero} />
  <ProjectDetails {...viettype.en.details} />
  <Footer message={viettype.en.message} />
{:else}
  <HeroSection {...viettype.vi.hero} />
  <ProjectDetails {...viettype.vi.details} />
{/if}
