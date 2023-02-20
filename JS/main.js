// Import stylesheets
// import "./style.css";

// Запросы, XMLHttpRequest, AJAX. Домашняя работа

/* Задание №1.1. 
Сделайте запрос на адрес 'https://rickandmortyapi.com/api/character'.
Используйте fetch. Отобразите на странице имена персонажей из 
Рика и Морти в list.
(Вы можете стилизовать страницу по желанию.)
*/

/* Задание №1.2. 
Рядом с именами отобразите все изображения
которые вы получили вместе с остальными данными из сервера.
*/

/* Задание №1.3. 
Создайте файл db.json и запустите локальный сервер.
Данные которые вы получили во втором задании, сохраните 
в локальном сервере db.json, в массиве под 
названием "characters".
Подсказка: как только ваши данные сохранились в db.json
функцию, которая отправляет запрос на db.json стоит закомментировать.
*/

/* Задание №1.4. 
А теперь сделайте запрос на локальный сервер.
Во второй блок с классом 'block-2', отобразите имена, которые 
вы получили (стянули) с db.json.


/* Задание №1.5. 
К именам добавьте картинки персонажей.
В итоге у вас должна получиться точная копия первых двух тасков.
Отличие которых лишь в базе данных.
*/

// ! ========================НАЧАЛО============================

let list = document.querySelector(".list");
let list2 = document.querySelector(".list2");
let API = "https://rickandmortyapi.com/api/character";
let API2 = "http://localhost:8000/characters";

fetch(API)
  .then((res) => res.json())
  .then((data) => {
    let name = data.results;
    name.forEach((item) => {
      list.innerHTML += `
      <div style="border: 2px solid black; margin: 5px; padding: 3px; background-color: #D0D0D0;">
      <li style="list-style: none;">${item.name}</li>
      <img style="width: 200px; border-radius: 100%;" src=${item.image} >
      </div>
      `;
    });
    // ? ====================================================POST-strat=======

    // fetch(API2, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json; charset=utf-8",
    //   },
    //   body: JSON.stringify(data),
    // });

    // ? ===================================================POST-end==========

    // ? ========================================================Отоброжение на странице начало
    fetch(API2)
      .then((res) => res.json())
      .then((characters) =>
        characters.forEach((item) => {
          item.results.forEach((i) => {
            list2.innerHTML += `
            <div style="border: 2px solid black; margin: 5px; padding: 3px; background-color: #D0D0D0;">
            <li style="list-style: none;">${i.name}</li>
            <img style="width: 200px; border-radius: 100%;" src=${i.image} >
            </div>
                `;
          });
        })
      );
    // ? ========================================================Отоброжение на странице конец
  });

// ! ========================КОНЕЦ============================
