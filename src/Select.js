import React from 'react';
import './Select.css';

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        options: [],
        selectedOption: null,
        defaultSelect: '- Please select an item -',
        isOptionsVisible: false
    }
    // required param
    if (props.options) {
      this.state.options = props.options;
    }
    // optional prop for default value
    if (props.defaultValue) {
      const selected = props.defaultValue; 
      selected.index = props.options.indexOf(props.defaultValue);
      this.state.selectedOption = selected;
    }
  }

  // select handler to change select value and to fire callbacks
  handleSelect = (index) =>  {
    const selected = this.state.options[index];
    selected.index = index;
    this.setState({
        selectedOption: this.state.options[index],
        isOptionsVisible: false
    });
    // optional callback func to capture selected option
    if (this.props.optionChanged) {
      this.props.optionChanged(selected);
    }
  }

  // open/close options tab
  toggleSelectOptions() {
    if (this.state.isOptionsVisible) {
      this.setState({isOptionsVisible: false});
    } else {
      this.setState({isOptionsVisible: true});
    }
  }

  // cancel selected item func
  cancelSelected(e) {
    this.setState({
        selectedOption: null
    });
    e.stopPropagation();
  }

  render() {
    return (
        <div className="Select">
            
            <div className="x-select-wrapper" onClick={() => this.toggleSelectOptions()}>
                <div className={this.state.isOptionsVisible ? "x-select open":"x-select"}>
                    <div className="x-select__trigger">
                        <div className="select-content">
                            {this.state?.selectedOption?.label ? (
                                this.state.selectedOption?.label
                            ) : (
                                this.state?.defaultSelect
                            )}
                        </div>
                        <div className="select-content-btn">
                            <button className="btn fa fa-times" onClick={(e) => this.cancelSelected(e)}></button>
                        </div>
                        <div>|</div>
                        <div className="select-content-btn">
                            <button className="btn fa fa-angle-up"></button>
                        </div>
                    </div>
                    <div className="x-options">
                        {
                            this.state.options.map((opt, index) => (
                                <div key={index} 
                                  onClick={() => this.handleSelect(index)}
                                  className={(index === this.state.selectedOption?.index) ? "x-option selected":"x-option"}>
                                    {opt.label}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    );
  }
}

export default Select;
