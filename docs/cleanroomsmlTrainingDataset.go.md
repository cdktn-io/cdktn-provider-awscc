# `cleanroomsmlTrainingDataset` Submodule <a name="`cleanroomsmlTrainingDataset` Submodule" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanroomsmlTrainingDataset <a name="CleanroomsmlTrainingDataset" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanroomsml_training_dataset awscc_cleanroomsml_training_dataset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmltrainingdataset"

cleanroomsmltrainingdataset.NewCleanroomsmlTrainingDataset(scope Construct, id *string, config CleanroomsmlTrainingDatasetConfig) CleanroomsmlTrainingDataset
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig">CleanroomsmlTrainingDatasetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig">CleanroomsmlTrainingDatasetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.putTrainingData">PutTrainingData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTrainingData` <a name="PutTrainingData" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.putTrainingData"></a>

```go
func PutTrainingData(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.putTrainingData.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CleanroomsmlTrainingDataset resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmltrainingdataset"

cleanroomsmltrainingdataset.CleanroomsmlTrainingDataset_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmltrainingdataset"

cleanroomsmltrainingdataset.CleanroomsmlTrainingDataset_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmltrainingdataset"

cleanroomsmltrainingdataset.CleanroomsmlTrainingDataset_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmltrainingdataset"

cleanroomsmltrainingdataset.CleanroomsmlTrainingDataset_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CleanroomsmlTrainingDataset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CleanroomsmlTrainingDataset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CleanroomsmlTrainingDataset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanroomsml_training_dataset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CleanroomsmlTrainingDataset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList">CleanroomsmlTrainingDatasetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.trainingData">TrainingData</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList">CleanroomsmlTrainingDatasetTrainingDataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.trainingDatasetArn">TrainingDatasetArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.trainingDataInput">TrainingDataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.tags"></a>

```go
func Tags() CleanroomsmlTrainingDatasetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList">CleanroomsmlTrainingDatasetTagsList</a>

---

##### `TrainingData`<sup>Required</sup> <a name="TrainingData" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.trainingData"></a>

```go
func TrainingData() CleanroomsmlTrainingDatasetTrainingDataList
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList">CleanroomsmlTrainingDatasetTrainingDataList</a>

---

##### `TrainingDatasetArn`<sup>Required</sup> <a name="TrainingDatasetArn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.trainingDatasetArn"></a>

```go
func TrainingDatasetArn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TrainingDataInput`<sup>Optional</sup> <a name="TrainingDataInput" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.trainingDataInput"></a>

```go
func TrainingDataInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDataset.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CleanroomsmlTrainingDatasetConfig <a name="CleanroomsmlTrainingDatasetConfig" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmltrainingdataset"

&cleanroomsmltrainingdataset.CleanroomsmlTrainingDatasetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	RoleArn: *string,
	TrainingData: interface{},
	Description: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanroomsml_training_dataset#name CleanroomsmlTrainingDataset#name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanroomsml_training_dataset#role_arn CleanroomsmlTrainingDataset#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.trainingData">TrainingData</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanroomsml_training_dataset#training_data CleanroomsmlTrainingDataset#training_data}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanroomsml_training_dataset#description CleanroomsmlTrainingDataset#description}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An arbitrary set of tags (key-value pairs) for this cleanrooms-ml training dataset. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanroomsml_training_dataset#name CleanroomsmlTrainingDataset#name}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanroomsml_training_dataset#role_arn CleanroomsmlTrainingDataset#role_arn}.

---

##### `TrainingData`<sup>Required</sup> <a name="TrainingData" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.trainingData"></a>

```go
TrainingData interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanroomsml_training_dataset#training_data CleanroomsmlTrainingDataset#training_data}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanroomsml_training_dataset#description CleanroomsmlTrainingDataset#description}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An arbitrary set of tags (key-value pairs) for this cleanrooms-ml training dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanroomsml_training_dataset#tags CleanroomsmlTrainingDataset#tags}

---

### CleanroomsmlTrainingDatasetTags <a name="CleanroomsmlTrainingDatasetTags" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmltrainingdataset"

&cleanroomsmltrainingdataset.CleanroomsmlTrainingDatasetTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanroomsml_training_dataset#key CleanroomsmlTrainingDataset#key}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanroomsml_training_dataset#value CleanroomsmlTrainingDataset#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanroomsml_training_dataset#key CleanroomsmlTrainingDataset#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanroomsml_training_dataset#value CleanroomsmlTrainingDataset#value}.

---

### CleanroomsmlTrainingDatasetTrainingData <a name="CleanroomsmlTrainingDatasetTrainingData" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingData.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmltrainingdataset"

&cleanroomsmltrainingdataset.CleanroomsmlTrainingDatasetTrainingData {
	InputConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfig,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingData.property.inputConfig">InputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfig">CleanroomsmlTrainingDatasetTrainingDataInputConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanroomsml_training_dataset#input_config CleanroomsmlTrainingDataset#input_config}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingData.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanroomsml_training_dataset#type CleanroomsmlTrainingDataset#type}. |

---

##### `InputConfig`<sup>Required</sup> <a name="InputConfig" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingData.property.inputConfig"></a>

```go
InputConfig CleanroomsmlTrainingDatasetTrainingDataInputConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfig">CleanroomsmlTrainingDatasetTrainingDataInputConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanroomsml_training_dataset#input_config CleanroomsmlTrainingDataset#input_config}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingData.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanroomsml_training_dataset#type CleanroomsmlTrainingDataset#type}.

---

### CleanroomsmlTrainingDatasetTrainingDataInputConfig <a name="CleanroomsmlTrainingDatasetTrainingDataInputConfig" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmltrainingdataset"

&cleanroomsmltrainingdataset.CleanroomsmlTrainingDatasetTrainingDataInputConfig {
	DataSource: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource,
	Schema: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfig.property.dataSource">DataSource</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanroomsml_training_dataset#data_source CleanroomsmlTrainingDataset#data_source}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfig.property.schema">Schema</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanroomsml_training_dataset#schema CleanroomsmlTrainingDataset#schema}. |

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfig.property.dataSource"></a>

```go
DataSource CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanroomsml_training_dataset#data_source CleanroomsmlTrainingDataset#data_source}.

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfig.property.schema"></a>

```go
Schema interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanroomsml_training_dataset#schema CleanroomsmlTrainingDataset#schema}.

---

### CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource <a name="CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmltrainingdataset"

&cleanroomsmltrainingdataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource {
	GlueDataSource: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource.property.glueDataSource">GlueDataSource</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanroomsml_training_dataset#glue_data_source CleanroomsmlTrainingDataset#glue_data_source}. |

---

##### `GlueDataSource`<sup>Required</sup> <a name="GlueDataSource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource.property.glueDataSource"></a>

```go
GlueDataSource CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanroomsml_training_dataset#glue_data_source CleanroomsmlTrainingDataset#glue_data_source}.

---

### CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource <a name="CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmltrainingdataset"

&cleanroomsmltrainingdataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource {
	DatabaseName: *string,
	TableName: *string,
	CatalogId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanroomsml_training_dataset#database_name CleanroomsmlTrainingDataset#database_name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource.property.tableName">TableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanroomsml_training_dataset#table_name CleanroomsmlTrainingDataset#table_name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource.property.catalogId">CatalogId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanroomsml_training_dataset#catalog_id CleanroomsmlTrainingDataset#catalog_id}. |

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanroomsml_training_dataset#database_name CleanroomsmlTrainingDataset#database_name}.

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanroomsml_training_dataset#table_name CleanroomsmlTrainingDataset#table_name}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource.property.catalogId"></a>

```go
CatalogId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanroomsml_training_dataset#catalog_id CleanroomsmlTrainingDataset#catalog_id}.

---

### CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema <a name="CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmltrainingdataset"

&cleanroomsmltrainingdataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema {
	ColumnName: *string,
	ColumnTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema.property.columnName">ColumnName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanroomsml_training_dataset#column_name CleanroomsmlTrainingDataset#column_name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema.property.columnTypes">ColumnTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanroomsml_training_dataset#column_types CleanroomsmlTrainingDataset#column_types}. |

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema.property.columnName"></a>

```go
ColumnName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanroomsml_training_dataset#column_name CleanroomsmlTrainingDataset#column_name}.

---

##### `ColumnTypes`<sup>Required</sup> <a name="ColumnTypes" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchema.property.columnTypes"></a>

```go
ColumnTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cleanroomsml_training_dataset#column_types CleanroomsmlTrainingDataset#column_types}.

---

## Classes <a name="Classes" id="Classes"></a>

### CleanroomsmlTrainingDatasetTagsList <a name="CleanroomsmlTrainingDatasetTagsList" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmltrainingdataset"

cleanroomsmltrainingdataset.NewCleanroomsmlTrainingDatasetTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CleanroomsmlTrainingDatasetTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.get"></a>

```go
func Get(index *f64) CleanroomsmlTrainingDatasetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsmlTrainingDatasetTagsOutputReference <a name="CleanroomsmlTrainingDatasetTagsOutputReference" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmltrainingdataset"

cleanroomsmltrainingdataset.NewCleanroomsmlTrainingDatasetTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CleanroomsmlTrainingDatasetTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference <a name="CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmltrainingdataset"

cleanroomsmltrainingdataset.NewCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.resetCatalogId"></a>

```go
func ResetCatalogId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.catalogIdInput"></a>

```go
func CatalogIdInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference <a name="CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmltrainingdataset"

cleanroomsmltrainingdataset.NewCleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.putGlueDataSource">PutGlueDataSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGlueDataSource` <a name="PutGlueDataSource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.putGlueDataSource"></a>

```go
func PutGlueDataSource(value CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.putGlueDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSource</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.glueDataSource">GlueDataSource</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.glueDataSourceInput">GlueDataSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GlueDataSource`<sup>Required</sup> <a name="GlueDataSource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.glueDataSource"></a>

```go
func GlueDataSource() CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceGlueDataSourceOutputReference</a>

---

##### `GlueDataSourceInput`<sup>Optional</sup> <a name="GlueDataSourceInput" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.glueDataSourceInput"></a>

```go
func GlueDataSourceInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference <a name="CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmltrainingdataset"

cleanroomsmltrainingdataset.NewCleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.putDataSource">PutDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.putSchema">PutSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataSource` <a name="PutDataSource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.putDataSource"></a>

```go
func PutDataSource(value CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.putDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSource</a>

---

##### `PutSchema` <a name="PutSchema" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.putSchema"></a>

```go
func PutSchema(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.putSchema.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.dataSource">DataSource</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.schema">Schema</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList">CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.dataSourceInput">DataSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.schemaInput">SchemaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.dataSource"></a>

```go
func DataSource() CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference">CleanroomsmlTrainingDatasetTrainingDataInputConfigDataSourceOutputReference</a>

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.schema"></a>

```go
func Schema() CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList">CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList</a>

---

##### `DataSourceInput`<sup>Optional</sup> <a name="DataSourceInput" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.dataSourceInput"></a>

```go
func DataSourceInput() interface{}
```

- *Type:* interface{}

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.schemaInput"></a>

```go
func SchemaInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList <a name="CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmltrainingdataset"

cleanroomsmltrainingdataset.NewCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.get"></a>

```go
func Get(index *f64) CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference <a name="CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmltrainingdataset"

cleanroomsmltrainingdataset.NewCleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.columnNameInput">ColumnNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.columnTypesInput">ColumnTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.columnName">ColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.columnTypes">ColumnTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnNameInput`<sup>Optional</sup> <a name="ColumnNameInput" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.columnNameInput"></a>

```go
func ColumnNameInput() *string
```

- *Type:* *string

---

##### `ColumnTypesInput`<sup>Optional</sup> <a name="ColumnTypesInput" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.columnTypesInput"></a>

```go
func ColumnTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.columnName"></a>

```go
func ColumnName() *string
```

- *Type:* *string

---

##### `ColumnTypes`<sup>Required</sup> <a name="ColumnTypes" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.columnTypes"></a>

```go
func ColumnTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigSchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsmlTrainingDatasetTrainingDataList <a name="CleanroomsmlTrainingDatasetTrainingDataList" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmltrainingdataset"

cleanroomsmltrainingdataset.NewCleanroomsmlTrainingDatasetTrainingDataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CleanroomsmlTrainingDatasetTrainingDataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.get"></a>

```go
func Get(index *f64) CleanroomsmlTrainingDatasetTrainingDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsmlTrainingDatasetTrainingDataOutputReference <a name="CleanroomsmlTrainingDatasetTrainingDataOutputReference" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsmltrainingdataset"

cleanroomsmltrainingdataset.NewCleanroomsmlTrainingDatasetTrainingDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CleanroomsmlTrainingDatasetTrainingDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.putInputConfig">PutInputConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInputConfig` <a name="PutInputConfig" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.putInputConfig"></a>

```go
func PutInputConfig(value CleanroomsmlTrainingDatasetTrainingDataInputConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.putInputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfig">CleanroomsmlTrainingDatasetTrainingDataInputConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.property.inputConfig">InputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference">CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.property.inputConfigInput">InputConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputConfig`<sup>Required</sup> <a name="InputConfig" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.property.inputConfig"></a>

```go
func InputConfig() CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference">CleanroomsmlTrainingDatasetTrainingDataInputConfigOutputReference</a>

---

##### `InputConfigInput`<sup>Optional</sup> <a name="InputConfigInput" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.property.inputConfigInput"></a>

```go
func InputConfigInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsmlTrainingDataset.CleanroomsmlTrainingDatasetTrainingDataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



