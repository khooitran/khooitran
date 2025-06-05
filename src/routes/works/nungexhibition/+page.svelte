<script>
  import HeroSection from "$lib/HeroSection.svelte";
  import ProjectDetails from "$lib/ProjectDetails.svelte";
  import Footer from "$lib/Footer.svelte";
  import { currentLanguage } from "$lib/stores/language";
  import { nung } from "$lib/stores/projectDescription";
</script>

{#if currentLanguage === "en"}
  <HeroSection {...nung.en.hero} />
  {#each nung.en.details as detail}
    <ProjectDetails {...detail} />
  {/each}
  <Footer message={nung.en.message} />
{:else}
  <HeroSection {...nung.vi.hero} />
  {#each nung.vi.details as detail}
    <ProjectDetails {...detail} />
  {/each}
  <Footer message={nung.vi.message} />
{/if}
