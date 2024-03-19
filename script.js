

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

    const openModalBtn1 = document.querySelector('.button4');
    const modal1 = document.getElementById('modal1');
    const closeModalBtn1 = document.getElementById('closeModalBtn1');

    openModalBtn1.addEventListener('click', function() {
        modal1.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    closeModalBtn1.addEventListener('click', function() {
        modal1.style.display = 'none';
        document.body.style.overflow = 'initial';
    });


    var modalPetsImages = ['petLola.png', 'petMallow.png', 'petLa.png', 'petVintik.png']

    var holder =  document.getElementById("petsImages");
    var next = document.getElementById("nextBtn")
    var prev = document.getElementById("prevBtn")

    var image_count = 1;
    next.addEventListener('click', function (){
        console.log("qweqweq")
        holder.src = modalPetsImages[image_count]
        if (image_count >= modalPetsImages.length-1){
            image_count = 0;
        }else{
            image_count ++;
        }
    })
    prev.addEventListener('click', function (){
        holder.src = modalPetsImages[image_count]
        if (image_count === 0){
            image_count = modalPetsImages.length-1;
        }else{
            image_count --;
        }
    })
});




// Function to increase image count
