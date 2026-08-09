# `bedrockagentcoreCodeInterpreterCustom` Submodule <a name="`bedrockagentcoreCodeInterpreterCustom` Submodule" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreCodeInterpreterCustom <a name="BedrockagentcoreCodeInterpreterCustom" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_code_interpreter_custom awscc_bedrockagentcore_code_interpreter_custom}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreCodeInterpreterCustom(Construct Scope, string Id, BedrockagentcoreCodeInterpreterCustomConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig">BedrockagentcoreCodeInterpreterCustomConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig">BedrockagentcoreCodeInterpreterCustomConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.putCertificates">PutCertificates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.putNetworkConfiguration">PutNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.resetCertificates">ResetCertificates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.resetExecutionRoleArn">ResetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCertificates` <a name="PutCertificates" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.putCertificates"></a>

```csharp
private void PutCertificates(IResolvable|BedrockagentcoreCodeInterpreterCustomCertificates[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.putCertificates.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificates">BedrockagentcoreCodeInterpreterCustomCertificates</a>[]

---

##### `PutNetworkConfiguration` <a name="PutNetworkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.putNetworkConfiguration"></a>

```csharp
private void PutNetworkConfiguration(BedrockagentcoreCodeInterpreterCustomNetworkConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfiguration">BedrockagentcoreCodeInterpreterCustomNetworkConfiguration</a>

---

##### `ResetCertificates` <a name="ResetCertificates" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.resetCertificates"></a>

```csharp
private void ResetCertificates()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExecutionRoleArn` <a name="ResetExecutionRoleArn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.resetExecutionRoleArn"></a>

```csharp
private void ResetExecutionRoleArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcoreCodeInterpreterCustom resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockagentcoreCodeInterpreterCustom.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockagentcoreCodeInterpreterCustom.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockagentcoreCodeInterpreterCustom.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockagentcoreCodeInterpreterCustom.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BedrockagentcoreCodeInterpreterCustom resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockagentcoreCodeInterpreterCustom to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockagentcoreCodeInterpreterCustom that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_code_interpreter_custom#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreCodeInterpreterCustom to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.certificates">Certificates</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList">BedrockagentcoreCodeInterpreterCustomCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.codeInterpreterArn">CodeInterpreterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.codeInterpreterId">CodeInterpreterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.failureReason">FailureReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference">BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.certificatesInput">CertificatesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificates">BedrockagentcoreCodeInterpreterCustomCertificates</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.executionRoleArnInput">ExecutionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.networkConfigurationInput">NetworkConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfiguration">BedrockagentcoreCodeInterpreterCustomNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Certificates`<sup>Required</sup> <a name="Certificates" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.certificates"></a>

```csharp
public BedrockagentcoreCodeInterpreterCustomCertificatesList Certificates { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList">BedrockagentcoreCodeInterpreterCustomCertificatesList</a>

---

##### `CodeInterpreterArn`<sup>Required</sup> <a name="CodeInterpreterArn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.codeInterpreterArn"></a>

```csharp
public string CodeInterpreterArn { get; }
```

- *Type:* string

---

##### `CodeInterpreterId`<sup>Required</sup> <a name="CodeInterpreterId" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.codeInterpreterId"></a>

```csharp
public string CodeInterpreterId { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `FailureReason`<sup>Required</sup> <a name="FailureReason" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.failureReason"></a>

```csharp
public string FailureReason { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.lastUpdatedAt"></a>

```csharp
public string LastUpdatedAt { get; }
```

- *Type:* string

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.networkConfiguration"></a>

```csharp
public BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference NetworkConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference">BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `CertificatesInput`<sup>Optional</sup> <a name="CertificatesInput" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.certificatesInput"></a>

```csharp
public IResolvable|BedrockagentcoreCodeInterpreterCustomCertificates[] CertificatesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificates">BedrockagentcoreCodeInterpreterCustomCertificates</a>[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExecutionRoleArnInput`<sup>Optional</sup> <a name="ExecutionRoleArnInput" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.executionRoleArnInput"></a>

```csharp
public string ExecutionRoleArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkConfigurationInput`<sup>Optional</sup> <a name="NetworkConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.networkConfigurationInput"></a>

```csharp
public IResolvable|BedrockagentcoreCodeInterpreterCustomNetworkConfiguration NetworkConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfiguration">BedrockagentcoreCodeInterpreterCustomNetworkConfiguration</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreCodeInterpreterCustomCertificates <a name="BedrockagentcoreCodeInterpreterCustomCertificates" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificates.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreCodeInterpreterCustomCertificates {
    BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation CertificateLocation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificates.property.certificateLocation">CertificateLocation</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation">BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation</a></code> | Certificate location in Secrets Manager. |

---

##### `CertificateLocation`<sup>Optional</sup> <a name="CertificateLocation" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificates.property.certificateLocation"></a>

```csharp
public BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation CertificateLocation { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation">BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation</a>

Certificate location in Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_code_interpreter_custom#certificate_location BedrockagentcoreCodeInterpreterCustom#certificate_location}

---

### BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation <a name="BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation {
    string SecretArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation.property.secretArn">SecretArn</a></code> | <code>string</code> | Secrets Manager secret ARN. |

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation.property.secretArn"></a>

```csharp
public string SecretArn { get; set; }
```

- *Type:* string

Secrets Manager secret ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_code_interpreter_custom#secret_arn BedrockagentcoreCodeInterpreterCustom#secret_arn}

---

### BedrockagentcoreCodeInterpreterCustomConfig <a name="BedrockagentcoreCodeInterpreterCustomConfig" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreCodeInterpreterCustomConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    BedrockagentcoreCodeInterpreterCustomNetworkConfiguration NetworkConfiguration,
    IResolvable|BedrockagentcoreCodeInterpreterCustomCertificates[] Certificates = null,
    string Description = null,
    string ExecutionRoleArn = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.name">Name</a></code> | <code>string</code> | The name of the code interpreter. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfiguration">BedrockagentcoreCodeInterpreterCustomNetworkConfiguration</a></code> | Network configuration for code interpreter. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.certificates">Certificates</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificates">BedrockagentcoreCodeInterpreterCustomCertificates</a>[]</code> | List of root CA certificates in PEM format. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.description">Description</a></code> | <code>string</code> | The description of the code interpreter. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | The ARN of the IAM role that the code interpreter uses to access resources. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of tag keys and values. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the code interpreter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_code_interpreter_custom#name BedrockagentcoreCodeInterpreterCustom#name}

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.networkConfiguration"></a>

```csharp
public BedrockagentcoreCodeInterpreterCustomNetworkConfiguration NetworkConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfiguration">BedrockagentcoreCodeInterpreterCustomNetworkConfiguration</a>

Network configuration for code interpreter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_code_interpreter_custom#network_configuration BedrockagentcoreCodeInterpreterCustom#network_configuration}

---

##### `Certificates`<sup>Optional</sup> <a name="Certificates" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.certificates"></a>

```csharp
public IResolvable|BedrockagentcoreCodeInterpreterCustomCertificates[] Certificates { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificates">BedrockagentcoreCodeInterpreterCustomCertificates</a>[]

List of root CA certificates in PEM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_code_interpreter_custom#certificates BedrockagentcoreCodeInterpreterCustom#certificates}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the code interpreter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_code_interpreter_custom#description BedrockagentcoreCodeInterpreterCustom#description}

---

##### `ExecutionRoleArn`<sup>Optional</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; set; }
```

- *Type:* string

The ARN of the IAM role that the code interpreter uses to access resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_code_interpreter_custom#execution_role_arn BedrockagentcoreCodeInterpreterCustom#execution_role_arn}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of tag keys and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_code_interpreter_custom#tags BedrockagentcoreCodeInterpreterCustom#tags}

---

### BedrockagentcoreCodeInterpreterCustomNetworkConfiguration <a name="BedrockagentcoreCodeInterpreterCustomNetworkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreCodeInterpreterCustomNetworkConfiguration {
    string NetworkMode = null,
    BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig VpcConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfiguration.property.networkMode">NetworkMode</a></code> | <code>string</code> | Network modes supported by code interpreter. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfiguration.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig</a></code> | Network mode configuration for VPC. |

---

##### `NetworkMode`<sup>Optional</sup> <a name="NetworkMode" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfiguration.property.networkMode"></a>

```csharp
public string NetworkMode { get; set; }
```

- *Type:* string

Network modes supported by code interpreter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_code_interpreter_custom#network_mode BedrockagentcoreCodeInterpreterCustom#network_mode}

---

##### `VpcConfig`<sup>Optional</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfiguration.property.vpcConfig"></a>

```csharp
public BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig VpcConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig</a>

Network mode configuration for VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_code_interpreter_custom#vpc_config BedrockagentcoreCodeInterpreterCustom#vpc_config}

---

### BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig <a name="BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig {
    string[] SecurityGroups = null,
    string[] Subnets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | Security groups for VPC. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig.property.subnets">Subnets</a></code> | <code>string[]</code> | Subnets for VPC. |

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; set; }
```

- *Type:* string[]

Security groups for VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_code_interpreter_custom#security_groups BedrockagentcoreCodeInterpreterCustom#security_groups}

---

##### `Subnets`<sup>Optional</sup> <a name="Subnets" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig.property.subnets"></a>

```csharp
public string[] Subnets { get; set; }
```

- *Type:* string[]

Subnets for VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_code_interpreter_custom#subnets BedrockagentcoreCodeInterpreterCustom#subnets}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference <a name="BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.resetSecretArn"></a>

```csharp
private void ResetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation">BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.secretArnInput"></a>

```csharp
public string SecretArnInput { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation">BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation</a>

---


### BedrockagentcoreCodeInterpreterCustomCertificatesList <a name="BedrockagentcoreCodeInterpreterCustomCertificatesList" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreCodeInterpreterCustomCertificatesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.get"></a>

```csharp
private BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificates">BedrockagentcoreCodeInterpreterCustomCertificates</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreCodeInterpreterCustomCertificates[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificates">BedrockagentcoreCodeInterpreterCustomCertificates</a>[]

---


### BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference <a name="BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.putCertificateLocation">PutCertificateLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.resetCertificateLocation">ResetCertificateLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCertificateLocation` <a name="PutCertificateLocation" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.putCertificateLocation"></a>

```csharp
private void PutCertificateLocation(BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.putCertificateLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation">BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation</a>

---

##### `ResetCertificateLocation` <a name="ResetCertificateLocation" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.resetCertificateLocation"></a>

```csharp
private void ResetCertificateLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.certificateLocation">CertificateLocation</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference">BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.certificateLocationInput">CertificateLocationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation">BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificates">BedrockagentcoreCodeInterpreterCustomCertificates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateLocation`<sup>Required</sup> <a name="CertificateLocation" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.certificateLocation"></a>

```csharp
public BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference CertificateLocation { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference">BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference</a>

---

##### `CertificateLocationInput`<sup>Optional</sup> <a name="CertificateLocationInput" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.certificateLocationInput"></a>

```csharp
public IResolvable|BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation CertificateLocationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation">BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreCodeInterpreterCustomCertificates InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificates">BedrockagentcoreCodeInterpreterCustomCertificates</a>

---


### BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference <a name="BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.putVpcConfig">PutVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.resetNetworkMode">ResetNetworkMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.resetVpcConfig">ResetVpcConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVpcConfig` <a name="PutVpcConfig" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.putVpcConfig"></a>

```csharp
private void PutVpcConfig(BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig</a>

---

##### `ResetNetworkMode` <a name="ResetNetworkMode" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.resetNetworkMode"></a>

```csharp
private void ResetNetworkMode()
```

##### `ResetVpcConfig` <a name="ResetVpcConfig" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.resetVpcConfig"></a>

```csharp
private void ResetVpcConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference">BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.networkModeInput">NetworkModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.vpcConfigInput">VpcConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.networkMode">NetworkMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfiguration">BedrockagentcoreCodeInterpreterCustomNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.vpcConfig"></a>

```csharp
public BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference VpcConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference">BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference</a>

---

##### `NetworkModeInput`<sup>Optional</sup> <a name="NetworkModeInput" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.networkModeInput"></a>

```csharp
public string NetworkModeInput { get; }
```

- *Type:* string

---

##### `VpcConfigInput`<sup>Optional</sup> <a name="VpcConfigInput" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.vpcConfigInput"></a>

```csharp
public IResolvable|BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig VpcConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig</a>

---

##### `NetworkMode`<sup>Required</sup> <a name="NetworkMode" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.networkMode"></a>

```csharp
public string NetworkMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreCodeInterpreterCustomNetworkConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfiguration">BedrockagentcoreCodeInterpreterCustomNetworkConfiguration</a>

---


### BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference <a name="BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.resetSubnets">ResetSubnets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.resetSecurityGroups"></a>

```csharp
private void ResetSecurityGroups()
```

##### `ResetSubnets` <a name="ResetSubnets" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.resetSubnets"></a>

```csharp
private void ResetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.securityGroupsInput"></a>

```csharp
public string[] SecurityGroupsInput { get; }
```

- *Type:* string[]

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.subnetsInput"></a>

```csharp
public string[] SubnetsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig</a>

---



