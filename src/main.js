/**
 * @param {import("mavka").default} mavka
 * @param {string} name
 * @param {string} repoUrl
 * @param {string} rootPath
 */
export async function pakAddFromRepoUrl(mavka, name, repoUrl, rootPath) {
    const { default: clone } = await import("git-clone/promise.js");
    const { default: fs } = await import("fs");

    const path = `${rootPath}/.паки/${name}`;

    fs.rmSync(path, { recursive: true, force: true });

    await clone(repo, path);
}

/**
 * @param {import("mavka").default} mavka
 * @param {string} inputModulePath
 * @param {string} outputModulePath
 */
export async function pakCloud(mavka, inputModulePath, outputModulePath) {
    // TODO: implement
    // на вхід отримує шлях до стартового модуля
    // а на виході записує зібраний хмарний модуль за потрібним шляхом
}
