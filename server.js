const express = require('express');

const app = express();

const PORT = 3000;

const tasks = [
  "Learn Kubernetes",
  "Learn FluxCD",
  "Learn Kustomize"
];

app.use(express.json());

app.get('/', (req, res) => {
  const html = `
    <html>
      <head>
        <title>Kustomize + FluxCD Demo</title>

        <style>
          body {
            background-color: #0f172a;
            color: white;
            font-family: Arial;
            padding: 40px;
          }

          .card {
            background-color: #1e293b;
            padding: 30px;
            border-radius: 12px;
            width: 500px;
          }

          h1 {
            color: #38bdf8;
          }

          li {
            margin: 10px 0;
          }
        </style>
      </head>

      <body>
        <div class="card">
          <h1>🚀 Kustomize + FluxCD Demo version 3</h1>

          <h3>Task List</h3>

          <ul>
            ${tasks.map(task => `<li>${task}</li>`).join('')}
          </ul>

          <hr />

          <p><strong>Environment:</strong> Development</p>
          <p><strong>Version:</strong> v3</p>
          <p><strong>Platform:</strong> Kustomize + FluxCD</p>
        </div>
      </body>
    </html>
  `;

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});