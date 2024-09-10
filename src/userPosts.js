import { useEffect, useState } from "react";
import { variables } from "./variables";

function UserPosts() {
  const [data, setData] = useState([]);
  const postURL = variables.JsonPlaceHolderAPI_URL + "posts";
  useEffect(() => {
    fetch(postURL)
      .then((response) => response.json())
      .then((dbData) => setData(dbData));
  }, []);

  console.log(data.id);

  if (data) {
    return (
      <>
        <h1>json Placeholder API`</h1>
        <div>
          <a target="_blank" href={postURL}>
            Posts demo
          </a>
        </div>
        <ul>
          {data //.slice(0,6)
            .map((data) => (
              <li key={data.id}>
                {data.id} {data.title} {data.body}
              </li>
            ))}
        </ul>
      </>
    );
  }

  return <div>no data</div>;
}

export default UserPosts;
