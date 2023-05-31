package com.nativebridgedemo;

import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import android.os.Build;

public class AppInfoModule extends ReactContextBaseJavaModule {
    AppInfoModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "AppInfoModule";
    }

    @ReactMethod
    public void getAppVersion(Promise promise) {
        try {
            PackageInfo packageInfo = getCurrentActivity().getPackageManager().getPackageInfo(getCurrentActivity().getPackageName(), 0);
            String versionName = packageInfo.versionName;
            promise.resolve(versionName);
        } catch (PackageManager.NameNotFoundException e) {
            promise.reject("APP_VERSION_ERROR", e.getMessage());
        }
    }

    @ReactMethod
    public void getBuildNumber(Promise promise) {
        try {
            PackageInfo packageInfo = getCurrentActivity().getPackageManager().getPackageInfo(getCurrentActivity().getPackageName(), 0);
            int buildNumber = packageInfo.versionCode;
            promise.resolve(buildNumber);
        } catch (PackageManager.NameNotFoundException e) {
            promise.reject("APP_VERSION_ERROR", e.getMessage());
        }
    }

    @ReactMethod
    public void getBundleIdentifier(Promise promise) {
        try {
            PackageInfo packageInfo = getCurrentActivity().getPackageManager().getPackageInfo(getCurrentActivity().getPackageName(), 0);
            String bundleIdentifier = packageInfo.applicationInfo.packageName;
            promise.resolve(bundleIdentifier);
        } catch (PackageManager.NameNotFoundException e) {
            promise.reject("APP_BUNDLE_IDENTIFIER_ERROR", e.getMessage());
        }
    }

    @ReactMethod
    public void getSystemVersion(Promise promise) {
        promise.resolve(Build.VERSION.RELEASE);
    }
}
