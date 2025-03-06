import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function Additional_Info({
  HandleClick,
  handleChange,
  additionalInfo,
}) {
  return (
    <Dialog>
      <DialogTrigger>
        {/* <span className="btn btn-ghost btn-sm border-2  w-full  text-left  rounded-lg py-2">
          Additional Info
        </span> */}
        <Button type="button" variant="secondary" className="w-max px-2 mt-4">
          Additional Info
        </Button>
      </DialogTrigger>
      <DialogContent className="md:max-w-[500px] w-[95%] p-4">
        <DialogHeader>
          <DialogTitle className="opacity-80">
            Add Additional information for your product
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-sm text-gray-500 mt-2">
          click on the button to add input fill for your additional information
        </DialogDescription>
        <Button className="w-max px-4" onClick={HandleClick}>
          Add
        </Button>

        <div className="flex flex-col max-h-[50vh] overflow-auto gap-4 ">
          {additionalInfo &&
            additionalInfo.map((val, i) => {
              return (
                <div key={i} className="flex items-center gap-4 ">
                  <Input
                    id="search"
                    name="info"
                    placeholder="info"
                    className="col-span-3 font-semibold "
                    value={val}
                    onChange={(e) => handleChange(e, i)}
                  />
                </div>
              );
            })}
        </div>
      </DialogContent>
    </Dialog>
  );
}
