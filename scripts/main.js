// Example: Track outbound affiliate link clicks
document.querySelectorAll('.affiliate-link').forEach(link => {
  link.addEventListener('click', () => {
    console.log('Affiliate link clicked:', link.href);
    // You could integrate Google Analytics event tracking here
  });
});
