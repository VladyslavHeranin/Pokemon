# pokemon
- У файлі App.js я приймаю посилання з серверу "https://pokeapi.co/api/v2/pokemon/?limit=12"
- Обробляю посилання і отримую массив обєктів , з якими продовжую працювати в інших файлах
- Присвоєю змінну через useState данний масив стає змінною хука 
- Через props я передаю змінну в інший файл 
- методом масива map() я обробляю обєкти , і відображаю в браузері
- На метод map() я даю подію клика яка відловлює потрібне id
- Данне id я обробляю і відображаю тої обєкт який мені приходить 
- В ньому я відображаю додаткові данні про Покемона 
- Прогрузка елементів через кнопку "Lode more" 
- На кількість персонажів які мені впливае посилання , треба при 
  кліку на кнопку змінюваті посилання через useState , а в хук 
  UseEffect , в його другий аргумент передавати массив з змінним хуком 
  
* ця сторінка завантажена на Github pages , але в браузеры Chrome не відкрівается 100% відображаєтся в Opera
 ПОСИЛАННЯ ( https://vladyslavheranin.github.io/pokemon/ )
