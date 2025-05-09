document.querySelectorAll('.faq-header').forEach(header => {
    header.addEventListener('click', () => {
        const category = header.parentElement;
        const content = header.nextElementSibling;
        const isOpen = content.style.maxHeight;
        
        // Закрываем все
        document.querySelectorAll('.faq-content').forEach(c => {
            c.style.maxHeight = null;
            c.parentElement.querySelector('.faq-toggle').textContent = '+';
        });
        
        // Открываем текущий если был закрыт
        if (!isOpen) {
            content.style.maxHeight = content.scrollHeight + 'px';
            header.querySelector('.faq-toggle').textContent = '-';
        }
    });
});

// Открыть первый элемент
