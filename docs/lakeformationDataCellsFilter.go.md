# `lakeformationDataCellsFilter` Submodule <a name="`lakeformationDataCellsFilter` Submodule" id="@cdktn/provider-awscc.lakeformationDataCellsFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakeformationDataCellsFilter <a name="LakeformationDataCellsFilter" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_data_cells_filter awscc_lakeformation_data_cells_filter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lakeformationdatacellsfilter"

lakeformationdatacellsfilter.NewLakeformationDataCellsFilter(scope Construct, id *string, config LakeformationDataCellsFilterConfig) LakeformationDataCellsFilter
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig">LakeformationDataCellsFilterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig">LakeformationDataCellsFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putColumnWildcard">PutColumnWildcard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putRowFilter">PutRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetColumnNames">ResetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetColumnWildcard">ResetColumnWildcard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetRowFilter">ResetRowFilter</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutColumnWildcard` <a name="PutColumnWildcard" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putColumnWildcard"></a>

```go
func PutColumnWildcard(value LakeformationDataCellsFilterColumnWildcard)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putColumnWildcard.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard">LakeformationDataCellsFilterColumnWildcard</a>

---

##### `PutRowFilter` <a name="PutRowFilter" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putRowFilter"></a>

```go
func PutRowFilter(value LakeformationDataCellsFilterRowFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.putRowFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter">LakeformationDataCellsFilterRowFilter</a>

---

##### `ResetColumnNames` <a name="ResetColumnNames" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetColumnNames"></a>

```go
func ResetColumnNames()
```

##### `ResetColumnWildcard` <a name="ResetColumnWildcard" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetColumnWildcard"></a>

```go
func ResetColumnWildcard()
```

##### `ResetRowFilter` <a name="ResetRowFilter" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.resetRowFilter"></a>

```go
func ResetRowFilter()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LakeformationDataCellsFilter resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lakeformationdatacellsfilter"

lakeformationdatacellsfilter.LakeformationDataCellsFilter_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lakeformationdatacellsfilter"

lakeformationdatacellsfilter.LakeformationDataCellsFilter_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lakeformationdatacellsfilter"

lakeformationdatacellsfilter.LakeformationDataCellsFilter_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lakeformationdatacellsfilter"

lakeformationdatacellsfilter.LakeformationDataCellsFilter_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a LakeformationDataCellsFilter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LakeformationDataCellsFilter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LakeformationDataCellsFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_data_cells_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the LakeformationDataCellsFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.columnWildcard">ColumnWildcard</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference">LakeformationDataCellsFilterColumnWildcardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.rowFilter">RowFilter</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference">LakeformationDataCellsFilterRowFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.columnNamesInput">ColumnNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.columnWildcardInput">ColumnWildcardInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.rowFilterInput">RowFilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableCatalogIdInput">TableCatalogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.columnNames">ColumnNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableCatalogId">TableCatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ColumnWildcard`<sup>Required</sup> <a name="ColumnWildcard" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.columnWildcard"></a>

```go
func ColumnWildcard() LakeformationDataCellsFilterColumnWildcardOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference">LakeformationDataCellsFilterColumnWildcardOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RowFilter`<sup>Required</sup> <a name="RowFilter" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.rowFilter"></a>

```go
func RowFilter() LakeformationDataCellsFilterRowFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference">LakeformationDataCellsFilterRowFilterOutputReference</a>

---

##### `ColumnNamesInput`<sup>Optional</sup> <a name="ColumnNamesInput" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.columnNamesInput"></a>

```go
func ColumnNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ColumnWildcardInput`<sup>Optional</sup> <a name="ColumnWildcardInput" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.columnWildcardInput"></a>

```go
func ColumnWildcardInput() interface{}
```

- *Type:* interface{}

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RowFilterInput`<sup>Optional</sup> <a name="RowFilterInput" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.rowFilterInput"></a>

```go
func RowFilterInput() interface{}
```

- *Type:* interface{}

---

##### `TableCatalogIdInput`<sup>Optional</sup> <a name="TableCatalogIdInput" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableCatalogIdInput"></a>

```go
func TableCatalogIdInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `ColumnNames`<sup>Required</sup> <a name="ColumnNames" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.columnNames"></a>

```go
func ColumnNames() *[]*string
```

- *Type:* *[]*string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TableCatalogId`<sup>Required</sup> <a name="TableCatalogId" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableCatalogId"></a>

```go
func TableCatalogId() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilter.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LakeformationDataCellsFilterColumnWildcard <a name="LakeformationDataCellsFilterColumnWildcard" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lakeformationdatacellsfilter"

&lakeformationdatacellsfilter.LakeformationDataCellsFilterColumnWildcard {
	ExcludedColumnNames: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard.property.excludedColumnNames">ExcludedColumnNames</a></code> | <code>*[]*string</code> | A list of column names to be excluded from the Data Cells Filter. |

---

##### `ExcludedColumnNames`<sup>Optional</sup> <a name="ExcludedColumnNames" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard.property.excludedColumnNames"></a>

```go
ExcludedColumnNames *[]*string
```

- *Type:* *[]*string

A list of column names to be excluded from the Data Cells Filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_data_cells_filter#excluded_column_names LakeformationDataCellsFilter#excluded_column_names}

---

### LakeformationDataCellsFilterConfig <a name="LakeformationDataCellsFilterConfig" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lakeformationdatacellsfilter"

&lakeformationdatacellsfilter.LakeformationDataCellsFilterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DatabaseName: *string,
	Name: *string,
	TableCatalogId: *string,
	TableName: *string,
	ColumnNames: *[]*string,
	ColumnWildcard: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard,
	RowFilter: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.databaseName">DatabaseName</a></code> | <code>*string</code> | The name of the Database that the Table resides in. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.name">Name</a></code> | <code>*string</code> | The desired name of the Data Cells Filter. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.tableCatalogId">TableCatalogId</a></code> | <code>*string</code> | The Catalog Id of the Table on which to create a Data Cells Filter. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.tableName">TableName</a></code> | <code>*string</code> | The name of the Table to create a Data Cells Filter for. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.columnNames">ColumnNames</a></code> | <code>*[]*string</code> | A list of columns to be included in this Data Cells Filter. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.columnWildcard">ColumnWildcard</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard">LakeformationDataCellsFilterColumnWildcard</a></code> | An object representing the Data Cells Filter's Columns. Either Column Names or a Wildcard is required. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.rowFilter">RowFilter</a></code> | <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter">LakeformationDataCellsFilterRowFilter</a></code> | An object representing the Data Cells Filter's Row Filter. Either a Filter Expression or a Wildcard is required. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

The name of the Database that the Table resides in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_data_cells_filter#database_name LakeformationDataCellsFilter#database_name}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The desired name of the Data Cells Filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_data_cells_filter#name LakeformationDataCellsFilter#name}

---

##### `TableCatalogId`<sup>Required</sup> <a name="TableCatalogId" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.tableCatalogId"></a>

```go
TableCatalogId *string
```

- *Type:* *string

The Catalog Id of the Table on which to create a Data Cells Filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_data_cells_filter#table_catalog_id LakeformationDataCellsFilter#table_catalog_id}

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

The name of the Table to create a Data Cells Filter for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_data_cells_filter#table_name LakeformationDataCellsFilter#table_name}

---

##### `ColumnNames`<sup>Optional</sup> <a name="ColumnNames" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.columnNames"></a>

```go
ColumnNames *[]*string
```

- *Type:* *[]*string

A list of columns to be included in this Data Cells Filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_data_cells_filter#column_names LakeformationDataCellsFilter#column_names}

---

##### `ColumnWildcard`<sup>Optional</sup> <a name="ColumnWildcard" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.columnWildcard"></a>

```go
ColumnWildcard LakeformationDataCellsFilterColumnWildcard
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcard">LakeformationDataCellsFilterColumnWildcard</a>

An object representing the Data Cells Filter's Columns. Either Column Names or a Wildcard is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_data_cells_filter#column_wildcard LakeformationDataCellsFilter#column_wildcard}

---

##### `RowFilter`<sup>Optional</sup> <a name="RowFilter" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterConfig.property.rowFilter"></a>

```go
RowFilter LakeformationDataCellsFilterRowFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter">LakeformationDataCellsFilterRowFilter</a>

An object representing the Data Cells Filter's Row Filter. Either a Filter Expression or a Wildcard is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_data_cells_filter#row_filter LakeformationDataCellsFilter#row_filter}

---

### LakeformationDataCellsFilterRowFilter <a name="LakeformationDataCellsFilterRowFilter" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lakeformationdatacellsfilter"

&lakeformationdatacellsfilter.LakeformationDataCellsFilterRowFilter {
	AllRowsWildcard: *string,
	FilterExpression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter.property.allRowsWildcard">AllRowsWildcard</a></code> | <code>*string</code> | An empty object representing a row wildcard. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter.property.filterExpression">FilterExpression</a></code> | <code>*string</code> | A PartiQL predicate. |

---

##### `AllRowsWildcard`<sup>Optional</sup> <a name="AllRowsWildcard" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter.property.allRowsWildcard"></a>

```go
AllRowsWildcard *string
```

- *Type:* *string

An empty object representing a row wildcard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_data_cells_filter#all_rows_wildcard LakeformationDataCellsFilter#all_rows_wildcard}

---

##### `FilterExpression`<sup>Optional</sup> <a name="FilterExpression" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilter.property.filterExpression"></a>

```go
FilterExpression *string
```

- *Type:* *string

A PartiQL predicate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_data_cells_filter#filter_expression LakeformationDataCellsFilter#filter_expression}

---

## Classes <a name="Classes" id="Classes"></a>

### LakeformationDataCellsFilterColumnWildcardOutputReference <a name="LakeformationDataCellsFilterColumnWildcardOutputReference" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lakeformationdatacellsfilter"

lakeformationdatacellsfilter.NewLakeformationDataCellsFilterColumnWildcardOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LakeformationDataCellsFilterColumnWildcardOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.resetExcludedColumnNames">ResetExcludedColumnNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludedColumnNames` <a name="ResetExcludedColumnNames" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.resetExcludedColumnNames"></a>

```go
func ResetExcludedColumnNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.excludedColumnNamesInput">ExcludedColumnNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.excludedColumnNames">ExcludedColumnNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludedColumnNamesInput`<sup>Optional</sup> <a name="ExcludedColumnNamesInput" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.excludedColumnNamesInput"></a>

```go
func ExcludedColumnNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludedColumnNames`<sup>Required</sup> <a name="ExcludedColumnNames" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.excludedColumnNames"></a>

```go
func ExcludedColumnNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterColumnWildcardOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LakeformationDataCellsFilterRowFilterOutputReference <a name="LakeformationDataCellsFilterRowFilterOutputReference" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lakeformationdatacellsfilter"

lakeformationdatacellsfilter.NewLakeformationDataCellsFilterRowFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LakeformationDataCellsFilterRowFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.resetAllRowsWildcard">ResetAllRowsWildcard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.resetFilterExpression">ResetFilterExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllRowsWildcard` <a name="ResetAllRowsWildcard" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.resetAllRowsWildcard"></a>

```go
func ResetAllRowsWildcard()
```

##### `ResetFilterExpression` <a name="ResetFilterExpression" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.resetFilterExpression"></a>

```go
func ResetFilterExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.allRowsWildcardInput">AllRowsWildcardInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.filterExpressionInput">FilterExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.allRowsWildcard">AllRowsWildcard</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.filterExpression">FilterExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllRowsWildcardInput`<sup>Optional</sup> <a name="AllRowsWildcardInput" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.allRowsWildcardInput"></a>

```go
func AllRowsWildcardInput() *string
```

- *Type:* *string

---

##### `FilterExpressionInput`<sup>Optional</sup> <a name="FilterExpressionInput" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.filterExpressionInput"></a>

```go
func FilterExpressionInput() *string
```

- *Type:* *string

---

##### `AllRowsWildcard`<sup>Required</sup> <a name="AllRowsWildcard" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.allRowsWildcard"></a>

```go
func AllRowsWildcard() *string
```

- *Type:* *string

---

##### `FilterExpression`<sup>Required</sup> <a name="FilterExpression" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.filterExpression"></a>

```go
func FilterExpression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lakeformationDataCellsFilter.LakeformationDataCellsFilterRowFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



