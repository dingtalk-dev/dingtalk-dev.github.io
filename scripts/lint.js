const path = require('path');
const fs = require('fs');

const grayMatter = require('gray-matter');
const moment = require('moment');
const chalk = require('chalk');

function exitWithError(msg, file) {
  console.error(`${msg} (in file: ${file})`);
  console.log('\n' + chalk.bgRed('Failed linting!') + '\n');
  process.exit(1);
}

function walkFiles(dir, cb) {
  const resolvedPath = path.resolve(dir);
  fs.readdir(resolvedPath, function (err, entry) {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    entry.forEach(e => {
      cb && cb(path.resolve(resolvedPath, e));
    });
  });
}

function processFile(filePath) {
  fs.readFile(filePath, function (err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    const text = data.toString('utf-8');
    const { data: metadata } = grayMatter(text);

    if (!moment(metadata.date, 'YYYY-MM-DD', true).isValid()) {
      exitWithError(`Invalid date format: ${metadata.date}`, filePath);
    }

    if (!/^\/[a-z0-9]+(-[a-z0-9]+)*$/.test(metadata.path)) {
      exitWithError(`Invalid path format: ${metadata.path}`, filePath);
    }

    // Naive typesetting check.
    const lines = text.split('\n');
    let hasTypesettingIssues = false;
    lines.forEach((line, lineNo) => {
      const matches = /[\u4e00-\u9fa5][a-zA-Z0-9]|[a-zA-Z0-9][\u4e00-\u9fa5]/.exec(line);
      if (matches) {
        hasTypesettingIssues = true;
        const gut = `${lineNo + 1}`.padEnd(`${lines.length}`.length, ' ') + '| ';
        console.log(chalk.bold(gut) + line);
        let dashes = Array.from(line.substr(0, matches.index + 1)).map(ch => {
          if (/[\u4e00-\u9fa5]/.test(ch)) {
            return '__';
          } else {
            return '_';
          }
        });
        console.log(chalk.red(' '.repeat(gut.length) + dashes.join('') + '/'));
      }
    });

    if (hasTypesettingIssues) {
      exitWithError('There are some issues about typesetting, see details above.', filePath);
    }
  });
}

walkFiles(process.argv[2], processFile);