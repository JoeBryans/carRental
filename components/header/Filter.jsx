import React from "react";
import Container from "../Container";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Filter = () => {
  return (
    <div className="flex w-screen justify-center absolute lg:-top-16 -top-24 z-30">
      <Container>
        <div className="flex flex-col items-center justify-center w-full border-2 h-full rounded-lg ">
          <form className="max-w-full w-[100%] grid grid-cols-1 md:grid-cols-4">
            <Label className="flex items-center gap-1 ">
              {/* <span className="text-muted-foreground">keyword</span> */}
              <Input type="text" placeholder="Keyword" />
            </Label>
            <Label className="flex items-center gap-1 ">
              {/* <span className="text-muted-foreground">keyword</span> */}
              <Input type="text" placeholder="Keyword" />
            </Label>
            <Label className="flex items-center gap-1 ">
              {/* <span className="text-muted-foreground">keyword</span> */}
              <Input type="text" placeholder="Keyword" />
            </Label>
            <Button variant="primary" className="font-sem-bold  text-xl">
              Search
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Filter;
