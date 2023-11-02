[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![npm](https://img.shields.io/npm/v/%40jttc%2Faws-codestarconnection)

# AWS CodeStar Connection Construct Library

This package contains constructs for working with Amazon CodeStar Connection.

## CodeStar Connection
Define a Codestar Connection by creating a new instance of CodeStarConnection. You can create a connection for different providers

``` typescript
const codestartConnection = new CodeStarConnection(
  this,
  'CodeStarConnection',
    {
      connectionName: 'github-connection',
      providerType: CodeStarConnectionProviderType.GITHUB,
    }
  );
```





