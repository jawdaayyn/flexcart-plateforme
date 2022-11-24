import React from "react";

// Ui components
import Input from "../components/atoms/inputs";
import Button from "../components/atoms/button";
import { userApi } from "../store/auth/userActions";
import { useState } from "react";
export default function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);

  const [registerAccount] = userApi.endpoints.registerAccount.useMutation();

  const submitForm = async () => {
    console.log(email, password);

    try {
      await registerAccount({
        email: email,
        password: password,
      });
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };
  return (
    <section className="h-screen">
      <div className="col-span-6 gap-[24px] px-[48px] py-[24px] shadow-lg bg-white col-start-4 flex flex-col items-start justify-center">
        <h1 className="font-extrabold text-[32px]">Création de mon compte</h1>
        <Input
          placeholder="jean@mail.com"
          type="mail"
          label="Votre e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="* * * * * * * *"
          type="password"
          label="Mot de passe"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          placeholder="* * * * * * * *"
          type="password"
          label="Confirmez le mot de passe"
        />
        <span className="text-red">{error}</span>
        <div className=" flex items-center justify-center gap-[12px] mb-[8px]">
          <a href="/login">
            <h2 className="font-semibold text-black cursor-pointer hover:underline">
              J'ai déjà un compte
            </h2>
          </a>
        </div>
        <Button label="suivant" full={true} handleSubmit={() => submitForm()} />
      </div>
    </section>
  );
}
