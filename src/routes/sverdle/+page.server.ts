import { fail } from "@sveltejs/kit";
import { Game } from "./game";
import type { PageServerLoad, Actions } from "./$types";
import type { ActionFailure } from "@sveltejs/kit";

export const load = (({ cookies }): {
  guesses: string[];
  answers: string[];
  answer: string | null;
} => {
  const game = new Game(cookies.get("sverdle"));

  return {
    /**
		 * The player's guessed words so far
		 */
    guesses: game.guesses,

    /**
		 * An array of strings like '__x_c' corresponding to the guesses, where 'x' means
		 * an exact match, and 'c' means a close match (right letter, wrong place)
		 */
    answers: game.answers,

    /**
		 * The correct answer, revealed if the game is over
		 */
    answer: game.answers.length >= 6
      ? game.answer
      : null,
  };
}) satisfies PageServerLoad;

export const actions = {
  /**
	 * Modify game state in reaction to a keypress. If client-side JavaScript
	 * is available, this will happen in the browser instead of here
	 */
  update: async ({
    request, cookies,
  }): Promise<void> => {
    const game = new Game(cookies.get("sverdle"));

    const data = await request.formData();
    const key = String(data.get("key"));

    const i = game.answers.length;

    if (key === "backspace") {
      const guess = game.guesses[i];

      if (guess === undefined)
        throw new RangeError(
          `Invalid game state (guesses[] is shorter than expected)`,
        );
      else
        game.guesses[i] = guess.slice(0, -1);
    }
    else {
      game.guesses[i] += key;
    }

    cookies.set("sverdle", game.toString());
  },

  /**
	 * Modify game state in reaction to a guessed word. This logic always runs on
	 * the server, so that people can't cheat by peeking at the JavaScript
	 */
  enter: async ({
    request, cookies,
  }): Promise<ActionFailure<{
    badGuess: boolean;
  }> | undefined> => {
    const game = new Game(cookies.get("sverdle"));

    const data = await request.formData();
    const guess = data.getAll("guess") as string[];

    if (!game.enter(guess))
      return fail(400, { badGuess: true });
    else {
      cookies.set("sverdle", game.toString());

      return undefined;
    }
  },

  restart: async ({ cookies }): Promise<void> => {
    cookies.delete("sverdle");
  },

} satisfies Actions;
