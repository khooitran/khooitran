<script>
  import HeroSection from "$lib/HeroSection.svelte";
  import ProjectDetails from "$lib/ProjectDetails.svelte";
  import Footer from "$lib/Footer.svelte";
  import { currentLanguage } from "$lib/stores/language";
  import { viettype } from "$lib/stores/projectDescription";
</script>

{#if currentLanguage === "en"}
  <HeroSection {...viettype.en.hero} />
  {#each viettype.en.details as detail}
    <ProjectDetails {...detail} />
  {/each}
  <Footer message={viettype.en.message} />
{:else}
  <HeroSection {...viettype.vi.hero} />
  {#each viettype.vi.details as detail}
    <ProjectDetails {...detail} />
  {/each}
  <Footer message={viettype.vi.message} />
{/if}
