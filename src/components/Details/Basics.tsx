import * as React from "react";

function ContentContainer(props) {
  return (
    <div
      className="mx-auto w-full max-w-3xl px-4 py-12 pb-10 md:px-8"
      {...props}
    />
  );
}

function SectionContainer(props) {
  return (
    <div
      className="grid items-start grid-cols-1 gap-6 md:grid-cols-12"
      {...props}
    />
  );
}

function SectionContent(props) {
  return <div className="col-span-10" {...props} />;
}

export const Detail = {
  ContentContainer,
  SectionContainer,
  SectionContent,
}
