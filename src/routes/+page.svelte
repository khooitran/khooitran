<script>
  import Footer from '$lib/Footer.svelte';
  import HeroSection from '$lib/HeroSection.svelte';
  import Project from '$lib/Project.svelte';

  const projects = [
    {
      title: 'ViệtType (2025)',
      description:
        'ViệtType is a magazine that focuses on type design in Vietnam. Through interviews and conversations from type designers and researchers in the current scene, the reader gets a closer look into the type community in Vietnam, and the stories behind each typeface and their creator. As a personal response, VietType Sans - a set of 26 lowercase characters - is my own attempt at designing a typeface.',
      src: 'viettype.gif',
      alt: 'VietType Magazine preview',
      href: '/viettype',
    },
    {
      title: 'NUNG Exhibition Website (2024)',
      description:
        'NUNG Exhibition is the first of its kind: a showcase of the graduation projects of the students of Design Studies in RMIT University Hanoi. I was very glad to be able to work with my friends from first year to make a website that serves as an archive for the exhibition as well as the works of everyone. While the physical exhibition has ended, the website hopes to give future enthusiasts a chance to take a look at the beautiful works of the students in RMIT.',
      src: 'nung.gif',
      alt: 'NUNG Exhibition website preview',
      href: '/nungexhibition',
    },
    {
      title: 'Baviett Portfolio Website (2023)',
      description:
        'Bá Việt asked me to create a portfolio for him in half a day. While the timeframe was limited, I tried to create something that would be functionally helpful for him as that was the most important aspect of the portfolio. So far, it has not disappointed him! The website marks my first job as a student designer and developer, and gives me the boost every time I looked at it.',
      src: 'baviet.gif',
      alt: 'NUNG Exhibition website',
      href: 'baviett',
    },
  ];
</script>

<HeroSection
  title="Khoi Tran"
  description="Hi! I am currently studying and practicing UX Design & Development in Hanoi, Vietnam. I have an interest in practical, functional, and logical designs, regardless of style, shape, or form. I am set to graduate in April 2026 with a Bachelor's in Design Studies from RMIT University Hanoi."
  endNote="&darr; scroll &darr;"
/>
{#each projects as project, i}
  <Project {...project} />
{/each}

<Footer message="the journey started here!" />
