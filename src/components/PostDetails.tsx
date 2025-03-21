import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostRequest } from "../redux/redux-slice/fetchDataSlice.js";
import Card from "./Card.js";

export default function PostDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, loading } = useSelector((state: any) => state?.fetchData);

  useEffect(() => {
    if (!data.length) {
      dispatch(fetchPostRequest());
    }
  }, [dispatch, data.length]);

  const post = data.find((item: any) => item.id.toString() === id);

  return (
    <div className="details-container">
      {loading ? (
        <p>Loading...</p>
      ) : post ? (
        <div>
          <button onClick={() => navigate(-1)}>Back</button>
          <Card title={post.title} body={post.body} />
        </div>
      ) : (
        <p>Post not found</p>
      )}
    </div>
  );
}
