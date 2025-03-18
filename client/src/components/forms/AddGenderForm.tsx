const AddGenderForm = () => {
  return (
    <>
      <div className="form-group">
        <div className="mb-3 w-100">
          <label htmlFor="gender">Gender</label>
          <input
            type="text"
            className="form-control text-center"
            id="gender"
            name="gender"
          />
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-success">
            <i className="bi bi-check-lg"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default AddGenderForm;
