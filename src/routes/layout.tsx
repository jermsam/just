import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import {routeLoader$, z} from '@builder.io/qwik-city';
import {type InitialValues, Maybe} from '@modular-forms/qwik';


export const EventFormValidation  = z.object({
  title: z.string(),
  start: z.date().min(new Date(), { message: 'That date is in the past' }).or(z.string()),
  end:  z.date().min(new Date(), { message: 'That date is in the past' }).or(z.string()).nullish(),
  color: z.string().nullish(),
  url: z.string().nullish()
});

// Note: you can also use z.input

export type EventFormProps = z.input<typeof EventFormValidation>;


export interface EventData  {
  title: string;
  start: Date | string;
  end: Maybe<Date>;
  color: Maybe<string>;
  url: Maybe<string>;
}

const initialData: EventData = {
  title: '',
  start: new Date().toDateString(),
  end: undefined,
  color: 'green',
  url: undefined
}
export const useEventForm = routeLoader$<InitialValues<EventFormProps>>(() => (initialData));


export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return <Slot />;
});
