import React from "react";
import './style.scss';
import BoxComp from '../components/box-compo';

class BoxPage extends React.Component {
    state = {
        randomNumberList: [],
    }

    // {this.state.randomNumberList.map((item, index) => {
    //     return <BoxCom key={index}>
    //         <p>{item}</p>
    //     </BoxCom>
    // })}

    randomNumber = () => {
        const n = Math.floor(Math.random() * 999 + 1);
        const { randomNumberList } = this.state


        // tarberak 1
        // this.setState({ randomNumberList: [...this.state.randomNumberList, n] })

        //  tarberak 2
        randomNumberList.push(n)
        this.setState({ randomNumberList })
    }

    deleteBox = (index) => {
        const newList = this.state.randomNumberList;
        newList.splice(index, 1);
        this.setState({ randomNumberList: newList, openModal: false });
        //this.setState({  })
    }

    render() {

        return <section>
            <header>
                <div className="header-btn">
                    <button onClick={this.randomNumber}>Add box</button>
                </div>
            </header>
            <div className="body-part">
                <div className="scroll-div">
                    {this.state.randomNumberList.map((item, index) => {
                        return <BoxComp vazgen={item} key={index} index={index} deleteBox={() => this.deleteBox(index)} />
                    })}
                </div>
                <div className="text-part">
                    <h3>Welcome to boxes world</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum consequuntur officiis aspernatur aperiam magnam cum dolorem similique rerum mollitia. Aliquam.</p>
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, libero!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus amet doloribus fugiat, odit porro deleniti.</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa ratione dolores harum nisi a officia corporis ipsum, ullam illum neque ex voluptates sit corrupti aperiam excepturi illo. Ipsa mollitia beatae expedita temporibus id eius est distinctio nihil non saepe, quo natus error neque repellat facere consequuntur, tenetur numquam et sed.
                    </p>
                </div>
            </div>
        </section>
    }
}
export default BoxPage




