import React from "react";
// State hooks
import { useState } from "react";
// Ui components
import Input from "../components/atoms/inputs";
import Button from "../components/atoms/button";
import { useDispatch, useSelector } from "react-redux";
// RTK
import { userLogin } from "../store/auth/userActions";
export default function Login() {
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  let formState = {
    email: email,
    password: password,
  };
  const handleSubmit = async () => {
    dispatch(userLogin(formState));
  };
  setTimeout(() => {
    if (userInfo) {
      window.location.reload(true);
    } else {
      return;
    }
  });
  return (
    <section className="h-screen">
      <div className="col-span-6 gap-[24px] px-[48px] py-[24px] shadow-lg bg-white col-start-4 flex flex-col items-start justify-center">
        <h1 className="font-extrabold text-[32px]">S'identifier</h1>
        <form>
          <Input
            placeholder="jean@mail.com"
            type="email"
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
        </form>
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
        <Button
          label="suivant"
          full={true}
          handleSubmit={() => handleSubmit()}
        />
      </div>
    </section>
  );
}
