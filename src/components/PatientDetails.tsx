import { toast } from "react-toastify";
import { usePatientStore } from "../store/store";
import type { Patient } from "../types";
import PatientDetailItem from "./PatientDetailItem";

type Props = {
  patient: Patient;
};

function PatientDetails({ patient }: Props) {
  const deletePatient = usePatientStore((state) => state.deletePatient);
  const getPatientById = usePatientStore((state) => state.getPatientById);

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientDetailItem label="ID" text={patient.id} />
      <PatientDetailItem label="Nombre" text={patient.name} />
      <PatientDetailItem label="Propietario" text={patient.caretaker} />
      <PatientDetailItem label="Email" text={patient.email} />
      <PatientDetailItem label="Date" text={patient.date.toString()} />
      <PatientDetailItem label="Síntomas" text={patient.symptoms} />

      <div className="flex justify-between mt-10">
        <button
          onClick={() => getPatientById(patient.id)}
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg"
        >
          Editar
        </button>

        <button
          onClick={() => {
            deletePatient(patient.id);
            toast.success("Paciente eliminado");
          }}
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default PatientDetails;
