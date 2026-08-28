# `cleanroomsIntermediateTable` Submodule <a name="`cleanroomsIntermediateTable` Submodule" id="@cdktn/provider-awscc.cleanroomsIntermediateTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanroomsIntermediateTable <a name="CleanroomsIntermediateTable" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table awscc_cleanrooms_intermediate_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsintermediatetable"

cleanroomsintermediatetable.NewCleanroomsIntermediateTable(scope Construct, id *string, config CleanroomsIntermediateTableConfig) CleanroomsIntermediateTable
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig">CleanroomsIntermediateTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig">CleanroomsIntermediateTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putAnalysisRules">PutAnalysisRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putPopulationAnalysisConfiguration">PutPopulationAnalysisConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetAnalysisRules">ResetAnalysisRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAnalysisRules` <a name="PutAnalysisRules" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putAnalysisRules"></a>

```go
func PutAnalysisRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putAnalysisRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPopulationAnalysisConfiguration` <a name="PutPopulationAnalysisConfiguration" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putPopulationAnalysisConfiguration"></a>

```go
func PutPopulationAnalysisConfiguration(value CleanroomsIntermediateTablePopulationAnalysisConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putPopulationAnalysisConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration">CleanroomsIntermediateTablePopulationAnalysisConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAnalysisRules` <a name="ResetAnalysisRules" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetAnalysisRules"></a>

```go
func ResetAnalysisRules()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CleanroomsIntermediateTable resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsintermediatetable"

cleanroomsintermediatetable.CleanroomsIntermediateTable_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsintermediatetable"

cleanroomsintermediatetable.CleanroomsIntermediateTable_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsintermediatetable"

cleanroomsintermediatetable.CleanroomsIntermediateTable_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsintermediatetable"

cleanroomsintermediatetable.CleanroomsIntermediateTable_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CleanroomsIntermediateTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CleanroomsIntermediateTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CleanroomsIntermediateTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CleanroomsIntermediateTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.analysisRules">AnalysisRules</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList">CleanroomsIntermediateTableAnalysisRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.collaborationArn">CollaborationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.collaborationIdentifier">CollaborationIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.intermediateTableIdentifier">IntermediateTableIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.membershipArn">MembershipArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.populationAnalysisConfiguration">PopulationAnalysisConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference">CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList">CleanroomsIntermediateTableTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.analysisRulesInput">AnalysisRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.membershipIdentifierInput">MembershipIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.populationAnalysisConfigurationInput">PopulationAnalysisConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.membershipIdentifier">MembershipIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AnalysisRules`<sup>Required</sup> <a name="AnalysisRules" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.analysisRules"></a>

```go
func AnalysisRules() CleanroomsIntermediateTableAnalysisRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList">CleanroomsIntermediateTableAnalysisRulesList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CollaborationArn`<sup>Required</sup> <a name="CollaborationArn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.collaborationArn"></a>

```go
func CollaborationArn() *string
```

- *Type:* *string

---

##### `CollaborationIdentifier`<sup>Required</sup> <a name="CollaborationIdentifier" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.collaborationIdentifier"></a>

```go
func CollaborationIdentifier() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IntermediateTableIdentifier`<sup>Required</sup> <a name="IntermediateTableIdentifier" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.intermediateTableIdentifier"></a>

```go
func IntermediateTableIdentifier() *string
```

- *Type:* *string

---

##### `MembershipArn`<sup>Required</sup> <a name="MembershipArn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.membershipArn"></a>

```go
func MembershipArn() *string
```

- *Type:* *string

---

##### `PopulationAnalysisConfiguration`<sup>Required</sup> <a name="PopulationAnalysisConfiguration" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.populationAnalysisConfiguration"></a>

```go
func PopulationAnalysisConfiguration() CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference">CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.tags"></a>

```go
func Tags() CleanroomsIntermediateTableTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList">CleanroomsIntermediateTableTagsList</a>

---

##### `AnalysisRulesInput`<sup>Optional</sup> <a name="AnalysisRulesInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.analysisRulesInput"></a>

```go
func AnalysisRulesInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `MembershipIdentifierInput`<sup>Optional</sup> <a name="MembershipIdentifierInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.membershipIdentifierInput"></a>

```go
func MembershipIdentifierInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PopulationAnalysisConfigurationInput`<sup>Optional</sup> <a name="PopulationAnalysisConfigurationInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.populationAnalysisConfigurationInput"></a>

```go
func PopulationAnalysisConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `MembershipIdentifier`<sup>Required</sup> <a name="MembershipIdentifier" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.membershipIdentifier"></a>

```go
func MembershipIdentifier() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CleanroomsIntermediateTableAnalysisRules <a name="CleanroomsIntermediateTableAnalysisRules" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsintermediatetable"

&cleanroomsintermediatetable.CleanroomsIntermediateTableAnalysisRules {
	Policy: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules.property.policy">Policy</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy">CleanroomsIntermediateTableAnalysisRulesPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#policy CleanroomsIntermediateTable#policy}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#type CleanroomsIntermediateTable#type}. |

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules.property.policy"></a>

```go
Policy CleanroomsIntermediateTableAnalysisRulesPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy">CleanroomsIntermediateTableAnalysisRulesPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#policy CleanroomsIntermediateTable#policy}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#type CleanroomsIntermediateTable#type}.

---

### CleanroomsIntermediateTableAnalysisRulesPolicy <a name="CleanroomsIntermediateTableAnalysisRulesPolicy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsintermediatetable"

&cleanroomsintermediatetable.CleanroomsIntermediateTableAnalysisRulesPolicy {
	V1: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy.property.v1">V1</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1">CleanroomsIntermediateTableAnalysisRulesPolicyV1</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#v1 CleanroomsIntermediateTable#v1}. |

---

##### `V1`<sup>Optional</sup> <a name="V1" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy.property.v1"></a>

```go
V1 CleanroomsIntermediateTableAnalysisRulesPolicyV1
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1">CleanroomsIntermediateTableAnalysisRulesPolicyV1</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#v1 CleanroomsIntermediateTable#v1}.

---

### CleanroomsIntermediateTableAnalysisRulesPolicyV1 <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsintermediatetable"

&cleanroomsintermediatetable.CleanroomsIntermediateTableAnalysisRulesPolicyV1 {
	Custom: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1.property.custom">Custom</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom">CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#custom CleanroomsIntermediateTable#custom}. |

---

##### `Custom`<sup>Optional</sup> <a name="Custom" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1.property.custom"></a>

```go
Custom CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom">CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#custom CleanroomsIntermediateTable#custom}.

---

### CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsintermediatetable"

&cleanroomsintermediatetable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom {
	AdditionalAnalyses: *string,
	AllowedAnalyses: *[]*string,
	AllowedAnalysisProviders: *[]*string,
	AllowedResultReceivers: *[]*string,
	DifferentialPrivacy: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy,
	DisallowedOutputColumns: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.additionalAnalyses">AdditionalAnalyses</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#additional_analyses CleanroomsIntermediateTable#additional_analyses}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.allowedAnalyses">AllowedAnalyses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#allowed_analyses CleanroomsIntermediateTable#allowed_analyses}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.allowedAnalysisProviders">AllowedAnalysisProviders</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#allowed_analysis_providers CleanroomsIntermediateTable#allowed_analysis_providers}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.allowedResultReceivers">AllowedResultReceivers</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#allowed_result_receivers CleanroomsIntermediateTable#allowed_result_receivers}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.differentialPrivacy">DifferentialPrivacy</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#differential_privacy CleanroomsIntermediateTable#differential_privacy}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.disallowedOutputColumns">DisallowedOutputColumns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#disallowed_output_columns CleanroomsIntermediateTable#disallowed_output_columns}. |

---

##### `AdditionalAnalyses`<sup>Optional</sup> <a name="AdditionalAnalyses" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.additionalAnalyses"></a>

```go
AdditionalAnalyses *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#additional_analyses CleanroomsIntermediateTable#additional_analyses}.

---

##### `AllowedAnalyses`<sup>Optional</sup> <a name="AllowedAnalyses" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.allowedAnalyses"></a>

```go
AllowedAnalyses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#allowed_analyses CleanroomsIntermediateTable#allowed_analyses}.

---

##### `AllowedAnalysisProviders`<sup>Optional</sup> <a name="AllowedAnalysisProviders" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.allowedAnalysisProviders"></a>

```go
AllowedAnalysisProviders *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#allowed_analysis_providers CleanroomsIntermediateTable#allowed_analysis_providers}.

---

##### `AllowedResultReceivers`<sup>Optional</sup> <a name="AllowedResultReceivers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.allowedResultReceivers"></a>

```go
AllowedResultReceivers *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#allowed_result_receivers CleanroomsIntermediateTable#allowed_result_receivers}.

---

##### `DifferentialPrivacy`<sup>Optional</sup> <a name="DifferentialPrivacy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.differentialPrivacy"></a>

```go
DifferentialPrivacy CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#differential_privacy CleanroomsIntermediateTable#differential_privacy}.

---

##### `DisallowedOutputColumns`<sup>Optional</sup> <a name="DisallowedOutputColumns" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.disallowedOutputColumns"></a>

```go
DisallowedOutputColumns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#disallowed_output_columns CleanroomsIntermediateTable#disallowed_output_columns}.

---

### CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsintermediatetable"

&cleanroomsintermediatetable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy {
	Columns: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy.property.columns">Columns</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#columns CleanroomsIntermediateTable#columns}. |

---

##### `Columns`<sup>Optional</sup> <a name="Columns" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy.property.columns"></a>

```go
Columns interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#columns CleanroomsIntermediateTable#columns}.

---

### CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsintermediatetable"

&cleanroomsintermediatetable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#name CleanroomsIntermediateTable#name}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#name CleanroomsIntermediateTable#name}.

---

### CleanroomsIntermediateTableConfig <a name="CleanroomsIntermediateTableConfig" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsintermediatetable"

&cleanroomsintermediatetable.CleanroomsIntermediateTableConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	MembershipIdentifier: *string,
	Name: *string,
	PopulationAnalysisConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration,
	AnalysisRules: interface{},
	Description: *string,
	KmsKeyArn: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.membershipIdentifier">MembershipIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#membership_identifier CleanroomsIntermediateTable#membership_identifier}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#name CleanroomsIntermediateTable#name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.populationAnalysisConfiguration">PopulationAnalysisConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration">CleanroomsIntermediateTablePopulationAnalysisConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#population_analysis_configuration CleanroomsIntermediateTable#population_analysis_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.analysisRules">AnalysisRules</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#analysis_rules CleanroomsIntermediateTable#analysis_rules}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#description CleanroomsIntermediateTable#description}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#kms_key_arn CleanroomsIntermediateTable#kms_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#tags CleanroomsIntermediateTable#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MembershipIdentifier`<sup>Required</sup> <a name="MembershipIdentifier" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.membershipIdentifier"></a>

```go
MembershipIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#membership_identifier CleanroomsIntermediateTable#membership_identifier}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#name CleanroomsIntermediateTable#name}.

---

##### `PopulationAnalysisConfiguration`<sup>Required</sup> <a name="PopulationAnalysisConfiguration" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.populationAnalysisConfiguration"></a>

```go
PopulationAnalysisConfiguration CleanroomsIntermediateTablePopulationAnalysisConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration">CleanroomsIntermediateTablePopulationAnalysisConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#population_analysis_configuration CleanroomsIntermediateTable#population_analysis_configuration}.

---

##### `AnalysisRules`<sup>Optional</sup> <a name="AnalysisRules" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.analysisRules"></a>

```go
AnalysisRules interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#analysis_rules CleanroomsIntermediateTable#analysis_rules}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#description CleanroomsIntermediateTable#description}.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#kms_key_arn CleanroomsIntermediateTable#kms_key_arn}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#tags CleanroomsIntermediateTable#tags}.

---

### CleanroomsIntermediateTablePopulationAnalysisConfiguration <a name="CleanroomsIntermediateTablePopulationAnalysisConfiguration" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsintermediatetable"

&cleanroomsintermediatetable.CleanroomsIntermediateTablePopulationAnalysisConfiguration {
	SqlParameters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration.property.sqlParameters">SqlParameters</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters">CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#sql_parameters CleanroomsIntermediateTable#sql_parameters}. |

---

##### `SqlParameters`<sup>Optional</sup> <a name="SqlParameters" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration.property.sqlParameters"></a>

```go
SqlParameters CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters">CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#sql_parameters CleanroomsIntermediateTable#sql_parameters}.

---

### CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters <a name="CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsintermediatetable"

&cleanroomsintermediatetable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters {
	AnalysisTemplateArn: *string,
	QueryString: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters.property.analysisTemplateArn">AnalysisTemplateArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#analysis_template_arn CleanroomsIntermediateTable#analysis_template_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters.property.queryString">QueryString</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#query_string CleanroomsIntermediateTable#query_string}. |

---

##### `AnalysisTemplateArn`<sup>Optional</sup> <a name="AnalysisTemplateArn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters.property.analysisTemplateArn"></a>

```go
AnalysisTemplateArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#analysis_template_arn CleanroomsIntermediateTable#analysis_template_arn}.

---

##### `QueryString`<sup>Optional</sup> <a name="QueryString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters.property.queryString"></a>

```go
QueryString *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#query_string CleanroomsIntermediateTable#query_string}.

---

### CleanroomsIntermediateTableTags <a name="CleanroomsIntermediateTableTags" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsintermediatetable"

&cleanroomsintermediatetable.CleanroomsIntermediateTableTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#key CleanroomsIntermediateTable#key}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#value CleanroomsIntermediateTable#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#key CleanroomsIntermediateTable#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanrooms_intermediate_table#value CleanroomsIntermediateTable#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CleanroomsIntermediateTableAnalysisRulesList <a name="CleanroomsIntermediateTableAnalysisRulesList" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsintermediatetable"

cleanroomsintermediatetable.NewCleanroomsIntermediateTableAnalysisRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CleanroomsIntermediateTableAnalysisRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.get"></a>

```go
func Get(index *f64) CleanroomsIntermediateTableAnalysisRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsIntermediateTableAnalysisRulesOutputReference <a name="CleanroomsIntermediateTableAnalysisRulesOutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsintermediatetable"

cleanroomsintermediatetable.NewCleanroomsIntermediateTableAnalysisRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CleanroomsIntermediateTableAnalysisRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.putPolicy">PutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.resetPolicy">ResetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPolicy` <a name="PutPolicy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.putPolicy"></a>

```go
func PutPolicy(value CleanroomsIntermediateTableAnalysisRulesPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.putPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy">CleanroomsIntermediateTableAnalysisRulesPolicy</a>

---

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.resetPolicy"></a>

```go
func ResetPolicy()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.policy">Policy</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference">CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.policyInput">PolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.policy"></a>

```go
func Policy() CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference">CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference</a>

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.policyInput"></a>

```go
func PolicyInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference <a name="CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsintermediatetable"

cleanroomsintermediatetable.NewCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.putV1">PutV1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.resetV1">ResetV1</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutV1` <a name="PutV1" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.putV1"></a>

```go
func PutV1(value CleanroomsIntermediateTableAnalysisRulesPolicyV1)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.putV1.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1">CleanroomsIntermediateTableAnalysisRulesPolicyV1</a>

---

##### `ResetV1` <a name="ResetV1" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.resetV1"></a>

```go
func ResetV1()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.v1">V1</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference">CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.v1Input">V1Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `V1`<sup>Required</sup> <a name="V1" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.v1"></a>

```go
func V1() CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference">CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference</a>

---

##### `V1Input`<sup>Optional</sup> <a name="V1Input" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.v1Input"></a>

```go
func V1Input() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsintermediatetable"

cleanroomsintermediatetable.NewCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.get"></a>

```go
func Get(index *f64) CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsintermediatetable"

cleanroomsintermediatetable.NewCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsintermediatetable"

cleanroomsintermediatetable.NewCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.putColumns">PutColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.resetColumns">ResetColumns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumns` <a name="PutColumns" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.putColumns"></a>

```go
func PutColumns(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.putColumns.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetColumns` <a name="ResetColumns" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.resetColumns"></a>

```go
func ResetColumns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.columns">Columns</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.columnsInput">ColumnsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.columns"></a>

```go
func Columns() CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList</a>

---

##### `ColumnsInput`<sup>Optional</sup> <a name="ColumnsInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.columnsInput"></a>

```go
func ColumnsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsintermediatetable"

cleanroomsintermediatetable.NewCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.putDifferentialPrivacy">PutDifferentialPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetAdditionalAnalyses">ResetAdditionalAnalyses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetAllowedAnalyses">ResetAllowedAnalyses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetAllowedAnalysisProviders">ResetAllowedAnalysisProviders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetAllowedResultReceivers">ResetAllowedResultReceivers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetDifferentialPrivacy">ResetDifferentialPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetDisallowedOutputColumns">ResetDisallowedOutputColumns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDifferentialPrivacy` <a name="PutDifferentialPrivacy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.putDifferentialPrivacy"></a>

```go
func PutDifferentialPrivacy(value CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.putDifferentialPrivacy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a>

---

##### `ResetAdditionalAnalyses` <a name="ResetAdditionalAnalyses" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetAdditionalAnalyses"></a>

```go
func ResetAdditionalAnalyses()
```

##### `ResetAllowedAnalyses` <a name="ResetAllowedAnalyses" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetAllowedAnalyses"></a>

```go
func ResetAllowedAnalyses()
```

##### `ResetAllowedAnalysisProviders` <a name="ResetAllowedAnalysisProviders" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetAllowedAnalysisProviders"></a>

```go
func ResetAllowedAnalysisProviders()
```

##### `ResetAllowedResultReceivers` <a name="ResetAllowedResultReceivers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetAllowedResultReceivers"></a>

```go
func ResetAllowedResultReceivers()
```

##### `ResetDifferentialPrivacy` <a name="ResetDifferentialPrivacy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetDifferentialPrivacy"></a>

```go
func ResetDifferentialPrivacy()
```

##### `ResetDisallowedOutputColumns` <a name="ResetDisallowedOutputColumns" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetDisallowedOutputColumns"></a>

```go
func ResetDisallowedOutputColumns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.differentialPrivacy">DifferentialPrivacy</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.additionalAnalysesInput">AdditionalAnalysesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysesInput">AllowedAnalysesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysisProvidersInput">AllowedAnalysisProvidersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedResultReceiversInput">AllowedResultReceiversInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.differentialPrivacyInput">DifferentialPrivacyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.disallowedOutputColumnsInput">DisallowedOutputColumnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.additionalAnalyses">AdditionalAnalyses</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalyses">AllowedAnalyses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysisProviders">AllowedAnalysisProviders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedResultReceivers">AllowedResultReceivers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.disallowedOutputColumns">DisallowedOutputColumns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DifferentialPrivacy`<sup>Required</sup> <a name="DifferentialPrivacy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.differentialPrivacy"></a>

```go
func DifferentialPrivacy() CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference</a>

---

##### `AdditionalAnalysesInput`<sup>Optional</sup> <a name="AdditionalAnalysesInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.additionalAnalysesInput"></a>

```go
func AdditionalAnalysesInput() *string
```

- *Type:* *string

---

##### `AllowedAnalysesInput`<sup>Optional</sup> <a name="AllowedAnalysesInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysesInput"></a>

```go
func AllowedAnalysesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedAnalysisProvidersInput`<sup>Optional</sup> <a name="AllowedAnalysisProvidersInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysisProvidersInput"></a>

```go
func AllowedAnalysisProvidersInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedResultReceiversInput`<sup>Optional</sup> <a name="AllowedResultReceiversInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedResultReceiversInput"></a>

```go
func AllowedResultReceiversInput() *[]*string
```

- *Type:* *[]*string

---

##### `DifferentialPrivacyInput`<sup>Optional</sup> <a name="DifferentialPrivacyInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.differentialPrivacyInput"></a>

```go
func DifferentialPrivacyInput() interface{}
```

- *Type:* interface{}

---

##### `DisallowedOutputColumnsInput`<sup>Optional</sup> <a name="DisallowedOutputColumnsInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.disallowedOutputColumnsInput"></a>

```go
func DisallowedOutputColumnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AdditionalAnalyses`<sup>Required</sup> <a name="AdditionalAnalyses" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.additionalAnalyses"></a>

```go
func AdditionalAnalyses() *string
```

- *Type:* *string

---

##### `AllowedAnalyses`<sup>Required</sup> <a name="AllowedAnalyses" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalyses"></a>

```go
func AllowedAnalyses() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedAnalysisProviders`<sup>Required</sup> <a name="AllowedAnalysisProviders" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysisProviders"></a>

```go
func AllowedAnalysisProviders() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedResultReceivers`<sup>Required</sup> <a name="AllowedResultReceivers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedResultReceivers"></a>

```go
func AllowedResultReceivers() *[]*string
```

- *Type:* *[]*string

---

##### `DisallowedOutputColumns`<sup>Required</sup> <a name="DisallowedOutputColumns" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.disallowedOutputColumns"></a>

```go
func DisallowedOutputColumns() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsintermediatetable"

cleanroomsintermediatetable.NewCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.putCustom">PutCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.resetCustom">ResetCustom</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustom` <a name="PutCustom" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.putCustom"></a>

```go
func PutCustom(value CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.putCustom.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom">CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom</a>

---

##### `ResetCustom` <a name="ResetCustom" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.resetCustom"></a>

```go
func ResetCustom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.custom">Custom</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.customInput">CustomInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Custom`<sup>Required</sup> <a name="Custom" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.custom"></a>

```go
func Custom() CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference</a>

---

##### `CustomInput`<sup>Optional</sup> <a name="CustomInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.customInput"></a>

```go
func CustomInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference <a name="CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsintermediatetable"

cleanroomsintermediatetable.NewCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.putSqlParameters">PutSqlParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.resetSqlParameters">ResetSqlParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSqlParameters` <a name="PutSqlParameters" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.putSqlParameters"></a>

```go
func PutSqlParameters(value CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.putSqlParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters">CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters</a>

---

##### `ResetSqlParameters` <a name="ResetSqlParameters" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.resetSqlParameters"></a>

```go
func ResetSqlParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.sqlParameters">SqlParameters</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference">CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.sqlParametersInput">SqlParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SqlParameters`<sup>Required</sup> <a name="SqlParameters" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.sqlParameters"></a>

```go
func SqlParameters() CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference">CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference</a>

---

##### `SqlParametersInput`<sup>Optional</sup> <a name="SqlParametersInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.sqlParametersInput"></a>

```go
func SqlParametersInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference <a name="CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsintermediatetable"

cleanroomsintermediatetable.NewCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.resetAnalysisTemplateArn">ResetAnalysisTemplateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.resetQueryString">ResetQueryString</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnalysisTemplateArn` <a name="ResetAnalysisTemplateArn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.resetAnalysisTemplateArn"></a>

```go
func ResetAnalysisTemplateArn()
```

##### `ResetQueryString` <a name="ResetQueryString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.resetQueryString"></a>

```go
func ResetQueryString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.analysisTemplateArnInput">AnalysisTemplateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.queryStringInput">QueryStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.analysisTemplateArn">AnalysisTemplateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.queryString">QueryString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AnalysisTemplateArnInput`<sup>Optional</sup> <a name="AnalysisTemplateArnInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.analysisTemplateArnInput"></a>

```go
func AnalysisTemplateArnInput() *string
```

- *Type:* *string

---

##### `QueryStringInput`<sup>Optional</sup> <a name="QueryStringInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.queryStringInput"></a>

```go
func QueryStringInput() *string
```

- *Type:* *string

---

##### `AnalysisTemplateArn`<sup>Required</sup> <a name="AnalysisTemplateArn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.analysisTemplateArn"></a>

```go
func AnalysisTemplateArn() *string
```

- *Type:* *string

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.queryString"></a>

```go
func QueryString() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsIntermediateTableTagsList <a name="CleanroomsIntermediateTableTagsList" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsintermediatetable"

cleanroomsintermediatetable.NewCleanroomsIntermediateTableTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CleanroomsIntermediateTableTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.get"></a>

```go
func Get(index *f64) CleanroomsIntermediateTableTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsIntermediateTableTagsOutputReference <a name="CleanroomsIntermediateTableTagsOutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsintermediatetable"

cleanroomsintermediatetable.NewCleanroomsIntermediateTableTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CleanroomsIntermediateTableTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



