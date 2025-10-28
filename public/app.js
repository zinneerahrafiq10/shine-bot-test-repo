document.getElementById('actionBtn').addEventListener('click', async () => {
  const res = await fetch('/api/click', { method: 'POST' });
  const data = await res.json();
  document.getElementById('result').textContent = data.message;
});
