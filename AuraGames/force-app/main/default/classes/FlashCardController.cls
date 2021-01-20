public with sharing class FlashCardController {

    public list<Question__c> questionList(string qlist){
        return [SELECT Question__c, Answer__c FROM Question__c WHERE Category__c = :qlist];
    }
}