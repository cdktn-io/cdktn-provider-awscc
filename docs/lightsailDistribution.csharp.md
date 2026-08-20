# `lightsailDistribution` Submodule <a name="`lightsailDistribution` Submodule" id="@cdktn/provider-awscc.lightsailDistribution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailDistribution <a name="LightsailDistribution" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution awscc_lightsail_distribution}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailDistribution(Construct Scope, string Id, LightsailDistributionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig">LightsailDistributionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig">LightsailDistributionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putCacheBehaviors">PutCacheBehaviors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putCacheBehaviorSettings">PutCacheBehaviorSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putDefaultCacheBehavior">PutDefaultCacheBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putOrigin">PutOrigin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.resetCacheBehaviors">ResetCacheBehaviors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.resetCacheBehaviorSettings">ResetCacheBehaviorSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.resetCertificateName">ResetCertificateName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCacheBehaviors` <a name="PutCacheBehaviors" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putCacheBehaviors"></a>

```csharp
private void PutCacheBehaviors(IResolvable|LightsailDistributionCacheBehaviors[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putCacheBehaviors.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors">LightsailDistributionCacheBehaviors</a>[]

---

##### `PutCacheBehaviorSettings` <a name="PutCacheBehaviorSettings" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putCacheBehaviorSettings"></a>

```csharp
private void PutCacheBehaviorSettings(LightsailDistributionCacheBehaviorSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putCacheBehaviorSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings">LightsailDistributionCacheBehaviorSettings</a>

---

##### `PutDefaultCacheBehavior` <a name="PutDefaultCacheBehavior" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putDefaultCacheBehavior"></a>

```csharp
private void PutDefaultCacheBehavior(LightsailDistributionDefaultCacheBehavior Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putDefaultCacheBehavior.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehavior">LightsailDistributionDefaultCacheBehavior</a>

---

##### `PutOrigin` <a name="PutOrigin" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putOrigin"></a>

```csharp
private void PutOrigin(LightsailDistributionOrigin Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putOrigin.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin">LightsailDistributionOrigin</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putTags"></a>

```csharp
private void PutTags(IResolvable|LightsailDistributionTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags">LightsailDistributionTags</a>[]

---

##### `ResetCacheBehaviors` <a name="ResetCacheBehaviors" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.resetCacheBehaviors"></a>

```csharp
private void ResetCacheBehaviors()
```

##### `ResetCacheBehaviorSettings` <a name="ResetCacheBehaviorSettings" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.resetCacheBehaviorSettings"></a>

```csharp
private void ResetCacheBehaviorSettings()
```

##### `ResetCertificateName` <a name="ResetCertificateName" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.resetCertificateName"></a>

```csharp
private void ResetCertificateName()
```

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.resetIpAddressType"></a>

```csharp
private void ResetIpAddressType()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LightsailDistribution resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LightsailDistribution.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LightsailDistribution.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LightsailDistribution.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LightsailDistribution.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LightsailDistribution resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LightsailDistribution to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LightsailDistribution that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LightsailDistribution to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.ableToUpdateBundle">AbleToUpdateBundle</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.cacheBehaviors">CacheBehaviors</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList">LightsailDistributionCacheBehaviorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.cacheBehaviorSettings">CacheBehaviorSettings</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference">LightsailDistributionCacheBehaviorSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.defaultCacheBehavior">DefaultCacheBehavior</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference">LightsailDistributionDefaultCacheBehaviorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.distributionArn">DistributionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.origin">Origin</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference">LightsailDistributionOriginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList">LightsailDistributionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.bundleIdInput">BundleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.cacheBehaviorSettingsInput">CacheBehaviorSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings">LightsailDistributionCacheBehaviorSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.cacheBehaviorsInput">CacheBehaviorsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors">LightsailDistributionCacheBehaviors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.certificateNameInput">CertificateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.defaultCacheBehaviorInput">DefaultCacheBehaviorInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehavior">LightsailDistributionDefaultCacheBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.distributionNameInput">DistributionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.isEnabledInput">IsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.originInput">OriginInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin">LightsailDistributionOrigin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags">LightsailDistributionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.bundleId">BundleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.certificateName">CertificateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.distributionName">DistributionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.isEnabled">IsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AbleToUpdateBundle`<sup>Required</sup> <a name="AbleToUpdateBundle" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.ableToUpdateBundle"></a>

```csharp
public IResolvable AbleToUpdateBundle { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `CacheBehaviors`<sup>Required</sup> <a name="CacheBehaviors" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.cacheBehaviors"></a>

```csharp
public LightsailDistributionCacheBehaviorsList CacheBehaviors { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList">LightsailDistributionCacheBehaviorsList</a>

---

##### `CacheBehaviorSettings`<sup>Required</sup> <a name="CacheBehaviorSettings" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.cacheBehaviorSettings"></a>

```csharp
public LightsailDistributionCacheBehaviorSettingsOutputReference CacheBehaviorSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference">LightsailDistributionCacheBehaviorSettingsOutputReference</a>

---

##### `DefaultCacheBehavior`<sup>Required</sup> <a name="DefaultCacheBehavior" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.defaultCacheBehavior"></a>

```csharp
public LightsailDistributionDefaultCacheBehaviorOutputReference DefaultCacheBehavior { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference">LightsailDistributionDefaultCacheBehaviorOutputReference</a>

---

##### `DistributionArn`<sup>Required</sup> <a name="DistributionArn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.distributionArn"></a>

```csharp
public string DistributionArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.origin"></a>

```csharp
public LightsailDistributionOriginOutputReference Origin { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference">LightsailDistributionOriginOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.tags"></a>

```csharp
public LightsailDistributionTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList">LightsailDistributionTagsList</a>

---

##### `BundleIdInput`<sup>Optional</sup> <a name="BundleIdInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.bundleIdInput"></a>

```csharp
public string BundleIdInput { get; }
```

- *Type:* string

---

##### `CacheBehaviorSettingsInput`<sup>Optional</sup> <a name="CacheBehaviorSettingsInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.cacheBehaviorSettingsInput"></a>

```csharp
public IResolvable|LightsailDistributionCacheBehaviorSettings CacheBehaviorSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings">LightsailDistributionCacheBehaviorSettings</a>

---

##### `CacheBehaviorsInput`<sup>Optional</sup> <a name="CacheBehaviorsInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.cacheBehaviorsInput"></a>

```csharp
public IResolvable|LightsailDistributionCacheBehaviors[] CacheBehaviorsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors">LightsailDistributionCacheBehaviors</a>[]

---

##### `CertificateNameInput`<sup>Optional</sup> <a name="CertificateNameInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.certificateNameInput"></a>

```csharp
public string CertificateNameInput { get; }
```

- *Type:* string

---

##### `DefaultCacheBehaviorInput`<sup>Optional</sup> <a name="DefaultCacheBehaviorInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.defaultCacheBehaviorInput"></a>

```csharp
public IResolvable|LightsailDistributionDefaultCacheBehavior DefaultCacheBehaviorInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehavior">LightsailDistributionDefaultCacheBehavior</a>

---

##### `DistributionNameInput`<sup>Optional</sup> <a name="DistributionNameInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.distributionNameInput"></a>

```csharp
public string DistributionNameInput { get; }
```

- *Type:* string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.ipAddressTypeInput"></a>

```csharp
public string IpAddressTypeInput { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.isEnabledInput"></a>

```csharp
public bool|IResolvable IsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `OriginInput`<sup>Optional</sup> <a name="OriginInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.originInput"></a>

```csharp
public IResolvable|LightsailDistributionOrigin OriginInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin">LightsailDistributionOrigin</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.tagsInput"></a>

```csharp
public IResolvable|LightsailDistributionTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags">LightsailDistributionTags</a>[]

---

##### `BundleId`<sup>Required</sup> <a name="BundleId" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.bundleId"></a>

```csharp
public string BundleId { get; }
```

- *Type:* string

---

##### `CertificateName`<sup>Required</sup> <a name="CertificateName" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.certificateName"></a>

```csharp
public string CertificateName { get; }
```

- *Type:* string

---

##### `DistributionName`<sup>Required</sup> <a name="DistributionName" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.distributionName"></a>

```csharp
public string DistributionName { get; }
```

- *Type:* string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.isEnabled"></a>

```csharp
public bool|IResolvable IsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailDistributionCacheBehaviors <a name="LightsailDistributionCacheBehaviors" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailDistributionCacheBehaviors {
    string Behavior = null,
    string Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors.property.behavior">Behavior</a></code> | <code>string</code> | The cache behavior for the specified path. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors.property.path">Path</a></code> | <code>string</code> | The path to a directory or file to cached, or not cache. |

---

##### `Behavior`<sup>Optional</sup> <a name="Behavior" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors.property.behavior"></a>

```csharp
public string Behavior { get; set; }
```

- *Type:* string

The cache behavior for the specified path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#behavior LightsailDistribution#behavior}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The path to a directory or file to cached, or not cache.

Use an asterisk symbol to specify wildcard directories (path/to/assets/*), and file types (*.html, *jpg, *js). Directories and file paths are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#path LightsailDistribution#path}

---

### LightsailDistributionCacheBehaviorSettings <a name="LightsailDistributionCacheBehaviorSettings" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailDistributionCacheBehaviorSettings {
    string AllowedHttpMethods = null,
    string CachedHttpMethods = null,
    double DefaultTtl = null,
    LightsailDistributionCacheBehaviorSettingsForwardedCookies ForwardedCookies = null,
    LightsailDistributionCacheBehaviorSettingsForwardedHeaders ForwardedHeaders = null,
    LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings ForwardedQueryStrings = null,
    double MaximumTtl = null,
    double MinimumTtl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.allowedHttpMethods">AllowedHttpMethods</a></code> | <code>string</code> | The HTTP methods that are processed and forwarded to the distribution's origin. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.cachedHttpMethods">CachedHttpMethods</a></code> | <code>string</code> | The HTTP method responses that are cached by your distribution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.defaultTtl">DefaultTtl</a></code> | <code>double</code> | The default amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the content has been updated. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.forwardedCookies">ForwardedCookies</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies">LightsailDistributionCacheBehaviorSettingsForwardedCookies</a></code> | An object that describes the cookies that are forwarded to the origin. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.forwardedHeaders">ForwardedHeaders</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders">LightsailDistributionCacheBehaviorSettingsForwardedHeaders</a></code> | An object that describes the headers that are forwarded to the origin. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.forwardedQueryStrings">ForwardedQueryStrings</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings">LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings</a></code> | An object that describes the query strings that are forwarded to the origin. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.maximumTtl">MaximumTtl</a></code> | <code>double</code> | The maximum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.minimumTtl">MinimumTtl</a></code> | <code>double</code> | The minimum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated. |

---

##### `AllowedHttpMethods`<sup>Optional</sup> <a name="AllowedHttpMethods" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.allowedHttpMethods"></a>

```csharp
public string AllowedHttpMethods { get; set; }
```

- *Type:* string

The HTTP methods that are processed and forwarded to the distribution's origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#allowed_http_methods LightsailDistribution#allowed_http_methods}

---

##### `CachedHttpMethods`<sup>Optional</sup> <a name="CachedHttpMethods" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.cachedHttpMethods"></a>

```csharp
public string CachedHttpMethods { get; set; }
```

- *Type:* string

The HTTP method responses that are cached by your distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#cached_http_methods LightsailDistribution#cached_http_methods}

---

##### `DefaultTtl`<sup>Optional</sup> <a name="DefaultTtl" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.defaultTtl"></a>

```csharp
public double DefaultTtl { get; set; }
```

- *Type:* double

The default amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the content has been updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#default_ttl LightsailDistribution#default_ttl}

---

##### `ForwardedCookies`<sup>Optional</sup> <a name="ForwardedCookies" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.forwardedCookies"></a>

```csharp
public LightsailDistributionCacheBehaviorSettingsForwardedCookies ForwardedCookies { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies">LightsailDistributionCacheBehaviorSettingsForwardedCookies</a>

An object that describes the cookies that are forwarded to the origin.

Your content is cached based on the cookies that are forwarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#forwarded_cookies LightsailDistribution#forwarded_cookies}

---

##### `ForwardedHeaders`<sup>Optional</sup> <a name="ForwardedHeaders" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.forwardedHeaders"></a>

```csharp
public LightsailDistributionCacheBehaviorSettingsForwardedHeaders ForwardedHeaders { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders">LightsailDistributionCacheBehaviorSettingsForwardedHeaders</a>

An object that describes the headers that are forwarded to the origin.

Your content is cached based on the headers that are forwarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#forwarded_headers LightsailDistribution#forwarded_headers}

---

##### `ForwardedQueryStrings`<sup>Optional</sup> <a name="ForwardedQueryStrings" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.forwardedQueryStrings"></a>

```csharp
public LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings ForwardedQueryStrings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings">LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings</a>

An object that describes the query strings that are forwarded to the origin.

Your content is cached based on the query strings that are forwarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#forwarded_query_strings LightsailDistribution#forwarded_query_strings}

---

##### `MaximumTtl`<sup>Optional</sup> <a name="MaximumTtl" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.maximumTtl"></a>

```csharp
public double MaximumTtl { get; set; }
```

- *Type:* double

The maximum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#maximum_ttl LightsailDistribution#maximum_ttl}

---

##### `MinimumTtl`<sup>Optional</sup> <a name="MinimumTtl" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.minimumTtl"></a>

```csharp
public double MinimumTtl { get; set; }
```

- *Type:* double

The minimum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#minimum_ttl LightsailDistribution#minimum_ttl}

---

### LightsailDistributionCacheBehaviorSettingsForwardedCookies <a name="LightsailDistributionCacheBehaviorSettingsForwardedCookies" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailDistributionCacheBehaviorSettingsForwardedCookies {
    string[] CookiesAllowList = null,
    string Option = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies.property.cookiesAllowList">CookiesAllowList</a></code> | <code>string[]</code> | The specific cookies to forward to your distribution's origin. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies.property.option">Option</a></code> | <code>string</code> | Specifies which cookies to forward to the distribution's origin for a cache behavior: all, none, or allow-list to forward only the cookies specified in the cookiesAllowList parameter. |

---

##### `CookiesAllowList`<sup>Optional</sup> <a name="CookiesAllowList" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies.property.cookiesAllowList"></a>

```csharp
public string[] CookiesAllowList { get; set; }
```

- *Type:* string[]

The specific cookies to forward to your distribution's origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#cookies_allow_list LightsailDistribution#cookies_allow_list}

---

##### `Option`<sup>Optional</sup> <a name="Option" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies.property.option"></a>

```csharp
public string Option { get; set; }
```

- *Type:* string

Specifies which cookies to forward to the distribution's origin for a cache behavior: all, none, or allow-list to forward only the cookies specified in the cookiesAllowList parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#option LightsailDistribution#option}

---

### LightsailDistributionCacheBehaviorSettingsForwardedHeaders <a name="LightsailDistributionCacheBehaviorSettingsForwardedHeaders" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailDistributionCacheBehaviorSettingsForwardedHeaders {
    string[] HeadersAllowList = null,
    string Option = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders.property.headersAllowList">HeadersAllowList</a></code> | <code>string[]</code> | The specific headers to forward to your distribution's origin. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders.property.option">Option</a></code> | <code>string</code> | The headers that you want your distribution to forward to your origin and base caching on. |

---

##### `HeadersAllowList`<sup>Optional</sup> <a name="HeadersAllowList" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders.property.headersAllowList"></a>

```csharp
public string[] HeadersAllowList { get; set; }
```

- *Type:* string[]

The specific headers to forward to your distribution's origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#headers_allow_list LightsailDistribution#headers_allow_list}

---

##### `Option`<sup>Optional</sup> <a name="Option" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders.property.option"></a>

```csharp
public string Option { get; set; }
```

- *Type:* string

The headers that you want your distribution to forward to your origin and base caching on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#option LightsailDistribution#option}

---

### LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings <a name="LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings {
    bool|IResolvable Option = null,
    string[] QueryStringsAllowList = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings.property.option">Option</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether the distribution forwards and caches based on query strings. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings.property.queryStringsAllowList">QueryStringsAllowList</a></code> | <code>string[]</code> | The specific query strings that the distribution forwards to the origin. |

---

##### `Option`<sup>Optional</sup> <a name="Option" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings.property.option"></a>

```csharp
public bool|IResolvable Option { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether the distribution forwards and caches based on query strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#option LightsailDistribution#option}

---

##### `QueryStringsAllowList`<sup>Optional</sup> <a name="QueryStringsAllowList" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings.property.queryStringsAllowList"></a>

```csharp
public string[] QueryStringsAllowList { get; set; }
```

- *Type:* string[]

The specific query strings that the distribution forwards to the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#query_strings_allow_list LightsailDistribution#query_strings_allow_list}

---

### LightsailDistributionConfig <a name="LightsailDistributionConfig" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailDistributionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string BundleId,
    LightsailDistributionDefaultCacheBehavior DefaultCacheBehavior,
    string DistributionName,
    LightsailDistributionOrigin Origin,
    IResolvable|LightsailDistributionCacheBehaviors[] CacheBehaviors = null,
    LightsailDistributionCacheBehaviorSettings CacheBehaviorSettings = null,
    string CertificateName = null,
    string IpAddressType = null,
    bool|IResolvable IsEnabled = null,
    IResolvable|LightsailDistributionTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.bundleId">BundleId</a></code> | <code>string</code> | The bundle ID to use for the distribution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.defaultCacheBehavior">DefaultCacheBehavior</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehavior">LightsailDistributionDefaultCacheBehavior</a></code> | An object that describes the default cache behavior for the distribution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.distributionName">DistributionName</a></code> | <code>string</code> | The name for the distribution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.origin">Origin</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin">LightsailDistributionOrigin</a></code> | An object that describes the origin resource for the distribution, such as a Lightsail instance or load balancer. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.cacheBehaviors">CacheBehaviors</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors">LightsailDistributionCacheBehaviors</a>[]</code> | An array of objects that describe the per-path cache behavior for the distribution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.cacheBehaviorSettings">CacheBehaviorSettings</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings">LightsailDistributionCacheBehaviorSettings</a></code> | An object that describes the cache behavior settings for the distribution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.certificateName">CertificateName</a></code> | <code>string</code> | The certificate attached to the Distribution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | The IP address type for the distribution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.isEnabled">IsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether the distribution is enabled. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags">LightsailDistributionTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BundleId`<sup>Required</sup> <a name="BundleId" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.bundleId"></a>

```csharp
public string BundleId { get; set; }
```

- *Type:* string

The bundle ID to use for the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#bundle_id LightsailDistribution#bundle_id}

---

##### `DefaultCacheBehavior`<sup>Required</sup> <a name="DefaultCacheBehavior" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.defaultCacheBehavior"></a>

```csharp
public LightsailDistributionDefaultCacheBehavior DefaultCacheBehavior { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehavior">LightsailDistributionDefaultCacheBehavior</a>

An object that describes the default cache behavior for the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#default_cache_behavior LightsailDistribution#default_cache_behavior}

---

##### `DistributionName`<sup>Required</sup> <a name="DistributionName" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.distributionName"></a>

```csharp
public string DistributionName { get; set; }
```

- *Type:* string

The name for the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#distribution_name LightsailDistribution#distribution_name}

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.origin"></a>

```csharp
public LightsailDistributionOrigin Origin { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin">LightsailDistributionOrigin</a>

An object that describes the origin resource for the distribution, such as a Lightsail instance or load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#origin LightsailDistribution#origin}

---

##### `CacheBehaviors`<sup>Optional</sup> <a name="CacheBehaviors" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.cacheBehaviors"></a>

```csharp
public IResolvable|LightsailDistributionCacheBehaviors[] CacheBehaviors { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors">LightsailDistributionCacheBehaviors</a>[]

An array of objects that describe the per-path cache behavior for the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#cache_behaviors LightsailDistribution#cache_behaviors}

---

##### `CacheBehaviorSettings`<sup>Optional</sup> <a name="CacheBehaviorSettings" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.cacheBehaviorSettings"></a>

```csharp
public LightsailDistributionCacheBehaviorSettings CacheBehaviorSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings">LightsailDistributionCacheBehaviorSettings</a>

An object that describes the cache behavior settings for the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#cache_behavior_settings LightsailDistribution#cache_behavior_settings}

---

##### `CertificateName`<sup>Optional</sup> <a name="CertificateName" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.certificateName"></a>

```csharp
public string CertificateName { get; set; }
```

- *Type:* string

The certificate attached to the Distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#certificate_name LightsailDistribution#certificate_name}

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; set; }
```

- *Type:* string

The IP address type for the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#ip_address_type LightsailDistribution#ip_address_type}

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.isEnabled"></a>

```csharp
public bool|IResolvable IsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether the distribution is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#is_enabled LightsailDistribution#is_enabled}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.tags"></a>

```csharp
public IResolvable|LightsailDistributionTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags">LightsailDistributionTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#tags LightsailDistribution#tags}

---

### LightsailDistributionDefaultCacheBehavior <a name="LightsailDistributionDefaultCacheBehavior" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehavior"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehavior.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailDistributionDefaultCacheBehavior {
    string Behavior = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehavior.property.behavior">Behavior</a></code> | <code>string</code> | The cache behavior of the distribution. |

---

##### `Behavior`<sup>Optional</sup> <a name="Behavior" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehavior.property.behavior"></a>

```csharp
public string Behavior { get; set; }
```

- *Type:* string

The cache behavior of the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#behavior LightsailDistribution#behavior}

---

### LightsailDistributionOrigin <a name="LightsailDistributionOrigin" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailDistributionOrigin {
    string Name = null,
    string ProtocolPolicy = null,
    string RegionName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin.property.name">Name</a></code> | <code>string</code> | The name of the origin resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin.property.protocolPolicy">ProtocolPolicy</a></code> | <code>string</code> | The protocol that your Amazon Lightsail distribution uses when establishing a connection with your origin to pull content. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin.property.regionName">RegionName</a></code> | <code>string</code> | The AWS Region name of the origin resource. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the origin resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#name LightsailDistribution#name}

---

##### `ProtocolPolicy`<sup>Optional</sup> <a name="ProtocolPolicy" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin.property.protocolPolicy"></a>

```csharp
public string ProtocolPolicy { get; set; }
```

- *Type:* string

The protocol that your Amazon Lightsail distribution uses when establishing a connection with your origin to pull content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#protocol_policy LightsailDistribution#protocol_policy}

---

##### `RegionName`<sup>Optional</sup> <a name="RegionName" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin.property.regionName"></a>

```csharp
public string RegionName { get; set; }
```

- *Type:* string

The AWS Region name of the origin resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#region_name LightsailDistribution#region_name}

---

### LightsailDistributionTags <a name="LightsailDistributionTags" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailDistributionTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#key LightsailDistribution#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#value LightsailDistribution#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference <a name="LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.resetCookiesAllowList">ResetCookiesAllowList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.resetOption">ResetOption</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCookiesAllowList` <a name="ResetCookiesAllowList" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.resetCookiesAllowList"></a>

```csharp
private void ResetCookiesAllowList()
```

##### `ResetOption` <a name="ResetOption" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.resetOption"></a>

```csharp
private void ResetOption()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.cookiesAllowListInput">CookiesAllowListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.optionInput">OptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.cookiesAllowList">CookiesAllowList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.option">Option</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies">LightsailDistributionCacheBehaviorSettingsForwardedCookies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CookiesAllowListInput`<sup>Optional</sup> <a name="CookiesAllowListInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.cookiesAllowListInput"></a>

```csharp
public string[] CookiesAllowListInput { get; }
```

- *Type:* string[]

---

##### `OptionInput`<sup>Optional</sup> <a name="OptionInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.optionInput"></a>

```csharp
public string OptionInput { get; }
```

- *Type:* string

---

##### `CookiesAllowList`<sup>Required</sup> <a name="CookiesAllowList" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.cookiesAllowList"></a>

```csharp
public string[] CookiesAllowList { get; }
```

- *Type:* string[]

---

##### `Option`<sup>Required</sup> <a name="Option" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.option"></a>

```csharp
public string Option { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LightsailDistributionCacheBehaviorSettingsForwardedCookies InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies">LightsailDistributionCacheBehaviorSettingsForwardedCookies</a>

---


### LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference <a name="LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.resetHeadersAllowList">ResetHeadersAllowList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.resetOption">ResetOption</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeadersAllowList` <a name="ResetHeadersAllowList" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.resetHeadersAllowList"></a>

```csharp
private void ResetHeadersAllowList()
```

##### `ResetOption` <a name="ResetOption" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.resetOption"></a>

```csharp
private void ResetOption()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.headersAllowListInput">HeadersAllowListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.optionInput">OptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.headersAllowList">HeadersAllowList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.option">Option</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders">LightsailDistributionCacheBehaviorSettingsForwardedHeaders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HeadersAllowListInput`<sup>Optional</sup> <a name="HeadersAllowListInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.headersAllowListInput"></a>

```csharp
public string[] HeadersAllowListInput { get; }
```

- *Type:* string[]

---

##### `OptionInput`<sup>Optional</sup> <a name="OptionInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.optionInput"></a>

```csharp
public string OptionInput { get; }
```

- *Type:* string

---

##### `HeadersAllowList`<sup>Required</sup> <a name="HeadersAllowList" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.headersAllowList"></a>

```csharp
public string[] HeadersAllowList { get; }
```

- *Type:* string[]

---

##### `Option`<sup>Required</sup> <a name="Option" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.option"></a>

```csharp
public string Option { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LightsailDistributionCacheBehaviorSettingsForwardedHeaders InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders">LightsailDistributionCacheBehaviorSettingsForwardedHeaders</a>

---


### LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference <a name="LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.resetOption">ResetOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.resetQueryStringsAllowList">ResetQueryStringsAllowList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOption` <a name="ResetOption" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.resetOption"></a>

```csharp
private void ResetOption()
```

##### `ResetQueryStringsAllowList` <a name="ResetQueryStringsAllowList" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.resetQueryStringsAllowList"></a>

```csharp
private void ResetQueryStringsAllowList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.optionInput">OptionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.queryStringsAllowListInput">QueryStringsAllowListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.option">Option</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.queryStringsAllowList">QueryStringsAllowList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings">LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OptionInput`<sup>Optional</sup> <a name="OptionInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.optionInput"></a>

```csharp
public bool|IResolvable OptionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `QueryStringsAllowListInput`<sup>Optional</sup> <a name="QueryStringsAllowListInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.queryStringsAllowListInput"></a>

```csharp
public string[] QueryStringsAllowListInput { get; }
```

- *Type:* string[]

---

##### `Option`<sup>Required</sup> <a name="Option" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.option"></a>

```csharp
public bool|IResolvable Option { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `QueryStringsAllowList`<sup>Required</sup> <a name="QueryStringsAllowList" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.queryStringsAllowList"></a>

```csharp
public string[] QueryStringsAllowList { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings">LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings</a>

---


### LightsailDistributionCacheBehaviorSettingsOutputReference <a name="LightsailDistributionCacheBehaviorSettingsOutputReference" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailDistributionCacheBehaviorSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedCookies">PutForwardedCookies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedHeaders">PutForwardedHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedQueryStrings">PutForwardedQueryStrings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetAllowedHttpMethods">ResetAllowedHttpMethods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetCachedHttpMethods">ResetCachedHttpMethods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetDefaultTtl">ResetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetForwardedCookies">ResetForwardedCookies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetForwardedHeaders">ResetForwardedHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetForwardedQueryStrings">ResetForwardedQueryStrings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetMaximumTtl">ResetMaximumTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetMinimumTtl">ResetMinimumTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutForwardedCookies` <a name="PutForwardedCookies" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedCookies"></a>

```csharp
private void PutForwardedCookies(LightsailDistributionCacheBehaviorSettingsForwardedCookies Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedCookies.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies">LightsailDistributionCacheBehaviorSettingsForwardedCookies</a>

---

##### `PutForwardedHeaders` <a name="PutForwardedHeaders" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedHeaders"></a>

```csharp
private void PutForwardedHeaders(LightsailDistributionCacheBehaviorSettingsForwardedHeaders Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedHeaders.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders">LightsailDistributionCacheBehaviorSettingsForwardedHeaders</a>

---

##### `PutForwardedQueryStrings` <a name="PutForwardedQueryStrings" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedQueryStrings"></a>

```csharp
private void PutForwardedQueryStrings(LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedQueryStrings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings">LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings</a>

---

##### `ResetAllowedHttpMethods` <a name="ResetAllowedHttpMethods" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetAllowedHttpMethods"></a>

```csharp
private void ResetAllowedHttpMethods()
```

##### `ResetCachedHttpMethods` <a name="ResetCachedHttpMethods" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetCachedHttpMethods"></a>

```csharp
private void ResetCachedHttpMethods()
```

##### `ResetDefaultTtl` <a name="ResetDefaultTtl" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetDefaultTtl"></a>

```csharp
private void ResetDefaultTtl()
```

##### `ResetForwardedCookies` <a name="ResetForwardedCookies" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetForwardedCookies"></a>

```csharp
private void ResetForwardedCookies()
```

##### `ResetForwardedHeaders` <a name="ResetForwardedHeaders" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetForwardedHeaders"></a>

```csharp
private void ResetForwardedHeaders()
```

##### `ResetForwardedQueryStrings` <a name="ResetForwardedQueryStrings" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetForwardedQueryStrings"></a>

```csharp
private void ResetForwardedQueryStrings()
```

##### `ResetMaximumTtl` <a name="ResetMaximumTtl" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetMaximumTtl"></a>

```csharp
private void ResetMaximumTtl()
```

##### `ResetMinimumTtl` <a name="ResetMinimumTtl" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetMinimumTtl"></a>

```csharp
private void ResetMinimumTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedCookies">ForwardedCookies</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference">LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedHeaders">ForwardedHeaders</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference">LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedQueryStrings">ForwardedQueryStrings</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference">LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.allowedHttpMethodsInput">AllowedHttpMethodsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.cachedHttpMethodsInput">CachedHttpMethodsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.defaultTtlInput">DefaultTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedCookiesInput">ForwardedCookiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies">LightsailDistributionCacheBehaviorSettingsForwardedCookies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedHeadersInput">ForwardedHeadersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders">LightsailDistributionCacheBehaviorSettingsForwardedHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedQueryStringsInput">ForwardedQueryStringsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings">LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.maximumTtlInput">MaximumTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.minimumTtlInput">MinimumTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.allowedHttpMethods">AllowedHttpMethods</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.cachedHttpMethods">CachedHttpMethods</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.defaultTtl">DefaultTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.maximumTtl">MaximumTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.minimumTtl">MinimumTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings">LightsailDistributionCacheBehaviorSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ForwardedCookies`<sup>Required</sup> <a name="ForwardedCookies" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedCookies"></a>

```csharp
public LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference ForwardedCookies { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference">LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference</a>

---

##### `ForwardedHeaders`<sup>Required</sup> <a name="ForwardedHeaders" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedHeaders"></a>

```csharp
public LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference ForwardedHeaders { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference">LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference</a>

---

##### `ForwardedQueryStrings`<sup>Required</sup> <a name="ForwardedQueryStrings" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedQueryStrings"></a>

```csharp
public LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference ForwardedQueryStrings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference">LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference</a>

---

##### `AllowedHttpMethodsInput`<sup>Optional</sup> <a name="AllowedHttpMethodsInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.allowedHttpMethodsInput"></a>

```csharp
public string AllowedHttpMethodsInput { get; }
```

- *Type:* string

---

##### `CachedHttpMethodsInput`<sup>Optional</sup> <a name="CachedHttpMethodsInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.cachedHttpMethodsInput"></a>

```csharp
public string CachedHttpMethodsInput { get; }
```

- *Type:* string

---

##### `DefaultTtlInput`<sup>Optional</sup> <a name="DefaultTtlInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.defaultTtlInput"></a>

```csharp
public double DefaultTtlInput { get; }
```

- *Type:* double

---

##### `ForwardedCookiesInput`<sup>Optional</sup> <a name="ForwardedCookiesInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedCookiesInput"></a>

```csharp
public IResolvable|LightsailDistributionCacheBehaviorSettingsForwardedCookies ForwardedCookiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies">LightsailDistributionCacheBehaviorSettingsForwardedCookies</a>

---

##### `ForwardedHeadersInput`<sup>Optional</sup> <a name="ForwardedHeadersInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedHeadersInput"></a>

```csharp
public IResolvable|LightsailDistributionCacheBehaviorSettingsForwardedHeaders ForwardedHeadersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders">LightsailDistributionCacheBehaviorSettingsForwardedHeaders</a>

---

##### `ForwardedQueryStringsInput`<sup>Optional</sup> <a name="ForwardedQueryStringsInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedQueryStringsInput"></a>

```csharp
public IResolvable|LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings ForwardedQueryStringsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings">LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings</a>

---

##### `MaximumTtlInput`<sup>Optional</sup> <a name="MaximumTtlInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.maximumTtlInput"></a>

```csharp
public double MaximumTtlInput { get; }
```

- *Type:* double

---

##### `MinimumTtlInput`<sup>Optional</sup> <a name="MinimumTtlInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.minimumTtlInput"></a>

```csharp
public double MinimumTtlInput { get; }
```

- *Type:* double

---

##### `AllowedHttpMethods`<sup>Required</sup> <a name="AllowedHttpMethods" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.allowedHttpMethods"></a>

```csharp
public string AllowedHttpMethods { get; }
```

- *Type:* string

---

##### `CachedHttpMethods`<sup>Required</sup> <a name="CachedHttpMethods" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.cachedHttpMethods"></a>

```csharp
public string CachedHttpMethods { get; }
```

- *Type:* string

---

##### `DefaultTtl`<sup>Required</sup> <a name="DefaultTtl" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.defaultTtl"></a>

```csharp
public double DefaultTtl { get; }
```

- *Type:* double

---

##### `MaximumTtl`<sup>Required</sup> <a name="MaximumTtl" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.maximumTtl"></a>

```csharp
public double MaximumTtl { get; }
```

- *Type:* double

---

##### `MinimumTtl`<sup>Required</sup> <a name="MinimumTtl" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.minimumTtl"></a>

```csharp
public double MinimumTtl { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LightsailDistributionCacheBehaviorSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings">LightsailDistributionCacheBehaviorSettings</a>

---


### LightsailDistributionCacheBehaviorsList <a name="LightsailDistributionCacheBehaviorsList" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailDistributionCacheBehaviorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.get"></a>

```csharp
private LightsailDistributionCacheBehaviorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors">LightsailDistributionCacheBehaviors</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.property.internalValue"></a>

```csharp
public IResolvable|LightsailDistributionCacheBehaviors[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors">LightsailDistributionCacheBehaviors</a>[]

---


### LightsailDistributionCacheBehaviorsOutputReference <a name="LightsailDistributionCacheBehaviorsOutputReference" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailDistributionCacheBehaviorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.resetBehavior">ResetBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBehavior` <a name="ResetBehavior" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.resetBehavior"></a>

```csharp
private void ResetBehavior()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.property.behaviorInput">BehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.property.behavior">Behavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors">LightsailDistributionCacheBehaviors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BehaviorInput`<sup>Optional</sup> <a name="BehaviorInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.property.behaviorInput"></a>

```csharp
public string BehaviorInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `Behavior`<sup>Required</sup> <a name="Behavior" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.property.behavior"></a>

```csharp
public string Behavior { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LightsailDistributionCacheBehaviors InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors">LightsailDistributionCacheBehaviors</a>

---


### LightsailDistributionDefaultCacheBehaviorOutputReference <a name="LightsailDistributionDefaultCacheBehaviorOutputReference" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailDistributionDefaultCacheBehaviorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.resetBehavior">ResetBehavior</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBehavior` <a name="ResetBehavior" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.resetBehavior"></a>

```csharp
private void ResetBehavior()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.behaviorInput">BehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.behavior">Behavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehavior">LightsailDistributionDefaultCacheBehavior</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BehaviorInput`<sup>Optional</sup> <a name="BehaviorInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.behaviorInput"></a>

```csharp
public string BehaviorInput { get; }
```

- *Type:* string

---

##### `Behavior`<sup>Required</sup> <a name="Behavior" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.behavior"></a>

```csharp
public string Behavior { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LightsailDistributionDefaultCacheBehavior InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehavior">LightsailDistributionDefaultCacheBehavior</a>

---


### LightsailDistributionOriginOutputReference <a name="LightsailDistributionOriginOutputReference" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailDistributionOriginOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.resetProtocolPolicy">ResetProtocolPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.resetRegionName">ResetRegionName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetProtocolPolicy` <a name="ResetProtocolPolicy" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.resetProtocolPolicy"></a>

```csharp
private void ResetProtocolPolicy()
```

##### `ResetRegionName` <a name="ResetRegionName" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.resetRegionName"></a>

```csharp
private void ResetRegionName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.protocolPolicyInput">ProtocolPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.regionNameInput">RegionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.protocolPolicy">ProtocolPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.regionName">RegionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin">LightsailDistributionOrigin</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProtocolPolicyInput`<sup>Optional</sup> <a name="ProtocolPolicyInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.protocolPolicyInput"></a>

```csharp
public string ProtocolPolicyInput { get; }
```

- *Type:* string

---

##### `RegionNameInput`<sup>Optional</sup> <a name="RegionNameInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.regionNameInput"></a>

```csharp
public string RegionNameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProtocolPolicy`<sup>Required</sup> <a name="ProtocolPolicy" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.protocolPolicy"></a>

```csharp
public string ProtocolPolicy { get; }
```

- *Type:* string

---

##### `RegionName`<sup>Required</sup> <a name="RegionName" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.regionName"></a>

```csharp
public string RegionName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LightsailDistributionOrigin InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin">LightsailDistributionOrigin</a>

---


### LightsailDistributionTagsList <a name="LightsailDistributionTagsList" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailDistributionTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.get"></a>

```csharp
private LightsailDistributionTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags">LightsailDistributionTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.property.internalValue"></a>

```csharp
public IResolvable|LightsailDistributionTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags">LightsailDistributionTags</a>[]

---


### LightsailDistributionTagsOutputReference <a name="LightsailDistributionTagsOutputReference" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailDistributionTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags">LightsailDistributionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LightsailDistributionTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags">LightsailDistributionTags</a>

---



