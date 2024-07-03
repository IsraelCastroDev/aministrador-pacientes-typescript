import type { Patient } from "../types";
import PatientDetailItem from "./PatientDetailItem";

type Props = {
  patient: Patient;
};

function PatientDetails({ patient }: Props) {
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientDetailItem label="ID" text={patient.id} />
      <PatientDetailItem label="Nombre" text={patient.name} />
    </div>
  );
}

export default PatientDetails;
