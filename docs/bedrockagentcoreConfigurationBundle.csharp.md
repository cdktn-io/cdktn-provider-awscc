# `bedrockagentcoreConfigurationBundle` Submodule <a name="`bedrockagentcoreConfigurationBundle` Submodule" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreConfigurationBundle <a name="BedrockagentcoreConfigurationBundle" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_configuration_bundle awscc_bedrockagentcore_configuration_bundle}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreConfigurationBundle(Construct Scope, string Id, BedrockagentcoreConfigurationBundleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig">BedrockagentcoreConfigurationBundleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig">BedrockagentcoreConfigurationBundleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.putComponents">PutComponents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.putCreatedBy">PutCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetBranchName">ResetBranchName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetCommitMessage">ResetCommitMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetCreatedBy">ResetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutComponents` <a name="PutComponents" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.putComponents"></a>

```csharp
private void PutComponents(IResolvable|System.Collections.Generic.IDictionary<string, BedrockagentcoreConfigurationBundleComponents> Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.putComponents.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents">BedrockagentcoreConfigurationBundleComponents</a>>

---

##### `PutCreatedBy` <a name="PutCreatedBy" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.putCreatedBy"></a>

```csharp
private void PutCreatedBy(BedrockagentcoreConfigurationBundleCreatedBy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.putCreatedBy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy">BedrockagentcoreConfigurationBundleCreatedBy</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.putTags"></a>

```csharp
private void PutTags(IResolvable|BedrockagentcoreConfigurationBundleTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags">BedrockagentcoreConfigurationBundleTags</a>[]

---

##### `ResetBranchName` <a name="ResetBranchName" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetBranchName"></a>

```csharp
private void ResetBranchName()
```

##### `ResetCommitMessage` <a name="ResetCommitMessage" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetCommitMessage"></a>

```csharp
private void ResetCommitMessage()
```

##### `ResetCreatedBy` <a name="ResetCreatedBy" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetCreatedBy"></a>

```csharp
private void ResetCreatedBy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcoreConfigurationBundle resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockagentcoreConfigurationBundle.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockagentcoreConfigurationBundle.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockagentcoreConfigurationBundle.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockagentcoreConfigurationBundle.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BedrockagentcoreConfigurationBundle resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockagentcoreConfigurationBundle to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockagentcoreConfigurationBundle that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_configuration_bundle#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreConfigurationBundle to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.bundleArn">BundleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.bundleId">BundleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.components">Components</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap">BedrockagentcoreConfigurationBundleComponentsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.createdBy">CreatedBy</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference">BedrockagentcoreConfigurationBundleCreatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.lineageMetadata">LineageMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference">BedrockagentcoreConfigurationBundleLineageMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList">BedrockagentcoreConfigurationBundleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.versionId">VersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.branchNameInput">BranchNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.bundleNameInput">BundleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.commitMessageInput">CommitMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.componentsInput">ComponentsInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents">BedrockagentcoreConfigurationBundleComponents</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.createdByInput">CreatedByInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy">BedrockagentcoreConfigurationBundleCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags">BedrockagentcoreConfigurationBundleTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.branchName">BranchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.bundleName">BundleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.commitMessage">CommitMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BundleArn`<sup>Required</sup> <a name="BundleArn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.bundleArn"></a>

```csharp
public string BundleArn { get; }
```

- *Type:* string

---

##### `BundleId`<sup>Required</sup> <a name="BundleId" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.bundleId"></a>

```csharp
public string BundleId { get; }
```

- *Type:* string

---

##### `Components`<sup>Required</sup> <a name="Components" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.components"></a>

```csharp
public BedrockagentcoreConfigurationBundleComponentsMap Components { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap">BedrockagentcoreConfigurationBundleComponentsMap</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.createdBy"></a>

```csharp
public BedrockagentcoreConfigurationBundleCreatedByOutputReference CreatedBy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference">BedrockagentcoreConfigurationBundleCreatedByOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LineageMetadata`<sup>Required</sup> <a name="LineageMetadata" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.lineageMetadata"></a>

```csharp
public BedrockagentcoreConfigurationBundleLineageMetadataOutputReference LineageMetadata { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference">BedrockagentcoreConfigurationBundleLineageMetadataOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.tags"></a>

```csharp
public BedrockagentcoreConfigurationBundleTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList">BedrockagentcoreConfigurationBundleTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.versionId"></a>

```csharp
public string VersionId { get; }
```

- *Type:* string

---

##### `BranchNameInput`<sup>Optional</sup> <a name="BranchNameInput" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.branchNameInput"></a>

```csharp
public string BranchNameInput { get; }
```

- *Type:* string

---

##### `BundleNameInput`<sup>Optional</sup> <a name="BundleNameInput" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.bundleNameInput"></a>

```csharp
public string BundleNameInput { get; }
```

- *Type:* string

---

##### `CommitMessageInput`<sup>Optional</sup> <a name="CommitMessageInput" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.commitMessageInput"></a>

```csharp
public string CommitMessageInput { get; }
```

- *Type:* string

---

##### `ComponentsInput`<sup>Optional</sup> <a name="ComponentsInput" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.componentsInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, BedrockagentcoreConfigurationBundleComponents> ComponentsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents">BedrockagentcoreConfigurationBundleComponents</a>>

---

##### `CreatedByInput`<sup>Optional</sup> <a name="CreatedByInput" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.createdByInput"></a>

```csharp
public IResolvable|BedrockagentcoreConfigurationBundleCreatedBy CreatedByInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy">BedrockagentcoreConfigurationBundleCreatedBy</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.tagsInput"></a>

```csharp
public IResolvable|BedrockagentcoreConfigurationBundleTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags">BedrockagentcoreConfigurationBundleTags</a>[]

---

##### `BranchName`<sup>Required</sup> <a name="BranchName" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.branchName"></a>

```csharp
public string BranchName { get; }
```

- *Type:* string

---

##### `BundleName`<sup>Required</sup> <a name="BundleName" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.bundleName"></a>

```csharp
public string BundleName { get; }
```

- *Type:* string

---

##### `CommitMessage`<sup>Required</sup> <a name="CommitMessage" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.commitMessage"></a>

```csharp
public string CommitMessage { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreConfigurationBundleComponents <a name="BedrockagentcoreConfigurationBundleComponents" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreConfigurationBundleComponents {
    string Configuration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents.property.configuration">Configuration</a></code> | <code>string</code> | The configuration values as a flexible JSON document. |

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents.property.configuration"></a>

```csharp
public string Configuration { get; set; }
```

- *Type:* string

The configuration values as a flexible JSON document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_configuration_bundle#configuration BedrockagentcoreConfigurationBundle#configuration}

---

### BedrockagentcoreConfigurationBundleConfig <a name="BedrockagentcoreConfigurationBundleConfig" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreConfigurationBundleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string BundleName,
    IResolvable|System.Collections.Generic.IDictionary<string, BedrockagentcoreConfigurationBundleComponents> Components,
    string BranchName = null,
    string CommitMessage = null,
    BedrockagentcoreConfigurationBundleCreatedBy CreatedBy = null,
    string Description = null,
    string KmsKeyArn = null,
    IResolvable|BedrockagentcoreConfigurationBundleTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.bundleName">BundleName</a></code> | <code>string</code> | The name for the configuration bundle. Names must be unique within your account. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.components">Components</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents">BedrockagentcoreConfigurationBundleComponents</a>></code> | A map of component identifiers to their configurations. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.branchName">BranchName</a></code> | <code>string</code> | The branch name for version tracking. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.commitMessage">CommitMessage</a></code> | <code>string</code> | A commit message describing the version of the configuration bundle. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.createdBy">CreatedBy</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy">BedrockagentcoreConfigurationBundleCreatedBy</a></code> | The source that created a configuration bundle version. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.description">Description</a></code> | <code>string</code> | The description for the configuration bundle. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | The ARN of the KMS key used to encrypt component configurations. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags">BedrockagentcoreConfigurationBundleTags</a>[]</code> | Tags to assign to the configuration bundle. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BundleName`<sup>Required</sup> <a name="BundleName" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.bundleName"></a>

```csharp
public string BundleName { get; set; }
```

- *Type:* string

The name for the configuration bundle. Names must be unique within your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_configuration_bundle#bundle_name BedrockagentcoreConfigurationBundle#bundle_name}

---

##### `Components`<sup>Required</sup> <a name="Components" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.components"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, BedrockagentcoreConfigurationBundleComponents> Components { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents">BedrockagentcoreConfigurationBundleComponents</a>>

A map of component identifiers to their configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_configuration_bundle#components BedrockagentcoreConfigurationBundle#components}

---

##### `BranchName`<sup>Optional</sup> <a name="BranchName" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.branchName"></a>

```csharp
public string BranchName { get; set; }
```

- *Type:* string

The branch name for version tracking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_configuration_bundle#branch_name BedrockagentcoreConfigurationBundle#branch_name}

---

##### `CommitMessage`<sup>Optional</sup> <a name="CommitMessage" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.commitMessage"></a>

```csharp
public string CommitMessage { get; set; }
```

- *Type:* string

A commit message describing the version of the configuration bundle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_configuration_bundle#commit_message BedrockagentcoreConfigurationBundle#commit_message}

---

##### `CreatedBy`<sup>Optional</sup> <a name="CreatedBy" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.createdBy"></a>

```csharp
public BedrockagentcoreConfigurationBundleCreatedBy CreatedBy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy">BedrockagentcoreConfigurationBundleCreatedBy</a>

The source that created a configuration bundle version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_configuration_bundle#created_by BedrockagentcoreConfigurationBundle#created_by}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description for the configuration bundle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_configuration_bundle#description BedrockagentcoreConfigurationBundle#description}

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

The ARN of the KMS key used to encrypt component configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_configuration_bundle#kms_key_arn BedrockagentcoreConfigurationBundle#kms_key_arn}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.tags"></a>

```csharp
public IResolvable|BedrockagentcoreConfigurationBundleTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags">BedrockagentcoreConfigurationBundleTags</a>[]

Tags to assign to the configuration bundle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_configuration_bundle#tags BedrockagentcoreConfigurationBundle#tags}

---

### BedrockagentcoreConfigurationBundleCreatedBy <a name="BedrockagentcoreConfigurationBundleCreatedBy" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreConfigurationBundleCreatedBy {
    string Arn = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy.property.arn">Arn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the source, if applicable. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy.property.name">Name</a></code> | <code>string</code> | The name of the source (for example, user, optimization-job, or system). |

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the source, if applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_configuration_bundle#arn BedrockagentcoreConfigurationBundle#arn}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the source (for example, user, optimization-job, or system).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_configuration_bundle#name BedrockagentcoreConfigurationBundle#name}

---

### BedrockagentcoreConfigurationBundleLineageMetadata <a name="BedrockagentcoreConfigurationBundleLineageMetadata" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadata.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreConfigurationBundleLineageMetadata {

};
```


### BedrockagentcoreConfigurationBundleLineageMetadataCreatedBy <a name="BedrockagentcoreConfigurationBundleLineageMetadataCreatedBy" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedBy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreConfigurationBundleLineageMetadataCreatedBy {

};
```


### BedrockagentcoreConfigurationBundleTags <a name="BedrockagentcoreConfigurationBundleTags" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreConfigurationBundleTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_configuration_bundle#key BedrockagentcoreConfigurationBundle#key}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_configuration_bundle#value BedrockagentcoreConfigurationBundle#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_configuration_bundle#key BedrockagentcoreConfigurationBundle#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_configuration_bundle#value BedrockagentcoreConfigurationBundle#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreConfigurationBundleComponentsMap <a name="BedrockagentcoreConfigurationBundleComponentsMap" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreConfigurationBundleComponentsMap(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.get"></a>

```csharp
private BedrockagentcoreConfigurationBundleComponentsOutputReference Get(string Key)
```

###### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents">BedrockagentcoreConfigurationBundleComponents</a>></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.property.internalValue"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, BedrockagentcoreConfigurationBundleComponents> InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents">BedrockagentcoreConfigurationBundleComponents</a>>

---


### BedrockagentcoreConfigurationBundleComponentsOutputReference <a name="BedrockagentcoreConfigurationBundleComponentsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreConfigurationBundleComponentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, string ComplexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.Initializer.parameter.complexObjectKey">ComplexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectKey`<sup>Required</sup> <a name="ComplexObjectKey" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.resetConfiguration">ResetConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.resetConfiguration"></a>

```csharp
private void ResetConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.property.configurationInput">ConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.property.configuration">Configuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents">BedrockagentcoreConfigurationBundleComponents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.property.configurationInput"></a>

```csharp
public string ConfigurationInput { get; }
```

- *Type:* string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.property.configuration"></a>

```csharp
public string Configuration { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreConfigurationBundleComponents InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents">BedrockagentcoreConfigurationBundleComponents</a>

---


### BedrockagentcoreConfigurationBundleCreatedByOutputReference <a name="BedrockagentcoreConfigurationBundleCreatedByOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreConfigurationBundleCreatedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.resetArn"></a>

```csharp
private void ResetArn()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy">BedrockagentcoreConfigurationBundleCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreConfigurationBundleCreatedBy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy">BedrockagentcoreConfigurationBundleCreatedBy</a>

---


### BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference <a name="BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedBy">BedrockagentcoreConfigurationBundleLineageMetadataCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.internalValue"></a>

```csharp
public BedrockagentcoreConfigurationBundleLineageMetadataCreatedBy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedBy">BedrockagentcoreConfigurationBundleLineageMetadataCreatedBy</a>

---


### BedrockagentcoreConfigurationBundleLineageMetadataOutputReference <a name="BedrockagentcoreConfigurationBundleLineageMetadataOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreConfigurationBundleLineageMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.branchName">BranchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.commitMessage">CommitMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.createdBy">CreatedBy</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference">BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.parentVersionIds">ParentVersionIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadata">BedrockagentcoreConfigurationBundleLineageMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BranchName`<sup>Required</sup> <a name="BranchName" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.branchName"></a>

```csharp
public string BranchName { get; }
```

- *Type:* string

---

##### `CommitMessage`<sup>Required</sup> <a name="CommitMessage" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.commitMessage"></a>

```csharp
public string CommitMessage { get; }
```

- *Type:* string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.createdBy"></a>

```csharp
public BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference CreatedBy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference">BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference</a>

---

##### `ParentVersionIds`<sup>Required</sup> <a name="ParentVersionIds" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.parentVersionIds"></a>

```csharp
public string[] ParentVersionIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.internalValue"></a>

```csharp
public BedrockagentcoreConfigurationBundleLineageMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadata">BedrockagentcoreConfigurationBundleLineageMetadata</a>

---


### BedrockagentcoreConfigurationBundleTagsList <a name="BedrockagentcoreConfigurationBundleTagsList" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreConfigurationBundleTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.get"></a>

```csharp
private BedrockagentcoreConfigurationBundleTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags">BedrockagentcoreConfigurationBundleTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreConfigurationBundleTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags">BedrockagentcoreConfigurationBundleTags</a>[]

---


### BedrockagentcoreConfigurationBundleTagsOutputReference <a name="BedrockagentcoreConfigurationBundleTagsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreConfigurationBundleTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags">BedrockagentcoreConfigurationBundleTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreConfigurationBundleTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags">BedrockagentcoreConfigurationBundleTags</a>

---



