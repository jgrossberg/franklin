import React from "react";

class PropertyDetailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log("handling change");
  }

  handleSubmit(event) {
    let prompt = "";
    let propertyElements = document.querySelectorAll("input");
    propertyElements.forEach(element => {
      console.log(element);
      if (element.type=="checkbox" && element.checked) {
        prompt = prompt.concat(element.id + " ");
      } else if (element.type=="text") {
        prompt = prompt.concat(element.value + " " + element.id + "")
      }


    });
    console.log("prompt = " + prompt);
  }

  render() {
    return (
      <div className="text-gunmetal">
        <p className="mt-16 text-center">
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
                className="ml-2 mr-4 border border-gunmetal rounded-lg"
                id="bedrooms"

                onChange={this.handleChange}
              />
            </label>
            <label>
              Bathrooms
              <input
                type="text"
                className="ml-2 border border-gunmetal rounded-lg"
                id="bathrooms"

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
                className="ml-2 border border-gunmetal rounded-lg"
                id="zipcode"

                onChange={this.handleChange}
              />
            </label>
          </div>
          <br></br>
          <label>
            <input
              type="checkbox"
              className="mr-1"
              id="garage"
              onChange={this.handleChange}
            />
            Garage
          </label>
          <label>
            <input
              type="checkbox"
              className="ml-2 mr-1"
              id="floorplan"
              onChange={this.handleChange}
            />
          </label>
          Open Floorplan
          <label>
            <input
              type="checkbox"
              className="ml-2 mr-1"
              id="office"
              onChange={this.handleChange}
            />
            Office
          </label>
          <label>
            <input
              type="checkbox"
              className="ml-2 mr-1"
              id="pool"
              onChange={this.handleChange}
            />
            Pool
          </label>
          <label>
            <input
              type="checkbox"
              className="ml-2 mr-1"
              id="garden"
              onChange={this.handleChange}
            />
            Garden
          </label>
          <br></br>
          <button
            onClick={this.handleSubmit}
            type="button"
            className="block mx-auto h-12 w-4/5 mt-12 border bg-teagreen"
          >Submit</button>
        </form>

        <textarea
          label="output"
          placeholder="copy will appear here"
          className="mt-12 p-1 w-full border bg-lightgreen border-gunmetal rounded-xl"
        ></textarea>
      </div>
    );
  }
}

export default PropertyDetailForm;
