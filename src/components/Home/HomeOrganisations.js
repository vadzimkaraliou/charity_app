import React, { useState, useEffect } from "react";
import Pagination from "../Pagination";

const HomeOrganisations = () => {
  const [orgs, setOrgs] = useState([]);
  const [category, setCategory] = useState("foundation");

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  const handleError = (err) => {
    console.log("Error");
    console.error("Error");
  };

  useEffect(() => {
    const getOrganisations = async () => {
      const response = await fetch(
        "https://jtdscunjootjttyfzkjq.supabase.co/storage/v1/object/sign/organisations/org.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJvcmdhbmlzYXRpb25zL29yZy5qc29uIiwidHJhbnNmb3JtYXRpb25zIjoiIiwiaWF0IjoxNjcwNDM5ODIyLCJleHAiOjE5ODU3OTk4MjJ9.l8zjrHn7cQiWqPdM8E4xE8Ywh2J-uH7MytfRCxpfrkA"
      );

      if (!response.ok) {
        throw new Error("Error");
      }
      const { organisations } = await response.json();

      const filteredArray = organisations.filter(
        ({ type }) => type === category
      );
      setOrgs(filteredArray);
    };
    getOrganisations().catch(handleError);
  }, [category]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = orgs.slice(firstPostIndex, lastPostIndex);

  const handleClick = (e) => {
    setCategory(e.target.dataset.name);
    setCurrentPage(1);
  };

  if (!orgs.length) return <p>ading...</p>;

  return (
    <section className="organisations container" id="organisations">
      <div className="organisations-title">Komu pomagamy?</div>
      <img
        src={require("../../assets/Decoration.svg").default}
        alt="decoration"
      />
      <div className="organisations-types">
        <button
          type="button"
          className="selected-active"
          data-name="foundation"
          id="button1"
          onClick={(e) => handleClick(e)}
        >
          Fundacjom<br></br>
        </button>
        <button
          type="button"
          className="organisation-btn"
          data-name="non-governmental"
          id="button2"
          onClick={(e) => handleClick(e)}
        >
          Organizacjom<br></br>pozarządowym
        </button>
        <button
          type="button"
          className="organisation-btn"
          data-name="local"
          id="button3"
          onClick={(e) => handleClick(e)}
        >
          Lokalnym<br></br>zbiórkom
        </button>
      </div>
      <div className="organisations-text">
        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
        współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego
        potrzebują.
      </div>

      <ul className="organisation-list">
        {currentPosts.map((org) => {
          return (
            <li key={org.id}>
              <div className="organisation-info">
                <div className="organisation-title">
                  <div className="organisation-name">{org.name}</div>
                  <div className="organisation-description">
                    {org.description}
                  </div>
                </div>
                <div className="organisation-details">{org.details}</div>
              </div>
              <div className="list-line"></div>
            </li>
          );
        })}
      </ul>
      <Pagination
        totalPosts={orgs.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </section>
  );
};

export default HomeOrganisations;
