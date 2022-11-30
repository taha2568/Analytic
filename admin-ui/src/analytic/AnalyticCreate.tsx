import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const AnalyticCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="action" source="action" />
        <TextInput label="category" source="category" />
        <TextInput label="label" source="label" />
        <div />
        <TextInput label="userId" source="userId" />
        <NumberInput label="value" source="value" />
      </SimpleForm>
    </Create>
  );
};
