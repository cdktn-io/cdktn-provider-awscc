# `iotSecurityProfile` Submodule <a name="`iotSecurityProfile` Submodule" id="@cdktn/provider-awscc.iotSecurityProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotSecurityProfile <a name="IotSecurityProfile" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile awscc_iot_security_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsecurityprofile"

iotsecurityprofile.NewIotSecurityProfile(scope Construct, id *string, config IotSecurityProfileConfig) IotSecurityProfile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig">IotSecurityProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig">IotSecurityProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putAdditionalMetricsToRetainV2">PutAdditionalMetricsToRetainV2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putAlertTargets">PutAlertTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putBehaviors">PutBehaviors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putMetricsExportConfig">PutMetricsExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetAdditionalMetricsToRetainV2">ResetAdditionalMetricsToRetainV2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetAlertTargets">ResetAlertTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetBehaviors">ResetBehaviors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetMetricsExportConfig">ResetMetricsExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetSecurityProfileDescription">ResetSecurityProfileDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetSecurityProfileName">ResetSecurityProfileName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetTargetArns">ResetTargetArns</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdditionalMetricsToRetainV2` <a name="PutAdditionalMetricsToRetainV2" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putAdditionalMetricsToRetainV2"></a>

```go
func PutAdditionalMetricsToRetainV2(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putAdditionalMetricsToRetainV2.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAlertTargets` <a name="PutAlertTargets" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putAlertTargets"></a>

```go
func PutAlertTargets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putAlertTargets.parameter.value"></a>

- *Type:* interface{}

---

##### `PutBehaviors` <a name="PutBehaviors" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putBehaviors"></a>

```go
func PutBehaviors(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putBehaviors.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMetricsExportConfig` <a name="PutMetricsExportConfig" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putMetricsExportConfig"></a>

```go
func PutMetricsExportConfig(value IotSecurityProfileMetricsExportConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putMetricsExportConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig">IotSecurityProfileMetricsExportConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAdditionalMetricsToRetainV2` <a name="ResetAdditionalMetricsToRetainV2" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetAdditionalMetricsToRetainV2"></a>

```go
func ResetAdditionalMetricsToRetainV2()
```

##### `ResetAlertTargets` <a name="ResetAlertTargets" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetAlertTargets"></a>

```go
func ResetAlertTargets()
```

##### `ResetBehaviors` <a name="ResetBehaviors" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetBehaviors"></a>

```go
func ResetBehaviors()
```

##### `ResetMetricsExportConfig` <a name="ResetMetricsExportConfig" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetMetricsExportConfig"></a>

```go
func ResetMetricsExportConfig()
```

##### `ResetSecurityProfileDescription` <a name="ResetSecurityProfileDescription" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetSecurityProfileDescription"></a>

```go
func ResetSecurityProfileDescription()
```

##### `ResetSecurityProfileName` <a name="ResetSecurityProfileName" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetSecurityProfileName"></a>

```go
func ResetSecurityProfileName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTargetArns` <a name="ResetTargetArns" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetTargetArns"></a>

```go
func ResetTargetArns()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IotSecurityProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsecurityprofile"

iotsecurityprofile.IotSecurityProfile_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsecurityprofile"

iotsecurityprofile.IotSecurityProfile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsecurityprofile"

iotsecurityprofile.IotSecurityProfile_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsecurityprofile"

iotsecurityprofile.IotSecurityProfile_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a IotSecurityProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IotSecurityProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IotSecurityProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the IotSecurityProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.additionalMetricsToRetainV2">AdditionalMetricsToRetainV2</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List">IotSecurityProfileAdditionalMetricsToRetainV2List</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.alertTargets">AlertTargets</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap">IotSecurityProfileAlertTargetsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.behaviors">Behaviors</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList">IotSecurityProfileBehaviorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.metricsExportConfig">MetricsExportConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference">IotSecurityProfileMetricsExportConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.securityProfileArn">SecurityProfileArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList">IotSecurityProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.additionalMetricsToRetainV2Input">AdditionalMetricsToRetainV2Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.alertTargetsInput">AlertTargetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.behaviorsInput">BehaviorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.metricsExportConfigInput">MetricsExportConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.securityProfileDescriptionInput">SecurityProfileDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.securityProfileNameInput">SecurityProfileNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.targetArnsInput">TargetArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.securityProfileDescription">SecurityProfileDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.securityProfileName">SecurityProfileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.targetArns">TargetArns</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdditionalMetricsToRetainV2`<sup>Required</sup> <a name="AdditionalMetricsToRetainV2" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.additionalMetricsToRetainV2"></a>

```go
func AdditionalMetricsToRetainV2() IotSecurityProfileAdditionalMetricsToRetainV2List
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List">IotSecurityProfileAdditionalMetricsToRetainV2List</a>

---

##### `AlertTargets`<sup>Required</sup> <a name="AlertTargets" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.alertTargets"></a>

```go
func AlertTargets() IotSecurityProfileAlertTargetsMap
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap">IotSecurityProfileAlertTargetsMap</a>

---

##### `Behaviors`<sup>Required</sup> <a name="Behaviors" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.behaviors"></a>

```go
func Behaviors() IotSecurityProfileBehaviorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList">IotSecurityProfileBehaviorsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MetricsExportConfig`<sup>Required</sup> <a name="MetricsExportConfig" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.metricsExportConfig"></a>

```go
func MetricsExportConfig() IotSecurityProfileMetricsExportConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference">IotSecurityProfileMetricsExportConfigOutputReference</a>

---

##### `SecurityProfileArn`<sup>Required</sup> <a name="SecurityProfileArn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.securityProfileArn"></a>

```go
func SecurityProfileArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.tags"></a>

```go
func Tags() IotSecurityProfileTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList">IotSecurityProfileTagsList</a>

---

##### `AdditionalMetricsToRetainV2Input`<sup>Optional</sup> <a name="AdditionalMetricsToRetainV2Input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.additionalMetricsToRetainV2Input"></a>

```go
func AdditionalMetricsToRetainV2Input() interface{}
```

- *Type:* interface{}

---

##### `AlertTargetsInput`<sup>Optional</sup> <a name="AlertTargetsInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.alertTargetsInput"></a>

```go
func AlertTargetsInput() interface{}
```

- *Type:* interface{}

---

##### `BehaviorsInput`<sup>Optional</sup> <a name="BehaviorsInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.behaviorsInput"></a>

```go
func BehaviorsInput() interface{}
```

- *Type:* interface{}

---

##### `MetricsExportConfigInput`<sup>Optional</sup> <a name="MetricsExportConfigInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.metricsExportConfigInput"></a>

```go
func MetricsExportConfigInput() interface{}
```

- *Type:* interface{}

---

##### `SecurityProfileDescriptionInput`<sup>Optional</sup> <a name="SecurityProfileDescriptionInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.securityProfileDescriptionInput"></a>

```go
func SecurityProfileDescriptionInput() *string
```

- *Type:* *string

---

##### `SecurityProfileNameInput`<sup>Optional</sup> <a name="SecurityProfileNameInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.securityProfileNameInput"></a>

```go
func SecurityProfileNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TargetArnsInput`<sup>Optional</sup> <a name="TargetArnsInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.targetArnsInput"></a>

```go
func TargetArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityProfileDescription`<sup>Required</sup> <a name="SecurityProfileDescription" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.securityProfileDescription"></a>

```go
func SecurityProfileDescription() *string
```

- *Type:* *string

---

##### `SecurityProfileName`<sup>Required</sup> <a name="SecurityProfileName" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.securityProfileName"></a>

```go
func SecurityProfileName() *string
```

- *Type:* *string

---

##### `TargetArns`<sup>Required</sup> <a name="TargetArns" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.targetArns"></a>

```go
func TargetArns() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IotSecurityProfileAdditionalMetricsToRetainV2 <a name="IotSecurityProfileAdditionalMetricsToRetainV2" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsecurityprofile"

&iotsecurityprofile.IotSecurityProfileAdditionalMetricsToRetainV2 {
	ExportMetric: interface{},
	Metric: *string,
	MetricDimension: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2.property.exportMetric">ExportMetric</a></code> | <code>interface{}</code> | Flag to enable/disable metrics export for metric to be retained. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2.property.metric">Metric</a></code> | <code>*string</code> | What is measured by the behavior. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2.property.metricDimension">MetricDimension</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension">IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension</a></code> | The dimension of a metric. |

---

##### `ExportMetric`<sup>Optional</sup> <a name="ExportMetric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2.property.exportMetric"></a>

```go
ExportMetric interface{}
```

- *Type:* interface{}

Flag to enable/disable metrics export for metric to be retained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#export_metric IotSecurityProfile#export_metric}

---

##### `Metric`<sup>Optional</sup> <a name="Metric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2.property.metric"></a>

```go
Metric *string
```

- *Type:* *string

What is measured by the behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#metric IotSecurityProfile#metric}

---

##### `MetricDimension`<sup>Optional</sup> <a name="MetricDimension" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2.property.metricDimension"></a>

```go
MetricDimension IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension">IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension</a>

The dimension of a metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#metric_dimension IotSecurityProfile#metric_dimension}

---

### IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension <a name="IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsecurityprofile"

&iotsecurityprofile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension {
	DimensionName: *string,
	Operator: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension.property.dimensionName">DimensionName</a></code> | <code>*string</code> | A unique identifier for the dimension. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension.property.operator">Operator</a></code> | <code>*string</code> | Defines how the dimensionValues of a dimension are interpreted. |

---

##### `DimensionName`<sup>Optional</sup> <a name="DimensionName" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension.property.dimensionName"></a>

```go
DimensionName *string
```

- *Type:* *string

A unique identifier for the dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#dimension_name IotSecurityProfile#dimension_name}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Defines how the dimensionValues of a dimension are interpreted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#operator IotSecurityProfile#operator}

---

### IotSecurityProfileAlertTargets <a name="IotSecurityProfileAlertTargets" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsecurityprofile"

&iotsecurityprofile.IotSecurityProfileAlertTargets {
	AlertTargetArn: *string,
	RoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets.property.alertTargetArn">AlertTargetArn</a></code> | <code>*string</code> | The ARN of the notification target to which alerts are sent. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets.property.roleArn">RoleArn</a></code> | <code>*string</code> | The ARN of the role that grants permission to send alerts to the notification target. |

---

##### `AlertTargetArn`<sup>Optional</sup> <a name="AlertTargetArn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets.property.alertTargetArn"></a>

```go
AlertTargetArn *string
```

- *Type:* *string

The ARN of the notification target to which alerts are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#alert_target_arn IotSecurityProfile#alert_target_arn}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The ARN of the role that grants permission to send alerts to the notification target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#role_arn IotSecurityProfile#role_arn}

---

### IotSecurityProfileBehaviors <a name="IotSecurityProfileBehaviors" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsecurityprofile"

&iotsecurityprofile.IotSecurityProfileBehaviors {
	Criteria: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria,
	ExportMetric: interface{},
	Metric: *string,
	MetricDimension: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension,
	Name: *string,
	SuppressAlerts: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.criteria">Criteria</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria">IotSecurityProfileBehaviorsCriteria</a></code> | The criteria by which the behavior is determined to be normal. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.exportMetric">ExportMetric</a></code> | <code>interface{}</code> | Flag to enable/disable metrics export for metric to be retained. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.metric">Metric</a></code> | <code>*string</code> | What is measured by the behavior. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.metricDimension">MetricDimension</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension">IotSecurityProfileBehaviorsMetricDimension</a></code> | The dimension of a metric. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.name">Name</a></code> | <code>*string</code> | The name for the behavior. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.suppressAlerts">SuppressAlerts</a></code> | <code>interface{}</code> | Manage Detect alarm SNS notifications by setting behavior notification to on or suppressed. |

---

##### `Criteria`<sup>Optional</sup> <a name="Criteria" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.criteria"></a>

```go
Criteria IotSecurityProfileBehaviorsCriteria
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria">IotSecurityProfileBehaviorsCriteria</a>

The criteria by which the behavior is determined to be normal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#criteria IotSecurityProfile#criteria}

---

##### `ExportMetric`<sup>Optional</sup> <a name="ExportMetric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.exportMetric"></a>

```go
ExportMetric interface{}
```

- *Type:* interface{}

Flag to enable/disable metrics export for metric to be retained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#export_metric IotSecurityProfile#export_metric}

---

##### `Metric`<sup>Optional</sup> <a name="Metric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.metric"></a>

```go
Metric *string
```

- *Type:* *string

What is measured by the behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#metric IotSecurityProfile#metric}

---

##### `MetricDimension`<sup>Optional</sup> <a name="MetricDimension" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.metricDimension"></a>

```go
MetricDimension IotSecurityProfileBehaviorsMetricDimension
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension">IotSecurityProfileBehaviorsMetricDimension</a>

The dimension of a metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#metric_dimension IotSecurityProfile#metric_dimension}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name for the behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#name IotSecurityProfile#name}

---

##### `SuppressAlerts`<sup>Optional</sup> <a name="SuppressAlerts" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.suppressAlerts"></a>

```go
SuppressAlerts interface{}
```

- *Type:* interface{}

Manage Detect alarm SNS notifications by setting behavior notification to on or suppressed.

Detect will continue to performing device behavior evaluations. However, suppressed alarms wouldn't be forwarded for SNS notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#suppress_alerts IotSecurityProfile#suppress_alerts}

---

### IotSecurityProfileBehaviorsCriteria <a name="IotSecurityProfileBehaviorsCriteria" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsecurityprofile"

&iotsecurityprofile.IotSecurityProfileBehaviorsCriteria {
	ComparisonOperator: *string,
	ConsecutiveDatapointsToAlarm: *f64,
	ConsecutiveDatapointsToClear: *f64,
	DurationSeconds: *f64,
	MlDetectionConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig,
	StatisticalThreshold: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold,
	Value: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.comparisonOperator">ComparisonOperator</a></code> | <code>*string</code> | The operator that relates the thing measured (metric) to the criteria (containing a value or statisticalThreshold). |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.consecutiveDatapointsToAlarm">ConsecutiveDatapointsToAlarm</a></code> | <code>*f64</code> | If a device is in violation of the behavior for the specified number of consecutive datapoints, an alarm occurs. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.consecutiveDatapointsToClear">ConsecutiveDatapointsToClear</a></code> | <code>*f64</code> | If an alarm has occurred and the offending device is no longer in violation of the behavior for the specified number of consecutive datapoints, the alarm is cleared. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.durationSeconds">DurationSeconds</a></code> | <code>*f64</code> | Use this to specify the time duration over which the behavior is evaluated. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.mlDetectionConfig">MlDetectionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig">IotSecurityProfileBehaviorsCriteriaMlDetectionConfig</a></code> | The configuration of an ML Detect Security Profile. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.statisticalThreshold">StatisticalThreshold</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold">IotSecurityProfileBehaviorsCriteriaStatisticalThreshold</a></code> | A statistical ranking (percentile) which indicates a threshold value by which a behavior is determined to be in compliance or in violation of the behavior. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue">IotSecurityProfileBehaviorsCriteriaValue</a></code> | The value to be compared with the metric. |

---

##### `ComparisonOperator`<sup>Optional</sup> <a name="ComparisonOperator" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.comparisonOperator"></a>

```go
ComparisonOperator *string
```

- *Type:* *string

The operator that relates the thing measured (metric) to the criteria (containing a value or statisticalThreshold).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#comparison_operator IotSecurityProfile#comparison_operator}

---

##### `ConsecutiveDatapointsToAlarm`<sup>Optional</sup> <a name="ConsecutiveDatapointsToAlarm" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.consecutiveDatapointsToAlarm"></a>

```go
ConsecutiveDatapointsToAlarm *f64
```

- *Type:* *f64

If a device is in violation of the behavior for the specified number of consecutive datapoints, an alarm occurs.

If not specified, the default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#consecutive_datapoints_to_alarm IotSecurityProfile#consecutive_datapoints_to_alarm}

---

##### `ConsecutiveDatapointsToClear`<sup>Optional</sup> <a name="ConsecutiveDatapointsToClear" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.consecutiveDatapointsToClear"></a>

```go
ConsecutiveDatapointsToClear *f64
```

- *Type:* *f64

If an alarm has occurred and the offending device is no longer in violation of the behavior for the specified number of consecutive datapoints, the alarm is cleared.

If not specified, the default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#consecutive_datapoints_to_clear IotSecurityProfile#consecutive_datapoints_to_clear}

---

##### `DurationSeconds`<sup>Optional</sup> <a name="DurationSeconds" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.durationSeconds"></a>

```go
DurationSeconds *f64
```

- *Type:* *f64

Use this to specify the time duration over which the behavior is evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#duration_seconds IotSecurityProfile#duration_seconds}

---

##### `MlDetectionConfig`<sup>Optional</sup> <a name="MlDetectionConfig" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.mlDetectionConfig"></a>

```go
MlDetectionConfig IotSecurityProfileBehaviorsCriteriaMlDetectionConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig">IotSecurityProfileBehaviorsCriteriaMlDetectionConfig</a>

The configuration of an ML Detect Security Profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#ml_detection_config IotSecurityProfile#ml_detection_config}

---

##### `StatisticalThreshold`<sup>Optional</sup> <a name="StatisticalThreshold" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.statisticalThreshold"></a>

```go
StatisticalThreshold IotSecurityProfileBehaviorsCriteriaStatisticalThreshold
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold">IotSecurityProfileBehaviorsCriteriaStatisticalThreshold</a>

A statistical ranking (percentile) which indicates a threshold value by which a behavior is determined to be in compliance or in violation of the behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#statistical_threshold IotSecurityProfile#statistical_threshold}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.value"></a>

```go
Value IotSecurityProfileBehaviorsCriteriaValue
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue">IotSecurityProfileBehaviorsCriteriaValue</a>

The value to be compared with the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#value IotSecurityProfile#value}

---

### IotSecurityProfileBehaviorsCriteriaMlDetectionConfig <a name="IotSecurityProfileBehaviorsCriteriaMlDetectionConfig" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsecurityprofile"

&iotsecurityprofile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig {
	ConfidenceLevel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig.property.confidenceLevel">ConfidenceLevel</a></code> | <code>*string</code> | The sensitivity of anomalous behavior evaluation. Can be Low, Medium, or High. |

---

##### `ConfidenceLevel`<sup>Optional</sup> <a name="ConfidenceLevel" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig.property.confidenceLevel"></a>

```go
ConfidenceLevel *string
```

- *Type:* *string

The sensitivity of anomalous behavior evaluation. Can be Low, Medium, or High.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#confidence_level IotSecurityProfile#confidence_level}

---

### IotSecurityProfileBehaviorsCriteriaStatisticalThreshold <a name="IotSecurityProfileBehaviorsCriteriaStatisticalThreshold" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsecurityprofile"

&iotsecurityprofile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold {
	Statistic: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold.property.statistic">Statistic</a></code> | <code>*string</code> | The percentile which resolves to a threshold value by which compliance with a behavior is determined. |

---

##### `Statistic`<sup>Optional</sup> <a name="Statistic" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold.property.statistic"></a>

```go
Statistic *string
```

- *Type:* *string

The percentile which resolves to a threshold value by which compliance with a behavior is determined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#statistic IotSecurityProfile#statistic}

---

### IotSecurityProfileBehaviorsCriteriaValue <a name="IotSecurityProfileBehaviorsCriteriaValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsecurityprofile"

&iotsecurityprofile.IotSecurityProfileBehaviorsCriteriaValue {
	Cidrs: *[]*string,
	Count: *string,
	Number: *f64,
	Numbers: *[]*f64,
	Ports: *[]*f64,
	Strings: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.cidrs">Cidrs</a></code> | <code>*[]*string</code> | If the ComparisonOperator calls for a set of CIDRs, use this to specify that set to be compared with the metric. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.count">Count</a></code> | <code>*string</code> | If the ComparisonOperator calls for a numeric value, use this to specify that (integer) numeric value to be compared with the metric. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.number">Number</a></code> | <code>*f64</code> | The numeral value of a metric. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.numbers">Numbers</a></code> | <code>*[]*f64</code> | The numeral values of a metric. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.ports">Ports</a></code> | <code>*[]*f64</code> | If the ComparisonOperator calls for a set of ports, use this to specify that set to be compared with the metric. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.strings">Strings</a></code> | <code>*[]*string</code> | The string values of a metric. |

---

##### `Cidrs`<sup>Optional</sup> <a name="Cidrs" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.cidrs"></a>

```go
Cidrs *[]*string
```

- *Type:* *[]*string

If the ComparisonOperator calls for a set of CIDRs, use this to specify that set to be compared with the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#cidrs IotSecurityProfile#cidrs}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.count"></a>

```go
Count *string
```

- *Type:* *string

If the ComparisonOperator calls for a numeric value, use this to specify that (integer) numeric value to be compared with the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#count IotSecurityProfile#count}

---

##### `Number`<sup>Optional</sup> <a name="Number" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.number"></a>

```go
Number *f64
```

- *Type:* *f64

The numeral value of a metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#number IotSecurityProfile#number}

---

##### `Numbers`<sup>Optional</sup> <a name="Numbers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.numbers"></a>

```go
Numbers *[]*f64
```

- *Type:* *[]*f64

The numeral values of a metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#numbers IotSecurityProfile#numbers}

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.ports"></a>

```go
Ports *[]*f64
```

- *Type:* *[]*f64

If the ComparisonOperator calls for a set of ports, use this to specify that set to be compared with the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#ports IotSecurityProfile#ports}

---

##### `Strings`<sup>Optional</sup> <a name="Strings" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.strings"></a>

```go
Strings *[]*string
```

- *Type:* *[]*string

The string values of a metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#strings IotSecurityProfile#strings}

---

### IotSecurityProfileBehaviorsMetricDimension <a name="IotSecurityProfileBehaviorsMetricDimension" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsecurityprofile"

&iotsecurityprofile.IotSecurityProfileBehaviorsMetricDimension {
	DimensionName: *string,
	Operator: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension.property.dimensionName">DimensionName</a></code> | <code>*string</code> | A unique identifier for the dimension. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension.property.operator">Operator</a></code> | <code>*string</code> | Defines how the dimensionValues of a dimension are interpreted. |

---

##### `DimensionName`<sup>Optional</sup> <a name="DimensionName" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension.property.dimensionName"></a>

```go
DimensionName *string
```

- *Type:* *string

A unique identifier for the dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#dimension_name IotSecurityProfile#dimension_name}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Defines how the dimensionValues of a dimension are interpreted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#operator IotSecurityProfile#operator}

---

### IotSecurityProfileConfig <a name="IotSecurityProfileConfig" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsecurityprofile"

&iotsecurityprofile.IotSecurityProfileConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AdditionalMetricsToRetainV2: interface{},
	AlertTargets: interface{},
	Behaviors: interface{},
	MetricsExportConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig,
	SecurityProfileDescription: *string,
	SecurityProfileName: *string,
	Tags: interface{},
	TargetArns: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.additionalMetricsToRetainV2">AdditionalMetricsToRetainV2</a></code> | <code>interface{}</code> | A list of metrics whose data is retained (stored). |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.alertTargets">AlertTargets</a></code> | <code>interface{}</code> | Specifies the destinations to which alerts are sent. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.behaviors">Behaviors</a></code> | <code>interface{}</code> | Specifies the behaviors that, when violated by a device (thing), cause an alert. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.metricsExportConfig">MetricsExportConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig">IotSecurityProfileMetricsExportConfig</a></code> | A structure containing the mqtt topic for metrics export. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.securityProfileDescription">SecurityProfileDescription</a></code> | <code>*string</code> | A description of the security profile. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.securityProfileName">SecurityProfileName</a></code> | <code>*string</code> | A unique identifier for the security profile. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Metadata that can be used to manage the security profile. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.targetArns">TargetArns</a></code> | <code>*[]*string</code> | A set of target ARNs that the security profile is attached to. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdditionalMetricsToRetainV2`<sup>Optional</sup> <a name="AdditionalMetricsToRetainV2" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.additionalMetricsToRetainV2"></a>

```go
AdditionalMetricsToRetainV2 interface{}
```

- *Type:* interface{}

A list of metrics whose data is retained (stored).

By default, data is retained for any metric used in the profile's behaviors, but it is also retained for any metric specified here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#additional_metrics_to_retain_v2 IotSecurityProfile#additional_metrics_to_retain_v2}

---

##### `AlertTargets`<sup>Optional</sup> <a name="AlertTargets" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.alertTargets"></a>

```go
AlertTargets interface{}
```

- *Type:* interface{}

Specifies the destinations to which alerts are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#alert_targets IotSecurityProfile#alert_targets}

---

##### `Behaviors`<sup>Optional</sup> <a name="Behaviors" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.behaviors"></a>

```go
Behaviors interface{}
```

- *Type:* interface{}

Specifies the behaviors that, when violated by a device (thing), cause an alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#behaviors IotSecurityProfile#behaviors}

---

##### `MetricsExportConfig`<sup>Optional</sup> <a name="MetricsExportConfig" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.metricsExportConfig"></a>

```go
MetricsExportConfig IotSecurityProfileMetricsExportConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig">IotSecurityProfileMetricsExportConfig</a>

A structure containing the mqtt topic for metrics export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#metrics_export_config IotSecurityProfile#metrics_export_config}

---

##### `SecurityProfileDescription`<sup>Optional</sup> <a name="SecurityProfileDescription" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.securityProfileDescription"></a>

```go
SecurityProfileDescription *string
```

- *Type:* *string

A description of the security profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#security_profile_description IotSecurityProfile#security_profile_description}

---

##### `SecurityProfileName`<sup>Optional</sup> <a name="SecurityProfileName" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.securityProfileName"></a>

```go
SecurityProfileName *string
```

- *Type:* *string

A unique identifier for the security profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#security_profile_name IotSecurityProfile#security_profile_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Metadata that can be used to manage the security profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#tags IotSecurityProfile#tags}

---

##### `TargetArns`<sup>Optional</sup> <a name="TargetArns" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.targetArns"></a>

```go
TargetArns *[]*string
```

- *Type:* *[]*string

A set of target ARNs that the security profile is attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#target_arns IotSecurityProfile#target_arns}

---

### IotSecurityProfileMetricsExportConfig <a name="IotSecurityProfileMetricsExportConfig" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsecurityprofile"

&iotsecurityprofile.IotSecurityProfileMetricsExportConfig {
	MqttTopic: *string,
	RoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig.property.mqttTopic">MqttTopic</a></code> | <code>*string</code> | The topic for metrics export. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | The ARN of the role that grants permission to publish to mqtt topic. |

---

##### `MqttTopic`<sup>Optional</sup> <a name="MqttTopic" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig.property.mqttTopic"></a>

```go
MqttTopic *string
```

- *Type:* *string

The topic for metrics export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#mqtt_topic IotSecurityProfile#mqtt_topic}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The ARN of the role that grants permission to publish to mqtt topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#role_arn IotSecurityProfile#role_arn}

---

### IotSecurityProfileTags <a name="IotSecurityProfileTags" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsecurityprofile"

&iotsecurityprofile.IotSecurityProfileTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags.property.key">Key</a></code> | <code>*string</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags.property.value">Value</a></code> | <code>*string</code> | The tag's value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#key IotSecurityProfile#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_security_profile#value IotSecurityProfile#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IotSecurityProfileAdditionalMetricsToRetainV2List <a name="IotSecurityProfileAdditionalMetricsToRetainV2List" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsecurityprofile"

iotsecurityprofile.NewIotSecurityProfileAdditionalMetricsToRetainV2List(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotSecurityProfileAdditionalMetricsToRetainV2List
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.get"></a>

```go
func Get(index *f64) IotSecurityProfileAdditionalMetricsToRetainV2OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference <a name="IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsecurityprofile"

iotsecurityprofile.NewIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.resetDimensionName">ResetDimensionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDimensionName` <a name="ResetDimensionName" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.resetDimensionName"></a>

```go
func ResetDimensionName()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.resetOperator"></a>

```go
func ResetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.dimensionNameInput">DimensionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.dimensionName">DimensionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DimensionNameInput`<sup>Optional</sup> <a name="DimensionNameInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.dimensionNameInput"></a>

```go
func DimensionNameInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `DimensionName`<sup>Required</sup> <a name="DimensionName" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.dimensionName"></a>

```go
func DimensionName() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotSecurityProfileAdditionalMetricsToRetainV2OutputReference <a name="IotSecurityProfileAdditionalMetricsToRetainV2OutputReference" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsecurityprofile"

iotsecurityprofile.NewIotSecurityProfileAdditionalMetricsToRetainV2OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotSecurityProfileAdditionalMetricsToRetainV2OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.putMetricDimension">PutMetricDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resetExportMetric">ResetExportMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resetMetric">ResetMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resetMetricDimension">ResetMetricDimension</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetricDimension` <a name="PutMetricDimension" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.putMetricDimension"></a>

```go
func PutMetricDimension(value IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.putMetricDimension.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension">IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension</a>

---

##### `ResetExportMetric` <a name="ResetExportMetric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resetExportMetric"></a>

```go
func ResetExportMetric()
```

##### `ResetMetric` <a name="ResetMetric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resetMetric"></a>

```go
func ResetMetric()
```

##### `ResetMetricDimension` <a name="ResetMetricDimension" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resetMetricDimension"></a>

```go
func ResetMetricDimension()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.metricDimension">MetricDimension</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference">IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.exportMetricInput">ExportMetricInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.metricDimensionInput">MetricDimensionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.metricInput">MetricInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.exportMetric">ExportMetric</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.metric">Metric</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricDimension`<sup>Required</sup> <a name="MetricDimension" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.metricDimension"></a>

```go
func MetricDimension() IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference">IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference</a>

---

##### `ExportMetricInput`<sup>Optional</sup> <a name="ExportMetricInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.exportMetricInput"></a>

```go
func ExportMetricInput() interface{}
```

- *Type:* interface{}

---

##### `MetricDimensionInput`<sup>Optional</sup> <a name="MetricDimensionInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.metricDimensionInput"></a>

```go
func MetricDimensionInput() interface{}
```

- *Type:* interface{}

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.metricInput"></a>

```go
func MetricInput() *string
```

- *Type:* *string

---

##### `ExportMetric`<sup>Required</sup> <a name="ExportMetric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.exportMetric"></a>

```go
func ExportMetric() interface{}
```

- *Type:* interface{}

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.metric"></a>

```go
func Metric() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotSecurityProfileAlertTargetsMap <a name="IotSecurityProfileAlertTargetsMap" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsecurityprofile"

iotsecurityprofile.NewIotSecurityProfileAlertTargetsMap(terraformResource IInterpolatingParent, terraformAttribute *string) IotSecurityProfileAlertTargetsMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.get"></a>

```go
func Get(key *string) IotSecurityProfileAlertTargetsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotSecurityProfileAlertTargetsOutputReference <a name="IotSecurityProfileAlertTargetsOutputReference" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsecurityprofile"

iotsecurityprofile.NewIotSecurityProfileAlertTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) IotSecurityProfileAlertTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.resetAlertTargetArn">ResetAlertTargetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlertTargetArn` <a name="ResetAlertTargetArn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.resetAlertTargetArn"></a>

```go
func ResetAlertTargetArn()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.alertTargetArnInput">AlertTargetArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.alertTargetArn">AlertTargetArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlertTargetArnInput`<sup>Optional</sup> <a name="AlertTargetArnInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.alertTargetArnInput"></a>

```go
func AlertTargetArnInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `AlertTargetArn`<sup>Required</sup> <a name="AlertTargetArn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.alertTargetArn"></a>

```go
func AlertTargetArn() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference <a name="IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsecurityprofile"

iotsecurityprofile.NewIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.resetConfidenceLevel">ResetConfidenceLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfidenceLevel` <a name="ResetConfidenceLevel" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.resetConfidenceLevel"></a>

```go
func ResetConfidenceLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.confidenceLevelInput">ConfidenceLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.confidenceLevel">ConfidenceLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfidenceLevelInput`<sup>Optional</sup> <a name="ConfidenceLevelInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.confidenceLevelInput"></a>

```go
func ConfidenceLevelInput() *string
```

- *Type:* *string

---

##### `ConfidenceLevel`<sup>Required</sup> <a name="ConfidenceLevel" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.confidenceLevel"></a>

```go
func ConfidenceLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotSecurityProfileBehaviorsCriteriaOutputReference <a name="IotSecurityProfileBehaviorsCriteriaOutputReference" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsecurityprofile"

iotsecurityprofile.NewIotSecurityProfileBehaviorsCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotSecurityProfileBehaviorsCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.putMlDetectionConfig">PutMlDetectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.putStatisticalThreshold">PutStatisticalThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetComparisonOperator">ResetComparisonOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetConsecutiveDatapointsToAlarm">ResetConsecutiveDatapointsToAlarm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetConsecutiveDatapointsToClear">ResetConsecutiveDatapointsToClear</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetDurationSeconds">ResetDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetMlDetectionConfig">ResetMlDetectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetStatisticalThreshold">ResetStatisticalThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMlDetectionConfig` <a name="PutMlDetectionConfig" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.putMlDetectionConfig"></a>

```go
func PutMlDetectionConfig(value IotSecurityProfileBehaviorsCriteriaMlDetectionConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.putMlDetectionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig">IotSecurityProfileBehaviorsCriteriaMlDetectionConfig</a>

---

##### `PutStatisticalThreshold` <a name="PutStatisticalThreshold" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.putStatisticalThreshold"></a>

```go
func PutStatisticalThreshold(value IotSecurityProfileBehaviorsCriteriaStatisticalThreshold)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.putStatisticalThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold">IotSecurityProfileBehaviorsCriteriaStatisticalThreshold</a>

---

##### `PutValue` <a name="PutValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.putValue"></a>

```go
func PutValue(value IotSecurityProfileBehaviorsCriteriaValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue">IotSecurityProfileBehaviorsCriteriaValue</a>

---

##### `ResetComparisonOperator` <a name="ResetComparisonOperator" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetComparisonOperator"></a>

```go
func ResetComparisonOperator()
```

##### `ResetConsecutiveDatapointsToAlarm` <a name="ResetConsecutiveDatapointsToAlarm" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetConsecutiveDatapointsToAlarm"></a>

```go
func ResetConsecutiveDatapointsToAlarm()
```

##### `ResetConsecutiveDatapointsToClear` <a name="ResetConsecutiveDatapointsToClear" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetConsecutiveDatapointsToClear"></a>

```go
func ResetConsecutiveDatapointsToClear()
```

##### `ResetDurationSeconds` <a name="ResetDurationSeconds" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetDurationSeconds"></a>

```go
func ResetDurationSeconds()
```

##### `ResetMlDetectionConfig` <a name="ResetMlDetectionConfig" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetMlDetectionConfig"></a>

```go
func ResetMlDetectionConfig()
```

##### `ResetStatisticalThreshold` <a name="ResetStatisticalThreshold" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetStatisticalThreshold"></a>

```go
func ResetStatisticalThreshold()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.mlDetectionConfig">MlDetectionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference">IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.statisticalThreshold">StatisticalThreshold</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference">IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference">IotSecurityProfileBehaviorsCriteriaValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.comparisonOperatorInput">ComparisonOperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.consecutiveDatapointsToAlarmInput">ConsecutiveDatapointsToAlarmInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.consecutiveDatapointsToClearInput">ConsecutiveDatapointsToClearInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.durationSecondsInput">DurationSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.mlDetectionConfigInput">MlDetectionConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.statisticalThresholdInput">StatisticalThresholdInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.valueInput">ValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.comparisonOperator">ComparisonOperator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.consecutiveDatapointsToAlarm">ConsecutiveDatapointsToAlarm</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.consecutiveDatapointsToClear">ConsecutiveDatapointsToClear</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.durationSeconds">DurationSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MlDetectionConfig`<sup>Required</sup> <a name="MlDetectionConfig" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.mlDetectionConfig"></a>

```go
func MlDetectionConfig() IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference">IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference</a>

---

##### `StatisticalThreshold`<sup>Required</sup> <a name="StatisticalThreshold" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.statisticalThreshold"></a>

```go
func StatisticalThreshold() IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference">IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference</a>

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.value"></a>

```go
func Value() IotSecurityProfileBehaviorsCriteriaValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference">IotSecurityProfileBehaviorsCriteriaValueOutputReference</a>

---

##### `ComparisonOperatorInput`<sup>Optional</sup> <a name="ComparisonOperatorInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.comparisonOperatorInput"></a>

```go
func ComparisonOperatorInput() *string
```

- *Type:* *string

---

##### `ConsecutiveDatapointsToAlarmInput`<sup>Optional</sup> <a name="ConsecutiveDatapointsToAlarmInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.consecutiveDatapointsToAlarmInput"></a>

```go
func ConsecutiveDatapointsToAlarmInput() *f64
```

- *Type:* *f64

---

##### `ConsecutiveDatapointsToClearInput`<sup>Optional</sup> <a name="ConsecutiveDatapointsToClearInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.consecutiveDatapointsToClearInput"></a>

```go
func ConsecutiveDatapointsToClearInput() *f64
```

- *Type:* *f64

---

##### `DurationSecondsInput`<sup>Optional</sup> <a name="DurationSecondsInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.durationSecondsInput"></a>

```go
func DurationSecondsInput() *f64
```

- *Type:* *f64

---

##### `MlDetectionConfigInput`<sup>Optional</sup> <a name="MlDetectionConfigInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.mlDetectionConfigInput"></a>

```go
func MlDetectionConfigInput() interface{}
```

- *Type:* interface{}

---

##### `StatisticalThresholdInput`<sup>Optional</sup> <a name="StatisticalThresholdInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.statisticalThresholdInput"></a>

```go
func StatisticalThresholdInput() interface{}
```

- *Type:* interface{}

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.valueInput"></a>

```go
func ValueInput() interface{}
```

- *Type:* interface{}

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.comparisonOperator"></a>

```go
func ComparisonOperator() *string
```

- *Type:* *string

---

##### `ConsecutiveDatapointsToAlarm`<sup>Required</sup> <a name="ConsecutiveDatapointsToAlarm" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.consecutiveDatapointsToAlarm"></a>

```go
func ConsecutiveDatapointsToAlarm() *f64
```

- *Type:* *f64

---

##### `ConsecutiveDatapointsToClear`<sup>Required</sup> <a name="ConsecutiveDatapointsToClear" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.consecutiveDatapointsToClear"></a>

```go
func ConsecutiveDatapointsToClear() *f64
```

- *Type:* *f64

---

##### `DurationSeconds`<sup>Required</sup> <a name="DurationSeconds" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.durationSeconds"></a>

```go
func DurationSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference <a name="IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsecurityprofile"

iotsecurityprofile.NewIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.resetStatistic">ResetStatistic</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStatistic` <a name="ResetStatistic" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.resetStatistic"></a>

```go
func ResetStatistic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.statisticInput">StatisticInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.statistic">Statistic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StatisticInput`<sup>Optional</sup> <a name="StatisticInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.statisticInput"></a>

```go
func StatisticInput() *string
```

- *Type:* *string

---

##### `Statistic`<sup>Required</sup> <a name="Statistic" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.statistic"></a>

```go
func Statistic() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotSecurityProfileBehaviorsCriteriaValueOutputReference <a name="IotSecurityProfileBehaviorsCriteriaValueOutputReference" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsecurityprofile"

iotsecurityprofile.NewIotSecurityProfileBehaviorsCriteriaValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotSecurityProfileBehaviorsCriteriaValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetCidrs">ResetCidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetCount">ResetCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetNumber">ResetNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetNumbers">ResetNumbers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetPorts">ResetPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetStrings">ResetStrings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidrs` <a name="ResetCidrs" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetCidrs"></a>

```go
func ResetCidrs()
```

##### `ResetCount` <a name="ResetCount" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetCount"></a>

```go
func ResetCount()
```

##### `ResetNumber` <a name="ResetNumber" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetNumber"></a>

```go
func ResetNumber()
```

##### `ResetNumbers` <a name="ResetNumbers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetNumbers"></a>

```go
func ResetNumbers()
```

##### `ResetPorts` <a name="ResetPorts" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetPorts"></a>

```go
func ResetPorts()
```

##### `ResetStrings` <a name="ResetStrings" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetStrings"></a>

```go
func ResetStrings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.cidrsInput">CidrsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.countInput">CountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.numberInput">NumberInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.numbersInput">NumbersInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.portsInput">PortsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.stringsInput">StringsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.cidrs">Cidrs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.count">Count</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.number">Number</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.numbers">Numbers</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.ports">Ports</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.strings">Strings</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CidrsInput`<sup>Optional</sup> <a name="CidrsInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.cidrsInput"></a>

```go
func CidrsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.countInput"></a>

```go
func CountInput() *string
```

- *Type:* *string

---

##### `NumberInput`<sup>Optional</sup> <a name="NumberInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.numberInput"></a>

```go
func NumberInput() *f64
```

- *Type:* *f64

---

##### `NumbersInput`<sup>Optional</sup> <a name="NumbersInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.numbersInput"></a>

```go
func NumbersInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.portsInput"></a>

```go
func PortsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `StringsInput`<sup>Optional</sup> <a name="StringsInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.stringsInput"></a>

```go
func StringsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Cidrs`<sup>Required</sup> <a name="Cidrs" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.cidrs"></a>

```go
func Cidrs() *[]*string
```

- *Type:* *[]*string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.count"></a>

```go
func Count() *string
```

- *Type:* *string

---

##### `Number`<sup>Required</sup> <a name="Number" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.number"></a>

```go
func Number() *f64
```

- *Type:* *f64

---

##### `Numbers`<sup>Required</sup> <a name="Numbers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.numbers"></a>

```go
func Numbers() *[]*f64
```

- *Type:* *[]*f64

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.ports"></a>

```go
func Ports() *[]*f64
```

- *Type:* *[]*f64

---

##### `Strings`<sup>Required</sup> <a name="Strings" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.strings"></a>

```go
func Strings() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotSecurityProfileBehaviorsList <a name="IotSecurityProfileBehaviorsList" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsecurityprofile"

iotsecurityprofile.NewIotSecurityProfileBehaviorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotSecurityProfileBehaviorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.get"></a>

```go
func Get(index *f64) IotSecurityProfileBehaviorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotSecurityProfileBehaviorsMetricDimensionOutputReference <a name="IotSecurityProfileBehaviorsMetricDimensionOutputReference" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsecurityprofile"

iotsecurityprofile.NewIotSecurityProfileBehaviorsMetricDimensionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotSecurityProfileBehaviorsMetricDimensionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.resetDimensionName">ResetDimensionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDimensionName` <a name="ResetDimensionName" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.resetDimensionName"></a>

```go
func ResetDimensionName()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.resetOperator"></a>

```go
func ResetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.dimensionNameInput">DimensionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.dimensionName">DimensionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DimensionNameInput`<sup>Optional</sup> <a name="DimensionNameInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.dimensionNameInput"></a>

```go
func DimensionNameInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `DimensionName`<sup>Required</sup> <a name="DimensionName" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.dimensionName"></a>

```go
func DimensionName() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotSecurityProfileBehaviorsOutputReference <a name="IotSecurityProfileBehaviorsOutputReference" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsecurityprofile"

iotsecurityprofile.NewIotSecurityProfileBehaviorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotSecurityProfileBehaviorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.putCriteria">PutCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.putMetricDimension">PutMetricDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetCriteria">ResetCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetExportMetric">ResetExportMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetMetric">ResetMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetMetricDimension">ResetMetricDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetSuppressAlerts">ResetSuppressAlerts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCriteria` <a name="PutCriteria" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.putCriteria"></a>

```go
func PutCriteria(value IotSecurityProfileBehaviorsCriteria)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.putCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria">IotSecurityProfileBehaviorsCriteria</a>

---

##### `PutMetricDimension` <a name="PutMetricDimension" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.putMetricDimension"></a>

```go
func PutMetricDimension(value IotSecurityProfileBehaviorsMetricDimension)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.putMetricDimension.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension">IotSecurityProfileBehaviorsMetricDimension</a>

---

##### `ResetCriteria` <a name="ResetCriteria" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetCriteria"></a>

```go
func ResetCriteria()
```

##### `ResetExportMetric` <a name="ResetExportMetric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetExportMetric"></a>

```go
func ResetExportMetric()
```

##### `ResetMetric` <a name="ResetMetric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetMetric"></a>

```go
func ResetMetric()
```

##### `ResetMetricDimension` <a name="ResetMetricDimension" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetMetricDimension"></a>

```go
func ResetMetricDimension()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetSuppressAlerts` <a name="ResetSuppressAlerts" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetSuppressAlerts"></a>

```go
func ResetSuppressAlerts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.criteria">Criteria</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference">IotSecurityProfileBehaviorsCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.metricDimension">MetricDimension</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference">IotSecurityProfileBehaviorsMetricDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.criteriaInput">CriteriaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.exportMetricInput">ExportMetricInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.metricDimensionInput">MetricDimensionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.metricInput">MetricInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.suppressAlertsInput">SuppressAlertsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.exportMetric">ExportMetric</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.metric">Metric</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.suppressAlerts">SuppressAlerts</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.criteria"></a>

```go
func Criteria() IotSecurityProfileBehaviorsCriteriaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference">IotSecurityProfileBehaviorsCriteriaOutputReference</a>

---

##### `MetricDimension`<sup>Required</sup> <a name="MetricDimension" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.metricDimension"></a>

```go
func MetricDimension() IotSecurityProfileBehaviorsMetricDimensionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference">IotSecurityProfileBehaviorsMetricDimensionOutputReference</a>

---

##### `CriteriaInput`<sup>Optional</sup> <a name="CriteriaInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.criteriaInput"></a>

```go
func CriteriaInput() interface{}
```

- *Type:* interface{}

---

##### `ExportMetricInput`<sup>Optional</sup> <a name="ExportMetricInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.exportMetricInput"></a>

```go
func ExportMetricInput() interface{}
```

- *Type:* interface{}

---

##### `MetricDimensionInput`<sup>Optional</sup> <a name="MetricDimensionInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.metricDimensionInput"></a>

```go
func MetricDimensionInput() interface{}
```

- *Type:* interface{}

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.metricInput"></a>

```go
func MetricInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SuppressAlertsInput`<sup>Optional</sup> <a name="SuppressAlertsInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.suppressAlertsInput"></a>

```go
func SuppressAlertsInput() interface{}
```

- *Type:* interface{}

---

##### `ExportMetric`<sup>Required</sup> <a name="ExportMetric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.exportMetric"></a>

```go
func ExportMetric() interface{}
```

- *Type:* interface{}

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.metric"></a>

```go
func Metric() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SuppressAlerts`<sup>Required</sup> <a name="SuppressAlerts" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.suppressAlerts"></a>

```go
func SuppressAlerts() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotSecurityProfileMetricsExportConfigOutputReference <a name="IotSecurityProfileMetricsExportConfigOutputReference" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsecurityprofile"

iotsecurityprofile.NewIotSecurityProfileMetricsExportConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotSecurityProfileMetricsExportConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.resetMqttTopic">ResetMqttTopic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMqttTopic` <a name="ResetMqttTopic" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.resetMqttTopic"></a>

```go
func ResetMqttTopic()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.mqttTopicInput">MqttTopicInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.mqttTopic">MqttTopic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MqttTopicInput`<sup>Optional</sup> <a name="MqttTopicInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.mqttTopicInput"></a>

```go
func MqttTopicInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `MqttTopic`<sup>Required</sup> <a name="MqttTopic" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.mqttTopic"></a>

```go
func MqttTopic() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotSecurityProfileTagsList <a name="IotSecurityProfileTagsList" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsecurityprofile"

iotsecurityprofile.NewIotSecurityProfileTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotSecurityProfileTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.get"></a>

```go
func Get(index *f64) IotSecurityProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotSecurityProfileTagsOutputReference <a name="IotSecurityProfileTagsOutputReference" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsecurityprofile"

iotsecurityprofile.NewIotSecurityProfileTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotSecurityProfileTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



