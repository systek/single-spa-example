import React from "react";

export default function Root({ name, version }) {
  return (
    <section>
      {name} is mounted! ({version})
    </section>
  );
}
