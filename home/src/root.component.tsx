import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import { links } from "./root.helper";
// @ts-ignore
import { publicApiFunction } from "@Systek-styles";

export default function Root({ title }) {
  return (
    <section>
      <h1>{title}</h1>
      <div className="h-16 flex items-center justify-between px-6 bg-primary text-white">
        <div className="flex items-center justify-between">
          <BrowserRouter basename="/">
            {links.map((link) => {
              return (
                <div key={link.href}>
                  <Link to={link.href} className="p-6">
                    {link.name}
                  </Link>
                </div>
              );
            })}
          </BrowserRouter>
        </div>
      </div>
      {/*<button onClick={publicApiFunction}>Click me!</button>*/}
    </section>
  );
}
