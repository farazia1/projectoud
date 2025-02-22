const order = {
    name: "order",
    title: "Order",
    type: "document",
    fields: [
      { name: "name", title: "Name", type: "string" },
      { name: "email", title: "Email", type: "string" },
      { name: "phone", title: "Phone", type: "string" }, // ✅ Fixed issue
      { name: "address", title: "address", type: "string" } // ✅ Fixed issue
    ],
  };
  
  export default order;
  