import React, { useState, useEffect } from "react";

function Github() {
  const [john, setPosts] = useState([]);
  const fetchPost = async () => {
    const response = await fetch(
      "https://api.github.com/users/github-john-doe"
    );
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div>
      <h1>Github user</h1>
      <h2> {john.name} </h2>
      <div>{<img src={john.avatar_url} alt="img de John Doe"></img>}</div>
      <div>
        <p>{john.bio}</p>
      </div>
      <div>
        <p>Abonnés : {john.followers}</p>
      </div>
      <div>
        <p>Abonnement : {john.following}</p>
      </div>
      <div>
        <p>Créé le : {john.created_at}</p>
      </div>
      <div>
        <p>Modifié le : {john.updated_at}</p>
      </div>
      <div>{<a href={john.repos_url}>{john.repos_url}</a>}</div>
    </div>
  );
}
export default Github;
