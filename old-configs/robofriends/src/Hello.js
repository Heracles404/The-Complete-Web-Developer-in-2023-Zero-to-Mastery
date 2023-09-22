import  React, {Component} from "react";
import './Hello.css';


// METHOD 1
// class Hello extends Component{
//     render(){
//         return (
//             <div className='f1 tc'>
//                 <h1>Imported from Hello.JS</h1>
//                 <p>Welcome to React</p>
//                 <p>{this.props.greeting}</p>
//             </div>
//         );
//     }
// }


// METHOD 2
const Hello = (props) => {
    return(
        <div className='f1 tc'>
            <h1>Imported from Hello.JS</h1>
            <p>Welcome to React</p>
            <p>{props.greeting}</p>
        </div>
    );
}

export default Hello;