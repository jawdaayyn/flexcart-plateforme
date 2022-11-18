import React from "react";

// Ui components
import Input from "../components/atoms/inputs";
import Button from "../components/atoms/button";
export default function Login() {
  return (
    <section className="h-screen">
      <div className="col-span-6 gap-[24px] px-[48px] py-[24px] shadow-lg bg-white col-start-4 flex flex-col items-start justify-center">
        <h1 className="font-extrabold text-[32px]">Création de mon compte</h1>
        <Input placeholder="jean@mail.com" type="mail" label="Votre e-mail" />
        <Input
          placeholder="* * * * * * * *"
          type="password"
          label="Mot de passe"
        />
        <Input
          placeholder="* * * * * * * *"
          type="password"
          label="Confirmez le mot de passe"
        />
        <div className=" flex items-center justify-center gap-[12px] mb-[8px]">
          <a href="/login">
            <h2 className="font-semibold text-black cursor-pointer hover:underline">
              J'ai déjà un compte
            </h2>
          </a>
        </div>
        <Button label="suivant" full={true} />
      </div>
    </section>
  );
}
