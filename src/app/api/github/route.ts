import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://api.github.com/users/Dhirajkumar13", {
      headers: {
        Accept: "application/vnd.github.v3+json",
        ...(process.env.GITHUB_TOKEN && {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        }),
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Failed to fetch GitHub stats" }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json({
      public_repos: data.public_repos,
      followers: data.followers,
      following: data.following,
      public_gists: data.public_gists,
      avatar_url: data.avatar_url,
      bio: data.bio,
      name: data.name,
    });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
