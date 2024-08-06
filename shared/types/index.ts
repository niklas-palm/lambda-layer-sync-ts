export interface Statement {
  upload_id: string;
  statement_id: string;
  mappingExists?: boolean;
  mapping_id?: string;
}

export interface Statements {
  statements: Statement[];
}

export interface StatementPayload {
  Payload: Statement;
}

export interface UpdateDDBAttributes {
  mappingExists?: boolean;
  mappingHash?: string;
  statementStatus?: string;
  taskToken?: string;
  upload_id?: string;
  statement_id?: string;
}
