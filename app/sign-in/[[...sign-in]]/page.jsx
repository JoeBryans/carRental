import Container from "../../../components/Container";
import { SignIn } from "@clerk/nextjs";
import { Card, CardFooter } from "../../../components/ui/card";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="flex w-screen justify-center  min-h-[110vh]">
      <Container>
        <div className="flex flex-col items-center justify-center w-full h-full ">
          <Card>
            <SignIn />
            <CardFooter className="w-full">
              <div className="w-full flex justify-center">
                <div className="w-full flex gap-2 justify-center">
                  Already have an account?
                  <Link
                    href="/sign-up"
                    clLinkssName="text-indigo-500 hover:text-indigo-700"
                  >
                    Sign up
                  </Link>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </Container>
    </div>
  );
}
