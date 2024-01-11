import {  component$, type PropFunction, type QRL} from "@builder.io/qwik";
import { type FieldValues, type FormOptions, useForm } from "@modular-forms/qwik";
import TestInput from "~/components/test/TestInput";

export interface TestFormProps {
  handleSubmit: QRL<PropFunction<() => void>>
  options: FormOptions<FieldValues, undefined>;
}
export default component$((props: TestFormProps) => {

  const [, { Form, Field }] = useForm<FieldValues>(props.options);

  return (
    <Form onSubmit$={props.handleSubmit}>

        <Field  type='string' name='date'>
          {(field, props) => (
            <TestInput fieldProps={props} field={field}/>
          )}
        </Field>

    </Form>
  );
});