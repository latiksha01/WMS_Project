import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuditLog } from '../models/audit-log';

@Injectable({ providedIn: 'root' })
export class AuditLogService {
  private api = 'https://wms-api-latiksha-bmhddyhzfydqdtee.southeastasia-01.azurewebsites.net/api/AuditLog';
  constructor(private http: HttpClient) {}
  getAll(): Observable<AuditLog[]> { return this.http.get<AuditLog[]>(this.api); }
  getById(id: number): Observable<AuditLog> { return this.http.get<AuditLog>(`${this.api}/${id}`); }
}
