# `iotJobTemplate` Submodule <a name="`iotJobTemplate` Submodule" id="@cdktn/provider-awscc.iotJobTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotJobTemplate <a name="IotJobTemplate" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template awscc_iot_job_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotjobtemplate"

iotjobtemplate.NewIotJobTemplate(scope Construct, id *string, config IotJobTemplateConfig) IotJobTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig">IotJobTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig">IotJobTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putAbortConfig">PutAbortConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putJobExecutionsRetryConfig">PutJobExecutionsRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putJobExecutionsRolloutConfig">PutJobExecutionsRolloutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putMaintenanceWindows">PutMaintenanceWindows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putPresignedUrlConfig">PutPresignedUrlConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putTimeoutConfig">PutTimeoutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetAbortConfig">ResetAbortConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetDestinationPackageVersions">ResetDestinationPackageVersions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetDocument">ResetDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetDocumentSource">ResetDocumentSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetJobArn">ResetJobArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetJobExecutionsRetryConfig">ResetJobExecutionsRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetJobExecutionsRolloutConfig">ResetJobExecutionsRolloutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetMaintenanceWindows">ResetMaintenanceWindows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetPresignedUrlConfig">ResetPresignedUrlConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetTimeoutConfig">ResetTimeoutConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAbortConfig` <a name="PutAbortConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putAbortConfig"></a>

```go
func PutAbortConfig(value IotJobTemplateAbortConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putAbortConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfig">IotJobTemplateAbortConfig</a>

---

##### `PutJobExecutionsRetryConfig` <a name="PutJobExecutionsRetryConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putJobExecutionsRetryConfig"></a>

```go
func PutJobExecutionsRetryConfig(value IotJobTemplateJobExecutionsRetryConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putJobExecutionsRetryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig">IotJobTemplateJobExecutionsRetryConfig</a>

---

##### `PutJobExecutionsRolloutConfig` <a name="PutJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putJobExecutionsRolloutConfig"></a>

```go
func PutJobExecutionsRolloutConfig(value IotJobTemplateJobExecutionsRolloutConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putJobExecutionsRolloutConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig">IotJobTemplateJobExecutionsRolloutConfig</a>

---

##### `PutMaintenanceWindows` <a name="PutMaintenanceWindows" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putMaintenanceWindows"></a>

```go
func PutMaintenanceWindows(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putMaintenanceWindows.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPresignedUrlConfig` <a name="PutPresignedUrlConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putPresignedUrlConfig"></a>

```go
func PutPresignedUrlConfig(value IotJobTemplatePresignedUrlConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putPresignedUrlConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig">IotJobTemplatePresignedUrlConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeoutConfig` <a name="PutTimeoutConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putTimeoutConfig"></a>

```go
func PutTimeoutConfig(value IotJobTemplateTimeoutConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.putTimeoutConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfig">IotJobTemplateTimeoutConfig</a>

---

##### `ResetAbortConfig` <a name="ResetAbortConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetAbortConfig"></a>

```go
func ResetAbortConfig()
```

##### `ResetDestinationPackageVersions` <a name="ResetDestinationPackageVersions" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetDestinationPackageVersions"></a>

```go
func ResetDestinationPackageVersions()
```

##### `ResetDocument` <a name="ResetDocument" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetDocument"></a>

```go
func ResetDocument()
```

##### `ResetDocumentSource` <a name="ResetDocumentSource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetDocumentSource"></a>

```go
func ResetDocumentSource()
```

##### `ResetJobArn` <a name="ResetJobArn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetJobArn"></a>

```go
func ResetJobArn()
```

##### `ResetJobExecutionsRetryConfig` <a name="ResetJobExecutionsRetryConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetJobExecutionsRetryConfig"></a>

```go
func ResetJobExecutionsRetryConfig()
```

##### `ResetJobExecutionsRolloutConfig` <a name="ResetJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetJobExecutionsRolloutConfig"></a>

```go
func ResetJobExecutionsRolloutConfig()
```

##### `ResetMaintenanceWindows` <a name="ResetMaintenanceWindows" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetMaintenanceWindows"></a>

```go
func ResetMaintenanceWindows()
```

##### `ResetPresignedUrlConfig` <a name="ResetPresignedUrlConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetPresignedUrlConfig"></a>

```go
func ResetPresignedUrlConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeoutConfig` <a name="ResetTimeoutConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.resetTimeoutConfig"></a>

```go
func ResetTimeoutConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IotJobTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotjobtemplate"

iotjobtemplate.IotJobTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotjobtemplate"

iotjobtemplate.IotJobTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotjobtemplate"

iotjobtemplate.IotJobTemplate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotjobtemplate"

iotjobtemplate.IotJobTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a IotJobTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IotJobTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IotJobTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the IotJobTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.abortConfig">AbortConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference">IotJobTemplateAbortConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobExecutionsRetryConfig">JobExecutionsRetryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference">IotJobTemplateJobExecutionsRetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobExecutionsRolloutConfig">JobExecutionsRolloutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference">IotJobTemplateJobExecutionsRolloutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.maintenanceWindows">MaintenanceWindows</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList">IotJobTemplateMaintenanceWindowsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.presignedUrlConfig">PresignedUrlConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference">IotJobTemplatePresignedUrlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList">IotJobTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.timeoutConfig">TimeoutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference">IotJobTemplateTimeoutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.abortConfigInput">AbortConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.destinationPackageVersionsInput">DestinationPackageVersionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.documentInput">DocumentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.documentSourceInput">DocumentSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobArnInput">JobArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobExecutionsRetryConfigInput">JobExecutionsRetryConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobExecutionsRolloutConfigInput">JobExecutionsRolloutConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobTemplateIdInput">JobTemplateIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.maintenanceWindowsInput">MaintenanceWindowsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.presignedUrlConfigInput">PresignedUrlConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.timeoutConfigInput">TimeoutConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.destinationPackageVersions">DestinationPackageVersions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.document">Document</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.documentSource">DocumentSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobArn">JobArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobTemplateId">JobTemplateId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AbortConfig`<sup>Required</sup> <a name="AbortConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.abortConfig"></a>

```go
func AbortConfig() IotJobTemplateAbortConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference">IotJobTemplateAbortConfigOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `JobExecutionsRetryConfig`<sup>Required</sup> <a name="JobExecutionsRetryConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobExecutionsRetryConfig"></a>

```go
func JobExecutionsRetryConfig() IotJobTemplateJobExecutionsRetryConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference">IotJobTemplateJobExecutionsRetryConfigOutputReference</a>

---

##### `JobExecutionsRolloutConfig`<sup>Required</sup> <a name="JobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobExecutionsRolloutConfig"></a>

```go
func JobExecutionsRolloutConfig() IotJobTemplateJobExecutionsRolloutConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference">IotJobTemplateJobExecutionsRolloutConfigOutputReference</a>

---

##### `MaintenanceWindows`<sup>Required</sup> <a name="MaintenanceWindows" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.maintenanceWindows"></a>

```go
func MaintenanceWindows() IotJobTemplateMaintenanceWindowsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList">IotJobTemplateMaintenanceWindowsList</a>

---

##### `PresignedUrlConfig`<sup>Required</sup> <a name="PresignedUrlConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.presignedUrlConfig"></a>

```go
func PresignedUrlConfig() IotJobTemplatePresignedUrlConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference">IotJobTemplatePresignedUrlConfigOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.tags"></a>

```go
func Tags() IotJobTemplateTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList">IotJobTemplateTagsList</a>

---

##### `TimeoutConfig`<sup>Required</sup> <a name="TimeoutConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.timeoutConfig"></a>

```go
func TimeoutConfig() IotJobTemplateTimeoutConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference">IotJobTemplateTimeoutConfigOutputReference</a>

---

##### `AbortConfigInput`<sup>Optional</sup> <a name="AbortConfigInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.abortConfigInput"></a>

```go
func AbortConfigInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DestinationPackageVersionsInput`<sup>Optional</sup> <a name="DestinationPackageVersionsInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.destinationPackageVersionsInput"></a>

```go
func DestinationPackageVersionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DocumentInput`<sup>Optional</sup> <a name="DocumentInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.documentInput"></a>

```go
func DocumentInput() *string
```

- *Type:* *string

---

##### `DocumentSourceInput`<sup>Optional</sup> <a name="DocumentSourceInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.documentSourceInput"></a>

```go
func DocumentSourceInput() *string
```

- *Type:* *string

---

##### `JobArnInput`<sup>Optional</sup> <a name="JobArnInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobArnInput"></a>

```go
func JobArnInput() *string
```

- *Type:* *string

---

##### `JobExecutionsRetryConfigInput`<sup>Optional</sup> <a name="JobExecutionsRetryConfigInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobExecutionsRetryConfigInput"></a>

```go
func JobExecutionsRetryConfigInput() interface{}
```

- *Type:* interface{}

---

##### `JobExecutionsRolloutConfigInput`<sup>Optional</sup> <a name="JobExecutionsRolloutConfigInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobExecutionsRolloutConfigInput"></a>

```go
func JobExecutionsRolloutConfigInput() interface{}
```

- *Type:* interface{}

---

##### `JobTemplateIdInput`<sup>Optional</sup> <a name="JobTemplateIdInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobTemplateIdInput"></a>

```go
func JobTemplateIdInput() *string
```

- *Type:* *string

---

##### `MaintenanceWindowsInput`<sup>Optional</sup> <a name="MaintenanceWindowsInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.maintenanceWindowsInput"></a>

```go
func MaintenanceWindowsInput() interface{}
```

- *Type:* interface{}

---

##### `PresignedUrlConfigInput`<sup>Optional</sup> <a name="PresignedUrlConfigInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.presignedUrlConfigInput"></a>

```go
func PresignedUrlConfigInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutConfigInput`<sup>Optional</sup> <a name="TimeoutConfigInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.timeoutConfigInput"></a>

```go
func TimeoutConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DestinationPackageVersions`<sup>Required</sup> <a name="DestinationPackageVersions" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.destinationPackageVersions"></a>

```go
func DestinationPackageVersions() *[]*string
```

- *Type:* *[]*string

---

##### `Document`<sup>Required</sup> <a name="Document" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.document"></a>

```go
func Document() *string
```

- *Type:* *string

---

##### `DocumentSource`<sup>Required</sup> <a name="DocumentSource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.documentSource"></a>

```go
func DocumentSource() *string
```

- *Type:* *string

---

##### `JobArn`<sup>Required</sup> <a name="JobArn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobArn"></a>

```go
func JobArn() *string
```

- *Type:* *string

---

##### `JobTemplateId`<sup>Required</sup> <a name="JobTemplateId" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.jobTemplateId"></a>

```go
func JobTemplateId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IotJobTemplateAbortConfig <a name="IotJobTemplateAbortConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotjobtemplate"

&iotjobtemplate.IotJobTemplateAbortConfig {
	CriteriaList: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfig.property.criteriaList">CriteriaList</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#criteria_list IotJobTemplate#criteria_list}. |

---

##### `CriteriaList`<sup>Optional</sup> <a name="CriteriaList" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfig.property.criteriaList"></a>

```go
CriteriaList interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#criteria_list IotJobTemplate#criteria_list}.

---

### IotJobTemplateAbortConfigCriteriaListStruct <a name="IotJobTemplateAbortConfigCriteriaListStruct" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotjobtemplate"

&iotjobtemplate.IotJobTemplateAbortConfigCriteriaListStruct {
	Action: *string,
	FailureType: *string,
	MinNumberOfExecutedThings: *f64,
	ThresholdPercentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct.property.action">Action</a></code> | <code>*string</code> | The type of job action to take to initiate the job abort. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct.property.failureType">FailureType</a></code> | <code>*string</code> | The type of job execution failures that can initiate a job abort. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct.property.minNumberOfExecutedThings">MinNumberOfExecutedThings</a></code> | <code>*f64</code> | The minimum number of things which must receive job execution notifications before the job can be aborted. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct.property.thresholdPercentage">ThresholdPercentage</a></code> | <code>*f64</code> | The minimum percentage of job execution failures that must occur to initiate the job abort. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct.property.action"></a>

```go
Action *string
```

- *Type:* *string

The type of job action to take to initiate the job abort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#action IotJobTemplate#action}

---

##### `FailureType`<sup>Optional</sup> <a name="FailureType" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct.property.failureType"></a>

```go
FailureType *string
```

- *Type:* *string

The type of job execution failures that can initiate a job abort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#failure_type IotJobTemplate#failure_type}

---

##### `MinNumberOfExecutedThings`<sup>Optional</sup> <a name="MinNumberOfExecutedThings" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct.property.minNumberOfExecutedThings"></a>

```go
MinNumberOfExecutedThings *f64
```

- *Type:* *f64

The minimum number of things which must receive job execution notifications before the job can be aborted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#min_number_of_executed_things IotJobTemplate#min_number_of_executed_things}

---

##### `ThresholdPercentage`<sup>Optional</sup> <a name="ThresholdPercentage" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStruct.property.thresholdPercentage"></a>

```go
ThresholdPercentage *f64
```

- *Type:* *f64

The minimum percentage of job execution failures that must occur to initiate the job abort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#threshold_percentage IotJobTemplate#threshold_percentage}

---

### IotJobTemplateConfig <a name="IotJobTemplateConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotjobtemplate"

&iotjobtemplate.IotJobTemplateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Description: *string,
	JobTemplateId: *string,
	AbortConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotJobTemplate.IotJobTemplateAbortConfig,
	DestinationPackageVersions: *[]*string,
	Document: *string,
	DocumentSource: *string,
	JobArn: *string,
	JobExecutionsRetryConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig,
	JobExecutionsRolloutConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig,
	MaintenanceWindows: interface{},
	PresignedUrlConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig,
	Tags: interface{},
	TimeoutConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotJobTemplate.IotJobTemplateTimeoutConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.description">Description</a></code> | <code>*string</code> | A description of the Job Template. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.jobTemplateId">JobTemplateId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#job_template_id IotJobTemplate#job_template_id}. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.abortConfig">AbortConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfig">IotJobTemplateAbortConfig</a></code> | The criteria that determine when and how a job abort takes place. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.destinationPackageVersions">DestinationPackageVersions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#destination_package_versions IotJobTemplate#destination_package_versions}. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.document">Document</a></code> | <code>*string</code> | The job document. Required if you don't specify a value for documentSource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.documentSource">DocumentSource</a></code> | <code>*string</code> | An S3 link to the job document to use in the template. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.jobArn">JobArn</a></code> | <code>*string</code> | Optional for copying a JobTemplate from a pre-existing Job configuration. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.jobExecutionsRetryConfig">JobExecutionsRetryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig">IotJobTemplateJobExecutionsRetryConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#job_executions_retry_config IotJobTemplate#job_executions_retry_config}. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.jobExecutionsRolloutConfig">JobExecutionsRolloutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig">IotJobTemplateJobExecutionsRolloutConfig</a></code> | Allows you to create a staged rollout of a job. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.maintenanceWindows">MaintenanceWindows</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#maintenance_windows IotJobTemplate#maintenance_windows}. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.presignedUrlConfig">PresignedUrlConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig">IotJobTemplatePresignedUrlConfig</a></code> | Configuration for pre-signed S3 URLs. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Metadata that can be used to manage the JobTemplate. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.timeoutConfig">TimeoutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfig">IotJobTemplateTimeoutConfig</a></code> | Specifies the amount of time each device has to finish its execution of the job. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the Job Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#description IotJobTemplate#description}

---

##### `JobTemplateId`<sup>Required</sup> <a name="JobTemplateId" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.jobTemplateId"></a>

```go
JobTemplateId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#job_template_id IotJobTemplate#job_template_id}.

---

##### `AbortConfig`<sup>Optional</sup> <a name="AbortConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.abortConfig"></a>

```go
AbortConfig IotJobTemplateAbortConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfig">IotJobTemplateAbortConfig</a>

The criteria that determine when and how a job abort takes place.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#abort_config IotJobTemplate#abort_config}

---

##### `DestinationPackageVersions`<sup>Optional</sup> <a name="DestinationPackageVersions" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.destinationPackageVersions"></a>

```go
DestinationPackageVersions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#destination_package_versions IotJobTemplate#destination_package_versions}.

---

##### `Document`<sup>Optional</sup> <a name="Document" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.document"></a>

```go
Document *string
```

- *Type:* *string

The job document. Required if you don't specify a value for documentSource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#document IotJobTemplate#document}

---

##### `DocumentSource`<sup>Optional</sup> <a name="DocumentSource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.documentSource"></a>

```go
DocumentSource *string
```

- *Type:* *string

An S3 link to the job document to use in the template.

Required if you don't specify a value for document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#document_source IotJobTemplate#document_source}

---

##### `JobArn`<sup>Optional</sup> <a name="JobArn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.jobArn"></a>

```go
JobArn *string
```

- *Type:* *string

Optional for copying a JobTemplate from a pre-existing Job configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#job_arn IotJobTemplate#job_arn}

---

##### `JobExecutionsRetryConfig`<sup>Optional</sup> <a name="JobExecutionsRetryConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.jobExecutionsRetryConfig"></a>

```go
JobExecutionsRetryConfig IotJobTemplateJobExecutionsRetryConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig">IotJobTemplateJobExecutionsRetryConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#job_executions_retry_config IotJobTemplate#job_executions_retry_config}.

---

##### `JobExecutionsRolloutConfig`<sup>Optional</sup> <a name="JobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.jobExecutionsRolloutConfig"></a>

```go
JobExecutionsRolloutConfig IotJobTemplateJobExecutionsRolloutConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig">IotJobTemplateJobExecutionsRolloutConfig</a>

Allows you to create a staged rollout of a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#job_executions_rollout_config IotJobTemplate#job_executions_rollout_config}

---

##### `MaintenanceWindows`<sup>Optional</sup> <a name="MaintenanceWindows" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.maintenanceWindows"></a>

```go
MaintenanceWindows interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#maintenance_windows IotJobTemplate#maintenance_windows}.

---

##### `PresignedUrlConfig`<sup>Optional</sup> <a name="PresignedUrlConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.presignedUrlConfig"></a>

```go
PresignedUrlConfig IotJobTemplatePresignedUrlConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig">IotJobTemplatePresignedUrlConfig</a>

Configuration for pre-signed S3 URLs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#presigned_url_config IotJobTemplate#presigned_url_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Metadata that can be used to manage the JobTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#tags IotJobTemplate#tags}

---

##### `TimeoutConfig`<sup>Optional</sup> <a name="TimeoutConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateConfig.property.timeoutConfig"></a>

```go
TimeoutConfig IotJobTemplateTimeoutConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfig">IotJobTemplateTimeoutConfig</a>

Specifies the amount of time each device has to finish its execution of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#timeout_config IotJobTemplate#timeout_config}

---

### IotJobTemplateJobExecutionsRetryConfig <a name="IotJobTemplateJobExecutionsRetryConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotjobtemplate"

&iotjobtemplate.IotJobTemplateJobExecutionsRetryConfig {
	RetryCriteriaList: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig.property.retryCriteriaList">RetryCriteriaList</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#retry_criteria_list IotJobTemplate#retry_criteria_list}. |

---

##### `RetryCriteriaList`<sup>Optional</sup> <a name="RetryCriteriaList" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfig.property.retryCriteriaList"></a>

```go
RetryCriteriaList interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#retry_criteria_list IotJobTemplate#retry_criteria_list}.

---

### IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct <a name="IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotjobtemplate"

&iotjobtemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct {
	FailureType: *string,
	NumberOfRetries: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct.property.failureType">FailureType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#failure_type IotJobTemplate#failure_type}. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct.property.numberOfRetries">NumberOfRetries</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#number_of_retries IotJobTemplate#number_of_retries}. |

---

##### `FailureType`<sup>Optional</sup> <a name="FailureType" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct.property.failureType"></a>

```go
FailureType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#failure_type IotJobTemplate#failure_type}.

---

##### `NumberOfRetries`<sup>Optional</sup> <a name="NumberOfRetries" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStruct.property.numberOfRetries"></a>

```go
NumberOfRetries *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#number_of_retries IotJobTemplate#number_of_retries}.

---

### IotJobTemplateJobExecutionsRolloutConfig <a name="IotJobTemplateJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotjobtemplate"

&iotjobtemplate.IotJobTemplateJobExecutionsRolloutConfig {
	ExponentialRolloutRate: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate,
	MaximumPerMinute: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig.property.exponentialRolloutRate">ExponentialRolloutRate</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate</a></code> | The rate of increase for a job rollout. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig.property.maximumPerMinute">MaximumPerMinute</a></code> | <code>*f64</code> | The maximum number of things that will be notified of a pending job, per minute. |

---

##### `ExponentialRolloutRate`<sup>Optional</sup> <a name="ExponentialRolloutRate" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig.property.exponentialRolloutRate"></a>

```go
ExponentialRolloutRate IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate</a>

The rate of increase for a job rollout.

This parameter allows you to define an exponential rate for a job rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#exponential_rollout_rate IotJobTemplate#exponential_rollout_rate}

---

##### `MaximumPerMinute`<sup>Optional</sup> <a name="MaximumPerMinute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfig.property.maximumPerMinute"></a>

```go
MaximumPerMinute *f64
```

- *Type:* *f64

The maximum number of things that will be notified of a pending job, per minute.

This parameter allows you to create a staged rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#maximum_per_minute IotJobTemplate#maximum_per_minute}

---

### IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate <a name="IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotjobtemplate"

&iotjobtemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate {
	BaseRatePerMinute: *f64,
	IncrementFactor: *f64,
	RateIncreaseCriteria: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate.property.baseRatePerMinute">BaseRatePerMinute</a></code> | <code>*f64</code> | The minimum number of things that will be notified of a pending job, per minute at the start of job rollout. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate.property.incrementFactor">IncrementFactor</a></code> | <code>*f64</code> | The exponential factor to increase the rate of rollout for a job. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate.property.rateIncreaseCriteria">RateIncreaseCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria</a></code> | The criteria to initiate the increase in rate of rollout for a job. |

---

##### `BaseRatePerMinute`<sup>Optional</sup> <a name="BaseRatePerMinute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate.property.baseRatePerMinute"></a>

```go
BaseRatePerMinute *f64
```

- *Type:* *f64

The minimum number of things that will be notified of a pending job, per minute at the start of job rollout.

This parameter allows you to define the initial rate of rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#base_rate_per_minute IotJobTemplate#base_rate_per_minute}

---

##### `IncrementFactor`<sup>Optional</sup> <a name="IncrementFactor" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate.property.incrementFactor"></a>

```go
IncrementFactor *f64
```

- *Type:* *f64

The exponential factor to increase the rate of rollout for a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#increment_factor IotJobTemplate#increment_factor}

---

##### `RateIncreaseCriteria`<sup>Optional</sup> <a name="RateIncreaseCriteria" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate.property.rateIncreaseCriteria"></a>

```go
RateIncreaseCriteria IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria</a>

The criteria to initiate the increase in rate of rollout for a job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#rate_increase_criteria IotJobTemplate#rate_increase_criteria}

---

### IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria <a name="IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotjobtemplate"

&iotjobtemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria {
	NumberOfNotifiedThings: *f64,
	NumberOfSucceededThings: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria.property.numberOfNotifiedThings">NumberOfNotifiedThings</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#number_of_notified_things IotJobTemplate#number_of_notified_things}. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria.property.numberOfSucceededThings">NumberOfSucceededThings</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#number_of_succeeded_things IotJobTemplate#number_of_succeeded_things}. |

---

##### `NumberOfNotifiedThings`<sup>Optional</sup> <a name="NumberOfNotifiedThings" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria.property.numberOfNotifiedThings"></a>

```go
NumberOfNotifiedThings *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#number_of_notified_things IotJobTemplate#number_of_notified_things}.

---

##### `NumberOfSucceededThings`<sup>Optional</sup> <a name="NumberOfSucceededThings" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria.property.numberOfSucceededThings"></a>

```go
NumberOfSucceededThings *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#number_of_succeeded_things IotJobTemplate#number_of_succeeded_things}.

---

### IotJobTemplateMaintenanceWindows <a name="IotJobTemplateMaintenanceWindows" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotjobtemplate"

&iotjobtemplate.IotJobTemplateMaintenanceWindows {
	DurationInMinutes: *f64,
	StartTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows.property.durationInMinutes">DurationInMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#duration_in_minutes IotJobTemplate#duration_in_minutes}. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows.property.startTime">StartTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#start_time IotJobTemplate#start_time}. |

---

##### `DurationInMinutes`<sup>Optional</sup> <a name="DurationInMinutes" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows.property.durationInMinutes"></a>

```go
DurationInMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#duration_in_minutes IotJobTemplate#duration_in_minutes}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindows.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#start_time IotJobTemplate#start_time}.

---

### IotJobTemplatePresignedUrlConfig <a name="IotJobTemplatePresignedUrlConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotjobtemplate"

&iotjobtemplate.IotJobTemplatePresignedUrlConfig {
	ExpiresInSec: *f64,
	RoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig.property.expiresInSec">ExpiresInSec</a></code> | <code>*f64</code> | How number (in seconds) pre-signed URLs are valid. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | The ARN of an IAM role that grants grants permission to download files from the S3 bucket where the job data/updates are stored. |

---

##### `ExpiresInSec`<sup>Optional</sup> <a name="ExpiresInSec" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig.property.expiresInSec"></a>

```go
ExpiresInSec *f64
```

- *Type:* *f64

How number (in seconds) pre-signed URLs are valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#expires_in_sec IotJobTemplate#expires_in_sec}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The ARN of an IAM role that grants grants permission to download files from the S3 bucket where the job data/updates are stored.

The role must also grant permission for IoT to download the files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#role_arn IotJobTemplate#role_arn}

---

### IotJobTemplateTags <a name="IotJobTemplateTags" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotjobtemplate"

&iotjobtemplate.IotJobTemplateTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags.property.key">Key</a></code> | <code>*string</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags.property.value">Value</a></code> | <code>*string</code> | The tag's value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#key IotJobTemplate#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#value IotJobTemplate#value}

---

### IotJobTemplateTimeoutConfig <a name="IotJobTemplateTimeoutConfig" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotjobtemplate"

&iotjobtemplate.IotJobTemplateTimeoutConfig {
	InProgressTimeoutInMinutes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfig.property.inProgressTimeoutInMinutes">InProgressTimeoutInMinutes</a></code> | <code>*f64</code> | Specifies the amount of time, in minutes, this device has to finish execution of this job. |

---

##### `InProgressTimeoutInMinutes`<sup>Optional</sup> <a name="InProgressTimeoutInMinutes" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfig.property.inProgressTimeoutInMinutes"></a>

```go
InProgressTimeoutInMinutes *f64
```

- *Type:* *f64

Specifies the amount of time, in minutes, this device has to finish execution of this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_job_template#in_progress_timeout_in_minutes IotJobTemplate#in_progress_timeout_in_minutes}

---

## Classes <a name="Classes" id="Classes"></a>

### IotJobTemplateAbortConfigCriteriaListStructList <a name="IotJobTemplateAbortConfigCriteriaListStructList" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotjobtemplate"

iotjobtemplate.NewIotJobTemplateAbortConfigCriteriaListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotJobTemplateAbortConfigCriteriaListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.get"></a>

```go
func Get(index *f64) IotJobTemplateAbortConfigCriteriaListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotJobTemplateAbortConfigCriteriaListStructOutputReference <a name="IotJobTemplateAbortConfigCriteriaListStructOutputReference" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotjobtemplate"

iotjobtemplate.NewIotJobTemplateAbortConfigCriteriaListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotJobTemplateAbortConfigCriteriaListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.resetFailureType">ResetFailureType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.resetMinNumberOfExecutedThings">ResetMinNumberOfExecutedThings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.resetThresholdPercentage">ResetThresholdPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetFailureType` <a name="ResetFailureType" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.resetFailureType"></a>

```go
func ResetFailureType()
```

##### `ResetMinNumberOfExecutedThings` <a name="ResetMinNumberOfExecutedThings" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.resetMinNumberOfExecutedThings"></a>

```go
func ResetMinNumberOfExecutedThings()
```

##### `ResetThresholdPercentage` <a name="ResetThresholdPercentage" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.resetThresholdPercentage"></a>

```go
func ResetThresholdPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.failureTypeInput">FailureTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThingsInput">MinNumberOfExecutedThingsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.thresholdPercentageInput">ThresholdPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.failureType">FailureType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThings">MinNumberOfExecutedThings</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.thresholdPercentage">ThresholdPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `FailureTypeInput`<sup>Optional</sup> <a name="FailureTypeInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.failureTypeInput"></a>

```go
func FailureTypeInput() *string
```

- *Type:* *string

---

##### `MinNumberOfExecutedThingsInput`<sup>Optional</sup> <a name="MinNumberOfExecutedThingsInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThingsInput"></a>

```go
func MinNumberOfExecutedThingsInput() *f64
```

- *Type:* *f64

---

##### `ThresholdPercentageInput`<sup>Optional</sup> <a name="ThresholdPercentageInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.thresholdPercentageInput"></a>

```go
func ThresholdPercentageInput() *f64
```

- *Type:* *f64

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `FailureType`<sup>Required</sup> <a name="FailureType" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.failureType"></a>

```go
func FailureType() *string
```

- *Type:* *string

---

##### `MinNumberOfExecutedThings`<sup>Required</sup> <a name="MinNumberOfExecutedThings" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.minNumberOfExecutedThings"></a>

```go
func MinNumberOfExecutedThings() *f64
```

- *Type:* *f64

---

##### `ThresholdPercentage`<sup>Required</sup> <a name="ThresholdPercentage" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.thresholdPercentage"></a>

```go
func ThresholdPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotJobTemplateAbortConfigOutputReference <a name="IotJobTemplateAbortConfigOutputReference" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotjobtemplate"

iotjobtemplate.NewIotJobTemplateAbortConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotJobTemplateAbortConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.putCriteriaList">PutCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.resetCriteriaList">ResetCriteriaList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCriteriaList` <a name="PutCriteriaList" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.putCriteriaList"></a>

```go
func PutCriteriaList(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.putCriteriaList.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCriteriaList` <a name="ResetCriteriaList" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.resetCriteriaList"></a>

```go
func ResetCriteriaList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.property.criteriaList">CriteriaList</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList">IotJobTemplateAbortConfigCriteriaListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.property.criteriaListInput">CriteriaListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CriteriaList`<sup>Required</sup> <a name="CriteriaList" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.property.criteriaList"></a>

```go
func CriteriaList() IotJobTemplateAbortConfigCriteriaListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigCriteriaListStructList">IotJobTemplateAbortConfigCriteriaListStructList</a>

---

##### `CriteriaListInput`<sup>Optional</sup> <a name="CriteriaListInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.property.criteriaListInput"></a>

```go
func CriteriaListInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateAbortConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotJobTemplateJobExecutionsRetryConfigOutputReference <a name="IotJobTemplateJobExecutionsRetryConfigOutputReference" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotjobtemplate"

iotjobtemplate.NewIotJobTemplateJobExecutionsRetryConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotJobTemplateJobExecutionsRetryConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.putRetryCriteriaList">PutRetryCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.resetRetryCriteriaList">ResetRetryCriteriaList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRetryCriteriaList` <a name="PutRetryCriteriaList" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.putRetryCriteriaList"></a>

```go
func PutRetryCriteriaList(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.putRetryCriteriaList.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRetryCriteriaList` <a name="ResetRetryCriteriaList" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.resetRetryCriteriaList"></a>

```go
func ResetRetryCriteriaList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.property.retryCriteriaList">RetryCriteriaList</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList">IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.property.retryCriteriaListInput">RetryCriteriaListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RetryCriteriaList`<sup>Required</sup> <a name="RetryCriteriaList" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.property.retryCriteriaList"></a>

```go
func RetryCriteriaList() IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList">IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList</a>

---

##### `RetryCriteriaListInput`<sup>Optional</sup> <a name="RetryCriteriaListInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.property.retryCriteriaListInput"></a>

```go
func RetryCriteriaListInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList <a name="IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotjobtemplate"

iotjobtemplate.NewIotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.get"></a>

```go
func Get(index *f64) IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference <a name="IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotjobtemplate"

iotjobtemplate.NewIotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.resetFailureType">ResetFailureType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.resetNumberOfRetries">ResetNumberOfRetries</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFailureType` <a name="ResetFailureType" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.resetFailureType"></a>

```go
func ResetFailureType()
```

##### `ResetNumberOfRetries` <a name="ResetNumberOfRetries" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.resetNumberOfRetries"></a>

```go
func ResetNumberOfRetries()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.failureTypeInput">FailureTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.numberOfRetriesInput">NumberOfRetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.failureType">FailureType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.numberOfRetries">NumberOfRetries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FailureTypeInput`<sup>Optional</sup> <a name="FailureTypeInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.failureTypeInput"></a>

```go
func FailureTypeInput() *string
```

- *Type:* *string

---

##### `NumberOfRetriesInput`<sup>Optional</sup> <a name="NumberOfRetriesInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.numberOfRetriesInput"></a>

```go
func NumberOfRetriesInput() *f64
```

- *Type:* *f64

---

##### `FailureType`<sup>Required</sup> <a name="FailureType" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.failureType"></a>

```go
func FailureType() *string
```

- *Type:* *string

---

##### `NumberOfRetries`<sup>Required</sup> <a name="NumberOfRetries" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.numberOfRetries"></a>

```go
func NumberOfRetries() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRetryConfigRetryCriteriaListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference <a name="IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotjobtemplate"

iotjobtemplate.NewIotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.putRateIncreaseCriteria">PutRateIncreaseCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.resetBaseRatePerMinute">ResetBaseRatePerMinute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.resetIncrementFactor">ResetIncrementFactor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.resetRateIncreaseCriteria">ResetRateIncreaseCriteria</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRateIncreaseCriteria` <a name="PutRateIncreaseCriteria" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.putRateIncreaseCriteria"></a>

```go
func PutRateIncreaseCriteria(value IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.putRateIncreaseCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteria</a>

---

##### `ResetBaseRatePerMinute` <a name="ResetBaseRatePerMinute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.resetBaseRatePerMinute"></a>

```go
func ResetBaseRatePerMinute()
```

##### `ResetIncrementFactor` <a name="ResetIncrementFactor" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.resetIncrementFactor"></a>

```go
func ResetIncrementFactor()
```

##### `ResetRateIncreaseCriteria` <a name="ResetRateIncreaseCriteria" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.resetRateIncreaseCriteria"></a>

```go
func ResetRateIncreaseCriteria()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.rateIncreaseCriteria">RateIncreaseCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.baseRatePerMinuteInput">BaseRatePerMinuteInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.incrementFactorInput">IncrementFactorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.rateIncreaseCriteriaInput">RateIncreaseCriteriaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.baseRatePerMinute">BaseRatePerMinute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.incrementFactor">IncrementFactor</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RateIncreaseCriteria`<sup>Required</sup> <a name="RateIncreaseCriteria" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.rateIncreaseCriteria"></a>

```go
func RateIncreaseCriteria() IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference</a>

---

##### `BaseRatePerMinuteInput`<sup>Optional</sup> <a name="BaseRatePerMinuteInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.baseRatePerMinuteInput"></a>

```go
func BaseRatePerMinuteInput() *f64
```

- *Type:* *f64

---

##### `IncrementFactorInput`<sup>Optional</sup> <a name="IncrementFactorInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.incrementFactorInput"></a>

```go
func IncrementFactorInput() *f64
```

- *Type:* *f64

---

##### `RateIncreaseCriteriaInput`<sup>Optional</sup> <a name="RateIncreaseCriteriaInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.rateIncreaseCriteriaInput"></a>

```go
func RateIncreaseCriteriaInput() interface{}
```

- *Type:* interface{}

---

##### `BaseRatePerMinute`<sup>Required</sup> <a name="BaseRatePerMinute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.baseRatePerMinute"></a>

```go
func BaseRatePerMinute() *f64
```

- *Type:* *f64

---

##### `IncrementFactor`<sup>Required</sup> <a name="IncrementFactor" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.incrementFactor"></a>

```go
func IncrementFactor() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference <a name="IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotjobtemplate"

iotjobtemplate.NewIotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.resetNumberOfNotifiedThings">ResetNumberOfNotifiedThings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.resetNumberOfSucceededThings">ResetNumberOfSucceededThings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNumberOfNotifiedThings` <a name="ResetNumberOfNotifiedThings" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.resetNumberOfNotifiedThings"></a>

```go
func ResetNumberOfNotifiedThings()
```

##### `ResetNumberOfSucceededThings` <a name="ResetNumberOfSucceededThings" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.resetNumberOfSucceededThings"></a>

```go
func ResetNumberOfSucceededThings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThingsInput">NumberOfNotifiedThingsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThingsInput">NumberOfSucceededThingsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThings">NumberOfNotifiedThings</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThings">NumberOfSucceededThings</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NumberOfNotifiedThingsInput`<sup>Optional</sup> <a name="NumberOfNotifiedThingsInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThingsInput"></a>

```go
func NumberOfNotifiedThingsInput() *f64
```

- *Type:* *f64

---

##### `NumberOfSucceededThingsInput`<sup>Optional</sup> <a name="NumberOfSucceededThingsInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThingsInput"></a>

```go
func NumberOfSucceededThingsInput() *f64
```

- *Type:* *f64

---

##### `NumberOfNotifiedThings`<sup>Required</sup> <a name="NumberOfNotifiedThings" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThings"></a>

```go
func NumberOfNotifiedThings() *f64
```

- *Type:* *f64

---

##### `NumberOfSucceededThings`<sup>Required</sup> <a name="NumberOfSucceededThings" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThings"></a>

```go
func NumberOfSucceededThings() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateRateIncreaseCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotJobTemplateJobExecutionsRolloutConfigOutputReference <a name="IotJobTemplateJobExecutionsRolloutConfigOutputReference" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotjobtemplate"

iotjobtemplate.NewIotJobTemplateJobExecutionsRolloutConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotJobTemplateJobExecutionsRolloutConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.putExponentialRolloutRate">PutExponentialRolloutRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.resetExponentialRolloutRate">ResetExponentialRolloutRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.resetMaximumPerMinute">ResetMaximumPerMinute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExponentialRolloutRate` <a name="PutExponentialRolloutRate" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.putExponentialRolloutRate"></a>

```go
func PutExponentialRolloutRate(value IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.putExponentialRolloutRate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRate</a>

---

##### `ResetExponentialRolloutRate` <a name="ResetExponentialRolloutRate" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.resetExponentialRolloutRate"></a>

```go
func ResetExponentialRolloutRate()
```

##### `ResetMaximumPerMinute` <a name="ResetMaximumPerMinute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.resetMaximumPerMinute"></a>

```go
func ResetMaximumPerMinute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.exponentialRolloutRate">ExponentialRolloutRate</a></code> | <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.exponentialRolloutRateInput">ExponentialRolloutRateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.maximumPerMinuteInput">MaximumPerMinuteInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.maximumPerMinute">MaximumPerMinute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExponentialRolloutRate`<sup>Required</sup> <a name="ExponentialRolloutRate" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.exponentialRolloutRate"></a>

```go
func ExponentialRolloutRate() IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference">IotJobTemplateJobExecutionsRolloutConfigExponentialRolloutRateOutputReference</a>

---

##### `ExponentialRolloutRateInput`<sup>Optional</sup> <a name="ExponentialRolloutRateInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.exponentialRolloutRateInput"></a>

```go
func ExponentialRolloutRateInput() interface{}
```

- *Type:* interface{}

---

##### `MaximumPerMinuteInput`<sup>Optional</sup> <a name="MaximumPerMinuteInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.maximumPerMinuteInput"></a>

```go
func MaximumPerMinuteInput() *f64
```

- *Type:* *f64

---

##### `MaximumPerMinute`<sup>Required</sup> <a name="MaximumPerMinute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.maximumPerMinute"></a>

```go
func MaximumPerMinute() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateJobExecutionsRolloutConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotJobTemplateMaintenanceWindowsList <a name="IotJobTemplateMaintenanceWindowsList" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotjobtemplate"

iotjobtemplate.NewIotJobTemplateMaintenanceWindowsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotJobTemplateMaintenanceWindowsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.get"></a>

```go
func Get(index *f64) IotJobTemplateMaintenanceWindowsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotJobTemplateMaintenanceWindowsOutputReference <a name="IotJobTemplateMaintenanceWindowsOutputReference" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotjobtemplate"

iotjobtemplate.NewIotJobTemplateMaintenanceWindowsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotJobTemplateMaintenanceWindowsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.resetDurationInMinutes">ResetDurationInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDurationInMinutes` <a name="ResetDurationInMinutes" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.resetDurationInMinutes"></a>

```go
func ResetDurationInMinutes()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.resetStartTime"></a>

```go
func ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.durationInMinutesInput">DurationInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.durationInMinutes">DurationInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurationInMinutesInput`<sup>Optional</sup> <a name="DurationInMinutesInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.durationInMinutesInput"></a>

```go
func DurationInMinutesInput() *f64
```

- *Type:* *f64

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `DurationInMinutes`<sup>Required</sup> <a name="DurationInMinutes" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.durationInMinutes"></a>

```go
func DurationInMinutes() *f64
```

- *Type:* *f64

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateMaintenanceWindowsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotJobTemplatePresignedUrlConfigOutputReference <a name="IotJobTemplatePresignedUrlConfigOutputReference" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotjobtemplate"

iotjobtemplate.NewIotJobTemplatePresignedUrlConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotJobTemplatePresignedUrlConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.resetExpiresInSec">ResetExpiresInSec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpiresInSec` <a name="ResetExpiresInSec" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.resetExpiresInSec"></a>

```go
func ResetExpiresInSec()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.expiresInSecInput">ExpiresInSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.expiresInSec">ExpiresInSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpiresInSecInput`<sup>Optional</sup> <a name="ExpiresInSecInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.expiresInSecInput"></a>

```go
func ExpiresInSecInput() *f64
```

- *Type:* *f64

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `ExpiresInSec`<sup>Required</sup> <a name="ExpiresInSec" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.expiresInSec"></a>

```go
func ExpiresInSec() *f64
```

- *Type:* *f64

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplatePresignedUrlConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotJobTemplateTagsList <a name="IotJobTemplateTagsList" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotjobtemplate"

iotjobtemplate.NewIotJobTemplateTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotJobTemplateTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.get"></a>

```go
func Get(index *f64) IotJobTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotJobTemplateTagsOutputReference <a name="IotJobTemplateTagsOutputReference" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotjobtemplate"

iotjobtemplate.NewIotJobTemplateTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotJobTemplateTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotJobTemplateTimeoutConfigOutputReference <a name="IotJobTemplateTimeoutConfigOutputReference" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotjobtemplate"

iotjobtemplate.NewIotJobTemplateTimeoutConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotJobTemplateTimeoutConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.resetInProgressTimeoutInMinutes">ResetInProgressTimeoutInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInProgressTimeoutInMinutes` <a name="ResetInProgressTimeoutInMinutes" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.resetInProgressTimeoutInMinutes"></a>

```go
func ResetInProgressTimeoutInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.property.inProgressTimeoutInMinutesInput">InProgressTimeoutInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.property.inProgressTimeoutInMinutes">InProgressTimeoutInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InProgressTimeoutInMinutesInput`<sup>Optional</sup> <a name="InProgressTimeoutInMinutesInput" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.property.inProgressTimeoutInMinutesInput"></a>

```go
func InProgressTimeoutInMinutesInput() *f64
```

- *Type:* *f64

---

##### `InProgressTimeoutInMinutes`<sup>Required</sup> <a name="InProgressTimeoutInMinutes" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.property.inProgressTimeoutInMinutes"></a>

```go
func InProgressTimeoutInMinutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotJobTemplate.IotJobTemplateTimeoutConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



