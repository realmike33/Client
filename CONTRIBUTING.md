# Contributing

The following guidelines are intended to help contributors make upgrades/fixes/comments to this project.
When in doubt, move slowly and feel free to ask for help!

### Local development

1. Fork the central repo at [https://github.com/PeacefulSplinter/client](https://github.com/PeacefulSplinter/client)

1. Clone the forked repo to your local machine

    ```bash
    $ git clone https://github.com/USERNAME/client.git
    ```

1. Configure the remotes by adding the central repository as 'upstream'

    ```bash
    $ git remote add upstream https://github.com/PeacefulSplinter/client.git
    ```

1. Develop the feature you would like to work on and commit your changes with a short descriptive commit message.  Prepend the commit message with one of the following descriptors in parenthesis to indicate the kind of changes you have made:
  Descriptors: 
  * (feat) for new features
  
  * (doc) for documentation edits

  * (bug) for bug fixes

    ```bash
    $ git add .
    $ git commit -m "(feat) Sweet new feature added"
    ```

### Submitting a pull request

1. You might be significantly behind the central repository. Fix this by fetching all the changes that have occurred since you forked the repo and began working on it.  This command will also update the local master and rebase your commits on top of the updated master

    ```bash
    $ git pull --rebase upstream master
    ```

1. Push your rebased copy to your fork on Github

    ```
    $ git push
    ```

1. Once the changes are pushed to your origin, you can [submit a pull request](https://help.github.com/articles/using-pull-requests/)!


### Merging pull requests

1. It's a pretty bad idea to merge your own pull requests. Make sure that somebody reviews your pull request before they merge it in to ensure that your code doesn't break anything and your rebasing went smoothly.

1. To merge a pull request, follow the steps outlined next to the "Merge Pull Request" button. For more information, please read [how to check out pull requests locally](https://help.github.com/articles/checking-out-pull-requests-locally/)

1. Pull down the pull request to your local repository and make sure it works. **PLEASE** check the history to ensure that the rebase process went smoothly and merging the pull request will maintain a clear and concise commit history on the master repo.

1. Once everything checks out, merge the pull request and keep on working!



