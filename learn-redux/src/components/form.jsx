import React, { Component } from "react"


class Drop extends Component{
    constructor(){
        super()
        this.state={
            value:'coconut',
            lists:['one','two','three','four']
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmition = this.handleSubmition.bind(this);
    }

    handleChange(e){
        // console.log(e.target.value);
        this.setState({
            value : e.target.value,
        })
        
    }


    handleSubmition(e){
        alert(this.state.value);
        // console.log(this.state.value);
    }

    render(){
        return(
            <form onSubmit={this.handleSubmition}>
            <div>how are you?</div>
            {/* <select value ={this.state.value} onChange={this.handleChange}>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select> */}

<select value ={this.state.value} onChange={this.handleChange}>
    {
        this.state.lists.map(list=>(
            <option key={list} value ={list}>
                {list}
            </option> 
        ))

    }

</select>
{/* <button >submit</button> */}
<input type="submit" value="Submit" />
</form>
        )
    }
}


export default Drop;