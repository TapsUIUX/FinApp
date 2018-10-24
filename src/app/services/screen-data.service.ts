import { Injectable } from '@angular/core';
 

@Injectable({providedIn: 'root'})
export class ScreenDataService {

  constructor() { }

  keyNonGaapMetricsTitle : {value:"KEY NON-GAAP METRICS"};

  KPITitle : {value:"KPI'S"};



  keyNonGaapMetricsName:Array<object> = [{name:"Revenue",sub:["Subscription","Cost of Revenue","Advertising"]},{name:"Payments",sub:null},{name:"Gross Margin",sub:null},{name:"Marketing & Sales",sub:null},{name:"EBITDA",sub:null},{name:"Net Income",sub:null},{name:"Free Cash Flow (FCF)",sub:null},{name:"Reasearch & Development",sub:null}] ;



  KPINames:Array<object> = [ {name:"Daily Active Users",sub:null},{name:"Monthly Active Users",sub:null},{name:"Unique Visitors",sub:null},{name:"Registered Members",sub:null},{name:"Timeline Views",sub:null},{name:"Average Revenue/User",sub:null},{name:"Page Views",sub:null}];




  companyNotInList:Array<object> = 
  [
    {
      name: "GOOGLE INC",
      date: "AUG 2018",
      selected:true,
      logo:"google.svg",
      monthlyRevenue:"19.2M",
      keyNonGaapMetrics: {
        revenue: { s1: true, media: true ,press:false,value:"23.4M"},
        subscription: { s1: false, media: false,value:"19M" },
        costOfRevenue: { s1: true, media: false,value:"194K" },
        Advertising: { s1: false, media: true ,press:false,value:"152K"},
        payments: { s1: true, media: false ,press:false,value:"90M"},
        grossMargin: { s1: true, media: true,press:false,value:"66.2M" },
        marketingAndSales: { s1: true, media: false ,press:true,value:"70K"},
        EBITDA: { s1: false, media: true,press:false,value:"105.4M" },
        netIncome: { s1: true, media: false ,press:true,value:"5.5M"},
        freeCashFlow: { s1: false, media: false ,press:false,value:"88.8M"},
        rAndd: { s1: true, media: false,press:false,value:"85.2M" },
      },
      KPIs: {
        dailyActiveUsers: { s1: true, media: false,press:false,value:"210K"},
        monthlyActiveUsers: { s1: false, media: false,press:true,value:"199K"},
        uniqueVisitor: { s1: false, media: false,press:false},
        registeredMebers: { s1: false, media: false,press:false,value:"98K"},
        TimelineViews: { s1: true, media: true,press:true,value:"210K" },
        averageRevenuePerUser: { s1: true, media: false,press:false,value:"90.1K"},
        pageViews: { s1: true, media: false,press:false,value:"210K" }
      },
  
      keyMatrics:{
        linkClicks:{value:"200K"},
        customerAquisitionCost:{value:"$2.00"},
        indirectSales:{value:"95%"},
        engagementRate:{value:"90%"},
        newSessions:{value:"85%"},
        bounceRate:{value:"45%"}
      }
    },
    {
      name: "LINKED IN",
      date: "AUG 2018",
      selected:true,
      logo:"linked-in.svg",
      monthlyRevenue:"11.2M",
      keyNonGaapMetrics: {
        revenue: { s1: true, media: false ,press:false,value:"23.4M"},
        subscription: { s1: false, media: false,value:"49M" },
        costOfRevenue: { s1: true, media: false,value:"94K" },
        Advertising: { s1: false, media: true ,press:false,value:"52K"},
        payments: { s1: false, media: false ,press:false,value:"98M"},
        grossMargin: { s1: true, media: true,press:false,value:"61.2M" },
        marketingAndSales: { s1: true, media: false ,press:true,value:"33K"},
        EBITDA: { s1: true, media: true,press:false,value:"95.4M" },
        netIncome: { s1: true, media: false ,press:true,value:"2.5M"},
        freeCashFlow: { s1: false, media: false ,press:false,value:"58.8M"},
        rAndd: { s1: false, media: false,press:false,value:"45.2M" },
      },
      KPIs: {
        dailyActiveUsers: { s1: false, media: false,press:false,value:"110K"},
        monthlyActiveUsers: { s1: true, media: false,press:true,value:"99K"},
        uniqueVisitor: { s1: false, media: false,press:false},
        registeredMebers: { s1: true, media: true,press:false,value:"92K"},
        TimelineViews: { s1: true, media: true,press:true,value:"120K" },
        averageRevenuePerUser: { s1: false, media: false,press:false,value:"60.1K"},
        pageViews: { s1: true, media: false,press:false,value:"110K" }
      },
  
      keyMatrics:{
        linkClicks:{value:"100K"},
        customerAquisitionCost:{value:"$4.00"},
        indirectSales:{value:"45%"},
        engagementRate:{value:"60%"},
        newSessions:{value:"15%"},
        bounceRate:{value:"55%"}
      }
    }
  ]

  //suggested 4 companies in the display.

  companyData: Array<object> = 
  [
  {
    name: "FACEBOOK",
    date: "AUG 2018",
    selected:true,
    logo:"facebook-logo.svg",
    monthlyRevenue:"10.2M",
    keyNonGaapMetrics: {
      revenue: { s1: false, media: false ,press:false,value:"87.4M"},
      subscription: { s1: true, media: true,press:false,value:"80M" },
      costOfRevenue: { s1: false, media: false,value:"29K" },
      Advertising: { s1: true, media: false ,press:false,value:"89K"},
      payments: { s1: true, media: false ,press:true,value:"20M"},
      grossMargin: { s1: true, media: false,press:false,value:"18.2M" },
      marketingAndSales: { s1: true, media: false ,press:false,value:"29K"},
      EBITDA: { s1: true, media: false,press:false,value:"92.4M" },
      netIncome: { s1: false, media: false ,press:true,value:"1.3M"},
      freeCashFlow: { s1: false, media: false ,press:false,value:"34.8M"},
      rAndd: { s1: true, media: false,press:true,value:"18.2M" },
    },
    KPIs: {
      dailyActiveUsers: { s1: true, media: false,press:true,value:"180K"},
      monthlyActiveUsers: { s1: false, media: false,press:false,value:"120K"},
      uniqueVisitor: { s1: true, media: false,press:false,},
      registeredMebers: { s1: true, media: false,press:true,value:"70K"},
      TimelineViews: { s1: true, media: false,press:false,value:"100K" },
      averageRevenuePerUser: { s1: false, media: false,press:false,value:"60.1K"},
      pageViews: { s1: true, media: false,press:false,value:"180K" }
    },

    keyMatrics:{
      linkClicks:{value:"180K"},
      customerAquisitionCost:{value:"$2.00"},
      indirectSales:{value:"45%"},
      engagementRate:{value:"60%"},
      newSessions:{value:"91%"},
      bounceRate:{value:"25%"}
    }
  },
  {
    name: "TWITTER INC",
    date: "AUG 2018",
    selected:true,
    logo:"twitter.svg",
    monthlyRevenue:"6.2M",
    keyNonGaapMetrics: {
      revenue: { s1: false, media: false ,press:false,value:"88.4M"},
      subscription: { s1: true, media: true,value:"70M" },
      costOfRevenue: { s1: false, media: true,value:"24K" },
      Advertising: { s1: true, media: false ,press:true,value:"99K"},
      payments: { s1: true, media: true ,press:false,value:"10M"},
      grossMargin: { s1: true, media: false,press:true,value:"18.2M" },
      marketingAndSales: { s1: true, media: false ,press:false,value:"55K"},
      EBITDA: { s1: true, media: true,press:false,value:"95.4M" },
      netIncome: { s1: false, media: false ,press:true,value:"1.9M"},
      freeCashFlow: { s1: false, media: false ,press:false,value:"37.8M"},
      rAndd: { s1: false, media: false,press:false,value:"17.2M" },
    },
    KPIs: {
      dailyActiveUsers: { s1: true, media: false,press:false,value:"170K"},
      monthlyActiveUsers: { s1: false, media: false,press:false,value:"150K"},
      uniqueVisitor: { s1: true, media: false,press:false,},
      registeredMebers: { s1: true, media: false,press:false,value:"60K"},
      TimelineViews: { s1: true, media: false,press:true,value:"140K" },
      averageRevenuePerUser: { s1: false, media: false,press:false,value:"80.1K"},
      pageViews: { s1: true, media: false,press:false,value:"100K" }
    },

    keyMatrics:{
      linkClicks:{value:"140K"},
      customerAquisitionCost:{value:"$6.00"},
      indirectSales:{value:"75%"},
      engagementRate:{value:"40%"},
      newSessions:{value:"41%"},
      bounceRate:{value:"55%"}
    }
  },
  {
    name: "YELP INC",
    date: "AUG 2018",
    selected:true,
    logo:"yelp.svg",
    monthlyRevenue:"9.2M",
    keyNonGaapMetrics: {
      revenue: { s1: false, media: false ,press:false,value:"58.4M"},
      subscription: { s1: true, media: false,value:"80M" },
      costOfRevenue: { s1: false, media: false,value:"54K" },
      Advertising: { s1: true, media: true ,press:false,value:"109K"},
      payments: { s1: true, media: false ,press:false,value:"60M"},
      grossMargin: { s1: true, media: false,press:false,value:"19.2M" },
      marketingAndSales: { s1: true, media: false ,press:true,value:"59K"},
      EBITDA: { s1: true, media: true,press:false,value:"97.4M" },
      netIncome: { s1: true, media: false ,press:true,value:"2.1M"},
      freeCashFlow: { s1: false, media: false ,press:false,value:"36.8M"},
      rAndd: { s1: false, media: false,press:false,value:"18.2M" },
    },
    KPIs: {
      dailyActiveUsers: { s1: false, media: false,press:false,value:"190K"},
      monthlyActiveUsers: { s1: true, media: false,press:true,value:"130K"},
      uniqueVisitor: { s1: true, media: false,press:false,},
      registeredMebers: { s1: false, media: false,press:false,value:"80K"},
      TimelineViews: { s1: true, media: true,press:true,value:"120K" },
      averageRevenuePerUser: { s1: false, media: false,press:false,value:"89.1K"},
      pageViews: { s1: true, media: false,press:false,value:"130K" }
    },

    keyMatrics:{
      linkClicks:{value:"110K"},
      customerAquisitionCost:{value:"$2.00"},
      indirectSales:{value:"65%"},
      engagementRate:{value:"60%"},
      newSessions:{value:"11%"},
      bounceRate:{value:"95%"}
    }
  },
  {
    name: "SNAP INC",
    date: "AUG 2018",
    selected:true,
    logo:"snap.svg",
    monthlyRevenue:"5.2M",
    keyNonGaapMetrics: {
      revenue: { s1: false, media: true ,press:false,value:"26.4M"},
      subscription: { s1: false, media: false,value:"40M" },
      costOfRevenue: { s1: false, media: false,value:"64K" },
      Advertising: { s1: false, media: true ,press:false,value:"102K"},
      payments: { s1: true, media: false ,press:false,value:"40M"},
      grossMargin: { s1: true, media: true,press:false,value:"16.2M" },
      marketingAndSales: { s1: true, media: false ,press:true,value:"50K"},
      EBITDA: { s1: false, media: true,press:false,value:"91.4M" },
      netIncome: { s1: true, media: false ,press:true,value:"2.5M"},
      freeCashFlow: { s1: false, media: false ,press:false,value:"31.8M"},
      rAndd: { s1: true, media: false,press:false,value:"11.2M" },
    },
    KPIs: {
      dailyActiveUsers: { s1: true, media: false,press:false,value:"110K"},
      monthlyActiveUsers: { s1: false, media: false,press:true,value:"139K"},
      uniqueVisitor: { s1: false, media: false,press:false},
      registeredMebers: { s1: false, media: false,press:false,value:"88K"},
      TimelineViews: { s1: true, media: true,press:true,value:"110K" },
      averageRevenuePerUser: { s1: true, media: false,press:false,value:"80.1K"},
      pageViews: { s1: true, media: false,press:false,value:"110K" }
    },

    keyMatrics:{
      linkClicks:{value:"100K"},
      customerAquisitionCost:{value:"$7.00"},
      indirectSales:{value:"15%"},
      engagementRate:{value:"70%"},
      newSessions:{value:"15%"},
      bounceRate:{value:"45%"}
    }
  }

 
  ]


 
  
  
}
