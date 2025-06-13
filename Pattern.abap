CLASS zfirstprog DEFINITION
  PUBLIC
  FINAL
  CREATE PUBLIC .

  PUBLIC SECTION.

    INTERFACES if_oo_adt_classrun .
  PROTECTED SECTION.
  PRIVATE SECTION.
ENDCLASS.



CLASS zfirstprog IMPLEMENTATION.


  METHOD if_oo_adt_classrun~main.
  "SINGLE CONDITION SINGLE ST
 DATA: row TYPE i,
          col TYPE i,
          output_line TYPE string ,
          no_line TYPE i VALUE 5.



    DO no_line TIMES.

      row = sy-index - 1.

      CLEAR output_line.

      DO no_line TIMES.
        col = sy-index - 1.

        IF row = 0 OR
           row = no_line - 1 OR
          col = 0 OR
          col = no_line - 1.

          output_line = output_line && '*'  .
          output_line = output_line && | |  .
        ELSE.

          output_line = output_line && |  |.
        ENDIF.
      ENDDO.

      out->write( output_line ).
    ENDDO.

  ENDMETHOD.
ENDCLASS.
