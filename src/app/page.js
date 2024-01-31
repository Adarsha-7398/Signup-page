import Link from "next/link";

export default function Home() {
  return (
    <>
    <Link href="/Dashboard/Login">Go to Login page</Link>
    <br />
    <br />
    <Link href="/Dashboard/Signup">Go to Signup page</Link>
    </>
  );
}
