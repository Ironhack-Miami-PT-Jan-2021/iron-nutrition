import React from 'react';
import './AddFood.css';


class AddFood extends React.Component {

    state={
        name: '',
        calories: 0,
        image: '',
    }

    updateInput = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    handleFormSubmission = (e) => {
        this.setState({name: '', calories: 0, image: '',})
        this.props.create(this.state, e);
    }

    render(){ 
        return(
            <form className="the-form" onSubmit={this.handleFormSubmission}>
                <p>Name</p>
                <input type="text" name="name" onChange={this.updateInput} value={this.state.name}/>
                <p>Calories</p>
                <input type="number" name="calories" onChange={this.updateInput} value={this.state.calories} />
                <p>Image</p>
                <input type="text" name="image" onChange={this.updateInput} value={this.state.image} />

                <button>Submit</button>

            </form>
        )

    }

}

export default AddFood;