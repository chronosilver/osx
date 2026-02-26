
const form = document.getElementById('leadForm');
form.addEventListener('submit', async e => {
  e.preventDefault();

  const name = form.querySelector('input[type="text"]:nth-child(1)').value;
  const contact = form.querySelector('input[type="text"]:nth-child(2)').value;

  const token = '7365495667:AAGWxmjRzBx6YgUj28IKZm2SwmC9SYFuQTg';
  const chatId = '6257281545';

  const message = `Новая заявка:\nИмя: ${name}\nКонтакт: ${contact}`;

  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: message })
    });

    form.querySelector('.success').style.display = 'block';
    form.reset();
  } catch (err) {
    alert('Ошибка отправки. Попробуйте снова.');
  }
});
