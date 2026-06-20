export const BELIEF_MARKET_ABI =  [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_usdc",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "AgentAssetTypeNotAllowed",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "AgentBetExceedsMax",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "AgentExposureExceeded",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "AgentInsufficientBalance",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "AgentLimitReached",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "AgentNotActive",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "AgentNotAuthorized",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "AgentNotFound",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "FailedCall",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "balance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "needed",
          "type": "uint256"
        }
      ],
      "name": "InsufficientBalance",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InsufficientCTXPayment",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InsufficientWithdrawBalance",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidDeposit",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidEncryptedData",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidResolutionTime",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MarketFull",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MarketNotFound",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MarketNotOpen",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NotMarketCreator",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NotPositionOwner",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "PositionNotActive",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "PositionNotFound",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ReentrancyGuardReentrantCall",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "RefundTooEarly",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ResolutionTooEarly",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        }
      ],
      "name": "SafeERC20FailedOperation",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "agentId",
          "type": "uint256"
        }
      ],
      "name": "AgentActivated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "agentId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "delegate",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "personality",
          "type": "uint8"
        }
      ],
      "name": "AgentCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "agentId",
          "type": "uint256"
        }
      ],
      "name": "AgentDeactivated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "agentId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newBalance",
          "type": "uint256"
        }
      ],
      "name": "AgentFunded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "agentId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "AgentUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "agentId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newBalance",
          "type": "uint256"
        }
      ],
      "name": "AgentWithdrawal",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "marketId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "creator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "dataSourceId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "targetPrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "conditionAbove",
          "type": "bool"
        },
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "assetType",
          "type": "uint8"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "resolutionTime",
          "type": "uint256"
        }
      ],
      "name": "MarketCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "marketId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "totalRefunded",
          "type": "uint256"
        }
      ],
      "name": "MarketRefunded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "marketId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "outcome",
          "type": "bool"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "triggeredBy",
          "type": "address"
        }
      ],
      "name": "MarketResolutionTriggered",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "marketId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "outcome",
          "type": "bool"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "yesPool",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "noPool",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "totalPositions",
          "type": "uint256"
        }
      ],
      "name": "MarketSettled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "positionId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "trader",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "refundAmount",
          "type": "uint256"
        }
      ],
      "name": "PositionCancelled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "positionId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "marketId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "trader",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "direction",
          "type": "bool"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "deposit",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "payout",
          "type": "uint256"
        }
      ],
      "name": "PositionSettled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "positionId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "marketId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "trader",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "agentId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "deposit",
          "type": "uint256"
        }
      ],
      "name": "PositionSubmitted",
      "type": "event"
    },
    {
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "inputs": [],
      "name": "ASSET_COMMODITY",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "ASSET_ETF",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "ASSET_FX",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "MAX_AGENTS_PER_USER",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "MAX_POSITIONS_PER_MARKET",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "PERSONALITY_AGGRESSIVE",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "PERSONALITY_BALANCED",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "PERSONALITY_CONSERVATIVE",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "PERSONALITY_CONTRARIAN",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "PRICE_PRECISION",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "REFUND_GRACE_PERIOD",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_agentId",
          "type": "uint256"
        }
      ],
      "name": "activateAgent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "agentPositionIds",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "agents",
      "outputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "delegate",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "systemPrompt",
          "type": "string"
        },
        {
          "internalType": "uint8",
          "name": "personality",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "balance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "maxBetPerMarket",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "maxTotalExposure",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "currentExposure",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "allowedAssetTypes",
          "type": "uint8"
        },
        {
          "internalType": "uint8",
          "name": "confidenceThreshold",
          "type": "uint8"
        },
        {
          "internalType": "bool",
          "name": "autoExecute",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "isActive",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_positionId",
          "type": "uint256"
        }
      ],
      "name": "cancelPosition",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_marketId",
          "type": "uint256"
        }
      ],
      "name": "claimRefund",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_systemPrompt",
          "type": "string"
        },
        {
          "internalType": "uint8",
          "name": "_personality",
          "type": "uint8"
        },
        {
          "internalType": "address",
          "name": "_delegate",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_maxBetPerMarket",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_maxTotalExposure",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "_allowedAssetTypes",
          "type": "uint8"
        },
        {
          "internalType": "uint8",
          "name": "_confidenceThreshold",
          "type": "uint8"
        },
        {
          "internalType": "bool",
          "name": "_autoExecute",
          "type": "bool"
        }
      ],
      "name": "createAgent",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "agentId",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_dataSourceId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_targetPrice",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "_conditionAbove",
          "type": "bool"
        },
        {
          "internalType": "uint8",
          "name": "_assetType",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "_resolutionTime",
          "type": "uint256"
        }
      ],
      "name": "createMarket",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "marketId",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_agentId",
          "type": "uint256"
        }
      ],
      "name": "deactivateAgent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "delegateToAgentId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_agentId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "fundAgent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_agentId",
          "type": "uint256"
        }
      ],
      "name": "getAgent",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "delegate",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "systemPrompt",
              "type": "string"
            },
            {
              "internalType": "uint8",
              "name": "personality",
              "type": "uint8"
            },
            {
              "internalType": "uint256",
              "name": "balance",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "maxBetPerMarket",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "maxTotalExposure",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "currentExposure",
              "type": "uint256"
            },
            {
              "internalType": "uint8",
              "name": "allowedAssetTypes",
              "type": "uint8"
            },
            {
              "internalType": "uint8",
              "name": "confidenceThreshold",
              "type": "uint8"
            },
            {
              "internalType": "bool",
              "name": "autoExecute",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isActive",
              "type": "bool"
            }
          ],
          "internalType": "struct BeliefMarket.AgentConfig",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAgentCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_agentId",
          "type": "uint256"
        }
      ],
      "name": "getAgentPositionIds",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_marketId",
          "type": "uint256"
        }
      ],
      "name": "getMarket",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "creator",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "dataSourceId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "targetPrice",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "conditionAbove",
              "type": "bool"
            },
            {
              "internalType": "uint8",
              "name": "assetType",
              "type": "uint8"
            },
            {
              "internalType": "uint256",
              "name": "resolutionTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "totalDeposits",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "totalPositions",
              "type": "uint256"
            },
            {
              "internalType": "enum BeliefMarket.MarketStatus",
              "name": "status",
              "type": "uint8"
            },
            {
              "internalType": "bool",
              "name": "outcome",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "yesPool",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "noPool",
              "type": "uint256"
            }
          ],
          "internalType": "struct BeliefMarket.Market",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getMarketCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_marketId",
          "type": "uint256"
        }
      ],
      "name": "getMarketPositionIds",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "getOwnerAgentIds",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_positionId",
          "type": "uint256"
        }
      ],
      "name": "getPosition",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "trader",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "agentId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "marketId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "deposit",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "direction",
              "type": "bool"
            },
            {
              "internalType": "enum BeliefMarket.PositionStatus",
              "name": "status",
              "type": "uint8"
            },
            {
              "internalType": "uint256",
              "name": "payout",
              "type": "uint256"
            }
          ],
          "internalType": "struct BeliefMarket.Position",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "getUserPositionIds",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "marketPositionIds",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "markets",
      "outputs": [
        {
          "internalType": "address",
          "name": "creator",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "dataSourceId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "targetPrice",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "conditionAbove",
          "type": "bool"
        },
        {
          "internalType": "uint8",
          "name": "assetType",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "resolutionTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalDeposits",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalPositions",
          "type": "uint256"
        },
        {
          "internalType": "enum BeliefMarket.MarketStatus",
          "name": "status",
          "type": "uint8"
        },
        {
          "internalType": "bool",
          "name": "outcome",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "yesPool",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "noPool",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "nextAgentId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "nextMarketId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "nextPositionId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "ownerAgentIds",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "positions",
      "outputs": [
        {
          "internalType": "address",
          "name": "trader",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "agentId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "marketId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "deposit",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "direction",
          "type": "bool"
        },
        {
          "internalType": "enum BeliefMarket.PositionStatus",
          "name": "status",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "payout",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_marketId",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "_outcome",
          "type": "bool"
        }
      ],
      "name": "resolveMarket",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_marketId",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "_direction",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "_deposit",
          "type": "uint256"
        }
      ],
      "name": "submitPosition",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "positionId",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_agentId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_marketId",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "_direction",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "_deposit",
          "type": "uint256"
        }
      ],
      "name": "submitPositionForAgent",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "positionId",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_agentId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_systemPrompt",
          "type": "string"
        },
        {
          "internalType": "uint8",
          "name": "_personality",
          "type": "uint8"
        },
        {
          "internalType": "address",
          "name": "_delegate",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_maxBetPerMarket",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_maxTotalExposure",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "_allowedAssetTypes",
          "type": "uint8"
        },
        {
          "internalType": "uint8",
          "name": "_confidenceThreshold",
          "type": "uint8"
        },
        {
          "internalType": "bool",
          "name": "_autoExecute",
          "type": "bool"
        }
      ],
      "name": "updateAgent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "usdc",
      "outputs": [
        {
          "internalType": "contract IERC20",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "userPositionIds",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_agentId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "withdrawFromAgent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
  ] as const;
export const ERC20_ABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "spender", "type": "address" },
      { "internalType": "uint256", "name": "allowance", "type": "uint256" },
      { "internalType": "uint256", "name": "needed", "type": "uint256" }
    ],
    "name": "ERC20InsufficientAllowance",
    "type": "error"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "sender", "type": "address" },
      { "internalType": "uint256", "name": "balance", "type": "uint256" },
      { "internalType": "uint256", "name": "needed", "type": "uint256" }
    ],
    "name": "ERC20InsufficientBalance",
    "type": "error"
  },
  {
    "inputs": [{ "internalType": "address", "name": "approver", "type": "address" }],
    "name": "ERC20InvalidApprover",
    "type": "error"
  },
  {
    "inputs": [{ "internalType": "address", "name": "receiver", "type": "address" }],
    "name": "ERC20InvalidReceiver",
    "type": "error"
  },
  {
    "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }],
    "name": "ERC20InvalidSender",
    "type": "error"
  },
  {
    "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }],
    "name": "ERC20InvalidSpender",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "owner", "type": "address" },
      { "indexed": true, "internalType": "address", "name": "spender", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "from", "type": "address" },
      { "indexed": true, "internalType": "address", "name": "to", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "owner", "type": "address" },
      { "internalType": "address", "name": "spender", "type": "address" }
    ],
    "name": "allowance",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "spender", "type": "address" },
      { "internalType": "uint256", "name": "value", "type": "uint256" }
    ],
    "name": "approve",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "account", "type": "address" }],
    "name": "balanceOf",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "to", "type": "address" },
      { "internalType": "uint256", "name": "value", "type": "uint256" }
    ],
    "name": "transfer",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "from", "type": "address" },
      { "internalType": "address", "name": "to", "type": "address" },
      { "internalType": "uint256", "name": "value", "type": "uint256" }
    ],
    "name": "transferFrom",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const;