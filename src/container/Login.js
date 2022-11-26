import React from "react";

// Ui components
import Input from "../components/atoms/inputs";
import Button from "../components/atoms/button";
import forest from "../assets/forest.svg";

export default function Login() {
  return (
    <section className="flex items-center justify-center w-screen h-screen m-0 text-black gap-[128px]">
      <div className="gap-[24px] px-[48px] py-[24px] shadow-lg bg-white flex flex-col items-start justify-center h-screen">
        <h1 className="font-extrabold text-[32px]">S'identifier</h1>
        <Input placeholder="jean@mail.com" type="mail" label="Votre e-mail" />
        <Input
          placeholder="* * * * * * * *"
          type="password"
          label="Mot de passe"
        />
        <div className=" flex items-center justify-center gap-[12px] mb-[8px]">
          <h2 className="font-semibold text-black cursor-pointer hover:underline">
            Mot de passe oublié
          </h2>
          <a href="/register">
            <h2 className="font-semibold text-black cursor-pointer hover:underline">
              Créer mon compte
            </h2>
          </a>
        </div>
        <Button label="suivant" full={true} />
      </div>
      <div className="flex flex-col items-center text-white">
        <img
          src={forest}
          alt="logo"
          className="w-[400px] h-[400px] mb-[32px]"
        />
        <h1 className="text-5xl font-extrabold">FlexCart</h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
          doloribus!
        </h2>
        <h3>Lorem ipsum dolor sit amet.</h3>
      </div>
    </section>
  );
}
