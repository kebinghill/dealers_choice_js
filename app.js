const express = require('express');
const morgan = require('morgan');
const path = require('path');
const {
  models: { Class, Instrument },
} = require('./db/server');

const app = express();

app.use(morgan('dev'));
app.use('/assets', express.static(path.join(__dirname + '/assets')));

app.get('/', async (req, res, next) => {
  try {
    res.send(`
      <html>
        <head>
          <link rel='stylesheet' href='/assets/style.css'/>
        </head>
        <body>

        <h1>Instrument Category</h1>

          <div>
            <form action='/Drums'>
              <button 'id='drums'>
                <h2>Drums</h2>
              </button>
            </form>

            <form action='/Strings'>
              <button id='strings'>
                <h2>Strings</h2>
              </button>
            </form>

            <form action='/Keys'>
              <button id='keys'>
                <h2>Keys</h2>
              </button>
            </form>
          </div>
    
        </body>
      </html>
    `);
  } catch (error) {
    next(error);
  }
});

app.get('/drums', async (req, res, next) => {
  try {
    const instruments = await Instrument.findAll({
      where: {
        classId: 3,
      },
    });
    res.send(`
      <html>
        <head>
          <link rel='stylesheet' href='assets/style.css'>
        </head>
        <body>
        <h1>Drums</h1>
          <ul>
            <container>
            ${instruments
              .map(
                (ins) =>
                  `<li><a href='/instruments/${ins.id}'>${ins.name}</a></li>`
              )
              .join('')}
            </container>
          </ul>
        </body>
      </html>
    `);
  } catch (error) {
    next(error);
  }
});

app.get('/strings', async (req, res, next) => {
  try {
    const instruments = await Instrument.findAll({
      where: {
        classId: 1,
      },
    });
    res.send(`
      <html>
        <head>
          <link rel='stylesheet' href='assets/style.css'>
        </head>
        <body>
        <h1>Strings</h1>
          <ul>
            <container>
            ${instruments
              .map(
                (ins) =>
                  `<li><a href='/instruments/${ins.id}'>${ins.name}</a></li>`
              )
              .join('')}
            </container>
          </ul>
        </body>
      </html>
    `);
  } catch (error) {
    next(error);
  }
});

app.get('/keys', async (req, res, next) => {
  try {
    const instruments = await Instrument.findAll({
      where: {
        classId: 2,
      },
    });
    res.send(`
      <html>
        <head>
          <link rel='stylesheet' href='assets/style.css'>
        </head>
        <body>
        <h1>Keys</h1>
          <ul>
            <container>
            ${instruments
              .map(
                (ins) =>
                  `<li><a href='/instruments/${ins.id}'>${ins.name}</a></li>`
              )
              .join('')}
            </container>
          </ul>
        </body>
      </html>
    `);
  } catch (error) {
    next(error);
  }
});

app.get('/instruments/:id', async (req, res, next) => {
  try {
    const instrument = await Instrument.findByPk(req.params.id);
    res.send(`
      <html>
        <head>
          <link rel="stylesheet" href="/assets/style.css">
        </head>
        <body>
          <h1>${instrument.name}</h1>
          <p>${instrument.info}</p>
        </body>
      </html>
    `);
  } catch (err) {
    next(err);
  }
});

app.use((req, res, next) => {
  res.status(404).send(`
    <html>
      <head>
      <link rel='stylesheet' href='/assets/fourohfour.css'>
      </head>
      <body>
      </body>
    </html>
  `);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on Port ${port}`));
