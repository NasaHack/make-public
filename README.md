# Make Public - Proxy Tool

A simple CLI tool to create a public proxy for any API using `make-public`. This is intended for breaking CORS restrictions.

## Installation

You can run the tool directly using `npx`: **(Always Recommended)**

```sh
npx make-public <api-url>
```

Or install it globally:

```sh
npm install -g make-public
```

## Usage

Run the command with the target API URL:

```sh
make-public https://example.com/api
```

This will create a public proxy to the provided API, allowing you to bypass CORS restrictions.

### Example

**Default API URL:**

```
https://api.wordpress.org/secret-key/1.1/salt/
```

**Proxied API URL:**

```
https://prxi.vercel.app/CpupkG0d/secret-key/1.1/salt/
```

## Disclaimer

This tool is intended for ethical use only. While i'm confident that, it will work in most cases but there is no guarantee for always work 100%. Please do not use it to harm, exploit, or violate the rights of others.

## Features

- Easy-to-use CLI interface
- Lightweight and fast
- Helps bypass CORS restrictions

## 📜 License

[MIT License](./LICENSE)
