import React from "react";
import styles from "./propertyDetailForm.module.css";

class PropertyDetailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        bedrooms: "",
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log("handling change");
  }

  handleSubmit(event) {
    console.log("handling submit");
  }

  render() {
    return (
      <div>
        <p className="text-rose-400 mt-16 text-center">
          Tell us about your property.
          <br />
          <br />
          <br />
        </p>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-4">
            <label>
              Bedrooms
              <input
                type="text"
                className="ml-2 mr-4 border border-gunmetal-300 rounded-lg"
                id="bedrooms"
                value={this.state.values.bedrooms}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Bathrooms
              <input
                type="text"
                className="ml-2 border rounded-lg"
                id="bathrooms"
                value={this.state.values.bathrooms}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <br></br>
          <div className="mb-4">
            <label>
              Zipcode
              <input
                type="text"
                className="ml-2 border-2 border-rose-300 rounded-lg"
                id="bedrooms"
                value={this.state.values.zipcode}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <br></br>
          <label>
            Garage
            <input
              type="checkbox"
              className="ml-1 mr-2"
              id="garage"
              value={this.state.values.garage}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Open Floorplan
            <input
              type="checkbox"
              className="ml-1 mr-2"
              id="floorplan"
              value={this.state.values.openFloorplan}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Office
            <input
              type="checkbox"
              className="ml-1 mr-2"
              id="office"
              value={this.state.values.office}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Pool
            <input
              type="checkbox"
              className="ml-1 mr-2"
              id="pool"
              value={this.state.values.pool}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Garden
            <input
              type="checkbox"
              className="ml-1 mr-2"
              id="garden"
              value={this.state.values.garden}
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <input
            type="submit"
            className="w-full mt-2 border border-white-300 rounded-lg"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}

export default PropertyDetailForm;
