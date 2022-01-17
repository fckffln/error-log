import "./profile.component.css";

import { defineTypes } from "fln-utilities";


class array {
  count = 0;
}

function ProfileComponent() {
  const obj = { test: "test" };
  const arra = ['2', 'f', 0];
  const clas = new array();
  const nul = null;
  const undefine = undefined;
  const type = defineTypes([], [], 0, 0, 'f', clas, arra, nul, undefine, obj).toString();

  return (
    <div className="Profile">
      {type}
    </div>
  );
}

export default ProfileComponent;
