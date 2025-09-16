import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { IoPlayOutline } from "react-icons/io5";
type TrailerDialogProps = {
    trailerLink: string,
    id:number,
}
export function TrailerDialog({id, trailerLink}:TrailerDialogProps) {
    return (
        <div>
            <Dialog>
                <DialogTrigger className="flex items-center gap-1"><IoPlayOutline/>Watch Trailer</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle></DialogTitle>
                        <DialogDescription>
                               <iframe
       key={id}
        src={`https://www.youtube-nocookie.com/embed/${trailerLink}`}
        className="w-full h-[720px]"
      />
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}
