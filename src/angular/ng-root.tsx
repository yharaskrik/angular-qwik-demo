import { component$ } from "@builder.io/qwik";
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

export const NgRoot = component$(() => {
  bootstrapApplication(AppComponent);

  return <></>;
});
