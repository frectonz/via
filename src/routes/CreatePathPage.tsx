import { Paper } from "@mui/material";

import { RouteComponentProps } from "@reach/router";

import ImageInput from "../components/ImageInput";
import PathFormInput from "../components/PathFormInput";
import TransportSelect from "../components/TransportSelect";
import FormSubmitButton from "../components/FormSubmitButton";

import { NewPathFormStoreProvider } from "../hooks/useNewPathForm";

const CreatePathPage = (_: RouteComponentProps) => {
  return (
    <NewPathFormStoreProvider>
      <Paper sx={{ p: 1, bgcolor: "whitesmoke" }}>
        <h4>Create new path</h4>
        <PathFormInput />
        <TransportSelect />
        <ImageInput />
        <FormSubmitButton />
      </Paper>
    </NewPathFormStoreProvider>
  );
};

export default CreatePathPage;
