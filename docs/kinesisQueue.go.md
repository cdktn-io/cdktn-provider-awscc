# `kinesisQueue` Submodule <a name="`kinesisQueue` Submodule" id="@cdktn/provider-awscc.kinesisQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KinesisQueue <a name="KinesisQueue" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue awscc_kinesis_queue}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/kinesisqueue"

kinesisqueue.NewKinesisQueue(scope Construct, id *string, config KinesisQueueConfig) KinesisQueue
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig">KinesisQueueConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig">KinesisQueueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.putQueueAttributes">PutQueueAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.putStreamConfigurationList">PutStreamConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.resetQueueAttributes">ResetQueueAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutQueueAttributes` <a name="PutQueueAttributes" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.putQueueAttributes"></a>

```go
func PutQueueAttributes(value KinesisQueueQueueAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.putQueueAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributes">KinesisQueueQueueAttributes</a>

---

##### `PutStreamConfigurationList` <a name="PutStreamConfigurationList" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.putStreamConfigurationList"></a>

```go
func PutStreamConfigurationList(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.putStreamConfigurationList.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetQueueAttributes` <a name="ResetQueueAttributes" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.resetQueueAttributes"></a>

```go
func ResetQueueAttributes()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a KinesisQueue resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/kinesisqueue"

kinesisqueue.KinesisQueue_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/kinesisqueue"

kinesisqueue.KinesisQueue_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/kinesisqueue"

kinesisqueue.KinesisQueue_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/kinesisqueue"

kinesisqueue.KinesisQueue_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a KinesisQueue resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KinesisQueue to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KinesisQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the KinesisQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.queueArn">QueueArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.queueAttributes">QueueAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference">KinesisQueueQueueAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.queueCreationTimestamp">QueueCreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.queueStatus">QueueStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.streamConfigurationList">StreamConfigurationList</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList">KinesisQueueStreamConfigurationListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList">KinesisQueueTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.queueAttributesInput">QueueAttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.queueNameInput">QueueNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.streamConfigurationListInput">StreamConfigurationListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.queueName">QueueName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `QueueArn`<sup>Required</sup> <a name="QueueArn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.queueArn"></a>

```go
func QueueArn() *string
```

- *Type:* *string

---

##### `QueueAttributes`<sup>Required</sup> <a name="QueueAttributes" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.queueAttributes"></a>

```go
func QueueAttributes() KinesisQueueQueueAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference">KinesisQueueQueueAttributesOutputReference</a>

---

##### `QueueCreationTimestamp`<sup>Required</sup> <a name="QueueCreationTimestamp" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.queueCreationTimestamp"></a>

```go
func QueueCreationTimestamp() *string
```

- *Type:* *string

---

##### `QueueStatus`<sup>Required</sup> <a name="QueueStatus" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.queueStatus"></a>

```go
func QueueStatus() *string
```

- *Type:* *string

---

##### `StreamConfigurationList`<sup>Required</sup> <a name="StreamConfigurationList" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.streamConfigurationList"></a>

```go
func StreamConfigurationList() KinesisQueueStreamConfigurationListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList">KinesisQueueStreamConfigurationListStructList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.tags"></a>

```go
func Tags() KinesisQueueTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList">KinesisQueueTagsList</a>

---

##### `QueueAttributesInput`<sup>Optional</sup> <a name="QueueAttributesInput" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.queueAttributesInput"></a>

```go
func QueueAttributesInput() interface{}
```

- *Type:* interface{}

---

##### `QueueNameInput`<sup>Optional</sup> <a name="QueueNameInput" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.queueNameInput"></a>

```go
func QueueNameInput() *string
```

- *Type:* *string

---

##### `StreamConfigurationListInput`<sup>Optional</sup> <a name="StreamConfigurationListInput" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.streamConfigurationListInput"></a>

```go
func StreamConfigurationListInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `QueueName`<sup>Required</sup> <a name="QueueName" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.queueName"></a>

```go
func QueueName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueue.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KinesisQueueConfig <a name="KinesisQueueConfig" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/kinesisqueue"

&kinesisqueue.KinesisQueueConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	QueueName: *string,
	StreamConfigurationList: interface{},
	QueueAttributes: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.kinesisQueue.KinesisQueueQueueAttributes,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.queueName">QueueName</a></code> | <code>*string</code> | The name of the queue. The name's uniqueness is scoped per AWS account and region. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.streamConfigurationList">StreamConfigurationList</a></code> | <code>interface{}</code> | List of stream configurations associated with the queue. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.queueAttributes">QueueAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributes">KinesisQueueQueueAttributes</a></code> | Mutable attributes that control queue consumption behavior. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An arbitrary set of tags (key-value pairs) to associate with the Kinesis queue. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `QueueName`<sup>Required</sup> <a name="QueueName" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.queueName"></a>

```go
QueueName *string
```

- *Type:* *string

The name of the queue. The name's uniqueness is scoped per AWS account and region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#queue_name KinesisQueue#queue_name}

---

##### `StreamConfigurationList`<sup>Required</sup> <a name="StreamConfigurationList" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.streamConfigurationList"></a>

```go
StreamConfigurationList interface{}
```

- *Type:* interface{}

List of stream configurations associated with the queue.

v1 supports a single element; the list shape allows future extensibility to fan in from multiple streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#stream_configuration_list KinesisQueue#stream_configuration_list}

---

##### `QueueAttributes`<sup>Optional</sup> <a name="QueueAttributes" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.queueAttributes"></a>

```go
QueueAttributes KinesisQueueQueueAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributes">KinesisQueueQueueAttributes</a>

Mutable attributes that control queue consumption behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#queue_attributes KinesisQueue#queue_attributes}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An arbitrary set of tags (key-value pairs) to associate with the Kinesis queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#tags KinesisQueue#tags}

---

### KinesisQueueQueueAttributes <a name="KinesisQueueQueueAttributes" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/kinesisqueue"

&kinesisqueue.KinesisQueueQueueAttributes {
	DeadLetterConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfiguration,
	VisibilityTimeoutSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributes.property.deadLetterConfiguration">DeadLetterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfiguration">KinesisQueueQueueAttributesDeadLetterConfiguration</a></code> | The dead-letter configuration applied to records that exceed the maximum receive count. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributes.property.visibilityTimeoutSeconds">VisibilityTimeoutSeconds</a></code> | <code>*f64</code> | The duration, in seconds, that a received record is hidden from subsequent receive calls after being handed out to a consumer. |

---

##### `DeadLetterConfiguration`<sup>Optional</sup> <a name="DeadLetterConfiguration" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributes.property.deadLetterConfiguration"></a>

```go
DeadLetterConfiguration KinesisQueueQueueAttributesDeadLetterConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfiguration">KinesisQueueQueueAttributesDeadLetterConfiguration</a>

The dead-letter configuration applied to records that exceed the maximum receive count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#dead_letter_configuration KinesisQueue#dead_letter_configuration}

---

##### `VisibilityTimeoutSeconds`<sup>Optional</sup> <a name="VisibilityTimeoutSeconds" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributes.property.visibilityTimeoutSeconds"></a>

```go
VisibilityTimeoutSeconds *f64
```

- *Type:* *f64

The duration, in seconds, that a received record is hidden from subsequent receive calls after being handed out to a consumer.

Defaults to 30 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#visibility_timeout_seconds KinesisQueue#visibility_timeout_seconds}

---

### KinesisQueueQueueAttributesDeadLetterConfiguration <a name="KinesisQueueQueueAttributesDeadLetterConfiguration" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/kinesisqueue"

&kinesisqueue.KinesisQueueQueueAttributesDeadLetterConfiguration {
	MaxReceiveCount: *f64,
	TargetType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfiguration.property.maxReceiveCount">MaxReceiveCount</a></code> | <code>*f64</code> | The maximum number of times a record can be received before it is moved to the dead-letter target. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfiguration.property.targetType">TargetType</a></code> | <code>*string</code> | The dead-letter target type. BUILT_IN uses a service-managed dead-letter target; NONE disables dead-lettering. |

---

##### `MaxReceiveCount`<sup>Optional</sup> <a name="MaxReceiveCount" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfiguration.property.maxReceiveCount"></a>

```go
MaxReceiveCount *f64
```

- *Type:* *f64

The maximum number of times a record can be received before it is moved to the dead-letter target.

Required when TargetType is BUILT_IN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#max_receive_count KinesisQueue#max_receive_count}

---

##### `TargetType`<sup>Optional</sup> <a name="TargetType" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfiguration.property.targetType"></a>

```go
TargetType *string
```

- *Type:* *string

The dead-letter target type. BUILT_IN uses a service-managed dead-letter target; NONE disables dead-lettering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#target_type KinesisQueue#target_type}

---

### KinesisQueueStreamConfigurationListStartingPosition <a name="KinesisQueueStreamConfigurationListStartingPosition" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPosition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPosition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/kinesisqueue"

&kinesisqueue.KinesisQueueStreamConfigurationListStartingPosition {
	Timestamp: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPosition.property.timestamp">Timestamp</a></code> | <code>*string</code> | The timestamp to start reading from. Required when Type is AT_TIMESTAMP; the timestamp must not be in the future. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPosition.property.type">Type</a></code> | <code>*string</code> | The starting position type. |

---

##### `Timestamp`<sup>Optional</sup> <a name="Timestamp" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPosition.property.timestamp"></a>

```go
Timestamp *string
```

- *Type:* *string

The timestamp to start reading from. Required when Type is AT_TIMESTAMP; the timestamp must not be in the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#timestamp KinesisQueue#timestamp}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPosition.property.type"></a>

```go
Type *string
```

- *Type:* *string

The starting position type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#type KinesisQueue#type}

---

### KinesisQueueStreamConfigurationListStruct <a name="KinesisQueueStreamConfigurationListStruct" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/kinesisqueue"

&kinesisqueue.KinesisQueueStreamConfigurationListStruct {
	StreamArn: *string,
	StartingPosition: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.kinesisQueue.KinesisQueueStreamConfigurationListStartingPosition,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStruct.property.streamArn">StreamArn</a></code> | <code>*string</code> | The Amazon resource name (ARN) of the Kinesis data stream that the queue reads from. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStruct.property.startingPosition">StartingPosition</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPosition">KinesisQueueStreamConfigurationListStartingPosition</a></code> | The position in the stream from which the queue starts reading records. |

---

##### `StreamArn`<sup>Required</sup> <a name="StreamArn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStruct.property.streamArn"></a>

```go
StreamArn *string
```

- *Type:* *string

The Amazon resource name (ARN) of the Kinesis data stream that the queue reads from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#stream_arn KinesisQueue#stream_arn}

---

##### `StartingPosition`<sup>Optional</sup> <a name="StartingPosition" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStruct.property.startingPosition"></a>

```go
StartingPosition KinesisQueueStreamConfigurationListStartingPosition
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPosition">KinesisQueueStreamConfigurationListStartingPosition</a>

The position in the stream from which the queue starts reading records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#starting_position KinesisQueue#starting_position}

---

### KinesisQueueTags <a name="KinesisQueueTags" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/kinesisqueue"

&kinesisqueue.KinesisQueueTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#key KinesisQueue#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesis_queue#value KinesisQueue#value}

---

## Classes <a name="Classes" id="Classes"></a>

### KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference <a name="KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/kinesisqueue"

kinesisqueue.NewKinesisQueueQueueAttributesDeadLetterConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.resetMaxReceiveCount">ResetMaxReceiveCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.resetTargetType">ResetTargetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxReceiveCount` <a name="ResetMaxReceiveCount" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.resetMaxReceiveCount"></a>

```go
func ResetMaxReceiveCount()
```

##### `ResetTargetType` <a name="ResetTargetType" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.resetTargetType"></a>

```go
func ResetTargetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.property.maxReceiveCountInput">MaxReceiveCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.property.targetTypeInput">TargetTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.property.maxReceiveCount">MaxReceiveCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.property.targetType">TargetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxReceiveCountInput`<sup>Optional</sup> <a name="MaxReceiveCountInput" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.property.maxReceiveCountInput"></a>

```go
func MaxReceiveCountInput() *f64
```

- *Type:* *f64

---

##### `TargetTypeInput`<sup>Optional</sup> <a name="TargetTypeInput" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.property.targetTypeInput"></a>

```go
func TargetTypeInput() *string
```

- *Type:* *string

---

##### `MaxReceiveCount`<sup>Required</sup> <a name="MaxReceiveCount" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.property.maxReceiveCount"></a>

```go
func MaxReceiveCount() *f64
```

- *Type:* *f64

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.property.targetType"></a>

```go
func TargetType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KinesisQueueQueueAttributesOutputReference <a name="KinesisQueueQueueAttributesOutputReference" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/kinesisqueue"

kinesisqueue.NewKinesisQueueQueueAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KinesisQueueQueueAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.putDeadLetterConfiguration">PutDeadLetterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.resetDeadLetterConfiguration">ResetDeadLetterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.resetVisibilityTimeoutSeconds">ResetVisibilityTimeoutSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDeadLetterConfiguration` <a name="PutDeadLetterConfiguration" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.putDeadLetterConfiguration"></a>

```go
func PutDeadLetterConfiguration(value KinesisQueueQueueAttributesDeadLetterConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.putDeadLetterConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfiguration">KinesisQueueQueueAttributesDeadLetterConfiguration</a>

---

##### `ResetDeadLetterConfiguration` <a name="ResetDeadLetterConfiguration" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.resetDeadLetterConfiguration"></a>

```go
func ResetDeadLetterConfiguration()
```

##### `ResetVisibilityTimeoutSeconds` <a name="ResetVisibilityTimeoutSeconds" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.resetVisibilityTimeoutSeconds"></a>

```go
func ResetVisibilityTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.property.deadLetterConfiguration">DeadLetterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference">KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.property.deadLetterConfigurationInput">DeadLetterConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.property.visibilityTimeoutSecondsInput">VisibilityTimeoutSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.property.visibilityTimeoutSeconds">VisibilityTimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeadLetterConfiguration`<sup>Required</sup> <a name="DeadLetterConfiguration" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.property.deadLetterConfiguration"></a>

```go
func DeadLetterConfiguration() KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference">KinesisQueueQueueAttributesDeadLetterConfigurationOutputReference</a>

---

##### `DeadLetterConfigurationInput`<sup>Optional</sup> <a name="DeadLetterConfigurationInput" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.property.deadLetterConfigurationInput"></a>

```go
func DeadLetterConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `VisibilityTimeoutSecondsInput`<sup>Optional</sup> <a name="VisibilityTimeoutSecondsInput" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.property.visibilityTimeoutSecondsInput"></a>

```go
func VisibilityTimeoutSecondsInput() *f64
```

- *Type:* *f64

---

##### `VisibilityTimeoutSeconds`<sup>Required</sup> <a name="VisibilityTimeoutSeconds" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.property.visibilityTimeoutSeconds"></a>

```go
func VisibilityTimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueQueueAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KinesisQueueStreamConfigurationListStartingPositionOutputReference <a name="KinesisQueueStreamConfigurationListStartingPositionOutputReference" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/kinesisqueue"

kinesisqueue.NewKinesisQueueStreamConfigurationListStartingPositionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KinesisQueueStreamConfigurationListStartingPositionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.resetTimestamp">ResetTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimestamp` <a name="ResetTimestamp" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.resetTimestamp"></a>

```go
func ResetTimestamp()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.property.timestampInput">TimestampInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.property.timestamp">Timestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimestampInput`<sup>Optional</sup> <a name="TimestampInput" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.property.timestampInput"></a>

```go
func TimestampInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.property.timestamp"></a>

```go
func Timestamp() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KinesisQueueStreamConfigurationListStructList <a name="KinesisQueueStreamConfigurationListStructList" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/kinesisqueue"

kinesisqueue.NewKinesisQueueStreamConfigurationListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KinesisQueueStreamConfigurationListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.get"></a>

```go
func Get(index *f64) KinesisQueueStreamConfigurationListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KinesisQueueStreamConfigurationListStructOutputReference <a name="KinesisQueueStreamConfigurationListStructOutputReference" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/kinesisqueue"

kinesisqueue.NewKinesisQueueStreamConfigurationListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KinesisQueueStreamConfigurationListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.putStartingPosition">PutStartingPosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.resetStartingPosition">ResetStartingPosition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStartingPosition` <a name="PutStartingPosition" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.putStartingPosition"></a>

```go
func PutStartingPosition(value KinesisQueueStreamConfigurationListStartingPosition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.putStartingPosition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPosition">KinesisQueueStreamConfigurationListStartingPosition</a>

---

##### `ResetStartingPosition` <a name="ResetStartingPosition" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.resetStartingPosition"></a>

```go
func ResetStartingPosition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.property.startingPosition">StartingPosition</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference">KinesisQueueStreamConfigurationListStartingPositionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.property.startingPositionInput">StartingPositionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.property.streamArnInput">StreamArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.property.streamArn">StreamArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StartingPosition`<sup>Required</sup> <a name="StartingPosition" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.property.startingPosition"></a>

```go
func StartingPosition() KinesisQueueStreamConfigurationListStartingPositionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStartingPositionOutputReference">KinesisQueueStreamConfigurationListStartingPositionOutputReference</a>

---

##### `StartingPositionInput`<sup>Optional</sup> <a name="StartingPositionInput" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.property.startingPositionInput"></a>

```go
func StartingPositionInput() interface{}
```

- *Type:* interface{}

---

##### `StreamArnInput`<sup>Optional</sup> <a name="StreamArnInput" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.property.streamArnInput"></a>

```go
func StreamArnInput() *string
```

- *Type:* *string

---

##### `StreamArn`<sup>Required</sup> <a name="StreamArn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.property.streamArn"></a>

```go
func StreamArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueStreamConfigurationListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KinesisQueueTagsList <a name="KinesisQueueTagsList" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/kinesisqueue"

kinesisqueue.NewKinesisQueueTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KinesisQueueTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.get"></a>

```go
func Get(index *f64) KinesisQueueTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KinesisQueueTagsOutputReference <a name="KinesisQueueTagsOutputReference" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/kinesisqueue"

kinesisqueue.NewKinesisQueueTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KinesisQueueTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kinesisQueue.KinesisQueueTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



