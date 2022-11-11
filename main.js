//question 1
let obj1 = { name: 1, lastName: 2 };
let obj2 = { lastName: 2, name: 1 };

console.log(JSON.stringify(obj1) === JSON.stringify(obj2));

//question3
let csv = "melek,amine,sameh,chwki";
l = csv.split(",");
console.log(l);

//question4
let csv1 = "titelOfText,content of the text";
let obj = { title: csv1.split(",")[0], content: csv1.split(",").slice(1) };
console.log(obj);

//question5
let book1 = { title: "melek", content: "content of first book" };
let book2 = { title: "ali", content: "content of second book" };
let list = [book1, book2];
let a = (l, column) => {
  let g = [];
  for (var i = 0; i < l.length; i++) {
    g.push(l[i][column]);
  }
  return g.join();
};

console.log(a(list, "title"));

//question6
let objJson = {
  isbn: "123-456-222",
  author: {
    lastname: "Doe",
    firstname: "Jane",
  },
  editor: {
    esmou: "Smith",
    firstname: {
      time: "22:03",
      lieu: "tunis",
    },
  },
  title: "The Ultimate Database Study Guide",
  category: ["Non-Fiction", "Technology"],
};

let z = (json, key) => {
  for (var i in json) {
    if (i === key) {
      console.log(i + " : " + json[i]);
    }
    if (typeof json[i] === "object") {
      z(json[i], key);
    }
  }
};
z(objJson, "time");
