<script>
  import HeroSection from "$lib/HeroSection.svelte";
  import ProjectDetails from "$lib/ProjectDetails.svelte";
  import Footer from "$lib/Footer.svelte";
  import { currentLanguage } from "$lib/stores/language";
  import { viettype } from "$lib/stores/projectDescription";
</script>

{#if currentLanguage === "en"}
  <HeroSection {...viettype.en.hero} />
  <section>
    <div class="buffer"></div>
    <div class="container">
      <a href="../viettype/VietTypeMagazine.pdf" download="">
        Download a digital copy of the magazine here
      </a>
      <a href="../viettype/DesignProcessBook.pdf" download="">
        Download the process book here
      </a>
    </div>
  </section>
  {#each viettype.en.details as detail}
    <ProjectDetails {...detail} />
  {/each}
  <Footer message={viettype.en.message} />
{:else}
  <HeroSection {...viettype.vi.hero} />
  <section>
    <div class="buffer"></div>
    <div class="container">
      <a href="../viettype/VietTypeMagazine.pdf" download="">
        Tải bản mềm của tạp chí ở đây
      </a>
      <a href="../viettype/DesignProcessBook.pdf" download="">
        Tải nhật ký quá trình ở đây
      </a>
    </div>
  </section>
  {#each viettype.vi.details as detail}
    <ProjectDetails {...detail} />
  {/each}
  <Footer message={viettype.vi.message} />
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

  .container {
    flex: 3;
  }

  a {
    margin: 0;
    font-family: "IBM Plex Mono";
    font-size: 20px;
    display: block;
    color: #000;
  }

  a:hover {
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
