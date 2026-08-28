# `codepipelineCustomActionType` Submodule <a name="`codepipelineCustomActionType` Submodule" id="@cdktn/provider-awscc.codepipelineCustomActionType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodepipelineCustomActionType <a name="CodepipelineCustomActionType" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_custom_action_type awscc_codepipeline_custom_action_type}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodepipelineCustomActionType(Construct Scope, string Id, CodepipelineCustomActionTypeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig">CodepipelineCustomActionTypeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig">CodepipelineCustomActionTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putConfigurationProperties">PutConfigurationProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putInputArtifactDetails">PutInputArtifactDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putOutputArtifactDetails">PutOutputArtifactDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.resetConfigurationProperties">ResetConfigurationProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.resetSettings">ResetSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfigurationProperties` <a name="PutConfigurationProperties" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putConfigurationProperties"></a>

```csharp
private void PutConfigurationProperties(IResolvable|CodepipelineCustomActionTypeConfigurationProperties[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putConfigurationProperties.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties">CodepipelineCustomActionTypeConfigurationProperties</a>[]

---

##### `PutInputArtifactDetails` <a name="PutInputArtifactDetails" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putInputArtifactDetails"></a>

```csharp
private void PutInputArtifactDetails(CodepipelineCustomActionTypeInputArtifactDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putInputArtifactDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails">CodepipelineCustomActionTypeInputArtifactDetails</a>

---

##### `PutOutputArtifactDetails` <a name="PutOutputArtifactDetails" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putOutputArtifactDetails"></a>

```csharp
private void PutOutputArtifactDetails(CodepipelineCustomActionTypeOutputArtifactDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putOutputArtifactDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails">CodepipelineCustomActionTypeOutputArtifactDetails</a>

---

##### `PutSettings` <a name="PutSettings" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putSettings"></a>

```csharp
private void PutSettings(CodepipelineCustomActionTypeSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings">CodepipelineCustomActionTypeSettings</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putTags"></a>

```csharp
private void PutTags(IResolvable|CodepipelineCustomActionTypeTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTags">CodepipelineCustomActionTypeTags</a>[]

---

##### `ResetConfigurationProperties` <a name="ResetConfigurationProperties" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.resetConfigurationProperties"></a>

```csharp
private void ResetConfigurationProperties()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.resetSettings"></a>

```csharp
private void ResetSettings()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CodepipelineCustomActionType resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CodepipelineCustomActionType.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CodepipelineCustomActionType.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CodepipelineCustomActionType.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CodepipelineCustomActionType.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CodepipelineCustomActionType resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CodepipelineCustomActionType to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CodepipelineCustomActionType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_custom_action_type#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CodepipelineCustomActionType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.configurationProperties">ConfigurationProperties</a></code> | <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList">CodepipelineCustomActionTypeConfigurationPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.customActionTypeId">CustomActionTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.inputArtifactDetails">InputArtifactDetails</a></code> | <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference">CodepipelineCustomActionTypeInputArtifactDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.outputArtifactDetails">OutputArtifactDetails</a></code> | <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference">CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference">CodepipelineCustomActionTypeSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList">CodepipelineCustomActionTypeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.categoryInput">CategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.configurationPropertiesInput">ConfigurationPropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties">CodepipelineCustomActionTypeConfigurationProperties</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.inputArtifactDetailsInput">InputArtifactDetailsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails">CodepipelineCustomActionTypeInputArtifactDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.outputArtifactDetailsInput">OutputArtifactDetailsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails">CodepipelineCustomActionTypeOutputArtifactDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.providerNameInput">ProviderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.settingsInput">SettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings">CodepipelineCustomActionTypeSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTags">CodepipelineCustomActionTypeTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.providerName">ProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConfigurationProperties`<sup>Required</sup> <a name="ConfigurationProperties" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.configurationProperties"></a>

```csharp
public CodepipelineCustomActionTypeConfigurationPropertiesList ConfigurationProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList">CodepipelineCustomActionTypeConfigurationPropertiesList</a>

---

##### `CustomActionTypeId`<sup>Required</sup> <a name="CustomActionTypeId" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.customActionTypeId"></a>

```csharp
public string CustomActionTypeId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InputArtifactDetails`<sup>Required</sup> <a name="InputArtifactDetails" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.inputArtifactDetails"></a>

```csharp
public CodepipelineCustomActionTypeInputArtifactDetailsOutputReference InputArtifactDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference">CodepipelineCustomActionTypeInputArtifactDetailsOutputReference</a>

---

##### `OutputArtifactDetails`<sup>Required</sup> <a name="OutputArtifactDetails" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.outputArtifactDetails"></a>

```csharp
public CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference OutputArtifactDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference">CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference</a>

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.settings"></a>

```csharp
public CodepipelineCustomActionTypeSettingsOutputReference Settings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference">CodepipelineCustomActionTypeSettingsOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.tags"></a>

```csharp
public CodepipelineCustomActionTypeTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList">CodepipelineCustomActionTypeTagsList</a>

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.categoryInput"></a>

```csharp
public string CategoryInput { get; }
```

- *Type:* string

---

##### `ConfigurationPropertiesInput`<sup>Optional</sup> <a name="ConfigurationPropertiesInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.configurationPropertiesInput"></a>

```csharp
public IResolvable|CodepipelineCustomActionTypeConfigurationProperties[] ConfigurationPropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties">CodepipelineCustomActionTypeConfigurationProperties</a>[]

---

##### `InputArtifactDetailsInput`<sup>Optional</sup> <a name="InputArtifactDetailsInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.inputArtifactDetailsInput"></a>

```csharp
public IResolvable|CodepipelineCustomActionTypeInputArtifactDetails InputArtifactDetailsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails">CodepipelineCustomActionTypeInputArtifactDetails</a>

---

##### `OutputArtifactDetailsInput`<sup>Optional</sup> <a name="OutputArtifactDetailsInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.outputArtifactDetailsInput"></a>

```csharp
public IResolvable|CodepipelineCustomActionTypeOutputArtifactDetails OutputArtifactDetailsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails">CodepipelineCustomActionTypeOutputArtifactDetails</a>

---

##### `ProviderNameInput`<sup>Optional</sup> <a name="ProviderNameInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.providerNameInput"></a>

```csharp
public string ProviderNameInput { get; }
```

- *Type:* string

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.settingsInput"></a>

```csharp
public IResolvable|CodepipelineCustomActionTypeSettings SettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings">CodepipelineCustomActionTypeSettings</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.tagsInput"></a>

```csharp
public IResolvable|CodepipelineCustomActionTypeTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTags">CodepipelineCustomActionTypeTags</a>[]

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.providerName"></a>

```csharp
public string ProviderName { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionType.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodepipelineCustomActionTypeConfig <a name="CodepipelineCustomActionTypeConfig" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodepipelineCustomActionTypeConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Category,
    CodepipelineCustomActionTypeInputArtifactDetails InputArtifactDetails,
    CodepipelineCustomActionTypeOutputArtifactDetails OutputArtifactDetails,
    string ProviderName,
    string Version,
    IResolvable|CodepipelineCustomActionTypeConfigurationProperties[] ConfigurationProperties = null,
    CodepipelineCustomActionTypeSettings Settings = null,
    IResolvable|CodepipelineCustomActionTypeTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.category">Category</a></code> | <code>string</code> | The category of the custom action, such as a build action or a test action. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.inputArtifactDetails">InputArtifactDetails</a></code> | <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails">CodepipelineCustomActionTypeInputArtifactDetails</a></code> | The details of the input artifact for the action, such as its commit ID. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.outputArtifactDetails">OutputArtifactDetails</a></code> | <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails">CodepipelineCustomActionTypeOutputArtifactDetails</a></code> | The details of the output artifact of the action, such as its commit ID. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.providerName">ProviderName</a></code> | <code>string</code> | The provider of the service used in the custom action, such as AWS CodeDeploy. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.version">Version</a></code> | <code>string</code> | The version identifier of the custom action. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.configurationProperties">ConfigurationProperties</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties">CodepipelineCustomActionTypeConfigurationProperties</a>[]</code> | The configuration properties for the custom action. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings">CodepipelineCustomActionTypeSettings</a></code> | URLs that provide users information about this custom action. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTags">CodepipelineCustomActionTypeTags</a>[]</code> | Any tags assigned to the custom action. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.category"></a>

```csharp
public string Category { get; set; }
```

- *Type:* string

The category of the custom action, such as a build action or a test action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_custom_action_type#category CodepipelineCustomActionType#category}

---

##### `InputArtifactDetails`<sup>Required</sup> <a name="InputArtifactDetails" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.inputArtifactDetails"></a>

```csharp
public CodepipelineCustomActionTypeInputArtifactDetails InputArtifactDetails { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails">CodepipelineCustomActionTypeInputArtifactDetails</a>

The details of the input artifact for the action, such as its commit ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_custom_action_type#input_artifact_details CodepipelineCustomActionType#input_artifact_details}

---

##### `OutputArtifactDetails`<sup>Required</sup> <a name="OutputArtifactDetails" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.outputArtifactDetails"></a>

```csharp
public CodepipelineCustomActionTypeOutputArtifactDetails OutputArtifactDetails { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails">CodepipelineCustomActionTypeOutputArtifactDetails</a>

The details of the output artifact of the action, such as its commit ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_custom_action_type#output_artifact_details CodepipelineCustomActionType#output_artifact_details}

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.providerName"></a>

```csharp
public string ProviderName { get; set; }
```

- *Type:* string

The provider of the service used in the custom action, such as AWS CodeDeploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_custom_action_type#provider_name CodepipelineCustomActionType#provider_name}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

The version identifier of the custom action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_custom_action_type#version CodepipelineCustomActionType#version}

---

##### `ConfigurationProperties`<sup>Optional</sup> <a name="ConfigurationProperties" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.configurationProperties"></a>

```csharp
public IResolvable|CodepipelineCustomActionTypeConfigurationProperties[] ConfigurationProperties { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties">CodepipelineCustomActionTypeConfigurationProperties</a>[]

The configuration properties for the custom action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_custom_action_type#configuration_properties CodepipelineCustomActionType#configuration_properties}

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.settings"></a>

```csharp
public CodepipelineCustomActionTypeSettings Settings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings">CodepipelineCustomActionTypeSettings</a>

URLs that provide users information about this custom action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_custom_action_type#settings CodepipelineCustomActionType#settings}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.tags"></a>

```csharp
public IResolvable|CodepipelineCustomActionTypeTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTags">CodepipelineCustomActionTypeTags</a>[]

Any tags assigned to the custom action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_custom_action_type#tags CodepipelineCustomActionType#tags}

---

### CodepipelineCustomActionTypeConfigurationProperties <a name="CodepipelineCustomActionTypeConfigurationProperties" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodepipelineCustomActionTypeConfigurationProperties {
    string Description = null,
    bool|IResolvable Key = null,
    string Name = null,
    bool|IResolvable Queryable = null,
    bool|IResolvable Required = null,
    bool|IResolvable Secret = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.property.description">Description</a></code> | <code>string</code> | The description of the action configuration property that is displayed to users. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.property.key">Key</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the configuration property is a key. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.property.name">Name</a></code> | <code>string</code> | The name of the action configuration property. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.property.queryable">Queryable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates that the property is used with PollForJobs. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.property.required">Required</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the configuration property is a required value. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.property.secret">Secret</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the configuration property is secret. Secrets are hidden from all calls except for GetJobDetails, GetThirdPartyJobDetails, PollForJobs, and PollForThirdPartyJobs. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.property.type">Type</a></code> | <code>string</code> | The type of the configuration property. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the action configuration property that is displayed to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_custom_action_type#description CodepipelineCustomActionType#description}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.property.key"></a>

```csharp
public bool|IResolvable Key { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the configuration property is a key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_custom_action_type#key CodepipelineCustomActionType#key}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the action configuration property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_custom_action_type#name CodepipelineCustomActionType#name}

---

##### `Queryable`<sup>Optional</sup> <a name="Queryable" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.property.queryable"></a>

```csharp
public bool|IResolvable Queryable { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates that the property is used with PollForJobs.

When creating a custom action, an action can have up to one queryable property. If it has one, that property must be both required and not secret.If you create a pipeline with a custom action type, and that custom action contains a queryable property, the value for that configuration property is subject to other restrictions. The value must be less than or equal to twenty (20) characters. The value can contain only alphanumeric characters, underscores, and hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_custom_action_type#queryable CodepipelineCustomActionType#queryable}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.property.required"></a>

```csharp
public bool|IResolvable Required { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the configuration property is a required value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_custom_action_type#required CodepipelineCustomActionType#required}

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.property.secret"></a>

```csharp
public bool|IResolvable Secret { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the configuration property is secret. Secrets are hidden from all calls except for GetJobDetails, GetThirdPartyJobDetails, PollForJobs, and PollForThirdPartyJobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_custom_action_type#secret CodepipelineCustomActionType#secret}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the configuration property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_custom_action_type#type CodepipelineCustomActionType#type}

---

### CodepipelineCustomActionTypeInputArtifactDetails <a name="CodepipelineCustomActionTypeInputArtifactDetails" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodepipelineCustomActionTypeInputArtifactDetails {
    double MaximumCount,
    double MinimumCount
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails.property.maximumCount">MaximumCount</a></code> | <code>double</code> | The maximum number of artifacts allowed for the action type. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails.property.minimumCount">MinimumCount</a></code> | <code>double</code> | The minimum number of artifacts allowed for the action type. |

---

##### `MaximumCount`<sup>Required</sup> <a name="MaximumCount" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails.property.maximumCount"></a>

```csharp
public double MaximumCount { get; set; }
```

- *Type:* double

The maximum number of artifacts allowed for the action type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_custom_action_type#maximum_count CodepipelineCustomActionType#maximum_count}

---

##### `MinimumCount`<sup>Required</sup> <a name="MinimumCount" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails.property.minimumCount"></a>

```csharp
public double MinimumCount { get; set; }
```

- *Type:* double

The minimum number of artifacts allowed for the action type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_custom_action_type#minimum_count CodepipelineCustomActionType#minimum_count}

---

### CodepipelineCustomActionTypeOutputArtifactDetails <a name="CodepipelineCustomActionTypeOutputArtifactDetails" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodepipelineCustomActionTypeOutputArtifactDetails {
    double MaximumCount,
    double MinimumCount
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails.property.maximumCount">MaximumCount</a></code> | <code>double</code> | The maximum number of artifacts allowed for the action type. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails.property.minimumCount">MinimumCount</a></code> | <code>double</code> | The minimum number of artifacts allowed for the action type. |

---

##### `MaximumCount`<sup>Required</sup> <a name="MaximumCount" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails.property.maximumCount"></a>

```csharp
public double MaximumCount { get; set; }
```

- *Type:* double

The maximum number of artifacts allowed for the action type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_custom_action_type#maximum_count CodepipelineCustomActionType#maximum_count}

---

##### `MinimumCount`<sup>Required</sup> <a name="MinimumCount" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails.property.minimumCount"></a>

```csharp
public double MinimumCount { get; set; }
```

- *Type:* double

The minimum number of artifacts allowed for the action type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_custom_action_type#minimum_count CodepipelineCustomActionType#minimum_count}

---

### CodepipelineCustomActionTypeSettings <a name="CodepipelineCustomActionTypeSettings" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodepipelineCustomActionTypeSettings {
    string EntityUrlTemplate = null,
    string ExecutionUrlTemplate = null,
    string RevisionUrlTemplate = null,
    string ThirdPartyConfigurationUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.entityUrlTemplate">EntityUrlTemplate</a></code> | <code>string</code> | The URL returned to the AWS CodePipeline console that provides a deep link to the resources of the external system, such as the configuration page for an AWS CodeDeploy deployment group. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.executionUrlTemplate">ExecutionUrlTemplate</a></code> | <code>string</code> | The URL returned to the AWS CodePipeline console that contains a link to the top-level landing page for the external system, such as the console page for AWS CodeDeploy. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.revisionUrlTemplate">RevisionUrlTemplate</a></code> | <code>string</code> | The URL returned to the AWS CodePipeline console that contains a link to the page where customers can update or change the configuration of the external action. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.thirdPartyConfigurationUrl">ThirdPartyConfigurationUrl</a></code> | <code>string</code> | The URL of a sign-up page where users can sign up for an external service and perform initial configuration of the action provided by that service. |

---

##### `EntityUrlTemplate`<sup>Optional</sup> <a name="EntityUrlTemplate" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.entityUrlTemplate"></a>

```csharp
public string EntityUrlTemplate { get; set; }
```

- *Type:* string

The URL returned to the AWS CodePipeline console that provides a deep link to the resources of the external system, such as the configuration page for an AWS CodeDeploy deployment group.

This link is provided as part of the action display in the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_custom_action_type#entity_url_template CodepipelineCustomActionType#entity_url_template}

---

##### `ExecutionUrlTemplate`<sup>Optional</sup> <a name="ExecutionUrlTemplate" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.executionUrlTemplate"></a>

```csharp
public string ExecutionUrlTemplate { get; set; }
```

- *Type:* string

The URL returned to the AWS CodePipeline console that contains a link to the top-level landing page for the external system, such as the console page for AWS CodeDeploy.

This link is shown on the pipeline view page in the AWS CodePipeline console and provides a link to the execution entity of the external action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_custom_action_type#execution_url_template CodepipelineCustomActionType#execution_url_template}

---

##### `RevisionUrlTemplate`<sup>Optional</sup> <a name="RevisionUrlTemplate" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.revisionUrlTemplate"></a>

```csharp
public string RevisionUrlTemplate { get; set; }
```

- *Type:* string

The URL returned to the AWS CodePipeline console that contains a link to the page where customers can update or change the configuration of the external action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_custom_action_type#revision_url_template CodepipelineCustomActionType#revision_url_template}

---

##### `ThirdPartyConfigurationUrl`<sup>Optional</sup> <a name="ThirdPartyConfigurationUrl" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.thirdPartyConfigurationUrl"></a>

```csharp
public string ThirdPartyConfigurationUrl { get; set; }
```

- *Type:* string

The URL of a sign-up page where users can sign up for an external service and perform initial configuration of the action provided by that service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_custom_action_type#third_party_configuration_url CodepipelineCustomActionType#third_party_configuration_url}

---

### CodepipelineCustomActionTypeTags <a name="CodepipelineCustomActionTypeTags" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodepipelineCustomActionTypeTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_custom_action_type#key CodepipelineCustomActionType#key}. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_custom_action_type#value CodepipelineCustomActionType#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_custom_action_type#key CodepipelineCustomActionType#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codepipeline_custom_action_type#value CodepipelineCustomActionType#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodepipelineCustomActionTypeConfigurationPropertiesList <a name="CodepipelineCustomActionTypeConfigurationPropertiesList" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodepipelineCustomActionTypeConfigurationPropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.get"></a>

```csharp
private CodepipelineCustomActionTypeConfigurationPropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties">CodepipelineCustomActionTypeConfigurationProperties</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesList.property.internalValue"></a>

```csharp
public IResolvable|CodepipelineCustomActionTypeConfigurationProperties[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties">CodepipelineCustomActionTypeConfigurationProperties</a>[]

---


### CodepipelineCustomActionTypeConfigurationPropertiesOutputReference <a name="CodepipelineCustomActionTypeConfigurationPropertiesOutputReference" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodepipelineCustomActionTypeConfigurationPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resetQueryable">ResetQueryable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resetRequired">ResetRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resetSecret">ResetSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetQueryable` <a name="ResetQueryable" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resetQueryable"></a>

```csharp
private void ResetQueryable()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resetRequired"></a>

```csharp
private void ResetRequired()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resetSecret"></a>

```csharp
private void ResetSecret()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.keyInput">KeyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.queryableInput">QueryableInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.requiredInput">RequiredInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.secretInput">SecretInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.key">Key</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.queryable">Queryable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.required">Required</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.secret">Secret</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties">CodepipelineCustomActionTypeConfigurationProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.keyInput"></a>

```csharp
public bool|IResolvable KeyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `QueryableInput`<sup>Optional</sup> <a name="QueryableInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.queryableInput"></a>

```csharp
public bool|IResolvable QueryableInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.requiredInput"></a>

```csharp
public bool|IResolvable RequiredInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.secretInput"></a>

```csharp
public bool|IResolvable SecretInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.key"></a>

```csharp
public bool|IResolvable Key { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Queryable`<sup>Required</sup> <a name="Queryable" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.queryable"></a>

```csharp
public bool|IResolvable Queryable { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.required"></a>

```csharp
public bool|IResolvable Required { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.secret"></a>

```csharp
public bool|IResolvable Secret { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodepipelineCustomActionTypeConfigurationProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperties">CodepipelineCustomActionTypeConfigurationProperties</a>

---


### CodepipelineCustomActionTypeInputArtifactDetailsOutputReference <a name="CodepipelineCustomActionTypeInputArtifactDetailsOutputReference" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodepipelineCustomActionTypeInputArtifactDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.maximumCountInput">MaximumCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.minimumCountInput">MinimumCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.maximumCount">MaximumCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.minimumCount">MinimumCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails">CodepipelineCustomActionTypeInputArtifactDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaximumCountInput`<sup>Optional</sup> <a name="MaximumCountInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.maximumCountInput"></a>

```csharp
public double MaximumCountInput { get; }
```

- *Type:* double

---

##### `MinimumCountInput`<sup>Optional</sup> <a name="MinimumCountInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.minimumCountInput"></a>

```csharp
public double MinimumCountInput { get; }
```

- *Type:* double

---

##### `MaximumCount`<sup>Required</sup> <a name="MaximumCount" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.maximumCount"></a>

```csharp
public double MaximumCount { get; }
```

- *Type:* double

---

##### `MinimumCount`<sup>Required</sup> <a name="MinimumCount" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.minimumCount"></a>

```csharp
public double MinimumCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodepipelineCustomActionTypeInputArtifactDetails InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails">CodepipelineCustomActionTypeInputArtifactDetails</a>

---


### CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference <a name="CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.maximumCountInput">MaximumCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.minimumCountInput">MinimumCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.maximumCount">MaximumCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.minimumCount">MinimumCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails">CodepipelineCustomActionTypeOutputArtifactDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaximumCountInput`<sup>Optional</sup> <a name="MaximumCountInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.maximumCountInput"></a>

```csharp
public double MaximumCountInput { get; }
```

- *Type:* double

---

##### `MinimumCountInput`<sup>Optional</sup> <a name="MinimumCountInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.minimumCountInput"></a>

```csharp
public double MinimumCountInput { get; }
```

- *Type:* double

---

##### `MaximumCount`<sup>Required</sup> <a name="MaximumCount" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.maximumCount"></a>

```csharp
public double MaximumCount { get; }
```

- *Type:* double

---

##### `MinimumCount`<sup>Required</sup> <a name="MinimumCount" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.minimumCount"></a>

```csharp
public double MinimumCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodepipelineCustomActionTypeOutputArtifactDetails InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails">CodepipelineCustomActionTypeOutputArtifactDetails</a>

---


### CodepipelineCustomActionTypeSettingsOutputReference <a name="CodepipelineCustomActionTypeSettingsOutputReference" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodepipelineCustomActionTypeSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetEntityUrlTemplate">ResetEntityUrlTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetExecutionUrlTemplate">ResetExecutionUrlTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetRevisionUrlTemplate">ResetRevisionUrlTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetThirdPartyConfigurationUrl">ResetThirdPartyConfigurationUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEntityUrlTemplate` <a name="ResetEntityUrlTemplate" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetEntityUrlTemplate"></a>

```csharp
private void ResetEntityUrlTemplate()
```

##### `ResetExecutionUrlTemplate` <a name="ResetExecutionUrlTemplate" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetExecutionUrlTemplate"></a>

```csharp
private void ResetExecutionUrlTemplate()
```

##### `ResetRevisionUrlTemplate` <a name="ResetRevisionUrlTemplate" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetRevisionUrlTemplate"></a>

```csharp
private void ResetRevisionUrlTemplate()
```

##### `ResetThirdPartyConfigurationUrl` <a name="ResetThirdPartyConfigurationUrl" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetThirdPartyConfigurationUrl"></a>

```csharp
private void ResetThirdPartyConfigurationUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.entityUrlTemplateInput">EntityUrlTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.executionUrlTemplateInput">ExecutionUrlTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.revisionUrlTemplateInput">RevisionUrlTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.thirdPartyConfigurationUrlInput">ThirdPartyConfigurationUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.entityUrlTemplate">EntityUrlTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.executionUrlTemplate">ExecutionUrlTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.revisionUrlTemplate">RevisionUrlTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.thirdPartyConfigurationUrl">ThirdPartyConfigurationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings">CodepipelineCustomActionTypeSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EntityUrlTemplateInput`<sup>Optional</sup> <a name="EntityUrlTemplateInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.entityUrlTemplateInput"></a>

```csharp
public string EntityUrlTemplateInput { get; }
```

- *Type:* string

---

##### `ExecutionUrlTemplateInput`<sup>Optional</sup> <a name="ExecutionUrlTemplateInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.executionUrlTemplateInput"></a>

```csharp
public string ExecutionUrlTemplateInput { get; }
```

- *Type:* string

---

##### `RevisionUrlTemplateInput`<sup>Optional</sup> <a name="RevisionUrlTemplateInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.revisionUrlTemplateInput"></a>

```csharp
public string RevisionUrlTemplateInput { get; }
```

- *Type:* string

---

##### `ThirdPartyConfigurationUrlInput`<sup>Optional</sup> <a name="ThirdPartyConfigurationUrlInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.thirdPartyConfigurationUrlInput"></a>

```csharp
public string ThirdPartyConfigurationUrlInput { get; }
```

- *Type:* string

---

##### `EntityUrlTemplate`<sup>Required</sup> <a name="EntityUrlTemplate" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.entityUrlTemplate"></a>

```csharp
public string EntityUrlTemplate { get; }
```

- *Type:* string

---

##### `ExecutionUrlTemplate`<sup>Required</sup> <a name="ExecutionUrlTemplate" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.executionUrlTemplate"></a>

```csharp
public string ExecutionUrlTemplate { get; }
```

- *Type:* string

---

##### `RevisionUrlTemplate`<sup>Required</sup> <a name="RevisionUrlTemplate" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.revisionUrlTemplate"></a>

```csharp
public string RevisionUrlTemplate { get; }
```

- *Type:* string

---

##### `ThirdPartyConfigurationUrl`<sup>Required</sup> <a name="ThirdPartyConfigurationUrl" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.thirdPartyConfigurationUrl"></a>

```csharp
public string ThirdPartyConfigurationUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodepipelineCustomActionTypeSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings">CodepipelineCustomActionTypeSettings</a>

---


### CodepipelineCustomActionTypeTagsList <a name="CodepipelineCustomActionTypeTagsList" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodepipelineCustomActionTypeTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.get"></a>

```csharp
private CodepipelineCustomActionTypeTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTags">CodepipelineCustomActionTypeTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsList.property.internalValue"></a>

```csharp
public IResolvable|CodepipelineCustomActionTypeTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTags">CodepipelineCustomActionTypeTags</a>[]

---


### CodepipelineCustomActionTypeTagsOutputReference <a name="CodepipelineCustomActionTypeTagsOutputReference" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodepipelineCustomActionTypeTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTags">CodepipelineCustomActionTypeTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodepipelineCustomActionTypeTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codepipelineCustomActionType.CodepipelineCustomActionTypeTags">CodepipelineCustomActionTypeTags</a>

---



