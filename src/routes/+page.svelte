<script>
  import Footer from '$lib/Footer.svelte';
  import HeroSection from '$lib/HeroSection.svelte';
  import Project from '$lib/Project.svelte';
  import { homepage, projects } from '$lib/stores/content';
  import { currentLanguage } from '$lib/stores/language';
</script>

{#if currentLanguage === 'en'}
  <HeroSection {...homepage.en} />
  {#each projects.en as project, i}
    <Project {...project} />
  {/each}
  <Footer message="the journey started here!" />
{:else}
  <HeroSection {...homepage.vi} />
  {#each projects.vi as project, i}
    <Project {...project} />
  {/each}
  <Footer message="mọi thứ bắt đầu từ đây!" />
{/if}
