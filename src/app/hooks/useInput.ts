import { useState } from "react";
import { supabase } from "../lib/supabase";
import { ManagerProps, CategoryProps } from "../types/InputValueProps";
import { redirect, useRouter } from "next/navigation";

export async function useSignInWithEmail(managerIntfo: ManagerProps) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: managerIntfo.email,
      password: managerIntfo.password,
    });

    return data;
  } catch (err) {
    alert(err);
  }
}

export const useInput = (state: ManagerProps) => {
  const [values, setValues] = useState(state);
  const router = useRouter();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    useSignInWithEmail(values);
    router.push("/login/article");
  };
  return { values, onChange, onSubmit };
};
