# `workspacesthinclientEnvironment` Submodule <a name="`workspacesthinclientEnvironment` Submodule" id="@cdktn/provider-awscc.workspacesthinclientEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspacesthinclientEnvironment <a name="WorkspacesthinclientEnvironment" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesthinclient_environment awscc_workspacesthinclient_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesthinclientenvironment"

workspacesthinclientenvironment.NewWorkspacesthinclientEnvironment(scope Construct, id *string, config WorkspacesthinclientEnvironmentConfig) WorkspacesthinclientEnvironment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig">WorkspacesthinclientEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig">WorkspacesthinclientEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.putDeviceCreationTags">PutDeviceCreationTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.putMaintenanceWindow">PutMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetDesiredSoftwareSetId">ResetDesiredSoftwareSetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetDesktopEndpoint">ResetDesktopEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetDeviceCreationTags">ResetDeviceCreationTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetSoftwareSetUpdateMode">ResetSoftwareSetUpdateMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetSoftwareSetUpdateSchedule">ResetSoftwareSetUpdateSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDeviceCreationTags` <a name="PutDeviceCreationTags" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.putDeviceCreationTags"></a>

```go
func PutDeviceCreationTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.putDeviceCreationTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMaintenanceWindow` <a name="PutMaintenanceWindow" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.putMaintenanceWindow"></a>

```go
func PutMaintenanceWindow(value WorkspacesthinclientEnvironmentMaintenanceWindow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow">WorkspacesthinclientEnvironmentMaintenanceWindow</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDesiredSoftwareSetId` <a name="ResetDesiredSoftwareSetId" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetDesiredSoftwareSetId"></a>

```go
func ResetDesiredSoftwareSetId()
```

##### `ResetDesktopEndpoint` <a name="ResetDesktopEndpoint" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetDesktopEndpoint"></a>

```go
func ResetDesktopEndpoint()
```

##### `ResetDeviceCreationTags` <a name="ResetDeviceCreationTags" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetDeviceCreationTags"></a>

```go
func ResetDeviceCreationTags()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetMaintenanceWindow"></a>

```go
func ResetMaintenanceWindow()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetName"></a>

```go
func ResetName()
```

##### `ResetSoftwareSetUpdateMode` <a name="ResetSoftwareSetUpdateMode" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetSoftwareSetUpdateMode"></a>

```go
func ResetSoftwareSetUpdateMode()
```

##### `ResetSoftwareSetUpdateSchedule` <a name="ResetSoftwareSetUpdateSchedule" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetSoftwareSetUpdateSchedule"></a>

```go
func ResetSoftwareSetUpdateSchedule()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WorkspacesthinclientEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesthinclientenvironment"

workspacesthinclientenvironment.WorkspacesthinclientEnvironment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesthinclientenvironment"

workspacesthinclientenvironment.WorkspacesthinclientEnvironment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesthinclientenvironment"

workspacesthinclientenvironment.WorkspacesthinclientEnvironment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesthinclientenvironment"

workspacesthinclientenvironment.WorkspacesthinclientEnvironment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a WorkspacesthinclientEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WorkspacesthinclientEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WorkspacesthinclientEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesthinclient_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the WorkspacesthinclientEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.activationCode">ActivationCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desktopType">DesktopType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.deviceCreationTags">DeviceCreationTags</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList">WorkspacesthinclientEnvironmentDeviceCreationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.environmentId">EnvironmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference">WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.pendingSoftwareSetId">PendingSoftwareSetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.pendingSoftwareSetVersion">PendingSoftwareSetVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.registeredDevicesCount">RegisteredDevicesCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.softwareSetComplianceStatus">SoftwareSetComplianceStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList">WorkspacesthinclientEnvironmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desiredSoftwareSetIdInput">DesiredSoftwareSetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desktopArnInput">DesktopArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desktopEndpointInput">DesktopEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.deviceCreationTagsInput">DeviceCreationTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.softwareSetUpdateModeInput">SoftwareSetUpdateModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.softwareSetUpdateScheduleInput">SoftwareSetUpdateScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desiredSoftwareSetId">DesiredSoftwareSetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desktopArn">DesktopArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desktopEndpoint">DesktopEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.softwareSetUpdateMode">SoftwareSetUpdateMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.softwareSetUpdateSchedule">SoftwareSetUpdateSchedule</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActivationCode`<sup>Required</sup> <a name="ActivationCode" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.activationCode"></a>

```go
func ActivationCode() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DesktopType`<sup>Required</sup> <a name="DesktopType" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desktopType"></a>

```go
func DesktopType() *string
```

- *Type:* *string

---

##### `DeviceCreationTags`<sup>Required</sup> <a name="DeviceCreationTags" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.deviceCreationTags"></a>

```go
func DeviceCreationTags() WorkspacesthinclientEnvironmentDeviceCreationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList">WorkspacesthinclientEnvironmentDeviceCreationTagsList</a>

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.environmentId"></a>

```go
func EnvironmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.maintenanceWindow"></a>

```go
func MaintenanceWindow() WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference">WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference</a>

---

##### `PendingSoftwareSetId`<sup>Required</sup> <a name="PendingSoftwareSetId" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.pendingSoftwareSetId"></a>

```go
func PendingSoftwareSetId() *string
```

- *Type:* *string

---

##### `PendingSoftwareSetVersion`<sup>Required</sup> <a name="PendingSoftwareSetVersion" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.pendingSoftwareSetVersion"></a>

```go
func PendingSoftwareSetVersion() *string
```

- *Type:* *string

---

##### `RegisteredDevicesCount`<sup>Required</sup> <a name="RegisteredDevicesCount" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.registeredDevicesCount"></a>

```go
func RegisteredDevicesCount() *f64
```

- *Type:* *f64

---

##### `SoftwareSetComplianceStatus`<sup>Required</sup> <a name="SoftwareSetComplianceStatus" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.softwareSetComplianceStatus"></a>

```go
func SoftwareSetComplianceStatus() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.tags"></a>

```go
func Tags() WorkspacesthinclientEnvironmentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList">WorkspacesthinclientEnvironmentTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `DesiredSoftwareSetIdInput`<sup>Optional</sup> <a name="DesiredSoftwareSetIdInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desiredSoftwareSetIdInput"></a>

```go
func DesiredSoftwareSetIdInput() *string
```

- *Type:* *string

---

##### `DesktopArnInput`<sup>Optional</sup> <a name="DesktopArnInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desktopArnInput"></a>

```go
func DesktopArnInput() *string
```

- *Type:* *string

---

##### `DesktopEndpointInput`<sup>Optional</sup> <a name="DesktopEndpointInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desktopEndpointInput"></a>

```go
func DesktopEndpointInput() *string
```

- *Type:* *string

---

##### `DeviceCreationTagsInput`<sup>Optional</sup> <a name="DeviceCreationTagsInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.deviceCreationTagsInput"></a>

```go
func DeviceCreationTagsInput() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.maintenanceWindowInput"></a>

```go
func MaintenanceWindowInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SoftwareSetUpdateModeInput`<sup>Optional</sup> <a name="SoftwareSetUpdateModeInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.softwareSetUpdateModeInput"></a>

```go
func SoftwareSetUpdateModeInput() *string
```

- *Type:* *string

---

##### `SoftwareSetUpdateScheduleInput`<sup>Optional</sup> <a name="SoftwareSetUpdateScheduleInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.softwareSetUpdateScheduleInput"></a>

```go
func SoftwareSetUpdateScheduleInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `DesiredSoftwareSetId`<sup>Required</sup> <a name="DesiredSoftwareSetId" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desiredSoftwareSetId"></a>

```go
func DesiredSoftwareSetId() *string
```

- *Type:* *string

---

##### `DesktopArn`<sup>Required</sup> <a name="DesktopArn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desktopArn"></a>

```go
func DesktopArn() *string
```

- *Type:* *string

---

##### `DesktopEndpoint`<sup>Required</sup> <a name="DesktopEndpoint" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.desktopEndpoint"></a>

```go
func DesktopEndpoint() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SoftwareSetUpdateMode`<sup>Required</sup> <a name="SoftwareSetUpdateMode" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.softwareSetUpdateMode"></a>

```go
func SoftwareSetUpdateMode() *string
```

- *Type:* *string

---

##### `SoftwareSetUpdateSchedule`<sup>Required</sup> <a name="SoftwareSetUpdateSchedule" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.softwareSetUpdateSchedule"></a>

```go
func SoftwareSetUpdateSchedule() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspacesthinclientEnvironmentConfig <a name="WorkspacesthinclientEnvironmentConfig" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesthinclientenvironment"

&workspacesthinclientenvironment.WorkspacesthinclientEnvironmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DesktopArn: *string,
	DesiredSoftwareSetId: *string,
	DesktopEndpoint: *string,
	DeviceCreationTags: interface{},
	KmsKeyArn: *string,
	MaintenanceWindow: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow,
	Name: *string,
	SoftwareSetUpdateMode: *string,
	SoftwareSetUpdateSchedule: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.desktopArn">DesktopArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the desktop to stream from Amazon WorkSpaces, WorkSpaces Web, or AppStream 2.0. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.desiredSoftwareSetId">DesiredSoftwareSetId</a></code> | <code>*string</code> | The ID of the software set to apply. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.desktopEndpoint">DesktopEndpoint</a></code> | <code>*string</code> | The URL for the identity provider login (only for environments that use AppStream 2.0). |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.deviceCreationTags">DeviceCreationTags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to the newly created devices for this environment. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the AWS Key Management Service key used to encrypt the environment. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow">WorkspacesthinclientEnvironmentMaintenanceWindow</a></code> | A specification for a time window to apply software updates. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.name">Name</a></code> | <code>*string</code> | The name of the environment. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.softwareSetUpdateMode">SoftwareSetUpdateMode</a></code> | <code>*string</code> | An option to define which software updates to apply. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.softwareSetUpdateSchedule">SoftwareSetUpdateSchedule</a></code> | <code>*string</code> | An option to define if software updates should be applied within a maintenance window. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DesktopArn`<sup>Required</sup> <a name="DesktopArn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.desktopArn"></a>

```go
DesktopArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the desktop to stream from Amazon WorkSpaces, WorkSpaces Web, or AppStream 2.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesthinclient_environment#desktop_arn WorkspacesthinclientEnvironment#desktop_arn}

---

##### `DesiredSoftwareSetId`<sup>Optional</sup> <a name="DesiredSoftwareSetId" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.desiredSoftwareSetId"></a>

```go
DesiredSoftwareSetId *string
```

- *Type:* *string

The ID of the software set to apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesthinclient_environment#desired_software_set_id WorkspacesthinclientEnvironment#desired_software_set_id}

---

##### `DesktopEndpoint`<sup>Optional</sup> <a name="DesktopEndpoint" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.desktopEndpoint"></a>

```go
DesktopEndpoint *string
```

- *Type:* *string

The URL for the identity provider login (only for environments that use AppStream 2.0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesthinclient_environment#desktop_endpoint WorkspacesthinclientEnvironment#desktop_endpoint}

---

##### `DeviceCreationTags`<sup>Optional</sup> <a name="DeviceCreationTags" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.deviceCreationTags"></a>

```go
DeviceCreationTags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to the newly created devices for this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesthinclient_environment#device_creation_tags WorkspacesthinclientEnvironment#device_creation_tags}

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the AWS Key Management Service key used to encrypt the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesthinclient_environment#kms_key_arn WorkspacesthinclientEnvironment#kms_key_arn}

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.maintenanceWindow"></a>

```go
MaintenanceWindow WorkspacesthinclientEnvironmentMaintenanceWindow
```

- *Type:* <a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow">WorkspacesthinclientEnvironmentMaintenanceWindow</a>

A specification for a time window to apply software updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesthinclient_environment#maintenance_window WorkspacesthinclientEnvironment#maintenance_window}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesthinclient_environment#name WorkspacesthinclientEnvironment#name}

---

##### `SoftwareSetUpdateMode`<sup>Optional</sup> <a name="SoftwareSetUpdateMode" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.softwareSetUpdateMode"></a>

```go
SoftwareSetUpdateMode *string
```

- *Type:* *string

An option to define which software updates to apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesthinclient_environment#software_set_update_mode WorkspacesthinclientEnvironment#software_set_update_mode}

---

##### `SoftwareSetUpdateSchedule`<sup>Optional</sup> <a name="SoftwareSetUpdateSchedule" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.softwareSetUpdateSchedule"></a>

```go
SoftwareSetUpdateSchedule *string
```

- *Type:* *string

An option to define if software updates should be applied within a maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesthinclient_environment#software_set_update_schedule WorkspacesthinclientEnvironment#software_set_update_schedule}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesthinclient_environment#tags WorkspacesthinclientEnvironment#tags}

---

### WorkspacesthinclientEnvironmentDeviceCreationTags <a name="WorkspacesthinclientEnvironmentDeviceCreationTags" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesthinclientenvironment"

&workspacesthinclientenvironment.WorkspacesthinclientEnvironmentDeviceCreationTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesthinclient_environment#key WorkspacesthinclientEnvironment#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesthinclient_environment#value WorkspacesthinclientEnvironment#value}

---

### WorkspacesthinclientEnvironmentMaintenanceWindow <a name="WorkspacesthinclientEnvironmentMaintenanceWindow" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesthinclientenvironment"

&workspacesthinclientenvironment.WorkspacesthinclientEnvironmentMaintenanceWindow {
	ApplyTimeOf: *string,
	DaysOfTheWeek: *[]*string,
	EndTimeHour: *f64,
	EndTimeMinute: *f64,
	StartTimeHour: *f64,
	StartTimeMinute: *f64,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.applyTimeOf">ApplyTimeOf</a></code> | <code>*string</code> | The desired time zone maintenance window. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.daysOfTheWeek">DaysOfTheWeek</a></code> | <code>*[]*string</code> | The date of maintenance window. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.endTimeHour">EndTimeHour</a></code> | <code>*f64</code> | The hour end time of maintenance window. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.endTimeMinute">EndTimeMinute</a></code> | <code>*f64</code> | The minute end time of maintenance window. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.startTimeHour">StartTimeHour</a></code> | <code>*f64</code> | The hour start time of maintenance window. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.startTimeMinute">StartTimeMinute</a></code> | <code>*f64</code> | The minute start time of maintenance window. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.type">Type</a></code> | <code>*string</code> | The type of maintenance window. |

---

##### `ApplyTimeOf`<sup>Optional</sup> <a name="ApplyTimeOf" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.applyTimeOf"></a>

```go
ApplyTimeOf *string
```

- *Type:* *string

The desired time zone maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesthinclient_environment#apply_time_of WorkspacesthinclientEnvironment#apply_time_of}

---

##### `DaysOfTheWeek`<sup>Optional</sup> <a name="DaysOfTheWeek" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.daysOfTheWeek"></a>

```go
DaysOfTheWeek *[]*string
```

- *Type:* *[]*string

The date of maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesthinclient_environment#days_of_the_week WorkspacesthinclientEnvironment#days_of_the_week}

---

##### `EndTimeHour`<sup>Optional</sup> <a name="EndTimeHour" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.endTimeHour"></a>

```go
EndTimeHour *f64
```

- *Type:* *f64

The hour end time of maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesthinclient_environment#end_time_hour WorkspacesthinclientEnvironment#end_time_hour}

---

##### `EndTimeMinute`<sup>Optional</sup> <a name="EndTimeMinute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.endTimeMinute"></a>

```go
EndTimeMinute *f64
```

- *Type:* *f64

The minute end time of maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesthinclient_environment#end_time_minute WorkspacesthinclientEnvironment#end_time_minute}

---

##### `StartTimeHour`<sup>Optional</sup> <a name="StartTimeHour" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.startTimeHour"></a>

```go
StartTimeHour *f64
```

- *Type:* *f64

The hour start time of maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesthinclient_environment#start_time_hour WorkspacesthinclientEnvironment#start_time_hour}

---

##### `StartTimeMinute`<sup>Optional</sup> <a name="StartTimeMinute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.startTimeMinute"></a>

```go
StartTimeMinute *f64
```

- *Type:* *f64

The minute start time of maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesthinclient_environment#start_time_minute WorkspacesthinclientEnvironment#start_time_minute}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindow.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesthinclient_environment#type WorkspacesthinclientEnvironment#type}

---

### WorkspacesthinclientEnvironmentTags <a name="WorkspacesthinclientEnvironmentTags" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesthinclientenvironment"

&workspacesthinclientenvironment.WorkspacesthinclientEnvironmentTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesthinclient_environment#key WorkspacesthinclientEnvironment#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/workspacesthinclient_environment#value WorkspacesthinclientEnvironment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspacesthinclientEnvironmentDeviceCreationTagsList <a name="WorkspacesthinclientEnvironmentDeviceCreationTagsList" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesthinclientenvironment"

workspacesthinclientenvironment.NewWorkspacesthinclientEnvironmentDeviceCreationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkspacesthinclientEnvironmentDeviceCreationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.get"></a>

```go
func Get(index *f64) WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference <a name="WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesthinclientenvironment"

workspacesthinclientenvironment.NewWorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentDeviceCreationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference <a name="WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesthinclientenvironment"

workspacesthinclientenvironment.NewWorkspacesthinclientEnvironmentMaintenanceWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetApplyTimeOf">ResetApplyTimeOf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetDaysOfTheWeek">ResetDaysOfTheWeek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetEndTimeHour">ResetEndTimeHour</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetEndTimeMinute">ResetEndTimeMinute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetStartTimeHour">ResetStartTimeHour</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetStartTimeMinute">ResetStartTimeMinute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplyTimeOf` <a name="ResetApplyTimeOf" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetApplyTimeOf"></a>

```go
func ResetApplyTimeOf()
```

##### `ResetDaysOfTheWeek` <a name="ResetDaysOfTheWeek" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetDaysOfTheWeek"></a>

```go
func ResetDaysOfTheWeek()
```

##### `ResetEndTimeHour` <a name="ResetEndTimeHour" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetEndTimeHour"></a>

```go
func ResetEndTimeHour()
```

##### `ResetEndTimeMinute` <a name="ResetEndTimeMinute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetEndTimeMinute"></a>

```go
func ResetEndTimeMinute()
```

##### `ResetStartTimeHour` <a name="ResetStartTimeHour" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetStartTimeHour"></a>

```go
func ResetStartTimeHour()
```

##### `ResetStartTimeMinute` <a name="ResetStartTimeMinute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetStartTimeMinute"></a>

```go
func ResetStartTimeMinute()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.applyTimeOfInput">ApplyTimeOfInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.daysOfTheWeekInput">DaysOfTheWeekInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.endTimeHourInput">EndTimeHourInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.endTimeMinuteInput">EndTimeMinuteInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.startTimeHourInput">StartTimeHourInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.startTimeMinuteInput">StartTimeMinuteInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.applyTimeOf">ApplyTimeOf</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.daysOfTheWeek">DaysOfTheWeek</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.endTimeHour">EndTimeHour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.endTimeMinute">EndTimeMinute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.startTimeHour">StartTimeHour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.startTimeMinute">StartTimeMinute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplyTimeOfInput`<sup>Optional</sup> <a name="ApplyTimeOfInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.applyTimeOfInput"></a>

```go
func ApplyTimeOfInput() *string
```

- *Type:* *string

---

##### `DaysOfTheWeekInput`<sup>Optional</sup> <a name="DaysOfTheWeekInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.daysOfTheWeekInput"></a>

```go
func DaysOfTheWeekInput() *[]*string
```

- *Type:* *[]*string

---

##### `EndTimeHourInput`<sup>Optional</sup> <a name="EndTimeHourInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.endTimeHourInput"></a>

```go
func EndTimeHourInput() *f64
```

- *Type:* *f64

---

##### `EndTimeMinuteInput`<sup>Optional</sup> <a name="EndTimeMinuteInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.endTimeMinuteInput"></a>

```go
func EndTimeMinuteInput() *f64
```

- *Type:* *f64

---

##### `StartTimeHourInput`<sup>Optional</sup> <a name="StartTimeHourInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.startTimeHourInput"></a>

```go
func StartTimeHourInput() *f64
```

- *Type:* *f64

---

##### `StartTimeMinuteInput`<sup>Optional</sup> <a name="StartTimeMinuteInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.startTimeMinuteInput"></a>

```go
func StartTimeMinuteInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ApplyTimeOf`<sup>Required</sup> <a name="ApplyTimeOf" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.applyTimeOf"></a>

```go
func ApplyTimeOf() *string
```

- *Type:* *string

---

##### `DaysOfTheWeek`<sup>Required</sup> <a name="DaysOfTheWeek" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.daysOfTheWeek"></a>

```go
func DaysOfTheWeek() *[]*string
```

- *Type:* *[]*string

---

##### `EndTimeHour`<sup>Required</sup> <a name="EndTimeHour" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.endTimeHour"></a>

```go
func EndTimeHour() *f64
```

- *Type:* *f64

---

##### `EndTimeMinute`<sup>Required</sup> <a name="EndTimeMinute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.endTimeMinute"></a>

```go
func EndTimeMinute() *f64
```

- *Type:* *f64

---

##### `StartTimeHour`<sup>Required</sup> <a name="StartTimeHour" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.startTimeHour"></a>

```go
func StartTimeHour() *f64
```

- *Type:* *f64

---

##### `StartTimeMinute`<sup>Required</sup> <a name="StartTimeMinute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.startTimeMinute"></a>

```go
func StartTimeMinute() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentMaintenanceWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesthinclientEnvironmentTagsList <a name="WorkspacesthinclientEnvironmentTagsList" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesthinclientenvironment"

workspacesthinclientenvironment.NewWorkspacesthinclientEnvironmentTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkspacesthinclientEnvironmentTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.get"></a>

```go
func Get(index *f64) WorkspacesthinclientEnvironmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspacesthinclientEnvironmentTagsOutputReference <a name="WorkspacesthinclientEnvironmentTagsOutputReference" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspacesthinclientenvironment"

workspacesthinclientenvironment.NewWorkspacesthinclientEnvironmentTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkspacesthinclientEnvironmentTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspacesthinclientEnvironment.WorkspacesthinclientEnvironmentTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



