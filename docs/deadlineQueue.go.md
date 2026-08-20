# `deadlineQueue` Submodule <a name="`deadlineQueue` Submodule" id="@cdktn/provider-awscc.deadlineQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DeadlineQueue <a name="DeadlineQueue" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue awscc_deadline_queue}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/deadlinequeue"

deadlinequeue.NewDeadlineQueue(scope Construct, id *string, config DeadlineQueueConfig) DeadlineQueue
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig">DeadlineQueueConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig">DeadlineQueueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putJobAttachmentSettings">PutJobAttachmentSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putJobRunAsUser">PutJobRunAsUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putSchedulingConfiguration">PutSchedulingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetAllowedStorageProfileIds">ResetAllowedStorageProfileIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetDefaultBudgetAction">ResetDefaultBudgetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetJobAttachmentSettings">ResetJobAttachmentSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetJobRunAsUser">ResetJobRunAsUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetRequiredFileSystemLocationNames">ResetRequiredFileSystemLocationNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetSchedulingConfiguration">ResetSchedulingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutJobAttachmentSettings` <a name="PutJobAttachmentSettings" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putJobAttachmentSettings"></a>

```go
func PutJobAttachmentSettings(value DeadlineQueueJobAttachmentSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putJobAttachmentSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings">DeadlineQueueJobAttachmentSettings</a>

---

##### `PutJobRunAsUser` <a name="PutJobRunAsUser" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putJobRunAsUser"></a>

```go
func PutJobRunAsUser(value DeadlineQueueJobRunAsUser)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putJobRunAsUser.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser">DeadlineQueueJobRunAsUser</a>

---

##### `PutSchedulingConfiguration` <a name="PutSchedulingConfiguration" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putSchedulingConfiguration"></a>

```go
func PutSchedulingConfiguration(value DeadlineQueueSchedulingConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putSchedulingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration">DeadlineQueueSchedulingConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllowedStorageProfileIds` <a name="ResetAllowedStorageProfileIds" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetAllowedStorageProfileIds"></a>

```go
func ResetAllowedStorageProfileIds()
```

##### `ResetDefaultBudgetAction` <a name="ResetDefaultBudgetAction" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetDefaultBudgetAction"></a>

```go
func ResetDefaultBudgetAction()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetJobAttachmentSettings` <a name="ResetJobAttachmentSettings" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetJobAttachmentSettings"></a>

```go
func ResetJobAttachmentSettings()
```

##### `ResetJobRunAsUser` <a name="ResetJobRunAsUser" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetJobRunAsUser"></a>

```go
func ResetJobRunAsUser()
```

##### `ResetRequiredFileSystemLocationNames` <a name="ResetRequiredFileSystemLocationNames" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetRequiredFileSystemLocationNames"></a>

```go
func ResetRequiredFileSystemLocationNames()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetSchedulingConfiguration` <a name="ResetSchedulingConfiguration" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetSchedulingConfiguration"></a>

```go
func ResetSchedulingConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DeadlineQueue resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/deadlinequeue"

deadlinequeue.DeadlineQueue_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/deadlinequeue"

deadlinequeue.DeadlineQueue_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/deadlinequeue"

deadlinequeue.DeadlineQueue_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/deadlinequeue"

deadlinequeue.DeadlineQueue_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DeadlineQueue resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DeadlineQueue to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DeadlineQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DeadlineQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.jobAttachmentSettings">JobAttachmentSettings</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference">DeadlineQueueJobAttachmentSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.jobRunAsUser">JobRunAsUser</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference">DeadlineQueueJobRunAsUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.queueId">QueueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.schedulingConfiguration">SchedulingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference">DeadlineQueueSchedulingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList">DeadlineQueueTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.allowedStorageProfileIdsInput">AllowedStorageProfileIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.defaultBudgetActionInput">DefaultBudgetActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.farmIdInput">FarmIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.jobAttachmentSettingsInput">JobAttachmentSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.jobRunAsUserInput">JobRunAsUserInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.requiredFileSystemLocationNamesInput">RequiredFileSystemLocationNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.schedulingConfigurationInput">SchedulingConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.allowedStorageProfileIds">AllowedStorageProfileIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.defaultBudgetAction">DefaultBudgetAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.farmId">FarmId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.requiredFileSystemLocationNames">RequiredFileSystemLocationNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `JobAttachmentSettings`<sup>Required</sup> <a name="JobAttachmentSettings" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.jobAttachmentSettings"></a>

```go
func JobAttachmentSettings() DeadlineQueueJobAttachmentSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference">DeadlineQueueJobAttachmentSettingsOutputReference</a>

---

##### `JobRunAsUser`<sup>Required</sup> <a name="JobRunAsUser" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.jobRunAsUser"></a>

```go
func JobRunAsUser() DeadlineQueueJobRunAsUserOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference">DeadlineQueueJobRunAsUserOutputReference</a>

---

##### `QueueId`<sup>Required</sup> <a name="QueueId" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.queueId"></a>

```go
func QueueId() *string
```

- *Type:* *string

---

##### `SchedulingConfiguration`<sup>Required</sup> <a name="SchedulingConfiguration" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.schedulingConfiguration"></a>

```go
func SchedulingConfiguration() DeadlineQueueSchedulingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference">DeadlineQueueSchedulingConfigurationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.tags"></a>

```go
func Tags() DeadlineQueueTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList">DeadlineQueueTagsList</a>

---

##### `AllowedStorageProfileIdsInput`<sup>Optional</sup> <a name="AllowedStorageProfileIdsInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.allowedStorageProfileIdsInput"></a>

```go
func AllowedStorageProfileIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultBudgetActionInput`<sup>Optional</sup> <a name="DefaultBudgetActionInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.defaultBudgetActionInput"></a>

```go
func DefaultBudgetActionInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FarmIdInput`<sup>Optional</sup> <a name="FarmIdInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.farmIdInput"></a>

```go
func FarmIdInput() *string
```

- *Type:* *string

---

##### `JobAttachmentSettingsInput`<sup>Optional</sup> <a name="JobAttachmentSettingsInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.jobAttachmentSettingsInput"></a>

```go
func JobAttachmentSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `JobRunAsUserInput`<sup>Optional</sup> <a name="JobRunAsUserInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.jobRunAsUserInput"></a>

```go
func JobRunAsUserInput() interface{}
```

- *Type:* interface{}

---

##### `RequiredFileSystemLocationNamesInput`<sup>Optional</sup> <a name="RequiredFileSystemLocationNamesInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.requiredFileSystemLocationNamesInput"></a>

```go
func RequiredFileSystemLocationNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `SchedulingConfigurationInput`<sup>Optional</sup> <a name="SchedulingConfigurationInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.schedulingConfigurationInput"></a>

```go
func SchedulingConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedStorageProfileIds`<sup>Required</sup> <a name="AllowedStorageProfileIds" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.allowedStorageProfileIds"></a>

```go
func AllowedStorageProfileIds() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultBudgetAction`<sup>Required</sup> <a name="DefaultBudgetAction" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.defaultBudgetAction"></a>

```go
func DefaultBudgetAction() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FarmId`<sup>Required</sup> <a name="FarmId" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.farmId"></a>

```go
func FarmId() *string
```

- *Type:* *string

---

##### `RequiredFileSystemLocationNames`<sup>Required</sup> <a name="RequiredFileSystemLocationNames" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.requiredFileSystemLocationNames"></a>

```go
func RequiredFileSystemLocationNames() *[]*string
```

- *Type:* *[]*string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueue.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DeadlineQueueConfig <a name="DeadlineQueueConfig" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/deadlinequeue"

&deadlinequeue.DeadlineQueueConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	FarmId: *string,
	AllowedStorageProfileIds: *[]*string,
	DefaultBudgetAction: *string,
	Description: *string,
	JobAttachmentSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings,
	JobRunAsUser: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.deadlineQueue.DeadlineQueueJobRunAsUser,
	RequiredFileSystemLocationNames: *[]*string,
	RoleArn: *string,
	SchedulingConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#display_name DeadlineQueue#display_name}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.farmId">FarmId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#farm_id DeadlineQueue#farm_id}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.allowedStorageProfileIds">AllowedStorageProfileIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#allowed_storage_profile_ids DeadlineQueue#allowed_storage_profile_ids}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.defaultBudgetAction">DefaultBudgetAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#default_budget_action DeadlineQueue#default_budget_action}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#description DeadlineQueue#description}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.jobAttachmentSettings">JobAttachmentSettings</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings">DeadlineQueueJobAttachmentSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#job_attachment_settings DeadlineQueue#job_attachment_settings}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.jobRunAsUser">JobRunAsUser</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser">DeadlineQueueJobRunAsUser</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#job_run_as_user DeadlineQueue#job_run_as_user}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.requiredFileSystemLocationNames">RequiredFileSystemLocationNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#required_file_system_location_names DeadlineQueue#required_file_system_location_names}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#role_arn DeadlineQueue#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.schedulingConfiguration">SchedulingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration">DeadlineQueueSchedulingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#scheduling_configuration DeadlineQueue#scheduling_configuration}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#display_name DeadlineQueue#display_name}.

---

##### `FarmId`<sup>Required</sup> <a name="FarmId" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.farmId"></a>

```go
FarmId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#farm_id DeadlineQueue#farm_id}.

---

##### `AllowedStorageProfileIds`<sup>Optional</sup> <a name="AllowedStorageProfileIds" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.allowedStorageProfileIds"></a>

```go
AllowedStorageProfileIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#allowed_storage_profile_ids DeadlineQueue#allowed_storage_profile_ids}.

---

##### `DefaultBudgetAction`<sup>Optional</sup> <a name="DefaultBudgetAction" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.defaultBudgetAction"></a>

```go
DefaultBudgetAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#default_budget_action DeadlineQueue#default_budget_action}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#description DeadlineQueue#description}.

---

##### `JobAttachmentSettings`<sup>Optional</sup> <a name="JobAttachmentSettings" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.jobAttachmentSettings"></a>

```go
JobAttachmentSettings DeadlineQueueJobAttachmentSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings">DeadlineQueueJobAttachmentSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#job_attachment_settings DeadlineQueue#job_attachment_settings}.

---

##### `JobRunAsUser`<sup>Optional</sup> <a name="JobRunAsUser" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.jobRunAsUser"></a>

```go
JobRunAsUser DeadlineQueueJobRunAsUser
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser">DeadlineQueueJobRunAsUser</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#job_run_as_user DeadlineQueue#job_run_as_user}.

---

##### `RequiredFileSystemLocationNames`<sup>Optional</sup> <a name="RequiredFileSystemLocationNames" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.requiredFileSystemLocationNames"></a>

```go
RequiredFileSystemLocationNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#required_file_system_location_names DeadlineQueue#required_file_system_location_names}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#role_arn DeadlineQueue#role_arn}.

---

##### `SchedulingConfiguration`<sup>Optional</sup> <a name="SchedulingConfiguration" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.schedulingConfiguration"></a>

```go
SchedulingConfiguration DeadlineQueueSchedulingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration">DeadlineQueueSchedulingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#scheduling_configuration DeadlineQueue#scheduling_configuration}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#tags DeadlineQueue#tags}

---

### DeadlineQueueJobAttachmentSettings <a name="DeadlineQueueJobAttachmentSettings" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/deadlinequeue"

&deadlinequeue.DeadlineQueueJobAttachmentSettings {
	RootPrefix: *string,
	S3BucketName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings.property.rootPrefix">RootPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#root_prefix DeadlineQueue#root_prefix}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings.property.s3BucketName">S3BucketName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#s3_bucket_name DeadlineQueue#s3_bucket_name}. |

---

##### `RootPrefix`<sup>Optional</sup> <a name="RootPrefix" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings.property.rootPrefix"></a>

```go
RootPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#root_prefix DeadlineQueue#root_prefix}.

---

##### `S3BucketName`<sup>Optional</sup> <a name="S3BucketName" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettings.property.s3BucketName"></a>

```go
S3BucketName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#s3_bucket_name DeadlineQueue#s3_bucket_name}.

---

### DeadlineQueueJobRunAsUser <a name="DeadlineQueueJobRunAsUser" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/deadlinequeue"

&deadlinequeue.DeadlineQueueJobRunAsUser {
	Posix: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix,
	RunAs: *string,
	Windows: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser.property.posix">Posix</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix">DeadlineQueueJobRunAsUserPosix</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#posix DeadlineQueue#posix}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser.property.runAs">RunAs</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#run_as DeadlineQueue#run_as}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser.property.windows">Windows</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows">DeadlineQueueJobRunAsUserWindows</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#windows DeadlineQueue#windows}. |

---

##### `Posix`<sup>Optional</sup> <a name="Posix" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser.property.posix"></a>

```go
Posix DeadlineQueueJobRunAsUserPosix
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix">DeadlineQueueJobRunAsUserPosix</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#posix DeadlineQueue#posix}.

---

##### `RunAs`<sup>Optional</sup> <a name="RunAs" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser.property.runAs"></a>

```go
RunAs *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#run_as DeadlineQueue#run_as}.

---

##### `Windows`<sup>Optional</sup> <a name="Windows" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUser.property.windows"></a>

```go
Windows DeadlineQueueJobRunAsUserWindows
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows">DeadlineQueueJobRunAsUserWindows</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#windows DeadlineQueue#windows}.

---

### DeadlineQueueJobRunAsUserPosix <a name="DeadlineQueueJobRunAsUserPosix" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/deadlinequeue"

&deadlinequeue.DeadlineQueueJobRunAsUserPosix {
	Group: *string,
	User: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix.property.group">Group</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#group DeadlineQueue#group}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix.property.user">User</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#user DeadlineQueue#user}. |

---

##### `Group`<sup>Optional</sup> <a name="Group" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix.property.group"></a>

```go
Group *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#group DeadlineQueue#group}.

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix.property.user"></a>

```go
User *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#user DeadlineQueue#user}.

---

### DeadlineQueueJobRunAsUserWindows <a name="DeadlineQueueJobRunAsUserWindows" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/deadlinequeue"

&deadlinequeue.DeadlineQueueJobRunAsUserWindows {
	PasswordArn: *string,
	User: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows.property.passwordArn">PasswordArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#password_arn DeadlineQueue#password_arn}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows.property.user">User</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#user DeadlineQueue#user}. |

---

##### `PasswordArn`<sup>Optional</sup> <a name="PasswordArn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows.property.passwordArn"></a>

```go
PasswordArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#password_arn DeadlineQueue#password_arn}.

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows.property.user"></a>

```go
User *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#user DeadlineQueue#user}.

---

### DeadlineQueueSchedulingConfiguration <a name="DeadlineQueueSchedulingConfiguration" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/deadlinequeue"

&deadlinequeue.DeadlineQueueSchedulingConfiguration {
	PriorityBalanced: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalanced,
	PriorityFifo: *string,
	WeightedBalanced: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration.property.priorityBalanced">PriorityBalanced</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalanced">DeadlineQueueSchedulingConfigurationPriorityBalanced</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#priority_balanced DeadlineQueue#priority_balanced}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration.property.priorityFifo">PriorityFifo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#priority_fifo DeadlineQueue#priority_fifo}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration.property.weightedBalanced">WeightedBalanced</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced">DeadlineQueueSchedulingConfigurationWeightedBalanced</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#weighted_balanced DeadlineQueue#weighted_balanced}. |

---

##### `PriorityBalanced`<sup>Optional</sup> <a name="PriorityBalanced" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration.property.priorityBalanced"></a>

```go
PriorityBalanced DeadlineQueueSchedulingConfigurationPriorityBalanced
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalanced">DeadlineQueueSchedulingConfigurationPriorityBalanced</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#priority_balanced DeadlineQueue#priority_balanced}.

---

##### `PriorityFifo`<sup>Optional</sup> <a name="PriorityFifo" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration.property.priorityFifo"></a>

```go
PriorityFifo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#priority_fifo DeadlineQueue#priority_fifo}.

---

##### `WeightedBalanced`<sup>Optional</sup> <a name="WeightedBalanced" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfiguration.property.weightedBalanced"></a>

```go
WeightedBalanced DeadlineQueueSchedulingConfigurationWeightedBalanced
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced">DeadlineQueueSchedulingConfigurationWeightedBalanced</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#weighted_balanced DeadlineQueue#weighted_balanced}.

---

### DeadlineQueueSchedulingConfigurationPriorityBalanced <a name="DeadlineQueueSchedulingConfigurationPriorityBalanced" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalanced"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalanced.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/deadlinequeue"

&deadlinequeue.DeadlineQueueSchedulingConfigurationPriorityBalanced {
	RenderingTaskBuffer: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalanced.property.renderingTaskBuffer">RenderingTaskBuffer</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#rendering_task_buffer DeadlineQueue#rendering_task_buffer}. |

---

##### `RenderingTaskBuffer`<sup>Optional</sup> <a name="RenderingTaskBuffer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalanced.property.renderingTaskBuffer"></a>

```go
RenderingTaskBuffer *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#rendering_task_buffer DeadlineQueue#rendering_task_buffer}.

---

### DeadlineQueueSchedulingConfigurationWeightedBalanced <a name="DeadlineQueueSchedulingConfigurationWeightedBalanced" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/deadlinequeue"

&deadlinequeue.DeadlineQueueSchedulingConfigurationWeightedBalanced {
	ErrorWeight: *f64,
	MaxPriorityOverride: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride,
	MinPriorityOverride: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride,
	PriorityWeight: *f64,
	RenderingTaskBuffer: *f64,
	RenderingTaskWeight: *f64,
	SubmissionTimeWeight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.errorWeight">ErrorWeight</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#error_weight DeadlineQueue#error_weight}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.maxPriorityOverride">MaxPriorityOverride</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#max_priority_override DeadlineQueue#max_priority_override}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.minPriorityOverride">MinPriorityOverride</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#min_priority_override DeadlineQueue#min_priority_override}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.priorityWeight">PriorityWeight</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#priority_weight DeadlineQueue#priority_weight}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.renderingTaskBuffer">RenderingTaskBuffer</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#rendering_task_buffer DeadlineQueue#rendering_task_buffer}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.renderingTaskWeight">RenderingTaskWeight</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#rendering_task_weight DeadlineQueue#rendering_task_weight}. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.submissionTimeWeight">SubmissionTimeWeight</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#submission_time_weight DeadlineQueue#submission_time_weight}. |

---

##### `ErrorWeight`<sup>Optional</sup> <a name="ErrorWeight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.errorWeight"></a>

```go
ErrorWeight *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#error_weight DeadlineQueue#error_weight}.

---

##### `MaxPriorityOverride`<sup>Optional</sup> <a name="MaxPriorityOverride" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.maxPriorityOverride"></a>

```go
MaxPriorityOverride DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#max_priority_override DeadlineQueue#max_priority_override}.

---

##### `MinPriorityOverride`<sup>Optional</sup> <a name="MinPriorityOverride" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.minPriorityOverride"></a>

```go
MinPriorityOverride DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#min_priority_override DeadlineQueue#min_priority_override}.

---

##### `PriorityWeight`<sup>Optional</sup> <a name="PriorityWeight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.priorityWeight"></a>

```go
PriorityWeight *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#priority_weight DeadlineQueue#priority_weight}.

---

##### `RenderingTaskBuffer`<sup>Optional</sup> <a name="RenderingTaskBuffer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.renderingTaskBuffer"></a>

```go
RenderingTaskBuffer *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#rendering_task_buffer DeadlineQueue#rendering_task_buffer}.

---

##### `RenderingTaskWeight`<sup>Optional</sup> <a name="RenderingTaskWeight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.renderingTaskWeight"></a>

```go
RenderingTaskWeight *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#rendering_task_weight DeadlineQueue#rendering_task_weight}.

---

##### `SubmissionTimeWeight`<sup>Optional</sup> <a name="SubmissionTimeWeight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced.property.submissionTimeWeight"></a>

```go
SubmissionTimeWeight *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#submission_time_weight DeadlineQueue#submission_time_weight}.

---

### DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride <a name="DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/deadlinequeue"

&deadlinequeue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride {
	AlwaysScheduleFirst: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride.property.alwaysScheduleFirst">AlwaysScheduleFirst</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#always_schedule_first DeadlineQueue#always_schedule_first}. |

---

##### `AlwaysScheduleFirst`<sup>Optional</sup> <a name="AlwaysScheduleFirst" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride.property.alwaysScheduleFirst"></a>

```go
AlwaysScheduleFirst *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#always_schedule_first DeadlineQueue#always_schedule_first}.

---

### DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride <a name="DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/deadlinequeue"

&deadlinequeue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride {
	AlwaysScheduleLast: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride.property.alwaysScheduleLast">AlwaysScheduleLast</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#always_schedule_last DeadlineQueue#always_schedule_last}. |

---

##### `AlwaysScheduleLast`<sup>Optional</sup> <a name="AlwaysScheduleLast" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride.property.alwaysScheduleLast"></a>

```go
AlwaysScheduleLast *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#always_schedule_last DeadlineQueue#always_schedule_last}.

---

### DeadlineQueueTags <a name="DeadlineQueueTags" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/deadlinequeue"

&deadlinequeue.DeadlineQueueTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#key DeadlineQueue#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/deadline_queue#value DeadlineQueue#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DeadlineQueueJobAttachmentSettingsOutputReference <a name="DeadlineQueueJobAttachmentSettingsOutputReference" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/deadlinequeue"

deadlinequeue.NewDeadlineQueueJobAttachmentSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DeadlineQueueJobAttachmentSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.resetRootPrefix">ResetRootPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.resetS3BucketName">ResetS3BucketName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRootPrefix` <a name="ResetRootPrefix" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.resetRootPrefix"></a>

```go
func ResetRootPrefix()
```

##### `ResetS3BucketName` <a name="ResetS3BucketName" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.resetS3BucketName"></a>

```go
func ResetS3BucketName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.rootPrefixInput">RootPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.s3BucketNameInput">S3BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.rootPrefix">RootPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.s3BucketName">S3BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RootPrefixInput`<sup>Optional</sup> <a name="RootPrefixInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.rootPrefixInput"></a>

```go
func RootPrefixInput() *string
```

- *Type:* *string

---

##### `S3BucketNameInput`<sup>Optional</sup> <a name="S3BucketNameInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.s3BucketNameInput"></a>

```go
func S3BucketNameInput() *string
```

- *Type:* *string

---

##### `RootPrefix`<sup>Required</sup> <a name="RootPrefix" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.rootPrefix"></a>

```go
func RootPrefix() *string
```

- *Type:* *string

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.s3BucketName"></a>

```go
func S3BucketName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobAttachmentSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DeadlineQueueJobRunAsUserOutputReference <a name="DeadlineQueueJobRunAsUserOutputReference" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/deadlinequeue"

deadlinequeue.NewDeadlineQueueJobRunAsUserOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DeadlineQueueJobRunAsUserOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.putPosix">PutPosix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.putWindows">PutWindows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.resetPosix">ResetPosix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.resetRunAs">ResetRunAs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.resetWindows">ResetWindows</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPosix` <a name="PutPosix" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.putPosix"></a>

```go
func PutPosix(value DeadlineQueueJobRunAsUserPosix)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.putPosix.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosix">DeadlineQueueJobRunAsUserPosix</a>

---

##### `PutWindows` <a name="PutWindows" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.putWindows"></a>

```go
func PutWindows(value DeadlineQueueJobRunAsUserWindows)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.putWindows.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindows">DeadlineQueueJobRunAsUserWindows</a>

---

##### `ResetPosix` <a name="ResetPosix" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.resetPosix"></a>

```go
func ResetPosix()
```

##### `ResetRunAs` <a name="ResetRunAs" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.resetRunAs"></a>

```go
func ResetRunAs()
```

##### `ResetWindows` <a name="ResetWindows" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.resetWindows"></a>

```go
func ResetWindows()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.posix">Posix</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference">DeadlineQueueJobRunAsUserPosixOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.windows">Windows</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference">DeadlineQueueJobRunAsUserWindowsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.posixInput">PosixInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.runAsInput">RunAsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.windowsInput">WindowsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.runAs">RunAs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Posix`<sup>Required</sup> <a name="Posix" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.posix"></a>

```go
func Posix() DeadlineQueueJobRunAsUserPosixOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference">DeadlineQueueJobRunAsUserPosixOutputReference</a>

---

##### `Windows`<sup>Required</sup> <a name="Windows" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.windows"></a>

```go
func Windows() DeadlineQueueJobRunAsUserWindowsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference">DeadlineQueueJobRunAsUserWindowsOutputReference</a>

---

##### `PosixInput`<sup>Optional</sup> <a name="PosixInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.posixInput"></a>

```go
func PosixInput() interface{}
```

- *Type:* interface{}

---

##### `RunAsInput`<sup>Optional</sup> <a name="RunAsInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.runAsInput"></a>

```go
func RunAsInput() *string
```

- *Type:* *string

---

##### `WindowsInput`<sup>Optional</sup> <a name="WindowsInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.windowsInput"></a>

```go
func WindowsInput() interface{}
```

- *Type:* interface{}

---

##### `RunAs`<sup>Required</sup> <a name="RunAs" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.runAs"></a>

```go
func RunAs() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DeadlineQueueJobRunAsUserPosixOutputReference <a name="DeadlineQueueJobRunAsUserPosixOutputReference" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/deadlinequeue"

deadlinequeue.NewDeadlineQueueJobRunAsUserPosixOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DeadlineQueueJobRunAsUserPosixOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.resetGroup">ResetGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.resetUser">ResetUser</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroup` <a name="ResetGroup" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.resetGroup"></a>

```go
func ResetGroup()
```

##### `ResetUser` <a name="ResetUser" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.resetUser"></a>

```go
func ResetUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.groupInput">GroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.userInput">UserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.group">Group</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.user">User</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.groupInput"></a>

```go
func GroupInput() *string
```

- *Type:* *string

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.userInput"></a>

```go
func UserInput() *string
```

- *Type:* *string

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.group"></a>

```go
func Group() *string
```

- *Type:* *string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.user"></a>

```go
func User() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserPosixOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DeadlineQueueJobRunAsUserWindowsOutputReference <a name="DeadlineQueueJobRunAsUserWindowsOutputReference" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/deadlinequeue"

deadlinequeue.NewDeadlineQueueJobRunAsUserWindowsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DeadlineQueueJobRunAsUserWindowsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.resetPasswordArn">ResetPasswordArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.resetUser">ResetUser</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPasswordArn` <a name="ResetPasswordArn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.resetPasswordArn"></a>

```go
func ResetPasswordArn()
```

##### `ResetUser` <a name="ResetUser" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.resetUser"></a>

```go
func ResetUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.passwordArnInput">PasswordArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.userInput">UserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.passwordArn">PasswordArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.user">User</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PasswordArnInput`<sup>Optional</sup> <a name="PasswordArnInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.passwordArnInput"></a>

```go
func PasswordArnInput() *string
```

- *Type:* *string

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.userInput"></a>

```go
func UserInput() *string
```

- *Type:* *string

---

##### `PasswordArn`<sup>Required</sup> <a name="PasswordArn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.passwordArn"></a>

```go
func PasswordArn() *string
```

- *Type:* *string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.user"></a>

```go
func User() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueJobRunAsUserWindowsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DeadlineQueueSchedulingConfigurationOutputReference <a name="DeadlineQueueSchedulingConfigurationOutputReference" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/deadlinequeue"

deadlinequeue.NewDeadlineQueueSchedulingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DeadlineQueueSchedulingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.putPriorityBalanced">PutPriorityBalanced</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.putWeightedBalanced">PutWeightedBalanced</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.resetPriorityBalanced">ResetPriorityBalanced</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.resetPriorityFifo">ResetPriorityFifo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.resetWeightedBalanced">ResetWeightedBalanced</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPriorityBalanced` <a name="PutPriorityBalanced" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.putPriorityBalanced"></a>

```go
func PutPriorityBalanced(value DeadlineQueueSchedulingConfigurationPriorityBalanced)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.putPriorityBalanced.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalanced">DeadlineQueueSchedulingConfigurationPriorityBalanced</a>

---

##### `PutWeightedBalanced` <a name="PutWeightedBalanced" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.putWeightedBalanced"></a>

```go
func PutWeightedBalanced(value DeadlineQueueSchedulingConfigurationWeightedBalanced)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.putWeightedBalanced.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalanced">DeadlineQueueSchedulingConfigurationWeightedBalanced</a>

---

##### `ResetPriorityBalanced` <a name="ResetPriorityBalanced" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.resetPriorityBalanced"></a>

```go
func ResetPriorityBalanced()
```

##### `ResetPriorityFifo` <a name="ResetPriorityFifo" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.resetPriorityFifo"></a>

```go
func ResetPriorityFifo()
```

##### `ResetWeightedBalanced` <a name="ResetWeightedBalanced" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.resetWeightedBalanced"></a>

```go
func ResetWeightedBalanced()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.priorityBalanced">PriorityBalanced</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference">DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.weightedBalanced">WeightedBalanced</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference">DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.priorityBalancedInput">PriorityBalancedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.priorityFifoInput">PriorityFifoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.weightedBalancedInput">WeightedBalancedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.priorityFifo">PriorityFifo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PriorityBalanced`<sup>Required</sup> <a name="PriorityBalanced" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.priorityBalanced"></a>

```go
func PriorityBalanced() DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference">DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference</a>

---

##### `WeightedBalanced`<sup>Required</sup> <a name="WeightedBalanced" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.weightedBalanced"></a>

```go
func WeightedBalanced() DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference">DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference</a>

---

##### `PriorityBalancedInput`<sup>Optional</sup> <a name="PriorityBalancedInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.priorityBalancedInput"></a>

```go
func PriorityBalancedInput() interface{}
```

- *Type:* interface{}

---

##### `PriorityFifoInput`<sup>Optional</sup> <a name="PriorityFifoInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.priorityFifoInput"></a>

```go
func PriorityFifoInput() *string
```

- *Type:* *string

---

##### `WeightedBalancedInput`<sup>Optional</sup> <a name="WeightedBalancedInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.weightedBalancedInput"></a>

```go
func WeightedBalancedInput() interface{}
```

- *Type:* interface{}

---

##### `PriorityFifo`<sup>Required</sup> <a name="PriorityFifo" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.priorityFifo"></a>

```go
func PriorityFifo() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference <a name="DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/deadlinequeue"

deadlinequeue.NewDeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.resetRenderingTaskBuffer">ResetRenderingTaskBuffer</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRenderingTaskBuffer` <a name="ResetRenderingTaskBuffer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.resetRenderingTaskBuffer"></a>

```go
func ResetRenderingTaskBuffer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.renderingTaskBufferInput">RenderingTaskBufferInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.renderingTaskBuffer">RenderingTaskBuffer</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RenderingTaskBufferInput`<sup>Optional</sup> <a name="RenderingTaskBufferInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.renderingTaskBufferInput"></a>

```go
func RenderingTaskBufferInput() *f64
```

- *Type:* *f64

---

##### `RenderingTaskBuffer`<sup>Required</sup> <a name="RenderingTaskBuffer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.renderingTaskBuffer"></a>

```go
func RenderingTaskBuffer() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationPriorityBalancedOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference <a name="DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/deadlinequeue"

deadlinequeue.NewDeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.resetAlwaysScheduleFirst">ResetAlwaysScheduleFirst</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlwaysScheduleFirst` <a name="ResetAlwaysScheduleFirst" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.resetAlwaysScheduleFirst"></a>

```go
func ResetAlwaysScheduleFirst()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.alwaysScheduleFirstInput">AlwaysScheduleFirstInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.alwaysScheduleFirst">AlwaysScheduleFirst</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlwaysScheduleFirstInput`<sup>Optional</sup> <a name="AlwaysScheduleFirstInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.alwaysScheduleFirstInput"></a>

```go
func AlwaysScheduleFirstInput() *string
```

- *Type:* *string

---

##### `AlwaysScheduleFirst`<sup>Required</sup> <a name="AlwaysScheduleFirst" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.alwaysScheduleFirst"></a>

```go
func AlwaysScheduleFirst() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference <a name="DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/deadlinequeue"

deadlinequeue.NewDeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.resetAlwaysScheduleLast">ResetAlwaysScheduleLast</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlwaysScheduleLast` <a name="ResetAlwaysScheduleLast" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.resetAlwaysScheduleLast"></a>

```go
func ResetAlwaysScheduleLast()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.alwaysScheduleLastInput">AlwaysScheduleLastInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.alwaysScheduleLast">AlwaysScheduleLast</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlwaysScheduleLastInput`<sup>Optional</sup> <a name="AlwaysScheduleLastInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.alwaysScheduleLastInput"></a>

```go
func AlwaysScheduleLastInput() *string
```

- *Type:* *string

---

##### `AlwaysScheduleLast`<sup>Required</sup> <a name="AlwaysScheduleLast" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.alwaysScheduleLast"></a>

```go
func AlwaysScheduleLast() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference <a name="DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/deadlinequeue"

deadlinequeue.NewDeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.putMaxPriorityOverride">PutMaxPriorityOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.putMinPriorityOverride">PutMinPriorityOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetErrorWeight">ResetErrorWeight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetMaxPriorityOverride">ResetMaxPriorityOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetMinPriorityOverride">ResetMinPriorityOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetPriorityWeight">ResetPriorityWeight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetRenderingTaskBuffer">ResetRenderingTaskBuffer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetRenderingTaskWeight">ResetRenderingTaskWeight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetSubmissionTimeWeight">ResetSubmissionTimeWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMaxPriorityOverride` <a name="PutMaxPriorityOverride" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.putMaxPriorityOverride"></a>

```go
func PutMaxPriorityOverride(value DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.putMaxPriorityOverride.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverride</a>

---

##### `PutMinPriorityOverride` <a name="PutMinPriorityOverride" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.putMinPriorityOverride"></a>

```go
func PutMinPriorityOverride(value DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.putMinPriorityOverride.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride">DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverride</a>

---

##### `ResetErrorWeight` <a name="ResetErrorWeight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetErrorWeight"></a>

```go
func ResetErrorWeight()
```

##### `ResetMaxPriorityOverride` <a name="ResetMaxPriorityOverride" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetMaxPriorityOverride"></a>

```go
func ResetMaxPriorityOverride()
```

##### `ResetMinPriorityOverride` <a name="ResetMinPriorityOverride" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetMinPriorityOverride"></a>

```go
func ResetMinPriorityOverride()
```

##### `ResetPriorityWeight` <a name="ResetPriorityWeight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetPriorityWeight"></a>

```go
func ResetPriorityWeight()
```

##### `ResetRenderingTaskBuffer` <a name="ResetRenderingTaskBuffer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetRenderingTaskBuffer"></a>

```go
func ResetRenderingTaskBuffer()
```

##### `ResetRenderingTaskWeight` <a name="ResetRenderingTaskWeight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetRenderingTaskWeight"></a>

```go
func ResetRenderingTaskWeight()
```

##### `ResetSubmissionTimeWeight` <a name="ResetSubmissionTimeWeight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.resetSubmissionTimeWeight"></a>

```go
func ResetSubmissionTimeWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.maxPriorityOverride">MaxPriorityOverride</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference">DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.minPriorityOverride">MinPriorityOverride</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference">DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.errorWeightInput">ErrorWeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.maxPriorityOverrideInput">MaxPriorityOverrideInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.minPriorityOverrideInput">MinPriorityOverrideInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.priorityWeightInput">PriorityWeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.renderingTaskBufferInput">RenderingTaskBufferInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.renderingTaskWeightInput">RenderingTaskWeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.submissionTimeWeightInput">SubmissionTimeWeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.errorWeight">ErrorWeight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.priorityWeight">PriorityWeight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.renderingTaskBuffer">RenderingTaskBuffer</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.renderingTaskWeight">RenderingTaskWeight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.submissionTimeWeight">SubmissionTimeWeight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxPriorityOverride`<sup>Required</sup> <a name="MaxPriorityOverride" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.maxPriorityOverride"></a>

```go
func MaxPriorityOverride() DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference">DeadlineQueueSchedulingConfigurationWeightedBalancedMaxPriorityOverrideOutputReference</a>

---

##### `MinPriorityOverride`<sup>Required</sup> <a name="MinPriorityOverride" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.minPriorityOverride"></a>

```go
func MinPriorityOverride() DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference">DeadlineQueueSchedulingConfigurationWeightedBalancedMinPriorityOverrideOutputReference</a>

---

##### `ErrorWeightInput`<sup>Optional</sup> <a name="ErrorWeightInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.errorWeightInput"></a>

```go
func ErrorWeightInput() *f64
```

- *Type:* *f64

---

##### `MaxPriorityOverrideInput`<sup>Optional</sup> <a name="MaxPriorityOverrideInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.maxPriorityOverrideInput"></a>

```go
func MaxPriorityOverrideInput() interface{}
```

- *Type:* interface{}

---

##### `MinPriorityOverrideInput`<sup>Optional</sup> <a name="MinPriorityOverrideInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.minPriorityOverrideInput"></a>

```go
func MinPriorityOverrideInput() interface{}
```

- *Type:* interface{}

---

##### `PriorityWeightInput`<sup>Optional</sup> <a name="PriorityWeightInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.priorityWeightInput"></a>

```go
func PriorityWeightInput() *f64
```

- *Type:* *f64

---

##### `RenderingTaskBufferInput`<sup>Optional</sup> <a name="RenderingTaskBufferInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.renderingTaskBufferInput"></a>

```go
func RenderingTaskBufferInput() *f64
```

- *Type:* *f64

---

##### `RenderingTaskWeightInput`<sup>Optional</sup> <a name="RenderingTaskWeightInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.renderingTaskWeightInput"></a>

```go
func RenderingTaskWeightInput() *f64
```

- *Type:* *f64

---

##### `SubmissionTimeWeightInput`<sup>Optional</sup> <a name="SubmissionTimeWeightInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.submissionTimeWeightInput"></a>

```go
func SubmissionTimeWeightInput() *f64
```

- *Type:* *f64

---

##### `ErrorWeight`<sup>Required</sup> <a name="ErrorWeight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.errorWeight"></a>

```go
func ErrorWeight() *f64
```

- *Type:* *f64

---

##### `PriorityWeight`<sup>Required</sup> <a name="PriorityWeight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.priorityWeight"></a>

```go
func PriorityWeight() *f64
```

- *Type:* *f64

---

##### `RenderingTaskBuffer`<sup>Required</sup> <a name="RenderingTaskBuffer" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.renderingTaskBuffer"></a>

```go
func RenderingTaskBuffer() *f64
```

- *Type:* *f64

---

##### `RenderingTaskWeight`<sup>Required</sup> <a name="RenderingTaskWeight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.renderingTaskWeight"></a>

```go
func RenderingTaskWeight() *f64
```

- *Type:* *f64

---

##### `SubmissionTimeWeight`<sup>Required</sup> <a name="SubmissionTimeWeight" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.submissionTimeWeight"></a>

```go
func SubmissionTimeWeight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueSchedulingConfigurationWeightedBalancedOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DeadlineQueueTagsList <a name="DeadlineQueueTagsList" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/deadlinequeue"

deadlinequeue.NewDeadlineQueueTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DeadlineQueueTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.get"></a>

```go
func Get(index *f64) DeadlineQueueTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DeadlineQueueTagsOutputReference <a name="DeadlineQueueTagsOutputReference" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/deadlinequeue"

deadlinequeue.NewDeadlineQueueTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DeadlineQueueTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.deadlineQueue.DeadlineQueueTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



