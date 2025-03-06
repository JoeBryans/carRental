import Container from "@/components/Container";
import React from "react";

const Detailspage = ({ params }) => {
  const { name } = params;
  console.log(name);
  const carName = name;
  return (
    <div>
      <Container>
        <h1>Details Page</h1>

        <div className="flex flex-col mx-auto w-full">
          <div className="grid grid-cols-2 gap-4 w-full h-[50vh] overflow-hidden">
            <div className="w-full ">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
                className="h-fit object-center"
              />
            </div>
            <div className="w-full">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
                className="w-32 h-32 object-contain"
              />
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
                className="w-32 h-32 object-contain"
              />

              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
                className="w-32 h-32 object-contain"
              />
            </div>
          </div>
          <h1 className="text-center text-2xl font-bold">{carName} Details</h1>
        </div>
      </Container>
    </div>
  );
};

export default Detailspage;
