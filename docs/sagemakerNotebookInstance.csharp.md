# `sagemakerNotebookInstance` Submodule <a name="`sagemakerNotebookInstance` Submodule" id="@cdktn/provider-awscc.sagemakerNotebookInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerNotebookInstance <a name="SagemakerNotebookInstance" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance awscc_sagemaker_notebook_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerNotebookInstance(Construct Scope, string Id, SagemakerNotebookInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig">SagemakerNotebookInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig">SagemakerNotebookInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.putInstanceMetadataServiceConfiguration">PutInstanceMetadataServiceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetAcceleratorTypes">ResetAcceleratorTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetAdditionalCodeRepositories">ResetAdditionalCodeRepositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetDefaultCodeRepository">ResetDefaultCodeRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetDirectInternetAccess">ResetDirectInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetInstanceMetadataServiceConfiguration">ResetInstanceMetadataServiceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetLifecycleConfigName">ResetLifecycleConfigName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetNotebookInstanceName">ResetNotebookInstanceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetPlatformIdentifier">ResetPlatformIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetRootAccess">ResetRootAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetVolumeSizeInGb">ResetVolumeSizeInGb</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInstanceMetadataServiceConfiguration` <a name="PutInstanceMetadataServiceConfiguration" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.putInstanceMetadataServiceConfiguration"></a>

```csharp
private void PutInstanceMetadataServiceConfiguration(SagemakerNotebookInstanceInstanceMetadataServiceConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.putInstanceMetadataServiceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration">SagemakerNotebookInstanceInstanceMetadataServiceConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.putTags"></a>

```csharp
private void PutTags(IResolvable|SagemakerNotebookInstanceTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags">SagemakerNotebookInstanceTags</a>[]

---

##### `ResetAcceleratorTypes` <a name="ResetAcceleratorTypes" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetAcceleratorTypes"></a>

```csharp
private void ResetAcceleratorTypes()
```

##### `ResetAdditionalCodeRepositories` <a name="ResetAdditionalCodeRepositories" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetAdditionalCodeRepositories"></a>

```csharp
private void ResetAdditionalCodeRepositories()
```

##### `ResetDefaultCodeRepository` <a name="ResetDefaultCodeRepository" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetDefaultCodeRepository"></a>

```csharp
private void ResetDefaultCodeRepository()
```

##### `ResetDirectInternetAccess` <a name="ResetDirectInternetAccess" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetDirectInternetAccess"></a>

```csharp
private void ResetDirectInternetAccess()
```

##### `ResetInstanceMetadataServiceConfiguration` <a name="ResetInstanceMetadataServiceConfiguration" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetInstanceMetadataServiceConfiguration"></a>

```csharp
private void ResetInstanceMetadataServiceConfiguration()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetLifecycleConfigName` <a name="ResetLifecycleConfigName" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetLifecycleConfigName"></a>

```csharp
private void ResetLifecycleConfigName()
```

##### `ResetNotebookInstanceName` <a name="ResetNotebookInstanceName" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetNotebookInstanceName"></a>

```csharp
private void ResetNotebookInstanceName()
```

##### `ResetPlatformIdentifier` <a name="ResetPlatformIdentifier" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetPlatformIdentifier"></a>

```csharp
private void ResetPlatformIdentifier()
```

##### `ResetRootAccess` <a name="ResetRootAccess" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetRootAccess"></a>

```csharp
private void ResetRootAccess()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVolumeSizeInGb` <a name="ResetVolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.resetVolumeSizeInGb"></a>

```csharp
private void ResetVolumeSizeInGb()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerNotebookInstance resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SagemakerNotebookInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SagemakerNotebookInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SagemakerNotebookInstance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SagemakerNotebookInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SagemakerNotebookInstance resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerNotebookInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerNotebookInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerNotebookInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.instanceMetadataServiceConfiguration">InstanceMetadataServiceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference">SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.notebookInstanceArn">NotebookInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList">SagemakerNotebookInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.acceleratorTypesInput">AcceleratorTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.additionalCodeRepositoriesInput">AdditionalCodeRepositoriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.defaultCodeRepositoryInput">DefaultCodeRepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.directInternetAccessInput">DirectInternetAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.instanceMetadataServiceConfigurationInput">InstanceMetadataServiceConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration">SagemakerNotebookInstanceInstanceMetadataServiceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.lifecycleConfigNameInput">LifecycleConfigNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.notebookInstanceNameInput">NotebookInstanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.platformIdentifierInput">PlatformIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.rootAccessInput">RootAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags">SagemakerNotebookInstanceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.volumeSizeInGbInput">VolumeSizeInGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.acceleratorTypes">AcceleratorTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.additionalCodeRepositories">AdditionalCodeRepositories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.defaultCodeRepository">DefaultCodeRepository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.directInternetAccess">DirectInternetAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.lifecycleConfigName">LifecycleConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.notebookInstanceName">NotebookInstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.platformIdentifier">PlatformIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.rootAccess">RootAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.volumeSizeInGb">VolumeSizeInGb</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceMetadataServiceConfiguration`<sup>Required</sup> <a name="InstanceMetadataServiceConfiguration" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.instanceMetadataServiceConfiguration"></a>

```csharp
public SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference InstanceMetadataServiceConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference">SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference</a>

---

##### `NotebookInstanceArn`<sup>Required</sup> <a name="NotebookInstanceArn" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.notebookInstanceArn"></a>

```csharp
public string NotebookInstanceArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.tags"></a>

```csharp
public SagemakerNotebookInstanceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList">SagemakerNotebookInstanceTagsList</a>

---

##### `AcceleratorTypesInput`<sup>Optional</sup> <a name="AcceleratorTypesInput" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.acceleratorTypesInput"></a>

```csharp
public string[] AcceleratorTypesInput { get; }
```

- *Type:* string[]

---

##### `AdditionalCodeRepositoriesInput`<sup>Optional</sup> <a name="AdditionalCodeRepositoriesInput" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.additionalCodeRepositoriesInput"></a>

```csharp
public string[] AdditionalCodeRepositoriesInput { get; }
```

- *Type:* string[]

---

##### `DefaultCodeRepositoryInput`<sup>Optional</sup> <a name="DefaultCodeRepositoryInput" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.defaultCodeRepositoryInput"></a>

```csharp
public string DefaultCodeRepositoryInput { get; }
```

- *Type:* string

---

##### `DirectInternetAccessInput`<sup>Optional</sup> <a name="DirectInternetAccessInput" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.directInternetAccessInput"></a>

```csharp
public string DirectInternetAccessInput { get; }
```

- *Type:* string

---

##### `InstanceMetadataServiceConfigurationInput`<sup>Optional</sup> <a name="InstanceMetadataServiceConfigurationInput" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.instanceMetadataServiceConfigurationInput"></a>

```csharp
public IResolvable|SagemakerNotebookInstanceInstanceMetadataServiceConfiguration InstanceMetadataServiceConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration">SagemakerNotebookInstanceInstanceMetadataServiceConfiguration</a>

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `LifecycleConfigNameInput`<sup>Optional</sup> <a name="LifecycleConfigNameInput" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.lifecycleConfigNameInput"></a>

```csharp
public string LifecycleConfigNameInput { get; }
```

- *Type:* string

---

##### `NotebookInstanceNameInput`<sup>Optional</sup> <a name="NotebookInstanceNameInput" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.notebookInstanceNameInput"></a>

```csharp
public string NotebookInstanceNameInput { get; }
```

- *Type:* string

---

##### `PlatformIdentifierInput`<sup>Optional</sup> <a name="PlatformIdentifierInput" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.platformIdentifierInput"></a>

```csharp
public string PlatformIdentifierInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `RootAccessInput`<sup>Optional</sup> <a name="RootAccessInput" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.rootAccessInput"></a>

```csharp
public string RootAccessInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.tagsInput"></a>

```csharp
public IResolvable|SagemakerNotebookInstanceTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags">SagemakerNotebookInstanceTags</a>[]

---

##### `VolumeSizeInGbInput`<sup>Optional</sup> <a name="VolumeSizeInGbInput" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.volumeSizeInGbInput"></a>

```csharp
public double VolumeSizeInGbInput { get; }
```

- *Type:* double

---

##### `AcceleratorTypes`<sup>Required</sup> <a name="AcceleratorTypes" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.acceleratorTypes"></a>

```csharp
public string[] AcceleratorTypes { get; }
```

- *Type:* string[]

---

##### `AdditionalCodeRepositories`<sup>Required</sup> <a name="AdditionalCodeRepositories" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.additionalCodeRepositories"></a>

```csharp
public string[] AdditionalCodeRepositories { get; }
```

- *Type:* string[]

---

##### `DefaultCodeRepository`<sup>Required</sup> <a name="DefaultCodeRepository" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.defaultCodeRepository"></a>

```csharp
public string DefaultCodeRepository { get; }
```

- *Type:* string

---

##### `DirectInternetAccess`<sup>Required</sup> <a name="DirectInternetAccess" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.directInternetAccess"></a>

```csharp
public string DirectInternetAccess { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `LifecycleConfigName`<sup>Required</sup> <a name="LifecycleConfigName" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.lifecycleConfigName"></a>

```csharp
public string LifecycleConfigName { get; }
```

- *Type:* string

---

##### `NotebookInstanceName`<sup>Required</sup> <a name="NotebookInstanceName" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.notebookInstanceName"></a>

```csharp
public string NotebookInstanceName { get; }
```

- *Type:* string

---

##### `PlatformIdentifier`<sup>Required</sup> <a name="PlatformIdentifier" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.platformIdentifier"></a>

```csharp
public string PlatformIdentifier { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `RootAccess`<sup>Required</sup> <a name="RootAccess" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.rootAccess"></a>

```csharp
public string RootAccess { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `VolumeSizeInGb`<sup>Required</sup> <a name="VolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.volumeSizeInGb"></a>

```csharp
public double VolumeSizeInGb { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerNotebookInstanceConfig <a name="SagemakerNotebookInstanceConfig" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerNotebookInstanceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string InstanceType,
    string RoleArn,
    string[] AcceleratorTypes = null,
    string[] AdditionalCodeRepositories = null,
    string DefaultCodeRepository = null,
    string DirectInternetAccess = null,
    SagemakerNotebookInstanceInstanceMetadataServiceConfiguration InstanceMetadataServiceConfiguration = null,
    string KmsKeyId = null,
    string LifecycleConfigName = null,
    string NotebookInstanceName = null,
    string PlatformIdentifier = null,
    string RootAccess = null,
    string[] SecurityGroupIds = null,
    string SubnetId = null,
    IResolvable|SagemakerNotebookInstanceTags[] Tags = null,
    double VolumeSizeInGb = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.instanceType">InstanceType</a></code> | <code>string</code> | The type of ML compute instance to launch for the notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | When you send any requests to AWS resources from the notebook instance, SageMaker AI assumes this role to perform tasks on your behalf. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.acceleratorTypes">AcceleratorTypes</a></code> | <code>string[]</code> | A list of Amazon Elastic Inference (EI) instance types to associate with the notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.additionalCodeRepositories">AdditionalCodeRepositories</a></code> | <code>string[]</code> | An array of up to three Git repositories associated with the notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.defaultCodeRepository">DefaultCodeRepository</a></code> | <code>string</code> | The Git repository associated with the notebook instance as its default code repository. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.directInternetAccess">DirectInternetAccess</a></code> | <code>string</code> | Sets whether SageMaker AI provides internet access to the notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.instanceMetadataServiceConfiguration">InstanceMetadataServiceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration">SagemakerNotebookInstanceInstanceMetadataServiceConfiguration</a></code> | Information on the IMDS configuration of the notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of a AWS Key Management Service key that SageMaker AI uses to encrypt data on the storage volume attached to your notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.lifecycleConfigName">LifecycleConfigName</a></code> | <code>string</code> | The name of a lifecycle configuration to associate with the notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.notebookInstanceName">NotebookInstanceName</a></code> | <code>string</code> | The name of the new notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.platformIdentifier">PlatformIdentifier</a></code> | <code>string</code> | The platform identifier of the notebook instance runtime environment. The default value is notebook-al2023-v1. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.rootAccess">RootAccess</a></code> | <code>string</code> | Whether root access is enabled or disabled for users of the notebook instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | The VPC security group IDs, in the form sg-xxxxxxxx. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | The ID of the subnet in a VPC to which you would like to have a connectivity from your ML compute instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags">SagemakerNotebookInstanceTags</a>[]</code> | A list of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.volumeSizeInGb">VolumeSizeInGb</a></code> | <code>double</code> | The size, in GB, of the ML storage volume to attach to the notebook instance. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

The type of ML compute instance to launch for the notebook instance.

Expect some interruption of service if this parameter is changed as CloudFormation stops a notebook instance and starts it up again to update it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance#instance_type SagemakerNotebookInstance#instance_type}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

When you send any requests to AWS resources from the notebook instance, SageMaker AI assumes this role to perform tasks on your behalf.

You must grant this role necessary permissions so SageMaker AI can perform these tasks. The policy must allow the SageMaker AI service principal (sagemaker.amazonaws.com) permissions to assume this role. To be able to pass this role to SageMaker AI, the caller of this API must have the iam:PassRole permission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance#role_arn SagemakerNotebookInstance#role_arn}

---

##### `AcceleratorTypes`<sup>Optional</sup> <a name="AcceleratorTypes" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.acceleratorTypes"></a>

```csharp
public string[] AcceleratorTypes { get; set; }
```

- *Type:* string[]

A list of Amazon Elastic Inference (EI) instance types to associate with the notebook instance.

Currently, only one instance type can be associated with a notebook instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance#accelerator_types SagemakerNotebookInstance#accelerator_types}

---

##### `AdditionalCodeRepositories`<sup>Optional</sup> <a name="AdditionalCodeRepositories" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.additionalCodeRepositories"></a>

```csharp
public string[] AdditionalCodeRepositories { get; set; }
```

- *Type:* string[]

An array of up to three Git repositories associated with the notebook instance.

These can be either the names of Git repositories stored as resources in your account, or the URL of Git repositories in AWS CodeCommit or in any other Git repository. These repositories are cloned at the same level as the default repository of your notebook instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance#additional_code_repositories SagemakerNotebookInstance#additional_code_repositories}

---

##### `DefaultCodeRepository`<sup>Optional</sup> <a name="DefaultCodeRepository" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.defaultCodeRepository"></a>

```csharp
public string DefaultCodeRepository { get; set; }
```

- *Type:* string

The Git repository associated with the notebook instance as its default code repository.

This can be either the name of a Git repository stored as a resource in your account, or the URL of a Git repository in AWS CodeCommit or in any other Git repository. When you open a notebook instance, it opens in the directory that contains this repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance#default_code_repository SagemakerNotebookInstance#default_code_repository}

---

##### `DirectInternetAccess`<sup>Optional</sup> <a name="DirectInternetAccess" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.directInternetAccess"></a>

```csharp
public string DirectInternetAccess { get; set; }
```

- *Type:* string

Sets whether SageMaker AI provides internet access to the notebook instance.

If you set this to Disabled this notebook instance is able to access resources only in your VPC, and is not be able to connect to SageMaker AI training and endpoint services unless you configure a NAT Gateway in your VPC. You can set the value of this parameter to Disabled only if you set a value for the SubnetId parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance#direct_internet_access SagemakerNotebookInstance#direct_internet_access}

---

##### `InstanceMetadataServiceConfiguration`<sup>Optional</sup> <a name="InstanceMetadataServiceConfiguration" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.instanceMetadataServiceConfiguration"></a>

```csharp
public SagemakerNotebookInstanceInstanceMetadataServiceConfiguration InstanceMetadataServiceConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration">SagemakerNotebookInstanceInstanceMetadataServiceConfiguration</a>

Information on the IMDS configuration of the notebook instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance#instance_metadata_service_configuration SagemakerNotebookInstance#instance_metadata_service_configuration}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of a AWS Key Management Service key that SageMaker AI uses to encrypt data on the storage volume attached to your notebook instance.

The KMS key you provide must be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance#kms_key_id SagemakerNotebookInstance#kms_key_id}

---

##### `LifecycleConfigName`<sup>Optional</sup> <a name="LifecycleConfigName" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.lifecycleConfigName"></a>

```csharp
public string LifecycleConfigName { get; set; }
```

- *Type:* string

The name of a lifecycle configuration to associate with the notebook instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance#lifecycle_config_name SagemakerNotebookInstance#lifecycle_config_name}

---

##### `NotebookInstanceName`<sup>Optional</sup> <a name="NotebookInstanceName" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.notebookInstanceName"></a>

```csharp
public string NotebookInstanceName { get; set; }
```

- *Type:* string

The name of the new notebook instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance#notebook_instance_name SagemakerNotebookInstance#notebook_instance_name}

---

##### `PlatformIdentifier`<sup>Optional</sup> <a name="PlatformIdentifier" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.platformIdentifier"></a>

```csharp
public string PlatformIdentifier { get; set; }
```

- *Type:* string

The platform identifier of the notebook instance runtime environment. The default value is notebook-al2023-v1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance#platform_identifier SagemakerNotebookInstance#platform_identifier}

---

##### `RootAccess`<sup>Optional</sup> <a name="RootAccess" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.rootAccess"></a>

```csharp
public string RootAccess { get; set; }
```

- *Type:* string

Whether root access is enabled or disabled for users of the notebook instance.

The default value is Enabled. Lifecycle configurations need root access to be able to set up a notebook instance. Because of this, lifecycle configurations associated with a notebook instance always run with root access even if you disable root access for users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance#root_access SagemakerNotebookInstance#root_access}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

The VPC security group IDs, in the form sg-xxxxxxxx.

The security groups must be for the same VPC as specified in the subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance#security_group_ids SagemakerNotebookInstance#security_group_ids}

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

The ID of the subnet in a VPC to which you would like to have a connectivity from your ML compute instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance#subnet_id SagemakerNotebookInstance#subnet_id}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.tags"></a>

```csharp
public IResolvable|SagemakerNotebookInstanceTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags">SagemakerNotebookInstanceTags</a>[]

A list of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance#tags SagemakerNotebookInstance#tags}

---

##### `VolumeSizeInGb`<sup>Optional</sup> <a name="VolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceConfig.property.volumeSizeInGb"></a>

```csharp
public double VolumeSizeInGb { get; set; }
```

- *Type:* double

The size, in GB, of the ML storage volume to attach to the notebook instance.

The default value is 5 GB. Expect some interruption of service if this parameter is changed as CloudFormation stops a notebook instance and starts it up again to update it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance#volume_size_in_gb SagemakerNotebookInstance#volume_size_in_gb}

---

### SagemakerNotebookInstanceInstanceMetadataServiceConfiguration <a name="SagemakerNotebookInstanceInstanceMetadataServiceConfiguration" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerNotebookInstanceInstanceMetadataServiceConfiguration {
    string MinimumInstanceMetadataServiceVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration.property.minimumInstanceMetadataServiceVersion">MinimumInstanceMetadataServiceVersion</a></code> | <code>string</code> | Indicates the minimum IMDS version that the notebook instance supports. |

---

##### `MinimumInstanceMetadataServiceVersion`<sup>Optional</sup> <a name="MinimumInstanceMetadataServiceVersion" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration.property.minimumInstanceMetadataServiceVersion"></a>

```csharp
public string MinimumInstanceMetadataServiceVersion { get; set; }
```

- *Type:* string

Indicates the minimum IMDS version that the notebook instance supports.

When passed as part of CreateNotebookInstance, if no value is selected, then it defaults to IMDSv1. This means that both IMDSv1 and IMDSv2 are supported. If passed as part of UpdateNotebookInstance, there is no default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance#minimum_instance_metadata_service_version SagemakerNotebookInstance#minimum_instance_metadata_service_version}

---

### SagemakerNotebookInstanceTags <a name="SagemakerNotebookInstanceTags" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerNotebookInstanceTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags.property.key">Key</a></code> | <code>string</code> | The tag key. Tag keys must be unique per resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags.property.value">Value</a></code> | <code>string</code> | The tag value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The tag key. Tag keys must be unique per resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance#key SagemakerNotebookInstance#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_notebook_instance#value SagemakerNotebookInstance#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference <a name="SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.resetMinimumInstanceMetadataServiceVersion">ResetMinimumInstanceMetadataServiceVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMinimumInstanceMetadataServiceVersion` <a name="ResetMinimumInstanceMetadataServiceVersion" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.resetMinimumInstanceMetadataServiceVersion"></a>

```csharp
private void ResetMinimumInstanceMetadataServiceVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.minimumInstanceMetadataServiceVersionInput">MinimumInstanceMetadataServiceVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.minimumInstanceMetadataServiceVersion">MinimumInstanceMetadataServiceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration">SagemakerNotebookInstanceInstanceMetadataServiceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MinimumInstanceMetadataServiceVersionInput`<sup>Optional</sup> <a name="MinimumInstanceMetadataServiceVersionInput" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.minimumInstanceMetadataServiceVersionInput"></a>

```csharp
public string MinimumInstanceMetadataServiceVersionInput { get; }
```

- *Type:* string

---

##### `MinimumInstanceMetadataServiceVersion`<sup>Required</sup> <a name="MinimumInstanceMetadataServiceVersion" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.minimumInstanceMetadataServiceVersion"></a>

```csharp
public string MinimumInstanceMetadataServiceVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerNotebookInstanceInstanceMetadataServiceConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceInstanceMetadataServiceConfiguration">SagemakerNotebookInstanceInstanceMetadataServiceConfiguration</a>

---


### SagemakerNotebookInstanceTagsList <a name="SagemakerNotebookInstanceTagsList" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerNotebookInstanceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.get"></a>

```csharp
private SagemakerNotebookInstanceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags">SagemakerNotebookInstanceTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerNotebookInstanceTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags">SagemakerNotebookInstanceTags</a>[]

---


### SagemakerNotebookInstanceTagsOutputReference <a name="SagemakerNotebookInstanceTagsOutputReference" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerNotebookInstanceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags">SagemakerNotebookInstanceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerNotebookInstanceTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerNotebookInstance.SagemakerNotebookInstanceTags">SagemakerNotebookInstanceTags</a>

---



