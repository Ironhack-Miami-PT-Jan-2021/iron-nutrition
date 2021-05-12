import React from 'react';
import FoodBox from '../foodBox/FoodBox';
import AddFood from '../addFood/AddFood';
import Search from '../search/Search';
import SpecialItem from '../specialItem/SpecialItem';
import data from '../../foods.json';
import './Main.css'

class Main extends React.Component {

    state = {
        allFoods: data,
        visibleFoods: data,
        formShowing: false,
        todaysFoods: [],
    }


    createNewFoodEntry = (newFoodobject, e) => {
        e.preventDefault();
        const copy = [...this.state.allFoods];
        copy.unshift(newFoodobject);
        this.setState({allFoods: copy, visibleFoods: copy, formShowing: false});
    }

    toggleForm = () =>{
        this.setState({formShowing: !this.state.formShowing})
    }

    filterResults = (searchTerm) => {
        const copy = [...this.state.allFoods];
        const filteredResults = copy.filter((foodObject)=>{
            return foodObject.name.toLowerCase().includes(searchTerm.toLowerCase());
        })
        this.setState({visibleFoods: filteredResults});
    }

    addToList = (foodObject) => {
        const copy = this.state.todaysFoods;
        let duplicate = false;
 
        copy.forEach((eachFood)=>{
            if(eachFood.name === foodObject.name){
                eachFood.quantity += 1;
                eachFood.calories += foodObject.calories;
                duplicate = true;
            }
        });
            if(!duplicate){
                copy.push(foodObject)
            }

            console.log(copy)

            this.setState({todaysFoods: copy});

    }


    render(){
        return (
            <>
                <Search executeSearch={this.filterResults} />
                <button onClick={this.toggleForm}>Add Food</button>
                {this.state.formShowing && <AddFood create={this.createNewFoodEntry} />}
                <div className="first-list">
                    {this.state.visibleFoods.map((food)=>{
                        return <FoodBox {...food} key={food.name} addToList={this.addToList} />
                        
                    })}
                </div>
                <div className="second-list">
                    {this.state.todaysFoods.map((food)=>{
                        return <SpecialItem {...food} key={food.name} />
                    })}
                </div>
            </>
        )
    }


}

export default Main;