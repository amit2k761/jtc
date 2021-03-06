import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const copiedReq = req.clone({
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
    return next.handle(req)

  }
}