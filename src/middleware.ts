// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Required function
export function middleware(request: NextRequest) {
  // You can add custom logic here
  return NextResponse.next();
}

// (Optional) Specify paths where middleware should run
export const config = {
  matcher: ["/about/:path*", "/dashboard/:path*"], // <-- apply only to these routes
};
