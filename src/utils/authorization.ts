import axios from "axios";
import { Request } from "express";
import { Strategy } from "passport-strategy";
import * as environment from "../admin";

export class AuthorizationStrategy extends Strategy {
	private tag = "AuthorizationStrategy";
	name = "authorization";

	async authenticate(req: Request, options?: any): Promise<void> {
		console.log(`[${this.tag}] authenticate`, options);
		if (!req.user) {
			this.fail("No user", 401);
			return;
		}
		const { uId } = req.user as { uId: string };;

		if (!uId) {
			this.fail("No uId", 401);
			return;
		}

		const resource = req.originalUrl.split("?")[0];
		console.log(`[${this.tag}] uId: ${uId}, resource: ${resource}`);

		const response = await axios.get(
			`${environment.AUTHORIZATION_URL}/casbin/user/checkauthorized?userId=${uId}&resource=${resource}&action=${req.method}`
		);

		if (!response.data?.allowed) {
			this.fail("Not authorized", 401);
			return;
		}

		this.success(req.user);
	}
}
