<script>
  document.getElementById('year').textContent = new Date().getFullYear();
 
  function copyEmail(){
    const email = 'mussabelahi3@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      const el = document.getElementById('copyStatus');
      const original = el.textContent;
      el.textContent = 'Copied to clipboard ✓';
      el.style.color = 'var(--accent)';
      setTimeout(() => { el.textContent = original; el.style.color = 'var(--text-muted)'; }, 2000);
    });
  }
</script>