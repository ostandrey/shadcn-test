import { Input } from '@/components/ui/input';

export function FileInput() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 relative">
      <Input id="picture" type="file" placeholder="" className="opacity-0 z-10" />
      <div className="absolute opacity-50 flex justify-center items-center m-5 text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </div>
    </div>
  );
}
