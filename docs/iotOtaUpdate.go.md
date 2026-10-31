# `iotOtaUpdate` Submodule <a name="`iotOtaUpdate` Submodule" id="@cdktn/provider-awscc.iotOtaUpdate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotOtaUpdate <a name="IotOtaUpdate" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update awscc_iot_ota_update}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

iototaupdate.NewIotOtaUpdate(scope Construct, id *string, config IotOtaUpdateConfig) IotOtaUpdate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig">IotOtaUpdateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig">IotOtaUpdateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobAbortConfig">PutAwsJobAbortConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobExecutionsRolloutConfig">PutAwsJobExecutionsRolloutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobPresignedUrlConfig">PutAwsJobPresignedUrlConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobTimeoutConfig">PutAwsJobTimeoutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putFiles">PutFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetAdditionalParameters">ResetAdditionalParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetAwsJobAbortConfig">ResetAwsJobAbortConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetAwsJobExecutionsRolloutConfig">ResetAwsJobExecutionsRolloutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetAwsJobPresignedUrlConfig">ResetAwsJobPresignedUrlConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetAwsJobTimeoutConfig">ResetAwsJobTimeoutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetProtocols">ResetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetTargetSelection">ResetTargetSelection</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAwsJobAbortConfig` <a name="PutAwsJobAbortConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobAbortConfig"></a>

```go
func PutAwsJobAbortConfig(value IotOtaUpdateAwsJobAbortConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobAbortConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig">IotOtaUpdateAwsJobAbortConfig</a>

---

##### `PutAwsJobExecutionsRolloutConfig` <a name="PutAwsJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobExecutionsRolloutConfig"></a>

```go
func PutAwsJobExecutionsRolloutConfig(value IotOtaUpdateAwsJobExecutionsRolloutConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobExecutionsRolloutConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig">IotOtaUpdateAwsJobExecutionsRolloutConfig</a>

---

##### `PutAwsJobPresignedUrlConfig` <a name="PutAwsJobPresignedUrlConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobPresignedUrlConfig"></a>

```go
func PutAwsJobPresignedUrlConfig(value IotOtaUpdateAwsJobPresignedUrlConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobPresignedUrlConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig">IotOtaUpdateAwsJobPresignedUrlConfig</a>

---

##### `PutAwsJobTimeoutConfig` <a name="PutAwsJobTimeoutConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobTimeoutConfig"></a>

```go
func PutAwsJobTimeoutConfig(value IotOtaUpdateAwsJobTimeoutConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putAwsJobTimeoutConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig">IotOtaUpdateAwsJobTimeoutConfig</a>

---

##### `PutFiles` <a name="PutFiles" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putFiles"></a>

```go
func PutFiles(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putFiles.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAdditionalParameters` <a name="ResetAdditionalParameters" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetAdditionalParameters"></a>

```go
func ResetAdditionalParameters()
```

##### `ResetAwsJobAbortConfig` <a name="ResetAwsJobAbortConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetAwsJobAbortConfig"></a>

```go
func ResetAwsJobAbortConfig()
```

##### `ResetAwsJobExecutionsRolloutConfig` <a name="ResetAwsJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetAwsJobExecutionsRolloutConfig"></a>

```go
func ResetAwsJobExecutionsRolloutConfig()
```

##### `ResetAwsJobPresignedUrlConfig` <a name="ResetAwsJobPresignedUrlConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetAwsJobPresignedUrlConfig"></a>

```go
func ResetAwsJobPresignedUrlConfig()
```

##### `ResetAwsJobTimeoutConfig` <a name="ResetAwsJobTimeoutConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetAwsJobTimeoutConfig"></a>

```go
func ResetAwsJobTimeoutConfig()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetProtocols` <a name="ResetProtocols" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetProtocols"></a>

```go
func ResetProtocols()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTargetSelection` <a name="ResetTargetSelection" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.resetTargetSelection"></a>

```go
func ResetTargetSelection()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IotOtaUpdate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

iototaupdate.IotOtaUpdate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

iototaupdate.IotOtaUpdate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

iototaupdate.IotOtaUpdate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

iototaupdate.IotOtaUpdate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a IotOtaUpdate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IotOtaUpdate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IotOtaUpdate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the IotOtaUpdate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobAbortConfig">AwsJobAbortConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference">IotOtaUpdateAwsJobAbortConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobExecutionsRolloutConfig">AwsJobExecutionsRolloutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference">IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobPresignedUrlConfig">AwsJobPresignedUrlConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference">IotOtaUpdateAwsJobPresignedUrlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobTimeoutConfig">AwsJobTimeoutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference">IotOtaUpdateAwsJobTimeoutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.creationDate">CreationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.files">Files</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList">IotOtaUpdateFilesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.lastModifiedDate">LastModifiedDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.otaUpdateArn">OtaUpdateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.otaUpdateStatus">OtaUpdateStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList">IotOtaUpdateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.additionalParametersInput">AdditionalParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobAbortConfigInput">AwsJobAbortConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobExecutionsRolloutConfigInput">AwsJobExecutionsRolloutConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobPresignedUrlConfigInput">AwsJobPresignedUrlConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobTimeoutConfigInput">AwsJobTimeoutConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.filesInput">FilesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.otaUpdateIdInput">OtaUpdateIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.protocolsInput">ProtocolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.targetSelectionInput">TargetSelectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.targetsInput">TargetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.additionalParameters">AdditionalParameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.otaUpdateId">OtaUpdateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.protocols">Protocols</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.targets">Targets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.targetSelection">TargetSelection</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AwsJobAbortConfig`<sup>Required</sup> <a name="AwsJobAbortConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobAbortConfig"></a>

```go
func AwsJobAbortConfig() IotOtaUpdateAwsJobAbortConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference">IotOtaUpdateAwsJobAbortConfigOutputReference</a>

---

##### `AwsJobExecutionsRolloutConfig`<sup>Required</sup> <a name="AwsJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobExecutionsRolloutConfig"></a>

```go
func AwsJobExecutionsRolloutConfig() IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference">IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference</a>

---

##### `AwsJobPresignedUrlConfig`<sup>Required</sup> <a name="AwsJobPresignedUrlConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobPresignedUrlConfig"></a>

```go
func AwsJobPresignedUrlConfig() IotOtaUpdateAwsJobPresignedUrlConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference">IotOtaUpdateAwsJobPresignedUrlConfigOutputReference</a>

---

##### `AwsJobTimeoutConfig`<sup>Required</sup> <a name="AwsJobTimeoutConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobTimeoutConfig"></a>

```go
func AwsJobTimeoutConfig() IotOtaUpdateAwsJobTimeoutConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference">IotOtaUpdateAwsJobTimeoutConfigOutputReference</a>

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.creationDate"></a>

```go
func CreationDate() *string
```

- *Type:* *string

---

##### `Files`<sup>Required</sup> <a name="Files" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.files"></a>

```go
func Files() IotOtaUpdateFilesList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList">IotOtaUpdateFilesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastModifiedDate`<sup>Required</sup> <a name="LastModifiedDate" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.lastModifiedDate"></a>

```go
func LastModifiedDate() *string
```

- *Type:* *string

---

##### `OtaUpdateArn`<sup>Required</sup> <a name="OtaUpdateArn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.otaUpdateArn"></a>

```go
func OtaUpdateArn() *string
```

- *Type:* *string

---

##### `OtaUpdateStatus`<sup>Required</sup> <a name="OtaUpdateStatus" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.otaUpdateStatus"></a>

```go
func OtaUpdateStatus() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.tags"></a>

```go
func Tags() IotOtaUpdateTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList">IotOtaUpdateTagsList</a>

---

##### `AdditionalParametersInput`<sup>Optional</sup> <a name="AdditionalParametersInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.additionalParametersInput"></a>

```go
func AdditionalParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AwsJobAbortConfigInput`<sup>Optional</sup> <a name="AwsJobAbortConfigInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobAbortConfigInput"></a>

```go
func AwsJobAbortConfigInput() interface{}
```

- *Type:* interface{}

---

##### `AwsJobExecutionsRolloutConfigInput`<sup>Optional</sup> <a name="AwsJobExecutionsRolloutConfigInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobExecutionsRolloutConfigInput"></a>

```go
func AwsJobExecutionsRolloutConfigInput() interface{}
```

- *Type:* interface{}

---

##### `AwsJobPresignedUrlConfigInput`<sup>Optional</sup> <a name="AwsJobPresignedUrlConfigInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobPresignedUrlConfigInput"></a>

```go
func AwsJobPresignedUrlConfigInput() interface{}
```

- *Type:* interface{}

---

##### `AwsJobTimeoutConfigInput`<sup>Optional</sup> <a name="AwsJobTimeoutConfigInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.awsJobTimeoutConfigInput"></a>

```go
func AwsJobTimeoutConfigInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FilesInput`<sup>Optional</sup> <a name="FilesInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.filesInput"></a>

```go
func FilesInput() interface{}
```

- *Type:* interface{}

---

##### `OtaUpdateIdInput`<sup>Optional</sup> <a name="OtaUpdateIdInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.otaUpdateIdInput"></a>

```go
func OtaUpdateIdInput() *string
```

- *Type:* *string

---

##### `ProtocolsInput`<sup>Optional</sup> <a name="ProtocolsInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.protocolsInput"></a>

```go
func ProtocolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TargetSelectionInput`<sup>Optional</sup> <a name="TargetSelectionInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.targetSelectionInput"></a>

```go
func TargetSelectionInput() *string
```

- *Type:* *string

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.targetsInput"></a>

```go
func TargetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AdditionalParameters`<sup>Required</sup> <a name="AdditionalParameters" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.additionalParameters"></a>

```go
func AdditionalParameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `OtaUpdateId`<sup>Required</sup> <a name="OtaUpdateId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.otaUpdateId"></a>

```go
func OtaUpdateId() *string
```

- *Type:* *string

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.protocols"></a>

```go
func Protocols() *[]*string
```

- *Type:* *[]*string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.targets"></a>

```go
func Targets() *[]*string
```

- *Type:* *[]*string

---

##### `TargetSelection`<sup>Required</sup> <a name="TargetSelection" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.targetSelection"></a>

```go
func TargetSelection() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IotOtaUpdateAwsJobAbortConfig <a name="IotOtaUpdateAwsJobAbortConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

&iototaupdate.IotOtaUpdateAwsJobAbortConfig {
	AbortCriteriaList: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig.property.abortCriteriaList">AbortCriteriaList</a></code> | <code>interface{}</code> | The list of criteria that determine when and how to abort the job. |

---

##### `AbortCriteriaList`<sup>Optional</sup> <a name="AbortCriteriaList" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig.property.abortCriteriaList"></a>

```go
AbortCriteriaList interface{}
```

- *Type:* interface{}

The list of criteria that determine when and how to abort the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#abort_criteria_list IotOtaUpdate#abort_criteria_list}

---

### IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct <a name="IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

&iototaupdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct {
	Action: *string,
	FailureType: *string,
	MinNumberOfExecutedThings: *f64,
	ThresholdPercentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct.property.action">Action</a></code> | <code>*string</code> | The type of job action to take to initiate the job abort. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct.property.failureType">FailureType</a></code> | <code>*string</code> | The type of job execution failures that can initiate a job abort. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct.property.minNumberOfExecutedThings">MinNumberOfExecutedThings</a></code> | <code>*f64</code> | The minimum number of things which must receive job execution notifications before the job can be aborted. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct.property.thresholdPercentage">ThresholdPercentage</a></code> | <code>*f64</code> | The minimum percentage of job execution failures that must occur to initiate the job abort. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct.property.action"></a>

```go
Action *string
```

- *Type:* *string

The type of job action to take to initiate the job abort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#action IotOtaUpdate#action}

---

##### `FailureType`<sup>Optional</sup> <a name="FailureType" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct.property.failureType"></a>

```go
FailureType *string
```

- *Type:* *string

The type of job execution failures that can initiate a job abort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#failure_type IotOtaUpdate#failure_type}

---

##### `MinNumberOfExecutedThings`<sup>Optional</sup> <a name="MinNumberOfExecutedThings" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct.property.minNumberOfExecutedThings"></a>

```go
MinNumberOfExecutedThings *f64
```

- *Type:* *f64

The minimum number of things which must receive job execution notifications before the job can be aborted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#min_number_of_executed_things IotOtaUpdate#min_number_of_executed_things}

---

##### `ThresholdPercentage`<sup>Optional</sup> <a name="ThresholdPercentage" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStruct.property.thresholdPercentage"></a>

```go
ThresholdPercentage *f64
```

- *Type:* *f64

The minimum percentage of job execution failures that must occur to initiate the job abort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#threshold_percentage IotOtaUpdate#threshold_percentage}

---

### IotOtaUpdateAwsJobExecutionsRolloutConfig <a name="IotOtaUpdateAwsJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

&iototaupdate.IotOtaUpdateAwsJobExecutionsRolloutConfig {
	ExponentialRate: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate,
	MaximumPerMinute: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig.property.exponentialRate">ExponentialRate</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#exponential_rate IotOtaUpdate#exponential_rate}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig.property.maximumPerMinute">MaximumPerMinute</a></code> | <code>*f64</code> | The maximum number of OTA update job executions started per minute. |

---

##### `ExponentialRate`<sup>Optional</sup> <a name="ExponentialRate" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig.property.exponentialRate"></a>

```go
ExponentialRate IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#exponential_rate IotOtaUpdate#exponential_rate}.

---

##### `MaximumPerMinute`<sup>Optional</sup> <a name="MaximumPerMinute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig.property.maximumPerMinute"></a>

```go
MaximumPerMinute *f64
```

- *Type:* *f64

The maximum number of OTA update job executions started per minute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#maximum_per_minute IotOtaUpdate#maximum_per_minute}

---

### IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate <a name="IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

&iototaupdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate {
	BaseRatePerMinute: *f64,
	IncrementFactor: *f64,
	RateIncreaseCriteria: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate.property.baseRatePerMinute">BaseRatePerMinute</a></code> | <code>*f64</code> | The minimum number of things that will be notified of a pending job, per minute, at the start of the job rollout. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate.property.incrementFactor">IncrementFactor</a></code> | <code>*f64</code> | The rate of increase for a job rollout. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate.property.rateIncreaseCriteria">RateIncreaseCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#rate_increase_criteria IotOtaUpdate#rate_increase_criteria}. |

---

##### `BaseRatePerMinute`<sup>Optional</sup> <a name="BaseRatePerMinute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate.property.baseRatePerMinute"></a>

```go
BaseRatePerMinute *f64
```

- *Type:* *f64

The minimum number of things that will be notified of a pending job, per minute, at the start of the job rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#base_rate_per_minute IotOtaUpdate#base_rate_per_minute}

---

##### `IncrementFactor`<sup>Optional</sup> <a name="IncrementFactor" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate.property.incrementFactor"></a>

```go
IncrementFactor *f64
```

- *Type:* *f64

The rate of increase for a job rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#increment_factor IotOtaUpdate#increment_factor}

---

##### `RateIncreaseCriteria`<sup>Optional</sup> <a name="RateIncreaseCriteria" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate.property.rateIncreaseCriteria"></a>

```go
RateIncreaseCriteria IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#rate_increase_criteria IotOtaUpdate#rate_increase_criteria}.

---

### IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria <a name="IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

&iototaupdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria {
	NumberOfNotifiedThings: *f64,
	NumberOfSucceededThings: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.property.numberOfNotifiedThings">NumberOfNotifiedThings</a></code> | <code>*f64</code> | When this number of things have been notified, it will initiate an increase in the rollout rate. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.property.numberOfSucceededThings">NumberOfSucceededThings</a></code> | <code>*f64</code> | When this number of things have succeeded in their job execution, it will initiate an increase in the rollout rate. |

---

##### `NumberOfNotifiedThings`<sup>Optional</sup> <a name="NumberOfNotifiedThings" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.property.numberOfNotifiedThings"></a>

```go
NumberOfNotifiedThings *f64
```

- *Type:* *f64

When this number of things have been notified, it will initiate an increase in the rollout rate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#number_of_notified_things IotOtaUpdate#number_of_notified_things}

---

##### `NumberOfSucceededThings`<sup>Optional</sup> <a name="NumberOfSucceededThings" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria.property.numberOfSucceededThings"></a>

```go
NumberOfSucceededThings *f64
```

- *Type:* *f64

When this number of things have succeeded in their job execution, it will initiate an increase in the rollout rate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#number_of_succeeded_things IotOtaUpdate#number_of_succeeded_things}

---

### IotOtaUpdateAwsJobPresignedUrlConfig <a name="IotOtaUpdateAwsJobPresignedUrlConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

&iototaupdate.IotOtaUpdateAwsJobPresignedUrlConfig {
	ExpiresInSec: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig.property.expiresInSec">ExpiresInSec</a></code> | <code>*f64</code> | How long (in seconds) pre-signed URLs are valid. |

---

##### `ExpiresInSec`<sup>Optional</sup> <a name="ExpiresInSec" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig.property.expiresInSec"></a>

```go
ExpiresInSec *f64
```

- *Type:* *f64

How long (in seconds) pre-signed URLs are valid.

Valid values are 60 - 3600, the default value is 1800 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#expires_in_sec IotOtaUpdate#expires_in_sec}

---

### IotOtaUpdateAwsJobTimeoutConfig <a name="IotOtaUpdateAwsJobTimeoutConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

&iototaupdate.IotOtaUpdateAwsJobTimeoutConfig {
	InProgressTimeoutInMinutes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig.property.inProgressTimeoutInMinutes">InProgressTimeoutInMinutes</a></code> | <code>*f64</code> | Specifies the amount of time, in minutes, this device has to finish execution of this job. |

---

##### `InProgressTimeoutInMinutes`<sup>Optional</sup> <a name="InProgressTimeoutInMinutes" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig.property.inProgressTimeoutInMinutes"></a>

```go
InProgressTimeoutInMinutes *f64
```

- *Type:* *f64

Specifies the amount of time, in minutes, this device has to finish execution of this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#in_progress_timeout_in_minutes IotOtaUpdate#in_progress_timeout_in_minutes}

---

### IotOtaUpdateConfig <a name="IotOtaUpdateConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

&iototaupdate.IotOtaUpdateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Files: interface{},
	OtaUpdateId: *string,
	Targets: *[]*string,
	AdditionalParameters: *map[string]*string,
	AwsJobAbortConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig,
	AwsJobExecutionsRolloutConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig,
	AwsJobPresignedUrlConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig,
	AwsJobTimeoutConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig,
	Description: *string,
	Protocols: *[]*string,
	RoleArn: *string,
	Tags: interface{},
	TargetSelection: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.files">Files</a></code> | <code>interface{}</code> | The files to be streamed by the OTA update. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.otaUpdateId">OtaUpdateId</a></code> | <code>*string</code> | The ID of the OTA update to be created. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.targets">Targets</a></code> | <code>*[]*string</code> | The devices targeted to receive OTA updates. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.additionalParameters">AdditionalParameters</a></code> | <code>*map[string]*string</code> | A list of additional OTA update parameters, which are name-value pairs. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.awsJobAbortConfig">AwsJobAbortConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig">IotOtaUpdateAwsJobAbortConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_abort_config IotOtaUpdate#aws_job_abort_config}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.awsJobExecutionsRolloutConfig">AwsJobExecutionsRolloutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig">IotOtaUpdateAwsJobExecutionsRolloutConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_executions_rollout_config IotOtaUpdate#aws_job_executions_rollout_config}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.awsJobPresignedUrlConfig">AwsJobPresignedUrlConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig">IotOtaUpdateAwsJobPresignedUrlConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_presigned_url_config IotOtaUpdate#aws_job_presigned_url_config}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.awsJobTimeoutConfig">AwsJobTimeoutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig">IotOtaUpdateAwsJobTimeoutConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_timeout_config IotOtaUpdate#aws_job_timeout_config}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.description">Description</a></code> | <code>*string</code> | The description of the OTA update. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.protocols">Protocols</a></code> | <code>*[]*string</code> | The protocol used to transfer the OTA update image. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | The IAM role that grants AWS IoT Core access to the Amazon S3, IoT jobs and AWS Code Signing resources to create an OTA update job. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Metadata which can be used to manage updates. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.targetSelection">TargetSelection</a></code> | <code>*string</code> | Specifies whether the update will continue to run (CONTINUOUS), or will be complete after all things specified as targets have completed the update (SNAPSHOT). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Files`<sup>Required</sup> <a name="Files" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.files"></a>

```go
Files interface{}
```

- *Type:* interface{}

The files to be streamed by the OTA update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#files IotOtaUpdate#files}

---

##### `OtaUpdateId`<sup>Required</sup> <a name="OtaUpdateId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.otaUpdateId"></a>

```go
OtaUpdateId *string
```

- *Type:* *string

The ID of the OTA update to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#ota_update_id IotOtaUpdate#ota_update_id}

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.targets"></a>

```go
Targets *[]*string
```

- *Type:* *[]*string

The devices targeted to receive OTA updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#targets IotOtaUpdate#targets}

---

##### `AdditionalParameters`<sup>Optional</sup> <a name="AdditionalParameters" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.additionalParameters"></a>

```go
AdditionalParameters *map[string]*string
```

- *Type:* *map[string]*string

A list of additional OTA update parameters, which are name-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#additional_parameters IotOtaUpdate#additional_parameters}

---

##### `AwsJobAbortConfig`<sup>Optional</sup> <a name="AwsJobAbortConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.awsJobAbortConfig"></a>

```go
AwsJobAbortConfig IotOtaUpdateAwsJobAbortConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfig">IotOtaUpdateAwsJobAbortConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_abort_config IotOtaUpdate#aws_job_abort_config}.

---

##### `AwsJobExecutionsRolloutConfig`<sup>Optional</sup> <a name="AwsJobExecutionsRolloutConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.awsJobExecutionsRolloutConfig"></a>

```go
AwsJobExecutionsRolloutConfig IotOtaUpdateAwsJobExecutionsRolloutConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfig">IotOtaUpdateAwsJobExecutionsRolloutConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_executions_rollout_config IotOtaUpdate#aws_job_executions_rollout_config}.

---

##### `AwsJobPresignedUrlConfig`<sup>Optional</sup> <a name="AwsJobPresignedUrlConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.awsJobPresignedUrlConfig"></a>

```go
AwsJobPresignedUrlConfig IotOtaUpdateAwsJobPresignedUrlConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfig">IotOtaUpdateAwsJobPresignedUrlConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_presigned_url_config IotOtaUpdate#aws_job_presigned_url_config}.

---

##### `AwsJobTimeoutConfig`<sup>Optional</sup> <a name="AwsJobTimeoutConfig" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.awsJobTimeoutConfig"></a>

```go
AwsJobTimeoutConfig IotOtaUpdateAwsJobTimeoutConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfig">IotOtaUpdateAwsJobTimeoutConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_job_timeout_config IotOtaUpdate#aws_job_timeout_config}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the OTA update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#description IotOtaUpdate#description}

---

##### `Protocols`<sup>Optional</sup> <a name="Protocols" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.protocols"></a>

```go
Protocols *[]*string
```

- *Type:* *[]*string

The protocol used to transfer the OTA update image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#protocols IotOtaUpdate#protocols}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The IAM role that grants AWS IoT Core access to the Amazon S3, IoT jobs and AWS Code Signing resources to create an OTA update job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#role_arn IotOtaUpdate#role_arn}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Metadata which can be used to manage updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#tags IotOtaUpdate#tags}

---

##### `TargetSelection`<sup>Optional</sup> <a name="TargetSelection" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateConfig.property.targetSelection"></a>

```go
TargetSelection *string
```

- *Type:* *string

Specifies whether the update will continue to run (CONTINUOUS), or will be complete after all things specified as targets have completed the update (SNAPSHOT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#target_selection IotOtaUpdate#target_selection}

---

### IotOtaUpdateFiles <a name="IotOtaUpdateFiles" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

&iototaupdate.IotOtaUpdateFiles {
	Attributes: *map[string]*string,
	CodeSigning: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.iotOtaUpdate.IotOtaUpdateFilesCodeSigning,
	FileLocation: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.iotOtaUpdate.IotOtaUpdateFilesFileLocation,
	FileName: *string,
	FileType: *f64,
	FileVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.attributes">Attributes</a></code> | <code>*map[string]*string</code> | A list of name-attribute pairs. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.codeSigning">CodeSigning</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning">IotOtaUpdateFilesCodeSigning</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#code_signing IotOtaUpdate#code_signing}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.fileLocation">FileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation">IotOtaUpdateFilesFileLocation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#file_location IotOtaUpdate#file_location}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.fileName">FileName</a></code> | <code>*string</code> | The name of the file. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.fileType">FileType</a></code> | <code>*f64</code> | An integer value you can include in the job document to allow your devices to identify the type of file received from the cloud. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.fileVersion">FileVersion</a></code> | <code>*string</code> | The file version. |

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.attributes"></a>

```go
Attributes *map[string]*string
```

- *Type:* *map[string]*string

A list of name-attribute pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#attributes IotOtaUpdate#attributes}

---

##### `CodeSigning`<sup>Optional</sup> <a name="CodeSigning" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.codeSigning"></a>

```go
CodeSigning IotOtaUpdateFilesCodeSigning
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning">IotOtaUpdateFilesCodeSigning</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#code_signing IotOtaUpdate#code_signing}.

---

##### `FileLocation`<sup>Optional</sup> <a name="FileLocation" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.fileLocation"></a>

```go
FileLocation IotOtaUpdateFilesFileLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation">IotOtaUpdateFilesFileLocation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#file_location IotOtaUpdate#file_location}.

---

##### `FileName`<sup>Optional</sup> <a name="FileName" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.fileName"></a>

```go
FileName *string
```

- *Type:* *string

The name of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#file_name IotOtaUpdate#file_name}

---

##### `FileType`<sup>Optional</sup> <a name="FileType" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.fileType"></a>

```go
FileType *f64
```

- *Type:* *f64

An integer value you can include in the job document to allow your devices to identify the type of file received from the cloud.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#file_type IotOtaUpdate#file_type}

---

##### `FileVersion`<sup>Optional</sup> <a name="FileVersion" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFiles.property.fileVersion"></a>

```go
FileVersion *string
```

- *Type:* *string

The file version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#file_version IotOtaUpdate#file_version}

---

### IotOtaUpdateFilesCodeSigning <a name="IotOtaUpdateFilesCodeSigning" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

&iototaupdate.IotOtaUpdateFilesCodeSigning {
	AwsSignerJobId: *string,
	CustomCodeSigning: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning,
	StartSigningJobParameter: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning.property.awsSignerJobId">AwsSignerJobId</a></code> | <code>*string</code> | The ID of the AWSSignerJob which was created to sign the file. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning.property.customCodeSigning">CustomCodeSigning</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning">IotOtaUpdateFilesCodeSigningCustomCodeSigning</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#custom_code_signing IotOtaUpdate#custom_code_signing}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning.property.startSigningJobParameter">StartSigningJobParameter</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#start_signing_job_parameter IotOtaUpdate#start_signing_job_parameter}. |

---

##### `AwsSignerJobId`<sup>Optional</sup> <a name="AwsSignerJobId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning.property.awsSignerJobId"></a>

```go
AwsSignerJobId *string
```

- *Type:* *string

The ID of the AWSSignerJob which was created to sign the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#aws_signer_job_id IotOtaUpdate#aws_signer_job_id}

---

##### `CustomCodeSigning`<sup>Optional</sup> <a name="CustomCodeSigning" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning.property.customCodeSigning"></a>

```go
CustomCodeSigning IotOtaUpdateFilesCodeSigningCustomCodeSigning
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning">IotOtaUpdateFilesCodeSigningCustomCodeSigning</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#custom_code_signing IotOtaUpdate#custom_code_signing}.

---

##### `StartSigningJobParameter`<sup>Optional</sup> <a name="StartSigningJobParameter" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning.property.startSigningJobParameter"></a>

```go
StartSigningJobParameter IotOtaUpdateFilesCodeSigningStartSigningJobParameter
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#start_signing_job_parameter IotOtaUpdate#start_signing_job_parameter}.

---

### IotOtaUpdateFilesCodeSigningCustomCodeSigning <a name="IotOtaUpdateFilesCodeSigningCustomCodeSigning" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

&iototaupdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning {
	CertificateChain: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain,
	HashAlgorithm: *string,
	Signature: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature,
	SignatureAlgorithm: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning.property.certificateChain">CertificateChain</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain">IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#certificate_chain IotOtaUpdate#certificate_chain}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning.property.hashAlgorithm">HashAlgorithm</a></code> | <code>*string</code> | The hash algorithm used to code sign the file. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning.property.signature">Signature</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature">IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#signature IotOtaUpdate#signature}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning.property.signatureAlgorithm">SignatureAlgorithm</a></code> | <code>*string</code> | The signature algorithm used to code sign the file. |

---

##### `CertificateChain`<sup>Optional</sup> <a name="CertificateChain" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning.property.certificateChain"></a>

```go
CertificateChain IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain">IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#certificate_chain IotOtaUpdate#certificate_chain}.

---

##### `HashAlgorithm`<sup>Optional</sup> <a name="HashAlgorithm" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning.property.hashAlgorithm"></a>

```go
HashAlgorithm *string
```

- *Type:* *string

The hash algorithm used to code sign the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#hash_algorithm IotOtaUpdate#hash_algorithm}

---

##### `Signature`<sup>Optional</sup> <a name="Signature" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning.property.signature"></a>

```go
Signature IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature">IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#signature IotOtaUpdate#signature}.

---

##### `SignatureAlgorithm`<sup>Optional</sup> <a name="SignatureAlgorithm" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning.property.signatureAlgorithm"></a>

```go
SignatureAlgorithm *string
```

- *Type:* *string

The signature algorithm used to code sign the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#signature_algorithm IotOtaUpdate#signature_algorithm}

---

### IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain <a name="IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

&iototaupdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain {
	CertificateName: *string,
	InlineDocument: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain.property.certificateName">CertificateName</a></code> | <code>*string</code> | The name of the certificate. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain.property.inlineDocument">InlineDocument</a></code> | <code>*string</code> | A base64 encoded binary representation of the code signing certificate chain. |

---

##### `CertificateName`<sup>Optional</sup> <a name="CertificateName" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain.property.certificateName"></a>

```go
CertificateName *string
```

- *Type:* *string

The name of the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#certificate_name IotOtaUpdate#certificate_name}

---

##### `InlineDocument`<sup>Optional</sup> <a name="InlineDocument" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain.property.inlineDocument"></a>

```go
InlineDocument *string
```

- *Type:* *string

A base64 encoded binary representation of the code signing certificate chain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#inline_document IotOtaUpdate#inline_document}

---

### IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature <a name="IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

&iototaupdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature {
	InlineDocument: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature.property.inlineDocument">InlineDocument</a></code> | <code>*string</code> | A base64 encoded binary representation of the code signing signature. |

---

##### `InlineDocument`<sup>Optional</sup> <a name="InlineDocument" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature.property.inlineDocument"></a>

```go
InlineDocument *string
```

- *Type:* *string

A base64 encoded binary representation of the code signing signature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#inline_document IotOtaUpdate#inline_document}

---

### IotOtaUpdateFilesCodeSigningStartSigningJobParameter <a name="IotOtaUpdateFilesCodeSigningStartSigningJobParameter" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

&iototaupdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter {
	Destination: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination,
	SigningProfileName: *string,
	SigningProfileParameter: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter.property.destination">Destination</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#destination IotOtaUpdate#destination}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter.property.signingProfileName">SigningProfileName</a></code> | <code>*string</code> | The code-signing profile name. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter.property.signingProfileParameter">SigningProfileParameter</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#signing_profile_parameter IotOtaUpdate#signing_profile_parameter}. |

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter.property.destination"></a>

```go
Destination IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#destination IotOtaUpdate#destination}.

---

##### `SigningProfileName`<sup>Optional</sup> <a name="SigningProfileName" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter.property.signingProfileName"></a>

```go
SigningProfileName *string
```

- *Type:* *string

The code-signing profile name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#signing_profile_name IotOtaUpdate#signing_profile_name}

---

##### `SigningProfileParameter`<sup>Optional</sup> <a name="SigningProfileParameter" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter.property.signingProfileParameter"></a>

```go
SigningProfileParameter IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#signing_profile_parameter IotOtaUpdate#signing_profile_parameter}.

---

### IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination <a name="IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

&iototaupdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination {
	S3Destination: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination.property.s3Destination">S3Destination</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#s3_destination IotOtaUpdate#s3_destination}. |

---

##### `S3Destination`<sup>Optional</sup> <a name="S3Destination" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination.property.s3Destination"></a>

```go
S3Destination IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#s3_destination IotOtaUpdate#s3_destination}.

---

### IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination <a name="IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

&iototaupdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination {
	Bucket: *string,
	Prefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination.property.bucket">Bucket</a></code> | <code>*string</code> | The S3 bucket that contains the updated firmware. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination.property.prefix">Prefix</a></code> | <code>*string</code> | The S3 prefix. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

The S3 bucket that contains the updated firmware.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#bucket IotOtaUpdate#bucket}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

The S3 prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#prefix IotOtaUpdate#prefix}

---

### IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter <a name="IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

&iototaupdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter {
	CertificateArn: *string,
	CertificatePathOnDevice: *string,
	Platform: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | Certificate ARN. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter.property.certificatePathOnDevice">CertificatePathOnDevice</a></code> | <code>*string</code> | The location of the code-signing certificate on your device. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter.property.platform">Platform</a></code> | <code>*string</code> | The hardware platform of your device. |

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter.property.certificateArn"></a>

```go
CertificateArn *string
```

- *Type:* *string

Certificate ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#certificate_arn IotOtaUpdate#certificate_arn}

---

##### `CertificatePathOnDevice`<sup>Optional</sup> <a name="CertificatePathOnDevice" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter.property.certificatePathOnDevice"></a>

```go
CertificatePathOnDevice *string
```

- *Type:* *string

The location of the code-signing certificate on your device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#certificate_path_on_device IotOtaUpdate#certificate_path_on_device}

---

##### `Platform`<sup>Optional</sup> <a name="Platform" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter.property.platform"></a>

```go
Platform *string
```

- *Type:* *string

The hardware platform of your device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#platform IotOtaUpdate#platform}

---

### IotOtaUpdateFilesFileLocation <a name="IotOtaUpdateFilesFileLocation" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

&iototaupdate.IotOtaUpdateFilesFileLocation {
	S3Location: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location,
	Stream: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation.property.s3Location">S3Location</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location">IotOtaUpdateFilesFileLocationS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#s3_location IotOtaUpdate#s3_location}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation.property.stream">Stream</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream">IotOtaUpdateFilesFileLocationStream</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#stream IotOtaUpdate#stream}. |

---

##### `S3Location`<sup>Optional</sup> <a name="S3Location" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation.property.s3Location"></a>

```go
S3Location IotOtaUpdateFilesFileLocationS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location">IotOtaUpdateFilesFileLocationS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#s3_location IotOtaUpdate#s3_location}.

---

##### `Stream`<sup>Optional</sup> <a name="Stream" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation.property.stream"></a>

```go
Stream IotOtaUpdateFilesFileLocationStream
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream">IotOtaUpdateFilesFileLocationStream</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#stream IotOtaUpdate#stream}.

---

### IotOtaUpdateFilesFileLocationS3Location <a name="IotOtaUpdateFilesFileLocationS3Location" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

&iototaupdate.IotOtaUpdateFilesFileLocationS3Location {
	Bucket: *string,
	Key: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location.property.bucket">Bucket</a></code> | <code>*string</code> | The S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location.property.key">Key</a></code> | <code>*string</code> | The S3 key. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location.property.version">Version</a></code> | <code>*string</code> | The S3 bucket version. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

The S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#bucket IotOtaUpdate#bucket}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location.property.key"></a>

```go
Key *string
```

- *Type:* *string

The S3 key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#key IotOtaUpdate#key}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location.property.version"></a>

```go
Version *string
```

- *Type:* *string

The S3 bucket version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#version IotOtaUpdate#version}

---

### IotOtaUpdateFilesFileLocationStream <a name="IotOtaUpdateFilesFileLocationStream" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

&iototaupdate.IotOtaUpdateFilesFileLocationStream {
	FileId: *f64,
	StreamId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream.property.fileId">FileId</a></code> | <code>*f64</code> | The ID of a file associated with a stream. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream.property.streamId">StreamId</a></code> | <code>*string</code> | The stream ID. |

---

##### `FileId`<sup>Optional</sup> <a name="FileId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream.property.fileId"></a>

```go
FileId *f64
```

- *Type:* *f64

The ID of a file associated with a stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#file_id IotOtaUpdate#file_id}

---

##### `StreamId`<sup>Optional</sup> <a name="StreamId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream.property.streamId"></a>

```go
StreamId *string
```

- *Type:* *string

The stream ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#stream_id IotOtaUpdate#stream_id}

---

### IotOtaUpdateTags <a name="IotOtaUpdateTags" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

&iototaupdate.IotOtaUpdateTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#key IotOtaUpdate#key}. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#value IotOtaUpdate#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#key IotOtaUpdate#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/iot_ota_update#value IotOtaUpdate#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList <a name="IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

iototaupdate.NewIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.get"></a>

```go
func Get(index *f64) IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference <a name="IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

iototaupdate.NewIotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resetFailureType">ResetFailureType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resetMinNumberOfExecutedThings">ResetMinNumberOfExecutedThings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resetThresholdPercentage">ResetThresholdPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetFailureType` <a name="ResetFailureType" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resetFailureType"></a>

```go
func ResetFailureType()
```

##### `ResetMinNumberOfExecutedThings` <a name="ResetMinNumberOfExecutedThings" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resetMinNumberOfExecutedThings"></a>

```go
func ResetMinNumberOfExecutedThings()
```

##### `ResetThresholdPercentage` <a name="ResetThresholdPercentage" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.resetThresholdPercentage"></a>

```go
func ResetThresholdPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.failureTypeInput">FailureTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.minNumberOfExecutedThingsInput">MinNumberOfExecutedThingsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.thresholdPercentageInput">ThresholdPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.failureType">FailureType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.minNumberOfExecutedThings">MinNumberOfExecutedThings</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.thresholdPercentage">ThresholdPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `FailureTypeInput`<sup>Optional</sup> <a name="FailureTypeInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.failureTypeInput"></a>

```go
func FailureTypeInput() *string
```

- *Type:* *string

---

##### `MinNumberOfExecutedThingsInput`<sup>Optional</sup> <a name="MinNumberOfExecutedThingsInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.minNumberOfExecutedThingsInput"></a>

```go
func MinNumberOfExecutedThingsInput() *f64
```

- *Type:* *f64

---

##### `ThresholdPercentageInput`<sup>Optional</sup> <a name="ThresholdPercentageInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.thresholdPercentageInput"></a>

```go
func ThresholdPercentageInput() *f64
```

- *Type:* *f64

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `FailureType`<sup>Required</sup> <a name="FailureType" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.failureType"></a>

```go
func FailureType() *string
```

- *Type:* *string

---

##### `MinNumberOfExecutedThings`<sup>Required</sup> <a name="MinNumberOfExecutedThings" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.minNumberOfExecutedThings"></a>

```go
func MinNumberOfExecutedThings() *f64
```

- *Type:* *f64

---

##### `ThresholdPercentage`<sup>Required</sup> <a name="ThresholdPercentage" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.thresholdPercentage"></a>

```go
func ThresholdPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotOtaUpdateAwsJobAbortConfigOutputReference <a name="IotOtaUpdateAwsJobAbortConfigOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

iototaupdate.NewIotOtaUpdateAwsJobAbortConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotOtaUpdateAwsJobAbortConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.putAbortCriteriaList">PutAbortCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.resetAbortCriteriaList">ResetAbortCriteriaList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAbortCriteriaList` <a name="PutAbortCriteriaList" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.putAbortCriteriaList"></a>

```go
func PutAbortCriteriaList(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.putAbortCriteriaList.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAbortCriteriaList` <a name="ResetAbortCriteriaList" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.resetAbortCriteriaList"></a>

```go
func ResetAbortCriteriaList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.property.abortCriteriaList">AbortCriteriaList</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList">IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.property.abortCriteriaListInput">AbortCriteriaListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AbortCriteriaList`<sup>Required</sup> <a name="AbortCriteriaList" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.property.abortCriteriaList"></a>

```go
func AbortCriteriaList() IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList">IotOtaUpdateAwsJobAbortConfigAbortCriteriaListStructList</a>

---

##### `AbortCriteriaListInput`<sup>Optional</sup> <a name="AbortCriteriaListInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.property.abortCriteriaListInput"></a>

```go
func AbortCriteriaListInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobAbortConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference <a name="IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

iototaupdate.NewIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.putRateIncreaseCriteria">PutRateIncreaseCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.resetBaseRatePerMinute">ResetBaseRatePerMinute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.resetIncrementFactor">ResetIncrementFactor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.resetRateIncreaseCriteria">ResetRateIncreaseCriteria</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRateIncreaseCriteria` <a name="PutRateIncreaseCriteria" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.putRateIncreaseCriteria"></a>

```go
func PutRateIncreaseCriteria(value IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.putRateIncreaseCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteria</a>

---

##### `ResetBaseRatePerMinute` <a name="ResetBaseRatePerMinute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.resetBaseRatePerMinute"></a>

```go
func ResetBaseRatePerMinute()
```

##### `ResetIncrementFactor` <a name="ResetIncrementFactor" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.resetIncrementFactor"></a>

```go
func ResetIncrementFactor()
```

##### `ResetRateIncreaseCriteria` <a name="ResetRateIncreaseCriteria" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.resetRateIncreaseCriteria"></a>

```go
func ResetRateIncreaseCriteria()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteria">RateIncreaseCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinuteInput">BaseRatePerMinuteInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactorInput">IncrementFactorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteriaInput">RateIncreaseCriteriaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinute">BaseRatePerMinute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactor">IncrementFactor</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RateIncreaseCriteria`<sup>Required</sup> <a name="RateIncreaseCriteria" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteria"></a>

```go
func RateIncreaseCriteria() IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference</a>

---

##### `BaseRatePerMinuteInput`<sup>Optional</sup> <a name="BaseRatePerMinuteInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinuteInput"></a>

```go
func BaseRatePerMinuteInput() *f64
```

- *Type:* *f64

---

##### `IncrementFactorInput`<sup>Optional</sup> <a name="IncrementFactorInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactorInput"></a>

```go
func IncrementFactorInput() *f64
```

- *Type:* *f64

---

##### `RateIncreaseCriteriaInput`<sup>Optional</sup> <a name="RateIncreaseCriteriaInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.rateIncreaseCriteriaInput"></a>

```go
func RateIncreaseCriteriaInput() interface{}
```

- *Type:* interface{}

---

##### `BaseRatePerMinute`<sup>Required</sup> <a name="BaseRatePerMinute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.baseRatePerMinute"></a>

```go
func BaseRatePerMinute() *f64
```

- *Type:* *f64

---

##### `IncrementFactor`<sup>Required</sup> <a name="IncrementFactor" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.incrementFactor"></a>

```go
func IncrementFactor() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference <a name="IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

iototaupdate.NewIotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resetNumberOfNotifiedThings">ResetNumberOfNotifiedThings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resetNumberOfSucceededThings">ResetNumberOfSucceededThings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNumberOfNotifiedThings` <a name="ResetNumberOfNotifiedThings" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resetNumberOfNotifiedThings"></a>

```go
func ResetNumberOfNotifiedThings()
```

##### `ResetNumberOfSucceededThings` <a name="ResetNumberOfSucceededThings" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.resetNumberOfSucceededThings"></a>

```go
func ResetNumberOfSucceededThings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThingsInput">NumberOfNotifiedThingsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThingsInput">NumberOfSucceededThingsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThings">NumberOfNotifiedThings</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThings">NumberOfSucceededThings</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NumberOfNotifiedThingsInput`<sup>Optional</sup> <a name="NumberOfNotifiedThingsInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThingsInput"></a>

```go
func NumberOfNotifiedThingsInput() *f64
```

- *Type:* *f64

---

##### `NumberOfSucceededThingsInput`<sup>Optional</sup> <a name="NumberOfSucceededThingsInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThingsInput"></a>

```go
func NumberOfSucceededThingsInput() *f64
```

- *Type:* *f64

---

##### `NumberOfNotifiedThings`<sup>Required</sup> <a name="NumberOfNotifiedThings" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfNotifiedThings"></a>

```go
func NumberOfNotifiedThings() *f64
```

- *Type:* *f64

---

##### `NumberOfSucceededThings`<sup>Required</sup> <a name="NumberOfSucceededThings" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.numberOfSucceededThings"></a>

```go
func NumberOfSucceededThings() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateRateIncreaseCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference <a name="IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

iototaupdate.NewIotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.putExponentialRate">PutExponentialRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.resetExponentialRate">ResetExponentialRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.resetMaximumPerMinute">ResetMaximumPerMinute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExponentialRate` <a name="PutExponentialRate" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.putExponentialRate"></a>

```go
func PutExponentialRate(value IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.putExponentialRate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRate</a>

---

##### `ResetExponentialRate` <a name="ResetExponentialRate" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.resetExponentialRate"></a>

```go
func ResetExponentialRate()
```

##### `ResetMaximumPerMinute` <a name="ResetMaximumPerMinute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.resetMaximumPerMinute"></a>

```go
func ResetMaximumPerMinute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.exponentialRate">ExponentialRate</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.exponentialRateInput">ExponentialRateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.maximumPerMinuteInput">MaximumPerMinuteInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.maximumPerMinute">MaximumPerMinute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExponentialRate`<sup>Required</sup> <a name="ExponentialRate" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.exponentialRate"></a>

```go
func ExponentialRate() IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference">IotOtaUpdateAwsJobExecutionsRolloutConfigExponentialRateOutputReference</a>

---

##### `ExponentialRateInput`<sup>Optional</sup> <a name="ExponentialRateInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.exponentialRateInput"></a>

```go
func ExponentialRateInput() interface{}
```

- *Type:* interface{}

---

##### `MaximumPerMinuteInput`<sup>Optional</sup> <a name="MaximumPerMinuteInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.maximumPerMinuteInput"></a>

```go
func MaximumPerMinuteInput() *f64
```

- *Type:* *f64

---

##### `MaximumPerMinute`<sup>Required</sup> <a name="MaximumPerMinute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.maximumPerMinute"></a>

```go
func MaximumPerMinute() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobExecutionsRolloutConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotOtaUpdateAwsJobPresignedUrlConfigOutputReference <a name="IotOtaUpdateAwsJobPresignedUrlConfigOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

iototaupdate.NewIotOtaUpdateAwsJobPresignedUrlConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotOtaUpdateAwsJobPresignedUrlConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.resetExpiresInSec">ResetExpiresInSec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpiresInSec` <a name="ResetExpiresInSec" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.resetExpiresInSec"></a>

```go
func ResetExpiresInSec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.expiresInSecInput">ExpiresInSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.expiresInSec">ExpiresInSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpiresInSecInput`<sup>Optional</sup> <a name="ExpiresInSecInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.expiresInSecInput"></a>

```go
func ExpiresInSecInput() *f64
```

- *Type:* *f64

---

##### `ExpiresInSec`<sup>Required</sup> <a name="ExpiresInSec" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.expiresInSec"></a>

```go
func ExpiresInSec() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobPresignedUrlConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotOtaUpdateAwsJobTimeoutConfigOutputReference <a name="IotOtaUpdateAwsJobTimeoutConfigOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

iototaupdate.NewIotOtaUpdateAwsJobTimeoutConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotOtaUpdateAwsJobTimeoutConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.resetInProgressTimeoutInMinutes">ResetInProgressTimeoutInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInProgressTimeoutInMinutes` <a name="ResetInProgressTimeoutInMinutes" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.resetInProgressTimeoutInMinutes"></a>

```go
func ResetInProgressTimeoutInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.property.inProgressTimeoutInMinutesInput">InProgressTimeoutInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.property.inProgressTimeoutInMinutes">InProgressTimeoutInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InProgressTimeoutInMinutesInput`<sup>Optional</sup> <a name="InProgressTimeoutInMinutesInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.property.inProgressTimeoutInMinutesInput"></a>

```go
func InProgressTimeoutInMinutesInput() *f64
```

- *Type:* *f64

---

##### `InProgressTimeoutInMinutes`<sup>Required</sup> <a name="InProgressTimeoutInMinutes" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.property.inProgressTimeoutInMinutes"></a>

```go
func InProgressTimeoutInMinutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateAwsJobTimeoutConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference <a name="IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

iototaupdate.NewIotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.resetCertificateName">ResetCertificateName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.resetInlineDocument">ResetInlineDocument</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateName` <a name="ResetCertificateName" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.resetCertificateName"></a>

```go
func ResetCertificateName()
```

##### `ResetInlineDocument` <a name="ResetInlineDocument" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.resetInlineDocument"></a>

```go
func ResetInlineDocument()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.certificateNameInput">CertificateNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.inlineDocumentInput">InlineDocumentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.certificateName">CertificateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.inlineDocument">InlineDocument</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateNameInput`<sup>Optional</sup> <a name="CertificateNameInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.certificateNameInput"></a>

```go
func CertificateNameInput() *string
```

- *Type:* *string

---

##### `InlineDocumentInput`<sup>Optional</sup> <a name="InlineDocumentInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.inlineDocumentInput"></a>

```go
func InlineDocumentInput() *string
```

- *Type:* *string

---

##### `CertificateName`<sup>Required</sup> <a name="CertificateName" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.certificateName"></a>

```go
func CertificateName() *string
```

- *Type:* *string

---

##### `InlineDocument`<sup>Required</sup> <a name="InlineDocument" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.inlineDocument"></a>

```go
func InlineDocument() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference <a name="IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

iototaupdate.NewIotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.putCertificateChain">PutCertificateChain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.putSignature">PutSignature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resetCertificateChain">ResetCertificateChain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resetHashAlgorithm">ResetHashAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resetSignature">ResetSignature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resetSignatureAlgorithm">ResetSignatureAlgorithm</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCertificateChain` <a name="PutCertificateChain" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.putCertificateChain"></a>

```go
func PutCertificateChain(value IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.putCertificateChain.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain">IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChain</a>

---

##### `PutSignature` <a name="PutSignature" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.putSignature"></a>

```go
func PutSignature(value IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.putSignature.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature">IotOtaUpdateFilesCodeSigningCustomCodeSigningSignature</a>

---

##### `ResetCertificateChain` <a name="ResetCertificateChain" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resetCertificateChain"></a>

```go
func ResetCertificateChain()
```

##### `ResetHashAlgorithm` <a name="ResetHashAlgorithm" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resetHashAlgorithm"></a>

```go
func ResetHashAlgorithm()
```

##### `ResetSignature` <a name="ResetSignature" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resetSignature"></a>

```go
func ResetSignature()
```

##### `ResetSignatureAlgorithm` <a name="ResetSignatureAlgorithm" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.resetSignatureAlgorithm"></a>

```go
func ResetSignatureAlgorithm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.certificateChain">CertificateChain</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference">IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.signature">Signature</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference">IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.certificateChainInput">CertificateChainInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.hashAlgorithmInput">HashAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.signatureAlgorithmInput">SignatureAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.signatureInput">SignatureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.hashAlgorithm">HashAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.signatureAlgorithm">SignatureAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateChain`<sup>Required</sup> <a name="CertificateChain" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.certificateChain"></a>

```go
func CertificateChain() IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference">IotOtaUpdateFilesCodeSigningCustomCodeSigningCertificateChainOutputReference</a>

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.signature"></a>

```go
func Signature() IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference">IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference</a>

---

##### `CertificateChainInput`<sup>Optional</sup> <a name="CertificateChainInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.certificateChainInput"></a>

```go
func CertificateChainInput() interface{}
```

- *Type:* interface{}

---

##### `HashAlgorithmInput`<sup>Optional</sup> <a name="HashAlgorithmInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.hashAlgorithmInput"></a>

```go
func HashAlgorithmInput() *string
```

- *Type:* *string

---

##### `SignatureAlgorithmInput`<sup>Optional</sup> <a name="SignatureAlgorithmInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.signatureAlgorithmInput"></a>

```go
func SignatureAlgorithmInput() *string
```

- *Type:* *string

---

##### `SignatureInput`<sup>Optional</sup> <a name="SignatureInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.signatureInput"></a>

```go
func SignatureInput() interface{}
```

- *Type:* interface{}

---

##### `HashAlgorithm`<sup>Required</sup> <a name="HashAlgorithm" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.hashAlgorithm"></a>

```go
func HashAlgorithm() *string
```

- *Type:* *string

---

##### `SignatureAlgorithm`<sup>Required</sup> <a name="SignatureAlgorithm" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.signatureAlgorithm"></a>

```go
func SignatureAlgorithm() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference <a name="IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

iototaupdate.NewIotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.resetInlineDocument">ResetInlineDocument</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInlineDocument` <a name="ResetInlineDocument" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.resetInlineDocument"></a>

```go
func ResetInlineDocument()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.inlineDocumentInput">InlineDocumentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.inlineDocument">InlineDocument</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InlineDocumentInput`<sup>Optional</sup> <a name="InlineDocumentInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.inlineDocumentInput"></a>

```go
func InlineDocumentInput() *string
```

- *Type:* *string

---

##### `InlineDocument`<sup>Required</sup> <a name="InlineDocument" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.inlineDocument"></a>

```go
func InlineDocument() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningSignatureOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotOtaUpdateFilesCodeSigningOutputReference <a name="IotOtaUpdateFilesCodeSigningOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

iototaupdate.NewIotOtaUpdateFilesCodeSigningOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotOtaUpdateFilesCodeSigningOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.putCustomCodeSigning">PutCustomCodeSigning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.putStartSigningJobParameter">PutStartSigningJobParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.resetAwsSignerJobId">ResetAwsSignerJobId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.resetCustomCodeSigning">ResetCustomCodeSigning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.resetStartSigningJobParameter">ResetStartSigningJobParameter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomCodeSigning` <a name="PutCustomCodeSigning" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.putCustomCodeSigning"></a>

```go
func PutCustomCodeSigning(value IotOtaUpdateFilesCodeSigningCustomCodeSigning)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.putCustomCodeSigning.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigning">IotOtaUpdateFilesCodeSigningCustomCodeSigning</a>

---

##### `PutStartSigningJobParameter` <a name="PutStartSigningJobParameter" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.putStartSigningJobParameter"></a>

```go
func PutStartSigningJobParameter(value IotOtaUpdateFilesCodeSigningStartSigningJobParameter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.putStartSigningJobParameter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameter</a>

---

##### `ResetAwsSignerJobId` <a name="ResetAwsSignerJobId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.resetAwsSignerJobId"></a>

```go
func ResetAwsSignerJobId()
```

##### `ResetCustomCodeSigning` <a name="ResetCustomCodeSigning" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.resetCustomCodeSigning"></a>

```go
func ResetCustomCodeSigning()
```

##### `ResetStartSigningJobParameter` <a name="ResetStartSigningJobParameter" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.resetStartSigningJobParameter"></a>

```go
func ResetStartSigningJobParameter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.customCodeSigning">CustomCodeSigning</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference">IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.startSigningJobParameter">StartSigningJobParameter</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference">IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.awsSignerJobIdInput">AwsSignerJobIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.customCodeSigningInput">CustomCodeSigningInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.startSigningJobParameterInput">StartSigningJobParameterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.awsSignerJobId">AwsSignerJobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomCodeSigning`<sup>Required</sup> <a name="CustomCodeSigning" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.customCodeSigning"></a>

```go
func CustomCodeSigning() IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference">IotOtaUpdateFilesCodeSigningCustomCodeSigningOutputReference</a>

---

##### `StartSigningJobParameter`<sup>Required</sup> <a name="StartSigningJobParameter" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.startSigningJobParameter"></a>

```go
func StartSigningJobParameter() IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference">IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference</a>

---

##### `AwsSignerJobIdInput`<sup>Optional</sup> <a name="AwsSignerJobIdInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.awsSignerJobIdInput"></a>

```go
func AwsSignerJobIdInput() *string
```

- *Type:* *string

---

##### `CustomCodeSigningInput`<sup>Optional</sup> <a name="CustomCodeSigningInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.customCodeSigningInput"></a>

```go
func CustomCodeSigningInput() interface{}
```

- *Type:* interface{}

---

##### `StartSigningJobParameterInput`<sup>Optional</sup> <a name="StartSigningJobParameterInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.startSigningJobParameterInput"></a>

```go
func StartSigningJobParameterInput() interface{}
```

- *Type:* interface{}

---

##### `AwsSignerJobId`<sup>Required</sup> <a name="AwsSignerJobId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.awsSignerJobId"></a>

```go
func AwsSignerJobId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference <a name="IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

iototaupdate.NewIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.putS3Destination">PutS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.resetS3Destination">ResetS3Destination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Destination` <a name="PutS3Destination" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.putS3Destination"></a>

```go
func PutS3Destination(value IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.putS3Destination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3Destination</a>

---

##### `ResetS3Destination` <a name="ResetS3Destination" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.resetS3Destination"></a>

```go
func ResetS3Destination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.s3Destination">S3Destination</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.s3DestinationInput">S3DestinationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3Destination`<sup>Required</sup> <a name="S3Destination" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.s3Destination"></a>

```go
func S3Destination() IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference</a>

---

##### `S3DestinationInput`<sup>Optional</sup> <a name="S3DestinationInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.s3DestinationInput"></a>

```go
func S3DestinationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference <a name="IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

iototaupdate.NewIotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.resetBucket"></a>

```go
func ResetBucket()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationS3DestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference <a name="IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

iototaupdate.NewIotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.putDestination">PutDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.putSigningProfileParameter">PutSigningProfileParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.resetSigningProfileName">ResetSigningProfileName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.resetSigningProfileParameter">ResetSigningProfileParameter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestination` <a name="PutDestination" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.putDestination"></a>

```go
func PutDestination(value IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestination</a>

---

##### `PutSigningProfileParameter` <a name="PutSigningProfileParameter" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.putSigningProfileParameter"></a>

```go
func PutSigningProfileParameter(value IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.putSigningProfileParameter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter">IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameter</a>

---

##### `ResetDestination` <a name="ResetDestination" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.resetDestination"></a>

```go
func ResetDestination()
```

##### `ResetSigningProfileName` <a name="ResetSigningProfileName" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.resetSigningProfileName"></a>

```go
func ResetSigningProfileName()
```

##### `ResetSigningProfileParameter` <a name="ResetSigningProfileParameter" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.resetSigningProfileParameter"></a>

```go
func ResetSigningProfileParameter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.destination">Destination</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.signingProfileParameter">SigningProfileParameter</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference">IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.destinationInput">DestinationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.signingProfileNameInput">SigningProfileNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.signingProfileParameterInput">SigningProfileParameterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.signingProfileName">SigningProfileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.destination"></a>

```go
func Destination() IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference">IotOtaUpdateFilesCodeSigningStartSigningJobParameterDestinationOutputReference</a>

---

##### `SigningProfileParameter`<sup>Required</sup> <a name="SigningProfileParameter" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.signingProfileParameter"></a>

```go
func SigningProfileParameter() IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference">IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference</a>

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.destinationInput"></a>

```go
func DestinationInput() interface{}
```

- *Type:* interface{}

---

##### `SigningProfileNameInput`<sup>Optional</sup> <a name="SigningProfileNameInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.signingProfileNameInput"></a>

```go
func SigningProfileNameInput() *string
```

- *Type:* *string

---

##### `SigningProfileParameterInput`<sup>Optional</sup> <a name="SigningProfileParameterInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.signingProfileParameterInput"></a>

```go
func SigningProfileParameterInput() interface{}
```

- *Type:* interface{}

---

##### `SigningProfileName`<sup>Required</sup> <a name="SigningProfileName" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.signingProfileName"></a>

```go
func SigningProfileName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference <a name="IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

iototaupdate.NewIotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.resetCertificatePathOnDevice">ResetCertificatePathOnDevice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.resetPlatform">ResetPlatform</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.resetCertificateArn"></a>

```go
func ResetCertificateArn()
```

##### `ResetCertificatePathOnDevice` <a name="ResetCertificatePathOnDevice" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.resetCertificatePathOnDevice"></a>

```go
func ResetCertificatePathOnDevice()
```

##### `ResetPlatform` <a name="ResetPlatform" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.resetPlatform"></a>

```go
func ResetPlatform()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.certificateArnInput">CertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.certificatePathOnDeviceInput">CertificatePathOnDeviceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.platformInput">PlatformInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.certificatePathOnDevice">CertificatePathOnDevice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.platform">Platform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.certificateArnInput"></a>

```go
func CertificateArnInput() *string
```

- *Type:* *string

---

##### `CertificatePathOnDeviceInput`<sup>Optional</sup> <a name="CertificatePathOnDeviceInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.certificatePathOnDeviceInput"></a>

```go
func CertificatePathOnDeviceInput() *string
```

- *Type:* *string

---

##### `PlatformInput`<sup>Optional</sup> <a name="PlatformInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.platformInput"></a>

```go
func PlatformInput() *string
```

- *Type:* *string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.certificateArn"></a>

```go
func CertificateArn() *string
```

- *Type:* *string

---

##### `CertificatePathOnDevice`<sup>Required</sup> <a name="CertificatePathOnDevice" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.certificatePathOnDevice"></a>

```go
func CertificatePathOnDevice() *string
```

- *Type:* *string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.platform"></a>

```go
func Platform() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningStartSigningJobParameterSigningProfileParameterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotOtaUpdateFilesFileLocationOutputReference <a name="IotOtaUpdateFilesFileLocationOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

iototaupdate.NewIotOtaUpdateFilesFileLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotOtaUpdateFilesFileLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.putS3Location">PutS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.putStream">PutStream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.resetS3Location">ResetS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.resetStream">ResetStream</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Location` <a name="PutS3Location" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.putS3Location"></a>

```go
func PutS3Location(value IotOtaUpdateFilesFileLocationS3Location)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.putS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3Location">IotOtaUpdateFilesFileLocationS3Location</a>

---

##### `PutStream` <a name="PutStream" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.putStream"></a>

```go
func PutStream(value IotOtaUpdateFilesFileLocationStream)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.putStream.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStream">IotOtaUpdateFilesFileLocationStream</a>

---

##### `ResetS3Location` <a name="ResetS3Location" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.resetS3Location"></a>

```go
func ResetS3Location()
```

##### `ResetStream` <a name="ResetStream" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.resetStream"></a>

```go
func ResetStream()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.s3Location">S3Location</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference">IotOtaUpdateFilesFileLocationS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.stream">Stream</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference">IotOtaUpdateFilesFileLocationStreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.s3LocationInput">S3LocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.streamInput">StreamInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3Location`<sup>Required</sup> <a name="S3Location" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.s3Location"></a>

```go
func S3Location() IotOtaUpdateFilesFileLocationS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference">IotOtaUpdateFilesFileLocationS3LocationOutputReference</a>

---

##### `Stream`<sup>Required</sup> <a name="Stream" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.stream"></a>

```go
func Stream() IotOtaUpdateFilesFileLocationStreamOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference">IotOtaUpdateFilesFileLocationStreamOutputReference</a>

---

##### `S3LocationInput`<sup>Optional</sup> <a name="S3LocationInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.s3LocationInput"></a>

```go
func S3LocationInput() interface{}
```

- *Type:* interface{}

---

##### `StreamInput`<sup>Optional</sup> <a name="StreamInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.streamInput"></a>

```go
func StreamInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotOtaUpdateFilesFileLocationS3LocationOutputReference <a name="IotOtaUpdateFilesFileLocationS3LocationOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

iototaupdate.NewIotOtaUpdateFilesFileLocationS3LocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotOtaUpdateFilesFileLocationS3LocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.resetBucket"></a>

```go
func ResetBucket()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationS3LocationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotOtaUpdateFilesFileLocationStreamOutputReference <a name="IotOtaUpdateFilesFileLocationStreamOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

iototaupdate.NewIotOtaUpdateFilesFileLocationStreamOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotOtaUpdateFilesFileLocationStreamOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.resetFileId">ResetFileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.resetStreamId">ResetStreamId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFileId` <a name="ResetFileId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.resetFileId"></a>

```go
func ResetFileId()
```

##### `ResetStreamId` <a name="ResetStreamId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.resetStreamId"></a>

```go
func ResetStreamId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.fileIdInput">FileIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.streamIdInput">StreamIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.fileId">FileId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.streamId">StreamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileIdInput`<sup>Optional</sup> <a name="FileIdInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.fileIdInput"></a>

```go
func FileIdInput() *f64
```

- *Type:* *f64

---

##### `StreamIdInput`<sup>Optional</sup> <a name="StreamIdInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.streamIdInput"></a>

```go
func StreamIdInput() *string
```

- *Type:* *string

---

##### `FileId`<sup>Required</sup> <a name="FileId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.fileId"></a>

```go
func FileId() *f64
```

- *Type:* *f64

---

##### `StreamId`<sup>Required</sup> <a name="StreamId" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.streamId"></a>

```go
func StreamId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationStreamOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotOtaUpdateFilesList <a name="IotOtaUpdateFilesList" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

iototaupdate.NewIotOtaUpdateFilesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotOtaUpdateFilesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.get"></a>

```go
func Get(index *f64) IotOtaUpdateFilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotOtaUpdateFilesOutputReference <a name="IotOtaUpdateFilesOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

iototaupdate.NewIotOtaUpdateFilesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotOtaUpdateFilesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.putCodeSigning">PutCodeSigning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.putFileLocation">PutFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetCodeSigning">ResetCodeSigning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetFileLocation">ResetFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetFileName">ResetFileName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetFileType">ResetFileType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetFileVersion">ResetFileVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCodeSigning` <a name="PutCodeSigning" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.putCodeSigning"></a>

```go
func PutCodeSigning(value IotOtaUpdateFilesCodeSigning)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.putCodeSigning.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigning">IotOtaUpdateFilesCodeSigning</a>

---

##### `PutFileLocation` <a name="PutFileLocation" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.putFileLocation"></a>

```go
func PutFileLocation(value IotOtaUpdateFilesFileLocation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.putFileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocation">IotOtaUpdateFilesFileLocation</a>

---

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetAttributes"></a>

```go
func ResetAttributes()
```

##### `ResetCodeSigning` <a name="ResetCodeSigning" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetCodeSigning"></a>

```go
func ResetCodeSigning()
```

##### `ResetFileLocation` <a name="ResetFileLocation" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetFileLocation"></a>

```go
func ResetFileLocation()
```

##### `ResetFileName` <a name="ResetFileName" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetFileName"></a>

```go
func ResetFileName()
```

##### `ResetFileType` <a name="ResetFileType" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetFileType"></a>

```go
func ResetFileType()
```

##### `ResetFileVersion` <a name="ResetFileVersion" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.resetFileVersion"></a>

```go
func ResetFileVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.codeSigning">CodeSigning</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference">IotOtaUpdateFilesCodeSigningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileLocation">FileLocation</a></code> | <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference">IotOtaUpdateFilesFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.attributesInput">AttributesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.codeSigningInput">CodeSigningInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileLocationInput">FileLocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileNameInput">FileNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileTypeInput">FileTypeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileVersionInput">FileVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.attributes">Attributes</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileName">FileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileType">FileType</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileVersion">FileVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CodeSigning`<sup>Required</sup> <a name="CodeSigning" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.codeSigning"></a>

```go
func CodeSigning() IotOtaUpdateFilesCodeSigningOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesCodeSigningOutputReference">IotOtaUpdateFilesCodeSigningOutputReference</a>

---

##### `FileLocation`<sup>Required</sup> <a name="FileLocation" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileLocation"></a>

```go
func FileLocation() IotOtaUpdateFilesFileLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesFileLocationOutputReference">IotOtaUpdateFilesFileLocationOutputReference</a>

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.attributesInput"></a>

```go
func AttributesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CodeSigningInput`<sup>Optional</sup> <a name="CodeSigningInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.codeSigningInput"></a>

```go
func CodeSigningInput() interface{}
```

- *Type:* interface{}

---

##### `FileLocationInput`<sup>Optional</sup> <a name="FileLocationInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileLocationInput"></a>

```go
func FileLocationInput() interface{}
```

- *Type:* interface{}

---

##### `FileNameInput`<sup>Optional</sup> <a name="FileNameInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileNameInput"></a>

```go
func FileNameInput() *string
```

- *Type:* *string

---

##### `FileTypeInput`<sup>Optional</sup> <a name="FileTypeInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileTypeInput"></a>

```go
func FileTypeInput() *f64
```

- *Type:* *f64

---

##### `FileVersionInput`<sup>Optional</sup> <a name="FileVersionInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileVersionInput"></a>

```go
func FileVersionInput() *string
```

- *Type:* *string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.attributes"></a>

```go
func Attributes() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FileName`<sup>Required</sup> <a name="FileName" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileName"></a>

```go
func FileName() *string
```

- *Type:* *string

---

##### `FileType`<sup>Required</sup> <a name="FileType" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileType"></a>

```go
func FileType() *f64
```

- *Type:* *f64

---

##### `FileVersion`<sup>Required</sup> <a name="FileVersion" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.fileVersion"></a>

```go
func FileVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateFilesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotOtaUpdateTagsList <a name="IotOtaUpdateTagsList" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

iototaupdate.NewIotOtaUpdateTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotOtaUpdateTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.get"></a>

```go
func Get(index *f64) IotOtaUpdateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotOtaUpdateTagsOutputReference <a name="IotOtaUpdateTagsOutputReference" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/iototaupdate"

iototaupdate.NewIotOtaUpdateTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotOtaUpdateTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotOtaUpdate.IotOtaUpdateTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



