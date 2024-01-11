import {component$, type QRL} from '@builder.io/qwik';

import {formAction$, type SubmitHandler, useForm, zodForm$} from '@modular-forms/qwik';
// import clsx from 'clsx';
import {TextInput} from '~/components/atoms/TextInput';
import {type EventFormProps, EventFormValidation, useEventForm} from '~/routes/layout';


export const useFormAction = formAction$<EventFormProps>((values) => {
  // Runs on server
  console.log(values);
  // This validates the values on the server side.
  // And cannot be manipulated by an attacker. ✅
}, zodForm$(EventFormValidation));

export interface EventFormComponentProps {
  handleSubmit$?: QRL<SubmitHandler<EventFormProps>>
}

export default component$((props: EventFormComponentProps ) => {
  const [, { Form, Field }] = useForm<EventFormProps>({
    loader: useEventForm(),
    validate: zodForm$(EventFormValidation),
  });



  return (
    <Form class="w-full max-w-sm p-10 " onSubmit$={props.handleSubmit$}>
      <div class="md:flex md:items-center mb-6 rounded-3xl">
        <Field name="title" type={'string'}>
          {(field, props) => (
            <div>
              <span class='inline-block font-medium md:text-lg lg:text-xl'>Title </span>
              {
                <TextInput {...props} type={'text'} value={field.value}/>
              }
              {field.error && <div>{field.error}</div>}
            </div>
          )}
        </Field>
      </div>
    </Form>
    );
      });