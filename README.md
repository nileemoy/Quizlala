ScreenShots
---![Screenshot 2024-08-23 164311](https://github.com/user-attachments/assets/f5ea7578-7471-4910-b5f0-6d89a20c4942)
![Screenshot 2024-08-23 164244](https://github.com/user-attachments/assets/a4ec5f07-64ad-4580-82d1-ee3d1538027d)
![Screenshot 2024-08-23 164216](https://github.com/user-attachments/assets/67672e17-b06e-4a53-a78f-71b4dc490acf)



## Vision

The QuizContract project aims to revolutionize the way quizzes are conducted on the blockchain. By leveraging smart contracts, the platform ensures transparency, fairness, and secure reward distribution. Users can participate in quizzes, answer questions, and earn rewards in a decentralized manner. The platform's vision is to create an engaging, trustless environment where knowledge meets technology, providing users with an innovative way to test their knowledge and earn incentives.

## Flowchart

```plaintext
+------------------+
|   Create Quiz    |
|  (Owner Action)  |
+------------------+
         |
         v
+------------------+       +-------------------+
|   Quiz Created   |       |   Answer Quiz     |
|    (Active)      |<------|  (User Action)    |
+------------------+       +-------------------+
         |                            |
         v                            |
+------------------+                  |
| User Answers Quiz |-----------------+
|  (Check Answer)   |
+------------------+
         |
         v
+------------------+
|  Correct Answer  |
|  (Reward User)   |
+------------------+
         |
         v
+------------------+
|  Withdraw Tokens |
|  (User Action)   |
+------------------+
```

## Contract Address

**Deployed on [Network Name]**
- Contract Address: `0xYourContractAddressHere`

## Functions

### Create Quiz
- Allows the owner to create a quiz by specifying a question and the correct answer's hash.

### Answer Quiz
- Users can answer an active quiz. If the answer is correct, they receive the reward amount, and the quiz is deactivated.

### Withdraw Tokens
- Users can withdraw their accumulated rewards.

### Set Reward Amount
- The owner can set the reward amount for correct answers.

### Deposit Funds
- The owner can deposit funds into the contract to ensure there are sufficient rewards.

### Check Quiz
- Users can view the question of a specific quiz.

### Check Balance
- Users can check their token balance within the contract.

### Get Latest Quiz ID
- Users can retrieve the ID of the latest created quiz.

## Future Scope

- **Multi-Quiz Support:** Extend the contract to support multiple quizzes running simultaneously.
- **Advanced Security:** Implement additional security measures to prevent front-running and answer hacking.
- **User Leaderboard:** Introduce a leaderboard to track top performers and incentivize competition.
- **Token Integration:** Integrate with popular tokens or create a custom token for quiz rewards.
- **Community Quizzes:** Allow users to create their own quizzes, fostering community engagement.

## Contact

For any inquiries or support, please contact:

- **Name:** Nileemoy Pathak
- **Email:** nileemoypathak@gmail.com
- **LinkedIn:** [Your LinkedIn Profile](https://linkedin.com/in/nileemoy)

---
