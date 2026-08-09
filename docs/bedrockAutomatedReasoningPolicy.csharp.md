# `bedrockAutomatedReasoningPolicy` Submodule <a name="`bedrockAutomatedReasoningPolicy` Submodule" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockAutomatedReasoningPolicy <a name="BedrockAutomatedReasoningPolicy" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy awscc_bedrock_automated_reasoning_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAutomatedReasoningPolicy(Construct Scope, string Id, BedrockAutomatedReasoningPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig">BedrockAutomatedReasoningPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig">BedrockAutomatedReasoningPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.putPolicyDefinition">PutPolicyDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetForceDelete">ResetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetPolicyDefinition">ResetPolicyDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPolicyDefinition` <a name="PutPolicyDefinition" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.putPolicyDefinition"></a>

```csharp
private void PutPolicyDefinition(BedrockAutomatedReasoningPolicyPolicyDefinition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.putPolicyDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition">BedrockAutomatedReasoningPolicyPolicyDefinition</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.putTags"></a>

```csharp
private void PutTags(IResolvable|BedrockAutomatedReasoningPolicyTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags">BedrockAutomatedReasoningPolicyTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetForceDelete` <a name="ResetForceDelete" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetForceDelete"></a>

```csharp
private void ResetForceDelete()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetPolicyDefinition` <a name="ResetPolicyDefinition" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetPolicyDefinition"></a>

```csharp
private void ResetPolicyDefinition()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockAutomatedReasoningPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockAutomatedReasoningPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockAutomatedReasoningPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockAutomatedReasoningPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockAutomatedReasoningPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BedrockAutomatedReasoningPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockAutomatedReasoningPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockAutomatedReasoningPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BedrockAutomatedReasoningPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.definitionHash">DefinitionHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.policyArn">PolicyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.policyDefinition">PolicyDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference">BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList">BedrockAutomatedReasoningPolicyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.forceDeleteInput">ForceDeleteInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.policyDefinitionInput">PolicyDefinitionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition">BedrockAutomatedReasoningPolicyPolicyDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags">BedrockAutomatedReasoningPolicyTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.forceDelete">ForceDelete</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DefinitionHash`<sup>Required</sup> <a name="DefinitionHash" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.definitionHash"></a>

```csharp
public string DefinitionHash { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `PolicyArn`<sup>Required</sup> <a name="PolicyArn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.policyArn"></a>

```csharp
public string PolicyArn { get; }
```

- *Type:* string

---

##### `PolicyDefinition`<sup>Required</sup> <a name="PolicyDefinition" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.policyDefinition"></a>

```csharp
public BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference PolicyDefinition { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference">BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference</a>

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.tags"></a>

```csharp
public BedrockAutomatedReasoningPolicyTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList">BedrockAutomatedReasoningPolicyTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ForceDeleteInput`<sup>Optional</sup> <a name="ForceDeleteInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.forceDeleteInput"></a>

```csharp
public bool|IResolvable ForceDeleteInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PolicyDefinitionInput`<sup>Optional</sup> <a name="PolicyDefinitionInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.policyDefinitionInput"></a>

```csharp
public IResolvable|BedrockAutomatedReasoningPolicyPolicyDefinition PolicyDefinitionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition">BedrockAutomatedReasoningPolicyPolicyDefinition</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.tagsInput"></a>

```csharp
public IResolvable|BedrockAutomatedReasoningPolicyTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags">BedrockAutomatedReasoningPolicyTags</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ForceDelete`<sup>Required</sup> <a name="ForceDelete" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.forceDelete"></a>

```csharp
public bool|IResolvable ForceDelete { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockAutomatedReasoningPolicyConfig <a name="BedrockAutomatedReasoningPolicyConfig" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAutomatedReasoningPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Description = null,
    bool|IResolvable ForceDelete = null,
    string KmsKeyId = null,
    BedrockAutomatedReasoningPolicyPolicyDefinition PolicyDefinition = null,
    IResolvable|BedrockAutomatedReasoningPolicyTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#name BedrockAutomatedReasoningPolicy#name}. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#description BedrockAutomatedReasoningPolicy#description}. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.forceDelete">ForceDelete</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether to force delete the automated reasoning policy even if it has active resources. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | The KMS key with which the Policy's assets will be encrypted at rest. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.policyDefinition">PolicyDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition">BedrockAutomatedReasoningPolicyPolicyDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#policy_definition BedrockAutomatedReasoningPolicy#policy_definition}. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags">BedrockAutomatedReasoningPolicyTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#tags BedrockAutomatedReasoningPolicy#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#name BedrockAutomatedReasoningPolicy#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#description BedrockAutomatedReasoningPolicy#description}.

---

##### `ForceDelete`<sup>Optional</sup> <a name="ForceDelete" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.forceDelete"></a>

```csharp
public bool|IResolvable ForceDelete { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether to force delete the automated reasoning policy even if it has active resources.

When false , Amazon Bedrock validates if all artifacts have been deleted (e.g. policy version, test case, test result) for a policy before deletion. When true , Amazon Bedrock will delete the policy and all its artifacts without validation. Default is false

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#force_delete BedrockAutomatedReasoningPolicy#force_delete}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

The KMS key with which the Policy's assets will be encrypted at rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#kms_key_id BedrockAutomatedReasoningPolicy#kms_key_id}

---

##### `PolicyDefinition`<sup>Optional</sup> <a name="PolicyDefinition" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.policyDefinition"></a>

```csharp
public BedrockAutomatedReasoningPolicyPolicyDefinition PolicyDefinition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition">BedrockAutomatedReasoningPolicyPolicyDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#policy_definition BedrockAutomatedReasoningPolicy#policy_definition}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyConfig.property.tags"></a>

```csharp
public IResolvable|BedrockAutomatedReasoningPolicyTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags">BedrockAutomatedReasoningPolicyTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#tags BedrockAutomatedReasoningPolicy#tags}.

---

### BedrockAutomatedReasoningPolicyPolicyDefinition <a name="BedrockAutomatedReasoningPolicyPolicyDefinition" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAutomatedReasoningPolicyPolicyDefinition {
    IResolvable|BedrockAutomatedReasoningPolicyPolicyDefinitionRules[] Rules = null,
    IResolvable|BedrockAutomatedReasoningPolicyPolicyDefinitionTypes[] Types = null,
    IResolvable|BedrockAutomatedReasoningPolicyPolicyDefinitionVariables[] Variables = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition.property.rules">Rules</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules">BedrockAutomatedReasoningPolicyPolicyDefinitionRules</a>[]</code> | The rules definition block of an AutomatedReasoningPolicyDefinition. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition.property.types">Types</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes">BedrockAutomatedReasoningPolicyPolicyDefinitionTypes</a>[]</code> | The types definition block of an AutomatedReasoningPolicyDefinition. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition.property.variables">Variables</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables">BedrockAutomatedReasoningPolicyPolicyDefinitionVariables</a>[]</code> | The variables definition block of an AutomatedReasoningPolicyDefinition. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition.property.version">Version</a></code> | <code>string</code> | The policy format version. |

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition.property.rules"></a>

```csharp
public IResolvable|BedrockAutomatedReasoningPolicyPolicyDefinitionRules[] Rules { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules">BedrockAutomatedReasoningPolicyPolicyDefinitionRules</a>[]

The rules definition block of an AutomatedReasoningPolicyDefinition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#rules BedrockAutomatedReasoningPolicy#rules}

---

##### `Types`<sup>Optional</sup> <a name="Types" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition.property.types"></a>

```csharp
public IResolvable|BedrockAutomatedReasoningPolicyPolicyDefinitionTypes[] Types { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes">BedrockAutomatedReasoningPolicyPolicyDefinitionTypes</a>[]

The types definition block of an AutomatedReasoningPolicyDefinition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#types BedrockAutomatedReasoningPolicy#types}

---

##### `Variables`<sup>Optional</sup> <a name="Variables" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition.property.variables"></a>

```csharp
public IResolvable|BedrockAutomatedReasoningPolicyPolicyDefinitionVariables[] Variables { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables">BedrockAutomatedReasoningPolicyPolicyDefinitionVariables</a>[]

The variables definition block of an AutomatedReasoningPolicyDefinition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#variables BedrockAutomatedReasoningPolicy#variables}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

The policy format version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#version BedrockAutomatedReasoningPolicy#version}

---

### BedrockAutomatedReasoningPolicyPolicyDefinitionRules <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionRules" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAutomatedReasoningPolicyPolicyDefinitionRules {
    string AlternateExpression = null,
    string Expression = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules.property.alternateExpression">AlternateExpression</a></code> | <code>string</code> | An alternate expression for this rule. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules.property.expression">Expression</a></code> | <code>string</code> | The SMT expression for this rule. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules.property.id">Id</a></code> | <code>string</code> | A unique id within the PolicyDefinition. |

---

##### `AlternateExpression`<sup>Optional</sup> <a name="AlternateExpression" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules.property.alternateExpression"></a>

```csharp
public string AlternateExpression { get; set; }
```

- *Type:* string

An alternate expression for this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#alternate_expression BedrockAutomatedReasoningPolicy#alternate_expression}

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

The SMT expression for this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#expression BedrockAutomatedReasoningPolicy#expression}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

A unique id within the PolicyDefinition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#id BedrockAutomatedReasoningPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### BedrockAutomatedReasoningPolicyPolicyDefinitionTypes <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionTypes" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAutomatedReasoningPolicyPolicyDefinitionTypes {
    string Description = null,
    string Name = null,
    IResolvable|BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes.property.description">Description</a></code> | <code>string</code> | A natural language description of this type. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes.property.name">Name</a></code> | <code>string</code> | A name for this type. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes.property.values">Values</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues">BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues</a>[]</code> | A list of valid values for this type. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A natural language description of this type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#description BedrockAutomatedReasoningPolicy#description}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A name for this type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#name BedrockAutomatedReasoningPolicy#name}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes.property.values"></a>

```csharp
public IResolvable|BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues[] Values { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues">BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues</a>[]

A list of valid values for this type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#values BedrockAutomatedReasoningPolicy#values}

---

### BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues {
    string Description = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues.property.description">Description</a></code> | <code>string</code> | A natural language description of the type's value. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues.property.value">Value</a></code> | <code>string</code> | The value of the type value. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A natural language description of the type's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#description BedrockAutomatedReasoningPolicy#description}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the type value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#value BedrockAutomatedReasoningPolicy#value}

---

### BedrockAutomatedReasoningPolicyPolicyDefinitionVariables <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionVariables" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAutomatedReasoningPolicyPolicyDefinitionVariables {
    string Description = null,
    string Name = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables.property.description">Description</a></code> | <code>string</code> | A natural language description of this variable. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables.property.name">Name</a></code> | <code>string</code> | A name from this variable. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables.property.type">Type</a></code> | <code>string</code> | A type for this variable. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A natural language description of this variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#description BedrockAutomatedReasoningPolicy#description}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A name from this variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#name BedrockAutomatedReasoningPolicy#name}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

A type for this variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#type BedrockAutomatedReasoningPolicy#type}

---

### BedrockAutomatedReasoningPolicyTags <a name="BedrockAutomatedReasoningPolicyTags" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAutomatedReasoningPolicyTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags.property.key">Key</a></code> | <code>string</code> | Tag Key. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags.property.value">Value</a></code> | <code>string</code> | Tag Value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Tag Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#key BedrockAutomatedReasoningPolicy#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Tag Value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrock_automated_reasoning_policy#value BedrockAutomatedReasoningPolicy#value}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.putTypes">PutTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.putVariables">PutVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resetRules">ResetRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resetTypes">ResetTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resetVariables">ResetVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRules` <a name="PutRules" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.putRules"></a>

```csharp
private void PutRules(IResolvable|BedrockAutomatedReasoningPolicyPolicyDefinitionRules[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.putRules.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules">BedrockAutomatedReasoningPolicyPolicyDefinitionRules</a>[]

---

##### `PutTypes` <a name="PutTypes" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.putTypes"></a>

```csharp
private void PutTypes(IResolvable|BedrockAutomatedReasoningPolicyPolicyDefinitionTypes[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.putTypes.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes">BedrockAutomatedReasoningPolicyPolicyDefinitionTypes</a>[]

---

##### `PutVariables` <a name="PutVariables" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.putVariables"></a>

```csharp
private void PutVariables(IResolvable|BedrockAutomatedReasoningPolicyPolicyDefinitionVariables[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.putVariables.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables">BedrockAutomatedReasoningPolicyPolicyDefinitionVariables</a>[]

---

##### `ResetRules` <a name="ResetRules" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resetRules"></a>

```csharp
private void ResetRules()
```

##### `ResetTypes` <a name="ResetTypes" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resetTypes"></a>

```csharp
private void ResetTypes()
```

##### `ResetVariables` <a name="ResetVariables" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resetVariables"></a>

```csharp
private void ResetVariables()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList">BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.types">Types</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList">BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.variables">Variables</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList">BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.rulesInput">RulesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules">BedrockAutomatedReasoningPolicyPolicyDefinitionRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.typesInput">TypesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes">BedrockAutomatedReasoningPolicyPolicyDefinitionTypes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.variablesInput">VariablesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables">BedrockAutomatedReasoningPolicyPolicyDefinitionVariables</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition">BedrockAutomatedReasoningPolicyPolicyDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.rules"></a>

```csharp
public BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList Rules { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList">BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList</a>

---

##### `Types`<sup>Required</sup> <a name="Types" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.types"></a>

```csharp
public BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList Types { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList">BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList</a>

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.variables"></a>

```csharp
public BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList Variables { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList">BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList</a>

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.rulesInput"></a>

```csharp
public IResolvable|BedrockAutomatedReasoningPolicyPolicyDefinitionRules[] RulesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules">BedrockAutomatedReasoningPolicyPolicyDefinitionRules</a>[]

---

##### `TypesInput`<sup>Optional</sup> <a name="TypesInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.typesInput"></a>

```csharp
public IResolvable|BedrockAutomatedReasoningPolicyPolicyDefinitionTypes[] TypesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes">BedrockAutomatedReasoningPolicyPolicyDefinitionTypes</a>[]

---

##### `VariablesInput`<sup>Optional</sup> <a name="VariablesInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.variablesInput"></a>

```csharp
public IResolvable|BedrockAutomatedReasoningPolicyPolicyDefinitionVariables[] VariablesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables">BedrockAutomatedReasoningPolicyPolicyDefinitionVariables</a>[]

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockAutomatedReasoningPolicyPolicyDefinition InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinition">BedrockAutomatedReasoningPolicyPolicyDefinition</a>

---


### BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.get"></a>

```csharp
private BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules">BedrockAutomatedReasoningPolicyPolicyDefinitionRules</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesList.property.internalValue"></a>

```csharp
public IResolvable|BedrockAutomatedReasoningPolicyPolicyDefinitionRules[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules">BedrockAutomatedReasoningPolicyPolicyDefinitionRules</a>[]

---


### BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resetAlternateExpression">ResetAlternateExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resetId">ResetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlternateExpression` <a name="ResetAlternateExpression" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resetAlternateExpression"></a>

```csharp
private void ResetAlternateExpression()
```

##### `ResetExpression` <a name="ResetExpression" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resetExpression"></a>

```csharp
private void ResetExpression()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.resetId"></a>

```csharp
private void ResetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.alternateExpressionInput">AlternateExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.alternateExpression">AlternateExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules">BedrockAutomatedReasoningPolicyPolicyDefinitionRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlternateExpressionInput`<sup>Optional</sup> <a name="AlternateExpressionInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.alternateExpressionInput"></a>

```csharp
public string AlternateExpressionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `AlternateExpression`<sup>Required</sup> <a name="AlternateExpression" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.alternateExpression"></a>

```csharp
public string AlternateExpression { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRulesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockAutomatedReasoningPolicyPolicyDefinitionRules InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionRules">BedrockAutomatedReasoningPolicyPolicyDefinitionRules</a>

---


### BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.get"></a>

```csharp
private BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes">BedrockAutomatedReasoningPolicyPolicyDefinitionTypes</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesList.property.internalValue"></a>

```csharp
public IResolvable|BedrockAutomatedReasoningPolicyPolicyDefinitionTypes[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes">BedrockAutomatedReasoningPolicyPolicyDefinitionTypes</a>[]

---


### BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.putValues">PutValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValues` <a name="PutValues" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.putValues"></a>

```csharp
private void PutValues(IResolvable|BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.putValues.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues">BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.values">Values</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList">BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.valuesInput">ValuesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues">BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes">BedrockAutomatedReasoningPolicyPolicyDefinitionTypes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.values"></a>

```csharp
public BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList Values { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList">BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.valuesInput"></a>

```csharp
public IResolvable|BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues[] ValuesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues">BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockAutomatedReasoningPolicyPolicyDefinitionTypes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypes">BedrockAutomatedReasoningPolicyPolicyDefinitionTypes</a>

---


### BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.get"></a>

```csharp
private BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues">BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesList.property.internalValue"></a>

```csharp
public IResolvable|BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues">BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues</a>[]

---


### BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues">BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValuesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues">BedrockAutomatedReasoningPolicyPolicyDefinitionTypesValues</a>

---


### BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.get"></a>

```csharp
private BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables">BedrockAutomatedReasoningPolicyPolicyDefinitionVariables</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesList.property.internalValue"></a>

```csharp
public IResolvable|BedrockAutomatedReasoningPolicyPolicyDefinitionVariables[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables">BedrockAutomatedReasoningPolicyPolicyDefinitionVariables</a>[]

---


### BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference <a name="BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables">BedrockAutomatedReasoningPolicyPolicyDefinitionVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariablesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockAutomatedReasoningPolicyPolicyDefinitionVariables InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyPolicyDefinitionVariables">BedrockAutomatedReasoningPolicyPolicyDefinitionVariables</a>

---


### BedrockAutomatedReasoningPolicyTagsList <a name="BedrockAutomatedReasoningPolicyTagsList" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAutomatedReasoningPolicyTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.get"></a>

```csharp
private BedrockAutomatedReasoningPolicyTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags">BedrockAutomatedReasoningPolicyTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsList.property.internalValue"></a>

```csharp
public IResolvable|BedrockAutomatedReasoningPolicyTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags">BedrockAutomatedReasoningPolicyTags</a>[]

---


### BedrockAutomatedReasoningPolicyTagsOutputReference <a name="BedrockAutomatedReasoningPolicyTagsOutputReference" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockAutomatedReasoningPolicyTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags">BedrockAutomatedReasoningPolicyTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockAutomatedReasoningPolicyTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockAutomatedReasoningPolicy.BedrockAutomatedReasoningPolicyTags">BedrockAutomatedReasoningPolicyTags</a>

---



