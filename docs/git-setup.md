# Git Setup and Cloning the Lessons

This guide helps you install Git and download the lessons to your computer.

## Install Git

### Windows

1. Download Git for Windows: https://git-scm.com/download/win
2. Run the installer with the default options.
3. Open **Git Bash** from the Start menu.
4. Confirm it worked:

```bash
git --version
```

### macOS

Option A (recommended): install via Homebrew.

```bash
brew install git
```

Option B: install Xcode Command Line Tools.

```bash
xcode-select --install
```

Confirm it worked:

```bash
git --version
```

### Linux (Ubuntu/Debian)

```bash
sudo apt update
sudo apt install git
git --version
```

### Linux (Fedora)

```bash
sudo dnf install git
git --version
```

## Clone the Lessons

Pick a folder (like your Documents folder), then run:

```bash
git clone <REPO_URL>
cd programming-course
```

Replace `<REPO_URL>` with the repository URL from GitHub (HTTPS or SSH).

HTTPS: `https://github.com/zbdd/code-course.git`

SSH: `git@github.com:zbdd/code-course.git`

## Update Your Local Copy

To pull new lesson updates later:

```bash
git pull
```

## Common Troubleshooting

- If `git` is not recognized, restart your terminal after installing.
- If `git pull` asks for credentials, use the same GitHub account you cloned with.
