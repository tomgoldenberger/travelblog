import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Blogentry } from './blogentry';
import { catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private contentUrl = 'api/entry';

  constructor(private http: HttpClient) { }


  /** GET all Blogs from the server */
  getBlogentrys(): Observable<Blogentry[]> {
    return this.http.get<Blogentry[]>(this.contentUrl)
    .pipe(tap(_ => console.log('fetched Blogentrys')),//this.log('fetched Blogentrys')),
      catchError(this.handleError<Blogentry[]>('getBlogentrys', []))
    );
  }
  
    /** GET Blog by id. Will 404 if id not found */
    getBlogentry(id: number): Observable<Blogentry> {
    const url = `${this.contentUrl}/${id}`;
    return this.http.get<Blogentry>(url).pipe(
      tap(_ => console.log('fetched blogentry id=${id}')),//this.log(`fetched blogentry id=${id}`)),
      catchError(this.handleError<Blogentry>(`getBlogentry id=${id}`))
    );
    }
  
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
  /** PUT: update the blog on the server */
  updateBlogentry(blogentry: Blogentry): Observable<any> {
    return this.http.put(this.contentUrl, blogentry, this.httpOptions).pipe(
      // tap(_ => this.log(`updated blogentry id=${blogentry.id}`)),
      catchError(this.handleError<any>('updateBlogentry'))
    );
  }
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  /** POST: add a new blogentry to the server */
  addBlogentry(blogentry: Blogentry): Observable<Blogentry> {
    return this.http.post<Blogentry>(this.contentUrl, blogentry, this.httpOptions).pipe(
      // tap((newblogentry: blogentry) => this.log(`added blogentry w/ id=${blogentry.id}`)),
      catchError(this.handleError<Blogentry>('addblogentry'))
    );
  }
  
  /** DELETE: delete the blogentry from the server */
  deleteBlogentry(blogentry: Blogentry | number): Observable<Blogentry> {
    const id = typeof blogentry === 'number' ? blogentry : blogentry.id;
    const url = `${this.contentUrl}/${id}`;
  
    return this.http.delete<Blogentry>(url, this.httpOptions).pipe(
      // tap(_ => this.log(`deleted blogentry id=${id}`)),
      catchError(this.handleError<Blogentry>('deleteblogentry'))
    );
  }
  
  /* GET blogentryes whose name contains search term */
  searchBlogentry(term: string): Observable<Blogentry[]> {
    if (!term.trim()) {
      // if not search term, return empty blogentry array.
      return of([]);
    }
    return this.http.get<Blogentry[]>(`${this.contentUrl}/?name=${term}`).pipe(
      // tap(x => x.length ?
      //    this.log(`found heroes matching "${term}"`) :
      //    this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Blogentry[]>('searchHeroes', []))
    );
  }



}
