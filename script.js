document.addEventListener('DOMContentLoaded', function() {
    // Получаем сохраненную тему
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Устанавливаем тему
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Находим кнопку
    const themeToggle = document.getElementById('theme-toggle');
    
    // Обновляем текст кнопки
    updateButtonText(savedTheme);
    
    // Обработчик клика
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            // Меняем тему
            document.documentElement.setAttribute('data-theme', newTheme);
            
            // Сохраняем
            localStorage.setItem('theme', newTheme);
            
            // Обновляем текст
            updateButtonText(newTheme);
        });
    }
    
    function updateButtonText(theme) {
        if (!themeToggle) return;
        const icon = theme === 'light' ? '🌙' : '☀️';
        const text = theme === 'light' ? 'Темная тема' : 'Светлая тема';
        themeToggle.textContent = `${icon} ${text}`;
    }
});