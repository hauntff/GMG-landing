

document.addEventListener("DOMContentLoaded", function() {

    if(document.getElementById('burger')){
        document.getElementById('burger').addEventListener('click', function() {
            var container = document.getElementById('burgerContainer');
            container.classList.toggle('active');

            if (container.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                console.log('none');
                document.body.style.overflow = '';
            }
        });
    }

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
    document.getElementById('themeImage').addEventListener('click', function() {
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
            document.getElementById("ball").src = "img/ball-night.png"
            document.getElementById("computer").src = "img/computer-night.png"
            document.getElementById("tea").src = "img/tea-night.png"
            document.getElementById("dollar").src = "img/dollar-night.png"
            document.getElementById("picture").src = "img/picture-night.png"
            document.getElementById("laptop").src = "img/laptop-night.png"
            document.getElementById("cat").src = "img/cat-night.png"
            document.getElementById("window").src = "img/window-night.png"
        } else {
            document.getElementById("mainImage").src = "img/Day.png";
            document.getElementById("secondImage").src = "img/secondImage.png"
            document.getElementById("teamPhoto").src = "img/teamPhoto.png"
            document.getElementById("footerImage").src = "img/orangeImage.png"
            document.getElementById("ball").src = "img/ball.png"
            document.getElementById("computer").src = "img/computer.png"
            document.getElementById("tea").src = "img/tea.png"
            document.getElementById("dollar").src = "img/dollar.png"
            document.getElementById("picture").src = "img/picture.png"
            document.getElementById("laptop").src = "img/laptop.png"
            document.getElementById("cat").src = "img/cat.png"
            document.getElementById("window").src = "img/window.png"
        }
    }

    updateImage();

    setInterval(function() {
        updateImage();
    }, 1);


    // Открытие и закрытие модального окна
    var openModalBtn = document.querySelector('.button8');
    var openModalBtn1 = document.querySelector('.button9');
    var openModalBtn2 = document.querySelector('.button4');
    var openModalBtn3 = document.querySelector('.button2');
    var burger = document.querySelector('.burger');
    var modal = document.getElementById('modal');
    var modal1 = document.getElementById('modal1');
    var modal2 = document.getElementById('modal2');
    var modal3 = document.getElementById('modal3');

    if (window.matchMedia('(max-width: 1330px)').matches) {
        openModalBtn = document.getElementById('cat');
        openModalBtn1 = document.getElementById('ball');
        openModalBtn2 = document.getElementById('tea');
        openModalBtn3 = document.getElementById('dollar');
    }
    else {
        openModalBtn = document.querySelector('.button8');
        openModalBtn1 = document.querySelector('.button9');
        openModalBtn2 = document.querySelector('.button4');
        openModalBtn3 = document.querySelector('.button2');
    }

    var closeModalBtn = document.getElementById('closeModalBtn');

    openModalBtn.addEventListener('click', function() {
        modal.classList.add('show');
        burger.style.display = 'none';
        document.body.style.overflow = 'hidden';
    });

    closeModalBtn.addEventListener('click', function() {
        modal.classList.remove('show');
        burger.style.display = 'flex';

        document.body.style.overflow = 'initial';
    });

    var closeModalBtn1 = document.getElementById('closeModalBtn1');

    openModalBtn1.addEventListener('click', function() {
        modal1.classList.add('show');
        burger.style.display = 'none';

        document.body.style.overflow = 'hidden';
    });

    closeModalBtn1.addEventListener('click', function() {
        modal1.classList.remove('show');
        document.body.style.overflow = 'initial';
    });

    var closeModalBtn2 = document.getElementById('closeModalBtn2');

    openModalBtn2.addEventListener('click', function() {
        modal2.classList.add('show');
        burger.style.display = 'none';

        document.body.style.overflow = 'hidden';
    });

    closeModalBtn2.addEventListener('click', function() {
        modal2.classList.remove('show');
        document.body.style.overflow = 'initial';
    });

    var closeModalBtn3 = document.getElementById('closeModalBtn3');

    openModalBtn3.addEventListener('click', function() {
        modal3.classList.add('show');
        burger.style.display = 'none';

        document.body.style.overflow = 'hidden';
    });

    closeModalBtn3.addEventListener('click', function() {
        modal3.classList.remove('show');
        document.body.style.overflow = 'initial';
    });



    //Модалка для животных
    var currentIndex = 0;

    var modalPetsImages = ['petLola.png', 'petMallow.png', 'petLa.png', 'petVintik.png']
    var modalPetsNames = ['Lola', 'Mallow', 'La', 'Vintik']
    var next = document.getElementById("nextBtn")
    var prev = document.getElementById("prevBtn")
    var holder =  document.getElementById("petsImages");

    next.addEventListener('click', function() {
        currentIndex = (currentIndex + 1 + modalPetsImages.length) % modalPetsImages.length;
        updateSlide();
    });

    prev.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + modalPetsImages.length) % modalPetsImages.length;
        updateSlide();
    });

    function updateSlide() {
        holder.classList.remove('fade-animation');
        setTimeout(function() {
            holder.src = 'img/' + modalPetsImages[currentIndex];
            holder.classList.add('fade-animation');
            document.querySelector('.modal-name-text').textContent = modalPetsNames[currentIndex];
        }, 0);
    }

    var currentIndex3 = 0;

    var modalTeamPhotos = ['teamPhotoKemal.png', 'teamPhotoTony.png', 'teamPhotoGirls'];
    var next3 = document.getElementById("nextBtn3");
    var prev3 = document.getElementById("prevBtn3");
    var holder3 = document.getElementById("teamPhotoModal");

    next3.addEventListener('click', function() {
        currentIndex3 = (currentIndex3 + 1 + modalTeamPhotos.length) % modalTeamPhotos.length;
        updateTeamPhotosSlide();
    });

    prev3.addEventListener('click', function() {
        currentIndex3 = (currentIndex3 - 1 + modalTeamPhotos.length) % modalTeamPhotos.length;
        updateTeamPhotosSlide();
    });

    function updateTeamPhotosSlide() {
        holder3.classList.remove('fade-animation');
        setTimeout(function() {
            holder3.src = 'img/' + modalTeamPhotos[currentIndex3];
            holder3.classList.add('fade-animation');
        }, 0);
    }
    //Модалка для людей
    var currentIndex1 = 0;

    var modalPeopleImages = ['Yelzhan.png', 'Kemal.png', 'Tony.png', 'Nurs.png',
        'Roma.png', 'Anel.png', 'Dari.png', 'Sabira.png'];
    var modalPeopleNames = ['Yelzhan', 'Kemal', 'Tony', 'Nursultan', 'Roman', 'Anel', 'Dariga', 'Sabira']

    var next1 = document.getElementById("nextBtn1");
    var prev1 = document.getElementById("prevBtn1");
    var holder1 = document.getElementById("peopleImages");

    next1.addEventListener('click', function() {
        currentIndex1 = (currentIndex1 + 1) % modalPeopleImages.length;
        updatePeopleSlide();
    });

    prev1.addEventListener('click', function() {
        currentIndex1 = (currentIndex1 - 1 + modalPeopleImages.length) % modalPeopleImages.length;
        updatePeopleSlide();
    });

    function updatePeopleSlide() {
        holder1.classList.remove('fade-animation');
        setTimeout(function() {
            holder1.src = 'img/' + modalPeopleImages[currentIndex1];
            holder1.classList.add('fade-animation');
            document.querySelector('.modal-header.reverse h2').textContent = modalPeopleNames[currentIndex1];
        }, 0);
    }

    var currentIndex2 = 0;

    var modalFavoritesHeaders = ['FAVORITE GAMES', 'MOVIES & TV', 'FAVORITE FOOD', 'FAVORITE SNACKS',
        'FAVORITE HOBBIES', 'FAVORITE DRINKS'];
    var modalFirst = ['FC 24', 'THE GODFATHER', 'Tony', 'LAYS', 'READING', 'COLA']
    var modalSecond = ['DOTA 2', 'INTERSTELLAR', 'Tony', 'DORITOS', 'ANIME', 'WATER']
    var modalThird = ['CS:GO', 'BREAKING BAD', 'Tony', 'MILK CHOCOLATE', 'DRAWING', 'ORANGE JUICE']
    var modalFourth = ['GTA', 'GAMES OF THRONES', 'Tony', 'APPLE', 'SKIING', 'SWEET TEA']
    var modalFifth = ['Minecraft', 'THE GENTLEMAN', 'Tony', 'SNEAKERS', 'GYM', 'JAGERMEISTER']

    var next2 = document.getElementById("nextBtn2");
    var prev2 = document.getElementById("prevBtn2");
    var holder2 = document.getElementById("favorites-header");

    next2.addEventListener('click', function() {
        currentIndex2 = (currentIndex2 + 1) % modalFavoritesHeaders.length;
        updateFavoriteSlide();
    });

    prev2.addEventListener('click', function() {
        currentIndex2 = (currentIndex2 - 1 + modalFavoritesHeaders.length) % modalFavoritesHeaders.length;
        updateFavoriteSlide();
    });

    function updateFavoriteSlide() {
        holder2.classList.remove('fade-animation');
        setTimeout(function() {
            holder2.innerHTML =  modalFavoritesHeaders[currentIndex2];
            holder2.classList.add('fade-animation');
            document.getElementById("first-favorite").innerText = modalFirst[currentIndex2];
            document.getElementById("second-favorite").innerText = modalSecond[currentIndex2];
            document.getElementById("third-favorite").innerText = modalThird[currentIndex2];
            document.getElementById("forth-favorite").innerText = modalFourth[currentIndex2];
            document.getElementById("fifth-favorite").innerText = modalFifth[currentIndex2];
        }, 0);
    }
});
