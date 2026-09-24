import PostHog from "posthog-react-native";

const projectToken = process.env.EXPO_PUBLIC_POSTHOG_PROJECT_TOKEN;
const host = process.env.EXPO_PUBLIC_POSTHOG_HOST;

const missingVariable = !projectToken
  ? "EXPO_PUBLIC_POSTHOG_PROJECT_TOKEN"
  : !host
    ? "EXPO_PUBLIC_POSTHOG_HOST"
    : null;

if (__DEV__ && missingVariable) {
  throw new Error(
    `${missingVariable} variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once ${missingVariable} is configured`,
  );
}

export const posthog =
  projectToken && host
    ? new PostHog(projectToken, {
        host,
      })
    : null;
