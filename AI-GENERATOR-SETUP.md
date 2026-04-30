# 🤖 AI Quiz Generator Setup Instructions

## What I Built:

✅ Beautiful AI Generator modal
✅ Topic input with examples
✅ Customizable options (# of questions, difficulty, question type)
✅ Loading animation
✅ Auto-populates quiz form with generated questions
✅ Powered by Claude AI (Anthropic)

## How to Set It Up:

### Step 1: Get Your Anthropic API Key

1. Go to: https://console.anthropic.com
2. Sign up or log in
3. Click "API Keys" in the sidebar
4. Click "Create Key"
5. Give it a name (e.g., "LetsGetQuizzy")
6. Copy the key (starts with `sk-ant-`)

**Important:** Keep this key SECRET! Don't share it publicly.

### Step 2: Add API Key to Your Code

1. Open `index.html`
2. Search for: `YOUR_ANTHROPIC_API_KEY`
3. Replace with your actual API key:
   ```javascript
   'x-api-key': 'sk-ant-api03-YOUR-ACTUAL-KEY-HERE'
   ```

### Step 3: Pricing (Very Cheap!)

- **Free tier:** $5 credit (enough for ~500 quizzes!)
- **After that:** ~$0.01 per quiz generated
- Model used: Claude 3.5 Sonnet (best quality)

### Step 4: Test It!

1. Upload your updated `index.html`
2. Log in to LetsGetQuizzy
3. Click "Create Quiz"
4. Click "🤖 Generate Quiz with AI ✨"
5. Enter a topic like: "Solar system for 5th graders"
6. Click "Generate Quiz"
7. Watch the magic happen! ✨

## How It Works:

1. User enters topic + options
2. Sends request to Claude API
3. I (Claude) generate questions in structured JSON format
4. Your app parses the JSON
5. Auto-fills the quiz creation form
6. User can review/edit before saving

## Example Prompts That Work Well:

- "World War 2 for high school students"
- "Basic algebra concepts"
- "Harry Potter trivia"
- "State capitals of the USA"
- "Python programming fundamentals"
- "Human body systems for middle school"

## Security Note:

⚠️ **For Production:** Don't put your API key directly in the frontend code!

Instead, you should:
1. Create a backend server (Node.js, Python, etc.)
2. Store API key on the server
3. Frontend calls YOUR server
4. Your server calls Anthropic API
5. Your server returns quiz to frontend

This prevents users from stealing your API key.

**For now (testing):** It's fine to have it in the code, but remove it before making the site truly public!

## Next Steps (Future Features):

- Add "Regenerate" button to try again
- Save generation history
- Allow editing individual questions
- Add more question types (multiple select, text input)
- Generate from uploaded documents (Phase 2!)

## Troubleshooting:

**"Failed to generate quiz"**
- Check your API key is correct
- Make sure you have API credits
- Check browser console for errors

**Quiz generates but fields are empty**
- The timing might be off - refresh and try again
- Check console for parsing errors

**"API key not valid"**
- Make sure you copied the full key
- No extra spaces before/after the key
- Key should start with `sk-ant-`

---

You now have THE killer feature that sets you apart from Kahoot and Quizlet! 🚀
