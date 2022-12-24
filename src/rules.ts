export const Rules = {
  pr_reaches_power_of_10: {
    kind: 'pr',
    rule: /(?:[1]0+)/,
    message: `Now pull request issue number reaches **{{prNum}}**. It's time to celebrate!`,
  },
  pr_reaches_power_of_2: {
    kind: 'pr',
    rule: /(?:(512|1024|2048|4096|8192|16384|32768|65536))/,
    message: `Now pull request issue number reaches **{{prNum}}** (power of 2). It's time to celebrate!`,
  },
  pr_reaches_777: {
    kind: 'pr',
    rule: /(?:7{3,})/,
    message: `Now pull request issue number reaches **{{prNum}}** (777). It's time to celebrate!`,
  },
  commit_hits_777: {
    kind: 'commit',
    rule: /(?:7{3,})/,
    message: 'Commit `{{commitId}}` is lucky! It contains **{{matched}}**!.',
  },
  commit_hits_same_numbers: {
    kind: 'commit',
    rule: /(?:([0-9a-f])\1{4,})/,
    message: 'Commit `{{commitId}}` is lucky! It contains **{{matched}}**!.',
  },
  commit_hits_123: {
    kind: 'commit',
    rule: /(?:(?:123)4?5?6?7?8?9?)/,
    message: 'Commit `{{commitId}}` is lucky! It contains **{{matched}}**!.',
  },
  commit_hits_hexspeak: {
    kind: 'commit',
    rule: /(?:(?:f00d|feed|cafe|c0ffee|deadbeef|defecated|0ffice|badcable))/i,
    message: 'Commit `{{commitId}}` is lucky! It contains **{{matched}}**!.',
  },
  commit_hits_666: {
    kind: 'commit',
    rule: /(?:666)/,
    message:
      'Commit `{{commitId}}` is unlucky... It contains **{{matched}}**!.',
  },
} as const;

export type RulesKey = keyof typeof Rules;