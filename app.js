// Функция для вычисления знака зодиака
function getZodiacSign(date) {
    const month = date.getMonth() + 1;
    const day = date.getDate();

    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        return "Овен";
    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        return "Телец";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        return "Близнецы";
    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        return "Рак";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        return "Лев";
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        return "Дева";
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        return "Весы";
    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
        return "Скорпион";
    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        return "Стрелец";
    } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
        return "Козерог";
    } else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        return "Водолей";
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        return "Рыбы";
    }
    return null;
}
// Функция для вычисления китайского зодиака
function getChineseZodiac(year) {
    const chineseZodiacAnimals = [
        "Крыса", "Бык", "Тигр", "Кролик", "Дракон", "Змея", "Лошадь", "Коза", "Обезьяна", "Петух", "Собака", "Свинья"
    ];

    const baseYear = 1900; // Китайский зодиак начинается с 1900 года (год Крысы)
    const cycleYear = (year - baseYear) % 12;
    return chineseZodiacAnimals[cycleYear];
}

// Функция для вычисления возраста в разных единицах
function calculate() {
    
    const birthdateInput = document.getElementById('birthdate').value;
    if (!birthdateInput) return alert('Пожалуйста, выберите дату рождения!');

    const infoBlock = document.getElementById('info-block');
    infoBlock.classList.add('visible');  // Добавляем класс для плавного появления


    const birthdate = new Date(birthdateInput);
    const today = new Date();

    // Рассчитываем возраст
    const ageInMilliseconds = today - birthdate;
    const ageDate = new Date(ageInMilliseconds);

    const years = ageDate.getUTCFullYear() - 1970;
    const months = today.getMonth() - birthdate.getMonth();
    const days = today.getDate() - birthdate.getDate();
    const hours = today.getHours() - birthdate.getHours();
    const minutes = today.getMinutes() - birthdate.getMinutes();
    const seconds = today.getSeconds() - birthdate.getSeconds();

    // Зодиак
    const zodiac = getZodiacSign(birthdate);

    // Следующий день рождения
    const nextBirthday = new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate());
    if (today > nextBirthday) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    const daysToNextBirthday = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));
    
    const chineseZodiacSign = getChineseZodiac(birthdate.getFullYear());

    // Выводим результаты
    document.getElementById('zodiac').innerText = `Ваш знак зодиака: ${zodiac}`;
    document.getElementById('age').innerText = `Ваш возраст: ${years} лет, ${months} месяцев, ${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`;
    document.getElementById('nextBirthday').innerText = `Следующий день рождения: ${nextBirthday.toLocaleDateString()}`;
    document.getElementById('daysToNextBirthday').innerText = `До следующего дня рождения осталось: ${daysToNextBirthday} дня(ей)`;
    document.getElementById('chineseZodiac').innerText = `Год вашего китайского животного: ${chineseZodiacSign}`;
}
