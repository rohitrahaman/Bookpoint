import React from "react";

const bookdata = [
  {
    id: 1,
    name: "Book1",
    discription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, possimus?",
    price: "500",
    bgColor: "bg-gray-100",
  },
  {
    id: 2,
    name: "Book1",
    discription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, possimus?",
    price: "500",
    bgColor: "bg-white-100",
  },
  {
    id: 3,
    name: "Book1",
    discription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, possimus?",
    price: "500",
    bgColor: "bg-gray-100",
  },
  {
    id: 4,
    name: "Book1",
    discription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, possimus?",
    price: "500",
    bgColor: "bg-white-100",
  },
  {
    id: 5,
    name: "Book1",
    discription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, possimus?",
    price: "500",
    bgColor: "bg-gray-100",
  },
  {
    id: 6,
    name: "Book1",
    discription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, possimus?",
    price: "500",
    bgColor: "bg-white-100",
  },
  {
    id: 7,
    name: "Book1",
    discription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, possimus?",
    price: "500",
    bgColor: "bg-gray-100",
  },
  {
    id: 8,
    name: "Book1",
    discription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, possimus?",
    price: "500",
    bgColor: "bg-white-100",
  },
  {
    id: 9,
    name: "Book1",
    discription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, possimus?",
    price: "500",
    bgColor: "bg-gray-100",
  },
];
function DataTableBody() {
  return (
    <div className="w-full py-5">
      <table className="w-full gap-4">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Discription</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {bookdata.map((book) => (
            <tr key={book.id} className={book.bgColor}>
              <td>{book.id}</td>
              <td>{book.name}</td>
              <td>{book.discription}</td>
              <td>{book.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTableBody;
