<script>
  import Navbar from '$lib/Navbar.svelte';
  import Footer from '$lib/Footer.svelte';
  let { children } = $props();
</script>

<Navbar />

{@render children()}

<Footer />
