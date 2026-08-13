# `glueJob` Submodule <a name="`glueJob` Submodule" id="@cdktn/provider-awscc.glueJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueJob <a name="GlueJob" id="@cdktn/provider-awscc.glueJob.GlueJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job awscc_glue_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluejob"

gluejob.NewGlueJob(scope Construct, id *string, config GlueJobConfig) GlueJob
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig">GlueJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.glueJob.GlueJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig">GlueJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.putCommand">PutCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.putConnections">PutConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.putExecutionProperty">PutExecutionProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.putNotificationProperty">PutNotificationProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetAllocatedCapacity">ResetAllocatedCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetConnections">ResetConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetDefaultArguments">ResetDefaultArguments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetExecutionClass">ResetExecutionClass</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetExecutionProperty">ResetExecutionProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetGlueVersion">ResetGlueVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetJobMode">ResetJobMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetJobRunQueuingEnabled">ResetJobRunQueuingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetLogUri">ResetLogUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetMaxCapacity">ResetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetMaxRetries">ResetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetNonOverridableArguments">ResetNonOverridableArguments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetNotificationProperty">ResetNotificationProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetNumberOfWorkers">ResetNumberOfWorkers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetSecurityConfiguration">ResetSecurityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.resetWorkerType">ResetWorkerType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueJob.GlueJob.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.glueJob.GlueJob.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.glueJob.GlueJob.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.glueJob.GlueJob.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueJob.GlueJob.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueJob.GlueJob.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.glueJob.GlueJob.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.glueJob.GlueJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.glueJob.GlueJob.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.glueJob.GlueJob.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.glueJob.GlueJob.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.glueJob.GlueJob.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.glueJob.GlueJob.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueJob.GlueJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.glueJob.GlueJob.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.glueJob.GlueJob.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueJob.GlueJob.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueJob.GlueJob.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.glueJob.GlueJob.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueJob.GlueJob.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.glueJob.GlueJob.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueJob.GlueJob.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.glueJob.GlueJob.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.glueJob.GlueJob.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueJob.GlueJob.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCommand` <a name="PutCommand" id="@cdktn/provider-awscc.glueJob.GlueJob.putCommand"></a>

```go
func PutCommand(value GlueJobCommand)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueJob.GlueJob.putCommand.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand">GlueJobCommand</a>

---

##### `PutConnections` <a name="PutConnections" id="@cdktn/provider-awscc.glueJob.GlueJob.putConnections"></a>

```go
func PutConnections(value GlueJobConnections)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueJob.GlueJob.putConnections.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobConnections">GlueJobConnections</a>

---

##### `PutExecutionProperty` <a name="PutExecutionProperty" id="@cdktn/provider-awscc.glueJob.GlueJob.putExecutionProperty"></a>

```go
func PutExecutionProperty(value GlueJobExecutionProperty)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueJob.GlueJob.putExecutionProperty.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a>

---

##### `PutNotificationProperty` <a name="PutNotificationProperty" id="@cdktn/provider-awscc.glueJob.GlueJob.putNotificationProperty"></a>

```go
func PutNotificationProperty(value GlueJobNotificationProperty)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueJob.GlueJob.putNotificationProperty.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a>

---

##### `ResetAllocatedCapacity` <a name="ResetAllocatedCapacity" id="@cdktn/provider-awscc.glueJob.GlueJob.resetAllocatedCapacity"></a>

```go
func ResetAllocatedCapacity()
```

##### `ResetConnections` <a name="ResetConnections" id="@cdktn/provider-awscc.glueJob.GlueJob.resetConnections"></a>

```go
func ResetConnections()
```

##### `ResetDefaultArguments` <a name="ResetDefaultArguments" id="@cdktn/provider-awscc.glueJob.GlueJob.resetDefaultArguments"></a>

```go
func ResetDefaultArguments()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.glueJob.GlueJob.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExecutionClass` <a name="ResetExecutionClass" id="@cdktn/provider-awscc.glueJob.GlueJob.resetExecutionClass"></a>

```go
func ResetExecutionClass()
```

##### `ResetExecutionProperty` <a name="ResetExecutionProperty" id="@cdktn/provider-awscc.glueJob.GlueJob.resetExecutionProperty"></a>

```go
func ResetExecutionProperty()
```

##### `ResetGlueVersion` <a name="ResetGlueVersion" id="@cdktn/provider-awscc.glueJob.GlueJob.resetGlueVersion"></a>

```go
func ResetGlueVersion()
```

##### `ResetJobMode` <a name="ResetJobMode" id="@cdktn/provider-awscc.glueJob.GlueJob.resetJobMode"></a>

```go
func ResetJobMode()
```

##### `ResetJobRunQueuingEnabled` <a name="ResetJobRunQueuingEnabled" id="@cdktn/provider-awscc.glueJob.GlueJob.resetJobRunQueuingEnabled"></a>

```go
func ResetJobRunQueuingEnabled()
```

##### `ResetLogUri` <a name="ResetLogUri" id="@cdktn/provider-awscc.glueJob.GlueJob.resetLogUri"></a>

```go
func ResetLogUri()
```

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="@cdktn/provider-awscc.glueJob.GlueJob.resetMaintenanceWindow"></a>

```go
func ResetMaintenanceWindow()
```

##### `ResetMaxCapacity` <a name="ResetMaxCapacity" id="@cdktn/provider-awscc.glueJob.GlueJob.resetMaxCapacity"></a>

```go
func ResetMaxCapacity()
```

##### `ResetMaxRetries` <a name="ResetMaxRetries" id="@cdktn/provider-awscc.glueJob.GlueJob.resetMaxRetries"></a>

```go
func ResetMaxRetries()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.glueJob.GlueJob.resetName"></a>

```go
func ResetName()
```

##### `ResetNonOverridableArguments` <a name="ResetNonOverridableArguments" id="@cdktn/provider-awscc.glueJob.GlueJob.resetNonOverridableArguments"></a>

```go
func ResetNonOverridableArguments()
```

##### `ResetNotificationProperty` <a name="ResetNotificationProperty" id="@cdktn/provider-awscc.glueJob.GlueJob.resetNotificationProperty"></a>

```go
func ResetNotificationProperty()
```

##### `ResetNumberOfWorkers` <a name="ResetNumberOfWorkers" id="@cdktn/provider-awscc.glueJob.GlueJob.resetNumberOfWorkers"></a>

```go
func ResetNumberOfWorkers()
```

##### `ResetSecurityConfiguration` <a name="ResetSecurityConfiguration" id="@cdktn/provider-awscc.glueJob.GlueJob.resetSecurityConfiguration"></a>

```go
func ResetSecurityConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.glueJob.GlueJob.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktn/provider-awscc.glueJob.GlueJob.resetTimeout"></a>

```go
func ResetTimeout()
```

##### `ResetWorkerType` <a name="ResetWorkerType" id="@cdktn/provider-awscc.glueJob.GlueJob.resetWorkerType"></a>

```go
func ResetWorkerType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GlueJob resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.glueJob.GlueJob.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluejob"

gluejob.GlueJob_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueJob.GlueJob.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.glueJob.GlueJob.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluejob"

gluejob.GlueJob_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueJob.GlueJob.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.glueJob.GlueJob.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluejob"

gluejob.GlueJob_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueJob.GlueJob.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.glueJob.GlueJob.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluejob"

gluejob.GlueJob_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GlueJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueJob.GlueJob.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.glueJob.GlueJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GlueJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.glueJob.GlueJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GlueJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueJob.GlueJob.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GlueJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.command">Command</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference">GlueJobCommandOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.connections">Connections</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference">GlueJobConnectionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.executionProperty">ExecutionProperty</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference">GlueJobExecutionPropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.notificationProperty">NotificationProperty</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference">GlueJobNotificationPropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.allocatedCapacityInput">AllocatedCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.commandInput">CommandInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.connectionsInput">ConnectionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.defaultArgumentsInput">DefaultArgumentsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.executionClassInput">ExecutionClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.executionPropertyInput">ExecutionPropertyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.glueVersionInput">GlueVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.jobModeInput">JobModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.jobRunQueuingEnabledInput">JobRunQueuingEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.logUriInput">LogUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.maxCapacityInput">MaxCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.nonOverridableArgumentsInput">NonOverridableArgumentsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.notificationPropertyInput">NotificationPropertyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.numberOfWorkersInput">NumberOfWorkersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.securityConfigurationInput">SecurityConfigurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.tagsInput">TagsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.timeoutInput">TimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.workerTypeInput">WorkerTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.allocatedCapacity">AllocatedCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.defaultArguments">DefaultArguments</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.executionClass">ExecutionClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.glueVersion">GlueVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.jobMode">JobMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.jobRunQueuingEnabled">JobRunQueuingEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.logUri">LogUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.maintenanceWindow">MaintenanceWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.maxCapacity">MaxCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.maxRetries">MaxRetries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.nonOverridableArguments">NonOverridableArguments</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.numberOfWorkers">NumberOfWorkers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.securityConfiguration">SecurityConfiguration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.tags">Tags</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.workerType">WorkerType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.glueJob.GlueJob.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.glueJob.GlueJob.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueJob.GlueJob.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.glueJob.GlueJob.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.glueJob.GlueJob.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.glueJob.GlueJob.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.glueJob.GlueJob.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.glueJob.GlueJob.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.glueJob.GlueJob.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.glueJob.GlueJob.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.glueJob.GlueJob.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.glueJob.GlueJob.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueJob.GlueJob.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.glueJob.GlueJob.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-awscc.glueJob.GlueJob.property.command"></a>

```go
func Command() GlueJobCommandOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference">GlueJobCommandOutputReference</a>

---

##### `Connections`<sup>Required</sup> <a name="Connections" id="@cdktn/provider-awscc.glueJob.GlueJob.property.connections"></a>

```go
func Connections() GlueJobConnectionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference">GlueJobConnectionsOutputReference</a>

---

##### `ExecutionProperty`<sup>Required</sup> <a name="ExecutionProperty" id="@cdktn/provider-awscc.glueJob.GlueJob.property.executionProperty"></a>

```go
func ExecutionProperty() GlueJobExecutionPropertyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference">GlueJobExecutionPropertyOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueJob.GlueJob.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NotificationProperty`<sup>Required</sup> <a name="NotificationProperty" id="@cdktn/provider-awscc.glueJob.GlueJob.property.notificationProperty"></a>

```go
func NotificationProperty() GlueJobNotificationPropertyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference">GlueJobNotificationPropertyOutputReference</a>

---

##### `AllocatedCapacityInput`<sup>Optional</sup> <a name="AllocatedCapacityInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.allocatedCapacityInput"></a>

```go
func AllocatedCapacityInput() *f64
```

- *Type:* *f64

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.commandInput"></a>

```go
func CommandInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectionsInput`<sup>Optional</sup> <a name="ConnectionsInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.connectionsInput"></a>

```go
func ConnectionsInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultArgumentsInput`<sup>Optional</sup> <a name="DefaultArgumentsInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.defaultArgumentsInput"></a>

```go
func DefaultArgumentsInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExecutionClassInput`<sup>Optional</sup> <a name="ExecutionClassInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.executionClassInput"></a>

```go
func ExecutionClassInput() *string
```

- *Type:* *string

---

##### `ExecutionPropertyInput`<sup>Optional</sup> <a name="ExecutionPropertyInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.executionPropertyInput"></a>

```go
func ExecutionPropertyInput() interface{}
```

- *Type:* interface{}

---

##### `GlueVersionInput`<sup>Optional</sup> <a name="GlueVersionInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.glueVersionInput"></a>

```go
func GlueVersionInput() *string
```

- *Type:* *string

---

##### `JobModeInput`<sup>Optional</sup> <a name="JobModeInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.jobModeInput"></a>

```go
func JobModeInput() *string
```

- *Type:* *string

---

##### `JobRunQueuingEnabledInput`<sup>Optional</sup> <a name="JobRunQueuingEnabledInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.jobRunQueuingEnabledInput"></a>

```go
func JobRunQueuingEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LogUriInput`<sup>Optional</sup> <a name="LogUriInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.logUriInput"></a>

```go
func LogUriInput() *string
```

- *Type:* *string

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.maintenanceWindowInput"></a>

```go
func MaintenanceWindowInput() *string
```

- *Type:* *string

---

##### `MaxCapacityInput`<sup>Optional</sup> <a name="MaxCapacityInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.maxCapacityInput"></a>

```go
func MaxCapacityInput() *f64
```

- *Type:* *f64

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.maxRetriesInput"></a>

```go
func MaxRetriesInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NonOverridableArgumentsInput`<sup>Optional</sup> <a name="NonOverridableArgumentsInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.nonOverridableArgumentsInput"></a>

```go
func NonOverridableArgumentsInput() *string
```

- *Type:* *string

---

##### `NotificationPropertyInput`<sup>Optional</sup> <a name="NotificationPropertyInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.notificationPropertyInput"></a>

```go
func NotificationPropertyInput() interface{}
```

- *Type:* interface{}

---

##### `NumberOfWorkersInput`<sup>Optional</sup> <a name="NumberOfWorkersInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.numberOfWorkersInput"></a>

```go
func NumberOfWorkersInput() *f64
```

- *Type:* *f64

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `SecurityConfigurationInput`<sup>Optional</sup> <a name="SecurityConfigurationInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.securityConfigurationInput"></a>

```go
func SecurityConfigurationInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.tagsInput"></a>

```go
func TagsInput() *string
```

- *Type:* *string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.timeoutInput"></a>

```go
func TimeoutInput() *f64
```

- *Type:* *f64

---

##### `WorkerTypeInput`<sup>Optional</sup> <a name="WorkerTypeInput" id="@cdktn/provider-awscc.glueJob.GlueJob.property.workerTypeInput"></a>

```go
func WorkerTypeInput() *string
```

- *Type:* *string

---

##### `AllocatedCapacity`<sup>Required</sup> <a name="AllocatedCapacity" id="@cdktn/provider-awscc.glueJob.GlueJob.property.allocatedCapacity"></a>

```go
func AllocatedCapacity() *f64
```

- *Type:* *f64

---

##### `DefaultArguments`<sup>Required</sup> <a name="DefaultArguments" id="@cdktn/provider-awscc.glueJob.GlueJob.property.defaultArguments"></a>

```go
func DefaultArguments() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.glueJob.GlueJob.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExecutionClass`<sup>Required</sup> <a name="ExecutionClass" id="@cdktn/provider-awscc.glueJob.GlueJob.property.executionClass"></a>

```go
func ExecutionClass() *string
```

- *Type:* *string

---

##### `GlueVersion`<sup>Required</sup> <a name="GlueVersion" id="@cdktn/provider-awscc.glueJob.GlueJob.property.glueVersion"></a>

```go
func GlueVersion() *string
```

- *Type:* *string

---

##### `JobMode`<sup>Required</sup> <a name="JobMode" id="@cdktn/provider-awscc.glueJob.GlueJob.property.jobMode"></a>

```go
func JobMode() *string
```

- *Type:* *string

---

##### `JobRunQueuingEnabled`<sup>Required</sup> <a name="JobRunQueuingEnabled" id="@cdktn/provider-awscc.glueJob.GlueJob.property.jobRunQueuingEnabled"></a>

```go
func JobRunQueuingEnabled() interface{}
```

- *Type:* interface{}

---

##### `LogUri`<sup>Required</sup> <a name="LogUri" id="@cdktn/provider-awscc.glueJob.GlueJob.property.logUri"></a>

```go
func LogUri() *string
```

- *Type:* *string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktn/provider-awscc.glueJob.GlueJob.property.maintenanceWindow"></a>

```go
func MaintenanceWindow() *string
```

- *Type:* *string

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.glueJob.GlueJob.property.maxCapacity"></a>

```go
func MaxCapacity() *f64
```

- *Type:* *f64

---

##### `MaxRetries`<sup>Required</sup> <a name="MaxRetries" id="@cdktn/provider-awscc.glueJob.GlueJob.property.maxRetries"></a>

```go
func MaxRetries() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.glueJob.GlueJob.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NonOverridableArguments`<sup>Required</sup> <a name="NonOverridableArguments" id="@cdktn/provider-awscc.glueJob.GlueJob.property.nonOverridableArguments"></a>

```go
func NonOverridableArguments() *string
```

- *Type:* *string

---

##### `NumberOfWorkers`<sup>Required</sup> <a name="NumberOfWorkers" id="@cdktn/provider-awscc.glueJob.GlueJob.property.numberOfWorkers"></a>

```go
func NumberOfWorkers() *f64
```

- *Type:* *f64

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-awscc.glueJob.GlueJob.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `SecurityConfiguration`<sup>Required</sup> <a name="SecurityConfiguration" id="@cdktn/provider-awscc.glueJob.GlueJob.property.securityConfiguration"></a>

```go
func SecurityConfiguration() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.glueJob.GlueJob.property.tags"></a>

```go
func Tags() *string
```

- *Type:* *string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktn/provider-awscc.glueJob.GlueJob.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `WorkerType`<sup>Required</sup> <a name="WorkerType" id="@cdktn/provider-awscc.glueJob.GlueJob.property.workerType"></a>

```go
func WorkerType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJob.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.glueJob.GlueJob.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueJobCommand <a name="GlueJobCommand" id="@cdktn/provider-awscc.glueJob.GlueJobCommand"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueJob.GlueJobCommand.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluejob"

&gluejob.GlueJobCommand {
	Name: *string,
	PythonVersion: *string,
	Runtime: *string,
	ScriptLocation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand.property.name">Name</a></code> | <code>*string</code> | The name of the job command. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand.property.pythonVersion">PythonVersion</a></code> | <code>*string</code> | The Python version being used to execute a Python shell job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand.property.runtime">Runtime</a></code> | <code>*string</code> | Runtime is used to specify the versions of Ray, Python and additional libraries available in your environment. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand.property.scriptLocation">ScriptLocation</a></code> | <code>*string</code> | Specifies the Amazon Simple Storage Service (Amazon S3) path to a script that executes a job. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.glueJob.GlueJobCommand.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the job command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#name GlueJob#name}

---

##### `PythonVersion`<sup>Optional</sup> <a name="PythonVersion" id="@cdktn/provider-awscc.glueJob.GlueJobCommand.property.pythonVersion"></a>

```go
PythonVersion *string
```

- *Type:* *string

The Python version being used to execute a Python shell job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#python_version GlueJob#python_version}

---

##### `Runtime`<sup>Optional</sup> <a name="Runtime" id="@cdktn/provider-awscc.glueJob.GlueJobCommand.property.runtime"></a>

```go
Runtime *string
```

- *Type:* *string

Runtime is used to specify the versions of Ray, Python and additional libraries available in your environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#runtime GlueJob#runtime}

---

##### `ScriptLocation`<sup>Optional</sup> <a name="ScriptLocation" id="@cdktn/provider-awscc.glueJob.GlueJobCommand.property.scriptLocation"></a>

```go
ScriptLocation *string
```

- *Type:* *string

Specifies the Amazon Simple Storage Service (Amazon S3) path to a script that executes a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#script_location GlueJob#script_location}

---

### GlueJobConfig <a name="GlueJobConfig" id="@cdktn/provider-awscc.glueJob.GlueJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluejob"

&gluejob.GlueJobConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Command: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.glueJob.GlueJobCommand,
	Role: *string,
	AllocatedCapacity: *f64,
	Connections: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.glueJob.GlueJobConnections,
	DefaultArguments: *string,
	Description: *string,
	ExecutionClass: *string,
	ExecutionProperty: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.glueJob.GlueJobExecutionProperty,
	GlueVersion: *string,
	JobMode: *string,
	JobRunQueuingEnabled: interface{},
	LogUri: *string,
	MaintenanceWindow: *string,
	MaxCapacity: *f64,
	MaxRetries: *f64,
	Name: *string,
	NonOverridableArguments: *string,
	NotificationProperty: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.glueJob.GlueJobNotificationProperty,
	NumberOfWorkers: *f64,
	SecurityConfiguration: *string,
	Tags: *string,
	Timeout: *f64,
	WorkerType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.command">Command</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand">GlueJobCommand</a></code> | The code that executes a job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.role">Role</a></code> | <code>*string</code> | The name or Amazon Resource Name (ARN) of the IAM role associated with this job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.allocatedCapacity">AllocatedCapacity</a></code> | <code>*f64</code> | The number of capacity units that are allocated to this job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.connections">Connections</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnections">GlueJobConnections</a></code> | Specifies the connections used by a job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.defaultArguments">DefaultArguments</a></code> | <code>*string</code> | The default arguments for this job, specified as name-value pairs. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.description">Description</a></code> | <code>*string</code> | A description of the job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.executionClass">ExecutionClass</a></code> | <code>*string</code> | Indicates whether the job is run with a standard or flexible execution class. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.executionProperty">ExecutionProperty</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a></code> | The maximum number of concurrent runs that are allowed for this job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.glueVersion">GlueVersion</a></code> | <code>*string</code> | Glue version determines the versions of Apache Spark and Python that AWS Glue supports. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.jobMode">JobMode</a></code> | <code>*string</code> | Property description not available. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.jobRunQueuingEnabled">JobRunQueuingEnabled</a></code> | <code>interface{}</code> | Property description not available. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.logUri">LogUri</a></code> | <code>*string</code> | This field is reserved for future use. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.maintenanceWindow">MaintenanceWindow</a></code> | <code>*string</code> | Property description not available. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.maxCapacity">MaxCapacity</a></code> | <code>*f64</code> | The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.maxRetries">MaxRetries</a></code> | <code>*f64</code> | The maximum number of times to retry this job after a JobRun fails. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.name">Name</a></code> | <code>*string</code> | The name you assign to the job definition. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.nonOverridableArguments">NonOverridableArguments</a></code> | <code>*string</code> | Non-overridable arguments for this job, specified as name-value pairs. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.notificationProperty">NotificationProperty</a></code> | <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a></code> | Specifies configuration properties of a notification. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.numberOfWorkers">NumberOfWorkers</a></code> | <code>*f64</code> | The number of workers of a defined workerType that are allocated when a job runs. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.securityConfiguration">SecurityConfiguration</a></code> | <code>*string</code> | The name of the SecurityConfiguration structure to be used with this job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.tags">Tags</a></code> | <code>*string</code> | The tags to use with this job. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.timeout">Timeout</a></code> | <code>*f64</code> | The maximum time that a job run can consume resources before it is terminated and enters TIMEOUT status. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConfig.property.workerType">WorkerType</a></code> | <code>*string</code> | TThe type of predefined worker that is allocated when a job runs. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.command"></a>

```go
Command GlueJobCommand
```

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobCommand">GlueJobCommand</a>

The code that executes a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#command GlueJob#command}

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

The name or Amazon Resource Name (ARN) of the IAM role associated with this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#role GlueJob#role}

---

##### `AllocatedCapacity`<sup>Optional</sup> <a name="AllocatedCapacity" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.allocatedCapacity"></a>

```go
AllocatedCapacity *f64
```

- *Type:* *f64

The number of capacity units that are allocated to this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#allocated_capacity GlueJob#allocated_capacity}

---

##### `Connections`<sup>Optional</sup> <a name="Connections" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.connections"></a>

```go
Connections GlueJobConnections
```

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobConnections">GlueJobConnections</a>

Specifies the connections used by a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#connections GlueJob#connections}

---

##### `DefaultArguments`<sup>Optional</sup> <a name="DefaultArguments" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.defaultArguments"></a>

```go
DefaultArguments *string
```

- *Type:* *string

The default arguments for this job, specified as name-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#default_arguments GlueJob#default_arguments}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#description GlueJob#description}

---

##### `ExecutionClass`<sup>Optional</sup> <a name="ExecutionClass" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.executionClass"></a>

```go
ExecutionClass *string
```

- *Type:* *string

Indicates whether the job is run with a standard or flexible execution class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#execution_class GlueJob#execution_class}

---

##### `ExecutionProperty`<sup>Optional</sup> <a name="ExecutionProperty" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.executionProperty"></a>

```go
ExecutionProperty GlueJobExecutionProperty
```

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a>

The maximum number of concurrent runs that are allowed for this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#execution_property GlueJob#execution_property}

---

##### `GlueVersion`<sup>Optional</sup> <a name="GlueVersion" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.glueVersion"></a>

```go
GlueVersion *string
```

- *Type:* *string

Glue version determines the versions of Apache Spark and Python that AWS Glue supports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#glue_version GlueJob#glue_version}

---

##### `JobMode`<sup>Optional</sup> <a name="JobMode" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.jobMode"></a>

```go
JobMode *string
```

- *Type:* *string

Property description not available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#job_mode GlueJob#job_mode}

---

##### `JobRunQueuingEnabled`<sup>Optional</sup> <a name="JobRunQueuingEnabled" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.jobRunQueuingEnabled"></a>

```go
JobRunQueuingEnabled interface{}
```

- *Type:* interface{}

Property description not available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#job_run_queuing_enabled GlueJob#job_run_queuing_enabled}

---

##### `LogUri`<sup>Optional</sup> <a name="LogUri" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.logUri"></a>

```go
LogUri *string
```

- *Type:* *string

This field is reserved for future use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#log_uri GlueJob#log_uri}

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.maintenanceWindow"></a>

```go
MaintenanceWindow *string
```

- *Type:* *string

Property description not available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#maintenance_window GlueJob#maintenance_window}

---

##### `MaxCapacity`<sup>Optional</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.maxCapacity"></a>

```go
MaxCapacity *f64
```

- *Type:* *f64

The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#max_capacity GlueJob#max_capacity}

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.maxRetries"></a>

```go
MaxRetries *f64
```

- *Type:* *f64

The maximum number of times to retry this job after a JobRun fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#max_retries GlueJob#max_retries}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name you assign to the job definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#name GlueJob#name}

---

##### `NonOverridableArguments`<sup>Optional</sup> <a name="NonOverridableArguments" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.nonOverridableArguments"></a>

```go
NonOverridableArguments *string
```

- *Type:* *string

Non-overridable arguments for this job, specified as name-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#non_overridable_arguments GlueJob#non_overridable_arguments}

---

##### `NotificationProperty`<sup>Optional</sup> <a name="NotificationProperty" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.notificationProperty"></a>

```go
NotificationProperty GlueJobNotificationProperty
```

- *Type:* <a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a>

Specifies configuration properties of a notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#notification_property GlueJob#notification_property}

---

##### `NumberOfWorkers`<sup>Optional</sup> <a name="NumberOfWorkers" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.numberOfWorkers"></a>

```go
NumberOfWorkers *f64
```

- *Type:* *f64

The number of workers of a defined workerType that are allocated when a job runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#number_of_workers GlueJob#number_of_workers}

---

##### `SecurityConfiguration`<sup>Optional</sup> <a name="SecurityConfiguration" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.securityConfiguration"></a>

```go
SecurityConfiguration *string
```

- *Type:* *string

The name of the SecurityConfiguration structure to be used with this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#security_configuration GlueJob#security_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.tags"></a>

```go
Tags *string
```

- *Type:* *string

The tags to use with this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#tags GlueJob#tags}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.timeout"></a>

```go
Timeout *f64
```

- *Type:* *f64

The maximum time that a job run can consume resources before it is terminated and enters TIMEOUT status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#timeout GlueJob#timeout}

---

##### `WorkerType`<sup>Optional</sup> <a name="WorkerType" id="@cdktn/provider-awscc.glueJob.GlueJobConfig.property.workerType"></a>

```go
WorkerType *string
```

- *Type:* *string

TThe type of predefined worker that is allocated when a job runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#worker_type GlueJob#worker_type}

---

### GlueJobConnections <a name="GlueJobConnections" id="@cdktn/provider-awscc.glueJob.GlueJobConnections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueJob.GlueJobConnections.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluejob"

&gluejob.GlueJobConnections {
	Connections: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnections.property.connections">Connections</a></code> | <code>*[]*string</code> | A list of connections used by the job. |

---

##### `Connections`<sup>Optional</sup> <a name="Connections" id="@cdktn/provider-awscc.glueJob.GlueJobConnections.property.connections"></a>

```go
Connections *[]*string
```

- *Type:* *[]*string

A list of connections used by the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#connections GlueJob#connections}

---

### GlueJobExecutionProperty <a name="GlueJobExecutionProperty" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluejob"

&gluejob.GlueJobExecutionProperty {
	MaxConcurrentRuns: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty.property.maxConcurrentRuns">MaxConcurrentRuns</a></code> | <code>*f64</code> | The maximum number of concurrent runs allowed for the job. |

---

##### `MaxConcurrentRuns`<sup>Optional</sup> <a name="MaxConcurrentRuns" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionProperty.property.maxConcurrentRuns"></a>

```go
MaxConcurrentRuns *f64
```

- *Type:* *f64

The maximum number of concurrent runs allowed for the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#max_concurrent_runs GlueJob#max_concurrent_runs}

---

### GlueJobNotificationProperty <a name="GlueJobNotificationProperty" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluejob"

&gluejob.GlueJobNotificationProperty {
	NotifyDelayAfter: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty.property.notifyDelayAfter">NotifyDelayAfter</a></code> | <code>*f64</code> | It is the number of minutes to wait before sending a job run delay notification after a job run starts. |

---

##### `NotifyDelayAfter`<sup>Optional</sup> <a name="NotifyDelayAfter" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationProperty.property.notifyDelayAfter"></a>

```go
NotifyDelayAfter *f64
```

- *Type:* *f64

It is the number of minutes to wait before sending a job run delay notification after a job run starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_job#notify_delay_after GlueJob#notify_delay_after}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueJobCommandOutputReference <a name="GlueJobCommandOutputReference" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluejob"

gluejob.NewGlueJobCommandOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueJobCommandOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resetPythonVersion">ResetPythonVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resetRuntime">ResetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resetScriptLocation">ResetScriptLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPythonVersion` <a name="ResetPythonVersion" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resetPythonVersion"></a>

```go
func ResetPythonVersion()
```

##### `ResetRuntime` <a name="ResetRuntime" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resetRuntime"></a>

```go
func ResetRuntime()
```

##### `ResetScriptLocation` <a name="ResetScriptLocation" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.resetScriptLocation"></a>

```go
func ResetScriptLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.pythonVersionInput">PythonVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.runtimeInput">RuntimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.scriptLocationInput">ScriptLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.pythonVersion">PythonVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.runtime">Runtime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.scriptLocation">ScriptLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PythonVersionInput`<sup>Optional</sup> <a name="PythonVersionInput" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.pythonVersionInput"></a>

```go
func PythonVersionInput() *string
```

- *Type:* *string

---

##### `RuntimeInput`<sup>Optional</sup> <a name="RuntimeInput" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.runtimeInput"></a>

```go
func RuntimeInput() *string
```

- *Type:* *string

---

##### `ScriptLocationInput`<sup>Optional</sup> <a name="ScriptLocationInput" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.scriptLocationInput"></a>

```go
func ScriptLocationInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PythonVersion`<sup>Required</sup> <a name="PythonVersion" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.pythonVersion"></a>

```go
func PythonVersion() *string
```

- *Type:* *string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.runtime"></a>

```go
func Runtime() *string
```

- *Type:* *string

---

##### `ScriptLocation`<sup>Required</sup> <a name="ScriptLocation" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.scriptLocation"></a>

```go
func ScriptLocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueJob.GlueJobCommandOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueJobConnectionsOutputReference <a name="GlueJobConnectionsOutputReference" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluejob"

gluejob.NewGlueJobConnectionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueJobConnectionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.resetConnections">ResetConnections</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnections` <a name="ResetConnections" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.resetConnections"></a>

```go
func ResetConnections()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.connectionsInput">ConnectionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.connections">Connections</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionsInput`<sup>Optional</sup> <a name="ConnectionsInput" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.connectionsInput"></a>

```go
func ConnectionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Connections`<sup>Required</sup> <a name="Connections" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.connections"></a>

```go
func Connections() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueJob.GlueJobConnectionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueJobExecutionPropertyOutputReference <a name="GlueJobExecutionPropertyOutputReference" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluejob"

gluejob.NewGlueJobExecutionPropertyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueJobExecutionPropertyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.resetMaxConcurrentRuns">ResetMaxConcurrentRuns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxConcurrentRuns` <a name="ResetMaxConcurrentRuns" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.resetMaxConcurrentRuns"></a>

```go
func ResetMaxConcurrentRuns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.maxConcurrentRunsInput">MaxConcurrentRunsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.maxConcurrentRuns">MaxConcurrentRuns</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxConcurrentRunsInput`<sup>Optional</sup> <a name="MaxConcurrentRunsInput" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.maxConcurrentRunsInput"></a>

```go
func MaxConcurrentRunsInput() *f64
```

- *Type:* *f64

---

##### `MaxConcurrentRuns`<sup>Required</sup> <a name="MaxConcurrentRuns" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.maxConcurrentRuns"></a>

```go
func MaxConcurrentRuns() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueJob.GlueJobExecutionPropertyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueJobNotificationPropertyOutputReference <a name="GlueJobNotificationPropertyOutputReference" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluejob"

gluejob.NewGlueJobNotificationPropertyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueJobNotificationPropertyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.resetNotifyDelayAfter">ResetNotifyDelayAfter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNotifyDelayAfter` <a name="ResetNotifyDelayAfter" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.resetNotifyDelayAfter"></a>

```go
func ResetNotifyDelayAfter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.notifyDelayAfterInput">NotifyDelayAfterInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.notifyDelayAfter">NotifyDelayAfter</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NotifyDelayAfterInput`<sup>Optional</sup> <a name="NotifyDelayAfterInput" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.notifyDelayAfterInput"></a>

```go
func NotifyDelayAfterInput() *f64
```

- *Type:* *f64

---

##### `NotifyDelayAfter`<sup>Required</sup> <a name="NotifyDelayAfter" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.notifyDelayAfter"></a>

```go
func NotifyDelayAfter() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueJob.GlueJobNotificationPropertyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



