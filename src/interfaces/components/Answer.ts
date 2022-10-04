export interface IAnswer {
  name: string;
  id: string;
  htmlFor: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
}
