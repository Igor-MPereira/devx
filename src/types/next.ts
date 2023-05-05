import { type NextRequest, type NextResponse } from "next/server";
import { type Dict } from "./base";

export interface NextErrorProps {
	error: Error;
	reset(): void;
}

export type RouteHandler<P extends Dict | unknown = unknown> = P extends Dict
	? (req: NextRequest, segmentOptions: { params: P }) => Promise<NextResponse>
	: (req: NextRequest) => Promise<NextResponse>;
