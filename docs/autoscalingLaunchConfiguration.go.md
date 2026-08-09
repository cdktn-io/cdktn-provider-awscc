# `autoscalingLaunchConfiguration` Submodule <a name="`autoscalingLaunchConfiguration` Submodule" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoscalingLaunchConfiguration <a name="AutoscalingLaunchConfiguration" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_launch_configuration awscc_autoscaling_launch_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/autoscalinglaunchconfiguration"

autoscalinglaunchconfiguration.NewAutoscalingLaunchConfiguration(scope Construct, id *string, config AutoscalingLaunchConfigurationConfig) AutoscalingLaunchConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig">AutoscalingLaunchConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig">AutoscalingLaunchConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.putBlockDeviceMappings">PutBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.putMetadataOptions">PutMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetAssociatePublicIpAddress">ResetAssociatePublicIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetBlockDeviceMappings">ResetBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetClassicLinkVpcId">ResetClassicLinkVpcId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetClassicLinkVpcSecurityGroups">ResetClassicLinkVpcSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetEbsOptimized">ResetEbsOptimized</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetIamInstanceProfile">ResetIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetInstanceId">ResetInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetInstanceMonitoring">ResetInstanceMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetKernelId">ResetKernelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetKeyName">ResetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetLaunchConfigurationName">ResetLaunchConfigurationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetMetadataOptions">ResetMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetPlacementTenancy">ResetPlacementTenancy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetRamDiskId">ResetRamDiskId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetSpotPrice">ResetSpotPrice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetUserData">ResetUserData</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBlockDeviceMappings` <a name="PutBlockDeviceMappings" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.putBlockDeviceMappings"></a>

```go
func PutBlockDeviceMappings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.putBlockDeviceMappings.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMetadataOptions` <a name="PutMetadataOptions" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.putMetadataOptions"></a>

```go
func PutMetadataOptions(value AutoscalingLaunchConfigurationMetadataOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.putMetadataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions">AutoscalingLaunchConfigurationMetadataOptions</a>

---

##### `ResetAssociatePublicIpAddress` <a name="ResetAssociatePublicIpAddress" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetAssociatePublicIpAddress"></a>

```go
func ResetAssociatePublicIpAddress()
```

##### `ResetBlockDeviceMappings` <a name="ResetBlockDeviceMappings" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetBlockDeviceMappings"></a>

```go
func ResetBlockDeviceMappings()
```

##### `ResetClassicLinkVpcId` <a name="ResetClassicLinkVpcId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetClassicLinkVpcId"></a>

```go
func ResetClassicLinkVpcId()
```

##### `ResetClassicLinkVpcSecurityGroups` <a name="ResetClassicLinkVpcSecurityGroups" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetClassicLinkVpcSecurityGroups"></a>

```go
func ResetClassicLinkVpcSecurityGroups()
```

##### `ResetEbsOptimized` <a name="ResetEbsOptimized" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetEbsOptimized"></a>

```go
func ResetEbsOptimized()
```

##### `ResetIamInstanceProfile` <a name="ResetIamInstanceProfile" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetIamInstanceProfile"></a>

```go
func ResetIamInstanceProfile()
```

##### `ResetInstanceId` <a name="ResetInstanceId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetInstanceId"></a>

```go
func ResetInstanceId()
```

##### `ResetInstanceMonitoring` <a name="ResetInstanceMonitoring" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetInstanceMonitoring"></a>

```go
func ResetInstanceMonitoring()
```

##### `ResetKernelId` <a name="ResetKernelId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetKernelId"></a>

```go
func ResetKernelId()
```

##### `ResetKeyName` <a name="ResetKeyName" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetKeyName"></a>

```go
func ResetKeyName()
```

##### `ResetLaunchConfigurationName` <a name="ResetLaunchConfigurationName" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetLaunchConfigurationName"></a>

```go
func ResetLaunchConfigurationName()
```

##### `ResetMetadataOptions` <a name="ResetMetadataOptions" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetMetadataOptions"></a>

```go
func ResetMetadataOptions()
```

##### `ResetPlacementTenancy` <a name="ResetPlacementTenancy" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetPlacementTenancy"></a>

```go
func ResetPlacementTenancy()
```

##### `ResetRamDiskId` <a name="ResetRamDiskId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetRamDiskId"></a>

```go
func ResetRamDiskId()
```

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetSecurityGroups"></a>

```go
func ResetSecurityGroups()
```

##### `ResetSpotPrice` <a name="ResetSpotPrice" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetSpotPrice"></a>

```go
func ResetSpotPrice()
```

##### `ResetUserData` <a name="ResetUserData" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.resetUserData"></a>

```go
func ResetUserData()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AutoscalingLaunchConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/autoscalinglaunchconfiguration"

autoscalinglaunchconfiguration.AutoscalingLaunchConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/autoscalinglaunchconfiguration"

autoscalinglaunchconfiguration.AutoscalingLaunchConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/autoscalinglaunchconfiguration"

autoscalinglaunchconfiguration.AutoscalingLaunchConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/autoscalinglaunchconfiguration"

autoscalinglaunchconfiguration.AutoscalingLaunchConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AutoscalingLaunchConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AutoscalingLaunchConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AutoscalingLaunchConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_launch_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AutoscalingLaunchConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.blockDeviceMappings">BlockDeviceMappings</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList">AutoscalingLaunchConfigurationBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.metadataOptions">MetadataOptions</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference">AutoscalingLaunchConfigurationMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.associatePublicIpAddressInput">AssociatePublicIpAddressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.blockDeviceMappingsInput">BlockDeviceMappingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.classicLinkVpcIdInput">ClassicLinkVpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.classicLinkVpcSecurityGroupsInput">ClassicLinkVpcSecurityGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.ebsOptimizedInput">EbsOptimizedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.iamInstanceProfileInput">IamInstanceProfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.imageIdInput">ImageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceMonitoringInput">InstanceMonitoringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.kernelIdInput">KernelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.keyNameInput">KeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.launchConfigurationNameInput">LaunchConfigurationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.metadataOptionsInput">MetadataOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.placementTenancyInput">PlacementTenancyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.ramDiskIdInput">RamDiskIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.spotPriceInput">SpotPriceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.userDataInput">UserDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.associatePublicIpAddress">AssociatePublicIpAddress</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.classicLinkVpcId">ClassicLinkVpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.classicLinkVpcSecurityGroups">ClassicLinkVpcSecurityGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.ebsOptimized">EbsOptimized</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.imageId">ImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceMonitoring">InstanceMonitoring</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.kernelId">KernelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.keyName">KeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.launchConfigurationName">LaunchConfigurationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.placementTenancy">PlacementTenancy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.ramDiskId">RamDiskId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.spotPrice">SpotPrice</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.userData">UserData</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BlockDeviceMappings`<sup>Required</sup> <a name="BlockDeviceMappings" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.blockDeviceMappings"></a>

```go
func BlockDeviceMappings() AutoscalingLaunchConfigurationBlockDeviceMappingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList">AutoscalingLaunchConfigurationBlockDeviceMappingsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MetadataOptions`<sup>Required</sup> <a name="MetadataOptions" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.metadataOptions"></a>

```go
func MetadataOptions() AutoscalingLaunchConfigurationMetadataOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference">AutoscalingLaunchConfigurationMetadataOptionsOutputReference</a>

---

##### `AssociatePublicIpAddressInput`<sup>Optional</sup> <a name="AssociatePublicIpAddressInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.associatePublicIpAddressInput"></a>

```go
func AssociatePublicIpAddressInput() interface{}
```

- *Type:* interface{}

---

##### `BlockDeviceMappingsInput`<sup>Optional</sup> <a name="BlockDeviceMappingsInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.blockDeviceMappingsInput"></a>

```go
func BlockDeviceMappingsInput() interface{}
```

- *Type:* interface{}

---

##### `ClassicLinkVpcIdInput`<sup>Optional</sup> <a name="ClassicLinkVpcIdInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.classicLinkVpcIdInput"></a>

```go
func ClassicLinkVpcIdInput() *string
```

- *Type:* *string

---

##### `ClassicLinkVpcSecurityGroupsInput`<sup>Optional</sup> <a name="ClassicLinkVpcSecurityGroupsInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.classicLinkVpcSecurityGroupsInput"></a>

```go
func ClassicLinkVpcSecurityGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EbsOptimizedInput`<sup>Optional</sup> <a name="EbsOptimizedInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.ebsOptimizedInput"></a>

```go
func EbsOptimizedInput() interface{}
```

- *Type:* interface{}

---

##### `IamInstanceProfileInput`<sup>Optional</sup> <a name="IamInstanceProfileInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.iamInstanceProfileInput"></a>

```go
func IamInstanceProfileInput() *string
```

- *Type:* *string

---

##### `ImageIdInput`<sup>Optional</sup> <a name="ImageIdInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.imageIdInput"></a>

```go
func ImageIdInput() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `InstanceMonitoringInput`<sup>Optional</sup> <a name="InstanceMonitoringInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceMonitoringInput"></a>

```go
func InstanceMonitoringInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `KernelIdInput`<sup>Optional</sup> <a name="KernelIdInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.kernelIdInput"></a>

```go
func KernelIdInput() *string
```

- *Type:* *string

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.keyNameInput"></a>

```go
func KeyNameInput() *string
```

- *Type:* *string

---

##### `LaunchConfigurationNameInput`<sup>Optional</sup> <a name="LaunchConfigurationNameInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.launchConfigurationNameInput"></a>

```go
func LaunchConfigurationNameInput() *string
```

- *Type:* *string

---

##### `MetadataOptionsInput`<sup>Optional</sup> <a name="MetadataOptionsInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.metadataOptionsInput"></a>

```go
func MetadataOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `PlacementTenancyInput`<sup>Optional</sup> <a name="PlacementTenancyInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.placementTenancyInput"></a>

```go
func PlacementTenancyInput() *string
```

- *Type:* *string

---

##### `RamDiskIdInput`<sup>Optional</sup> <a name="RamDiskIdInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.ramDiskIdInput"></a>

```go
func RamDiskIdInput() *string
```

- *Type:* *string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.securityGroupsInput"></a>

```go
func SecurityGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SpotPriceInput`<sup>Optional</sup> <a name="SpotPriceInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.spotPriceInput"></a>

```go
func SpotPriceInput() *string
```

- *Type:* *string

---

##### `UserDataInput`<sup>Optional</sup> <a name="UserDataInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.userDataInput"></a>

```go
func UserDataInput() *string
```

- *Type:* *string

---

##### `AssociatePublicIpAddress`<sup>Required</sup> <a name="AssociatePublicIpAddress" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.associatePublicIpAddress"></a>

```go
func AssociatePublicIpAddress() interface{}
```

- *Type:* interface{}

---

##### `ClassicLinkVpcId`<sup>Required</sup> <a name="ClassicLinkVpcId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.classicLinkVpcId"></a>

```go
func ClassicLinkVpcId() *string
```

- *Type:* *string

---

##### `ClassicLinkVpcSecurityGroups`<sup>Required</sup> <a name="ClassicLinkVpcSecurityGroups" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.classicLinkVpcSecurityGroups"></a>

```go
func ClassicLinkVpcSecurityGroups() *[]*string
```

- *Type:* *[]*string

---

##### `EbsOptimized`<sup>Required</sup> <a name="EbsOptimized" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.ebsOptimized"></a>

```go
func EbsOptimized() interface{}
```

- *Type:* interface{}

---

##### `IamInstanceProfile`<sup>Required</sup> <a name="IamInstanceProfile" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.iamInstanceProfile"></a>

```go
func IamInstanceProfile() *string
```

- *Type:* *string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.imageId"></a>

```go
func ImageId() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `InstanceMonitoring`<sup>Required</sup> <a name="InstanceMonitoring" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceMonitoring"></a>

```go
func InstanceMonitoring() interface{}
```

- *Type:* interface{}

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `KernelId`<sup>Required</sup> <a name="KernelId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.kernelId"></a>

```go
func KernelId() *string
```

- *Type:* *string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.keyName"></a>

```go
func KeyName() *string
```

- *Type:* *string

---

##### `LaunchConfigurationName`<sup>Required</sup> <a name="LaunchConfigurationName" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.launchConfigurationName"></a>

```go
func LaunchConfigurationName() *string
```

- *Type:* *string

---

##### `PlacementTenancy`<sup>Required</sup> <a name="PlacementTenancy" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.placementTenancy"></a>

```go
func PlacementTenancy() *string
```

- *Type:* *string

---

##### `RamDiskId`<sup>Required</sup> <a name="RamDiskId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.ramDiskId"></a>

```go
func RamDiskId() *string
```

- *Type:* *string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.securityGroups"></a>

```go
func SecurityGroups() *[]*string
```

- *Type:* *[]*string

---

##### `SpotPrice`<sup>Required</sup> <a name="SpotPrice" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.spotPrice"></a>

```go
func SpotPrice() *string
```

- *Type:* *string

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.userData"></a>

```go
func UserData() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AutoscalingLaunchConfigurationBlockDeviceMappings <a name="AutoscalingLaunchConfigurationBlockDeviceMappings" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/autoscalinglaunchconfiguration"

&autoscalinglaunchconfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings {
	DeviceName: *string,
	Ebs: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs,
	NoDevice: interface{},
	VirtualName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings.property.deviceName">DeviceName</a></code> | <code>*string</code> | The device name exposed to the EC2 instance (for example, /dev/sdh or xvdh). |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings.property.ebs">Ebs</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs">AutoscalingLaunchConfigurationBlockDeviceMappingsEbs</a></code> | Parameters used to automatically set up EBS volumes when an instance is launched. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings.property.noDevice">NoDevice</a></code> | <code>interface{}</code> | Setting this value to true suppresses the specified device included in the block device mapping of the AMI. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings.property.virtualName">VirtualName</a></code> | <code>*string</code> | The name of the virtual device. |

---

##### `DeviceName`<sup>Optional</sup> <a name="DeviceName" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings.property.deviceName"></a>

```go
DeviceName *string
```

- *Type:* *string

The device name exposed to the EC2 instance (for example, /dev/sdh or xvdh).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_launch_configuration#device_name AutoscalingLaunchConfiguration#device_name}

---

##### `Ebs`<sup>Optional</sup> <a name="Ebs" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings.property.ebs"></a>

```go
Ebs AutoscalingLaunchConfigurationBlockDeviceMappingsEbs
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs">AutoscalingLaunchConfigurationBlockDeviceMappingsEbs</a>

Parameters used to automatically set up EBS volumes when an instance is launched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_launch_configuration#ebs AutoscalingLaunchConfiguration#ebs}

---

##### `NoDevice`<sup>Optional</sup> <a name="NoDevice" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings.property.noDevice"></a>

```go
NoDevice interface{}
```

- *Type:* interface{}

Setting this value to true suppresses the specified device included in the block device mapping of the AMI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_launch_configuration#no_device AutoscalingLaunchConfiguration#no_device}

---

##### `VirtualName`<sup>Optional</sup> <a name="VirtualName" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappings.property.virtualName"></a>

```go
VirtualName *string
```

- *Type:* *string

The name of the virtual device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_launch_configuration#virtual_name AutoscalingLaunchConfiguration#virtual_name}

---

### AutoscalingLaunchConfigurationBlockDeviceMappingsEbs <a name="AutoscalingLaunchConfigurationBlockDeviceMappingsEbs" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/autoscalinglaunchconfiguration"

&autoscalinglaunchconfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs {
	DeleteOnTermination: interface{},
	Encrypted: interface{},
	Iops: *f64,
	SnapshotId: *string,
	Throughput: *f64,
	VolumeSize: *f64,
	VolumeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>interface{}</code> | Indicates whether the volume is deleted on instance termination. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.encrypted">Encrypted</a></code> | <code>interface{}</code> | Specifies whether the volume should be encrypted. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.iops">Iops</a></code> | <code>*f64</code> | The number of input/output (I/O) operations per second (IOPS) to provision for the volume. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.snapshotId">SnapshotId</a></code> | <code>*string</code> | The snapshot ID of the volume to use. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.throughput">Throughput</a></code> | <code>*f64</code> | The throughput (MiBps) to provision for a gp3 volume. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | The volume size, in GiBs. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.volumeType">VolumeType</a></code> | <code>*string</code> | The volume type. |

---

##### `DeleteOnTermination`<sup>Optional</sup> <a name="DeleteOnTermination" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.deleteOnTermination"></a>

```go
DeleteOnTermination interface{}
```

- *Type:* interface{}

Indicates whether the volume is deleted on instance termination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_launch_configuration#delete_on_termination AutoscalingLaunchConfiguration#delete_on_termination}

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.encrypted"></a>

```go
Encrypted interface{}
```

- *Type:* interface{}

Specifies whether the volume should be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_launch_configuration#encrypted AutoscalingLaunchConfiguration#encrypted}

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.iops"></a>

```go
Iops *f64
```

- *Type:* *f64

The number of input/output (I/O) operations per second (IOPS) to provision for the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_launch_configuration#iops AutoscalingLaunchConfiguration#iops}

---

##### `SnapshotId`<sup>Optional</sup> <a name="SnapshotId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.snapshotId"></a>

```go
SnapshotId *string
```

- *Type:* *string

The snapshot ID of the volume to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_launch_configuration#snapshot_id AutoscalingLaunchConfiguration#snapshot_id}

---

##### `Throughput`<sup>Optional</sup> <a name="Throughput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.throughput"></a>

```go
Throughput *f64
```

- *Type:* *f64

The throughput (MiBps) to provision for a gp3 volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_launch_configuration#throughput AutoscalingLaunchConfiguration#throughput}

---

##### `VolumeSize`<sup>Optional</sup> <a name="VolumeSize" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.volumeSize"></a>

```go
VolumeSize *f64
```

- *Type:* *f64

The volume size, in GiBs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_launch_configuration#volume_size AutoscalingLaunchConfiguration#volume_size}

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs.property.volumeType"></a>

```go
VolumeType *string
```

- *Type:* *string

The volume type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_launch_configuration#volume_type AutoscalingLaunchConfiguration#volume_type}

---

### AutoscalingLaunchConfigurationConfig <a name="AutoscalingLaunchConfigurationConfig" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/autoscalinglaunchconfiguration"

&autoscalinglaunchconfiguration.AutoscalingLaunchConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ImageId: *string,
	InstanceType: *string,
	AssociatePublicIpAddress: interface{},
	BlockDeviceMappings: interface{},
	ClassicLinkVpcId: *string,
	ClassicLinkVpcSecurityGroups: *[]*string,
	EbsOptimized: interface{},
	IamInstanceProfile: *string,
	InstanceId: *string,
	InstanceMonitoring: interface{},
	KernelId: *string,
	KeyName: *string,
	LaunchConfigurationName: *string,
	MetadataOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions,
	PlacementTenancy: *string,
	RamDiskId: *string,
	SecurityGroups: *[]*string,
	SpotPrice: *string,
	UserData: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.imageId">ImageId</a></code> | <code>*string</code> | Provides the unique ID of the Amazon Machine Image (AMI) that was assigned during registration. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.instanceType">InstanceType</a></code> | <code>*string</code> | Specifies the instance type of the EC2 instance. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.associatePublicIpAddress">AssociatePublicIpAddress</a></code> | <code>interface{}</code> | For Auto Scaling groups that are running in a virtual private cloud (VPC), specifies whether to assign a public IP address to the group's instances. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.blockDeviceMappings">BlockDeviceMappings</a></code> | <code>interface{}</code> | Specifies how block devices are exposed to the instance. You can specify virtual devices and EBS volumes. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.classicLinkVpcId">ClassicLinkVpcId</a></code> | <code>*string</code> | The ID of a ClassicLink-enabled VPC to link your EC2-Classic instances to. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.classicLinkVpcSecurityGroups">ClassicLinkVpcSecurityGroups</a></code> | <code>*[]*string</code> | The IDs of one or more security groups for the VPC that you specified in the ClassicLinkVPCId property. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.ebsOptimized">EbsOptimized</a></code> | <code>interface{}</code> | Specifies whether the launch configuration is optimized for EBS I/O (true) or not (false). |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code>*string</code> | Provides the name or the Amazon Resource Name (ARN) of the instance profile associated with the IAM role for the instance. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.instanceId">InstanceId</a></code> | <code>*string</code> | The ID of the Amazon EC2 instance you want to use to create the launch configuration. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.instanceMonitoring">InstanceMonitoring</a></code> | <code>interface{}</code> | Controls whether instances in this group are launched with detailed (true) or basic (false) monitoring. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.kernelId">KernelId</a></code> | <code>*string</code> | Provides the ID of the kernel associated with the EC2 AMI. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.keyName">KeyName</a></code> | <code>*string</code> | Provides the name of the EC2 key pair. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.launchConfigurationName">LaunchConfigurationName</a></code> | <code>*string</code> | The name of the launch configuration. This name must be unique per Region per account. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.metadataOptions">MetadataOptions</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions">AutoscalingLaunchConfigurationMetadataOptions</a></code> | The metadata options for the instances. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.placementTenancy">PlacementTenancy</a></code> | <code>*string</code> | The tenancy of the instance, either default or dedicated. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.ramDiskId">RamDiskId</a></code> | <code>*string</code> | The ID of the RAM disk to select. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | A list that contains the security groups to assign to the instances in the Auto Scaling group. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.spotPrice">SpotPrice</a></code> | <code>*string</code> | The maximum hourly price you are willing to pay for any Spot Instances launched to fulfill the request. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.userData">UserData</a></code> | <code>*string</code> | The Base64-encoded user data to make available to the launched EC2 instances. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.imageId"></a>

```go
ImageId *string
```

- *Type:* *string

Provides the unique ID of the Amazon Machine Image (AMI) that was assigned during registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_launch_configuration#image_id AutoscalingLaunchConfiguration#image_id}

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

Specifies the instance type of the EC2 instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_launch_configuration#instance_type AutoscalingLaunchConfiguration#instance_type}

---

##### `AssociatePublicIpAddress`<sup>Optional</sup> <a name="AssociatePublicIpAddress" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.associatePublicIpAddress"></a>

```go
AssociatePublicIpAddress interface{}
```

- *Type:* interface{}

For Auto Scaling groups that are running in a virtual private cloud (VPC), specifies whether to assign a public IP address to the group's instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_launch_configuration#associate_public_ip_address AutoscalingLaunchConfiguration#associate_public_ip_address}

---

##### `BlockDeviceMappings`<sup>Optional</sup> <a name="BlockDeviceMappings" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.blockDeviceMappings"></a>

```go
BlockDeviceMappings interface{}
```

- *Type:* interface{}

Specifies how block devices are exposed to the instance. You can specify virtual devices and EBS volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_launch_configuration#block_device_mappings AutoscalingLaunchConfiguration#block_device_mappings}

---

##### `ClassicLinkVpcId`<sup>Optional</sup> <a name="ClassicLinkVpcId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.classicLinkVpcId"></a>

```go
ClassicLinkVpcId *string
```

- *Type:* *string

The ID of a ClassicLink-enabled VPC to link your EC2-Classic instances to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_launch_configuration#classic_link_vpc_id AutoscalingLaunchConfiguration#classic_link_vpc_id}

---

##### `ClassicLinkVpcSecurityGroups`<sup>Optional</sup> <a name="ClassicLinkVpcSecurityGroups" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.classicLinkVpcSecurityGroups"></a>

```go
ClassicLinkVpcSecurityGroups *[]*string
```

- *Type:* *[]*string

The IDs of one or more security groups for the VPC that you specified in the ClassicLinkVPCId property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_launch_configuration#classic_link_vpc_security_groups AutoscalingLaunchConfiguration#classic_link_vpc_security_groups}

---

##### `EbsOptimized`<sup>Optional</sup> <a name="EbsOptimized" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.ebsOptimized"></a>

```go
EbsOptimized interface{}
```

- *Type:* interface{}

Specifies whether the launch configuration is optimized for EBS I/O (true) or not (false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_launch_configuration#ebs_optimized AutoscalingLaunchConfiguration#ebs_optimized}

---

##### `IamInstanceProfile`<sup>Optional</sup> <a name="IamInstanceProfile" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.iamInstanceProfile"></a>

```go
IamInstanceProfile *string
```

- *Type:* *string

Provides the name or the Amazon Resource Name (ARN) of the instance profile associated with the IAM role for the instance.

The instance profile contains the IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_launch_configuration#iam_instance_profile AutoscalingLaunchConfiguration#iam_instance_profile}

---

##### `InstanceId`<sup>Optional</sup> <a name="InstanceId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

The ID of the Amazon EC2 instance you want to use to create the launch configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_launch_configuration#instance_id AutoscalingLaunchConfiguration#instance_id}

---

##### `InstanceMonitoring`<sup>Optional</sup> <a name="InstanceMonitoring" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.instanceMonitoring"></a>

```go
InstanceMonitoring interface{}
```

- *Type:* interface{}

Controls whether instances in this group are launched with detailed (true) or basic (false) monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_launch_configuration#instance_monitoring AutoscalingLaunchConfiguration#instance_monitoring}

---

##### `KernelId`<sup>Optional</sup> <a name="KernelId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.kernelId"></a>

```go
KernelId *string
```

- *Type:* *string

Provides the ID of the kernel associated with the EC2 AMI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_launch_configuration#kernel_id AutoscalingLaunchConfiguration#kernel_id}

---

##### `KeyName`<sup>Optional</sup> <a name="KeyName" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.keyName"></a>

```go
KeyName *string
```

- *Type:* *string

Provides the name of the EC2 key pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_launch_configuration#key_name AutoscalingLaunchConfiguration#key_name}

---

##### `LaunchConfigurationName`<sup>Optional</sup> <a name="LaunchConfigurationName" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.launchConfigurationName"></a>

```go
LaunchConfigurationName *string
```

- *Type:* *string

The name of the launch configuration. This name must be unique per Region per account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_launch_configuration#launch_configuration_name AutoscalingLaunchConfiguration#launch_configuration_name}

---

##### `MetadataOptions`<sup>Optional</sup> <a name="MetadataOptions" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.metadataOptions"></a>

```go
MetadataOptions AutoscalingLaunchConfigurationMetadataOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions">AutoscalingLaunchConfigurationMetadataOptions</a>

The metadata options for the instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_launch_configuration#metadata_options AutoscalingLaunchConfiguration#metadata_options}

---

##### `PlacementTenancy`<sup>Optional</sup> <a name="PlacementTenancy" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.placementTenancy"></a>

```go
PlacementTenancy *string
```

- *Type:* *string

The tenancy of the instance, either default or dedicated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_launch_configuration#placement_tenancy AutoscalingLaunchConfiguration#placement_tenancy}

---

##### `RamDiskId`<sup>Optional</sup> <a name="RamDiskId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.ramDiskId"></a>

```go
RamDiskId *string
```

- *Type:* *string

The ID of the RAM disk to select.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_launch_configuration#ram_disk_id AutoscalingLaunchConfiguration#ram_disk_id}

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.securityGroups"></a>

```go
SecurityGroups *[]*string
```

- *Type:* *[]*string

A list that contains the security groups to assign to the instances in the Auto Scaling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_launch_configuration#security_groups AutoscalingLaunchConfiguration#security_groups}

---

##### `SpotPrice`<sup>Optional</sup> <a name="SpotPrice" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.spotPrice"></a>

```go
SpotPrice *string
```

- *Type:* *string

The maximum hourly price you are willing to pay for any Spot Instances launched to fulfill the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_launch_configuration#spot_price AutoscalingLaunchConfiguration#spot_price}

---

##### `UserData`<sup>Optional</sup> <a name="UserData" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationConfig.property.userData"></a>

```go
UserData *string
```

- *Type:* *string

The Base64-encoded user data to make available to the launched EC2 instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_launch_configuration#user_data AutoscalingLaunchConfiguration#user_data}

---

### AutoscalingLaunchConfigurationMetadataOptions <a name="AutoscalingLaunchConfigurationMetadataOptions" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/autoscalinglaunchconfiguration"

&autoscalinglaunchconfiguration.AutoscalingLaunchConfigurationMetadataOptions {
	HttpEndpoint: *string,
	HttpPutResponseHopLimit: *f64,
	HttpTokens: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions.property.httpEndpoint">HttpEndpoint</a></code> | <code>*string</code> | This parameter enables or disables the HTTP metadata endpoint on your instances. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions.property.httpPutResponseHopLimit">HttpPutResponseHopLimit</a></code> | <code>*f64</code> | The desired HTTP PUT response hop limit for instance metadata requests. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions.property.httpTokens">HttpTokens</a></code> | <code>*string</code> | The state of token usage for your instance metadata requests. |

---

##### `HttpEndpoint`<sup>Optional</sup> <a name="HttpEndpoint" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions.property.httpEndpoint"></a>

```go
HttpEndpoint *string
```

- *Type:* *string

This parameter enables or disables the HTTP metadata endpoint on your instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_launch_configuration#http_endpoint AutoscalingLaunchConfiguration#http_endpoint}

---

##### `HttpPutResponseHopLimit`<sup>Optional</sup> <a name="HttpPutResponseHopLimit" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions.property.httpPutResponseHopLimit"></a>

```go
HttpPutResponseHopLimit *f64
```

- *Type:* *f64

The desired HTTP PUT response hop limit for instance metadata requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_launch_configuration#http_put_response_hop_limit AutoscalingLaunchConfiguration#http_put_response_hop_limit}

---

##### `HttpTokens`<sup>Optional</sup> <a name="HttpTokens" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptions.property.httpTokens"></a>

```go
HttpTokens *string
```

- *Type:* *string

The state of token usage for your instance metadata requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/autoscaling_launch_configuration#http_tokens AutoscalingLaunchConfiguration#http_tokens}

---

## Classes <a name="Classes" id="Classes"></a>

### AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference <a name="AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/autoscalinglaunchconfiguration"

autoscalinglaunchconfiguration.NewAutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination">ResetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetSnapshotId">ResetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetThroughput">ResetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetVolumeSize">ResetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteOnTermination` <a name="ResetDeleteOnTermination" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination"></a>

```go
func ResetDeleteOnTermination()
```

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetEncrypted"></a>

```go
func ResetEncrypted()
```

##### `ResetIops` <a name="ResetIops" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetIops"></a>

```go
func ResetIops()
```

##### `ResetSnapshotId` <a name="ResetSnapshotId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetSnapshotId"></a>

```go
func ResetSnapshotId()
```

##### `ResetThroughput` <a name="ResetThroughput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetThroughput"></a>

```go
func ResetThroughput()
```

##### `ResetVolumeSize` <a name="ResetVolumeSize" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetVolumeSize"></a>

```go
func ResetVolumeSize()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.resetVolumeType"></a>

```go
func ResetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput">DeleteOnTerminationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.encryptedInput">EncryptedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.iopsInput">IopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput">SnapshotIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.throughputInput">ThroughputInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput">VolumeSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.encrypted">Encrypted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.snapshotId">SnapshotId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.throughput">Throughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteOnTerminationInput`<sup>Optional</sup> <a name="DeleteOnTerminationInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput"></a>

```go
func DeleteOnTerminationInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.encryptedInput"></a>

```go
func EncryptedInput() interface{}
```

- *Type:* interface{}

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.iopsInput"></a>

```go
func IopsInput() *f64
```

- *Type:* *f64

---

##### `SnapshotIdInput`<sup>Optional</sup> <a name="SnapshotIdInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput"></a>

```go
func SnapshotIdInput() *string
```

- *Type:* *string

---

##### `ThroughputInput`<sup>Optional</sup> <a name="ThroughputInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.throughputInput"></a>

```go
func ThroughputInput() *f64
```

- *Type:* *f64

---

##### `VolumeSizeInput`<sup>Optional</sup> <a name="VolumeSizeInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput"></a>

```go
func VolumeSizeInput() *f64
```

- *Type:* *f64

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput"></a>

```go
func VolumeTypeInput() *string
```

- *Type:* *string

---

##### `DeleteOnTermination`<sup>Required</sup> <a name="DeleteOnTermination" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination"></a>

```go
func DeleteOnTermination() interface{}
```

- *Type:* interface{}

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```go
func Encrypted() interface{}
```

- *Type:* interface{}

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.snapshotId"></a>

```go
func SnapshotId() *string
```

- *Type:* *string

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.throughput"></a>

```go
func Throughput() *f64
```

- *Type:* *f64

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```go
func VolumeSize() *f64
```

- *Type:* *f64

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AutoscalingLaunchConfigurationBlockDeviceMappingsList <a name="AutoscalingLaunchConfigurationBlockDeviceMappingsList" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/autoscalinglaunchconfiguration"

autoscalinglaunchconfiguration.NewAutoscalingLaunchConfigurationBlockDeviceMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AutoscalingLaunchConfigurationBlockDeviceMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.get"></a>

```go
func Get(index *f64) AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference <a name="AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/autoscalinglaunchconfiguration"

autoscalinglaunchconfiguration.NewAutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.putEbs">PutEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resetDeviceName">ResetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resetEbs">ResetEbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resetNoDevice">ResetNoDevice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resetVirtualName">ResetVirtualName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEbs` <a name="PutEbs" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.putEbs"></a>

```go
func PutEbs(value AutoscalingLaunchConfigurationBlockDeviceMappingsEbs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.putEbs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbs">AutoscalingLaunchConfigurationBlockDeviceMappingsEbs</a>

---

##### `ResetDeviceName` <a name="ResetDeviceName" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resetDeviceName"></a>

```go
func ResetDeviceName()
```

##### `ResetEbs` <a name="ResetEbs" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resetEbs"></a>

```go
func ResetEbs()
```

##### `ResetNoDevice` <a name="ResetNoDevice" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resetNoDevice"></a>

```go
func ResetNoDevice()
```

##### `ResetVirtualName` <a name="ResetVirtualName" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.resetVirtualName"></a>

```go
func ResetVirtualName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.ebs">Ebs</a></code> | <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference">AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.ebsInput">EbsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.noDeviceInput">NoDeviceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.virtualNameInput">VirtualNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.deviceName">DeviceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.noDevice">NoDevice</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.virtualName">VirtualName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ebs`<sup>Required</sup> <a name="Ebs" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.ebs"></a>

```go
func Ebs() AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference">AutoscalingLaunchConfigurationBlockDeviceMappingsEbsOutputReference</a>

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.deviceNameInput"></a>

```go
func DeviceNameInput() *string
```

- *Type:* *string

---

##### `EbsInput`<sup>Optional</sup> <a name="EbsInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.ebsInput"></a>

```go
func EbsInput() interface{}
```

- *Type:* interface{}

---

##### `NoDeviceInput`<sup>Optional</sup> <a name="NoDeviceInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.noDeviceInput"></a>

```go
func NoDeviceInput() interface{}
```

- *Type:* interface{}

---

##### `VirtualNameInput`<sup>Optional</sup> <a name="VirtualNameInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.virtualNameInput"></a>

```go
func VirtualNameInput() *string
```

- *Type:* *string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.deviceName"></a>

```go
func DeviceName() *string
```

- *Type:* *string

---

##### `NoDevice`<sup>Required</sup> <a name="NoDevice" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.noDevice"></a>

```go
func NoDevice() interface{}
```

- *Type:* interface{}

---

##### `VirtualName`<sup>Required</sup> <a name="VirtualName" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.virtualName"></a>

```go
func VirtualName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationBlockDeviceMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AutoscalingLaunchConfigurationMetadataOptionsOutputReference <a name="AutoscalingLaunchConfigurationMetadataOptionsOutputReference" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/autoscalinglaunchconfiguration"

autoscalinglaunchconfiguration.NewAutoscalingLaunchConfigurationMetadataOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AutoscalingLaunchConfigurationMetadataOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.resetHttpEndpoint">ResetHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.resetHttpPutResponseHopLimit">ResetHttpPutResponseHopLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.resetHttpTokens">ResetHttpTokens</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHttpEndpoint` <a name="ResetHttpEndpoint" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.resetHttpEndpoint"></a>

```go
func ResetHttpEndpoint()
```

##### `ResetHttpPutResponseHopLimit` <a name="ResetHttpPutResponseHopLimit" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.resetHttpPutResponseHopLimit"></a>

```go
func ResetHttpPutResponseHopLimit()
```

##### `ResetHttpTokens` <a name="ResetHttpTokens" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.resetHttpTokens"></a>

```go
func ResetHttpTokens()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpEndpointInput">HttpEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput">HttpPutResponseHopLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpTokensInput">HttpTokensInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpEndpoint">HttpEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpPutResponseHopLimit">HttpPutResponseHopLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpTokens">HttpTokens</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HttpEndpointInput`<sup>Optional</sup> <a name="HttpEndpointInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpEndpointInput"></a>

```go
func HttpEndpointInput() *string
```

- *Type:* *string

---

##### `HttpPutResponseHopLimitInput`<sup>Optional</sup> <a name="HttpPutResponseHopLimitInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput"></a>

```go
func HttpPutResponseHopLimitInput() *f64
```

- *Type:* *f64

---

##### `HttpTokensInput`<sup>Optional</sup> <a name="HttpTokensInput" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpTokensInput"></a>

```go
func HttpTokensInput() *string
```

- *Type:* *string

---

##### `HttpEndpoint`<sup>Required</sup> <a name="HttpEndpoint" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpEndpoint"></a>

```go
func HttpEndpoint() *string
```

- *Type:* *string

---

##### `HttpPutResponseHopLimit`<sup>Required</sup> <a name="HttpPutResponseHopLimit" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```go
func HttpPutResponseHopLimit() *f64
```

- *Type:* *f64

---

##### `HttpTokens`<sup>Required</sup> <a name="HttpTokens" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.httpTokens"></a>

```go
func HttpTokens() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.autoscalingLaunchConfiguration.AutoscalingLaunchConfigurationMetadataOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



