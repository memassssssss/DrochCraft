document.querySelectorAll('.buy-btn').forEach(button => {
            button.addEventListener('click', function() {
                const productCard = this.closest('.product-card');
                const title = productCard.querySelector('.product-title').textContent;
                const price = productCard.querySelector('.product-price').textContent;
                
                // Показываем сообщение о выборе
                this.textContent = '✅ Выбрано!';
                this.style.background = '#2ecc71';
                
                // Прокручиваем к инструкции
                document.querySelector('.payment-link').scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Восстанавливаем кнопку через 3 секунды
                setTimeout(() => {
                    this.textContent = 'Выбрать этот товар';
                    this.style.background = '#e74c3c';
                }, 3000);
                
                // Показываем уведомление
                alert(`Вы выбрали: ${title}\nЦена: ${price}\n\nТеперь перейдите по ссылке оплаты ниже, внесите точную сумму и после оплаты НАПИШИТЕ НАМ в Discord!`);
            });
        });
        
        // Выделяем ссылку оплаты при клике
        document.querySelector('.payment-link').addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
            alert('После перехода по ссылке внесите ТОЧНУЮ СУММУ за выбранный товар!');
        });