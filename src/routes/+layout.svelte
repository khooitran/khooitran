<script>
  let { children } = $props();
</script>

<nav>
  <a href="/">Home &gt;</a>
  <a href="/projects">Projects &gt;</a>
  <a href="/archive">Archive &gt;</a>
  <a href="/about">About &gt;</a>
  <a href="/contact">Contact &gt;</a>
</nav>

{@render children()}

<style>
  nav {
    font-family: 'IBM Plex Mono', serif;
    font-weight: 400;
    font-style: normal;
    display: flex;
    flex-direction: column;
  }

  a {
    color: black;
    text-decoration: none;
  }

  a:hover {
    color: #ffcc33;
    text-decoration: underline;
  }
</style>
