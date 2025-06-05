<script>
  import HeroSection from "$lib/HeroSection.svelte";
  import ProjectDetails from "$lib/ProjectDetails.svelte";
  import Footer from "$lib/Footer.svelte";
  import { currentLanguage } from "$lib/stores/language";
  import { baviett } from "$lib/stores/projectDescription";
</script>

{#if currentLanguage === "en"}
  <HeroSection {...baviett.en.hero} />
  {#each baviett.en.details as detail}
    <ProjectDetails {...detail} />
  {/each}
  <Footer message={baviett.en.message} />
{:else}
  <HeroSection {...baviett.vi.hero} />
  {#each baviett.vi.details as detail}
    <ProjectDetails {...detail} />
  {/each}
  <Footer message={baviett.vi.message} />
{/if}
