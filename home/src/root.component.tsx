import React from "react";
import { links } from "./root.helper";

export default function Root(props) {
  return (
    <div className="h-16 flex items-center justify-between px-6 bg-primary text-white">
      <div className="flex items-center justify-between">
        {links.map((link) => {
          return (
            <div key={link.href}>
              <a href={link.href} className="p-6">
                {link.name}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
