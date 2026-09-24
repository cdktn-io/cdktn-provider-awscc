# `mediaconvertQueue` Submodule <a name="`mediaconvertQueue` Submodule" id="@cdktn/provider-awscc.mediaconvertQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconvertQueue <a name="MediaconvertQueue" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue awscc_mediaconvert_queue}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconvertqueue"

mediaconvertqueue.NewMediaconvertQueue(scope Construct, id *string, config MediaconvertQueueConfig) MediaconvertQueue
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig">MediaconvertQueueConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig">MediaconvertQueueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetConcurrentJobs">ResetConcurrentJobs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetMaximumConcurrentFeeds">ResetMaximumConcurrentFeeds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetPricingPlan">ResetPricingPlan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetConcurrentJobs` <a name="ResetConcurrentJobs" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetConcurrentJobs"></a>

```go
func ResetConcurrentJobs()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetMaximumConcurrentFeeds` <a name="ResetMaximumConcurrentFeeds" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetMaximumConcurrentFeeds"></a>

```go
func ResetMaximumConcurrentFeeds()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetName"></a>

```go
func ResetName()
```

##### `ResetPricingPlan` <a name="ResetPricingPlan" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetPricingPlan"></a>

```go
func ResetPricingPlan()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MediaconvertQueue resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconvertqueue"

mediaconvertqueue.MediaconvertQueue_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconvertqueue"

mediaconvertqueue.MediaconvertQueue_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconvertqueue"

mediaconvertqueue.MediaconvertQueue_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconvertqueue"

mediaconvertqueue.MediaconvertQueue_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a MediaconvertQueue resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MediaconvertQueue to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MediaconvertQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the MediaconvertQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.concurrentJobsInput">ConcurrentJobsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.maximumConcurrentFeedsInput">MaximumConcurrentFeedsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.pricingPlanInput">PricingPlanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.tagsInput">TagsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.concurrentJobs">ConcurrentJobs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.maximumConcurrentFeeds">MaximumConcurrentFeeds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.pricingPlan">PricingPlan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.tags">Tags</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ConcurrentJobsInput`<sup>Optional</sup> <a name="ConcurrentJobsInput" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.concurrentJobsInput"></a>

```go
func ConcurrentJobsInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `MaximumConcurrentFeedsInput`<sup>Optional</sup> <a name="MaximumConcurrentFeedsInput" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.maximumConcurrentFeedsInput"></a>

```go
func MaximumConcurrentFeedsInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PricingPlanInput`<sup>Optional</sup> <a name="PricingPlanInput" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.pricingPlanInput"></a>

```go
func PricingPlanInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.tagsInput"></a>

```go
func TagsInput() *string
```

- *Type:* *string

---

##### `ConcurrentJobs`<sup>Required</sup> <a name="ConcurrentJobs" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.concurrentJobs"></a>

```go
func ConcurrentJobs() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `MaximumConcurrentFeeds`<sup>Required</sup> <a name="MaximumConcurrentFeeds" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.maximumConcurrentFeeds"></a>

```go
func MaximumConcurrentFeeds() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PricingPlan`<sup>Required</sup> <a name="PricingPlan" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.pricingPlan"></a>

```go
func PricingPlan() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.tags"></a>

```go
func Tags() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueue.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconvertQueueConfig <a name="MediaconvertQueueConfig" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconvertqueue"

&mediaconvertqueue.MediaconvertQueueConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ConcurrentJobs: *f64,
	Description: *string,
	MaximumConcurrentFeeds: *f64,
	Name: *string,
	PricingPlan: *string,
	Status: *string,
	Tags: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.concurrentJobs">ConcurrentJobs</a></code> | <code>*f64</code> | Specify the maximum number of jobs your queue can process concurrently. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.description">Description</a></code> | <code>*string</code> | A description of the queue that you are creating. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.maximumConcurrentFeeds">MaximumConcurrentFeeds</a></code> | <code>*f64</code> | Specify the maximum number of Elemental Inference feeds MediaConvert can process concurrently. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.name">Name</a></code> | <code>*string</code> | The name of the queue that you are creating. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.pricingPlan">PricingPlan</a></code> | <code>*string</code> | When you use CloudFormation, you can create only on-demand queues. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.status">Status</a></code> | <code>*string</code> | Initial state of the queue. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.tags">Tags</a></code> | <code>*string</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConcurrentJobs`<sup>Optional</sup> <a name="ConcurrentJobs" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.concurrentJobs"></a>

```go
ConcurrentJobs *f64
```

- *Type:* *f64

Specify the maximum number of jobs your queue can process concurrently.

For on-demand queues, the value you enter is constrained by your service quotas for Maximum concurrent jobs, per on-demand queue and Maximum concurrent jobs, per account. For reserved queues, specify the number of jobs you can process concurrently in your reservation plan instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#concurrent_jobs MediaconvertQueue#concurrent_jobs}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the queue that you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#description MediaconvertQueue#description}

---

##### `MaximumConcurrentFeeds`<sup>Optional</sup> <a name="MaximumConcurrentFeeds" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.maximumConcurrentFeeds"></a>

```go
MaximumConcurrentFeeds *f64
```

- *Type:* *f64

Specify the maximum number of Elemental Inference feeds MediaConvert can process concurrently.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#maximum_concurrent_feeds MediaconvertQueue#maximum_concurrent_feeds}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the queue that you are creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#name MediaconvertQueue#name}

---

##### `PricingPlan`<sup>Optional</sup> <a name="PricingPlan" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.pricingPlan"></a>

```go
PricingPlan *string
```

- *Type:* *string

When you use CloudFormation, you can create only on-demand queues.

Therefore, always set PricingPlan to the value ON_DEMAND when declaring an AWS::MediaConvert::Queue in your CloudFormation template. To create a reserved queue, use the AWS Elemental MediaConvert console at https://console.aws.amazon.com/mediaconvert to set up a contract. For more information, see Working with AWS Elemental MediaConvert Queues in the AWS Elemental MediaConvert User Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#pricing_plan MediaconvertQueue#pricing_plan}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Initial state of the queue.

Queues can be either ACTIVE or PAUSED. If you create a paused queue, then jobs that you send to that queue won't begin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#status MediaconvertQueue#status}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.mediaconvertQueue.MediaconvertQueueConfig.property.tags"></a>

```go
Tags *string
```

- *Type:* *string

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/mediaconvert_queue#tags MediaconvertQueue#tags}

---



