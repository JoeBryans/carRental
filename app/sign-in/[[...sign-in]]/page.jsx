import Container from "@/components/Container";
import { SignIn } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex w-screen justify-center  min-h-[110vh]">
      <Container>
        <div className="flex flex-col items-center justify-center w-full h-full ">
          <SignIn />
        </div>
      </Container>
    </div>
  );
}
