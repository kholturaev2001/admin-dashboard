export const userColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 170,
  },
  {
    field: "user",
    headerName: "User",
    width: 70,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.userName}
        </div>
      );
    },
  },
  {
    field: "displayName",
    headerName: "Fullname",
    width: 250,
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "address",
    headerName: "Address",
    width: 130,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 160,
  },
];
