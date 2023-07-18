import { useState } from "react";
import { supabase } from "../lib/supabase";
import { ManagerProps, CategoryProps } from "../types/InputValueProps";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";

export async function signInWithEmail(managerIntfo: ManagerProps) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: managerIntfo.email,
      password: managerIntfo.password,
    });
    console.log("redirect 해볼게 얍");
  } catch (err) {
    alert(err);
  }
}

export const useInput = (state: ManagerProps | CategoryProps) => {
  const [values, setValues] = useState(state);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log(values);
  };

  const onSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    url: string,
    state: ManagerProps
  ) => {
    e.preventDefault();
    if (url.includes("login")) {
      signInWithEmail(state);
    }
  };
  return { values, onChange, onSubmit };
};
