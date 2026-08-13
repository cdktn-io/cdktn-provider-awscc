# `iotwirelessWirelessDeviceImportTask` Submodule <a name="`iotwirelessWirelessDeviceImportTask` Submodule" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotwirelessWirelessDeviceImportTask <a name="IotwirelessWirelessDeviceImportTask" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device_import_task awscc_iotwireless_wireless_device_import_task}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesswirelessdeviceimporttask"

iotwirelesswirelessdeviceimporttask.NewIotwirelessWirelessDeviceImportTask(scope Construct, id *string, config IotwirelessWirelessDeviceImportTaskConfig) IotwirelessWirelessDeviceImportTask
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig">IotwirelessWirelessDeviceImportTaskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig">IotwirelessWirelessDeviceImportTaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.putSidewalk">PutSidewalk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSidewalk` <a name="PutSidewalk" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.putSidewalk"></a>

```go
func PutSidewalk(value IotwirelessWirelessDeviceImportTaskSidewalk)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.putSidewalk.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk">IotwirelessWirelessDeviceImportTaskSidewalk</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IotwirelessWirelessDeviceImportTask resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesswirelessdeviceimporttask"

iotwirelesswirelessdeviceimporttask.IotwirelessWirelessDeviceImportTask_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesswirelessdeviceimporttask"

iotwirelesswirelessdeviceimporttask.IotwirelessWirelessDeviceImportTask_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesswirelessdeviceimporttask"

iotwirelesswirelessdeviceimporttask.IotwirelessWirelessDeviceImportTask_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesswirelessdeviceimporttask"

iotwirelesswirelessdeviceimporttask.IotwirelessWirelessDeviceImportTask_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a IotwirelessWirelessDeviceImportTask resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IotwirelessWirelessDeviceImportTask to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IotwirelessWirelessDeviceImportTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device_import_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the IotwirelessWirelessDeviceImportTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.creationDate">CreationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.failedImportedDevicesCount">FailedImportedDevicesCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.initializedImportedDevicesCount">InitializedImportedDevicesCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.onboardedImportedDevicesCount">OnboardedImportedDevicesCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.pendingImportedDevicesCount">PendingImportedDevicesCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.sidewalk">Sidewalk</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference">IotwirelessWirelessDeviceImportTaskSidewalkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.statusReason">StatusReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList">IotwirelessWirelessDeviceImportTaskTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.wirelessDeviceImportTaskId">WirelessDeviceImportTaskId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.destinationNameInput">DestinationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.sidewalkInput">SidewalkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.destinationName">DestinationName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.creationDate"></a>

```go
func CreationDate() *string
```

- *Type:* *string

---

##### `FailedImportedDevicesCount`<sup>Required</sup> <a name="FailedImportedDevicesCount" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.failedImportedDevicesCount"></a>

```go
func FailedImportedDevicesCount() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InitializedImportedDevicesCount`<sup>Required</sup> <a name="InitializedImportedDevicesCount" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.initializedImportedDevicesCount"></a>

```go
func InitializedImportedDevicesCount() *f64
```

- *Type:* *f64

---

##### `OnboardedImportedDevicesCount`<sup>Required</sup> <a name="OnboardedImportedDevicesCount" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.onboardedImportedDevicesCount"></a>

```go
func OnboardedImportedDevicesCount() *f64
```

- *Type:* *f64

---

##### `PendingImportedDevicesCount`<sup>Required</sup> <a name="PendingImportedDevicesCount" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.pendingImportedDevicesCount"></a>

```go
func PendingImportedDevicesCount() *f64
```

- *Type:* *f64

---

##### `Sidewalk`<sup>Required</sup> <a name="Sidewalk" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.sidewalk"></a>

```go
func Sidewalk() IotwirelessWirelessDeviceImportTaskSidewalkOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference">IotwirelessWirelessDeviceImportTaskSidewalkOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusReason`<sup>Required</sup> <a name="StatusReason" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.statusReason"></a>

```go
func StatusReason() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.tags"></a>

```go
func Tags() IotwirelessWirelessDeviceImportTaskTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList">IotwirelessWirelessDeviceImportTaskTagsList</a>

---

##### `WirelessDeviceImportTaskId`<sup>Required</sup> <a name="WirelessDeviceImportTaskId" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.wirelessDeviceImportTaskId"></a>

```go
func WirelessDeviceImportTaskId() *string
```

- *Type:* *string

---

##### `DestinationNameInput`<sup>Optional</sup> <a name="DestinationNameInput" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.destinationNameInput"></a>

```go
func DestinationNameInput() *string
```

- *Type:* *string

---

##### `SidewalkInput`<sup>Optional</sup> <a name="SidewalkInput" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.sidewalkInput"></a>

```go
func SidewalkInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `DestinationName`<sup>Required</sup> <a name="DestinationName" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.destinationName"></a>

```go
func DestinationName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IotwirelessWirelessDeviceImportTaskConfig <a name="IotwirelessWirelessDeviceImportTaskConfig" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesswirelessdeviceimporttask"

&iotwirelesswirelessdeviceimporttask.IotwirelessWirelessDeviceImportTaskConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DestinationName: *string,
	Sidewalk: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.destinationName">DestinationName</a></code> | <code>*string</code> | Destination Name for import task. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.sidewalk">Sidewalk</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk">IotwirelessWirelessDeviceImportTaskSidewalk</a></code> | sidewalk contain file for created device and role. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DestinationName`<sup>Required</sup> <a name="DestinationName" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.destinationName"></a>

```go
DestinationName *string
```

- *Type:* *string

Destination Name for import task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device_import_task#destination_name IotwirelessWirelessDeviceImportTask#destination_name}

---

##### `Sidewalk`<sup>Required</sup> <a name="Sidewalk" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.sidewalk"></a>

```go
Sidewalk IotwirelessWirelessDeviceImportTaskSidewalk
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk">IotwirelessWirelessDeviceImportTaskSidewalk</a>

sidewalk contain file for created device and role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device_import_task#sidewalk IotwirelessWirelessDeviceImportTask#sidewalk}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device_import_task#tags IotwirelessWirelessDeviceImportTask#tags}

---

### IotwirelessWirelessDeviceImportTaskSidewalk <a name="IotwirelessWirelessDeviceImportTaskSidewalk" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesswirelessdeviceimporttask"

&iotwirelesswirelessdeviceimporttask.IotwirelessWirelessDeviceImportTaskSidewalk {
	DeviceCreationFile: *string,
	Role: *string,
	SidewalkManufacturingSn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk.property.deviceCreationFile">DeviceCreationFile</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device_import_task#device_creation_file IotwirelessWirelessDeviceImportTask#device_creation_file}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk.property.role">Role</a></code> | <code>*string</code> | sidewalk role. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk.property.sidewalkManufacturingSn">SidewalkManufacturingSn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device_import_task#sidewalk_manufacturing_sn IotwirelessWirelessDeviceImportTask#sidewalk_manufacturing_sn}. |

---

##### `DeviceCreationFile`<sup>Optional</sup> <a name="DeviceCreationFile" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk.property.deviceCreationFile"></a>

```go
DeviceCreationFile *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device_import_task#device_creation_file IotwirelessWirelessDeviceImportTask#device_creation_file}.

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk.property.role"></a>

```go
Role *string
```

- *Type:* *string

sidewalk role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device_import_task#role IotwirelessWirelessDeviceImportTask#role}

---

##### `SidewalkManufacturingSn`<sup>Optional</sup> <a name="SidewalkManufacturingSn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk.property.sidewalkManufacturingSn"></a>

```go
SidewalkManufacturingSn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device_import_task#sidewalk_manufacturing_sn IotwirelessWirelessDeviceImportTask#sidewalk_manufacturing_sn}.

---

### IotwirelessWirelessDeviceImportTaskTags <a name="IotwirelessWirelessDeviceImportTaskTags" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesswirelessdeviceimporttask"

&iotwirelesswirelessdeviceimporttask.IotwirelessWirelessDeviceImportTaskTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device_import_task#key IotwirelessWirelessDeviceImportTask#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device_import_task#value IotwirelessWirelessDeviceImportTask#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IotwirelessWirelessDeviceImportTaskSidewalkOutputReference <a name="IotwirelessWirelessDeviceImportTaskSidewalkOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesswirelessdeviceimporttask"

iotwirelesswirelessdeviceimporttask.NewIotwirelessWirelessDeviceImportTaskSidewalkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotwirelessWirelessDeviceImportTaskSidewalkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.resetDeviceCreationFile">ResetDeviceCreationFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.resetRole">ResetRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.resetSidewalkManufacturingSn">ResetSidewalkManufacturingSn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeviceCreationFile` <a name="ResetDeviceCreationFile" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.resetDeviceCreationFile"></a>

```go
func ResetDeviceCreationFile()
```

##### `ResetRole` <a name="ResetRole" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.resetRole"></a>

```go
func ResetRole()
```

##### `ResetSidewalkManufacturingSn` <a name="ResetSidewalkManufacturingSn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.resetSidewalkManufacturingSn"></a>

```go
func ResetSidewalkManufacturingSn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.deviceCreationFileList">DeviceCreationFileList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.deviceCreationFileInput">DeviceCreationFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.sidewalkManufacturingSnInput">SidewalkManufacturingSnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.deviceCreationFile">DeviceCreationFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.sidewalkManufacturingSn">SidewalkManufacturingSn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeviceCreationFileList`<sup>Required</sup> <a name="DeviceCreationFileList" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.deviceCreationFileList"></a>

```go
func DeviceCreationFileList() *[]*string
```

- *Type:* *[]*string

---

##### `DeviceCreationFileInput`<sup>Optional</sup> <a name="DeviceCreationFileInput" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.deviceCreationFileInput"></a>

```go
func DeviceCreationFileInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `SidewalkManufacturingSnInput`<sup>Optional</sup> <a name="SidewalkManufacturingSnInput" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.sidewalkManufacturingSnInput"></a>

```go
func SidewalkManufacturingSnInput() *string
```

- *Type:* *string

---

##### `DeviceCreationFile`<sup>Required</sup> <a name="DeviceCreationFile" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.deviceCreationFile"></a>

```go
func DeviceCreationFile() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `SidewalkManufacturingSn`<sup>Required</sup> <a name="SidewalkManufacturingSn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.sidewalkManufacturingSn"></a>

```go
func SidewalkManufacturingSn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotwirelessWirelessDeviceImportTaskTagsList <a name="IotwirelessWirelessDeviceImportTaskTagsList" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesswirelessdeviceimporttask"

iotwirelesswirelessdeviceimporttask.NewIotwirelessWirelessDeviceImportTaskTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotwirelessWirelessDeviceImportTaskTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.get"></a>

```go
func Get(index *f64) IotwirelessWirelessDeviceImportTaskTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotwirelessWirelessDeviceImportTaskTagsOutputReference <a name="IotwirelessWirelessDeviceImportTaskTagsOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotwirelesswirelessdeviceimporttask"

iotwirelesswirelessdeviceimporttask.NewIotwirelessWirelessDeviceImportTaskTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotwirelessWirelessDeviceImportTaskTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



