import Input from "../components/atoms/inputs";
import Button from "../components/atoms/button";
import { useSelector } from "react-redux";

import Navbar from "../components/shared/Navbar";

export default function Settings() {
  const { userInfo } = useSelector((s) => s.user);
  return (
    <main>
      <Navbar />
      <section className="pt-[200px] h-screen relative text-black">
        <div className="col-span-12 text-center text-white">
          <h4 className="text-center font-extrabold text-[48px]">
            Modifiez vos informations
          </h4>
          <p>
            Vous souhaitez faire une mise à jour de vos votre mot de passe ou
            bien de votre adresse mail ?
          </p>
        </div>
        <div className="col-span-6 col-start-1 bg-white px-[32px] py-[24px] rounded-t-xl shadow-md hover:shadow-2xl absolute bottom-0 pb-[100px] hover:pb-[200px] duration-300 left-[100px]">
          <h1 className="font-extrabold text-black text-[32px]">
            Nouveau mot de passe
          </h1>
          <br />
          <div className="flex flex-col gap-[12px]">
            <Input
              placeholder="* * * * * * * *"
              type="password"
              label="Mot de passe"
            />
            <Input
              placeholder="* * * * * * * *"
              type="password"
              label="Confirmez votre mot de passe"
            />
            <div>
              <Button label="confirmer" full={true} />
            </div>
          </div>
        </div>
        <div className="col-span-6 col-start-7 bg-white px-[32px] py-[24px] rounded-t-xl shadow-md hover:shadow-2xl absolute bottom-0 pb-[100px] hover:pb-[200px] duration-300 right-[100px]">
          <h1 className="font-extrabold text-black text-[32px]">
            Nouvelle adresse mail
          </h1>
          <br />
          <div className="flex flex-col gap-[12px]">
            <Input
              placeholder={userInfo.email}
              type="mail"
              label="Adresse mail"
            />
            <Input
              placeholder={userInfo.email}
              type="mail"
              label="Confirmez l'adresse"
            />
            <div>
              <Button label="confirmer" full={true} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
