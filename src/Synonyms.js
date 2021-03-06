import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms.length > 0) {
    return (
      <div className="Synonyms pt-1">
        <ul>
          <strong className="title">synonyms:</strong>
          {props.synonyms.map(function (synonym, index) {
            return (
              <li className="synonyms" key={index}>
                {synonym}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
