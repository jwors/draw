module.exports = function (source) {
  // 获取引用的文件路径
  const filePath = this.resourcePath;
  // 获取options 参数
  const options = this.getOptions();
  if (filePath.includes('\\src\\index.js')) {
    // 那么这里的source就是src/index.js文件的内容了
    // 删除第一行  当然可以换成删除import
    source = removeFirstLine(source);
    // 添加一个新的import
    source = addNewImport(source, options);
    return customProcessingForAppFiles(source, options);
  }
  return source;
};

// 删除第一行
function removeFirstLine(source) {
  return source.replace(/^.*\n/, ''); // 删除第一行
}

function addNewImport(source, options) {
  let fn = Object.values(options).reduce((preValue, currentValue) => {
    if (!preValue) {
      return currentValue;
    } else {
      return `${preValue},${currentValue}`;
    }
  }, null);

  const newImport = `import { ${fn} } from '/src/utils2.js';\n`; // 新的导入语句
  return newImport + source; // 将新的导入语句添加到源代码之前
}

function customProcessingForAppFiles(source, options) {
  Object.keys(options).forEach((item) => {
    // 把不是middle结尾的函数给替换了
    const regex = new RegExp(`\\b${item}\\b(?!Middle)`, 'g');
    source = source.replace(regex, options[item]);
  });
  return source;
}
