# Verse's Developer Chrome extension and sample Verse extensions

Here you can find the unpacked source for Verse's Developer Chrome extension, as well as some sample Verse extensions that can be loaded into a local Verse client for testing and development purposes using the previously mentioned Verse Developer Chrome extension.

## What's the difference between "Verse's Developer Chrome Extension" and "Verse extensions"

### Verse's Developer Chrome Extension

The Verse Developer Chrome Extension is a chrome extension that serves as a tool for Verse Extension developers to be able to quickly and easily develop Verse extensions.

When the Verse Developer Chrome Extension is present and active Verse will receive extension data from the Chrome Extension itself, in addition to the extensions that are received when the Verse client queries the remote server.

Since the Verse client is looking for a Verse Developer Chrome Extension in your local browser, you can test changes locally without needing to deploy the extension to all users. Instead, the Verse extension developer can use the Verse Developer Extension to load their in-development extension right into the Verse client.

### Verse Extensions

Verse provides a number of different "extension points" that provide hooks for administrators to be able to customize the look and feel of Verse. The definition of these customizations is called a "Verse Extension".

Verse Extensions can be deployed to a Domino server so that the extension is present for every user, or the Verse Extension can be tested on a single Verse client by leveraging the Verse Developer Chrome Extension.
