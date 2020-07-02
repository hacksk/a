import React from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      products: [],
      services: [],
      result: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    axios
      .get(
        `https://automoto.techbyheart.in/api/v1/product/?search=${event.target.value}`
      )
      .then((res) => {
        const products = res.data;
        this.setState({ products });
        if (this.state.products == null) {
          this.setState({ result: "No results found" });
        }
      });
    axios
      .get(
        `https://automoto.techbyheart.in/api/v1/service/?search=${event.target.value}`
      )
      .then((res) => {
        const services = res.data;
        this.setState({ services });
        if (this.state.services == null) {
          this.setState({ result: "No results found" });
        }
      });
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div
        className="search-bar-content"
        style={{ background: "rgba(255, 255, 255, 0.08)" }}
      >
        <form
          onSubmit={this.handleSubmit}
          style={{ display: "flex", flexDirection: "row" }}
        >
          <label
            style={{ marginBottom: "0", borderRadius: "8px", width: "100%" }}
          >
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              className="search-bar"
              placeholder="Search"
            />
          </label>
          <button type="submit" value="Submit" className="search-button">
            <FaSearch />
          </button>
        </form>
        <div className="search-content-direction">
          {this.state.products.map((product) => (
            <div>
              {/* <h4 style={{ color: "white",paddingLeft:"1em",paddingTop:"1em" }}>Products</h4> */}
              <button
                className="search-image-button"
                style={{ background: "transparent" }}
              >
                <Link to={`/products/${product.id}`}>
                  <img alt=""
                    className="search-image"
                    src={product.image[0].image}
                  ></img>
                </Link>
              </button>
            </div>
          ))}
        </div>
        <div className="search-content-direction">
          {this.state.services.map((service) => (
            <div>
              {/* <h4 style={{ color: "white",paddingLeft:"1em",paddingTop:"1em" }}>Products</h4> */}
              <button
                className="search-image-button"
                style={{ background: "transparent" }}
              >
                <Link to={`/services/${service.id}`}>
                  <img alt=""
                    className="search-image"
                    src={service.images[0].image}
                  ></img>
                </Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default SearchBar;
