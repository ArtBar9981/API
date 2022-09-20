import express from 'express';
import morgan from 'morgan';
import renderMain from './routes/render/renderMain';

require('dotenv').config();

const PORT = process.env.SERVER_PORT || 3000;
const app = express();
// const FileStore = store(session);

// const sessionConfig = {
//   name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
//   secret: process.env.SESSION_SECRET ?? 'test', // Секретное слово для шифрования, может быть любым
//   resave: true, // Пересохранять ли куку при каждом запросе
//   store: new FileStore(),
//   saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
//   cookie: {
//     maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
//     httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
//   },
// };

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(session(sessionConfig));

app.use('/', renderMain);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
