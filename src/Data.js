let xAxisData = [
  {
    name: "Jan",
    Sale: 112_000,
  },
  {
    name: "Feb",
    Sale: 97_000,
  },
  {
    name: "Mar",
    Sale: 12_090,
  },
  {
    name: "Apr",
    Sale: 99_000,
  },
  {
    name: "May",
    Sale: 54_000,
  },
  {
    name: "Jun",
    Sale: 85_000,
  },
  {
    name: "July",
    Sale: 34_000,
  },
  {
    name: "Aug",
    Sale: 18_598,
  },
  {
    name: "Sep",
    Sale: 0,
  },
  {
    name: "Nov",
    Sale: 12_900,
  },
  {
    name: "Dec",
    Sale: 97_000,
  },
];

let newMembers = [
  { id: 1, name: "Mozhgan", title: "Web Develope", img: "images/img.png" },
  { id: 2, name: "Amir", title: "Network expert", img: "images/Amir.jpg" },
  { id: 3, name: "Leila", title: "Accountant", img: "images/leili.png" },
  { id: 4, name: "Sarah", title: "Sales manager", img: "images/Sarah.jfif" },
];

const transactions = [
  {
    id: 1,
    customer: "Monireh Ebrahimi",
    date: "12 Oct 2024",
    amount: 123,
    status: "Declined",
    img: "images/Monireh.jpg",
  },
  {
    id: 2,
    customer: "John Smith",
    date: "15 Oct 2024",
    amount: 254,
    status: "Approved",
    img: "images/John.jpg",
  },
  {
    id: 3,
    customer: "Kate Zab",
    date: "12 Sep 2024",
    amount: 145,
    status: "Approved",
    img: "images/kate.jfif",
  },
  {
    id: 4,
    customer: "Jonas Rav",
    date: "07 07 2024",
    amount: 754,
    status: "Pending",
    img: "images/Jonas.png",
  },
];

let userRows = [
  {
    id: 1,
    username: "Rima",
    avatar: "images/Rima.jpg",
    status: "active",
    transaction: "129.52",
    email: "Rima@gmail.com",
  },
  {
    id: 2,
    username: "Reneta",
    avatar: "images/reneta.png",
    status: "non-active",
    transaction: "135.82",
    email: "Renata@gmail.com",
  },
  {
    id: 3,
    username: "Andrea",
    avatar: "images/Andrea.jpg",
    status: "active",
    transaction: "$154.72",
    email: "Andrea@gmail.com",
  },
  {
    id: 4,
    username: "Andreas",
    avatar: "images/Andreas.jpg",
    status: "active",
    transaction: "$254.42",
    email: "Andi@gmail.com",
  },
  {
    id: 5,
    username: "Sophie",
    avatar: "images/sophie.jpg",
    status: "active",
    transaction: "$451.52",
    email: "So@gmail.com",
  },
];

export { xAxisData, newMembers, transactions, userRows };
