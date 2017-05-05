import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

import {
  addChoresRequest,
  assignChoreRequest,
} from '../../actions/addChoresAction';
import DayCarousel from '../../components/DayCarousel';
import './style.css';
import '../../components/flexgrid.css';

class AddChoresForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addedChores: [],
    };
  }

  onChange(e) {
    e.preventDefault();
    const category = e.target.value;
    this.props.dispatch(addChoresRequest(category));
  }

  onClick(e, j) {
    const { day, weekDays } = this.props.dayCarousel;
    const chores = [
      {
        ChId: this.props.chores[j]._id,
        ChName: this.props.chores[j].choreName,
        ChImg: this.props.chores[j].imgurl,
        day: weekDays[day],
        status: false,
      },
    ];
    this.setState({
      addedChores: this.state.addedChores.concat([j]),
    });

    this.props.dispatch(assignChoreRequest(this.props.childId, chores));
  }

  render() {
    const { childId } = this.props;
    const { errorMessage } = this.props;
    const { chores } = this.props;
    const { updatedChore } = this.props;
    const { day, weekDays } = this.props.dayCarousel;
    return (
      <div className="centerItem">
        {errorMessage ? <p>{errorMessage}</p> : null}
        <form onSubmit={e => this.onSubmit(e)}>
          <FormGroup controlId="category" className="centerAlign">
            <ControlLabel>Select Chore Category</ControlLabel>
            <FormControl
              componentClass="select"
              placeholder="select"
              onChange={e => this.onChange(e)}
            >
              <option value="select">select </option>
              <option value="Household_Chores">Household Chores</option>
              <option value="Mealtime_Chores">Mealtime Chores</option>
            </FormControl>
            <DayCarousel />
          </FormGroup>
        </form>
        <div>
          {chores.length > 0
            ? <div>
                <ul className="renderedList">
                  {chores.map((item, i) => (
                    <li className="listStyle" key={i}>
                      <hr className="partitionStyle" />
                      <img className="imgStyle" src={item.imgurl} />
                      <p className="contentStyle">{item.choreName}</p>
                      {this.state.addedChores.indexOf(i) !== -1
                        ? <span className="msgAlign">Added</span>
                        : <button
                            className="btn btn-primary btn-md btnStyle"
                            id={'add' + i}
                            onClick={e => this.onClick(e, i)}
                          >
                            Add Chore
                          </button>}
                    </li>
                  ))}
                </ul>
              </div>
            : null}
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    category: state.chores.category,
    chores: state.chores.chores,
    errorMessage: state.chores.errorMessage,
    updatedChore: state.chores.updatedChore,
    dayCarousel: state.dayCarousel,
  };
};

export default connect(mapStateToProps)(AddChoresForm);
