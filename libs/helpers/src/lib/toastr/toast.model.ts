export class ToastModel {
  message!: string;
  type!: ToastType;
  color?: string | undefined;

  constructor(data: ToastModel) {
    data.color = toastColorMap.get(data.type);
    Object.assign(this, data);
  }
}

export type ToastType = 'success' | 'error' | 'info';

export const toastColorMap = new Map<ToastType, string>([
  ['success', 'bg-green-700'],
  ['error', 'bg-amber-700'],
  ['info', 'bg-teal-700'],
]);
