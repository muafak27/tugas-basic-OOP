new gridjs.Grid({
    columns: ["Name", "Email", "Phone Number"],
    search: true,
    data: [
      ["Joni", "joni@gmail.com", "(+62) 01 222 3333"],
      ["Mona", "mona@gmail.com", "(+62) 22 888 4444"],
      ["Eli", "eli@gmail.com", "(+62) 654 00033"],
      ["Sarah", "sarah@gmail.com", "+62 876 1233"],
      ["andi", "andi@gmail.com", "(+62) 22 87 8356"],
      ["syafa", "syafa@gmai;.com", "(+62) 33 28 9098"],
      ["zila", "zila@gmail.com", "(+62) 87 87644"]
    ]
  }).render(document.getElementById("wrapper"));
  