import { Octokit } from "@octokit/core"
import { FlipCellProps } from "~/ui/design-system/src/lib/Components/FlipCell"
import { FlipsProps } from "~/ui/design-system/src/lib/Components/Flips"

export interface PullRequestResponse {
  url: string
  id: number
  node_id: string
  html_url: string
  diff_url: string
  patch_url: string
  issue_url: string
  commits_url: string
  review_comments_url: string
  review_comment_url: string
  comments_url: string
  statuses_url: string
  number: number
  state: string
  locked: boolean
  title: string
  user: User | null
  body: string | null
  labels: Label[]
  milestone: any
  active_lock_reason?: string | null
  created_at: string
  updated_at: string
  closed_at: string | null
  merged_at: string | null
  merge_commit_sha: string | null
  assignee?: any | null
  assignees?: any[] | null
  requested_reviewers?: any[] | null
  requested_teams?: any[] | null
  head: any
  base: any
  _links: any
  author_association: string
  auto_merge: any
  draft?: boolean
}

export interface User {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string | null
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
}

export interface Label {
  id?: number
  node_id?: string
  url?: string
  name?: string
  description?: string
  color?: string
  default?: boolean
}

export const fetchFlips = async () => {
  const octokit = new Octokit({
    auth: process.env.BOT_GITHUB_TOKEN,
  })

  const getOpenFlipPullRequests = async () => {
    const pullRequestResponse: PullRequestResponse[] = await octokit
      .request("GET /repos/{owner}/{repo}/pulls", {
        owner: "onflow",
        repo: "flow",
      })
      .then((response) => response.data)

    return pullRequestResponse.filter((pr) => {
      const labelNames = pr.labels.map((label) => label.name)
      return labelNames.includes("FLIP")
    })
  }

  const getGoodPlacesToStartIssues = async () => {
    const issueResponse = await octokit
      .request("GET /repos/{owner}/{repo}/issues?state=all&labels={label}", {
        owner: "onflow",
        repo: "flow",
        label: "good first issue",
      })
      .then((response) => response.data)

    return issueResponse
  }

  const getNumComments = async (fetchIssue: number): Promise<number> => {
    const comments = await octokit
      .request("GET /repos/{owner}/{repo}/issues/{issueNumber}/comments", {
        owner: "onflow",
        repo: "flow",
        issueNumber: fetchIssue,
      })
      .then((response) => response.data)

    return comments.length
  }

  const openFlipPullRequests = await getOpenFlipPullRequests()
  const goodPlacesToStartIssues = await getGoodPlacesToStartIssues()

  // Convert from github API output to FlipCellProp
  const openFlipCellProps: Promise<FlipCellProps>[] = openFlipPullRequests.map(
    async (pr) => ({
      numComments: await getNumComments(pr.number),
      heading: pr.title,
      tags: pr.labels.map((label) => label.name ?? ""),
      participant: {
        profileImage: pr.user?.avatar_url ?? "",
        name: pr.user?.login ?? "",
      },
      date: pr.created_at,
      forumLink: pr.html_url,
    })
  )

  const goodPlacesToStartFlipCellProps: Promise<FlipCellProps>[] =
    goodPlacesToStartIssues.map(async (pr) => ({
      numComments: await getNumComments(pr.number),
      heading: pr.title,
      tags: pr.labels
        .filter((label) => typeof label !== "string")
        .map((label) =>
          typeof label !== "string" && label.name ? label.name : ""
        ),
      participant: {
        profileImage: pr.user?.avatar_url ?? "",
        name: pr.user?.login ?? "",
      },
      date: pr.created_at,
      forumLink: pr.html_url,
    }))

  const openFlips: FlipCellProps[] = await Promise.all(openFlipCellProps)
  const goodPlacesToStartFlips: FlipCellProps[] = await Promise.all(
    goodPlacesToStartFlipCellProps
  )

  return { openFlips, goodPlacesToStartFlips } as FlipsProps
}
