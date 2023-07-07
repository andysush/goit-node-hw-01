# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)

node index.js --action="list"

https://ibb.co/yNTcxH0

# Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.

node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6

https://ibb.co/rbXQ60S

# Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту

node index.js -a "add" -n Mango -e mango@gmail.com -p 322-22-22

https://ibb.co/Wp6Bwr9

# Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.

node index.js -a "remove" -i LSFth27nbR8L0a9v8aXmr

https://ibb.co/T0FCDfr
