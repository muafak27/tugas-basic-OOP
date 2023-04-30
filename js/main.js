import { Table } from "./utils";
new Table({
    columns: ['Name', 'Email'],
    data: [
      ['John', 'john@example.com'],
      ['Mike', 'mike@gmail.com'],
    ],
  }).render(document.getElementById('table'));