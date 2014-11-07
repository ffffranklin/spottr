# spottr

[![Build Status](https://secure.travis-ci.org/ffffranklin/spottr.svg?branch=master)](https://travis-ci.org/ffffranklin/spottr)
[![Dependency Status](https://david-dm.org/ffffranklin/spottr.svg)](https://david-dm.org/ffffranklin/spottr)

A tumblr blog proxy that converts XML tumblr logs to JSON

## Tumblr Template

The following template is required to create a valid tumblr content source for 
spottr. Just copy the XML below and place it in your tumblr theme HTML editor. 

```xml
<?xml version="1.0"?>
<!-- 

Spottr XML Theme
https://github.com/ffffranklin/spottr

Version: 0.0.11

Made by Franklin Clark 

-->
<data>
  <!-- Title -->
  <Title>{Title}</Title>
  <PlaintextTitle>{PlaintextTitle}</PlaintextTitle>
  <JSTitle>{JSTitle}</JSTitle>
  <JSPlaintextTitle>{JSPlaintextTitle}</JSPlaintextTitle>
  <URLEncodedTitle>{URLEncodedTitle}</URLEncodedTitle>

  <!-- Name -->
  <Name>{Title}</Name>
  <PlaintextName>{PlaintextName}</PlaintextName>
  <JSName>{JSName}</JSName>
  <JSPlaintextName>{JSPlaintextName}</JSPlaintextName>
  <URLEncodedName>{URLEncodedName}</URLEncodedName>
  
  {block:Description}
  <block:Description>
    <!-- Description -->
    <Description><![CDATA[{Description}]]></Description>
    <PlaintextDescription>{PlaintextDescription}</PlaintextDescription>
    <JSDescription>{JSDescription}</JSDescription>
    <JSPlaintextDescription>{JSPlaintextDescription}</JSPlaintextDescription>
    <URLEncodedDescription>{URLEncodedDescription}</URLEncodedDescription>
    <!-- MetaDescription -->
    <MetaDescription><![CDATA[{MetaDescription}]]></MetaDescription>
    <PlaintextMetaDescription>{PlaintextMetaDescription}</PlaintextMetaDescription>
    <JSMetaDescription>{JSMetaDescription}</JSMetaDescription>
    <JSPlaintextMetaDescription>{JSPlaintextMetaDescription}</JSPlaintextMetaDescription>
    <URLEncodedMetaDescription>{URLEncodedMetaDescription}</URLEncodedMetaDescription>
  </block:Description>
  {/block:Description}
  <!-- RSS -->
  <RSS>{RSS}</RSS>
  <PlaintextRSS>{PlaintextRSS}</PlaintextRSS>
  <JSRSS>{JSRSS}</JSRSS>
  <JSPlaintextRSS>{JSPlaintextRSS}</JSPlaintextRSS>
  <URLEncodedRSS>{URLEncodedRSS}</URLEncodedRSS>
  
  <!-- Favicon -->
  <Favicon>{Favicon}</Favicon>
  <PlaintextFavicon>{PlaintextFavicon}</PlaintextFavicon>
  <JSFavicon>{JSFavicon}</JSFavicon>
  <JSPlaintextFavicon>{JSPlaintextFavicon}</JSPlaintextFavicon>
  <URLEncodedFavicon>{URLEncodedFavicon}</URLEncodedFavicon>
  
  <!-- CustomCSS -->
  <CustomCSS><![CDATA[{CustomCSS}]]></CustomCSS>
  <PlaintextCustomCSS>{PlaintextCustomCSS}</PlaintextCustomCSS>
  <JSCustomCSS>{JSCustomCSS}</JSCustomCSS>
  <JSPlaintextCustomCSS>{JSPlaintextCustomCSS}</JSPlaintextCustomCSS>
  <URLEncodedCustomCSS>{URLEncodedCustomCSS}</URLEncodedCustomCSS>
  
  <!-- PortraitURL-16 -->
  <PortraitURL-16>{PortraitURL-16}</PortraitURL-16>
  <PlaintextPortraitURL-16>{PlaintextPortraitURL-16}</PlaintextPortraitURL-16>
  <JSPortraitURL-16>{JSPortraitURL-16}</JSPortraitURL-16>
  <JSPlaintextPortraitURL-16>{JSPlaintextPortraitURL-16}</JSPlaintextPortraitURL-16>
  <URLEncodedPortraitURL-16>{URLEncodedPortraitURL-16}</URLEncodedPortraitURL-16>
  
  <!-- PortraitURL-24 -->
  <PortraitURL-24>{PortraitURL-24}</PortraitURL-24>
  <PlaintextPortraitURL-24>{PlaintextPortraitURL-24}</PlaintextPortraitURL-24>
  <JSPortraitURL-24>{JSPortraitURL-24}</JSPortraitURL-24>
  <JSPlaintextPortraitURL-24>{JSPlaintextPortraitURL-24}</JSPlaintextPortraitURL-24>
  <URLEncodedPortraitURL-24>{URLEncodedPortraitURL-24}</URLEncodedPortraitURL-24>
  
  <!-- PortraitURL-30 -->
  <PortraitURL-30>{PortraitURL-30}</PortraitURL-30>
  <PlaintextPortraitURL-30>{PlaintextPortraitURL-30}</PlaintextPortraitURL-30>
  <JSPortraitURL-30>{JSPortraitURL-30}</JSPortraitURL-30>
  <JSPlaintextPortraitURL-30>{JSPlaintextPortraitURL-30}</JSPlaintextPortraitURL-30>
  <URLEncodedPortraitURL-30>{URLEncodedPortraitURL-30}</URLEncodedPortraitURL-30>
  
  <!-- PortraitURL-40 -->
  <PortraitURL-40>{PortraitURL-40}</PortraitURL-40>
  <PlaintextPortraitURL-40>{PlaintextPortraitURL-40}</PlaintextPortraitURL-40>
  <JSPortraitURL-40>{JSPortraitURL-40}</JSPortraitURL-40>
  <JSPlaintextPortraitURL-40>{JSPlaintextPortraitURL-40}</JSPlaintextPortraitURL-40>
  <URLEncodedPortraitURL-40>{URLEncodedPortraitURL-40}</URLEncodedPortraitURL-40>
  
  <!-- PortraitURL-48 -->
  <PortraitURL-48>{PortraitURL-48}</PortraitURL-48>
  <PlaintextPortraitURL-48>{PlaintextPortraitURL-48}</PlaintextPortraitURL-48>
  <JSPortraitURL-48>{JSPortraitURL-48}</JSPortraitURL-48>
  <JSPlaintextPortraitURL-48>{JSPlaintextPortraitURL-48}</JSPlaintextPortraitURL-48>
  <URLEncodedPortraitURL-48>{URLEncodedPortraitURL-48}</URLEncodedPortraitURL-48>
  
  <!-- PortraitURL-64 -->
  <PortraitURL-64>{PortraitURL-64}</PortraitURL-64>
  <PlaintextPortraitURL-64>{PlaintextPortraitURL-64}</PlaintextPortraitURL-64>
  <JSPortraitURL-64>{JSPortraitURL-64}</JSPortraitURL-64>
  <JSPlaintextPortraitURL-64>{JSPlaintextPortraitURL-64}</JSPlaintextPortraitURL-64>
  <URLEncodedPortraitURL-64>{URLEncodedPortraitURL-64}</URLEncodedPortraitURL-64>
  
  <!-- PortraitURL-96 -->
  <PortraitURL-96>{PortraitURL-96}</PortraitURL-96>
  <PlaintextPortraitURL-96>{PlaintextPortraitURL-96}</PlaintextPortraitURL-96>
  <JSPortraitURL-96>{JSPortraitURL-96}</JSPortraitURL-96>
  <JSPlaintextPortraitURL-96>{JSPlaintextPortraitURL-96}</JSPlaintextPortraitURL-96>
  <URLEncodedPortraitURL-96>{URLEncodedPortraitURL-96}</URLEncodedPortraitURL-96>
  
  <!-- PortraitURL-128 -->
  <PortraitURL-128>{PortraitURL-128}</PortraitURL-128>
  <PlaintextPortraitURL-128>{PlaintextPortraitURL-128}</PlaintextPortraitURL-128>
  <JSPortraitURL-128>{JSPortraitURL-128}</JSPortraitURL-128>
  <JSPlaintextPortraitURL-128>{JSPlaintextPortraitURL-128}</JSPlaintextPortraitURL-128>
  <URLEncodedPortraitURL-128>{URLEncodedPortraitURL-128}</URLEncodedPortraitURL-128>

  <!-- Navigation -->
  {block:Pagination}
    <block:Pagination>
      {block:PreviousPage}
        <block:PreviousPage>
          <PreviousPage>{PreviousPage}</PreviousPage>
        </block:PreviousPage>
      {/block:PreviousPage}
      {block:NextPage}
        <block:NextPage>
          <NextPage>{NextPage}</NextPage>
        </block:NextPage>
      {/block:NextPage}
      <CurrentPage>{CurrentPage}</CurrentPage>
      <TotalPages>{TotalPages}</TotalPages>
    </block:Pagination>
  {/block:Pagination}

  {block:PermalinkPagination}
    <block:PermalinkPagination>
    {block:PreviousPost}
      <block:PreviousPost>
        <PreviousPost>{PreviousPost}</PreviousPost>
      </block:PreviousPost>
    {/block:PreviousPost}
    {block:NextPost}
      <block:NextPost>
        <NextPost>{NextPost}</NextPost>
      </block:NextPost>
    {/block:NextPost}
    </block:PermalinkPagination>
  {/block:PermalinkPagination}
  
  <!-- Submissions -->
  {block:SubmissionsEnabled}
  <block:SubmissionsEnabled>
    <SubmitLabel>{SubmitLabel}</SubmitLabel>
  </block:SubmissionsEnabled>
  {/block:SubmissionsEnabled}
  
  <!-- Ask -->
  {block:AskEnabled}
  <block:AskEnabled>
    <AskLabel>{AskLabel}</AskLabel>
  </block:AskEnabled>
  {/block:AskEnabled}
  
  <!-- Pages -->
  {block:HasPages}
  <block:HasPages>
    <block:Pages>
      {block:Pages}
      <item>
        <URL>{URL}</URL>
        <Label>{Label}</Label>
      </item>
      {/block:Pages}
    </block:Pages>
  </block:HasPages>
  {/block:HasPages}
  
  <!-- Permalink Navigation -->
  {block:PermalinkPagination}
  <block:PermalinkPagination>
    {block:PreviousPost} 
    <block:PreviousPost>
      <PreviousPost>{PreviousPost}</PreviousPost>
    </block:PreviousPost>
    {/block:PreviousPost} 
    {block:NextPost}
    <block:NextPost>
      <NextPost>{NextPost}</NextPost>
    </block:NextPost>
    {/block:NextPost}
  </block:PermalinkPagination>
  {/block:PermalinkPagination}
  
  <!-- Posts -->
  
  <block:Posts>
    <exists>true</exists>
    {block:Posts}
    <item>
    <!-- Text -->
    {block:Text}
      <block:Text>
        {block:Title}
        <block:Title>
          <Title><![CDATA[{Title}]]></Title>
          <!-- Common -->
          <PostType>{PostType}</PostType>
          <PostType>{PostType}</PostType>
          <Permalink>{Permalink}</Permalink>
          <ShortURL>{ShortURL}</ShortURL>
          <PostID>{PostID}</PostID>
          <TagsAsClasses>{TagsAsClasses}</TagsAsClasses>
          <PostNotesURL>{PostNotesURL}</PostNotesURL>
        </block:Title>        
        {/block:Title}
        <FakeBody><![CDATA[{Body}]]></FakeBody>
        <PostType>{PostType}</PostType>
        <Permalink>{Permalink}</Permalink>
        <ShortURL>{ShortURL}</ShortURL>
        <PostID>{PostID}</PostID>
        <TagsAsClasses>{TagsAsClasses}</TagsAsClasses>
        <PostNotesURL>{PostNotesURL}</PostNotesURL>
        <!-- Dates and Times -->
        <DayOfMonth>{DayOfMonth}</DayOfMonth>
        <DayOfMonthWithZero>{DayOfMonthWithZero}</DayOfMonthWithZero>
        <DayOfWeek>{DayOfWeek}</DayOfWeek>
        <ShortDayOfWeek>{ShortDayOfWeek}</ShortDayOfWeek>
        <DayOfWeekNumber>{DayOfWeekNumber}</DayOfWeekNumber>
        <DayOfMonthSuffix>{DayOfMonthSuffix}</DayOfMonthSuffix>
        <DayOfYear>{DayOfYear}</DayOfYear>
        <WeekOfYear>{WeekOfYear}</WeekOfYear>
        <Month>{Month}</Month>
        <ShortMonth>{ShortMonth}</ShortMonth>
        <MonthNumber>{MonthNumber}</MonthNumber>
        <MonthNumberWithZero>{MonthNumberWithZero}</MonthNumberWithZero>
        <Year>{Year}</Year>
        <ShortYear>{ShortYear}</ShortYear>
        <AmPm>{AmPm}</AmPm>
        <CapitalAmPm>{CapitalAmPm}</CapitalAmPm>
        <themr12Hour>{12Hour}</themr12Hour>
        <themr24Hour>{24Hour}</themr24Hour>
        <themr12HourWithZero>{12HourWithZero}</themr12HourWithZero>
        <themr24HourWithZero>{24HourWithZero}</themr24HourWithZero>
        <Minutes>{Minutes}</Minutes>
        <Seconds>{Seconds}</Seconds>
        <Beats>{Beats}</Beats>
        <Timestamp>{Timestamp}</Timestamp>
        <TimeAgo>{TimeAgo}</TimeAgo>
      </block:Text>
    {/block:Text}
    
    <!-- Regular (deprecated) -->
    {block:Regular}
      <block:Regular>
        {block:Title}
        <block:Title>
          <Title><![CDATA[{Title}]]></Title>
          <!-- Common -->
          <PostType>{PostType}</PostType>
          <Permalink>{Permalink}</Permalink>
          <ShortURL>{ShortURL}</ShortURL>
          <PostID>{PostID}</PostID>
          <TagsAsClasses>{TagsAsClasses}</TagsAsClasses>
          <PostNotesURL>{PostNotesURL}</PostNotesURL>
        </block:Title>        
        {/block:Title}
        <FakeBody><![CDATA[{Body}]]></FakeBody>
        <PostType>{PostType}</PostType>
        <Permalink>{Permalink}</Permalink>
        <ShortURL>{ShortURL}</ShortURL>
        <PostID>{PostID}</PostID>
        <TagsAsClasses>{TagsAsClasses}</TagsAsClasses>
        <PostNotesURL>{PostNotesURL}</PostNotesURL>
        <!-- Dates and Times -->
        <DayOfMonth>{DayOfMonth}</DayOfMonth>
        <DayOfMonthWithZero>{DayOfMonthWithZero}</DayOfMonthWithZero>
        <DayOfWeek>{DayOfWeek}</DayOfWeek>
        <ShortDayOfWeek>{ShortDayOfWeek}</ShortDayOfWeek>
        <DayOfWeekNumber>{DayOfWeekNumber}</DayOfWeekNumber>
        <DayOfMonthSuffix>{DayOfMonthSuffix}</DayOfMonthSuffix>
        <DayOfYear>{DayOfYear}</DayOfYear>
        <WeekOfYear>{WeekOfYear}</WeekOfYear>
        <Month>{Month}</Month>
        <ShortMonth>{ShortMonth}</ShortMonth>
        <MonthNumber>{MonthNumber}</MonthNumber>
        <MonthNumberWithZero>{MonthNumberWithZero}</MonthNumberWithZero>
        <Year>{Year}</Year>
        <ShortYear>{ShortYear}</ShortYear>
        <AmPm>{AmPm}</AmPm>
        <CapitalAmPm>{CapitalAmPm}</CapitalAmPm>
        <themr12Hour>{12Hour}</themr12Hour>
        <themr24Hour>{24Hour}</themr24Hour>
        <themr12HourWithZero>{12HourWithZero}</themr12HourWithZero>
        <themr24HourWithZero>{24HourWithZero}</themr24HourWithZero>
        <Minutes>{Minutes}</Minutes>
        <Seconds>{Seconds}</Seconds>
        <Beats>{Beats}</Beats>
        <Timestamp>{Timestamp}</Timestamp>
        <TimeAgo>{TimeAgo}</TimeAgo>
      </block:Regular>
    {/block:Regular}
    
    <!-- Photo -->
    {block:Photo}
      <block:Photo>
        <PhotoAlt>{PhotoAlt}</PhotoAlt>
        {block:Caption}
        <block:Caption>
          <Caption><![CDATA[{Caption}]]></Caption>
          <!-- Common -->
          <PostType>{PostType}</PostType>
          <Permalink>{Permalink}</Permalink>
          <ShortURL>{ShortURL}</ShortURL>
          <PostID>{PostID}</PostID>
          <TagsAsClasses>{TagsAsClasses}</TagsAsClasses>
          <PostNotesURL>{PostNotesURL}</PostNotesURL>
        </block:Caption>
        {/block:Caption}
        <LinkURL>{LinkURL}</LinkURL>
        <LinkOpenTag><![CDATA[{LinkOpenTag}]]></LinkOpenTag>
        <LinkCloseTag><![CDATA[{LinkCloseTag}]]></LinkCloseTag>
        <PhotoURL-500><![CDATA[{PhotoURL-500}]]></PhotoURL-500>
        <PhotoURL-400><![CDATA[{PhotoURL-400}]]></PhotoURL-400>
        <PhotoURL-250><![CDATA[{PhotoURL-250}]]></PhotoURL-250>
        <PhotoURL-100><![CDATA[{PhotoURL-100}]]></PhotoURL-100>
        <PhotoURL-75sq><![CDATA[{PhotoURL-75sq}]]></PhotoURL-75sq>
        {block:HighRes}
        <block:HighRes>
          <PhotoURL-HighRes>{PhotoURL-HighRes}</PhotoURL-HighRes>
        </block:HighRes>
        {/block:HighRes}
        <!-- Common -->
        <PostType>{PostType}</PostType>
        <Permalink>{Permalink}</Permalink>
        <ShortURL>{ShortURL}</ShortURL>
        <PostID>{PostID}</PostID>
        <TagsAsClasses>{TagsAsClasses}</TagsAsClasses>
        <PostNotesURL>{PostNotesURL}</PostNotesURL>
        <!-- Dates and Times -->
        <DayOfMonth>{DayOfMonth}</DayOfMonth>
        <DayOfMonthWithZero>{DayOfMonthWithZero}</DayOfMonthWithZero>
        <DayOfWeek>{DayOfWeek}</DayOfWeek>
        <ShortDayOfWeek>{ShortDayOfWeek}</ShortDayOfWeek>
        <DayOfWeekNumber>{DayOfWeekNumber}</DayOfWeekNumber>
        <DayOfMonthSuffix>{DayOfMonthSuffix}</DayOfMonthSuffix>
        <DayOfYear>{DayOfYear}</DayOfYear>
        <WeekOfYear>{WeekOfYear}</WeekOfYear>
        <Month>{Month}</Month>
        <ShortMonth>{ShortMonth}</ShortMonth>
        <MonthNumber>{MonthNumber}</MonthNumber>
        <MonthNumberWithZero>{MonthNumberWithZero}</MonthNumberWithZero>
        <Year>{Year}</Year>
        <ShortYear>{ShortYear}</ShortYear>
        <AmPm>{AmPm}</AmPm>
        <CapitalAmPm>{CapitalAmPm}</CapitalAmPm>
        <themr12Hour>{12Hour}</themr12Hour>
        <themr24Hour>{24Hour}</themr24Hour>
        <themr12HourWithZero>{12HourWithZero}</themr12HourWithZero>
        <themr24HourWithZero>{24HourWithZero}</themr24HourWithZero>
        <Minutes>{Minutes}</Minutes>
        <Seconds>{Seconds}</Seconds>
        <Beats>{Beats}</Beats>
        <Timestamp>{Timestamp}</Timestamp>
        <TimeAgo>{TimeAgo}</TimeAgo>
      </block:Photo>
    {/block:Photo}
    
    <!-- Photoset -->
    {block:Photoset}
      <block:Photoset>
        {block:Caption}
        <block:Caption>
          <Caption><![CDATA[{Caption}]]></Caption>
          <!-- Common -->
          <PostType>{PostType}</PostType>
          <Permalink>{Permalink}</Permalink>
          <ShortURL>{ShortURL}</ShortURL>
          <PostID>{PostID}</PostID>
          <TagsAsClasses>{TagsAsClasses}</TagsAsClasses>
          <PostNotesURL>{PostNotesURL}</PostNotesURL>
        </block:Caption>
        {/block:Caption}
        <Photoset-500><![CDATA[{Photoset-500}]]></Photoset-500>
        <Photoset-400><![CDATA[{Photoset-400}]]></Photoset-400>
        <Photoset-250><![CDATA[{Photoset-250}]]></Photoset-250>
        <!-- Common -->
        <PostType>{PostType}</PostType>
        <Permalink>{Permalink}</Permalink>
        <ShortURL>{ShortURL}</ShortURL>
        <PostID>{PostID}</PostID>
        <TagsAsClasses>{TagsAsClasses}</TagsAsClasses>
        <PostNotesURL>{PostNotesURL}</PostNotesURL>
        <!-- Dates and Times -->
        <DayOfMonth>{DayOfMonth}</DayOfMonth>
        <DayOfMonthWithZero>{DayOfMonthWithZero}</DayOfMonthWithZero>
        <DayOfWeek>{DayOfWeek}</DayOfWeek>
        <ShortDayOfWeek>{ShortDayOfWeek}</ShortDayOfWeek>
        <DayOfWeekNumber>{DayOfWeekNumber}</DayOfWeekNumber>
        <DayOfMonthSuffix>{DayOfMonthSuffix}</DayOfMonthSuffix>
        <DayOfYear>{DayOfYear}</DayOfYear>
        <WeekOfYear>{WeekOfYear}</WeekOfYear>
        <Month>{Month}</Month>
        <ShortMonth>{ShortMonth}</ShortMonth>
        <MonthNumber>{MonthNumber}</MonthNumber>
        <MonthNumberWithZero>{MonthNumberWithZero}</MonthNumberWithZero>
        <Year>{Year}</Year>
        <ShortYear>{ShortYear}</ShortYear>
        <AmPm>{AmPm}</AmPm>
        <CapitalAmPm>{CapitalAmPm}</CapitalAmPm>
        <themr12Hour>{12Hour}</themr12Hour>
        <themr24Hour>{24Hour}</themr24Hour>
        <themr12HourWithZero>{12HourWithZero}</themr12HourWithZero>
        <themr24HourWithZero>{24HourWithZero}</themr24HourWithZero>
        <Minutes>{Minutes}</Minutes>
        <Seconds>{Seconds}</Seconds>
        <Beats>{Beats}</Beats>
        <Timestamp>{Timestamp}</Timestamp>
        <TimeAgo>{TimeAgo}</TimeAgo>
      </block:Photoset>
    {/block:Photoset}
    
    <!-- Quote -->
    {block:Quote}
      <block:Quote>
        <Quote><![CDATA[{Quote}]]></Quote>
        {block:Source}
        <block:Source>
          <Source><![CDATA[{Source}]]></Source>
          <!-- Common -->
          <PostType>{PostType}</PostType>
          <Permalink>{Permalink}</Permalink>
          <ShortURL>{ShortURL}</ShortURL>
          <PostID>{PostID}</PostID>
          <TagsAsClasses>{TagsAsClasses}</TagsAsClasses>
          <PostNotesURL>{PostNotesURL}</PostNotesURL>
        </block:Source>
        {/block:Source}
        <Length>{Length}</Length>
        <!-- Common -->
        <PostType>{PostType}</PostType>
        <Permalink>{Permalink}</Permalink>
        <ShortURL>{ShortURL}</ShortURL>
        <PostID>{PostID}</PostID>
        <TagsAsClasses>{TagsAsClasses}</TagsAsClasses>
        <PostNotesURL>{PostNotesURL}</PostNotesURL>
        <!-- Dates and Times -->
        <DayOfMonth>{DayOfMonth}</DayOfMonth>
        <DayOfMonthWithZero>{DayOfMonthWithZero}</DayOfMonthWithZero>
        <DayOfWeek>{DayOfWeek}</DayOfWeek>
        <ShortDayOfWeek>{ShortDayOfWeek}</ShortDayOfWeek>
        <DayOfWeekNumber>{DayOfWeekNumber}</DayOfWeekNumber>
        <DayOfMonthSuffix>{DayOfMonthSuffix}</DayOfMonthSuffix>
        <DayOfYear>{DayOfYear}</DayOfYear>
        <WeekOfYear>{WeekOfYear}</WeekOfYear>
        <Month>{Month}</Month>
        <ShortMonth>{ShortMonth}</ShortMonth>
        <MonthNumber>{MonthNumber}</MonthNumber>
        <MonthNumberWithZero>{MonthNumberWithZero}</MonthNumberWithZero>
        <Year>{Year}</Year>
        <ShortYear>{ShortYear}</ShortYear>
        <AmPm>{AmPm}</AmPm>
        <CapitalAmPm>{CapitalAmPm}</CapitalAmPm>
        <themr12Hour>{12Hour}</themr12Hour>
        <themr24Hour>{24Hour}</themr24Hour>
        <themr12HourWithZero>{12HourWithZero}</themr12HourWithZero>
        <themr24HourWithZero>{24HourWithZero}</themr24HourWithZero>
        <Minutes>{Minutes}</Minutes>
        <Seconds>{Seconds}</Seconds>
        <Beats>{Beats}</Beats>
        <Timestamp>{Timestamp}</Timestamp>
        <TimeAgo>{TimeAgo}</TimeAgo>
      </block:Quote>
    {/block:Quote}
    
    <!-- Link -->
    {block:Link}
      <block:Link>
        <URL>{URL}</URL>
        <Name>{Name}</Name>
        <Target>{Target}</Target>
        {block:Description} 
        <block:Description>
          <Description>{Description}</Description>
          <!-- Common -->
          <PostType>{PostType}</PostType>
          <Permalink>{Permalink}</Permalink>
          <ShortURL>{ShortURL}</ShortURL>
          <PostID>{PostID}</PostID>
          <TagsAsClasses>{TagsAsClasses}</TagsAsClasses>
          <PostNotesURL>{PostNotesURL}</PostNotesURL>
        </block:Description>
        {/block:Description}
        <!-- Common -->
        <PostType>{PostType}</PostType>
        <Permalink>{Permalink}</Permalink>
        <ShortURL>{ShortURL}</ShortURL>
        <PostID>{PostID}</PostID>
        <TagsAsClasses>{TagsAsClasses}</TagsAsClasses>
        <PostNotesURL>{PostNotesURL}</PostNotesURL>
        <!-- Dates and Times -->
        <DayOfMonth>{DayOfMonth}</DayOfMonth>
        <DayOfMonthWithZero>{DayOfMonthWithZero}</DayOfMonthWithZero>
        <DayOfWeek>{DayOfWeek}</DayOfWeek>
        <ShortDayOfWeek>{ShortDayOfWeek}</ShortDayOfWeek>
        <DayOfWeekNumber>{DayOfWeekNumber}</DayOfWeekNumber>
        <DayOfMonthSuffix>{DayOfMonthSuffix}</DayOfMonthSuffix>
        <DayOfYear>{DayOfYear}</DayOfYear>
        <WeekOfYear>{WeekOfYear}</WeekOfYear>
        <Month>{Month}</Month>
        <ShortMonth>{ShortMonth}</ShortMonth>
        <MonthNumber>{MonthNumber}</MonthNumber>
        <MonthNumberWithZero>{MonthNumberWithZero}</MonthNumberWithZero>
        <Year>{Year}</Year>
        <ShortYear>{ShortYear}</ShortYear>
        <AmPm>{AmPm}</AmPm>
        <CapitalAmPm>{CapitalAmPm}</CapitalAmPm>
        <themr12Hour>{12Hour}</themr12Hour>
        <themr24Hour>{24Hour}</themr24Hour>
        <themr12HourWithZero>{12HourWithZero}</themr12HourWithZero>
        <themr24HourWithZero>{24HourWithZero}</themr24HourWithZero>
        <Minutes>{Minutes}</Minutes>
        <Seconds>{Seconds}</Seconds>
        <Beats>{Beats}</Beats>
        <Timestamp>{Timestamp}</Timestamp>
        <TimeAgo>{TimeAgo}</TimeAgo>
      </block:Link>
    {/block:Link}
    
    <!-- Chat -->
    {block:Chat}
      <block:Chat>
        {block:Title}
        <block:Title>
          <Title>{Title}</Title>
          <!-- Common -->
          <PostType>{PostType}</PostType>
          <Permalink>{Permalink}</Permalink>
          <ShortURL>{ShortURL}</ShortURL>
          <PostID>{PostID}</PostID>
          <TagsAsClasses>{TagsAsClasses}</TagsAsClasses>
          <PostNotesURL>{PostNotesURL}</PostNotesURL>
        </block:Title>
        {/block:Title}
        <block:Lines>
          {block:Lines}
          <item>
            {block:Label}
            <block:Label>
              <Label>{Label}</Label>
            </block:Label>
            {/block:Label}
            <Name>{Name}</Name>
            <Line>{Line}</Line>
            <UserNumber>{UserNumber}</UserNumber>
            <Alt>{Alt}</Alt>
          </item>
          {/block:Lines}
        </block:Lines>
        <!-- Common -->
        <PostType>{PostType}</PostType>
        <Permalink>{Permalink}</Permalink>
        <ShortURL>{ShortURL}</ShortURL>
        <PostID>{PostID}</PostID>
        <TagsAsClasses>{TagsAsClasses}</TagsAsClasses>
        <PostNotesURL>{PostNotesURL}</PostNotesURL>
        <!-- Dates and Times -->
        <DayOfMonth>{DayOfMonth}</DayOfMonth>
        <DayOfMonthWithZero>{DayOfMonthWithZero}</DayOfMonthWithZero>
        <DayOfWeek>{DayOfWeek}</DayOfWeek>
        <ShortDayOfWeek>{ShortDayOfWeek}</ShortDayOfWeek>
        <DayOfWeekNumber>{DayOfWeekNumber}</DayOfWeekNumber>
        <DayOfMonthSuffix>{DayOfMonthSuffix}</DayOfMonthSuffix>
        <DayOfYear>{DayOfYear}</DayOfYear>
        <WeekOfYear>{WeekOfYear}</WeekOfYear>
        <Month>{Month}</Month>
        <ShortMonth>{ShortMonth}</ShortMonth>
        <MonthNumber>{MonthNumber}</MonthNumber>
        <MonthNumberWithZero>{MonthNumberWithZero}</MonthNumberWithZero>
        <Year>{Year}</Year>
        <ShortYear>{ShortYear}</ShortYear>
        <AmPm>{AmPm}</AmPm>
        <CapitalAmPm>{CapitalAmPm}</CapitalAmPm>
        <themr12Hour>{12Hour}</themr12Hour>
        <themr24Hour>{24Hour}</themr24Hour>
        <themr12HourWithZero>{12HourWithZero}</themr12HourWithZero>
        <themr24HourWithZero>{24HourWithZero}</themr24HourWithZero>
        <Minutes>{Minutes}</Minutes>
        <Seconds>{Seconds}</Seconds>
        <Beats>{Beats}</Beats>
        <Timestamp>{Timestamp}</Timestamp>
        <TimeAgo>{TimeAgo}</TimeAgo>
      </block:Chat>
    {/block:Chat}
    
    <!-- Audio -->
    {block:Audio}
      <block:Audio>
        {block:Caption}
        <block:Caption>
          <Caption><![CDATA[{Caption}]]></Caption>
          <!-- Common -->
          <PostType>{PostType}</PostType>
          <Permalink>{Permalink}</Permalink>
          <ShortURL>{ShortURL}</ShortURL>
          <PostID>{PostID}</PostID>
          <TagsAsClasses>{TagsAsClasses}</TagsAsClasses>
          <PostNotesURL>{PostNotesURL}</PostNotesURL>
        </block:Caption>
        {/block:Caption}
        <AudioPlayer><![CDATA[{AudioPlayer}]]></AudioPlayer>
        <AudioPlayerWhite><![CDATA[{AudioPlayerWhite}]]></AudioPlayerWhite>
        <AudioPlayerGrey><![CDATA[{AudioPlayerGrey}]]></AudioPlayerGrey>
        <AudioPlayerBlack><![CDATA[{AudioPlayerBlack}]]></AudioPlayerBlack>
        <RawAudioURL>{RawAudioURL}</RawAudioURL>
        <PlayCount>{PlayCount}</PlayCount>
        <FormattedPlayCount>{FormattedPlayCount}</FormattedPlayCount>
        <PlayCountWithLabel>{PlayCountWithLabel}</PlayCountWithLabel>
        {block:ExternalAudio}
        <block:ExternalAudio>
          <ExternalAudioURL>{ExternalAudioURL}</ExternalAudioURL>
          <!-- Common -->
          <PostType>{PostType}</PostType>
          <Permalink>{Permalink}</Permalink>
          <ShortURL>{ShortURL}</ShortURL>
          <PostID>{PostID}</PostID>
          <TagsAsClasses>{TagsAsClasses}</TagsAsClasses>
          <PostNotesURL>{PostNotesURL}</PostNotesURL>
        </block:ExternalAudio>
        {/block:ExternalAudio}
        {block:AlbumArt}
        <block:AlbumArt>
          <AlbumArtURL>{AlbumArtURL}</AlbumArtURL>
          <!-- Common -->
          <PostType>{PostType}</PostType>
          <Permalink>{Permalink}</Permalink>
          <ShortURL>{ShortURL}</ShortURL>
          <PostID>{PostID}</PostID>
          <TagsAsClasses>{TagsAsClasses}</TagsAsClasses>
          <PostNotesURL>{PostNotesURL}</PostNotesURL>
        </block:AlbumArt>
        {/block:AlbumArt}
        {block:Artist}
        <block:Artist>
          <Artist>{Artist}</Artist>
          <!-- Common -->
          <PostType>{PostType}</PostType>
          <Permalink>{Permalink}</Permalink>
          <ShortURL>{ShortURL}</ShortURL>
          <PostID>{PostID}</PostID>
          <TagsAsClasses>{TagsAsClasses}</TagsAsClasses>
          <PostNotesURL>{PostNotesURL}</PostNotesURL>
        </block:Artist>
        {/block:Artist}
        {block:Album}
        <block:Album>
          <Album>{Album}</Album>
          <!-- Common -->
          <PostType>{PostType}</PostType>
          <Permalink>{Permalink}</Permalink>
          <ShortURL>{ShortURL}</ShortURL>
          <PostID>{PostID}</PostID>
          <TagsAsClasses>{TagsAsClasses}</TagsAsClasses>
          <PostNotesURL>{PostNotesURL}</PostNotesURL>
        </block:Album>
        {/block:Album}
        {block:TrackName}
        <block:TrackName>
          <TrackName>{TrackName}</TrackName>
          <!-- Common -->
          <PostType>{PostType}</PostType>
          <Permalink>{Permalink}</Permalink>
          <ShortURL>{ShortURL}</ShortURL>
          <PostID>{PostID}</PostID>
          <TagsAsClasses>{TagsAsClasses}</TagsAsClasses>
          <PostNotesURL>{PostNotesURL}</PostNotesURL>
        </block:TrackName>
        {/block:TrackName}
        <!-- Common -->
        <PostType>{PostType}</PostType>
        <Permalink>{Permalink}</Permalink>
        <ShortURL>{ShortURL}</ShortURL>
        <PostID>{PostID}</PostID>
        <TagsAsClasses>{TagsAsClasses}</TagsAsClasses>
        <PostNotesURL>{PostNotesURL}</PostNotesURL>
        <!-- Dates and Times -->
        <DayOfMonth>{DayOfMonth}</DayOfMonth>
        <DayOfMonthWithZero>{DayOfMonthWithZero}</DayOfMonthWithZero>
        <DayOfWeek>{DayOfWeek}</DayOfWeek>
        <ShortDayOfWeek>{ShortDayOfWeek}</ShortDayOfWeek>
        <DayOfWeekNumber>{DayOfWeekNumber}</DayOfWeekNumber>
        <DayOfMonthSuffix>{DayOfMonthSuffix}</DayOfMonthSuffix>
        <DayOfYear>{DayOfYear}</DayOfYear>
        <WeekOfYear>{WeekOfYear}</WeekOfYear>
        <Month>{Month}</Month>
        <ShortMonth>{ShortMonth}</ShortMonth>
        <MonthNumber>{MonthNumber}</MonthNumber>
        <MonthNumberWithZero>{MonthNumberWithZero}</MonthNumberWithZero>
        <Year>{Year}</Year>
        <ShortYear>{ShortYear}</ShortYear>
        <AmPm>{AmPm}</AmPm>
        <CapitalAmPm>{CapitalAmPm}</CapitalAmPm>
        <themr12Hour>{12Hour}</themr12Hour>
        <themr24Hour>{24Hour}</themr24Hour>
        <themr12HourWithZero>{12HourWithZero}</themr12HourWithZero>
        <themr24HourWithZero>{24HourWithZero}</themr24HourWithZero>
        <Minutes>{Minutes}</Minutes>
        <Seconds>{Seconds}</Seconds>
        <Beats>{Beats}</Beats>
        <Timestamp>{Timestamp}</Timestamp>
        <TimeAgo>{TimeAgo}</TimeAgo>
      </block:Audio>
    {/block:Audio}
    
    <!-- Video -->
    {block:Video}
      <block:Video>
        {block:Caption}
        <block:Caption>
          <Caption><![CDATA[{Caption}]]></Caption>
          <!-- Common -->
          <PostType>{PostType}</PostType>
          <Permalink>{Permalink}</Permalink>
          <ShortURL>{ShortURL}</ShortURL>
          <PostID>{PostID}</PostID>
          <TagsAsClasses>{TagsAsClasses}</TagsAsClasses>
          <PostNotesURL>{PostNotesURL}</PostNotesURL>
        </block:Caption>
        {/block:Caption}
        <Video-500><![CDATA[{Video-500}]]></Video-500>
        <Video-400><![CDATA[{Video-400}]]></Video-400>
        <Video-250><![CDATA[{Video-250}]]></Video-250>
        <!-- Common -->
        <PostType>{PostType}</PostType>
        <Permalink>{Permalink}</Permalink>
        <ShortURL>{ShortURL}</ShortURL>
        <PostID>{PostID}</PostID>
        <TagsAsClasses>{TagsAsClasses}</TagsAsClasses>
        <PostNotesURL>{PostNotesURL}</PostNotesURL>
        <!-- Dates and Times -->
        <DayOfMonth>{DayOfMonth}</DayOfMonth>
        <DayOfMonthWithZero>{DayOfMonthWithZero}</DayOfMonthWithZero>
        <DayOfWeek>{DayOfWeek}</DayOfWeek>
        <ShortDayOfWeek>{ShortDayOfWeek}</ShortDayOfWeek>
        <DayOfWeekNumber>{DayOfWeekNumber}</DayOfWeekNumber>
        <DayOfMonthSuffix>{DayOfMonthSuffix}</DayOfMonthSuffix>
        <DayOfYear>{DayOfYear}</DayOfYear>
        <WeekOfYear>{WeekOfYear}</WeekOfYear>
        <Month>{Month}</Month>
        <ShortMonth>{ShortMonth}</ShortMonth>
        <MonthNumber>{MonthNumber}</MonthNumber>
        <MonthNumberWithZero>{MonthNumberWithZero}</MonthNumberWithZero>
        <Year>{Year}</Year>
        <ShortYear>{ShortYear}</ShortYear>
        <AmPm>{AmPm}</AmPm>
        <CapitalAmPm>{CapitalAmPm}</CapitalAmPm>
        <themr12Hour>{12Hour}</themr12Hour>
        <themr24Hour>{24Hour}</themr24Hour>
        <themr12HourWithZero>{12HourWithZero}</themr12HourWithZero>
        <themr24HourWithZero>{24HourWithZero}</themr24HourWithZero>
        <Minutes>{Minutes}</Minutes>
        <Seconds>{Seconds}</Seconds>
        <Beats>{Beats}</Beats>
        <Timestamp>{Timestamp}</Timestamp>
        <TimeAgo>{TimeAgo}</TimeAgo>
      </block:Video>
    {/block:Video}
    
    <!-- Answer -->
    {block:Answer}
      <block:Answer>
        <Question>{Question}</Question>
        <Answer><![CDATA[{Answer}]]></Answer>
        <Asker><![CDATA[{Asker}]]></Asker>
        <AskerPortraitURL-16>{AskerPortraitURL-16}</AskerPortraitURL-16>
        <AskerPortraitURL-24>{AskerPortraitURL-24}</AskerPortraitURL-24>
        <AskerPortraitURL-30>{AskerPortraitURL-30}</AskerPortraitURL-30>
        <AskerPortraitURL-40>{AskerPortraitURL-40}</AskerPortraitURL-40>
        <AskerPortraitURL-48>{AskerPortraitURL-48}</AskerPortraitURL-48>
        <AskerPortraitURL-64>{AskerPortraitURL-64}</AskerPortraitURL-64>
        <AskerPortraitURL-96>{AskerPortraitURL-96}</AskerPortraitURL-96>
        <AskerPortraitURL-128>{AskerPortraitURL-128}</AskerPortraitURL-128>
        <!-- Common -->
        <PostType>{PostType}</PostType>
        <Permalink>{Permalink}</Permalink>
        <ShortURL>{ShortURL}</ShortURL>
        <PostID>{PostID}</PostID>
        <TagsAsClasses>{TagsAsClasses}</TagsAsClasses>
        <PostNotesURL>{PostNotesURL}</PostNotesURL>
        <!-- Dates and Times -->
        <DayOfMonth>{DayOfMonth}</DayOfMonth>
        <DayOfMonthWithZero>{DayOfMonthWithZero}</DayOfMonthWithZero>
        <DayOfWeek>{DayOfWeek}</DayOfWeek>
        <ShortDayOfWeek>{ShortDayOfWeek}</ShortDayOfWeek>
        <DayOfWeekNumber>{DayOfWeekNumber}</DayOfWeekNumber>
        <DayOfMonthSuffix>{DayOfMonthSuffix}</DayOfMonthSuffix>
        <DayOfYear>{DayOfYear}</DayOfYear>
        <WeekOfYear>{WeekOfYear}</WeekOfYear>
        <Month>{Month}</Month>
        <ShortMonth>{ShortMonth}</ShortMonth>
        <MonthNumber>{MonthNumber}</MonthNumber>
        <MonthNumberWithZero>{MonthNumberWithZero}</MonthNumberWithZero>
        <Year>{Year}</Year>
        <ShortYear>{ShortYear}</ShortYear>
        <AmPm>{AmPm}</AmPm>
        <CapitalAmPm>{CapitalAmPm}</CapitalAmPm>
        <themr12Hour>{12Hour}</themr12Hour>
        <themr24Hour>{24Hour}</themr24Hour>
        <themr12HourWithZero>{12HourWithZero}</themr12HourWithZero>
        <themr24HourWithZero>{24HourWithZero}</themr24HourWithZero>
        <Minutes>{Minutes}</Minutes>
        <Seconds>{Seconds}</Seconds>
        <Beats>{Beats}</Beats>
        <Timestamp>{Timestamp}</Timestamp>
        <TimeAgo>{TimeAgo}</TimeAgo>
      </block:Answer>
    {/block:Answer}
    
    <!-- Common -->
    <PostType>{PostType}</PostType>
    <Permalink>{Permalink}</Permalink>
    <ShortURL>{ShortURL}</ShortURL>
    <PostID>{PostID}</PostID>
    <TagsAsClasses>{TagsAsClasses}</TagsAsClasses>
    <PostNotesURL>{PostNotesURL}</PostNotesURL>
    {block:RebloggedFrom}
    <!-- Reblogs -->
    <block:RebloggedFrom>
      <ReblogParentName>{ReblogParentName}</ReblogParentName>
      <ReblogParentTitle>{ReblogParentTitle}</ReblogParentTitle>
      <ReblogParentURL>{ReblogParentURL}</ReblogParentURL>
      <ReblogParentPortraitURL-16>{ReblogParentPortraitURL-16}</ReblogParentPortraitURL-16>
      <ReblogParentPortraitURL-24>{ReblogParentPortraitURL-24}</ReblogParentPortraitURL-24>
      <ReblogParentPortraitURL-30>{ReblogParentPortraitURL-30}</ReblogParentPortraitURL-30>
      <ReblogParentPortraitURL-40>{ReblogParentPortraitURL-40}</ReblogParentPortraitURL-40>
      <ReblogParentPortraitURL-48>{ReblogParentPortraitURL-48}</ReblogParentPortraitURL-48>
      <ReblogParentPortraitURL-64>{ReblogParentPortraitURL-64}</ReblogParentPortraitURL-64>
      <ReblogParentPortraitURL-96>{ReblogParentPortraitURL-96}</ReblogParentPortraitURL-96>
      <ReblogParentPortraitURL-128>{ReblogParentPortraitURL-128}</ReblogParentPortraitURL-128>
      <ReblogRootName>{ReblogRootName}</ReblogRootName>
      <ReblogRootTitle>{ReblogRootTitle}</ReblogRootTitle>
      <ReblogRootURL>{ReblogRootURL}</ReblogRootURL>
      <ReblogRootPortraitURL-16>{ReblogRootPortraitURL-16}</ReblogRootPortraitURL-16>
      <ReblogRootPortraitURL-24>{ReblogRootPortraitURL-24}</ReblogRootPortraitURL-24>
      <ReblogRootPortraitURL-30>{ReblogRootPortraitURL-30}</ReblogRootPortraitURL-30>
      <ReblogRootPortraitURL-40>{ReblogRootPortraitURL-40}</ReblogRootPortraitURL-40>
      <ReblogRootPortraitURL-48>{ReblogRootPortraitURL-48}</ReblogRootPortraitURL-48>
      <ReblogRootPortraitURL-64>{ReblogRootPortraitURL-64}</ReblogRootPortraitURL-64>
      <ReblogRootPortraitURL-96>{ReblogRootPortraitURL-96}</ReblogRootPortraitURL-96>
      <ReblogRootPortraitURL-128>{ReblogRootPortraitURL-128}</ReblogRootPortraitURL-128>
      <!-- Common -->
      <PostType>{PostType}</PostType>
      <Permalink>{Permalink}</Permalink>
      <ShortURL>{ShortURL}</ShortURL>
      <PostID>{PostID}</PostID>
      <TagsAsClasses>{TagsAsClasses}</TagsAsClasses>
      <PostNotesURL>{PostNotesURL}</PostNotesURL>
    </block:RebloggedFrom>
    {/block:RebloggedFrom}
    {block:Date}
    <!-- Dates -->
    <block:Date>
      <DayOfMonth>{DayOfMonth}</DayOfMonth>
      <DayOfMonthWithZero>{DayOfMonthWithZero}</DayOfMonthWithZero>
      <DayOfWeek>{DayOfWeek}</DayOfWeek>
      <ShortDayOfWeek>{ShortDayOfWeek}</ShortDayOfWeek>
      <DayOfWeekNumber>{DayOfWeekNumber}</DayOfWeekNumber>
      <DayOfMonthSuffix>{DayOfMonthSuffix}</DayOfMonthSuffix>
      <DayOfYear>{DayOfYear}</DayOfYear>
      <WeekOfYear>{WeekOfYear}</WeekOfYear>
      <Month>{Month}</Month>
      <ShortMonth>{ShortMonth}</ShortMonth>
      <MonthNumber>{MonthNumber}</MonthNumber>
      <MonthNumberWithZero>{MonthNumberWithZero}</MonthNumberWithZero>
      <Year>{Year}</Year>
      <ShortYear>{ShortYear}</ShortYear>
      <AmPm>{AmPm}</AmPm>
      <CapitalAmPm>{CapitalAmPm}</CapitalAmPm>
      <themr12Hour>{12Hour}</themr12Hour>
      <themr24Hour>{24Hour}</themr24Hour>
      <themr12HourWithZero>{12HourWithZero}</themr12HourWithZero>
      <themr24HourWithZero>{24HourWithZero}</themr24HourWithZero>
      <Minutes>{Minutes}</Minutes>
      <Seconds>{Seconds}</Seconds>
      <Beats>{Beats}</Beats>
      <Timestamp>{Timestamp}</Timestamp>
      <TimeAgo>{TimeAgo}</TimeAgo>
      <!-- Common -->
      <PostType>{PostType}</PostType>
      <Permalink>{Permalink}</Permalink>
      <ShortURL>{ShortURL}</ShortURL>
      <PostID>{PostID}</PostID>
      <TagsAsClasses>{TagsAsClasses}</TagsAsClasses>
      <PostNotesURL>{PostNotesURL}</PostNotesURL>
    </block:Date>
    {/block:Date}
    <!-- Notes -->
    {block:PostNotes}
    <block:PostNotes>
      <PostNotes>{PostNotes}</PostNotes>
      <!-- Common -->
      <PostType>{PostType}</PostType>
      <Permalink>{Permalink}</Permalink>
      <ShortURL>{ShortURL}</ShortURL>
      <PostID>{PostID}</PostID>
      <TagsAsClasses>{TagsAsClasses}</TagsAsClasses>
      <PostNotesURL>{PostNotesURL}</PostNotesURL>
    </block:PostNotes>
    {/block:PostNotes}
    {block:NoteCount}
    <block:NoteCount>
      <NoteCount>{NoteCount}</NoteCount>
      <NoteCountWithLabel>{NoteCountWithLabel}</NoteCountWithLabel>
      <!-- Common -->
      <PostType>{PostType}</PostType>
      <Permalink>{Permalink}</Permalink>
      <ShortURL>{ShortURL}</ShortURL>
      <PostID>{PostID}</PostID>
      <TagsAsClasses>{TagsAsClasses}</TagsAsClasses>
      <PostNotesURL>{PostNotesURL}</PostNotesURL>
    </block:NoteCount>
    {/block:NoteCount}
    {block:HasTags}
    <!-- Tags -->
    <block:HasTags>
      <block:Tags>
        {block:Tags}
        <item>
          <Tag>{Tag}</Tag>
          <URLSafeTag>{URLSafeTag}</URLSafeTag>
          <TagURL>{TagURL}</TagURL>
          <TagURLChrono>{TagURLChrono}</TagURLChrono>
        </item>
        {/block:Tags}
      </block:Tags>
    </block:HasTags>
    {/block:HasTags}

    <!-- Groups -->
    <PostAuthorName>{PostAuthorName}</PostAuthorName>
    <PostAuthorTitle>{PostAuthorTitle}</PostAuthorTitle>
    <PostAuthorURL>{PostAuthorURL}</PostAuthorURL>
    <PostAuthorPortraitURL-16>{PostAuthorPortraitURL-16}</PostAuthorPortraitURL-16>
    <PostAuthorPortraitURL-24>{PostAuthorPortraitURL-24}</PostAuthorPortraitURL-24>
    <PostAuthorPortraitURL-30>{PostAuthorPortraitURL-30}</PostAuthorPortraitURL-30>
    <PostAuthorPortraitURL-40>{PostAuthorPortraitURL-40}</PostAuthorPortraitURL-40>
    <PostAuthorPortraitURL-48>{PostAuthorPortraitURL-48}</PostAuthorPortraitURL-48>
    <PostAuthorPortraitURL-64>{PostAuthorPortraitURL-64}</PostAuthorPortraitURL-64>
    <PostAuthorPortraitURL-96>{PostAuthorPortraitURL-96}</PostAuthorPortraitURL-96>
    <PostAuthorPortraitURL-128>{PostAuthorPortraitURL-128}</PostAuthorPortraitURL-128>
    </item>
    {/block:Posts}
  </block:Posts>
  
  
  {block:GroupMembers}
  <!-- Group Members -->
  <block:GroupMembers>
    <block:GroupMember>
    {block:GroupMember}
      <item>
        <GroupMemberName>{GroupMemberName}</GroupMemberName>
        <GroupMemberTitle>{GroupMemberTitle}</GroupMemberTitle>
        <GroupMemberURL>{GroupMemberURL}</GroupMemberURL>
        <GroupMemberPortraitURL-16>{GroupMemberPortraitURL-16}</GroupMemberPortraitURL-16>
        <GroupMemberPortraitURL-24>{GroupMemberPortraitURL-24}</GroupMemberPortraitURL-24>
        <GroupMemberPortraitURL-30>{GroupMemberPortraitURL-30}</GroupMemberPortraitURL-30>
        <GroupMemberPortraitURL-40>{GroupMemberPortraitURL-40}</GroupMemberPortraitURL-40>
        <GroupMemberPortraitURL-48>{GroupMemberPortraitURL-48}</GroupMemberPortraitURL-48>
        <GroupMemberPortraitURL-64>{GroupMemberPortraitURL-64}</GroupMemberPortraitURL-64>
        <GroupMemberPortraitURL-96>{GroupMemberPortraitURL-96}</GroupMemberPortraitURL-96>
        <GroupMemberPortraitURL-128>{GroupMemberPortraitURL-128}</GroupMemberPortraitURL-128>
      </item>  
    {/block:GroupMember}  
    </block:GroupMember>
  </block:GroupMembers>
  {/block:GroupMembers}
  
  {block:IndexPage}
    <!-- Permalink Page -->
    <block:IndexPage>
      <exists>true</exists><!-- to ensure it has content -->
    </block:IndexPage>
  {/block:IndexPage}
  
  {block:PermalinkPage}
    <!-- Permalink Page -->
    <block:PermalinkPage>
      <exists>true</exists><!-- to ensure it has content -->
    </block:PermalinkPage>
  {/block:PermalinkPage}

  {block:DayPage}
  <!-- Day Pages -->
  <block:DayPage>
    <exists>true</exists><!-- to ensure it has content -->
    <block:DayPagination>
      <block:PreviousDayPage>
        {block:PreviousDayPage}
        <PreviousDayPage>{PreviousDayPage}</PreviousDayPage>
        {block:PreviousDayPage}
      </block:PreviousDayPage>
      <block:NextDayPage>
        {block:NextDayPage}
        <NextDayPage>{NextDayPage}</NextDayPage>
        {/block:NextDayPage}
      </block:NextDayPage>
    </block:DayPagination>
  </block:DayPage>
  {/block:DayPage}
  
  {block:TagPage}
  <!-- Tag Pages -->
  <block:TagPage>
    <exists>true</exists><!-- to ensure it has content -->
    <Tag>{Tag}</Tag>
    <URLSafeTag>{URLSafeTag}</URLSafeTag>
    <TagURL>{TagURL}</TagURL>
    <TagURLChrono>{TagURLChrono}</TagURLChrono>
  </block:TagPage>
  {/block:TagPage}

  <!-- Searches -->
  <SearchQuery>{SearchQuery}</SearchQuery>
  <URLSafeSearchQuery>{URLSafeSearchQuery}</URLSafeSearchQuery>
  {block:SearchPage}
  <block:SearchPage>
      <!-- Duplicated for context -->
    <SearchQuery>{SearchQuery}</SearchQuery>
    <URLSafeSearchQuery>{URLSafeSearchQuery}</URLSafeSearchQuery>
    <SearchResultCount>{SearchResultCount}</SearchResultCount>
    {block:NoSearchResults}
    <block:NoSearchResults>
      <!-- Duplicated for context -->
      <SearchQuery>{SearchQuery}</SearchQuery>
      <URLSafeSearchQuery>{URLSafeSearchQuery}</URLSafeSearchQuery>
    </block:NoSearchResults>
    {/block:NoSearchResults}
    {block:SearchResults}<!-- This is not noted in the theme documentation -->
    <block:SearchResults>
      <!-- Duplicated for context -->
      <SearchQuery>{SearchQuery}</SearchQuery>
      <URLSafeSearchQuery>{URLSafeSearchQuery}</URLSafeSearchQuery>
    </block:SearchResults>
    {/block:SearchResults}
  </block:SearchPage>
  {/block:SearchPage}

  {block:Following}
  <!-- Following -->
  <block:Following>
    <block:Followed>
    {block:Followed}
      <item>
        <FollowedName>{FollowedName}</FollowedName>
        <FollowedTitle>{FollowedTitle}</FollowedTitle>
        <FollowedURL>{FollowedURL}</FollowedURL>
        <FollowedPortraitURL-16>{FollowedPortraitURL-16}</FollowedPortraitURL-16>
        <FollowedPortraitURL-24>{FollowedPortraitURL-24}</FollowedPortraitURL-24>
        <FollowedPortraitURL-30>{FollowedPortraitURL-30}</FollowedPortraitURL-30>
        <FollowedPortraitURL-40>{FollowedPortraitURL-40}</FollowedPortraitURL-40>
        <FollowedPortraitURL-48>{FollowedPortraitURL-48}</FollowedPortraitURL-48>
        <FollowedPortraitURL-64>{FollowedPortraitURL-64}</FollowedPortraitURL-64>
        <FollowedPortraitURL-96>{FollowedPortraitURL-96}</FollowedPortraitURL-96>
        <FollowedPortraitURL-128>{FollowedPortraitURL-128}</FollowedPortraitURL-128>
      </item>
    {/block:Followed}
    </block:Followed>
  </block:Following>
  {/block:Following}
  
  {block:Likes}
  <!-- Likes -->
  <block:Likes>
    <Likes><![CDATA[{Likes}]]></Likes>
  </block:Likes>
  {/block:Likes}
</data>
```

