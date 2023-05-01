export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={params.row.img}
            alt="avatar"
          />
          {params.row.userName}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    userName: "Marie",
    img: "https://www.novartis.com/sites/novartis_com/files/styles/biography_page_image/public/2021-08/marie-france-tschudin-portrait.jpg.webp?itok=VXmLDINZ",
    status: "active",
    email: "marie@gmail.com",
    age: 23,
  },
  {
    id: 2,
    userName: "Alex",
    img: "https://media.licdn.com/dms/image/D4E03AQGZy_4rj-vpsQ/profile-displayphoto-shrink_800_800/0/1673369063548?e=2147483647&v=beta&t=PompcmW-oIB0AAF6pOh-oX0PGCkk2GbYgYsoAZulsEg",
    status: "passive",
    email: "alex@gmail.com",
    age: 45,
  },
  {
    id: 3,
    userName: "John",
    img: "https://johnzeratsky.com/wp-content/uploads/2019/07/JohnZeratsky_web-8510-1.jpg",
    status: "active",
    email: "john@gmail.com",
    age: 50,
  },
  {
    id: 4,
    userName: "Marie",
    img: "https://www.novartis.com/sites/novartis_com/files/styles/biography_page_image/public/2021-08/marie-france-tschudin-portrait.jpg.webp?itok=VXmLDINZ",
    status: "active",
    email: "marie@gmail.com",
    age: 23,
  },
  {
    id: 5,
    userName: "Alex",
    img: "https://media.licdn.com/dms/image/D4E03AQGZy_4rj-vpsQ/profile-displayphoto-shrink_800_800/0/1673369063548?e=2147483647&v=beta&t=PompcmW-oIB0AAF6pOh-oX0PGCkk2GbYgYsoAZulsEg",
    status: "passive",
    email: "alex@gmail.com",
    age: 45,
  },
  {
    id: 6,
    userName: "John",
    img: "https://johnzeratsky.com/wp-content/uploads/2019/07/JohnZeratsky_web-8510-1.jpg",
    status: "active",
    email: "john@gmail.com",
    age: 50,
  },
];
