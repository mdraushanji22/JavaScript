// const A = {
//   name: "Raushan",

//   callback: function () {
//     arrow = () => {
//       console.log(this);
//     };
//     arrow();
//   },
// };
// A.callback();

const A = {
  name: "Raushan",

  callback: function () {
    arrow = () => {
      console.log(this.name);
    };
    arrow();
  },
};
A.callback();
