import "../../style/GendersTable.css";

const GendersTable = () => {
  return (
    <>
      <table className="table table-hover table-striped table-container">
        <thead>
          <tr>
            <th>No.</th>
            <th>Gender</th>
            <th className="actions-column">Actions</th>
          </tr>
        </thead>
        <tbody>
          {[
            { id: 1, gender: "Male" },
            { id: 2, gender: "Female" },
            { id: 3, gender: "Others" },
          ].map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.gender}</td>
              <td>
                <div className="d-flex justify-content-center gap-2">
                  <button className="btn btn-primary btn-sm">
                    <i className="bi bi-pencil"></i>
                  </button>
                  <button className="btn btn-danger btn-sm">
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default GendersTable;
