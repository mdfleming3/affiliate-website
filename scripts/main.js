// Example: Track outbound affiliate link clicks
document.querySelectorAll('.affiliate-link').forEach(link => {
  link.addEventListener('click', () => {
    console.log('Affiliate link clicked:', link.href);
    // You could integrate Google Analytics event tracking here
  });
});

async function loadPartial(id, file) {
  const res = await fetch(file);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}
loadPartial("header", "/partials/header.html");
loadPartial("footer", "/partials/footer.html");
