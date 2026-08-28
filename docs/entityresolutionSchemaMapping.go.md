# `entityresolutionSchemaMapping` Submodule <a name="`entityresolutionSchemaMapping` Submodule" id="@cdktn/provider-awscc.entityresolutionSchemaMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EntityresolutionSchemaMapping <a name="EntityresolutionSchemaMapping" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_schema_mapping awscc_entityresolution_schema_mapping}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionschemamapping"

entityresolutionschemamapping.NewEntityresolutionSchemaMapping(scope Construct, id *string, config EntityresolutionSchemaMappingConfig) EntityresolutionSchemaMapping
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig">EntityresolutionSchemaMappingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig">EntityresolutionSchemaMappingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.putMappedInputFields">PutMappedInputFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMappedInputFields` <a name="PutMappedInputFields" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.putMappedInputFields"></a>

```go
func PutMappedInputFields(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.putMappedInputFields.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EntityresolutionSchemaMapping resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionschemamapping"

entityresolutionschemamapping.EntityresolutionSchemaMapping_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionschemamapping"

entityresolutionschemamapping.EntityresolutionSchemaMapping_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionschemamapping"

entityresolutionschemamapping.EntityresolutionSchemaMapping_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionschemamapping"

entityresolutionschemamapping.EntityresolutionSchemaMapping_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a EntityresolutionSchemaMapping resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EntityresolutionSchemaMapping to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EntityresolutionSchemaMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_schema_mapping#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the EntityresolutionSchemaMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.hasWorkflows">HasWorkflows</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.mappedInputFields">MappedInputFields</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList">EntityresolutionSchemaMappingMappedInputFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.schemaArn">SchemaArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList">EntityresolutionSchemaMappingTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.mappedInputFieldsInput">MappedInputFieldsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.schemaNameInput">SchemaNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `HasWorkflows`<sup>Required</sup> <a name="HasWorkflows" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.hasWorkflows"></a>

```go
func HasWorkflows() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MappedInputFields`<sup>Required</sup> <a name="MappedInputFields" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.mappedInputFields"></a>

```go
func MappedInputFields() EntityresolutionSchemaMappingMappedInputFieldsList
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList">EntityresolutionSchemaMappingMappedInputFieldsList</a>

---

##### `SchemaArn`<sup>Required</sup> <a name="SchemaArn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.schemaArn"></a>

```go
func SchemaArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.tags"></a>

```go
func Tags() EntityresolutionSchemaMappingTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList">EntityresolutionSchemaMappingTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `MappedInputFieldsInput`<sup>Optional</sup> <a name="MappedInputFieldsInput" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.mappedInputFieldsInput"></a>

```go
func MappedInputFieldsInput() interface{}
```

- *Type:* interface{}

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.schemaNameInput"></a>

```go
func SchemaNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMapping.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EntityresolutionSchemaMappingConfig <a name="EntityresolutionSchemaMappingConfig" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionschemamapping"

&entityresolutionschemamapping.EntityresolutionSchemaMappingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	MappedInputFields: interface{},
	SchemaName: *string,
	Description: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.mappedInputFields">MappedInputFields</a></code> | <code>interface{}</code> | The SchemaMapping attributes input. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.schemaName">SchemaName</a></code> | <code>*string</code> | The name of the SchemaMapping. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.description">Description</a></code> | <code>*string</code> | The description of the SchemaMapping. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_schema_mapping#tags EntityresolutionSchemaMapping#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MappedInputFields`<sup>Required</sup> <a name="MappedInputFields" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.mappedInputFields"></a>

```go
MappedInputFields interface{}
```

- *Type:* interface{}

The SchemaMapping attributes input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_schema_mapping#mapped_input_fields EntityresolutionSchemaMapping#mapped_input_fields}

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.schemaName"></a>

```go
SchemaName *string
```

- *Type:* *string

The name of the SchemaMapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_schema_mapping#schema_name EntityresolutionSchemaMapping#schema_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the SchemaMapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_schema_mapping#description EntityresolutionSchemaMapping#description}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_schema_mapping#tags EntityresolutionSchemaMapping#tags}.

---

### EntityresolutionSchemaMappingMappedInputFields <a name="EntityresolutionSchemaMappingMappedInputFields" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionschemamapping"

&entityresolutionschemamapping.EntityresolutionSchemaMappingMappedInputFields {
	FieldName: *string,
	Type: *string,
	GroupName: *string,
	Hashed: interface{},
	MatchKey: *string,
	SubType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.fieldName">FieldName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_schema_mapping#field_name EntityresolutionSchemaMapping#field_name}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_schema_mapping#type EntityresolutionSchemaMapping#type}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.groupName">GroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_schema_mapping#group_name EntityresolutionSchemaMapping#group_name}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.hashed">Hashed</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_schema_mapping#hashed EntityresolutionSchemaMapping#hashed}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.matchKey">MatchKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_schema_mapping#match_key EntityresolutionSchemaMapping#match_key}. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.subType">SubType</a></code> | <code>*string</code> | The subtype of the Attribute. Would be required only when type is PROVIDER_ID. |

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.fieldName"></a>

```go
FieldName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_schema_mapping#field_name EntityresolutionSchemaMapping#field_name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_schema_mapping#type EntityresolutionSchemaMapping#type}.

---

##### `GroupName`<sup>Optional</sup> <a name="GroupName" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.groupName"></a>

```go
GroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_schema_mapping#group_name EntityresolutionSchemaMapping#group_name}.

---

##### `Hashed`<sup>Optional</sup> <a name="Hashed" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.hashed"></a>

```go
Hashed interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_schema_mapping#hashed EntityresolutionSchemaMapping#hashed}.

---

##### `MatchKey`<sup>Optional</sup> <a name="MatchKey" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.matchKey"></a>

```go
MatchKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_schema_mapping#match_key EntityresolutionSchemaMapping#match_key}.

---

##### `SubType`<sup>Optional</sup> <a name="SubType" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFields.property.subType"></a>

```go
SubType *string
```

- *Type:* *string

The subtype of the Attribute. Would be required only when type is PROVIDER_ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_schema_mapping#sub_type EntityresolutionSchemaMapping#sub_type}

---

### EntityresolutionSchemaMappingTags <a name="EntityresolutionSchemaMappingTags" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionschemamapping"

&entityresolutionschemamapping.EntityresolutionSchemaMappingTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_schema_mapping#key EntityresolutionSchemaMapping#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/entityresolution_schema_mapping#value EntityresolutionSchemaMapping#value}

---

## Classes <a name="Classes" id="Classes"></a>

### EntityresolutionSchemaMappingMappedInputFieldsList <a name="EntityresolutionSchemaMappingMappedInputFieldsList" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionschemamapping"

entityresolutionschemamapping.NewEntityresolutionSchemaMappingMappedInputFieldsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EntityresolutionSchemaMappingMappedInputFieldsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.get"></a>

```go
func Get(index *f64) EntityresolutionSchemaMappingMappedInputFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EntityresolutionSchemaMappingMappedInputFieldsOutputReference <a name="EntityresolutionSchemaMappingMappedInputFieldsOutputReference" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionschemamapping"

entityresolutionschemamapping.NewEntityresolutionSchemaMappingMappedInputFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EntityresolutionSchemaMappingMappedInputFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.resetGroupName">ResetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.resetHashed">ResetHashed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.resetMatchKey">ResetMatchKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.resetSubType">ResetSubType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupName` <a name="ResetGroupName" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.resetGroupName"></a>

```go
func ResetGroupName()
```

##### `ResetHashed` <a name="ResetHashed" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.resetHashed"></a>

```go
func ResetHashed()
```

##### `ResetMatchKey` <a name="ResetMatchKey" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.resetMatchKey"></a>

```go
func ResetMatchKey()
```

##### `ResetSubType` <a name="ResetSubType" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.resetSubType"></a>

```go
func ResetSubType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.fieldNameInput">FieldNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.groupNameInput">GroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.hashedInput">HashedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.matchKeyInput">MatchKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.subTypeInput">SubTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.fieldName">FieldName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.groupName">GroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.hashed">Hashed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.matchKey">MatchKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.subType">SubType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldNameInput`<sup>Optional</sup> <a name="FieldNameInput" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.fieldNameInput"></a>

```go
func FieldNameInput() *string
```

- *Type:* *string

---

##### `GroupNameInput`<sup>Optional</sup> <a name="GroupNameInput" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.groupNameInput"></a>

```go
func GroupNameInput() *string
```

- *Type:* *string

---

##### `HashedInput`<sup>Optional</sup> <a name="HashedInput" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.hashedInput"></a>

```go
func HashedInput() interface{}
```

- *Type:* interface{}

---

##### `MatchKeyInput`<sup>Optional</sup> <a name="MatchKeyInput" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.matchKeyInput"></a>

```go
func MatchKeyInput() *string
```

- *Type:* *string

---

##### `SubTypeInput`<sup>Optional</sup> <a name="SubTypeInput" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.subTypeInput"></a>

```go
func SubTypeInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.fieldName"></a>

```go
func FieldName() *string
```

- *Type:* *string

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.groupName"></a>

```go
func GroupName() *string
```

- *Type:* *string

---

##### `Hashed`<sup>Required</sup> <a name="Hashed" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.hashed"></a>

```go
func Hashed() interface{}
```

- *Type:* interface{}

---

##### `MatchKey`<sup>Required</sup> <a name="MatchKey" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.matchKey"></a>

```go
func MatchKey() *string
```

- *Type:* *string

---

##### `SubType`<sup>Required</sup> <a name="SubType" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.subType"></a>

```go
func SubType() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EntityresolutionSchemaMappingTagsList <a name="EntityresolutionSchemaMappingTagsList" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionschemamapping"

entityresolutionschemamapping.NewEntityresolutionSchemaMappingTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EntityresolutionSchemaMappingTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.get"></a>

```go
func Get(index *f64) EntityresolutionSchemaMappingTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EntityresolutionSchemaMappingTagsOutputReference <a name="EntityresolutionSchemaMappingTagsOutputReference" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/entityresolutionschemamapping"

entityresolutionschemamapping.NewEntityresolutionSchemaMappingTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EntityresolutionSchemaMappingTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.entityresolutionSchemaMapping.EntityresolutionSchemaMappingTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



