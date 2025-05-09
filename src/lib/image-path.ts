// src/lib/image-path.ts
export function getImagePath(path: string): string {
    const basePath = process.env.NODE_ENV === 'production' ? '/cv' : '';
    return `${basePath}${path}`;
  }