export type BuildMode = "production" | "development";

export interface BuildPath {
    entry: string;
    output: string;
    html: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPath;
    isDev: Boolean;
    port: number;
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
}
