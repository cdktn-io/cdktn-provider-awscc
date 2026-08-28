# `cleanroomsConfiguredTable` Submodule <a name="`cleanroomsConfiguredTable` Submodule" id="@cdktn/provider-awscc.cleanroomsConfiguredTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanroomsConfiguredTable <a name="CleanroomsConfiguredTable" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table awscc_cleanrooms_configured_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

cleanroomsconfiguredtable.NewCleanroomsConfiguredTable(scope Construct, id *string, config CleanroomsConfiguredTableConfig) CleanroomsConfiguredTable
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig">CleanroomsConfiguredTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig">CleanroomsConfiguredTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.putAnalysisRules">PutAnalysisRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.putTableReference">PutTableReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.resetAnalysisRules">ResetAnalysisRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.resetSelectedAnalysisMethods">ResetSelectedAnalysisMethods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAnalysisRules` <a name="PutAnalysisRules" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.putAnalysisRules"></a>

```go
func PutAnalysisRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.putAnalysisRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTableReference` <a name="PutTableReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.putTableReference"></a>

```go
func PutTableReference(value CleanroomsConfiguredTableTableReference)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.putTableReference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference">CleanroomsConfiguredTableTableReference</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAnalysisRules` <a name="ResetAnalysisRules" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.resetAnalysisRules"></a>

```go
func ResetAnalysisRules()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetSelectedAnalysisMethods` <a name="ResetSelectedAnalysisMethods" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.resetSelectedAnalysisMethods"></a>

```go
func ResetSelectedAnalysisMethods()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CleanroomsConfiguredTable resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

cleanroomsconfiguredtable.CleanroomsConfiguredTable_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

cleanroomsconfiguredtable.CleanroomsConfiguredTable_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

cleanroomsconfiguredtable.CleanroomsConfiguredTable_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

cleanroomsconfiguredtable.CleanroomsConfiguredTable_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CleanroomsConfiguredTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CleanroomsConfiguredTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CleanroomsConfiguredTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CleanroomsConfiguredTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.analysisRules">AnalysisRules</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList">CleanroomsConfiguredTableAnalysisRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.configuredTableIdentifier">ConfiguredTableIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tableReference">TableReference</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference">CleanroomsConfiguredTableTableReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList">CleanroomsConfiguredTableTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.allowedColumnsInput">AllowedColumnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.analysisMethodInput">AnalysisMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.analysisRulesInput">AnalysisRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.selectedAnalysisMethodsInput">SelectedAnalysisMethodsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tableReferenceInput">TableReferenceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.allowedColumns">AllowedColumns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.analysisMethod">AnalysisMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.selectedAnalysisMethods">SelectedAnalysisMethods</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AnalysisRules`<sup>Required</sup> <a name="AnalysisRules" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.analysisRules"></a>

```go
func AnalysisRules() CleanroomsConfiguredTableAnalysisRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList">CleanroomsConfiguredTableAnalysisRulesList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ConfiguredTableIdentifier`<sup>Required</sup> <a name="ConfiguredTableIdentifier" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.configuredTableIdentifier"></a>

```go
func ConfiguredTableIdentifier() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TableReference`<sup>Required</sup> <a name="TableReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tableReference"></a>

```go
func TableReference() CleanroomsConfiguredTableTableReferenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference">CleanroomsConfiguredTableTableReferenceOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tags"></a>

```go
func Tags() CleanroomsConfiguredTableTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList">CleanroomsConfiguredTableTagsList</a>

---

##### `AllowedColumnsInput`<sup>Optional</sup> <a name="AllowedColumnsInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.allowedColumnsInput"></a>

```go
func AllowedColumnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AnalysisMethodInput`<sup>Optional</sup> <a name="AnalysisMethodInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.analysisMethodInput"></a>

```go
func AnalysisMethodInput() *string
```

- *Type:* *string

---

##### `AnalysisRulesInput`<sup>Optional</sup> <a name="AnalysisRulesInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.analysisRulesInput"></a>

```go
func AnalysisRulesInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SelectedAnalysisMethodsInput`<sup>Optional</sup> <a name="SelectedAnalysisMethodsInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.selectedAnalysisMethodsInput"></a>

```go
func SelectedAnalysisMethodsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TableReferenceInput`<sup>Optional</sup> <a name="TableReferenceInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tableReferenceInput"></a>

```go
func TableReferenceInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedColumns`<sup>Required</sup> <a name="AllowedColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.allowedColumns"></a>

```go
func AllowedColumns() *[]*string
```

- *Type:* *[]*string

---

##### `AnalysisMethod`<sup>Required</sup> <a name="AnalysisMethod" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.analysisMethod"></a>

```go
func AnalysisMethod() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SelectedAnalysisMethods`<sup>Required</sup> <a name="SelectedAnalysisMethods" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.selectedAnalysisMethods"></a>

```go
func SelectedAnalysisMethods() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTable.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CleanroomsConfiguredTableAnalysisRules <a name="CleanroomsConfiguredTableAnalysisRules" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

&cleanroomsconfiguredtable.CleanroomsConfiguredTableAnalysisRules {
	Policy: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicy,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRules.property.policy">Policy</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicy">CleanroomsConfiguredTableAnalysisRulesPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#policy CleanroomsConfiguredTable#policy}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRules.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#type CleanroomsConfiguredTable#type}. |

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRules.property.policy"></a>

```go
Policy CleanroomsConfiguredTableAnalysisRulesPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicy">CleanroomsConfiguredTableAnalysisRulesPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#policy CleanroomsConfiguredTable#policy}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRules.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#type CleanroomsConfiguredTable#type}.

---

### CleanroomsConfiguredTableAnalysisRulesPolicy <a name="CleanroomsConfiguredTableAnalysisRulesPolicy" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

&cleanroomsconfiguredtable.CleanroomsConfiguredTableAnalysisRulesPolicy {
	V1: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicy.property.v1">V1</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1">CleanroomsConfiguredTableAnalysisRulesPolicyV1</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#v1 CleanroomsConfiguredTable#v1}. |

---

##### `V1`<sup>Optional</sup> <a name="V1" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicy.property.v1"></a>

```go
V1 CleanroomsConfiguredTableAnalysisRulesPolicyV1
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1">CleanroomsConfiguredTableAnalysisRulesPolicyV1</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#v1 CleanroomsConfiguredTable#v1}.

---

### CleanroomsConfiguredTableAnalysisRulesPolicyV1 <a name="CleanroomsConfiguredTableAnalysisRulesPolicyV1" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

&cleanroomsconfiguredtable.CleanroomsConfiguredTableAnalysisRulesPolicyV1 {
	Aggregation: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation,
	Custom: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom,
	List: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1.property.aggregation">Aggregation</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation">CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#aggregation CleanroomsConfiguredTable#aggregation}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1.property.custom">Custom</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom">CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#custom CleanroomsConfiguredTable#custom}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1.property.list">List</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct">CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#list CleanroomsConfiguredTable#list}. |

---

##### `Aggregation`<sup>Optional</sup> <a name="Aggregation" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1.property.aggregation"></a>

```go
Aggregation CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation">CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#aggregation CleanroomsConfiguredTable#aggregation}.

---

##### `Custom`<sup>Optional</sup> <a name="Custom" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1.property.custom"></a>

```go
Custom CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom">CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#custom CleanroomsConfiguredTable#custom}.

---

##### `List`<sup>Optional</sup> <a name="List" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1.property.list"></a>

```go
List CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct">CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#list CleanroomsConfiguredTable#list}.

---

### CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation <a name="CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

&cleanroomsconfiguredtable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation {
	AdditionalAnalyses: *string,
	AggregateColumns: interface{},
	AllowedJoinOperators: *[]*string,
	DimensionColumns: *[]*string,
	JoinColumns: *[]*string,
	JoinRequired: *string,
	OutputConstraints: interface{},
	ScalarFunctions: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation.property.additionalAnalyses">AdditionalAnalyses</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#additional_analyses CleanroomsConfiguredTable#additional_analyses}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation.property.aggregateColumns">AggregateColumns</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#aggregate_columns CleanroomsConfiguredTable#aggregate_columns}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation.property.allowedJoinOperators">AllowedJoinOperators</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#allowed_join_operators CleanroomsConfiguredTable#allowed_join_operators}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation.property.dimensionColumns">DimensionColumns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#dimension_columns CleanroomsConfiguredTable#dimension_columns}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation.property.joinColumns">JoinColumns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#join_columns CleanroomsConfiguredTable#join_columns}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation.property.joinRequired">JoinRequired</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#join_required CleanroomsConfiguredTable#join_required}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation.property.outputConstraints">OutputConstraints</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#output_constraints CleanroomsConfiguredTable#output_constraints}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation.property.scalarFunctions">ScalarFunctions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#scalar_functions CleanroomsConfiguredTable#scalar_functions}. |

---

##### `AdditionalAnalyses`<sup>Optional</sup> <a name="AdditionalAnalyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation.property.additionalAnalyses"></a>

```go
AdditionalAnalyses *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#additional_analyses CleanroomsConfiguredTable#additional_analyses}.

---

##### `AggregateColumns`<sup>Optional</sup> <a name="AggregateColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation.property.aggregateColumns"></a>

```go
AggregateColumns interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#aggregate_columns CleanroomsConfiguredTable#aggregate_columns}.

---

##### `AllowedJoinOperators`<sup>Optional</sup> <a name="AllowedJoinOperators" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation.property.allowedJoinOperators"></a>

```go
AllowedJoinOperators *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#allowed_join_operators CleanroomsConfiguredTable#allowed_join_operators}.

---

##### `DimensionColumns`<sup>Optional</sup> <a name="DimensionColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation.property.dimensionColumns"></a>

```go
DimensionColumns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#dimension_columns CleanroomsConfiguredTable#dimension_columns}.

---

##### `JoinColumns`<sup>Optional</sup> <a name="JoinColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation.property.joinColumns"></a>

```go
JoinColumns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#join_columns CleanroomsConfiguredTable#join_columns}.

---

##### `JoinRequired`<sup>Optional</sup> <a name="JoinRequired" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation.property.joinRequired"></a>

```go
JoinRequired *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#join_required CleanroomsConfiguredTable#join_required}.

---

##### `OutputConstraints`<sup>Optional</sup> <a name="OutputConstraints" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation.property.outputConstraints"></a>

```go
OutputConstraints interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#output_constraints CleanroomsConfiguredTable#output_constraints}.

---

##### `ScalarFunctions`<sup>Optional</sup> <a name="ScalarFunctions" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation.property.scalarFunctions"></a>

```go
ScalarFunctions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#scalar_functions CleanroomsConfiguredTable#scalar_functions}.

---

### CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns <a name="CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

&cleanroomsconfiguredtable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns {
	ColumnNames: *[]*string,
	Function: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns.property.columnNames">ColumnNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#column_names CleanroomsConfiguredTable#column_names}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns.property.function">Function</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#function CleanroomsConfiguredTable#function}. |

---

##### `ColumnNames`<sup>Optional</sup> <a name="ColumnNames" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns.property.columnNames"></a>

```go
ColumnNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#column_names CleanroomsConfiguredTable#column_names}.

---

##### `Function`<sup>Optional</sup> <a name="Function" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns.property.function"></a>

```go
Function *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#function CleanroomsConfiguredTable#function}.

---

### CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints <a name="CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

&cleanroomsconfiguredtable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints {
	ColumnName: *string,
	Minimum: *f64,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints.property.columnName">ColumnName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#column_name CleanroomsConfiguredTable#column_name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints.property.minimum">Minimum</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#minimum CleanroomsConfiguredTable#minimum}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#type CleanroomsConfiguredTable#type}. |

---

##### `ColumnName`<sup>Optional</sup> <a name="ColumnName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints.property.columnName"></a>

```go
ColumnName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#column_name CleanroomsConfiguredTable#column_name}.

---

##### `Minimum`<sup>Optional</sup> <a name="Minimum" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints.property.minimum"></a>

```go
Minimum *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#minimum CleanroomsConfiguredTable#minimum}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#type CleanroomsConfiguredTable#type}.

---

### CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom <a name="CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

&cleanroomsconfiguredtable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom {
	AdditionalAnalyses: *string,
	AllowedAnalyses: *[]*string,
	AllowedAnalysisProviders: *[]*string,
	DifferentialPrivacy: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy,
	DisallowedOutputColumns: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom.property.additionalAnalyses">AdditionalAnalyses</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#additional_analyses CleanroomsConfiguredTable#additional_analyses}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom.property.allowedAnalyses">AllowedAnalyses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#allowed_analyses CleanroomsConfiguredTable#allowed_analyses}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom.property.allowedAnalysisProviders">AllowedAnalysisProviders</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#allowed_analysis_providers CleanroomsConfiguredTable#allowed_analysis_providers}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom.property.differentialPrivacy">DifferentialPrivacy</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#differential_privacy CleanroomsConfiguredTable#differential_privacy}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom.property.disallowedOutputColumns">DisallowedOutputColumns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#disallowed_output_columns CleanroomsConfiguredTable#disallowed_output_columns}. |

---

##### `AdditionalAnalyses`<sup>Optional</sup> <a name="AdditionalAnalyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom.property.additionalAnalyses"></a>

```go
AdditionalAnalyses *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#additional_analyses CleanroomsConfiguredTable#additional_analyses}.

---

##### `AllowedAnalyses`<sup>Optional</sup> <a name="AllowedAnalyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom.property.allowedAnalyses"></a>

```go
AllowedAnalyses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#allowed_analyses CleanroomsConfiguredTable#allowed_analyses}.

---

##### `AllowedAnalysisProviders`<sup>Optional</sup> <a name="AllowedAnalysisProviders" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom.property.allowedAnalysisProviders"></a>

```go
AllowedAnalysisProviders *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#allowed_analysis_providers CleanroomsConfiguredTable#allowed_analysis_providers}.

---

##### `DifferentialPrivacy`<sup>Optional</sup> <a name="DifferentialPrivacy" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom.property.differentialPrivacy"></a>

```go
DifferentialPrivacy CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#differential_privacy CleanroomsConfiguredTable#differential_privacy}.

---

##### `DisallowedOutputColumns`<sup>Optional</sup> <a name="DisallowedOutputColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom.property.disallowedOutputColumns"></a>

```go
DisallowedOutputColumns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#disallowed_output_columns CleanroomsConfiguredTable#disallowed_output_columns}.

---

### CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy <a name="CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

&cleanroomsconfiguredtable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy {
	Columns: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy.property.columns">Columns</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#columns CleanroomsConfiguredTable#columns}. |

---

##### `Columns`<sup>Optional</sup> <a name="Columns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy.property.columns"></a>

```go
Columns interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#columns CleanroomsConfiguredTable#columns}.

---

### CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns <a name="CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

&cleanroomsconfiguredtable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#name CleanroomsConfiguredTable#name}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#name CleanroomsConfiguredTable#name}.

---

### CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct <a name="CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

&cleanroomsconfiguredtable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct {
	AdditionalAnalyses: *string,
	AllowedJoinOperators: *[]*string,
	JoinColumns: *[]*string,
	ListColumns: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct.property.additionalAnalyses">AdditionalAnalyses</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#additional_analyses CleanroomsConfiguredTable#additional_analyses}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct.property.allowedJoinOperators">AllowedJoinOperators</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#allowed_join_operators CleanroomsConfiguredTable#allowed_join_operators}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct.property.joinColumns">JoinColumns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#join_columns CleanroomsConfiguredTable#join_columns}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct.property.listColumns">ListColumns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#list_columns CleanroomsConfiguredTable#list_columns}. |

---

##### `AdditionalAnalyses`<sup>Optional</sup> <a name="AdditionalAnalyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct.property.additionalAnalyses"></a>

```go
AdditionalAnalyses *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#additional_analyses CleanroomsConfiguredTable#additional_analyses}.

---

##### `AllowedJoinOperators`<sup>Optional</sup> <a name="AllowedJoinOperators" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct.property.allowedJoinOperators"></a>

```go
AllowedJoinOperators *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#allowed_join_operators CleanroomsConfiguredTable#allowed_join_operators}.

---

##### `JoinColumns`<sup>Optional</sup> <a name="JoinColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct.property.joinColumns"></a>

```go
JoinColumns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#join_columns CleanroomsConfiguredTable#join_columns}.

---

##### `ListColumns`<sup>Optional</sup> <a name="ListColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct.property.listColumns"></a>

```go
ListColumns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#list_columns CleanroomsConfiguredTable#list_columns}.

---

### CleanroomsConfiguredTableConfig <a name="CleanroomsConfiguredTableConfig" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

&cleanroomsconfiguredtable.CleanroomsConfiguredTableConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AllowedColumns: *[]*string,
	AnalysisMethod: *string,
	Name: *string,
	TableReference: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference,
	AnalysisRules: interface{},
	Description: *string,
	SelectedAnalysisMethods: *[]*string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.allowedColumns">AllowedColumns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#allowed_columns CleanroomsConfiguredTable#allowed_columns}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.analysisMethod">AnalysisMethod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#analysis_method CleanroomsConfiguredTable#analysis_method}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#name CleanroomsConfiguredTable#name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.tableReference">TableReference</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference">CleanroomsConfiguredTableTableReference</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#table_reference CleanroomsConfiguredTable#table_reference}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.analysisRules">AnalysisRules</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#analysis_rules CleanroomsConfiguredTable#analysis_rules}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#description CleanroomsConfiguredTable#description}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.selectedAnalysisMethods">SelectedAnalysisMethods</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#selected_analysis_methods CleanroomsConfiguredTable#selected_analysis_methods}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An arbitrary set of tags (key-value pairs) for this cleanrooms collaboration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllowedColumns`<sup>Required</sup> <a name="AllowedColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.allowedColumns"></a>

```go
AllowedColumns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#allowed_columns CleanroomsConfiguredTable#allowed_columns}.

---

##### `AnalysisMethod`<sup>Required</sup> <a name="AnalysisMethod" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.analysisMethod"></a>

```go
AnalysisMethod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#analysis_method CleanroomsConfiguredTable#analysis_method}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#name CleanroomsConfiguredTable#name}.

---

##### `TableReference`<sup>Required</sup> <a name="TableReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.tableReference"></a>

```go
TableReference CleanroomsConfiguredTableTableReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference">CleanroomsConfiguredTableTableReference</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#table_reference CleanroomsConfiguredTable#table_reference}.

---

##### `AnalysisRules`<sup>Optional</sup> <a name="AnalysisRules" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.analysisRules"></a>

```go
AnalysisRules interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#analysis_rules CleanroomsConfiguredTable#analysis_rules}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#description CleanroomsConfiguredTable#description}.

---

##### `SelectedAnalysisMethods`<sup>Optional</sup> <a name="SelectedAnalysisMethods" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.selectedAnalysisMethods"></a>

```go
SelectedAnalysisMethods *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#selected_analysis_methods CleanroomsConfiguredTable#selected_analysis_methods}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An arbitrary set of tags (key-value pairs) for this cleanrooms collaboration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#tags CleanroomsConfiguredTable#tags}

---

### CleanroomsConfiguredTableTableReference <a name="CleanroomsConfiguredTableTableReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

&cleanroomsconfiguredtable.CleanroomsConfiguredTableTableReference {
	Athena: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthena,
	Glue: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlue,
	Snowflake: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflake,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference.property.athena">Athena</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthena">CleanroomsConfiguredTableTableReferenceAthena</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#athena CleanroomsConfiguredTable#athena}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference.property.glue">Glue</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlue">CleanroomsConfiguredTableTableReferenceGlue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#glue CleanroomsConfiguredTable#glue}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference.property.snowflake">Snowflake</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflake">CleanroomsConfiguredTableTableReferenceSnowflake</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#snowflake CleanroomsConfiguredTable#snowflake}. |

---

##### `Athena`<sup>Optional</sup> <a name="Athena" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference.property.athena"></a>

```go
Athena CleanroomsConfiguredTableTableReferenceAthena
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthena">CleanroomsConfiguredTableTableReferenceAthena</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#athena CleanroomsConfiguredTable#athena}.

---

##### `Glue`<sup>Optional</sup> <a name="Glue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference.property.glue"></a>

```go
Glue CleanroomsConfiguredTableTableReferenceGlue
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlue">CleanroomsConfiguredTableTableReferenceGlue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#glue CleanroomsConfiguredTable#glue}.

---

##### `Snowflake`<sup>Optional</sup> <a name="Snowflake" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReference.property.snowflake"></a>

```go
Snowflake CleanroomsConfiguredTableTableReferenceSnowflake
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflake">CleanroomsConfiguredTableTableReferenceSnowflake</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#snowflake CleanroomsConfiguredTable#snowflake}.

---

### CleanroomsConfiguredTableTableReferenceAthena <a name="CleanroomsConfiguredTableTableReferenceAthena" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthena"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthena.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

&cleanroomsconfiguredtable.CleanroomsConfiguredTableTableReferenceAthena {
	CatalogName: *string,
	DatabaseName: *string,
	OutputLocation: *string,
	Region: *string,
	TableName: *string,
	WorkGroup: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthena.property.catalogName">CatalogName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#catalog_name CleanroomsConfiguredTable#catalog_name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthena.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#database_name CleanroomsConfiguredTable#database_name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthena.property.outputLocation">OutputLocation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#output_location CleanroomsConfiguredTable#output_location}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthena.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#region CleanroomsConfiguredTable#region}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthena.property.tableName">TableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#table_name CleanroomsConfiguredTable#table_name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthena.property.workGroup">WorkGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#work_group CleanroomsConfiguredTable#work_group}. |

---

##### `CatalogName`<sup>Optional</sup> <a name="CatalogName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthena.property.catalogName"></a>

```go
CatalogName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#catalog_name CleanroomsConfiguredTable#catalog_name}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthena.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#database_name CleanroomsConfiguredTable#database_name}.

---

##### `OutputLocation`<sup>Optional</sup> <a name="OutputLocation" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthena.property.outputLocation"></a>

```go
OutputLocation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#output_location CleanroomsConfiguredTable#output_location}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthena.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#region CleanroomsConfiguredTable#region}.

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthena.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#table_name CleanroomsConfiguredTable#table_name}.

---

##### `WorkGroup`<sup>Optional</sup> <a name="WorkGroup" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthena.property.workGroup"></a>

```go
WorkGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#work_group CleanroomsConfiguredTable#work_group}.

---

### CleanroomsConfiguredTableTableReferenceGlue <a name="CleanroomsConfiguredTableTableReferenceGlue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

&cleanroomsconfiguredtable.CleanroomsConfiguredTableTableReferenceGlue {
	DatabaseName: *string,
	Region: *string,
	TableName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlue.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#database_name CleanroomsConfiguredTable#database_name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlue.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#region CleanroomsConfiguredTable#region}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlue.property.tableName">TableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#table_name CleanroomsConfiguredTable#table_name}. |

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlue.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#database_name CleanroomsConfiguredTable#database_name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlue.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#region CleanroomsConfiguredTable#region}.

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlue.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#table_name CleanroomsConfiguredTable#table_name}.

---

### CleanroomsConfiguredTableTableReferenceSnowflake <a name="CleanroomsConfiguredTableTableReferenceSnowflake" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflake"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflake.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

&cleanroomsconfiguredtable.CleanroomsConfiguredTableTableReferenceSnowflake {
	AccountIdentifier: *string,
	DatabaseName: *string,
	SchemaName: *string,
	SecretArn: *string,
	TableName: *string,
	TableSchema: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchema,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflake.property.accountIdentifier">AccountIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#account_identifier CleanroomsConfiguredTable#account_identifier}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflake.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#database_name CleanroomsConfiguredTable#database_name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflake.property.schemaName">SchemaName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#schema_name CleanroomsConfiguredTable#schema_name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflake.property.secretArn">SecretArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#secret_arn CleanroomsConfiguredTable#secret_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflake.property.tableName">TableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#table_name CleanroomsConfiguredTable#table_name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflake.property.tableSchema">TableSchema</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchema">CleanroomsConfiguredTableTableReferenceSnowflakeTableSchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#table_schema CleanroomsConfiguredTable#table_schema}. |

---

##### `AccountIdentifier`<sup>Optional</sup> <a name="AccountIdentifier" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflake.property.accountIdentifier"></a>

```go
AccountIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#account_identifier CleanroomsConfiguredTable#account_identifier}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflake.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#database_name CleanroomsConfiguredTable#database_name}.

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflake.property.schemaName"></a>

```go
SchemaName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#schema_name CleanroomsConfiguredTable#schema_name}.

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflake.property.secretArn"></a>

```go
SecretArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#secret_arn CleanroomsConfiguredTable#secret_arn}.

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflake.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#table_name CleanroomsConfiguredTable#table_name}.

---

##### `TableSchema`<sup>Optional</sup> <a name="TableSchema" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflake.property.tableSchema"></a>

```go
TableSchema CleanroomsConfiguredTableTableReferenceSnowflakeTableSchema
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchema">CleanroomsConfiguredTableTableReferenceSnowflakeTableSchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#table_schema CleanroomsConfiguredTable#table_schema}.

---

### CleanroomsConfiguredTableTableReferenceSnowflakeTableSchema <a name="CleanroomsConfiguredTableTableReferenceSnowflakeTableSchema" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchema.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

&cleanroomsconfiguredtable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchema {
	V1: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchema.property.v1">V1</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#v1 CleanroomsConfiguredTable#v1}. |

---

##### `V1`<sup>Optional</sup> <a name="V1" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchema.property.v1"></a>

```go
V1 interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#v1 CleanroomsConfiguredTable#v1}.

---

### CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1 <a name="CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

&cleanroomsconfiguredtable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1 {
	ColumnName: *string,
	ColumnType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1.property.columnName">ColumnName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#column_name CleanroomsConfiguredTable#column_name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1.property.columnType">ColumnType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#column_type CleanroomsConfiguredTable#column_type}. |

---

##### `ColumnName`<sup>Optional</sup> <a name="ColumnName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1.property.columnName"></a>

```go
ColumnName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#column_name CleanroomsConfiguredTable#column_name}.

---

##### `ColumnType`<sup>Optional</sup> <a name="ColumnType" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1.property.columnType"></a>

```go
ColumnType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#column_type CleanroomsConfiguredTable#column_type}.

---

### CleanroomsConfiguredTableTags <a name="CleanroomsConfiguredTableTags" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

&cleanroomsconfiguredtable.CleanroomsConfiguredTableTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#key CleanroomsConfiguredTable#key}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#value CleanroomsConfiguredTable#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#key CleanroomsConfiguredTable#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_configured_table#value CleanroomsConfiguredTable#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CleanroomsConfiguredTableAnalysisRulesList <a name="CleanroomsConfiguredTableAnalysisRulesList" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

cleanroomsconfiguredtable.NewCleanroomsConfiguredTableAnalysisRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CleanroomsConfiguredTableAnalysisRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.get"></a>

```go
func Get(index *f64) CleanroomsConfiguredTableAnalysisRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsConfiguredTableAnalysisRulesOutputReference <a name="CleanroomsConfiguredTableAnalysisRulesOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

cleanroomsconfiguredtable.NewCleanroomsConfiguredTableAnalysisRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CleanroomsConfiguredTableAnalysisRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.putPolicy">PutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.resetPolicy">ResetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPolicy` <a name="PutPolicy" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.putPolicy"></a>

```go
func PutPolicy(value CleanroomsConfiguredTableAnalysisRulesPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.putPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicy">CleanroomsConfiguredTableAnalysisRulesPolicy</a>

---

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.resetPolicy"></a>

```go
func ResetPolicy()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.property.policy">Policy</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference">CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.property.policyInput">PolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.property.policy"></a>

```go
func Policy() CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference">CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference</a>

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.property.policyInput"></a>

```go
func PolicyInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference <a name="CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

cleanroomsconfiguredtable.NewCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.putV1">PutV1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.resetV1">ResetV1</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutV1` <a name="PutV1" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.putV1"></a>

```go
func PutV1(value CleanroomsConfiguredTableAnalysisRulesPolicyV1)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.putV1.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1">CleanroomsConfiguredTableAnalysisRulesPolicyV1</a>

---

##### `ResetV1` <a name="ResetV1" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.resetV1"></a>

```go
func ResetV1()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.property.v1">V1</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference">CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.property.v1Input">V1Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `V1`<sup>Required</sup> <a name="V1" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.property.v1"></a>

```go
func V1() CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference">CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference</a>

---

##### `V1Input`<sup>Optional</sup> <a name="V1Input" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.property.v1Input"></a>

```go
func V1Input() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList <a name="CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

cleanroomsconfiguredtable.NewCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.get"></a>

```go
func Get(index *f64) CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference <a name="CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

cleanroomsconfiguredtable.NewCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.resetColumnNames">ResetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.resetFunction">ResetFunction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetColumnNames` <a name="ResetColumnNames" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.resetColumnNames"></a>

```go
func ResetColumnNames()
```

##### `ResetFunction` <a name="ResetFunction" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.resetFunction"></a>

```go
func ResetFunction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.property.columnNamesInput">ColumnNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.property.functionInput">FunctionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.property.columnNames">ColumnNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.property.function">Function</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnNamesInput`<sup>Optional</sup> <a name="ColumnNamesInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.property.columnNamesInput"></a>

```go
func ColumnNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `FunctionInput`<sup>Optional</sup> <a name="FunctionInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.property.functionInput"></a>

```go
func FunctionInput() *string
```

- *Type:* *string

---

##### `ColumnNames`<sup>Required</sup> <a name="ColumnNames" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.property.columnNames"></a>

```go
func ColumnNames() *[]*string
```

- *Type:* *[]*string

---

##### `Function`<sup>Required</sup> <a name="Function" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.property.function"></a>

```go
func Function() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList <a name="CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

cleanroomsconfiguredtable.NewCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.get"></a>

```go
func Get(index *f64) CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference <a name="CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

cleanroomsconfiguredtable.NewCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.resetColumnName">ResetColumnName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.resetMinimum">ResetMinimum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetColumnName` <a name="ResetColumnName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.resetColumnName"></a>

```go
func ResetColumnName()
```

##### `ResetMinimum` <a name="ResetMinimum" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.resetMinimum"></a>

```go
func ResetMinimum()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.columnNameInput">ColumnNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.minimumInput">MinimumInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.columnName">ColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.minimum">Minimum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnNameInput`<sup>Optional</sup> <a name="ColumnNameInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.columnNameInput"></a>

```go
func ColumnNameInput() *string
```

- *Type:* *string

---

##### `MinimumInput`<sup>Optional</sup> <a name="MinimumInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.minimumInput"></a>

```go
func MinimumInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.columnName"></a>

```go
func ColumnName() *string
```

- *Type:* *string

---

##### `Minimum`<sup>Required</sup> <a name="Minimum" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.minimum"></a>

```go
func Minimum() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference <a name="CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

cleanroomsconfiguredtable.NewCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.putAggregateColumns">PutAggregateColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.putOutputConstraints">PutOutputConstraints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.resetAdditionalAnalyses">ResetAdditionalAnalyses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.resetAggregateColumns">ResetAggregateColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.resetAllowedJoinOperators">ResetAllowedJoinOperators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.resetDimensionColumns">ResetDimensionColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.resetJoinColumns">ResetJoinColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.resetJoinRequired">ResetJoinRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.resetOutputConstraints">ResetOutputConstraints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.resetScalarFunctions">ResetScalarFunctions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAggregateColumns` <a name="PutAggregateColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.putAggregateColumns"></a>

```go
func PutAggregateColumns(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.putAggregateColumns.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOutputConstraints` <a name="PutOutputConstraints" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.putOutputConstraints"></a>

```go
func PutOutputConstraints(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.putOutputConstraints.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAdditionalAnalyses` <a name="ResetAdditionalAnalyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.resetAdditionalAnalyses"></a>

```go
func ResetAdditionalAnalyses()
```

##### `ResetAggregateColumns` <a name="ResetAggregateColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.resetAggregateColumns"></a>

```go
func ResetAggregateColumns()
```

##### `ResetAllowedJoinOperators` <a name="ResetAllowedJoinOperators" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.resetAllowedJoinOperators"></a>

```go
func ResetAllowedJoinOperators()
```

##### `ResetDimensionColumns` <a name="ResetDimensionColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.resetDimensionColumns"></a>

```go
func ResetDimensionColumns()
```

##### `ResetJoinColumns` <a name="ResetJoinColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.resetJoinColumns"></a>

```go
func ResetJoinColumns()
```

##### `ResetJoinRequired` <a name="ResetJoinRequired" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.resetJoinRequired"></a>

```go
func ResetJoinRequired()
```

##### `ResetOutputConstraints` <a name="ResetOutputConstraints" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.resetOutputConstraints"></a>

```go
func ResetOutputConstraints()
```

##### `ResetScalarFunctions` <a name="ResetScalarFunctions" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.resetScalarFunctions"></a>

```go
func ResetScalarFunctions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.aggregateColumns">AggregateColumns</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList">CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.outputConstraints">OutputConstraints</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList">CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.additionalAnalysesInput">AdditionalAnalysesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.aggregateColumnsInput">AggregateColumnsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.allowedJoinOperatorsInput">AllowedJoinOperatorsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.dimensionColumnsInput">DimensionColumnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.joinColumnsInput">JoinColumnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.joinRequiredInput">JoinRequiredInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.outputConstraintsInput">OutputConstraintsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.scalarFunctionsInput">ScalarFunctionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.additionalAnalyses">AdditionalAnalyses</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.allowedJoinOperators">AllowedJoinOperators</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.dimensionColumns">DimensionColumns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.joinColumns">JoinColumns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.joinRequired">JoinRequired</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.scalarFunctions">ScalarFunctions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AggregateColumns`<sup>Required</sup> <a name="AggregateColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.aggregateColumns"></a>

```go
func AggregateColumns() CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList">CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList</a>

---

##### `OutputConstraints`<sup>Required</sup> <a name="OutputConstraints" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.outputConstraints"></a>

```go
func OutputConstraints() CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList">CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList</a>

---

##### `AdditionalAnalysesInput`<sup>Optional</sup> <a name="AdditionalAnalysesInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.additionalAnalysesInput"></a>

```go
func AdditionalAnalysesInput() *string
```

- *Type:* *string

---

##### `AggregateColumnsInput`<sup>Optional</sup> <a name="AggregateColumnsInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.aggregateColumnsInput"></a>

```go
func AggregateColumnsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedJoinOperatorsInput`<sup>Optional</sup> <a name="AllowedJoinOperatorsInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.allowedJoinOperatorsInput"></a>

```go
func AllowedJoinOperatorsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DimensionColumnsInput`<sup>Optional</sup> <a name="DimensionColumnsInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.dimensionColumnsInput"></a>

```go
func DimensionColumnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `JoinColumnsInput`<sup>Optional</sup> <a name="JoinColumnsInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.joinColumnsInput"></a>

```go
func JoinColumnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `JoinRequiredInput`<sup>Optional</sup> <a name="JoinRequiredInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.joinRequiredInput"></a>

```go
func JoinRequiredInput() *string
```

- *Type:* *string

---

##### `OutputConstraintsInput`<sup>Optional</sup> <a name="OutputConstraintsInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.outputConstraintsInput"></a>

```go
func OutputConstraintsInput() interface{}
```

- *Type:* interface{}

---

##### `ScalarFunctionsInput`<sup>Optional</sup> <a name="ScalarFunctionsInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.scalarFunctionsInput"></a>

```go
func ScalarFunctionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AdditionalAnalyses`<sup>Required</sup> <a name="AdditionalAnalyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.additionalAnalyses"></a>

```go
func AdditionalAnalyses() *string
```

- *Type:* *string

---

##### `AllowedJoinOperators`<sup>Required</sup> <a name="AllowedJoinOperators" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.allowedJoinOperators"></a>

```go
func AllowedJoinOperators() *[]*string
```

- *Type:* *[]*string

---

##### `DimensionColumns`<sup>Required</sup> <a name="DimensionColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.dimensionColumns"></a>

```go
func DimensionColumns() *[]*string
```

- *Type:* *[]*string

---

##### `JoinColumns`<sup>Required</sup> <a name="JoinColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.joinColumns"></a>

```go
func JoinColumns() *[]*string
```

- *Type:* *[]*string

---

##### `JoinRequired`<sup>Required</sup> <a name="JoinRequired" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.joinRequired"></a>

```go
func JoinRequired() *string
```

- *Type:* *string

---

##### `ScalarFunctions`<sup>Required</sup> <a name="ScalarFunctions" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.scalarFunctions"></a>

```go
func ScalarFunctions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList <a name="CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

cleanroomsconfiguredtable.NewCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.get"></a>

```go
func Get(index *f64) CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference <a name="CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

cleanroomsconfiguredtable.NewCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference <a name="CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

cleanroomsconfiguredtable.NewCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.putColumns">PutColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.resetColumns">ResetColumns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumns` <a name="PutColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.putColumns"></a>

```go
func PutColumns(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.putColumns.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetColumns` <a name="ResetColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.resetColumns"></a>

```go
func ResetColumns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.columns">Columns</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList">CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.columnsInput">ColumnsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.columns"></a>

```go
func Columns() CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList">CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList</a>

---

##### `ColumnsInput`<sup>Optional</sup> <a name="ColumnsInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.columnsInput"></a>

```go
func ColumnsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference <a name="CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

cleanroomsconfiguredtable.NewCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.putDifferentialPrivacy">PutDifferentialPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.resetAdditionalAnalyses">ResetAdditionalAnalyses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.resetAllowedAnalyses">ResetAllowedAnalyses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.resetAllowedAnalysisProviders">ResetAllowedAnalysisProviders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.resetDifferentialPrivacy">ResetDifferentialPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.resetDisallowedOutputColumns">ResetDisallowedOutputColumns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDifferentialPrivacy` <a name="PutDifferentialPrivacy" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.putDifferentialPrivacy"></a>

```go
func PutDifferentialPrivacy(value CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.putDifferentialPrivacy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a>

---

##### `ResetAdditionalAnalyses` <a name="ResetAdditionalAnalyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.resetAdditionalAnalyses"></a>

```go
func ResetAdditionalAnalyses()
```

##### `ResetAllowedAnalyses` <a name="ResetAllowedAnalyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.resetAllowedAnalyses"></a>

```go
func ResetAllowedAnalyses()
```

##### `ResetAllowedAnalysisProviders` <a name="ResetAllowedAnalysisProviders" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.resetAllowedAnalysisProviders"></a>

```go
func ResetAllowedAnalysisProviders()
```

##### `ResetDifferentialPrivacy` <a name="ResetDifferentialPrivacy" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.resetDifferentialPrivacy"></a>

```go
func ResetDifferentialPrivacy()
```

##### `ResetDisallowedOutputColumns` <a name="ResetDisallowedOutputColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.resetDisallowedOutputColumns"></a>

```go
func ResetDisallowedOutputColumns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.differentialPrivacy">DifferentialPrivacy</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference">CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.additionalAnalysesInput">AdditionalAnalysesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysesInput">AllowedAnalysesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysisProvidersInput">AllowedAnalysisProvidersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.differentialPrivacyInput">DifferentialPrivacyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.disallowedOutputColumnsInput">DisallowedOutputColumnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.additionalAnalyses">AdditionalAnalyses</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalyses">AllowedAnalyses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysisProviders">AllowedAnalysisProviders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.disallowedOutputColumns">DisallowedOutputColumns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DifferentialPrivacy`<sup>Required</sup> <a name="DifferentialPrivacy" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.differentialPrivacy"></a>

```go
func DifferentialPrivacy() CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference">CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference</a>

---

##### `AdditionalAnalysesInput`<sup>Optional</sup> <a name="AdditionalAnalysesInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.additionalAnalysesInput"></a>

```go
func AdditionalAnalysesInput() *string
```

- *Type:* *string

---

##### `AllowedAnalysesInput`<sup>Optional</sup> <a name="AllowedAnalysesInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysesInput"></a>

```go
func AllowedAnalysesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedAnalysisProvidersInput`<sup>Optional</sup> <a name="AllowedAnalysisProvidersInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysisProvidersInput"></a>

```go
func AllowedAnalysisProvidersInput() *[]*string
```

- *Type:* *[]*string

---

##### `DifferentialPrivacyInput`<sup>Optional</sup> <a name="DifferentialPrivacyInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.differentialPrivacyInput"></a>

```go
func DifferentialPrivacyInput() interface{}
```

- *Type:* interface{}

---

##### `DisallowedOutputColumnsInput`<sup>Optional</sup> <a name="DisallowedOutputColumnsInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.disallowedOutputColumnsInput"></a>

```go
func DisallowedOutputColumnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AdditionalAnalyses`<sup>Required</sup> <a name="AdditionalAnalyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.additionalAnalyses"></a>

```go
func AdditionalAnalyses() *string
```

- *Type:* *string

---

##### `AllowedAnalyses`<sup>Required</sup> <a name="AllowedAnalyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalyses"></a>

```go
func AllowedAnalyses() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedAnalysisProviders`<sup>Required</sup> <a name="AllowedAnalysisProviders" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysisProviders"></a>

```go
func AllowedAnalysisProviders() *[]*string
```

- *Type:* *[]*string

---

##### `DisallowedOutputColumns`<sup>Required</sup> <a name="DisallowedOutputColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.disallowedOutputColumns"></a>

```go
func DisallowedOutputColumns() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference <a name="CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

cleanroomsconfiguredtable.NewCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.resetAdditionalAnalyses">ResetAdditionalAnalyses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.resetAllowedJoinOperators">ResetAllowedJoinOperators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.resetJoinColumns">ResetJoinColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.resetListColumns">ResetListColumns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalAnalyses` <a name="ResetAdditionalAnalyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.resetAdditionalAnalyses"></a>

```go
func ResetAdditionalAnalyses()
```

##### `ResetAllowedJoinOperators` <a name="ResetAllowedJoinOperators" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.resetAllowedJoinOperators"></a>

```go
func ResetAllowedJoinOperators()
```

##### `ResetJoinColumns` <a name="ResetJoinColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.resetJoinColumns"></a>

```go
func ResetJoinColumns()
```

##### `ResetListColumns` <a name="ResetListColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.resetListColumns"></a>

```go
func ResetListColumns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.additionalAnalysesInput">AdditionalAnalysesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.allowedJoinOperatorsInput">AllowedJoinOperatorsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.joinColumnsInput">JoinColumnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.listColumnsInput">ListColumnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.additionalAnalyses">AdditionalAnalyses</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.allowedJoinOperators">AllowedJoinOperators</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.joinColumns">JoinColumns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.listColumns">ListColumns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalAnalysesInput`<sup>Optional</sup> <a name="AdditionalAnalysesInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.additionalAnalysesInput"></a>

```go
func AdditionalAnalysesInput() *string
```

- *Type:* *string

---

##### `AllowedJoinOperatorsInput`<sup>Optional</sup> <a name="AllowedJoinOperatorsInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.allowedJoinOperatorsInput"></a>

```go
func AllowedJoinOperatorsInput() *[]*string
```

- *Type:* *[]*string

---

##### `JoinColumnsInput`<sup>Optional</sup> <a name="JoinColumnsInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.joinColumnsInput"></a>

```go
func JoinColumnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ListColumnsInput`<sup>Optional</sup> <a name="ListColumnsInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.listColumnsInput"></a>

```go
func ListColumnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AdditionalAnalyses`<sup>Required</sup> <a name="AdditionalAnalyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.additionalAnalyses"></a>

```go
func AdditionalAnalyses() *string
```

- *Type:* *string

---

##### `AllowedJoinOperators`<sup>Required</sup> <a name="AllowedJoinOperators" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.allowedJoinOperators"></a>

```go
func AllowedJoinOperators() *[]*string
```

- *Type:* *[]*string

---

##### `JoinColumns`<sup>Required</sup> <a name="JoinColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.joinColumns"></a>

```go
func JoinColumns() *[]*string
```

- *Type:* *[]*string

---

##### `ListColumns`<sup>Required</sup> <a name="ListColumns" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.listColumns"></a>

```go
func ListColumns() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference <a name="CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

cleanroomsconfiguredtable.NewCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.putAggregation">PutAggregation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.putCustom">PutCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.putList">PutList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.resetAggregation">ResetAggregation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.resetCustom">ResetCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.resetList">ResetList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAggregation` <a name="PutAggregation" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.putAggregation"></a>

```go
func PutAggregation(value CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.putAggregation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation">CleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation</a>

---

##### `PutCustom` <a name="PutCustom" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.putCustom"></a>

```go
func PutCustom(value CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.putCustom.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom">CleanroomsConfiguredTableAnalysisRulesPolicyV1Custom</a>

---

##### `PutList` <a name="PutList" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.putList"></a>

```go
func PutList(value CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.putList.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct">CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct</a>

---

##### `ResetAggregation` <a name="ResetAggregation" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.resetAggregation"></a>

```go
func ResetAggregation()
```

##### `ResetCustom` <a name="ResetCustom" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.resetCustom"></a>

```go
func ResetCustom()
```

##### `ResetList` <a name="ResetList" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.resetList"></a>

```go
func ResetList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.aggregation">Aggregation</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference">CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.custom">Custom</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference">CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.list">List</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference">CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.aggregationInput">AggregationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.customInput">CustomInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.listInput">ListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Aggregation`<sup>Required</sup> <a name="Aggregation" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.aggregation"></a>

```go
func Aggregation() CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference">CleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference</a>

---

##### `Custom`<sup>Required</sup> <a name="Custom" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.custom"></a>

```go
func Custom() CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference">CleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference</a>

---

##### `List`<sup>Required</sup> <a name="List" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.list"></a>

```go
func List() CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference">CleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference</a>

---

##### `AggregationInput`<sup>Optional</sup> <a name="AggregationInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.aggregationInput"></a>

```go
func AggregationInput() interface{}
```

- *Type:* interface{}

---

##### `CustomInput`<sup>Optional</sup> <a name="CustomInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.customInput"></a>

```go
func CustomInput() interface{}
```

- *Type:* interface{}

---

##### `ListInput`<sup>Optional</sup> <a name="ListInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.listInput"></a>

```go
func ListInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsConfiguredTableTableReferenceAthenaOutputReference <a name="CleanroomsConfiguredTableTableReferenceAthenaOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

cleanroomsconfiguredtable.NewCleanroomsConfiguredTableTableReferenceAthenaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsConfiguredTableTableReferenceAthenaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.resetCatalogName">ResetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.resetOutputLocation">ResetOutputLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.resetTableName">ResetTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.resetWorkGroup">ResetWorkGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogName` <a name="ResetCatalogName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.resetCatalogName"></a>

```go
func ResetCatalogName()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetOutputLocation` <a name="ResetOutputLocation" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.resetOutputLocation"></a>

```go
func ResetOutputLocation()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.resetTableName"></a>

```go
func ResetTableName()
```

##### `ResetWorkGroup` <a name="ResetWorkGroup" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.resetWorkGroup"></a>

```go
func ResetWorkGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.catalogNameInput">CatalogNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.outputLocationInput">OutputLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.workGroupInput">WorkGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.catalogName">CatalogName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.outputLocation">OutputLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.workGroup">WorkGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.catalogNameInput"></a>

```go
func CatalogNameInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `OutputLocationInput`<sup>Optional</sup> <a name="OutputLocationInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.outputLocationInput"></a>

```go
func OutputLocationInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `WorkGroupInput`<sup>Optional</sup> <a name="WorkGroupInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.workGroupInput"></a>

```go
func WorkGroupInput() *string
```

- *Type:* *string

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.catalogName"></a>

```go
func CatalogName() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `OutputLocation`<sup>Required</sup> <a name="OutputLocation" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.outputLocation"></a>

```go
func OutputLocation() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `WorkGroup`<sup>Required</sup> <a name="WorkGroup" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.workGroup"></a>

```go
func WorkGroup() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsConfiguredTableTableReferenceGlueOutputReference <a name="CleanroomsConfiguredTableTableReferenceGlueOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

cleanroomsconfiguredtable.NewCleanroomsConfiguredTableTableReferenceGlueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsConfiguredTableTableReferenceGlueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.resetTableName">ResetTableName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.resetTableName"></a>

```go
func ResetTableName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsConfiguredTableTableReferenceOutputReference <a name="CleanroomsConfiguredTableTableReferenceOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

cleanroomsconfiguredtable.NewCleanroomsConfiguredTableTableReferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsConfiguredTableTableReferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.putAthena">PutAthena</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.putGlue">PutGlue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.putSnowflake">PutSnowflake</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.resetAthena">ResetAthena</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.resetGlue">ResetGlue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.resetSnowflake">ResetSnowflake</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAthena` <a name="PutAthena" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.putAthena"></a>

```go
func PutAthena(value CleanroomsConfiguredTableTableReferenceAthena)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.putAthena.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthena">CleanroomsConfiguredTableTableReferenceAthena</a>

---

##### `PutGlue` <a name="PutGlue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.putGlue"></a>

```go
func PutGlue(value CleanroomsConfiguredTableTableReferenceGlue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.putGlue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlue">CleanroomsConfiguredTableTableReferenceGlue</a>

---

##### `PutSnowflake` <a name="PutSnowflake" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.putSnowflake"></a>

```go
func PutSnowflake(value CleanroomsConfiguredTableTableReferenceSnowflake)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.putSnowflake.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflake">CleanroomsConfiguredTableTableReferenceSnowflake</a>

---

##### `ResetAthena` <a name="ResetAthena" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.resetAthena"></a>

```go
func ResetAthena()
```

##### `ResetGlue` <a name="ResetGlue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.resetGlue"></a>

```go
func ResetGlue()
```

##### `ResetSnowflake` <a name="ResetSnowflake" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.resetSnowflake"></a>

```go
func ResetSnowflake()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.athena">Athena</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference">CleanroomsConfiguredTableTableReferenceAthenaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.glue">Glue</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference">CleanroomsConfiguredTableTableReferenceGlueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.snowflake">Snowflake</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference">CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.athenaInput">AthenaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.glueInput">GlueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.snowflakeInput">SnowflakeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Athena`<sup>Required</sup> <a name="Athena" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.athena"></a>

```go
func Athena() CleanroomsConfiguredTableTableReferenceAthenaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceAthenaOutputReference">CleanroomsConfiguredTableTableReferenceAthenaOutputReference</a>

---

##### `Glue`<sup>Required</sup> <a name="Glue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.glue"></a>

```go
func Glue() CleanroomsConfiguredTableTableReferenceGlueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceGlueOutputReference">CleanroomsConfiguredTableTableReferenceGlueOutputReference</a>

---

##### `Snowflake`<sup>Required</sup> <a name="Snowflake" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.snowflake"></a>

```go
func Snowflake() CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference">CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference</a>

---

##### `AthenaInput`<sup>Optional</sup> <a name="AthenaInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.athenaInput"></a>

```go
func AthenaInput() interface{}
```

- *Type:* interface{}

---

##### `GlueInput`<sup>Optional</sup> <a name="GlueInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.glueInput"></a>

```go
func GlueInput() interface{}
```

- *Type:* interface{}

---

##### `SnowflakeInput`<sup>Optional</sup> <a name="SnowflakeInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.snowflakeInput"></a>

```go
func SnowflakeInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference <a name="CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

cleanroomsconfiguredtable.NewCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.putTableSchema">PutTableSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.resetAccountIdentifier">ResetAccountIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.resetSchemaName">ResetSchemaName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.resetTableName">ResetTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.resetTableSchema">ResetTableSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTableSchema` <a name="PutTableSchema" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.putTableSchema"></a>

```go
func PutTableSchema(value CleanroomsConfiguredTableTableReferenceSnowflakeTableSchema)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.putTableSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchema">CleanroomsConfiguredTableTableReferenceSnowflakeTableSchema</a>

---

##### `ResetAccountIdentifier` <a name="ResetAccountIdentifier" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.resetAccountIdentifier"></a>

```go
func ResetAccountIdentifier()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.resetSchemaName"></a>

```go
func ResetSchemaName()
```

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.resetSecretArn"></a>

```go
func ResetSecretArn()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.resetTableName"></a>

```go
func ResetTableName()
```

##### `ResetTableSchema` <a name="ResetTableSchema" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.resetTableSchema"></a>

```go
func ResetTableSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.tableSchema">TableSchema</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference">CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.accountIdentifierInput">AccountIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.tableSchemaInput">TableSchemaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.accountIdentifier">AccountIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TableSchema`<sup>Required</sup> <a name="TableSchema" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.tableSchema"></a>

```go
func TableSchema() CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference">CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference</a>

---

##### `AccountIdentifierInput`<sup>Optional</sup> <a name="AccountIdentifierInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.accountIdentifierInput"></a>

```go
func AccountIdentifierInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.schemaNameInput"></a>

```go
func SchemaNameInput() *string
```

- *Type:* *string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.secretArnInput"></a>

```go
func SecretArnInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `TableSchemaInput`<sup>Optional</sup> <a name="TableSchemaInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.tableSchemaInput"></a>

```go
func TableSchemaInput() interface{}
```

- *Type:* interface{}

---

##### `AccountIdentifier`<sup>Required</sup> <a name="AccountIdentifier" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.accountIdentifier"></a>

```go
func AccountIdentifier() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference <a name="CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

cleanroomsconfiguredtable.NewCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.putV1">PutV1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.resetV1">ResetV1</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutV1` <a name="PutV1" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.putV1"></a>

```go
func PutV1(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.putV1.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetV1` <a name="ResetV1" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.resetV1"></a>

```go
func ResetV1()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.property.v1">V1</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List">CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.property.v1Input">V1Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `V1`<sup>Required</sup> <a name="V1" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.property.v1"></a>

```go
func V1() CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List">CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List</a>

---

##### `V1Input`<sup>Optional</sup> <a name="V1Input" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.property.v1Input"></a>

```go
func V1Input() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List <a name="CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

cleanroomsconfiguredtable.NewCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.get"></a>

```go
func Get(index *f64) CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference <a name="CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

cleanroomsconfiguredtable.NewCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.resetColumnName">ResetColumnName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.resetColumnType">ResetColumnType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetColumnName` <a name="ResetColumnName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.resetColumnName"></a>

```go
func ResetColumnName()
```

##### `ResetColumnType` <a name="ResetColumnType" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.resetColumnType"></a>

```go
func ResetColumnType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.property.columnNameInput">ColumnNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.property.columnTypeInput">ColumnTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.property.columnName">ColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.property.columnType">ColumnType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnNameInput`<sup>Optional</sup> <a name="ColumnNameInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.property.columnNameInput"></a>

```go
func ColumnNameInput() *string
```

- *Type:* *string

---

##### `ColumnTypeInput`<sup>Optional</sup> <a name="ColumnTypeInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.property.columnTypeInput"></a>

```go
func ColumnTypeInput() *string
```

- *Type:* *string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.property.columnName"></a>

```go
func ColumnName() *string
```

- *Type:* *string

---

##### `ColumnType`<sup>Required</sup> <a name="ColumnType" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.property.columnType"></a>

```go
func ColumnType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsConfiguredTableTagsList <a name="CleanroomsConfiguredTableTagsList" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

cleanroomsconfiguredtable.NewCleanroomsConfiguredTableTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CleanroomsConfiguredTableTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.get"></a>

```go
func Get(index *f64) CleanroomsConfiguredTableTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsConfiguredTableTagsOutputReference <a name="CleanroomsConfiguredTableTagsOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsconfiguredtable"

cleanroomsconfiguredtable.NewCleanroomsConfiguredTableTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CleanroomsConfiguredTableTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsConfiguredTable.CleanroomsConfiguredTableTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



