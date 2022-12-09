export interface Suggest {
    results: Results;
}

export interface Results {
    responseHeader: ResponseHeader;
    command:        string;
    suggest:        SuggestClass;
}

export interface ResponseHeader {
    status: number;
    QTime:  number;
}

export interface SuggestClass {
    mySuggester: MySuggester;
}

export interface MySuggester {
    Fiest: Fiest;
}

export interface Fiest {
    numFound:    number;
    suggestions: Suggestion[];
}

export interface Suggestion {
    term:    string;
    weight:  number;
    payload: string;
}

export interface Suggested {
    numFound:    number;
    suggestions: Suggestion[];
}
