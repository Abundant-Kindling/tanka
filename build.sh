#!/usr/bin/env bash
# Build the Claude.ai upload zip: dist/tanka.zip containing tanka/SKILL.md
# at the archive root, which is the layout the Skills uploader expects.
set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DIST_DIR="$REPO_DIR/dist"
ZIP_PATH="$DIST_DIR/tanka.zip"

command -v zip >/dev/null 2>&1 || { echo "zip not installed (sudo apt install zip)" >&2; exit 1; }

mkdir -p "$DIST_DIR"
rm -f "$ZIP_PATH"

# LICENSE travels with the skill, because the copy is what gets redistributed,
# not the repo it came from.
STAGE="$(mktemp -d)"
trap 'rm -rf "$STAGE"' EXIT
cp -r "$REPO_DIR/skills/tanka" "$STAGE/tanka"
cp "$REPO_DIR/LICENSE" "$STAGE/tanka/LICENSE"

(cd "$STAGE" && zip -r -q "$ZIP_PATH" tanka -x '*.DS_Store')

printf 'Built %s (%s KB)\n' "$ZIP_PATH" "$(( ($(stat -c %s "$ZIP_PATH") + 1023) / 1024 ))"
printf 'Personal upload: Claude.ai > Settings > Capabilities > Skills > Create skill\n'
printf 'Whole org:       claude.com > Organisation settings > Skills\n'
