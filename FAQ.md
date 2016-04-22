FAQ
===

#### How are the internal packages organized?

The internal packages are organized to group related code into their
respective tiers: UI, data model and server services.

#### package.json `devDependencies` contain a lot of entries

This boilerplate is intended to be used in many different environments.  One
in particular, Windows, has what is known as [MAX_PATH][1] that limits the
number of characters in the path when being used with the Windows API.  This
causes issues with node dependencies where the node modules paths may get too
long.  To work around this, the dependencies are listed on the project root
level so it does not load them up in their respective modules.

[1]: http://stackoverflow.com/a/1880453/242042