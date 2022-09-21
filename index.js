const core = require('@actions/core');
const axios = require('axios');

try {
  const webhook = core.getInput('webhook');
  const cid = core.getInput('cid');
  const commit = core.getInput('commit');

  const options = {
    method: 'POST',
    url: webhook,
    headers: {'Content-Type': 'application/json'},
    data: {
        components: [
            {
                "type": 1,
                "components": [
                    {
                        "style": 5,
                        "label": `Learn about IPFS`,
                        "url": `https://en.wikipedia.org/wiki/InterPlanetary_File_System`,
                        "disabled": false,
                        "type": 2
                    },
                    {
                        "style": 5,
                        "label": `Run your own node`,
                        "url": `https://docs.ipfs.tech/install/ipfs-desktop/`,
                        "disabled": false,
                        "type": 2
                    }
                ]
            }
        ],
        embeds: [
            {
                "type": "rich",
                "title": `New IPFS deployment successful!`,
                "description": "",
                "color": 0xee3da4,
                "fields": [
                    {
                        "name": `CID`,
                        "value": cid,
                        "inline": true
                    },
                    {
                        "name": `Commit`,
                        "value": commit,
                        "inline": true
                    }
                ],
                "url": `https://ipfs.alchemix.fi/`
            }
        ]
    }
  };

  axios
    .request(options)
    .then(() => {
      core.info('Message was sent successfully');
    });
} catch (error) {
  core.setFailed(error.message);
}
