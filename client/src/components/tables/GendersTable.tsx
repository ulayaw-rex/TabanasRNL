import DeleteGender from "../../pages/gender/DeleteGender";
import EditGender from "../../pages/gender/EditGender";
import "./GendersTable.css";

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
          <tr>
            <td>1</td>
            <td>Male</td>
            <div className="d-flex gap-2">
              <EditGender />
              <DeleteGender />
            </div>
          </tr>
          <tr>
            <td>2</td>
            <td>Female</td>
            <div className="d-flex gap-2">
              <EditGender />
              <DeleteGender />
            </div>
          </tr>
          <tr>
            <td>3</td>
            <td>Others</td>
            <div className="d-flex gap-2">
              <EditGender />
              <DeleteGender />
            </div>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default GendersTable;
