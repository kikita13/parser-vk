'use client'
import Button from "@/components/test/button";
import { IUser } from "@/models/consts/user";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { fetchUsers } from "@/redux/slices/user";
import styles from '@/styles/test/page.module.css'

export default function Test() {

  const users: IUser[] = useAppSelector((state) => state.users.users)
  const dispatch = useAppDispatch()
    dispatch(fetchUsers('1'))
    console.log(1);
    

  return (
    <div className={styles.container}><Button /></div>
  )
}
