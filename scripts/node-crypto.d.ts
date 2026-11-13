/**
 * The one piece of Node the build step uses. Declared here so the project
 * does not need the whole of @types/node for it.
 */
declare module "node:crypto" {
  interface Hash {
    update(data: string): Hash;
    digest(encoding: "base64" | "hex"): string;
  }
  export function createHash(algorithm: string): Hash;
}
