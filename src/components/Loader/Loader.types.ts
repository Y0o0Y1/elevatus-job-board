import { MouseEventHandler } from "react";

interface LoaderProps {
    open: boolean;
    handleClose: MouseEventHandler<HTMLElement>
}
export type { LoaderProps }