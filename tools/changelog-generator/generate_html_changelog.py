import os
from shutil import which

import sys

changelog_md_file_path = os.path.join('..', '..',  'changelog', 'CHANGELOG.md')
changelog_html_file_path = os.path.join('..', '..', 'mass-battle-tracker-reboot-server', 'mass-battle-tracker-reboot-core', 'src', 'main', 'resources', 'META-INF', 'resources', 'changelog', 'CHANGELOG.html')


def main():
    if which('pandoc') is None:
        sys.exit("pandoc doesn\'t seem to be installed, exiting")
    print("Generating changelog...")
    os.system('java -jar ' + os.path.join('utils', 'git-changelog-command-line-1.93.0.jar') + ' --settings-file config/changelog-settings.json --output-file ' + changelog_md_file_path + ' && pandoc -s -f gfm --css config/styles.css --self-contained --metadata title=\'CHANGELOG\' -o ' + changelog_html_file_path + ' ' + changelog_md_file_path)
    print("Changelog written to: " + os.path.abspath(changelog_html_file_path))


if __name__ == "__main__":
    main()
