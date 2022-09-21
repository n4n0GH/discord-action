# discord-ipfs-action

Send a rich message to a [Discord](https://discord.com/) webhook. Follow [this guide](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks) to create a webhook if you don't have one already.

## Input parameters

| Input parameter | Description                                                                                                                                                                                                      | Required | Default |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|---------|
| webhook         | Discord webhook URL. Follow [this guide](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks) to create a webhook if you don't have one already. Do not add `/github` or any other suffix. | Yes      | N/A     |
| cid             | CID of the successful deployment                                                                                                                                                                                 | Yes      | N/A     |
| commit          | Github commit that triggered the deployment                                                                                                                                                                      | Yes      | N/A     |
