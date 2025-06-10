#!/bin/bash

# Set environment variables
export ANDROID_HOME=$HOME/Android/Sdk
export ANDROID_SDK_ROOT=$ANDROID_HOME
export PATH=$PATH:$ANDROID_HOME/emulator:$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:$ANDROID_HOME/platform-tools

# Start the emulator with proper flags
$ANDROID_HOME/emulator/emulator -avd Pixel_8_API_35 -no-snapshot -no-audio -no-boot-anim -grpc-use-token -writable-system
