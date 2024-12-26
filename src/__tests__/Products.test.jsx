import React from "react";
import { describe, it, expect, beforeEach, jest } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import Products from "./Products";

const mockStore = configureStore([thunk]);

describe("Products Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      products: { items: [] },
      cart: { items: [] },
    });

    store.dispatch = jest.fn();
  });

  it("should dispatch fetchProducts if products array is empty", () => {
    render(
      <Provider store={store}>
        <Products />
      </Provider>
    );

    expect(store.dispatch).toHaveBeenCalledWith(expect.any(Function)); // Check if fetchProducts is dispatched
  });

  it("should render product categories and allow filtering", () => {
    store = mockStore({
      products: {
        items: [
          { id: 1, title: "Laptop", price: 1000, category: "electronics" },
          { id: 2, title: "Ring", price: 500, category: "jewelery" },
        ],
      },
      cart: { items: [] },
    });

    render(
      <Provider store={store}>
        <Products />
      </Provider>
    );

    // Check if category buttons are rendered
    const allButton = screen.getByText("All");
    expect(allButton).toBeInTheDocument();

    const electronicsButton = screen.getByText("Electronics");
    fireEvent.click(electronicsButton);

    const productTitle = screen.getByText("Laptop");
    expect(productTitle).toBeInTheDocument();

    expect(screen.queryByText("Ring")).not.toBeInTheDocument(); // Ensure filtering works
  });

  it("should render products sorted by price when sorting option is selected", () => {
    store = mockStore({
      products: {
        items: [
          { id: 1, title: "Laptop", price: 1000, category: "electronics" },
          { id: 2, title: "Phone", price: 500, category: "electronics" },
        ],
      },
      cart: { items: [] },
    });

    render(
      <Provider store={store}>
        <Products />
      </Provider>
    );

    // Sort by price: Low to High
    const sortDropdown = screen.getByLabelText("Sort by:");
    fireEvent.change(sortDropdown, { target: { value: "1" } });

    const products = screen.getAllByText(/Laptop|Phone/);
    expect(products[0]).toHaveTextContent("Phone");
    expect(products[1]).toHaveTextContent("Laptop");
  });

  it("should dispatch addItem when 'Add To Cart' button is clicked", () => {
    store = mockStore({
      products: {
        items: [
          { id: 1, title: "Laptop", price: 1000, category: "electronics" },
        ],
      },
      cart: { items: [] },
    });

    render(
      <Provider store={store}>
        <Products />
      </Provider>
    );

    const addToCartButton = screen.getByText("Add To Cart");
    fireEvent.click(addToCartButton);

    expect(store.dispatch).toHaveBeenCalledWith({
      type: "cart/addItem",
      payload: { id: 1, title: "Laptop", price: 1000, category: "electronics" },
    });
  });
});
