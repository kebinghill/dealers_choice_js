module.exports = (arg) => `
  <html>
    <head>
      <title>Hello there!</title>
      <link rel="stylesheet" href="./assets/style.css"/>
    </head>
    <body>
        ${arg.map((ins) => {
          `<ul>
          <li>${ins}</li>;
          </ul>`;
        })};
    </body>
  </html>
`;
