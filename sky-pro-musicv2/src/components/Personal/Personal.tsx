"use client"
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import styles from "./Personal.module.css";
import { logout } from "@/store/features/authSlice";
import { useRouter } from "next/navigation";
export const Personal = () => {
  const dispatch = useAppDispatch();
  const navigate = useRouter()
  const  user  = useAppSelector((state) => state.auth.user)
  const handleLogoutUser = () => {
    dispatch(logout())
    navigate("signin")
   }
  return (
    <div className={styles.sidebarPersonal}>
      <p className={styles.sidebarPersonalName}>{user ? user.username : "Войти"}</p>
      <div className={styles.sidebarIcon} onClick={handleLogoutUser}>
        <svg>
          <use xlinkHref="img/icon/sprite.svg#logout"></use>
        </svg>
      </div>
    </div>
  );
};
