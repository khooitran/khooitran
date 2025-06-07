<script>
  import HeroSection from "$lib/HeroSection.svelte";
  import ProjectDetails from "$lib/ProjectDetails.svelte";
  import Footer from "$lib/Footer.svelte";
  import { currentLanguage } from "$lib/stores/language";
  import { baviett } from "$lib/stores/projectDescription";
</script>

{#if currentLanguage === "en"}
  <HeroSection {...baviett.en.hero} />
  <section>
    <div class="buffer"></div>
    <a href="https://www.baviett.com" target="_blank">
      Visit the website here: baviett.com &gt;
    </a>
  </section>
  {#each baviett.en.details as detail}
    <ProjectDetails {...detail} />
  {/each}
  <Footer message={baviett.en.message} />
{:else}
  <HeroSection {...baviett.vi.hero} />
  <section>
    <div class="buffer"></div>
    <a href="https://www.baviett.com" target="_blank">
      Truy cập website tại đây: baviett.com &gt;
    </a>
  </section>
  {#each baviett.vi.details as detail}
    <ProjectDetails {...detail} />
  {/each}
  <Footer message={baviett.vi.message} />
{/if}

<style>
  section {
    margin-right: 20px;
    padding: 50px 0;
    display: flex;
  }

  .buffer {
    flex: 1;
  }

  a {
    flex: 3;
    margin: 0;
    font-family: "IBM Plex Mono";
    font-size: 20px;
    display: block;
    text-decoration: none;
    color: #000;
  }

  a:hover {
    text-decoration: underline;
    color: #fc3;
  }

  @media only screen and (max-width: 1280px) {
    a {
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 1080px) {
    a {
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 768px) {
    .buffer {
      display: none;
    }

    section {
      margin: 20px;
      padding: 15px 0;
    }
  }

  @media only screen and (max-width: 600px) {
    a {
      padding-top: 20px;
      width: 90%;
    }
  }
</style>
