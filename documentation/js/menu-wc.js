'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">search-it documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-f8ba37400a4741f5df36ab48500c91a087b34f8f2b218a5724622fd47a5c63650c15097ef2fdb9b2fa489df101b93fc027761335837c6a9babd68f0131413b5f"' : 'data-target="#xs-components-links-module-AppModule-f8ba37400a4741f5df36ab48500c91a087b34f8f2b218a5724622fd47a5c63650c15097ef2fdb9b2fa489df101b93fc027761335837c6a9babd68f0131413b5f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-f8ba37400a4741f5df36ab48500c91a087b34f8f2b218a5724622fd47a5c63650c15097ef2fdb9b2fa489df101b93fc027761335837c6a9babd68f0131413b5f"' :
                                            'id="xs-components-links-module-AppModule-f8ba37400a4741f5df36ab48500c91a087b34f8f2b218a5724622fd47a5c63650c15097ef2fdb9b2fa489df101b93fc027761335837c6a9babd68f0131413b5f"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditUserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditUserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NoAuthComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NoAuthComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Page404Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Page404Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchDocumentsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchDocumentsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StatisticsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatisticsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsersManagementComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersManagementComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CurrentUserService.html" data-type="entity-link" >CurrentUserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DocumentsService.html" data-type="entity-link" >DocumentsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EmailService.html" data-type="entity-link" >EmailService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginService.html" data-type="entity-link" >LoginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReportsService.html" data-type="entity-link" >ReportsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SearchService.html" data-type="entity-link" >SearchService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StatisticsService.html" data-type="entity-link" >StatisticsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SuggetsService.html" data-type="entity-link" >SuggetsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SuggetsService-1.html" data-type="entity-link" >SuggetsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/PermissionsSerchGuard.html" data-type="entity-link" >PermissionsSerchGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/PermissionStatisticsGuard.html" data-type="entity-link" >PermissionStatisticsGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/PermissionUploadGuard.html" data-type="entity-link" >PermissionUploadGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/PermissionUserManagementGuard.html" data-type="entity-link" >PermissionUserManagementGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/UserAuthGuard.html" data-type="entity-link" >UserAuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/UserNoAuthGuard.html" data-type="entity-link" >UserNoAuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/CurrentUser.html" data-type="entity-link" >CurrentUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Doc.html" data-type="entity-link" >Doc</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DocsResponse.html" data-type="entity-link" >DocsResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Fiest.html" data-type="entity-link" >Fiest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MySuggester.html" data-type="entity-link" >MySuggester</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Params.html" data-type="entity-link" >Params</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Response.html" data-type="entity-link" >Response</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResponseHeader.html" data-type="entity-link" >ResponseHeader</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResponseHeader-1.html" data-type="entity-link" >ResponseHeader</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResponseUpload.html" data-type="entity-link" >ResponseUpload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Result.html" data-type="entity-link" >Result</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Results.html" data-type="entity-link" >Results</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SideNavToggle.html" data-type="entity-link" >SideNavToggle</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Statistics.html" data-type="entity-link" >Statistics</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Suggest.html" data-type="entity-link" >Suggest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SuggestClass.html" data-type="entity-link" >SuggestClass</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Suggested.html" data-type="entity-link" >Suggested</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Suggestion.html" data-type="entity-link" >Suggestion</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Token.html" data-type="entity-link" >Token</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserPostRequest.html" data-type="entity-link" >UserPostRequest</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});