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

  