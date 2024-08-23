// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract QuizContract {
    address public owner;
    uint256 public rewardAmount;

    struct Quiz {
        string question;
        string correctAnswerHash; // Store hash of the correct answer
        bool isActive;
    }

    mapping(uint256 => Quiz) public quizzes;
    uint256 public quizCount;

    mapping(address => uint256) public userBalances;

    constructor(uint256 _rewardAmount) {
        owner = msg.sender;
        rewardAmount = _rewardAmount;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }

    function createQuiz(string memory _question, string memory _correctAnswerHash) public onlyOwner returns (uint256) {
        uint256 quizId = quizCount;
        quizzes[quizId] = Quiz({
            question: _question,
            correctAnswerHash: _correctAnswerHash,
            isActive: true
        });
        quizCount++;
        return quizId;
    }

    function answerQuiz(uint256 _quizId, string memory _answer) public {
        require(quizzes[_quizId].isActive, "Quiz is not active");
        bytes32 answerHash = keccak256(abi.encodePacked(_answer));
        if (keccak256(abi.encodePacked(quizzes[_quizId].correctAnswerHash)) == answerHash) {
            userBalances[msg.sender] += rewardAmount;
            quizzes[_quizId].isActive = false; // Deactivate quiz after correct answer
        }
    }

    function withdrawTokens() public {
        uint256 balance = userBalances[msg.sender];
        require(balance > 0, "No tokens to withdraw");
        userBalances[msg.sender] = 0;
        payable(msg.sender).transfer(balance);
    }

    function setRewardAmount(uint256 _newRewardAmount) public onlyOwner {
        rewardAmount = _newRewardAmount;
    }
    
    function depositFunds() public payable onlyOwner {}
    
    function checkQuiz(uint256 _quizId) public view returns (string memory) {
        return quizzes[_quizId].question;
    }

    function checkBalance() public view returns (uint256) {
        return userBalances[msg.sender];
    }

    // New function to return the latest quiz ID
    function getLatestQuizId() public view returns (uint256) {
        require(quizCount > 0, "No quizzes have been created yet");
        return quizCount - 1;
    }
}
