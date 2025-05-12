<script>
  let { lang = $bindable('en') } = $props();

  export function changeLanguage() {
    lang = lang === 'en' ? 'vi' : 'en';
    console.log(lang);
  }
</script>

<button onclick={changeLanguage}> EN/VI &gt; </button>
