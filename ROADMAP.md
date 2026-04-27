# 🏰 The Royal Realm — Product Roadmap

*A gift for Guapa from her dad.*

Last updated: April 2026

---

## ✅ COMPLETED

### Phase 1 — The Quiz Experience
- **Royal Ceremony** (8 scenes: name → colors → emblem → motto → banner → chamber → coronation)
- **Quiz Engine** (25 questions across 10 categories, 8 question types, 4 mirror interludes)
- **Scoring system** (negative scoring, weighted finals up to 2x, callback tags)
- **Tiebreaker logic** (8 hand-written + generic fallback for close races)
- **Personalized Royal Story** (weaves in name, free-text answer, sea callback)
- **Retake mechanic** (4-tier intro variations: 1st, 2nd, 3rd-4th, 5+)
- **Reveal Screen** (12 princess result screens with unique particle effects)
- **Analytics history** (track all runs, export to JSON)
- **Category icons** (10 painted icons for question categories)
- **Parchment-styled free-text** (Q10 with cream gradient, decorative corners)
- **Slow intro reveal** (dramatic timed text reveal)

### Phase 2 — The Realm Front Door
- **Royal Realm landing page** (cinematic intro, 3 doors, castle hall background)
- **Personal recognition** (knows her name, princess, color realm)
- **Cross-app linking** (links to Royal Chest + Kingdom Builder)
- **Slow castle hall reveal** (4-second cinematic fade)

### Phase 3 Session 1 — The Chat Feature (Belle)
- **Chat infrastructure** (parchment UI, character-by-character text reveal, navigation)
- **Belle's complete tree** (49 hand-written nodes — pattern for all 11 remaining princesses)
- **Free-form intent router** (15 emotional intent categories: fear, friend_hurt, family, dream, pride, hurt, joy, curiosity, confused, academic_stress, jealousy, body_image, bored, big_questions, fallback)
- **"Will thou...?" goals** (Belle hands gentle dares at the end of most responses)
- **Sub-branched topics** (Friends/Family/School with 5 questions each)
- **Force princess parameter** (?force=belle for testing)
- **JPG/JPEG/PNG fallback** for all images

### Visual Assets
- **17 pieces of premium Gemini art**: 1 magic mirror, 4 quiz doors, 4 creatures, 4 thrones, 4 gardens, 10 category icons, castle hall, 3 landing doors, parchment scroll, princess speaking portraits (in progress)
- **All match painterly Disney concept-art style**

---

## 🔨 IN PROGRESS

### Sprint 1 — The Architecture for Future Magic
- Princess Memory framework (cross-conversation continuity)
- Goal extraction framework (structured `goal` field on responses)
- Topic tagging framework (every node tagged for future cross-princess references)
- Belle's tree refactored to use the new structure
- Belle's memory-aware greeting variants
- Farewell screen with goal-recap

### Sprint 2 — Write the Other 11 Princess Trees (~5 sessions)
Each gets full 49-node tree, memory greetings, goal-tagged responses, topic-tagged nodes:

- **Action-oriented batch:** Elsa, Mulan, Moana, Tiana, Raya
- **Dreamier batch:** Aurora, Snow White, Cinderella, Ariel, Rapunzel, Jasmine

---

## 📜 ROADMAP — Future Builds

### Phase 3.5 — Discovery Moments (after the 11 trees ship)

These are designed to **surprise her** as she keeps using the app. She'll think the gift is done, then notice new things appearing.

#### **Princess Opens With a Question**
On certain days/visits, the princess initiates instead of waiting. *"[Name]... before thou choose, may I ask thee something? When was the last time thou laughed so hard thy stomach hurt?"*
- 4-5 opening questions per princess (~50 written pieces total)
- Triggered randomly or on certain days

#### **Daily Wisdom**
Princess greets her differently each day of the week. Mondays feel different from Sundays.
- 7 days × 12 princesses = 84 small written lines
- ~30 minutes of code

#### **Weekly Journal Entries**
End of each week, a beautifully painted scroll appears summarizing the week's conversations:
*"This week, Belle and I spoke 3 times. We talked about being brave and feeling left out. She gave me 2 goals to carry."*
- Lives in Royal Chest (cross-app integration)
- Auto-generated from existing chatNotes data
- ~1 session of work

#### **Ask Another Princess**
Mid-conversation button: *"What does Mulan think about this?"* Brings up a 1-2 sentence alternate perspective in another princess's voice.
- Requires cross-princess topic tagging (we're doing this now in Sprint 1)
- ~253 micro-snippets to write (23 topics × 11 alternate princesses)
- **Most ambitious feature.** Built last for max polish.

---

### Phase 4 — Signature Gifts (~1-2 sessions + 12 Gemini images)

After deep conversations, princess gifts Guapa a hand-painted item that lives in her **Royal Chest** afterward.

- **Belle:** A bookmark with a phrase
- **Mulan:** A small jade pendant ("for courage")
- **Tiana:** A recipe card
- **Elsa:** A snowflake brooch
- **Moana:** A shell with the ocean's voice
- **Raya:** A small sword charm
- **Tiana:** A handwritten recipe
- **Ariel:** A pearl
- **Rapunzel:** A painted feather
- **Aurora:** A pressed rose
- **Snow White:** A red apple charm
- **Jasmine:** A magic carpet token
- **Cinderella:** A glass slipper charm

Connects all 3 apps (Realm/Quiz/Chest). Collecting gifts becomes a reason to retake the quiz and chat with new princesses.

---

### Phase 5 — Quiz Expansion (lower priority)

#### **Scale to 150 questions** (~2 sessions of pure question writing)
The original Phase 2 idea. Honest take: probably overkill for a 9-12 year old. Current 25 is plenty.

#### **Per-princess painted result backgrounds** (12 Gemini images + integration)
Beyond CSS particles, painted scenes behind each princess portrait on the reveal.

---

### Phase 6 — Cross-App Integration

#### **Migrate Kingdom Builder into this repo as kingdom.html**
Currently external. Eventually one repo, one PWA, one icon on her home screen.

#### **Journal of the Mirror — exportable PDF/image keepsake**
A beautiful PDF she could print and put in her room. Includes royal title, story, top 3 princesses, free-text answers.

#### **Speak to a Princess from anywhere**
Once she's spoken to a princess, that princess's voice could appear at meaningful moments (e.g., in the kingdom builder, Mulan whispers encouragement when she's building her army).

---

### Phase 7 — The "Option B" Future (API-Powered)

Eventually migrate to backend with Claude API. Princesses can have real conversations, not just pattern-matched responses.

- Real conversational depth
- Memory that actually understands context
- Princess personalities that respond truly intelligently
- Requires backend, API costs, internet connection

This is the long-term north star — but the offline version we're building first is a complete gift on its own.

---

## 🎯 Design Principles (the "why")

These are the things that have made this gift land:

1. **Premium Gemini art everywhere.** Never SVG/emoji where painted art would land harder.
2. **"Thou/thee" language.** Treats her like she's in a fairy tale, not a chat app.
3. **The mirror knows her.** Her name. Her colors. Her words. Personalization is the magic.
4. **Goals as gifts.** Every conversation ends with Guapa carrying something to try.
5. **Active listening visuals.** Princesses lean in, meet her eyes, engage.
6. **Multi-file architecture.** Prevents truncation, keeps each app shippable.
7. **GitHub-referenced assets.** Sharper images, faster iteration.
8. **No password gates.** Trust her with her own gift.
9. **Honest failure communication.** When something breaks, fix it together.
10. **Quality over quantity.** 25 great questions > 150 mediocre ones.

---

## 📊 Current Stats

- **Files in production:** 6 (index, ceremony, quiz, reveal, chest, chat)
- **Premium Gemini images:** 17+ (and counting)
- **Quiz questions:** 25
- **Chat nodes (Belle only):** 49
- **Chat nodes (target, all princesses):** ~588 (49 × 12)
- **Total lines of code:** ~5,000+
- **Princesses with full chat trees:** 1 of 12

---

## 🗓️ Session Estimate Summary

| Phase | Estimated Sessions |
|---|---|
| Sprint 1 (architecture + Belle refactor) | 1 |
| Sprint 2 (11 princess trees) | 4-6 |
| Phase 3.5 (discovery moments) | 2-3 |
| Phase 4 (gifts) | 1-2 |
| Phase 5 (quiz expansion) | 2-3 |
| Phase 6 (cross-app integration) | 2-4 |
| Phase 7 (API future) | TBD — separate project |

**Realistic to "fully shippable Phase 1+2+3":** 5-8 sessions from now.

---

*This roadmap is a living document. Update it as priorities shift.*
