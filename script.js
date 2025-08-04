document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.rule-header');
    
    headers.forEach(header => {
        const icon = document.createElement('span');
        icon.className = 'accordion-icon';
        icon.textContent = '+';
        header.prepend(icon);
        
        header.addEventListener('click', function() {
            // Убираем закрытие других разделов
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            const icon = this.querySelector('.accordion-icon');
            
            if (this.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
                icon.textContent = '-';
            } else {
                content.style.maxHeight = null;
                icon.textContent = '+';
            }
        });
    });
    
    // УБИРАЕМ автоматическое открытие первого пункта
    // headers[0].click(); // Эта строка теперь закомментирована
});

  
  // Установите дату следующего вайпа
  const wipeDate = new Date("2025-08-04T00:00:00");
    
  function updateCountdown() {
      const now = new Date();
      const diff = wipeDate - now;
      
      if (diff <= 0) {
          document.getElementById('wipeTimer').textContent = "ВАЙП НАЧАЛСЯ!";
          return;
      }
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      document.getElementById('wipeTimer').textContent = 
          `${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  
  updateCountdown();
  setInterval(updateCountdown, 1000);

  