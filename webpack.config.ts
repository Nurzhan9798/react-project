import path from 'path'
import webpack from "webpack";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildMode, BuildPath} from "./config/build/types/config";



export default (env: BuildEnv) => {
    const paths: BuildPath = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'output'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    }

    const mode: BuildMode = env.mode || "development"
    const PORT = env.port || 3000

    const isDev = mode === "development"

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT
    })
    return config
};