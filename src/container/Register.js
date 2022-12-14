import React from "react";

// Ui components
import Input from "../components/atoms/inputs";
import Button from "../components/atoms/button";
import bussiness from "../assets/bussiness.svg";
// Hooks
import { useState } from "react";
// RTK
import { userApi } from "../store/auth/userActions";
import { userLogin } from "../store/auth/userActions";
import { useDispatch, useSelector } from "react-redux";
export default function Login() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  let formState = {
    email: email,
    password: password,
  };
  const [registerAccount] = userApi.endpoints.registerAccount.useMutation();

  const submitForm = async () => {
    await registerAccount({
      email: email,
      password: password,
    })
      .then(() => {
        dispatch(userLogin(formState));
      })
      .catch((error) => {
        setError(error);
      });
  };

  setTimeout(() => {
    if (userInfo) {
      window.location.reload(true);
    } else {
      return;
    }
  });
  return (
    <section className="flex items-center justify-center w-screen h-screen m-0 text-black gap-[128px]">
      <div className="gap-[24px] px-[48px] py-[24px] h-screen shadow-lg bg-white flex flex-col items-start justify-center">
        <h1 className="font-extrabold text-[32px]">Création de mon compte</h1>
        <Input
          placeholder="jean@mail.com"
          type="mail"
          label="Votre e-mail"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="* * * * * * * *"
          type="password"
          label="Mot de passe"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          placeholder="* * * * * * * *"
          type="password"
          label="Confirmez le mot de passe"
          required
        />
        <div className=" flex items-center justify-center gap-[12px] mb-[8px]">
          <a href="/login">
            <h2 className="font-semibold text-black cursor-pointer hover:underline">
              J'ai déjà un compte
            </h2>
          </a>
        </div>
        <Button label="suivant" full={true} handleSubmit={() => submitForm()} />
        <span className="text-red">{error}</span>
      </div>
      <div className="flex flex-col items-center text-white">
        <img
          src={bussiness}
          alt="logo"
          className="w-[400px] h-[400px] mb-[12px]"
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
