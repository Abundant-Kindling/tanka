#!/usr/bin/env bash
# Installs the pre-commit hook for this repo. Run once per clone:
#   ./hooks/install-hooks.sh
#
# The hook resolves the repo root at commit time, so it survives the repo
# being cloned anywhere. CI runs the same check, so a clone that skipped this
# installer is still caught at push.
set -euo pipefail

root="$(git rev-parse --show-toplevel)"
hook="$root/.git/hooks/pre-commit"

if [ -e "$hook" ] && ! grep -qF 'em-dash-check.js' "$hook"; then
    echo "WARNING: $hook exists and does not call em-dash-check. Left alone." >&2
    exit 1
fi

cat > "$hook" <<'HOOK'
#!/bin/sh
# Installed by hooks/install-hooks.sh. Fails the commit on U+2014 in tracked markdown.
exec node "$(git rev-parse --show-toplevel)/hooks/em-dash-check.js"
HOOK
chmod +x "$hook"
echo "installed $hook"
