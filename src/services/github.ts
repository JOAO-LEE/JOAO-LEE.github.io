import { GithubStats } from "../model/Github";

export const getGithubStats = async (): Promise<GithubStats> => {
  const githubStats = await fetch("https://api.github.com/users/JOAO-LEE");
  const responseGithubStats = await githubStats.json();
  return responseGithubStats;
};
