# Troubleshooting

## push 후 CI가 자동으로 안 돌아요

`GITHUB_TOKEN`으로 push하면 다른 workflow가 트리거되지 않습니다 (GitHub 보안 정책).
GitHub App 또는 PAT를 설정해야 합니다.

## merge-all 도중 CI timeout

기본 대기 시간은 ~10분 (30초 x 20회).
CI가 더 오래 걸리면 `tryMerge`의 retry 횟수를 늘려야 합니다.

## restack 후 PR diff가 이상해요

PR의 base branch가 업데이트되지 않았을 수 있습니다.
워크플로우가 첫 번째 자식 PR의 base만 자동 업데이트합니다.
나머지는 수동으로 PR 설정에서 base branch를 변경하세요.

## merge-all에서 두 번째 PR이 항상 실패해요

Branch protection에 required check가 있고, restack 후 CI가 아직 생성되지 않은 상태입니다.
`tryMerge`의 첫 번째 retry에서 CI가 생성되고, 이후 retry에서 통과될 때까지 기다립니다.
