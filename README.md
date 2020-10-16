# ![Moonbeam](box-img-sm.png)

# Moonbeam Truffle Box

A beta version of the Moonbeam Truffle Box. 


## Getting started

To get started, clone this repository

```
git clone https://github.com/albertov19/moonbeam_box
```

Afterwards, install all the dependencies:

```
npm install
```
The dependencies installed are the following:

-  Minimist  
-  EthereumJS wallet: a lightweight wallet implementation.
-  Web3 Provider Engine: a tool for composing custom Web3 providers.
-  Truffle: this is not needed if you have installed it globally.
-  Moonbeam Truffle Plugin: a tool to easily create your own standalone Moonbeam node for development (uses Docker).

## Networks

Moonbeam Truffle Box is pre-configured with two networks: standalone and TestNet. To deploy in the standalone network please check the Moonbeam Truffle Pluggin section to install and start your own local node.

```
node_modules/.bin/truffle migrate --network dev
```

```
node_modules/.bin/truffle migrate --network moonbase
```

_Note: if you have Truffle installed globally, you can replace `node_modules/.bin/truffle` for `truffle`._

## Moonbeam Truffle Plugin

The plugin is used to get you started with a local standalone Moonbeam node quickly. You can check all available commands with the help flag:

```
./node_modules/.bin/truffle run moonbeam --help
```

The following commands are available:

### Install
In this context, installing means downloading the Docker image of the Moonbeam standalone node (requires Docker to be installed).

```
node_modules/.bin/truffle run moonbeam install
```

### Start
Start the standalone Moonbeam node.

```
node_modules/.bin/truffle run moonbeam start
```

### Stop
Stop the standalone Moonbeam node. This will remove the container, thus purging the chain.

```
node_modules/.bin/truffle run moonbeam stop
```

### Pause
Pause the standalone Moonbeam node.

```
node_modules/.bin/truffle run moonbeam pause
```

### Unpause
Unpause the standalone Moonbeam node.

```
node_modules/.bin/truffle run moonbeam unpause
```

### Status
Shows the status of the standalone Moonbeam node.

```
node_modules/.bin/truffle run moonbeam status
```

### Remove
Removes the Docker image of the Moonbeam standalone node.

```
node_modules/.bin/truffle run moonbeam remove
```

## Contact Us
We welcome any feedback, so feel free to reach out through our official [Discord Channel](https://discord.gg/PfpUATX).
