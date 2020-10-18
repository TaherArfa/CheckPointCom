import React from "react";
// import profil from "./img";
import profil from "./profil.png";

export default function ProfilPhoto() {
  return (
    <div className="profilImg">
      <img src={profil} alt="profilImg" />
    </div>
  );
}
