/**
 * @param {string} name
 * @param {string} repoUrl
 * @param {string} rootPath
 */
export async function pakAddFromRepoUrl(name, repoUrl, rootPath) {
    const { default: clone } = await import("git-clone/promise.js");
    const { default: fs } = await import("fs");

    const path = `${rootPath}/.паки/${name}`;

    fs.rmSync(path, { recursive: true, force: true });

    await clone(repo, path);
}

/**
 * @param {string} inputModulePath
 * @param {string} outputModulePath
 */
export async function pakCloud(inputModulePath, outputModulePath) {
    //
}
