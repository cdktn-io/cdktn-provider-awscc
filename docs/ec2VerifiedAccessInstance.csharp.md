# `ec2VerifiedAccessInstance` Submodule <a name="`ec2VerifiedAccessInstance` Submodule" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2VerifiedAccessInstance <a name="Ec2VerifiedAccessInstance" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance awscc_ec2_verified_access_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessInstance(Construct Scope, string Id, Ec2VerifiedAccessInstanceConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig">Ec2VerifiedAccessInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig">Ec2VerifiedAccessInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.putLoggingConfigurations">PutLoggingConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.putVerifiedAccessTrustProviders">PutVerifiedAccessTrustProviders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetCidrEndpointsCustomSubDomain">ResetCidrEndpointsCustomSubDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetFipsEnabled">ResetFipsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetLoggingConfigurations">ResetLoggingConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetVerifiedAccessTrustProviderIds">ResetVerifiedAccessTrustProviderIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetVerifiedAccessTrustProviders">ResetVerifiedAccessTrustProviders</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLoggingConfigurations` <a name="PutLoggingConfigurations" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.putLoggingConfigurations"></a>

```csharp
private void PutLoggingConfigurations(Ec2VerifiedAccessInstanceLoggingConfigurations Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.putLoggingConfigurations.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations">Ec2VerifiedAccessInstanceLoggingConfigurations</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.putTags"></a>

```csharp
private void PutTags(IResolvable|Ec2VerifiedAccessInstanceTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags">Ec2VerifiedAccessInstanceTags</a>[]

---

##### `PutVerifiedAccessTrustProviders` <a name="PutVerifiedAccessTrustProviders" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.putVerifiedAccessTrustProviders"></a>

```csharp
private void PutVerifiedAccessTrustProviders(IResolvable|Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.putVerifiedAccessTrustProviders.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders">Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders</a>[]

---

##### `ResetCidrEndpointsCustomSubDomain` <a name="ResetCidrEndpointsCustomSubDomain" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetCidrEndpointsCustomSubDomain"></a>

```csharp
private void ResetCidrEndpointsCustomSubDomain()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFipsEnabled` <a name="ResetFipsEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetFipsEnabled"></a>

```csharp
private void ResetFipsEnabled()
```

##### `ResetLoggingConfigurations` <a name="ResetLoggingConfigurations" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetLoggingConfigurations"></a>

```csharp
private void ResetLoggingConfigurations()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVerifiedAccessTrustProviderIds` <a name="ResetVerifiedAccessTrustProviderIds" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetVerifiedAccessTrustProviderIds"></a>

```csharp
private void ResetVerifiedAccessTrustProviderIds()
```

##### `ResetVerifiedAccessTrustProviders` <a name="ResetVerifiedAccessTrustProviders" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.resetVerifiedAccessTrustProviders"></a>

```csharp
private void ResetVerifiedAccessTrustProviders()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2VerifiedAccessInstance resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2VerifiedAccessInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2VerifiedAccessInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2VerifiedAccessInstance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2VerifiedAccessInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Ec2VerifiedAccessInstance resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2VerifiedAccessInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2VerifiedAccessInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Ec2VerifiedAccessInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.cidrEndpointsCustomSubDomainNameServers">CidrEndpointsCustomSubDomainNameServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.loggingConfigurations">LoggingConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference">Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList">Ec2VerifiedAccessInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.verifiedAccessInstanceId">VerifiedAccessInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.verifiedAccessTrustProviders">VerifiedAccessTrustProviders</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList">Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.cidrEndpointsCustomSubDomainInput">CidrEndpointsCustomSubDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.fipsEnabledInput">FipsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.loggingConfigurationsInput">LoggingConfigurationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations">Ec2VerifiedAccessInstanceLoggingConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags">Ec2VerifiedAccessInstanceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.verifiedAccessTrustProviderIdsInput">VerifiedAccessTrustProviderIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.verifiedAccessTrustProvidersInput">VerifiedAccessTrustProvidersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders">Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.cidrEndpointsCustomSubDomain">CidrEndpointsCustomSubDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.fipsEnabled">FipsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.verifiedAccessTrustProviderIds">VerifiedAccessTrustProviderIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CidrEndpointsCustomSubDomainNameServers`<sup>Required</sup> <a name="CidrEndpointsCustomSubDomainNameServers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.cidrEndpointsCustomSubDomainNameServers"></a>

```csharp
public string[] CidrEndpointsCustomSubDomainNameServers { get; }
```

- *Type:* string[]

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.lastUpdatedTime"></a>

```csharp
public string LastUpdatedTime { get; }
```

- *Type:* string

---

##### `LoggingConfigurations`<sup>Required</sup> <a name="LoggingConfigurations" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.loggingConfigurations"></a>

```csharp
public Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference LoggingConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference">Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.tags"></a>

```csharp
public Ec2VerifiedAccessInstanceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList">Ec2VerifiedAccessInstanceTagsList</a>

---

##### `VerifiedAccessInstanceId`<sup>Required</sup> <a name="VerifiedAccessInstanceId" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.verifiedAccessInstanceId"></a>

```csharp
public string VerifiedAccessInstanceId { get; }
```

- *Type:* string

---

##### `VerifiedAccessTrustProviders`<sup>Required</sup> <a name="VerifiedAccessTrustProviders" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.verifiedAccessTrustProviders"></a>

```csharp
public Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList VerifiedAccessTrustProviders { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList">Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList</a>

---

##### `CidrEndpointsCustomSubDomainInput`<sup>Optional</sup> <a name="CidrEndpointsCustomSubDomainInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.cidrEndpointsCustomSubDomainInput"></a>

```csharp
public string CidrEndpointsCustomSubDomainInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FipsEnabledInput`<sup>Optional</sup> <a name="FipsEnabledInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.fipsEnabledInput"></a>

```csharp
public bool|IResolvable FipsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LoggingConfigurationsInput`<sup>Optional</sup> <a name="LoggingConfigurationsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.loggingConfigurationsInput"></a>

```csharp
public IResolvable|Ec2VerifiedAccessInstanceLoggingConfigurations LoggingConfigurationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations">Ec2VerifiedAccessInstanceLoggingConfigurations</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.tagsInput"></a>

```csharp
public IResolvable|Ec2VerifiedAccessInstanceTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags">Ec2VerifiedAccessInstanceTags</a>[]

---

##### `VerifiedAccessTrustProviderIdsInput`<sup>Optional</sup> <a name="VerifiedAccessTrustProviderIdsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.verifiedAccessTrustProviderIdsInput"></a>

```csharp
public string[] VerifiedAccessTrustProviderIdsInput { get; }
```

- *Type:* string[]

---

##### `VerifiedAccessTrustProvidersInput`<sup>Optional</sup> <a name="VerifiedAccessTrustProvidersInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.verifiedAccessTrustProvidersInput"></a>

```csharp
public IResolvable|Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders[] VerifiedAccessTrustProvidersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders">Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders</a>[]

---

##### `CidrEndpointsCustomSubDomain`<sup>Required</sup> <a name="CidrEndpointsCustomSubDomain" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.cidrEndpointsCustomSubDomain"></a>

```csharp
public string CidrEndpointsCustomSubDomain { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FipsEnabled`<sup>Required</sup> <a name="FipsEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.fipsEnabled"></a>

```csharp
public bool|IResolvable FipsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VerifiedAccessTrustProviderIds`<sup>Required</sup> <a name="VerifiedAccessTrustProviderIds" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.verifiedAccessTrustProviderIds"></a>

```csharp
public string[] VerifiedAccessTrustProviderIds { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2VerifiedAccessInstanceConfig <a name="Ec2VerifiedAccessInstanceConfig" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessInstanceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CidrEndpointsCustomSubDomain = null,
    string Description = null,
    bool|IResolvable FipsEnabled = null,
    Ec2VerifiedAccessInstanceLoggingConfigurations LoggingConfigurations = null,
    IResolvable|Ec2VerifiedAccessInstanceTags[] Tags = null,
    string[] VerifiedAccessTrustProviderIds = null,
    IResolvable|Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders[] VerifiedAccessTrustProviders = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.cidrEndpointsCustomSubDomain">CidrEndpointsCustomSubDomain</a></code> | <code>string</code> | Introduce CidrEndpointsCustomSubDomain property to represent the domain (say, ava.my-company.com). |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.description">Description</a></code> | <code>string</code> | A description for the AWS Verified Access instance. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.fipsEnabled">FipsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether FIPS is enabled. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.loggingConfigurations">LoggingConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations">Ec2VerifiedAccessInstanceLoggingConfigurations</a></code> | The configuration options for AWS Verified Access instances. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags">Ec2VerifiedAccessInstanceTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.verifiedAccessTrustProviderIds">VerifiedAccessTrustProviderIds</a></code> | <code>string[]</code> | The IDs of the AWS Verified Access trust providers. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.verifiedAccessTrustProviders">VerifiedAccessTrustProviders</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders">Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders</a>[]</code> | AWS Verified Access trust providers. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CidrEndpointsCustomSubDomain`<sup>Optional</sup> <a name="CidrEndpointsCustomSubDomain" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.cidrEndpointsCustomSubDomain"></a>

```csharp
public string CidrEndpointsCustomSubDomain { get; set; }
```

- *Type:* string

Introduce CidrEndpointsCustomSubDomain property to represent the domain (say, ava.my-company.com).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#cidr_endpoints_custom_sub_domain Ec2VerifiedAccessInstance#cidr_endpoints_custom_sub_domain}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description for the AWS Verified Access instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#description Ec2VerifiedAccessInstance#description}

---

##### `FipsEnabled`<sup>Optional</sup> <a name="FipsEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.fipsEnabled"></a>

```csharp
public bool|IResolvable FipsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether FIPS is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#fips_enabled Ec2VerifiedAccessInstance#fips_enabled}

---

##### `LoggingConfigurations`<sup>Optional</sup> <a name="LoggingConfigurations" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.loggingConfigurations"></a>

```csharp
public Ec2VerifiedAccessInstanceLoggingConfigurations LoggingConfigurations { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations">Ec2VerifiedAccessInstanceLoggingConfigurations</a>

The configuration options for AWS Verified Access instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#logging_configurations Ec2VerifiedAccessInstance#logging_configurations}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.tags"></a>

```csharp
public IResolvable|Ec2VerifiedAccessInstanceTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags">Ec2VerifiedAccessInstanceTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#tags Ec2VerifiedAccessInstance#tags}

---

##### `VerifiedAccessTrustProviderIds`<sup>Optional</sup> <a name="VerifiedAccessTrustProviderIds" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.verifiedAccessTrustProviderIds"></a>

```csharp
public string[] VerifiedAccessTrustProviderIds { get; set; }
```

- *Type:* string[]

The IDs of the AWS Verified Access trust providers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#verified_access_trust_provider_ids Ec2VerifiedAccessInstance#verified_access_trust_provider_ids}

---

##### `VerifiedAccessTrustProviders`<sup>Optional</sup> <a name="VerifiedAccessTrustProviders" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceConfig.property.verifiedAccessTrustProviders"></a>

```csharp
public IResolvable|Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders[] VerifiedAccessTrustProviders { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders">Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders</a>[]

AWS Verified Access trust providers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#verified_access_trust_providers Ec2VerifiedAccessInstance#verified_access_trust_providers}

---

### Ec2VerifiedAccessInstanceLoggingConfigurations <a name="Ec2VerifiedAccessInstanceLoggingConfigurations" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessInstanceLoggingConfigurations {
    Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs CloudwatchLogs = null,
    bool|IResolvable IncludeTrustContext = null,
    Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose KinesisDataFirehose = null,
    string LogVersion = null,
    Ec2VerifiedAccessInstanceLoggingConfigurationsS3 S3 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs">Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs</a></code> | Sends Verified Access logs to CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations.property.includeTrustContext">IncludeTrustContext</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Include claims from trust providers in Verified Access logs. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations.property.kinesisDataFirehose">KinesisDataFirehose</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose">Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose</a></code> | Sends Verified Access logs to Kinesis. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations.property.logVersion">LogVersion</a></code> | <code>string</code> | Select log version for Verified Access logs. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3">Ec2VerifiedAccessInstanceLoggingConfigurationsS3</a></code> | Sends Verified Access logs to Amazon S3. |

---

##### `CloudwatchLogs`<sup>Optional</sup> <a name="CloudwatchLogs" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations.property.cloudwatchLogs"></a>

```csharp
public Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs CloudwatchLogs { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs">Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs</a>

Sends Verified Access logs to CloudWatch Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#cloudwatch_logs Ec2VerifiedAccessInstance#cloudwatch_logs}

---

##### `IncludeTrustContext`<sup>Optional</sup> <a name="IncludeTrustContext" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations.property.includeTrustContext"></a>

```csharp
public bool|IResolvable IncludeTrustContext { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Include claims from trust providers in Verified Access logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#include_trust_context Ec2VerifiedAccessInstance#include_trust_context}

---

##### `KinesisDataFirehose`<sup>Optional</sup> <a name="KinesisDataFirehose" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations.property.kinesisDataFirehose"></a>

```csharp
public Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose KinesisDataFirehose { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose">Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose</a>

Sends Verified Access logs to Kinesis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#kinesis_data_firehose Ec2VerifiedAccessInstance#kinesis_data_firehose}

---

##### `LogVersion`<sup>Optional</sup> <a name="LogVersion" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations.property.logVersion"></a>

```csharp
public string LogVersion { get; set; }
```

- *Type:* string

Select log version for Verified Access logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#log_version Ec2VerifiedAccessInstance#log_version}

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations.property.s3"></a>

```csharp
public Ec2VerifiedAccessInstanceLoggingConfigurationsS3 S3 { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3">Ec2VerifiedAccessInstanceLoggingConfigurationsS3</a>

Sends Verified Access logs to Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#s3 Ec2VerifiedAccessInstance#s3}

---

### Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs <a name="Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs {
    bool|IResolvable Enabled = null,
    string LogGroup = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether logging is enabled. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs.property.logGroup">LogGroup</a></code> | <code>string</code> | The ID of the CloudWatch Logs log group. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether logging is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#enabled Ec2VerifiedAccessInstance#enabled}

---

##### `LogGroup`<sup>Optional</sup> <a name="LogGroup" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs.property.logGroup"></a>

```csharp
public string LogGroup { get; set; }
```

- *Type:* string

The ID of the CloudWatch Logs log group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#log_group Ec2VerifiedAccessInstance#log_group}

---

### Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose <a name="Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose {
    string DeliveryStream = null,
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose.property.deliveryStream">DeliveryStream</a></code> | <code>string</code> | The ID of the delivery stream. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether logging is enabled. |

---

##### `DeliveryStream`<sup>Optional</sup> <a name="DeliveryStream" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose.property.deliveryStream"></a>

```csharp
public string DeliveryStream { get; set; }
```

- *Type:* string

The ID of the delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#delivery_stream Ec2VerifiedAccessInstance#delivery_stream}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether logging is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#enabled Ec2VerifiedAccessInstance#enabled}

---

### Ec2VerifiedAccessInstanceLoggingConfigurationsS3 <a name="Ec2VerifiedAccessInstanceLoggingConfigurationsS3" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessInstanceLoggingConfigurationsS3 {
    string BucketName = null,
    string BucketOwner = null,
    bool|IResolvable Enabled = null,
    string Prefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3.property.bucketName">BucketName</a></code> | <code>string</code> | The bucket name. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3.property.bucketOwner">BucketOwner</a></code> | <code>string</code> | The ID of the AWS account that owns the Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether logging is enabled. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3.property.prefix">Prefix</a></code> | <code>string</code> | The bucket prefix. |

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

The bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#bucket_name Ec2VerifiedAccessInstance#bucket_name}

---

##### `BucketOwner`<sup>Optional</sup> <a name="BucketOwner" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3.property.bucketOwner"></a>

```csharp
public string BucketOwner { get; set; }
```

- *Type:* string

The ID of the AWS account that owns the Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#bucket_owner Ec2VerifiedAccessInstance#bucket_owner}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether logging is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#enabled Ec2VerifiedAccessInstance#enabled}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

The bucket prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#prefix Ec2VerifiedAccessInstance#prefix}

---

### Ec2VerifiedAccessInstanceTags <a name="Ec2VerifiedAccessInstanceTags" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessInstanceTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#key Ec2VerifiedAccessInstance#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#value Ec2VerifiedAccessInstance#value}

---

### Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders <a name="Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders {
    string Description = null,
    string DeviceTrustProviderType = null,
    string TrustProviderType = null,
    string UserTrustProviderType = null,
    string VerifiedAccessTrustProviderId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.property.description">Description</a></code> | <code>string</code> | The description of trust provider. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.property.deviceTrustProviderType">DeviceTrustProviderType</a></code> | <code>string</code> | The type of device-based trust provider. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.property.trustProviderType">TrustProviderType</a></code> | <code>string</code> | The type of trust provider (user- or device-based). |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.property.userTrustProviderType">UserTrustProviderType</a></code> | <code>string</code> | The type of user-based trust provider. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.property.verifiedAccessTrustProviderId">VerifiedAccessTrustProviderId</a></code> | <code>string</code> | The ID of the trust provider. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of trust provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#description Ec2VerifiedAccessInstance#description}

---

##### `DeviceTrustProviderType`<sup>Optional</sup> <a name="DeviceTrustProviderType" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.property.deviceTrustProviderType"></a>

```csharp
public string DeviceTrustProviderType { get; set; }
```

- *Type:* string

The type of device-based trust provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#device_trust_provider_type Ec2VerifiedAccessInstance#device_trust_provider_type}

---

##### `TrustProviderType`<sup>Optional</sup> <a name="TrustProviderType" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.property.trustProviderType"></a>

```csharp
public string TrustProviderType { get; set; }
```

- *Type:* string

The type of trust provider (user- or device-based).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#trust_provider_type Ec2VerifiedAccessInstance#trust_provider_type}

---

##### `UserTrustProviderType`<sup>Optional</sup> <a name="UserTrustProviderType" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.property.userTrustProviderType"></a>

```csharp
public string UserTrustProviderType { get; set; }
```

- *Type:* string

The type of user-based trust provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#user_trust_provider_type Ec2VerifiedAccessInstance#user_trust_provider_type}

---

##### `VerifiedAccessTrustProviderId`<sup>Optional</sup> <a name="VerifiedAccessTrustProviderId" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders.property.verifiedAccessTrustProviderId"></a>

```csharp
public string VerifiedAccessTrustProviderId { get; set; }
```

- *Type:* string

The ID of the trust provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_instance#verified_access_trust_provider_id Ec2VerifiedAccessInstance#verified_access_trust_provider_id}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference <a name="Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.resetLogGroup">ResetLogGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetLogGroup` <a name="ResetLogGroup" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.resetLogGroup"></a>

```csharp
private void ResetLogGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.logGroupInput">LogGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.logGroup">LogGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs">Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LogGroupInput`<sup>Optional</sup> <a name="LogGroupInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.logGroupInput"></a>

```csharp
public string LogGroupInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.logGroup"></a>

```csharp
public string LogGroup { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs">Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs</a>

---


### Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference <a name="Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.resetDeliveryStream">ResetDeliveryStream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeliveryStream` <a name="ResetDeliveryStream" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.resetDeliveryStream"></a>

```csharp
private void ResetDeliveryStream()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.deliveryStreamInput">DeliveryStreamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.deliveryStream">DeliveryStream</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose">Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeliveryStreamInput`<sup>Optional</sup> <a name="DeliveryStreamInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.deliveryStreamInput"></a>

```csharp
public string DeliveryStreamInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeliveryStream`<sup>Required</sup> <a name="DeliveryStream" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.deliveryStream"></a>

```csharp
public string DeliveryStream { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose">Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose</a>

---


### Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference <a name="Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.putCloudwatchLogs">PutCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.putKinesisDataFirehose">PutKinesisDataFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resetCloudwatchLogs">ResetCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resetIncludeTrustContext">ResetIncludeTrustContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resetKinesisDataFirehose">ResetKinesisDataFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resetLogVersion">ResetLogVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resetS3">ResetS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchLogs` <a name="PutCloudwatchLogs" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.putCloudwatchLogs"></a>

```csharp
private void PutCloudwatchLogs(Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs">Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs</a>

---

##### `PutKinesisDataFirehose` <a name="PutKinesisDataFirehose" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.putKinesisDataFirehose"></a>

```csharp
private void PutKinesisDataFirehose(Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.putKinesisDataFirehose.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose">Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose</a>

---

##### `PutS3` <a name="PutS3" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.putS3"></a>

```csharp
private void PutS3(Ec2VerifiedAccessInstanceLoggingConfigurationsS3 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3">Ec2VerifiedAccessInstanceLoggingConfigurationsS3</a>

---

##### `ResetCloudwatchLogs` <a name="ResetCloudwatchLogs" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resetCloudwatchLogs"></a>

```csharp
private void ResetCloudwatchLogs()
```

##### `ResetIncludeTrustContext` <a name="ResetIncludeTrustContext" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resetIncludeTrustContext"></a>

```csharp
private void ResetIncludeTrustContext()
```

##### `ResetKinesisDataFirehose` <a name="ResetKinesisDataFirehose" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resetKinesisDataFirehose"></a>

```csharp
private void ResetKinesisDataFirehose()
```

##### `ResetLogVersion` <a name="ResetLogVersion" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resetLogVersion"></a>

```csharp
private void ResetLogVersion()
```

##### `ResetS3` <a name="ResetS3" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.resetS3"></a>

```csharp
private void ResetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference">Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.kinesisDataFirehose">KinesisDataFirehose</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference">Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference">Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.cloudwatchLogsInput">CloudwatchLogsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs">Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.includeTrustContextInput">IncludeTrustContextInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.kinesisDataFirehoseInput">KinesisDataFirehoseInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose">Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.logVersionInput">LogVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.s3Input">S3Input</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3">Ec2VerifiedAccessInstanceLoggingConfigurationsS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.includeTrustContext">IncludeTrustContext</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.logVersion">LogVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations">Ec2VerifiedAccessInstanceLoggingConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogs`<sup>Required</sup> <a name="CloudwatchLogs" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.cloudwatchLogs"></a>

```csharp
public Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference CloudwatchLogs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference">Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogsOutputReference</a>

---

##### `KinesisDataFirehose`<sup>Required</sup> <a name="KinesisDataFirehose" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.kinesisDataFirehose"></a>

```csharp
public Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference KinesisDataFirehose { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference">Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehoseOutputReference</a>

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.s3"></a>

```csharp
public Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference S3 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference">Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference</a>

---

##### `CloudwatchLogsInput`<sup>Optional</sup> <a name="CloudwatchLogsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.cloudwatchLogsInput"></a>

```csharp
public IResolvable|Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs CloudwatchLogsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs">Ec2VerifiedAccessInstanceLoggingConfigurationsCloudwatchLogs</a>

---

##### `IncludeTrustContextInput`<sup>Optional</sup> <a name="IncludeTrustContextInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.includeTrustContextInput"></a>

```csharp
public bool|IResolvable IncludeTrustContextInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KinesisDataFirehoseInput`<sup>Optional</sup> <a name="KinesisDataFirehoseInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.kinesisDataFirehoseInput"></a>

```csharp
public IResolvable|Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose KinesisDataFirehoseInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose">Ec2VerifiedAccessInstanceLoggingConfigurationsKinesisDataFirehose</a>

---

##### `LogVersionInput`<sup>Optional</sup> <a name="LogVersionInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.logVersionInput"></a>

```csharp
public string LogVersionInput { get; }
```

- *Type:* string

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.s3Input"></a>

```csharp
public IResolvable|Ec2VerifiedAccessInstanceLoggingConfigurationsS3 S3Input { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3">Ec2VerifiedAccessInstanceLoggingConfigurationsS3</a>

---

##### `IncludeTrustContext`<sup>Required</sup> <a name="IncludeTrustContext" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.includeTrustContext"></a>

```csharp
public bool|IResolvable IncludeTrustContext { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LogVersion`<sup>Required</sup> <a name="LogVersion" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.logVersion"></a>

```csharp
public string LogVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2VerifiedAccessInstanceLoggingConfigurations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurations">Ec2VerifiedAccessInstanceLoggingConfigurations</a>

---


### Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference <a name="Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resetBucketOwner">ResetBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resetBucketName"></a>

```csharp
private void ResetBucketName()
```

##### `ResetBucketOwner` <a name="ResetBucketOwner" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resetBucketOwner"></a>

```csharp
private void ResetBucketOwner()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.bucketOwnerInput">BucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.bucketOwner">BucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3">Ec2VerifiedAccessInstanceLoggingConfigurationsS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `BucketOwnerInput`<sup>Optional</sup> <a name="BucketOwnerInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.bucketOwnerInput"></a>

```csharp
public string BucketOwnerInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `BucketOwner`<sup>Required</sup> <a name="BucketOwner" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.bucketOwner"></a>

```csharp
public string BucketOwner { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3OutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2VerifiedAccessInstanceLoggingConfigurationsS3 InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceLoggingConfigurationsS3">Ec2VerifiedAccessInstanceLoggingConfigurationsS3</a>

---


### Ec2VerifiedAccessInstanceTagsList <a name="Ec2VerifiedAccessInstanceTagsList" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessInstanceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.get"></a>

```csharp
private Ec2VerifiedAccessInstanceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags">Ec2VerifiedAccessInstanceTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2VerifiedAccessInstanceTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags">Ec2VerifiedAccessInstanceTags</a>[]

---


### Ec2VerifiedAccessInstanceTagsOutputReference <a name="Ec2VerifiedAccessInstanceTagsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessInstanceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags">Ec2VerifiedAccessInstanceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2VerifiedAccessInstanceTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceTags">Ec2VerifiedAccessInstanceTags</a>

---


### Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList <a name="Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.get"></a>

```csharp
private Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders">Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersList.property.internalValue"></a>

```csharp
public IResolvable|Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders">Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders</a>[]

---


### Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference <a name="Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resetDeviceTrustProviderType">ResetDeviceTrustProviderType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resetTrustProviderType">ResetTrustProviderType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resetUserTrustProviderType">ResetUserTrustProviderType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resetVerifiedAccessTrustProviderId">ResetVerifiedAccessTrustProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDeviceTrustProviderType` <a name="ResetDeviceTrustProviderType" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resetDeviceTrustProviderType"></a>

```csharp
private void ResetDeviceTrustProviderType()
```

##### `ResetTrustProviderType` <a name="ResetTrustProviderType" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resetTrustProviderType"></a>

```csharp
private void ResetTrustProviderType()
```

##### `ResetUserTrustProviderType` <a name="ResetUserTrustProviderType" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resetUserTrustProviderType"></a>

```csharp
private void ResetUserTrustProviderType()
```

##### `ResetVerifiedAccessTrustProviderId` <a name="ResetVerifiedAccessTrustProviderId" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.resetVerifiedAccessTrustProviderId"></a>

```csharp
private void ResetVerifiedAccessTrustProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.deviceTrustProviderTypeInput">DeviceTrustProviderTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.trustProviderTypeInput">TrustProviderTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.userTrustProviderTypeInput">UserTrustProviderTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.verifiedAccessTrustProviderIdInput">VerifiedAccessTrustProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.deviceTrustProviderType">DeviceTrustProviderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.trustProviderType">TrustProviderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.userTrustProviderType">UserTrustProviderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.verifiedAccessTrustProviderId">VerifiedAccessTrustProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders">Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DeviceTrustProviderTypeInput`<sup>Optional</sup> <a name="DeviceTrustProviderTypeInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.deviceTrustProviderTypeInput"></a>

```csharp
public string DeviceTrustProviderTypeInput { get; }
```

- *Type:* string

---

##### `TrustProviderTypeInput`<sup>Optional</sup> <a name="TrustProviderTypeInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.trustProviderTypeInput"></a>

```csharp
public string TrustProviderTypeInput { get; }
```

- *Type:* string

---

##### `UserTrustProviderTypeInput`<sup>Optional</sup> <a name="UserTrustProviderTypeInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.userTrustProviderTypeInput"></a>

```csharp
public string UserTrustProviderTypeInput { get; }
```

- *Type:* string

---

##### `VerifiedAccessTrustProviderIdInput`<sup>Optional</sup> <a name="VerifiedAccessTrustProviderIdInput" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.verifiedAccessTrustProviderIdInput"></a>

```csharp
public string VerifiedAccessTrustProviderIdInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DeviceTrustProviderType`<sup>Required</sup> <a name="DeviceTrustProviderType" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.deviceTrustProviderType"></a>

```csharp
public string DeviceTrustProviderType { get; }
```

- *Type:* string

---

##### `TrustProviderType`<sup>Required</sup> <a name="TrustProviderType" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.trustProviderType"></a>

```csharp
public string TrustProviderType { get; }
```

- *Type:* string

---

##### `UserTrustProviderType`<sup>Required</sup> <a name="UserTrustProviderType" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.userTrustProviderType"></a>

```csharp
public string UserTrustProviderType { get; }
```

- *Type:* string

---

##### `VerifiedAccessTrustProviderId`<sup>Required</sup> <a name="VerifiedAccessTrustProviderId" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.verifiedAccessTrustProviderId"></a>

```csharp
public string VerifiedAccessTrustProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProvidersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VerifiedAccessInstance.Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders">Ec2VerifiedAccessInstanceVerifiedAccessTrustProviders</a>

---



