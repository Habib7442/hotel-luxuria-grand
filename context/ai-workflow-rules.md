# AI Workflow Rules: Hotel Luxuria Grand

## Approach
- **Spec-Driven**: Every task must be defined clearly before implementation.
- **Incremental**: Build one feature or fix one issue at a time.
- **Verified**: Always check the output against Lighthouse and SEO audit requirements.

## Rules
1. **No Pushes without Approval**: Never run `git push` unless explicitly asked.
2. **Context First**: Read all context files in the root before making architectural changes.
3. **Documentation Sync**: Update `progress-tracker.md` after every meaningful change.
4. **No Placeholders**: Use real data or generated assets; never leave "Lorem Ipsum" or placeholder images in final implementation.
5. **SEO Vigilance**: Any change to `page.tsx` files must double-check metadata and canonical tags.

## Verification Checklist
- [ ] No lint errors.
- [ ] Responsive on mobile/desktop.
- [ ] SEO titles/descriptions within limits.
- [ ] All images have alt text.
- [ ] Performance metrics maintained.
