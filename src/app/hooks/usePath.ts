import { useRouter, usePathname } from "next/navigation";
export const usePath = (endPoint: string) => {
  const pathName = usePathname();
  const router = useRouter();
  const push = router.push(pathName + endPoint);
  return { push };
};
