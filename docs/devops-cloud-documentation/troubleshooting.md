---
title: Troubleshooting
---

# Troubleshooting common issues

| Issue     |  Fix      |
| --------- | --------- |
| Workflow fails with ```Permission denied```   | Ensure you added ```permissions: issues: write``` under ```jobs:``` |
| Workflow doesn’t run | Check that file is saved under ```.github/workflows/links.yaml``` |
| Issue not created even with broken links | Confirm ```fail: false``` and ```if: steps.lychee.outputs.exit_code != 0``` are present |
