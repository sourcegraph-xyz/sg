package psql_conn

import (
	"github.com/Masterminds/squirrel"
	"gopkg.in/gorp.v2"
)

type PsqlConnection struct {
	db *gorp.DbMap
	qb *squirrel.StatementBuilderType
}

func (c *PsqlConnection) Close() {
	c.db.Db.Close()
}

func (c *PsqlConnection) DirectDB() *gorp.DbMap {
	return c.db
}

func (c *PsqlConnection) DirectQB() *squirrel.StatementBuilderType {
	return c.qb
}

