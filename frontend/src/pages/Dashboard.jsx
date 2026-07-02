import { useEffect, useState } from "react";
import api from "../services/api";

export default function Dashboard() {
  const [influencers, setInfluencers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadInfluencers();
  }, []);

  async function loadInfluencers() {
    try {
      const response = await api.get("/influencers/");
      console.log("API Response:", response.data);
      setInfluencers(response.data);
    } catch (error) {
      console.error("API Error:", error);
      alert("Backend Connection Error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold">
        🚀 LeadForge AI
      </h1>

      <p className="mt-2 text-gray-500">
        Backend Connected Successfully
      </p>

      <br />

      <h2 className="text-xl font-bold">
        Total Influencers : {influencers.length}
      </h2>

      <br />

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <table
          border="1"
          cellPadding="10"
          style={{
            borderCollapse: "collapse",
            width: "100%"
          }}
        >
          <thead>

            <tr>

              <th>ID</th>

              <th>Name</th>

              <th>Username</th>

              <th>Category</th>

              <th>Followers</th>

              <th>Email</th>

              <th>Country</th>

            </tr>

          </thead>

          <tbody>

            {influencers.map((item) => (

              <tr key={item.id}>

                <td>{item.id}</td>

                <td>{item.full_name}</td>

                <td>{item.username}</td>

                <td>{item.category}</td>

                <td>{item.followers}</td>

                <td>{item.email}</td>

                <td>{item.country}</td>

              </tr>

            ))}

          </tbody>

        </table>
      )}

    </div>
  );
}