# `bedrockagentcoreBrowserCustom` Submodule <a name="`bedrockagentcoreBrowserCustom` Submodule" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreBrowserCustom <a name="BedrockagentcoreBrowserCustom" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom awscc_bedrockagentcore_browser_custom}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreBrowserCustom(Construct Scope, string Id, BedrockagentcoreBrowserCustomConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig">BedrockagentcoreBrowserCustomConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig">BedrockagentcoreBrowserCustomConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putBrowserSigning">PutBrowserSigning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putCertificates">PutCertificates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putEnterprisePolicies">PutEnterprisePolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putNetworkConfiguration">PutNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putRecordingConfig">PutRecordingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetBrowserSigning">ResetBrowserSigning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetCertificates">ResetCertificates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetEnterprisePolicies">ResetEnterprisePolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetExecutionRoleArn">ResetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetRecordingConfig">ResetRecordingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBrowserSigning` <a name="PutBrowserSigning" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putBrowserSigning"></a>

```csharp
private void PutBrowserSigning(BedrockagentcoreBrowserCustomBrowserSigning Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putBrowserSigning.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigning">BedrockagentcoreBrowserCustomBrowserSigning</a>

---

##### `PutCertificates` <a name="PutCertificates" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putCertificates"></a>

```csharp
private void PutCertificates(IResolvable|BedrockagentcoreBrowserCustomCertificates[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putCertificates.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificates">BedrockagentcoreBrowserCustomCertificates</a>[]

---

##### `PutEnterprisePolicies` <a name="PutEnterprisePolicies" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putEnterprisePolicies"></a>

```csharp
private void PutEnterprisePolicies(IResolvable|BedrockagentcoreBrowserCustomEnterprisePolicies[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putEnterprisePolicies.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies">BedrockagentcoreBrowserCustomEnterprisePolicies</a>[]

---

##### `PutNetworkConfiguration` <a name="PutNetworkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putNetworkConfiguration"></a>

```csharp
private void PutNetworkConfiguration(BedrockagentcoreBrowserCustomNetworkConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfiguration">BedrockagentcoreBrowserCustomNetworkConfiguration</a>

---

##### `PutRecordingConfig` <a name="PutRecordingConfig" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putRecordingConfig"></a>

```csharp
private void PutRecordingConfig(BedrockagentcoreBrowserCustomRecordingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putRecordingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfig">BedrockagentcoreBrowserCustomRecordingConfig</a>

---

##### `ResetBrowserSigning` <a name="ResetBrowserSigning" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetBrowserSigning"></a>

```csharp
private void ResetBrowserSigning()
```

##### `ResetCertificates` <a name="ResetCertificates" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetCertificates"></a>

```csharp
private void ResetCertificates()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnterprisePolicies` <a name="ResetEnterprisePolicies" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetEnterprisePolicies"></a>

```csharp
private void ResetEnterprisePolicies()
```

##### `ResetExecutionRoleArn` <a name="ResetExecutionRoleArn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetExecutionRoleArn"></a>

```csharp
private void ResetExecutionRoleArn()
```

##### `ResetRecordingConfig` <a name="ResetRecordingConfig" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetRecordingConfig"></a>

```csharp
private void ResetRecordingConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcoreBrowserCustom resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockagentcoreBrowserCustom.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockagentcoreBrowserCustom.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockagentcoreBrowserCustom.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockagentcoreBrowserCustom.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BedrockagentcoreBrowserCustom resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockagentcoreBrowserCustom to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockagentcoreBrowserCustom that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreBrowserCustom to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.browserArn">BrowserArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.browserId">BrowserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.browserSigning">BrowserSigning</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference">BedrockagentcoreBrowserCustomBrowserSigningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.certificates">Certificates</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList">BedrockagentcoreBrowserCustomCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.enterprisePolicies">EnterprisePolicies</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList">BedrockagentcoreBrowserCustomEnterprisePoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.failureReason">FailureReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference">BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.recordingConfig">RecordingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference">BedrockagentcoreBrowserCustomRecordingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.browserSigningInput">BrowserSigningInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigning">BedrockagentcoreBrowserCustomBrowserSigning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.certificatesInput">CertificatesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificates">BedrockagentcoreBrowserCustomCertificates</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.enterprisePoliciesInput">EnterprisePoliciesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies">BedrockagentcoreBrowserCustomEnterprisePolicies</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.executionRoleArnInput">ExecutionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.networkConfigurationInput">NetworkConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfiguration">BedrockagentcoreBrowserCustomNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.recordingConfigInput">RecordingConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfig">BedrockagentcoreBrowserCustomRecordingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BrowserArn`<sup>Required</sup> <a name="BrowserArn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.browserArn"></a>

```csharp
public string BrowserArn { get; }
```

- *Type:* string

---

##### `BrowserId`<sup>Required</sup> <a name="BrowserId" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.browserId"></a>

```csharp
public string BrowserId { get; }
```

- *Type:* string

---

##### `BrowserSigning`<sup>Required</sup> <a name="BrowserSigning" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.browserSigning"></a>

```csharp
public BedrockagentcoreBrowserCustomBrowserSigningOutputReference BrowserSigning { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference">BedrockagentcoreBrowserCustomBrowserSigningOutputReference</a>

---

##### `Certificates`<sup>Required</sup> <a name="Certificates" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.certificates"></a>

```csharp
public BedrockagentcoreBrowserCustomCertificatesList Certificates { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList">BedrockagentcoreBrowserCustomCertificatesList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `EnterprisePolicies`<sup>Required</sup> <a name="EnterprisePolicies" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.enterprisePolicies"></a>

```csharp
public BedrockagentcoreBrowserCustomEnterprisePoliciesList EnterprisePolicies { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList">BedrockagentcoreBrowserCustomEnterprisePoliciesList</a>

---

##### `FailureReason`<sup>Required</sup> <a name="FailureReason" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.failureReason"></a>

```csharp
public string FailureReason { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.lastUpdatedAt"></a>

```csharp
public string LastUpdatedAt { get; }
```

- *Type:* string

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.networkConfiguration"></a>

```csharp
public BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference NetworkConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference">BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference</a>

---

##### `RecordingConfig`<sup>Required</sup> <a name="RecordingConfig" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.recordingConfig"></a>

```csharp
public BedrockagentcoreBrowserCustomRecordingConfigOutputReference RecordingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference">BedrockagentcoreBrowserCustomRecordingConfigOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `BrowserSigningInput`<sup>Optional</sup> <a name="BrowserSigningInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.browserSigningInput"></a>

```csharp
public IResolvable|BedrockagentcoreBrowserCustomBrowserSigning BrowserSigningInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigning">BedrockagentcoreBrowserCustomBrowserSigning</a>

---

##### `CertificatesInput`<sup>Optional</sup> <a name="CertificatesInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.certificatesInput"></a>

```csharp
public IResolvable|BedrockagentcoreBrowserCustomCertificates[] CertificatesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificates">BedrockagentcoreBrowserCustomCertificates</a>[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnterprisePoliciesInput`<sup>Optional</sup> <a name="EnterprisePoliciesInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.enterprisePoliciesInput"></a>

```csharp
public IResolvable|BedrockagentcoreBrowserCustomEnterprisePolicies[] EnterprisePoliciesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies">BedrockagentcoreBrowserCustomEnterprisePolicies</a>[]

---

##### `ExecutionRoleArnInput`<sup>Optional</sup> <a name="ExecutionRoleArnInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.executionRoleArnInput"></a>

```csharp
public string ExecutionRoleArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkConfigurationInput`<sup>Optional</sup> <a name="NetworkConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.networkConfigurationInput"></a>

```csharp
public IResolvable|BedrockagentcoreBrowserCustomNetworkConfiguration NetworkConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfiguration">BedrockagentcoreBrowserCustomNetworkConfiguration</a>

---

##### `RecordingConfigInput`<sup>Optional</sup> <a name="RecordingConfigInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.recordingConfigInput"></a>

```csharp
public IResolvable|BedrockagentcoreBrowserCustomRecordingConfig RecordingConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfig">BedrockagentcoreBrowserCustomRecordingConfig</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreBrowserCustomBrowserSigning <a name="BedrockagentcoreBrowserCustomBrowserSigning" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigning.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreBrowserCustomBrowserSigning {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigning.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#enabled BedrockagentcoreBrowserCustom#enabled}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigning.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#enabled BedrockagentcoreBrowserCustom#enabled}.

---

### BedrockagentcoreBrowserCustomCertificates <a name="BedrockagentcoreBrowserCustomCertificates" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificates.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreBrowserCustomCertificates {
    BedrockagentcoreBrowserCustomCertificatesCertificateLocation CertificateLocation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificates.property.certificateLocation">CertificateLocation</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocation">BedrockagentcoreBrowserCustomCertificatesCertificateLocation</a></code> | Certificate location in Secrets Manager. |

---

##### `CertificateLocation`<sup>Optional</sup> <a name="CertificateLocation" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificates.property.certificateLocation"></a>

```csharp
public BedrockagentcoreBrowserCustomCertificatesCertificateLocation CertificateLocation { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocation">BedrockagentcoreBrowserCustomCertificatesCertificateLocation</a>

Certificate location in Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#certificate_location BedrockagentcoreBrowserCustom#certificate_location}

---

### BedrockagentcoreBrowserCustomCertificatesCertificateLocation <a name="BedrockagentcoreBrowserCustomCertificatesCertificateLocation" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreBrowserCustomCertificatesCertificateLocation {
    string SecretArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocation.property.secretArn">SecretArn</a></code> | <code>string</code> | Secrets Manager secret ARN. |

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocation.property.secretArn"></a>

```csharp
public string SecretArn { get; set; }
```

- *Type:* string

Secrets Manager secret ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#secret_arn BedrockagentcoreBrowserCustom#secret_arn}

---

### BedrockagentcoreBrowserCustomConfig <a name="BedrockagentcoreBrowserCustomConfig" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreBrowserCustomConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    BedrockagentcoreBrowserCustomNetworkConfiguration NetworkConfiguration,
    BedrockagentcoreBrowserCustomBrowserSigning BrowserSigning = null,
    IResolvable|BedrockagentcoreBrowserCustomCertificates[] Certificates = null,
    string Description = null,
    IResolvable|BedrockagentcoreBrowserCustomEnterprisePolicies[] EnterprisePolicies = null,
    string ExecutionRoleArn = null,
    BedrockagentcoreBrowserCustomRecordingConfig RecordingConfig = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.name">Name</a></code> | <code>string</code> | The name of the browser. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfiguration">BedrockagentcoreBrowserCustomNetworkConfiguration</a></code> | Network configuration for browser. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.browserSigning">BrowserSigning</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigning">BedrockagentcoreBrowserCustomBrowserSigning</a></code> | Browser signing configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.certificates">Certificates</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificates">BedrockagentcoreBrowserCustomCertificates</a>[]</code> | List of root CA certificates in PEM format. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.description">Description</a></code> | <code>string</code> | The description of the browser. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.enterprisePolicies">EnterprisePolicies</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies">BedrockagentcoreBrowserCustomEnterprisePolicies</a>[]</code> | A list of enterprise policy files for the browser. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the IAM role that the browser uses to access resources. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.recordingConfig">RecordingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfig">BedrockagentcoreBrowserCustomRecordingConfig</a></code> | Recording configuration for browser. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of tag keys and values. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the browser.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#name BedrockagentcoreBrowserCustom#name}

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.networkConfiguration"></a>

```csharp
public BedrockagentcoreBrowserCustomNetworkConfiguration NetworkConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfiguration">BedrockagentcoreBrowserCustomNetworkConfiguration</a>

Network configuration for browser.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#network_configuration BedrockagentcoreBrowserCustom#network_configuration}

---

##### `BrowserSigning`<sup>Optional</sup> <a name="BrowserSigning" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.browserSigning"></a>

```csharp
public BedrockagentcoreBrowserCustomBrowserSigning BrowserSigning { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigning">BedrockagentcoreBrowserCustomBrowserSigning</a>

Browser signing configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#browser_signing BedrockagentcoreBrowserCustom#browser_signing}

---

##### `Certificates`<sup>Optional</sup> <a name="Certificates" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.certificates"></a>

```csharp
public IResolvable|BedrockagentcoreBrowserCustomCertificates[] Certificates { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificates">BedrockagentcoreBrowserCustomCertificates</a>[]

List of root CA certificates in PEM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#certificates BedrockagentcoreBrowserCustom#certificates}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the browser.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#description BedrockagentcoreBrowserCustom#description}

---

##### `EnterprisePolicies`<sup>Optional</sup> <a name="EnterprisePolicies" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.enterprisePolicies"></a>

```csharp
public IResolvable|BedrockagentcoreBrowserCustomEnterprisePolicies[] EnterprisePolicies { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies">BedrockagentcoreBrowserCustomEnterprisePolicies</a>[]

A list of enterprise policy files for the browser.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#enterprise_policies BedrockagentcoreBrowserCustom#enterprise_policies}

---

##### `ExecutionRoleArn`<sup>Optional</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the IAM role that the browser uses to access resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#execution_role_arn BedrockagentcoreBrowserCustom#execution_role_arn}

---

##### `RecordingConfig`<sup>Optional</sup> <a name="RecordingConfig" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.recordingConfig"></a>

```csharp
public BedrockagentcoreBrowserCustomRecordingConfig RecordingConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfig">BedrockagentcoreBrowserCustomRecordingConfig</a>

Recording configuration for browser.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#recording_config BedrockagentcoreBrowserCustom#recording_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of tag keys and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#tags BedrockagentcoreBrowserCustom#tags}

---

### BedrockagentcoreBrowserCustomEnterprisePolicies <a name="BedrockagentcoreBrowserCustomEnterprisePolicies" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreBrowserCustomEnterprisePolicies {
    BedrockagentcoreBrowserCustomEnterprisePoliciesLocation Location = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies.property.location">Location</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocation">BedrockagentcoreBrowserCustomEnterprisePoliciesLocation</a></code> | The S3 location of the enterprise policy file. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies.property.type">Type</a></code> | <code>string</code> | The type of browser enterprise policy. |

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies.property.location"></a>

```csharp
public BedrockagentcoreBrowserCustomEnterprisePoliciesLocation Location { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocation">BedrockagentcoreBrowserCustomEnterprisePoliciesLocation</a>

The S3 location of the enterprise policy file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#location BedrockagentcoreBrowserCustom#location}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of browser enterprise policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#type BedrockagentcoreBrowserCustom#type}

---

### BedrockagentcoreBrowserCustomEnterprisePoliciesLocation <a name="BedrockagentcoreBrowserCustomEnterprisePoliciesLocation" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreBrowserCustomEnterprisePoliciesLocation {
    string Bucket = null,
    string Prefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocation.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#bucket BedrockagentcoreBrowserCustom#bucket}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocation.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#prefix BedrockagentcoreBrowserCustom#prefix}. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocation.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#bucket BedrockagentcoreBrowserCustom#bucket}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocation.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#prefix BedrockagentcoreBrowserCustom#prefix}.

---

### BedrockagentcoreBrowserCustomNetworkConfiguration <a name="BedrockagentcoreBrowserCustomNetworkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreBrowserCustomNetworkConfiguration {
    string NetworkMode = null,
    BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig VpcConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfiguration.property.networkMode">NetworkMode</a></code> | <code>string</code> | Network modes supported by browser. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfiguration.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig">BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig</a></code> | Network mode configuration for VPC. |

---

##### `NetworkMode`<sup>Optional</sup> <a name="NetworkMode" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfiguration.property.networkMode"></a>

```csharp
public string NetworkMode { get; set; }
```

- *Type:* string

Network modes supported by browser.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#network_mode BedrockagentcoreBrowserCustom#network_mode}

---

##### `VpcConfig`<sup>Optional</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfiguration.property.vpcConfig"></a>

```csharp
public BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig VpcConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig">BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig</a>

Network mode configuration for VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#vpc_config BedrockagentcoreBrowserCustom#vpc_config}

---

### BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig <a name="BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig {
    string[] SecurityGroups = null,
    string[] Subnets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | Security groups for VPC. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig.property.subnets">Subnets</a></code> | <code>string[]</code> | Subnets for VPC. |

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; set; }
```

- *Type:* string[]

Security groups for VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#security_groups BedrockagentcoreBrowserCustom#security_groups}

---

##### `Subnets`<sup>Optional</sup> <a name="Subnets" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig.property.subnets"></a>

```csharp
public string[] Subnets { get; set; }
```

- *Type:* string[]

Subnets for VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#subnets BedrockagentcoreBrowserCustom#subnets}

---

### BedrockagentcoreBrowserCustomRecordingConfig <a name="BedrockagentcoreBrowserCustomRecordingConfig" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreBrowserCustomRecordingConfig {
    bool|IResolvable Enabled = null,
    BedrockagentcoreBrowserCustomRecordingConfigS3Location S3Location = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#enabled BedrockagentcoreBrowserCustom#enabled}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfig.property.s3Location">S3Location</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3Location">BedrockagentcoreBrowserCustomRecordingConfigS3Location</a></code> | S3 Location Configuration. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#enabled BedrockagentcoreBrowserCustom#enabled}.

---

##### `S3Location`<sup>Optional</sup> <a name="S3Location" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfig.property.s3Location"></a>

```csharp
public BedrockagentcoreBrowserCustomRecordingConfigS3Location S3Location { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3Location">BedrockagentcoreBrowserCustomRecordingConfigS3Location</a>

S3 Location Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#s3_location BedrockagentcoreBrowserCustom#s3_location}

---

### BedrockagentcoreBrowserCustomRecordingConfigS3Location <a name="BedrockagentcoreBrowserCustomRecordingConfigS3Location" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3Location.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreBrowserCustomRecordingConfigS3Location {
    string Bucket = null,
    string Prefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3Location.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#bucket BedrockagentcoreBrowserCustom#bucket}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3Location.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#prefix BedrockagentcoreBrowserCustom#prefix}. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3Location.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#bucket BedrockagentcoreBrowserCustom#bucket}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3Location.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#prefix BedrockagentcoreBrowserCustom#prefix}.

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreBrowserCustomBrowserSigningOutputReference <a name="BedrockagentcoreBrowserCustomBrowserSigningOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreBrowserCustomBrowserSigningOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigning">BedrockagentcoreBrowserCustomBrowserSigning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreBrowserCustomBrowserSigning InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigning">BedrockagentcoreBrowserCustomBrowserSigning</a>

---


### BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference <a name="BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.resetSecretArn"></a>

```csharp
private void ResetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocation">BedrockagentcoreBrowserCustomCertificatesCertificateLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.secretArnInput"></a>

```csharp
public string SecretArnInput { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreBrowserCustomCertificatesCertificateLocation InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocation">BedrockagentcoreBrowserCustomCertificatesCertificateLocation</a>

---


### BedrockagentcoreBrowserCustomCertificatesList <a name="BedrockagentcoreBrowserCustomCertificatesList" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreBrowserCustomCertificatesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.get"></a>

```csharp
private BedrockagentcoreBrowserCustomCertificatesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificates">BedrockagentcoreBrowserCustomCertificates</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreBrowserCustomCertificates[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificates">BedrockagentcoreBrowserCustomCertificates</a>[]

---


### BedrockagentcoreBrowserCustomCertificatesOutputReference <a name="BedrockagentcoreBrowserCustomCertificatesOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreBrowserCustomCertificatesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.putCertificateLocation">PutCertificateLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.resetCertificateLocation">ResetCertificateLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCertificateLocation` <a name="PutCertificateLocation" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.putCertificateLocation"></a>

```csharp
private void PutCertificateLocation(BedrockagentcoreBrowserCustomCertificatesCertificateLocation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.putCertificateLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocation">BedrockagentcoreBrowserCustomCertificatesCertificateLocation</a>

---

##### `ResetCertificateLocation` <a name="ResetCertificateLocation" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.resetCertificateLocation"></a>

```csharp
private void ResetCertificateLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.property.certificateLocation">CertificateLocation</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference">BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.property.certificateLocationInput">CertificateLocationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocation">BedrockagentcoreBrowserCustomCertificatesCertificateLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificates">BedrockagentcoreBrowserCustomCertificates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateLocation`<sup>Required</sup> <a name="CertificateLocation" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.property.certificateLocation"></a>

```csharp
public BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference CertificateLocation { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference">BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference</a>

---

##### `CertificateLocationInput`<sup>Optional</sup> <a name="CertificateLocationInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.property.certificateLocationInput"></a>

```csharp
public IResolvable|BedrockagentcoreBrowserCustomCertificatesCertificateLocation CertificateLocationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocation">BedrockagentcoreBrowserCustomCertificatesCertificateLocation</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreBrowserCustomCertificates InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificates">BedrockagentcoreBrowserCustomCertificates</a>

---


### BedrockagentcoreBrowserCustomEnterprisePoliciesList <a name="BedrockagentcoreBrowserCustomEnterprisePoliciesList" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreBrowserCustomEnterprisePoliciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.get"></a>

```csharp
private BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies">BedrockagentcoreBrowserCustomEnterprisePolicies</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreBrowserCustomEnterprisePolicies[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies">BedrockagentcoreBrowserCustomEnterprisePolicies</a>[]

---


### BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference <a name="BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocation">BedrockagentcoreBrowserCustomEnterprisePoliciesLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreBrowserCustomEnterprisePoliciesLocation InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocation">BedrockagentcoreBrowserCustomEnterprisePoliciesLocation</a>

---


### BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference <a name="BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.putLocation">PutLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLocation` <a name="PutLocation" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.putLocation"></a>

```csharp
private void PutLocation(BedrockagentcoreBrowserCustomEnterprisePoliciesLocation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocation">BedrockagentcoreBrowserCustomEnterprisePoliciesLocation</a>

---

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.location">Location</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference">BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.locationInput">LocationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocation">BedrockagentcoreBrowserCustomEnterprisePoliciesLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies">BedrockagentcoreBrowserCustomEnterprisePolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.location"></a>

```csharp
public BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference Location { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference">BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.locationInput"></a>

```csharp
public IResolvable|BedrockagentcoreBrowserCustomEnterprisePoliciesLocation LocationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocation">BedrockagentcoreBrowserCustomEnterprisePoliciesLocation</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreBrowserCustomEnterprisePolicies InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies">BedrockagentcoreBrowserCustomEnterprisePolicies</a>

---


### BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference <a name="BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.putVpcConfig">PutVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.resetNetworkMode">ResetNetworkMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.resetVpcConfig">ResetVpcConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVpcConfig` <a name="PutVpcConfig" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.putVpcConfig"></a>

```csharp
private void PutVpcConfig(BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig">BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig</a>

---

##### `ResetNetworkMode` <a name="ResetNetworkMode" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.resetNetworkMode"></a>

```csharp
private void ResetNetworkMode()
```

##### `ResetVpcConfig` <a name="ResetVpcConfig" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.resetVpcConfig"></a>

```csharp
private void ResetVpcConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference">BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.networkModeInput">NetworkModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.vpcConfigInput">VpcConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig">BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.networkMode">NetworkMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfiguration">BedrockagentcoreBrowserCustomNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.vpcConfig"></a>

```csharp
public BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference VpcConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference">BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference</a>

---

##### `NetworkModeInput`<sup>Optional</sup> <a name="NetworkModeInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.networkModeInput"></a>

```csharp
public string NetworkModeInput { get; }
```

- *Type:* string

---

##### `VpcConfigInput`<sup>Optional</sup> <a name="VpcConfigInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.vpcConfigInput"></a>

```csharp
public IResolvable|BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig VpcConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig">BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig</a>

---

##### `NetworkMode`<sup>Required</sup> <a name="NetworkMode" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.networkMode"></a>

```csharp
public string NetworkMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreBrowserCustomNetworkConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfiguration">BedrockagentcoreBrowserCustomNetworkConfiguration</a>

---


### BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference <a name="BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.resetSubnets">ResetSubnets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.resetSecurityGroups"></a>

```csharp
private void ResetSecurityGroups()
```

##### `ResetSubnets` <a name="ResetSubnets" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.resetSubnets"></a>

```csharp
private void ResetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig">BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.securityGroupsInput"></a>

```csharp
public string[] SecurityGroupsInput { get; }
```

- *Type:* string[]

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.subnetsInput"></a>

```csharp
public string[] SubnetsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig">BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig</a>

---


### BedrockagentcoreBrowserCustomRecordingConfigOutputReference <a name="BedrockagentcoreBrowserCustomRecordingConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreBrowserCustomRecordingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.putS3Location">PutS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.resetS3Location">ResetS3Location</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Location` <a name="PutS3Location" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.putS3Location"></a>

```csharp
private void PutS3Location(BedrockagentcoreBrowserCustomRecordingConfigS3Location Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.putS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3Location">BedrockagentcoreBrowserCustomRecordingConfigS3Location</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetS3Location` <a name="ResetS3Location" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.resetS3Location"></a>

```csharp
private void ResetS3Location()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.s3Location">S3Location</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference">BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.s3LocationInput">S3LocationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3Location">BedrockagentcoreBrowserCustomRecordingConfigS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfig">BedrockagentcoreBrowserCustomRecordingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Location`<sup>Required</sup> <a name="S3Location" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.s3Location"></a>

```csharp
public BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference S3Location { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference">BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `S3LocationInput`<sup>Optional</sup> <a name="S3LocationInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.s3LocationInput"></a>

```csharp
public IResolvable|BedrockagentcoreBrowserCustomRecordingConfigS3Location S3LocationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3Location">BedrockagentcoreBrowserCustomRecordingConfigS3Location</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreBrowserCustomRecordingConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfig">BedrockagentcoreBrowserCustomRecordingConfig</a>

---


### BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference <a name="BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3Location">BedrockagentcoreBrowserCustomRecordingConfigS3Location</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreBrowserCustomRecordingConfigS3Location InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3Location">BedrockagentcoreBrowserCustomRecordingConfigS3Location</a>

---



