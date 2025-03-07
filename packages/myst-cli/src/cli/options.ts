import { Option } from 'commander';

export function makePdfOption(description: string) {
  return new Option('--pdf', description).default(false);
}

export function makeTexOption(description: string) {
  return new Option('--tex', description).default(false);
}

export function makeDocxOption(description: string) {
  return new Option('--word, --docx', description).default(false);
}

export function makeSiteOption(description: string) {
  return new Option('--site', description).default(false);
}

export function makeProjectOption(description: string) {
  return new Option('--project', description).default(false);
}

export function makeAllOption(description: string) {
  return new Option('-a, --all', description).default(false);
}

export function makeStrictOption() {
  return new Option('--strict', 'Summarize build warnings and stop on any errors.').default(false);
}

export function makeWriteTocOption() {
  return new Option(
    '--write-toc',
    'Generate editable _toc.yml file for project if it does not exist',
  ).default(false);
}

export function makeForceOption() {
  return new Option(
    '--force',
    'Build outputs for the given format, even if corresponding exports are not defined in file frontmatter',
  ).default(false);
}

export function makeCheckLinksOption() {
  return new Option('--check-links', 'Check all links to websites resolve.').default(false);
}

export function makeKeepHostOption() {
  return new Option(
    '--keep-host',
    'The HOST environment variable is changed to "localhost" by default. This flag uses the original environment variable.',
  ).default(false);
}

export function makeHeadlessOption() {
  return new Option(
    '--headless',
    'Run the server in headless mode, with only the content server started',
  ).default(false);
}

export function makeYesOption() {
  return new Option('-y, --yes', 'Automatically respond yes to prompts').default(false);
}

export function promptContinue() {
  return {
    name: 'cont',
    message: 'Would you like to continue?',
    type: 'confirm',
    default: true,
  };
}
