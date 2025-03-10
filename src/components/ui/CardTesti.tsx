import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function CardTesti() {
  return (
    <Card className="w-96 md:w-120 lg:w-170">
      <CardHeader className="flex flex-row items-center gap-3">
        <Avatar className="w-14 h-14">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>Fulana</CardTitle>
          <p className="text-sm">SANTRI</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="italic">&quot;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, aspernatur. Maiores ducimus est praesentium consequuntur neque odio quidem, pariatur cum?&quot;</p>
      </CardContent>
    </Card>
  );
}

export default CardTesti;
