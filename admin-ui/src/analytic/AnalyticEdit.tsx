import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const AnalyticEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="action" source="action" />
        <TextInput label="category" source="category" />
        <TextInput label="label" source="label" />
        <div />
        <TextInput label="userId" source="userId" />
        <NumberInput label="value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
