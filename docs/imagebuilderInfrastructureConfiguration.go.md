# `imagebuilderInfrastructureConfiguration` Submodule <a name="`imagebuilderInfrastructureConfiguration` Submodule" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagebuilderInfrastructureConfiguration <a name="ImagebuilderInfrastructureConfiguration" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration awscc_imagebuilder_infrastructure_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderinfrastructureconfiguration"

imagebuilderinfrastructureconfiguration.NewImagebuilderInfrastructureConfiguration(scope Construct, id *string, config ImagebuilderInfrastructureConfigurationConfig) ImagebuilderInfrastructureConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig">ImagebuilderInfrastructureConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig">ImagebuilderInfrastructureConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.putInstanceMetadataOptions">PutInstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.putLogging">PutLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.putPlacement">PutPlacement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetInstanceMetadataOptions">ResetInstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetInstanceTypes">ResetInstanceTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetKeyPair">ResetKeyPair</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetLogging">ResetLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetPlacement">ResetPlacement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetResourceTags">ResetResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetSnsTopicArn">ResetSnsTopicArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetTerminateInstanceOnFailure">ResetTerminateInstanceOnFailure</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInstanceMetadataOptions` <a name="PutInstanceMetadataOptions" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.putInstanceMetadataOptions"></a>

```go
func PutInstanceMetadataOptions(value ImagebuilderInfrastructureConfigurationInstanceMetadataOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.putInstanceMetadataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions">ImagebuilderInfrastructureConfigurationInstanceMetadataOptions</a>

---

##### `PutLogging` <a name="PutLogging" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.putLogging"></a>

```go
func PutLogging(value ImagebuilderInfrastructureConfigurationLogging)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging">ImagebuilderInfrastructureConfigurationLogging</a>

---

##### `PutPlacement` <a name="PutPlacement" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.putPlacement"></a>

```go
func PutPlacement(value ImagebuilderInfrastructureConfigurationPlacement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.putPlacement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement">ImagebuilderInfrastructureConfigurationPlacement</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetInstanceMetadataOptions` <a name="ResetInstanceMetadataOptions" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetInstanceMetadataOptions"></a>

```go
func ResetInstanceMetadataOptions()
```

##### `ResetInstanceTypes` <a name="ResetInstanceTypes" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetInstanceTypes"></a>

```go
func ResetInstanceTypes()
```

##### `ResetKeyPair` <a name="ResetKeyPair" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetKeyPair"></a>

```go
func ResetKeyPair()
```

##### `ResetLogging` <a name="ResetLogging" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetLogging"></a>

```go
func ResetLogging()
```

##### `ResetPlacement` <a name="ResetPlacement" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetPlacement"></a>

```go
func ResetPlacement()
```

##### `ResetResourceTags` <a name="ResetResourceTags" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetResourceTags"></a>

```go
func ResetResourceTags()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetSnsTopicArn` <a name="ResetSnsTopicArn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetSnsTopicArn"></a>

```go
func ResetSnsTopicArn()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetSubnetId"></a>

```go
func ResetSubnetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTerminateInstanceOnFailure` <a name="ResetTerminateInstanceOnFailure" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetTerminateInstanceOnFailure"></a>

```go
func ResetTerminateInstanceOnFailure()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ImagebuilderInfrastructureConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderinfrastructureconfiguration"

imagebuilderinfrastructureconfiguration.ImagebuilderInfrastructureConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderinfrastructureconfiguration"

imagebuilderinfrastructureconfiguration.ImagebuilderInfrastructureConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderinfrastructureconfiguration"

imagebuilderinfrastructureconfiguration.ImagebuilderInfrastructureConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderinfrastructureconfiguration"

imagebuilderinfrastructureconfiguration.ImagebuilderInfrastructureConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ImagebuilderInfrastructureConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ImagebuilderInfrastructureConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ImagebuilderInfrastructureConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ImagebuilderInfrastructureConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceMetadataOptions">InstanceMetadataOptions</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference">ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.logging">Logging</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference">ImagebuilderInfrastructureConfigurationLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.placement">Placement</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference">ImagebuilderInfrastructureConfigurationPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceMetadataOptionsInput">InstanceMetadataOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceProfileNameInput">InstanceProfileNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceTypesInput">InstanceTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.keyPairInput">KeyPairInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.loggingInput">LoggingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.placementInput">PlacementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.resourceTagsInput">ResourceTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.snsTopicArnInput">SnsTopicArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.terminateInstanceOnFailureInput">TerminateInstanceOnFailureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceProfileName">InstanceProfileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceTypes">InstanceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.keyPair">KeyPair</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.resourceTags">ResourceTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.snsTopicArn">SnsTopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.terminateInstanceOnFailure">TerminateInstanceOnFailure</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceMetadataOptions`<sup>Required</sup> <a name="InstanceMetadataOptions" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceMetadataOptions"></a>

```go
func InstanceMetadataOptions() ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference">ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference</a>

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.logging"></a>

```go
func Logging() ImagebuilderInfrastructureConfigurationLoggingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference">ImagebuilderInfrastructureConfigurationLoggingOutputReference</a>

---

##### `Placement`<sup>Required</sup> <a name="Placement" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.placement"></a>

```go
func Placement() ImagebuilderInfrastructureConfigurationPlacementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference">ImagebuilderInfrastructureConfigurationPlacementOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `InstanceMetadataOptionsInput`<sup>Optional</sup> <a name="InstanceMetadataOptionsInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceMetadataOptionsInput"></a>

```go
func InstanceMetadataOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceProfileNameInput`<sup>Optional</sup> <a name="InstanceProfileNameInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceProfileNameInput"></a>

```go
func InstanceProfileNameInput() *string
```

- *Type:* *string

---

##### `InstanceTypesInput`<sup>Optional</sup> <a name="InstanceTypesInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceTypesInput"></a>

```go
func InstanceTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `KeyPairInput`<sup>Optional</sup> <a name="KeyPairInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.keyPairInput"></a>

```go
func KeyPairInput() *string
```

- *Type:* *string

---

##### `LoggingInput`<sup>Optional</sup> <a name="LoggingInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.loggingInput"></a>

```go
func LoggingInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PlacementInput`<sup>Optional</sup> <a name="PlacementInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.placementInput"></a>

```go
func PlacementInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceTagsInput`<sup>Optional</sup> <a name="ResourceTagsInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.resourceTagsInput"></a>

```go
func ResourceTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SnsTopicArnInput`<sup>Optional</sup> <a name="SnsTopicArnInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.snsTopicArnInput"></a>

```go
func SnsTopicArnInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TerminateInstanceOnFailureInput`<sup>Optional</sup> <a name="TerminateInstanceOnFailureInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.terminateInstanceOnFailureInput"></a>

```go
func TerminateInstanceOnFailureInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `InstanceProfileName`<sup>Required</sup> <a name="InstanceProfileName" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceProfileName"></a>

```go
func InstanceProfileName() *string
```

- *Type:* *string

---

##### `InstanceTypes`<sup>Required</sup> <a name="InstanceTypes" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceTypes"></a>

```go
func InstanceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `KeyPair`<sup>Required</sup> <a name="KeyPair" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.keyPair"></a>

```go
func KeyPair() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceTags`<sup>Required</sup> <a name="ResourceTags" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.resourceTags"></a>

```go
func ResourceTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SnsTopicArn`<sup>Required</sup> <a name="SnsTopicArn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.snsTopicArn"></a>

```go
func SnsTopicArn() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TerminateInstanceOnFailure`<sup>Required</sup> <a name="TerminateInstanceOnFailure" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.terminateInstanceOnFailure"></a>

```go
func TerminateInstanceOnFailure() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ImagebuilderInfrastructureConfigurationConfig <a name="ImagebuilderInfrastructureConfigurationConfig" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderinfrastructureconfiguration"

&imagebuilderinfrastructureconfiguration.ImagebuilderInfrastructureConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	InstanceProfileName: *string,
	Name: *string,
	Description: *string,
	InstanceMetadataOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions,
	InstanceTypes: *[]*string,
	KeyPair: *string,
	Logging: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging,
	Placement: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement,
	ResourceTags: *map[string]*string,
	SecurityGroupIds: *[]*string,
	SnsTopicArn: *string,
	SubnetId: *string,
	Tags: *map[string]*string,
	TerminateInstanceOnFailure: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.instanceProfileName">InstanceProfileName</a></code> | <code>*string</code> | The instance profile of the infrastructure configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.name">Name</a></code> | <code>*string</code> | The name of the infrastructure configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.description">Description</a></code> | <code>*string</code> | The description of the infrastructure configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.instanceMetadataOptions">InstanceMetadataOptions</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions">ImagebuilderInfrastructureConfigurationInstanceMetadataOptions</a></code> | The instance metadata option settings for the infrastructure configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.instanceTypes">InstanceTypes</a></code> | <code>*[]*string</code> | The instance types of the infrastructure configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.keyPair">KeyPair</a></code> | <code>*string</code> | The EC2 key pair of the infrastructure configuration.. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.logging">Logging</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging">ImagebuilderInfrastructureConfigurationLogging</a></code> | The logging configuration of the infrastructure configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.placement">Placement</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement">ImagebuilderInfrastructureConfigurationPlacement</a></code> | The placement option settings for the infrastructure configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.resourceTags">ResourceTags</a></code> | <code>*map[string]*string</code> | The tags attached to the resource created by Image Builder. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | The security group IDs of the infrastructure configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.snsTopicArn">SnsTopicArn</a></code> | <code>*string</code> | The SNS Topic Amazon Resource Name (ARN) of the infrastructure configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.subnetId">SubnetId</a></code> | <code>*string</code> | The subnet ID of the infrastructure configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | The tags associated with the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.terminateInstanceOnFailure">TerminateInstanceOnFailure</a></code> | <code>interface{}</code> | The terminate instance on failure configuration of the infrastructure configuration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstanceProfileName`<sup>Required</sup> <a name="InstanceProfileName" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.instanceProfileName"></a>

```go
InstanceProfileName *string
```

- *Type:* *string

The instance profile of the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#instance_profile_name ImagebuilderInfrastructureConfiguration#instance_profile_name}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#name ImagebuilderInfrastructureConfiguration#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#description ImagebuilderInfrastructureConfiguration#description}

---

##### `InstanceMetadataOptions`<sup>Optional</sup> <a name="InstanceMetadataOptions" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.instanceMetadataOptions"></a>

```go
InstanceMetadataOptions ImagebuilderInfrastructureConfigurationInstanceMetadataOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions">ImagebuilderInfrastructureConfigurationInstanceMetadataOptions</a>

The instance metadata option settings for the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#instance_metadata_options ImagebuilderInfrastructureConfiguration#instance_metadata_options}

---

##### `InstanceTypes`<sup>Optional</sup> <a name="InstanceTypes" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.instanceTypes"></a>

```go
InstanceTypes *[]*string
```

- *Type:* *[]*string

The instance types of the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#instance_types ImagebuilderInfrastructureConfiguration#instance_types}

---

##### `KeyPair`<sup>Optional</sup> <a name="KeyPair" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.keyPair"></a>

```go
KeyPair *string
```

- *Type:* *string

The EC2 key pair of the infrastructure configuration..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#key_pair ImagebuilderInfrastructureConfiguration#key_pair}

---

##### `Logging`<sup>Optional</sup> <a name="Logging" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.logging"></a>

```go
Logging ImagebuilderInfrastructureConfigurationLogging
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging">ImagebuilderInfrastructureConfigurationLogging</a>

The logging configuration of the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#logging ImagebuilderInfrastructureConfiguration#logging}

---

##### `Placement`<sup>Optional</sup> <a name="Placement" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.placement"></a>

```go
Placement ImagebuilderInfrastructureConfigurationPlacement
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement">ImagebuilderInfrastructureConfigurationPlacement</a>

The placement option settings for the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#placement ImagebuilderInfrastructureConfiguration#placement}

---

##### `ResourceTags`<sup>Optional</sup> <a name="ResourceTags" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.resourceTags"></a>

```go
ResourceTags *map[string]*string
```

- *Type:* *map[string]*string

The tags attached to the resource created by Image Builder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#resource_tags ImagebuilderInfrastructureConfiguration#resource_tags}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

The security group IDs of the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#security_group_ids ImagebuilderInfrastructureConfiguration#security_group_ids}

---

##### `SnsTopicArn`<sup>Optional</sup> <a name="SnsTopicArn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.snsTopicArn"></a>

```go
SnsTopicArn *string
```

- *Type:* *string

The SNS Topic Amazon Resource Name (ARN) of the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#sns_topic_arn ImagebuilderInfrastructureConfiguration#sns_topic_arn}

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

The subnet ID of the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#subnet_id ImagebuilderInfrastructureConfiguration#subnet_id}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

The tags associated with the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#tags ImagebuilderInfrastructureConfiguration#tags}

---

##### `TerminateInstanceOnFailure`<sup>Optional</sup> <a name="TerminateInstanceOnFailure" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.terminateInstanceOnFailure"></a>

```go
TerminateInstanceOnFailure interface{}
```

- *Type:* interface{}

The terminate instance on failure configuration of the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#terminate_instance_on_failure ImagebuilderInfrastructureConfiguration#terminate_instance_on_failure}

---

### ImagebuilderInfrastructureConfigurationInstanceMetadataOptions <a name="ImagebuilderInfrastructureConfigurationInstanceMetadataOptions" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderinfrastructureconfiguration"

&imagebuilderinfrastructureconfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions {
	HttpPutResponseHopLimit: *f64,
	HttpTokens: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions.property.httpPutResponseHopLimit">HttpPutResponseHopLimit</a></code> | <code>*f64</code> | Limit the number of hops that an instance metadata request can traverse to reach its destination. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions.property.httpTokens">HttpTokens</a></code> | <code>*string</code> | Indicates whether a signed token header is required for instance metadata retrieval requests. |

---

##### `HttpPutResponseHopLimit`<sup>Optional</sup> <a name="HttpPutResponseHopLimit" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions.property.httpPutResponseHopLimit"></a>

```go
HttpPutResponseHopLimit *f64
```

- *Type:* *f64

Limit the number of hops that an instance metadata request can traverse to reach its destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#http_put_response_hop_limit ImagebuilderInfrastructureConfiguration#http_put_response_hop_limit}

---

##### `HttpTokens`<sup>Optional</sup> <a name="HttpTokens" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions.property.httpTokens"></a>

```go
HttpTokens *string
```

- *Type:* *string

Indicates whether a signed token header is required for instance metadata retrieval requests.

The values affect the response as follows:

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#http_tokens ImagebuilderInfrastructureConfiguration#http_tokens}

---

### ImagebuilderInfrastructureConfigurationLogging <a name="ImagebuilderInfrastructureConfigurationLogging" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderinfrastructureconfiguration"

&imagebuilderinfrastructureconfiguration.ImagebuilderInfrastructureConfigurationLogging {
	S3Logs: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging.property.s3Logs">S3Logs</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs">ImagebuilderInfrastructureConfigurationLoggingS3Logs</a></code> | The S3 path in which to store the logs. |

---

##### `S3Logs`<sup>Optional</sup> <a name="S3Logs" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging.property.s3Logs"></a>

```go
S3Logs ImagebuilderInfrastructureConfigurationLoggingS3Logs
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs">ImagebuilderInfrastructureConfigurationLoggingS3Logs</a>

The S3 path in which to store the logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#s3_logs ImagebuilderInfrastructureConfiguration#s3_logs}

---

### ImagebuilderInfrastructureConfigurationLoggingS3Logs <a name="ImagebuilderInfrastructureConfigurationLoggingS3Logs" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderinfrastructureconfiguration"

&imagebuilderinfrastructureconfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs {
	S3BucketName: *string,
	S3KeyPrefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs.property.s3BucketName">S3BucketName</a></code> | <code>*string</code> | S3BucketName. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs.property.s3KeyPrefix">S3KeyPrefix</a></code> | <code>*string</code> | S3KeyPrefix. |

---

##### `S3BucketName`<sup>Optional</sup> <a name="S3BucketName" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs.property.s3BucketName"></a>

```go
S3BucketName *string
```

- *Type:* *string

S3BucketName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#s3_bucket_name ImagebuilderInfrastructureConfiguration#s3_bucket_name}

---

##### `S3KeyPrefix`<sup>Optional</sup> <a name="S3KeyPrefix" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs.property.s3KeyPrefix"></a>

```go
S3KeyPrefix *string
```

- *Type:* *string

S3KeyPrefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#s3_key_prefix ImagebuilderInfrastructureConfiguration#s3_key_prefix}

---

### ImagebuilderInfrastructureConfigurationPlacement <a name="ImagebuilderInfrastructureConfigurationPlacement" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderinfrastructureconfiguration"

&imagebuilderinfrastructureconfiguration.ImagebuilderInfrastructureConfigurationPlacement {
	AvailabilityZone: *string,
	HostId: *string,
	HostResourceGroupArn: *string,
	Tenancy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | AvailabilityZone. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement.property.hostId">HostId</a></code> | <code>*string</code> | HostId. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement.property.hostResourceGroupArn">HostResourceGroupArn</a></code> | <code>*string</code> | HostResourceGroupArn. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement.property.tenancy">Tenancy</a></code> | <code>*string</code> | Tenancy. |

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement.property.availabilityZone"></a>

```go
AvailabilityZone *string
```

- *Type:* *string

AvailabilityZone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#availability_zone ImagebuilderInfrastructureConfiguration#availability_zone}

---

##### `HostId`<sup>Optional</sup> <a name="HostId" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement.property.hostId"></a>

```go
HostId *string
```

- *Type:* *string

HostId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#host_id ImagebuilderInfrastructureConfiguration#host_id}

---

##### `HostResourceGroupArn`<sup>Optional</sup> <a name="HostResourceGroupArn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement.property.hostResourceGroupArn"></a>

```go
HostResourceGroupArn *string
```

- *Type:* *string

HostResourceGroupArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#host_resource_group_arn ImagebuilderInfrastructureConfiguration#host_resource_group_arn}

---

##### `Tenancy`<sup>Optional</sup> <a name="Tenancy" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement.property.tenancy"></a>

```go
Tenancy *string
```

- *Type:* *string

Tenancy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#tenancy ImagebuilderInfrastructureConfiguration#tenancy}

---

## Classes <a name="Classes" id="Classes"></a>

### ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference <a name="ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderinfrastructureconfiguration"

imagebuilderinfrastructureconfiguration.NewImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit">ResetHttpPutResponseHopLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.resetHttpTokens">ResetHttpTokens</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHttpPutResponseHopLimit` <a name="ResetHttpPutResponseHopLimit" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit"></a>

```go
func ResetHttpPutResponseHopLimit()
```

##### `ResetHttpTokens` <a name="ResetHttpTokens" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.resetHttpTokens"></a>

```go
func ResetHttpTokens()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput">HttpPutResponseHopLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.httpTokensInput">HttpTokensInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit">HttpPutResponseHopLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.httpTokens">HttpTokens</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HttpPutResponseHopLimitInput`<sup>Optional</sup> <a name="HttpPutResponseHopLimitInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput"></a>

```go
func HttpPutResponseHopLimitInput() *f64
```

- *Type:* *f64

---

##### `HttpTokensInput`<sup>Optional</sup> <a name="HttpTokensInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.httpTokensInput"></a>

```go
func HttpTokensInput() *string
```

- *Type:* *string

---

##### `HttpPutResponseHopLimit`<sup>Required</sup> <a name="HttpPutResponseHopLimit" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```go
func HttpPutResponseHopLimit() *f64
```

- *Type:* *f64

---

##### `HttpTokens`<sup>Required</sup> <a name="HttpTokens" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.httpTokens"></a>

```go
func HttpTokens() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ImagebuilderInfrastructureConfigurationLoggingOutputReference <a name="ImagebuilderInfrastructureConfigurationLoggingOutputReference" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderinfrastructureconfiguration"

imagebuilderinfrastructureconfiguration.NewImagebuilderInfrastructureConfigurationLoggingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ImagebuilderInfrastructureConfigurationLoggingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.putS3Logs">PutS3Logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.resetS3Logs">ResetS3Logs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Logs` <a name="PutS3Logs" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.putS3Logs"></a>

```go
func PutS3Logs(value ImagebuilderInfrastructureConfigurationLoggingS3Logs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.putS3Logs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs">ImagebuilderInfrastructureConfigurationLoggingS3Logs</a>

---

##### `ResetS3Logs` <a name="ResetS3Logs" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.resetS3Logs"></a>

```go
func ResetS3Logs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.property.s3Logs">S3Logs</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference">ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.property.s3LogsInput">S3LogsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3Logs`<sup>Required</sup> <a name="S3Logs" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.property.s3Logs"></a>

```go
func S3Logs() ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference">ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference</a>

---

##### `S3LogsInput`<sup>Optional</sup> <a name="S3LogsInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.property.s3LogsInput"></a>

```go
func S3LogsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference <a name="ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderinfrastructureconfiguration"

imagebuilderinfrastructureconfiguration.NewImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.resetS3BucketName">ResetS3BucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.resetS3KeyPrefix">ResetS3KeyPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3BucketName` <a name="ResetS3BucketName" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.resetS3BucketName"></a>

```go
func ResetS3BucketName()
```

##### `ResetS3KeyPrefix` <a name="ResetS3KeyPrefix" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.resetS3KeyPrefix"></a>

```go
func ResetS3KeyPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3BucketNameInput">S3BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3KeyPrefixInput">S3KeyPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3BucketName">S3BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3KeyPrefix">S3KeyPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3BucketNameInput`<sup>Optional</sup> <a name="S3BucketNameInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3BucketNameInput"></a>

```go
func S3BucketNameInput() *string
```

- *Type:* *string

---

##### `S3KeyPrefixInput`<sup>Optional</sup> <a name="S3KeyPrefixInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3KeyPrefixInput"></a>

```go
func S3KeyPrefixInput() *string
```

- *Type:* *string

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3BucketName"></a>

```go
func S3BucketName() *string
```

- *Type:* *string

---

##### `S3KeyPrefix`<sup>Required</sup> <a name="S3KeyPrefix" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3KeyPrefix"></a>

```go
func S3KeyPrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ImagebuilderInfrastructureConfigurationPlacementOutputReference <a name="ImagebuilderInfrastructureConfigurationPlacementOutputReference" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuilderinfrastructureconfiguration"

imagebuilderinfrastructureconfiguration.NewImagebuilderInfrastructureConfigurationPlacementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ImagebuilderInfrastructureConfigurationPlacementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.resetHostId">ResetHostId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.resetHostResourceGroupArn">ResetHostResourceGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.resetTenancy">ResetTenancy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.resetAvailabilityZone"></a>

```go
func ResetAvailabilityZone()
```

##### `ResetHostId` <a name="ResetHostId" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.resetHostId"></a>

```go
func ResetHostId()
```

##### `ResetHostResourceGroupArn` <a name="ResetHostResourceGroupArn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.resetHostResourceGroupArn"></a>

```go
func ResetHostResourceGroupArn()
```

##### `ResetTenancy` <a name="ResetTenancy" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.resetTenancy"></a>

```go
func ResetTenancy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.hostIdInput">HostIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.hostResourceGroupArnInput">HostResourceGroupArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.tenancyInput">TenancyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.hostId">HostId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.hostResourceGroupArn">HostResourceGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.tenancy">Tenancy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.availabilityZoneInput"></a>

```go
func AvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `HostIdInput`<sup>Optional</sup> <a name="HostIdInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.hostIdInput"></a>

```go
func HostIdInput() *string
```

- *Type:* *string

---

##### `HostResourceGroupArnInput`<sup>Optional</sup> <a name="HostResourceGroupArnInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.hostResourceGroupArnInput"></a>

```go
func HostResourceGroupArnInput() *string
```

- *Type:* *string

---

##### `TenancyInput`<sup>Optional</sup> <a name="TenancyInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.tenancyInput"></a>

```go
func TenancyInput() *string
```

- *Type:* *string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `HostId`<sup>Required</sup> <a name="HostId" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.hostId"></a>

```go
func HostId() *string
```

- *Type:* *string

---

##### `HostResourceGroupArn`<sup>Required</sup> <a name="HostResourceGroupArn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.hostResourceGroupArn"></a>

```go
func HostResourceGroupArn() *string
```

- *Type:* *string

---

##### `Tenancy`<sup>Required</sup> <a name="Tenancy" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.tenancy"></a>

```go
func Tenancy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



