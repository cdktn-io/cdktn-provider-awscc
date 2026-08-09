# `mwaaserverlessWorkflow` Submodule <a name="`mwaaserverlessWorkflow` Submodule" id="@cdktn/provider-awscc.mwaaserverlessWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwaaserverlessWorkflow <a name="MwaaserverlessWorkflow" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow awscc_mwaaserverless_workflow}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MwaaserverlessWorkflow(Construct Scope, string Id, MwaaserverlessWorkflowConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig">MwaaserverlessWorkflowConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig">MwaaserverlessWorkflowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putDefinitionS3Location">PutDefinitionS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putEncryptionConfiguration">PutEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putLoggingConfiguration">PutLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putNetworkConfiguration">PutNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetEncryptionConfiguration">ResetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetLoggingConfiguration">ResetLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetNetworkConfiguration">ResetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetTriggerMode">ResetTriggerMode</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDefinitionS3Location` <a name="PutDefinitionS3Location" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putDefinitionS3Location"></a>

```csharp
private void PutDefinitionS3Location(MwaaserverlessWorkflowDefinitionS3Location Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putDefinitionS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location">MwaaserverlessWorkflowDefinitionS3Location</a>

---

##### `PutEncryptionConfiguration` <a name="PutEncryptionConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putEncryptionConfiguration"></a>

```csharp
private void PutEncryptionConfiguration(MwaaserverlessWorkflowEncryptionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration">MwaaserverlessWorkflowEncryptionConfiguration</a>

---

##### `PutLoggingConfiguration` <a name="PutLoggingConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putLoggingConfiguration"></a>

```csharp
private void PutLoggingConfiguration(MwaaserverlessWorkflowLoggingConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfiguration">MwaaserverlessWorkflowLoggingConfiguration</a>

---

##### `PutNetworkConfiguration` <a name="PutNetworkConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putNetworkConfiguration"></a>

```csharp
private void PutNetworkConfiguration(MwaaserverlessWorkflowNetworkConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration">MwaaserverlessWorkflowNetworkConfiguration</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEncryptionConfiguration` <a name="ResetEncryptionConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetEncryptionConfiguration"></a>

```csharp
private void ResetEncryptionConfiguration()
```

##### `ResetLoggingConfiguration` <a name="ResetLoggingConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetLoggingConfiguration"></a>

```csharp
private void ResetLoggingConfiguration()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNetworkConfiguration` <a name="ResetNetworkConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetNetworkConfiguration"></a>

```csharp
private void ResetNetworkConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTriggerMode` <a name="ResetTriggerMode" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetTriggerMode"></a>

```csharp
private void ResetTriggerMode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MwaaserverlessWorkflow resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MwaaserverlessWorkflow.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MwaaserverlessWorkflow.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MwaaserverlessWorkflow.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MwaaserverlessWorkflow.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MwaaserverlessWorkflow resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MwaaserverlessWorkflow to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MwaaserverlessWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MwaaserverlessWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.definitionS3Location">DefinitionS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference">MwaaserverlessWorkflowDefinitionS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference">MwaaserverlessWorkflowEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.loggingConfiguration">LoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference">MwaaserverlessWorkflowLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.modifiedAt">ModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference">MwaaserverlessWorkflowNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.scheduleConfiguration">ScheduleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference">MwaaserverlessWorkflowScheduleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.workflowArn">WorkflowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.workflowStatus">WorkflowStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.workflowVersion">WorkflowVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.definitionS3LocationInput">DefinitionS3LocationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location">MwaaserverlessWorkflowDefinitionS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.encryptionConfigurationInput">EncryptionConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration">MwaaserverlessWorkflowEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.loggingConfigurationInput">LoggingConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfiguration">MwaaserverlessWorkflowLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.networkConfigurationInput">NetworkConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration">MwaaserverlessWorkflowNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.triggerModeInput">TriggerModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.triggerMode">TriggerMode</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DefinitionS3Location`<sup>Required</sup> <a name="DefinitionS3Location" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.definitionS3Location"></a>

```csharp
public MwaaserverlessWorkflowDefinitionS3LocationOutputReference DefinitionS3Location { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference">MwaaserverlessWorkflowDefinitionS3LocationOutputReference</a>

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.encryptionConfiguration"></a>

```csharp
public MwaaserverlessWorkflowEncryptionConfigurationOutputReference EncryptionConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference">MwaaserverlessWorkflowEncryptionConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LoggingConfiguration`<sup>Required</sup> <a name="LoggingConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.loggingConfiguration"></a>

```csharp
public MwaaserverlessWorkflowLoggingConfigurationOutputReference LoggingConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference">MwaaserverlessWorkflowLoggingConfigurationOutputReference</a>

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.modifiedAt"></a>

```csharp
public string ModifiedAt { get; }
```

- *Type:* string

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.networkConfiguration"></a>

```csharp
public MwaaserverlessWorkflowNetworkConfigurationOutputReference NetworkConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference">MwaaserverlessWorkflowNetworkConfigurationOutputReference</a>

---

##### `ScheduleConfiguration`<sup>Required</sup> <a name="ScheduleConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.scheduleConfiguration"></a>

```csharp
public MwaaserverlessWorkflowScheduleConfigurationOutputReference ScheduleConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference">MwaaserverlessWorkflowScheduleConfigurationOutputReference</a>

---

##### `WorkflowArn`<sup>Required</sup> <a name="WorkflowArn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.workflowArn"></a>

```csharp
public string WorkflowArn { get; }
```

- *Type:* string

---

##### `WorkflowStatus`<sup>Required</sup> <a name="WorkflowStatus" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.workflowStatus"></a>

```csharp
public string WorkflowStatus { get; }
```

- *Type:* string

---

##### `WorkflowVersion`<sup>Required</sup> <a name="WorkflowVersion" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.workflowVersion"></a>

```csharp
public string WorkflowVersion { get; }
```

- *Type:* string

---

##### `DefinitionS3LocationInput`<sup>Optional</sup> <a name="DefinitionS3LocationInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.definitionS3LocationInput"></a>

```csharp
public IResolvable|MwaaserverlessWorkflowDefinitionS3Location DefinitionS3LocationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location">MwaaserverlessWorkflowDefinitionS3Location</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EncryptionConfigurationInput`<sup>Optional</sup> <a name="EncryptionConfigurationInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.encryptionConfigurationInput"></a>

```csharp
public IResolvable|MwaaserverlessWorkflowEncryptionConfiguration EncryptionConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration">MwaaserverlessWorkflowEncryptionConfiguration</a>

---

##### `LoggingConfigurationInput`<sup>Optional</sup> <a name="LoggingConfigurationInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.loggingConfigurationInput"></a>

```csharp
public IResolvable|MwaaserverlessWorkflowLoggingConfiguration LoggingConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfiguration">MwaaserverlessWorkflowLoggingConfiguration</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkConfigurationInput`<sup>Optional</sup> <a name="NetworkConfigurationInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.networkConfigurationInput"></a>

```csharp
public IResolvable|MwaaserverlessWorkflowNetworkConfiguration NetworkConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration">MwaaserverlessWorkflowNetworkConfiguration</a>

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TriggerModeInput`<sup>Optional</sup> <a name="TriggerModeInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.triggerModeInput"></a>

```csharp
public string TriggerModeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TriggerMode`<sup>Required</sup> <a name="TriggerMode" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.triggerMode"></a>

```csharp
public string TriggerMode { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MwaaserverlessWorkflowConfig <a name="MwaaserverlessWorkflowConfig" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MwaaserverlessWorkflowConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    MwaaserverlessWorkflowDefinitionS3Location DefinitionS3Location,
    string RoleArn,
    string Description = null,
    MwaaserverlessWorkflowEncryptionConfiguration EncryptionConfiguration = null,
    MwaaserverlessWorkflowLoggingConfiguration LoggingConfiguration = null,
    string Name = null,
    MwaaserverlessWorkflowNetworkConfiguration NetworkConfiguration = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    string TriggerMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.definitionS3Location">DefinitionS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location">MwaaserverlessWorkflowDefinitionS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#definition_s3_location MwaaserverlessWorkflow#definition_s3_location}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#role_arn MwaaserverlessWorkflow#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#description MwaaserverlessWorkflow#description}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration">MwaaserverlessWorkflowEncryptionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#encryption_configuration MwaaserverlessWorkflow#encryption_configuration}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.loggingConfiguration">LoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfiguration">MwaaserverlessWorkflowLoggingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#logging_configuration MwaaserverlessWorkflow#logging_configuration}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#name MwaaserverlessWorkflow#name}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration">MwaaserverlessWorkflowNetworkConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#network_configuration MwaaserverlessWorkflow#network_configuration}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of key-value pairs to be applied as tags. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.triggerMode">TriggerMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#trigger_mode MwaaserverlessWorkflow#trigger_mode}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DefinitionS3Location`<sup>Required</sup> <a name="DefinitionS3Location" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.definitionS3Location"></a>

```csharp
public MwaaserverlessWorkflowDefinitionS3Location DefinitionS3Location { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location">MwaaserverlessWorkflowDefinitionS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#definition_s3_location MwaaserverlessWorkflow#definition_s3_location}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#role_arn MwaaserverlessWorkflow#role_arn}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#description MwaaserverlessWorkflow#description}.

---

##### `EncryptionConfiguration`<sup>Optional</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.encryptionConfiguration"></a>

```csharp
public MwaaserverlessWorkflowEncryptionConfiguration EncryptionConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration">MwaaserverlessWorkflowEncryptionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#encryption_configuration MwaaserverlessWorkflow#encryption_configuration}.

---

##### `LoggingConfiguration`<sup>Optional</sup> <a name="LoggingConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.loggingConfiguration"></a>

```csharp
public MwaaserverlessWorkflowLoggingConfiguration LoggingConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfiguration">MwaaserverlessWorkflowLoggingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#logging_configuration MwaaserverlessWorkflow#logging_configuration}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#name MwaaserverlessWorkflow#name}.

---

##### `NetworkConfiguration`<sup>Optional</sup> <a name="NetworkConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.networkConfiguration"></a>

```csharp
public MwaaserverlessWorkflowNetworkConfiguration NetworkConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration">MwaaserverlessWorkflowNetworkConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#network_configuration MwaaserverlessWorkflow#network_configuration}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of key-value pairs to be applied as tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#tags MwaaserverlessWorkflow#tags}

---

##### `TriggerMode`<sup>Optional</sup> <a name="TriggerMode" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.triggerMode"></a>

```csharp
public string TriggerMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#trigger_mode MwaaserverlessWorkflow#trigger_mode}.

---

### MwaaserverlessWorkflowDefinitionS3Location <a name="MwaaserverlessWorkflowDefinitionS3Location" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MwaaserverlessWorkflowDefinitionS3Location {
    string Bucket,
    string ObjectKey,
    string VersionId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#bucket MwaaserverlessWorkflow#bucket}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location.property.objectKey">ObjectKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#object_key MwaaserverlessWorkflow#object_key}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location.property.versionId">VersionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#version_id MwaaserverlessWorkflow#version_id}. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#bucket MwaaserverlessWorkflow#bucket}.

---

##### `ObjectKey`<sup>Required</sup> <a name="ObjectKey" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location.property.objectKey"></a>

```csharp
public string ObjectKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#object_key MwaaserverlessWorkflow#object_key}.

---

##### `VersionId`<sup>Optional</sup> <a name="VersionId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location.property.versionId"></a>

```csharp
public string VersionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#version_id MwaaserverlessWorkflow#version_id}.

---

### MwaaserverlessWorkflowEncryptionConfiguration <a name="MwaaserverlessWorkflowEncryptionConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MwaaserverlessWorkflowEncryptionConfiguration {
    string KmsKeyId = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#kms_key_id MwaaserverlessWorkflow#kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#type MwaaserverlessWorkflow#type}. |

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#kms_key_id MwaaserverlessWorkflow#kms_key_id}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#type MwaaserverlessWorkflow#type}.

---

### MwaaserverlessWorkflowLoggingConfiguration <a name="MwaaserverlessWorkflowLoggingConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MwaaserverlessWorkflowLoggingConfiguration {
    string LogGroupName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfiguration.property.logGroupName">LogGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#log_group_name MwaaserverlessWorkflow#log_group_name}. |

---

##### `LogGroupName`<sup>Optional</sup> <a name="LogGroupName" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfiguration.property.logGroupName"></a>

```csharp
public string LogGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#log_group_name MwaaserverlessWorkflow#log_group_name}.

---

### MwaaserverlessWorkflowNetworkConfiguration <a name="MwaaserverlessWorkflowNetworkConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MwaaserverlessWorkflowNetworkConfiguration {
    string[] SecurityGroupIds = null,
    string[] SubnetIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#security_group_ids MwaaserverlessWorkflow#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#subnet_ids MwaaserverlessWorkflow#subnet_ids}. |

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#security_group_ids MwaaserverlessWorkflow#security_group_ids}.

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#subnet_ids MwaaserverlessWorkflow#subnet_ids}.

---

### MwaaserverlessWorkflowScheduleConfiguration <a name="MwaaserverlessWorkflowScheduleConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MwaaserverlessWorkflowScheduleConfiguration {

};
```


## Classes <a name="Classes" id="Classes"></a>

### MwaaserverlessWorkflowDefinitionS3LocationOutputReference <a name="MwaaserverlessWorkflowDefinitionS3LocationOutputReference" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MwaaserverlessWorkflowDefinitionS3LocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.resetVersionId">ResetVersionId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVersionId` <a name="ResetVersionId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.resetVersionId"></a>

```csharp
private void ResetVersionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.objectKeyInput">ObjectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.versionIdInput">VersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.objectKey">ObjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.versionId">VersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location">MwaaserverlessWorkflowDefinitionS3Location</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `ObjectKeyInput`<sup>Optional</sup> <a name="ObjectKeyInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.objectKeyInput"></a>

```csharp
public string ObjectKeyInput { get; }
```

- *Type:* string

---

##### `VersionIdInput`<sup>Optional</sup> <a name="VersionIdInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.versionIdInput"></a>

```csharp
public string VersionIdInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `ObjectKey`<sup>Required</sup> <a name="ObjectKey" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.objectKey"></a>

```csharp
public string ObjectKey { get; }
```

- *Type:* string

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.versionId"></a>

```csharp
public string VersionId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MwaaserverlessWorkflowDefinitionS3Location InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location">MwaaserverlessWorkflowDefinitionS3Location</a>

---


### MwaaserverlessWorkflowEncryptionConfigurationOutputReference <a name="MwaaserverlessWorkflowEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MwaaserverlessWorkflowEncryptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration">MwaaserverlessWorkflowEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MwaaserverlessWorkflowEncryptionConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration">MwaaserverlessWorkflowEncryptionConfiguration</a>

---


### MwaaserverlessWorkflowLoggingConfigurationOutputReference <a name="MwaaserverlessWorkflowLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MwaaserverlessWorkflowLoggingConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.resetLogGroupName">ResetLogGroupName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogGroupName` <a name="ResetLogGroupName" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.resetLogGroupName"></a>

```csharp
private void ResetLogGroupName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.property.logGroupNameInput">LogGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.property.logGroupName">LogGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfiguration">MwaaserverlessWorkflowLoggingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogGroupNameInput`<sup>Optional</sup> <a name="LogGroupNameInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.property.logGroupNameInput"></a>

```csharp
public string LogGroupNameInput { get; }
```

- *Type:* string

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.property.logGroupName"></a>

```csharp
public string LogGroupName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MwaaserverlessWorkflowLoggingConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfiguration">MwaaserverlessWorkflowLoggingConfiguration</a>

---


### MwaaserverlessWorkflowNetworkConfigurationOutputReference <a name="MwaaserverlessWorkflowNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MwaaserverlessWorkflowNetworkConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration">MwaaserverlessWorkflowNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MwaaserverlessWorkflowNetworkConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration">MwaaserverlessWorkflowNetworkConfiguration</a>

---


### MwaaserverlessWorkflowScheduleConfigurationOutputReference <a name="MwaaserverlessWorkflowScheduleConfigurationOutputReference" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MwaaserverlessWorkflowScheduleConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.property.cronExpression">CronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfiguration">MwaaserverlessWorkflowScheduleConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.property.cronExpression"></a>

```csharp
public string CronExpression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.property.internalValue"></a>

```csharp
public MwaaserverlessWorkflowScheduleConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfiguration">MwaaserverlessWorkflowScheduleConfiguration</a>

---



