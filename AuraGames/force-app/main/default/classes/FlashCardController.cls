public with sharing class FlashCardController {

    public list<Question__c> questionList(){
        return [SELECT Question__c, Answer__c FROM Question__c];
    }
}