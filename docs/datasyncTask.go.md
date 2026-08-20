# `datasyncTask` Submodule <a name="`datasyncTask` Submodule" id="@cdktn/provider-awscc.datasyncTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncTask <a name="DatasyncTask" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task awscc_datasync_task}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynctask"

datasynctask.NewDatasyncTask(scope Construct, id *string, config DatasyncTaskConfig) DatasyncTask
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig">DatasyncTaskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig">DatasyncTaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.putExcludes">PutExcludes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.putIncludes">PutIncludes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.putManifestConfig">PutManifestConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.putOptions">PutOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.putTaskReportConfig">PutTaskReportConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetCloudwatchLogGroupArn">ResetCloudwatchLogGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetExcludes">ResetExcludes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetIncludes">ResetIncludes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetManifestConfig">ResetManifestConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetTaskMode">ResetTaskMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetTaskReportConfig">ResetTaskReportConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExcludes` <a name="PutExcludes" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putExcludes"></a>

```go
func PutExcludes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putExcludes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIncludes` <a name="PutIncludes" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putIncludes"></a>

```go
func PutIncludes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putIncludes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutManifestConfig` <a name="PutManifestConfig" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putManifestConfig"></a>

```go
func PutManifestConfig(value DatasyncTaskManifestConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putManifestConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig">DatasyncTaskManifestConfig</a>

---

##### `PutOptions` <a name="PutOptions" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putOptions"></a>

```go
func PutOptions(value DatasyncTaskOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a>

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putSchedule"></a>

```go
func PutSchedule(value DatasyncTaskSchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTaskReportConfig` <a name="PutTaskReportConfig" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putTaskReportConfig"></a>

```go
func PutTaskReportConfig(value DatasyncTaskTaskReportConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.putTaskReportConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig">DatasyncTaskTaskReportConfig</a>

---

##### `ResetCloudwatchLogGroupArn` <a name="ResetCloudwatchLogGroupArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetCloudwatchLogGroupArn"></a>

```go
func ResetCloudwatchLogGroupArn()
```

##### `ResetExcludes` <a name="ResetExcludes" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetExcludes"></a>

```go
func ResetExcludes()
```

##### `ResetIncludes` <a name="ResetIncludes" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetIncludes"></a>

```go
func ResetIncludes()
```

##### `ResetManifestConfig` <a name="ResetManifestConfig" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetManifestConfig"></a>

```go
func ResetManifestConfig()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetName"></a>

```go
func ResetName()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetOptions"></a>

```go
func ResetOptions()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetSchedule"></a>

```go
func ResetSchedule()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTaskMode` <a name="ResetTaskMode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetTaskMode"></a>

```go
func ResetTaskMode()
```

##### `ResetTaskReportConfig` <a name="ResetTaskReportConfig" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.resetTaskReportConfig"></a>

```go
func ResetTaskReportConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DatasyncTask resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynctask"

datasynctask.DatasyncTask_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynctask"

datasynctask.DatasyncTask_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynctask"

datasynctask.DatasyncTask_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynctask"

datasynctask.DatasyncTask_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DatasyncTask resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatasyncTask to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatasyncTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DatasyncTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.destinationNetworkInterfaceArns">DestinationNetworkInterfaceArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.excludes">Excludes</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList">DatasyncTaskExcludesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.includes">Includes</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList">DatasyncTaskIncludesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.manifestConfig">ManifestConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference">DatasyncTaskManifestConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.options">Options</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference">DatasyncTaskOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference">DatasyncTaskScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.sourceNetworkInterfaceArns">SourceNetworkInterfaceArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList">DatasyncTaskTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.taskArn">TaskArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.taskReportConfig">TaskReportConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference">DatasyncTaskTaskReportConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.cloudwatchLogGroupArnInput">CloudwatchLogGroupArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.destinationLocationArnInput">DestinationLocationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.excludesInput">ExcludesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.includesInput">IncludesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.manifestConfigInput">ManifestConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.optionsInput">OptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.scheduleInput">ScheduleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.sourceLocationArnInput">SourceLocationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.taskModeInput">TaskModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.taskReportConfigInput">TaskReportConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.cloudwatchLogGroupArn">CloudwatchLogGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.destinationLocationArn">DestinationLocationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.sourceLocationArn">SourceLocationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.taskMode">TaskMode</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DestinationNetworkInterfaceArns`<sup>Required</sup> <a name="DestinationNetworkInterfaceArns" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.destinationNetworkInterfaceArns"></a>

```go
func DestinationNetworkInterfaceArns() *[]*string
```

- *Type:* *[]*string

---

##### `Excludes`<sup>Required</sup> <a name="Excludes" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.excludes"></a>

```go
func Excludes() DatasyncTaskExcludesList
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList">DatasyncTaskExcludesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Includes`<sup>Required</sup> <a name="Includes" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.includes"></a>

```go
func Includes() DatasyncTaskIncludesList
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList">DatasyncTaskIncludesList</a>

---

##### `ManifestConfig`<sup>Required</sup> <a name="ManifestConfig" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.manifestConfig"></a>

```go
func ManifestConfig() DatasyncTaskManifestConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference">DatasyncTaskManifestConfigOutputReference</a>

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.options"></a>

```go
func Options() DatasyncTaskOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference">DatasyncTaskOptionsOutputReference</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.schedule"></a>

```go
func Schedule() DatasyncTaskScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference">DatasyncTaskScheduleOutputReference</a>

---

##### `SourceNetworkInterfaceArns`<sup>Required</sup> <a name="SourceNetworkInterfaceArns" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.sourceNetworkInterfaceArns"></a>

```go
func SourceNetworkInterfaceArns() *[]*string
```

- *Type:* *[]*string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.tags"></a>

```go
func Tags() DatasyncTaskTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList">DatasyncTaskTagsList</a>

---

##### `TaskArn`<sup>Required</sup> <a name="TaskArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.taskArn"></a>

```go
func TaskArn() *string
```

- *Type:* *string

---

##### `TaskReportConfig`<sup>Required</sup> <a name="TaskReportConfig" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.taskReportConfig"></a>

```go
func TaskReportConfig() DatasyncTaskTaskReportConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference">DatasyncTaskTaskReportConfigOutputReference</a>

---

##### `CloudwatchLogGroupArnInput`<sup>Optional</sup> <a name="CloudwatchLogGroupArnInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.cloudwatchLogGroupArnInput"></a>

```go
func CloudwatchLogGroupArnInput() *string
```

- *Type:* *string

---

##### `DestinationLocationArnInput`<sup>Optional</sup> <a name="DestinationLocationArnInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.destinationLocationArnInput"></a>

```go
func DestinationLocationArnInput() *string
```

- *Type:* *string

---

##### `ExcludesInput`<sup>Optional</sup> <a name="ExcludesInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.excludesInput"></a>

```go
func ExcludesInput() interface{}
```

- *Type:* interface{}

---

##### `IncludesInput`<sup>Optional</sup> <a name="IncludesInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.includesInput"></a>

```go
func IncludesInput() interface{}
```

- *Type:* interface{}

---

##### `ManifestConfigInput`<sup>Optional</sup> <a name="ManifestConfigInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.manifestConfigInput"></a>

```go
func ManifestConfigInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.optionsInput"></a>

```go
func OptionsInput() interface{}
```

- *Type:* interface{}

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.scheduleInput"></a>

```go
func ScheduleInput() interface{}
```

- *Type:* interface{}

---

##### `SourceLocationArnInput`<sup>Optional</sup> <a name="SourceLocationArnInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.sourceLocationArnInput"></a>

```go
func SourceLocationArnInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TaskModeInput`<sup>Optional</sup> <a name="TaskModeInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.taskModeInput"></a>

```go
func TaskModeInput() *string
```

- *Type:* *string

---

##### `TaskReportConfigInput`<sup>Optional</sup> <a name="TaskReportConfigInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.taskReportConfigInput"></a>

```go
func TaskReportConfigInput() interface{}
```

- *Type:* interface{}

---

##### `CloudwatchLogGroupArn`<sup>Required</sup> <a name="CloudwatchLogGroupArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.cloudwatchLogGroupArn"></a>

```go
func CloudwatchLogGroupArn() *string
```

- *Type:* *string

---

##### `DestinationLocationArn`<sup>Required</sup> <a name="DestinationLocationArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.destinationLocationArn"></a>

```go
func DestinationLocationArn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SourceLocationArn`<sup>Required</sup> <a name="SourceLocationArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.sourceLocationArn"></a>

```go
func SourceLocationArn() *string
```

- *Type:* *string

---

##### `TaskMode`<sup>Required</sup> <a name="TaskMode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.taskMode"></a>

```go
func TaskMode() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.datasyncTask.DatasyncTask.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncTaskConfig <a name="DatasyncTaskConfig" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynctask"

&datasynctask.DatasyncTaskConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DestinationLocationArn: *string,
	SourceLocationArn: *string,
	CloudwatchLogGroupArn: *string,
	Excludes: interface{},
	Includes: interface{},
	ManifestConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datasyncTask.DatasyncTaskManifestConfig,
	Name: *string,
	Options: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datasyncTask.DatasyncTaskOptions,
	Schedule: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datasyncTask.DatasyncTaskSchedule,
	Tags: interface{},
	TaskMode: *string,
	TaskReportConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datasyncTask.DatasyncTaskTaskReportConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.destinationLocationArn">DestinationLocationArn</a></code> | <code>*string</code> | The ARN of an AWS storage resource's location. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.sourceLocationArn">SourceLocationArn</a></code> | <code>*string</code> | The ARN of the source location for the task. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.cloudwatchLogGroupArn">CloudwatchLogGroupArn</a></code> | <code>*string</code> | The ARN of the Amazon CloudWatch log group that is used to monitor and log events in the task. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.excludes">Excludes</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#excludes DatasyncTask#excludes}. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.includes">Includes</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#includes DatasyncTask#includes}. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.manifestConfig">ManifestConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig">DatasyncTaskManifestConfig</a></code> | Configures a manifest, which is a list of files or objects that you want DataSync to transfer. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.name">Name</a></code> | <code>*string</code> | The name of a task. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.options">Options</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a></code> | Represents the options that are available to control the behavior of a StartTaskExecution operation. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a></code> | Specifies the schedule you want your task to use for repeated executions. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.taskMode">TaskMode</a></code> | <code>*string</code> | Specifies the task mode for the task. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.taskReportConfig">TaskReportConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig">DatasyncTaskTaskReportConfig</a></code> | Specifies how you want to configure a task report, which provides detailed information about for your Datasync transfer. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DestinationLocationArn`<sup>Required</sup> <a name="DestinationLocationArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.destinationLocationArn"></a>

```go
DestinationLocationArn *string
```

- *Type:* *string

The ARN of an AWS storage resource's location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#destination_location_arn DatasyncTask#destination_location_arn}

---

##### `SourceLocationArn`<sup>Required</sup> <a name="SourceLocationArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.sourceLocationArn"></a>

```go
SourceLocationArn *string
```

- *Type:* *string

The ARN of the source location for the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#source_location_arn DatasyncTask#source_location_arn}

---

##### `CloudwatchLogGroupArn`<sup>Optional</sup> <a name="CloudwatchLogGroupArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.cloudwatchLogGroupArn"></a>

```go
CloudwatchLogGroupArn *string
```

- *Type:* *string

The ARN of the Amazon CloudWatch log group that is used to monitor and log events in the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#cloudwatch_log_group_arn DatasyncTask#cloudwatch_log_group_arn}

---

##### `Excludes`<sup>Optional</sup> <a name="Excludes" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.excludes"></a>

```go
Excludes interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#excludes DatasyncTask#excludes}.

---

##### `Includes`<sup>Optional</sup> <a name="Includes" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.includes"></a>

```go
Includes interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#includes DatasyncTask#includes}.

---

##### `ManifestConfig`<sup>Optional</sup> <a name="ManifestConfig" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.manifestConfig"></a>

```go
ManifestConfig DatasyncTaskManifestConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig">DatasyncTaskManifestConfig</a>

Configures a manifest, which is a list of files or objects that you want DataSync to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#manifest_config DatasyncTask#manifest_config}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of a task.

This value is a text reference that is used to identify the task in the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#name DatasyncTask#name}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.options"></a>

```go
Options DatasyncTaskOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a>

Represents the options that are available to control the behavior of a StartTaskExecution operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#options DatasyncTask#options}

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.schedule"></a>

```go
Schedule DatasyncTaskSchedule
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a>

Specifies the schedule you want your task to use for repeated executions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#schedule DatasyncTask#schedule}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#tags DatasyncTask#tags}

---

##### `TaskMode`<sup>Optional</sup> <a name="TaskMode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.taskMode"></a>

```go
TaskMode *string
```

- *Type:* *string

Specifies the task mode for the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#task_mode DatasyncTask#task_mode}

---

##### `TaskReportConfig`<sup>Optional</sup> <a name="TaskReportConfig" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskConfig.property.taskReportConfig"></a>

```go
TaskReportConfig DatasyncTaskTaskReportConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig">DatasyncTaskTaskReportConfig</a>

Specifies how you want to configure a task report, which provides detailed information about for your Datasync transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#task_report_config DatasyncTask#task_report_config}

---

### DatasyncTaskExcludes <a name="DatasyncTaskExcludes" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynctask"

&datasynctask.DatasyncTaskExcludes {
	FilterType: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes.property.filterType">FilterType</a></code> | <code>*string</code> | The type of filter rule to apply. AWS DataSync only supports the SIMPLE_PATTERN rule type. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes.property.value">Value</a></code> | <code>*string</code> | A single filter string that consists of the patterns to include or exclude. The patterns are delimited by "\|". |

---

##### `FilterType`<sup>Optional</sup> <a name="FilterType" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes.property.filterType"></a>

```go
FilterType *string
```

- *Type:* *string

The type of filter rule to apply. AWS DataSync only supports the SIMPLE_PATTERN rule type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#filter_type DatasyncTask#filter_type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludes.property.value"></a>

```go
Value *string
```

- *Type:* *string

A single filter string that consists of the patterns to include or exclude. The patterns are delimited by "|".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#value DatasyncTask#value}

---

### DatasyncTaskIncludes <a name="DatasyncTaskIncludes" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynctask"

&datasynctask.DatasyncTaskIncludes {
	FilterType: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes.property.filterType">FilterType</a></code> | <code>*string</code> | The type of filter rule to apply. AWS DataSync only supports the SIMPLE_PATTERN rule type. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes.property.value">Value</a></code> | <code>*string</code> | A single filter string that consists of the patterns to include or exclude. The patterns are delimited by "\|". |

---

##### `FilterType`<sup>Optional</sup> <a name="FilterType" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes.property.filterType"></a>

```go
FilterType *string
```

- *Type:* *string

The type of filter rule to apply. AWS DataSync only supports the SIMPLE_PATTERN rule type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#filter_type DatasyncTask#filter_type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludes.property.value"></a>

```go
Value *string
```

- *Type:* *string

A single filter string that consists of the patterns to include or exclude. The patterns are delimited by "|".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#value DatasyncTask#value}

---

### DatasyncTaskManifestConfig <a name="DatasyncTaskManifestConfig" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynctask"

&datasynctask.DatasyncTaskManifestConfig {
	Action: *string,
	Format: *string,
	Source: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datasyncTask.DatasyncTaskManifestConfigSource,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig.property.action">Action</a></code> | <code>*string</code> | Specifies what DataSync uses the manifest for. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig.property.format">Format</a></code> | <code>*string</code> | Specifies the file format of your manifest. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig.property.source">Source</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSource">DatasyncTaskManifestConfigSource</a></code> | Specifies the manifest that you want DataSync to use and where it's hosted. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig.property.action"></a>

```go
Action *string
```

- *Type:* *string

Specifies what DataSync uses the manifest for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#action DatasyncTask#action}

---

##### `Format`<sup>Optional</sup> <a name="Format" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig.property.format"></a>

```go
Format *string
```

- *Type:* *string

Specifies the file format of your manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#format DatasyncTask#format}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfig.property.source"></a>

```go
Source DatasyncTaskManifestConfigSource
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSource">DatasyncTaskManifestConfigSource</a>

Specifies the manifest that you want DataSync to use and where it's hosted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#source DatasyncTask#source}

---

### DatasyncTaskManifestConfigSource <a name="DatasyncTaskManifestConfigSource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynctask"

&datasynctask.DatasyncTaskManifestConfigSource {
	S3: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSource.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3">DatasyncTaskManifestConfigSourceS3</a></code> | Specifies the S3 bucket where you're hosting the manifest that you want AWS DataSync to use. |

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSource.property.s3"></a>

```go
S3 DatasyncTaskManifestConfigSourceS3
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3">DatasyncTaskManifestConfigSourceS3</a>

Specifies the S3 bucket where you're hosting the manifest that you want AWS DataSync to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#s3 DatasyncTask#s3}

---

### DatasyncTaskManifestConfigSourceS3 <a name="DatasyncTaskManifestConfigSourceS3" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynctask"

&datasynctask.DatasyncTaskManifestConfigSourceS3 {
	BucketAccessRoleArn: *string,
	ManifestObjectPath: *string,
	ManifestObjectVersionId: *string,
	S3BucketArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3.property.bucketAccessRoleArn">BucketAccessRoleArn</a></code> | <code>*string</code> | Specifies the AWS Identity and Access Management (IAM) role that allows DataSync to access your manifest. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3.property.manifestObjectPath">ManifestObjectPath</a></code> | <code>*string</code> | Specifies the Amazon S3 object key of your manifest. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3.property.manifestObjectVersionId">ManifestObjectVersionId</a></code> | <code>*string</code> | Specifies the object version ID of the manifest that you want DataSync to use. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3.property.s3BucketArn">S3BucketArn</a></code> | <code>*string</code> | Specifies the Amazon Resource Name (ARN) of the S3 bucket where you're hosting your manifest. |

---

##### `BucketAccessRoleArn`<sup>Optional</sup> <a name="BucketAccessRoleArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3.property.bucketAccessRoleArn"></a>

```go
BucketAccessRoleArn *string
```

- *Type:* *string

Specifies the AWS Identity and Access Management (IAM) role that allows DataSync to access your manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#bucket_access_role_arn DatasyncTask#bucket_access_role_arn}

---

##### `ManifestObjectPath`<sup>Optional</sup> <a name="ManifestObjectPath" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3.property.manifestObjectPath"></a>

```go
ManifestObjectPath *string
```

- *Type:* *string

Specifies the Amazon S3 object key of your manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#manifest_object_path DatasyncTask#manifest_object_path}

---

##### `ManifestObjectVersionId`<sup>Optional</sup> <a name="ManifestObjectVersionId" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3.property.manifestObjectVersionId"></a>

```go
ManifestObjectVersionId *string
```

- *Type:* *string

Specifies the object version ID of the manifest that you want DataSync to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#manifest_object_version_id DatasyncTask#manifest_object_version_id}

---

##### `S3BucketArn`<sup>Optional</sup> <a name="S3BucketArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3.property.s3BucketArn"></a>

```go
S3BucketArn *string
```

- *Type:* *string

Specifies the Amazon Resource Name (ARN) of the S3 bucket where you're hosting your manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#s3_bucket_arn DatasyncTask#s3_bucket_arn}

---

### DatasyncTaskOptions <a name="DatasyncTaskOptions" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynctask"

&datasynctask.DatasyncTaskOptions {
	Atime: *string,
	BytesPerSecond: *f64,
	Gid: *string,
	LogLevel: *string,
	Mtime: *string,
	ObjectTags: *string,
	OverwriteMode: *string,
	PosixPermissions: *string,
	PreserveDeletedFiles: *string,
	PreserveDevices: *string,
	SecurityDescriptorCopyFlags: *string,
	TaskQueueing: *string,
	TransferMode: *string,
	Uid: *string,
	VerifyMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.atime">Atime</a></code> | <code>*string</code> | A file metadata value that shows the last time a file was accessed (that is, when the file was read or written to). |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.bytesPerSecond">BytesPerSecond</a></code> | <code>*f64</code> | A value that limits the bandwidth used by AWS DataSync. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.gid">Gid</a></code> | <code>*string</code> | The group ID (GID) of the file's owners. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.logLevel">LogLevel</a></code> | <code>*string</code> | A value that determines the types of logs that DataSync publishes to a log stream in the Amazon CloudWatch log group that you provide. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.mtime">Mtime</a></code> | <code>*string</code> | A value that indicates the last time that a file was modified (that is, a file was written to) before the PREPARING phase. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.objectTags">ObjectTags</a></code> | <code>*string</code> | A value that determines whether object tags should be read from the source object store and written to the destination object store. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.overwriteMode">OverwriteMode</a></code> | <code>*string</code> | A value that determines whether files at the destination should be overwritten or preserved when copying files. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.posixPermissions">PosixPermissions</a></code> | <code>*string</code> | A value that determines which users or groups can access a file for a specific purpose such as reading, writing, or execution of the file. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.preserveDeletedFiles">PreserveDeletedFiles</a></code> | <code>*string</code> | A value that specifies whether files in the destination that don't exist in the source file system should be preserved. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.preserveDevices">PreserveDevices</a></code> | <code>*string</code> | A value that determines whether AWS DataSync should preserve the metadata of block and character devices in the source file system, and recreate the files with that device name and metadata on the destination. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.securityDescriptorCopyFlags">SecurityDescriptorCopyFlags</a></code> | <code>*string</code> | A value that determines which components of the SMB security descriptor are copied during transfer. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.taskQueueing">TaskQueueing</a></code> | <code>*string</code> | A value that determines whether tasks should be queued before executing the tasks. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.transferMode">TransferMode</a></code> | <code>*string</code> | A value that determines whether DataSync transfers only the data and metadata that differ between the source and the destination location, or whether DataSync transfers all the content from the source, without comparing to the destination location. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.uid">Uid</a></code> | <code>*string</code> | The user ID (UID) of the file's owner. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.verifyMode">VerifyMode</a></code> | <code>*string</code> | A value that determines whether a data integrity verification should be performed at the end of a task execution after all data and metadata have been transferred. |

---

##### `Atime`<sup>Optional</sup> <a name="Atime" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.atime"></a>

```go
Atime *string
```

- *Type:* *string

A file metadata value that shows the last time a file was accessed (that is, when the file was read or written to).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#atime DatasyncTask#atime}

---

##### `BytesPerSecond`<sup>Optional</sup> <a name="BytesPerSecond" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.bytesPerSecond"></a>

```go
BytesPerSecond *f64
```

- *Type:* *f64

A value that limits the bandwidth used by AWS DataSync.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#bytes_per_second DatasyncTask#bytes_per_second}

---

##### `Gid`<sup>Optional</sup> <a name="Gid" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.gid"></a>

```go
Gid *string
```

- *Type:* *string

The group ID (GID) of the file's owners.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#gid DatasyncTask#gid}

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.logLevel"></a>

```go
LogLevel *string
```

- *Type:* *string

A value that determines the types of logs that DataSync publishes to a log stream in the Amazon CloudWatch log group that you provide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#log_level DatasyncTask#log_level}

---

##### `Mtime`<sup>Optional</sup> <a name="Mtime" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.mtime"></a>

```go
Mtime *string
```

- *Type:* *string

A value that indicates the last time that a file was modified (that is, a file was written to) before the PREPARING phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#mtime DatasyncTask#mtime}

---

##### `ObjectTags`<sup>Optional</sup> <a name="ObjectTags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.objectTags"></a>

```go
ObjectTags *string
```

- *Type:* *string

A value that determines whether object tags should be read from the source object store and written to the destination object store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#object_tags DatasyncTask#object_tags}

---

##### `OverwriteMode`<sup>Optional</sup> <a name="OverwriteMode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.overwriteMode"></a>

```go
OverwriteMode *string
```

- *Type:* *string

A value that determines whether files at the destination should be overwritten or preserved when copying files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#overwrite_mode DatasyncTask#overwrite_mode}

---

##### `PosixPermissions`<sup>Optional</sup> <a name="PosixPermissions" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.posixPermissions"></a>

```go
PosixPermissions *string
```

- *Type:* *string

A value that determines which users or groups can access a file for a specific purpose such as reading, writing, or execution of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#posix_permissions DatasyncTask#posix_permissions}

---

##### `PreserveDeletedFiles`<sup>Optional</sup> <a name="PreserveDeletedFiles" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.preserveDeletedFiles"></a>

```go
PreserveDeletedFiles *string
```

- *Type:* *string

A value that specifies whether files in the destination that don't exist in the source file system should be preserved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#preserve_deleted_files DatasyncTask#preserve_deleted_files}

---

##### `PreserveDevices`<sup>Optional</sup> <a name="PreserveDevices" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.preserveDevices"></a>

```go
PreserveDevices *string
```

- *Type:* *string

A value that determines whether AWS DataSync should preserve the metadata of block and character devices in the source file system, and recreate the files with that device name and metadata on the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#preserve_devices DatasyncTask#preserve_devices}

---

##### `SecurityDescriptorCopyFlags`<sup>Optional</sup> <a name="SecurityDescriptorCopyFlags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.securityDescriptorCopyFlags"></a>

```go
SecurityDescriptorCopyFlags *string
```

- *Type:* *string

A value that determines which components of the SMB security descriptor are copied during transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#security_descriptor_copy_flags DatasyncTask#security_descriptor_copy_flags}

---

##### `TaskQueueing`<sup>Optional</sup> <a name="TaskQueueing" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.taskQueueing"></a>

```go
TaskQueueing *string
```

- *Type:* *string

A value that determines whether tasks should be queued before executing the tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#task_queueing DatasyncTask#task_queueing}

---

##### `TransferMode`<sup>Optional</sup> <a name="TransferMode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.transferMode"></a>

```go
TransferMode *string
```

- *Type:* *string

A value that determines whether DataSync transfers only the data and metadata that differ between the source and the destination location, or whether DataSync transfers all the content from the source, without comparing to the destination location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#transfer_mode DatasyncTask#transfer_mode}

---

##### `Uid`<sup>Optional</sup> <a name="Uid" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.uid"></a>

```go
Uid *string
```

- *Type:* *string

The user ID (UID) of the file's owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#uid DatasyncTask#uid}

---

##### `VerifyMode`<sup>Optional</sup> <a name="VerifyMode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptions.property.verifyMode"></a>

```go
VerifyMode *string
```

- *Type:* *string

A value that determines whether a data integrity verification should be performed at the end of a task execution after all data and metadata have been transferred.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#verify_mode DatasyncTask#verify_mode}

---

### DatasyncTaskSchedule <a name="DatasyncTaskSchedule" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynctask"

&datasynctask.DatasyncTaskSchedule {
	ScheduleExpression: *string,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule.property.scheduleExpression">ScheduleExpression</a></code> | <code>*string</code> | A cron expression that specifies when AWS DataSync initiates a scheduled transfer from a source to a destination location. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule.property.status">Status</a></code> | <code>*string</code> | Specifies status of a schedule. |

---

##### `ScheduleExpression`<sup>Optional</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule.property.scheduleExpression"></a>

```go
ScheduleExpression *string
```

- *Type:* *string

A cron expression that specifies when AWS DataSync initiates a scheduled transfer from a source to a destination location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#schedule_expression DatasyncTask#schedule_expression}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskSchedule.property.status"></a>

```go
Status *string
```

- *Type:* *string

Specifies status of a schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#status DatasyncTask#status}

---

### DatasyncTaskTags <a name="DatasyncTaskTags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynctask"

&datasynctask.DatasyncTaskTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags.property.key">Key</a></code> | <code>*string</code> | The key for an AWS resource tag. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags.property.value">Value</a></code> | <code>*string</code> | The value for an AWS resource tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key for an AWS resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#key DatasyncTask#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for an AWS resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#value DatasyncTask#value}

---

### DatasyncTaskTaskReportConfig <a name="DatasyncTaskTaskReportConfig" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynctask"

&datasynctask.DatasyncTaskTaskReportConfig {
	Destination: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datasyncTask.DatasyncTaskTaskReportConfigDestination,
	ObjectVersionIds: *string,
	OutputType: *string,
	Overrides: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides,
	ReportLevel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig.property.destination">Destination</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestination">DatasyncTaskTaskReportConfigDestination</a></code> | Specifies where DataSync uploads your task report. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig.property.objectVersionIds">ObjectVersionIds</a></code> | <code>*string</code> | Specifies whether your task report includes the new version of each object transferred into an S3 bucket, this only applies if you enable versioning on your bucket. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig.property.outputType">OutputType</a></code> | <code>*string</code> | Specifies the type of task report that you want. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig.property.overrides">Overrides</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides">DatasyncTaskTaskReportConfigOverrides</a></code> | Customizes the reporting level for aspects of your task report. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig.property.reportLevel">ReportLevel</a></code> | <code>*string</code> | Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't. |

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig.property.destination"></a>

```go
Destination DatasyncTaskTaskReportConfigDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestination">DatasyncTaskTaskReportConfigDestination</a>

Specifies where DataSync uploads your task report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#destination DatasyncTask#destination}

---

##### `ObjectVersionIds`<sup>Optional</sup> <a name="ObjectVersionIds" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig.property.objectVersionIds"></a>

```go
ObjectVersionIds *string
```

- *Type:* *string

Specifies whether your task report includes the new version of each object transferred into an S3 bucket, this only applies if you enable versioning on your bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#object_version_ids DatasyncTask#object_version_ids}

---

##### `OutputType`<sup>Optional</sup> <a name="OutputType" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig.property.outputType"></a>

```go
OutputType *string
```

- *Type:* *string

Specifies the type of task report that you want.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#output_type DatasyncTask#output_type}

---

##### `Overrides`<sup>Optional</sup> <a name="Overrides" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig.property.overrides"></a>

```go
Overrides DatasyncTaskTaskReportConfigOverrides
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides">DatasyncTaskTaskReportConfigOverrides</a>

Customizes the reporting level for aspects of your task report.

For example, your report might generally only include errors, but you could specify that you want a list of successes and errors just for the files that Datasync attempted to delete in your destination location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#overrides DatasyncTask#overrides}

---

##### `ReportLevel`<sup>Optional</sup> <a name="ReportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfig.property.reportLevel"></a>

```go
ReportLevel *string
```

- *Type:* *string

Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#report_level DatasyncTask#report_level}

---

### DatasyncTaskTaskReportConfigDestination <a name="DatasyncTaskTaskReportConfigDestination" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestination.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynctask"

&datasynctask.DatasyncTaskTaskReportConfigDestination {
	S3: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestination.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3">DatasyncTaskTaskReportConfigDestinationS3</a></code> | Specifies the Amazon S3 bucket where DataSync uploads your task report. |

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestination.property.s3"></a>

```go
S3 DatasyncTaskTaskReportConfigDestinationS3
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3">DatasyncTaskTaskReportConfigDestinationS3</a>

Specifies the Amazon S3 bucket where DataSync uploads your task report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#s3 DatasyncTask#s3}

---

### DatasyncTaskTaskReportConfigDestinationS3 <a name="DatasyncTaskTaskReportConfigDestinationS3" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynctask"

&datasynctask.DatasyncTaskTaskReportConfigDestinationS3 {
	BucketAccessRoleArn: *string,
	S3BucketArn: *string,
	Subdirectory: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3.property.bucketAccessRoleArn">BucketAccessRoleArn</a></code> | <code>*string</code> | Specifies the Amazon Resource Name (ARN) of the IAM policy that allows Datasync to upload a task report to your S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3.property.s3BucketArn">S3BucketArn</a></code> | <code>*string</code> | Specifies the ARN of the S3 bucket where Datasync uploads your report. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3.property.subdirectory">Subdirectory</a></code> | <code>*string</code> | Specifies a bucket prefix for your report. |

---

##### `BucketAccessRoleArn`<sup>Optional</sup> <a name="BucketAccessRoleArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3.property.bucketAccessRoleArn"></a>

```go
BucketAccessRoleArn *string
```

- *Type:* *string

Specifies the Amazon Resource Name (ARN) of the IAM policy that allows Datasync to upload a task report to your S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#bucket_access_role_arn DatasyncTask#bucket_access_role_arn}

---

##### `S3BucketArn`<sup>Optional</sup> <a name="S3BucketArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3.property.s3BucketArn"></a>

```go
S3BucketArn *string
```

- *Type:* *string

Specifies the ARN of the S3 bucket where Datasync uploads your report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#s3_bucket_arn DatasyncTask#s3_bucket_arn}

---

##### `Subdirectory`<sup>Optional</sup> <a name="Subdirectory" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3.property.subdirectory"></a>

```go
Subdirectory *string
```

- *Type:* *string

Specifies a bucket prefix for your report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#subdirectory DatasyncTask#subdirectory}

---

### DatasyncTaskTaskReportConfigOverrides <a name="DatasyncTaskTaskReportConfigOverrides" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynctask"

&datasynctask.DatasyncTaskTaskReportConfigOverrides {
	Deleted: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeleted,
	Skipped: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkipped,
	Transferred: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferred,
	Verified: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerified,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides.property.deleted">Deleted</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeleted">DatasyncTaskTaskReportConfigOverridesDeleted</a></code> | Specifies the level of reporting for the files, objects, and directories that Datasync attempted to delete in your destination location. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides.property.skipped">Skipped</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkipped">DatasyncTaskTaskReportConfigOverridesSkipped</a></code> | Specifies the level of reporting for the files, objects, and directories that Datasync attempted to skip during your transfer. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides.property.transferred">Transferred</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferred">DatasyncTaskTaskReportConfigOverridesTransferred</a></code> | Specifies the level of reporting for the files, objects, and directories that Datasync attempted to transfer. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides.property.verified">Verified</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerified">DatasyncTaskTaskReportConfigOverridesVerified</a></code> | Specifies the level of reporting for the files, objects, and directories that Datasync attempted to verify at the end of your transfer. |

---

##### `Deleted`<sup>Optional</sup> <a name="Deleted" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides.property.deleted"></a>

```go
Deleted DatasyncTaskTaskReportConfigOverridesDeleted
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeleted">DatasyncTaskTaskReportConfigOverridesDeleted</a>

Specifies the level of reporting for the files, objects, and directories that Datasync attempted to delete in your destination location.

This only applies if you configure your task to delete data in the destination that isn't in the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#deleted DatasyncTask#deleted}

---

##### `Skipped`<sup>Optional</sup> <a name="Skipped" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides.property.skipped"></a>

```go
Skipped DatasyncTaskTaskReportConfigOverridesSkipped
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkipped">DatasyncTaskTaskReportConfigOverridesSkipped</a>

Specifies the level of reporting for the files, objects, and directories that Datasync attempted to skip during your transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#skipped DatasyncTask#skipped}

---

##### `Transferred`<sup>Optional</sup> <a name="Transferred" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides.property.transferred"></a>

```go
Transferred DatasyncTaskTaskReportConfigOverridesTransferred
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferred">DatasyncTaskTaskReportConfigOverridesTransferred</a>

Specifies the level of reporting for the files, objects, and directories that Datasync attempted to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#transferred DatasyncTask#transferred}

---

##### `Verified`<sup>Optional</sup> <a name="Verified" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides.property.verified"></a>

```go
Verified DatasyncTaskTaskReportConfigOverridesVerified
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerified">DatasyncTaskTaskReportConfigOverridesVerified</a>

Specifies the level of reporting for the files, objects, and directories that Datasync attempted to verify at the end of your transfer.

This only applies if you configure your task to verify data during and after the transfer (which Datasync does by default)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#verified DatasyncTask#verified}

---

### DatasyncTaskTaskReportConfigOverridesDeleted <a name="DatasyncTaskTaskReportConfigOverridesDeleted" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeleted"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeleted.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynctask"

&datasynctask.DatasyncTaskTaskReportConfigOverridesDeleted {
	ReportLevel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeleted.property.reportLevel">ReportLevel</a></code> | <code>*string</code> | Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't. |

---

##### `ReportLevel`<sup>Optional</sup> <a name="ReportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeleted.property.reportLevel"></a>

```go
ReportLevel *string
```

- *Type:* *string

Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#report_level DatasyncTask#report_level}

---

### DatasyncTaskTaskReportConfigOverridesSkipped <a name="DatasyncTaskTaskReportConfigOverridesSkipped" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkipped"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkipped.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynctask"

&datasynctask.DatasyncTaskTaskReportConfigOverridesSkipped {
	ReportLevel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkipped.property.reportLevel">ReportLevel</a></code> | <code>*string</code> | Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't. |

---

##### `ReportLevel`<sup>Optional</sup> <a name="ReportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkipped.property.reportLevel"></a>

```go
ReportLevel *string
```

- *Type:* *string

Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#report_level DatasyncTask#report_level}

---

### DatasyncTaskTaskReportConfigOverridesTransferred <a name="DatasyncTaskTaskReportConfigOverridesTransferred" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferred"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferred.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynctask"

&datasynctask.DatasyncTaskTaskReportConfigOverridesTransferred {
	ReportLevel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferred.property.reportLevel">ReportLevel</a></code> | <code>*string</code> | Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't. |

---

##### `ReportLevel`<sup>Optional</sup> <a name="ReportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferred.property.reportLevel"></a>

```go
ReportLevel *string
```

- *Type:* *string

Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#report_level DatasyncTask#report_level}

---

### DatasyncTaskTaskReportConfigOverridesVerified <a name="DatasyncTaskTaskReportConfigOverridesVerified" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerified"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerified.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynctask"

&datasynctask.DatasyncTaskTaskReportConfigOverridesVerified {
	ReportLevel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerified.property.reportLevel">ReportLevel</a></code> | <code>*string</code> | Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't. |

---

##### `ReportLevel`<sup>Optional</sup> <a name="ReportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerified.property.reportLevel"></a>

```go
ReportLevel *string
```

- *Type:* *string

Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datasync_task#report_level DatasyncTask#report_level}

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncTaskExcludesList <a name="DatasyncTaskExcludesList" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynctask"

datasynctask.NewDatasyncTaskExcludesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatasyncTaskExcludesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.get"></a>

```go
func Get(index *f64) DatasyncTaskExcludesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatasyncTaskExcludesOutputReference <a name="DatasyncTaskExcludesOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynctask"

datasynctask.NewDatasyncTaskExcludesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatasyncTaskExcludesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.resetFilterType">ResetFilterType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilterType` <a name="ResetFilterType" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.resetFilterType"></a>

```go
func ResetFilterType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.filterTypeInput">FilterTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.filterType">FilterType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FilterTypeInput`<sup>Optional</sup> <a name="FilterTypeInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.filterTypeInput"></a>

```go
func FilterTypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `FilterType`<sup>Required</sup> <a name="FilterType" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.filterType"></a>

```go
func FilterType() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskExcludesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatasyncTaskIncludesList <a name="DatasyncTaskIncludesList" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynctask"

datasynctask.NewDatasyncTaskIncludesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatasyncTaskIncludesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.get"></a>

```go
func Get(index *f64) DatasyncTaskIncludesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatasyncTaskIncludesOutputReference <a name="DatasyncTaskIncludesOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynctask"

datasynctask.NewDatasyncTaskIncludesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatasyncTaskIncludesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.resetFilterType">ResetFilterType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilterType` <a name="ResetFilterType" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.resetFilterType"></a>

```go
func ResetFilterType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.filterTypeInput">FilterTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.filterType">FilterType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FilterTypeInput`<sup>Optional</sup> <a name="FilterTypeInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.filterTypeInput"></a>

```go
func FilterTypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `FilterType`<sup>Required</sup> <a name="FilterType" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.filterType"></a>

```go
func FilterType() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskIncludesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatasyncTaskManifestConfigOutputReference <a name="DatasyncTaskManifestConfigOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynctask"

datasynctask.NewDatasyncTaskManifestConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatasyncTaskManifestConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.resetFormat">ResetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSource` <a name="PutSource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.putSource"></a>

```go
func PutSource(value DatasyncTaskManifestConfigSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSource">DatasyncTaskManifestConfigSource</a>

---

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetFormat` <a name="ResetFormat" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.resetFormat"></a>

```go
func ResetFormat()
```

##### `ResetSource` <a name="ResetSource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.resetSource"></a>

```go
func ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.source">Source</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference">DatasyncTaskManifestConfigSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.formatInput">FormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.sourceInput">SourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.source"></a>

```go
func Source() DatasyncTaskManifestConfigSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference">DatasyncTaskManifestConfigSourceOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.formatInput"></a>

```go
func FormatInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.sourceInput"></a>

```go
func SourceInput() interface{}
```

- *Type:* interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatasyncTaskManifestConfigSourceOutputReference <a name="DatasyncTaskManifestConfigSourceOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynctask"

datasynctask.NewDatasyncTaskManifestConfigSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatasyncTaskManifestConfigSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.resetS3">ResetS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3` <a name="PutS3" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.putS3"></a>

```go
func PutS3(value DatasyncTaskManifestConfigSourceS3)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3">DatasyncTaskManifestConfigSourceS3</a>

---

##### `ResetS3` <a name="ResetS3" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.resetS3"></a>

```go
func ResetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference">DatasyncTaskManifestConfigSourceS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.property.s3Input">S3Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.property.s3"></a>

```go
func S3() DatasyncTaskManifestConfigSourceS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference">DatasyncTaskManifestConfigSourceS3OutputReference</a>

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.property.s3Input"></a>

```go
func S3Input() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatasyncTaskManifestConfigSourceS3OutputReference <a name="DatasyncTaskManifestConfigSourceS3OutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynctask"

datasynctask.NewDatasyncTaskManifestConfigSourceS3OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatasyncTaskManifestConfigSourceS3OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.resetBucketAccessRoleArn">ResetBucketAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.resetManifestObjectPath">ResetManifestObjectPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.resetManifestObjectVersionId">ResetManifestObjectVersionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.resetS3BucketArn">ResetS3BucketArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketAccessRoleArn` <a name="ResetBucketAccessRoleArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.resetBucketAccessRoleArn"></a>

```go
func ResetBucketAccessRoleArn()
```

##### `ResetManifestObjectPath` <a name="ResetManifestObjectPath" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.resetManifestObjectPath"></a>

```go
func ResetManifestObjectPath()
```

##### `ResetManifestObjectVersionId` <a name="ResetManifestObjectVersionId" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.resetManifestObjectVersionId"></a>

```go
func ResetManifestObjectVersionId()
```

##### `ResetS3BucketArn` <a name="ResetS3BucketArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.resetS3BucketArn"></a>

```go
func ResetS3BucketArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.bucketAccessRoleArnInput">BucketAccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.manifestObjectPathInput">ManifestObjectPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.manifestObjectVersionIdInput">ManifestObjectVersionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.s3BucketArnInput">S3BucketArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.bucketAccessRoleArn">BucketAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.manifestObjectPath">ManifestObjectPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.manifestObjectVersionId">ManifestObjectVersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.s3BucketArn">S3BucketArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketAccessRoleArnInput`<sup>Optional</sup> <a name="BucketAccessRoleArnInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.bucketAccessRoleArnInput"></a>

```go
func BucketAccessRoleArnInput() *string
```

- *Type:* *string

---

##### `ManifestObjectPathInput`<sup>Optional</sup> <a name="ManifestObjectPathInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.manifestObjectPathInput"></a>

```go
func ManifestObjectPathInput() *string
```

- *Type:* *string

---

##### `ManifestObjectVersionIdInput`<sup>Optional</sup> <a name="ManifestObjectVersionIdInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.manifestObjectVersionIdInput"></a>

```go
func ManifestObjectVersionIdInput() *string
```

- *Type:* *string

---

##### `S3BucketArnInput`<sup>Optional</sup> <a name="S3BucketArnInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.s3BucketArnInput"></a>

```go
func S3BucketArnInput() *string
```

- *Type:* *string

---

##### `BucketAccessRoleArn`<sup>Required</sup> <a name="BucketAccessRoleArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.bucketAccessRoleArn"></a>

```go
func BucketAccessRoleArn() *string
```

- *Type:* *string

---

##### `ManifestObjectPath`<sup>Required</sup> <a name="ManifestObjectPath" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.manifestObjectPath"></a>

```go
func ManifestObjectPath() *string
```

- *Type:* *string

---

##### `ManifestObjectVersionId`<sup>Required</sup> <a name="ManifestObjectVersionId" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.manifestObjectVersionId"></a>

```go
func ManifestObjectVersionId() *string
```

- *Type:* *string

---

##### `S3BucketArn`<sup>Required</sup> <a name="S3BucketArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.s3BucketArn"></a>

```go
func S3BucketArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskManifestConfigSourceS3OutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatasyncTaskOptionsOutputReference <a name="DatasyncTaskOptionsOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynctask"

datasynctask.NewDatasyncTaskOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatasyncTaskOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetAtime">ResetAtime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetBytesPerSecond">ResetBytesPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetGid">ResetGid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetLogLevel">ResetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetMtime">ResetMtime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetObjectTags">ResetObjectTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetOverwriteMode">ResetOverwriteMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetPosixPermissions">ResetPosixPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetPreserveDeletedFiles">ResetPreserveDeletedFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetPreserveDevices">ResetPreserveDevices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetSecurityDescriptorCopyFlags">ResetSecurityDescriptorCopyFlags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetTaskQueueing">ResetTaskQueueing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetTransferMode">ResetTransferMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetUid">ResetUid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetVerifyMode">ResetVerifyMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAtime` <a name="ResetAtime" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetAtime"></a>

```go
func ResetAtime()
```

##### `ResetBytesPerSecond` <a name="ResetBytesPerSecond" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetBytesPerSecond"></a>

```go
func ResetBytesPerSecond()
```

##### `ResetGid` <a name="ResetGid" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetGid"></a>

```go
func ResetGid()
```

##### `ResetLogLevel` <a name="ResetLogLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetLogLevel"></a>

```go
func ResetLogLevel()
```

##### `ResetMtime` <a name="ResetMtime" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetMtime"></a>

```go
func ResetMtime()
```

##### `ResetObjectTags` <a name="ResetObjectTags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetObjectTags"></a>

```go
func ResetObjectTags()
```

##### `ResetOverwriteMode` <a name="ResetOverwriteMode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetOverwriteMode"></a>

```go
func ResetOverwriteMode()
```

##### `ResetPosixPermissions` <a name="ResetPosixPermissions" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetPosixPermissions"></a>

```go
func ResetPosixPermissions()
```

##### `ResetPreserveDeletedFiles` <a name="ResetPreserveDeletedFiles" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetPreserveDeletedFiles"></a>

```go
func ResetPreserveDeletedFiles()
```

##### `ResetPreserveDevices` <a name="ResetPreserveDevices" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetPreserveDevices"></a>

```go
func ResetPreserveDevices()
```

##### `ResetSecurityDescriptorCopyFlags` <a name="ResetSecurityDescriptorCopyFlags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetSecurityDescriptorCopyFlags"></a>

```go
func ResetSecurityDescriptorCopyFlags()
```

##### `ResetTaskQueueing` <a name="ResetTaskQueueing" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetTaskQueueing"></a>

```go
func ResetTaskQueueing()
```

##### `ResetTransferMode` <a name="ResetTransferMode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetTransferMode"></a>

```go
func ResetTransferMode()
```

##### `ResetUid` <a name="ResetUid" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetUid"></a>

```go
func ResetUid()
```

##### `ResetVerifyMode` <a name="ResetVerifyMode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.resetVerifyMode"></a>

```go
func ResetVerifyMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.atimeInput">AtimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.bytesPerSecondInput">BytesPerSecondInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.gidInput">GidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.logLevelInput">LogLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.mtimeInput">MtimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.objectTagsInput">ObjectTagsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.overwriteModeInput">OverwriteModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.posixPermissionsInput">PosixPermissionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDeletedFilesInput">PreserveDeletedFilesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDevicesInput">PreserveDevicesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.securityDescriptorCopyFlagsInput">SecurityDescriptorCopyFlagsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.taskQueueingInput">TaskQueueingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.transferModeInput">TransferModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.uidInput">UidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.verifyModeInput">VerifyModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.atime">Atime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.bytesPerSecond">BytesPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.gid">Gid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.logLevel">LogLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.mtime">Mtime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.objectTags">ObjectTags</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.overwriteMode">OverwriteMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.posixPermissions">PosixPermissions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDeletedFiles">PreserveDeletedFiles</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDevices">PreserveDevices</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.securityDescriptorCopyFlags">SecurityDescriptorCopyFlags</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.taskQueueing">TaskQueueing</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.transferMode">TransferMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.verifyMode">VerifyMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AtimeInput`<sup>Optional</sup> <a name="AtimeInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.atimeInput"></a>

```go
func AtimeInput() *string
```

- *Type:* *string

---

##### `BytesPerSecondInput`<sup>Optional</sup> <a name="BytesPerSecondInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.bytesPerSecondInput"></a>

```go
func BytesPerSecondInput() *f64
```

- *Type:* *f64

---

##### `GidInput`<sup>Optional</sup> <a name="GidInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.gidInput"></a>

```go
func GidInput() *string
```

- *Type:* *string

---

##### `LogLevelInput`<sup>Optional</sup> <a name="LogLevelInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.logLevelInput"></a>

```go
func LogLevelInput() *string
```

- *Type:* *string

---

##### `MtimeInput`<sup>Optional</sup> <a name="MtimeInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.mtimeInput"></a>

```go
func MtimeInput() *string
```

- *Type:* *string

---

##### `ObjectTagsInput`<sup>Optional</sup> <a name="ObjectTagsInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.objectTagsInput"></a>

```go
func ObjectTagsInput() *string
```

- *Type:* *string

---

##### `OverwriteModeInput`<sup>Optional</sup> <a name="OverwriteModeInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.overwriteModeInput"></a>

```go
func OverwriteModeInput() *string
```

- *Type:* *string

---

##### `PosixPermissionsInput`<sup>Optional</sup> <a name="PosixPermissionsInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.posixPermissionsInput"></a>

```go
func PosixPermissionsInput() *string
```

- *Type:* *string

---

##### `PreserveDeletedFilesInput`<sup>Optional</sup> <a name="PreserveDeletedFilesInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDeletedFilesInput"></a>

```go
func PreserveDeletedFilesInput() *string
```

- *Type:* *string

---

##### `PreserveDevicesInput`<sup>Optional</sup> <a name="PreserveDevicesInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDevicesInput"></a>

```go
func PreserveDevicesInput() *string
```

- *Type:* *string

---

##### `SecurityDescriptorCopyFlagsInput`<sup>Optional</sup> <a name="SecurityDescriptorCopyFlagsInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.securityDescriptorCopyFlagsInput"></a>

```go
func SecurityDescriptorCopyFlagsInput() *string
```

- *Type:* *string

---

##### `TaskQueueingInput`<sup>Optional</sup> <a name="TaskQueueingInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.taskQueueingInput"></a>

```go
func TaskQueueingInput() *string
```

- *Type:* *string

---

##### `TransferModeInput`<sup>Optional</sup> <a name="TransferModeInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.transferModeInput"></a>

```go
func TransferModeInput() *string
```

- *Type:* *string

---

##### `UidInput`<sup>Optional</sup> <a name="UidInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.uidInput"></a>

```go
func UidInput() *string
```

- *Type:* *string

---

##### `VerifyModeInput`<sup>Optional</sup> <a name="VerifyModeInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.verifyModeInput"></a>

```go
func VerifyModeInput() *string
```

- *Type:* *string

---

##### `Atime`<sup>Required</sup> <a name="Atime" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.atime"></a>

```go
func Atime() *string
```

- *Type:* *string

---

##### `BytesPerSecond`<sup>Required</sup> <a name="BytesPerSecond" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.bytesPerSecond"></a>

```go
func BytesPerSecond() *f64
```

- *Type:* *f64

---

##### `Gid`<sup>Required</sup> <a name="Gid" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.gid"></a>

```go
func Gid() *string
```

- *Type:* *string

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.logLevel"></a>

```go
func LogLevel() *string
```

- *Type:* *string

---

##### `Mtime`<sup>Required</sup> <a name="Mtime" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.mtime"></a>

```go
func Mtime() *string
```

- *Type:* *string

---

##### `ObjectTags`<sup>Required</sup> <a name="ObjectTags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.objectTags"></a>

```go
func ObjectTags() *string
```

- *Type:* *string

---

##### `OverwriteMode`<sup>Required</sup> <a name="OverwriteMode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.overwriteMode"></a>

```go
func OverwriteMode() *string
```

- *Type:* *string

---

##### `PosixPermissions`<sup>Required</sup> <a name="PosixPermissions" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.posixPermissions"></a>

```go
func PosixPermissions() *string
```

- *Type:* *string

---

##### `PreserveDeletedFiles`<sup>Required</sup> <a name="PreserveDeletedFiles" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDeletedFiles"></a>

```go
func PreserveDeletedFiles() *string
```

- *Type:* *string

---

##### `PreserveDevices`<sup>Required</sup> <a name="PreserveDevices" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDevices"></a>

```go
func PreserveDevices() *string
```

- *Type:* *string

---

##### `SecurityDescriptorCopyFlags`<sup>Required</sup> <a name="SecurityDescriptorCopyFlags" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.securityDescriptorCopyFlags"></a>

```go
func SecurityDescriptorCopyFlags() *string
```

- *Type:* *string

---

##### `TaskQueueing`<sup>Required</sup> <a name="TaskQueueing" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.taskQueueing"></a>

```go
func TaskQueueing() *string
```

- *Type:* *string

---

##### `TransferMode`<sup>Required</sup> <a name="TransferMode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.transferMode"></a>

```go
func TransferMode() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `VerifyMode`<sup>Required</sup> <a name="VerifyMode" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.verifyMode"></a>

```go
func VerifyMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatasyncTaskScheduleOutputReference <a name="DatasyncTaskScheduleOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynctask"

datasynctask.NewDatasyncTaskScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatasyncTaskScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.resetScheduleExpression">ResetScheduleExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScheduleExpression` <a name="ResetScheduleExpression" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.resetScheduleExpression"></a>

```go
func ResetScheduleExpression()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.resetStatus"></a>

```go
func ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.scheduleExpressionInput">ScheduleExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.scheduleExpression">ScheduleExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScheduleExpressionInput`<sup>Optional</sup> <a name="ScheduleExpressionInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.scheduleExpressionInput"></a>

```go
func ScheduleExpressionInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.scheduleExpression"></a>

```go
func ScheduleExpression() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatasyncTaskTagsList <a name="DatasyncTaskTagsList" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynctask"

datasynctask.NewDatasyncTaskTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatasyncTaskTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.get"></a>

```go
func Get(index *f64) DatasyncTaskTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatasyncTaskTagsOutputReference <a name="DatasyncTaskTagsOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynctask"

datasynctask.NewDatasyncTaskTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatasyncTaskTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatasyncTaskTaskReportConfigDestinationOutputReference <a name="DatasyncTaskTaskReportConfigDestinationOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynctask"

datasynctask.NewDatasyncTaskTaskReportConfigDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatasyncTaskTaskReportConfigDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.resetS3">ResetS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3` <a name="PutS3" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.putS3"></a>

```go
func PutS3(value DatasyncTaskTaskReportConfigDestinationS3)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3">DatasyncTaskTaskReportConfigDestinationS3</a>

---

##### `ResetS3` <a name="ResetS3" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.resetS3"></a>

```go
func ResetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference">DatasyncTaskTaskReportConfigDestinationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.property.s3Input">S3Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.property.s3"></a>

```go
func S3() DatasyncTaskTaskReportConfigDestinationS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference">DatasyncTaskTaskReportConfigDestinationS3OutputReference</a>

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.property.s3Input"></a>

```go
func S3Input() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatasyncTaskTaskReportConfigDestinationS3OutputReference <a name="DatasyncTaskTaskReportConfigDestinationS3OutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynctask"

datasynctask.NewDatasyncTaskTaskReportConfigDestinationS3OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatasyncTaskTaskReportConfigDestinationS3OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.resetBucketAccessRoleArn">ResetBucketAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.resetS3BucketArn">ResetS3BucketArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.resetSubdirectory">ResetSubdirectory</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketAccessRoleArn` <a name="ResetBucketAccessRoleArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.resetBucketAccessRoleArn"></a>

```go
func ResetBucketAccessRoleArn()
```

##### `ResetS3BucketArn` <a name="ResetS3BucketArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.resetS3BucketArn"></a>

```go
func ResetS3BucketArn()
```

##### `ResetSubdirectory` <a name="ResetSubdirectory" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.resetSubdirectory"></a>

```go
func ResetSubdirectory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.bucketAccessRoleArnInput">BucketAccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.s3BucketArnInput">S3BucketArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.subdirectoryInput">SubdirectoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.bucketAccessRoleArn">BucketAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.s3BucketArn">S3BucketArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.subdirectory">Subdirectory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketAccessRoleArnInput`<sup>Optional</sup> <a name="BucketAccessRoleArnInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.bucketAccessRoleArnInput"></a>

```go
func BucketAccessRoleArnInput() *string
```

- *Type:* *string

---

##### `S3BucketArnInput`<sup>Optional</sup> <a name="S3BucketArnInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.s3BucketArnInput"></a>

```go
func S3BucketArnInput() *string
```

- *Type:* *string

---

##### `SubdirectoryInput`<sup>Optional</sup> <a name="SubdirectoryInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.subdirectoryInput"></a>

```go
func SubdirectoryInput() *string
```

- *Type:* *string

---

##### `BucketAccessRoleArn`<sup>Required</sup> <a name="BucketAccessRoleArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.bucketAccessRoleArn"></a>

```go
func BucketAccessRoleArn() *string
```

- *Type:* *string

---

##### `S3BucketArn`<sup>Required</sup> <a name="S3BucketArn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.s3BucketArn"></a>

```go
func S3BucketArn() *string
```

- *Type:* *string

---

##### `Subdirectory`<sup>Required</sup> <a name="Subdirectory" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.subdirectory"></a>

```go
func Subdirectory() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationS3OutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatasyncTaskTaskReportConfigOutputReference <a name="DatasyncTaskTaskReportConfigOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynctask"

datasynctask.NewDatasyncTaskTaskReportConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatasyncTaskTaskReportConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.putDestination">PutDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.putOverrides">PutOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resetObjectVersionIds">ResetObjectVersionIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resetOutputType">ResetOutputType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resetOverrides">ResetOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resetReportLevel">ResetReportLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestination` <a name="PutDestination" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.putDestination"></a>

```go
func PutDestination(value DatasyncTaskTaskReportConfigDestination)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestination">DatasyncTaskTaskReportConfigDestination</a>

---

##### `PutOverrides` <a name="PutOverrides" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.putOverrides"></a>

```go
func PutOverrides(value DatasyncTaskTaskReportConfigOverrides)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.putOverrides.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverrides">DatasyncTaskTaskReportConfigOverrides</a>

---

##### `ResetDestination` <a name="ResetDestination" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resetDestination"></a>

```go
func ResetDestination()
```

##### `ResetObjectVersionIds` <a name="ResetObjectVersionIds" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resetObjectVersionIds"></a>

```go
func ResetObjectVersionIds()
```

##### `ResetOutputType` <a name="ResetOutputType" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resetOutputType"></a>

```go
func ResetOutputType()
```

##### `ResetOverrides` <a name="ResetOverrides" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resetOverrides"></a>

```go
func ResetOverrides()
```

##### `ResetReportLevel` <a name="ResetReportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.resetReportLevel"></a>

```go
func ResetReportLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.destination">Destination</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference">DatasyncTaskTaskReportConfigDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.overrides">Overrides</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference">DatasyncTaskTaskReportConfigOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.destinationInput">DestinationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.objectVersionIdsInput">ObjectVersionIdsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.outputTypeInput">OutputTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.overridesInput">OverridesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.reportLevelInput">ReportLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.objectVersionIds">ObjectVersionIds</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.outputType">OutputType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.reportLevel">ReportLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.destination"></a>

```go
func Destination() DatasyncTaskTaskReportConfigDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigDestinationOutputReference">DatasyncTaskTaskReportConfigDestinationOutputReference</a>

---

##### `Overrides`<sup>Required</sup> <a name="Overrides" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.overrides"></a>

```go
func Overrides() DatasyncTaskTaskReportConfigOverridesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference">DatasyncTaskTaskReportConfigOverridesOutputReference</a>

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.destinationInput"></a>

```go
func DestinationInput() interface{}
```

- *Type:* interface{}

---

##### `ObjectVersionIdsInput`<sup>Optional</sup> <a name="ObjectVersionIdsInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.objectVersionIdsInput"></a>

```go
func ObjectVersionIdsInput() *string
```

- *Type:* *string

---

##### `OutputTypeInput`<sup>Optional</sup> <a name="OutputTypeInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.outputTypeInput"></a>

```go
func OutputTypeInput() *string
```

- *Type:* *string

---

##### `OverridesInput`<sup>Optional</sup> <a name="OverridesInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.overridesInput"></a>

```go
func OverridesInput() interface{}
```

- *Type:* interface{}

---

##### `ReportLevelInput`<sup>Optional</sup> <a name="ReportLevelInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.reportLevelInput"></a>

```go
func ReportLevelInput() *string
```

- *Type:* *string

---

##### `ObjectVersionIds`<sup>Required</sup> <a name="ObjectVersionIds" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.objectVersionIds"></a>

```go
func ObjectVersionIds() *string
```

- *Type:* *string

---

##### `OutputType`<sup>Required</sup> <a name="OutputType" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.outputType"></a>

```go
func OutputType() *string
```

- *Type:* *string

---

##### `ReportLevel`<sup>Required</sup> <a name="ReportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.reportLevel"></a>

```go
func ReportLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatasyncTaskTaskReportConfigOverridesDeletedOutputReference <a name="DatasyncTaskTaskReportConfigOverridesDeletedOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynctask"

datasynctask.NewDatasyncTaskTaskReportConfigOverridesDeletedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatasyncTaskTaskReportConfigOverridesDeletedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.resetReportLevel">ResetReportLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReportLevel` <a name="ResetReportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.resetReportLevel"></a>

```go
func ResetReportLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.reportLevelInput">ReportLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.reportLevel">ReportLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReportLevelInput`<sup>Optional</sup> <a name="ReportLevelInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.reportLevelInput"></a>

```go
func ReportLevelInput() *string
```

- *Type:* *string

---

##### `ReportLevel`<sup>Required</sup> <a name="ReportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.reportLevel"></a>

```go
func ReportLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatasyncTaskTaskReportConfigOverridesOutputReference <a name="DatasyncTaskTaskReportConfigOverridesOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynctask"

datasynctask.NewDatasyncTaskTaskReportConfigOverridesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatasyncTaskTaskReportConfigOverridesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putDeleted">PutDeleted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putSkipped">PutSkipped</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putTransferred">PutTransferred</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putVerified">PutVerified</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.resetDeleted">ResetDeleted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.resetSkipped">ResetSkipped</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.resetTransferred">ResetTransferred</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.resetVerified">ResetVerified</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDeleted` <a name="PutDeleted" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putDeleted"></a>

```go
func PutDeleted(value DatasyncTaskTaskReportConfigOverridesDeleted)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putDeleted.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeleted">DatasyncTaskTaskReportConfigOverridesDeleted</a>

---

##### `PutSkipped` <a name="PutSkipped" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putSkipped"></a>

```go
func PutSkipped(value DatasyncTaskTaskReportConfigOverridesSkipped)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putSkipped.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkipped">DatasyncTaskTaskReportConfigOverridesSkipped</a>

---

##### `PutTransferred` <a name="PutTransferred" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putTransferred"></a>

```go
func PutTransferred(value DatasyncTaskTaskReportConfigOverridesTransferred)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putTransferred.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferred">DatasyncTaskTaskReportConfigOverridesTransferred</a>

---

##### `PutVerified` <a name="PutVerified" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putVerified"></a>

```go
func PutVerified(value DatasyncTaskTaskReportConfigOverridesVerified)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.putVerified.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerified">DatasyncTaskTaskReportConfigOverridesVerified</a>

---

##### `ResetDeleted` <a name="ResetDeleted" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.resetDeleted"></a>

```go
func ResetDeleted()
```

##### `ResetSkipped` <a name="ResetSkipped" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.resetSkipped"></a>

```go
func ResetSkipped()
```

##### `ResetTransferred` <a name="ResetTransferred" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.resetTransferred"></a>

```go
func ResetTransferred()
```

##### `ResetVerified` <a name="ResetVerified" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.resetVerified"></a>

```go
func ResetVerified()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.deleted">Deleted</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference">DatasyncTaskTaskReportConfigOverridesDeletedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.skipped">Skipped</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference">DatasyncTaskTaskReportConfigOverridesSkippedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.transferred">Transferred</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference">DatasyncTaskTaskReportConfigOverridesTransferredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.verified">Verified</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference">DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.deletedInput">DeletedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.skippedInput">SkippedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.transferredInput">TransferredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.verifiedInput">VerifiedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Deleted`<sup>Required</sup> <a name="Deleted" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.deleted"></a>

```go
func Deleted() DatasyncTaskTaskReportConfigOverridesDeletedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesDeletedOutputReference">DatasyncTaskTaskReportConfigOverridesDeletedOutputReference</a>

---

##### `Skipped`<sup>Required</sup> <a name="Skipped" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.skipped"></a>

```go
func Skipped() DatasyncTaskTaskReportConfigOverridesSkippedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference">DatasyncTaskTaskReportConfigOverridesSkippedOutputReference</a>

---

##### `Transferred`<sup>Required</sup> <a name="Transferred" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.transferred"></a>

```go
func Transferred() DatasyncTaskTaskReportConfigOverridesTransferredOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference">DatasyncTaskTaskReportConfigOverridesTransferredOutputReference</a>

---

##### `Verified`<sup>Required</sup> <a name="Verified" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.verified"></a>

```go
func Verified() DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference">DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference</a>

---

##### `DeletedInput`<sup>Optional</sup> <a name="DeletedInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.deletedInput"></a>

```go
func DeletedInput() interface{}
```

- *Type:* interface{}

---

##### `SkippedInput`<sup>Optional</sup> <a name="SkippedInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.skippedInput"></a>

```go
func SkippedInput() interface{}
```

- *Type:* interface{}

---

##### `TransferredInput`<sup>Optional</sup> <a name="TransferredInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.transferredInput"></a>

```go
func TransferredInput() interface{}
```

- *Type:* interface{}

---

##### `VerifiedInput`<sup>Optional</sup> <a name="VerifiedInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.verifiedInput"></a>

```go
func VerifiedInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatasyncTaskTaskReportConfigOverridesSkippedOutputReference <a name="DatasyncTaskTaskReportConfigOverridesSkippedOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynctask"

datasynctask.NewDatasyncTaskTaskReportConfigOverridesSkippedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatasyncTaskTaskReportConfigOverridesSkippedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.resetReportLevel">ResetReportLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReportLevel` <a name="ResetReportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.resetReportLevel"></a>

```go
func ResetReportLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.reportLevelInput">ReportLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.reportLevel">ReportLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReportLevelInput`<sup>Optional</sup> <a name="ReportLevelInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.reportLevelInput"></a>

```go
func ReportLevelInput() *string
```

- *Type:* *string

---

##### `ReportLevel`<sup>Required</sup> <a name="ReportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.reportLevel"></a>

```go
func ReportLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatasyncTaskTaskReportConfigOverridesTransferredOutputReference <a name="DatasyncTaskTaskReportConfigOverridesTransferredOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynctask"

datasynctask.NewDatasyncTaskTaskReportConfigOverridesTransferredOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatasyncTaskTaskReportConfigOverridesTransferredOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.resetReportLevel">ResetReportLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReportLevel` <a name="ResetReportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.resetReportLevel"></a>

```go
func ResetReportLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.reportLevelInput">ReportLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.reportLevel">ReportLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReportLevelInput`<sup>Optional</sup> <a name="ReportLevelInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.reportLevelInput"></a>

```go
func ReportLevelInput() *string
```

- *Type:* *string

---

##### `ReportLevel`<sup>Required</sup> <a name="ReportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.reportLevel"></a>

```go
func ReportLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference <a name="DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynctask"

datasynctask.NewDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.resetReportLevel">ResetReportLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReportLevel` <a name="ResetReportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.resetReportLevel"></a>

```go
func ResetReportLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.reportLevelInput">ReportLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.reportLevel">ReportLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReportLevelInput`<sup>Optional</sup> <a name="ReportLevelInput" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.reportLevelInput"></a>

```go
func ReportLevelInput() *string
```

- *Type:* *string

---

##### `ReportLevel`<sup>Required</sup> <a name="ReportLevel" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.reportLevel"></a>

```go
func ReportLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncTask.DatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



