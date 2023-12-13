import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export const LayoutMetaFragment = gql`
  fragment layoutMeta on LayoutSectionRecord {
    id
    __typename
    idLink
    internalName
    paddingBottomDesktop
    paddingBottomMobile
    paddingBottomTablet
    paddingTopDesktop
    paddingTopMobile
    paddingTopTablet
    backgroundColor
  }
`;
export const LayoutSectionFragment = gql`
  fragment layoutSection on LayoutSectionRecord {
    ...layoutMeta
    component {
      ... on ComponentHeadingRecord {
        id
        __typename
      }
      ... on ComponentTrustBarRecord {
        id
        __typename
      }
      ... on ComponentCardDeckRecord {
        id
        __typename
      }
      ... on ComponentSlideboxRecord {
        id
        __typename
      }
      ... on ComponentQuoteRecord {
        id
        __typename
      }
      ... on ComponentQuoteSliderRecord {
        id
        __typename
      }
      ... on ComponentConversionPanelRecord {
        id
        __typename
      }
      ... on ComponentAccordionRecord {
        id
        __typename
      }
      ... on ComponentSingleInstanceRecord {
        id
        __typename
      }
      ... on ComponentHeroRecord {
        id
        __typename
      }
      ... on ComponentImageRecord {
        id
        __typename
      }
      ... on ComponentSwitchbackRecord {
        id
        __typename
      }
      ... on ComponentPricingCardDeckRecord {
        id
        __typename
      }
      ... on ComponentFeatureListRecord {
        id
        __typename
      }
      ... on ComponentTestimonialConversionPanelRecord {
        id
        __typename
      }
      ... on ComponentCodeTableRecord {
        id
        __typename
      }
      ... on ComponentVideoRecord {
        id
        __typename
      }
      ... on ComponentComparisonTableRecord {
        id
        __typename
      }
      ... on ComponentCodeTableRecord {
        id
        __typename
      }
      ... on ComponentPricingTableRecord {
        id
        __typename
      }
    }
  }
  ${LayoutMetaFragment}
`;
export const FileFragment = gql`
  fragment file on FileField {
    id
    title
    filename
    size
    alt
    url
    width
    height
  }
`;
export const SeoFragment = gql`
  fragment seo on SeoField {
    description
    title
    twitterCard
    image {
      ...file
    }
  }
  ${FileFragment}
`;
export const MenuItemFragment = gql`
  fragment menuItem on MenuItemRecord {
    id
    __typename
    internalName
    heading
    url
    icon
    iconFile {
      ...file
    }
    subhead
  }
  ${FileFragment}
`;
export const ComponentVideoFragment = gql`
  fragment componentVideo on ComponentVideoRecord {
    id
    __typename
    internalName
    title
    videoUrl
    showOnResourceHub
    thumbnail {
      ...file
    }
    videoFile {
      ...file
    }
    autoPlay
  }
  ${FileFragment}
`;
export const ComponentFormFragment = gql`
  fragment componentForm on ComponentFormRecord {
    id
    __typename
    internalName
    formId
    variant
    inverted
  }
`;
export const ComponentCallToActionFragment = gql`
  fragment componentCallToAction on ComponentCallToActionRecord {
    id
    __typename
    internalName
    buttonType
    color
    label
    link
    openInNewWindow
    startIcon
    endIcon
    popup {
      ...componentVideo
      ...componentForm
    }
  }
  ${ComponentVideoFragment}
  ${ComponentFormFragment}
`;
export const ComponentHeadingFragment = gql`
  fragment componentHeading on ComponentHeadingRecord {
    id
    __typename
    internalName
    animate
    eyebrow
    heading
    headingColor
    headingType
    desktopHeadingSize
    mobileHeadingSize
    tabletHeadingSize
    gradientBackgroundColor
    headingBody: body {
      blocks
      links {
        ...menuItem
      }
      value
    }
    bodyColor
    callToActions {
      ...componentCallToAction
    }
  }
  ${MenuItemFragment}
  ${ComponentCallToActionFragment}
`;
export const ComponentImageFragment = gql`
  fragment componentImage on ComponentImageRecord {
    id
    __typename
    caption
    imageDesktop {
      ...file
    }
    imageMobile {
      ...file
    }
  }
  ${FileFragment}
`;
export const MenuPricingItemFragment = gql`
  fragment menuPricingItem on MenuPricingItemRecord {
    id
    __typename
    heading
    subhead
    body
    icon
    iconColor
  }
`;
export const EntityCompanyFragment = gql`
  fragment entityCompany on EntityCompanyRecord {
    id
    __typename
    company
    companyLogo {
      ...componentImage
    }
    companyDarkLogo {
      ...componentImage
    }
    siteUrl
    twitch
    twitter
    github
    facebook
    linkedin
    youtube
    dribbble
    benefits {
      ...menuPricingItem
    }
    bio
    businessNeeds
    solution {
      ...menuItem
    }
    industry {
      id
      heading
      description
    }
  }
  ${ComponentImageFragment}
  ${MenuPricingItemFragment}
  ${MenuItemFragment}
`;
export const ComponentTrustbarFragment = gql`
  fragment componentTrustbar on ComponentTrustBarRecord {
    id
    __typename
    internalName
    isMarquee
    company {
      ...entityCompany
    }
    heading
    desktopHeadingSize
    mobileHeadingSize
    tabletHeadingSize
    logoHeight
    callToAction {
      ...componentCallToAction
    }
  }
  ${EntityCompanyFragment}
  ${ComponentCallToActionFragment}
`;
export const ComponentMultiTrustbarFragment = gql`
  fragment componentMultiTrustbar on ComponentTrustBarRecord {
    id
    __typename
    internalName
    company {
      ...entityCompany
    }
    heading
    desktopHeadingSize
    mobileHeadingSize
    tabletHeadingSize
    logoHeight
    callToAction {
      ...componentCallToAction
    }
    multiTrustbar {
      ...componentTrustbar
    }
  }
  ${EntityCompanyFragment}
  ${ComponentCallToActionFragment}
  ${ComponentTrustbarFragment}
`;
export const ComponentCardFragment = gql`
  fragment componentCard on ComponentCardRecord {
    id
    __typename
    internalName
    cardbody: body {
      blocks
      links {
        ...menuItem
      }
      value
    }
    callToAction {
      ...componentCallToAction
    }
    image {
      ...componentImage
    }
    cardIcon
    heading
    noHoverEffect
  }
  ${MenuItemFragment}
  ${ComponentCallToActionFragment}
  ${ComponentImageFragment}
`;
export const EntityPersonFragment = gql`
  fragment entityPerson on EntityPersonRecord {
    id
    __typename
    name
    slug
    externalLink
    headshot {
      ...file
    }
    role
    personCategory
    twitch
    twitter
    linkedin
    github
    bio {
      blocks
      links
      value
    }
    company {
      ...entityCompany
    }
  }
  ${FileFragment}
  ${EntityCompanyFragment}
`;
export const RefBlogCardFragment = gql`
  fragment refBlogCard on TemplateBlogRecord {
    id
    __typename
    internalName
    slug
    title
    author {
      ...entityPerson
    }
    coAuthors {
      ...entityPerson
    }
    category
    excerpt
    featuredImage {
      ...file
    }
    publishDate
    _publishedAt
    _updatedAt
    hideFromListing
  }
  ${EntityPersonFragment}
  ${FileFragment}
`;
export const RefTemplateCaseStudyFragment = gql`
  fragment refTemplateCaseStudy on TemplateCaseStudyRecord {
    id
    __typename
    internalName
    title
    category
    slug
    excerpt
    featuredImage {
      ...file
    }
    company {
      ...entityCompany
    }
    download
  }
  ${FileFragment}
  ${EntityCompanyFragment}
`;
export const RefTemplatePodcastFragment = gql`
  fragment refTemplatePodcast on TemplatePodcastRecord {
    id
    __typename
    internalName
    seo {
      ...seo
    }
    slug
    title
    podcastUrl
    podcastAudioUrl
    podcastAudioTitle
    publishDate
    guest {
      ...entityPerson
    }
    hostedBy {
      ...entityPerson
    }
  }
  ${SeoFragment}
  ${EntityPersonFragment}
`;
export const ComponentIconCardDeckFragment = gql`
  fragment componentIconCardDeck on ComponentCardDeckRecord {
    id
    __typename
    internalName
    variant
    optionalHeading {
      ...componentHeading
    }
    card {
      ...componentCard
      ...refBlogCard
      ...refTemplateCaseStudy
      ...refTemplatePodcast
    }
    addOns {
      id
      icon
      body {
        value
      }
    }
  }
  ${ComponentHeadingFragment}
  ${ComponentCardFragment}
  ${RefBlogCardFragment}
  ${RefTemplateCaseStudyFragment}
  ${RefTemplatePodcastFragment}
`;
export const ComponentCardDeckFragment = gql`
  fragment componentCardDeck on ComponentCardDeckRecord {
    id
    __typename
    internalName
    variant
    optionalHeading {
      ...componentHeading
    }
    card {
      ...componentCard
      ...refBlogCard
      ...refTemplateCaseStudy
      ...componentIconCardDeck
      ...refTemplatePodcast
    }
    addOns {
      id
      icon
      body {
        value
      }
    }
  }
  ${ComponentHeadingFragment}
  ${ComponentCardFragment}
  ${RefBlogCardFragment}
  ${RefTemplateCaseStudyFragment}
  ${ComponentIconCardDeckFragment}
  ${RefTemplatePodcastFragment}
`;
export const ComponentSlideboxItemFragment = gql`
  fragment componentSlideboxItem on ComponentSlideboxItemRecord {
    id
    __typename
    internalName
    heading
    audio {
      ...file
    }
    audioName {
      blocks
      links
      value
    }
    liveStreamingUrl
    requestUrl {
      blocks
      links
      value
    }
    payload {
      blocks
      links
      value
    }
    response {
      blocks
      links
      value
    }
    transcript {
      blocks
      links
      value
    }
  }
  ${FileFragment}
`;
export const MenuFeatureItemFragment = gql`
  fragment menuFeatureItem on MenuFeatureItemRecord {
    id
    __typename
    internalName
    heading
    subhead
    featureCode
    content {
      blocks
      links
      value
    }
    sideContent {
      blocks
      links
      value
    }
    isTranslationLayout
  }
`;
export const ComponentFeatureListFragment = gql`
  fragment componentFeatureList on ComponentFeatureListRecord {
    id
    __typename
    internalName
    optionalHeading {
      ...componentHeading
    }
    audio {
      ...file
    }
    features {
      ...menuFeatureItem
    }
    layout
  }
  ${ComponentHeadingFragment}
  ${FileFragment}
  ${MenuFeatureItemFragment}
`;
export const ComponentSlideboxFragment = gql`
  fragment componentSlidebox on ComponentSlideboxRecord {
    id
    __typename
    internalName
    optionalHeading {
      ...componentHeading
    }
    items {
      ...componentSlideboxItem
      ...componentFeatureList
    }
  }
  ${ComponentHeadingFragment}
  ${ComponentSlideboxItemFragment}
  ${ComponentFeatureListFragment}
`;
export const ComponentQuoteFragment = gql`
  fragment componentQuote on ComponentQuoteRecord {
    id
    __typename
    internalName
    person {
      ...entityPerson
    }
    quoteCompany: company {
      ...entityCompany
    }
    quoteText: quote
    callToAction {
      ...componentCallToAction
    }
    theme
  }
  ${EntityPersonFragment}
  ${EntityCompanyFragment}
  ${ComponentCallToActionFragment}
`;
export const ComponentQuoteSliderFragment = gql`
  fragment componentQuoteSlider on ComponentQuoteSliderRecord {
    id
    __typename
    internalName
    optionalHeading {
      ...componentHeading
    }
    callToAction {
      ...componentCallToAction
    }
    quotes {
      ...componentQuote
    }
    singleRow
  }
  ${ComponentHeadingFragment}
  ${ComponentCallToActionFragment}
  ${ComponentQuoteFragment}
`;
export const ComponentConversionPanelFragment = gql`
  fragment componentConversionPanel on ComponentConversionPanelRecord {
    id
    __typename
    internalName
    heading
    headingType
    desktopHeadingSize
    tabletHeadingSize
    mobileHeadingSize
    body {
      blocks
      links
      value
    }
    callToActions {
      ...componentCallToAction
    }
    form {
      ...componentForm
    }
    hasSocial
    isGrayBorder
    isContained
  }
  ${ComponentCallToActionFragment}
  ${ComponentFormFragment}
`;
export const MenuAccordionItemFragment = gql`
  fragment menuAccordionItem on MenuAccordionItemRecord {
    id
    __typename
    internalName
    heading
    body {
      blocks
      links
      value
    }
  }
`;
export const ComponentAccordionFragment = gql`
  fragment componentAccordion on ComponentAccordionRecord {
    id
    __typename
    internalName
    heading
    accordion {
      ...menuAccordionItem
    }
  }
  ${MenuAccordionItemFragment}
`;
export const ComponentSingleInstanceFragment = gql`
  fragment componentSingleInstance on ComponentSingleInstanceRecord {
    id
    __typename
    internalName
    optionalHeading {
      ...componentHeading
    }
    component
    json
    layout
    leadershipList {
      ...entityPerson
    }
    imageList {
      ...componentImage
    }
    callToActions {
      ...componentCallToAction
    }
  }
  ${ComponentHeadingFragment}
  ${EntityPersonFragment}
  ${ComponentImageFragment}
  ${ComponentCallToActionFragment}
`;
export const ComponentAnnouncementBarFragment = gql`
  fragment componentAnnouncementBar on ComponentAnnouncementBarRecord {
    id
    __typename
    internalName
    icon {
      ...file
    }
    heading {
      blocks
      links
      value
    }
    callToAction {
      ...componentCallToAction
    }
  }
  ${FileFragment}
  ${ComponentCallToActionFragment}
`;
export const ComponentTestimonialCardFragment = gql`
  fragment componentTestimonialCard on ComponentTestimonialCardRecord {
    id
    __typename
    internalName
    statistics {
      id
      statisticValue
      statisticLabel
    }
    quote {
      ...componentQuote
    }
  }
  ${ComponentQuoteFragment}
`;
export const ComponentHeroFragment = gql`
  fragment componentHero on ComponentHeroRecord {
    id
    __typename
    internalName
    layout
    animate
    heading
    headingColor
    headingType
    mobileHeadingSize
    tabletHeadingSize
    desktopHeadingSize
    bodyColor
    isWideMedia
    headingIcons {
      ...componentImage
    }
    heroBody: body {
      blocks
      links {
        ...componentForm
      }
      value
    }
    gradientBackgroundColor
    callToActions {
      ...componentCallToAction
    }
    announcementBar {
      ...componentAnnouncementBar
    }
    userReview
    references {
      ...refBlogCard
      ...refTemplateCaseStudy
    }
    form {
      ...componentForm
      ...componentImage
      ...componentTestimonialCard
      ...componentVideo
    }
  }
  ${ComponentImageFragment}
  ${ComponentFormFragment}
  ${ComponentCallToActionFragment}
  ${ComponentAnnouncementBarFragment}
  ${RefBlogCardFragment}
  ${RefTemplateCaseStudyFragment}
  ${ComponentTestimonialCardFragment}
  ${ComponentVideoFragment}
`;
export const ComponentMapFragment = gql`
  fragment componentMap on ComponentMapRecord {
    id
    __typename
    internalName
    isDarkMap
    location {
      latitude
      longitude
    }
  }
`;
export const ComponentSwitchbackFragment = gql`
  fragment componentSwitchback on ComponentSwitchbackRecord {
    id
    __typename
    internalName
    optionalHeading: heading {
      ...componentHeading
    }
    reference {
      ...componentImage
      ...componentVideo
      ...componentSlidebox
      ...componentMap
    }
    reverse
  }
  ${ComponentHeadingFragment}
  ${ComponentImageFragment}
  ${ComponentVideoFragment}
  ${ComponentSlideboxFragment}
  ${ComponentMapFragment}
`;
export const ComponentPricingCardFragment = gql`
  fragment componentPricingCard on ComponentPricingCardRecord {
    id
    __typename
    internalName
    icon
    headingKicker
    heading
    headingBadge
    subhead
    body
    bestFor
    price
    cardColor
    isActive
    models {
      ...menuPricingItem
    }
    features {
      ...menuPricingItem
    }
    addOns {
      blocks
      links
      value
    }
    support {
      ...menuPricingItem
    }
    callToAction {
      ...componentCallToAction
    }
  }
  ${MenuPricingItemFragment}
  ${ComponentCallToActionFragment}
`;
export const ComponentPricingCardDeckFragment = gql`
  fragment componentPricingCardDeck on ComponentPricingCardDeckRecord {
    id
    __typename
    internalName
    cards {
      ...componentPricingCard
    }
  }
  ${ComponentPricingCardFragment}
`;
export const ComponentTestimonialConversionPanelFragment = gql`
  fragment componentTestimonialConversionPanel on ComponentTestimonialConversionPanelRecord {
    id
    __typename
    internalName
    conversionHeading {
      ...componentHeading
    }
    conversionTrustBar {
      ...componentTrustbar
    }
    conversionQuote {
      ...componentQuote
    }
    formHeading
    formBody
    conversionForm {
      ...componentForm
    }
  }
  ${ComponentHeadingFragment}
  ${ComponentTrustbarFragment}
  ${ComponentQuoteFragment}
  ${ComponentFormFragment}
`;
export const ComponentCodeTableFragment = gql`
  fragment componentCodeTable on ComponentCodeTableRecord {
    id
    __typename
    tableHeading: heading {
      heading
      body {
        value
      }
    }
    codeSnippet {
      id
      code {
        value
      }
    }
  }
`;
export const ComponentComparisonTableFragment = gql`
  fragment componentComparisonTable on ComponentComparisonTableRecord {
    id
    __typename
    tableTitle
    tableComparisons {
      id
      companyIcon {
        ...file
      }
      company {
        ...entityCompany
      }
      companyData
    }
    tableSections {
      id
      sectionTitle
      sectionTable
    }
  }
  ${FileFragment}
  ${EntityCompanyFragment}
`;
export const ComponentPricingTableFragment = gql`
  fragment componentPricingTable on ComponentPricingTableRecord {
    id
    __typename
    title
    subheading
    tables {
      id
      tabLabel
      labelIcon
      tableRows {
        id
        headerRow
        highlightedRow
        tableRowGroups {
          id
          tableCells {
            id
            text
            textAlignment
            showTooltip
            tooltipText
            rowSpan
            textBadge
            icon
            backgroundColor
            callToAction {
              ...componentCallToAction
            }
          }
        }
      }
    }
  }
  ${ComponentCallToActionFragment}
`;
export const ComponentBentoStackedImageFragment = gql`
  fragment componentBentoStackedImage on ComponentBentoStackedImageRecord {
    id
    __typename
    internalName
    eyebrow
    eyebrowIcon {
      ...file
    }
    heading
    content {
      blocks
      links
      value
    }
    button {
      ...componentCallToAction
    }
    reference {
      ...componentImage
    }
    topAsset
  }
  ${FileFragment}
  ${ComponentCallToActionFragment}
  ${ComponentImageFragment}
`;
export const ComponentBentoSplitContentFragment = gql`
  fragment componentBentoSplitContent on ComponentBentoSplitContentRecord {
    id
    __typename
    internalName
    eyebrow
    eyebrowIcon {
      ...file
    }
    heading
    content {
      blocks
      links
      value
    }
    button {
      ...componentCallToAction
    }
    reference {
      ...componentImage
    }
  }
  ${FileFragment}
  ${ComponentCallToActionFragment}
  ${ComponentImageFragment}
`;
export const ComponentBentoTrustBarFragment = gql`
  fragment componentBentoTrustBar on ComponentBentoTrustBarRecord {
    id
    __typename
    internalName
    heading
    topLogos {
      ...entityCompany
    }
    bottomLogos {
      ...entityCompany
    }
    button {
      ...componentCallToAction
    }
  }
  ${EntityCompanyFragment}
  ${ComponentCallToActionFragment}
`;
export const ComponentBentoBoxFragment = gql`
  fragment componentBentoBox on ComponentBentoBoxRecord {
    id
    __typename
    internalName
    cards {
      ...componentBentoStackedImage
      ...componentBentoSplitContent
      ...componentBentoTrustBar
    }
  }
  ${ComponentBentoStackedImageFragment}
  ${ComponentBentoSplitContentFragment}
  ${ComponentBentoTrustBarFragment}
`;
export const LayoutComponentsFragment = gql`
  fragment layoutComponents on LayoutSectionRecord {
    ...layoutMeta
    component {
      ... on ComponentHeadingRecord {
        ...componentHeading
      }
      ... on ComponentTrustBarRecord {
        ...componentTrustbar
      }
      ... on ComponentTrustBarRecord {
        ...componentMultiTrustbar
      }
      ... on ComponentCardDeckRecord {
        ...componentCardDeck
      }
      ... on ComponentSlideboxRecord {
        ...componentSlidebox
      }
      ... on ComponentQuoteRecord {
        ...componentQuote
      }
      ... on ComponentQuoteSliderRecord {
        ...componentQuoteSlider
      }
      ... on ComponentConversionPanelRecord {
        ...componentConversionPanel
      }
      ... on ComponentAccordionRecord {
        ...componentAccordion
      }
      ... on ComponentSingleInstanceRecord {
        ...componentSingleInstance
      }
      ... on ComponentHeroRecord {
        ...componentHero
      }
      ... on ComponentImageRecord {
        ...componentImage
      }
      ... on ComponentSwitchbackRecord {
        ...componentSwitchback
      }
      ... on ComponentPricingCardDeckRecord {
        ...componentPricingCardDeck
      }
      ... on ComponentFeatureListRecord {
        ...componentFeatureList
      }
      ... on ComponentTestimonialConversionPanelRecord {
        ...componentTestimonialConversionPanel
      }
      ... on ComponentCodeTableRecord {
        ...componentCodeTable
      }
      ... on ComponentVideoRecord {
        ...componentVideo
      }
      ... on ComponentComparisonTableRecord {
        ...componentComparisonTable
      }
      ... on ComponentCodeTableRecord {
        ...componentCodeTable
      }
      ... on ComponentPricingTableRecord {
        ...componentPricingTable
      }
      ... on ComponentBentoBoxRecord {
        ...componentBentoBox
      }
    }
  }
  ${LayoutMetaFragment}
  ${ComponentHeadingFragment}
  ${ComponentTrustbarFragment}
  ${ComponentMultiTrustbarFragment}
  ${ComponentCardDeckFragment}
  ${ComponentSlideboxFragment}
  ${ComponentQuoteFragment}
  ${ComponentQuoteSliderFragment}
  ${ComponentConversionPanelFragment}
  ${ComponentAccordionFragment}
  ${ComponentSingleInstanceFragment}
  ${ComponentHeroFragment}
  ${ComponentImageFragment}
  ${ComponentSwitchbackFragment}
  ${ComponentPricingCardDeckFragment}
  ${ComponentFeatureListFragment}
  ${ComponentTestimonialConversionPanelFragment}
  ${ComponentCodeTableFragment}
  ${ComponentVideoFragment}
  ${ComponentComparisonTableFragment}
  ${ComponentPricingTableFragment}
  ${ComponentBentoBoxFragment}
`;
export const TemplatePageFragment = gql`
  fragment templatePage on TemplatePageRecord {
    id
    __typename
    internalName
    noIndex
    noHeader
    noFooter
    slug
    seo {
      ...seo
    }
    sections {
      ...layoutComponents
    }
  }
  ${SeoFragment}
  ${LayoutComponentsFragment}
`;
export const TemplatePageFullFragment = gql`
  fragment templatePageFull on TemplatePageRecord {
    id
    __typename
    internalName
    noIndex
    noHeader
    noFooter
    slug
    seo {
      ...seo
    }
    sections {
      ...layoutComponents
    }
  }
  ${SeoFragment}
  ${LayoutComponentsFragment}
`;
export const ComponentFooterFragment = gql`
  fragment componentFooter on ComponentFooterRecord {
    id
    __typename
    internalName
    heading
    subhead
    menuItem {
      ...menuItem
      menuItem {
        ...menuItem
      }
    }
    bottomFooter {
      ...menuItem
    }
    form {
      ...componentForm
    }
    disclaimerText
  }
  ${MenuItemFragment}
  ${ComponentFormFragment}
`;
export const TemplateBlogFragment = gql`
  fragment templateBlog on TemplateBlogRecord {
    id
    __typename
    internalName
    seo {
      ...seo
    }
    slug
    title
    author {
      ...entityPerson
    }
    coAuthors {
      ...entityPerson
    }
    category
    excerpt
    featuredImage {
      ...file
    }
    publishDate
    body {
      blocks {
        id
        __typename
        table
      }
      links {
        ...componentImage
        ...componentVideo
      }
      value
    }
    _publishedAt
    _updatedAt
    hideFromListing
  }
  ${SeoFragment}
  ${EntityPersonFragment}
  ${FileFragment}
  ${ComponentImageFragment}
  ${ComponentVideoFragment}
`;
export const TemplateBlogListFragment = gql`
  fragment templateBlogList on TemplateBlogRecord {
    id
    __typename
    internalName
    slug
    title
    author {
      ...entityPerson
    }
    coAuthors {
      ...entityPerson
    }
    category
    excerpt
    featuredImage {
      ...file
    }
    publishDate
  }
  ${EntityPersonFragment}
  ${FileFragment}
`;
export const TemplateSimpleBlogListFragment = gql`
  fragment templateSimpleBlogList on TemplateBlogRecord {
    id
    __typename
    author {
      ...entityPerson
    }
  }
  ${EntityPersonFragment}
`;
export const ComponentHeaderFragment = gql`
  fragment componentHeader on ComponentHeaderRecord {
    id
    __typename
    internalName
    logo {
      ...file
    }
    menu {
      ...menuItem
      menuItem {
        ...menuItem
        menuItem {
          ...menuItem
        }
      }
    }
    callToActions {
      ...componentCallToAction
    }
    showGlobalSearch
  }
  ${FileFragment}
  ${MenuItemFragment}
  ${ComponentCallToActionFragment}
`;
export const TemplateCaseStudyListFragment = gql`
  fragment templateCaseStudyList on TemplateCaseStudyRecord {
    id
    __typename
    internalName
    title
    category
    featuredImage {
      ...file
    }
    slug
  }
  ${FileFragment}
`;
export const TemplateCaseStudyFragment = gql`
  fragment templateCaseStudy on TemplateCaseStudyRecord {
    id
    __typename
    internalName
    title
    body {
      links {
        ...componentImage
      }
      value
    }
    category
    company {
      ...entityCompany
    }
    download
    excerpt
    featuredImage {
      ...file
    }
    slug
    seo {
      ...seo
    }
    sections {
      ...layoutComponents
    }
  }
  ${ComponentImageFragment}
  ${EntityCompanyFragment}
  ${FileFragment}
  ${SeoFragment}
  ${LayoutComponentsFragment}
`;
export const TemplateGlossaryFragment = gql`
  fragment templateGlossary on TemplateGlossaryRecord {
    id
    seo {
      description
      title
    }
    slug
    title
    categoryPage
    excerpt {
      value
    }
    body {
      blocks {
        id
        __typename
        table
      }
      links {
        ...componentImage
        ...componentVideo
      }
      value
    }
    _updatedAt
  }
  ${ComponentImageFragment}
  ${ComponentVideoFragment}
`;
export const TemplateWebinarFragment = gql`
  fragment templateWebinar on TemplateExternalWebinarRecord {
    id
    __typename
    internalName
    title
    url
    thumbnail {
      ...file
    }
  }
  ${FileFragment}
`;
export const TemplateResourcesFragment = gql`
  fragment templateResources on TemplateResourcesExternalRecord {
    id
    __typename
    internalName
    title
    resourceType
    link
    thumbnail {
      ...file
    }
  }
  ${FileFragment}
`;
export const TemplateNewsFragment = gql`
  fragment templateNews on TemplateNewsRecord {
    id
    __typename
    internalName
    company {
      ...entityCompany
    }
    title
    url
    publishDate
  }
  ${EntityCompanyFragment}
`;
export const TemplateChangelogFragment = gql`
  fragment templateChangelog on TemplateChangelogRecord {
    id
    __typename
    internalName
    seo {
      ...seo
    }
    slug
    title
    author {
      ...entityPerson
    }
    category
    publishDate
    body {
      blocks
      links
      value
    }
  }
  ${SeoFragment}
  ${EntityPersonFragment}
`;
export const TemplateBuiltWithDeepgramFragment = gql`
  fragment templateBuiltWithDeepgram on TemplateBuiltWithDeepgramRecord {
    id
    __typename
    internalName
    slug
    seo {
      ...seo
    }
    title
    author {
      ...entityPerson
    }
    body {
      blocks
      links {
        ...componentImage
      }
      value
    }
    caseStudyReference {
      id
      __typename
      internalName
      slug
    }
    excerpt
    featuredImage {
      ...file
    }
    publishDate
    videoUrl
  }
  ${SeoFragment}
  ${EntityPersonFragment}
  ${ComponentImageFragment}
  ${FileFragment}
`;
export const EntityTagFragment = gql`
  fragment entityTag on EntityTagRecord {
    id
    __typename
    internalName
    heading
    category
  }
`;
export const TemplateBuiltWithDeepgramListFragment = gql`
  fragment templateBuiltWithDeepgramList on TemplateBuiltWithDeepgramRecord {
    id
    __typename
    internalName
    slug
    title
    excerpt
    featuredImage {
      ...file
    }
    publishDate
    tags {
      ...entityTag
    }
  }
  ${FileFragment}
  ${EntityTagFragment}
`;
export const TemplateLegalFragment = gql`
  fragment templateLegal on TemplateLegalRecord {
    id
    __typename
    internalName
    seo {
      ...seo
    }
    slug
    title
    body {
      blocks
      links
      value
    }
  }
  ${SeoFragment}
`;
export const TemplatePodcastFragment = gql`
  fragment templatePodcast on TemplatePodcastRecord {
    id
    __typename
    internalName
    seo {
      ...seo
    }
    slug
    title
    podcastUrl
    podcastAudioUrl
    podcastAudioTitle
    publishDate
    body {
      blocks
      links {
        ...componentImage
        ...componentQuote
        ...componentVideo
      }
      value
    }
    guest {
      ...entityPerson
    }
    hostedBy {
      ...entityPerson
    }
  }
  ${SeoFragment}
  ${ComponentImageFragment}
  ${ComponentQuoteFragment}
  ${ComponentVideoFragment}
  ${EntityPersonFragment}
`;
export const TemplatePodcastListFragment = gql`
  fragment templatePodcastList on TemplatePodcastRecord {
    id
    __typename
    internalName
    slug
    title
  }
`;
export const TemplatePartnerFragment = gql`
  fragment templatePartner on TemplatePartnerRecord {
    id
    __typename
    internalName
    seo {
      ...seo
    }
    slug
    title
    category
    excerpt {
      blocks
      links
      value
    }
    thumbnailImage {
      ...file
    }
    category
    youtubeUrl
    caseStudy {
      ...refTemplateCaseStudy
    }
    featureListHeading {
      ...componentHeading
    }
    features {
      ...menuFeatureItem
    }
  }
  ${SeoFragment}
  ${FileFragment}
  ${RefTemplateCaseStudyFragment}
  ${ComponentHeadingFragment}
  ${MenuFeatureItemFragment}
`;
export const TemplatePartnerListFragment = gql`
  fragment templatePartnerList on TemplatePartnerRecord {
    id
    __typename
    internalName
    slug
    title
    category
    caseStudy {
      featuredImage {
        ...file
      }
    }
    thumbnailImage {
      ...file
    }
  }
  ${FileFragment}
`;
export const EntityCategoryFragment = gql`
  fragment entityCategory on EntityCategoryRecord {
    id
    __typename
    categoryName
    title
    description {
      blocks
      links
      value
    }
    image {
      ...file
    }
  }
  ${FileFragment}
`;
export const TemplateEventsDetailFragment = gql`
  fragment templateEventsDetail on TemplateEventsDetailRecord {
    id
    __typename
    internalName
    slug
    title
    excerpt
    description {
      blocks
      links
      value
    }
    eventFormId
    eventType
    eventDateTime
    speakers {
      ...entityPerson
    }
    eventGallery {
      ...componentImage
    }
    eventLocation {
      ...componentSwitchback
    }
  }
  ${EntityPersonFragment}
  ${ComponentImageFragment}
  ${ComponentSwitchbackFragment}
`;
export const GetComponentHeadingQuery = gql`
  query getComponentHeading($id: ItemId!) {
    data: componentHeading(filter: { id: { eq: $id } }) {
      ...componentHeading
    }
  }
  ${ComponentHeadingFragment}
`;

/**
 * __useGetComponentHeadingQuery__
 *
 * To run a query within a React component, call `useGetComponentHeadingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetComponentHeadingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetComponentHeadingQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetComponentHeadingQuery(
  baseOptions: Apollo.QueryHookOptions<GetComponentHeadingQuery, GetComponentHeadingQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetComponentHeadingQuery, GetComponentHeadingQueryVariables>(
    GetComponentHeadingQuery,
    options,
  );
}
export function useGetComponentHeadingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetComponentHeadingQuery, GetComponentHeadingQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetComponentHeadingQuery, GetComponentHeadingQueryVariables>(
    GetComponentHeadingQuery,
    options,
  );
}
export type GetComponentHeadingQueryHookResult = ReturnType<typeof useGetComponentHeadingQuery>;
export type GetComponentHeadingLazyQueryHookResult = ReturnType<typeof useGetComponentHeadingLazyQuery>;
export type GetComponentHeadingQueryResult = Apollo.QueryResult<
  GetComponentHeadingQuery,
  GetComponentHeadingQueryVariables
>;
export const GetComponentImageQuery = gql`
  query getComponentImage($id: ItemId!) {
    data: componentImage(filter: { id: { eq: $id } }) {
      ...componentImage
    }
  }
  ${ComponentImageFragment}
`;

/**
 * __useGetComponentImageQuery__
 *
 * To run a query within a React component, call `useGetComponentImageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetComponentImageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetComponentImageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetComponentImageQuery(
  baseOptions: Apollo.QueryHookOptions<GetComponentImageQuery, GetComponentImageQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetComponentImageQuery, GetComponentImageQueryVariables>(GetComponentImageQuery, options);
}
export function useGetComponentImageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetComponentImageQuery, GetComponentImageQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetComponentImageQuery, GetComponentImageQueryVariables>(GetComponentImageQuery, options);
}
export type GetComponentImageQueryHookResult = ReturnType<typeof useGetComponentImageQuery>;
export type GetComponentImageLazyQueryHookResult = ReturnType<typeof useGetComponentImageLazyQuery>;
export type GetComponentImageQueryResult = Apollo.QueryResult<GetComponentImageQuery, GetComponentImageQueryVariables>;
export const GetComponentTrustBarQuery = gql`
  query getComponentTrustBar($id: ItemId!) {
    data: componentTrustBar(filter: { id: { eq: $id } }) {
      ...componentTrustbar
      multiTrustbar {
        ...componentTrustbar
      }
    }
  }
  ${ComponentTrustbarFragment}
`;

/**
 * __useGetComponentTrustBarQuery__
 *
 * To run a query within a React component, call `useGetComponentTrustBarQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetComponentTrustBarQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetComponentTrustBarQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetComponentTrustBarQuery(
  baseOptions: Apollo.QueryHookOptions<GetComponentTrustBarQuery, GetComponentTrustBarQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetComponentTrustBarQuery, GetComponentTrustBarQueryVariables>(
    GetComponentTrustBarQuery,
    options,
  );
}
export function useGetComponentTrustBarLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetComponentTrustBarQuery, GetComponentTrustBarQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetComponentTrustBarQuery, GetComponentTrustBarQueryVariables>(
    GetComponentTrustBarQuery,
    options,
  );
}
export type GetComponentTrustBarQueryHookResult = ReturnType<typeof useGetComponentTrustBarQuery>;
export type GetComponentTrustBarLazyQueryHookResult = ReturnType<typeof useGetComponentTrustBarLazyQuery>;
export type GetComponentTrustBarQueryResult = Apollo.QueryResult<
  GetComponentTrustBarQuery,
  GetComponentTrustBarQueryVariables
>;
export const GetComponentCardDeckQuery = gql`
  query getComponentCardDeck($id: ItemId!) {
    data: componentCardDeck(filter: { id: { eq: $id } }) {
      ...componentIconCardDeck
    }
  }
  ${ComponentIconCardDeckFragment}
`;

/**
 * __useGetComponentCardDeckQuery__
 *
 * To run a query within a React component, call `useGetComponentCardDeckQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetComponentCardDeckQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetComponentCardDeckQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetComponentCardDeckQuery(
  baseOptions: Apollo.QueryHookOptions<GetComponentCardDeckQuery, GetComponentCardDeckQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetComponentCardDeckQuery, GetComponentCardDeckQueryVariables>(
    GetComponentCardDeckQuery,
    options,
  );
}
export function useGetComponentCardDeckLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetComponentCardDeckQuery, GetComponentCardDeckQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetComponentCardDeckQuery, GetComponentCardDeckQueryVariables>(
    GetComponentCardDeckQuery,
    options,
  );
}
export type GetComponentCardDeckQueryHookResult = ReturnType<typeof useGetComponentCardDeckQuery>;
export type GetComponentCardDeckLazyQueryHookResult = ReturnType<typeof useGetComponentCardDeckLazyQuery>;
export type GetComponentCardDeckQueryResult = Apollo.QueryResult<
  GetComponentCardDeckQuery,
  GetComponentCardDeckQueryVariables
>;
export const GetComponentQuoteQuery = gql`
  query getComponentQuote($id: ItemId!) {
    data: componentQuote(filter: { id: { eq: $id } }) {
      ...componentQuote
    }
  }
  ${ComponentQuoteFragment}
`;

/**
 * __useGetComponentQuoteQuery__
 *
 * To run a query within a React component, call `useGetComponentQuoteQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetComponentQuoteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetComponentQuoteQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetComponentQuoteQuery(
  baseOptions: Apollo.QueryHookOptions<GetComponentQuoteQuery, GetComponentQuoteQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetComponentQuoteQuery, GetComponentQuoteQueryVariables>(GetComponentQuoteQuery, options);
}
export function useGetComponentQuoteLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetComponentQuoteQuery, GetComponentQuoteQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetComponentQuoteQuery, GetComponentQuoteQueryVariables>(GetComponentQuoteQuery, options);
}
export type GetComponentQuoteQueryHookResult = ReturnType<typeof useGetComponentQuoteQuery>;
export type GetComponentQuoteLazyQueryHookResult = ReturnType<typeof useGetComponentQuoteLazyQuery>;
export type GetComponentQuoteQueryResult = Apollo.QueryResult<GetComponentQuoteQuery, GetComponentQuoteQueryVariables>;
export const GetComponentQuoteSliderQuery = gql`
  query getComponentQuoteSlider($id: ItemId!) {
    data: componentQuoteSlider(filter: { id: { eq: $id } }) {
      ...componentQuoteSlider
    }
  }
  ${ComponentQuoteSliderFragment}
`;

/**
 * __useGetComponentQuoteSliderQuery__
 *
 * To run a query within a React component, call `useGetComponentQuoteSliderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetComponentQuoteSliderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetComponentQuoteSliderQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetComponentQuoteSliderQuery(
  baseOptions: Apollo.QueryHookOptions<GetComponentQuoteSliderQuery, GetComponentQuoteSliderQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetComponentQuoteSliderQuery, GetComponentQuoteSliderQueryVariables>(
    GetComponentQuoteSliderQuery,
    options,
  );
}
export function useGetComponentQuoteSliderLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetComponentQuoteSliderQuery, GetComponentQuoteSliderQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetComponentQuoteSliderQuery, GetComponentQuoteSliderQueryVariables>(
    GetComponentQuoteSliderQuery,
    options,
  );
}
export type GetComponentQuoteSliderQueryHookResult = ReturnType<typeof useGetComponentQuoteSliderQuery>;
export type GetComponentQuoteSliderLazyQueryHookResult = ReturnType<typeof useGetComponentQuoteSliderLazyQuery>;
export type GetComponentQuoteSliderQueryResult = Apollo.QueryResult<
  GetComponentQuoteSliderQuery,
  GetComponentQuoteSliderQueryVariables
>;
export const GetComponentConversionPanelQuery = gql`
  query getComponentConversionPanel($id: ItemId!) {
    data: componentConversionPanel(filter: { id: { eq: $id } }) {
      ...componentConversionPanel
    }
  }
  ${ComponentConversionPanelFragment}
`;

/**
 * __useGetComponentConversionPanelQuery__
 *
 * To run a query within a React component, call `useGetComponentConversionPanelQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetComponentConversionPanelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetComponentConversionPanelQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetComponentConversionPanelQuery(
  baseOptions: Apollo.QueryHookOptions<GetComponentConversionPanelQuery, GetComponentConversionPanelQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetComponentConversionPanelQuery, GetComponentConversionPanelQueryVariables>(
    GetComponentConversionPanelQuery,
    options,
  );
}
export function useGetComponentConversionPanelLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetComponentConversionPanelQuery,
    GetComponentConversionPanelQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetComponentConversionPanelQuery, GetComponentConversionPanelQueryVariables>(
    GetComponentConversionPanelQuery,
    options,
  );
}
export type GetComponentConversionPanelQueryHookResult = ReturnType<typeof useGetComponentConversionPanelQuery>;
export type GetComponentConversionPanelLazyQueryHookResult = ReturnType<typeof useGetComponentConversionPanelLazyQuery>;
export type GetComponentConversionPanelQueryResult = Apollo.QueryResult<
  GetComponentConversionPanelQuery,
  GetComponentConversionPanelQueryVariables
>;
export const GetComponentAccordionQuery = gql`
  query getComponentAccordion($id: ItemId!) {
    data: componentAccordion(filter: { id: { eq: $id } }) {
      ...componentAccordion
    }
  }
  ${ComponentAccordionFragment}
`;

/**
 * __useGetComponentAccordionQuery__
 *
 * To run a query within a React component, call `useGetComponentAccordionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetComponentAccordionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetComponentAccordionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetComponentAccordionQuery(
  baseOptions: Apollo.QueryHookOptions<GetComponentAccordionQuery, GetComponentAccordionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetComponentAccordionQuery, GetComponentAccordionQueryVariables>(
    GetComponentAccordionQuery,
    options,
  );
}
export function useGetComponentAccordionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetComponentAccordionQuery, GetComponentAccordionQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetComponentAccordionQuery, GetComponentAccordionQueryVariables>(
    GetComponentAccordionQuery,
    options,
  );
}
export type GetComponentAccordionQueryHookResult = ReturnType<typeof useGetComponentAccordionQuery>;
export type GetComponentAccordionLazyQueryHookResult = ReturnType<typeof useGetComponentAccordionLazyQuery>;
export type GetComponentAccordionQueryResult = Apollo.QueryResult<
  GetComponentAccordionQuery,
  GetComponentAccordionQueryVariables
>;
export const GetComponentSingleInstanceQuery = gql`
  query getComponentSingleInstance($id: ItemId!) {
    data: componentSingleInstance(filter: { id: { eq: $id } }) {
      ...componentSingleInstance
    }
  }
  ${ComponentSingleInstanceFragment}
`;

/**
 * __useGetComponentSingleInstanceQuery__
 *
 * To run a query within a React component, call `useGetComponentSingleInstanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetComponentSingleInstanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetComponentSingleInstanceQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetComponentSingleInstanceQuery(
  baseOptions: Apollo.QueryHookOptions<GetComponentSingleInstanceQuery, GetComponentSingleInstanceQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetComponentSingleInstanceQuery, GetComponentSingleInstanceQueryVariables>(
    GetComponentSingleInstanceQuery,
    options,
  );
}
export function useGetComponentSingleInstanceLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetComponentSingleInstanceQuery, GetComponentSingleInstanceQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetComponentSingleInstanceQuery, GetComponentSingleInstanceQueryVariables>(
    GetComponentSingleInstanceQuery,
    options,
  );
}
export type GetComponentSingleInstanceQueryHookResult = ReturnType<typeof useGetComponentSingleInstanceQuery>;
export type GetComponentSingleInstanceLazyQueryHookResult = ReturnType<typeof useGetComponentSingleInstanceLazyQuery>;
export type GetComponentSingleInstanceQueryResult = Apollo.QueryResult<
  GetComponentSingleInstanceQuery,
  GetComponentSingleInstanceQueryVariables
>;
export const GetComponentSlideboxQuery = gql`
  query getComponentSlidebox($id: ItemId!) {
    data: componentSlidebox(filter: { id: { eq: $id } }) {
      ...componentSlidebox
    }
  }
  ${ComponentSlideboxFragment}
`;

/**
 * __useGetComponentSlideboxQuery__
 *
 * To run a query within a React component, call `useGetComponentSlideboxQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetComponentSlideboxQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetComponentSlideboxQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetComponentSlideboxQuery(
  baseOptions: Apollo.QueryHookOptions<GetComponentSlideboxQuery, GetComponentSlideboxQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetComponentSlideboxQuery, GetComponentSlideboxQueryVariables>(
    GetComponentSlideboxQuery,
    options,
  );
}
export function useGetComponentSlideboxLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetComponentSlideboxQuery, GetComponentSlideboxQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetComponentSlideboxQuery, GetComponentSlideboxQueryVariables>(
    GetComponentSlideboxQuery,
    options,
  );
}
export type GetComponentSlideboxQueryHookResult = ReturnType<typeof useGetComponentSlideboxQuery>;
export type GetComponentSlideboxLazyQueryHookResult = ReturnType<typeof useGetComponentSlideboxLazyQuery>;
export type GetComponentSlideboxQueryResult = Apollo.QueryResult<
  GetComponentSlideboxQuery,
  GetComponentSlideboxQueryVariables
>;
export const GetComponentHeroQuery = gql`
  query getComponentHero($id: ItemId!) {
    data: componentHero(filter: { id: { eq: $id } }) {
      ...componentHero
    }
  }
  ${ComponentHeroFragment}
`;

/**
 * __useGetComponentHeroQuery__
 *
 * To run a query within a React component, call `useGetComponentHeroQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetComponentHeroQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetComponentHeroQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetComponentHeroQuery(
  baseOptions: Apollo.QueryHookOptions<GetComponentHeroQuery, GetComponentHeroQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetComponentHeroQuery, GetComponentHeroQueryVariables>(GetComponentHeroQuery, options);
}
export function useGetComponentHeroLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetComponentHeroQuery, GetComponentHeroQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetComponentHeroQuery, GetComponentHeroQueryVariables>(GetComponentHeroQuery, options);
}
export type GetComponentHeroQueryHookResult = ReturnType<typeof useGetComponentHeroQuery>;
export type GetComponentHeroLazyQueryHookResult = ReturnType<typeof useGetComponentHeroLazyQuery>;
export type GetComponentHeroQueryResult = Apollo.QueryResult<GetComponentHeroQuery, GetComponentHeroQueryVariables>;
export const GetComponentSwitchbackQuery = gql`
  query getComponentSwitchback($id: ItemId!) {
    data: componentSwitchback(filter: { id: { eq: $id } }) {
      ...componentSwitchback
    }
  }
  ${ComponentSwitchbackFragment}
`;

/**
 * __useGetComponentSwitchbackQuery__
 *
 * To run a query within a React component, call `useGetComponentSwitchbackQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetComponentSwitchbackQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetComponentSwitchbackQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetComponentSwitchbackQuery(
  baseOptions: Apollo.QueryHookOptions<GetComponentSwitchbackQuery, GetComponentSwitchbackQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetComponentSwitchbackQuery, GetComponentSwitchbackQueryVariables>(
    GetComponentSwitchbackQuery,
    options,
  );
}
export function useGetComponentSwitchbackLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetComponentSwitchbackQuery, GetComponentSwitchbackQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetComponentSwitchbackQuery, GetComponentSwitchbackQueryVariables>(
    GetComponentSwitchbackQuery,
    options,
  );
}
export type GetComponentSwitchbackQueryHookResult = ReturnType<typeof useGetComponentSwitchbackQuery>;
export type GetComponentSwitchbackLazyQueryHookResult = ReturnType<typeof useGetComponentSwitchbackLazyQuery>;
export type GetComponentSwitchbackQueryResult = Apollo.QueryResult<
  GetComponentSwitchbackQuery,
  GetComponentSwitchbackQueryVariables
>;
export const GetComponentTestimonialConversionPanelQuery = gql`
  query getComponentTestimonialConversionPanel($id: ItemId!) {
    data: componentTestimonialConversionPanel(filter: { id: { eq: $id } }) {
      ...componentTestimonialConversionPanel
    }
  }
  ${ComponentTestimonialConversionPanelFragment}
`;

/**
 * __useGetComponentTestimonialConversionPanelQuery__
 *
 * To run a query within a React component, call `useGetComponentTestimonialConversionPanelQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetComponentTestimonialConversionPanelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetComponentTestimonialConversionPanelQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetComponentTestimonialConversionPanelQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetComponentTestimonialConversionPanelQuery,
    GetComponentTestimonialConversionPanelQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetComponentTestimonialConversionPanelQuery,
    GetComponentTestimonialConversionPanelQueryVariables
  >(GetComponentTestimonialConversionPanelQuery, options);
}
export function useGetComponentTestimonialConversionPanelLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetComponentTestimonialConversionPanelQuery,
    GetComponentTestimonialConversionPanelQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetComponentTestimonialConversionPanelQuery,
    GetComponentTestimonialConversionPanelQueryVariables
  >(GetComponentTestimonialConversionPanelQuery, options);
}
export type GetComponentTestimonialConversionPanelQueryHookResult = ReturnType<
  typeof useGetComponentTestimonialConversionPanelQuery
>;
export type GetComponentTestimonialConversionPanelLazyQueryHookResult = ReturnType<
  typeof useGetComponentTestimonialConversionPanelLazyQuery
>;
export type GetComponentTestimonialConversionPanelQueryResult = Apollo.QueryResult<
  GetComponentTestimonialConversionPanelQuery,
  GetComponentTestimonialConversionPanelQueryVariables
>;
export const GetComponentPricingCardDeckQuery = gql`
  query getComponentPricingCardDeck($id: ItemId!) {
    data: componentPricingCardDeck(filter: { id: { eq: $id } }) {
      ...componentPricingCardDeck
    }
  }
  ${ComponentPricingCardDeckFragment}
`;

/**
 * __useGetComponentPricingCardDeckQuery__
 *
 * To run a query within a React component, call `useGetComponentPricingCardDeckQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetComponentPricingCardDeckQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetComponentPricingCardDeckQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetComponentPricingCardDeckQuery(
  baseOptions: Apollo.QueryHookOptions<GetComponentPricingCardDeckQuery, GetComponentPricingCardDeckQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetComponentPricingCardDeckQuery, GetComponentPricingCardDeckQueryVariables>(
    GetComponentPricingCardDeckQuery,
    options,
  );
}
export function useGetComponentPricingCardDeckLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetComponentPricingCardDeckQuery,
    GetComponentPricingCardDeckQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetComponentPricingCardDeckQuery, GetComponentPricingCardDeckQueryVariables>(
    GetComponentPricingCardDeckQuery,
    options,
  );
}
export type GetComponentPricingCardDeckQueryHookResult = ReturnType<typeof useGetComponentPricingCardDeckQuery>;
export type GetComponentPricingCardDeckLazyQueryHookResult = ReturnType<typeof useGetComponentPricingCardDeckLazyQuery>;
export type GetComponentPricingCardDeckQueryResult = Apollo.QueryResult<
  GetComponentPricingCardDeckQuery,
  GetComponentPricingCardDeckQueryVariables
>;
export const GetComponentFeatureListQuery = gql`
  query getComponentFeatureList($id: ItemId!) {
    data: componentFeatureList(filter: { id: { eq: $id } }) {
      ...componentFeatureList
    }
  }
  ${ComponentFeatureListFragment}
`;

/**
 * __useGetComponentFeatureListQuery__
 *
 * To run a query within a React component, call `useGetComponentFeatureListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetComponentFeatureListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetComponentFeatureListQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetComponentFeatureListQuery(
  baseOptions: Apollo.QueryHookOptions<GetComponentFeatureListQuery, GetComponentFeatureListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetComponentFeatureListQuery, GetComponentFeatureListQueryVariables>(
    GetComponentFeatureListQuery,
    options,
  );
}
export function useGetComponentFeatureListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetComponentFeatureListQuery, GetComponentFeatureListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetComponentFeatureListQuery, GetComponentFeatureListQueryVariables>(
    GetComponentFeatureListQuery,
    options,
  );
}
export type GetComponentFeatureListQueryHookResult = ReturnType<typeof useGetComponentFeatureListQuery>;
export type GetComponentFeatureListLazyQueryHookResult = ReturnType<typeof useGetComponentFeatureListLazyQuery>;
export type GetComponentFeatureListQueryResult = Apollo.QueryResult<
  GetComponentFeatureListQuery,
  GetComponentFeatureListQueryVariables
>;
export const GetComponentComparisonTableQuery = gql`
  query getComponentComparisonTable($id: ItemId!) {
    data: componentComparisonTable(filter: { id: { eq: $id } }) {
      ...componentComparisonTable
    }
  }
  ${ComponentComparisonTableFragment}
`;

/**
 * __useGetComponentComparisonTableQuery__
 *
 * To run a query within a React component, call `useGetComponentComparisonTableQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetComponentComparisonTableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetComponentComparisonTableQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetComponentComparisonTableQuery(
  baseOptions: Apollo.QueryHookOptions<GetComponentComparisonTableQuery, GetComponentComparisonTableQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetComponentComparisonTableQuery, GetComponentComparisonTableQueryVariables>(
    GetComponentComparisonTableQuery,
    options,
  );
}
export function useGetComponentComparisonTableLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetComponentComparisonTableQuery,
    GetComponentComparisonTableQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetComponentComparisonTableQuery, GetComponentComparisonTableQueryVariables>(
    GetComponentComparisonTableQuery,
    options,
  );
}
export type GetComponentComparisonTableQueryHookResult = ReturnType<typeof useGetComponentComparisonTableQuery>;
export type GetComponentComparisonTableLazyQueryHookResult = ReturnType<typeof useGetComponentComparisonTableLazyQuery>;
export type GetComponentComparisonTableQueryResult = Apollo.QueryResult<
  GetComponentComparisonTableQuery,
  GetComponentComparisonTableQueryVariables
>;
export const GetComponentCodeTableQuery = gql`
  query getComponentCodeTable($id: ItemId!) {
    data: componentCodeTable(filter: { id: { eq: $id } }) {
      ...componentCodeTable
    }
  }
  ${ComponentCodeTableFragment}
`;

/**
 * __useGetComponentCodeTableQuery__
 *
 * To run a query within a React component, call `useGetComponentCodeTableQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetComponentCodeTableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetComponentCodeTableQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetComponentCodeTableQuery(
  baseOptions: Apollo.QueryHookOptions<GetComponentCodeTableQuery, GetComponentCodeTableQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetComponentCodeTableQuery, GetComponentCodeTableQueryVariables>(
    GetComponentCodeTableQuery,
    options,
  );
}
export function useGetComponentCodeTableLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetComponentCodeTableQuery, GetComponentCodeTableQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetComponentCodeTableQuery, GetComponentCodeTableQueryVariables>(
    GetComponentCodeTableQuery,
    options,
  );
}
export type GetComponentCodeTableQueryHookResult = ReturnType<typeof useGetComponentCodeTableQuery>;
export type GetComponentCodeTableLazyQueryHookResult = ReturnType<typeof useGetComponentCodeTableLazyQuery>;
export type GetComponentCodeTableQueryResult = Apollo.QueryResult<
  GetComponentCodeTableQuery,
  GetComponentCodeTableQueryVariables
>;
export const GetComponentVideoQuery = gql`
  query getComponentVideo($id: ItemId!) {
    data: componentVideo(filter: { id: { eq: $id } }) {
      ...componentVideo
    }
  }
  ${ComponentVideoFragment}
`;

/**
 * __useGetComponentVideoQuery__
 *
 * To run a query within a React component, call `useGetComponentVideoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetComponentVideoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetComponentVideoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetComponentVideoQuery(
  baseOptions: Apollo.QueryHookOptions<GetComponentVideoQuery, GetComponentVideoQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetComponentVideoQuery, GetComponentVideoQueryVariables>(GetComponentVideoQuery, options);
}
export function useGetComponentVideoLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetComponentVideoQuery, GetComponentVideoQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetComponentVideoQuery, GetComponentVideoQueryVariables>(GetComponentVideoQuery, options);
}
export type GetComponentVideoQueryHookResult = ReturnType<typeof useGetComponentVideoQuery>;
export type GetComponentVideoLazyQueryHookResult = ReturnType<typeof useGetComponentVideoLazyQuery>;
export type GetComponentVideoQueryResult = Apollo.QueryResult<GetComponentVideoQuery, GetComponentVideoQueryVariables>;
export const GetComponentPricingTableQuery = gql`
  query getComponentPricingTable($id: ItemId!) {
    data: componentPricingTable(filter: { id: { eq: $id } }) {
      ...componentPricingTable
    }
  }
  ${ComponentPricingTableFragment}
`;

/**
 * __useGetComponentPricingTableQuery__
 *
 * To run a query within a React component, call `useGetComponentPricingTableQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetComponentPricingTableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetComponentPricingTableQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetComponentPricingTableQuery(
  baseOptions: Apollo.QueryHookOptions<GetComponentPricingTableQuery, GetComponentPricingTableQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetComponentPricingTableQuery, GetComponentPricingTableQueryVariables>(
    GetComponentPricingTableQuery,
    options,
  );
}
export function useGetComponentPricingTableLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetComponentPricingTableQuery, GetComponentPricingTableQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetComponentPricingTableQuery, GetComponentPricingTableQueryVariables>(
    GetComponentPricingTableQuery,
    options,
  );
}
export type GetComponentPricingTableQueryHookResult = ReturnType<typeof useGetComponentPricingTableQuery>;
export type GetComponentPricingTableLazyQueryHookResult = ReturnType<typeof useGetComponentPricingTableLazyQuery>;
export type GetComponentPricingTableQueryResult = Apollo.QueryResult<
  GetComponentPricingTableQuery,
  GetComponentPricingTableQueryVariables
>;
export const GetComponentBentoSplitContentQuery = gql`
  query getComponentBentoSplitContent($id: ItemId!) {
    data: componentBentoSplitContent(filter: { id: { eq: $id } }) {
      ...componentBentoSplitContent
    }
  }
  ${ComponentBentoSplitContentFragment}
`;

/**
 * __useGetComponentBentoSplitContentQuery__
 *
 * To run a query within a React component, call `useGetComponentBentoSplitContentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetComponentBentoSplitContentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetComponentBentoSplitContentQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetComponentBentoSplitContentQuery(
  baseOptions: Apollo.QueryHookOptions<GetComponentBentoSplitContentQuery, GetComponentBentoSplitContentQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetComponentBentoSplitContentQuery, GetComponentBentoSplitContentQueryVariables>(
    GetComponentBentoSplitContentQuery,
    options,
  );
}
export function useGetComponentBentoSplitContentLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetComponentBentoSplitContentQuery,
    GetComponentBentoSplitContentQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetComponentBentoSplitContentQuery, GetComponentBentoSplitContentQueryVariables>(
    GetComponentBentoSplitContentQuery,
    options,
  );
}
export type GetComponentBentoSplitContentQueryHookResult = ReturnType<typeof useGetComponentBentoSplitContentQuery>;
export type GetComponentBentoSplitContentLazyQueryHookResult = ReturnType<
  typeof useGetComponentBentoSplitContentLazyQuery
>;
export type GetComponentBentoSplitContentQueryResult = Apollo.QueryResult<
  GetComponentBentoSplitContentQuery,
  GetComponentBentoSplitContentQueryVariables
>;
export const GetComponentBentoStackedImageQuery = gql`
  query getComponentBentoStackedImage($id: ItemId!) {
    data: componentBentoStackedImage(filter: { id: { eq: $id } }) {
      ...componentBentoStackedImage
    }
  }
  ${ComponentBentoStackedImageFragment}
`;

/**
 * __useGetComponentBentoStackedImageQuery__
 *
 * To run a query within a React component, call `useGetComponentBentoStackedImageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetComponentBentoStackedImageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetComponentBentoStackedImageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetComponentBentoStackedImageQuery(
  baseOptions: Apollo.QueryHookOptions<GetComponentBentoStackedImageQuery, GetComponentBentoStackedImageQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetComponentBentoStackedImageQuery, GetComponentBentoStackedImageQueryVariables>(
    GetComponentBentoStackedImageQuery,
    options,
  );
}
export function useGetComponentBentoStackedImageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetComponentBentoStackedImageQuery,
    GetComponentBentoStackedImageQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetComponentBentoStackedImageQuery, GetComponentBentoStackedImageQueryVariables>(
    GetComponentBentoStackedImageQuery,
    options,
  );
}
export type GetComponentBentoStackedImageQueryHookResult = ReturnType<typeof useGetComponentBentoStackedImageQuery>;
export type GetComponentBentoStackedImageLazyQueryHookResult = ReturnType<
  typeof useGetComponentBentoStackedImageLazyQuery
>;
export type GetComponentBentoStackedImageQueryResult = Apollo.QueryResult<
  GetComponentBentoStackedImageQuery,
  GetComponentBentoStackedImageQueryVariables
>;
export const GetComponentBentoTrustBarQuery = gql`
  query getComponentBentoTrustBar($id: ItemId!) {
    data: componentBentoTrustBar(filter: { id: { eq: $id } }) {
      ...componentBentoTrustBar
    }
  }
  ${ComponentBentoTrustBarFragment}
`;

/**
 * __useGetComponentBentoTrustBarQuery__
 *
 * To run a query within a React component, call `useGetComponentBentoTrustBarQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetComponentBentoTrustBarQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetComponentBentoTrustBarQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetComponentBentoTrustBarQuery(
  baseOptions: Apollo.QueryHookOptions<GetComponentBentoTrustBarQuery, GetComponentBentoTrustBarQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetComponentBentoTrustBarQuery, GetComponentBentoTrustBarQueryVariables>(
    GetComponentBentoTrustBarQuery,
    options,
  );
}
export function useGetComponentBentoTrustBarLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetComponentBentoTrustBarQuery, GetComponentBentoTrustBarQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetComponentBentoTrustBarQuery, GetComponentBentoTrustBarQueryVariables>(
    GetComponentBentoTrustBarQuery,
    options,
  );
}
export type GetComponentBentoTrustBarQueryHookResult = ReturnType<typeof useGetComponentBentoTrustBarQuery>;
export type GetComponentBentoTrustBarLazyQueryHookResult = ReturnType<typeof useGetComponentBentoTrustBarLazyQuery>;
export type GetComponentBentoTrustBarQueryResult = Apollo.QueryResult<
  GetComponentBentoTrustBarQuery,
  GetComponentBentoTrustBarQueryVariables
>;
export const GetComponentBentoBoxQuery = gql`
  query getComponentBentoBox($id: ItemId!) {
    data: componentBentoBox(filter: { id: { eq: $id } }) {
      ...componentBentoBox
    }
  }
  ${ComponentBentoBoxFragment}
`;

/**
 * __useGetComponentBentoBoxQuery__
 *
 * To run a query within a React component, call `useGetComponentBentoBoxQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetComponentBentoBoxQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetComponentBentoBoxQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetComponentBentoBoxQuery(
  baseOptions: Apollo.QueryHookOptions<GetComponentBentoBoxQuery, GetComponentBentoBoxQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetComponentBentoBoxQuery, GetComponentBentoBoxQueryVariables>(
    GetComponentBentoBoxQuery,
    options,
  );
}
export function useGetComponentBentoBoxLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetComponentBentoBoxQuery, GetComponentBentoBoxQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetComponentBentoBoxQuery, GetComponentBentoBoxQueryVariables>(
    GetComponentBentoBoxQuery,
    options,
  );
}
export type GetComponentBentoBoxQueryHookResult = ReturnType<typeof useGetComponentBentoBoxQuery>;
export type GetComponentBentoBoxLazyQueryHookResult = ReturnType<typeof useGetComponentBentoBoxLazyQuery>;
export type GetComponentBentoBoxQueryResult = Apollo.QueryResult<
  GetComponentBentoBoxQuery,
  GetComponentBentoBoxQueryVariables
>;
export const DefaultPagePathsQuery = gql`
  query DefaultPagePaths {
    allTemplatePages(first: "100") {
      id
      slug
    }
    allTemplateLegals {
      id
      slug
    }
    allHideBlogs: allTemplateBlogs(filter: { hideFromListing: { eq: true } }, orderBy: publishDate_DESC, first: 100) {
      ...templateBlogList
    }
  }
  ${TemplateBlogListFragment}
`;

/**
 * __useDefaultPagePathsQuery__
 *
 * To run a query within a React component, call `useDefaultPagePathsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDefaultPagePathsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDefaultPagePathsQuery({
 *   variables: {
 *   },
 * });
 */
export function useDefaultPagePathsQuery(
  baseOptions?: Apollo.QueryHookOptions<DefaultPagePathsQuery, DefaultPagePathsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<DefaultPagePathsQuery, DefaultPagePathsQueryVariables>(DefaultPagePathsQuery, options);
}
export function useDefaultPagePathsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<DefaultPagePathsQuery, DefaultPagePathsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<DefaultPagePathsQuery, DefaultPagePathsQueryVariables>(DefaultPagePathsQuery, options);
}
export type DefaultPagePathsQueryHookResult = ReturnType<typeof useDefaultPagePathsQuery>;
export type DefaultPagePathsLazyQueryHookResult = ReturnType<typeof useDefaultPagePathsLazyQuery>;
export type DefaultPagePathsQueryResult = Apollo.QueryResult<DefaultPagePathsQuery, DefaultPagePathsQueryVariables>;
export const AllTemplatePageQuery = gql`
  query AllTemplatePage {
    allTemplatePages(first: "100") {
      id
      slug
    }
  }
`;

/**
 * __useAllTemplatePageQuery__
 *
 * To run a query within a React component, call `useAllTemplatePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTemplatePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTemplatePageQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllTemplatePageQuery(
  baseOptions?: Apollo.QueryHookOptions<AllTemplatePageQuery, AllTemplatePageQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllTemplatePageQuery, AllTemplatePageQueryVariables>(AllTemplatePageQuery, options);
}
export function useAllTemplatePageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AllTemplatePageQuery, AllTemplatePageQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllTemplatePageQuery, AllTemplatePageQueryVariables>(AllTemplatePageQuery, options);
}
export type AllTemplatePageQueryHookResult = ReturnType<typeof useAllTemplatePageQuery>;
export type AllTemplatePageLazyQueryHookResult = ReturnType<typeof useAllTemplatePageLazyQuery>;
export type AllTemplatePageQueryResult = Apollo.QueryResult<AllTemplatePageQuery, AllTemplatePageQueryVariables>;
export const TemplatePageDataQuery = gql`
  query templatePageData($slug: String) {
    templatePage(filter: { slug: { eq: $slug } }) {
      ...templatePage
    }
  }
  ${TemplatePageFragment}
`;

/**
 * __useTemplatePageDataQuery__
 *
 * To run a query within a React component, call `useTemplatePageDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useTemplatePageDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTemplatePageDataQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useTemplatePageDataQuery(
  baseOptions?: Apollo.QueryHookOptions<TemplatePageDataQuery, TemplatePageDataQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TemplatePageDataQuery, TemplatePageDataQueryVariables>(TemplatePageDataQuery, options);
}
export function useTemplatePageDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<TemplatePageDataQuery, TemplatePageDataQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TemplatePageDataQuery, TemplatePageDataQueryVariables>(TemplatePageDataQuery, options);
}
export type TemplatePageDataQueryHookResult = ReturnType<typeof useTemplatePageDataQuery>;
export type TemplatePageDataLazyQueryHookResult = ReturnType<typeof useTemplatePageDataLazyQuery>;
export type TemplatePageDataQueryResult = Apollo.QueryResult<TemplatePageDataQuery, TemplatePageDataQueryVariables>;
export const TemplatePageFullDataQuery = gql`
  query templatePageFullData($slug: String) {
    templatePage(filter: { slug: { eq: $slug } }) {
      ...templatePageFull
    }
  }
  ${TemplatePageFullFragment}
`;

/**
 * __useTemplatePageFullDataQuery__
 *
 * To run a query within a React component, call `useTemplatePageFullDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useTemplatePageFullDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTemplatePageFullDataQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useTemplatePageFullDataQuery(
  baseOptions?: Apollo.QueryHookOptions<TemplatePageFullDataQuery, TemplatePageFullDataQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TemplatePageFullDataQuery, TemplatePageFullDataQueryVariables>(
    TemplatePageFullDataQuery,
    options,
  );
}
export function useTemplatePageFullDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<TemplatePageFullDataQuery, TemplatePageFullDataQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TemplatePageFullDataQuery, TemplatePageFullDataQueryVariables>(
    TemplatePageFullDataQuery,
    options,
  );
}
export type TemplatePageFullDataQueryHookResult = ReturnType<typeof useTemplatePageFullDataQuery>;
export type TemplatePageFullDataLazyQueryHookResult = ReturnType<typeof useTemplatePageFullDataLazyQuery>;
export type TemplatePageFullDataQueryResult = Apollo.QueryResult<
  TemplatePageFullDataQuery,
  TemplatePageFullDataQueryVariables
>;
export const GlobalCompanyHeaderFooterQuery = gql`
  query GlobalCompanyHeaderFooter {
    componentHeader(filter: { id: { eq: "108418376" } }) {
      ...componentHeader
    }
    simpleComponentHeader: componentHeader(filter: { id: { eq: "189548101" } }) {
      ...componentHeader
    }
    componentFooter(filter: { id: { eq: "105656969" } }) {
      ...componentFooter
    }
    simpleComponentFooter: componentFooter(filter: { id: { eq: "189548118" } }) {
      ...componentFooter
    }
    entityCompany(filter: { id: { eq: "103130761" } }) {
      ...entityCompany
    }
  }
  ${ComponentHeaderFragment}
  ${ComponentFooterFragment}
  ${EntityCompanyFragment}
`;

/**
 * __useGlobalCompanyHeaderFooterQuery__
 *
 * To run a query within a React component, call `useGlobalCompanyHeaderFooterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGlobalCompanyHeaderFooterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGlobalCompanyHeaderFooterQuery({
 *   variables: {
 *   },
 * });
 */
export function useGlobalCompanyHeaderFooterQuery(
  baseOptions?: Apollo.QueryHookOptions<GlobalCompanyHeaderFooterQuery, GlobalCompanyHeaderFooterQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GlobalCompanyHeaderFooterQuery, GlobalCompanyHeaderFooterQueryVariables>(
    GlobalCompanyHeaderFooterQuery,
    options,
  );
}
export function useGlobalCompanyHeaderFooterLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GlobalCompanyHeaderFooterQuery, GlobalCompanyHeaderFooterQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GlobalCompanyHeaderFooterQuery, GlobalCompanyHeaderFooterQueryVariables>(
    GlobalCompanyHeaderFooterQuery,
    options,
  );
}
export type GlobalCompanyHeaderFooterQueryHookResult = ReturnType<typeof useGlobalCompanyHeaderFooterQuery>;
export type GlobalCompanyHeaderFooterLazyQueryHookResult = ReturnType<typeof useGlobalCompanyHeaderFooterLazyQuery>;
export type GlobalCompanyHeaderFooterQueryResult = Apollo.QueryResult<
  GlobalCompanyHeaderFooterQuery,
  GlobalCompanyHeaderFooterQueryVariables
>;
export const BlogAllSlugsQuery = gql`
  query BlogAllSlugs {
    blogs1: allTemplateBlogs(filter: { hideFromListing: { eq: false } }, orderBy: publishDate_DESC, first: 100) {
      id
      slug
    }
    blogs2: allTemplateBlogs(
      filter: { hideFromListing: { eq: false } }
      orderBy: publishDate_DESC
      first: 100
      skip: 100
    ) {
      id
      slug
    }
    blogs3: allTemplateBlogs(
      filter: { hideFromListing: { eq: false } }
      orderBy: publishDate_DESC
      first: 100
      skip: 200
    ) {
      id
      slug
    }
    blogs4: allTemplateBlogs(
      filter: { hideFromListing: { eq: false } }
      orderBy: publishDate_DESC
      first: 100
      skip: 300
    ) {
      id
      slug
    }
    blogs5: allTemplateBlogs(
      filter: { hideFromListing: { eq: false } }
      orderBy: publishDate_DESC
      first: 100
      skip: 400
    ) {
      id
      slug
    }
  }
`;

/**
 * __useBlogAllSlugsQuery__
 *
 * To run a query within a React component, call `useBlogAllSlugsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogAllSlugsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogAllSlugsQuery({
 *   variables: {
 *   },
 * });
 */
export function useBlogAllSlugsQuery(
  baseOptions?: Apollo.QueryHookOptions<BlogAllSlugsQuery, BlogAllSlugsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BlogAllSlugsQuery, BlogAllSlugsQueryVariables>(BlogAllSlugsQuery, options);
}
export function useBlogAllSlugsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<BlogAllSlugsQuery, BlogAllSlugsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BlogAllSlugsQuery, BlogAllSlugsQueryVariables>(BlogAllSlugsQuery, options);
}
export type BlogAllSlugsQueryHookResult = ReturnType<typeof useBlogAllSlugsQuery>;
export type BlogAllSlugsLazyQueryHookResult = ReturnType<typeof useBlogAllSlugsLazyQuery>;
export type BlogAllSlugsQueryResult = Apollo.QueryResult<BlogAllSlugsQuery, BlogAllSlugsQueryVariables>;
export const BlogDetailDataQuery = gql`
  query BlogDetailData($slug: String) {
    templateBlog(filter: { slug: { eq: $slug } }) {
      ...templateBlog
    }
    componentConversionPanel(filter: { id: { eq: "106418881" } }) {
      ...componentConversionPanel
    }
    related: allTemplateBlogs(filter: { slug: { neq: $slug } }, orderBy: publishDate_DESC, first: 4) {
      ...templateBlogList
    }
  }
  ${TemplateBlogFragment}
  ${ComponentConversionPanelFragment}
  ${TemplateBlogListFragment}
`;

/**
 * __useBlogDetailDataQuery__
 *
 * To run a query within a React component, call `useBlogDetailDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogDetailDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogDetailDataQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useBlogDetailDataQuery(
  baseOptions?: Apollo.QueryHookOptions<BlogDetailDataQuery, BlogDetailDataQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BlogDetailDataQuery, BlogDetailDataQueryVariables>(BlogDetailDataQuery, options);
}
export function useBlogDetailDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<BlogDetailDataQuery, BlogDetailDataQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BlogDetailDataQuery, BlogDetailDataQueryVariables>(BlogDetailDataQuery, options);
}
export type BlogDetailDataQueryHookResult = ReturnType<typeof useBlogDetailDataQuery>;
export type BlogDetailDataLazyQueryHookResult = ReturnType<typeof useBlogDetailDataLazyQuery>;
export type BlogDetailDataQueryResult = Apollo.QueryResult<BlogDetailDataQuery, BlogDetailDataQueryVariables>;
export const CategoryBlogListingQuery = gql`
  query CategoryBlogListing($category: String) {
    blogList1: allTemplateBlogs(
      orderBy: publishDate_DESC
      first: 100
      filter: { category: { eq: $category }, hideFromListing: { eq: false } }
    ) {
      ...templateBlogList
    }
    blogList2: allTemplateBlogs(
      orderBy: publishDate_DESC
      first: 100
      skip: 100
      filter: { category: { eq: $category }, hideFromListing: { eq: false } }
    ) {
      ...templateBlogList
    }
  }
  ${TemplateBlogListFragment}
`;

/**
 * __useCategoryBlogListingQuery__
 *
 * To run a query within a React component, call `useCategoryBlogListingQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryBlogListingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryBlogListingQuery({
 *   variables: {
 *      category: // value for 'category'
 *   },
 * });
 */
export function useCategoryBlogListingQuery(
  baseOptions?: Apollo.QueryHookOptions<CategoryBlogListingQuery, CategoryBlogListingQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CategoryBlogListingQuery, CategoryBlogListingQueryVariables>(
    CategoryBlogListingQuery,
    options,
  );
}
export function useCategoryBlogListingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CategoryBlogListingQuery, CategoryBlogListingQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CategoryBlogListingQuery, CategoryBlogListingQueryVariables>(
    CategoryBlogListingQuery,
    options,
  );
}
export type CategoryBlogListingQueryHookResult = ReturnType<typeof useCategoryBlogListingQuery>;
export type CategoryBlogListingLazyQueryHookResult = ReturnType<typeof useCategoryBlogListingLazyQuery>;
export type CategoryBlogListingQueryResult = Apollo.QueryResult<
  CategoryBlogListingQuery,
  CategoryBlogListingQueryVariables
>;
export const AllBlogListingQuery = gql`
  query AllBlogListing {
    blogList1: allTemplateBlogs(filter: { hideFromListing: { eq: false } }, orderBy: publishDate_DESC, first: 20) {
      ...templateBlogList
    }
    blogList2: allTemplateBlogs(
      filter: { hideFromListing: { eq: false } }
      orderBy: publishDate_DESC
      first: 100
      skip: 100
    ) {
      ...templateBlogList
    }
    blogList3: allTemplateBlogs(
      filter: { hideFromListing: { eq: false } }
      orderBy: publishDate_DESC
      first: 100
      skip: 200
    ) {
      ...templateBlogList
    }
    blogList4: allTemplateBlogs(
      filter: { hideFromListing: { eq: false } }
      orderBy: publishDate_DESC
      first: 100
      skip: 300
    ) {
      ...templateBlogList
    }
    blogList5: allTemplateBlogs(
      filter: { hideFromListing: { eq: false } }
      orderBy: publishDate_DESC
      first: 100
      skip: 400
    ) {
      ...templateBlogList
    }
  }
  ${TemplateBlogListFragment}
`;

/**
 * __useAllBlogListingQuery__
 *
 * To run a query within a React component, call `useAllBlogListingQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllBlogListingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllBlogListingQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllBlogListingQuery(
  baseOptions?: Apollo.QueryHookOptions<AllBlogListingQuery, AllBlogListingQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllBlogListingQuery, AllBlogListingQueryVariables>(AllBlogListingQuery, options);
}
export function useAllBlogListingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AllBlogListingQuery, AllBlogListingQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllBlogListingQuery, AllBlogListingQueryVariables>(AllBlogListingQuery, options);
}
export type AllBlogListingQueryHookResult = ReturnType<typeof useAllBlogListingQuery>;
export type AllBlogListingLazyQueryHookResult = ReturnType<typeof useAllBlogListingLazyQuery>;
export type AllBlogListingQueryResult = Apollo.QueryResult<AllBlogListingQuery, AllBlogListingQueryVariables>;
export const AllHideBlogListingQuery = gql`
  query AllHideBlogListing {
    allHideblogs: allTemplateBlogs(filter: { hideFromListing: { eq: true } }, orderBy: publishDate_DESC, first: 100) {
      ...templateBlogList
    }
  }
  ${TemplateBlogListFragment}
`;

/**
 * __useAllHideBlogListingQuery__
 *
 * To run a query within a React component, call `useAllHideBlogListingQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllHideBlogListingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllHideBlogListingQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllHideBlogListingQuery(
  baseOptions?: Apollo.QueryHookOptions<AllHideBlogListingQuery, AllHideBlogListingQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllHideBlogListingQuery, AllHideBlogListingQueryVariables>(AllHideBlogListingQuery, options);
}
export function useAllHideBlogListingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AllHideBlogListingQuery, AllHideBlogListingQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllHideBlogListingQuery, AllHideBlogListingQueryVariables>(
    AllHideBlogListingQuery,
    options,
  );
}
export type AllHideBlogListingQueryHookResult = ReturnType<typeof useAllHideBlogListingQuery>;
export type AllHideBlogListingLazyQueryHookResult = ReturnType<typeof useAllHideBlogListingLazyQuery>;
export type AllHideBlogListingQueryResult = Apollo.QueryResult<
  AllHideBlogListingQuery,
  AllHideBlogListingQueryVariables
>;
export const AllSimpleBlogListingQuery = gql`
  query AllSimpleBlogListing {
    blogList1: allTemplateBlogs(filter: { hideFromListing: { eq: false } }, orderBy: publishDate_DESC, first: 20) {
      ...templateSimpleBlogList
    }
    blogList2: allTemplateBlogs(
      filter: { hideFromListing: { eq: false } }
      orderBy: publishDate_DESC
      first: 100
      skip: 100
    ) {
      ...templateSimpleBlogList
    }
    blogList3: allTemplateBlogs(
      filter: { hideFromListing: { eq: false } }
      orderBy: publishDate_DESC
      first: 100
      skip: 200
    ) {
      ...templateSimpleBlogList
    }
    blogList4: allTemplateBlogs(
      filter: { hideFromListing: { eq: false } }
      orderBy: publishDate_DESC
      first: 100
      skip: 300
    ) {
      ...templateSimpleBlogList
    }
    blogList5: allTemplateBlogs(
      filter: { hideFromListing: { eq: false } }
      orderBy: publishDate_DESC
      first: 100
      skip: 400
    ) {
      ...templateSimpleBlogList
    }
  }
  ${TemplateSimpleBlogListFragment}
`;

/**
 * __useAllSimpleBlogListingQuery__
 *
 * To run a query within a React component, call `useAllSimpleBlogListingQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllSimpleBlogListingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllSimpleBlogListingQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllSimpleBlogListingQuery(
  baseOptions?: Apollo.QueryHookOptions<AllSimpleBlogListingQuery, AllSimpleBlogListingQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllSimpleBlogListingQuery, AllSimpleBlogListingQueryVariables>(
    AllSimpleBlogListingQuery,
    options,
  );
}
export function useAllSimpleBlogListingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AllSimpleBlogListingQuery, AllSimpleBlogListingQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllSimpleBlogListingQuery, AllSimpleBlogListingQueryVariables>(
    AllSimpleBlogListingQuery,
    options,
  );
}
export type AllSimpleBlogListingQueryHookResult = ReturnType<typeof useAllSimpleBlogListingQuery>;
export type AllSimpleBlogListingLazyQueryHookResult = ReturnType<typeof useAllSimpleBlogListingLazyQuery>;
export type AllSimpleBlogListingQueryResult = Apollo.QueryResult<
  AllSimpleBlogListingQuery,
  AllSimpleBlogListingQueryVariables
>;
export const AllBlogListingPerPageQuery = gql`
  query AllBlogListingPerPage($skip: IntType) {
    allTemplateBlogs(filter: { hideFromListing: { eq: false } }, orderBy: publishDate_DESC, first: 10, skip: $skip) {
      ...templateBlogList
    }
  }
  ${TemplateBlogListFragment}
`;

/**
 * __useAllBlogListingPerPageQuery__
 *
 * To run a query within a React component, call `useAllBlogListingPerPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllBlogListingPerPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllBlogListingPerPageQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useAllBlogListingPerPageQuery(
  baseOptions?: Apollo.QueryHookOptions<AllBlogListingPerPageQuery, AllBlogListingPerPageQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllBlogListingPerPageQuery, AllBlogListingPerPageQueryVariables>(
    AllBlogListingPerPageQuery,
    options,
  );
}
export function useAllBlogListingPerPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AllBlogListingPerPageQuery, AllBlogListingPerPageQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllBlogListingPerPageQuery, AllBlogListingPerPageQueryVariables>(
    AllBlogListingPerPageQuery,
    options,
  );
}
export type AllBlogListingPerPageQueryHookResult = ReturnType<typeof useAllBlogListingPerPageQuery>;
export type AllBlogListingPerPageLazyQueryHookResult = ReturnType<typeof useAllBlogListingPerPageLazyQuery>;
export type AllBlogListingPerPageQueryResult = Apollo.QueryResult<
  AllBlogListingPerPageQuery,
  AllBlogListingPerPageQueryVariables
>;
export const AllBlogListingPerPageWithSearchFilterQuery = gql`
  query AllBlogListingPerPageWithSearchFilter($skip: IntType, $search: String!) {
    allTemplateBlogs(
      orderBy: publishDate_DESC
      first: 10
      skip: $skip
      filter: { title: { matches: { pattern: $search } }, hideFromListing: { eq: false } }
    ) {
      ...templateBlogList
    }
  }
  ${TemplateBlogListFragment}
`;

/**
 * __useAllBlogListingPerPageWithSearchFilterQuery__
 *
 * To run a query within a React component, call `useAllBlogListingPerPageWithSearchFilterQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllBlogListingPerPageWithSearchFilterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllBlogListingPerPageWithSearchFilterQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      search: // value for 'search'
 *   },
 * });
 */
export function useAllBlogListingPerPageWithSearchFilterQuery(
  baseOptions: Apollo.QueryHookOptions<
    AllBlogListingPerPageWithSearchFilterQuery,
    AllBlogListingPerPageWithSearchFilterQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    AllBlogListingPerPageWithSearchFilterQuery,
    AllBlogListingPerPageWithSearchFilterQueryVariables
  >(AllBlogListingPerPageWithSearchFilterQuery, options);
}
export function useAllBlogListingPerPageWithSearchFilterLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllBlogListingPerPageWithSearchFilterQuery,
    AllBlogListingPerPageWithSearchFilterQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    AllBlogListingPerPageWithSearchFilterQuery,
    AllBlogListingPerPageWithSearchFilterQueryVariables
  >(AllBlogListingPerPageWithSearchFilterQuery, options);
}
export type AllBlogListingPerPageWithSearchFilterQueryHookResult = ReturnType<
  typeof useAllBlogListingPerPageWithSearchFilterQuery
>;
export type AllBlogListingPerPageWithSearchFilterLazyQueryHookResult = ReturnType<
  typeof useAllBlogListingPerPageWithSearchFilterLazyQuery
>;
export type AllBlogListingPerPageWithSearchFilterQueryResult = Apollo.QueryResult<
  AllBlogListingPerPageWithSearchFilterQuery,
  AllBlogListingPerPageWithSearchFilterQueryVariables
>;
export const AllAuthorQuery = gql`
  query AllAuthor {
    allEntityPeople(first: "100") {
      ...entityPerson
    }
  }
  ${EntityPersonFragment}
`;

/**
 * __useAllAuthorQuery__
 *
 * To run a query within a React component, call `useAllAuthorQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllAuthorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllAuthorQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllAuthorQuery(baseOptions?: Apollo.QueryHookOptions<AllAuthorQuery, AllAuthorQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllAuthorQuery, AllAuthorQueryVariables>(AllAuthorQuery, options);
}
export function useAllAuthorLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AllAuthorQuery, AllAuthorQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllAuthorQuery, AllAuthorQueryVariables>(AllAuthorQuery, options);
}
export type AllAuthorQueryHookResult = ReturnType<typeof useAllAuthorQuery>;
export type AllAuthorLazyQueryHookResult = ReturnType<typeof useAllAuthorLazyQuery>;
export type AllAuthorQueryResult = Apollo.QueryResult<AllAuthorQuery, AllAuthorQueryVariables>;
export const AuthorAllSlugsQuery = gql`
  query AuthorAllSlugs {
    allEntityPeople(first: "100") {
      id
      name
      slug
      externalLink
    }
  }
`;

/**
 * __useAuthorAllSlugsQuery__
 *
 * To run a query within a React component, call `useAuthorAllSlugsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthorAllSlugsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthorAllSlugsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAuthorAllSlugsQuery(
  baseOptions?: Apollo.QueryHookOptions<AuthorAllSlugsQuery, AuthorAllSlugsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AuthorAllSlugsQuery, AuthorAllSlugsQueryVariables>(AuthorAllSlugsQuery, options);
}
export function useAuthorAllSlugsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AuthorAllSlugsQuery, AuthorAllSlugsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AuthorAllSlugsQuery, AuthorAllSlugsQueryVariables>(AuthorAllSlugsQuery, options);
}
export type AuthorAllSlugsQueryHookResult = ReturnType<typeof useAuthorAllSlugsQuery>;
export type AuthorAllSlugsLazyQueryHookResult = ReturnType<typeof useAuthorAllSlugsLazyQuery>;
export type AuthorAllSlugsQueryResult = Apollo.QueryResult<AuthorAllSlugsQuery, AuthorAllSlugsQueryVariables>;
export const AuthorDetailDataQuery = gql`
  query AuthorDetailData($slug: String) {
    entityPerson(filter: { slug: { eq: $slug } }) {
      ...entityPerson
    }
  }
  ${EntityPersonFragment}
`;

/**
 * __useAuthorDetailDataQuery__
 *
 * To run a query within a React component, call `useAuthorDetailDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthorDetailDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthorDetailDataQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useAuthorDetailDataQuery(
  baseOptions?: Apollo.QueryHookOptions<AuthorDetailDataQuery, AuthorDetailDataQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AuthorDetailDataQuery, AuthorDetailDataQueryVariables>(AuthorDetailDataQuery, options);
}
export function useAuthorDetailDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AuthorDetailDataQuery, AuthorDetailDataQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AuthorDetailDataQuery, AuthorDetailDataQueryVariables>(AuthorDetailDataQuery, options);
}
export type AuthorDetailDataQueryHookResult = ReturnType<typeof useAuthorDetailDataQuery>;
export type AuthorDetailDataLazyQueryHookResult = ReturnType<typeof useAuthorDetailDataLazyQuery>;
export type AuthorDetailDataQueryResult = Apollo.QueryResult<AuthorDetailDataQuery, AuthorDetailDataQueryVariables>;
export const GlossarySlugsQuery = gql`
  query GlossarySlugs {
    glossarySlugs: allTemplateGlossaries(first: "100") {
      id
      categoryPage
      slug
      subcategoryPages {
        id
        slug
      }
    }
  }
`;

/**
 * __useGlossarySlugsQuery__
 *
 * To run a query within a React component, call `useGlossarySlugsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGlossarySlugsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGlossarySlugsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGlossarySlugsQuery(
  baseOptions?: Apollo.QueryHookOptions<GlossarySlugsQuery, GlossarySlugsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GlossarySlugsQuery, GlossarySlugsQueryVariables>(GlossarySlugsQuery, options);
}
export function useGlossarySlugsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GlossarySlugsQuery, GlossarySlugsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GlossarySlugsQuery, GlossarySlugsQueryVariables>(GlossarySlugsQuery, options);
}
export type GlossarySlugsQueryHookResult = ReturnType<typeof useGlossarySlugsQuery>;
export type GlossarySlugsLazyQueryHookResult = ReturnType<typeof useGlossarySlugsLazyQuery>;
export type GlossarySlugsQueryResult = Apollo.QueryResult<GlossarySlugsQuery, GlossarySlugsQueryVariables>;
export const AllGlossaryDataQuery = gql`
  query allGlossaryData($slug: String) {
    templateGlossary(filter: { slug: { eq: $slug } }) {
      ...templateGlossary
      subcategoryPages {
        ...templateGlossary
      }
    }
    glossaryNav: allTemplateGlossaries(orderBy: title_ASC, first: 100) {
      id
      slug
      title
      categoryPage
      subcategoryPages {
        id
        slug
        title
      }
    }
    componentConversionPanel(filter: { id: { eq: "181928448" } }) {
      ...componentConversionPanel
    }
  }
  ${TemplateGlossaryFragment}
  ${ComponentConversionPanelFragment}
`;

/**
 * __useAllGlossaryDataQuery__
 *
 * To run a query within a React component, call `useAllGlossaryDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllGlossaryDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllGlossaryDataQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useAllGlossaryDataQuery(
  baseOptions?: Apollo.QueryHookOptions<AllGlossaryDataQuery, AllGlossaryDataQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllGlossaryDataQuery, AllGlossaryDataQueryVariables>(AllGlossaryDataQuery, options);
}
export function useAllGlossaryDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AllGlossaryDataQuery, AllGlossaryDataQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllGlossaryDataQuery, AllGlossaryDataQueryVariables>(AllGlossaryDataQuery, options);
}
export type AllGlossaryDataQueryHookResult = ReturnType<typeof useAllGlossaryDataQuery>;
export type AllGlossaryDataLazyQueryHookResult = ReturnType<typeof useAllGlossaryDataLazyQuery>;
export type AllGlossaryDataQueryResult = Apollo.QueryResult<AllGlossaryDataQuery, AllGlossaryDataQueryVariables>;
export const AuthorRelatedDataQuery = gql`
  query AuthorRelatedData($id: ItemId) {
    allTemplateBlogs(filter: { author: { eq: $id }, hideFromListing: { eq: false } }, orderBy: publishDate_DESC) {
      ...refBlogCard
    }
    componentConversionPanel(filter: { id: { eq: "114210405" } }) {
      ...componentConversionPanel
    }
  }
  ${RefBlogCardFragment}
  ${ComponentConversionPanelFragment}
`;

/**
 * __useAuthorRelatedDataQuery__
 *
 * To run a query within a React component, call `useAuthorRelatedDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthorRelatedDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthorRelatedDataQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAuthorRelatedDataQuery(
  baseOptions?: Apollo.QueryHookOptions<AuthorRelatedDataQuery, AuthorRelatedDataQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AuthorRelatedDataQuery, AuthorRelatedDataQueryVariables>(AuthorRelatedDataQuery, options);
}
export function useAuthorRelatedDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AuthorRelatedDataQuery, AuthorRelatedDataQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AuthorRelatedDataQuery, AuthorRelatedDataQueryVariables>(AuthorRelatedDataQuery, options);
}
export type AuthorRelatedDataQueryHookResult = ReturnType<typeof useAuthorRelatedDataQuery>;
export type AuthorRelatedDataLazyQueryHookResult = ReturnType<typeof useAuthorRelatedDataLazyQuery>;
export type AuthorRelatedDataQueryResult = Apollo.QueryResult<AuthorRelatedDataQuery, AuthorRelatedDataQueryVariables>;
export const AllTemplateCaseStudyQuery = gql`
  query AllTemplateCaseStudy {
    allTemplateCaseStudies(first: "100") {
      id
      slug
    }
  }
`;

/**
 * __useAllTemplateCaseStudyQuery__
 *
 * To run a query within a React component, call `useAllTemplateCaseStudyQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTemplateCaseStudyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTemplateCaseStudyQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllTemplateCaseStudyQuery(
  baseOptions?: Apollo.QueryHookOptions<AllTemplateCaseStudyQuery, AllTemplateCaseStudyQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllTemplateCaseStudyQuery, AllTemplateCaseStudyQueryVariables>(
    AllTemplateCaseStudyQuery,
    options,
  );
}
export function useAllTemplateCaseStudyLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AllTemplateCaseStudyQuery, AllTemplateCaseStudyQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllTemplateCaseStudyQuery, AllTemplateCaseStudyQueryVariables>(
    AllTemplateCaseStudyQuery,
    options,
  );
}
export type AllTemplateCaseStudyQueryHookResult = ReturnType<typeof useAllTemplateCaseStudyQuery>;
export type AllTemplateCaseStudyLazyQueryHookResult = ReturnType<typeof useAllTemplateCaseStudyLazyQuery>;
export type AllTemplateCaseStudyQueryResult = Apollo.QueryResult<
  AllTemplateCaseStudyQuery,
  AllTemplateCaseStudyQueryVariables
>;
export const TemplateCaseStudyDataQuery = gql`
  query templateCaseStudyData($slug: String) {
    templateCaseStudy(filter: { slug: { eq: $slug } }) {
      ...templateCaseStudy
    }
    related: allTemplateCaseStudies(filter: { slug: { neq: $slug } }) {
      ...templateCaseStudyList
    }
  }
  ${TemplateCaseStudyFragment}
  ${TemplateCaseStudyListFragment}
`;

/**
 * __useTemplateCaseStudyDataQuery__
 *
 * To run a query within a React component, call `useTemplateCaseStudyDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useTemplateCaseStudyDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTemplateCaseStudyDataQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useTemplateCaseStudyDataQuery(
  baseOptions?: Apollo.QueryHookOptions<TemplateCaseStudyDataQuery, TemplateCaseStudyDataQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TemplateCaseStudyDataQuery, TemplateCaseStudyDataQueryVariables>(
    TemplateCaseStudyDataQuery,
    options,
  );
}
export function useTemplateCaseStudyDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<TemplateCaseStudyDataQuery, TemplateCaseStudyDataQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TemplateCaseStudyDataQuery, TemplateCaseStudyDataQueryVariables>(
    TemplateCaseStudyDataQuery,
    options,
  );
}
export type TemplateCaseStudyDataQueryHookResult = ReturnType<typeof useTemplateCaseStudyDataQuery>;
export type TemplateCaseStudyDataLazyQueryHookResult = ReturnType<typeof useTemplateCaseStudyDataLazyQuery>;
export type TemplateCaseStudyDataQueryResult = Apollo.QueryResult<
  TemplateCaseStudyDataQuery,
  TemplateCaseStudyDataQueryVariables
>;
export const AllCaseStudyListQuery = gql`
  query AllCaseStudyList {
    allTemplateCaseStudies(first: "100") {
      ...templateCaseStudyList
    }
  }
  ${TemplateCaseStudyListFragment}
`;

/**
 * __useAllCaseStudyListQuery__
 *
 * To run a query within a React component, call `useAllCaseStudyListQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCaseStudyListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCaseStudyListQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllCaseStudyListQuery(
  baseOptions?: Apollo.QueryHookOptions<AllCaseStudyListQuery, AllCaseStudyListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllCaseStudyListQuery, AllCaseStudyListQueryVariables>(AllCaseStudyListQuery, options);
}
export function useAllCaseStudyListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AllCaseStudyListQuery, AllCaseStudyListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllCaseStudyListQuery, AllCaseStudyListQueryVariables>(AllCaseStudyListQuery, options);
}
export type AllCaseStudyListQueryHookResult = ReturnType<typeof useAllCaseStudyListQuery>;
export type AllCaseStudyListLazyQueryHookResult = ReturnType<typeof useAllCaseStudyListLazyQuery>;
export type AllCaseStudyListQueryResult = Apollo.QueryResult<AllCaseStudyListQuery, AllCaseStudyListQueryVariables>;
export const AllWebinarListQuery = gql`
  query AllWebinarList {
    allTemplateExternalWebinars(first: "100") {
      ...templateWebinar
    }
  }
  ${TemplateWebinarFragment}
`;

/**
 * __useAllWebinarListQuery__
 *
 * To run a query within a React component, call `useAllWebinarListQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllWebinarListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllWebinarListQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllWebinarListQuery(
  baseOptions?: Apollo.QueryHookOptions<AllWebinarListQuery, AllWebinarListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllWebinarListQuery, AllWebinarListQueryVariables>(AllWebinarListQuery, options);
}
export function useAllWebinarListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AllWebinarListQuery, AllWebinarListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllWebinarListQuery, AllWebinarListQueryVariables>(AllWebinarListQuery, options);
}
export type AllWebinarListQueryHookResult = ReturnType<typeof useAllWebinarListQuery>;
export type AllWebinarListLazyQueryHookResult = ReturnType<typeof useAllWebinarListLazyQuery>;
export type AllWebinarListQueryResult = Apollo.QueryResult<AllWebinarListQuery, AllWebinarListQueryVariables>;
export const AllResourceListQuery = gql`
  query AllResourceList {
    allTemplateResourcesExternals(first: "100") {
      ...templateResources
    }
  }
  ${TemplateResourcesFragment}
`;

/**
 * __useAllResourceListQuery__
 *
 * To run a query within a React component, call `useAllResourceListQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllResourceListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllResourceListQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllResourceListQuery(
  baseOptions?: Apollo.QueryHookOptions<AllResourceListQuery, AllResourceListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllResourceListQuery, AllResourceListQueryVariables>(AllResourceListQuery, options);
}
export function useAllResourceListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AllResourceListQuery, AllResourceListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllResourceListQuery, AllResourceListQueryVariables>(AllResourceListQuery, options);
}
export type AllResourceListQueryHookResult = ReturnType<typeof useAllResourceListQuery>;
export type AllResourceListLazyQueryHookResult = ReturnType<typeof useAllResourceListLazyQuery>;
export type AllResourceListQueryResult = Apollo.QueryResult<AllResourceListQuery, AllResourceListQueryVariables>;
export const ResourceDataQuery = gql`
  query resourceData {
    blogs: allTemplateBlogs(first: "10", filter: { hideFromListing: { eq: false } }, orderBy: publishDate_DESC) {
      ...refBlogCard
    }
    tutorials: allTemplateBlogs(
      first: "10"
      filter: { hideFromListing: { eq: false }, category: { eq: "Tutorial" } }
      orderBy: publishDate_DESC
    ) {
      ...refBlogCard
    }
    allTemplateCaseStudies(first: "10", orderBy: _createdAt_DESC) {
      ...refTemplateCaseStudy
    }
    allTemplateResourcesExternals(first: "10", orderBy: _createdAt_DESC) {
      ...templateResources
    }
    allTemplateExternalWebinars(first: "10", orderBy: _createdAt_DESC) {
      ...templateWebinar
    }
  }
  ${RefBlogCardFragment}
  ${RefTemplateCaseStudyFragment}
  ${TemplateResourcesFragment}
  ${TemplateWebinarFragment}
`;

/**
 * __useResourceDataQuery__
 *
 * To run a query within a React component, call `useResourceDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useResourceDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useResourceDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useResourceDataQuery(
  baseOptions?: Apollo.QueryHookOptions<ResourceDataQuery, ResourceDataQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ResourceDataQuery, ResourceDataQueryVariables>(ResourceDataQuery, options);
}
export function useResourceDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ResourceDataQuery, ResourceDataQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ResourceDataQuery, ResourceDataQueryVariables>(ResourceDataQuery, options);
}
export type ResourceDataQueryHookResult = ReturnType<typeof useResourceDataQuery>;
export type ResourceDataLazyQueryHookResult = ReturnType<typeof useResourceDataLazyQuery>;
export type ResourceDataQueryResult = Apollo.QueryResult<ResourceDataQuery, ResourceDataQueryVariables>;
export const ChangelogDataQuery = gql`
  query changelogData {
    allTemplateChangelogs(first: "100", orderBy: publishDate_DESC) {
      ...templateChangelog
    }
  }
  ${TemplateChangelogFragment}
`;

/**
 * __useChangelogDataQuery__
 *
 * To run a query within a React component, call `useChangelogDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useChangelogDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChangelogDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useChangelogDataQuery(
  baseOptions?: Apollo.QueryHookOptions<ChangelogDataQuery, ChangelogDataQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ChangelogDataQuery, ChangelogDataQueryVariables>(ChangelogDataQuery, options);
}
export function useChangelogDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ChangelogDataQuery, ChangelogDataQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ChangelogDataQuery, ChangelogDataQueryVariables>(ChangelogDataQuery, options);
}
export type ChangelogDataQueryHookResult = ReturnType<typeof useChangelogDataQuery>;
export type ChangelogDataLazyQueryHookResult = ReturnType<typeof useChangelogDataLazyQuery>;
export type ChangelogDataQueryResult = Apollo.QueryResult<ChangelogDataQuery, ChangelogDataQueryVariables>;
export const ChangelogAllSlugsQuery = gql`
  query ChangelogAllSlugs {
    allTemplateChangelogs(first: "100") {
      id
      slug
    }
  }
`;

/**
 * __useChangelogAllSlugsQuery__
 *
 * To run a query within a React component, call `useChangelogAllSlugsQuery` and pass it any options that fit your needs.
 * When your component renders, `useChangelogAllSlugsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChangelogAllSlugsQuery({
 *   variables: {
 *   },
 * });
 */
export function useChangelogAllSlugsQuery(
  baseOptions?: Apollo.QueryHookOptions<ChangelogAllSlugsQuery, ChangelogAllSlugsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ChangelogAllSlugsQuery, ChangelogAllSlugsQueryVariables>(ChangelogAllSlugsQuery, options);
}
export function useChangelogAllSlugsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ChangelogAllSlugsQuery, ChangelogAllSlugsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ChangelogAllSlugsQuery, ChangelogAllSlugsQueryVariables>(ChangelogAllSlugsQuery, options);
}
export type ChangelogAllSlugsQueryHookResult = ReturnType<typeof useChangelogAllSlugsQuery>;
export type ChangelogAllSlugsLazyQueryHookResult = ReturnType<typeof useChangelogAllSlugsLazyQuery>;
export type ChangelogAllSlugsQueryResult = Apollo.QueryResult<ChangelogAllSlugsQuery, ChangelogAllSlugsQueryVariables>;
export const ChangelogDetailDataQuery = gql`
  query ChangelogDetailData($slug: String) {
    templateChangelog(filter: { slug: { eq: $slug } }) {
      ...templateChangelog
    }
    componentConversionPanel(filter: { id: { eq: "121471683" } }) {
      ...componentConversionPanel
    }
  }
  ${TemplateChangelogFragment}
  ${ComponentConversionPanelFragment}
`;

/**
 * __useChangelogDetailDataQuery__
 *
 * To run a query within a React component, call `useChangelogDetailDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useChangelogDetailDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChangelogDetailDataQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useChangelogDetailDataQuery(
  baseOptions?: Apollo.QueryHookOptions<ChangelogDetailDataQuery, ChangelogDetailDataQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ChangelogDetailDataQuery, ChangelogDetailDataQueryVariables>(
    ChangelogDetailDataQuery,
    options,
  );
}
export function useChangelogDetailDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ChangelogDetailDataQuery, ChangelogDetailDataQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ChangelogDetailDataQuery, ChangelogDetailDataQueryVariables>(
    ChangelogDetailDataQuery,
    options,
  );
}
export type ChangelogDetailDataQueryHookResult = ReturnType<typeof useChangelogDetailDataQuery>;
export type ChangelogDetailDataLazyQueryHookResult = ReturnType<typeof useChangelogDetailDataLazyQuery>;
export type ChangelogDetailDataQueryResult = Apollo.QueryResult<
  ChangelogDetailDataQuery,
  ChangelogDetailDataQueryVariables
>;
export const AllTemplateNewsQuery = gql`
  query AllTemplateNews {
    allTemplateNews(first: "100") {
      ...templateNews
    }
  }
  ${TemplateNewsFragment}
`;

/**
 * __useAllTemplateNewsQuery__
 *
 * To run a query within a React component, call `useAllTemplateNewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTemplateNewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTemplateNewsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllTemplateNewsQuery(
  baseOptions?: Apollo.QueryHookOptions<AllTemplateNewsQuery, AllTemplateNewsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllTemplateNewsQuery, AllTemplateNewsQueryVariables>(AllTemplateNewsQuery, options);
}
export function useAllTemplateNewsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AllTemplateNewsQuery, AllTemplateNewsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllTemplateNewsQuery, AllTemplateNewsQueryVariables>(AllTemplateNewsQuery, options);
}
export type AllTemplateNewsQueryHookResult = ReturnType<typeof useAllTemplateNewsQuery>;
export type AllTemplateNewsLazyQueryHookResult = ReturnType<typeof useAllTemplateNewsLazyQuery>;
export type AllTemplateNewsQueryResult = Apollo.QueryResult<AllTemplateNewsQuery, AllTemplateNewsQueryVariables>;
export const AllTemplateBuiltWithDeepgramSlugQuery = gql`
  query AllTemplateBuiltWithDeepgramSlug {
    allTemplateBuiltWithDeepgrams(first: "100") {
      id
      slug
    }
  }
`;

/**
 * __useAllTemplateBuiltWithDeepgramSlugQuery__
 *
 * To run a query within a React component, call `useAllTemplateBuiltWithDeepgramSlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTemplateBuiltWithDeepgramSlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTemplateBuiltWithDeepgramSlugQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllTemplateBuiltWithDeepgramSlugQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AllTemplateBuiltWithDeepgramSlugQuery,
    AllTemplateBuiltWithDeepgramSlugQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllTemplateBuiltWithDeepgramSlugQuery, AllTemplateBuiltWithDeepgramSlugQueryVariables>(
    AllTemplateBuiltWithDeepgramSlugQuery,
    options,
  );
}
export function useAllTemplateBuiltWithDeepgramSlugLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllTemplateBuiltWithDeepgramSlugQuery,
    AllTemplateBuiltWithDeepgramSlugQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllTemplateBuiltWithDeepgramSlugQuery, AllTemplateBuiltWithDeepgramSlugQueryVariables>(
    AllTemplateBuiltWithDeepgramSlugQuery,
    options,
  );
}
export type AllTemplateBuiltWithDeepgramSlugQueryHookResult = ReturnType<
  typeof useAllTemplateBuiltWithDeepgramSlugQuery
>;
export type AllTemplateBuiltWithDeepgramSlugLazyQueryHookResult = ReturnType<
  typeof useAllTemplateBuiltWithDeepgramSlugLazyQuery
>;
export type AllTemplateBuiltWithDeepgramSlugQueryResult = Apollo.QueryResult<
  AllTemplateBuiltWithDeepgramSlugQuery,
  AllTemplateBuiltWithDeepgramSlugQueryVariables
>;
export const AllTemplateBuiltWithDeepgramQuery = gql`
  query AllTemplateBuiltWithDeepgram {
    allTemplateBuiltWithDeepgrams(first: "100") {
      ...templateBuiltWithDeepgramList
    }
  }
  ${TemplateBuiltWithDeepgramListFragment}
`;

/**
 * __useAllTemplateBuiltWithDeepgramQuery__
 *
 * To run a query within a React component, call `useAllTemplateBuiltWithDeepgramQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTemplateBuiltWithDeepgramQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTemplateBuiltWithDeepgramQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllTemplateBuiltWithDeepgramQuery(
  baseOptions?: Apollo.QueryHookOptions<AllTemplateBuiltWithDeepgramQuery, AllTemplateBuiltWithDeepgramQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllTemplateBuiltWithDeepgramQuery, AllTemplateBuiltWithDeepgramQueryVariables>(
    AllTemplateBuiltWithDeepgramQuery,
    options,
  );
}
export function useAllTemplateBuiltWithDeepgramLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllTemplateBuiltWithDeepgramQuery,
    AllTemplateBuiltWithDeepgramQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllTemplateBuiltWithDeepgramQuery, AllTemplateBuiltWithDeepgramQueryVariables>(
    AllTemplateBuiltWithDeepgramQuery,
    options,
  );
}
export type AllTemplateBuiltWithDeepgramQueryHookResult = ReturnType<typeof useAllTemplateBuiltWithDeepgramQuery>;
export type AllTemplateBuiltWithDeepgramLazyQueryHookResult = ReturnType<
  typeof useAllTemplateBuiltWithDeepgramLazyQuery
>;
export type AllTemplateBuiltWithDeepgramQueryResult = Apollo.QueryResult<
  AllTemplateBuiltWithDeepgramQuery,
  AllTemplateBuiltWithDeepgramQueryVariables
>;
export const AllTagsQuery = gql`
  query AllTags {
    allEntityTags(first: "100") {
      ...entityTag
    }
  }
  ${EntityTagFragment}
`;

/**
 * __useAllTagsQuery__
 *
 * To run a query within a React component, call `useAllTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllTagsQuery(baseOptions?: Apollo.QueryHookOptions<AllTagsQuery, AllTagsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllTagsQuery, AllTagsQueryVariables>(AllTagsQuery, options);
}
export function useAllTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllTagsQuery, AllTagsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllTagsQuery, AllTagsQueryVariables>(AllTagsQuery, options);
}
export type AllTagsQueryHookResult = ReturnType<typeof useAllTagsQuery>;
export type AllTagsLazyQueryHookResult = ReturnType<typeof useAllTagsLazyQuery>;
export type AllTagsQueryResult = Apollo.QueryResult<AllTagsQuery, AllTagsQueryVariables>;
export const BuiltWithDeepgramDetailDataQuery = gql`
  query BuiltWithDeepgramDetailData($slug: String) {
    templateBuiltWithDeepgram(filter: { slug: { eq: $slug } }) {
      ...templateBuiltWithDeepgram
    }
    componentConversionPanel(filter: { id: { eq: "106418881" } }) {
      ...componentConversionPanel
    }
  }
  ${TemplateBuiltWithDeepgramFragment}
  ${ComponentConversionPanelFragment}
`;

/**
 * __useBuiltWithDeepgramDetailDataQuery__
 *
 * To run a query within a React component, call `useBuiltWithDeepgramDetailDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useBuiltWithDeepgramDetailDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBuiltWithDeepgramDetailDataQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useBuiltWithDeepgramDetailDataQuery(
  baseOptions?: Apollo.QueryHookOptions<BuiltWithDeepgramDetailDataQuery, BuiltWithDeepgramDetailDataQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BuiltWithDeepgramDetailDataQuery, BuiltWithDeepgramDetailDataQueryVariables>(
    BuiltWithDeepgramDetailDataQuery,
    options,
  );
}
export function useBuiltWithDeepgramDetailDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BuiltWithDeepgramDetailDataQuery,
    BuiltWithDeepgramDetailDataQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BuiltWithDeepgramDetailDataQuery, BuiltWithDeepgramDetailDataQueryVariables>(
    BuiltWithDeepgramDetailDataQuery,
    options,
  );
}
export type BuiltWithDeepgramDetailDataQueryHookResult = ReturnType<typeof useBuiltWithDeepgramDetailDataQuery>;
export type BuiltWithDeepgramDetailDataLazyQueryHookResult = ReturnType<typeof useBuiltWithDeepgramDetailDataLazyQuery>;
export type BuiltWithDeepgramDetailDataQueryResult = Apollo.QueryResult<
  BuiltWithDeepgramDetailDataQuery,
  BuiltWithDeepgramDetailDataQueryVariables
>;
export const LegalDetailDataQuery = gql`
  query LegalDetailData($slug: String) {
    templateLegal(filter: { slug: { eq: $slug } }) {
      ...templateLegal
    }
    componentConversionPanel(filter: { id: { eq: "124135935" } }) {
      ...componentConversionPanel
    }
  }
  ${TemplateLegalFragment}
  ${ComponentConversionPanelFragment}
`;

/**
 * __useLegalDetailDataQuery__
 *
 * To run a query within a React component, call `useLegalDetailDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useLegalDetailDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLegalDetailDataQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useLegalDetailDataQuery(
  baseOptions?: Apollo.QueryHookOptions<LegalDetailDataQuery, LegalDetailDataQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<LegalDetailDataQuery, LegalDetailDataQueryVariables>(LegalDetailDataQuery, options);
}
export function useLegalDetailDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<LegalDetailDataQuery, LegalDetailDataQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<LegalDetailDataQuery, LegalDetailDataQueryVariables>(LegalDetailDataQuery, options);
}
export type LegalDetailDataQueryHookResult = ReturnType<typeof useLegalDetailDataQuery>;
export type LegalDetailDataLazyQueryHookResult = ReturnType<typeof useLegalDetailDataLazyQuery>;
export type LegalDetailDataQueryResult = Apollo.QueryResult<LegalDetailDataQuery, LegalDetailDataQueryVariables>;
export const LegalAllSlugsQuery = gql`
  query LegalAllSlugs {
    allTemplateLegals {
      id
      slug
    }
  }
`;

/**
 * __useLegalAllSlugsQuery__
 *
 * To run a query within a React component, call `useLegalAllSlugsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLegalAllSlugsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLegalAllSlugsQuery({
 *   variables: {
 *   },
 * });
 */
export function useLegalAllSlugsQuery(
  baseOptions?: Apollo.QueryHookOptions<LegalAllSlugsQuery, LegalAllSlugsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<LegalAllSlugsQuery, LegalAllSlugsQueryVariables>(LegalAllSlugsQuery, options);
}
export function useLegalAllSlugsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<LegalAllSlugsQuery, LegalAllSlugsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<LegalAllSlugsQuery, LegalAllSlugsQueryVariables>(LegalAllSlugsQuery, options);
}
export type LegalAllSlugsQueryHookResult = ReturnType<typeof useLegalAllSlugsQuery>;
export type LegalAllSlugsLazyQueryHookResult = ReturnType<typeof useLegalAllSlugsLazyQuery>;
export type LegalAllSlugsQueryResult = Apollo.QueryResult<LegalAllSlugsQuery, LegalAllSlugsQueryVariables>;
export const PodcastDetailDataQuery = gql`
  query PodcastDetailData($slug: String) {
    templatePodcast(filter: { slug: { eq: $slug } }) {
      ...templatePodcast
    }
    componentConversionPanel(filter: { id: { eq: "124135935" } }) {
      ...componentConversionPanel
    }
    related: allTemplatePodcasts(filter: { slug: { neq: $slug } }, first: "6") {
      ...refTemplatePodcast
    }
  }
  ${TemplatePodcastFragment}
  ${ComponentConversionPanelFragment}
  ${RefTemplatePodcastFragment}
`;

/**
 * __usePodcastDetailDataQuery__
 *
 * To run a query within a React component, call `usePodcastDetailDataQuery` and pass it any options that fit your needs.
 * When your component renders, `usePodcastDetailDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePodcastDetailDataQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function usePodcastDetailDataQuery(
  baseOptions?: Apollo.QueryHookOptions<PodcastDetailDataQuery, PodcastDetailDataQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PodcastDetailDataQuery, PodcastDetailDataQueryVariables>(PodcastDetailDataQuery, options);
}
export function usePodcastDetailDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PodcastDetailDataQuery, PodcastDetailDataQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PodcastDetailDataQuery, PodcastDetailDataQueryVariables>(PodcastDetailDataQuery, options);
}
export type PodcastDetailDataQueryHookResult = ReturnType<typeof usePodcastDetailDataQuery>;
export type PodcastDetailDataLazyQueryHookResult = ReturnType<typeof usePodcastDetailDataLazyQuery>;
export type PodcastDetailDataQueryResult = Apollo.QueryResult<PodcastDetailDataQuery, PodcastDetailDataQueryVariables>;
export const AllPodcastSlugsQuery = gql`
  query AllPodcastSlugs {
    allTemplatePodcasts {
      id
      slug
    }
  }
`;

/**
 * __useAllPodcastSlugsQuery__
 *
 * To run a query within a React component, call `useAllPodcastSlugsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPodcastSlugsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPodcastSlugsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllPodcastSlugsQuery(
  baseOptions?: Apollo.QueryHookOptions<AllPodcastSlugsQuery, AllPodcastSlugsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllPodcastSlugsQuery, AllPodcastSlugsQueryVariables>(AllPodcastSlugsQuery, options);
}
export function useAllPodcastSlugsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AllPodcastSlugsQuery, AllPodcastSlugsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllPodcastSlugsQuery, AllPodcastSlugsQueryVariables>(AllPodcastSlugsQuery, options);
}
export type AllPodcastSlugsQueryHookResult = ReturnType<typeof useAllPodcastSlugsQuery>;
export type AllPodcastSlugsLazyQueryHookResult = ReturnType<typeof useAllPodcastSlugsLazyQuery>;
export type AllPodcastSlugsQueryResult = Apollo.QueryResult<AllPodcastSlugsQuery, AllPodcastSlugsQueryVariables>;
export const AllPartnerSlugsQuery = gql`
  query AllPartnerSlugs {
    allTemplatePartners {
      id
      slug
    }
  }
`;

/**
 * __useAllPartnerSlugsQuery__
 *
 * To run a query within a React component, call `useAllPartnerSlugsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPartnerSlugsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPartnerSlugsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllPartnerSlugsQuery(
  baseOptions?: Apollo.QueryHookOptions<AllPartnerSlugsQuery, AllPartnerSlugsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllPartnerSlugsQuery, AllPartnerSlugsQueryVariables>(AllPartnerSlugsQuery, options);
}
export function useAllPartnerSlugsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AllPartnerSlugsQuery, AllPartnerSlugsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllPartnerSlugsQuery, AllPartnerSlugsQueryVariables>(AllPartnerSlugsQuery, options);
}
export type AllPartnerSlugsQueryHookResult = ReturnType<typeof useAllPartnerSlugsQuery>;
export type AllPartnerSlugsLazyQueryHookResult = ReturnType<typeof useAllPartnerSlugsLazyQuery>;
export type AllPartnerSlugsQueryResult = Apollo.QueryResult<AllPartnerSlugsQuery, AllPartnerSlugsQueryVariables>;
export const AllPartnerListQuery = gql`
  query AllPartnerList {
    allTemplatePartners {
      ...templatePartnerList
    }
  }
  ${TemplatePartnerListFragment}
`;

/**
 * __useAllPartnerListQuery__
 *
 * To run a query within a React component, call `useAllPartnerListQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPartnerListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPartnerListQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllPartnerListQuery(
  baseOptions?: Apollo.QueryHookOptions<AllPartnerListQuery, AllPartnerListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllPartnerListQuery, AllPartnerListQueryVariables>(AllPartnerListQuery, options);
}
export function useAllPartnerListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AllPartnerListQuery, AllPartnerListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllPartnerListQuery, AllPartnerListQueryVariables>(AllPartnerListQuery, options);
}
export type AllPartnerListQueryHookResult = ReturnType<typeof useAllPartnerListQuery>;
export type AllPartnerListLazyQueryHookResult = ReturnType<typeof useAllPartnerListLazyQuery>;
export type AllPartnerListQueryResult = Apollo.QueryResult<AllPartnerListQuery, AllPartnerListQueryVariables>;
export const PartnerDetailDataQuery = gql`
  query PartnerDetailData($slug: String) {
    templatePartner(filter: { slug: { eq: $slug } }) {
      ...templatePartner
    }
    componentConversionPanel(filter: { id: { eq: "182695558" } }) {
      ...componentConversionPanel
    }
    related: allTemplatePartners(filter: { slug: { neq: $slug } }, first: "6") {
      ...templatePartnerList
    }
  }
  ${TemplatePartnerFragment}
  ${ComponentConversionPanelFragment}
  ${TemplatePartnerListFragment}
`;

/**
 * __usePartnerDetailDataQuery__
 *
 * To run a query within a React component, call `usePartnerDetailDataQuery` and pass it any options that fit your needs.
 * When your component renders, `usePartnerDetailDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePartnerDetailDataQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function usePartnerDetailDataQuery(
  baseOptions?: Apollo.QueryHookOptions<PartnerDetailDataQuery, PartnerDetailDataQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PartnerDetailDataQuery, PartnerDetailDataQueryVariables>(PartnerDetailDataQuery, options);
}
export function usePartnerDetailDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PartnerDetailDataQuery, PartnerDetailDataQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PartnerDetailDataQuery, PartnerDetailDataQueryVariables>(PartnerDetailDataQuery, options);
}
export type PartnerDetailDataQueryHookResult = ReturnType<typeof usePartnerDetailDataQuery>;
export type PartnerDetailDataLazyQueryHookResult = ReturnType<typeof usePartnerDetailDataLazyQuery>;
export type PartnerDetailDataQueryResult = Apollo.QueryResult<PartnerDetailDataQuery, PartnerDetailDataQueryVariables>;
export const AllRedirectsQuery = gql`
  query AllRedirects($slug: String) {
    redirects: itemRedirect(filter: { originalSlug: { eq: $slug } }) {
      newSlug
      originalSlug
    }
  }
`;

/**
 * __useAllRedirectsQuery__
 *
 * To run a query within a React component, call `useAllRedirectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllRedirectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllRedirectsQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useAllRedirectsQuery(
  baseOptions?: Apollo.QueryHookOptions<AllRedirectsQuery, AllRedirectsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllRedirectsQuery, AllRedirectsQueryVariables>(AllRedirectsQuery, options);
}
export function useAllRedirectsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AllRedirectsQuery, AllRedirectsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllRedirectsQuery, AllRedirectsQueryVariables>(AllRedirectsQuery, options);
}
export type AllRedirectsQueryHookResult = ReturnType<typeof useAllRedirectsQuery>;
export type AllRedirectsLazyQueryHookResult = ReturnType<typeof useAllRedirectsLazyQuery>;
export type AllRedirectsQueryResult = Apollo.QueryResult<AllRedirectsQuery, AllRedirectsQueryVariables>;
export const BlogCategoryMetaQuery = gql`
  query BlogCategoryMeta($name: String) {
    categoryMeta: allEntityCategories(filter: { categoryName: { eq: $name } }) {
      ...entityCategory
    }
  }
  ${EntityCategoryFragment}
`;

/**
 * __useBlogCategoryMetaQuery__
 *
 * To run a query within a React component, call `useBlogCategoryMetaQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogCategoryMetaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogCategoryMetaQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useBlogCategoryMetaQuery(
  baseOptions?: Apollo.QueryHookOptions<BlogCategoryMetaQuery, BlogCategoryMetaQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BlogCategoryMetaQuery, BlogCategoryMetaQueryVariables>(BlogCategoryMetaQuery, options);
}
export function useBlogCategoryMetaLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<BlogCategoryMetaQuery, BlogCategoryMetaQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BlogCategoryMetaQuery, BlogCategoryMetaQueryVariables>(BlogCategoryMetaQuery, options);
}
export type BlogCategoryMetaQueryHookResult = ReturnType<typeof useBlogCategoryMetaQuery>;
export type BlogCategoryMetaLazyQueryHookResult = ReturnType<typeof useBlogCategoryMetaLazyQuery>;
export type BlogCategoryMetaQueryResult = Apollo.QueryResult<BlogCategoryMetaQuery, BlogCategoryMetaQueryVariables>;
export const AllCustomPageMetaQuery = gql`
  query AllCustomPageMeta {
    pageMetaData: customPageSeo {
      metaData
    }
  }
`;

/**
 * __useAllCustomPageMetaQuery__
 *
 * To run a query within a React component, call `useAllCustomPageMetaQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCustomPageMetaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCustomPageMetaQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllCustomPageMetaQuery(
  baseOptions?: Apollo.QueryHookOptions<AllCustomPageMetaQuery, AllCustomPageMetaQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllCustomPageMetaQuery, AllCustomPageMetaQueryVariables>(AllCustomPageMetaQuery, options);
}
export function useAllCustomPageMetaLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AllCustomPageMetaQuery, AllCustomPageMetaQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllCustomPageMetaQuery, AllCustomPageMetaQueryVariables>(AllCustomPageMetaQuery, options);
}
export type AllCustomPageMetaQueryHookResult = ReturnType<typeof useAllCustomPageMetaQuery>;
export type AllCustomPageMetaLazyQueryHookResult = ReturnType<typeof useAllCustomPageMetaLazyQuery>;
export type AllCustomPageMetaQueryResult = Apollo.QueryResult<AllCustomPageMetaQuery, AllCustomPageMetaQueryVariables>;
export const AllEventsQuery = gql`
  query AllEvents {
    allTemplateEventsDetails {
      id
      __typename
      slug
    }
  }
`;

/**
 * __useAllEventsQuery__
 *
 * To run a query within a React component, call `useAllEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllEventsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllEventsQuery(baseOptions?: Apollo.QueryHookOptions<AllEventsQuery, AllEventsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllEventsQuery, AllEventsQueryVariables>(AllEventsQuery, options);
}
export function useAllEventsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AllEventsQuery, AllEventsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllEventsQuery, AllEventsQueryVariables>(AllEventsQuery, options);
}
export type AllEventsQueryHookResult = ReturnType<typeof useAllEventsQuery>;
export type AllEventsLazyQueryHookResult = ReturnType<typeof useAllEventsLazyQuery>;
export type AllEventsQueryResult = Apollo.QueryResult<AllEventsQuery, AllEventsQueryVariables>;
export const AllEventDetailsQuery = gql`
  query AllEventDetails($slug: String) {
    templateEventsDetail(filter: { slug: { eq: $slug } }) {
      ...templateEventsDetail
    }
  }
  ${TemplateEventsDetailFragment}
`;

/**
 * __useAllEventDetailsQuery__
 *
 * To run a query within a React component, call `useAllEventDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllEventDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllEventDetailsQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useAllEventDetailsQuery(
  baseOptions?: Apollo.QueryHookOptions<AllEventDetailsQuery, AllEventDetailsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllEventDetailsQuery, AllEventDetailsQueryVariables>(AllEventDetailsQuery, options);
}
export function useAllEventDetailsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AllEventDetailsQuery, AllEventDetailsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllEventDetailsQuery, AllEventDetailsQueryVariables>(AllEventDetailsQuery, options);
}
export type AllEventDetailsQueryHookResult = ReturnType<typeof useAllEventDetailsQuery>;
export type AllEventDetailsLazyQueryHookResult = ReturnType<typeof useAllEventDetailsLazyQuery>;
export type AllEventDetailsQueryResult = Apollo.QueryResult<AllEventDetailsQuery, AllEventDetailsQueryVariables>;
export const PageMetaSeoQuery = gql`
  query PageMetaSeo($slug: String) {
    templatePage(filter: { slug: { eq: $slug } }) {
      seo {
        ...seo
      }
    }
  }
  ${SeoFragment}
`;

/**
 * __usePageMetaSeoQuery__
 *
 * To run a query within a React component, call `usePageMetaSeoQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageMetaSeoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageMetaSeoQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function usePageMetaSeoQuery(
  baseOptions?: Apollo.QueryHookOptions<PageMetaSeoQuery, PageMetaSeoQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PageMetaSeoQuery, PageMetaSeoQueryVariables>(PageMetaSeoQuery, options);
}
export function usePageMetaSeoLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PageMetaSeoQuery, PageMetaSeoQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PageMetaSeoQuery, PageMetaSeoQueryVariables>(PageMetaSeoQuery, options);
}
export type PageMetaSeoQueryHookResult = ReturnType<typeof usePageMetaSeoQuery>;
export type PageMetaSeoLazyQueryHookResult = ReturnType<typeof usePageMetaSeoLazyQuery>;
export type PageMetaSeoQueryResult = Apollo.QueryResult<PageMetaSeoQuery, PageMetaSeoQueryVariables>;
export const RssChangelogQuery = gql`
  query rssChangelog {
    allTemplateChangelogs(first: "100", orderBy: publishDate_DESC) {
      id
      title
      description
      seo {
        ...seo
      }
      author {
        ...entityPerson
      }
      slug
      publishDate
      category
    }
  }
  ${SeoFragment}
  ${EntityPersonFragment}
`;

/**
 * __useRssChangelogQuery__
 *
 * To run a query within a React component, call `useRssChangelogQuery` and pass it any options that fit your needs.
 * When your component renders, `useRssChangelogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRssChangelogQuery({
 *   variables: {
 *   },
 * });
 */
export function useRssChangelogQuery(
  baseOptions?: Apollo.QueryHookOptions<RssChangelogQuery, RssChangelogQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<RssChangelogQuery, RssChangelogQueryVariables>(RssChangelogQuery, options);
}
export function useRssChangelogLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<RssChangelogQuery, RssChangelogQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<RssChangelogQuery, RssChangelogQueryVariables>(RssChangelogQuery, options);
}
export type RssChangelogQueryHookResult = ReturnType<typeof useRssChangelogQuery>;
export type RssChangelogLazyQueryHookResult = ReturnType<typeof useRssChangelogLazyQuery>;
export type RssChangelogQueryResult = Apollo.QueryResult<RssChangelogQuery, RssChangelogQueryVariables>;
export const RssArticlesQuery = gql`
  query rssArticles {
    allTemplateBlogs(filter: { hideFromListing: { eq: false } }, orderBy: publishDate_DESC, first: 5) {
      id
      slug
      title
      seo {
        ...seo
      }
      author {
        ...entityPerson
      }
      coAuthors {
        ...entityPerson
      }
      category
      excerpt
      featuredImage {
        ...file
      }
      publishDate
    }
  }
  ${SeoFragment}
  ${EntityPersonFragment}
  ${FileFragment}
`;

/**
 * __useRssArticlesQuery__
 *
 * To run a query within a React component, call `useRssArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRssArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRssArticlesQuery({
 *   variables: {
 *   },
 * });
 */
export function useRssArticlesQuery(
  baseOptions?: Apollo.QueryHookOptions<RssArticlesQuery, RssArticlesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<RssArticlesQuery, RssArticlesQueryVariables>(RssArticlesQuery, options);
}
export function useRssArticlesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<RssArticlesQuery, RssArticlesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<RssArticlesQuery, RssArticlesQueryVariables>(RssArticlesQuery, options);
}
export type RssArticlesQueryHookResult = ReturnType<typeof useRssArticlesQuery>;
export type RssArticlesLazyQueryHookResult = ReturnType<typeof useRssArticlesLazyQuery>;
export type RssArticlesQueryResult = Apollo.QueryResult<RssArticlesQuery, RssArticlesQueryVariables>;
export const RssArticlesByCategoryQuery = gql`
  query rssArticlesByCategory($category: String) {
    categoryBlogs: allTemplateBlogs(
      filter: { hideFromListing: { eq: false }, category: { eq: $category } }
      orderBy: publishDate_DESC
      first: 5
    ) {
      id
      slug
      title
      seo {
        ...seo
      }
      author {
        ...entityPerson
      }
      coAuthors {
        ...entityPerson
      }
      category
      excerpt
      featuredImage {
        ...file
      }
      publishDate
    }
  }
  ${SeoFragment}
  ${EntityPersonFragment}
  ${FileFragment}
`;

/**
 * __useRssArticlesByCategoryQuery__
 *
 * To run a query within a React component, call `useRssArticlesByCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useRssArticlesByCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRssArticlesByCategoryQuery({
 *   variables: {
 *      category: // value for 'category'
 *   },
 * });
 */
export function useRssArticlesByCategoryQuery(
  baseOptions?: Apollo.QueryHookOptions<RssArticlesByCategoryQuery, RssArticlesByCategoryQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<RssArticlesByCategoryQuery, RssArticlesByCategoryQueryVariables>(
    RssArticlesByCategoryQuery,
    options,
  );
}
export function useRssArticlesByCategoryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<RssArticlesByCategoryQuery, RssArticlesByCategoryQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<RssArticlesByCategoryQuery, RssArticlesByCategoryQueryVariables>(
    RssArticlesByCategoryQuery,
    options,
  );
}
export type RssArticlesByCategoryQueryHookResult = ReturnType<typeof useRssArticlesByCategoryQuery>;
export type RssArticlesByCategoryLazyQueryHookResult = ReturnType<typeof useRssArticlesByCategoryLazyQuery>;
export type RssArticlesByCategoryQueryResult = Apollo.QueryResult<
  RssArticlesByCategoryQuery,
  RssArticlesByCategoryQueryVariables
>;
