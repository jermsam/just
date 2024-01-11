import { component$ } from '@builder.io/qwik';
import { type FieldElementProps, type FieldStore, type FieldValues } from "@modular-forms/qwik";

export interface TestProps {
  fieldProps:  FieldElementProps<FieldValues, string>,
  field:  FieldStore<FieldValues, 'date'>
}

export default component$((props: TestProps) => {

  return (
    <div>
      <input {...props.fieldProps} type="date" value={props.field.value} />
      {props.field.error && <div>{props.field.error}</div>}
    </div>
  );

})