import { ChangeEvent, FormEvent, MouseEvent } from 'react';

export type EventType = {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick: (event: MouseEvent<HTMLInputElement>) => void;
};
