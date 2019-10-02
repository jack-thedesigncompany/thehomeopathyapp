angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('homeopathy.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('homeopathy.searchMedicines', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/searchMedicines.html',
        controller: 'searchMedicinesCtrl'
      }
    }
  })

  .state('homeopathy.learnAboutHomeopathy', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/learnAboutHomeopathy.html',
        controller: 'learnAboutHomeopathyCtrl'
      }
    }
  })

  .state('homeopathy', {
    url: '/side-menu21',
    templateUrl: 'templates/homeopathy.html',
    controller: 'homeopathyCtrl'
  })



  //imports
  .state('homeopathy.athleteSFoot', {
    url: '/page278',
    views: {
      
      'side-menu21': {
        templateUrl: 'templates/athleteSFoot.html',
        controller: 'athleteSFootCtrl'
      }
    }
  })

  .state('homeopathy.boils', {
    url: '/page279',
    views: {
     
      'side-menu21': {
        templateUrl: 'templates/boils.html',
        controller: 'boilsCtrl'
      }
    }
  })

  .state('homeopathy.burns', {
    url: '/page280',
    views: {
     
      'side-menu21': {
        templateUrl: 'templates/burns.html',
        controller: 'burnsCtrl'
      }
    }
  })

  .state('homeopathy.chappedLips', {
    url: '/page281',
    views: {
      
      'side-menu21': {
        templateUrl: 'templates/chappedLips.html',
        controller: 'chappedLipsCtrl'
      }
    }
  })

  .state('homeopathy.coldSores', {
    url: '/page282',
    views: {
      
      'side-menu21': {
        templateUrl: 'templates/coldSores.html',
        controller: 'coldSoresCtrl'
      }
    }
  })

  .state('homeopathy.fissures', {
    url: '/page283',
    views: {
      
      'side-menu21': {
        templateUrl: 'templates/fissures.html',
        controller: 'fissuresCtrl'
      }
    }
  })

  .state('homeopathy.frostnip', {
    url: '/page284',
    views: {
     
      'side-menu21': {
        templateUrl: 'templates/frostnip.html',
        controller: 'frostnipCtrl'
      },
    }
  })

  .state('homeopathy.findHoarsenessMedicines', {
    url: '/page87',
    views: {
      
      'side-menu21': {
        templateUrl: 'templates/findHoarsenessMedicines.html',
        controller: 'findHoarsenessMedicinesCtrl'
      }
    }
  })

  .state('coldAndFluRunnyNoseMeds', {
    url: '/page111',
    templateUrl: 'templates/coldAndFluRunnyNoseMeds.html',
    controller: 'coldAndFluRunnyNoseMedsCtrl'
  })

  .state('homeopathy.findEyeCareMedicines', {
    url: '/page229',
    views: {
      
      'side-menu21': {
        templateUrl: 'templates/findEyeCareMedicines.html',
        controller: 'findEyeCareMedicinesCtrl'
      }
    }
  })

  .state('homeopathy.irritatedEyes', {
    url: '/page230',
    views: {
      
      'side-menu21': {
        templateUrl: 'templates/irritatedEyes.html',
        controller: 'irritatedEyesCtrl'
      }
    }
  })

  .state('homeopathy.stye', {
    url: '/page232',
    views: {
      
      'side-menu21': {
        templateUrl: 'templates/stye.html',
        controller: 'styeCtrl'
      }
    }
  })

  .state('homeopathy.strainedEyes', {
    url: '/page231',
    views: {
      
      'side-menu21': {
        templateUrl: 'templates/strainedEyes.html',
        controller: 'strainedEyesCtrl'
      }
    }
  })

  .state('homeopathy.coldAndFluSinusPainMeds', {
    url: '/page112',
    views: {
      
      'side-menu21': {
        templateUrl: 'templates/coldAndFluSinusPainMeds.html',
        controller: 'coldAndFluSinusPainMedsCtrl'
      }
    }
  })

  .state('homeopathy.findColdSoreMedicines', {
    url: '/page148',
    views: {
      
      'side-menu21': {
        templateUrl: 'templates/findColdSoreMedicines.html',
        controller: 'findColdSoreMedicinesCtrl'
      }
    }
  })

  .state('homeopathy.acne', {
    url: '/page234',
    views: {
      
      'side-menu21': {
        templateUrl: 'templates/acne.html',
        controller: 'acneCtrl'
      }
    }
  })

  .state('frostnip2', {
    url: '/page285',
    templateUrl: 'templates/frostnip2.html',
    controller: 'frostnip2Ctrl'
  })

  .state('findConstipationMedicines2', {
    url: '/page152',
    templateUrl: 'templates/findConstipationMedicines2.html',
    controller: 'findConstipationMedicines2Ctrl'
  })

  .state('homeopathy.findSoreThroatMedicines', {
    url: '/page113',
    views: {
     
      'side-menu21': {
        templateUrl: 'templates/findSoreThroatMedicines.html',
        controller: 'findSoreThroatMedicinesCtrl'
      }
    }
  })

  .state('homeopathy.findColdAndFluMedicines', {
    url: '/page20',
    views: {
      
      'side-menu21': {
        templateUrl: 'templates/findColdAndFluMedicines.html',
        controller: 'findColdAndFluMedicinesCtrl'
      }
    }
  })

  .state('homeopathy.findBodyAchesMedicines', {
    url: '/page71',
    views: {
     
      'side-menu21': {
        templateUrl: 'templates/findBodyAchesMedicines.html',
        controller: 'findBodyAchesMedicinesCtrl'
      }
    }
  })

  .state('homeopathy.findCankerSoreMedicines', {
    url: '/page141',
    views: {
      
      'side-menu21': {
        templateUrl: 'templates/findCankerSoreMedicines.html',
        controller: 'findCankerSoreMedicinesCtrl'
      }
    }
  })

  .state('homeopathy.findRunnyNoseMedicines', {
    url: '/page18',
    views: {
     
      'side-menu21': {
        templateUrl: 'templates/findRunnyNoseMedicines.html',
        controller: 'findRunnyNoseMedicinesCtrl'
      }
    }
  })

  .state('homeopathy.findCirculatoryMedicines', {
    url: '/page58',
    views: {
     
      'side-menu21': {
        templateUrl: 'templates/findCirculatoryMedicines.html',
        controller: 'findCirculatoryMedicinesCtrl'
      }
    }
  })

  .state('homeopathy.findHemorrhoidMedicines', {
    url: '/page64',
    views: {
     
      'side-menu21': {
        templateUrl: 'templates/findHemorrhoidMedicines.html',
        controller: 'findHemorrhoidMedicinesCtrl'
      }
    }
  })

  .state('homeopathy.findHiccupsMedicines', {
    url: '/page191',
    views: {
     
      'side-menu21': {
        templateUrl: 'templates/findHiccupsMedicines.html',
        controller: 'findHiccupsMedicinesCtrl'
      }
    }
  })

  .state('homeopathy.findJetLagMedicines', {
    url: '/page201',
    views: {
      
      'side-menu21': {
        templateUrl: 'templates/findJetLagMedicines.html',
        controller: 'findJetLagMedicinesCtrl'
      }
    }
  })

  .state('homeopathy.findIndigestionMedicines', {
    url: '/page196',
    views: {
      
      'side-menu21': {
        templateUrl: 'templates/findIndigestionMedicines.html',
        controller: 'findIndigestionMedicinesCtrl'
      }
      
    }
  })

  .state('homeopathy.findInsectBiteMedicines', {
    url: '/page286',
    views: {
     
      'side-menu21': {
        templateUrl: 'templates/findInsectBiteMedicines.html',
        controller: 'findInsectBiteMedicinesCtrl'
      }
    }
  })

  .state('findPoisonOakIvyOrSumacMeds', {
    url: '/page288',
    templateUrl: 'templates/findPoisonOakIvyOrSumacMeds.html',
    controller: 'findPoisonOakIvyOrSumacMedsCtrl'
  })

  .state('homeopathy.findPricklyHeatMiliariaMedicines', {
    url: '/page289',
    views: {
    
      'side-menu21': {
        templateUrl: 'templates/findPricklyHeatMiliariaMedicines.html',
        controller: 'findPricklyHeatMiliariaMedicinesCtrl'
      }
    }
  })

  .state('homeopathy.findScarMedicines', {
    url: '/page290',
    views: {
     
      'side-menu21': {
        templateUrl: 'templates/findScarMedicines.html',
        controller: 'findScarMedicinesCtrl'
      }
    }
  })

  .state('homeopathy.findShinglesOrZosterPainMeds', {
    url: '/page291',
    views: {
      
      'side-menu21': {
        templateUrl: 'templates/findShinglesOrZosterPainMeds.html',
        controller: 'findShinglesOrZosterPainMedsCtrl'
      }
    }
  })

  .state('homeopathy.findSmallWoundMedicines', {
    url: '/page292',
    views: {
     
      'side-menu21': {
        templateUrl: 'templates/findSmallWoundMedicines.html',
        controller: 'findSmallWoundMedicinesCtrl'
      }
    }
  })

  .state('homeopathy.findSunAllergyMedicines', {
    url: '/page293',
    views: {
     
      'side-menu21': {
        templateUrl: 'templates/findSunAllergyMedicines.html',
        controller: 'findSunAllergyMedicinesCtrl'
      }
    }
  })

  .state('homeopathy.findSunburnMedicines', {
    url: '/page294',
    views: {
     
      'side-menu21': {
        templateUrl: 'templates/findSunburnMedicines.html',
        controller: 'findSunburnMedicinesCtrl'
      }
    }
  })

  .state('homeopathy.findWartMedicines', {
    url: '/page295',
    views: {
    
      'side-menu21': {
        templateUrl: 'templates/findWartMedicines.html',
        controller: 'findWartMedicinesCtrl'
      }
    }
  })

  .state('findPoisonOakIvyOrSumacMeds2', {
    url: '/page306',
    templateUrl: 'templates/findPoisonOakIvyOrSumacMeds2.html',
    controller: 'findPoisonOakIvyOrSumacMeds2Ctrl'
  })

  .state('homeopathy.findItchingMedicines', {
    url: '/page287',
    views: {
    
      'side-menu21': {
        templateUrl: 'templates/findItchingMedicines.html',
        controller: 'findItchingMedicinesCtrl'
      }
    }
  })

  .state('homeopathy.findChildrenSEaracheMedicine', {
    url: '/page34',
    views: {
     
      'side-menu21': {
        templateUrl: 'templates/findChildrenSEaracheMedicine.html',
        controller: 'findChildrenSEaracheMedicineCtrl'
      }
    }
  })

  .state('homeopathy.findSnoringMedicines', {
    url: '/page208',
    views: {
   
      'side-menu21': {
        templateUrl: 'templates/findSnoringMedicines.html',
        controller: 'findSnoringMedicinesCtrl'
      }
    }
  })

  .state('homeopathy.findCrustyNostrilMedicines', {
    url: '/page93',
    views: {
    
      'side-menu21': {
        templateUrl: 'templates/findCrustyNostrilMedicines.html',
        controller: 'findCrustyNostrilMedicinesCtrl'
      }
    }
  })

  .state('homeopathy.findEaracheMedicines', {
    url: '/page97',
    views: {
   
      'side-menu21': {
        templateUrl: 'templates/findEaracheMedicines.html',
        controller: 'findEaracheMedicinesCtrl'
      }
    }
  })

  .state('homeopathy.findStuffyNoseMedicines', {
    url: '/page135',
    views: {
     
      'side-menu21': {
        templateUrl: 'templates/findStuffyNoseMedicines.html',
        controller: 'findStuffyNoseMedicinesCtrl'
      }
    }
  })

  .state('homeopathy.findSleeplessnessMeds', {
    url: '/page47',
    views: {
    
      'side-menu21': {
        templateUrl: 'templates/findSleeplessnessMeds.html',
        controller: 'findSleeplessnessMedsCtrl'
      }
    }
  })

  .state('homeopathy.findStressAndSleepMedicines', {
    url: '/page410',
    views: {
   
      'side-menu21': {
        templateUrl: 'templates/findStressAndSleepMedicines.html',
        controller: 'findStressAndSleepMedicinesCtrl'
      }
    }
  })

  .state('homeopathy.findApprehensionMedicines', {
    url: '/page411',
    views: {
    
      'side-menu21': {
        templateUrl: 'templates/findApprehensionMedicines.html',
        controller: 'findApprehensionMedicinesCtrl'
      }
    }
  })

  .state('homeopathy.findGeneralFatigueMedicines', {
    url: '/page412',
    views: {
   
      'side-menu21': {
        templateUrl: 'templates/findGeneralFatigueMedicines.html',
        controller: 'findGeneralFatigueMedicinesCtrl'
      }
    }
  })

  .state('homeopathy.findHairLossMedicines', {
    url: '/page413',
    views: {
    
      'side-menu21': {
        templateUrl: 'templates/findHairLossMedicines.html',
        controller: 'findHairLossMedicinesCtrl'
      }
    }
  })

  .state('homeopathy.findIrritabilityMedicines', {
    url: '/page414',
    views: {
    
      'side-menu21': {
        templateUrl: 'templates/findIrritabilityMedicines.html',
        controller: 'findIrritabilityMedicinesCtrl'
      }
    }
  })

  .state('homeopathy.findNightSweatsMedicines', {
    url: '/page415',
    views: {
   
      'side-menu21': {
        templateUrl: 'templates/findNightSweatsMedicines.html',
        controller: 'findNightSweatsMedicinesCtrl'
      }
    }
  })

  .state('homeopathy.findPerimenopauseMedicines', {
    url: '/page423',
    views: {
    
      'side-menu21': {
        templateUrl: 'templates/findPerimenopauseMedicines.html',
        controller: 'findPerimenopauseMedicinesCtrl'
      }
    }
  })

  .state('homeopathy.findPremenstrualSyndromeMedicines', {
    url: '/page424',
    views: {
     
      'side-menu21': {
        templateUrl: 'templates/findPremenstrualSyndromeMedicines.html',
        controller: 'findPremenstrualSyndromeMedicinesCtrl'
      }
    }  
  })

  .state('homeopathy.findProfuseSweatingMedicines', {
    url: '/page425',
    views: {
   
      'side-menu21': {
        templateUrl: 'templates/findProfuseSweatingMedicines.html',
        controller: 'findProfuseSweatingMedicinesCtrl'
      }
    }
  })

  .state('findSleeplessnessMedicines', {
    url: '/page426',
    templateUrl: 'templates/findSleeplessnessMedicines.html',
    controller: 'findSleeplessnessMedicinesCtrl'
  })

  .state('homeopathy.findWomenSHealthMedicines', {
    url: '/page416',
    views: {
   
      'side-menu21': {
        templateUrl: 'templates/findWomenSHealthMedicines.html',
        controller: 'findWomenSHealthMedicinesCtrl'
      }
    }
  })

  .state('homeopathy.findNosebleedMedicines', {
    url: '/page39',
    views: {
   
      'side-menu21': {
        templateUrl: 'templates/findNosebleedMedicines.html',
        controller: 'findNosebleedMedicinesCtrl'
      }
    }
  })

  .state('homeopathy.findOralCareMedicines', {
    url: '/page392',
    views: {
  
      'side-menu21': {
        templateUrl: 'templates/findOralCareMedicines.html',
        controller: 'findOralCareMedicinesCtrl'
      }
    }
  })

  .state('homeopathy.findBleedingGumsMedicines', {
    url: '/page393',
    views: {
  
      'side-menu21': {
        templateUrl: 'templates/findBleedingGumsMedicines.html',
        controller: 'findBleedingGumsMedicinesCtrl'
      }
    }
  })

  .state('homeopathy.findChildrenSRestlessSleepMeds', {
    url: '/page43',
    views: {
   
      'side-menu21': {
        templateUrl: 'templates/findChildrenSRestlessSleepMeds.html',
        controller: 'findChildrenSRestlessSleepMedsCtrl'
      }
    }
  })

  .state('homeopathy.findHeavyLegsMedicines', {
    url: '/page60',
    views: {
    
      'side-menu21': {
        templateUrl: 'templates/findHeavyLegsMedicines.html',
        controller: 'findHeavyLegsMedicinesCtrl'
      }
    }
  })

  .state('homeopathy.findNasalCongestionMedicines', {
    url: '/page21',
    views: {
     
      'side-menu21': {
        templateUrl: 'templates/findNasalCongestionMedicines.html',
        controller: 'findNasalCongestionMedicinesCtrl'
      }
    }
  })

  .state('homeopathy.findSunAllergyMedicines2', {
    url: '/page26',
    views: {
    
      'side-menu21': {
        templateUrl: 'templates/findSunAllergyMedicines2.html',
        controller: 'findSunAllergyMedicines2Ctrl'
      }
    }
  })

  .state('homeopathy.findWomenSHeadacheMedicines', {
    url: '/page417',
    views: {
     
      'side-menu21': {
        templateUrl: 'templates/findWomenSHeadacheMedicines.html',
        controller: 'findWomenSHeadacheMedicinesCtrl'
      }
    }
  })

  .state('homeopathy.findHeavyMenstruationMedicines', {
    url: '/page418',
    views: {
   
      'side-menu21': {
        templateUrl: 'templates/findHeavyMenstruationMedicines.html',
        controller: 'findHeavyMenstruationMedicinesCtrl'
      }
    }
  })

  .state('homeopathy.findHotFlashMedicines', {
    url: '/page419',
    views: {
   
      'side-menu21': {
        templateUrl: 'templates/findHotFlashMedicines.html',
        controller: 'findHotFlashMedicinesCtrl'
      }
    }
  })

  .state('findIrritabilityMedicines2', {
    url: '/page420',
    templateUrl: 'templates/findIrritabilityMedicines2.html',
    controller: 'findIrritabilityMedicines2Ctrl'
  })

  .state('findNightSweatMedicines', {
    url: '/page422',
    templateUrl: 'templates/findNightSweatMedicines.html',
    controller: 'findNightSweatMedicinesCtrl'
  })

  .state('homeopathy.findMenstrualCrampMedicines', {
    url: '/page421',
    views: {
      'tab3': {
        templateUrl: 'templates/findMenstrualCrampMedicines.html',
        controller: 'findMenstrualCrampMedicinesCtrl'
      }
    }
  })

  .state('homeopathy.allergy', {
    url: '/allergy',
    views: {
      'tab3': {
        templateUrl: 'templates/allergy.html',
        controller: 'allergyCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/allergy.html',
        controller: 'allergyCtrl'
      }
    }
  })

  .state('homeopathy.findFeverMedicines', {
    url: '/page99',
    views: {
      'tab3': {
        templateUrl: 'templates/findFeverMedicines.html',
        controller: 'findFeverMedicinesCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/findFeverMedicines.html',
        controller: 'findFeverMedicinesCtrl'
      }
    }
  })

  .state('findWartsMedicines', {
    url: '/page329',
    templateUrl: 'templates/findWartsMedicines.html',
    controller: 'findWartsMedicinesCtrl'
  })

  .state('homeopathy.findSkinMedicinesFirstAid', {
    url: '/page24',
    views: {
      'tab3': {
        templateUrl: 'templates/findSkinMedicinesFirstAid.html',
        controller: 'findSkinMedicinesFirstAidCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/findSkinMedicinesFirstAid.html',
        controller: 'findSkinMedicinesFirstAidCtrl'
      }
    }
  })

  .state('homeopathy.findJointAndMusclePainMeds', {
    url: '/page313',
    views: {
      'tab3': {
        templateUrl: 'templates/findJointAndMusclePainMeds.html',
        controller: 'findJointAndMusclePainMedsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/findJointAndMusclePainMeds.html',
        controller: 'findJointAndMusclePainMedsCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='homeopathy.findAStore'
      2) Using $state.go programatically:
        $state.go('homeopathy.findAStore');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/side-menu21/findastore
      /page1/tab3/findastore
      /page1/tab8/findastore
  */
  .state('homeopathy.findAStore', {
    url: '/findastore',
    views: {
      'side-menu21': {
        templateUrl: 'templates/findAStore.html',
        controller: 'findAStoreCtrl'
      },
    }
  })

  .state('homeopathy.coldUrticaria', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/coldUrticaria.html',
        controller: 'coldUrticariaCtrl'
      }
    }
  })

  .state('homeopathy.babyColic', {
    url: '/page29',
    views: {
      'tab3': {
        templateUrl: 'templates/babyColic.html',
        controller: 'babyColicCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/babyColic.html',
        controller: 'babyColicCtrl'
      }
    }
  })

  .state('homeopathy.teething', {
    url: '/page57',
    views: {
      'tab3': {
        templateUrl: 'templates/teething.html',
        controller: 'teethingCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/teething.html',
        controller: 'teethingCtrl'
      }
    }
  })

  .state('homeopathy.toothachesFromNewTeeth', {
    url: '/page387',
    views: {
      'tab3': {
        templateUrl: 'templates/toothachesFromNewTeeth.html',
        controller: 'toothachesFromNewTeethCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/toothachesFromNewTeeth.html',
        controller: 'toothachesFromNewTeethCtrl'
      }
    }
  })

  .state('homeopathy.toothachesHypersensitivityToPain', {
    url: '/page388',
    views: {
      'tab3': {
        templateUrl: 'templates/toothachesHypersensitivityToPain.html',
        controller: 'toothachesHypersensitivityToPainCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/toothachesHypersensitivityToPain.html',
        controller: 'toothachesHypersensitivityToPainCtrl'
      }
    }
  })

  .state('homeopathy.nervePainHypersensitivityToPain', {
    url: '/page446',
    views: {
      'tab3': {
        templateUrl: 'templates/nervePainHypersensitivityToPain.html',
        controller: 'nervePainHypersensitivityToPainCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/nervePainHypersensitivityToPain.html',
        controller: 'nervePainHypersensitivityToPainCtrl'
      }
    }
  })

  .state('homeopathy.nervePainSciatica', {
    url: '/page447',
    views: {
      'tab3': {
        templateUrl: 'templates/nervePainSciatica.html',
        controller: 'nervePainSciaticaCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/nervePainSciatica.html',
        controller: 'nervePainSciaticaCtrl'
      }
    }
  })

  .state('homeopathy.toothachesTriggeredByColdDrinks', {
    url: '/page389',
    views: {
      'tab3': {
        templateUrl: 'templates/toothachesTriggeredByColdDrinks.html',
        controller: 'toothachesTriggeredByColdDrinksCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/toothachesTriggeredByColdDrinks.html',
        controller: 'toothachesTriggeredByColdDrinksCtrl'
      }
    }
  })

  .state('homeopathy.toothachesTriggeredByHotDrinks', {
    url: '/page390',
    views: {
      'tab3': {
        templateUrl: 'templates/toothachesTriggeredByHotDrinks.html',
        controller: 'toothachesTriggeredByHotDrinksCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/toothachesTriggeredByHotDrinks.html',
        controller: 'toothachesTriggeredByHotDrinksCtrl'
      }
    }
  })

  .state('homeopathy.toothachesWithShootingPain', {
    url: '/page391',
    views: {
      'tab3': {
        templateUrl: 'templates/toothachesWithShootingPain.html',
        controller: 'toothachesWithShootingPainCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/toothachesWithShootingPain.html',
        controller: 'toothachesWithShootingPainCtrl'
      }
    }
  })

  .state('homeopathy.boneTraumaHealingFracture', {
    url: '/page396',
    views: {
      'tab3': {
        templateUrl: 'templates/boneTraumaHealingFracture.html',
        controller: 'boneTraumaHealingFractureCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/boneTraumaHealingFracture.html',
        controller: 'boneTraumaHealingFractureCtrl'
      }
    }
  })

  .state('homeopathy.goutyToeImprovedByStrongPressure', {
    url: '/page427',
    views: {
      'tab3': {
        templateUrl: 'templates/goutyToeImprovedByStrongPressure.html',
        controller: 'goutyToeImprovedByStrongPressureCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/goutyToeImprovedByStrongPressure.html',
        controller: 'goutyToeImprovedByStrongPressureCtrl'
      }
    }
  })

  .state('homeopathy.headacheAboveTheEyes', {
    url: '/page432',
    views: {
      'tab3': {
        templateUrl: 'templates/headacheAboveTheEyes.html',
        controller: 'headacheAboveTheEyesCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/headacheAboveTheEyes.html',
        controller: 'headacheAboveTheEyesCtrl'
      }
    }
  })

  .state('homeopathy.headacheAtTheBackOfTheHead', {
    url: '/page433',
    views: {
      'tab3': {
        templateUrl: 'templates/headacheAtTheBackOfTheHead.html',
        controller: 'headacheAtTheBackOfTheHeadCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/headacheAtTheBackOfTheHead.html',
        controller: 'headacheAtTheBackOfTheHeadCtrl'
      }
    }
  })

  .state('homeopathy.headacheFromDelayingMeals', {
    url: '/page434',
    views: {
      'tab3': {
        templateUrl: 'templates/headacheFromDelayingMeals.html',
        controller: 'headacheFromDelayingMealsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/headacheFromDelayingMeals.html',
        controller: 'headacheFromDelayingMealsCtrl'
      }
    }
  })

  .state('headacheFromDelayingMeals2', {
    url: '/page435',
    templateUrl: 'templates/headacheFromDelayingMeals2.html',
    controller: 'headacheFromDelayingMeals2Ctrl'
  })

  .state('homeopathy.goutyToeWorsenedByTheSlightestMovement', {
    url: '/page428',
    views: {
      'tab3': {
        templateUrl: 'templates/goutyToeWorsenedByTheSlightestMovement.html',
        controller: 'goutyToeWorsenedByTheSlightestMovementCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/goutyToeWorsenedByTheSlightestMovement.html',
        controller: 'goutyToeWorsenedByTheSlightestMovementCtrl'
      }
    }
  })

  .state('homeopathy.goutyToeOther', {
    url: '/page429',
    views: {
      'tab3': {
        templateUrl: 'templates/goutyToeOther.html',
        controller: 'goutyToeOtherCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/goutyToeOther.html',
        controller: 'goutyToeOtherCtrl'
      }
    }
  })

  .state('homeopathy.earachesColdWeather', {
    url: '/page35',
    views: {
      'tab3': {
        templateUrl: 'templates/earachesColdWeather.html',
        controller: 'earachesColdWeatherCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/earachesColdWeather.html',
        controller: 'earachesColdWeatherCtrl'
      }
    }
  })

  .state('homeopathy.nosebleedsFromACold', {
    url: '/page40',
    views: {
      'tab3': {
        templateUrl: 'templates/nosebleedsFromACold.html',
        controller: 'nosebleedsFromAColdCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/nosebleedsFromACold.html',
        controller: 'nosebleedsFromAColdCtrl'
      }
    }
  })

  .state('homeopathy.nosebleedsFromTrauma', {
    url: '/page41',
    views: {
      'tab3': {
        templateUrl: 'templates/nosebleedsFromTrauma.html',
        controller: 'nosebleedsFromTraumaCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/nosebleedsFromTrauma.html',
        controller: 'nosebleedsFromTraumaCtrl'
      }
    }
  })

  .state('homeopathy.restlessSleepSleepwalking', {
    url: '/page44',
    views: {
      'tab3': {
        templateUrl: 'templates/restlessSleepSleepwalking.html',
        controller: 'restlessSleepSleepwalkingCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/restlessSleepSleepwalking.html',
        controller: 'restlessSleepSleepwalkingCtrl'
      }
    }
  })

  .state('homeopathy.crustyNostrilsFromThickGreenishDischarge', {
    url: '/page94',
    views: {
      'tab3': {
        templateUrl: 'templates/crustyNostrilsFromThickGreenishDischarge.html',
        controller: 'crustyNostrilsFromThickGreenishDischargeCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/crustyNostrilsFromThickGreenishDischarge.html',
        controller: 'crustyNostrilsFromThickGreenishDischargeCtrl'
      }
    }
  })

  .state('homeopathy.earCongestionImprovedBySwallowing', {
    url: '/page96',
    views: {
      'tab3': {
        templateUrl: 'templates/earCongestionImprovedBySwallowing.html',
        controller: 'earCongestionImprovedBySwallowingCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/earCongestionImprovedBySwallowing.html',
        controller: 'earCongestionImprovedBySwallowingCtrl'
      }
    }
  })

  .state('homeopathy.crustyNostrilsFromWateryDischarge', {
    url: '/page95',
    views: {
      'tab3': {
        templateUrl: 'templates/crustyNostrilsFromWateryDischarge.html',
        controller: 'crustyNostrilsFromWateryDischargeCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/crustyNostrilsFromWateryDischarge.html',
        controller: 'crustyNostrilsFromWateryDischargeCtrl'
      }
    }
  })

  .state('homeopathy.restlessSleepWithNightmares', {
    url: '/page45',
    views: {
      'tab3': {
        templateUrl: 'templates/restlessSleepWithNightmares.html',
        controller: 'restlessSleepWithNightmaresCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/restlessSleepWithNightmares.html',
        controller: 'restlessSleepWithNightmaresCtrl'
      }
    }
  })

  .state('homeopathy.restlessSleepProfuseSweating', {
    url: '/page46',
    views: {
      'tab3': {
        templateUrl: 'templates/restlessSleepProfuseSweating.html',
        controller: 'restlessSleepProfuseSweatingCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/restlessSleepProfuseSweating.html',
        controller: 'restlessSleepProfuseSweatingCtrl'
      }
    }
  })

  .state('homeopathy.nosebleedsSpontaneous', {
    url: '/page42',
    views: {
      'tab3': {
        templateUrl: 'templates/nosebleedsSpontaneous.html',
        controller: 'nosebleedsSpontaneousCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/nosebleedsSpontaneous.html',
        controller: 'nosebleedsSpontaneousCtrl'
      }
    }
  })

  .state('homeopathy.earachesTeething', {
    url: '/page36',
    views: {
      'tab3': {
        templateUrl: 'templates/earachesTeething.html',
        controller: 'earachesTeethingCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/earachesTeething.html',
        controller: 'earachesTeethingCtrl'
      }
    }
  })

  .state('homeopathy.earachesModerateFever', {
    url: '/page37',
    views: {
      'tab3': {
        templateUrl: 'templates/earachesModerateFever.html',
        controller: 'earachesModerateFeverCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/earachesModerateFever.html',
        controller: 'earachesModerateFeverCtrl'
      }
    }
  })

  .state('homeopathy.growingPains', {
    url: '/page38',
    views: {
      'tab3': {
        templateUrl: 'templates/growingPains.html',
        controller: 'growingPainsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/growingPains.html',
        controller: 'growingPainsCtrl'
      }
    }
  })

  .state('homeopathy.cradleCap', {
    url: '/page31',
    views: {
      'tab3': {
        templateUrl: 'templates/cradleCap.html',
        controller: 'cradleCapCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/cradleCap.html',
        controller: 'cradleCapCtrl'
      }
    }
  })

  .state('homeopathy.diaperRash', {
    url: '/page33',
    views: {
      'tab3': {
        templateUrl: 'templates/diaperRash.html',
        controller: 'diaperRashCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/diaperRash.html',
        controller: 'diaperRashCtrl'
      }
    }
  })

  .state('homeopathy.cold', {
    url: '/page32',
    views: {
      'tab3': {
        templateUrl: 'templates/cold.html',
        controller: 'coldCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/cold.html',
        controller: 'coldCtrl'
      }
    }
  })

  .state('homeopathy.feverDryAndHotSkin', {
    url: '/page101',
    views: {
      'tab3': {
        templateUrl: 'templates/feverDryAndHotSkin.html',
        controller: 'feverDryAndHotSkinCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/feverDryAndHotSkin.html',
        controller: 'feverDryAndHotSkinCtrl'
      }
    }
  })

  .state('runnyNoseGrayishDischarge', {
    url: '/page115',
    templateUrl: 'templates/runnyNoseGrayishDischarge.html',
    controller: 'runnyNoseGrayishDischargeCtrl'
  })

  .state('runnyNoseLingeringAfterColdOrFlu', {
    url: '/page116',
    templateUrl: 'templates/runnyNoseLingeringAfterColdOrFlu.html',
    controller: 'runnyNoseLingeringAfterColdOrFluCtrl'
  })

  .state('runnyNoseRunnyDuringDayDryAtNight', {
    url: '/page117',
    templateUrl: 'templates/runnyNoseRunnyDuringDayDryAtNight.html',
    controller: 'runnyNoseRunnyDuringDayDryAtNightCtrl'
  })

  .state('runnyNoseSneezingInTheMorning', {
    url: '/page118',
    templateUrl: 'templates/runnyNoseSneezingInTheMorning.html',
    controller: 'runnyNoseSneezingInTheMorningCtrl'
  })

  .state('homeopathy.stuffyNoseCloggedEars', {
    url: '/page136',
    views: {
      'tab3': {
        templateUrl: 'templates/stuffyNoseCloggedEars.html',
        controller: 'stuffyNoseCloggedEarsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/stuffyNoseCloggedEars.html',
        controller: 'stuffyNoseCloggedEarsCtrl'
      }
    }
  })

  .state('homeopathy.stuffyNoseThickGreenishDischarge', {
    url: '/page137',
    views: {
      'tab3': {
        templateUrl: 'templates/stuffyNoseThickGreenishDischarge.html',
        controller: 'stuffyNoseThickGreenishDischargeCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/stuffyNoseThickGreenishDischarge.html',
        controller: 'stuffyNoseThickGreenishDischargeCtrl'
      }
    }
  })

  .state('homeopathy.stuffyNoseTriggeredByDampnessAndCold', {
    url: '/page138',
    views: {
      'tab3': {
        templateUrl: 'templates/stuffyNoseTriggeredByDampnessAndCold.html',
        controller: 'stuffyNoseTriggeredByDampnessAndColdCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/stuffyNoseTriggeredByDampnessAndCold.html',
        controller: 'stuffyNoseTriggeredByDampnessAndColdCtrl'
      }
    }
  })

  .state('homeopathy.stuffyNoseOther', {
    url: '/page139',
    views: {
      'tab3': {
        templateUrl: 'templates/stuffyNoseOther.html',
        controller: 'stuffyNoseOtherCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/stuffyNoseOther.html',
        controller: 'stuffyNoseOtherCtrl'
      }
    }
  })

  .state('runnyNoseWateryDischarge', {
    url: '/page119',
    templateUrl: 'templates/runnyNoseWateryDischarge.html',
    controller: 'runnyNoseWateryDischargeCtrl'
  })

  .state('runnyNoseOther', {
    url: '/page120',
    templateUrl: 'templates/runnyNoseOther.html',
    controller: 'runnyNoseOtherCtrl'
  })

  .state('sinusPainPainAtTheBaseOfTheNoseBetweenTheEyes', {
    url: '/page121',
    templateUrl: 'templates/sinusPainPainAtTheBaseOfTheNoseBetweenTheEyes.html',
    controller: 'sinusPainPainAtTheBaseOfTheNoseBetweenTheEyesCtrl'
  })

  .state('runnyNose6Months', {
    url: '/page114',
    templateUrl: 'templates/runnyNose6Months.html',
    controller: 'runnyNose6MonthsCtrl'
  })

  .state('homeopathy.fluSymptoms', {
    url: '/page107',
    views: {
      
      'side-menu21': {
        templateUrl: 'templates/fluSymptoms.html',
        controller: 'fluSymptomsCtrl'
      }
    }
  })

  .state('homeopathy.feverImprovedByStayingImmobile', {
    url: '/page102',
    views: {
     
      'side-menu21': {
        templateUrl: 'templates/feverImprovedByStayingImmobile.html',
        controller: 'feverImprovedByStayingImmobileCtrl'
      }
    }
  })

  .state('homeopathy.feverWithExhaustion', {
    url: '/page103',
    views: {
      
      'side-menu21': {
        templateUrl: 'templates/feverWithExhaustion.html',
        controller: 'feverWithExhaustionCtrl'
      }
    }
  })

  .state('homeopathy.soreThroatFeelingOfSplinterInThroat', {
    url: '/page126',
    views: {
     
      'side-menu21': {
        templateUrl: 'templates/soreThroatFeelingOfSplinterInThroat.html',
        controller: 'soreThroatFeelingOfSplinterInThroatCtrl'
      }
    }
  })

  .state('homeopathy.soreThroatItchingPainImprovedByColdLiquids', {
    url: '/page127',
    views: {
      'side-menu21': {
        templateUrl: 'templates/soreThroatItchingPainImprovedByColdLiquids.html',
        controller: 'soreThroatItchingPainImprovedByColdLiquidsCtrl'
      }
    }
  })

  .state('homeopathy.soreThroatWithBadTasteInTheMouth', {
    url: '/page128',
    views: {
      'tab3': {
        templateUrl: 'templates/soreThroatWithBadTasteInTheMouth.html',
        controller: 'soreThroatWithBadTasteInTheMouthCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/soreThroatWithBadTasteInTheMouth.html',
        controller: 'soreThroatWithBadTasteInTheMouthCtrl'
      }
    }
  })

  .state('homeopathy.soreThroatWithCroupyCough', {
    url: '/page129',
    views: {
      'tab3': {
        templateUrl: 'templates/soreThroatWithCroupyCough.html',
        controller: 'soreThroatWithCroupyCoughCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/soreThroatWithCroupyCough.html',
        controller: 'soreThroatWithCroupyCoughCtrl'
      }
    }
  })

  .state('homeopathy.soreThroatWithExcessiveSalivation', {
    url: '/page130',
    views: {
      'tab3': {
        templateUrl: 'templates/soreThroatWithExcessiveSalivation.html',
        controller: 'soreThroatWithExcessiveSalivationCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/soreThroatWithExcessiveSalivation.html',
        controller: 'soreThroatWithExcessiveSalivationCtrl'
      }
    }
  })

  .state('homeopathy.soreThroatWithPainRadiatingToTheEars', {
    url: '/page131',
    views: {
      'tab3': {
        templateUrl: 'templates/soreThroatWithPainRadiatingToTheEars.html',
        controller: 'soreThroatWithPainRadiatingToTheEarsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/soreThroatWithPainRadiatingToTheEars.html',
        controller: 'soreThroatWithPainRadiatingToTheEarsCtrl'
      }
    }
  })

  .state('homeopathy.soreThroatWithPainWhenSwallowing', {
    url: '/page132',
    views: {
      'tab3': {
        templateUrl: 'templates/soreThroatWithPainWhenSwallowing.html',
        controller: 'soreThroatWithPainWhenSwallowingCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/soreThroatWithPainWhenSwallowing.html',
        controller: 'soreThroatWithPainWhenSwallowingCtrl'
      }
    }
  })

  .state('homeopathy.soreThroatWorseAtNight', {
    url: '/page133',
    views: {
      'tab3': {
        templateUrl: 'templates/soreThroatWorseAtNight.html',
        controller: 'soreThroatWorseAtNightCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/soreThroatWorseAtNight.html',
        controller: 'soreThroatWorseAtNightCtrl'
      }
    }
  })

  .state('homeopathy.soreThroatOther', {
    url: '/page134',
    views: {
      'tab3': {
        templateUrl: 'templates/soreThroatOther.html',
        controller: 'soreThroatOtherCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/soreThroatOther.html',
        controller: 'soreThroatOtherCtrl'
      }
    }
  })

  .state('homeopathy.lossOfSmellAndTaste', {
    url: '/page108',
    views: {
      'tab3': {
        templateUrl: 'templates/lossOfSmellAndTaste.html',
        controller: 'lossOfSmellAndTasteCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/lossOfSmellAndTaste.html',
        controller: 'lossOfSmellAndTasteCtrl'
      }
    }
  })

  .state('homeopathy.cankerSoreClearlyDelimited', {
    url: '/page142',
    views: {
      'tab3': {
        templateUrl: 'templates/cankerSoreClearlyDelimited.html',
        controller: 'cankerSoreClearlyDelimitedCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/cankerSoreClearlyDelimited.html',
        controller: 'cankerSoreClearlyDelimitedCtrl'
      }
    }
  })

  .state('homeopathy.cankerSoreDeep', {
    url: '/page143',
    views: {
      'tab3': {
        templateUrl: 'templates/cankerSoreDeep.html',
        controller: 'cankerSoreDeepCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/cankerSoreDeep.html',
        controller: 'cankerSoreDeepCtrl'
      }
    }
  })

  .state('homeopathy.cankerSoreInChildren', {
    url: '/page144',
    views: {
      'tab3': {
        templateUrl: 'templates/cankerSoreInChildren.html',
        controller: 'cankerSoreInChildrenCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/cankerSoreInChildren.html',
        controller: 'cankerSoreInChildrenCtrl'
      }
    }
  })

  .state('homeopathy.cankerSoreOnTheCheeks', {
    url: '/page145',
    views: {
      'tab3': {
        templateUrl: 'templates/cankerSoreOnTheCheeks.html',
        controller: 'cankerSoreOnTheCheeksCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/cankerSoreOnTheCheeks.html',
        controller: 'cankerSoreOnTheCheeksCtrl'
      }
    }
  })

  .state('homeopathy.cankerSoreSensitiveToHeatOrCold', {
    url: '/page147',
    views: {
      'tab3': {
        templateUrl: 'templates/cankerSoreSensitiveToHeatOrCold.html',
        controller: 'cankerSoreSensitiveToHeatOrColdCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/cankerSoreSensitiveToHeatOrCold.html',
        controller: 'cankerSoreSensitiveToHeatOrColdCtrl'
      }
    }
  })

  .state('homeopathy.cankerSoreWithBadTasteInTheMouth', {
    url: '/page146',
    views: {
      'tab3': {
        templateUrl: 'templates/cankerSoreWithBadTasteInTheMouth.html',
        controller: 'cankerSoreWithBadTasteInTheMouthCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/cankerSoreWithBadTasteInTheMouth.html',
        controller: 'cankerSoreWithBadTasteInTheMouthCtrl'
      }
    }
  })

  .state('homeopathy.moderateOrLowFever', {
    url: '/page109',
    views: {
      'tab3': {
        templateUrl: 'templates/moderateOrLowFever.html',
        controller: 'moderateOrLowFeverCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/moderateOrLowFever.html',
        controller: 'moderateOrLowFeverCtrl'
      }
    }
  })

  .state('homeopathy.postnasalDrip', {
    url: '/page110',
    views: {
      'tab3': {
        templateUrl: 'templates/postnasalDrip.html',
        controller: 'postnasalDripCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/postnasalDrip.html',
        controller: 'postnasalDripCtrl'
      }
    }
  })

  .state('homeopathy.feverWithHypersensitivityToLightAndNoise', {
    url: '/page104',
    views: {
      'tab3': {
        templateUrl: 'templates/feverWithHypersensitivityToLightAndNoise.html',
        controller: 'feverWithHypersensitivityToLightAndNoiseCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/feverWithHypersensitivityToLightAndNoise.html',
        controller: 'feverWithHypersensitivityToLightAndNoiseCtrl'
      }
    }
  })

  .state('homeopathy.acneOnTheForeheadAndTheBack', {
    url: '/page235',
    views: {
      'tab3': {
        templateUrl: 'templates/acneOnTheForeheadAndTheBack.html',
        controller: 'acneOnTheForeheadAndTheBackCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/acneOnTheForeheadAndTheBack.html',
        controller: 'acneOnTheForeheadAndTheBackCtrl'
      }
    }
  })

  .state('homeopathy.insectBitesChiggers', {
    url: '/page271',
    views: {
      'tab3': {
        templateUrl: 'templates/insectBitesChiggers.html',
        controller: 'insectBitesChiggersCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/insectBitesChiggers.html',
        controller: 'insectBitesChiggersCtrl'
      },
      
    }
  })

  .state('homeopathy.insectBitesMisquitoes', {
    url: '/page272',
    views: {
      'tab3': {
        templateUrl: 'templates/insectBitesMisquitoes.html',
        controller: 'insectBitesMisquitoesCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/insectBitesMisquitoes.html',
        controller: 'insectBitesMisquitoesCtrl'
      }
    }
  })

  .state('homeopathy.insectBitesSpiders', {
    url: '/page273',
    views: {
      'tab3': {
        templateUrl: 'templates/insectBitesSpiders.html',
        controller: 'insectBitesSpidersCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/insectBitesSpiders.html',
        controller: 'insectBitesSpidersCtrl'
      }
    }
  })

  .state('homeopathy.insectBitesWaspsBees', {
    url: '/page274',
    views: {
      'tab3': {
        templateUrl: 'templates/insectBitesWaspsBees.html',
        controller: 'insectBitesWaspsBeesCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/insectBitesWaspsBees.html',
        controller: 'insectBitesWaspsBeesCtrl'
      }
    }
  })

  .state('homeopathy.itchingAtNight', {
    url: '/page275',
    views: {
      'tab3': {
        templateUrl: 'templates/itchingAtNight.html',
        controller: 'itchingAtNightCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/itchingAtNight.html',
        controller: 'itchingAtNightCtrl'
      }
    }
  })

  .state('homeopathy.itchingFromSkinAllergy', {
    url: '/page296',
    views: {
      'tab3': {
        templateUrl: 'templates/itchingFromSkinAllergy.html',
        controller: 'itchingFromSkinAllergyCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/itchingFromSkinAllergy.html',
        controller: 'itchingFromSkinAllergyCtrl'
      }
    }
  })

  .state('homeopathy.itchingInElderlyPersons', {
    url: '/page297',
    views: {
      'tab3': {
        templateUrl: 'templates/itchingInElderlyPersons.html',
        controller: 'itchingInElderlyPersonsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/itchingInElderlyPersons.html',
        controller: 'itchingInElderlyPersonsCtrl'
      }
    }
  })

  .state('itchingNoneOfTheAbove', {
    url: '/page298',
    templateUrl: 'templates/itchingNoneOfTheAbove.html',
    controller: 'itchingNoneOfTheAboveCtrl'
  })

  .state('homeopathy.itchingOfSurgicalWounds', {
    url: '/page299',
    views: {
      'tab3': {
        templateUrl: 'templates/itchingOfSurgicalWounds.html',
        controller: 'itchingOfSurgicalWoundsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/itchingOfSurgicalWounds.html',
        controller: 'itchingOfSurgicalWoundsCtrl'
      }
    }
  })

  .state('homeopathy.itchingOfWarts', {
    url: '/page300',
    views: {
      'tab3': {
        templateUrl: 'templates/itchingOfWarts.html',
        controller: 'itchingOfWartsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/itchingOfWarts.html',
        controller: 'itchingOfWartsCtrl'
      }
    }
  })

  .state('homeopathy.itchingTriggeredByDampnessAndCold', {
    url: '/page301',
    views: {
      'tab3': {
        templateUrl: 'templates/itchingTriggeredByDampnessAndCold.html',
        controller: 'itchingTriggeredByDampnessAndColdCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/itchingTriggeredByDampnessAndCold.html',
        controller: 'itchingTriggeredByDampnessAndColdCtrl'
      }
    }
  })

  .state('homeopathy.itchingTriggeredByTheContactOfWool', {
    url: '/page302',
    views: {
      'tab3': {
        templateUrl: 'templates/itchingTriggeredByTheContactOfWool.html',
        controller: 'itchingTriggeredByTheContactOfWoolCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/itchingTriggeredByTheContactOfWool.html',
        controller: 'itchingTriggeredByTheContactOfWoolCtrl'
      }
    }
  })

  .state('homeopathy.itchingWhenUndressing', {
    url: '/page303',
    views: {
      'tab3': {
        templateUrl: 'templates/itchingWhenUndressing.html',
        controller: 'itchingWhenUndressingCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/itchingWhenUndressing.html',
        controller: 'itchingWhenUndressingCtrl'
      }
    }
  })

  .state('homeopathy.itchingWithBurningPain', {
    url: '/page304',
    views: {
      'tab3': {
        templateUrl: 'templates/itchingWithBurningPain.html',
        controller: 'itchingWithBurningPainCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/itchingWithBurningPain.html',
        controller: 'itchingWithBurningPainCtrl'
      }
    }
  })

  .state('homeopathy.itchingWorseWithHeatOrWater', {
    url: '/page305',
    views: {
      'tab3': {
        templateUrl: 'templates/itchingWorseWithHeatOrWater.html',
        controller: 'itchingWorseWithHeatOrWaterCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/itchingWorseWithHeatOrWater.html',
        controller: 'itchingWorseWithHeatOrWaterCtrl'
      }
    }
  })

  .state('poisonOakEtcRedItchySkin', {
    url: '/page308',
    templateUrl: 'templates/poisonOakEtcRedItchySkin.html',
    controller: 'poisonOakEtcRedItchySkinCtrl'
  })

  .state('poisonOakEtcWithBlisters', {
    url: '/page309',
    templateUrl: 'templates/poisonOakEtcWithBlisters.html',
    controller: 'poisonOakEtcWithBlistersCtrl'
  })

  .state('homeopathy.pricklyHeatMiliariaItchingIsWorsenedByContactWithWater', {
    url: '/page310',
    views: {
      'tab3': {
        templateUrl: 'templates/pricklyHeatMiliariaItchingIsWorsenedByContactWithWater.html',
        controller: 'pricklyHeatMiliariaItchingIsWorsenedByContactWithWaterCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/pricklyHeatMiliariaItchingIsWorsenedByContactWithWater.html',
        controller: 'pricklyHeatMiliariaItchingIsWorsenedByContactWithWaterCtrl'
      }
    }
  })

  .state('homeopathy.shinglesWithBluishWhiteVesicles', {
    url: '/page318',
    views: {
      'tab3': {
        templateUrl: 'templates/shinglesWithBluishWhiteVesicles.html',
        controller: 'shinglesWithBluishWhiteVesiclesCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/shinglesWithBluishWhiteVesicles.html',
        controller: 'shinglesWithBluishWhiteVesiclesCtrl'
      }
    }
  })

  .state('homeopathy.shinglesWithBurningAndLargeVesicles', {
    url: '/page319',
    views: {
      'tab3': {
        templateUrl: 'templates/shinglesWithBurningAndLargeVesicles.html',
        controller: 'shinglesWithBurningAndLargeVesiclesCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/shinglesWithBurningAndLargeVesicles.html',
        controller: 'shinglesWithBurningAndLargeVesiclesCtrl'
      }
    }
  })

  .state('homeopathy.shinglesWithItchingAndSmallClearVesicles', {
    url: '/page320',
    views: {
      'tab3': {
        templateUrl: 'templates/shinglesWithItchingAndSmallClearVesicles.html',
        controller: 'shinglesWithItchingAndSmallClearVesiclesCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/shinglesWithItchingAndSmallClearVesicles.html',
        controller: 'shinglesWithItchingAndSmallClearVesiclesCtrl'
      }
    }
  })

  .state('homeopathy.shinglesWorsenedByTouchOrJolts', {
    url: '/page321',
    views: {
      'tab3': {
        templateUrl: 'templates/shinglesWorsenedByTouchOrJolts.html',
        controller: 'shinglesWorsenedByTouchOrJoltsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/shinglesWorsenedByTouchOrJolts.html',
        controller: 'shinglesWorsenedByTouchOrJoltsCtrl'
      }
    }
  })

  .state('homeopathy.sunAllergyBeforeExposure', {
    url: '/page324',
    views: {
      'tab3': {
        templateUrl: 'templates/sunAllergyBeforeExposure.html',
        controller: 'sunAllergyBeforeExposureCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/sunAllergyBeforeExposure.html',
        controller: 'sunAllergyBeforeExposureCtrl'
      }
    }
  })

  .state('homeopathy.pricklyHeatMiliariaItchingWithHypersensitivityToTouch', {
    url: '/page311',
    views: {
      'tab3': {
        templateUrl: 'templates/pricklyHeatMiliariaItchingWithHypersensitivityToTouch.html',
        controller: 'pricklyHeatMiliariaItchingWithHypersensitivityToTouchCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/pricklyHeatMiliariaItchingWithHypersensitivityToTouch.html',
        controller: 'pricklyHeatMiliariaItchingWithHypersensitivityToTouchCtrl'
      }
    }
  })

  .state('homeopathy.itchingFromDrySkin', {
    url: '/page276',
    views: {
      'tab3': {
        templateUrl: 'templates/itchingFromDrySkin.html',
        controller: 'itchingFromDrySkinCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/itchingFromDrySkin.html',
        controller: 'itchingFromDrySkinCtrl'
      }
    }
  })

  .state('homeopathy.scarsFromBurns', {
    url: '/page312',
    views: {
      'tab3': {
        templateUrl: 'templates/scarsFromBurns.html',
        controller: 'scarsFromBurnsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/scarsFromBurns.html',
        controller: 'scarsFromBurnsCtrl'
      }
    }
  })

  .state('homeopathy.scarsFromChickepox', {
    url: '/page307',
    views: {
      'tab3': {
        templateUrl: 'templates/scarsFromChickepox.html',
        controller: 'scarsFromChickepoxCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/scarsFromChickepox.html',
        controller: 'scarsFromChickepoxCtrl'
      }
    }
  })

  .state('homeopathy.scarsFromSurgery', {
    url: '/page314',
    views: {
      'tab3': {
        templateUrl: 'templates/scarsFromSurgery.html',
        controller: 'scarsFromSurgeryCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/scarsFromSurgery.html',
        controller: 'scarsFromSurgeryCtrl'
      }
    }
  })

  .state('homeopathy.scarsPainfulScars', {
    url: '/page315',
    views: {
      'tab3': {
        templateUrl: 'templates/scarsPainfulScars.html',
        controller: 'scarsPainfulScarsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/scarsPainfulScars.html',
        controller: 'scarsPainfulScarsCtrl'
      }
    }  
  })

  .state('homeopathy.wartsAroundTheNails', {
    url: '/page316',
    views: {
      'tab3': {
        templateUrl: 'templates/wartsAroundTheNails.html',
        controller: 'wartsAroundTheNailsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/wartsAroundTheNails.html',
        controller: 'wartsAroundTheNailsCtrl'
      }
    }
  })

  .state('homeopathy.wartsFlatTranslucent', {
    url: '/page330',
    views: {
      'tab3': {
        templateUrl: 'templates/wartsFlatTranslucent.html',
        controller: 'wartsFlatTranslucentCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/wartsFlatTranslucent.html',
        controller: 'wartsFlatTranslucentCtrl'
      }
    }
  })

  .state('homeopathy.wartsHardCallousedWarts', {
    url: '/page331',
    views: {
      'tab3': {
        templateUrl: 'templates/wartsHardCallousedWarts.html',
        controller: 'wartsHardCallousedWartsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/wartsHardCallousedWarts.html',
        controller: 'wartsHardCallousedWartsCtrl'
      }
    }
  })

  .state('homeopathy.wartsOnTheFace', {
    url: '/page332',
    views: {
      'tab3': {
        templateUrl: 'templates/wartsOnTheFace.html',
        controller: 'wartsOnTheFaceCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/wartsOnTheFace.html',
        controller: 'wartsOnTheFaceCtrl'
      }
    }
  })

  .state('homeopathy.wartsSingleLargePlantarWart', {
    url: '/page333',
    views: {
      'tab3': {
        templateUrl: 'templates/wartsSingleLargePlantarWart.html',
        controller: 'wartsSingleLargePlantarWartCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/wartsSingleLargePlantarWart.html',
        controller: 'wartsSingleLargePlantarWartCtrl'
      }
    }
  })

  .state('homeopathy.wartsUnderTheNails', {
    url: '/page334',
    views: {
      'tab3': {
        templateUrl: 'templates/wartsUnderTheNails.html',
        controller: 'wartsUnderTheNailsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/wartsUnderTheNails.html',
        controller: 'wartsUnderTheNailsCtrl'
      }
    }
  })

  .state('homeopathy.sunburnPinkSkinItching', {
    url: '/page325',
    views: {
      'tab3': {
        templateUrl: 'templates/sunburnPinkSkinItching.html',
        controller: 'sunburnPinkSkinItchingCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/sunburnPinkSkinItching.html',
        controller: 'sunburnPinkSkinItchingCtrl'
      }
    }
  })

  .state('homeopathy.sunburnRedSkinItching', {
    url: '/page326',
    views: {
      'tab3': {
        templateUrl: 'templates/sunburnRedSkinItching.html',
        controller: 'sunburnRedSkinItchingCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/sunburnRedSkinItching.html',
        controller: 'sunburnRedSkinItchingCtrl'
      }
    }
  })

  .state('homeopathy.sunInducedSkinRash', {
    url: '/page327',
    views: {
      'tab3': {
        templateUrl: 'templates/sunInducedSkinRash.html',
        controller: 'sunInducedSkinRashCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/sunInducedSkinRash.html',
        controller: 'sunInducedSkinRashCtrl'
      }
    }
  })

  .state('homeopathy.turfBurn', {
    url: '/page328',
    views: {
      'tab3': {
        templateUrl: 'templates/turfBurn.html',
        controller: 'turfBurnCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/turfBurn.html',
        controller: 'turfBurnCtrl'
      }
    }
  })

  .state('homeopathy.scarsWithItching', {
    url: '/page317',
    views: {
      'tab3': {
        templateUrl: 'templates/scarsWithItching.html',
        controller: 'scarsWithItchingCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/scarsWithItching.html',
        controller: 'scarsWithItchingCtrl'
      }
    }
  })

  .state('homeopathy.scarsThickScars', {
    url: '/page335',
    views: {
      'tab3': {
        templateUrl: 'templates/scarsThickScars.html',
        controller: 'scarsThickScarsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/scarsThickScars.html',
        controller: 'scarsThickScarsCtrl'
      }
    }
  })

  .state('homeopathy.acnePustularAcne', {
    url: '/page246',
    views:{
      'tab3': {
        templateUrl: 'templates/acnePustularAcne.html',
        controller: 'acnePustularAcneCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/acnePustularAcne.html',
        controller: 'acnePustularAcneCtrl'
      }
    }
  })

  .state('homeopathy.acneOther', {
    url: '/page247',
    views: {
      'tab3': {
        templateUrl: 'templates/acneOther.html',
        controller: 'acneOtherCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/acneOther.html',
        controller: 'acneOtherCtrl'
      }
    }
  })

  .state('homeopathy.blisters', {
    url: '/page250',
    views: {
      'tab3': {
        templateUrl: 'templates/blisters.html',
        controller: 'blistersCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/blisters.html',
        controller: 'blistersCtrl'
      }
    }
  })

  .state('homeopathy.burnsBlisters', {
    url: '/page251',
    views: {
      'tab3': {
        templateUrl: 'templates/burnsBlisters.html',
        controller: 'burnsBlistersCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/burnsBlisters.html',
        controller: 'burnsBlistersCtrl'
      }
    }
  })

  .state('homeopathy.burnsPinkSkinItching', {
    url: '/page252',
    views: {
      'tab3': {
        templateUrl: 'templates/burnsPinkSkinItching.html',
        controller: 'burnsPinkSkinItchingCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/burnsPinkSkinItching.html',
        controller: 'burnsPinkSkinItchingCtrl'
      }
    }
  })

  .state('homeopathy.burnsRedSkinBurning', {
    url: '/page253',
    views: {
      'tab3': {
        templateUrl: 'templates/burnsRedSkinBurning.html',
        controller: 'burnsRedSkinBurningCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/burnsRedSkinBurning.html',
        controller: 'burnsRedSkinBurningCtrl'
      }
    }
  })

  .state('homeopathy.chappedLipsOnLowerLipsWithDryLips', {
    url: '/page254',
    views: {
      'tab3': {
        templateUrl: 'templates/chappedLipsOnLowerLipsWithDryLips.html',
        controller: 'chappedLipsOnLowerLipsWithDryLipsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/chappedLipsOnLowerLipsWithDryLips.html',
        controller: 'chappedLipsOnLowerLipsWithDryLipsCtrl'
      }
    }
  })

  .state('homeopathy.chappedLipsPerleche', {
    url: '/page255',
    views: {
      'tab3': {
        templateUrl: 'templates/chappedLipsPerleche.html',
        controller: 'chappedLipsPerlecheCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/chappedLipsPerleche.html',
        controller: 'chappedLipsPerlecheCtrl'
      }
    }
  })

  .state('homeopathy.coldSoresCrustStage', {
    url: '/page256',
    views: {
      'tab3': {
        templateUrl: 'templates/coldSoresCrustStage.html',
        controller: 'coldSoresCrustStageCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/coldSoresCrustStage.html',
        controller: 'coldSoresCrustStageCtrl'
      }
    }
  })

  .state('homeopathy.coldSoresOnset', {
    url: '/page257',
    views: {
      'tab3': {
        templateUrl: 'templates/coldSoresOnset.html',
        controller: 'coldSoresOnsetCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/coldSoresOnset.html',
        controller: 'coldSoresOnsetCtrl'
      }
    }
  })

  .state('homeopathy.coldSoresSmallBlisters', {
    url: '/page258',
    views: {
      'tab3': {
        templateUrl: 'templates/coldSoresSmallBlisters.html',
        controller: 'coldSoresSmallBlistersCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/coldSoresSmallBlisters.html',
        controller: 'coldSoresSmallBlistersCtrl'
      }
    }
  })

  .state('homeopathy.fissuresCrackedSkin', {
    url: '/page259',
    views: {
      'tab3': {
        templateUrl: 'templates/fissuresCrackedSkin.html',
        controller: 'fissuresCrackedSkinCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/fissuresCrackedSkin.html',
        controller: 'fissuresCrackedSkinCtrl'
      }
    }
  })

  .state('homeopathy.smallWoundsFromASharpObject', {
    url: '/page322',
    views: {
      'tab3': {
        templateUrl: 'templates/smallWoundsFromASharpObject.html',
        controller: 'smallWoundsFromASharpObjectCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/smallWoundsFromASharpObject.html',
        controller: 'smallWoundsFromASharpObjectCtrl'
      }
    }
  })

  .state('homeopathy.smallWoundsPunctureWounds', {
    url: '/page323',
    views: {
      'tab3': {
        templateUrl: 'templates/smallWoundsPunctureWounds.html',
        controller: 'smallWoundsPunctureWoundsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/smallWoundsPunctureWounds.html',
        controller: 'smallWoundsPunctureWoundsCtrl'
      }
    }
  })

  .state('homeopathy.fissuresFingers', {
    url: '/page260',
    views: {
      'tab3': {
        templateUrl: 'templates/fissuresFingers.html',
        controller: 'fissuresFingersCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/fissuresFingers.html',
        controller: 'fissuresFingersCtrl'
      }
    }
  })

  .state('homeopathy.fissuresThinPainfulBleedingEasily', {
    url: '/page261',
    views: {
      'tab3': {
        templateUrl: 'templates/fissuresThinPainfulBleedingEasily.html',
        controller: 'fissuresThinPainfulBleedingEasilyCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/fissuresThinPainfulBleedingEasily.html',
        controller: 'fissuresThinPainfulBleedingEasilyCtrl'
      }
    }
  })

  .state('homeopathy.fissuresWithOozingAndDryCrustySkin', {
    url: '/page262',
    views: {
      'tab3': {
        templateUrl: 'templates/fissuresWithOozingAndDryCrustySkin.html',
        controller: 'fissuresWithOozingAndDryCrustySkinCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/fissuresWithOozingAndDryCrustySkin.html',
        controller: 'fissuresWithOozingAndDryCrustySkinCtrl'
      }
    }
  })

  .state('homeopathy.boilsOnsetOfBoils', {
    url: '/page263',
    views: {
      'tab3': {
        templateUrl: 'templates/boilsOnsetOfBoils.html',
        controller: 'boilsOnsetOfBoilsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/boilsOnsetOfBoils.html',
        controller: 'boilsOnsetOfBoilsCtrl'
      }
    }
  })

  .state('homeopathy.boilsRecurrentBoils', {
    url: '/page264',
    views: {
      'tab3': {
        templateUrl: 'templates/boilsRecurrentBoils.html',
        controller: 'boilsRecurrentBoilsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/boilsRecurrentBoils.html',
        controller: 'boilsRecurrentBoilsCtrl'
      }
    }
  })

  .state('homeopathy.boilsOther', {
    url: '/page265',
    views: {
      'tab3': {
        templateUrl: 'templates/boilsOther.html',
        controller: 'boilsOtherCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/boilsOther.html',
        controller: 'boilsOtherCtrl'
      }
    }
  })

  .state('homeopathy.frostnipBurning', {
    url: '/page266',
    views: {
      'tab3': {
        templateUrl: 'templates/frostnipBurning.html',
        controller: 'frostnipBurningCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/frostnipBurning.html',
        controller: 'frostnipBurningCtrl'
      }
    }
  })

  .state('homeopathy.frostnipItchingAtNight', {
    url: '/page267',
    views: {
      'tab3': {
        templateUrl: 'templates/frostnipItchingAtNight.html',
        controller: 'frostnipItchingAtNightCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/frostnipItchingAtNight.html',
        controller: 'frostnipItchingAtNightCtrl'
      }
    }
  })

  .state('homeopathy.frostnipSwollen', {
    url: '/page268',
    views: {
      'tab3': {
        templateUrl: 'templates/frostnipSwollen.html',
        controller: 'frostnipSwollenCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/frostnipSwollen.html',
        controller: 'frostnipSwollenCtrl'
      }
    }
  })

  .state('homeopathy.fromGriefAngerOrVexation', {
    url: '/page269',
    views: {
      'tab3': {
        templateUrl: 'templates/fromGriefAngerOrVexation.html',
        controller: 'fromGriefAngerOrVexationCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/fromGriefAngerOrVexation.html',
        controller: 'fromGriefAngerOrVexationCtrl'
      }
    }
  })

  .state('homeopathy.withDigestiveProblems', {
    url: '/page481',
    views: {
      'tab3': {
        templateUrl: 'templates/withDigestiveProblems.html',
        controller: 'withDigestiveProblemsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/withDigestiveProblems.html',
        controller: 'withDigestiveProblemsCtrl'
      }
    }
  })

  .state('homeopathy.fromPhysicalOverexertionOrStressfulEmotions', {
    url: '/page478',
    views: {
      'tab3': {
        templateUrl: 'templates/fromPhysicalOverexertionOrStressfulEmotions.html',
        controller: 'fromPhysicalOverexertionOrStressfulEmotionsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/fromPhysicalOverexertionOrStressfulEmotions.html',
        controller: 'fromPhysicalOverexertionOrStressfulEmotionsCtrl'
      }
    }
  })

  .state('homeopathy.headacheFromStress', {
    url: '/page439',
    views: {
      'tab3': {
        templateUrl: 'templates/headacheFromStress.html',
        controller: 'headacheFromStressCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/headacheFromStress.html',
        controller: 'headacheFromStressCtrl'
      }
    }
  })

  .state('homeopathy.apprehensionAggravatedByEmotion', {
    url: '/page457',
    views: {
      'tab3': {
        templateUrl: 'templates/apprehensionAggravatedByEmotion.html',
        controller: 'apprehensionAggravatedByEmotionCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/apprehensionAggravatedByEmotion.html',
        controller: 'apprehensionAggravatedByEmotionCtrl'
      }
    }
  })

  .state('homeopathy.apprehensionHurriednessFromStress', {
    url: '/page458',
    views: {
      'tab3': {
        templateUrl: 'templates/apprehensionHurriednessFromStress.html',
        controller: 'apprehensionHurriednessFromStressCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/apprehensionHurriednessFromStress.html',
        controller: 'apprehensionHurriednessFromStressCtrl'
      }
    }
  })

  .state('apprehensionHurriednessFromStress2', {
    url: '/page459',
    templateUrl: 'templates/apprehensionHurriednessFromStress2.html',
    controller: 'apprehensionHurriednessFromStress2Ctrl'
  })

  .state('apprehensionWithLackOfMemory', {
    url: '/page460',
    templateUrl: 'templates/apprehensionWithLackOfMemory.html',
    controller: 'apprehensionWithLackOfMemoryCtrl'
  })

  .state('apprehensionWithGeneralWeakness', {
    url: '/page472',
    templateUrl: 'templates/apprehensionWithGeneralWeakness.html',
    controller: 'apprehensionWithGeneralWeaknessCtrl'
  })

  .state('homeopathy.apprehensionWithStomachaches', {
    url: '/page461',
    views: {
      'tab3': {
        templateUrl: 'templates/apprehensionWithStomachaches.html',
        controller: 'apprehensionWithStomachachesCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/apprehensionWithStomachaches.html',
        controller: 'apprehensionWithStomachachesCtrl'
      }
    }
  })

  .state('apprehensionWithBelching', {
    url: '/page473',
    templateUrl: 'templates/apprehensionWithBelching.html',
    controller: 'apprehensionWithBelchingCtrl'
  })

  .state('homeopathy.apprehensionWithGeneralWeakness2', {
    url: '/page463',
    views: {
      'tab3': {
        templateUrl: 'templates/apprehensionWithGeneralWeakness2.html',
        controller: 'apprehensionWithGeneralWeakness2Ctrl'
      },
      'side-menu21': {
        templateUrl: 'templates/apprehensionWithGeneralWeakness2.html',
        controller: 'apprehensionWithGeneralWeakness2Ctrl'
      }
    }
  })

  .state('homeopathy.stageFright', {
    url: '/page468',
    views: {
      'tab3': {
        templateUrl: 'templates/stageFright.html',
        controller: 'stageFrightCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/stageFright.html',
        controller: 'stageFrightCtrl'
      }
    }
  })

  .state('homeopathy.apprehensionWithTrembling', {
    url: '/page480',
    views: {
      'tab3': {
        templateUrl: 'templates/apprehensionWithTrembling.html',
        controller: 'apprehensionWithTremblingCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/apprehensionWithTrembling.html',
        controller: 'apprehensionWithTremblingCtrl'
      }
    }
  })

  .state('homeopathy.apprehensionWithLackOfMemory2', {
    url: '/page467',
    views: {
      'tab3': {
        templateUrl: 'templates/apprehensionWithLackOfMemory2.html',
        controller: 'apprehensionWithLackOfMemory2Ctrl'
      },
      'side-menu21': {
        templateUrl: 'templates/apprehensionWithLackOfMemory2.html',
        controller: 'apprehensionWithLackOfMemory2Ctrl'
      }
    }
  })

  .state('homeopathy.apprehensionWithBelching2', {
    url: '/page464',
    views: {
      'tab3': {
        templateUrl: 'templates/apprehensionWithBelching2.html',
        controller: 'apprehensionWithBelching2Ctrl'
      },
      'side-menu21': {
        templateUrl: 'templates/apprehensionWithBelching2.html',
        controller: 'apprehensionWithBelching2Ctrl'
      }
    }
  })

  .state('apprehensionImprovedByDistraction', {
    url: '/page462',
    templateUrl: 'templates/apprehensionImprovedByDistraction.html',
    controller: 'apprehensionImprovedByDistractionCtrl'
  })

  .state('homeopathy.apprehensionLumpInTheThroat', {
    url: '/page466',
    views: {
      'tab3': {
        templateUrl: 'templates/apprehensionLumpInTheThroat.html',
        controller: 'apprehensionLumpInTheThroatCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/apprehensionLumpInTheThroat.html',
        controller: 'apprehensionLumpInTheThroatCtrl'
      }
    }
  })

  .state('homeopathy.apprehensionHypersensitivityToStress', {
    url: '/page465',
    views: {
      'tab3': {
        templateUrl: 'templates/apprehensionHypersensitivityToStress.html',
        controller: 'apprehensionHypersensitivityToStressCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/apprehensionHypersensitivityToStress.html',
        controller: 'apprehensionHypersensitivityToStressCtrl'
      }
    }
  })

  .state('hairLossFromPhysicalOverexertionOrStressfulEmotions', {
    url: '/page270',
    templateUrl: 'templates/hairLossFromPhysicalOverexertionOrStressfulEmotions.html',
    controller: 'hairLossFromPhysicalOverexertionOrStressfulEmotionsCtrl'
  })

  .state('homeopathy.athleteSFootWithItching', {
    url: '/page248',
    views: {
      'tab3': {
        templateUrl: 'templates/athleteSFootWithItching.html',
        controller: 'athleteSFootWithItchingCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/athleteSFootWithItching.html',
        controller: 'athleteSFootWithItchingCtrl'
      }
    }
  })

  .state('homeopathy.athleteSFootWithOozing', {
    url: '/page249',
    views: {
      'tab3': {
        templateUrl: 'templates/athleteSFootWithOozing.html',
        controller: 'athleteSFootWithOozingCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/athleteSFootWithOozing.html',
        controller: 'athleteSFootWithOozingCtrl'
      }
    }
  })

  .state('homeopathy.feverWithProfuseSweating', {
    url: '/page105',
    views: {
      'tab3': {
        templateUrl: 'templates/feverWithProfuseSweating.html',
        controller: 'feverWithProfuseSweatingCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/feverWithProfuseSweating.html',
        controller: 'feverWithProfuseSweatingCtrl'
      }
    }
  })

  .state('homeopathy.feverWithRestlessness', {
    url: '/page106',
    views: {
      'tab3': {
        templateUrl: 'templates/feverWithRestlessness.html',
        controller: 'feverWithRestlessnessCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/feverWithRestlessness.html',
        controller: 'feverWithRestlessnessCtrl'
      }
    }
  })

  .state('homeopathy.coldOrFlu', {
    url: '/page72',
    views: {
      'tab3': {
        templateUrl: 'templates/coldOrFlu.html',
        controller: 'coldOrFluCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/coldOrFlu.html',
        controller: 'coldOrFluCtrl'
      }
    }
  })

  .state('homeopathy.barkingCough', {
    url: '/page77',
    views: {
      'tab3': {
        templateUrl: 'templates/barkingCough.html',
        controller: 'barkingCoughCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/barkingCough.html',
        controller: 'barkingCoughCtrl'
      }
    }
  })

  .state('homeopathy.chestCongestion', {
    url: '/page206',
    views: {
      'tab3': {
        templateUrl: 'templates/chestCongestion.html',
        controller: 'chestCongestionCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/chestCongestion.html',
        controller: 'chestCongestionCtrl'
      }
    }
  })

  .state('homeopathy.coughTriggeredByColdAir', {
    url: '/page78',
    views: {
      'tab3': {
        templateUrl: 'templates/coughTriggeredByColdAir.html',
        controller: 'coughTriggeredByColdAirCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/coughTriggeredByColdAir.html',
        controller: 'coughTriggeredByColdAirCtrl'
      }
    }
  })

  .state('homeopathy.fitfulCoughHypersalivation', {
    url: '/page85',
    views: {
      'tab3': {
        templateUrl: 'templates/fitfulCoughHypersalivation.html',
        controller: 'fitfulCoughHypersalivationCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/fitfulCoughHypersalivation.html',
        controller: 'fitfulCoughHypersalivationCtrl'
      }
    }
  })

  .state('homeopathy.hypersalivation', {
    url: '/page218',
    views: {
      'tab3': {
        templateUrl: 'templates/hypersalivation.html',
        controller: 'hypersalivationCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/hypersalivation.html',
        controller: 'hypersalivationCtrl'
      }
    }
  })

  .state('homeopathy.improvedByEating', {
    url: '/page219',
    views: {
      'tab3': {
        templateUrl: 'templates/improvedByEating.html',
        controller: 'improvedByEatingCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/improvedByEating.html',
        controller: 'improvedByEatingCtrl'
      }
    }
  })

  .state('homeopathy.inBoats', {
    url: '/page380',
    views: {
      'tab3': {
        templateUrl: 'templates/inBoats.html',
        controller: 'inBoatsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/inBoats.html',
        controller: 'inBoatsCtrl'
      }
    }
  })

  .state('homeopathy.inThePassengerSeat', {
    url: '/page381',
    views: {
      'tab3': {
        templateUrl: 'templates/inThePassengerSeat.html',
        controller: 'inThePassengerSeatCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/inThePassengerSeat.html',
        controller: 'inThePassengerSeatCtrl'
      }
    }
  })

  .state('homeopathy.relievedByHeat', {
    url: '/page382',
    views: {
      'tab3': {
        templateUrl: 'templates/relievedByHeat.html',
        controller: 'relievedByHeatCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/relievedByHeat.html',
        controller: 'relievedByHeatCtrl'
      }
    }
  })

  .state('relievedByHeat2', {
    url: '/page383',
    templateUrl: 'templates/relievedByHeat2.html',
    controller: 'relievedByHeat2Ctrl'
  })

  .state('homeopathy.improvedByFreshAir', {
    url: '/page220',
    views: {
      'tab3': {
        templateUrl: 'templates/improvedByFreshAir.html',
        controller: 'improvedByFreshAirCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/improvedByFreshAir.html',
        controller: 'improvedByFreshAirCtrl'
      }
    }
  })

  .state('homeopathy.feelingIcyCold', {
    url: '/page373',
    views: {
      'tab3': {
        templateUrl: 'templates/feelingIcyCold.html',
        controller: 'feelingIcyColdCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/feelingIcyCold.html',
        controller: 'feelingIcyColdCtrl'
      }
    }
  })

  .state('homeopathy.inAirplanes', {
    url: '/page374',
    views: {
      'tab3': {
        templateUrl: 'templates/inAirplanes.html',
        controller: 'inAirplanesCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/inAirplanes.html',
        controller: 'inAirplanesCtrl'
      }
    }
  })

  .state('homeopathy.weakness', {
    url: '/page221',
    views: {
      'tab3': {
        templateUrl: 'templates/weakness.html',
        controller: 'weaknessCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/weakness.html',
        controller: 'weaknessCtrl'
      }
    }
  })

  .state('homeopathy.withCleanTongue', {
    url: '/page222',
    views: {
      'tab3': {
        templateUrl: 'templates/withCleanTongue.html',
        controller: 'withCleanTongueCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/withCleanTongue.html',
        controller: 'withCleanTongueCtrl'
      }
    }
  })

  .state('homeopathy.withPainfulCramps', {
    url: '/page223',
    views: {
      'tab3': {
        templateUrl: 'templates/withPainfulCramps.html',
        controller: 'withPainfulCrampsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/withPainfulCramps.html',
        controller: 'withPainfulCrampsCtrl'
      }
    }
  })

  .state('homeopathy.bleedingGumsWithABadTasteInTheMouth', {
    url: '/page384',
    views: {
      'tab3': {
        templateUrl: 'templates/bleedingGumsWithABadTasteInTheMouth.html',
        controller: 'bleedingGumsWithABadTasteInTheMouthCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/bleedingGumsWithABadTasteInTheMouth.html',
        controller: 'bleedingGumsWithABadTasteInTheMouthCtrl'
      }
    }
  })

  .state('homeopathy.bleedingGumsOther', {
    url: '/page385',
    views: {
      'tab3': {
        templateUrl: 'templates/bleedingGumsOther.html',
        controller: 'bleedingGumsOtherCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/bleedingGumsOther.html',
        controller: 'bleedingGumsOtherCtrl'
      }
    }
  })

  .state('homeopathy.toothExtraction', {
    url: '/page386',
    views: {
      'tab3': {
        templateUrl: 'templates/toothExtraction.html',
        controller: 'toothExtractionCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/toothExtraction.html',
        controller: 'toothExtractionCtrl'
      }
    }
  })

  .state('homeopathy.hiccupsAfterALargeMeal', {
    url: '/page192',
    views: {
      'tab3': {
        templateUrl: 'templates/hiccupsAfterALargeMeal.html',
        controller: 'hiccupsAfterALargeMealCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/hiccupsAfterALargeMeal.html',
        controller: 'hiccupsAfterALargeMealCtrl'
      }
    }
  })

  .state('homeopathy.jetLagDrowsiness', {
    url: '/page202',
    views: {
      'tab3': {
        templateUrl: 'templates/jetLagDrowsiness.html',
        controller: 'jetLagDrowsinessCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/jetLagDrowsiness.html',
        controller: 'jetLagDrowsinessCtrl'
      }
    }
  })

  .state('homeopathy.jetLagMusclePain', {
    url: '/page203',
    views: {
      'tab3': {
        templateUrl: 'templates/jetLagMusclePain.html',
        controller: 'jetLagMusclePainCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/jetLagMusclePain.html',
        controller: 'jetLagMusclePainCtrl'
      }
    }
  })

  .state('homeopathy.jetLagSleepPatternDisturbances', {
    url: '/page204',
    views: {
      'tab3': {
        templateUrl: 'templates/jetLagSleepPatternDisturbances.html',
        controller: 'jetLagSleepPatternDisturbancesCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/jetLagSleepPatternDisturbances.html',
        controller: 'jetLagSleepPatternDisturbancesCtrl'
      }
    }
  })

  .state('homeopathy.restlessSleep', {
    url: '/page479',
    views: {
      'tab3': {
        templateUrl: 'templates/restlessSleep.html',
        controller: 'restlessSleepCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/restlessSleep.html',
        controller: 'restlessSleepCtrl'
      }
    }
  })

  .state('homeopathy.jetLagOther', {
    url: '/page205',
    views: {
      'tab3': {
        templateUrl: 'templates/jetLagOther.html',
        controller: 'jetLagOtherCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/jetLagOther.html',
        controller: 'jetLagOtherCtrl'
      }
    }
  })

  .state('homeopathy.hiccupsImprovedByDrinkingColdWater', {
    url: '/page193',
    views: {
      'tab3': {
        templateUrl: 'templates/hiccupsImprovedByDrinkingColdWater.html',
        controller: 'hiccupsImprovedByDrinkingColdWaterCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/hiccupsImprovedByDrinkingColdWater.html',
        controller: 'hiccupsImprovedByDrinkingColdWaterCtrl'
      }
    }
  })

  .state('homeopathy.hiccupsPainful', {
    url: '/page194',
    views: {
      'tab3': {
        templateUrl: 'templates/hiccupsPainful.html',
        controller: 'hiccupsPainfulCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/hiccupsPainful.html',
        controller: 'hiccupsPainfulCtrl'
      }
    }
  })

  .state('homeopathy.hiccupsTriggeredByStress', {
    url: '/page195',
    views: {
      'tab3': {
        templateUrl: 'templates/hiccupsTriggeredByStress.html',
        controller: 'hiccupsTriggeredByStressCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/hiccupsTriggeredByStress.html',
        controller: 'hiccupsTriggeredByStressCtrl'
      }
    }
  })

  .state('homeopathy.indigestionImprovedByWarmApplicationsToTheAbdomen', {
    url: '/page197',
    views: {
      'tab3': {
        templateUrl: 'templates/indigestionImprovedByWarmApplicationsToTheAbdomen.html',
        controller: 'indigestionImprovedByWarmApplicationsToTheAbdomenCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/indigestionImprovedByWarmApplicationsToTheAbdomen.html',
        controller: 'indigestionImprovedByWarmApplicationsToTheAbdomenCtrl'
      }
    }
  })

  .state('homeopathy.indigestionWhiteCoveredTongue', {
    url: '/page198',
    views: {
      'tab3': {
        templateUrl: 'templates/indigestionWhiteCoveredTongue.html',
        controller: 'indigestionWhiteCoveredTongueCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/indigestionWhiteCoveredTongue.html',
        controller: 'indigestionWhiteCoveredTongueCtrl'
      }
    }
  })

  .state('homeopathy.headacheFromIndigestion', {
    url: '/page436',
    views: {
      'tab3': {
        templateUrl: 'templates/headacheFromIndigestion.html',
        controller: 'headacheFromIndigestionCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/headacheFromIndigestion.html',
        controller: 'headacheFromIndigestionCtrl'
      }
    }
  })

  .state('homeopathy.indigestionWithPainInTheGallbladderArea', {
    url: '/page199',
    views: {
      'tab3': {
        templateUrl: 'templates/indigestionWithPainInTheGallbladderArea.html',
        controller: 'indigestionWithPainInTheGallbladderAreaCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/indigestionWithPainInTheGallbladderArea.html',
        controller: 'indigestionWithPainInTheGallbladderAreaCtrl'
      }
    }
  })

  .state('homeopathy.indigestionWithPainUnderTheRightShoulder', {
    url: '/page200',
    views: {
      'tab3': {
        templateUrl: 'templates/indigestionWithPainUnderTheRightShoulder.html',
        controller: 'indigestionWithPainUnderTheRightShoulderCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/indigestionWithPainUnderTheRightShoulder.html',
        controller: 'indigestionWithPainUnderTheRightShoulderCtrl'
      }
    }
  })

  .state('homeopathy.fitfulCoughWithNausea', {
    url: '/page86',
    views: {
      'tab3': {
        templateUrl: 'templates/fitfulCoughWithNausea.html',
        controller: 'fitfulCoughWithNauseaCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/fitfulCoughWithNausea.html',
        controller: 'fitfulCoughWithNauseaCtrl'
      }
    }
  })

  .state('homeopathy.coughWorseAtNight', {
    url: '/page79',
    views: {
      'tab3': {
        templateUrl: 'templates/coughWorseAtNight.html',
        controller: 'coughWorseAtNightCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/coughWorseAtNight.html',
        controller: 'coughWorseAtNightCtrl'
      }
    }
  })

  .state('homeopathy.coughWorseInBed', {
    url: '/page80',
    views: {
      'tab3': {
        templateUrl: 'templates/coughWorseInBed.html',
        controller: 'coughWorseInBedCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/coughWorseInBed.html',
        controller: 'coughWorseInBedCtrl'
      }
    }
  })

  .state('homeopathy.hoarsenessFromVoiceExertion', {
    url: '/page88',
    views: {
      'tab3': {
        templateUrl: 'templates/hoarsenessFromVoiceExertion.html',
        controller: 'hoarsenessFromVoiceExertionCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/hoarsenessFromVoiceExertion.html',
        controller: 'hoarsenessFromVoiceExertionCtrl'
      }
    }
  })

  .state('homeopathy.hoarsenessWhenStartingToSpeak', {
    url: '/page89',
    views: {
      'tab3': {
        templateUrl: 'templates/hoarsenessWhenStartingToSpeak.html',
        controller: 'hoarsenessWhenStartingToSpeakCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/hoarsenessWhenStartingToSpeak.html',
        controller: 'hoarsenessWhenStartingToSpeakCtrl'
      }
    }
  })

  .state('homeopathy.hoarsenessWithBitonalVoice', {
    url: '/page90',
    views: {
      'tab3': {
        templateUrl: 'templates/hoarsenessWithBitonalVoice.html',
        controller: 'hoarsenessWithBitonalVoiceCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/hoarsenessWithBitonalVoice.html',
        controller: 'hoarsenessWithBitonalVoiceCtrl'
      }
    }
  })

  .state('homeopathy.hoarsenessWithCroupyCough', {
    url: '/page91',
    views: {
      'tab3': {
        templateUrl: 'templates/hoarsenessWithCroupyCough.html',
        controller: 'hoarsenessWithCroupyCoughCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/hoarsenessWithCroupyCough.html',
        controller: 'hoarsenessWithCroupyCoughCtrl'
      }
    }
  })

  .state('homeopathy.hoarsenessWorseWithHumidity', {
    url: '/page92',
    views: {
      'tab3': {
        templateUrl: 'templates/hoarsenessWorseWithHumidity.html',
        controller: 'hoarsenessWorseWithHumidityCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/hoarsenessWorseWithHumidity.html',
        controller: 'hoarsenessWorseWithHumidityCtrl'
      }
    }
  })

  .state('homeopathy.lossOfVoice', {
    url: '/page207',
    views: {
      'tab3': {
        templateUrl: 'templates/lossOfVoice.html',
        controller: 'lossOfVoiceCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/lossOfVoice.html',
        controller: 'lossOfVoiceCtrl'
      }
    }
  })

  .state('homeopathy.coughWorseWhenSpeaking', {
    url: '/page81',
    views: {
      'tab3': {
        templateUrl: 'templates/coughWorseWhenSpeaking.html',
        controller: 'coughWorseWhenSpeakingCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/coughWorseWhenSpeaking.html',
        controller: 'coughWorseWhenSpeakingCtrl'
      }
    }
  })

  .state('homeopathy.coldSoresCrustStage2', {
    url: '/page149',
    views: {
      'tab3': {
        templateUrl: 'templates/coldSoresCrustStage2.html',
        controller: 'coldSoresCrustStage2Ctrl'
      },
      'side-menu21': {
        templateUrl: 'templates/coldSoresCrustStage2.html',
        controller: 'coldSoresCrustStage2Ctrl'
      }
    }
  })

  .state('homeopathy.coldSoresOnset2', {
    url: '/page150',
    views: {
      'tab3': {
        templateUrl: 'templates/coldSoresOnset2.html',
        controller: 'coldSoresOnset2Ctrl'
      },
      'side-menu21': {
        templateUrl: 'templates/coldSoresOnset2.html',
        controller: 'coldSoresOnset2Ctrl'
      }
    }
  })

  .state('homeopathy.coldSoresSmallBlisters2', {
    url: '/page151',
    views: {
      'tab3': {
        templateUrl: 'templates/coldSoresSmallBlisters2.html',
        controller: 'coldSoresSmallBlisters2Ctrl'
      },
      'side-menu21': {
        templateUrl: 'templates/coldSoresSmallBlisters2.html',
        controller: 'coldSoresSmallBlisters2Ctrl'
      }
    }
  })

  .state('homeopathy.coughWorseWithMotion', {
    url: '/page82',
    views: {
      'tab3': {
        templateUrl: 'templates/coughWorseWithMotion.html',
        controller: 'coughWorseWithMotionCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/coughWorseWithMotion.html',
        controller: 'coughWorseWithMotionCtrl'
      }
    }
  })

  .state('homeopathy.coughWorsenedByCold', {
    url: '/page83',
    views: {
      'tab3': {
        templateUrl: 'templates/coughWorsenedByCold.html',
        controller: 'coughWorsenedByColdCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/coughWorsenedByCold.html',
        controller: 'coughWorsenedByColdCtrl'
      }
    }
  })

  .state('homeopathy.wetCoughDifficultToExpectorate', {
    url: '/page517',
    views: {
      'tab3': {
        templateUrl: 'templates/wetCoughDifficultToExpectorate.html',
        controller: 'wetCoughDifficultToExpectorateCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/wetCoughDifficultToExpectorate.html',
        controller: 'wetCoughDifficultToExpectorateCtrl'
      }
    }  
  })

  .state('homeopathy.wetCoughWorseWhenLyingDown', {
    url: '/page521',
    views: {
      'tab3': {
        templateUrl: 'templates/wetCoughWorseWhenLyingDown.html',
        controller: 'wetCoughWorseWhenLyingDownCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/wetCoughWorseWhenLyingDown.html',
        controller: 'wetCoughWorseWhenLyingDownCtrl'
      }
    }  
  })

  .state('homeopathy.wetCoughThickPhlegm', {
    url: '/page518',
    views: {
      'tab3': {
        templateUrl: 'templates/wetCoughThickPhlegm.html',
        controller: 'wetCoughThickPhlegmCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/wetCoughThickPhlegm.html',
        controller: 'wetCoughThickPhlegmCtrl'
      }
    }  
  })

  .state('homeopathy.wetCoughWithBronchialIrritation', {
    url: '/page519',
    views: {
      'tab3': {
        templateUrl: 'templates/wetCoughWithBronchialIrritation.html',
        controller: 'wetCoughWithBronchialIrritationCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/wetCoughWithBronchialIrritation.html',
        controller: 'wetCoughWithBronchialIrritationCtrl'
      }
    }  
  })

  .state('homeopathy.wetCoughWorseWhenInBed', {
    url: '/page520',
    views: {
      'tab3': {
        templateUrl: 'templates/wetCoughWorseWhenInBed.html',
        controller: 'wetCoughWorseWhenInBedCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/wetCoughWorseWhenInBed.html',
        controller: 'wetCoughWorseWhenInBedCtrl'
      }
    } 
  })

  .state('homeopathy.chills', {
    url: '/page74',
    views: {
      'tab3': {
        templateUrl: 'templates/chills.html',
        controller: 'chillsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/chills.html',
        controller: 'chillsCtrl'
      }
    }
  })

  .state('homeopathy.eyeIrritation', {
    url: '/page14',
    views: {
      'tab3': {
        templateUrl: 'templates/eyeIrritation.html',
        controller: 'eyeIrritationCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/eyeIrritation.html',
        controller: 'eyeIrritationCtrl'
      },
    }
  })

  .state('homeopathy.eyeIrritationFromAllergies', {
    url: '/page236',
    views: {
      'tab3': {
        templateUrl: 'templates/eyeIrritationFromAllergies.html',
        controller: 'eyeIrritationFromAllergiesCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/eyeIrritationFromAllergies.html',
        controller: 'eyeIrritationFromAllergiesCtrl'
      }
    }
  })

  .state('homeopathy.eyeIrritationNotFromAllergies', {
    url: '/page237',
    views: {
      'tab3': {
        templateUrl: 'templates/eyeIrritationNotFromAllergies.html',
        controller: 'eyeIrritationNotFromAllergiesCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/eyeIrritationNotFromAllergies.html',
        controller: 'eyeIrritationNotFromAllergiesCtrl'
      }
    }
  })

  .state('homeopathy.chalazionSmallBumpOnTheEyelid', {
    url: '/page244',
    views: {
      'tab3': {
        templateUrl: 'templates/chalazionSmallBumpOnTheEyelid.html',
        controller: 'chalazionSmallBumpOnTheEyelidCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/chalazionSmallBumpOnTheEyelid.html',
        controller: 'chalazionSmallBumpOnTheEyelidCtrl'
      }
    }
  })

  .state('homeopathy.dryEyes', {
    url: '/page245',
    views: {
      'tab3': {
        templateUrl: 'templates/dryEyes.html',
        controller: 'dryEyesCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/dryEyes.html',
        controller: 'dryEyesCtrl'
      }
    }
  })

  .state('homeopathy.strainedEyesFromArtificialLight', {
    url: '/page238',
    views: {
      'tab3': {
        templateUrl: 'templates/strainedEyesFromArtificialLight.html',
        controller: 'strainedEyesFromArtificialLightCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/strainedEyesFromArtificialLight.html',
        controller: 'strainedEyesFromArtificialLightCtrl'
      }
    }
  })

  .state('homeopathy.strainedEyesFromComputerUse', {
    url: '/page239',
    views: {
      'tab3': {
        templateUrl: 'templates/strainedEyesFromComputerUse.html',
        controller: 'strainedEyesFromComputerUseCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/strainedEyesFromComputerUse.html',
        controller: 'strainedEyesFromComputerUseCtrl'
      }
    }
  })

  .state('homeopathy.strainedEyesFromOverexertedVisualEffort', {
    url: '/page240',
    views: {
      'tab3': {
        templateUrl: 'templates/strainedEyesFromOverexertedVisualEffort.html',
        controller: 'strainedEyesFromOverexertedVisualEffortCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/strainedEyesFromOverexertedVisualEffort.html',
        controller: 'strainedEyesFromOverexertedVisualEffortCtrl'
      }
    }
  })

  .state('homeopathy.strainedEyesFromPoorLighting', {
    url: '/page241',
    views: {
      'tab3': {
        templateUrl: 'templates/strainedEyesFromPoorLighting.html',
        controller: 'strainedEyesFromPoorLightingCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/strainedEyesFromPoorLighting.html',
        controller: 'strainedEyesFromPoorLightingCtrl'
      }
    }
  })

  .state('homeopathy.styeOnUpperEyelid', {
    url: '/page242',
    views: {
      'tab3': {
        templateUrl: 'templates/styeOnUpperEyelid.html',
        controller: 'styeOnUpperEyelidCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/styeOnUpperEyelid.html',
        controller: 'styeOnUpperEyelidCtrl'
      }
    }
  })

  .state('homeopathy.styeRecurrent', {
    url: '/page243',
    views: {
      'tab3': {
        templateUrl: 'templates/styeRecurrent.html',
        controller: 'styeRecurrentCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/styeRecurrent.html',
        controller: 'styeRecurrentCtrl'
      }
    }
  })

  .state('homeopathy.sunAllergyBeforeExposure2', {
    url: '/page27',
    views: {
      'tab3': {
        templateUrl: 'templates/sunAllergyBeforeExposure2.html',
        controller: 'sunAllergyBeforeExposure2Ctrl'
      },
      'side-menu21': {
        templateUrl: 'templates/sunAllergyBeforeExposure2.html',
        controller: 'sunAllergyBeforeExposure2Ctrl'
      }
    }
  })

  .state('homeopathy.sunAllergyAfterExposure', {
    url: '/page19',
    views: {
      'tab3': {
        templateUrl: 'templates/sunAllergyAfterExposure.html',
        controller: 'sunAllergyAfterExposureCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/sunAllergyAfterExposure.html',
        controller: 'sunAllergyAfterExposureCtrl'
      }
    }
  })

  .state('homeopathy.hayFever', {
    url: '/page9',
    views: {
      'tab3': {
        templateUrl: 'templates/hayFever.html',
        controller: 'hayFeverCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/hayFever.html',
        controller: 'hayFeverCtrl'
      }
    }
  })

  .state('homeopathy.hives', {
    url: '/page22',
    views: {
      'tab3': {
        templateUrl: 'templates/hives.html',
        controller: 'hivesCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/hives.html',
        controller: 'hivesCtrl'
      }
    }
  })

  .state('homeopathy.legCrampsAtNight', {
    url: '/page353',
    views: {
      'tab3': {
        templateUrl: 'templates/legCrampsAtNight.html',
        controller: 'legCrampsAtNightCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/legCrampsAtNight.html',
        controller: 'legCrampsAtNightCtrl'
      }
    }
  })

  .state('homeopathy.jointAndMusclePainsRestlessLegs', {
    url: '/page365',
    views: {
      'tab3': {
        templateUrl: 'templates/jointAndMusclePainsRestlessLegs.html',
        controller: 'jointAndMusclePainsRestlessLegsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/jointAndMusclePainsRestlessLegs.html',
        controller: 'jointAndMusclePainsRestlessLegsCtrl'
      }
    }
  })

  .state('homeopathy.legCrampsFromOverexertion', {
    url: '/page354',
    views: {
      'tab3': {
        templateUrl: 'templates/legCrampsFromOverexertion.html',
        controller: 'legCrampsFromOverexertionCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/legCrampsFromOverexertion.html',
        controller: 'legCrampsFromOverexertionCtrl'
      }
    }
  })

  .state('homeopathy.muscleOverexertion', {
    url: '/page360',
    views: {
      'tab3': {
        templateUrl: 'templates/muscleOverexertion.html',
        controller: 'muscleOverexertionCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/muscleOverexertion.html',
        controller: 'muscleOverexertionCtrl'
      }
    }
  })

  .state('homeopathy.muscleStiffnessFromOverexertion', {
    url: '/page368',
    views: {
      'tab3': {
        templateUrl: 'templates/muscleStiffnessFromOverexertion.html',
        controller: 'muscleStiffnessFromOverexertionCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/muscleStiffnessFromOverexertion.html',
        controller: 'muscleStiffnessFromOverexertionCtrl'
      }
    }
  })

  .state('homeopathy.muscleSorenessImprovedByFirmPressure', {
    url: '/page361',
    views: {
      'tab3': {
        templateUrl: 'templates/muscleSorenessImprovedByFirmPressure.html',
        controller: 'muscleSorenessImprovedByFirmPressureCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/muscleSorenessImprovedByFirmPressure.html',
        controller: 'muscleSorenessImprovedByFirmPressureCtrl'
      }
    }
  })

  .state('muscleSorenessImprovedByFirmPressure2', {
    url: '/page362',
    templateUrl: 'templates/muscleSorenessImprovedByFirmPressure2.html',
    controller: 'muscleSorenessImprovedByFirmPressure2Ctrl'
  })

  .state('homeopathy.lowerBackPainFeelingOfWeaknessInTheLowerBack', {
    url: '/page356',
    views: {
      'tab3': {
        templateUrl: 'templates/lowerBackPainFeelingOfWeaknessInTheLowerBack.html',
        controller: 'lowerBackPainFeelingOfWeaknessInTheLowerBackCtrl'
      }
    }
  })

  .state('homeopathy.lowerBackPainWithShootingPain', {
    url: '/page357',
    views: {
      'tab3': {
        templateUrl: 'templates/lowerBackPainWithShootingPain.html',
        controller: 'lowerBackPainWithShootingPainCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/lowerBackPainWithShootingPain.html',
        controller: 'lowerBackPainWithShootingPainCtrl'
      }
    }
  })

  .state('homeopathy.lowerBackPainWorseWithRest', {
    url: '/page358',
    views: {
      'tab3': {
        templateUrl: 'templates/lowerBackPainWorseWithRest.html',
        controller: 'lowerBackPainWorseWithRestCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/lowerBackPainWorseWithRest.html',
        controller: 'lowerBackPainWorseWithRestCtrl'
      }
    }
  })

  .state('homeopathy.muscleSorenessFromMinorTrauma', {
    url: '/page359',
    views: {
      'tab3': {
        templateUrl: 'templates/muscleSorenessFromMinorTrauma.html',
        controller: 'muscleSorenessFromMinorTraumaCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/muscleSorenessFromMinorTrauma.html',
        controller: 'muscleSorenessFromMinorTraumaCtrl'
      }
    }
  })

  .state('homeopathy.muscleSorenessMusicianCramps', {
    url: '/page364',
    views: {
      'tab3': {
        templateUrl: 'templates/muscleSorenessMusicianCramps.html',
        controller: 'muscleSorenessMusicianCrampsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/muscleSorenessMusicianCramps.html',
        controller: 'muscleSorenessMusicianCrampsCtrl'
      }
    }
  })

  .state('homeopathy.sprainsRepeatedSprains', {
    url: '/page366',
    views: {
      'tab3': {
        templateUrl: 'templates/sprainsRepeatedSprains.html',
        controller: 'sprainsRepeatedSprainsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/sprainsRepeatedSprains.html',
        controller: 'sprainsRepeatedSprainsCtrl'
      }
    }
  })

  .state('homeopathy.sprainsLongTermTreatment', {
    url: '/page449',
    views: {
      'tab3': {
        templateUrl: 'templates/sprainsLongTermTreatment.html',
        controller: 'sprainsLongTermTreatmentCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/sprainsLongTermTreatment.html',
        controller: 'sprainsLongTermTreatmentCtrl'
      }
    }
   })

  .state('homeopathy.sprainsFirst48Hours', {
    url: '/page448',
    views: {
      'tab3': {
        templateUrl: 'templates/sprainsFirst48Hours.html',
        controller: 'sprainsFirst48HoursCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/sprainsFirst48Hours.html',
        controller: 'sprainsFirst48HoursCtrl'
      }
    }
  })

  .state('homeopathy.muscleStiffnessFromTrauma', {
    url: '/page372',
    views: {
      'tab3': {
        templateUrl: 'templates/muscleStiffnessFromTrauma.html',
        controller: 'muscleStiffnessFromTraumaCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/muscleStiffnessFromTrauma.html',
        controller: 'muscleStiffnessFromTraumaCtrl'
      }
    }
  })

  .state('homeopathy.muscleStiffnessImprovedByHeat', {
    url: '/page375',
    views: {
      'tab3': {
        templateUrl: 'templates/muscleStiffnessImprovedByHeat.html',
        controller: 'muscleStiffnessImprovedByHeatCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/muscleStiffnessImprovedByHeat.html',
        controller: 'muscleStiffnessImprovedByHeatCtrl'
      }
    }
  })

  .state('homeopathy.arnicareRollOn', {
    url: '/page510',
    views: {
      'side-menu21': {
        templateUrl: 'templates/arnicareRollOn.html',
        controller: 'arnicareRollOnCtrl'
      }
    }
  })

  .state('homeopathy.arnicareLegCramps', {
    url: '/page511',
    views: {
      'side-menu21': {
        templateUrl: 'templates/arnicareLegCramps.html',
        controller: 'arnicareLegCrampsCtrl'
      }
    }
  })

  .state('homeopathy.arnicareFootCare', {
    url: '/page512',
    views: {
      'side-menu21': {
        templateUrl: 'templates/arnicareFootCare.html',
        controller: 'arnicareFootCareCtrl'
      }
    }
  })

  .state('homeopathy.colicComfortLiquidDoses', {
    url: '/page277',
    views: {
      'side-menu21': {
        templateUrl: 'templates/colicComfortLiquidDoses.html',
        controller: 'colicComfortLiquidDosesCtrl'
      }
    }
  })

  .state('homeopathy.rhinAllergyTablets', {
    url: '/page513',
    views: {
      'side-menu21': {
        templateUrl: 'templates/rhinAllergyTablets.html',
        controller: 'rhinAllergyTabletsCtrl'
      }
    }
  })

  .state('homeopathy.rhinAllergyKidsTablets', {
    url: '/page514',
    views: {
      'side-menu21': {
        templateUrl: 'templates/rhinAllergyKidsTablets.html',
        controller: 'rhinAllergyKidsTabletsCtrl'
      }
    }
  })

  .state('homeopathy.rhinAllergyKidsPellets', {
    url: '/page515',
    views: {
      'side-menu21': {
        templateUrl: 'templates/rhinAllergyKidsPellets.html',
        controller: 'rhinAllergyKidsPelletsCtrl'
      }
    }
  })

  .state('homeopathy.muscleStiffnessImprovedByMotion', {
    url: '/page376',
    views: {
      'tab3': {
        templateUrl: 'templates/muscleStiffnessImprovedByMotion.html',
        controller: 'muscleStiffnessImprovedByMotionCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/muscleStiffnessImprovedByMotion.html',
        controller: 'muscleStiffnessImprovedByMotionCtrl'
      }
    }
  })

  .state('homeopathy.muscleStiffnessWorseWithMotion', {
    url: '/page377',
    views: {
      'tab3': {
        templateUrl: 'templates/muscleStiffnessWorseWithMotion.html',
        controller: 'muscleStiffnessWorseWithMotionCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/muscleStiffnessWorseWithMotion.html',
        controller: 'muscleStiffnessWorseWithMotionCtrl'
      }
    }
  })

  .state('homeopathy.writerSCrampWithMuscularWeakness', {
    url: '/page378',
    views: {
      'tab3': {
        templateUrl: 'templates/writerSCrampWithMuscularWeakness.html',
        controller: 'writerSCrampWithMuscularWeaknessCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/writerSCrampWithMuscularWeakness.html',
        controller: 'writerSCrampWithMuscularWeaknessCtrl'
      }
    }
  })

  .state('homeopathy.writerSCrampWithShootingPain', {
    url: '/page379',
    views: {
      'tab3': {
        templateUrl: 'templates/writerSCrampWithShootingPain.html',
        controller: 'writerSCrampWithShootingPainCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/writerSCrampWithShootingPain.html',
        controller: 'writerSCrampWithShootingPainCtrl'
      }
    }
  })

  .state('homeopathy.muscleStiffnessFromPhysicalTherapy', {
    url: '/page370',
    views: {
      'tab3': {
        templateUrl: 'templates/muscleStiffnessFromPhysicalTherapy.html',
        controller: 'muscleStiffnessFromPhysicalTherapyCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/muscleStiffnessFromPhysicalTherapy.html',
        controller: 'muscleStiffnessFromPhysicalTherapyCtrl'
      }
    }
  })

  .state('homeopathy.sprainsNoneOfTheAbove', {
    url: '/page367',
    views: {
      'tab3': {
        templateUrl: 'templates/sprainsNoneOfTheAbove.html',
        controller: 'sprainsNoneOfTheAboveCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/sprainsNoneOfTheAbove.html',
        controller: 'sprainsNoneOfTheAboveCtrl'
      }
    }
  })

  .state('homeopathy.legPains', {
    url: '/page355',
    views: {
      'tab3': {
        templateUrl: 'templates/legPains.html',
        controller: 'legPainsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/legPains.html',
        controller: 'legPainsCtrl'
      }
    }
  })

  .state('homeopathy.weals', {
    url: '/page28',
    views: {
      'tab3': {
        templateUrl: 'templates/weals.html',
        controller: 'wealsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/weals.html',
        controller: 'wealsCtrl'
      }
    }
  })

  .state('homeopathy.sinusCongestion', {
    url: '/page23',
    views: {
      'tab3': {
        templateUrl: 'templates/sinusCongestion.html',
        controller: 'sinusCongestionCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/sinusCongestion.html',
        controller: 'sinusCongestionCtrl'
      }
    }
  })

  .state('homeopathy.sinusPainPainAtBaseOfNose', {
    url: '/page122',
    views: {
      'tab3': {
        templateUrl: 'templates/sinusPainPainAtBaseOfNose.html',
        controller: 'sinusPainPainAtBaseOfNoseCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/sinusPainPainAtBaseOfNose.html',
        controller: 'sinusPainPainAtBaseOfNoseCtrl'
      }
    }
  })

  .state('homeopathy.sinusPainPainInTheUpperJaw', {
    url: '/page123',
    views: {
      'tab3': {
        templateUrl: 'templates/sinusPainPainInTheUpperJaw.html',
        controller: 'sinusPainPainInTheUpperJawCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/sinusPainPainInTheUpperJaw.html',
        controller: 'sinusPainPainInTheUpperJawCtrl'
      }
    }
  })

  .state('homeopathy.sinusPainWithThickGreenishDischarge', {
    url: '/page124',
    views: {
      'tab3': {
        templateUrl: 'templates/sinusPainWithThickGreenishDischarge.html',
        controller: 'sinusPainWithThickGreenishDischargeCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/sinusPainWithThickGreenishDischarge.html',
        controller: 'sinusPainWithThickGreenishDischargeCtrl'
      }
    }
  })

  .state('homeopathy.sinusPainOther', {
    url: '/page125',
    views: {
      'tab3': {
        templateUrl: 'templates/sinusPainOther.html',
        controller: 'sinusPainOtherCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/sinusPainOther.html',
        controller: 'sinusPainOtherCtrl'
      }
    }
  })

  .state('homeopathy.nasalCongestionFromAllergies', {
    url: '/page15',
    views: {
      'tab3': {
        templateUrl: 'templates/nasalCongestionFromAllergies.html',
        controller: 'nasalCongestionFromAllergiesCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/nasalCongestionFromAllergies.html',
        controller: 'nasalCongestionFromAllergiesCtrl'
      }
    }
  })

  .state('homeopathy.bleedingEasily', {
    url: '/page65',
    views: {
      'tab3': {
        templateUrl: 'templates/bleedingEasily.html',
        controller: 'bleedingEasilyCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/bleedingEasily.html',
        controller: 'bleedingEasilyCtrl'
      }
    }
  })

  .state('burningWithFissures', {
    url: '/page66',
    templateUrl: 'templates/burningWithFissures.html',
    controller: 'burningWithFissuresCtrl'
  })

  .state('homeopathy.constipationWithHemorrhoids', {
    url: '/page158',
    views: {
      'tab3': {
        templateUrl: 'templates/constipationWithHemorrhoids.html',
        controller: 'constipationWithHemorrhoidsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/constipationWithHemorrhoids.html',
        controller: 'constipationWithHemorrhoidsCtrl'
      }
    }
  })

  .state('homeopathy.itching', {
    url: '/page68',
    views: {
      'tab3': {
        templateUrl: 'templates/itching.html',
        controller: 'itchingCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/itching.html',
        controller: 'itchingCtrl'
      }
    }
  })

  .state('homeopathy.veryLittleOrNoBleeding', {
    url: '/page69',
    views: {
      'tab3': {
        templateUrl: 'templates/veryLittleOrNoBleeding.html',
        controller: 'veryLittleOrNoBleedingCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/veryLittleOrNoBleeding.html',
        controller: 'veryLittleOrNoBleedingCtrl'
      }
    }
  })

  .state('homeopathy.otherHemorrhoidMedicines', {
    url: '/page70',
    views: {
      'tab3': {
        templateUrl: 'templates/otherHemorrhoidMedicines.html',
        controller: 'otherHemorrhoidMedicinesCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/otherHemorrhoidMedicines.html',
        controller: 'otherHemorrhoidMedicinesCtrl'
      }
    }
  })

  .state('homeopathy.burningWithFissures2', {
    url: '/page67',
    views: {
      'tab3': {
        templateUrl: 'templates/burningWithFissures2.html',
        controller: 'burningWithFissures2Ctrl'
      },
      'side-menu21': {
        templateUrl: 'templates/burningWithFissures2.html',
        controller: 'burningWithFissures2Ctrl'
      }
    }
  })

  .state('homeopathy.itchyNose', {
    url: '/page13',
    views: {
      'tab3': {
        templateUrl: 'templates/itchyNose.html',
        controller: 'itchyNoseCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/itchyNose.html',
        controller: 'itchyNoseCtrl'
      }
    }
  })

  .state('homeopathy.associatedWithHotFlashes', {
    url: '/page48',
    views: {
      'tab3': {
        templateUrl: 'templates/associatedWithHotFlashes.html',
        controller: 'associatedWithHotFlashesCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/associatedWithHotFlashes.html',
        controller: 'associatedWithHotFlashesCtrl'
      }
    }
  })

  .state('homeopathy.hotflash3', {
    url: '/page604',
    views: {
      'tab3': {
        templateUrl: 'templates/hotflash3.html',
        controller: 'hotFlash3Ctrl'
      },
      'side-menu21': {
        templateUrl: 'templates/hotflash3.html',
        controller: 'hotFlash3Ctrl'
      }
    }
  })

  .state('homeopathy.headacheFromHotFlashes', {
    url: '/page437',
    views: {
      'tab3': {
        templateUrl: 'templates/headacheFromHotFlashes.html',
        controller: 'headacheFromHotFlashesCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/headacheFromHotFlashes.html',
        controller: 'headacheFromHotFlashesCtrl'
      }
    }
  })

  .state('homeopathy.associatedWithHotFlashes2', {
    url: '/page483',
    views: {
      'tab3': {
        templateUrl: 'templates/associatedWithHotFlashes2.html',
        controller: 'associatedWithHotFlashes2Ctrl'
      },
      'side-menu21': {
        templateUrl: 'templates/associatedWithHotFlashes2.html',
        controller: 'associatedWithHotFlashes2Ctrl'
      }
    }
  })

  .state('homeopathy.profuseSweatingAssociatedWithHotFlashes', {
    url: '/page500',
    views: {
      'tab3': {
        templateUrl: 'templates/profuseSweatingAssociatedWithHotFlashes.html',
        controller: 'profuseSweatingAssociatedWithHotFlashesCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/profuseSweatingAssociatedWithHotFlashes.html',
        controller: 'profuseSweatingAssociatedWithHotFlashesCtrl'
      }
    }
  })

  .state('homeopathy.profuseSweatingAssociatedWithMenopause', {
    url: '/page501',
    views: {
      'tab3': {
        templateUrl: 'templates/profuseSweatingAssociatedWithMenopause.html',
        controller: 'profuseSweatingAssociatedWithMenopauseCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/profuseSweatingAssociatedWithMenopause.html',
        controller: 'profuseSweatingAssociatedWithMenopauseCtrl'
      }
    }
  })

  .state('homeopathy.nightSweats', {
    url: '/page496',
    views: {
      'tab3': {
        templateUrl: 'templates/nightSweats.html',
        controller: 'nightSweatsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/nightSweats.html',
        controller: 'nightSweatsCtrl'
      }
    }
  })

  .state('homeopathy.hotFlashes', {
    url: '/page494',
    views: {
      'tab3': {
        templateUrl: 'templates/hotFlashes.html',
        controller: 'hotFlashesCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/hotFlashes.html',
        controller: 'hotFlashesCtrl'
      }
    }
  })

  .state('homeopathy.irritability', {
    url: '/page495',
    views: {
      'tab3': {
        templateUrl: 'templates/irritability.html',
        controller: 'irritabilityCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/irritability.html',
        controller: 'irritabilityCtrl'
      }
    }
  })

  .state('homeopathy.associatedWithNightSweats', {
    url: '/page487',
    views: {
      'tab3': {
        templateUrl: 'templates/associatedWithNightSweats.html',
        controller: 'associatedWithNightSweatsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/associatedWithNightSweats.html',
        controller: 'associatedWithNightSweatsCtrl'
      }
    }
  })

  .state('homeopathy.yeastInfection', {
    url: '/page502',
    views: {
      'tab3': {
        templateUrl: 'templates/yeastInfection.html',
        controller: 'yeastInfectionCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/yeastInfection.html',
        controller: 'yeastInfectionCtrl'
      }
    }
  })

  .state('homeopathy.menstrualCrampsAtTheOnsetOfPeriods', {
    url: '/page488',
    views: {
      'tab3': {
        templateUrl: 'templates/menstrualCrampsAtTheOnsetOfPeriods.html',
        controller: 'menstrualCrampsAtTheOnsetOfPeriodsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/menstrualCrampsAtTheOnsetOfPeriods.html',
        controller: 'menstrualCrampsAtTheOnsetOfPeriodsCtrl'
      }
    }
  })

  .state('homeopathy.menstrualCrampsImprovedByBendingOver', {
    url: '/page489',
    views: {
      'tab3': {
        templateUrl: 'templates/menstrualCrampsImprovedByBendingOver.html',
        controller: 'menstrualCrampsImprovedByBendingOverCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/menstrualCrampsImprovedByBendingOver.html',
        controller: 'menstrualCrampsImprovedByBendingOverCtrl'
      }
    }
  })

  .state('homeopathy.premenstrualSyndromeWithMoodSwings', {
    url: '/page497',
    views: {
      'tab3': {
        templateUrl: 'templates/premenstrualSyndromeWithMoodSwings.html',
        controller: 'premenstrualSyndromeWithMoodSwingsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/premenstrualSyndromeWithMoodSwings.html',
        controller: 'premenstrualSyndromeWithMoodSwingsCtrl'
      }
    }
  })

  .state('homeopathy.premenstrualSyndromeWorseWithCold', {
    url: '/page498',
    views: {
      'tab3': {
        templateUrl: 'templates/premenstrualSyndromeWorseWithCold.html',
        controller: 'premenstrualSyndromeWorseWithColdCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/premenstrualSyndromeWorseWithCold.html',
        controller: 'premenstrualSyndromeWorseWithColdCtrl'
      }
    }
  })

  .state('homeopathy.premenstrualSyndromeOther', {
    url: '/page499',
    views: {
      'tab3': {
        templateUrl: 'templates/premenstrualSyndromeOther.html',
        controller: 'premenstrualSyndromeOtherCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/premenstrualSyndromeOther.html',
        controller: 'premenstrualSyndromeOtherCtrl'
      }
    }  
  })

  .state('homeopathy.menstrualCrampsWorseWithAnger', {
    url: '/page492',
    views: {
      'tab3': {
        templateUrl: 'templates/menstrualCrampsWorseWithAnger.html',
        controller: 'menstrualCrampsWorseWithAngerCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/menstrualCrampsWorseWithAnger.html',
        controller: 'menstrualCrampsWorseWithAngerCtrl'
      }
    }
  })

  .state('homeopathy.menstrualCrampsOther', {
    url: '/page493',
    views: {
      'tab3': {
        templateUrl: 'templates/menstrualCrampsOther.html',
        controller: 'menstrualCrampsOtherCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/menstrualCrampsOther.html',
        controller: 'menstrualCrampsOtherCtrl'
      }
    }
  })

  .state('homeopathy.menstrualCrampsRelievedByStrongPressure', {
    url: '/page490',
    views: {
      'tab3': {
        templateUrl: 'templates/menstrualCrampsRelievedByStrongPressure.html',
        controller: 'menstrualCrampsRelievedByStrongPressureCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/menstrualCrampsRelievedByStrongPressure.html',
        controller: 'menstrualCrampsRelievedByStrongPressureCtrl'
      }
    }
  })

  .state('homeopathy.menstrualCrampsWithHeavyMenstruation', {
    url: '/page491',
    views: {
      'tab3': {
        templateUrl: 'templates/menstrualCrampsWithHeavyMenstruation.html',
        controller: 'menstrualCrampsWithHeavyMenstruationCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/menstrualCrampsWithHeavyMenstruation.html',
        controller: 'menstrualCrampsWithHeavyMenstruationCtrl'
      }
    }
  })

  .state('homeopathy.associatedWithMenopause', {
    url: '/page484',
    views: {
      'tab3': {
        templateUrl: 'templates/associatedWithMenopause.html',
        controller: 'associatedWithMenopauseCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/associatedWithMenopause.html',
        controller: 'associatedWithMenopauseCtrl'
      }
    }
  })

  .state('homeopathy.associatedWithPMS', {
    url: '/page49',
    views: {
      'tab3': {
        templateUrl: 'templates/associatedWithPMS.html',
        controller: 'associatedWithPMSCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/associatedWithPMS.html',
        controller: 'associatedWithPMSCtrl'
      }
    }
  })

  .state('homeopathy.fromGriefAngerOrVexation2', {
    url: '/page50',
    views: {
      'tab3': {
        templateUrl: 'templates/fromGriefAngerOrVexation2.html',
        controller: 'fromGriefAngerOrVexation2Ctrl'
      },
      'side-menu21': {
        templateUrl: 'templates/fromGriefAngerOrVexation2.html',
        controller: 'fromGriefAngerOrVexation2Ctrl'
      }
    }
  })

  .state('homeopathy.fromIntellectualOverwork', {
    url: '/page51',
    views: {
      'tab3': {
        templateUrl: 'templates/fromIntellectualOverwork.html',
        controller: 'fromIntellectualOverworkCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/fromIntellectualOverwork.html',
        controller: 'fromIntellectualOverworkCtrl'
      }
    }
  })

  .state('homeopathy.headacheFromIntellectualOverwork', {
    url: '/page438',
    views: {
      'tab3': {
        templateUrl: 'templates/headacheFromIntellectualOverwork.html',
        controller: 'headacheFromIntellectualOverworkCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/headacheFromIntellectualOverwork.html',
        controller: 'headacheFromIntellectualOverworkCtrl'
      }
    }
  })

  .state('homeopathy.fromMuscularOverexertion', {
    url: '/page52',
    views: {
      'tab3': {
        templateUrl: 'templates/fromMuscularOverexertion.html',
        controller: 'fromMuscularOverexertionCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/fromMuscularOverexertion.html',
        controller: 'fromMuscularOverexertionCtrl'
      }
    }
  })

  .state('homeopathy.wakingUpMidSleep', {
    url: '/page53',
    views: {
      'tab3': {
        templateUrl: 'templates/wakingUpMidSleep.html',
        controller: 'wakingUpMidSleepCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/wakingUpMidSleep.html',
        controller: 'wakingUpMidSleepCtrl'
      }
    }
  })

  .state('homeopathy.bruisingEasily', {
    url: '/page61',
    views: {
      'tab3': {
        templateUrl: 'templates/bruisingEasily.html',
        controller: 'bruisingEasilyCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/bruisingEasily.html',
        controller: 'bruisingEasilyCtrl'
      }
    }
  })

  .state('homeopathy.bruising', {
    url: '/page397',
    views: {
      'tab3': {
        templateUrl: 'templates/bruising.html',
        controller: 'bruisingCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/bruising.html',
        controller: 'bruisingCtrl'
      }
    }
  })

  .state('homeopathy.strainedMuscle', {
    url: '/page450',
    views: {
      'tab3': {
        templateUrl: 'templates/strainedMuscle.html',
        controller: 'strainedMuscleCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/strainedMuscle.html',
        controller: 'strainedMuscleCtrl'
      }
    }
  })

  .state('homeopathy.surgeryPostSurgery', {
    url: '/page451',
    views: {
      'tab3': {
        templateUrl: 'templates/surgeryPostSurgery.html',
        controller: 'surgeryPostSurgeryCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/surgeryPostSurgery.html',
        controller: 'surgeryPostSurgeryCtrl'
      }
    }
  })

  .state('homeopathy.surgeryPreSurgery', {
    url: '/page452',
    views: {
      'tab3': {
        templateUrl: 'templates/surgeryPreSurgery.html',
        controller: 'surgeryPreSurgeryCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/surgeryPreSurgery.html',
        controller: 'surgeryPreSurgeryCtrl'
      }
    }
  })

  .state('homeopathy.blackEye', {
    url: '/page233',
    views: {
      'tab3': {
        templateUrl: 'templates/blackEye.html',
        controller: 'blackEyeCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/blackEye.html',
        controller: 'blackEyeCtrl'
      }
    }
  })

  .state('homeopathy.breastTrauma', {
    url: '/page398',
    views: {
      'tab3': {
        templateUrl: 'templates/breastTrauma.html',
        controller: 'breastTraumaCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/breastTrauma.html',
        controller: 'breastTraumaCtrl'
      }
    }
  })

  .state('homeopathy.improvedByMovingTheLimb', {
    url: '/page430',
    views: {
      'tab3': {
        templateUrl: 'templates/improvedByMovingTheLimb.html',
        controller: 'improvedByMovingTheLimbCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/improvedByMovingTheLimb.html',
        controller: 'improvedByMovingTheLimbCtrl'
      }
    }
  })

  .state('homeopathy.worsenedByMovingTheLimb', {
    url: '/page431',
    views: {
      'tab3': {
        templateUrl: 'templates/worsenedByMovingTheLimb.html',
        controller: 'worsenedByMovingTheLimbCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/worsenedByMovingTheLimb.html',
        controller: 'worsenedByMovingTheLimbCtrl'
      }
    }
  })

  .state('homeopathy.torticollisWryNeck', {
    url: '/page453',
    views: {
      'tab3': {
        templateUrl: 'templates/torticollisWryNeck.html',
        controller: 'torticollisWryNeckCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/torticollisWryNeck.html',
        controller: 'torticollisWryNeckCtrl'
      }
    }
  })

  .state('homeopathy.withStiffJoints', {
    url: '/page344',
    views: {
      'tab3': {
        templateUrl: 'templates/withStiffJoints.html',
        controller: 'withStiffJointsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/withStiffJoints.html',
        controller: 'withStiffJointsCtrl'
      }
    }
  })

  .state('homeopathy.withSwollenJointsItchingPain', {
    url: '/page345',
    views: {
      'tab3': {
        templateUrl: 'templates/withSwollenJointsItchingPain.html',
        controller: 'withSwollenJointsItchingPainCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/withSwollenJointsItchingPain.html',
        controller: 'withSwollenJointsItchingPainCtrl'
      }
    }
  })

  .state('homeopathy.crampsInTheNeck', {
    url: '/page347',
    views: {
      'tab3': {
        templateUrl: 'templates/crampsInTheNeck.html',
        controller: 'crampsInTheNeckCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/crampsInTheNeck.html',
        controller: 'crampsInTheNeckCtrl'
      }
    }
  })

  .state('homeopathy.improvedByFirmPressure', {
    url: '/page348',
    views: {
      'tab3': {
        templateUrl: 'templates/improvedByFirmPressure.html',
        controller: 'improvedByFirmPressureCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/improvedByFirmPressure.html',
        controller: 'improvedByFirmPressureCtrl'
      }
    }
  })

  .state('homeopathy.improvedByMotion', {
    url: '/page349',
    views: {
      'tab3': {
        templateUrl: 'templates/improvedByMotion.html',
        controller: 'improvedByMotionCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/improvedByMotion.html',
        controller: 'improvedByMotionCtrl'
      }
    }
  })

  .state('homeopathy.worseWithMotion', {
    url: '/page363',
    views: {
      'tab3': {
        templateUrl: 'templates/worseWithMotion.html',
        controller: 'worseWithMotionCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/worseWithMotion.html',
        controller: 'worseWithMotionCtrl'
      }
    }
  })

  .state('homeopathy.inFingers', {
    url: '/page350',
    views: {
      'tab3': {
        templateUrl: 'templates/inFingers.html',
        controller: 'inFingersCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/inFingers.html',
        controller: 'inFingersCtrl'
      }
    }
  })

  .state('homeopathy.triggeredByDampnessAndCold', {
    url: '/page351',
    views: {
      'tab3': {
        templateUrl: 'templates/triggeredByDampnessAndCold.html',
        controller: 'triggeredByDampnessAndColdCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/triggeredByDampnessAndCold.html',
        controller: 'triggeredByDampnessAndColdCtrl'
      }
    }
  })

  .state('homeopathy.jointPainWorseWithMotion', {
    url: '/page352',
    views: {
      'tab3': {
        templateUrl: 'templates/jointPainWorseWithMotion.html',
        controller: 'jointPainWorseWithMotionCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/jointPainWorseWithMotion.html',
        controller: 'jointPainWorseWithMotionCtrl'
      }
    }
  })

  .state('homeopathy.arthritisPainOther', {
    url: '/page346',
    views: {
      'tab3': {
        templateUrl: 'templates/arthritisPainOther.html',
        controller: 'arthritisPainOtherCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/arthritisPainOther.html',
        controller: 'arthritisPainOtherCtrl'
      }
    }
  })

  .state('arthritisPainOther2', {
    url: '/page509',
    templateUrl: 'templates/arthritisPainOther2.html',
    controller: 'arthritisPainOther2Ctrl'
  })

  .state('overexertion', {
    url: '/page73',
    templateUrl: 'templates/overexertion.html',
    controller: 'overexertionCtrl'
  })

  .state('homeopathy.withVaricoseVeins', {
    url: '/page62',
    views: {
      'tab3': {
        templateUrl: 'templates/withVaricoseVeins.html',
        controller: 'withVaricoseVeinsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/withVaricoseVeins.html',
        controller: 'withVaricoseVeinsCtrl'
      }
    }
  })

  .state('homeopathy.otherLegMedicines', {
    url: '/page63',
    views: {
      'tab3': {
        templateUrl: 'templates/otherLegMedicines.html',
        controller: 'otherLegMedicinesCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/otherLegMedicines.html',
        controller: 'otherLegMedicinesCtrl'
      }
    }
  })

  .state('homeopathy.influxOfThoughts', {
    url: '/page54',
    views: {
      'tab3': {
        templateUrl: 'templates/influxOfThoughts.html',
        controller: 'influxOfThoughtsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/influxOfThoughts.html',
        controller: 'influxOfThoughtsCtrl'
      }
    }
  })

  .state('homeopathy.withFearOfDarkness', {
    url: '/page55',
    views: {
      'tab3': {
        templateUrl: 'templates/withFearOfDarkness.html',
        controller: 'withFearOfDarknessCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/withFearOfDarkness.html',
        controller: 'withFearOfDarknessCtrl'
      }
    }
  })

  .state('homeopathy.constipationWhileTraveling', {
    url: '/page154',
    views: {
      'tab3': {
        templateUrl: 'templates/constipationWhileTraveling.html',
        controller: 'constipationWhileTravelingCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/constipationWhileTraveling.html',
        controller: 'constipationWhileTravelingCtrl'
      }
    }
  })

  .state('homeopathy.overindulgence', {
    url: '/page209',
    views: {
      'tab3': {
        templateUrl: 'templates/overindulgence.html',
        controller: 'overindulgenceCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/overindulgence.html',
        controller: 'overindulgenceCtrl'
      }
    }
  })

  .state('homeopathy.morningSickness', {
    url: '/page482',
    views: {
      'tab3': {
        templateUrl: 'templates/morningSickness.html',
        controller: 'morningSicknessCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/morningSickness.html',
        controller: 'morningSicknessCtrl'
      }
    }
  })

  .state('homeopathy.heavyMenstruationWithBloodClots', {
    url: '/page485',
    views: {
      'tab3': {
        templateUrl: 'templates/heavyMenstruationWithBloodClots.html',
        controller: 'heavyMenstruationWithBloodClotsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/heavyMenstruationWithBloodClots.html',
        controller: 'heavyMenstruationWithBloodClotsCtrl'
      }
    }
  })

  .state('homeopathy.heavyMenstruationWithNausea', {
    url: '/page486',
    views: {
      'tab3': {
        templateUrl: 'templates/heavyMenstruationWithNausea.html',
        controller: 'heavyMenstruationWithNauseaCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/heavyMenstruationWithNausea.html',
        controller: 'heavyMenstruationWithNauseaCtrl'
      }
    }
  })

  .state('homeopathy.stopSmokingIrritability', {
    url: '/page454',
    views: {
      'tab3': {
        templateUrl: 'templates/stopSmokingIrritability.html',
        controller: 'stopSmokingIrritabilityCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/stopSmokingIrritability.html',
        controller: 'stopSmokingIrritabilityCtrl'
      }
    }
  })

  .state('homeopathy.stopSmokingNeedToEat', {
    url: '/page455',
    views: {
      'tab3': {
        templateUrl: 'templates/stopSmokingNeedToEat.html',
        controller: 'stopSmokingNeedToEatCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/stopSmokingNeedToEat.html',
        controller: 'stopSmokingNeedToEatCtrl'
      }
    }
  })

  .state('homeopathy.stopSmokingTobaccoCraving', {
    url: '/page456',
    views: {
      'tab3': {
        templateUrl: 'templates/stopSmokingTobaccoCraving.html',
        controller: 'stopSmokingTobaccoCravingCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/stopSmokingTobaccoCraving.html',
        controller: 'stopSmokingTobaccoCravingCtrl'
      }
    }
  })

  .state('homeopathy.headacheInTheForeheadWithHeartburn', {
    url: '/page440',
    views: {
      'tab3': {
        templateUrl: 'templates/headacheInTheForeheadWithHeartburn.html',
        controller: 'headacheInTheForeheadWithHeartburnCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/headacheInTheForeheadWithHeartburn.html',
        controller: 'headacheInTheForeheadWithHeartburnCtrl'
      }
    }
  })

  .state('homeopathy.headachePeriodicallyWeekends', {
    url: '/page441',
    views: {
      'tab3': {
        templateUrl: 'templates/headachePeriodicallyWeekends.html',
        controller: 'headachePeriodicallyWeekendsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/headachePeriodicallyWeekends.html',
        controller: 'headachePeriodicallyWeekendsCtrl'
      }
    }
  })

  .state('homeopathy.headacheThrobbingHeadaches', {
    url: '/page442',
    views: {
      'tab3': {
        templateUrl: 'templates/headacheThrobbingHeadaches.html',
        controller: 'headacheThrobbingHeadachesCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/headacheThrobbingHeadaches.html',
        controller: 'headacheThrobbingHeadachesCtrl'
      }
    }
  })

  .state('homeopathy.headacheWithNausea', {
    url: '/page443',
    views: {
      'tab3': {
        templateUrl: 'templates/headacheWithNausea.html',
        controller: 'headacheWithNauseaCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/headacheWithNausea.html',
        controller: 'headacheWithNauseaCtrl'
      }
    }
  })

  .state('homeopathy.headacheWithOveractiveThoughts', {
    url: '/page444',
    views: {
      'tab3': {
        templateUrl: 'templates/headacheWithOveractiveThoughts.html',
        controller: 'headacheWithOveractiveThoughtsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/headacheWithOveractiveThoughts.html',
        controller: 'headacheWithOveractiveThoughtsCtrl'
      }
    }
  })

  .state('homeopathy.headacheWithSensitivityToLightAndNoise', {
    url: '/page445',
    views: {
      'tab3': {
        templateUrl: 'templates/headacheWithSensitivityToLightAndNoise.html',
        controller: 'headacheWithSensitivityToLightAndNoiseCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/headacheWithSensitivityToLightAndNoise.html',
        controller: 'headacheWithSensitivityToLightAndNoiseCtrl'
      }
    }
  })

  .state('homeopathy.stomachFlu', {
    url: '/page227',
    views: {
      'tab3': {
        templateUrl: 'templates/stomachFlu.html',
        controller: 'stomachFluCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/stomachFlu.html',
        controller: 'stomachFluCtrl'
      }
    }
  })

  .state('homeopathy.toothaches', {
    url: '/page228',
    views: {
      'tab3': {
        templateUrl: 'templates/toothaches.html',
        controller: 'toothachesCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/toothaches.html',
        controller: 'toothachesCtrl'
      }
    }
  })

  .state('homeopathy.fromSweets', {
    url: '/page216',
    views: {
      'tab3': {
        templateUrl: 'templates/fromSweets.html',
        controller: 'fromSweetsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/fromSweets.html',
        controller: 'fromSweetsCtrl'
      }
    }
  })

  .state('homeopathy.fromTobaccoSmoke', {
    url: '/page217',
    views: {
      'tab3': {
        templateUrl: 'templates/fromTobaccoSmoke.html',
        controller: 'fromTobaccoSmokeCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/fromTobaccoSmoke.html',
        controller: 'fromTobaccoSmokeCtrl'
      }
    }
  })

  .state('homeopathy.snoringFromPostnasalDrip', {
    url: '/page210',
    views: {
      'tab3': {
        templateUrl: 'templates/snoringFromPostnasalDrip.html',
        controller: 'snoringFromPostnasalDripCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/snoringFromPostnasalDrip.html',
        controller: 'snoringFromPostnasalDripCtrl'
      }
    }
  })

  .state('homeopathy.snoringOther', {
    url: '/page211',
    views: {
      'tab3': {
        templateUrl: 'templates/snoringOther.html',
        controller: 'snoringOtherCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/snoringOther.html',
        controller: 'snoringOtherCtrl'
      }
    }
  })

  .state('homeopathy.digestiveCrampsImprovedByPressure', {
    url: '/page172',
    views: {
      'tab3': {
        templateUrl: 'templates/digestiveCrampsImprovedByPressure.html',
        controller: 'digestiveCrampsImprovedByPressureCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/digestiveCrampsImprovedByPressure.html',
        controller: 'digestiveCrampsImprovedByPressureCtrl'
      }
    }
  })

  .state('homeopathy.foodIntoleranceBeer', {
    url: '/page173',
    views: {
      'tab3': {
        templateUrl: 'templates/foodIntoleranceBeer.html',
        controller: 'foodIntoleranceBeerCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/foodIntoleranceBeer.html',
        controller: 'foodIntoleranceBeerCtrl'
      }
    }
  })

  .state('homeopathy.foodIntoleranceCabbageSauerkraut', {
    url: '/page174',
    views: {
      'tab3': {
        templateUrl: 'templates/foodIntoleranceCabbageSauerkraut.html',
        controller: 'foodIntoleranceCabbageSauerkrautCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/foodIntoleranceCabbageSauerkraut.html',
        controller: 'foodIntoleranceCabbageSauerkrautCtrl'
      }
    }
  })

  .state('homeopathy.curedMeat', {
    url: '/page175',
    views: {
      'tab3': {
        templateUrl: 'templates/curedMeat.html',
        controller: 'curedMeatCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/curedMeat.html',
        controller: 'curedMeatCtrl'
      }
    }
  })

  .state('homeopathy.foodIntoleranceFattyFood', {
    url: '/page176',
    views: {
      'tab3': {
        templateUrl: 'templates/foodIntoleranceFattyFood.html',
        controller: 'foodIntoleranceFattyFoodCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/foodIntoleranceFattyFood.html',
        controller: 'foodIntoleranceFattyFoodCtrl'
      }
    }
  })

  .state('homeopathy.foodIntoleranceGarlic', {
    url: '/page177',
    views: {
      'tab3': {
        templateUrl: 'templates/foodIntoleranceGarlic.html',
        controller: 'foodIntoleranceGarlicCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/foodIntoleranceGarlic.html',
        controller: 'foodIntoleranceGarlicCtrl'
      }
    }
  })

  .state('homeopathy.iceCream', {
    url: '/page178',
    views: {
      'tab3': {
        templateUrl: 'templates/iceCream.html',
        controller: 'iceCreamCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/iceCream.html',
        controller: 'iceCreamCtrl'
      }
    }
  })

  .state('homeopathy.nauseaAndVomitingIceCream', {
    url: '/page215',
    views: {
      'tab3': {
        templateUrl: 'templates/nauseaAndVomitingIceCream.html',
        controller: 'nauseaAndVomitingIceCreamCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/nauseaAndVomitingIceCream.html',
        controller: 'nauseaAndVomitingIceCreamCtrl'
      }
    }
  })

  .state('homeopathy.foodIntoleranceMilk', {
    url: '/page179',
    views: {
      'tab3': {
        templateUrl: 'templates/foodIntoleranceMilk.html',
        controller: 'foodIntoleranceMilkCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/foodIntoleranceMilk.html',
        controller: 'foodIntoleranceMilkCtrl'
      }
    }
  })

  .state('homeopathy.generalFatigueAfterDelivery', {
    url: '/page469',
    views: {
      'tab3': {
        templateUrl: 'templates/generalFatigueAfterDelivery.html',
        controller: 'generalFatigueAfterDeliveryCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/generalFatigueAfterDelivery.html',
        controller: 'generalFatigueAfterDeliveryCtrl'
      }
    }
  })

  .state('homeopathy.generalFatigueAfterSurgery', {
    url: '/page470',
    views: {
      'tab3': {
        templateUrl: 'templates/generalFatigueAfterSurgery.html',
        controller: 'generalFatigueAfterSurgeryCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/generalFatigueAfterSurgery.html',
        controller: 'generalFatigueAfterSurgeryCtrl'
      }
    }
  })

  .state('homeopathy.generalFatigueFromFlu', {
    url: '/page474',
    views: {
      'tab3': {
        templateUrl: 'templates/generalFatigueFromFlu.html',
        controller: 'generalFatigueFromFluCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/generalFatigueFromFlu.html',
        controller: 'generalFatigueFromFluCtrl'
      }
    }
  })

  .state('homeopathy.generalFatigueFromIntellectualOverwork', {
    url: '/page475',
    views: {
      'tab3': {
        templateUrl: 'templates/generalFatigueFromIntellectualOverwork.html',
        controller: 'generalFatigueFromIntellectualOverworkCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/generalFatigueFromIntellectualOverwork.html',
        controller: 'generalFatigueFromIntellectualOverworkCtrl'
      }
    }
  })

  .state('homeopathy.generalFatigueFromPhysicalOverexertion', {
    url: '/page476',
    views: {
      'tab3': {
        templateUrl: 'templates/generalFatigueFromPhysicalOverexertion.html',
        controller: 'generalFatigueFromPhysicalOverexertionCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/generalFatigueFromPhysicalOverexertion.html',
        controller: 'generalFatigueFromPhysicalOverexertionCtrl'
      }
    }
  })

  .state('homeopathy.generalFatigueWithChilliness', {
    url: '/page477',
    views: {
      'tab3': {
        templateUrl: 'templates/generalFatigueWithChilliness.html',
        controller: 'generalFatigueWithChillinessCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/generalFatigueWithChilliness.html',
        controller: 'generalFatigueWithChillinessCtrl'
      }
    }
  })

  .state('homeopathy.generalFatigueBothIntellectualAndPhysical', {
    url: '/page471',
    views: {
      'tab3': {
        templateUrl: 'templates/generalFatigueBothIntellectualAndPhysical.html',
        controller: 'generalFatigueBothIntellectualAndPhysicalCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/generalFatigueBothIntellectualAndPhysical.html',
        controller: 'generalFatigueBothIntellectualAndPhysicalCtrl'
      }
    }
  })

  .state('homeopathy.foodIntoleranceOnions', {
    url: '/page180',
    views: {
      'tab3': {
        templateUrl: 'templates/foodIntoleranceOnions.html',
        controller: 'foodIntoleranceOnionsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/foodIntoleranceOnions.html',
        controller: 'foodIntoleranceOnionsCtrl'
      }
    }
  })

  .state('homeopathy.foodIntoleranceSpices', {
    url: '/page181',
    views: {
      'tab3': {
        templateUrl: 'templates/foodIntoleranceSpices.html',
        controller: 'foodIntoleranceSpicesCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/foodIntoleranceSpices.html',
        controller: 'foodIntoleranceSpicesCtrl'
      }
    }
  })

  .state('homeopathy.overindulgence2', {
    url: '/page225',
    views: {
      'tab3': {
        templateUrl: 'templates/overindulgence2.html',
        controller: 'overindulgence2Ctrl'
      },
      'side-menu21': {
        templateUrl: 'templates/overindulgence2.html',
        controller: 'overindulgence2Ctrl'
      }
    }
  })

  .state('homeopathy.foodIntoleranceWine', {
    url: '/page182',
    views: {
      'tab3': {
        templateUrl: 'templates/foodIntoleranceWine.html',
        controller: 'foodIntoleranceWineCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/foodIntoleranceWine.html',
        controller: 'foodIntoleranceWineCtrl'
      }
    }
  })

  .state('homeopathy.constipationWithDiscoloredStools', {
    url: '/page155',
    views: {
      'tab3': {
        templateUrl: 'templates/constipationWithDiscoloredStools.html',
        controller: 'constipationWithDiscoloredStoolsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/constipationWithDiscoloredStools.html',
        controller: 'constipationWithDiscoloredStoolsCtrl'
      }
    }
  })

  .state('homeopathy.constipationWithGreatEffort', {
    url: '/page156',
    views: {
      'tab3': {
        templateUrl: 'templates/constipationWithGreatEffort.html',
        controller: 'constipationWithGreatEffortCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/constipationWithGreatEffort.html',
        controller: 'constipationWithGreatEffortCtrl'
      }
    }
  })

  .state('homeopathy.diarrheaAfterEatingCabbage', {
    url: '/page162',
    views: {
      'tab3': {
        templateUrl: 'templates/diarrheaAfterEatingCabbage.html',
        controller: 'diarrheaAfterEatingCabbageCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/diarrheaAfterEatingCabbage.html',
        controller: 'diarrheaAfterEatingCabbageCtrl'
      }
    }
  })

  .state('homeopathy.diarrheaEarlyInTheMorning', {
    url: '/page163',
    views: {
      'tab3': {
        templateUrl: 'templates/diarrheaEarlyInTheMorning.html',
        controller: 'diarrheaEarlyInTheMorningCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/diarrheaEarlyInTheMorning.html',
        controller: 'diarrheaEarlyInTheMorningCtrl'
      }
    }
  })

  .state('homeopathy.diarrheaFoodPoisoning', {
    url: '/page164',
    views: {
      'tab3': {
        templateUrl: 'templates/diarrheaFoodPoisoning.html',
        controller: 'diarrheaFoodPoisoningCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/diarrheaFoodPoisoning.html',
        controller: 'diarrheaFoodPoisoningCtrl'
      }
    }
  })

  .state('homeopathy.foodPoisoning', {
    url: '/page214',
    views: {
      'tab3': {
        templateUrl: 'templates/foodPoisoning.html',
        controller: 'foodPoisoningCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/foodPoisoning.html',
        controller: 'foodPoisoningCtrl'
      }
    }
  })

  .state('homeopathy.hangover', {
    url: '/page186',
    views: {
      'tab3': {
        templateUrl: 'templates/hangover.html',
        controller: 'hangoverCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/hangover.html',
        controller: 'hangoverCtrl'
      }
    }
  })

  .state('homeopathy.diarrheaPainless', {
    url: '/page165',
    views: {
      'tab3': {
        templateUrl: 'templates/diarrheaPainless.html',
        controller: 'diarrheaPainlessCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/diarrheaPainless.html',
        controller: 'diarrheaPainlessCtrl'
      }
    }
  })

  .state('homeopathy.diarrheaTravelerSDiarrhea', {
    url: '/page166',
    views: {
      'tab3': {
        templateUrl: 'templates/diarrheaTravelerSDiarrhea.html',
        controller: 'diarrheaTravelerSDiarrheaCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/diarrheaTravelerSDiarrhea.html',
        controller: 'diarrheaTravelerSDiarrheaCtrl'
      }
    }
  })

  .state('homeopathy.diarrheaWithColdSweats', {
    url: '/page167',
    views: {
      'tab3': {
        templateUrl: 'templates/diarrheaWithColdSweats.html',
        controller: 'diarrheaWithColdSweatsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/diarrheaWithColdSweats.html',
        controller: 'diarrheaWithColdSweatsCtrl'
      }
    }
  })

  .state('homeopathy.diarrheaWithGasAndBloating', {
    url: '/page168',
    views: {
      'tab3': {
        templateUrl: 'templates/diarrheaWithGasAndBloating.html',
        controller: 'diarrheaWithGasAndBloatingCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/diarrheaWithGasAndBloating.html',
        controller: 'diarrheaWithGasAndBloatingCtrl'
      }
    }
  })

  .state('homeopathy.gasBelching', {
    url: '/page183',
    views: {
      'tab3': {
        templateUrl: 'templates/gasBelching.html',
        controller: 'gasBelchingCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/gasBelching.html',
        controller: 'gasBelchingCtrl'
      }
    }
  })

  .state('homeopathy.heartburnWithGasAndBloating', {
    url: '/page188',
    views: {
      'tab3': {
        templateUrl: 'templates/heartburnWithGasAndBloating.html',
        controller: 'heartburnWithGasAndBloatingCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/heartburnWithGasAndBloating.html',
        controller: 'heartburnWithGasAndBloatingCtrl'
      }
    }
  })

  .state('homeopathy.heartburnWithIntenseBurning', {
    url: '/page189',
    views: {
      'tab3': {
        templateUrl: 'templates/heartburnWithIntenseBurning.html',
        controller: 'heartburnWithIntenseBurningCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/heartburnWithIntenseBurning.html',
        controller: 'heartburnWithIntenseBurningCtrl'
      }  
    }
  })

  .state('homeopathy.heartburnOther', {
    url: '/page190',
    views: {
      'tab3': {
        templateUrl: 'templates/heartburnOther.html',
        controller: 'heartburnOtherCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/heartburnOther.html',
        controller: 'heartburnOtherCtrl'
      }
    }    
  })

  .state('homeopathy.sourStomachfin', {
    url: '/page226',
    views: {
      'tab3': {
        templateUrl: 'templates/sourStomachfin.html',
        controller: 'sourStomachfinCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/sourStomachfin.html',
        controller: 'sourStomachfinCtrl'
      }
    }
  })

  .state('homeopathy.gasFlatulence', {
    url: '/page184',
    views: {
      'tab3': {
        templateUrl: 'templates/gasFlatulence.html',
        controller: 'gasFlatulenceCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/gasFlatulence.html',
        controller: 'gasFlatulenceCtrl'
      }
    }
  })

  .state('homeopathy.gasOther', {
    url: '/page185',
    views: {
      'tab3': {
        templateUrl: 'templates/gasOther.html',
        controller: 'gasOtherCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/gasOther.html',
        controller: 'gasOtherCtrl'
      }
    }
  })

  .state('homeopathy.diarrheaWithPainfulCramps', {
    url: '/page169',
    views: {
      'tab3': {
        templateUrl: 'templates/diarrheaWithPainfulCramps.html',
        controller: 'diarrheaWithPainfulCrampsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/diarrheaWithPainfulCramps.html',
        controller: 'diarrheaWithPainfulCrampsCtrl'
      }
    }
  })

  .state('homeopathy.diarrheaWithRumbling', {
    url: '/page170',
    views: {
      'tab3': {
        templateUrl: 'templates/diarrheaWithRumbling.html',
        controller: 'diarrheaWithRumblingCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/diarrheaWithRumbling.html',
        controller: 'diarrheaWithRumblingCtrl'
      }
    }
  })

  .state('homeopathy.constipationWithVeryDryStools', {
    url: '/page159',
    views: {
      'tab3': {
        templateUrl: 'templates/constipationWithVeryDryStools.html',
        controller: 'constipationWithVeryDryStoolsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/constipationWithVeryDryStools.html',
        controller: 'constipationWithVeryDryStoolsCtrl'
      }
    }
  })

  .state('homeopathy.constipationWithoutUrgesWithLargeStools', {
    url: '/page160',
    views: {
      'tab3': {
        templateUrl: 'templates/constipationWithoutUrgesWithLargeStools.html',
        controller: 'constipationWithoutUrgesWithLargeStoolsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/constipationWithoutUrgesWithLargeStools.html',
        controller: 'constipationWithoutUrgesWithLargeStoolsCtrl'
      }
    }
  })

  .state('homeopathy.withRestlessLegs', {
    url: '/page56',
    views: {
      'tab3': {
        templateUrl: 'templates/withRestlessLegs.html',
        controller: 'withRestlessLegsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/withRestlessLegs.html',
        controller: 'withRestlessLegsCtrl'
      }
    }
  })

  .state('homeopathy.sneezing', {
    url: '/page25',
    views: {
      'tab3': {
        templateUrl: 'templates/sneezing.html',
        controller: 'sneezingCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/sneezing.html',
        controller: 'sneezingCtrl'
      }
    }
  })

  .state('homeopathy.runnyNoseWithDryness', {
    url: '/page16',
    views: {
      'tab3': {
        templateUrl: 'templates/runnyNoseWithDryness.html',
        controller: 'runnyNoseWithDrynessCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/runnyNoseWithDryness.html',
        controller: 'runnyNoseWithDrynessCtrl'
      }
    }
  })

  .state('feverDryAndHotSkin2', {
    url: '/page100',
    templateUrl: 'templates/feverDryAndHotSkin2.html',
    controller: 'feverDryAndHotSkin2Ctrl'
  })

  .state('homeopathy.runnyNoseWithBurning', {
    url: '/page17',
    views: {
      'tab3': {
        templateUrl: 'templates/runnyNoseWithBurning.html',
        controller: 'runnyNoseWithBurningCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/runnyNoseWithBurning.html',
        controller: 'runnyNoseWithBurningCtrl'
      }
      }
    
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='homeopathy.homeopathicDilutions'
      2) Using $state.go programatically:
        $state.go('homeopathy.homeopathicDilutions');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/side-menu21/page12
      /page1/tab3/page12
  */
  .state('homeopathy.homeopathicDilutions', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/homeopathicDilutions.html',
        controller: 'homeopathicDilutionsCtrl'
      },
      'tab3': {
        templateUrl: 'templates/homeopathicDilutions.html',
        controller: 'homeopathicDilutionsCtrl'
      }
    }
  })

  .state('welcomeSlider', {
    url: '/page212',
    templateUrl: 'templates/welcomeSlider.html',
    controller: 'welcomeSliderCtrl'
  })

  .state('page', {
    url: '/page503',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('homeopathy.SingleMedicinesBlueTubes', {
    url: '/page504',
    views: {
      'side-menu21': {
        templateUrl: 'templates/SingleMedicinesBlueTubes.html',
        controller: 'SingleMedicinesBlueTubesCtrl'
      }
    }
  })

  .state('about', {
    url: '/page522',
    templateUrl: 'templates/about.html',
    controller: 'aboutCtrl'
  })

  .state('homeopathy.homepathicMedicines', {
    url: '/page523',
    views: {
      'side-menu21': {
        templateUrl: 'templates/homepathicMedicines.html',
        controller: 'homepathicMedicinesCtrl'
      }
    }
  })

  .state('homeopathy.homeopathicMedicines2', {
    url: '/page532',
    views: {
      'side-menu21': {
        templateUrl: 'templates/homeopathicMedicines2.html',
        controller: 'homeopathicMedicines2Ctrl'
      }
    }
  })

  .state('homeopathy.MedicineFinder2', {
    url: '/page505',
    views: {
      'tab9': {
        templateUrl: 'templates/MedicineFinder2.html',
        controller: 'MedicineFinder2Ctrl'
      }
    }
  })

  .state('homeopathy.onlineRetailers', {
    url: '/page506',
    views: {
      'tab9': {
        templateUrl: 'templates/onlineRetailers.html',
        controller: 'onlineRetailersCtrl'
      }
    }
  })

  .state('homeopathy.connectWithUs', {
    url: '/page530',
    views: {
      'tab9': {
        templateUrl: 'templates/connectWithUs.html',
        controller: 'connectWithUsCtrl'
      }
    }    
  })

  .state('homeopathy.socialMediaLink', {
    url: '/page531',
    views: {
      'tab9': {
        templateUrl: 'templates/socialMediaLink.html',
        controller: 'socialMediaLink'
      }
    }    
  })

  .state('page2', {
    url: '/page507',
    templateUrl: 'templates/page2.html',
    controller: 'page2Ctrl'
  })

  .state('homeopathy.newProducts', {
    url: '/page508',
    views: {
      'side-menu21': {
        templateUrl: 'templates/newProducts.html',
        controller: 'newProductsCtrl'
      }
    }
  })

  .state('homeopathy.search', {
    url: '/page533',
    views: {
      'side-menu21': {
        templateUrl: 'templates/search.html',
        controller: 'searchCtrl'
      }
    }
  })
/*Beginning of Single Product Pages*/

  .state('homeopathy.acidil', {
    url: '/page650',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acidil.html',
        controller: 'searchCtrl'
      }
    }
  })

  .state('homeopathy.aconitum6', {
    url: '/page651',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aconitum6.html',
        controller: 'searchCtrl'
      }
    }
  })

  .state('homeopathy.acteane', {
    url: '/page652',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acteane.html',
        controller: 'searchCtrl'
      }
    }
  })

  .state('homeopathy.aesculus6', {
    url: '/page653',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aesculus6.html',
        controller: 'searchCtrl'
      }
    }
  })

  .state('homeopathy.agaricus6', {
    url: '/page654',
    views: {
      'side-menu21': {
        templateUrl: 'templates/agaricus6.html',
        controller: 'searchCtrl'
      }
    }
  })

  .state('homeopathy.allium6', {
    url: '/page655',
    views: {
      'side-menu21': {
        templateUrl: 'templates/allium6.html',
        controller: 'searchCtrl'
      }
    }
  })



  .state('homeopathy.alumina6', {
    url: '/page656',
    views: {
      'side-menu21': {
        templateUrl: 'templates/alumina6.html',
        controller: 'searchCtrl'
      }
    }
  })

  .state('homeopathy.antimonium30', {
    url: '/page657',
    views: {
      'side-menu21': {
        templateUrl: 'templates/antimonium30.html',
        controller: 'searchCtrl'
      }
    }
  })

  .state('homeopathy.antimonium6', {
    url: '/page658',
    views: {
      'side-menu21': {
        templateUrl: 'templates/antimonium6.html',
        controller: 'searchCtrl'
      }
    }
  })

  .state('homeopathy.antimoniumcrudum30', {
    url: '/page658',
    views: {
      'side-menu21': {
        templateUrl: 'templates/antimoniumcrudum30.html',
        controller: 'searchCtrl'
      }
    }
  })

  .state('homeopathy.antimoniumtartaricum30', {
    url: '/page659',
    views: {
      'side-menu21': {
        templateUrl: 'templates/antimoniumtartaricum30.html',
        controller: 'searchCtrl'
      }
    }
  })


  .state('homeopathy.apis30', {
    url: '/page661',
    views: {
      'side-menu21': {
        templateUrl: 'templates/apis30.html',
        controller: 'searchCtrl'
      }    
    }
  })

/*PICKUPPPPPPPPPPPPPPP*/

  .state('homeopathy.argentum30', {
    url: '/page662',
    views: {
      'side-menu21': {
        templateUrl: 'templates/argentum30.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.argentum6', {
    url: '/page663',
    views: {
      'side-menu21': {
        templateUrl: 'templates/argentum6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.arnica30', {
    url: '/page664',
    views: {
      'side-menu21': {
        templateUrl: 'templates/arnica30.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.arnica6', {
    url: '/page665',
    views: {
      'side-menu21': {
        templateUrl: 'templates/arnica6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.arnicareArthritis', {
    url: '/page666',
    views: {
      'side-menu21': {
        templateUrl: 'templates/arnicareArthritis.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.arnicareCream', {
    url: '/page667',
    views: {
      'side-menu21': {
        templateUrl: 'templates/arnicareCream.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.arnicareGel', {
    url: '/page668',
    views: {
      'side-menu21': {
        templateUrl: 'templates/arnicareGel.html',
        controller: 'searchCtrl'
      }    
    }
  })


  .state('homeopathy.arsenicum30', {
    url: '/page669',
    views: {
      'side-menu21': {
        templateUrl: 'templates/arsenicum30.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.arsenicum6', {
    url: '/page670',
    views: {
      'side-menu21': {
        templateUrl: 'templates/arsenicum6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.arsenicumIodatum6', {
    url: '/page671',
    views: {
      'side-menu21': {
        templateUrl: 'templates/arsenicumIodatum6.html',
        controller: 'searchCtrl'
      }    
    }
  })
  .state('homeopathy.arumTriphyllum6', {
    url: '/page672',
    views: {
      'side-menu21': {
        templateUrl: 'templates/arumTriphyllum6.html',
        controller: 'searchCtrl'
      }    
    }
  })
  .state('homeopathy.avenocOintment', {
    url: '/page673',
    views: {
      'side-menu21': {
        templateUrl: 'templates/avenocOintment.html',
        controller: 'searchCtrl'
      }    
    }
  })
  .state('homeopathy.avenocSuppositories', {
    url: '/page674',
    views: {
      'side-menu21': {
        templateUrl: 'templates/avenocSuppositories.html',
        controller: 'searchCtrl'
      }    
    }
  })
  .state('homeopathy.belladonna30', {
    url: '/page675',
    views: {
      'side-menu21': {
        templateUrl: 'templates/belladonna30.html',
        controller: 'searchCtrl'
      }    
    }
  })
  .state('homeopathy.belladonna6', {
    url: '/page676',
    views: {
      'side-menu21': {
        templateUrl: 'templates/belladonna6.html',
        controller: 'searchCtrl'
      }    
    }
  })
  .state('homeopathy.bellis6', {
    url: '/page677',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bellis6.html',
        controller: 'searchCtrl'
      }    
    }
  })
  .state('homeopathy.borax30', {
    url: '/page678',
    views: {
      'side-menu21': {
        templateUrl: 'templates/borax30.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.borax6', {
    url: '/page679',
    views: {
      'side-menu21': {
        templateUrl: 'templates/borax6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.bryonia6', {
    url: '/page680',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bryonia6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.calcareaCarbonica30', {
    url: '/page681',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calcareaCarbonica30.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.calcareaCarbonica6', {
    url: '/page682',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calcareaCarbonica6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.calcareaFluorica6', {
    url: '/page683',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calcareaFluorica6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.calcareaPhosphorica30', {
    url: '/page684',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calcareaPhosphorica30.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.calcareaPhosphorica6', {
    url: '/page685',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calcareaPhosphorica6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.calcareaSulphurica30', {
    url: '/page686',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calcareaSulphurica30.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.calendulaCream', {
    url: '/page687',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calendulaCream.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.calendulaGel', {
    url: '/page688',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calendulaGel.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.calendulaOintment', {
    url: '/page689',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calendulaOintment.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.camilia', {
    url: '/page690',
    views: {
      'side-menu21': {
        templateUrl: 'templates/camilia.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.cantharis30', {
    url: '/page691',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cantharis30.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.cantharis6', {
    url: '/page692',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cantharis6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.carboVegetabilis6', {
    url: '/page693',
    views: {
      'side-menu21': {
        templateUrl: 'templates/carboVegetabilis6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.caulophyllumThalictroides30', {
    url: '/page694',
    views: {
      'side-menu21': {
        templateUrl: 'templates/caulophyllumThalictroides30.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.caulophyllumThalictroides6', {
    url: '/page695',
    views: {
      'side-menu21': {
        templateUrl: 'templates/caulophyllumThalictroides6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.causticum30', {
    url: '/page696',
    views: {
      'side-menu21': {
        templateUrl: 'templates/causticum30.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.causticum6', {
    url: '/page697',
    views: {
      'side-menu21': {
        templateUrl: 'templates/causticum6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.chamomilla30', {
    url: '/page698',
    views: {
      'side-menu21': {
        templateUrl: 'templates/chamomilla30.html',
        controller: 'searchCtrl'
      }    
    }
  })



  .state('homeopathy.chelidoniumMajus6', {
    url: '/page699',
    views: {
      'side-menu21': {
        templateUrl: 'templates/chelidoniumMajus6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.chestalCold', {
    url: '/page700',
    views: {
      'side-menu21': {
        templateUrl: 'templates/chestalCold.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.chestalHoney', {
    url: '/page701',
    views: {
      'side-menu21': {
        templateUrl: 'templates/chestalHoney.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.cimicifugaRacemosa6', {
    url: '/page702',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cimicifugaRacemosa6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.cinchonaOfficinalis30', {
    url: '/page703',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cinchonaOfficinalis30.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.cinchonaOfficinalis6', {
    url: '/page704',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cinchonaOfficinalis6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.cocculus6', {
    url: '/page705',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cocculus6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.coffea30', {
    url: '/page706',
    views: {
      'side-menu21': {
        templateUrl: 'templates/coffea30.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.colchicum6', {
    url: '/page707',
    views: {
      'side-menu21': {
        templateUrl: 'templates/colchicum6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.coldCalmChildren', {
    url: '/page708',
    views: {
      'side-menu21': {
        templateUrl: 'templates/coldCalmChildren.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.coldCalmKids', {
    url: '/page709',
    views: {
      'side-menu21': {
        templateUrl: 'templates/coldCalmKids.html',
        controller: 'searchCtrl'
      }    
    }
  })





  .state('homeopathy.collinsonia6', {
    url: '/page710',
    views: {
      'side-menu21': {
        templateUrl: 'templates/collinsonia6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.colocynthis6', {
    url: '/page711',
    views: {
      'side-menu21': {
        templateUrl: 'templates/colocynthis6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.condurango6', {
    url: '/page712',
    views: {
      'side-menu21': {
        templateUrl: 'templates/condurango6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.cuprum6', {
    url: '/page713',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cuprum6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.cycleaseCramp', {
    url: '/page714',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cycleaseCramp.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.cycleasePMS', {
    url: '/page715',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cycleasePMS.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.dolichos6', {
    url: '/page716',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dolichos6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.drosera30', {
    url: '/page717',
    views: {
      'side-menu21': {
        templateUrl: 'templates/drosera30.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.dulcamara30', {
    url: '/page718',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dulcamara30.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.dulcamara6', {
    url: '/page719',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dulcamara6.html',
        controller: 'searchCtrl'
      }    
    }
  })



  .state('homeopathy.eupatorium6', {
    url: '/page720',
    views: {
      'side-menu21': {
        templateUrl: 'templates/eupatorium6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.euphrasia6', {
    url: '/page721',
    views: {
      'side-menu21': {
        templateUrl: 'templates/euphrasia6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.ferrum6', {
    url: '/page722',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ferrum6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.galphimia6', {
    url: '/page723',
    views: {
      'side-menu21': {
        templateUrl: 'templates/galphimia6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.gasalia', {
    url: '/page724',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gasalia.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.gelsemium30', {
    url: '/page725',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gelsemium30.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.gelsemium6', {
    url: '/page726',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gelsemium6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.glonoinum6', {
    url: '/page727',
    views: {
      'side-menu21': {
        templateUrl: 'templates/glonoinum6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.graphites30', {
    url: '/page728',
    views: {
      'side-menu21': {
        templateUrl: 'templates/graphites30.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.graphites6', {
    url: '/page729',
    views: {
      'side-menu21': {
        templateUrl: 'templates/graphites6.html',
        controller: 'searchCtrl'
      }    
    }
  })





  .state('homeopathy.hamamelis6', {
    url: '/page730',
    views: {
      'side-menu21': {
        templateUrl: 'templates/hamamelis6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.hepar30', {
    url: '/page731',
    views: {
      'side-menu21': {
        templateUrl: 'templates/hepar30.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.hepar6', {
    url: '/page732',
    views: {
      'side-menu21': {
        templateUrl: 'templates/hepar6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.histaminum30', {
    url: '/page733',
    views: {
      'side-menu21': {
        templateUrl: 'templates/histaminum30.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.histaminum6', {
    url: '/page734',
    views: {
      'side-menu21': {
        templateUrl: 'templates/histaminum6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  
  

  .state('homeopathy.hydrastisCanadensis6', {
    url: '/page736',
    views: {
      'side-menu21': {
        templateUrl: 'templates/hydrastisCanadensis6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.hypericumPerforatum30', {
    url: '/page737',
    views: {
      'side-menu21': {
        templateUrl: 'templates/hypericumPerforatum30.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.ignatia30', {
    url: '/page738',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ignatia30.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.ipecacuanha30', {
    url: '/page739',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ipecacuanha30.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.ipecacuanha6', {
    url: '/page740',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ipecacuanha6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.irisVersicolor30', {
    url: '/page741',
    views: {
      'side-menu21': {
        templateUrl: 'templates/irisVersicolor30.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.irisVersicolor6', {
    url: '/page742',
    views: {
      'side-menu21': {
        templateUrl: 'templates/irisVersicolor6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.jetLagReliefCarePack', {
    url: '/page743',
    views: {
      'side-menu21': {
        templateUrl: 'templates/jetLagReliefCarePack.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.kaliBichromicum6', {
    url: '/page744',
    views: {
      'side-menu21': {
        templateUrl: 'templates/kaliBichromicum6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.kaliBromatum6', {
    url: '/page745',
    views: {
      'side-menu21': {
        templateUrl: 'templates/kaliBromatum6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.kaliCarbonicum6', {
    url: '/page746',
    views: {
      'side-menu21': {
        templateUrl: 'templates/kaliCarbonicum6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.kaliIodatum6', {
    url: '/page747',
    views: {
      'side-menu21': {
        templateUrl: 'templates/kaliIodatum6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.kaliMuriaticum30', {
    url: '/page748',
    views: {
      'side-menu21': {
        templateUrl: 'templates/kaliMuriaticum30.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.kaliPhosphoricum30', {
    url: '/page749',
    views: {
      'side-menu21': {
        templateUrl: 'templates/kaliPhosphoricum30.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.kaliPhosphoricum30Pack', {
    url: '/page750',
    views: {
      'side-menu21': {
        templateUrl: 'templates/kaliPhosphoricum30Pack.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.kaliSulphuricum6', {
    url: '/page751',
    views: {
      'side-menu21': {
        templateUrl: 'templates/kaliSulphuricum6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.lachesisMutus30', {
    url: '/page752',
    views: {
      'side-menu21': {
        templateUrl: 'templates/lachesisMutus30.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.lachnanthes6', {
    url: '/page753',
    views: {
      'side-menu21': {
        templateUrl: 'templates/lachnanthes6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.ledumPalustre30', {
    url: '/page754',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ledumPalustre30.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.ledumPalustre6', {
    url: '/page755',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ledumPalustre6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.legPainReliefCarePack', {
    url: '/page756',
    views: {
      'side-menu21': {
        templateUrl: 'templates/legPainReliefCarePac.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.lobeliaInflata6', {
    url: '/page757',
    views: {
      'side-menu21': {
        templateUrl: 'templates/lobeliaInflata6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.lycopodium6', {
    url: '/page758',
    views: {
      'side-menu21': {
        templateUrl: 'templates/lycopodium6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.lycopodiumClavatum6', {
    url: '/page759',
    views: {
      'side-menu21': {
        templateUrl: 'templates/lycopodiumClavatum6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.magnesiaPhosphorica30', {
    url: '/page760',
    views: {
      'side-menu21': {
        templateUrl: 'templates/magnesia30.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.magnesiaPhosphorica6', {
    url: '/page761',
    views: {
      'side-menu21': {
        templateUrl: 'templates/magnesia6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.mercuriusSolubilis6', {
    url: '/page762',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mercurius6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.mezereum30', {
    url: '/page763',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mezereum30.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.mezereum6', {
    url: '/page764',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mezereum6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.natrumMuriaticum30', {
    url: '/page765',
    views: {
      'side-menu21': {
        templateUrl: 'templates/natrum30.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.natrumMuriaticum6', {
    url: '/page766',
    views: {
      'side-menu21': {
        templateUrl: 'templates/natrum6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.nitricumAcidum6', {
    url: '/page767',
    views: {
      'side-menu21': {
        templateUrl: 'templates/nitricum6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.nuxVomica30', {
    url: '/page768',
    views: {
      'side-menu21': {
        templateUrl: 'templates/nux30.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.nuxVomica30Pack', {
    url: '/page769',
    views: {
      'side-menu21': {
        templateUrl: 'templates/nuxVomica30Pack.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.nuxVomica6', {
    url: '/page770',
    views: {
      'side-menu21': {
        templateUrl: 'templates/nux6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.optique1', {
    url: '/page771',
    views: {
      'side-menu21': {
        templateUrl: 'templates/optique1.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.oscillococcinum', {
    url: '/page772',
    views: {
      'side-menu21': {
        templateUrl: 'templates/oscillococcinum.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.petroleum6', {
    url: '/page773',
    views: {
      'side-menu21': {
        templateUrl: 'templates/petroleum6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.phosphoricumAcidum30', {
    url: '/page774',
    views: {
      'side-menu21': {
        templateUrl: 'templates/phosphoricum30.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.phosphoricumAcidum6', {
    url: '/page775',
    views: {
      'side-menu21': {
        templateUrl: 'templates/phosphoricum6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.phosphorus6', {
    url: '/page776',
    views: {
      'side-menu21': {
        templateUrl: 'templates/phosphorus6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.phytolaccaDecandra6', {
    url: '/page777',
    views: {
      'side-menu21': {
        templateUrl: 'templates/phytolacca6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.platinumMetallicum6', {
    url: '/page778',
    views: {
      'side-menu21': {
        templateUrl: 'templates/platinum6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.podophyllumPeltatum30', {
    url: '/page779',
    views: {
      'side-menu21': {
        templateUrl: 'templates/podophyllum30.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.pulsatilla6', {
    url: '/page780',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pulsatilla6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.quietude', {
    url: '/page781',
    views: {
      'side-menu21': {
        templateUrl: 'templates/quietude.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.ranunculusBulbosus6', {
    url: '/page782',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ranunculus.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.rhus30', {
    url: '/page783',
    views: {
      'side-menu21': {
        templateUrl: 'templates/rhus30.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.rhus6', {
    url: '/page784',
    views: {
      'side-menu21': {
        templateUrl: 'templates/rhus6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.rumex6', {
    url: '/page785',
    views: {
      'side-menu21': {
        templateUrl: 'templates/rumex6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.ruta6', {
    url: '/page786',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ruta6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.sabina6', {
    url: '/page787',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sabina6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.sedalia', {
    url: '/page788',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sedalia.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.sepia30', {
    url: '/page789',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sepia30.html',
        controller: 'searchCtrl'
      }    
    }
  })

  /*PAUSEDDDDDDDDDDDDDD*/

  .state('homeopathy.silicea30', {
    url: '/page790',
    views: {
      'side-menu21': {
        templateUrl: 'templates/silicea30.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.silicea6', {
    url: '/page791',
    views: {
      'side-menu21': {
        templateUrl: 'templates/silicea6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.sinusalia', {
    url: '/page792',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sinusalia.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.spongia6', {
    url: '/page793',
    views: {
      'side-menu21': {
        templateUrl: 'templates/spongia6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.staphysagria30', {
    url: '/page794',
    views: {
      'side-menu21': {
        templateUrl: 'templates/staphysagria30.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.staphysagria6', {
    url: '/page795',
    views: {
      'side-menu21': {
        templateUrl: 'templates/staphysagria6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.stramonium6', {
    url: '/page796',
    views: {
      'side-menu21': {
        templateUrl: 'templates/stramonium6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.sulphur6c', {
    url: '/page797',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sulphur6c.html',
        controller: 'searchCtrl'
      }    
    }
  })



  .state('homeopathy.sulphur6', {
    url: '/page799',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sulphur6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.symphytum6', {
    url: '/page800',
    views: {
      'side-menu21': {
        templateUrl: 'templates/symphytum6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.tabacum6', {
    url: '/page801',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tabacum6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.tarentula6', {
    url: '/page802',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tarentula6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.throatcalm', {
    url: '/page803',
    views: {
      'side-menu21': {
        templateUrl: 'templates/throatcalm.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.thuja30', {
    url: '/page804',
    views: {
      'side-menu21': {
        templateUrl: 'templates/thuja30.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.thuja6', {
    url: '/page805',
    views: {
      'side-menu21': {
        templateUrl: 'templates/thuja6.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.thuja30bcp', {
    url: '/page806',
    views: {
      'side-menu21': {
        templateUrl: 'templates/thuja30bcp.html',
        controller: 'searchCtrl'
      }    
    }
  })

  .state('homeopathy.urtica6', {
    url: '/page807',
    views: {
      'side-menu21': {
        templateUrl: 'templates/urtica6.html',
        controller: 'searchCtrl'
      }    
    }
  })


  .state('homeopathy.veratrum6', {
    url: '/page808',
    views: {
      'side-menu21': {
        templateUrl: 'templates/veratrum6.html',
        controller: 'searchCtrl'
      }    
    }
  })


  .state('homeopathy.yeastaway', {
    url: '/page809',
    views: {
      'side-menu21': {
        templateUrl: 'templates/yeastaway.html',
        controller: 'searchCtrl'
      }    
    }
  })


  .state('homeopathy.zincum30', {
    url: '/page810',
    views: {
      'side-menu21': {
        templateUrl: 'templates/zincum30.html',
        controller: 'searchCtrl'
      }    
    }
  })


  .state('homeopathy.zincum6', {
    url: '/page811',
    views: {
      'side-menu21': {
        templateUrl: 'templates/zincum6.html',
        controller: 'searchCtrl'
      }    
    }
  })












  .state('homeopathy.footPains', {
    url: '/page600',
    views: {
      'tab3': {
        templateUrl: 'templates/footPains.html',
        controller: 'footPainsCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/footPains.html',
        controller: 'footPainsCtrl'
      }
    }
  })

  .state('homeopathy.coldSneezing', {
    url: '/page601',
    views: {
      'tab3': {
        templateUrl: 'templates/coldsneezing.html',
        controller: 'coldSneezingCtrl'
      },
      'side-menu21': {
        templateUrl: 'templates/coldsneezing.html',
        controller: 'coldSneezingCtrl'
      }
    }
  })
  

  ///

$urlRouterProvider.otherwise('/side-menu21/page1')


});