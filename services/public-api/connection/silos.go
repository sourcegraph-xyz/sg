package connection

import (
	"errors"
	"sg/services/public-api/handlers/requests"
	"sg/services/public-api/models"

	"github.com/gin-gonic/gin"
)

func (c *Connection) ListSilos(ctx *gin.Context) ([]*models.Silo, error) {
	query, args, err := c.qb.Select("*").From("silos").ToSql()
	if err != nil {
		return nil, err
	}

	silos := []*models.Silo{}
	_, err = c.db.WithContext(ctx).Select(&silos, query, args...)
	if err != nil {
		return nil, err
	}

	return silos, nil
}

func (c *Connection) GetSilo(ctx *gin.Context, id string) (*models.Silo, error) {
	query, args, err := c.qb.Select("*").From("silos").Where("id=?", id).ToSql()
	if err != nil {
		return nil, err
	}

	silo := &models.Silo{}
	err = c.db.WithContext(ctx).SelectOne(silo, query, args...)
	if err != nil {
		return nil, err
	}

	return silo, nil
}

func (c *Connection) CreateSilo(ctx *gin.Context, s *requests.Silo) error {
	err := c.db.WithContext(ctx).Insert(s)
	if err != nil {
		return err
	}
	return nil
}

func (c *Connection) UpdateSilo(ctx *gin.Context, s *requests.Silo) error {
	count, err := c.db.WithContext(ctx).Update(s)
	if err != nil {
		return err
	} else if count != 1 {
		return errors.New("Silo not updated.")
	}
	return nil
}

func (c *Connection) DeleteSilo(ctx *gin.Context, id string) error {
	// TODO: soft-delete
	query, args, err := c.qb.Delete("silos").Where("id=?", id).ToSql()

	result, err := c.db.WithContext(ctx).Exec(query, args)
	if err != nil {
		return err
	}
	rows, err := result.RowsAffected()
	if err != nil {
		return err
	} else if rows != 1 {
		return errors.New("Single silo not deleted.")
	}
	return err
}
