import SynthForm from "../../components/SynthForm/SynthForm";

const AddSynthPage = (): React.ReactElement => {
  return (
    <SynthForm
      submitForm={() => {
        true;
      }}
    />
  );
};

export default AddSynthPage;
