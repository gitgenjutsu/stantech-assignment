import { useEffect } from "react";
import "../styles/home.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostRequest } from "../redux/redux-slice/fetchDataSlice.js";
import Card from "./Card.js";

export default function Home() {
  const dispatch = useDispatch();

  const { data, loading } = useSelector((state: any) => state?.fetchData);
  console.log(data, ">>>selecter");

  useEffect(() => {
    dispatch(fetchPostRequest());
  }, [dispatch]);

  return (
    <div className="home-container">
      <h1>Welcome to Home Page</h1>
      <div className="card-container">
        {!loading ? (
          data?.map((post: { id: number; title: string; body: string }) => (
            <Card key={post.id} title={post.title} body={post.body} />
          ))
        ) : (
          <p>Loading Cards...</p>
        )}
      </div>
    </div>
  );
}
