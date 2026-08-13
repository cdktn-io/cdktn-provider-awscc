# `mskReplicator` Submodule <a name="`mskReplicator` Submodule" id="@cdktn/provider-awscc.mskReplicator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MskReplicator <a name="MskReplicator" id="@cdktn/provider-awscc.mskReplicator.MskReplicator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator awscc_msk_replicator}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

mskreplicator.NewMskReplicator(scope Construct, id *string, config MskReplicatorConfig) MskReplicator
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig">MskReplicatorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig">MskReplicatorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.putKafkaClusters">PutKafkaClusters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.putLogDelivery">PutLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.putReplicationInfoList">PutReplicationInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.resetLogDelivery">ResetLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutKafkaClusters` <a name="PutKafkaClusters" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.putKafkaClusters"></a>

```go
func PutKafkaClusters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.putKafkaClusters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLogDelivery` <a name="PutLogDelivery" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.putLogDelivery"></a>

```go
func PutLogDelivery(value MskReplicatorLogDelivery)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.putLogDelivery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDelivery">MskReplicatorLogDelivery</a>

---

##### `PutReplicationInfoList` <a name="PutReplicationInfoList" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.putReplicationInfoList"></a>

```go
func PutReplicationInfoList(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.putReplicationInfoList.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetLogDelivery` <a name="ResetLogDelivery" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.resetLogDelivery"></a>

```go
func ResetLogDelivery()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MskReplicator resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

mskreplicator.MskReplicator_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

mskreplicator.MskReplicator_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

mskreplicator.MskReplicator_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

mskreplicator.MskReplicator_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a MskReplicator resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MskReplicator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MskReplicator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the MskReplicator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.currentVersion">CurrentVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.kafkaClusters">KafkaClusters</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList">MskReplicatorKafkaClustersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.logDelivery">LogDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference">MskReplicatorLogDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.replicationInfoList">ReplicationInfoList</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList">MskReplicatorReplicationInfoListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.replicatorArn">ReplicatorArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList">MskReplicatorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.kafkaClustersInput">KafkaClustersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.logDeliveryInput">LogDeliveryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.replicationInfoListInput">ReplicationInfoListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.replicatorNameInput">ReplicatorNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.serviceExecutionRoleArnInput">ServiceExecutionRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.replicatorName">ReplicatorName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.serviceExecutionRoleArn">ServiceExecutionRoleArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CurrentVersion`<sup>Required</sup> <a name="CurrentVersion" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.currentVersion"></a>

```go
func CurrentVersion() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KafkaClusters`<sup>Required</sup> <a name="KafkaClusters" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.kafkaClusters"></a>

```go
func KafkaClusters() MskReplicatorKafkaClustersList
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList">MskReplicatorKafkaClustersList</a>

---

##### `LogDelivery`<sup>Required</sup> <a name="LogDelivery" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.logDelivery"></a>

```go
func LogDelivery() MskReplicatorLogDeliveryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference">MskReplicatorLogDeliveryOutputReference</a>

---

##### `ReplicationInfoList`<sup>Required</sup> <a name="ReplicationInfoList" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.replicationInfoList"></a>

```go
func ReplicationInfoList() MskReplicatorReplicationInfoListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList">MskReplicatorReplicationInfoListStructList</a>

---

##### `ReplicatorArn`<sup>Required</sup> <a name="ReplicatorArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.replicatorArn"></a>

```go
func ReplicatorArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.tags"></a>

```go
func Tags() MskReplicatorTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList">MskReplicatorTagsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `KafkaClustersInput`<sup>Optional</sup> <a name="KafkaClustersInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.kafkaClustersInput"></a>

```go
func KafkaClustersInput() interface{}
```

- *Type:* interface{}

---

##### `LogDeliveryInput`<sup>Optional</sup> <a name="LogDeliveryInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.logDeliveryInput"></a>

```go
func LogDeliveryInput() interface{}
```

- *Type:* interface{}

---

##### `ReplicationInfoListInput`<sup>Optional</sup> <a name="ReplicationInfoListInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.replicationInfoListInput"></a>

```go
func ReplicationInfoListInput() interface{}
```

- *Type:* interface{}

---

##### `ReplicatorNameInput`<sup>Optional</sup> <a name="ReplicatorNameInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.replicatorNameInput"></a>

```go
func ReplicatorNameInput() *string
```

- *Type:* *string

---

##### `ServiceExecutionRoleArnInput`<sup>Optional</sup> <a name="ServiceExecutionRoleArnInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.serviceExecutionRoleArnInput"></a>

```go
func ServiceExecutionRoleArnInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ReplicatorName`<sup>Required</sup> <a name="ReplicatorName" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.replicatorName"></a>

```go
func ReplicatorName() *string
```

- *Type:* *string

---

##### `ServiceExecutionRoleArn`<sup>Required</sup> <a name="ServiceExecutionRoleArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.serviceExecutionRoleArn"></a>

```go
func ServiceExecutionRoleArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicator.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.mskReplicator.MskReplicator.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MskReplicatorConfig <a name="MskReplicatorConfig" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

&mskreplicator.MskReplicatorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	KafkaClusters: interface{},
	ReplicationInfoList: interface{},
	ReplicatorName: *string,
	ServiceExecutionRoleArn: *string,
	Description: *string,
	LogDelivery: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mskReplicator.MskReplicatorLogDelivery,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.kafkaClusters">KafkaClusters</a></code> | <code>interface{}</code> | Specifies a list of Kafka clusters which are targets of the replicator. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.replicationInfoList">ReplicationInfoList</a></code> | <code>interface{}</code> | A list of replication configurations, where each configuration targets a given source cluster to target cluster replication flow. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.replicatorName">ReplicatorName</a></code> | <code>*string</code> | The name of the replicator. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.serviceExecutionRoleArn">ServiceExecutionRoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the IAM role used by the replicator to access external resources. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.description">Description</a></code> | <code>*string</code> | A summary description of the replicator. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.logDelivery">LogDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDelivery">MskReplicatorLogDelivery</a></code> | Configuration for log delivery for the replicator. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.tags">Tags</a></code> | <code>interface{}</code> | A collection of tags associated with a resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KafkaClusters`<sup>Required</sup> <a name="KafkaClusters" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.kafkaClusters"></a>

```go
KafkaClusters interface{}
```

- *Type:* interface{}

Specifies a list of Kafka clusters which are targets of the replicator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#kafka_clusters MskReplicator#kafka_clusters}

---

##### `ReplicationInfoList`<sup>Required</sup> <a name="ReplicationInfoList" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.replicationInfoList"></a>

```go
ReplicationInfoList interface{}
```

- *Type:* interface{}

A list of replication configurations, where each configuration targets a given source cluster to target cluster replication flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#replication_info_list MskReplicator#replication_info_list}

---

##### `ReplicatorName`<sup>Required</sup> <a name="ReplicatorName" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.replicatorName"></a>

```go
ReplicatorName *string
```

- *Type:* *string

The name of the replicator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#replicator_name MskReplicator#replicator_name}

---

##### `ServiceExecutionRoleArn`<sup>Required</sup> <a name="ServiceExecutionRoleArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.serviceExecutionRoleArn"></a>

```go
ServiceExecutionRoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the IAM role used by the replicator to access external resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#service_execution_role_arn MskReplicator#service_execution_role_arn}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A summary description of the replicator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#description MskReplicator#description}

---

##### `LogDelivery`<sup>Optional</sup> <a name="LogDelivery" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.logDelivery"></a>

```go
LogDelivery MskReplicatorLogDelivery
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDelivery">MskReplicatorLogDelivery</a>

Configuration for log delivery for the replicator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#log_delivery MskReplicator#log_delivery}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#tags MskReplicator#tags}

---

### MskReplicatorKafkaClusters <a name="MskReplicatorKafkaClusters" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

&mskreplicator.MskReplicatorKafkaClusters {
	AmazonMskCluster: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskCluster,
	ApacheKafkaCluster: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaCluster,
	ClientAuthentication: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthentication,
	EncryptionInTransit: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransit,
	VpcConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters.property.amazonMskCluster">AmazonMskCluster</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskCluster">MskReplicatorKafkaClustersAmazonMskCluster</a></code> | Details of an Amazon MSK cluster. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters.property.apacheKafkaCluster">ApacheKafkaCluster</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaCluster">MskReplicatorKafkaClustersApacheKafkaCluster</a></code> | Details of an Apache Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters.property.clientAuthentication">ClientAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthentication">MskReplicatorKafkaClustersClientAuthentication</a></code> | Details of the client authentication used by the Apache Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters.property.encryptionInTransit">EncryptionInTransit</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransit">MskReplicatorKafkaClustersEncryptionInTransit</a></code> | Details of encryption in transit to the Apache Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfig">MskReplicatorKafkaClustersVpcConfig</a></code> | Details of an Amazon VPC which has network connectivity to the Apache Kafka cluster. |

---

##### `AmazonMskCluster`<sup>Optional</sup> <a name="AmazonMskCluster" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters.property.amazonMskCluster"></a>

```go
AmazonMskCluster MskReplicatorKafkaClustersAmazonMskCluster
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskCluster">MskReplicatorKafkaClustersAmazonMskCluster</a>

Details of an Amazon MSK cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#amazon_msk_cluster MskReplicator#amazon_msk_cluster}

---

##### `ApacheKafkaCluster`<sup>Optional</sup> <a name="ApacheKafkaCluster" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters.property.apacheKafkaCluster"></a>

```go
ApacheKafkaCluster MskReplicatorKafkaClustersApacheKafkaCluster
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaCluster">MskReplicatorKafkaClustersApacheKafkaCluster</a>

Details of an Apache Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#apache_kafka_cluster MskReplicator#apache_kafka_cluster}

---

##### `ClientAuthentication`<sup>Optional</sup> <a name="ClientAuthentication" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters.property.clientAuthentication"></a>

```go
ClientAuthentication MskReplicatorKafkaClustersClientAuthentication
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthentication">MskReplicatorKafkaClustersClientAuthentication</a>

Details of the client authentication used by the Apache Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#client_authentication MskReplicator#client_authentication}

---

##### `EncryptionInTransit`<sup>Optional</sup> <a name="EncryptionInTransit" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters.property.encryptionInTransit"></a>

```go
EncryptionInTransit MskReplicatorKafkaClustersEncryptionInTransit
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransit">MskReplicatorKafkaClustersEncryptionInTransit</a>

Details of encryption in transit to the Apache Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#encryption_in_transit MskReplicator#encryption_in_transit}

---

##### `VpcConfig`<sup>Optional</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClusters.property.vpcConfig"></a>

```go
VpcConfig MskReplicatorKafkaClustersVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfig">MskReplicatorKafkaClustersVpcConfig</a>

Details of an Amazon VPC which has network connectivity to the Apache Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#vpc_config MskReplicator#vpc_config}

---

### MskReplicatorKafkaClustersAmazonMskCluster <a name="MskReplicatorKafkaClustersAmazonMskCluster" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskCluster.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

&mskreplicator.MskReplicatorKafkaClustersAmazonMskCluster {
	MskClusterArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskCluster.property.mskClusterArn">MskClusterArn</a></code> | <code>*string</code> | The ARN of an Amazon MSK cluster. |

---

##### `MskClusterArn`<sup>Optional</sup> <a name="MskClusterArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskCluster.property.mskClusterArn"></a>

```go
MskClusterArn *string
```

- *Type:* *string

The ARN of an Amazon MSK cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#msk_cluster_arn MskReplicator#msk_cluster_arn}

---

### MskReplicatorKafkaClustersApacheKafkaCluster <a name="MskReplicatorKafkaClustersApacheKafkaCluster" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaCluster.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

&mskreplicator.MskReplicatorKafkaClustersApacheKafkaCluster {
	ApacheKafkaClusterId: *string,
	BootstrapBrokerString: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaCluster.property.apacheKafkaClusterId">ApacheKafkaClusterId</a></code> | <code>*string</code> | The ID of the Apache Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaCluster.property.bootstrapBrokerString">BootstrapBrokerString</a></code> | <code>*string</code> | The bootstrap broker string of the Apache Kafka cluster. |

---

##### `ApacheKafkaClusterId`<sup>Optional</sup> <a name="ApacheKafkaClusterId" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaCluster.property.apacheKafkaClusterId"></a>

```go
ApacheKafkaClusterId *string
```

- *Type:* *string

The ID of the Apache Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#apache_kafka_cluster_id MskReplicator#apache_kafka_cluster_id}

---

##### `BootstrapBrokerString`<sup>Optional</sup> <a name="BootstrapBrokerString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaCluster.property.bootstrapBrokerString"></a>

```go
BootstrapBrokerString *string
```

- *Type:* *string

The bootstrap broker string of the Apache Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#bootstrap_broker_string MskReplicator#bootstrap_broker_string}

---

### MskReplicatorKafkaClustersClientAuthentication <a name="MskReplicatorKafkaClustersClientAuthentication" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthentication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

&mskreplicator.MskReplicatorKafkaClustersClientAuthentication {
	Mtls: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtls,
	SaslScram: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScram,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthentication.property.mtls">Mtls</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtls">MskReplicatorKafkaClustersClientAuthenticationMtls</a></code> | Details for mTLS client authentication. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthentication.property.saslScram">SaslScram</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScram">MskReplicatorKafkaClustersClientAuthenticationSaslScram</a></code> | Details for SASL/SCRAM client authentication. |

---

##### `Mtls`<sup>Optional</sup> <a name="Mtls" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthentication.property.mtls"></a>

```go
Mtls MskReplicatorKafkaClustersClientAuthenticationMtls
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtls">MskReplicatorKafkaClustersClientAuthenticationMtls</a>

Details for mTLS client authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#mtls MskReplicator#mtls}

---

##### `SaslScram`<sup>Optional</sup> <a name="SaslScram" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthentication.property.saslScram"></a>

```go
SaslScram MskReplicatorKafkaClustersClientAuthenticationSaslScram
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScram">MskReplicatorKafkaClustersClientAuthenticationSaslScram</a>

Details for SASL/SCRAM client authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#sasl_scram MskReplicator#sasl_scram}

---

### MskReplicatorKafkaClustersClientAuthenticationMtls <a name="MskReplicatorKafkaClustersClientAuthenticationMtls" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtls.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

&mskreplicator.MskReplicatorKafkaClustersClientAuthenticationMtls {
	SecretArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtls.property.secretArn">SecretArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the Secrets Manager secret. |

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtls.property.secretArn"></a>

```go
SecretArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the Secrets Manager secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#secret_arn MskReplicator#secret_arn}

---

### MskReplicatorKafkaClustersClientAuthenticationSaslScram <a name="MskReplicatorKafkaClustersClientAuthenticationSaslScram" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScram"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScram.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

&mskreplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScram {
	Mechanism: *string,
	SecretArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScram.property.mechanism">Mechanism</a></code> | <code>*string</code> | The SASL/SCRAM authentication mechanism. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScram.property.secretArn">SecretArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the Secrets Manager secret. |

---

##### `Mechanism`<sup>Optional</sup> <a name="Mechanism" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScram.property.mechanism"></a>

```go
Mechanism *string
```

- *Type:* *string

The SASL/SCRAM authentication mechanism.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#mechanism MskReplicator#mechanism}

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScram.property.secretArn"></a>

```go
SecretArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the Secrets Manager secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#secret_arn MskReplicator#secret_arn}

---

### MskReplicatorKafkaClustersEncryptionInTransit <a name="MskReplicatorKafkaClustersEncryptionInTransit" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransit.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

&mskreplicator.MskReplicatorKafkaClustersEncryptionInTransit {
	EncryptionType: *string,
	RootCaCertificate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransit.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | The type of encryption in transit to the Apache Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransit.property.rootCaCertificate">RootCaCertificate</a></code> | <code>*string</code> | The root CA certificate. |

---

##### `EncryptionType`<sup>Optional</sup> <a name="EncryptionType" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransit.property.encryptionType"></a>

```go
EncryptionType *string
```

- *Type:* *string

The type of encryption in transit to the Apache Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#encryption_type MskReplicator#encryption_type}

---

##### `RootCaCertificate`<sup>Optional</sup> <a name="RootCaCertificate" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransit.property.rootCaCertificate"></a>

```go
RootCaCertificate *string
```

- *Type:* *string

The root CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#root_ca_certificate MskReplicator#root_ca_certificate}

---

### MskReplicatorKafkaClustersVpcConfig <a name="MskReplicatorKafkaClustersVpcConfig" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

&mskreplicator.MskReplicatorKafkaClustersVpcConfig {
	SecurityGroupIds: *[]*string,
	SubnetIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | The AWS security groups to associate with the elastic network interfaces in order to specify what the replicator has access to. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfig.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | The list of subnets to connect to in the virtual private cloud (VPC). |

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfig.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

The AWS security groups to associate with the elastic network interfaces in order to specify what the replicator has access to.

If a security group is not specified, the default security group associated with the VPC is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#security_group_ids MskReplicator#security_group_ids}

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfig.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

The list of subnets to connect to in the virtual private cloud (VPC).

AWS creates elastic network interfaces inside these subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#subnet_ids MskReplicator#subnet_ids}

---

### MskReplicatorLogDelivery <a name="MskReplicatorLogDelivery" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDelivery.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

&mskreplicator.MskReplicatorLogDelivery {
	ReplicatorLogDelivery: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDelivery.property.replicatorLogDelivery">ReplicatorLogDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery">MskReplicatorLogDeliveryReplicatorLogDelivery</a></code> | The replicator logs configuration. |

---

##### `ReplicatorLogDelivery`<sup>Optional</sup> <a name="ReplicatorLogDelivery" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDelivery.property.replicatorLogDelivery"></a>

```go
ReplicatorLogDelivery MskReplicatorLogDeliveryReplicatorLogDelivery
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery">MskReplicatorLogDeliveryReplicatorLogDelivery</a>

The replicator logs configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#replicator_log_delivery MskReplicator#replicator_log_delivery}

---

### MskReplicatorLogDeliveryReplicatorLogDelivery <a name="MskReplicatorLogDeliveryReplicatorLogDelivery" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

&mskreplicator.MskReplicatorLogDeliveryReplicatorLogDelivery {
	CloudwatchLogs: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs,
	Firehose: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose,
	S3: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs">MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs</a></code> | Details of the CloudWatch Logs destination for replicator logs. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery.property.firehose">Firehose</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose">MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose</a></code> | Details of the Kinesis Data Firehose delivery stream that is the destination for replicator logs. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3">MskReplicatorLogDeliveryReplicatorLogDeliveryS3</a></code> | Details of the Amazon S3 destination for replicator logs. |

---

##### `CloudwatchLogs`<sup>Optional</sup> <a name="CloudwatchLogs" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery.property.cloudwatchLogs"></a>

```go
CloudwatchLogs MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs">MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs</a>

Details of the CloudWatch Logs destination for replicator logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#cloudwatch_logs MskReplicator#cloudwatch_logs}

---

##### `Firehose`<sup>Optional</sup> <a name="Firehose" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery.property.firehose"></a>

```go
Firehose MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose">MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose</a>

Details of the Kinesis Data Firehose delivery stream that is the destination for replicator logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#firehose MskReplicator#firehose}

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery.property.s3"></a>

```go
S3 MskReplicatorLogDeliveryReplicatorLogDeliveryS3
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3">MskReplicatorLogDeliveryReplicatorLogDeliveryS3</a>

Details of the Amazon S3 destination for replicator logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#s3 MskReplicator#s3}

---

### MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs <a name="MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

&mskreplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs {
	Enabled: interface{},
	LogGroup: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether log delivery to CloudWatch Logs is enabled. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs.property.logGroup">LogGroup</a></code> | <code>*string</code> | The CloudWatch log group that is the destination for log delivery. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether log delivery to CloudWatch Logs is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#enabled MskReplicator#enabled}

---

##### `LogGroup`<sup>Optional</sup> <a name="LogGroup" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs.property.logGroup"></a>

```go
LogGroup *string
```

- *Type:* *string

The CloudWatch log group that is the destination for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#log_group MskReplicator#log_group}

---

### MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose <a name="MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

&mskreplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose {
	DeliveryStream: *string,
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose.property.deliveryStream">DeliveryStream</a></code> | <code>*string</code> | The Firehose delivery stream that is the destination for log delivery. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether log delivery to Firehose is enabled. |

---

##### `DeliveryStream`<sup>Optional</sup> <a name="DeliveryStream" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose.property.deliveryStream"></a>

```go
DeliveryStream *string
```

- *Type:* *string

The Firehose delivery stream that is the destination for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#delivery_stream MskReplicator#delivery_stream}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether log delivery to Firehose is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#enabled MskReplicator#enabled}

---

### MskReplicatorLogDeliveryReplicatorLogDeliveryS3 <a name="MskReplicatorLogDeliveryReplicatorLogDeliveryS3" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

&mskreplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3 {
	Bucket: *string,
	Enabled: interface{},
	Prefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3.property.bucket">Bucket</a></code> | <code>*string</code> | The S3 bucket that is the destination for log delivery. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether log delivery to S3 is enabled. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3.property.prefix">Prefix</a></code> | <code>*string</code> | The S3 prefix that is the destination for log delivery. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

The S3 bucket that is the destination for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#bucket MskReplicator#bucket}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether log delivery to S3 is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#enabled MskReplicator#enabled}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

The S3 prefix that is the destination for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#prefix MskReplicator#prefix}

---

### MskReplicatorReplicationInfoListConsumerGroupReplication <a name="MskReplicatorReplicationInfoListConsumerGroupReplication" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

&mskreplicator.MskReplicatorReplicationInfoListConsumerGroupReplication {
	ConsumerGroupsToReplicate: *[]*string,
	ConsumerGroupOffsetSyncMode: *string,
	ConsumerGroupsToExclude: *[]*string,
	DetectAndCopyNewConsumerGroups: interface{},
	SynchroniseConsumerGroupOffsets: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.consumerGroupsToReplicate">ConsumerGroupsToReplicate</a></code> | <code>*[]*string</code> | List of regular expression patterns indicating the consumer groups to copy. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.consumerGroupOffsetSyncMode">ConsumerGroupOffsetSyncMode</a></code> | <code>*string</code> | The consumer group offset synchronization mode. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.consumerGroupsToExclude">ConsumerGroupsToExclude</a></code> | <code>*[]*string</code> | List of regular expression patterns indicating the consumer groups that should not be replicated. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.detectAndCopyNewConsumerGroups">DetectAndCopyNewConsumerGroups</a></code> | <code>interface{}</code> | Whether to periodically check for new consumer groups. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.synchroniseConsumerGroupOffsets">SynchroniseConsumerGroupOffsets</a></code> | <code>interface{}</code> | Whether to periodically write the translated offsets to __consumer_offsets topic in target cluster. |

---

##### `ConsumerGroupsToReplicate`<sup>Required</sup> <a name="ConsumerGroupsToReplicate" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.consumerGroupsToReplicate"></a>

```go
ConsumerGroupsToReplicate *[]*string
```

- *Type:* *[]*string

List of regular expression patterns indicating the consumer groups to copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#consumer_groups_to_replicate MskReplicator#consumer_groups_to_replicate}

---

##### `ConsumerGroupOffsetSyncMode`<sup>Optional</sup> <a name="ConsumerGroupOffsetSyncMode" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.consumerGroupOffsetSyncMode"></a>

```go
ConsumerGroupOffsetSyncMode *string
```

- *Type:* *string

The consumer group offset synchronization mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#consumer_group_offset_sync_mode MskReplicator#consumer_group_offset_sync_mode}

---

##### `ConsumerGroupsToExclude`<sup>Optional</sup> <a name="ConsumerGroupsToExclude" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.consumerGroupsToExclude"></a>

```go
ConsumerGroupsToExclude *[]*string
```

- *Type:* *[]*string

List of regular expression patterns indicating the consumer groups that should not be replicated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#consumer_groups_to_exclude MskReplicator#consumer_groups_to_exclude}

---

##### `DetectAndCopyNewConsumerGroups`<sup>Optional</sup> <a name="DetectAndCopyNewConsumerGroups" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.detectAndCopyNewConsumerGroups"></a>

```go
DetectAndCopyNewConsumerGroups interface{}
```

- *Type:* interface{}

Whether to periodically check for new consumer groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#detect_and_copy_new_consumer_groups MskReplicator#detect_and_copy_new_consumer_groups}

---

##### `SynchroniseConsumerGroupOffsets`<sup>Optional</sup> <a name="SynchroniseConsumerGroupOffsets" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.synchroniseConsumerGroupOffsets"></a>

```go
SynchroniseConsumerGroupOffsets interface{}
```

- *Type:* interface{}

Whether to periodically write the translated offsets to __consumer_offsets topic in target cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#synchronise_consumer_group_offsets MskReplicator#synchronise_consumer_group_offsets}

---

### MskReplicatorReplicationInfoListStruct <a name="MskReplicatorReplicationInfoListStruct" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

&mskreplicator.MskReplicatorReplicationInfoListStruct {
	ConsumerGroupReplication: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication,
	TargetCompressionType: *string,
	TopicReplication: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication,
	SourceKafkaClusterArn: *string,
	SourceKafkaClusterId: *string,
	TargetKafkaClusterArn: *string,
	TargetKafkaClusterId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.property.consumerGroupReplication">ConsumerGroupReplication</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a></code> | Configuration relating to consumer group replication. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.property.targetCompressionType">TargetCompressionType</a></code> | <code>*string</code> | The type of compression to use writing records to target Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.property.topicReplication">TopicReplication</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a></code> | Configuration relating to topic replication. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.property.sourceKafkaClusterArn">SourceKafkaClusterArn</a></code> | <code>*string</code> | Amazon Resource Name of the source Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.property.sourceKafkaClusterId">SourceKafkaClusterId</a></code> | <code>*string</code> | The ID of the source Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.property.targetKafkaClusterArn">TargetKafkaClusterArn</a></code> | <code>*string</code> | Amazon Resource Name of the target Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.property.targetKafkaClusterId">TargetKafkaClusterId</a></code> | <code>*string</code> | The ID of the target Kafka cluster. |

---

##### `ConsumerGroupReplication`<sup>Required</sup> <a name="ConsumerGroupReplication" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.property.consumerGroupReplication"></a>

```go
ConsumerGroupReplication MskReplicatorReplicationInfoListConsumerGroupReplication
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a>

Configuration relating to consumer group replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#consumer_group_replication MskReplicator#consumer_group_replication}

---

##### `TargetCompressionType`<sup>Required</sup> <a name="TargetCompressionType" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.property.targetCompressionType"></a>

```go
TargetCompressionType *string
```

- *Type:* *string

The type of compression to use writing records to target Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#target_compression_type MskReplicator#target_compression_type}

---

##### `TopicReplication`<sup>Required</sup> <a name="TopicReplication" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.property.topicReplication"></a>

```go
TopicReplication MskReplicatorReplicationInfoListTopicReplication
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a>

Configuration relating to topic replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#topic_replication MskReplicator#topic_replication}

---

##### `SourceKafkaClusterArn`<sup>Optional</sup> <a name="SourceKafkaClusterArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.property.sourceKafkaClusterArn"></a>

```go
SourceKafkaClusterArn *string
```

- *Type:* *string

Amazon Resource Name of the source Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#source_kafka_cluster_arn MskReplicator#source_kafka_cluster_arn}

---

##### `SourceKafkaClusterId`<sup>Optional</sup> <a name="SourceKafkaClusterId" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.property.sourceKafkaClusterId"></a>

```go
SourceKafkaClusterId *string
```

- *Type:* *string

The ID of the source Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#source_kafka_cluster_id MskReplicator#source_kafka_cluster_id}

---

##### `TargetKafkaClusterArn`<sup>Optional</sup> <a name="TargetKafkaClusterArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.property.targetKafkaClusterArn"></a>

```go
TargetKafkaClusterArn *string
```

- *Type:* *string

Amazon Resource Name of the target Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#target_kafka_cluster_arn MskReplicator#target_kafka_cluster_arn}

---

##### `TargetKafkaClusterId`<sup>Optional</sup> <a name="TargetKafkaClusterId" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStruct.property.targetKafkaClusterId"></a>

```go
TargetKafkaClusterId *string
```

- *Type:* *string

The ID of the target Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#target_kafka_cluster_id MskReplicator#target_kafka_cluster_id}

---

### MskReplicatorReplicationInfoListTopicReplication <a name="MskReplicatorReplicationInfoListTopicReplication" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

&mskreplicator.MskReplicatorReplicationInfoListTopicReplication {
	TopicsToReplicate: *[]*string,
	CopyAccessControlListsForTopics: interface{},
	CopyTopicConfigurations: interface{},
	DetectAndCopyNewTopics: interface{},
	StartingPosition: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition,
	TopicNameConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration,
	TopicsToExclude: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.topicsToReplicate">TopicsToReplicate</a></code> | <code>*[]*string</code> | List of regular expression patterns indicating the topics to copy. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.copyAccessControlListsForTopics">CopyAccessControlListsForTopics</a></code> | <code>interface{}</code> | Whether to periodically configure remote topic ACLs to match their corresponding upstream topics. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.copyTopicConfigurations">CopyTopicConfigurations</a></code> | <code>interface{}</code> | Whether to periodically configure remote topics to match their corresponding upstream topics. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.detectAndCopyNewTopics">DetectAndCopyNewTopics</a></code> | <code>interface{}</code> | Whether to periodically check for new topics and partitions. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.startingPosition">StartingPosition</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition">MskReplicatorReplicationInfoListTopicReplicationStartingPosition</a></code> | Configuration for specifying the position in the topics to start replicating from. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.topicNameConfiguration">TopicNameConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration">MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration</a></code> | Configuration for specifying replicated topic names should be the same as their corresponding upstream topics or prefixed with source cluster alias. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.topicsToExclude">TopicsToExclude</a></code> | <code>*[]*string</code> | List of regular expression patterns indicating the topics that should not be replicated. |

---

##### `TopicsToReplicate`<sup>Required</sup> <a name="TopicsToReplicate" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.topicsToReplicate"></a>

```go
TopicsToReplicate *[]*string
```

- *Type:* *[]*string

List of regular expression patterns indicating the topics to copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#topics_to_replicate MskReplicator#topics_to_replicate}

---

##### `CopyAccessControlListsForTopics`<sup>Optional</sup> <a name="CopyAccessControlListsForTopics" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.copyAccessControlListsForTopics"></a>

```go
CopyAccessControlListsForTopics interface{}
```

- *Type:* interface{}

Whether to periodically configure remote topic ACLs to match their corresponding upstream topics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#copy_access_control_lists_for_topics MskReplicator#copy_access_control_lists_for_topics}

---

##### `CopyTopicConfigurations`<sup>Optional</sup> <a name="CopyTopicConfigurations" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.copyTopicConfigurations"></a>

```go
CopyTopicConfigurations interface{}
```

- *Type:* interface{}

Whether to periodically configure remote topics to match their corresponding upstream topics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#copy_topic_configurations MskReplicator#copy_topic_configurations}

---

##### `DetectAndCopyNewTopics`<sup>Optional</sup> <a name="DetectAndCopyNewTopics" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.detectAndCopyNewTopics"></a>

```go
DetectAndCopyNewTopics interface{}
```

- *Type:* interface{}

Whether to periodically check for new topics and partitions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#detect_and_copy_new_topics MskReplicator#detect_and_copy_new_topics}

---

##### `StartingPosition`<sup>Optional</sup> <a name="StartingPosition" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.startingPosition"></a>

```go
StartingPosition MskReplicatorReplicationInfoListTopicReplicationStartingPosition
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition">MskReplicatorReplicationInfoListTopicReplicationStartingPosition</a>

Configuration for specifying the position in the topics to start replicating from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#starting_position MskReplicator#starting_position}

---

##### `TopicNameConfiguration`<sup>Optional</sup> <a name="TopicNameConfiguration" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.topicNameConfiguration"></a>

```go
TopicNameConfiguration MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration">MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration</a>

Configuration for specifying replicated topic names should be the same as their corresponding upstream topics or prefixed with source cluster alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#topic_name_configuration MskReplicator#topic_name_configuration}

---

##### `TopicsToExclude`<sup>Optional</sup> <a name="TopicsToExclude" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.topicsToExclude"></a>

```go
TopicsToExclude *[]*string
```

- *Type:* *[]*string

List of regular expression patterns indicating the topics that should not be replicated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#topics_to_exclude MskReplicator#topics_to_exclude}

---

### MskReplicatorReplicationInfoListTopicReplicationStartingPosition <a name="MskReplicatorReplicationInfoListTopicReplicationStartingPosition" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

&mskreplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition.property.type">Type</a></code> | <code>*string</code> | The type of replication starting position. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of replication starting position.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#type MskReplicator#type}

---

### MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration <a name="MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

&mskreplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration.property.type">Type</a></code> | <code>*string</code> | The type of replicated topic name. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of replicated topic name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#type MskReplicator#type}

---

### MskReplicatorTags <a name="MskReplicatorTags" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

&mskreplicator.MskReplicatorTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#key MskReplicator#key}. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#value MskReplicator#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#key MskReplicator#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_replicator#value MskReplicator#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MskReplicatorKafkaClustersAmazonMskClusterOutputReference <a name="MskReplicatorKafkaClustersAmazonMskClusterOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

mskreplicator.NewMskReplicatorKafkaClustersAmazonMskClusterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskReplicatorKafkaClustersAmazonMskClusterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.resetMskClusterArn">ResetMskClusterArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMskClusterArn` <a name="ResetMskClusterArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.resetMskClusterArn"></a>

```go
func ResetMskClusterArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.property.mskClusterArnInput">MskClusterArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.property.mskClusterArn">MskClusterArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MskClusterArnInput`<sup>Optional</sup> <a name="MskClusterArnInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.property.mskClusterArnInput"></a>

```go
func MskClusterArnInput() *string
```

- *Type:* *string

---

##### `MskClusterArn`<sup>Required</sup> <a name="MskClusterArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.property.mskClusterArn"></a>

```go
func MskClusterArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskReplicatorKafkaClustersApacheKafkaClusterOutputReference <a name="MskReplicatorKafkaClustersApacheKafkaClusterOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

mskreplicator.NewMskReplicatorKafkaClustersApacheKafkaClusterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskReplicatorKafkaClustersApacheKafkaClusterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.resetApacheKafkaClusterId">ResetApacheKafkaClusterId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.resetBootstrapBrokerString">ResetBootstrapBrokerString</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApacheKafkaClusterId` <a name="ResetApacheKafkaClusterId" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.resetApacheKafkaClusterId"></a>

```go
func ResetApacheKafkaClusterId()
```

##### `ResetBootstrapBrokerString` <a name="ResetBootstrapBrokerString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.resetBootstrapBrokerString"></a>

```go
func ResetBootstrapBrokerString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.apacheKafkaClusterIdInput">ApacheKafkaClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.bootstrapBrokerStringInput">BootstrapBrokerStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.apacheKafkaClusterId">ApacheKafkaClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.bootstrapBrokerString">BootstrapBrokerString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApacheKafkaClusterIdInput`<sup>Optional</sup> <a name="ApacheKafkaClusterIdInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.apacheKafkaClusterIdInput"></a>

```go
func ApacheKafkaClusterIdInput() *string
```

- *Type:* *string

---

##### `BootstrapBrokerStringInput`<sup>Optional</sup> <a name="BootstrapBrokerStringInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.bootstrapBrokerStringInput"></a>

```go
func BootstrapBrokerStringInput() *string
```

- *Type:* *string

---

##### `ApacheKafkaClusterId`<sup>Required</sup> <a name="ApacheKafkaClusterId" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.apacheKafkaClusterId"></a>

```go
func ApacheKafkaClusterId() *string
```

- *Type:* *string

---

##### `BootstrapBrokerString`<sup>Required</sup> <a name="BootstrapBrokerString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.bootstrapBrokerString"></a>

```go
func BootstrapBrokerString() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference <a name="MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

mskreplicator.NewMskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.resetSecretArn"></a>

```go
func ResetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.property.secretArnInput"></a>

```go
func SecretArnInput() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskReplicatorKafkaClustersClientAuthenticationOutputReference <a name="MskReplicatorKafkaClustersClientAuthenticationOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

mskreplicator.NewMskReplicatorKafkaClustersClientAuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskReplicatorKafkaClustersClientAuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.putMtls">PutMtls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.putSaslScram">PutSaslScram</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.resetMtls">ResetMtls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.resetSaslScram">ResetSaslScram</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMtls` <a name="PutMtls" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.putMtls"></a>

```go
func PutMtls(value MskReplicatorKafkaClustersClientAuthenticationMtls)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.putMtls.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtls">MskReplicatorKafkaClustersClientAuthenticationMtls</a>

---

##### `PutSaslScram` <a name="PutSaslScram" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.putSaslScram"></a>

```go
func PutSaslScram(value MskReplicatorKafkaClustersClientAuthenticationSaslScram)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.putSaslScram.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScram">MskReplicatorKafkaClustersClientAuthenticationSaslScram</a>

---

##### `ResetMtls` <a name="ResetMtls" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.resetMtls"></a>

```go
func ResetMtls()
```

##### `ResetSaslScram` <a name="ResetSaslScram" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.resetSaslScram"></a>

```go
func ResetSaslScram()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.property.mtls">Mtls</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference">MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.property.saslScram">SaslScram</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference">MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.property.mtlsInput">MtlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.property.saslScramInput">SaslScramInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Mtls`<sup>Required</sup> <a name="Mtls" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.property.mtls"></a>

```go
func Mtls() MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference">MskReplicatorKafkaClustersClientAuthenticationMtlsOutputReference</a>

---

##### `SaslScram`<sup>Required</sup> <a name="SaslScram" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.property.saslScram"></a>

```go
func SaslScram() MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference">MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference</a>

---

##### `MtlsInput`<sup>Optional</sup> <a name="MtlsInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.property.mtlsInput"></a>

```go
func MtlsInput() interface{}
```

- *Type:* interface{}

---

##### `SaslScramInput`<sup>Optional</sup> <a name="SaslScramInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.property.saslScramInput"></a>

```go
func SaslScramInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference <a name="MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

mskreplicator.NewMskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.resetMechanism">ResetMechanism</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMechanism` <a name="ResetMechanism" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.resetMechanism"></a>

```go
func ResetMechanism()
```

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.resetSecretArn"></a>

```go
func ResetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.mechanismInput">MechanismInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.mechanism">Mechanism</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MechanismInput`<sup>Optional</sup> <a name="MechanismInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.mechanismInput"></a>

```go
func MechanismInput() *string
```

- *Type:* *string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.secretArnInput"></a>

```go
func SecretArnInput() *string
```

- *Type:* *string

---

##### `Mechanism`<sup>Required</sup> <a name="Mechanism" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.mechanism"></a>

```go
func Mechanism() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationSaslScramOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskReplicatorKafkaClustersEncryptionInTransitOutputReference <a name="MskReplicatorKafkaClustersEncryptionInTransitOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

mskreplicator.NewMskReplicatorKafkaClustersEncryptionInTransitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskReplicatorKafkaClustersEncryptionInTransitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.resetEncryptionType">ResetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.resetRootCaCertificate">ResetRootCaCertificate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncryptionType` <a name="ResetEncryptionType" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.resetEncryptionType"></a>

```go
func ResetEncryptionType()
```

##### `ResetRootCaCertificate` <a name="ResetRootCaCertificate" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.resetRootCaCertificate"></a>

```go
func ResetRootCaCertificate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.encryptionTypeInput">EncryptionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.rootCaCertificateInput">RootCaCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.rootCaCertificate">RootCaCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionTypeInput`<sup>Optional</sup> <a name="EncryptionTypeInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.encryptionTypeInput"></a>

```go
func EncryptionTypeInput() *string
```

- *Type:* *string

---

##### `RootCaCertificateInput`<sup>Optional</sup> <a name="RootCaCertificateInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.rootCaCertificateInput"></a>

```go
func RootCaCertificateInput() *string
```

- *Type:* *string

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.encryptionType"></a>

```go
func EncryptionType() *string
```

- *Type:* *string

---

##### `RootCaCertificate`<sup>Required</sup> <a name="RootCaCertificate" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.rootCaCertificate"></a>

```go
func RootCaCertificate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskReplicatorKafkaClustersList <a name="MskReplicatorKafkaClustersList" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

mskreplicator.NewMskReplicatorKafkaClustersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MskReplicatorKafkaClustersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.get"></a>

```go
func Get(index *f64) MskReplicatorKafkaClustersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskReplicatorKafkaClustersOutputReference <a name="MskReplicatorKafkaClustersOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

mskreplicator.NewMskReplicatorKafkaClustersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MskReplicatorKafkaClustersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putAmazonMskCluster">PutAmazonMskCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putApacheKafkaCluster">PutApacheKafkaCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putClientAuthentication">PutClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putEncryptionInTransit">PutEncryptionInTransit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putVpcConfig">PutVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.resetAmazonMskCluster">ResetAmazonMskCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.resetApacheKafkaCluster">ResetApacheKafkaCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.resetClientAuthentication">ResetClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.resetEncryptionInTransit">ResetEncryptionInTransit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.resetVpcConfig">ResetVpcConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAmazonMskCluster` <a name="PutAmazonMskCluster" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putAmazonMskCluster"></a>

```go
func PutAmazonMskCluster(value MskReplicatorKafkaClustersAmazonMskCluster)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putAmazonMskCluster.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskCluster">MskReplicatorKafkaClustersAmazonMskCluster</a>

---

##### `PutApacheKafkaCluster` <a name="PutApacheKafkaCluster" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putApacheKafkaCluster"></a>

```go
func PutApacheKafkaCluster(value MskReplicatorKafkaClustersApacheKafkaCluster)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putApacheKafkaCluster.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaCluster">MskReplicatorKafkaClustersApacheKafkaCluster</a>

---

##### `PutClientAuthentication` <a name="PutClientAuthentication" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putClientAuthentication"></a>

```go
func PutClientAuthentication(value MskReplicatorKafkaClustersClientAuthentication)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putClientAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthentication">MskReplicatorKafkaClustersClientAuthentication</a>

---

##### `PutEncryptionInTransit` <a name="PutEncryptionInTransit" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putEncryptionInTransit"></a>

```go
func PutEncryptionInTransit(value MskReplicatorKafkaClustersEncryptionInTransit)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putEncryptionInTransit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransit">MskReplicatorKafkaClustersEncryptionInTransit</a>

---

##### `PutVpcConfig` <a name="PutVpcConfig" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putVpcConfig"></a>

```go
func PutVpcConfig(value MskReplicatorKafkaClustersVpcConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfig">MskReplicatorKafkaClustersVpcConfig</a>

---

##### `ResetAmazonMskCluster` <a name="ResetAmazonMskCluster" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.resetAmazonMskCluster"></a>

```go
func ResetAmazonMskCluster()
```

##### `ResetApacheKafkaCluster` <a name="ResetApacheKafkaCluster" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.resetApacheKafkaCluster"></a>

```go
func ResetApacheKafkaCluster()
```

##### `ResetClientAuthentication` <a name="ResetClientAuthentication" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.resetClientAuthentication"></a>

```go
func ResetClientAuthentication()
```

##### `ResetEncryptionInTransit` <a name="ResetEncryptionInTransit" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.resetEncryptionInTransit"></a>

```go
func ResetEncryptionInTransit()
```

##### `ResetVpcConfig` <a name="ResetVpcConfig" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.resetVpcConfig"></a>

```go
func ResetVpcConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.amazonMskCluster">AmazonMskCluster</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference">MskReplicatorKafkaClustersAmazonMskClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.apacheKafkaCluster">ApacheKafkaCluster</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference">MskReplicatorKafkaClustersApacheKafkaClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.clientAuthentication">ClientAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference">MskReplicatorKafkaClustersClientAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.encryptionInTransit">EncryptionInTransit</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference">MskReplicatorKafkaClustersEncryptionInTransitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference">MskReplicatorKafkaClustersVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.amazonMskClusterInput">AmazonMskClusterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.apacheKafkaClusterInput">ApacheKafkaClusterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.clientAuthenticationInput">ClientAuthenticationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.encryptionInTransitInput">EncryptionInTransitInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.vpcConfigInput">VpcConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AmazonMskCluster`<sup>Required</sup> <a name="AmazonMskCluster" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.amazonMskCluster"></a>

```go
func AmazonMskCluster() MskReplicatorKafkaClustersAmazonMskClusterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersAmazonMskClusterOutputReference">MskReplicatorKafkaClustersAmazonMskClusterOutputReference</a>

---

##### `ApacheKafkaCluster`<sup>Required</sup> <a name="ApacheKafkaCluster" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.apacheKafkaCluster"></a>

```go
func ApacheKafkaCluster() MskReplicatorKafkaClustersApacheKafkaClusterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersApacheKafkaClusterOutputReference">MskReplicatorKafkaClustersApacheKafkaClusterOutputReference</a>

---

##### `ClientAuthentication`<sup>Required</sup> <a name="ClientAuthentication" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.clientAuthentication"></a>

```go
func ClientAuthentication() MskReplicatorKafkaClustersClientAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersClientAuthenticationOutputReference">MskReplicatorKafkaClustersClientAuthenticationOutputReference</a>

---

##### `EncryptionInTransit`<sup>Required</sup> <a name="EncryptionInTransit" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.encryptionInTransit"></a>

```go
func EncryptionInTransit() MskReplicatorKafkaClustersEncryptionInTransitOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersEncryptionInTransitOutputReference">MskReplicatorKafkaClustersEncryptionInTransitOutputReference</a>

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.vpcConfig"></a>

```go
func VpcConfig() MskReplicatorKafkaClustersVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference">MskReplicatorKafkaClustersVpcConfigOutputReference</a>

---

##### `AmazonMskClusterInput`<sup>Optional</sup> <a name="AmazonMskClusterInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.amazonMskClusterInput"></a>

```go
func AmazonMskClusterInput() interface{}
```

- *Type:* interface{}

---

##### `ApacheKafkaClusterInput`<sup>Optional</sup> <a name="ApacheKafkaClusterInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.apacheKafkaClusterInput"></a>

```go
func ApacheKafkaClusterInput() interface{}
```

- *Type:* interface{}

---

##### `ClientAuthenticationInput`<sup>Optional</sup> <a name="ClientAuthenticationInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.clientAuthenticationInput"></a>

```go
func ClientAuthenticationInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptionInTransitInput`<sup>Optional</sup> <a name="EncryptionInTransitInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.encryptionInTransitInput"></a>

```go
func EncryptionInTransitInput() interface{}
```

- *Type:* interface{}

---

##### `VpcConfigInput`<sup>Optional</sup> <a name="VpcConfigInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.vpcConfigInput"></a>

```go
func VpcConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskReplicatorKafkaClustersVpcConfigOutputReference <a name="MskReplicatorKafkaClustersVpcConfigOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

mskreplicator.NewMskReplicatorKafkaClustersVpcConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskReplicatorKafkaClustersVpcConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.resetSubnetIds"></a>

```go
func ResetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorKafkaClustersVpcConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskReplicatorLogDeliveryOutputReference <a name="MskReplicatorLogDeliveryOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

mskreplicator.NewMskReplicatorLogDeliveryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskReplicatorLogDeliveryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.putReplicatorLogDelivery">PutReplicatorLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.resetReplicatorLogDelivery">ResetReplicatorLogDelivery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutReplicatorLogDelivery` <a name="PutReplicatorLogDelivery" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.putReplicatorLogDelivery"></a>

```go
func PutReplicatorLogDelivery(value MskReplicatorLogDeliveryReplicatorLogDelivery)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.putReplicatorLogDelivery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDelivery">MskReplicatorLogDeliveryReplicatorLogDelivery</a>

---

##### `ResetReplicatorLogDelivery` <a name="ResetReplicatorLogDelivery" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.resetReplicatorLogDelivery"></a>

```go
func ResetReplicatorLogDelivery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.replicatorLogDelivery">ReplicatorLogDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference">MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.replicatorLogDeliveryInput">ReplicatorLogDeliveryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReplicatorLogDelivery`<sup>Required</sup> <a name="ReplicatorLogDelivery" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.replicatorLogDelivery"></a>

```go
func ReplicatorLogDelivery() MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference">MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference</a>

---

##### `ReplicatorLogDeliveryInput`<sup>Optional</sup> <a name="ReplicatorLogDeliveryInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.replicatorLogDeliveryInput"></a>

```go
func ReplicatorLogDeliveryInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference <a name="MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

mskreplicator.NewMskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.resetLogGroup">ResetLogGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetLogGroup` <a name="ResetLogGroup" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.resetLogGroup"></a>

```go
func ResetLogGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.logGroupInput">LogGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.logGroup">LogGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LogGroupInput`<sup>Optional</sup> <a name="LogGroupInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.logGroupInput"></a>

```go
func LogGroupInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.logGroup"></a>

```go
func LogGroup() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference <a name="MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

mskreplicator.NewMskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.resetDeliveryStream">ResetDeliveryStream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeliveryStream` <a name="ResetDeliveryStream" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.resetDeliveryStream"></a>

```go
func ResetDeliveryStream()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.deliveryStreamInput">DeliveryStreamInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.deliveryStream">DeliveryStream</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeliveryStreamInput`<sup>Optional</sup> <a name="DeliveryStreamInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.deliveryStreamInput"></a>

```go
func DeliveryStreamInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DeliveryStream`<sup>Required</sup> <a name="DeliveryStream" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.deliveryStream"></a>

```go
func DeliveryStream() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference <a name="MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

mskreplicator.NewMskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putCloudwatchLogs">PutCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putFirehose">PutFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resetCloudwatchLogs">ResetCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resetFirehose">ResetFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resetS3">ResetS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchLogs` <a name="PutCloudwatchLogs" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putCloudwatchLogs"></a>

```go
func PutCloudwatchLogs(value MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs">MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogs</a>

---

##### `PutFirehose` <a name="PutFirehose" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putFirehose"></a>

```go
func PutFirehose(value MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putFirehose.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose">MskReplicatorLogDeliveryReplicatorLogDeliveryFirehose</a>

---

##### `PutS3` <a name="PutS3" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putS3"></a>

```go
func PutS3(value MskReplicatorLogDeliveryReplicatorLogDeliveryS3)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3">MskReplicatorLogDeliveryReplicatorLogDeliveryS3</a>

---

##### `ResetCloudwatchLogs` <a name="ResetCloudwatchLogs" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resetCloudwatchLogs"></a>

```go
func ResetCloudwatchLogs()
```

##### `ResetFirehose` <a name="ResetFirehose" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resetFirehose"></a>

```go
func ResetFirehose()
```

##### `ResetS3` <a name="ResetS3" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.resetS3"></a>

```go
func ResetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference">MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.firehose">Firehose</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference">MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference">MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.cloudwatchLogsInput">CloudwatchLogsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.firehoseInput">FirehoseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.s3Input">S3Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchLogs`<sup>Required</sup> <a name="CloudwatchLogs" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.cloudwatchLogs"></a>

```go
func CloudwatchLogs() MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference">MskReplicatorLogDeliveryReplicatorLogDeliveryCloudwatchLogsOutputReference</a>

---

##### `Firehose`<sup>Required</sup> <a name="Firehose" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.firehose"></a>

```go
func Firehose() MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference">MskReplicatorLogDeliveryReplicatorLogDeliveryFirehoseOutputReference</a>

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.s3"></a>

```go
func S3() MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference">MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference</a>

---

##### `CloudwatchLogsInput`<sup>Optional</sup> <a name="CloudwatchLogsInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.cloudwatchLogsInput"></a>

```go
func CloudwatchLogsInput() interface{}
```

- *Type:* interface{}

---

##### `FirehoseInput`<sup>Optional</sup> <a name="FirehoseInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.firehoseInput"></a>

```go
func FirehoseInput() interface{}
```

- *Type:* interface{}

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.s3Input"></a>

```go
func S3Input() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference <a name="MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

mskreplicator.NewMskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.resetBucket"></a>

```go
func ResetBucket()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorLogDeliveryReplicatorLogDeliveryS3OutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference <a name="MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

mskreplicator.NewMskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resetConsumerGroupOffsetSyncMode">ResetConsumerGroupOffsetSyncMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resetConsumerGroupsToExclude">ResetConsumerGroupsToExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resetDetectAndCopyNewConsumerGroups">ResetDetectAndCopyNewConsumerGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resetSynchroniseConsumerGroupOffsets">ResetSynchroniseConsumerGroupOffsets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConsumerGroupOffsetSyncMode` <a name="ResetConsumerGroupOffsetSyncMode" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resetConsumerGroupOffsetSyncMode"></a>

```go
func ResetConsumerGroupOffsetSyncMode()
```

##### `ResetConsumerGroupsToExclude` <a name="ResetConsumerGroupsToExclude" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resetConsumerGroupsToExclude"></a>

```go
func ResetConsumerGroupsToExclude()
```

##### `ResetDetectAndCopyNewConsumerGroups` <a name="ResetDetectAndCopyNewConsumerGroups" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resetDetectAndCopyNewConsumerGroups"></a>

```go
func ResetDetectAndCopyNewConsumerGroups()
```

##### `ResetSynchroniseConsumerGroupOffsets` <a name="ResetSynchroniseConsumerGroupOffsets" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resetSynchroniseConsumerGroupOffsets"></a>

```go
func ResetSynchroniseConsumerGroupOffsets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupOffsetSyncModeInput">ConsumerGroupOffsetSyncModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToExcludeInput">ConsumerGroupsToExcludeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToReplicateInput">ConsumerGroupsToReplicateInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.detectAndCopyNewConsumerGroupsInput">DetectAndCopyNewConsumerGroupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.synchroniseConsumerGroupOffsetsInput">SynchroniseConsumerGroupOffsetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupOffsetSyncMode">ConsumerGroupOffsetSyncMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToExclude">ConsumerGroupsToExclude</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToReplicate">ConsumerGroupsToReplicate</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.detectAndCopyNewConsumerGroups">DetectAndCopyNewConsumerGroups</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.synchroniseConsumerGroupOffsets">SynchroniseConsumerGroupOffsets</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConsumerGroupOffsetSyncModeInput`<sup>Optional</sup> <a name="ConsumerGroupOffsetSyncModeInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupOffsetSyncModeInput"></a>

```go
func ConsumerGroupOffsetSyncModeInput() *string
```

- *Type:* *string

---

##### `ConsumerGroupsToExcludeInput`<sup>Optional</sup> <a name="ConsumerGroupsToExcludeInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToExcludeInput"></a>

```go
func ConsumerGroupsToExcludeInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConsumerGroupsToReplicateInput`<sup>Optional</sup> <a name="ConsumerGroupsToReplicateInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToReplicateInput"></a>

```go
func ConsumerGroupsToReplicateInput() *[]*string
```

- *Type:* *[]*string

---

##### `DetectAndCopyNewConsumerGroupsInput`<sup>Optional</sup> <a name="DetectAndCopyNewConsumerGroupsInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.detectAndCopyNewConsumerGroupsInput"></a>

```go
func DetectAndCopyNewConsumerGroupsInput() interface{}
```

- *Type:* interface{}

---

##### `SynchroniseConsumerGroupOffsetsInput`<sup>Optional</sup> <a name="SynchroniseConsumerGroupOffsetsInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.synchroniseConsumerGroupOffsetsInput"></a>

```go
func SynchroniseConsumerGroupOffsetsInput() interface{}
```

- *Type:* interface{}

---

##### `ConsumerGroupOffsetSyncMode`<sup>Required</sup> <a name="ConsumerGroupOffsetSyncMode" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupOffsetSyncMode"></a>

```go
func ConsumerGroupOffsetSyncMode() *string
```

- *Type:* *string

---

##### `ConsumerGroupsToExclude`<sup>Required</sup> <a name="ConsumerGroupsToExclude" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToExclude"></a>

```go
func ConsumerGroupsToExclude() *[]*string
```

- *Type:* *[]*string

---

##### `ConsumerGroupsToReplicate`<sup>Required</sup> <a name="ConsumerGroupsToReplicate" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToReplicate"></a>

```go
func ConsumerGroupsToReplicate() *[]*string
```

- *Type:* *[]*string

---

##### `DetectAndCopyNewConsumerGroups`<sup>Required</sup> <a name="DetectAndCopyNewConsumerGroups" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.detectAndCopyNewConsumerGroups"></a>

```go
func DetectAndCopyNewConsumerGroups() interface{}
```

- *Type:* interface{}

---

##### `SynchroniseConsumerGroupOffsets`<sup>Required</sup> <a name="SynchroniseConsumerGroupOffsets" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.synchroniseConsumerGroupOffsets"></a>

```go
func SynchroniseConsumerGroupOffsets() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskReplicatorReplicationInfoListStructList <a name="MskReplicatorReplicationInfoListStructList" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

mskreplicator.NewMskReplicatorReplicationInfoListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MskReplicatorReplicationInfoListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.get"></a>

```go
func Get(index *f64) MskReplicatorReplicationInfoListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskReplicatorReplicationInfoListStructOutputReference <a name="MskReplicatorReplicationInfoListStructOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

mskreplicator.NewMskReplicatorReplicationInfoListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MskReplicatorReplicationInfoListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.putConsumerGroupReplication">PutConsumerGroupReplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.putTopicReplication">PutTopicReplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.resetSourceKafkaClusterArn">ResetSourceKafkaClusterArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.resetSourceKafkaClusterId">ResetSourceKafkaClusterId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.resetTargetKafkaClusterArn">ResetTargetKafkaClusterArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.resetTargetKafkaClusterId">ResetTargetKafkaClusterId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConsumerGroupReplication` <a name="PutConsumerGroupReplication" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.putConsumerGroupReplication"></a>

```go
func PutConsumerGroupReplication(value MskReplicatorReplicationInfoListConsumerGroupReplication)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.putConsumerGroupReplication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a>

---

##### `PutTopicReplication` <a name="PutTopicReplication" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.putTopicReplication"></a>

```go
func PutTopicReplication(value MskReplicatorReplicationInfoListTopicReplication)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.putTopicReplication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a>

---

##### `ResetSourceKafkaClusterArn` <a name="ResetSourceKafkaClusterArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.resetSourceKafkaClusterArn"></a>

```go
func ResetSourceKafkaClusterArn()
```

##### `ResetSourceKafkaClusterId` <a name="ResetSourceKafkaClusterId" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.resetSourceKafkaClusterId"></a>

```go
func ResetSourceKafkaClusterId()
```

##### `ResetTargetKafkaClusterArn` <a name="ResetTargetKafkaClusterArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.resetTargetKafkaClusterArn"></a>

```go
func ResetTargetKafkaClusterArn()
```

##### `ResetTargetKafkaClusterId` <a name="ResetTargetKafkaClusterId" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.resetTargetKafkaClusterId"></a>

```go
func ResetTargetKafkaClusterId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.consumerGroupReplication">ConsumerGroupReplication</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference">MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.topicReplication">TopicReplication</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference">MskReplicatorReplicationInfoListTopicReplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.consumerGroupReplicationInput">ConsumerGroupReplicationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterArnInput">SourceKafkaClusterArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterIdInput">SourceKafkaClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetCompressionTypeInput">TargetCompressionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterArnInput">TargetKafkaClusterArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterIdInput">TargetKafkaClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.topicReplicationInput">TopicReplicationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterArn">SourceKafkaClusterArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterId">SourceKafkaClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetCompressionType">TargetCompressionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterArn">TargetKafkaClusterArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterId">TargetKafkaClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConsumerGroupReplication`<sup>Required</sup> <a name="ConsumerGroupReplication" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.consumerGroupReplication"></a>

```go
func ConsumerGroupReplication() MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference">MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference</a>

---

##### `TopicReplication`<sup>Required</sup> <a name="TopicReplication" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.topicReplication"></a>

```go
func TopicReplication() MskReplicatorReplicationInfoListTopicReplicationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference">MskReplicatorReplicationInfoListTopicReplicationOutputReference</a>

---

##### `ConsumerGroupReplicationInput`<sup>Optional</sup> <a name="ConsumerGroupReplicationInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.consumerGroupReplicationInput"></a>

```go
func ConsumerGroupReplicationInput() interface{}
```

- *Type:* interface{}

---

##### `SourceKafkaClusterArnInput`<sup>Optional</sup> <a name="SourceKafkaClusterArnInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterArnInput"></a>

```go
func SourceKafkaClusterArnInput() *string
```

- *Type:* *string

---

##### `SourceKafkaClusterIdInput`<sup>Optional</sup> <a name="SourceKafkaClusterIdInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterIdInput"></a>

```go
func SourceKafkaClusterIdInput() *string
```

- *Type:* *string

---

##### `TargetCompressionTypeInput`<sup>Optional</sup> <a name="TargetCompressionTypeInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetCompressionTypeInput"></a>

```go
func TargetCompressionTypeInput() *string
```

- *Type:* *string

---

##### `TargetKafkaClusterArnInput`<sup>Optional</sup> <a name="TargetKafkaClusterArnInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterArnInput"></a>

```go
func TargetKafkaClusterArnInput() *string
```

- *Type:* *string

---

##### `TargetKafkaClusterIdInput`<sup>Optional</sup> <a name="TargetKafkaClusterIdInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterIdInput"></a>

```go
func TargetKafkaClusterIdInput() *string
```

- *Type:* *string

---

##### `TopicReplicationInput`<sup>Optional</sup> <a name="TopicReplicationInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.topicReplicationInput"></a>

```go
func TopicReplicationInput() interface{}
```

- *Type:* interface{}

---

##### `SourceKafkaClusterArn`<sup>Required</sup> <a name="SourceKafkaClusterArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterArn"></a>

```go
func SourceKafkaClusterArn() *string
```

- *Type:* *string

---

##### `SourceKafkaClusterId`<sup>Required</sup> <a name="SourceKafkaClusterId" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterId"></a>

```go
func SourceKafkaClusterId() *string
```

- *Type:* *string

---

##### `TargetCompressionType`<sup>Required</sup> <a name="TargetCompressionType" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetCompressionType"></a>

```go
func TargetCompressionType() *string
```

- *Type:* *string

---

##### `TargetKafkaClusterArn`<sup>Required</sup> <a name="TargetKafkaClusterArn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterArn"></a>

```go
func TargetKafkaClusterArn() *string
```

- *Type:* *string

---

##### `TargetKafkaClusterId`<sup>Required</sup> <a name="TargetKafkaClusterId" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterId"></a>

```go
func TargetKafkaClusterId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskReplicatorReplicationInfoListTopicReplicationOutputReference <a name="MskReplicatorReplicationInfoListTopicReplicationOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

mskreplicator.NewMskReplicatorReplicationInfoListTopicReplicationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskReplicatorReplicationInfoListTopicReplicationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.putStartingPosition">PutStartingPosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.putTopicNameConfiguration">PutTopicNameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetCopyAccessControlListsForTopics">ResetCopyAccessControlListsForTopics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetCopyTopicConfigurations">ResetCopyTopicConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetDetectAndCopyNewTopics">ResetDetectAndCopyNewTopics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetStartingPosition">ResetStartingPosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetTopicNameConfiguration">ResetTopicNameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetTopicsToExclude">ResetTopicsToExclude</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStartingPosition` <a name="PutStartingPosition" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.putStartingPosition"></a>

```go
func PutStartingPosition(value MskReplicatorReplicationInfoListTopicReplicationStartingPosition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.putStartingPosition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPosition">MskReplicatorReplicationInfoListTopicReplicationStartingPosition</a>

---

##### `PutTopicNameConfiguration` <a name="PutTopicNameConfiguration" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.putTopicNameConfiguration"></a>

```go
func PutTopicNameConfiguration(value MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.putTopicNameConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration">MskReplicatorReplicationInfoListTopicReplicationTopicNameConfiguration</a>

---

##### `ResetCopyAccessControlListsForTopics` <a name="ResetCopyAccessControlListsForTopics" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetCopyAccessControlListsForTopics"></a>

```go
func ResetCopyAccessControlListsForTopics()
```

##### `ResetCopyTopicConfigurations` <a name="ResetCopyTopicConfigurations" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetCopyTopicConfigurations"></a>

```go
func ResetCopyTopicConfigurations()
```

##### `ResetDetectAndCopyNewTopics` <a name="ResetDetectAndCopyNewTopics" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetDetectAndCopyNewTopics"></a>

```go
func ResetDetectAndCopyNewTopics()
```

##### `ResetStartingPosition` <a name="ResetStartingPosition" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetStartingPosition"></a>

```go
func ResetStartingPosition()
```

##### `ResetTopicNameConfiguration` <a name="ResetTopicNameConfiguration" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetTopicNameConfiguration"></a>

```go
func ResetTopicNameConfiguration()
```

##### `ResetTopicsToExclude` <a name="ResetTopicsToExclude" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetTopicsToExclude"></a>

```go
func ResetTopicsToExclude()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.startingPosition">StartingPosition</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference">MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicNameConfiguration">TopicNameConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference">MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyAccessControlListsForTopicsInput">CopyAccessControlListsForTopicsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyTopicConfigurationsInput">CopyTopicConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.detectAndCopyNewTopicsInput">DetectAndCopyNewTopicsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.startingPositionInput">StartingPositionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicNameConfigurationInput">TopicNameConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToExcludeInput">TopicsToExcludeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToReplicateInput">TopicsToReplicateInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyAccessControlListsForTopics">CopyAccessControlListsForTopics</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyTopicConfigurations">CopyTopicConfigurations</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.detectAndCopyNewTopics">DetectAndCopyNewTopics</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToExclude">TopicsToExclude</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToReplicate">TopicsToReplicate</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StartingPosition`<sup>Required</sup> <a name="StartingPosition" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.startingPosition"></a>

```go
func StartingPosition() MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference">MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference</a>

---

##### `TopicNameConfiguration`<sup>Required</sup> <a name="TopicNameConfiguration" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicNameConfiguration"></a>

```go
func TopicNameConfiguration() MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference">MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference</a>

---

##### `CopyAccessControlListsForTopicsInput`<sup>Optional</sup> <a name="CopyAccessControlListsForTopicsInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyAccessControlListsForTopicsInput"></a>

```go
func CopyAccessControlListsForTopicsInput() interface{}
```

- *Type:* interface{}

---

##### `CopyTopicConfigurationsInput`<sup>Optional</sup> <a name="CopyTopicConfigurationsInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyTopicConfigurationsInput"></a>

```go
func CopyTopicConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `DetectAndCopyNewTopicsInput`<sup>Optional</sup> <a name="DetectAndCopyNewTopicsInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.detectAndCopyNewTopicsInput"></a>

```go
func DetectAndCopyNewTopicsInput() interface{}
```

- *Type:* interface{}

---

##### `StartingPositionInput`<sup>Optional</sup> <a name="StartingPositionInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.startingPositionInput"></a>

```go
func StartingPositionInput() interface{}
```

- *Type:* interface{}

---

##### `TopicNameConfigurationInput`<sup>Optional</sup> <a name="TopicNameConfigurationInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicNameConfigurationInput"></a>

```go
func TopicNameConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `TopicsToExcludeInput`<sup>Optional</sup> <a name="TopicsToExcludeInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToExcludeInput"></a>

```go
func TopicsToExcludeInput() *[]*string
```

- *Type:* *[]*string

---

##### `TopicsToReplicateInput`<sup>Optional</sup> <a name="TopicsToReplicateInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToReplicateInput"></a>

```go
func TopicsToReplicateInput() *[]*string
```

- *Type:* *[]*string

---

##### `CopyAccessControlListsForTopics`<sup>Required</sup> <a name="CopyAccessControlListsForTopics" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyAccessControlListsForTopics"></a>

```go
func CopyAccessControlListsForTopics() interface{}
```

- *Type:* interface{}

---

##### `CopyTopicConfigurations`<sup>Required</sup> <a name="CopyTopicConfigurations" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyTopicConfigurations"></a>

```go
func CopyTopicConfigurations() interface{}
```

- *Type:* interface{}

---

##### `DetectAndCopyNewTopics`<sup>Required</sup> <a name="DetectAndCopyNewTopics" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.detectAndCopyNewTopics"></a>

```go
func DetectAndCopyNewTopics() interface{}
```

- *Type:* interface{}

---

##### `TopicsToExclude`<sup>Required</sup> <a name="TopicsToExclude" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToExclude"></a>

```go
func TopicsToExclude() *[]*string
```

- *Type:* *[]*string

---

##### `TopicsToReplicate`<sup>Required</sup> <a name="TopicsToReplicate" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToReplicate"></a>

```go
func TopicsToReplicate() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference <a name="MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

mskreplicator.NewMskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationStartingPositionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference <a name="MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

mskreplicator.NewMskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationTopicNameConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskReplicatorTagsList <a name="MskReplicatorTagsList" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

mskreplicator.NewMskReplicatorTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MskReplicatorTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.get"></a>

```go
func Get(index *f64) MskReplicatorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MskReplicatorTagsOutputReference <a name="MskReplicatorTagsOutputReference" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mskreplicator"

mskreplicator.NewMskReplicatorTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MskReplicatorTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskReplicator.MskReplicatorTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



