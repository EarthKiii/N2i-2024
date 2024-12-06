/// <reference types="vite/client" />
/// <reference types="vite/types/importMeta.d.ts" />

interface ImportMetaEnv {
    readonly VITE_FRONT_PORT: string;
    readonly VITE_BACK_HOST: string;
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv;
}