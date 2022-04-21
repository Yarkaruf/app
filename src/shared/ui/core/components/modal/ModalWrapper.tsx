export type IModal<Request extends any = {}, Response extends any = void> = {
  isOpen?: boolean;
  close: () => void;
  onSuccess?: (data: Response, values: Request) => void;
};
