import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function fakeCall(obj: any): Promise<{ data: any }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: obj });
    }, 2000);
  });
}
