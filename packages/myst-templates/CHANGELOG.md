# myst-templates

## 0.1.5

### Patch Changes

- Updated dependencies [e1a2407f]
  - myst-frontmatter@0.0.7

## 0.1.4

### Patch Changes

- 8508c5e8: Templates typo in package.json
- dfc27de6: Improve error messages for missing template
- dfc27de6: Fix listing URL for myst templates
- 61aa0d60: Remove dependence on `crypto` package, which is built into node
- 8cb35191: Improve logging messages
- f40f398b: Move template listing to myst rather than jtex
  Be more explicit about looking for other templates, and allow template listing from local files.
- Updated dependencies [c27a0587]
- Updated dependencies [3769a662]
- Updated dependencies [5436ab41]
- Updated dependencies [c522e2c5]
- Updated dependencies [0aff6dc1]
- Updated dependencies [5436ab41]
- Updated dependencies [8b779cf7]
- Updated dependencies [770bb8da]
  - myst-frontmatter@0.0.6
  - myst-cli-utils@0.0.10

## 0.1.3

### Patch Changes

- Updated dependencies [27388448]
  - myst-common@0.0.12

## 0.1.2

### Patch Changes

- Updated dependencies [bfd72456]
- Updated dependencies [e7330dbb]
- Updated dependencies [0fa33b10]
- Updated dependencies [0a87866d]
- Updated dependencies [6ebaffda]
- Updated dependencies [0e38fe7b]
  - myst-frontmatter@0.0.5
  - myst-common@0.0.11
  - simple-validators@0.0.3
  - myst-cli-utils@0.0.9

## 0.1.1

### Patch Changes

- ececeab6: Move template enums from myst-templates to myst-common
- Updated dependencies [ececeab6]
  - myst-common@0.0.10

## 0.1.0

### Minor Changes

- d9b7457d: Myst template download, validation, preparation is now part of myst-templates; jtex only handles the tex rendering on top of myst-templates

### Patch Changes

- Updated dependencies [5403b5b5]
- Updated dependencies [4e1abca3]
- Updated dependencies [11ff02b4]
  - myst-frontmatter@0.0.4
  - myst-cli-utils@0.0.8

## 0.0.3

### Patch Changes

- 184ad9f9: Move to https://github.com/executablebooks/mystjs
- 615c1441: Sessions are now aware of their build path (making things more consistent)
  For example, change the template location to the site working directory.

  Word templates now use the myst cli, and jtex

- Updated dependencies [184ad9f9]
- Updated dependencies [615c1441]
  - myst-frontmatter@0.0.3

## 0.0.2

### Patch Changes

- e3a2d05: Consume latest myst-frontmatter
