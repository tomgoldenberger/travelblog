import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Blogentry } from './blogentry';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private serverUrl = 'http://localhost:4444/blogs';

  constructor(private http: HttpClient) {}

  /** GET all Blogs from the server */
  getBlogentrys(): Observable<Blogentry[]> {
    return this.http.get<Blogentry[]>(this.serverUrl).pipe(
      tap((_) => console.log('fetched Blogentrys')),
      catchError(this.handleError<Blogentry[]>('getBlogentrys', []))
    );
  }

  /** GET Blog by id. Will 404 if id not found */
  getBlogentry(id: string): Observable<Blogentry> {
    const url = `${this.serverUrl}/${id}`;
    return this.http.get<Blogentry>(url).pipe(
      tap((_) => console.log(`fetched Blogentry id=${id}`)),
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
      console.error(error);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** POST: add a new blogentry to the server */
  addBlogentry(blogentry: Blogentry): Observable<Blogentry> {
  
    return this.http
      .post<Blogentry>(this.serverUrl, blogentry, this.httpOptions)
      .pipe(
        tap((newblogentry: Blogentry) =>
          console.log('new Blogentry is added!')
        ),
        catchError(this.handleError<Blogentry>('addblogentry'))
      );
  }
  /** NOT being used at the moment! */
  /** DELETE: delete the blogentry from the server */
  // deleteBlogentry(blogentry: Blogentry | number): Observable<Blogentry> {
  //   const id = typeof blogentry === 'number' ? blogentry : blogentry.id;
  //   const url = `${this.serverUrl}/${id}`;
  //   return this.http.delete<Blogentry>(url, this.httpOptions).pipe(
  //     tap((_) => console.log(' Blogentry is deleted!')),
  //     catchError(this.handleError<Blogentry>('deleteblogentry'))
  //   );
  // }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
}
