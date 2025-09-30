import BrandTitle from "@/components/BrandTitle/BrandTitle";

const LoginFailedClientSide = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <BrandTitle text="Hiba!" />
            <span>
                Kliensoldali probléma miatt nem tudjuk bejelentkeztetni. 😭
            </span>
        </div>
    )
}

export default LoginFailedClientSide;