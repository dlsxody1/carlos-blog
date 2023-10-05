import { useState } from "react";
import { supabase } from "../lib/supabase";
import { ManagerProps, CategoryProps } from "../types/InputValueProps";
import { redirect, useRouter } from "next/navigation";

export async function signInWithEmail(managerIntfo: ManagerProps) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: managerIntfo.email,
      password: managerIntfo.password,
    });
    console.log(data, "data");
    router.push("/write");
  } catch (err) {
    alert(err);
  }
}

export const useInput = (state: ManagerProps) => {
  const [values, setValues] = useState(state);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log(values);
  };

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    signInWithEmail(values);
  };
  return { values, onChange, onSubmit };
};
