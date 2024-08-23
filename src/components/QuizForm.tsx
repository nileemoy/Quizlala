// QuizForm.tsx
import React from 'react';

const QuizForm: React.FC = () => {
    // 1. contract address
    const USDTAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138'
    // 2. contract ABI
    // ethersProviders
    //signer
    //contract Instance
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a className="flex items-center gap-2 font-bold" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <rect width="16" height="20" x="4" y="2" rx="2"></rect>
              <line x1="8" x2="16" y1="6" y2="6"></line>
              <line x1="16" x2="16" y1="14" y2="18"></line>
              <path d="M16 10h.01"></path>
              <path d="M12 10h.01"></path>
              <path d="M8 10h.01"></path>
              <path d="M12 14h.01"></path>
              <path d="M8 14h.01"></path>
              <path d="M12 18h.01"></path>
              <path d="M8 18h.01"></path>
            </svg>
            <span>QuizApp</span>
          </a>
          <nav className="hidden space-x-4 sm:flex">
            <a className="rounded-md px-3 py-2 hover:bg-muted" href="#">
              Create Quiz
            </a>
            <a className="rounded-md px-3 py-2 hover:bg-muted" href="#">
              Play Quizzes
            </a>
            <a className="rounded-md px-3 py-2 hover:bg-muted" href="#">
              Leaderboard
            </a>
            <a className="rounded-md px-3 py-2 hover:bg-muted" href="#">
              Account
            </a>
          </nav>
          <div className="flex items-center gap-2">
            {/* <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
              Connect Wallet
            </button> */}
            <w3m-button/>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="container mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Create Quiz</h3>
                <p className="text-sm text-muted-foreground">Create a new quiz and publish it to the blockchain.</p>
              </div>
              <div className="p-6">
                <form>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium leading-none" htmlFor="title">
                        Title
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        id="title"
                        placeholder="Enter quiz title"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium leading-none" htmlFor="description">
                        Description
                      </label>
                      <textarea
                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        id="description"
                        placeholder="Enter quiz description"
                        rows={3}
                      ></textarea>
                    </div>
                    <div>
                      <label className="text-sm font-medium leading-none" htmlFor="reward">
                        Reward
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        id="reward"
                        placeholder="Enter quiz reward"
                        type="number"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium leading-none" htmlFor="questions">
                        Questions
                      </label>
                      <div className="space-y-4">
                        <div>
                          <input
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground mb-2"
                            id="question-1"
                            placeholder="Enter question 1"
                          />
                          <div className="flex gap-2">
                            <input
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground flex-1"
                              id="answer-1-1"
                              placeholder="Answer 1"
                            />
                            <input
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground flex-1"
                              id="answer-1-2"
                              placeholder="Answer 2"
                            />
                            <input
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground flex-1"
                              id="answer-1-3"
                              placeholder="Answer 3"
                            />
                            <input
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground flex-1"
                              id="answer-1-4"
                              placeholder="Answer 4"
                            />
                          </div>
                        </div>
                        <div>
                          <input
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground mb-2"
                            id="question-2"
                            placeholder="Enter question 2"
                          />
                          <div className="flex gap-2">
                            <input
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground flex-1"
                              id="answer-2-1"
                              placeholder="Answer 1"
                            />
                            <input
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground flex-1"
                              id="answer-2-2"
                              placeholder="Answer 2"
                            />
                            <input
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground flex-1"
                              id="answer-2-3"
                              placeholder="Answer 3"
                            />
                            <input
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground flex-1"
                              id="answer-2-4"
                              placeholder="Answer 4"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="flex items-center p-6">
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                  type="submit"
                >
                  Create Quiz
                </button>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Play Quizzes</h3>
                <p className="text-sm text-muted-foreground">Participate in quizzes and compete with others.</p>
              </div>
              <div className="p-6">
                <form>
                  {/* Placeholder for play quizzes form or functionality */}
                </form>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Leaderboard</h3>
                <p className="text-sm text-muted-foreground">View the top performers in quizzes.</p>
              </div>
              <div className="p-6">
                <form>
                  {/* Placeholder for leaderboard form or functionality */}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-muted-foreground">© 2024 QuizApp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default QuizForm;
