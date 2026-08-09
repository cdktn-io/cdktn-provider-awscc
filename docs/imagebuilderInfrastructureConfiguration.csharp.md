# `imagebuilderInfrastructureConfiguration` Submodule <a name="`imagebuilderInfrastructureConfiguration` Submodule" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagebuilderInfrastructureConfiguration <a name="ImagebuilderInfrastructureConfiguration" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration awscc_imagebuilder_infrastructure_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderInfrastructureConfiguration(Construct Scope, string Id, ImagebuilderInfrastructureConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig">ImagebuilderInfrastructureConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInstanceMetadataOptions` <a name="PutInstanceMetadataOptions" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.putInstanceMetadataOptions"></a>

```csharp
private void PutInstanceMetadataOptions(ImagebuilderInfrastructureConfigurationInstanceMetadataOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.putInstanceMetadataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions">ImagebuilderInfrastructureConfigurationInstanceMetadataOptions</a>

---

##### `PutLogging` <a name="PutLogging" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.putLogging"></a>

```csharp
private void PutLogging(ImagebuilderInfrastructureConfigurationLogging Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging">ImagebuilderInfrastructureConfigurationLogging</a>

---

##### `PutPlacement` <a name="PutPlacement" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.putPlacement"></a>

```csharp
private void PutPlacement(ImagebuilderInfrastructureConfigurationPlacement Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.putPlacement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement">ImagebuilderInfrastructureConfigurationPlacement</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetInstanceMetadataOptions` <a name="ResetInstanceMetadataOptions" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetInstanceMetadataOptions"></a>

```csharp
private void ResetInstanceMetadataOptions()
```

##### `ResetInstanceTypes` <a name="ResetInstanceTypes" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetInstanceTypes"></a>

```csharp
private void ResetInstanceTypes()
```

##### `ResetKeyPair` <a name="ResetKeyPair" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetKeyPair"></a>

```csharp
private void ResetKeyPair()
```

##### `ResetLogging` <a name="ResetLogging" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetLogging"></a>

```csharp
private void ResetLogging()
```

##### `ResetPlacement` <a name="ResetPlacement" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetPlacement"></a>

```csharp
private void ResetPlacement()
```

##### `ResetResourceTags` <a name="ResetResourceTags" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetResourceTags"></a>

```csharp
private void ResetResourceTags()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSnsTopicArn` <a name="ResetSnsTopicArn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetSnsTopicArn"></a>

```csharp
private void ResetSnsTopicArn()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTerminateInstanceOnFailure` <a name="ResetTerminateInstanceOnFailure" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.resetTerminateInstanceOnFailure"></a>

```csharp
private void ResetTerminateInstanceOnFailure()
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

```csharp
using Io.Cdktn.Providers.Awscc;

ImagebuilderInfrastructureConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ImagebuilderInfrastructureConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ImagebuilderInfrastructureConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ImagebuilderInfrastructureConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ImagebuilderInfrastructureConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ImagebuilderInfrastructureConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ImagebuilderInfrastructureConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ImagebuilderInfrastructureConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceMetadataOptions">InstanceMetadataOptions</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference">ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.logging">Logging</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference">ImagebuilderInfrastructureConfigurationLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.placement">Placement</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference">ImagebuilderInfrastructureConfigurationPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceMetadataOptionsInput">InstanceMetadataOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions">ImagebuilderInfrastructureConfigurationInstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceProfileNameInput">InstanceProfileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceTypesInput">InstanceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.keyPairInput">KeyPairInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.loggingInput">LoggingInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging">ImagebuilderInfrastructureConfigurationLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.placementInput">PlacementInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement">ImagebuilderInfrastructureConfigurationPlacement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.resourceTagsInput">ResourceTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.snsTopicArnInput">SnsTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.terminateInstanceOnFailureInput">TerminateInstanceOnFailureInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceProfileName">InstanceProfileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceTypes">InstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.keyPair">KeyPair</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.resourceTags">ResourceTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.snsTopicArn">SnsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.terminateInstanceOnFailure">TerminateInstanceOnFailure</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceMetadataOptions`<sup>Required</sup> <a name="InstanceMetadataOptions" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceMetadataOptions"></a>

```csharp
public ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference InstanceMetadataOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference">ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference</a>

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.logging"></a>

```csharp
public ImagebuilderInfrastructureConfigurationLoggingOutputReference Logging { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference">ImagebuilderInfrastructureConfigurationLoggingOutputReference</a>

---

##### `Placement`<sup>Required</sup> <a name="Placement" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.placement"></a>

```csharp
public ImagebuilderInfrastructureConfigurationPlacementOutputReference Placement { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference">ImagebuilderInfrastructureConfigurationPlacementOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `InstanceMetadataOptionsInput`<sup>Optional</sup> <a name="InstanceMetadataOptionsInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceMetadataOptionsInput"></a>

```csharp
public IResolvable|ImagebuilderInfrastructureConfigurationInstanceMetadataOptions InstanceMetadataOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions">ImagebuilderInfrastructureConfigurationInstanceMetadataOptions</a>

---

##### `InstanceProfileNameInput`<sup>Optional</sup> <a name="InstanceProfileNameInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceProfileNameInput"></a>

```csharp
public string InstanceProfileNameInput { get; }
```

- *Type:* string

---

##### `InstanceTypesInput`<sup>Optional</sup> <a name="InstanceTypesInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceTypesInput"></a>

```csharp
public string[] InstanceTypesInput { get; }
```

- *Type:* string[]

---

##### `KeyPairInput`<sup>Optional</sup> <a name="KeyPairInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.keyPairInput"></a>

```csharp
public string KeyPairInput { get; }
```

- *Type:* string

---

##### `LoggingInput`<sup>Optional</sup> <a name="LoggingInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.loggingInput"></a>

```csharp
public IResolvable|ImagebuilderInfrastructureConfigurationLogging LoggingInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging">ImagebuilderInfrastructureConfigurationLogging</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PlacementInput`<sup>Optional</sup> <a name="PlacementInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.placementInput"></a>

```csharp
public IResolvable|ImagebuilderInfrastructureConfigurationPlacement PlacementInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement">ImagebuilderInfrastructureConfigurationPlacement</a>

---

##### `ResourceTagsInput`<sup>Optional</sup> <a name="ResourceTagsInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.resourceTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SnsTopicArnInput`<sup>Optional</sup> <a name="SnsTopicArnInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.snsTopicArnInput"></a>

```csharp
public string SnsTopicArnInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TerminateInstanceOnFailureInput`<sup>Optional</sup> <a name="TerminateInstanceOnFailureInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.terminateInstanceOnFailureInput"></a>

```csharp
public bool|IResolvable TerminateInstanceOnFailureInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InstanceProfileName`<sup>Required</sup> <a name="InstanceProfileName" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceProfileName"></a>

```csharp
public string InstanceProfileName { get; }
```

- *Type:* string

---

##### `InstanceTypes`<sup>Required</sup> <a name="InstanceTypes" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.instanceTypes"></a>

```csharp
public string[] InstanceTypes { get; }
```

- *Type:* string[]

---

##### `KeyPair`<sup>Required</sup> <a name="KeyPair" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.keyPair"></a>

```csharp
public string KeyPair { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceTags`<sup>Required</sup> <a name="ResourceTags" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.resourceTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SnsTopicArn`<sup>Required</sup> <a name="SnsTopicArn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.snsTopicArn"></a>

```csharp
public string SnsTopicArn { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TerminateInstanceOnFailure`<sup>Required</sup> <a name="TerminateInstanceOnFailure" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.terminateInstanceOnFailure"></a>

```csharp
public bool|IResolvable TerminateInstanceOnFailure { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ImagebuilderInfrastructureConfigurationConfig <a name="ImagebuilderInfrastructureConfigurationConfig" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderInfrastructureConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string InstanceProfileName,
    string Name,
    string Description = null,
    ImagebuilderInfrastructureConfigurationInstanceMetadataOptions InstanceMetadataOptions = null,
    string[] InstanceTypes = null,
    string KeyPair = null,
    ImagebuilderInfrastructureConfigurationLogging Logging = null,
    ImagebuilderInfrastructureConfigurationPlacement Placement = null,
    System.Collections.Generic.IDictionary<string, string> ResourceTags = null,
    string[] SecurityGroupIds = null,
    string SnsTopicArn = null,
    string SubnetId = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    bool|IResolvable TerminateInstanceOnFailure = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.instanceProfileName">InstanceProfileName</a></code> | <code>string</code> | The instance profile of the infrastructure configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.name">Name</a></code> | <code>string</code> | The name of the infrastructure configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.description">Description</a></code> | <code>string</code> | The description of the infrastructure configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.instanceMetadataOptions">InstanceMetadataOptions</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions">ImagebuilderInfrastructureConfigurationInstanceMetadataOptions</a></code> | The instance metadata option settings for the infrastructure configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.instanceTypes">InstanceTypes</a></code> | <code>string[]</code> | The instance types of the infrastructure configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.keyPair">KeyPair</a></code> | <code>string</code> | The EC2 key pair of the infrastructure configuration.. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.logging">Logging</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging">ImagebuilderInfrastructureConfigurationLogging</a></code> | The logging configuration of the infrastructure configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.placement">Placement</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement">ImagebuilderInfrastructureConfigurationPlacement</a></code> | The placement option settings for the infrastructure configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.resourceTags">ResourceTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The tags attached to the resource created by Image Builder. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | The security group IDs of the infrastructure configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.snsTopicArn">SnsTopicArn</a></code> | <code>string</code> | The SNS Topic Amazon Resource Name (ARN) of the infrastructure configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | The subnet ID of the infrastructure configuration. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The tags associated with the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.terminateInstanceOnFailure">TerminateInstanceOnFailure</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | The terminate instance on failure configuration of the infrastructure configuration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `InstanceProfileName`<sup>Required</sup> <a name="InstanceProfileName" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.instanceProfileName"></a>

```csharp
public string InstanceProfileName { get; set; }
```

- *Type:* string

The instance profile of the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#instance_profile_name ImagebuilderInfrastructureConfiguration#instance_profile_name}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#name ImagebuilderInfrastructureConfiguration#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#description ImagebuilderInfrastructureConfiguration#description}

---

##### `InstanceMetadataOptions`<sup>Optional</sup> <a name="InstanceMetadataOptions" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.instanceMetadataOptions"></a>

```csharp
public ImagebuilderInfrastructureConfigurationInstanceMetadataOptions InstanceMetadataOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions">ImagebuilderInfrastructureConfigurationInstanceMetadataOptions</a>

The instance metadata option settings for the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#instance_metadata_options ImagebuilderInfrastructureConfiguration#instance_metadata_options}

---

##### `InstanceTypes`<sup>Optional</sup> <a name="InstanceTypes" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.instanceTypes"></a>

```csharp
public string[] InstanceTypes { get; set; }
```

- *Type:* string[]

The instance types of the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#instance_types ImagebuilderInfrastructureConfiguration#instance_types}

---

##### `KeyPair`<sup>Optional</sup> <a name="KeyPair" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.keyPair"></a>

```csharp
public string KeyPair { get; set; }
```

- *Type:* string

The EC2 key pair of the infrastructure configuration..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#key_pair ImagebuilderInfrastructureConfiguration#key_pair}

---

##### `Logging`<sup>Optional</sup> <a name="Logging" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.logging"></a>

```csharp
public ImagebuilderInfrastructureConfigurationLogging Logging { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging">ImagebuilderInfrastructureConfigurationLogging</a>

The logging configuration of the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#logging ImagebuilderInfrastructureConfiguration#logging}

---

##### `Placement`<sup>Optional</sup> <a name="Placement" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.placement"></a>

```csharp
public ImagebuilderInfrastructureConfigurationPlacement Placement { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement">ImagebuilderInfrastructureConfigurationPlacement</a>

The placement option settings for the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#placement ImagebuilderInfrastructureConfiguration#placement}

---

##### `ResourceTags`<sup>Optional</sup> <a name="ResourceTags" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.resourceTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The tags attached to the resource created by Image Builder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#resource_tags ImagebuilderInfrastructureConfiguration#resource_tags}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

The security group IDs of the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#security_group_ids ImagebuilderInfrastructureConfiguration#security_group_ids}

---

##### `SnsTopicArn`<sup>Optional</sup> <a name="SnsTopicArn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.snsTopicArn"></a>

```csharp
public string SnsTopicArn { get; set; }
```

- *Type:* string

The SNS Topic Amazon Resource Name (ARN) of the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#sns_topic_arn ImagebuilderInfrastructureConfiguration#sns_topic_arn}

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

The subnet ID of the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#subnet_id ImagebuilderInfrastructureConfiguration#subnet_id}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The tags associated with the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#tags ImagebuilderInfrastructureConfiguration#tags}

---

##### `TerminateInstanceOnFailure`<sup>Optional</sup> <a name="TerminateInstanceOnFailure" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationConfig.property.terminateInstanceOnFailure"></a>

```csharp
public bool|IResolvable TerminateInstanceOnFailure { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

The terminate instance on failure configuration of the infrastructure configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#terminate_instance_on_failure ImagebuilderInfrastructureConfiguration#terminate_instance_on_failure}

---

### ImagebuilderInfrastructureConfigurationInstanceMetadataOptions <a name="ImagebuilderInfrastructureConfigurationInstanceMetadataOptions" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderInfrastructureConfigurationInstanceMetadataOptions {
    double HttpPutResponseHopLimit = null,
    string HttpTokens = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions.property.httpPutResponseHopLimit">HttpPutResponseHopLimit</a></code> | <code>double</code> | Limit the number of hops that an instance metadata request can traverse to reach its destination. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions.property.httpTokens">HttpTokens</a></code> | <code>string</code> | Indicates whether a signed token header is required for instance metadata retrieval requests. |

---

##### `HttpPutResponseHopLimit`<sup>Optional</sup> <a name="HttpPutResponseHopLimit" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions.property.httpPutResponseHopLimit"></a>

```csharp
public double HttpPutResponseHopLimit { get; set; }
```

- *Type:* double

Limit the number of hops that an instance metadata request can traverse to reach its destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#http_put_response_hop_limit ImagebuilderInfrastructureConfiguration#http_put_response_hop_limit}

---

##### `HttpTokens`<sup>Optional</sup> <a name="HttpTokens" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions.property.httpTokens"></a>

```csharp
public string HttpTokens { get; set; }
```

- *Type:* string

Indicates whether a signed token header is required for instance metadata retrieval requests.

The values affect the response as follows:

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#http_tokens ImagebuilderInfrastructureConfiguration#http_tokens}

---

### ImagebuilderInfrastructureConfigurationLogging <a name="ImagebuilderInfrastructureConfigurationLogging" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderInfrastructureConfigurationLogging {
    ImagebuilderInfrastructureConfigurationLoggingS3Logs S3Logs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging.property.s3Logs">S3Logs</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs">ImagebuilderInfrastructureConfigurationLoggingS3Logs</a></code> | The S3 path in which to store the logs. |

---

##### `S3Logs`<sup>Optional</sup> <a name="S3Logs" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging.property.s3Logs"></a>

```csharp
public ImagebuilderInfrastructureConfigurationLoggingS3Logs S3Logs { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs">ImagebuilderInfrastructureConfigurationLoggingS3Logs</a>

The S3 path in which to store the logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#s3_logs ImagebuilderInfrastructureConfiguration#s3_logs}

---

### ImagebuilderInfrastructureConfigurationLoggingS3Logs <a name="ImagebuilderInfrastructureConfigurationLoggingS3Logs" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderInfrastructureConfigurationLoggingS3Logs {
    string S3BucketName = null,
    string S3KeyPrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs.property.s3BucketName">S3BucketName</a></code> | <code>string</code> | S3BucketName. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs.property.s3KeyPrefix">S3KeyPrefix</a></code> | <code>string</code> | S3KeyPrefix. |

---

##### `S3BucketName`<sup>Optional</sup> <a name="S3BucketName" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs.property.s3BucketName"></a>

```csharp
public string S3BucketName { get; set; }
```

- *Type:* string

S3BucketName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#s3_bucket_name ImagebuilderInfrastructureConfiguration#s3_bucket_name}

---

##### `S3KeyPrefix`<sup>Optional</sup> <a name="S3KeyPrefix" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs.property.s3KeyPrefix"></a>

```csharp
public string S3KeyPrefix { get; set; }
```

- *Type:* string

S3KeyPrefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#s3_key_prefix ImagebuilderInfrastructureConfiguration#s3_key_prefix}

---

### ImagebuilderInfrastructureConfigurationPlacement <a name="ImagebuilderInfrastructureConfigurationPlacement" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderInfrastructureConfigurationPlacement {
    string AvailabilityZone = null,
    string HostId = null,
    string HostResourceGroupArn = null,
    string Tenancy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | AvailabilityZone. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement.property.hostId">HostId</a></code> | <code>string</code> | HostId. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement.property.hostResourceGroupArn">HostResourceGroupArn</a></code> | <code>string</code> | HostResourceGroupArn. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement.property.tenancy">Tenancy</a></code> | <code>string</code> | Tenancy. |

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

AvailabilityZone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#availability_zone ImagebuilderInfrastructureConfiguration#availability_zone}

---

##### `HostId`<sup>Optional</sup> <a name="HostId" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement.property.hostId"></a>

```csharp
public string HostId { get; set; }
```

- *Type:* string

HostId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#host_id ImagebuilderInfrastructureConfiguration#host_id}

---

##### `HostResourceGroupArn`<sup>Optional</sup> <a name="HostResourceGroupArn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement.property.hostResourceGroupArn"></a>

```csharp
public string HostResourceGroupArn { get; set; }
```

- *Type:* string

HostResourceGroupArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#host_resource_group_arn ImagebuilderInfrastructureConfiguration#host_resource_group_arn}

---

##### `Tenancy`<sup>Optional</sup> <a name="Tenancy" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement.property.tenancy"></a>

```csharp
public string Tenancy { get; set; }
```

- *Type:* string

Tenancy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/imagebuilder_infrastructure_configuration#tenancy ImagebuilderInfrastructureConfiguration#tenancy}

---

## Classes <a name="Classes" id="Classes"></a>

### ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference <a name="ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHttpPutResponseHopLimit` <a name="ResetHttpPutResponseHopLimit" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit"></a>

```csharp
private void ResetHttpPutResponseHopLimit()
```

##### `ResetHttpTokens` <a name="ResetHttpTokens" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.resetHttpTokens"></a>

```csharp
private void ResetHttpTokens()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput">HttpPutResponseHopLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.httpTokensInput">HttpTokensInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit">HttpPutResponseHopLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.httpTokens">HttpTokens</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions">ImagebuilderInfrastructureConfigurationInstanceMetadataOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HttpPutResponseHopLimitInput`<sup>Optional</sup> <a name="HttpPutResponseHopLimitInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput"></a>

```csharp
public double HttpPutResponseHopLimitInput { get; }
```

- *Type:* double

---

##### `HttpTokensInput`<sup>Optional</sup> <a name="HttpTokensInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.httpTokensInput"></a>

```csharp
public string HttpTokensInput { get; }
```

- *Type:* string

---

##### `HttpPutResponseHopLimit`<sup>Required</sup> <a name="HttpPutResponseHopLimit" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```csharp
public double HttpPutResponseHopLimit { get; }
```

- *Type:* double

---

##### `HttpTokens`<sup>Required</sup> <a name="HttpTokens" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.httpTokens"></a>

```csharp
public string HttpTokens { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderInfrastructureConfigurationInstanceMetadataOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationInstanceMetadataOptions">ImagebuilderInfrastructureConfigurationInstanceMetadataOptions</a>

---


### ImagebuilderInfrastructureConfigurationLoggingOutputReference <a name="ImagebuilderInfrastructureConfigurationLoggingOutputReference" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderInfrastructureConfigurationLoggingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Logs` <a name="PutS3Logs" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.putS3Logs"></a>

```csharp
private void PutS3Logs(ImagebuilderInfrastructureConfigurationLoggingS3Logs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.putS3Logs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs">ImagebuilderInfrastructureConfigurationLoggingS3Logs</a>

---

##### `ResetS3Logs` <a name="ResetS3Logs" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.resetS3Logs"></a>

```csharp
private void ResetS3Logs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.property.s3Logs">S3Logs</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference">ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.property.s3LogsInput">S3LogsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs">ImagebuilderInfrastructureConfigurationLoggingS3Logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging">ImagebuilderInfrastructureConfigurationLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Logs`<sup>Required</sup> <a name="S3Logs" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.property.s3Logs"></a>

```csharp
public ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference S3Logs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference">ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference</a>

---

##### `S3LogsInput`<sup>Optional</sup> <a name="S3LogsInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.property.s3LogsInput"></a>

```csharp
public IResolvable|ImagebuilderInfrastructureConfigurationLoggingS3Logs S3LogsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs">ImagebuilderInfrastructureConfigurationLoggingS3Logs</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderInfrastructureConfigurationLogging InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLogging">ImagebuilderInfrastructureConfigurationLogging</a>

---


### ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference <a name="ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3BucketName` <a name="ResetS3BucketName" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.resetS3BucketName"></a>

```csharp
private void ResetS3BucketName()
```

##### `ResetS3KeyPrefix` <a name="ResetS3KeyPrefix" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.resetS3KeyPrefix"></a>

```csharp
private void ResetS3KeyPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3BucketNameInput">S3BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3KeyPrefixInput">S3KeyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3BucketName">S3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3KeyPrefix">S3KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs">ImagebuilderInfrastructureConfigurationLoggingS3Logs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3BucketNameInput`<sup>Optional</sup> <a name="S3BucketNameInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3BucketNameInput"></a>

```csharp
public string S3BucketNameInput { get; }
```

- *Type:* string

---

##### `S3KeyPrefixInput`<sup>Optional</sup> <a name="S3KeyPrefixInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3KeyPrefixInput"></a>

```csharp
public string S3KeyPrefixInput { get; }
```

- *Type:* string

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3BucketName"></a>

```csharp
public string S3BucketName { get; }
```

- *Type:* string

---

##### `S3KeyPrefix`<sup>Required</sup> <a name="S3KeyPrefix" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.s3KeyPrefix"></a>

```csharp
public string S3KeyPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderInfrastructureConfigurationLoggingS3Logs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationLoggingS3Logs">ImagebuilderInfrastructureConfigurationLoggingS3Logs</a>

---


### ImagebuilderInfrastructureConfigurationPlacementOutputReference <a name="ImagebuilderInfrastructureConfigurationPlacementOutputReference" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderInfrastructureConfigurationPlacementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.resetAvailabilityZone"></a>

```csharp
private void ResetAvailabilityZone()
```

##### `ResetHostId` <a name="ResetHostId" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.resetHostId"></a>

```csharp
private void ResetHostId()
```

##### `ResetHostResourceGroupArn` <a name="ResetHostResourceGroupArn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.resetHostResourceGroupArn"></a>

```csharp
private void ResetHostResourceGroupArn()
```

##### `ResetTenancy` <a name="ResetTenancy" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.resetTenancy"></a>

```csharp
private void ResetTenancy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.hostIdInput">HostIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.hostResourceGroupArnInput">HostResourceGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.tenancyInput">TenancyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.hostId">HostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.hostResourceGroupArn">HostResourceGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.tenancy">Tenancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement">ImagebuilderInfrastructureConfigurationPlacement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `HostIdInput`<sup>Optional</sup> <a name="HostIdInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.hostIdInput"></a>

```csharp
public string HostIdInput { get; }
```

- *Type:* string

---

##### `HostResourceGroupArnInput`<sup>Optional</sup> <a name="HostResourceGroupArnInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.hostResourceGroupArnInput"></a>

```csharp
public string HostResourceGroupArnInput { get; }
```

- *Type:* string

---

##### `TenancyInput`<sup>Optional</sup> <a name="TenancyInput" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.tenancyInput"></a>

```csharp
public string TenancyInput { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `HostId`<sup>Required</sup> <a name="HostId" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.hostId"></a>

```csharp
public string HostId { get; }
```

- *Type:* string

---

##### `HostResourceGroupArn`<sup>Required</sup> <a name="HostResourceGroupArn" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.hostResourceGroupArn"></a>

```csharp
public string HostResourceGroupArn { get; }
```

- *Type:* string

---

##### `Tenancy`<sup>Required</sup> <a name="Tenancy" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.tenancy"></a>

```csharp
public string Tenancy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacementOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderInfrastructureConfigurationPlacement InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderInfrastructureConfiguration.ImagebuilderInfrastructureConfigurationPlacement">ImagebuilderInfrastructureConfigurationPlacement</a>

---



