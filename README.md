# Tableland-compute-simple-auth

**An integration of Spheron's computational power with Tableland's secure on-chain authentication, offering an enhanced level of security combined with efficient performance.**

## Description

This example represents a fusion of two distinct technologies, Spheron's computation capabilities and Tableland's secure on-chain authentication. This unique blend ensures not only a high level of security for user data but also offers a seamless and efficient user experience. In an era where security and performance cannot be compromised, this example emerges as a beacon of innovation.

## Why did we build this?

In the modern digital landscape, ensuring the security and privacy of user data is paramount. With an increasing number of cyber threats, there's a pressing need for robust authentication systems. By integrating Tableland's on-chain authentication with the computational prowess of Spheron, we've created a solution that ensures user data's utmost security while delivering fast and efficient performance. This example serves as a testament to what can be achieved when two powerful technologies converge.

## Usage

1. Clone this repository: `git clone https://github.com/spheronFdn/spheron-notification-service.git`
2. Run `npm install` to install dependencies.
3. Create a `.env` file in the backend directory and Add the following:

```bash
#RPC url endpoint which will be used to fetch data from blockchain
RPC_URL=xxxxxxxxxx

#The private key for the wallet which handles the data entries into the table
PRIVATE_KEY=xxxxxxxxxx
```

4. If you don't already have a Spheron account, [create one here](https://spheron.link).
5. Visit [Spheron Compute docs](https://docs.spheron.network/server-guide/express/) and follow all the steps from [STEP 3](#usage).
6. Attach a Domain/Subdomain to your instance, and you're set!

## Route definitions

- `/`: Registering a user to the database.
- `/login`: Logging in a user.

## How it works?

Upon arrival, a new user can register, creating an entry in the Tableland tables database. The table, which receives the data, operates using the wallet defined by the PrivateKey in the `.env` file. This wallet facilitates data entry for new users and aids in reading data from the table during login. Furthermore, the Tableland database offers interoperability, allowing user database migration across different applications.

## Help

For assistance, discussions, or any other inquiries: [Join our Community](https://discord.com/invite/ahxuCtm).

## Version History

- **0.1**: Initial Release

## License

This project is licensed under the MIT License. For more details, see the [LICENSE](LICENSE) file.

## Acknowledgments

- [Spheron Documentation](https://docs.spheron.network/server-guide/express/)
