import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostRequest } from "../redux/redux-slice/fetchDataSlice.js";
import { Link } from "react-router-dom";
import "../styles/home.scss";
import Card from "./Card";

export default function Home() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state: any) => state?.fetchData);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchPostRequest());
  }, [dispatch]);

  const filteredData = data?.filter((post: any) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
      <h1>Welcome to Home Page</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="card-container">
        {!loading ? (
          filteredData?.length > 0 ? (
            filteredData.map((post: any) => (
              <Link key={post.id} to={`/post/${post.id}`} className="card-link">
                <Card title={post.title} body={post.body} />
              </Link>
            ))
          ) : (
            <p>No results found</p>
          )
        ) : (
          <p>Loading Cards...</p>
        )}
      </div>
    </div>
  );
}
