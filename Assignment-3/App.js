import React from "react";
import ReactDOM from "react-dom/client";

// create a nexted element using react  
//   const title = React.createElement(
//     'div',
//     { className: 'title' },
//     React.createElement('h1', {id: "H1 heading"}, 'Heading 1'),
//     React.createElement('h2', {id: "H2 Heading"}, 'Heading 2'),
//     React.createElement('h3', {id: "H3 Heading"}, 'Heading 3')
//   );


//  create element using jsx
// const jsxHeading = (<div className="header">
    //    <h1>This is the h1 tag using JSX</h1>
    //    <h2>This is the h2 tag using JSX</h2>
    //    <h3>This is the h2 tag using JSX</h3>
// console.log(jsxHeading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);


// React Element
// const heading = React.createElement("h1", { id: "heading" }, "Hello world from React");
// const root = document.getElementById("root");
// ReactDOM.createRoot(root).render(heading);



// functional Components
// const HeadingComponent =()=>(
//         <div id ="container">
//          <h1>This is the h1 tag in Functional Componenet</h1>
//          <h2>This is the h1 tag in Functional Componenet</h2>
//          <h3>This is the h1 tag in Functional Componenet</h3>
//     </div>
//     )
//     const root = ReactDOM.createRoot(document.getElementById("root"));
//     root.render(<HeadingComponent/>);
    
    


//  composition of React Component
// const Title =() =>(
//     <h1 className="head" tabIndex="5">
//         Composition of react components
//     </h1>
// )
// const HeadingComponent =()=>(
//     <div id ="container">
//     <Title  />
//      <h1>Namste react Functional Component</h1>
// </div>
// )
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent/>);


// const Header = (props) => {
//     return (
//         <div className={props.id}>
//             <img className='logo' src="https://th.bing.com/th?id=OIP.s6RuZ2Cv4DtF-HuEFALqKwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2.svg.png"/>
//             <div className='search'>
//                 <input placeholder='Search' />
//             </div>

//             <img className='user' src='https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg'/>

//         </div>
//     )
// }
const Header = (props) => {
    return (
        <div className={props.id}>
            <img className='logo' src="https://th.bing.com/th?id=OIP.s6RuZ2Cv4DtF-HuEFALqKwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2.svg.png" alt="Logo" />
            <div className='search'>
                <input placeholder='Search' />
                <img className='mic' src="https://th.bing.com/th/id/OIP.SDZ0aK5nezkrDvhRPdbXRwHaEK?w=289&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7.svg.png" alt="Search Icon" />
            </div>
            <img className='user' src='https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg' alt="User Icon" />
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Header id='header'/>)