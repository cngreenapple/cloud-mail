## Github Action Deployment

**Configure Github Repository**

1. Fork or clone the repository [https://github.com/eoao/cloud-mail](https://github.com/eoao/cloud-mail)
2. Go to your GitHub repository settings
3. Navigate to Settings → Secrets and variables → Actions → New Repository secrets
4. Add the following Secrets:

| Secret Name             | Required | Purpose                                                  |
| ----------------------- | :--: | ----------------------------------------------------- |
| `CLOUDFLARE_API_TOKEN`  |  ✅  | Cloudflare API Token (requires Workers and related resource permissions)    |
| `CLOUDFLARE_ACCOUNT_ID` |  ✅  | Cloudflare Account ID                                    |
| `D1_DATABASE_ID`        |  ✅  | Your D1 Database ID                                     |
| `KV_NAMESPACE_ID`       |  ✅  | Your KV Namespace ID                                   |
| `R2_BUCKET_NAME`        |  ✅  | Your R2 Bucket Name                                    |
| `DOMAIN`                |  ✅  | The domain for your email service (e.g. `["xx.xx"], multiple domains separated by commas`)        |
| `ADMIN`                 |  ✅  | Your admin email address (e.g. `admin@example.com`)      |
| `JWT_SECRET`            |  ✅  | A random long string for generating and verifying JWT                     |
| `INIT_URL`              |  ❌  | (Optional) Worker URL for database initialization after deployment (see manual initialization below)           |

---

**Get Cloudflare API Token**

1. Visit [Cloudflare Dashboard](https://dash.cloudflare.com/profile/api-tokens)
2. Create a new API Token
3. Select "Edit Cloudflare Workers" template and add the corresponding permissions as shown in the table below
   ![dc2e1dc8dcd217644759c46c6c705de1](https://i.miji.bid/2025/07/07/dc2e1dc8dcd217644759c46c6c705de1.png)
4. Save the token and copy it to the GitHub Secrets `CLOUDFLARE_API_TOKEN`

**Get Cloudflare Account ID**
1. Your Account ID can be found in the Cloudflare dashboard under account settings.
2. Copy it to GitHub Secrets `CLOUDFLARE_ACCOUNT_ID`

**Run Workflow**
1. Then manually run the workflow on the Actions page. After that, syncing upstream will automatically deploy to Cloudflare Workers. If `INIT_URL` is not configured, you need to manually visit `https://your-project-domain/api/init/your_jwt_secret` to initialize the database.
2. To automatically sync upstream, you can use a bot or click the Sync Upstream button manually.