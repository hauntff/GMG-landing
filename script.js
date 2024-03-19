document.addEventListener("DOMContentLoaded", function() {

    // Изменяем тему в локальном хранилище
    const overlay = document.querySelector('.overlay');
    function setTheme(theme) {
        if (document.body) {
            if (theme === 'dark') {
                document.body.classList.add('dark');
                overlay.classList.add('dark');
                document.body.classList.remove('light');
                overlay.classList.remove('light');
            } else {
                document.body.classList.add('light');
                overlay.classList.add('light');
                document.body.classList.remove('dark');
                overlay.classList.remove('dark');
            }
    
            localStorage.setItem('theme', theme);
        } else {
            console.error("Body element not found");
        }
    }
   
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    }
    
    document.getElementById('themeButton').addEventListener('click', function() {
        const currentTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
        setTheme(currentTheme); 
    });

    window.addEventListener('beforeunload', function() {
        const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme); 
    });


    // Изменяем картинки в зависимости от темы
    function updateImage() {
        var theme = localStorage.getItem("theme");
        if (theme === "dark") {
            document.getElementById("mainImage").src = "img/night.png";
            document.getElementById("secondImage").src = "img/NightGirl.png"
            document.getElementById("teamPhoto").src = "img/teamPhotoSecond.png"
            document.getElementById("footerImage").src = "img/blueImage.png"
        } else {
            document.getElementById("mainImage").src = "img/Day.png";
            document.getElementById("secondImage").src = "img/secondImage.png"
            document.getElementById("teamPhoto").src = "img/teamPhoto.png"
            document.getElementById("footerImage").src = "img/orangeImage.png"
        }
    }
    
    updateImage();

    setInterval(function() {
        updateImage();
    }, 1);


    // Открытие и закрытие модального окна
    const openModalBtn = document.querySelector('.button8');
    const modal = document.getElementById('modal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    
    openModalBtn.addEventListener('click', function() {
        modal.style.display = 'block'; 
        document.body.style.overflow = 'hidden';
    });
    
    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none'; 
        document.body.style.overflow = 'initial';
    });
    


    // Плавная прокрутка
    document.querySelectorAll('.nav button').forEach(function(button) {
        button.addEventListener('click', function(event) {
            var link = button.querySelector('a').getAttribute('href');
            if (link.startsWith('games.html')) {
                return;
            }
            event.preventDefault();
            var targetId = link.substring(1);
            var targetBlock = document.getElementById(targetId);
            targetBlock.scrollIntoView({ behavior: 'smooth' });
        });
    });
});


