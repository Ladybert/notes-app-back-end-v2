/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
    pgm.createTable('authentications', {
      token: {
        type: 'TEXT',
        notNull: true,
      },
    });
  };
   
  exports.down = (pgm) => {
    pgm.dropTable('authentications');
  };
