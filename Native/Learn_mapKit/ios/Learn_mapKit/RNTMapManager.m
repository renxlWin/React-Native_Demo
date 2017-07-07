//
//  RNTMapManager.m
//  Learn_mapKit
//
//  Created by RXL on 2017/7/4.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "RNTMapManager.h"
#import <React/RCTConvert.h>

@interface RNTMapManager ()

@property (nonatomic, strong) MKMapView *mapView;

@end

@implementation RNTMapManager

RCT_EXPORT_MODULE()

RCT_EXPORT_VIEW_PROPERTY(pitchEnabled, BOOL)

RCT_CUSTOM_VIEW_PROPERTY(region, MKCoordinateRegion, RNTMap)
{
  [view setRegion:json ? [RCTConvert MKCoordinateRegion:json] : defaultView.region animated:YES];
}

- (UIView *)view
{
  
  return self.mapView;
}

- (MKMapView *)mapView{
  if (!_mapView) {
    return [[MKMapView alloc] init];
  }else{
    
    return _mapView;
  }
}



@end
