
import { Stack } from 'expo-router';
import { ThemeProvider } from '../hooks';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false,}} />
      </Stack>
    </ThemeProvider>
  );
  }
