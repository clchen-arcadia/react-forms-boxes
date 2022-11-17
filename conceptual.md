React App render structure/tree


App --> BoxList --> NewBoxFrom, and Boxes...

BoxList
-props:
    (none??)
-states:
    [boxes...]
-returns...
    renders NewBoxForm... passing down states, handleChange(), and handleSubmit()
    renders [boxes...], passing down Box props...


NewBoxForm
-props:
    handleFormChange()

-states:
    formFieldsObj {
        height:
        width:
        backgroundColor:
    }

Box
-props:
    Height
    Width
    Background Color
    handleRemoveBtnClick()
-states:
    (none)
