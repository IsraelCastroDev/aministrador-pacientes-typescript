type Props = {
  label: string;
  text: string;
};

function PatientDetailItem({ label, text }: Props) {
  return (
    <p className="font-bold mb-3 text-gray-700 uppercase">
      {label}: {""}
      <span className="font-normal normal-case">{text}</span>
    </p>
  );
}

export default PatientDetailItem;
