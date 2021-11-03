package types

type BaseType interface {
	Version() int
	Args() interface{} // returns available arguments from type to be used for transformations. May not even need args bc including the transformation means the needed arguments are available
}

// All string document transformations
type StringType interface {

}

type StringDocument struct {
	Document string
}

// All type document transformations
type TypeType interface {
	StringType
}

type TypeDocument struct {}

// All scope document transformations
type ScopeType interface {
	StringType
}

type ScopeDocument struct {}

// All transformation document transformations
type TransformationType interface {
	StringType
}

type TransformationDocument struct {}