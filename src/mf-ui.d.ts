// Checkbox (shadcnui)
declare module "ui/Checkbox" {
  import * as React from "react";
  export interface CheckboxProps
    extends React.ComponentPropsWithoutRef<"button"> {
    checked?: boolean | "indeterminate";
    defaultChecked?: boolean | "indeterminate";
    onCheckedChange?: (checked: boolean | "indeterminate") => void;
    disabled?: boolean;
    required?: boolean;
    name?: string;
    value?: string;
    id?: string;
    className?: string;
    children?: React.ReactNode;
    asChild?: boolean;
    "aria-label"?: string;
  }
  export const Checkbox: React.ForwardRefExoticComponent<
    CheckboxProps & React.RefAttributes<HTMLButtonElement>
  >;
}
// Dialog (shadcnui)
declare module "ui/Dialog" {
  import * as React from "react";
  export interface DialogProps {
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    children?: React.ReactNode;
  }
  export const Dialog: React.FC<DialogProps>;

  export interface DialogTriggerProps {
    asChild?: boolean;
    children?: React.ReactNode;
  }
  export const DialogTrigger: React.FC<DialogTriggerProps>;

  export interface DialogContentProps {
    className?: string;
    children?: React.ReactNode;
  }
  export const DialogContent: React.FC<DialogContentProps>;

  export interface DialogHeaderProps {
    className?: string;
    children?: React.ReactNode;
  }
  export const DialogHeader: React.FC<DialogHeaderProps>;

  export interface DialogFooterProps {
    className?: string;
    children?: React.ReactNode;
  }
  export const DialogFooter: React.FC<DialogFooterProps>;

  export interface DialogTitleProps {
    className?: string;
    children?: React.ReactNode;
  }
  export const DialogTitle: React.FC<DialogTitleProps>;

  export interface DialogDescriptionProps {
    className?: string;
    children?: React.ReactNode;
  }
  export const DialogDescription: React.FC<DialogDescriptionProps>;

  export interface DialogCloseProps {
    asChild?: boolean;
    children?: React.ReactNode;
  }
  export const DialogClose: React.FC<DialogCloseProps>;
}
declare module "ui/Sidebar" {
  import * as React from "react";
  export const Sidebar: React.FC<React.HTMLAttributes<HTMLDivElement>>;
  export default Sidebar;
}
declare module "ui/Label" {
  import * as React from "react";
  export interface LabelProps
    extends React.LabelHTMLAttributes<HTMLLabelElement> {
    className?: string;
  }
  const Label: React.ForwardRefExoticComponent<
    LabelProps & React.RefAttributes<HTMLLabelElement>
  >;
  export default Label;
}
declare module "ui/Input" {
  import * as React from "react";
  export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost";
    size?: "default" | "sm" | "lg";
    asChild?: boolean;
    className?: string;
  }
  const Input: React.ForwardRefExoticComponent<
    InputProps & React.RefAttributes<HTMLInputElement>
  >;
  export default Input;
}
declare module "ui/Button" {
  import * as React from "react";
  export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?:
      | "default"
      | "destructive"
      | "outline"
      | "secondary"
      | "ghost"
      | "link";
    size?: "default" | "sm" | "lg" | "icon";
    asChild?: boolean;
  }
  const Button: React.FC<ButtonProps>;
  export default Button;
}
declare module "ui/Card" {
  import * as React from "react";
  export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>>;
  export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>>;
  export const CardTitle: React.FC<React.HTMLAttributes<HTMLParagraphElement>>;
  export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>>;
  export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>>;
}
declare module "ui/AlertDialog" {
  import * as React from "react";
  export interface AlertDialogProps {
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    children?: React.ReactNode;
  }
  export const AlertDialog: React.FC<AlertDialogProps>;

  export interface AlertDialogTriggerProps {
    asChild?: boolean;
    children?: React.ReactNode;
  }
  export const AlertDialogTrigger: React.FC<AlertDialogTriggerProps>;

  export interface AlertDialogContentProps {
    className?: string;
    children?: React.ReactNode;
  }
  export const AlertDialogContent: React.FC<AlertDialogContentProps>;

  export interface AlertDialogHeaderProps {
    className?: string;
    children?: React.ReactNode;
  }
  export const AlertDialogHeader: React.FC<AlertDialogHeaderProps>;

  export interface AlertDialogFooterProps {
    className?: string;
    children?: React.ReactNode;
  }
  export const AlertDialogFooter: React.FC<AlertDialogFooterProps>;

  export interface AlertDialogTitleProps {
    className?: string;
    children?: React.ReactNode;
  }
  export const AlertDialogTitle: React.FC<AlertDialogTitleProps>;

  export interface AlertDialogDescriptionProps {
    className?: string;
    children?: React.ReactNode;
  }
  export const AlertDialogDescription: React.FC<AlertDialogDescriptionProps>;

  export interface AlertDialogActionProps {
    asChild?: boolean;
    children?: React.ReactNode;
  }
  export const AlertDialogAction: React.FC<AlertDialogActionProps>;

  export interface AlertDialogCancelProps {
    asChild?: boolean;
    children?: React.ReactNode;
  }
  export const AlertDialogCancel: React.FC<AlertDialogCancelProps>;
}
declare module "ui/Pagination" {
  import * as React from "react";
  export const Pagination: React.FC<React.HTMLAttributes<HTMLNavElement>>;
  export const PaginationContent: React.FC<
    React.HTMLAttributes<HTMLUListElement>
  >;
  export const PaginationItem: React.FC<React.LiHTMLAttributes<HTMLLIElement>>;
  export interface PaginationLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    isActive?: boolean;
  }
  export const PaginationLink: React.FC<PaginationLinkProps>;
  export const PaginationPrevious: React.FC<
    React.AnchorHTMLAttributes<HTMLAnchorElement>
  >;
  export const PaginationNext: React.FC<
    React.AnchorHTMLAttributes<HTMLAnchorElement>
  >;
  export const PaginationEllipsis: React.FC;
}
declare module "ui/Select" {
  import * as React from "react";
  export interface SelectProps {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    disabled?: boolean;
    children?: React.ReactNode;
  }
  export const Select: React.FC<SelectProps>;
  export const SelectTrigger: React.FC<
    React.ButtonHTMLAttributes<HTMLButtonElement>
  >;
  export const SelectValue: React.FC;
  export const SelectContent: React.FC<React.HTMLAttributes<HTMLDivElement>>;
  export const SelectItem: React.FC<{
    value: string;
    disabled?: boolean;
    children?: React.ReactNode;
  }>;
}
declare module "ui/UserNameModal" {
  import * as React from "react";
  export interface UserNameModalProps {
    open: boolean;
    onSubmit: (name: string) => void;
  }
  export const UserNameModal: React.FC<UserNameModalProps>;
}
declare module "ui/Header" {
  import * as React from "react";
  const Header: React.FC<React.HTMLAttributes<HTMLDivElement>>;
  export default Header;
}
