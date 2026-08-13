# `cloudfrontDistributionTenant` Submodule <a name="`cloudfrontDistributionTenant` Submodule" id="@cdktn/provider-awscc.cloudfrontDistributionTenant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontDistributionTenant <a name="CloudfrontDistributionTenant" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_distribution_tenant awscc_cloudfront_distribution_tenant}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudfrontDistributionTenant(Construct Scope, string Id, CloudfrontDistributionTenantConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig">CloudfrontDistributionTenantConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig">CloudfrontDistributionTenantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putCustomizations">PutCustomizations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putManagedCertificateRequest">PutManagedCertificateRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetConnectionGroupId">ResetConnectionGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetCustomizations">ResetCustomizations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetManagedCertificateRequest">ResetManagedCertificateRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomizations` <a name="PutCustomizations" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putCustomizations"></a>

```csharp
private void PutCustomizations(CloudfrontDistributionTenantCustomizations Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putCustomizations.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations">CloudfrontDistributionTenantCustomizations</a>

---

##### `PutManagedCertificateRequest` <a name="PutManagedCertificateRequest" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putManagedCertificateRequest"></a>

```csharp
private void PutManagedCertificateRequest(CloudfrontDistributionTenantManagedCertificateRequest Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putManagedCertificateRequest.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest">CloudfrontDistributionTenantManagedCertificateRequest</a>

---

##### `PutParameters` <a name="PutParameters" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putParameters"></a>

```csharp
private void PutParameters(IResolvable|CloudfrontDistributionTenantParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameters">CloudfrontDistributionTenantParameters</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putTags"></a>

```csharp
private void PutTags(IResolvable|CloudfrontDistributionTenantTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTags">CloudfrontDistributionTenantTags</a>[]

---

##### `ResetConnectionGroupId` <a name="ResetConnectionGroupId" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetConnectionGroupId"></a>

```csharp
private void ResetConnectionGroupId()
```

##### `ResetCustomizations` <a name="ResetCustomizations" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetCustomizations"></a>

```csharp
private void ResetCustomizations()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetManagedCertificateRequest` <a name="ResetManagedCertificateRequest" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetManagedCertificateRequest"></a>

```csharp
private void ResetManagedCertificateRequest()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudfrontDistributionTenant resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudfrontDistributionTenant.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudfrontDistributionTenant.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudfrontDistributionTenant.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CloudfrontDistributionTenant.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CloudfrontDistributionTenant resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudfrontDistributionTenant to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudfrontDistributionTenant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_distribution_tenant#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CloudfrontDistributionTenant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.createdTime">CreatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.customizations">Customizations</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference">CloudfrontDistributionTenantCustomizationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.distributionTenantId">DistributionTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.domainResults">DomainResults</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList">CloudfrontDistributionTenantDomainResultsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.eTag">ETag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.lastModifiedTime">LastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.managedCertificateRequest">ManagedCertificateRequest</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference">CloudfrontDistributionTenantManagedCertificateRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList">CloudfrontDistributionTenantParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList">CloudfrontDistributionTenantTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.connectionGroupIdInput">ConnectionGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.customizationsInput">CustomizationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations">CloudfrontDistributionTenantCustomizations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.distributionIdInput">DistributionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.domainsInput">DomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.managedCertificateRequestInput">ManagedCertificateRequestInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest">CloudfrontDistributionTenantManagedCertificateRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.parametersInput">ParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameters">CloudfrontDistributionTenantParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTags">CloudfrontDistributionTenantTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.connectionGroupId">ConnectionGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.distributionId">DistributionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.domains">Domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.createdTime"></a>

```csharp
public string CreatedTime { get; }
```

- *Type:* string

---

##### `Customizations`<sup>Required</sup> <a name="Customizations" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.customizations"></a>

```csharp
public CloudfrontDistributionTenantCustomizationsOutputReference Customizations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference">CloudfrontDistributionTenantCustomizationsOutputReference</a>

---

##### `DistributionTenantId`<sup>Required</sup> <a name="DistributionTenantId" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.distributionTenantId"></a>

```csharp
public string DistributionTenantId { get; }
```

- *Type:* string

---

##### `DomainResults`<sup>Required</sup> <a name="DomainResults" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.domainResults"></a>

```csharp
public CloudfrontDistributionTenantDomainResultsList DomainResults { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList">CloudfrontDistributionTenantDomainResultsList</a>

---

##### `ETag`<sup>Required</sup> <a name="ETag" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.eTag"></a>

```csharp
public string ETag { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.lastModifiedTime"></a>

```csharp
public string LastModifiedTime { get; }
```

- *Type:* string

---

##### `ManagedCertificateRequest`<sup>Required</sup> <a name="ManagedCertificateRequest" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.managedCertificateRequest"></a>

```csharp
public CloudfrontDistributionTenantManagedCertificateRequestOutputReference ManagedCertificateRequest { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference">CloudfrontDistributionTenantManagedCertificateRequestOutputReference</a>

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.parameters"></a>

```csharp
public CloudfrontDistributionTenantParametersList Parameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList">CloudfrontDistributionTenantParametersList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.tags"></a>

```csharp
public CloudfrontDistributionTenantTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList">CloudfrontDistributionTenantTagsList</a>

---

##### `ConnectionGroupIdInput`<sup>Optional</sup> <a name="ConnectionGroupIdInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.connectionGroupIdInput"></a>

```csharp
public string ConnectionGroupIdInput { get; }
```

- *Type:* string

---

##### `CustomizationsInput`<sup>Optional</sup> <a name="CustomizationsInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.customizationsInput"></a>

```csharp
public IResolvable|CloudfrontDistributionTenantCustomizations CustomizationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations">CloudfrontDistributionTenantCustomizations</a>

---

##### `DistributionIdInput`<sup>Optional</sup> <a name="DistributionIdInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.distributionIdInput"></a>

```csharp
public string DistributionIdInput { get; }
```

- *Type:* string

---

##### `DomainsInput`<sup>Optional</sup> <a name="DomainsInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.domainsInput"></a>

```csharp
public string[] DomainsInput { get; }
```

- *Type:* string[]

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ManagedCertificateRequestInput`<sup>Optional</sup> <a name="ManagedCertificateRequestInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.managedCertificateRequestInput"></a>

```csharp
public IResolvable|CloudfrontDistributionTenantManagedCertificateRequest ManagedCertificateRequestInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest">CloudfrontDistributionTenantManagedCertificateRequest</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.parametersInput"></a>

```csharp
public IResolvable|CloudfrontDistributionTenantParameters[] ParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameters">CloudfrontDistributionTenantParameters</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.tagsInput"></a>

```csharp
public IResolvable|CloudfrontDistributionTenantTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTags">CloudfrontDistributionTenantTags</a>[]

---

##### `ConnectionGroupId`<sup>Required</sup> <a name="ConnectionGroupId" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.connectionGroupId"></a>

```csharp
public string ConnectionGroupId { get; }
```

- *Type:* string

---

##### `DistributionId`<sup>Required</sup> <a name="DistributionId" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.distributionId"></a>

```csharp
public string DistributionId { get; }
```

- *Type:* string

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.domains"></a>

```csharp
public string[] Domains { get; }
```

- *Type:* string[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontDistributionTenantConfig <a name="CloudfrontDistributionTenantConfig" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudfrontDistributionTenantConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DistributionId,
    string[] Domains,
    string Name,
    string ConnectionGroupId = null,
    CloudfrontDistributionTenantCustomizations Customizations = null,
    bool|IResolvable Enabled = null,
    CloudfrontDistributionTenantManagedCertificateRequest ManagedCertificateRequest = null,
    IResolvable|CloudfrontDistributionTenantParameters[] Parameters = null,
    IResolvable|CloudfrontDistributionTenantTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.distributionId">DistributionId</a></code> | <code>string</code> | The ID of the multi-tenant distribution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.domains">Domains</a></code> | <code>string[]</code> | The domains associated with the distribution tenant. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.name">Name</a></code> | <code>string</code> | The name of the distribution tenant. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.connectionGroupId">ConnectionGroupId</a></code> | <code>string</code> | The ID of the connection group for the distribution tenant. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.customizations">Customizations</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations">CloudfrontDistributionTenantCustomizations</a></code> | Customizations for the distribution tenant. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether the distribution tenant is in an enabled state. If disabled, the distribution tenant won't serve traffic. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.managedCertificateRequest">ManagedCertificateRequest</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest">CloudfrontDistributionTenantManagedCertificateRequest</a></code> | An object that represents the request for the Amazon CloudFront managed ACM certificate. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.parameters">Parameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameters">CloudfrontDistributionTenantParameters</a>[]</code> | A list of parameter values to add to the resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTags">CloudfrontDistributionTenantTags</a>[]</code> | A complex type that contains zero or more ``Tag`` elements. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DistributionId`<sup>Required</sup> <a name="DistributionId" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.distributionId"></a>

```csharp
public string DistributionId { get; set; }
```

- *Type:* string

The ID of the multi-tenant distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_distribution_tenant#distribution_id CloudfrontDistributionTenant#distribution_id}

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.domains"></a>

```csharp
public string[] Domains { get; set; }
```

- *Type:* string[]

The domains associated with the distribution tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_distribution_tenant#domains CloudfrontDistributionTenant#domains}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the distribution tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_distribution_tenant#name CloudfrontDistributionTenant#name}

---

##### `ConnectionGroupId`<sup>Optional</sup> <a name="ConnectionGroupId" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.connectionGroupId"></a>

```csharp
public string ConnectionGroupId { get; set; }
```

- *Type:* string

The ID of the connection group for the distribution tenant.

If you don't specify a connection group, CloudFront uses the default connection group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_distribution_tenant#connection_group_id CloudfrontDistributionTenant#connection_group_id}

---

##### `Customizations`<sup>Optional</sup> <a name="Customizations" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.customizations"></a>

```csharp
public CloudfrontDistributionTenantCustomizations Customizations { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations">CloudfrontDistributionTenantCustomizations</a>

Customizations for the distribution tenant.

For each distribution tenant, you can specify the geographic restrictions, and the Amazon Resource Names (ARNs) for the ACM certificate and WAF web ACL. These are specific values that you can override or disable from the multi-tenant distribution that was used to create the distribution tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_distribution_tenant#customizations CloudfrontDistributionTenant#customizations}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether the distribution tenant is in an enabled state. If disabled, the distribution tenant won't serve traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_distribution_tenant#enabled CloudfrontDistributionTenant#enabled}

---

##### `ManagedCertificateRequest`<sup>Optional</sup> <a name="ManagedCertificateRequest" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.managedCertificateRequest"></a>

```csharp
public CloudfrontDistributionTenantManagedCertificateRequest ManagedCertificateRequest { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest">CloudfrontDistributionTenantManagedCertificateRequest</a>

An object that represents the request for the Amazon CloudFront managed ACM certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_distribution_tenant#managed_certificate_request CloudfrontDistributionTenant#managed_certificate_request}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.parameters"></a>

```csharp
public IResolvable|CloudfrontDistributionTenantParameters[] Parameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameters">CloudfrontDistributionTenantParameters</a>[]

A list of parameter values to add to the resource.

A parameter is specified as a key-value pair. A valid parameter value must exist for any parameter that is marked as required in the multi-tenant distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_distribution_tenant#parameters CloudfrontDistributionTenant#parameters}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.tags"></a>

```csharp
public IResolvable|CloudfrontDistributionTenantTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTags">CloudfrontDistributionTenantTags</a>[]

A complex type that contains zero or more ``Tag`` elements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_distribution_tenant#tags CloudfrontDistributionTenant#tags}

---

### CloudfrontDistributionTenantCustomizations <a name="CloudfrontDistributionTenantCustomizations" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudfrontDistributionTenantCustomizations {
    CloudfrontDistributionTenantCustomizationsCertificate Certificate = null,
    CloudfrontDistributionTenantCustomizationsGeoRestrictions GeoRestrictions = null,
    CloudfrontDistributionTenantCustomizationsWebAcl WebAcl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations.property.certificate">Certificate</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate">CloudfrontDistributionTenantCustomizationsCertificate</a></code> | The ACMlong (ACM) certificate. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations.property.geoRestrictions">GeoRestrictions</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictions">CloudfrontDistributionTenantCustomizationsGeoRestrictions</a></code> | The geographic restrictions. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations.property.webAcl">WebAcl</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl">CloudfrontDistributionTenantCustomizationsWebAcl</a></code> | The WAF web ACL. |

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations.property.certificate"></a>

```csharp
public CloudfrontDistributionTenantCustomizationsCertificate Certificate { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate">CloudfrontDistributionTenantCustomizationsCertificate</a>

The ACMlong (ACM) certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_distribution_tenant#certificate CloudfrontDistributionTenant#certificate}

---

##### `GeoRestrictions`<sup>Optional</sup> <a name="GeoRestrictions" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations.property.geoRestrictions"></a>

```csharp
public CloudfrontDistributionTenantCustomizationsGeoRestrictions GeoRestrictions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictions">CloudfrontDistributionTenantCustomizationsGeoRestrictions</a>

The geographic restrictions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_distribution_tenant#geo_restrictions CloudfrontDistributionTenant#geo_restrictions}

---

##### `WebAcl`<sup>Optional</sup> <a name="WebAcl" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations.property.webAcl"></a>

```csharp
public CloudfrontDistributionTenantCustomizationsWebAcl WebAcl { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl">CloudfrontDistributionTenantCustomizationsWebAcl</a>

The WAF web ACL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_distribution_tenant#web_acl CloudfrontDistributionTenant#web_acl}

---

### CloudfrontDistributionTenantCustomizationsCertificate <a name="CloudfrontDistributionTenantCustomizationsCertificate" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudfrontDistributionTenantCustomizationsCertificate {
    string Arn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate.property.arn">Arn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the ACM certificate. |

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the ACM certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_distribution_tenant#arn CloudfrontDistributionTenant#arn}

---

### CloudfrontDistributionTenantCustomizationsGeoRestrictions <a name="CloudfrontDistributionTenantCustomizationsGeoRestrictions" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudfrontDistributionTenantCustomizationsGeoRestrictions {
    string[] Locations = null,
    string RestrictionType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictions.property.locations">Locations</a></code> | <code>string[]</code> | The locations for geographic restrictions. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictions.property.restrictionType">RestrictionType</a></code> | <code>string</code> | The method that you want to use to restrict distribution of your content by country:   +  ``none``: No geographic restriction is enabled, meaning access to content is not restricted by client geo location. |

---

##### `Locations`<sup>Optional</sup> <a name="Locations" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictions.property.locations"></a>

```csharp
public string[] Locations { get; set; }
```

- *Type:* string[]

The locations for geographic restrictions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_distribution_tenant#locations CloudfrontDistributionTenant#locations}

---

##### `RestrictionType`<sup>Optional</sup> <a name="RestrictionType" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictions.property.restrictionType"></a>

```csharp
public string RestrictionType { get; set; }
```

- *Type:* string

The method that you want to use to restrict distribution of your content by country:   +  ``none``: No geographic restriction is enabled, meaning access to content is not restricted by client geo location.

* `blacklist`: The `Location` elements specify the countries in which you don't want CloudFront to distribute your content.
* `whitelist`: The `Location` elements specify the countries in which you want CloudFront to distribute your content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_distribution_tenant#restriction_type CloudfrontDistributionTenant#restriction_type}

---

### CloudfrontDistributionTenantCustomizationsWebAcl <a name="CloudfrontDistributionTenantCustomizationsWebAcl" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudfrontDistributionTenantCustomizationsWebAcl {
    string Action = null,
    string Arn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl.property.action">Action</a></code> | <code>string</code> | The action for the WAF web ACL customization. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl.property.arn">Arn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the WAF web ACL. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

The action for the WAF web ACL customization.

You can specify `override` to specify a separate WAF web ACL for the distribution tenant. If you specify `disable`, the distribution tenant won't have WAF web ACL protections and won't inherit from the multi-tenant distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_distribution_tenant#action CloudfrontDistributionTenant#action}

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the WAF web ACL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_distribution_tenant#arn CloudfrontDistributionTenant#arn}

---

### CloudfrontDistributionTenantDomainResults <a name="CloudfrontDistributionTenantDomainResults" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResults"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResults.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudfrontDistributionTenantDomainResults {

};
```


### CloudfrontDistributionTenantManagedCertificateRequest <a name="CloudfrontDistributionTenantManagedCertificateRequest" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudfrontDistributionTenantManagedCertificateRequest {
    string CertificateTransparencyLoggingPreference = null,
    string PrimaryDomainName = null,
    string ValidationTokenHost = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest.property.certificateTransparencyLoggingPreference">CertificateTransparencyLoggingPreference</a></code> | <code>string</code> | You can opt out of certificate transparency logging by specifying the ``disabled`` option. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest.property.primaryDomainName">PrimaryDomainName</a></code> | <code>string</code> | The primary domain name associated with the CloudFront managed ACM certificate. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest.property.validationTokenHost">ValidationTokenHost</a></code> | <code>string</code> | Specify how the HTTP validation token will be served when requesting the CloudFront managed ACM certificate. |

---

##### `CertificateTransparencyLoggingPreference`<sup>Optional</sup> <a name="CertificateTransparencyLoggingPreference" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest.property.certificateTransparencyLoggingPreference"></a>

```csharp
public string CertificateTransparencyLoggingPreference { get; set; }
```

- *Type:* string

You can opt out of certificate transparency logging by specifying the ``disabled`` option.

Opt in by specifying `enabled`. For more information, see [Certificate Transparency Logging](https://docs.aws.amazon.com/acm/latest/userguide/acm-concepts.html#concept-transparency) in the *User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_distribution_tenant#certificate_transparency_logging_preference CloudfrontDistributionTenant#certificate_transparency_logging_preference}

---

##### `PrimaryDomainName`<sup>Optional</sup> <a name="PrimaryDomainName" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest.property.primaryDomainName"></a>

```csharp
public string PrimaryDomainName { get; set; }
```

- *Type:* string

The primary domain name associated with the CloudFront managed ACM certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_distribution_tenant#primary_domain_name CloudfrontDistributionTenant#primary_domain_name}

---

##### `ValidationTokenHost`<sup>Optional</sup> <a name="ValidationTokenHost" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest.property.validationTokenHost"></a>

```csharp
public string ValidationTokenHost { get; set; }
```

- *Type:* string

Specify how the HTTP validation token will be served when requesting the CloudFront managed ACM certificate.

* For `cloudfront`, CloudFront will automatically serve the validation token. Choose this mode if you can point the domain's DNS to CloudFront immediately.
* For `self-hosted`, you serve the validation token from your existing infrastructure. Choose this mode when you need to maintain current traffic flow while your certificate is being issued. You can place the validation token at the well-known path on your existing web server, wait for ACM to validate and issue the certificate, and then update your DNS to point to CloudFront.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_distribution_tenant#validation_token_host CloudfrontDistributionTenant#validation_token_host}

---

### CloudfrontDistributionTenantParameters <a name="CloudfrontDistributionTenantParameters" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudfrontDistributionTenantParameters {
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameters.property.name">Name</a></code> | <code>string</code> | The parameter name. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameters.property.value">Value</a></code> | <code>string</code> | The parameter value. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameters.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_distribution_tenant#name CloudfrontDistributionTenant#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameters.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The parameter value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_distribution_tenant#value CloudfrontDistributionTenant#value}

---

### CloudfrontDistributionTenantTags <a name="CloudfrontDistributionTenantTags" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudfrontDistributionTenantTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTags.property.key">Key</a></code> | <code>string</code> | A string that contains ``Tag`` key. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTags.property.value">Value</a></code> | <code>string</code> | A string that contains an optional ``Tag`` value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

A string that contains ``Tag`` key.

The string length should be between 1 and 128 characters. Valid characters include `a-z`, `A-Z`, `0-9`, space, and the special characters ``_ - . : / = +

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

A string that contains an optional ``Tag`` value.

The string length should be between 0 and 256 characters. Valid characters include `a-z`, `A-Z`, `0-9`, space, and the special characters ``_ - . : / = +

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontDistributionTenantCustomizationsCertificateOutputReference <a name="CloudfrontDistributionTenantCustomizationsCertificateOutputReference" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudfrontDistributionTenantCustomizationsCertificateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.resetArn">ResetArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.resetArn"></a>

```csharp
private void ResetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate">CloudfrontDistributionTenantCustomizationsCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudfrontDistributionTenantCustomizationsCertificate InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate">CloudfrontDistributionTenantCustomizationsCertificate</a>

---


### CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference <a name="CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.resetLocations">ResetLocations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.resetRestrictionType">ResetRestrictionType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLocations` <a name="ResetLocations" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.resetLocations"></a>

```csharp
private void ResetLocations()
```

##### `ResetRestrictionType` <a name="ResetRestrictionType" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.resetRestrictionType"></a>

```csharp
private void ResetRestrictionType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.locationsInput">LocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.restrictionTypeInput">RestrictionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.locations">Locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.restrictionType">RestrictionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictions">CloudfrontDistributionTenantCustomizationsGeoRestrictions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocationsInput`<sup>Optional</sup> <a name="LocationsInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.locationsInput"></a>

```csharp
public string[] LocationsInput { get; }
```

- *Type:* string[]

---

##### `RestrictionTypeInput`<sup>Optional</sup> <a name="RestrictionTypeInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.restrictionTypeInput"></a>

```csharp
public string RestrictionTypeInput { get; }
```

- *Type:* string

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.locations"></a>

```csharp
public string[] Locations { get; }
```

- *Type:* string[]

---

##### `RestrictionType`<sup>Required</sup> <a name="RestrictionType" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.restrictionType"></a>

```csharp
public string RestrictionType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudfrontDistributionTenantCustomizationsGeoRestrictions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictions">CloudfrontDistributionTenantCustomizationsGeoRestrictions</a>

---


### CloudfrontDistributionTenantCustomizationsOutputReference <a name="CloudfrontDistributionTenantCustomizationsOutputReference" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudfrontDistributionTenantCustomizationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putCertificate">PutCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putGeoRestrictions">PutGeoRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putWebAcl">PutWebAcl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resetGeoRestrictions">ResetGeoRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resetWebAcl">ResetWebAcl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCertificate` <a name="PutCertificate" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putCertificate"></a>

```csharp
private void PutCertificate(CloudfrontDistributionTenantCustomizationsCertificate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate">CloudfrontDistributionTenantCustomizationsCertificate</a>

---

##### `PutGeoRestrictions` <a name="PutGeoRestrictions" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putGeoRestrictions"></a>

```csharp
private void PutGeoRestrictions(CloudfrontDistributionTenantCustomizationsGeoRestrictions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putGeoRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictions">CloudfrontDistributionTenantCustomizationsGeoRestrictions</a>

---

##### `PutWebAcl` <a name="PutWebAcl" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putWebAcl"></a>

```csharp
private void PutWebAcl(CloudfrontDistributionTenantCustomizationsWebAcl Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putWebAcl.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl">CloudfrontDistributionTenantCustomizationsWebAcl</a>

---

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resetCertificate"></a>

```csharp
private void ResetCertificate()
```

##### `ResetGeoRestrictions` <a name="ResetGeoRestrictions" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resetGeoRestrictions"></a>

```csharp
private void ResetGeoRestrictions()
```

##### `ResetWebAcl` <a name="ResetWebAcl" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resetWebAcl"></a>

```csharp
private void ResetWebAcl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.certificate">Certificate</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference">CloudfrontDistributionTenantCustomizationsCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.geoRestrictions">GeoRestrictions</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference">CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.webAcl">WebAcl</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference">CloudfrontDistributionTenantCustomizationsWebAclOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.certificateInput">CertificateInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate">CloudfrontDistributionTenantCustomizationsCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.geoRestrictionsInput">GeoRestrictionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictions">CloudfrontDistributionTenantCustomizationsGeoRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.webAclInput">WebAclInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl">CloudfrontDistributionTenantCustomizationsWebAcl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations">CloudfrontDistributionTenantCustomizations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.certificate"></a>

```csharp
public CloudfrontDistributionTenantCustomizationsCertificateOutputReference Certificate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference">CloudfrontDistributionTenantCustomizationsCertificateOutputReference</a>

---

##### `GeoRestrictions`<sup>Required</sup> <a name="GeoRestrictions" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.geoRestrictions"></a>

```csharp
public CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference GeoRestrictions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference">CloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference</a>

---

##### `WebAcl`<sup>Required</sup> <a name="WebAcl" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.webAcl"></a>

```csharp
public CloudfrontDistributionTenantCustomizationsWebAclOutputReference WebAcl { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference">CloudfrontDistributionTenantCustomizationsWebAclOutputReference</a>

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.certificateInput"></a>

```csharp
public IResolvable|CloudfrontDistributionTenantCustomizationsCertificate CertificateInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate">CloudfrontDistributionTenantCustomizationsCertificate</a>

---

##### `GeoRestrictionsInput`<sup>Optional</sup> <a name="GeoRestrictionsInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.geoRestrictionsInput"></a>

```csharp
public IResolvable|CloudfrontDistributionTenantCustomizationsGeoRestrictions GeoRestrictionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictions">CloudfrontDistributionTenantCustomizationsGeoRestrictions</a>

---

##### `WebAclInput`<sup>Optional</sup> <a name="WebAclInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.webAclInput"></a>

```csharp
public IResolvable|CloudfrontDistributionTenantCustomizationsWebAcl WebAclInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl">CloudfrontDistributionTenantCustomizationsWebAcl</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudfrontDistributionTenantCustomizations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations">CloudfrontDistributionTenantCustomizations</a>

---


### CloudfrontDistributionTenantCustomizationsWebAclOutputReference <a name="CloudfrontDistributionTenantCustomizationsWebAclOutputReference" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudfrontDistributionTenantCustomizationsWebAclOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.resetArn">ResetArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.resetArn"></a>

```csharp
private void ResetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl">CloudfrontDistributionTenantCustomizationsWebAcl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudfrontDistributionTenantCustomizationsWebAcl InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl">CloudfrontDistributionTenantCustomizationsWebAcl</a>

---


### CloudfrontDistributionTenantDomainResultsList <a name="CloudfrontDistributionTenantDomainResultsList" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudfrontDistributionTenantDomainResultsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.get"></a>

```csharp
private CloudfrontDistributionTenantDomainResultsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CloudfrontDistributionTenantDomainResultsOutputReference <a name="CloudfrontDistributionTenantDomainResultsOutputReference" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudfrontDistributionTenantDomainResultsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResults">CloudfrontDistributionTenantDomainResults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResultsOutputReference.property.internalValue"></a>

```csharp
public CloudfrontDistributionTenantDomainResults InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainResults">CloudfrontDistributionTenantDomainResults</a>

---


### CloudfrontDistributionTenantManagedCertificateRequestOutputReference <a name="CloudfrontDistributionTenantManagedCertificateRequestOutputReference" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudfrontDistributionTenantManagedCertificateRequestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resetCertificateTransparencyLoggingPreference">ResetCertificateTransparencyLoggingPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resetPrimaryDomainName">ResetPrimaryDomainName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resetValidationTokenHost">ResetValidationTokenHost</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateTransparencyLoggingPreference` <a name="ResetCertificateTransparencyLoggingPreference" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resetCertificateTransparencyLoggingPreference"></a>

```csharp
private void ResetCertificateTransparencyLoggingPreference()
```

##### `ResetPrimaryDomainName` <a name="ResetPrimaryDomainName" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resetPrimaryDomainName"></a>

```csharp
private void ResetPrimaryDomainName()
```

##### `ResetValidationTokenHost` <a name="ResetValidationTokenHost" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resetValidationTokenHost"></a>

```csharp
private void ResetValidationTokenHost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.certificateTransparencyLoggingPreferenceInput">CertificateTransparencyLoggingPreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.primaryDomainNameInput">PrimaryDomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.validationTokenHostInput">ValidationTokenHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.certificateTransparencyLoggingPreference">CertificateTransparencyLoggingPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.primaryDomainName">PrimaryDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.validationTokenHost">ValidationTokenHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest">CloudfrontDistributionTenantManagedCertificateRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateTransparencyLoggingPreferenceInput`<sup>Optional</sup> <a name="CertificateTransparencyLoggingPreferenceInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.certificateTransparencyLoggingPreferenceInput"></a>

```csharp
public string CertificateTransparencyLoggingPreferenceInput { get; }
```

- *Type:* string

---

##### `PrimaryDomainNameInput`<sup>Optional</sup> <a name="PrimaryDomainNameInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.primaryDomainNameInput"></a>

```csharp
public string PrimaryDomainNameInput { get; }
```

- *Type:* string

---

##### `ValidationTokenHostInput`<sup>Optional</sup> <a name="ValidationTokenHostInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.validationTokenHostInput"></a>

```csharp
public string ValidationTokenHostInput { get; }
```

- *Type:* string

---

##### `CertificateTransparencyLoggingPreference`<sup>Required</sup> <a name="CertificateTransparencyLoggingPreference" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.certificateTransparencyLoggingPreference"></a>

```csharp
public string CertificateTransparencyLoggingPreference { get; }
```

- *Type:* string

---

##### `PrimaryDomainName`<sup>Required</sup> <a name="PrimaryDomainName" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.primaryDomainName"></a>

```csharp
public string PrimaryDomainName { get; }
```

- *Type:* string

---

##### `ValidationTokenHost`<sup>Required</sup> <a name="ValidationTokenHost" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.validationTokenHost"></a>

```csharp
public string ValidationTokenHost { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudfrontDistributionTenantManagedCertificateRequest InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest">CloudfrontDistributionTenantManagedCertificateRequest</a>

---


### CloudfrontDistributionTenantParametersList <a name="CloudfrontDistributionTenantParametersList" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudfrontDistributionTenantParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.get"></a>

```csharp
private CloudfrontDistributionTenantParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameters">CloudfrontDistributionTenantParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersList.property.internalValue"></a>

```csharp
public IResolvable|CloudfrontDistributionTenantParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameters">CloudfrontDistributionTenantParameters</a>[]

---


### CloudfrontDistributionTenantParametersOutputReference <a name="CloudfrontDistributionTenantParametersOutputReference" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudfrontDistributionTenantParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameters">CloudfrontDistributionTenantParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudfrontDistributionTenantParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameters">CloudfrontDistributionTenantParameters</a>

---


### CloudfrontDistributionTenantTagsList <a name="CloudfrontDistributionTenantTagsList" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudfrontDistributionTenantTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.get"></a>

```csharp
private CloudfrontDistributionTenantTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTags">CloudfrontDistributionTenantTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsList.property.internalValue"></a>

```csharp
public IResolvable|CloudfrontDistributionTenantTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTags">CloudfrontDistributionTenantTags</a>[]

---


### CloudfrontDistributionTenantTagsOutputReference <a name="CloudfrontDistributionTenantTagsOutputReference" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CloudfrontDistributionTenantTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTags">CloudfrontDistributionTenantTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudfrontDistributionTenantTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontDistributionTenant.CloudfrontDistributionTenantTags">CloudfrontDistributionTenantTags</a>

---



