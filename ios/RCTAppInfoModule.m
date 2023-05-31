#import "RCTAppInfoModule.h"
#import <UIKit/UIKit.h>
#import <React/RCTLog.h>

@implementation RCTAppInfoModule

// To export a module named RCTAppInfoModule
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getAppVersion:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject) {
  resolve( [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleShortVersionString"]);
}

RCT_EXPORT_METHOD(getBuildNumber:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject) {
  resolve( [[NSBundle mainBundle]
            objectForInfoDictionaryKey:@"CFBundleVersion"]);
  
}

RCT_EXPORT_METHOD(getBundleIdentifier:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject) {
  resolve( [[NSBundle mainBundle]
            objectForInfoDictionaryKey:@"CFBundleIdentifier"]);
}

RCT_EXPORT_METHOD(getSystemVersion: (RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject) {
  UIDevice *currentDevice = [UIDevice currentDevice];
  resolve(currentDevice.systemVersion);
}


@end

