import AddGenderForm from "../../components/forms/AddGenderForm";
import GendersTable from "../../components/tables/GendersTable";
import MainLayout from "../layout/MainLayout";

const Genders = () => {
  const content = (
    <>
      <div className="container d-flex flex-column align-items-center mt-4">
        <div className="row">
          <AddGenderForm />
        </div>
        <div className="col-md-8">
          <GendersTable />
        </div>
      </div>
    </>
  );

  return <MainLayout content={content} />;
};

export default Genders;
