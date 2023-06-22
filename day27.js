//function
// function NameOfFunction (props) {
//     console.log(props)
// }
// NameOfFunction("hii");

// var NameOfFunction2 = (props) => {
//     console.log(props)
// }
// NameOfFunction2("Hello")

// const NameOfFunction3 = props => {
//     console.log(props)
// }
// const NameOfFunction4 = (props, props2) => console.log(props);

// NameOfFunction4("ji", "hello");





// var let const
// hoisting
// closer


function outerFunction() {
    var myMarks = 40;
    console.log("Inside outer function");
     function innerFunction() {
         console.log("Inside inner Function", myMarks)
     }
      return innerFunction;
 }
 const res = outerFunction();
//    res();
 console.log(res())
//  secret - res ke under function store hoga with varible call myMarks

//   console.log(res())
