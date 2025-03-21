import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";
import Home from "../components/Home";

const mockStore = configureStore([]);
const mockData = [
  { id: 1, title: "Test Post 1", body: "This is a test body 1" },
  { id: 2, title: "Another Post", body: "This is another test body" },
];

describe("Home Component", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      fetchData: { data: mockData, loading: false },
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );
  });

  test("should render input field", () => {
    const input = screen.getByPlaceholderText("Search...");
    expect(input).toBeInTheDocument();
  });

  test("should filter cards based on input", () => {
    const input = screen.getByPlaceholderText("Search...");

    expect(screen.getByText("Test Post 1")).toBeInTheDocument();
    expect(screen.getByText("Another Post")).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "Test" } });

    expect(screen.getByText("Test Post 1")).toBeInTheDocument();
    expect(screen.queryByText("Another Post")).not.toBeInTheDocument();
  });

  test("should display 'No results found' when search doesn't match", () => {
    const input = screen.getByPlaceholderText("Search...");

    fireEvent.change(input, { target: { value: "Nonexistent Post" } });

    expect(screen.getByText("No results found")).toBeInTheDocument();
  });

  test("should display 'Loading Cards...' when data is loading", () => {
    store = mockStore({
      fetchData: { data: [], loading: true },
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText("Loading Cards...")).toBeInTheDocument();
  });
});
