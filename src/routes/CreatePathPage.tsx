import { Paper } from "@mui/material";

import { RouteComponentProps } from "@reach/router";

import ImageInput from "../components/ImageInput";
import PathFormInput from "../components/PathFormInput";
import TransportSelect from "../components/TransportSelect";
import FormSubmitButton from "../components/FormSubmitButton";

import { useTextStore } from "../hooks/useText";
import { NewPathFormStoreProvider } from "../hooks/useNewPathForm";

const CreatePathPage = (_: RouteComponentProps) => {
  const { createNewPath } = useTextStore();

  return (
    <NewPathFormStoreProvider>
      <Paper sx={{ p: 1, bgcolor: "whitesmoke" }}>
        <h4>{createNewPath}</h4>
        <PathFormInput />
        <TransportSelect />
        <ImageInput />
        <FormSubmitButton />
      </Paper>
    </NewPathFormStoreProvider>
  );
};

export default CreatePathPage;
