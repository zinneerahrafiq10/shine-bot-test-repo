document.getElementById('actionBtn').addEventListener('click', async () => {
  const res = await fetch('/api/click', { method: 'POST' });
  const data = await res.json();
  document.getElementById('result').textContent = data.message;
});

document.getElementById('greetBtn').addEventListener('click', async () => {
  const res = await fetch('/api/greet');
  const data = await res.json();
  document.getElementById('greetResult').textContent = data.message;
});
