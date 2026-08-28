# `sesConfigurationSet` Submodule <a name="`sesConfigurationSet` Submodule" id="@cdktn/provider-awscc.sesConfigurationSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesConfigurationSet <a name="SesConfigurationSet" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_configuration_set awscc_ses_configuration_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesconfigurationset"

sesconfigurationset.NewSesConfigurationSet(scope Construct, id *string, config SesConfigurationSetConfig) SesConfigurationSet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig">SesConfigurationSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig">SesConfigurationSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putArchivingOptions">PutArchivingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putDeliveryOptions">PutDeliveryOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putReputationOptions">PutReputationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putSendingOptions">PutSendingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putSuppressionOptions">PutSuppressionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putTrackingOptions">PutTrackingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putVdmOptions">PutVdmOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetArchivingOptions">ResetArchivingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetDeliveryOptions">ResetDeliveryOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetReputationOptions">ResetReputationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetSendingOptions">ResetSendingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetSuppressionOptions">ResetSuppressionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetTrackingOptions">ResetTrackingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetVdmOptions">ResetVdmOptions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutArchivingOptions` <a name="PutArchivingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putArchivingOptions"></a>

```go
func PutArchivingOptions(value SesConfigurationSetArchivingOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putArchivingOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptions">SesConfigurationSetArchivingOptions</a>

---

##### `PutDeliveryOptions` <a name="PutDeliveryOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putDeliveryOptions"></a>

```go
func PutDeliveryOptions(value SesConfigurationSetDeliveryOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putDeliveryOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions">SesConfigurationSetDeliveryOptions</a>

---

##### `PutReputationOptions` <a name="PutReputationOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putReputationOptions"></a>

```go
func PutReputationOptions(value SesConfigurationSetReputationOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putReputationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptions">SesConfigurationSetReputationOptions</a>

---

##### `PutSendingOptions` <a name="PutSendingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putSendingOptions"></a>

```go
func PutSendingOptions(value SesConfigurationSetSendingOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putSendingOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptions">SesConfigurationSetSendingOptions</a>

---

##### `PutSuppressionOptions` <a name="PutSuppressionOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putSuppressionOptions"></a>

```go
func PutSuppressionOptions(value SesConfigurationSetSuppressionOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putSuppressionOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions">SesConfigurationSetSuppressionOptions</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTrackingOptions` <a name="PutTrackingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putTrackingOptions"></a>

```go
func PutTrackingOptions(value SesConfigurationSetTrackingOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putTrackingOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions">SesConfigurationSetTrackingOptions</a>

---

##### `PutVdmOptions` <a name="PutVdmOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putVdmOptions"></a>

```go
func PutVdmOptions(value SesConfigurationSetVdmOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.putVdmOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions">SesConfigurationSetVdmOptions</a>

---

##### `ResetArchivingOptions` <a name="ResetArchivingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetArchivingOptions"></a>

```go
func ResetArchivingOptions()
```

##### `ResetDeliveryOptions` <a name="ResetDeliveryOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetDeliveryOptions"></a>

```go
func ResetDeliveryOptions()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetName"></a>

```go
func ResetName()
```

##### `ResetReputationOptions` <a name="ResetReputationOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetReputationOptions"></a>

```go
func ResetReputationOptions()
```

##### `ResetSendingOptions` <a name="ResetSendingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetSendingOptions"></a>

```go
func ResetSendingOptions()
```

##### `ResetSuppressionOptions` <a name="ResetSuppressionOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetSuppressionOptions"></a>

```go
func ResetSuppressionOptions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTrackingOptions` <a name="ResetTrackingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetTrackingOptions"></a>

```go
func ResetTrackingOptions()
```

##### `ResetVdmOptions` <a name="ResetVdmOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.resetVdmOptions"></a>

```go
func ResetVdmOptions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SesConfigurationSet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesconfigurationset"

sesconfigurationset.SesConfigurationSet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesconfigurationset"

sesconfigurationset.SesConfigurationSet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesconfigurationset"

sesconfigurationset.SesConfigurationSet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesconfigurationset"

sesconfigurationset.SesConfigurationSet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SesConfigurationSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SesConfigurationSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SesConfigurationSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_configuration_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SesConfigurationSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.archivingOptions">ArchivingOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference">SesConfigurationSetArchivingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.deliveryOptions">DeliveryOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference">SesConfigurationSetDeliveryOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.reputationOptions">ReputationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference">SesConfigurationSetReputationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.sendingOptions">SendingOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference">SesConfigurationSetSendingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.suppressionOptions">SuppressionOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference">SesConfigurationSetSuppressionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList">SesConfigurationSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.trackingOptions">TrackingOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference">SesConfigurationSetTrackingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.vdmOptions">VdmOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference">SesConfigurationSetVdmOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.archivingOptionsInput">ArchivingOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.deliveryOptionsInput">DeliveryOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.reputationOptionsInput">ReputationOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.sendingOptionsInput">SendingOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.suppressionOptionsInput">SuppressionOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.trackingOptionsInput">TrackingOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.vdmOptionsInput">VdmOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ArchivingOptions`<sup>Required</sup> <a name="ArchivingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.archivingOptions"></a>

```go
func ArchivingOptions() SesConfigurationSetArchivingOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference">SesConfigurationSetArchivingOptionsOutputReference</a>

---

##### `DeliveryOptions`<sup>Required</sup> <a name="DeliveryOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.deliveryOptions"></a>

```go
func DeliveryOptions() SesConfigurationSetDeliveryOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference">SesConfigurationSetDeliveryOptionsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ReputationOptions`<sup>Required</sup> <a name="ReputationOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.reputationOptions"></a>

```go
func ReputationOptions() SesConfigurationSetReputationOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference">SesConfigurationSetReputationOptionsOutputReference</a>

---

##### `SendingOptions`<sup>Required</sup> <a name="SendingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.sendingOptions"></a>

```go
func SendingOptions() SesConfigurationSetSendingOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference">SesConfigurationSetSendingOptionsOutputReference</a>

---

##### `SuppressionOptions`<sup>Required</sup> <a name="SuppressionOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.suppressionOptions"></a>

```go
func SuppressionOptions() SesConfigurationSetSuppressionOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference">SesConfigurationSetSuppressionOptionsOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.tags"></a>

```go
func Tags() SesConfigurationSetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList">SesConfigurationSetTagsList</a>

---

##### `TrackingOptions`<sup>Required</sup> <a name="TrackingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.trackingOptions"></a>

```go
func TrackingOptions() SesConfigurationSetTrackingOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference">SesConfigurationSetTrackingOptionsOutputReference</a>

---

##### `VdmOptions`<sup>Required</sup> <a name="VdmOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.vdmOptions"></a>

```go
func VdmOptions() SesConfigurationSetVdmOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference">SesConfigurationSetVdmOptionsOutputReference</a>

---

##### `ArchivingOptionsInput`<sup>Optional</sup> <a name="ArchivingOptionsInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.archivingOptionsInput"></a>

```go
func ArchivingOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `DeliveryOptionsInput`<sup>Optional</sup> <a name="DeliveryOptionsInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.deliveryOptionsInput"></a>

```go
func DeliveryOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ReputationOptionsInput`<sup>Optional</sup> <a name="ReputationOptionsInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.reputationOptionsInput"></a>

```go
func ReputationOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `SendingOptionsInput`<sup>Optional</sup> <a name="SendingOptionsInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.sendingOptionsInput"></a>

```go
func SendingOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `SuppressionOptionsInput`<sup>Optional</sup> <a name="SuppressionOptionsInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.suppressionOptionsInput"></a>

```go
func SuppressionOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TrackingOptionsInput`<sup>Optional</sup> <a name="TrackingOptionsInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.trackingOptionsInput"></a>

```go
func TrackingOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `VdmOptionsInput`<sup>Optional</sup> <a name="VdmOptionsInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.vdmOptionsInput"></a>

```go
func VdmOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SesConfigurationSetArchivingOptions <a name="SesConfigurationSetArchivingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesconfigurationset"

&sesconfigurationset.SesConfigurationSetArchivingOptions {
	ArchiveArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptions.property.archiveArn">ArchiveArn</a></code> | <code>*string</code> | The ARN of the MailManager archive to associate with the configuration set. |

---

##### `ArchiveArn`<sup>Optional</sup> <a name="ArchiveArn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptions.property.archiveArn"></a>

```go
ArchiveArn *string
```

- *Type:* *string

The ARN of the MailManager archive to associate with the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_configuration_set#archive_arn SesConfigurationSet#archive_arn}

---

### SesConfigurationSetConfig <a name="SesConfigurationSetConfig" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesconfigurationset"

&sesconfigurationset.SesConfigurationSetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ArchivingOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sesConfigurationSet.SesConfigurationSetArchivingOptions,
	DeliveryOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions,
	Name: *string,
	ReputationOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sesConfigurationSet.SesConfigurationSetReputationOptions,
	SendingOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sesConfigurationSet.SesConfigurationSetSendingOptions,
	SuppressionOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions,
	Tags: interface{},
	TrackingOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions,
	VdmOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sesConfigurationSet.SesConfigurationSetVdmOptions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.archivingOptions">ArchivingOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptions">SesConfigurationSetArchivingOptions</a></code> | An object that defines a MailManager archive that is used to preserve emails that you send using the configuration set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.deliveryOptions">DeliveryOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions">SesConfigurationSetDeliveryOptions</a></code> | An object that defines the dedicated IP pool that is used to send emails that you send using the configuration set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.name">Name</a></code> | <code>*string</code> | The name of the configuration set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.reputationOptions">ReputationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptions">SesConfigurationSetReputationOptions</a></code> | An object that defines whether or not Amazon SES collects reputation metrics for the emails that you send that use the configuration set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.sendingOptions">SendingOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptions">SesConfigurationSetSendingOptions</a></code> | An object that defines whether or not Amazon SES can send email that you send using the configuration set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.suppressionOptions">SuppressionOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions">SesConfigurationSetSuppressionOptions</a></code> | An object that contains information about the suppression list preferences for your account. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags (keys and values) associated with the contact list. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.trackingOptions">TrackingOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions">SesConfigurationSetTrackingOptions</a></code> | An object that defines the open and click tracking options for emails that you send using the configuration set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.vdmOptions">VdmOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions">SesConfigurationSetVdmOptions</a></code> | An object that contains Virtual Deliverability Manager (VDM) settings for this configuration set. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ArchivingOptions`<sup>Optional</sup> <a name="ArchivingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.archivingOptions"></a>

```go
ArchivingOptions SesConfigurationSetArchivingOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptions">SesConfigurationSetArchivingOptions</a>

An object that defines a MailManager archive that is used to preserve emails that you send using the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_configuration_set#archiving_options SesConfigurationSet#archiving_options}

---

##### `DeliveryOptions`<sup>Optional</sup> <a name="DeliveryOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.deliveryOptions"></a>

```go
DeliveryOptions SesConfigurationSetDeliveryOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions">SesConfigurationSetDeliveryOptions</a>

An object that defines the dedicated IP pool that is used to send emails that you send using the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_configuration_set#delivery_options SesConfigurationSet#delivery_options}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_configuration_set#name SesConfigurationSet#name}

---

##### `ReputationOptions`<sup>Optional</sup> <a name="ReputationOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.reputationOptions"></a>

```go
ReputationOptions SesConfigurationSetReputationOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptions">SesConfigurationSetReputationOptions</a>

An object that defines whether or not Amazon SES collects reputation metrics for the emails that you send that use the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_configuration_set#reputation_options SesConfigurationSet#reputation_options}

---

##### `SendingOptions`<sup>Optional</sup> <a name="SendingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.sendingOptions"></a>

```go
SendingOptions SesConfigurationSetSendingOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptions">SesConfigurationSetSendingOptions</a>

An object that defines whether or not Amazon SES can send email that you send using the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_configuration_set#sending_options SesConfigurationSet#sending_options}

---

##### `SuppressionOptions`<sup>Optional</sup> <a name="SuppressionOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.suppressionOptions"></a>

```go
SuppressionOptions SesConfigurationSetSuppressionOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions">SesConfigurationSetSuppressionOptions</a>

An object that contains information about the suppression list preferences for your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_configuration_set#suppression_options SesConfigurationSet#suppression_options}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags (keys and values) associated with the contact list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_configuration_set#tags SesConfigurationSet#tags}

---

##### `TrackingOptions`<sup>Optional</sup> <a name="TrackingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.trackingOptions"></a>

```go
TrackingOptions SesConfigurationSetTrackingOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions">SesConfigurationSetTrackingOptions</a>

An object that defines the open and click tracking options for emails that you send using the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_configuration_set#tracking_options SesConfigurationSet#tracking_options}

---

##### `VdmOptions`<sup>Optional</sup> <a name="VdmOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetConfig.property.vdmOptions"></a>

```go
VdmOptions SesConfigurationSetVdmOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions">SesConfigurationSetVdmOptions</a>

An object that contains Virtual Deliverability Manager (VDM) settings for this configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_configuration_set#vdm_options SesConfigurationSet#vdm_options}

---

### SesConfigurationSetDeliveryOptions <a name="SesConfigurationSetDeliveryOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesconfigurationset"

&sesconfigurationset.SesConfigurationSetDeliveryOptions {
	MaxDeliverySeconds: *f64,
	SendingPoolName: *string,
	TlsPolicy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions.property.maxDeliverySeconds">MaxDeliverySeconds</a></code> | <code>*f64</code> | Specifies the maximum time until which SES will retry sending emails. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions.property.sendingPoolName">SendingPoolName</a></code> | <code>*string</code> | The name of the dedicated IP pool to associate with the configuration set. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions.property.tlsPolicy">TlsPolicy</a></code> | <code>*string</code> | Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). |

---

##### `MaxDeliverySeconds`<sup>Optional</sup> <a name="MaxDeliverySeconds" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions.property.maxDeliverySeconds"></a>

```go
MaxDeliverySeconds *f64
```

- *Type:* *f64

Specifies the maximum time until which SES will retry sending emails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_configuration_set#max_delivery_seconds SesConfigurationSet#max_delivery_seconds}

---

##### `SendingPoolName`<sup>Optional</sup> <a name="SendingPoolName" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions.property.sendingPoolName"></a>

```go
SendingPoolName *string
```

- *Type:* *string

The name of the dedicated IP pool to associate with the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_configuration_set#sending_pool_name SesConfigurationSet#sending_pool_name}

---

##### `TlsPolicy`<sup>Optional</sup> <a name="TlsPolicy" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptions.property.tlsPolicy"></a>

```go
TlsPolicy *string
```

- *Type:* *string

Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS).

If the value is Require , messages are only delivered if a TLS connection can be established. If the value is Optional , messages can be delivered in plain text if a TLS connection can't be established.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_configuration_set#tls_policy SesConfigurationSet#tls_policy}

---

### SesConfigurationSetReputationOptions <a name="SesConfigurationSetReputationOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesconfigurationset"

&sesconfigurationset.SesConfigurationSetReputationOptions {
	ReputationMetricsEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptions.property.reputationMetricsEnabled">ReputationMetricsEnabled</a></code> | <code>interface{}</code> | If true , tracking of reputation metrics is enabled for the configuration set. |

---

##### `ReputationMetricsEnabled`<sup>Optional</sup> <a name="ReputationMetricsEnabled" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptions.property.reputationMetricsEnabled"></a>

```go
ReputationMetricsEnabled interface{}
```

- *Type:* interface{}

If true , tracking of reputation metrics is enabled for the configuration set.

If false , tracking of reputation metrics is disabled for the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_configuration_set#reputation_metrics_enabled SesConfigurationSet#reputation_metrics_enabled}

---

### SesConfigurationSetSendingOptions <a name="SesConfigurationSetSendingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesconfigurationset"

&sesconfigurationset.SesConfigurationSetSendingOptions {
	SendingEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptions.property.sendingEnabled">SendingEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_configuration_set#sending_enabled SesConfigurationSet#sending_enabled}. |

---

##### `SendingEnabled`<sup>Optional</sup> <a name="SendingEnabled" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptions.property.sendingEnabled"></a>

```go
SendingEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_configuration_set#sending_enabled SesConfigurationSet#sending_enabled}.

---

### SesConfigurationSetSuppressionOptions <a name="SesConfigurationSetSuppressionOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesconfigurationset"

&sesconfigurationset.SesConfigurationSetSuppressionOptions {
	SuppressedReasons: *[]*string,
	ValidationOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions.property.suppressedReasons">SuppressedReasons</a></code> | <code>*[]*string</code> | A list that contains the reasons that email addresses are automatically added to the suppression list for your account. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions.property.validationOptions">ValidationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptions">SesConfigurationSetSuppressionOptionsValidationOptions</a></code> | An object that contains information about the validation options for your account. |

---

##### `SuppressedReasons`<sup>Optional</sup> <a name="SuppressedReasons" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions.property.suppressedReasons"></a>

```go
SuppressedReasons *[]*string
```

- *Type:* *[]*string

A list that contains the reasons that email addresses are automatically added to the suppression list for your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_configuration_set#suppressed_reasons SesConfigurationSet#suppressed_reasons}

---

##### `ValidationOptions`<sup>Optional</sup> <a name="ValidationOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptions.property.validationOptions"></a>

```go
ValidationOptions SesConfigurationSetSuppressionOptionsValidationOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptions">SesConfigurationSetSuppressionOptionsValidationOptions</a>

An object that contains information about the validation options for your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_configuration_set#validation_options SesConfigurationSet#validation_options}

---

### SesConfigurationSetSuppressionOptionsValidationOptions <a name="SesConfigurationSetSuppressionOptionsValidationOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesconfigurationset"

&sesconfigurationset.SesConfigurationSetSuppressionOptionsValidationOptions {
	ConditionThreshold: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptions.property.conditionThreshold">ConditionThreshold</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold</a></code> | The condition threshold settings for suppression validation. |

---

##### `ConditionThreshold`<sup>Optional</sup> <a name="ConditionThreshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptions.property.conditionThreshold"></a>

```go
ConditionThreshold SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold</a>

The condition threshold settings for suppression validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_configuration_set#condition_threshold SesConfigurationSet#condition_threshold}

---

### SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold <a name="SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesconfigurationset"

&sesconfigurationset.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold {
	ConditionThresholdEnabled: *string,
	OverallConfidenceThreshold: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold.property.conditionThresholdEnabled">ConditionThresholdEnabled</a></code> | <code>*string</code> | Whether the condition threshold is enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold.property.overallConfidenceThreshold">OverallConfidenceThreshold</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold</a></code> | The overall confidence threshold settings. |

---

##### `ConditionThresholdEnabled`<sup>Optional</sup> <a name="ConditionThresholdEnabled" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold.property.conditionThresholdEnabled"></a>

```go
ConditionThresholdEnabled *string
```

- *Type:* *string

Whether the condition threshold is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_configuration_set#condition_threshold_enabled SesConfigurationSet#condition_threshold_enabled}

---

##### `OverallConfidenceThreshold`<sup>Optional</sup> <a name="OverallConfidenceThreshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold.property.overallConfidenceThreshold"></a>

```go
OverallConfidenceThreshold SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold</a>

The overall confidence threshold settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_configuration_set#overall_confidence_threshold SesConfigurationSet#overall_confidence_threshold}

---

### SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold <a name="SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesconfigurationset"

&sesconfigurationset.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold {
	ConfidenceVerdictThreshold: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold.property.confidenceVerdictThreshold">ConfidenceVerdictThreshold</a></code> | <code>*string</code> | The confidence verdict threshold level. |

---

##### `ConfidenceVerdictThreshold`<sup>Optional</sup> <a name="ConfidenceVerdictThreshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold.property.confidenceVerdictThreshold"></a>

```go
ConfidenceVerdictThreshold *string
```

- *Type:* *string

The confidence verdict threshold level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_configuration_set#confidence_verdict_threshold SesConfigurationSet#confidence_verdict_threshold}

---

### SesConfigurationSetTags <a name="SesConfigurationSetTags" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesconfigurationset"

&sesconfigurationset.SesConfigurationSetTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_configuration_set#key SesConfigurationSet#key}. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_configuration_set#value SesConfigurationSet#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_configuration_set#key SesConfigurationSet#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_configuration_set#value SesConfigurationSet#value}.

---

### SesConfigurationSetTrackingOptions <a name="SesConfigurationSetTrackingOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesconfigurationset"

&sesconfigurationset.SesConfigurationSetTrackingOptions {
	CustomRedirectDomain: *string,
	HttpsPolicy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions.property.customRedirectDomain">CustomRedirectDomain</a></code> | <code>*string</code> | The domain to use for tracking open and click events. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions.property.httpsPolicy">HttpsPolicy</a></code> | <code>*string</code> | The https policy to use for tracking open and click events. |

---

##### `CustomRedirectDomain`<sup>Optional</sup> <a name="CustomRedirectDomain" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions.property.customRedirectDomain"></a>

```go
CustomRedirectDomain *string
```

- *Type:* *string

The domain to use for tracking open and click events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_configuration_set#custom_redirect_domain SesConfigurationSet#custom_redirect_domain}

---

##### `HttpsPolicy`<sup>Optional</sup> <a name="HttpsPolicy" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptions.property.httpsPolicy"></a>

```go
HttpsPolicy *string
```

- *Type:* *string

The https policy to use for tracking open and click events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_configuration_set#https_policy SesConfigurationSet#https_policy}

---

### SesConfigurationSetVdmOptions <a name="SesConfigurationSetVdmOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesconfigurationset"

&sesconfigurationset.SesConfigurationSetVdmOptions {
	DashboardOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptions,
	GuardianOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions.property.dashboardOptions">DashboardOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptions">SesConfigurationSetVdmOptionsDashboardOptions</a></code> | Preferences regarding the Dashboard feature. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions.property.guardianOptions">GuardianOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptions">SesConfigurationSetVdmOptionsGuardianOptions</a></code> | Preferences regarding the Guardian feature. |

---

##### `DashboardOptions`<sup>Optional</sup> <a name="DashboardOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions.property.dashboardOptions"></a>

```go
DashboardOptions SesConfigurationSetVdmOptionsDashboardOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptions">SesConfigurationSetVdmOptionsDashboardOptions</a>

Preferences regarding the Dashboard feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_configuration_set#dashboard_options SesConfigurationSet#dashboard_options}

---

##### `GuardianOptions`<sup>Optional</sup> <a name="GuardianOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptions.property.guardianOptions"></a>

```go
GuardianOptions SesConfigurationSetVdmOptionsGuardianOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptions">SesConfigurationSetVdmOptionsGuardianOptions</a>

Preferences regarding the Guardian feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_configuration_set#guardian_options SesConfigurationSet#guardian_options}

---

### SesConfigurationSetVdmOptionsDashboardOptions <a name="SesConfigurationSetVdmOptionsDashboardOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesconfigurationset"

&sesconfigurationset.SesConfigurationSetVdmOptionsDashboardOptions {
	EngagementMetrics: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptions.property.engagementMetrics">EngagementMetrics</a></code> | <code>*string</code> | Whether emails sent with this configuration set have engagement tracking enabled. |

---

##### `EngagementMetrics`<sup>Optional</sup> <a name="EngagementMetrics" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptions.property.engagementMetrics"></a>

```go
EngagementMetrics *string
```

- *Type:* *string

Whether emails sent with this configuration set have engagement tracking enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_configuration_set#engagement_metrics SesConfigurationSet#engagement_metrics}

---

### SesConfigurationSetVdmOptionsGuardianOptions <a name="SesConfigurationSetVdmOptionsGuardianOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesconfigurationset"

&sesconfigurationset.SesConfigurationSetVdmOptionsGuardianOptions {
	OptimizedSharedDelivery: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptions.property.optimizedSharedDelivery">OptimizedSharedDelivery</a></code> | <code>*string</code> | Whether emails sent with this configuration set have optimized delivery algorithm enabled. |

---

##### `OptimizedSharedDelivery`<sup>Optional</sup> <a name="OptimizedSharedDelivery" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptions.property.optimizedSharedDelivery"></a>

```go
OptimizedSharedDelivery *string
```

- *Type:* *string

Whether emails sent with this configuration set have optimized delivery algorithm enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ses_configuration_set#optimized_shared_delivery SesConfigurationSet#optimized_shared_delivery}

---

## Classes <a name="Classes" id="Classes"></a>

### SesConfigurationSetArchivingOptionsOutputReference <a name="SesConfigurationSetArchivingOptionsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesconfigurationset"

sesconfigurationset.NewSesConfigurationSetArchivingOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SesConfigurationSetArchivingOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.resetArchiveArn">ResetArchiveArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArchiveArn` <a name="ResetArchiveArn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.resetArchiveArn"></a>

```go
func ResetArchiveArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.property.archiveArnInput">ArchiveArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.property.archiveArn">ArchiveArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArchiveArnInput`<sup>Optional</sup> <a name="ArchiveArnInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.property.archiveArnInput"></a>

```go
func ArchiveArnInput() *string
```

- *Type:* *string

---

##### `ArchiveArn`<sup>Required</sup> <a name="ArchiveArn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.property.archiveArn"></a>

```go
func ArchiveArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetArchivingOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SesConfigurationSetDeliveryOptionsOutputReference <a name="SesConfigurationSetDeliveryOptionsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesconfigurationset"

sesconfigurationset.NewSesConfigurationSetDeliveryOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SesConfigurationSetDeliveryOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resetMaxDeliverySeconds">ResetMaxDeliverySeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resetSendingPoolName">ResetSendingPoolName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resetTlsPolicy">ResetTlsPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxDeliverySeconds` <a name="ResetMaxDeliverySeconds" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resetMaxDeliverySeconds"></a>

```go
func ResetMaxDeliverySeconds()
```

##### `ResetSendingPoolName` <a name="ResetSendingPoolName" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resetSendingPoolName"></a>

```go
func ResetSendingPoolName()
```

##### `ResetTlsPolicy` <a name="ResetTlsPolicy" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.resetTlsPolicy"></a>

```go
func ResetTlsPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.maxDeliverySecondsInput">MaxDeliverySecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.sendingPoolNameInput">SendingPoolNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.tlsPolicyInput">TlsPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.maxDeliverySeconds">MaxDeliverySeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.sendingPoolName">SendingPoolName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.tlsPolicy">TlsPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxDeliverySecondsInput`<sup>Optional</sup> <a name="MaxDeliverySecondsInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.maxDeliverySecondsInput"></a>

```go
func MaxDeliverySecondsInput() *f64
```

- *Type:* *f64

---

##### `SendingPoolNameInput`<sup>Optional</sup> <a name="SendingPoolNameInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.sendingPoolNameInput"></a>

```go
func SendingPoolNameInput() *string
```

- *Type:* *string

---

##### `TlsPolicyInput`<sup>Optional</sup> <a name="TlsPolicyInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.tlsPolicyInput"></a>

```go
func TlsPolicyInput() *string
```

- *Type:* *string

---

##### `MaxDeliverySeconds`<sup>Required</sup> <a name="MaxDeliverySeconds" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.maxDeliverySeconds"></a>

```go
func MaxDeliverySeconds() *f64
```

- *Type:* *f64

---

##### `SendingPoolName`<sup>Required</sup> <a name="SendingPoolName" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.sendingPoolName"></a>

```go
func SendingPoolName() *string
```

- *Type:* *string

---

##### `TlsPolicy`<sup>Required</sup> <a name="TlsPolicy" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.tlsPolicy"></a>

```go
func TlsPolicy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetDeliveryOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SesConfigurationSetReputationOptionsOutputReference <a name="SesConfigurationSetReputationOptionsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesconfigurationset"

sesconfigurationset.NewSesConfigurationSetReputationOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SesConfigurationSetReputationOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.resetReputationMetricsEnabled">ResetReputationMetricsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReputationMetricsEnabled` <a name="ResetReputationMetricsEnabled" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.resetReputationMetricsEnabled"></a>

```go
func ResetReputationMetricsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.property.reputationMetricsEnabledInput">ReputationMetricsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.property.reputationMetricsEnabled">ReputationMetricsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReputationMetricsEnabledInput`<sup>Optional</sup> <a name="ReputationMetricsEnabledInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.property.reputationMetricsEnabledInput"></a>

```go
func ReputationMetricsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ReputationMetricsEnabled`<sup>Required</sup> <a name="ReputationMetricsEnabled" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.property.reputationMetricsEnabled"></a>

```go
func ReputationMetricsEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetReputationOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SesConfigurationSetSendingOptionsOutputReference <a name="SesConfigurationSetSendingOptionsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesconfigurationset"

sesconfigurationset.NewSesConfigurationSetSendingOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SesConfigurationSetSendingOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.resetSendingEnabled">ResetSendingEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSendingEnabled` <a name="ResetSendingEnabled" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.resetSendingEnabled"></a>

```go
func ResetSendingEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.property.sendingEnabledInput">SendingEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.property.sendingEnabled">SendingEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SendingEnabledInput`<sup>Optional</sup> <a name="SendingEnabledInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.property.sendingEnabledInput"></a>

```go
func SendingEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SendingEnabled`<sup>Required</sup> <a name="SendingEnabled" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.property.sendingEnabled"></a>

```go
func SendingEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSendingOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SesConfigurationSetSuppressionOptionsOutputReference <a name="SesConfigurationSetSuppressionOptionsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesconfigurationset"

sesconfigurationset.NewSesConfigurationSetSuppressionOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SesConfigurationSetSuppressionOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.putValidationOptions">PutValidationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.resetSuppressedReasons">ResetSuppressedReasons</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.resetValidationOptions">ResetValidationOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValidationOptions` <a name="PutValidationOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.putValidationOptions"></a>

```go
func PutValidationOptions(value SesConfigurationSetSuppressionOptionsValidationOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.putValidationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptions">SesConfigurationSetSuppressionOptionsValidationOptions</a>

---

##### `ResetSuppressedReasons` <a name="ResetSuppressedReasons" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.resetSuppressedReasons"></a>

```go
func ResetSuppressedReasons()
```

##### `ResetValidationOptions` <a name="ResetValidationOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.resetValidationOptions"></a>

```go
func ResetValidationOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.validationOptions">ValidationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference">SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.suppressedReasonsInput">SuppressedReasonsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.validationOptionsInput">ValidationOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.suppressedReasons">SuppressedReasons</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValidationOptions`<sup>Required</sup> <a name="ValidationOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.validationOptions"></a>

```go
func ValidationOptions() SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference">SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference</a>

---

##### `SuppressedReasonsInput`<sup>Optional</sup> <a name="SuppressedReasonsInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.suppressedReasonsInput"></a>

```go
func SuppressedReasonsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValidationOptionsInput`<sup>Optional</sup> <a name="ValidationOptionsInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.validationOptionsInput"></a>

```go
func ValidationOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `SuppressedReasons`<sup>Required</sup> <a name="SuppressedReasons" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.suppressedReasons"></a>

```go
func SuppressedReasons() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference <a name="SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesconfigurationset"

sesconfigurationset.NewSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.putOverallConfidenceThreshold">PutOverallConfidenceThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.resetConditionThresholdEnabled">ResetConditionThresholdEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.resetOverallConfidenceThreshold">ResetOverallConfidenceThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOverallConfidenceThreshold` <a name="PutOverallConfidenceThreshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.putOverallConfidenceThreshold"></a>

```go
func PutOverallConfidenceThreshold(value SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.putOverallConfidenceThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold</a>

---

##### `ResetConditionThresholdEnabled` <a name="ResetConditionThresholdEnabled" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.resetConditionThresholdEnabled"></a>

```go
func ResetConditionThresholdEnabled()
```

##### `ResetOverallConfidenceThreshold` <a name="ResetOverallConfidenceThreshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.resetOverallConfidenceThreshold"></a>

```go
func ResetOverallConfidenceThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.overallConfidenceThreshold">OverallConfidenceThreshold</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.conditionThresholdEnabledInput">ConditionThresholdEnabledInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.overallConfidenceThresholdInput">OverallConfidenceThresholdInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.conditionThresholdEnabled">ConditionThresholdEnabled</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OverallConfidenceThreshold`<sup>Required</sup> <a name="OverallConfidenceThreshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.overallConfidenceThreshold"></a>

```go
func OverallConfidenceThreshold() SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference</a>

---

##### `ConditionThresholdEnabledInput`<sup>Optional</sup> <a name="ConditionThresholdEnabledInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.conditionThresholdEnabledInput"></a>

```go
func ConditionThresholdEnabledInput() *string
```

- *Type:* *string

---

##### `OverallConfidenceThresholdInput`<sup>Optional</sup> <a name="OverallConfidenceThresholdInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.overallConfidenceThresholdInput"></a>

```go
func OverallConfidenceThresholdInput() interface{}
```

- *Type:* interface{}

---

##### `ConditionThresholdEnabled`<sup>Required</sup> <a name="ConditionThresholdEnabled" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.conditionThresholdEnabled"></a>

```go
func ConditionThresholdEnabled() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference <a name="SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesconfigurationset"

sesconfigurationset.NewSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.resetConfidenceVerdictThreshold">ResetConfidenceVerdictThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfidenceVerdictThreshold` <a name="ResetConfidenceVerdictThreshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.resetConfidenceVerdictThreshold"></a>

```go
func ResetConfidenceVerdictThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.confidenceVerdictThresholdInput">ConfidenceVerdictThresholdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.confidenceVerdictThreshold">ConfidenceVerdictThreshold</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfidenceVerdictThresholdInput`<sup>Optional</sup> <a name="ConfidenceVerdictThresholdInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.confidenceVerdictThresholdInput"></a>

```go
func ConfidenceVerdictThresholdInput() *string
```

- *Type:* *string

---

##### `ConfidenceVerdictThreshold`<sup>Required</sup> <a name="ConfidenceVerdictThreshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.confidenceVerdictThreshold"></a>

```go
func ConfidenceVerdictThreshold() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference <a name="SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesconfigurationset"

sesconfigurationset.NewSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.putConditionThreshold">PutConditionThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.resetConditionThreshold">ResetConditionThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditionThreshold` <a name="PutConditionThreshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.putConditionThreshold"></a>

```go
func PutConditionThreshold(value SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.putConditionThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold</a>

---

##### `ResetConditionThreshold` <a name="ResetConditionThreshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.resetConditionThreshold"></a>

```go
func ResetConditionThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.conditionThreshold">ConditionThreshold</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.conditionThresholdInput">ConditionThresholdInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConditionThreshold`<sup>Required</sup> <a name="ConditionThreshold" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.conditionThreshold"></a>

```go
func ConditionThreshold() SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference">SesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference</a>

---

##### `ConditionThresholdInput`<sup>Optional</sup> <a name="ConditionThresholdInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.conditionThresholdInput"></a>

```go
func ConditionThresholdInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SesConfigurationSetTagsList <a name="SesConfigurationSetTagsList" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesconfigurationset"

sesconfigurationset.NewSesConfigurationSetTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SesConfigurationSetTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.get"></a>

```go
func Get(index *f64) SesConfigurationSetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SesConfigurationSetTagsOutputReference <a name="SesConfigurationSetTagsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesconfigurationset"

sesconfigurationset.NewSesConfigurationSetTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SesConfigurationSetTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SesConfigurationSetTrackingOptionsOutputReference <a name="SesConfigurationSetTrackingOptionsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesconfigurationset"

sesconfigurationset.NewSesConfigurationSetTrackingOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SesConfigurationSetTrackingOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.resetCustomRedirectDomain">ResetCustomRedirectDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.resetHttpsPolicy">ResetHttpsPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomRedirectDomain` <a name="ResetCustomRedirectDomain" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.resetCustomRedirectDomain"></a>

```go
func ResetCustomRedirectDomain()
```

##### `ResetHttpsPolicy` <a name="ResetHttpsPolicy" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.resetHttpsPolicy"></a>

```go
func ResetHttpsPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.customRedirectDomainInput">CustomRedirectDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.httpsPolicyInput">HttpsPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.customRedirectDomain">CustomRedirectDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.httpsPolicy">HttpsPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomRedirectDomainInput`<sup>Optional</sup> <a name="CustomRedirectDomainInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.customRedirectDomainInput"></a>

```go
func CustomRedirectDomainInput() *string
```

- *Type:* *string

---

##### `HttpsPolicyInput`<sup>Optional</sup> <a name="HttpsPolicyInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.httpsPolicyInput"></a>

```go
func HttpsPolicyInput() *string
```

- *Type:* *string

---

##### `CustomRedirectDomain`<sup>Required</sup> <a name="CustomRedirectDomain" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.customRedirectDomain"></a>

```go
func CustomRedirectDomain() *string
```

- *Type:* *string

---

##### `HttpsPolicy`<sup>Required</sup> <a name="HttpsPolicy" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.httpsPolicy"></a>

```go
func HttpsPolicy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetTrackingOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SesConfigurationSetVdmOptionsDashboardOptionsOutputReference <a name="SesConfigurationSetVdmOptionsDashboardOptionsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesconfigurationset"

sesconfigurationset.NewSesConfigurationSetVdmOptionsDashboardOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SesConfigurationSetVdmOptionsDashboardOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.resetEngagementMetrics">ResetEngagementMetrics</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEngagementMetrics` <a name="ResetEngagementMetrics" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.resetEngagementMetrics"></a>

```go
func ResetEngagementMetrics()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.engagementMetricsInput">EngagementMetricsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.engagementMetrics">EngagementMetrics</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EngagementMetricsInput`<sup>Optional</sup> <a name="EngagementMetricsInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.engagementMetricsInput"></a>

```go
func EngagementMetricsInput() *string
```

- *Type:* *string

---

##### `EngagementMetrics`<sup>Required</sup> <a name="EngagementMetrics" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.engagementMetrics"></a>

```go
func EngagementMetrics() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SesConfigurationSetVdmOptionsGuardianOptionsOutputReference <a name="SesConfigurationSetVdmOptionsGuardianOptionsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesconfigurationset"

sesconfigurationset.NewSesConfigurationSetVdmOptionsGuardianOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SesConfigurationSetVdmOptionsGuardianOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.resetOptimizedSharedDelivery">ResetOptimizedSharedDelivery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOptimizedSharedDelivery` <a name="ResetOptimizedSharedDelivery" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.resetOptimizedSharedDelivery"></a>

```go
func ResetOptimizedSharedDelivery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.optimizedSharedDeliveryInput">OptimizedSharedDeliveryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.optimizedSharedDelivery">OptimizedSharedDelivery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OptimizedSharedDeliveryInput`<sup>Optional</sup> <a name="OptimizedSharedDeliveryInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.optimizedSharedDeliveryInput"></a>

```go
func OptimizedSharedDeliveryInput() *string
```

- *Type:* *string

---

##### `OptimizedSharedDelivery`<sup>Required</sup> <a name="OptimizedSharedDelivery" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.optimizedSharedDelivery"></a>

```go
func OptimizedSharedDelivery() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SesConfigurationSetVdmOptionsOutputReference <a name="SesConfigurationSetVdmOptionsOutputReference" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesconfigurationset"

sesconfigurationset.NewSesConfigurationSetVdmOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SesConfigurationSetVdmOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.putDashboardOptions">PutDashboardOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.putGuardianOptions">PutGuardianOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.resetDashboardOptions">ResetDashboardOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.resetGuardianOptions">ResetGuardianOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDashboardOptions` <a name="PutDashboardOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.putDashboardOptions"></a>

```go
func PutDashboardOptions(value SesConfigurationSetVdmOptionsDashboardOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.putDashboardOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptions">SesConfigurationSetVdmOptionsDashboardOptions</a>

---

##### `PutGuardianOptions` <a name="PutGuardianOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.putGuardianOptions"></a>

```go
func PutGuardianOptions(value SesConfigurationSetVdmOptionsGuardianOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.putGuardianOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptions">SesConfigurationSetVdmOptionsGuardianOptions</a>

---

##### `ResetDashboardOptions` <a name="ResetDashboardOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.resetDashboardOptions"></a>

```go
func ResetDashboardOptions()
```

##### `ResetGuardianOptions` <a name="ResetGuardianOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.resetGuardianOptions"></a>

```go
func ResetGuardianOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.dashboardOptions">DashboardOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference">SesConfigurationSetVdmOptionsDashboardOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.guardianOptions">GuardianOptions</a></code> | <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference">SesConfigurationSetVdmOptionsGuardianOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.dashboardOptionsInput">DashboardOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.guardianOptionsInput">GuardianOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DashboardOptions`<sup>Required</sup> <a name="DashboardOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.dashboardOptions"></a>

```go
func DashboardOptions() SesConfigurationSetVdmOptionsDashboardOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsDashboardOptionsOutputReference">SesConfigurationSetVdmOptionsDashboardOptionsOutputReference</a>

---

##### `GuardianOptions`<sup>Required</sup> <a name="GuardianOptions" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.guardianOptions"></a>

```go
func GuardianOptions() SesConfigurationSetVdmOptionsGuardianOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsGuardianOptionsOutputReference">SesConfigurationSetVdmOptionsGuardianOptionsOutputReference</a>

---

##### `DashboardOptionsInput`<sup>Optional</sup> <a name="DashboardOptionsInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.dashboardOptionsInput"></a>

```go
func DashboardOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `GuardianOptionsInput`<sup>Optional</sup> <a name="GuardianOptionsInput" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.guardianOptionsInput"></a>

```go
func GuardianOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesConfigurationSet.SesConfigurationSetVdmOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



