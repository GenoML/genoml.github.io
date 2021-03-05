/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  docs: [
    {
      type: 'category',
      label: 'About',
      items: [
        "about/what-is-genoml",
        "about/principles",
        "about/roadmap",
        "about/contribute",
      ],
    },
    {
      type: 'category',
      label: 'Setup',
      items: [
        "setup/installation",
        "setup/configuration"
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        "guides/input",
        "guides/munging",
        "guides/harmonization",
        "guides/training",
        "guides/tuning",
        "guides/validation",
        "guides/experimental",
      ],
    },
    {
      type: 'category',
      label: 'Use cases',
      items: [
        "use-cases/outcome-prediction",
        "use-cases/genetic-risk",
        "use-cases/target-identification",
        "use-cases/cohort-stratification"
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        "reference/cli"
      ],
    }
  ]
};
