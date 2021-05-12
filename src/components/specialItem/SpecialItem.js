import React from 'react';


class SpecialItem extends React.Component {

    render(){
        const {name, calories, quantity} = this.props;
        return(
            <div>
                {quantity} {name} = {calories} calories
            </div>
        )
    }
}

export default SpecialItem;