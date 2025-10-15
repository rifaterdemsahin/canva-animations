# How to Install GitHub Copilot CLI on Windows and Mac

This guide will walk you through installing and setting up GitHub Copilot CLI on both Windows and macOS systems.

## Prerequisites

- GitHub account with Copilot access
- Git installed on your system
- Node.js 16 or higher (recommended)
- Active GitHub Copilot subscription

## Installation on macOS

### Option 1: Using Homebrew (Recommended)

1. **Install Homebrew** (if not already installed):
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2. **Install GitHub CLI**:
```bash
brew install gh
```

3. **Update to latest version**:
```bash
brew upgrade gh
```

4. **Install Copilot CLI extension**:
```bash
gh extension install github/gh-copilot
```

### Option 2: Manual Installation

1. **Download GitHub CLI**:
   - Visit: https://cli.github.com/
   - Download the macOS installer
   - Install the package

2. **Install Copilot extension**:
```bash
gh extension install github/gh-copilot
```

## Installation on Windows

### Option 1: Using Winget (Recommended for Windows 10/11)

1. **Open PowerShell or Command Prompt** as Administrator

2. **Install GitHub CLI**:
```powershell
winget install --id GitHub.cli
```

3. **Restart your terminal** to refresh the PATH

4. **Install Copilot CLI extension**:
```powershell
gh extension install github/gh-copilot
```

### Option 2: Using Chocolatey

1. **Install Chocolatey** (if not already installed):
   - Visit: https://chocolatey.org/install
   - Follow installation instructions

2. **Install GitHub CLI**:
```powershell
choco install gh
```

3. **Install Copilot CLI extension**:
```powershell
gh extension install github/gh-copilot
```

### Option 3: Manual Installation (MSI)

1. **Download GitHub CLI**:
   - Visit: https://cli.github.com/
   - Download the Windows MSI installer
   - Run the installer

2. **Open a new terminal** (PowerShell or Command Prompt)

3. **Install Copilot CLI extension**:
```powershell
gh extension install github/gh-copilot
```

## Authentication

After installation, you need to authenticate with GitHub:

1. **Login to GitHub**:
```bash
gh auth login
```

2. **Follow the prompts**:
   - Select "GitHub.com"
   - Choose "HTTPS" or "SSH" (HTTPS recommended)
   - Authenticate with your credentials
   - Choose your preferred protocol

## Verify Installation

Check if Copilot CLI is installed correctly:

```bash
gh copilot --version
```

Or simply:
```bash
gh copilot
```

## Basic Usage

### Ask for Help

```bash
gh copilot suggest "how to list all files in a directory"
```

### Explain Commands

```bash
gh copilot explain "git rebase -i HEAD~3"
```

### Interactive Mode

```bash
gh copilot
```

## Aliases (Optional but Recommended)

### For macOS/Linux (add to `~/.bashrc`, `~/.zshrc`, or `~/.bash_profile`):

```bash
# Copilot CLI aliases
alias ghcs='gh copilot suggest'
alias ghce='gh copilot explain'
```

### For Windows PowerShell (add to your PowerShell profile):

```powershell
# Find your profile location
echo $PROFILE

# Create profile if it doesn't exist
New-Item -Path $PROFILE -Type File -Force

# Add aliases
function ghcs { gh copilot suggest $args }
function ghce { gh copilot explain $args }
```

Then reload your profile:
```powershell
. $PROFILE
```

## Updating GitHub Copilot CLI

### macOS (with Homebrew):
```bash
brew upgrade gh
gh extension upgrade gh-copilot
```

### Windows (with Winget):
```powershell
winget upgrade --id GitHub.cli
gh extension upgrade gh-copilot
```

### Manual Update:
```bash
gh extension upgrade gh-copilot
```

## Troubleshooting

### Issue: "gh: command not found"
- **Solution**: Restart your terminal or add GitHub CLI to your PATH
- **Windows**: Add `C:\Program Files\GitHub CLI\` to system PATH
- **macOS**: Ensure Homebrew is in your PATH

### Issue: Extension installation fails
- **Solution**: Update GitHub CLI first:
```bash
# macOS
brew upgrade gh

# Windows
winget upgrade --id GitHub.cli
```

### Issue: Authentication problems
- **Solution**: Re-authenticate:
```bash
gh auth logout
gh auth login
```

### Issue: Copilot not available
- **Solution**: Verify your GitHub Copilot subscription is active at https://github.com/settings/copilot

## Uninstalling

### Remove Copilot CLI extension:
```bash
gh extension remove gh-copilot
```

### Uninstall GitHub CLI:

**macOS**:
```bash
brew uninstall gh
```

**Windows (Winget)**:
```powershell
winget uninstall --id GitHub.cli
```

**Windows (Chocolatey)**:
```powershell
choco uninstall gh
```

## Additional Resources

- [GitHub CLI Documentation](https://cli.github.com/manual/)
- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [GitHub Copilot CLI Repository](https://github.com/github/gh-copilot)

## Tips for Effective Use

1. **Be Specific**: The more specific your question, the better the suggestion
2. **Use Natural Language**: Write your questions as you would ask a colleague
3. **Iterate**: Refine your prompts based on the responses
4. **Learn**: Use the explain feature to understand complex commands

---

**Last Updated**: October 2025

**Note**: GitHub Copilot CLI requires an active GitHub Copilot subscription. For more information about pricing and features, visit [GitHub Copilot pricing page](https://github.com/features/copilot).
