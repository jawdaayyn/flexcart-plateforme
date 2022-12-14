import React from "react";

// Ui components
import Input from "../components/atoms/inputs";
import Button from "../components/atoms/button";
import forest from "../assets/forest.svg";
// Hooks
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// RTK
import { userLogin } from "../store/auth/userActions";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const { userInfo, loading, error } = useSelector((state) => state.user);
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
  useEffect(() => {
    if (userInfo) {
      navigate("/user-profile");
    }
  }, [navigate, userInfo]);

  return (
    <section className="flex items-center justify-center w-screen h-screen m-0 text-black gap-[128px]">
      <div className="gap-[24px] px-[48px] py-[24px] shadow-lg bg-white flex flex-col items-start justify-center h-screen">
        <h1 className="font-extrabold text-[32px]">S'identifier</h1>
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
          disabled={loading}
          label="suivant"
          full={true}
          handleSubmit={() => handleSubmit()}
        />
        {error && <div className="text-red text-center">{error}</div>}
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
